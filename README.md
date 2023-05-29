# Araucaria

*Araucaria angustifolia*, Brazilian pine (Araucária) is a critically endangered species in the conifer genus Araucaria, occupying an original area of 200,000 km², from the 19th century on it was intensely exploited for its high economic value, providing very useful wood and nutritious seeds, and it has now lost an estimated 97% of its habitat, which according to the International Union for Conservation of Nature and Natural Resources (IUCN) places the Araucaria in Critical Danger of Extinction. It is a evergreen tree growing 50m tall and 2,5m diameter at breast height. Its life spans an **average of 200 to 300 years**, and can reach up to 500 years.

 ![youngerTree.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/AraucariaAngustifoliaYoungParanaPine%28Curitiba2008%29.JPG/360px-AraucariaAngustifoliaYoungParanaPine%28Curitiba2008%29.JPG) | ![fullyDevelopedSpecimen.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Araucaria_augustifolia.jpg/404px-Araucaria_augustifolia.jpg) 
:------------------------------:|:------------------------------:
 *Young specimen* |  *A fully developed specimen in an urban area* 


The tree was chosen as a symbol of Paraná state and gives the name of the city where I live, Curitiba (*curii-tyba, in tupi-guarani *, means "a lot of pine nuts", or "a lot of pine"). Due to species protection laws, the cutting of those trees are prohibited and cutting them is considered an environmental crime and punished with fines. Thoses measures generates a mix of love and hate for Araucarias: 

 > "In the past, the farmer would go to the field throwing pine nuts on the ground. His grandson, nowadays, where he sees araucaria growing, pulls it out, because if he lets it grow he won't be able to cut it. The araucaria, for him, will be a problem of space. Not even in backyards, in the city, are they planted anymore. And any species without renewal, even if it lasts 300 years — and some araucarias reach more than 500 — is doomed to disappear. Every year, 1% of araucarias die naturally. If not there is at least 1% birth rate, it will be extinct".
  
  Even with protective measures, people still cutting this treea down, mainly by the real estate sector. In 2021, an area of more than 5,000 square meters of *A. Angustifolia forest* was cut down by a construction company for the execution of a large-scale real estate project in the Curitiba region.
  
 Most denunciations of illegal cuts are made by the community, the state cannot have full control over illegal cuts, which means that many illegal cuts go unreported and remain unpunished.
 
 Research from the BIOFIX Center for Research in Biomass and Carbon, from the Department of Forestry Sciences at Federal University of Parana – carries out a detailed survey of all the araucarias existing in Curitiba urban area. The trees were georeferenced using Google Earth Pro, identified block by block. So far, 9.876,00 Araucarias have been inventoried, accounting for an average diameter of 38cm, which means that most of them are adults.
 
  
  
## Inspiration

  The idea of this project is to make the population aware of the importance of preserving and cultivating new species of Araucaria, understanding that there is an economic and environmental value in those trees and show the possibilities for ordinary people to enter carbon markets that today are almost exclusive to large companies. People who have Araucaria trees on their land will be rewarded with carbon credits referring to the offset of the Araucaria trees, based on the height, diameter of the trees retroactive carbon offset tokens will be issued to financially compensate landowners that care for and maintain the trees on their land, which will be collected at the first access to the platform. 
  
Every new year a request to a **Chainlink Oracle** will be performed to check the trees states, if the state of trees pass(tree still there) a offset carbon tokens referring to previous year will be available to be claim by landowners.  
  
  When the population benefits and takes part as an agent of the green economy, the topics becomes part of everyday life, it is what fosters an effective transformation. The idea is to change the feeling of "economic loss" for having the tree on your backward, to a new vision about the benefits of having it, taking care of it and planting new trees.
  
  ## Mock-Up
  
 For the model it will be used 15 private land of the Hugo Lange neighborhood in Curitiba, a neighborhood with lots of trees. Allotment data were obtained from <a href="https://geocuritiba.ippuc.org.br/portal/apps/sites/#/geocuritiba"> the GeoCuritiba platform </a>, made available by the Municipality of Curitiba.
 
 
 The focus of this project:
 
  * Mapping the Araucaria Trees per private lands using offchain data.
  * Emit Carbon Token for private land based on total number of trees.
  * The owner of the lands will be predetermined in order to reduce the complexity of this mock-up. For future updates the owner of lands can be determined using the data from GeoCuritiba plataform.

## Calculating the carbon offset of Araucaria angustifolia

This mock-up will use the biomass values from <a href="https://www.scielo.br/j/pat/a/DqMVTCjSkHZmwVd4vgCcFHb/?format=pdf&lang=pt">the paper</a> *SANQUETTA, C. R. et al. **Individual carbon estimation for Araucaria angustifolia.** - e-ISSN 1983-4063 - www.agro.ufg.br/pat - Pesq. Agropec. Trop., Goiânia, v. 44, n. 1, p. 1-8, jan./mar. 2014*

>"For a range of 14 to 31 years in age trees, their diameters ranged from 14.29 cm to 33.39 cm and their heights from 12.72 m to 19.90 m. In individual stock of carbon, the variations were from 25.91 kg to 228.43 kg"

>"Table 1. Descriptive statistics for Diameter at Breast Height (DBH), total height (H), age, Biomass Expansion Factor
(FEB), Root Ratio (R) and individual carbon stock (C), for Araucaria angustifolia Bert. O.
Ktze. Araucariaceae (Iguaçu and General Carneiro Falls, PR, 2003-2004)."![Screenshot 2023-05-28 at 12 36 50.jpg](https://github.com/Fritzhoy/Araucaria/assets/82603176/d53a20b3-b1fe-41b8-ad0c-d11808e7a83f)

>"The simple correlation matrix between the studied variables showed that the one with higher correlation with the total carbon stock individual was DBH, followed by total height and age. These correlations were positive and significant. This means that the larger the size of the trees and older they are, the greater your stock single carbon."

 
 
 ## Architecture
 
 ###  Hybrid Smart Contracts
 
 A hybrid smart contract is an application that consists of two parts: 
 
 
  * smart contract
  * decentralized oracle network
 
