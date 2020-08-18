#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');

const {
    mySymbol,
    addUser
} = require('./index');


program
    .version(chalk.cyanBright('v1.0.0'))
    .description('my-cli')

program
    .command('greet')
    .description('Welcome to my-cli')
    .action(()=>{
        mySymbol();
    })


program.parse(process.argv);