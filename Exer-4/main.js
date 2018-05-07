function sampleArray(arr){
    var store = [],
        storeLow = [],
        storeHigh = [];

      for (var i = 0; i < arr.length; i++) {
          store = arr.sort();
          storeLow = store[1].toString();
          storeHigh = store[store.length-2].toString();
          var res = storeLow.concat(storeHigh);
      }

      return res;

    }
      document.getElementById('output').innerHTML = sampleArray([1,2,3,4,5]);