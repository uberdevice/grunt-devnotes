'use strict';

var semver = require('semver');
var exec = require('child_process').exec;

exports.printMsg = function() {
    console.log("This is a message from the devnotes package");
};
