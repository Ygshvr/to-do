const app = require('express')();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { secretKey } = require('./secrets');
const verifyJWTToken = require('./middlewares/authentication');
const PORT = 3000;
const models = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**
 * Fetch a single task. 
 * @param id - id of the task to be fetched.
 */
app.get('/api/task/:id', verifyJWTToken, (req, res) => {
    
})

/**
 * Fetch all the tasks of the logged in user.
 */
app.get('/api/task', verifyJWTToken, (req, res) => {
    
})

/**
 * Create a new task.
 */
app.post('/api/task', verifyJWTToken, (req, res) => {
    const userInput = {
        title: req.body.title,
        description: req.body.description
    }
    const task = new models.Tasks(userInput)
    task.save()
    .then((task) => {
        res.json(task);
    })
    .catch((err) => {
        if(err.code === 11000){
            return res.status(409).json({message: "task already exist!"})
        }
        res.status(500).json({message:"Unable to save data to db."})
        console.log(err.message)
    })
})

/**
 * Delete a task.
 * @param id - the id of the task to be deleted.
 */
app.delete('/api/task/:id', verifyJWTToken, (req, res) => {

})

app.post('/api/signup', (req, res) => {
    const userInput = {
        name: req.body.name,
        userId: req.body.userId,
        password: req.body.password
    }
    const user = new models.Users(userInput)
    user.save()
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        if(err.code === 11000){
            return res.status(409).json({message: "User already exist!"})
        }
        res.status(500).json({message:"Unable to save data to db."})
        console.log(err.message)
    })
})

app.post('/api/logout', (req, res) => {

})

app.post('/api/login', (req, res) => {
    const userInput = {
        userId: req.body.userId,
        password: req.body.password
    }
    models.Users.findOne({userId:userInput.userId})
    .then((user) => {
        if(!user){
            return res.status(404).json({message:"User not found!"})
        }
        jwt.sign({
            name: user.name,
            userId: user.userId
        }
        , secretKey
        , (err, token) => {
            res.json({
                "token": token
            })
        })
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})

/**
 * Welcome page.
 */
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}.`)
})