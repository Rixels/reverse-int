module.exports = function reverse (n) {
    let string = n.toString();
    let out = '';
    let i;
    for (i = 0; i < string.length; i = i + 1) {
       out = `${string[i]}${out}`;
    }
    return parseInt(out);
  }
