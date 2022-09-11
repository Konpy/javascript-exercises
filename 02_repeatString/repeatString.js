const repeatString = function(string, times) {
    let word = ""
    if (times < 0){return "ERROR"}
    for (let i = 0; i < times; i++)
    {
        word = word + string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
