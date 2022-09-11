const sumAll = function(start,end) {
if ((typeof start !== 'number') || (typeof end !== 'number')){return "ERROR";}
if (start < 0 || end < 0){return "ERROR";}
let sum = 0;

if (start < end){
    const numCount = Math.abs(start - end) + 1;
    const total = ((start+end)*numCount)/2;
    return total;    
    }
else if (end < start)
{
    for (let k = end; k <= start; k--){
        sum += k;
    }
       
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
