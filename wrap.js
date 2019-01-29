const wrap = function (str, num) {
  if (str.length === 0 || str.length < num) return str;
  
  const numOfLines = Math.ceil(str.length / num)
  let finalStr = ''
  for (let i = 0; i < numOfLines; i++) {
    for(let j = 0; j < num; j++) {
      finalStr += str[j]
    }
      finalStr += '\n'
  }
  
  return finalStr.slice(0,-1)
}


module.exports = wrap

