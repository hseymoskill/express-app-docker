const express = require('express');

// app is our web application
const app = express();
const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || '0.0.0.0';

// middleware : function that will run before each method
app.use(express.json());

// home page 
app.get('/', (req,res)=>{
    console.log(`incoming ${req.method} request`);
    res.send('<h1>Welcome to our home page</h1>')
})

// listen on port
app.listen(PORT, HOST, () => {
    console.log(`listening on http://${HOST}:${PORT}`)
})