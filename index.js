require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./Database/Connection');
const Router = require('./Routes/Router');

const server = express();
server.use(cors());
server.use(express.json());
server.use('/Photos', express.static('./Photos'));

server.use(Router);


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
});
