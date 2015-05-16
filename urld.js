#!/usr/bin/env node

var argv = require('yargs').argv;
var urlencode = require('urlencode2');

////

function encoding(toencode) {

  var parts = toencode.split("?");

  if (typeof(parts[1]) == "undefined") {

    console.log(toencode);

  } else {

    var part2encoded = urlencode(parts[1]).replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%23/,"#");
    console.log([parts[0],part2encoded].join("?"));

  }

}

function decoding(todecode) {

    console.log( urlencode.decode(todecode) );

}

////

if (argv.encode) {
    encoding(argv.encode);
}

if (argv.decode) {
    decoding(argv.decode);
}

////

exports.encode = encoding;

exports.decode = decoding;
