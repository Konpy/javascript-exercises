const removeFromArray = function(array, ...args) {
    const indexes = []
    for (let i = 0; i < array.length; i++)
    {
        for (let j = 0; j < args.length; j++)
        {
            if (array[i] === args[j])
            {
                indexes.push(i);
            }
        }
    }
    for (let k = indexes.length - 1; k>=0;k--)
    {
        array.splice(indexes[k],1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
