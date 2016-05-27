module.exports = {
  stringToArray: function(string){
    var results = string.split(' ');
    return(results);
  },

  swapInPlace: function(array, i1, i2){
    var i3 = array[i1];
    array.splice(i1,1,array[i2]);
    array.splice(i2,1,i3);
    return array;
  },

  arrayToString: function(array){
    var results = array.join(', ');
    return results;
  },

  keys: function(object){
    var results =[];
    for (var key in object) {
      results.push(key);
    }
    return results;
  }
};
