#!/usr/bin/env node

var argv = require('yargs').argv;
var urlencode = require('urlencode2');

if (argv.encode) {

    var parts = argv.encode.split("?");

    if (typeof(parts[1]) == "undefined") {

      console.log(argv.encode);

    } else {

      var part2encoded = urlencode(parts[1]).replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%23/,"#");
      console.log([parts[0],part2encoded].join("?"));

    }

}

if (argv.decode) {

    console.log( urlencode.decode(argv.decode) );

}
