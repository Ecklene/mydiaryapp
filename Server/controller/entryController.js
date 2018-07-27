import express from 'express';
import bodyParser from 'body-parser';


 app.post('/', function (req,res,,next) {
	pg.connect (connectionString, function(err, client, done){
		client.query('INSERT INTO addentry {id, title) VALUES (?)', [id, title], 
	   
	     //handling errors
	    function (error, results, fields) => {
	    	if (error) throw error;
		if(err){
			done();
			console.log("not able to get connection" + err);
			return res.status(400).json({unsucceful});
		}
		
		//Sql query
		client.query('SELECT * FROM diarytable ORDER BY id ASC')
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

app.get('/api/vi/entries', function (req,res,,next) {
	pg.connect (connectionString, function(err, client, done) => {
		if(err){
			console.log("not able to get connection" + err);
			res.status(400).send(err);
		}
		client.query('SELECT * FROM addentry')
		done();
		if(err){
			console.log(err);
		    res.status(400).send(err);
		}
		res.status(200)send(entries)
		.json({
			status: 'succesful',
			message: 'bring out all list',
		});	
	});
  });


app.getOne('/', function (req,res,,next) {
	pg.connect (connectionString, function(err, client, done){
		if(err){
			console.log("not able to get connection" + err);
			res.status(400).send(err);
		}
		client.query('SELECT * FROM student where id =$1, [1]', function(err, result))
		done();
		if(err){
			console.log(err);
		    res.status(400).send(err);
		}
		res.status(200).send(entry);
	});
  });


app.put('/', function (req,res,,next) {
	const = result [];
	const id = req.params.entryId;

	const title={title: req.body.title};
	//Get a postgres client 
	pg.connect (connectionString, function(err, client, done) => {
		if(err){
			console.log("not able to get connection" + err);
			res.status(400).send(err);
		}
		client.query('UPDATE addentry, title=($2) WHERE id($1)', [title, id],
		client.query('SELECT * FROM addentry BY id ASC')
        query.on('row', (row) => {
        	results.push(row);
        });

        query.on('end', function(){
        done();	
        return res.status(200).json(results);
        });
		if(err){
			console.log(err);
		    res.status(400).send(err);
		}	
	});
  });


pp.delete('/', function (req,res,,next) => {
	const = result [];
	//get data from URL;
	const id = req.params.entryId;

	//Get a postgres client 
	pg.connect (connectionString, function(err, client, done) => {
		if(err){
			console.log("not able to get connection" + err);
			return res.status(400).json(unsucceful);
		}
		//Sql query
		client.query('DELETE FROM addentry WHERE id=($1)', [id]),
		
		const query = client.query('SELECT * FROM addentry BY id ASC');
        query.on('row', (row) => {
        	results.push(row);
        });

        query.on('end', function(){
        done();	
        return res.status(200).json(results);
        });
		if(err){
			console.log(err);
		    res.status(400).send(err);
		}	
	});
  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on PORT ${port}..`);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on PORT ${port}..`);
});
