# Fullstack-Assessment

## TODO:
- Implement pagination.
- Implement sorting options.
- Fix some scaling in UI. remove some fixed length and widths.

## [Frontend](./frontend)
- Used Angular.
- Used Angular components to delegate design in a hierarchy. 
- Had to later on merge some components due to difficulties in creating dynamic components from unrelated components (far..relatives?)
- Had to use a listener to check if the user last clicked food or electronics to show the filter & sort tab.

## [Backend](./backend)
- Used node.js.
- Public API GET: `/api/products/<product-name>`, where product name is: food, fruits, vegetables, electronics. This is the only routes the frontend currently uses.
- Skeleton functionality for POST, PUT, and DELETE, not fully implemented since it isn't required in the handout.


## Database
- I used MongoDB for my convenience.
- Since I used a non-sql DB, I added all data fields in one collection, since there shouldn't be a benefit in normalizing the data(?). 
- I've also dropped the data related to number of items and just assumed all items are available in unlimited quantity.
- But if were to use a SQL DB, this would be my schema:

  ![image](./schema.png)
