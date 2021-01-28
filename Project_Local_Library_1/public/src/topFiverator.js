// Helper function for mostCommonGenre(), mostPopularBook(), and mostPopularAuthor(),

// returns an array of objects limited to a length 5 or less. [{name: "string", count: num}, ...]

// it is expecting a list of key value pairs as such ['key' : value,
//                                                     'key 2': value2 ...]
    function topFiverator(groups){
        const groupingAmt = 5; // total length for the final array
        let formattedData = [];
        for (key in groups){ 
            formattedData.push({'name' : key, 'count' : groups[key]})
        }
        // after grouping sort according to count
    formattedData.sort((objOne, objTwo) => {    
        return objOne.count > objTwo.count ? -1 : 1;
    });
    
    return formattedData.slice(0, groupingAmt);
}
module.exports = topFiverator;