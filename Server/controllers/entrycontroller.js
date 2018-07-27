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
class EntryController{

    viewAll(req, res) {
	return res.status(200).send(entries);
	}

//to view a single entry
    view(req, res) {
	const entry = entries.map( e => e.id === parseInt(req.params.entryId));
	if (!entry) {
		return res.status(404).send("The Entry with the given ID was not found");
	}
	res.send(entry);
    }

/*
**To post in your entry
*/
    create(req, res) {
	const { error } = validateEntry(req.body);

	if(error){
		return res.status(400).send(error.details[0].message);
	}

	console.log(req.body);
	const entry = {
		id: entries.length + 1,
		title: req.body.title
    }
    entries.push(entry);
	

	es.status(201).send(entry);
	}
   update(req, res) {
   const entry = entries.map(e => e.id === parseInt(req.params.entryId));
   console.log(entry);
   if (!entry) {
    	return res.status(404).send("The Entry with the given ID was not found");
    	}
 	entry.title = req.body.title;
    res.status(200).send(entry);
//     }

//      remove(req, res) {
// 	// look up the id of the particular entry
// 	// if not present, return error 404

// 	const entry = entries.find( e => {
// 			return e.id === parseInt(req.params.entryId)
// 		}
// 	);

// 	if (!entry) {
// 		res.status(404).send("The Entry with the given ID was not found");
// 		return;

// 	// delete the entry
// 	const index = entries.indexOf(entry);
// 	entries.splice(index, 1);

// 	// send the deleted resource back to the client
// 	res.status(200).send(entry);
//   }
};

export default new EntryController();