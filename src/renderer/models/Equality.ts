export function equalsToArray(array1: any[], array2: any[]): boolean {
  if(array1.length != array2.length) {
    return false;
  }
  
  for(var i = 0; i < array1.length; i++) {
    if(!equalsTo(array1[i], array2[i])) {
      return false;
    }
  }
  
  return true;
}

export function equalsTo(obj1: any, obj2: any): boolean {
  if(obj1 instanceof Object) {
    for(var propName in obj1) {
      if(obj1[propName] != obj2[propName]) {
        return false;
      }
    }
  } else {
    return obj1 === obj2;
  }
}