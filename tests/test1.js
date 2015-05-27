var urld = require('../urld.js');

console.log("encoding");
urld.encode("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=<html>");
urld.encode("https://www.google.com/webhp?");
urld.encode("https://www.google.com/webhp");

console.log("decoding");
urld.decode("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=%3Chtml%3E");

console.log("decodingJson");
urld.decodeJson("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&sort=[{%22property%22:%22severity%22,%22direction%22:%22ASC%22}]");