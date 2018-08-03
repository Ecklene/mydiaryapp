import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import Joi from 'joi';
import users from '../models/users'
import entries from '../model/entries'
import db from '../model/database';

function validateEntry(entry) {
	const schema = {
		title: Joi.string().min(5).required()
	};

	return Joi.validate(entry, schema)
}

const viewAll = (req, res) => {
	res.send(entries);
		db.query('SELECT * FROM entries')
		done();
		if(err){
			console.log(err);
		    res.status(400).send(err);
		}
		res.status(200).send(entries)
		.json({
			status: 'succesful',
			message: 'bring out all list',
		});	
  

const view = (req, res) => {
	const entry = entries.find( e => {
			return e.id === parseInt(req.params.entryId)
		});
	db.query('SELECT * FROM users ORDER BY id ASC')
		query.on('end', () => {
		done();
		res.status(200).send(entries)
		.json({
			status: 'succesful',
			message: 'Display a Single Entry list',
		})
		if (!entry) {
			res.status(404).send("The Entry with the given ID was not found");
		}
	}
}

const create = (req, res) => {
	const { error } = validateEntry(req.body);

	if(error){
		res.status(400).send(error.details[0].message);
		return;
    }
    const text = ('INSERT INTO TITLE entries(title) VALUES($1) RETURNING id')
    const values = [user.title]
    db.query(text, values, (err, result) => {
        if (err) {
          console.log(err.stack);
        }

	const entry = {
		title: req.body.title
	}


const update = (req, res) => {
	// Look up the entry
	// If not existing, return error 404
	const entry = entries.find( e => {
			return e.id === parseInt(req.params.entryId)
		});
	if (!entry) {
		res.status(404).send("The Entry with the given ID was not found");
		return;
	}

	// Validate
	// If invalid, return 400 - Bad Request

	const { error } = validateEntry(req.body);

	if(error){
		res.status(400).send(error.details[0].message);
		return;
	}
		db.query('UPDATE entries, title=($2) WHERE id($1)', [title, id],
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
		
	//Update course
	//Return the updated course
	entry.title = req.body.title;
	res.status(200).send(entry);
}
})
export default {
    viewAll,
    view,
    create,
    update,
    remove,
};

// // const remove = (req, res) => {
// // 	// look up the id of the particular entry
// // 	// if not present, return error 404

// // 	const entry = entries.find( e => {
// // 			return e.id === parseInt(req.params.entryId)
// // 		});
// // 	if (!entry) {
// // 		res.status(404).send("The Entry with the given ID was not found");
// // 		return;
// // 	} 

// // 	// delete the entry
// // 	const index = entries.indexOf(entry);
// // 	entries.splice(index, 1);

// // 	// send the deleted resource back to the client
// // 	res.status(200).send(entry);
// // }
// // })
