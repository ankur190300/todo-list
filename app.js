const express = require('express');
const port = 8000;
const app = express();

app.listen(port, function (err) {

    if (err) {
        console.log('error in setting up serve '.err);
        return;
    }
    console.log(`the server is up and running on port: ${port}`);
})