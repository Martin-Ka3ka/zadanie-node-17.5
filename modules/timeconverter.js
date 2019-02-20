function conversionTime(timeS) {
    var hrs, min, sec;
    sec = Math.floor(timeS % 60);
    min = Math.floor((timeS / 60) % 60);
    hrs = Math.floor((timeS / (60 * 60)) % 24);
    return {
        hour: hrs,
        minute: min,
        seconds: sec,
        
    };

}



exports.timeFromSec = conversionTime;