const express = require('express');
const app = express.Router();

const postModel = require('../models/posts');

const CREATED_STATUS = 201;

app
    .get('/', (req, res, next) => {
        postModel.getList()
        .then(posts => res.json({ success: true, errors: [], data: post }))
        .catch(next);
    })
    .get('/wall/:handle', (req, res, next) => {
        postModel.getWall()
        .then(posts => res.json({ success: true, errors: [], data: post }))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        postModel.get(req.params.id)
        .then(posts => res.json({ success: true, errors: [], data: post }))
        .catch(next);

    })
    .post('/', (req, res, next) => {
        postModel.create(req.body)
        .then(posts => res.json({ success: true, errors: [], data: post }))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        postModel.remove(req.params.id)
        .then(posts => res.json({ success: true, errors: [], data: post }))
        .catch(next);
    })
    .patch('/:id', (req, res, next) => {
        postModel.update(req.params.id, req.body )
        .then(posts => res.json({ success: true, errors: [], data: post }))
        .catch(next);
    })



module.exports = app;