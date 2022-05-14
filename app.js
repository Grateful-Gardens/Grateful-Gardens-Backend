import router from ('./routes/postRouter')
import router from('./routes/userRouter')

const express = require('express');

const cors = require('cors'); 

const app = express();

const PORT = 9001; 



app.use(express.json());
app.use(cors())

router.use(postRouter);
router.use(userRouter);


app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`)
});