MY DIARY APP

Available Endpoints

There are Five available endpoints which are working perfectly. These include:

Request:

GET /api/v1/entries -- FETCH ALL ENTRIES.
Expected Output is:

{
id : int,
Title : 'type string',
}

Request:
GET /api/v1/entries/:entryId ---- FETCH A SINGLE ENTRY

Expected Output

{
id : int,
Title : 'type string',
}

Request
POST /api/v1/entries -- CREATE AN ENTRY.

Expected Input

{
Title : 'type string',
}

Request
PUT /api/v1/entries/:entryId ---- UPDATE/MODIFY AN ENTRY

Expected Input
{
id: int,
Title : 'type string',
}

Request
DELETE /api/v1/entries/:entryId ----  DELETE AN ENTRY

Expected Output
---    
This are the values you get from the endpoint when you test it on postman.
