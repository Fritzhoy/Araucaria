const axios = require("axios");
const { Requester, Validator } = require("@chainlink/external-adapter");

const customError = (data) => {
  if (data.Response === "Error") return true;
  return false;
};

const customParams = {
  objectid: ["objectid"],
};

const createRequest = async (input, callback) => {
  const validator = new Validator(callback, input, customParams);
  if (validator.error) {
    return callback(validator.error.statusCode, validator.error);
  }
  const jobRunID = validator.validated.id;
  const endpoint =
    "https://geocuritiba.ippuc.org.br/server/rest/services/GeoCuritiba/Publico_Interno_GeoCuritiba_BaseCartografica_para_MC/MapServer/56/query";
  const whereClause = "descricao = 'Mata Nativa com Araucária'";
  const returnGeometry = false;
  const outFields = "*";
  const format = "pjson";
  const objectid = validator.validated.data.objectid;

  const url = `${endpoint}?where=${encodeURIComponent(
    whereClause
  )}&&returnGeometry=${returnGeometry}&outFields=${outFields}&f=${encodeURIComponent(
    format
  )}`;

  try {
    const response = await axios.get(url);
    const features = response.data.features;
    console.log(features);
    const feature = features.find(
      (item) => item.attributes.objectid === objectid
    );
    if (feature) {
      const areaHectares = feature.attributes.area_hectares;
      const result = Requester.success("200", {
        data: {
          areaHectares: areaHectares,
        },
      });
      callback(result.statusCode, result);
    } else {
      const error = Requester.errored(
        "404",
        `Object ID ${objectId} not found.`
      );
      callback(error.statusCode, error);
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    const errorResponse = Requester.errored("500", errorMessage);
    callback(errorResponse.statusCode, errorResponse);
  }
};
exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data);
  });
};

// This is a wrapper to allow the function to work with
// AWS Lambda
exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data);
  });
};

// This is a wrapper to allow the function to work with
// newer AWS Lambda implementations
exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false,
    });
  });
};

module.exports.createRequest = createRequest;
