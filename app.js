const http = require('http');      
const server = http.createServer();     
const express = require('express');
let app = express()
 



server.listen(8000, () => {
    console.log('Server running on port 8000') 
})