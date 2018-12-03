function accum(str) {
  var newArr = []
  str = str.split('');
  newArr.push(str[0].toUpperCase());
  for (var i = 1; i < str.length; i+=1){
    let upper = str[i].toUpperCase();
    newArr.push(upper + str[i].toLowerCase().repeat(i) );
  }
  return newArr.join(' ');
}

module.exports = accum;
