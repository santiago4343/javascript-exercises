const removeFromArray = function(arr, ...remFromArray) {
    let filteredArr = remFromArray.map(el => {
        arr.filter(el1 => {
            el1 == el
        })
    })
    return filteredArr
};

// Do not edit below this line
module.exports = removeFromArray;
