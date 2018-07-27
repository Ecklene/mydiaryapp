import express from 'express';
import bodyParser from 'body-parser';

   app.post('/', function (req,res,,next) {
	pg.connect (connectionString, function(err, client, done){
		client.query('INSERT INTO signup {name, username, email, password) VALUES (?,?,?,?)', [name, username, email, password], 
	   
	     //handling errors
	    function (error, results, fields) => {
	    	if (error) throw error;
		if(err){
			done();
			console.log("not able to get connection" + err);
			return res.status(400).json({unsucceful});
		}
		
		//Sql query
		client.query('SELECT * FROM signup ORDER BY id ASC')
		query.on('end', () => {
		done();
		res.status(200)send(entries)
		.json({
			status: 'succesful',
			message: 'have all list',
		})
		if(err){
			console.log(err);
		    res.status(400).send(err);
		}
		
		});	
	});
  });

app.post('/', function (req,res,,next) {
	pg.connect (connectionString, function(err, client, done){
		client.query('INSERT INTO adduser {username, password) VALUES (?,?)', [username, password], 
	   
	     //handling errors
	    function (error, results, fields) => {
	    	if (error) throw error;
		if(err){
			done();
			console.log("not able to get connection" + err);
			return res.status(400).json({unsucceful});
		}
		
		//Sql query
		client.query('SELECT * FROM adduser ORDER BY id')
		query.on('end', () => {
		done();
		res.status(200)send(entries)
		.json({
			status: 'succesful',
			message: 'have all list',
		})
		if(err){
			console.log(err);
		    res.status(400).send(err);
		}
		
		});	
	});
  });


 export default router new entry();


  

