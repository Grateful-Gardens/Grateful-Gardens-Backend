require('dotenv').config()
const postRouter = require('./routes/postRouter')
const userRouter = require('./routes/userRouter')
const chatRouter = require('./routes/chatRouter')

const express = require('express');

const cors = require('cors'); 

const app = express();

const PORT = 9001; 


app.use(express.json());
app.use(cors())

app.use(postRouter);
app.use(userRouter);
app.use(chatRouter)


app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`)
});