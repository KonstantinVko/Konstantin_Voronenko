const express = require('express');
const  config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 3000;

async function start() {
    try {
      await mongoose.connect()
    }
    catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

app.listen(PORT, () => console.log('server works...'));