const app = require('express')();
const PORT = 3000;


/**
 * Fetch a single task. 
 * @param id - id of the task to be fetched.
 */
app.get('/api/task/:id', (req, res) => {
    
})

/**
 * Fetch all the tasks of the logged in user.
 */
app.get('/api/task', (req, res) => {
    
})

/**
 * Create a new task.
 */
app.post('/api/task', (req, res) => {
    
})

/**
 * Delete a task.
 * @param id - the id of the task to be deleted.
 */
app.delete('/api/task/:id', (req, res) => {

})

app.post('/api/logout', (req, res) => {

})

app.post('/api/login', (req, res) => {

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