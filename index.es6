import {curry2} from 'fj-curry';

let filter = (fn, list) => {
    let index = -1, 
      listLen = list.length, 
      result = [];
      
    while (++index < listLen) {
        if (fn(list[index])) {
            result[result.length] = list[index];
        }
    }
    
    return result;
};

export default curry2(filter);
