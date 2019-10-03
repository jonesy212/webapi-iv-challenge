const express = require('express')

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({hello: 'Node 22'})
});

//for heroku we need a dynamic port
//We can read the PORT value
//added by heroku to the env
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\napi running on ${port}\n`))