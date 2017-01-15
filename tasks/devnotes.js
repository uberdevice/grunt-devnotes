'use strict';

var semver = require('semver');
var exec = require('child_process').exec;

exports.printMsg = function() {
    console.log("This is a message from the devnotes package");
};

exports.updateDevNotes = function() {
    exec('echo blah', function(err, stdout) => {
        if (err) {
            grunt.fatal('Can not get module information. ${err}')
            return err;
        } else {
            console.log(stdout + err);
            return stdout;
        };

    });
};
