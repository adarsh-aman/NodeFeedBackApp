const express = require('express');
const app = express();



const PORT = process.engines.PORT || w00
//handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(5000); //http://localhost:5000/