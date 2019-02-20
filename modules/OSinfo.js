var os = require('os');
var colors = require('colors');
var time = require('./timeconverter');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var timeInfo = time.timeFromSec(uptime);
    var userInfo = os.userInfo();
    console.log('System:'.red, type);
    console.log('Release:'.yellow, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: '.bgGreen, timeInfo.hour + 'hrs : ', timeInfo.minute + 'min : ' + timeInfo.seconds + 'sec');
    console.log('User name:'.cyan, userInfo.username);
    console.log('Home dir:'.magenta, userInfo.homedir);
}

exports.print = getOSinfo;