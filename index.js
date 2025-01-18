// Importing required libraries
const cron = require("node-cron");
const express = require("express");
const https = require('https');

app = express(); // Initializing app
const backendUrl = 'https://flights-api-u61t.onrender.com/';
// Creating a cron job which runs on every 10 second
cron.schedule("*/12 * * * *", function() {
    console.log('Restarting server');
    https.get(backendUrl, (res) => {
        if(res.statusCode == 200) {
            console.log('Server restarted');
        } else {
            console.error(`failed to restart server with status code: ${res.statusCode}`);
        }
    }).on('error', (e) => {
        console.error(`failed to restart server with error: ${e.message}`);
    });
});

app.listen(3000);