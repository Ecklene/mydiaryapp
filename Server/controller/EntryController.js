import express from 'express';
import bodyParser from 'body-parser';
import Joi from 'joi';
import helper from '../helpers/helper.js';
import dummydata from '../model/dummydata.js';

class EntryController {
  viewll(req, res) {
    res.send(entries);
  }

  view(req, res) {
    const entry = entries.find((e) => e.id === parseInt(req.params.entryId));
    if (!entry) {
      res.status(404).send("The Entry with the given ID was not found");
      return;
    }
    res.send(entry);
  }

  create(req, res) {
    const {
      error,
    } = validateEntry(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    console.log(req.body);
    const entry = {
      id: entries.length + 1,
      title: req.body.title,
    };

    entries.push(entry);
    res.status(201).send(entry);
  }

  update(req, res) {
    // Look up the entry
    // If not existing, return error 404
    const entry = entries.find((e) => e.id === parseInt(req.params.entryId));
    if (!entry) {
      res.status(404).send("The Entry with the given ID was not found");
      return;
    }

    // Validate
    // If invalid, return 400 - Bad Request

    const {
      error,
    } = validateEntry(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    // Update course
    // Return the updated course
    entry.title = req.body.title;
    res.status(200).send(entry);
  }

  remove(req, res) {
    // look up the id of the particular entry
    // if not present, return error 404

    const entry = entries.find((e) => e.id === parseInt(req.params.entryId));
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
  // closing tab
}

export default new EntryController();