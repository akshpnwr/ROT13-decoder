function rot13(str) {
  const code = new Map();
  let asc = 65;
  for (let i = 1; i <= 26; i++) {
    code.set(String.fromCharCode(asc), i);
    asc++;
  }

  let newStr = "";
  asc = 64;
  for (let i in str) {
    const charCode = code.get(str[i]);
    if (!charCode) newStr += str[i];

    if (charCode <= 13) {
      newStr += String.fromCharCode(asc + charCode + 13);
    }
    if (charCode > 13) {
      newStr += String.fromCharCode(asc + charCode - 13);
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
