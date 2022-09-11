const leapYears = function(year) {
    if (year % 400 == 0 && String(year).slice(-2)=="00"){
        return true;
    }
    if (year % 4 == 0  && String(year).slice(-2)!="00"){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
