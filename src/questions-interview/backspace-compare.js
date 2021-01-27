
function buildString (string) {
  let countTags = 0;
  let finalString = "";

  for (let p = string.length - 1; p >= 0; p--) {
    if (string[p] === "#") {
      countTags++;
    } else {
      if (countTags > 0) {
        countTags--;
      } else {
        finalString = string[p] + finalString;
      }
    }
  }

  return finalString;
}

function backspaceCompare (S, T) {
  S = buildString(S)
  T = buildString(T)

  return S === T
}

console.log(backspaceCompare('aa#bb#cc#', 'abcd'))
