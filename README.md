Available Endpoints and Expected Output
---    
These endpoints allows you to test your endpoints in postman and get the expected output

To get started, the following steps should be considered:




-Available Endpoints to test and expected output to receive.









Requirements need to run this endpoints



-Postman: To install postman, google it on chrome and add it as an extention to your chrome browser.



-web browser: install google chrome








Testing Endpoints


These test test for getting  all entries of users thoughts, getting a particular entry of user thought, createing entries for users, updating entries for users and deleting entries for user. There are Five available endpoints, these include:



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





Available Coding style tests




-Javascript writen in ES6 is used to write the endpoints.



Deployement



-Heroku is used for hosting either through the website or downloading Heroku.







Versioning



-v1 version was used.









Author: Motunrayo Akinsete



Licence


ISC




Acknowledgement





Thanks to LFA for the being patient and other corrections.



Available resourse that guided me in creating endpoints



My Team Members who assisted in anyway.


