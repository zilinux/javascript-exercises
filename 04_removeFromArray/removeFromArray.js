const removeFromArray = function(array, ...params) {
    return array.filter((num) => {
        return !params.includes(num);
    });
};


// Do not edit below this line
module.exports = removeFromArray;
