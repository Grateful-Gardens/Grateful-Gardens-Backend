const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 9001; app.use(express.json());
app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`)
});