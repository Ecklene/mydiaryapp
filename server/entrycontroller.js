import express from 'express';
import bodyParser from 'body-parser';
import Joi from 'joi';

const entries = [
{ id: 1, title: 'Travelling, I have been dreaming of travelling for a very long time.'},
{ id: 2, title: 'Cooking is one of my best hobby. when i am stressed or need a liitle boost, i simply cook.'},
{ id: 3, title: 'How to win and influence people by Dale Carnigie is one of the best book i have ever read.'},
];

function validateEntry(entry) {
	const schema = {
		title: Joi.string().min(5).required()
	};

	return Joi.validate(entry, schema)
}

//to view all entries
const viewAll = (req, res) => {
	res.send(entries);
};

//to view a single entry
const view = (req, res) => {
	const entry = entries.find( e => {
			return e.id === parseInt(req.params.entryId)
		}
	);
	if (!entry) {
		res.status(404).send("The Entry with the given ID was not found");
		return;
	}
	res.send(entry);
};
/*
**To post in your entry
*/

const create = (req, res) => {
	const { error } = validateEntry(req.body);

	if(error){
		res.status(400).send(error.details[0].message);
		return;
	}

	console.log(req.body);
	const entry = {
		id: entries.length + 1,
		title: req.body.title
	}

	entries.push(entry);
	res.status(201).send(entry);
};

//To modify your entry
const update = (req, res) => {
	// Look up the entry
	// If not existing, return error 404
	const entry = entries.find( e => {
			return e.id === parseInt(req.params.entryId)
		}
	);
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

	//Update course
	//Return the updated course
	entry.title = req.body.title;
	res.status(200).send(entry);
}

const remove = (req, res) => {
	// look up the id of the particular entry
	// if not present, return error 404

	const entry = entries.find( e => {
			return e.id === parseInt(req.params.entryId)
		}
	);
	if (!entry) {
		res.status(404).send("The Entry with the given ID was not found");
		return;
	} 

	// delete the entry
	const index = entries.indexOf(entry);
	entries.splice(index, 1);

	// send the deleted resource back to the client
	res.status(200).send(entry);
}

module.exports = {
    viewAll,
    view,
    create,
    update,
    remove,
};