MY DIARY APP

Available Endpoints

There are Five available endpoints which are working perfectly. These include:



GET /api/v1/entries -- FETCH ALL ENTRIES.



GET /api/v1/entries/:entryId ---- FETCH A SINGLE ENTRY



POST /api/v1/entries -- CREATE AN ENTRY.



PUT /api/v1/entries/:entryId ---- UPDATE/MODIFY AN ENTRY



DELETE /api/v1/entries/:entryId ----  DELETE AN ENTRY

These endpoints expects the following values
For example: when you run the GET /api/v1/entries -- FETCH ALL ENTRIES.
you get this result.




 [
{
        "id": 1,
        "title": "Travelling, I have been dreaming of travelling for a very long time."
    },
    {
        "id": 2,
        "title": "Cooking is one of my best hobby. when i am stressed or need a liitle boost, i simply cook."
    },
    {
        "id": 3,
        "title": "How to win and influence people by Dale Carnigie is one of the best book i have ever read."
    }
]


when you run the GET /api/v1/entries/:entryId A SINGLE ENTRY, you get this:
 {
        "id": 2,
        "title": "Cooking is one of my best hobby. when i am stressed or need a liitle boost, i simply cook."
    }
    
when you post an entry - POST /api/v1/entries -- CREATE AN ENTRY. you are adding a new title that automatically generates an Id for you.
 {
        "title": "How to win and influence people by Dale Carnigie is one of the best book i have ever read."
    }

when you run an update entry Id --- 

PUT /api/v1/entries/:entryId, This is what you get.
//change best to favourite
PUT /api/v1/entries/2
 {
        "title": "Cooking is one of my favourite when i am stressed or need a little boost, i simply cook."
    }
    
 THEN YOU HAVE 
  {
        "id": 2,
        "title": "Cooking is one of my fvourite hobby. when i am stressed or need a little boost, i simply cook.
    }

DELETE /api/v1/entries/:entryId ----  DELETE AN ENTRY
/api/v1/entries/2: This entry is been deleted.

 {
        "id": 2,
        "title": "Cooking is one of my Favourite hobby. when i am stressed or need a little boost, i simply cook.
    }
    
    
  This are the values you get from the endpoint when you test it on postman.
