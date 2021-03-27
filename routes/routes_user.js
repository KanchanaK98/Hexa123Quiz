const router = require("express").Router();
const user = require("../modules/module_user");

router.route("/add").post((req, res) =>{
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new user({
        email, 
        username,
        password
    })
        
    newUser.save().then(()=>{
        res.json("student added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req, res) =>{
    user.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})




router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;
    await user.findById(userID).then((user) => {
        res.status(200).send({status : "user fetched", user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status : "error with get user", error: err.message});
    })
})


module.exports = router;