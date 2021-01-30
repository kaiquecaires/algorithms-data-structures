const testCases = [
  '',
  'a',
  'abc',
  'aabaa',
  'aabbaa',
  'A man, a plan, a canal: Panama',
];

const isValidPalindromeOutside = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  if (s.length <= 1) return true;

  let left = 0, right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const isPair = function (num) {
  return (num % 2) === 0
} 

const isValidPalindromeCenter = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const length = s.length;

  if (length <= 1) return true;

  let middle = (length - 1) / 2;
  let left = 0, right = 0;

  if (isPair(length - 1)) {
    left = middle, right = middle;
  } else {
    left = Math.floor(middle), right = Math.round(middle);
  }


  while (left >= 0 && right < length) {
    if (s[left] !== s[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
}

const reverseString = function (s) {
  let reverse = '';

  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }

  return reverse;
}

const isValidPalindromeReverse = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (s.length <= 1) return true;

  if (s === reverseString(s)) {
    return true;
  } else {
    return false;
  }
}

for (const test of testCases) {
  console.log(isValidPalindromeReverse(test))
}
