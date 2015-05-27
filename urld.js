#!/usr/bin/env node

var argv = require('yargs').argv;
var urlencode = require('urlencode2');
var isJSON = require('is-json');

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

function decodingJson(todecode) {

    var decoded = urlencode.decode(todecode);

    console.log( decoded );

    var decoded2 = decoded.split("?");

    if (typeof (decoded2[1]) == "undefined")  return; 

    var paramsJson = {};

    var params = decoded2[1].split("&");
    for (var pIndex in params) {
      
      var paramCouple = params[pIndex].split("=");

      if (isJSON(paramCouple[1])) {
        paramsJson[paramCouple[0]] = JSON.parse(paramCouple[1]);
      } else {
        paramsJson[paramCouple[0]] = paramCouple[1];
      }

    }

    console.log(JSON.stringify(paramsJson, null, 4));
}

////

if (argv.encode || argv.e) {
  var encode = (argv.encode) ? argv.encode : argv.e;
  encoding(encode);
}

if (argv.decode || argv.d) {
  var decode = (argv.decode) ? argv.decode : argv.d;
  decoding(decode);
}

if (argv.decodejson || argv.j) {
  var decodejson = (argv.decodejson) ? argv.decodejson : argv.j;
  decodingJson(decodejson);
}

////

exports.encode = encoding;

exports.decode = decoding;

exports.decodeJson = decodingJson;

