import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Serving on port 3000");
})