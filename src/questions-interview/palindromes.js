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

for (const test of testCases) {
  console.log(isValidPalindromeOutside(test));
}
