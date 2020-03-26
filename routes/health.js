const path = require('path');

const express = require('express');

const os = require('os');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/', (req, res, next) => {
    res.status(200).json({
        "message": `server is up and running`,
        "app": {
            "uptime": process.uptime(),
            "os": os.hostname()
        }
        
    });
});

module.exports = router;
