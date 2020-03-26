const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => POST
router.post('/', (req, res, next) => {
    let {userName, password} = req.body;
    console.log(userName);
    console.log(password);

    res.status(200).json({
        "userName": userName,
        "password": password
    });
});

module.exports = router;
