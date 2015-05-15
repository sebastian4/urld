#!/usr/bin/env node

var argv = require('yargs').argv;
 
if (argv.encode) {
    console.log('encoding '+argv.encode);
}

if (argv.decode) {
    console.log('decoding '+argv.decode);
}
