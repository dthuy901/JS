function count(items, func){
    let result = [{name: false, count: 0}, {name: true, count: 0}];
    for(let item of items){
      let type = func(item);
      let index = result.findIndex( obj => obj.name == type);
      if(index != -1)
          result[index].count++;
    }
    return result;
}
console.log(count([1, 2, 3, 4, 5, 6], n => n > 3));

