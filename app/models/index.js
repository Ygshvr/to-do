const mongoose = require('mongoose');
// connect mongoose to the db.

mongoose.connect("mongodb://127.0.0.1:27017/todo", { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if(err) {
        console.log('Error connecting to the database.');
        process.exit(1);
    }
    console.log('Successfully connected to the database.');
})

const Users = require('./users');
const Tasks = require('./tasks');
module.exports = {
    Users,
    Tasks
}