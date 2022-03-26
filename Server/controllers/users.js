const express = require('express');
const app = express.Router();

const userModel = require('../models/user');
//import to make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(userModel.list);
    })
    .get('/:id', (req, res) => {

        const user = userModel.get(req.params.id);
        res.send(user);

    })
    .post('/', (req, res) => {
        const user = userModel.create(req.body);
        res.status(CREATED_STATUS).send(user);
    })

module.exports = app;