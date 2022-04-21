const express = require('express');
const app = express.Router();

const { requireAuth } = require('../models/auth');

const userModel = require('../models/users');
//import to make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    .get('/', requireAuth, (req, res, next) => {
        userModel.getList()
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    .get('/handle/:handle', (req, res, next) => {
        userModel.getByHandle(req.params.handle)
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    .get('/:id', (req, res, next) => {

        userModel.get(req.params.id)
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        userModel.create(req.body)
        .then(users=> {
            res.send({ success: true, errors: [], data: users }); 
        })
        .catch(next);
    })
    .delete('/:id', requireAuth, (req, res, next) => {
        userModel.remove(req.params.id)
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    .patch('/:id', (req, res, next) => {
        userModel.update(req.params.id, req.body )
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    .post('/login', (req, res, next) => {
        userModel.login(req.body.email, req.body.password)
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    .post('/seed', (req, res, next) => {
        userModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })

module.exports = app;