const express = require('express');
const app = express.Router();

const userModel = require('../models/users');
//import to make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(userModel.list);
    })
    .get('/:id', (req,res) => {

        const user = userModel.get(req.params.id);
        res.send(user);

    })
    .post('/', (req, res, next) => {
        userModel.create(req.body)
        .then(user=> {
            res.status(CREATED_STATUS).send(user); 
        })
        .catch(next);
    })
    .delete('/:id', (req, res)=>{
        const user = userModel.remove(req.params.id);
        res.send({ success: true, errors: [], data: user });
    })
    .patch('/:id', (req, res, next) => {
        userModel.update(req.params.id, req.body ) 
        .then(user=> {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })

module.exports = app;