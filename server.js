const express = require('express');
const app = express();
/*const path = require('path');


//new
app.use(express.static(path.join(__dirname, 'build')));
app.get('./api', (req, res) => {
    res.json({
        message: 'This is api endpoint'
    })
})*/
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
//new

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require("./routes/routes_user.js");
const { static } = require('express');

PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.once("open", () => {
    console.log("Connection success...!");
}).on("error", (error) => {
    console.log("connection error:", error);
})

app.listen(PORT, () => {
    console.log("server is up and running on port number:", { PORT });
})



app.use("/api", userRouter);











