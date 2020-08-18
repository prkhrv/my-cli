const mongoose = require('mongoose');
const chalk = require('chalk');
const figlet = require('figlet');



// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const dbConfig = require('./config/database.config.js');
// Connecting to the database 
const db = mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    // console.log(chalk.green('Mongo DB connection successfully'));
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


//model
const user = require('./models/user');


//my symbol
const mySymbol = ()=> {
    console.info(chalk.yellowBright(figlet.textSync('prkhrv')));
    mongoose.connection.close();

    

}

//add User
const addUser = (user) => {
    user.create(user).then((user) => {
        console.info('User created');
        mongoose.connection.close();
    });
}


module.exports = {
    mySymbol,
    addUser
}