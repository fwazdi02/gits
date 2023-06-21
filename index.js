/************************
1. Weighted String with Queries
************************/

const checkWeightedStringQueries = (input, queries = []) => {
  const str = input.replaceAll(' ', '').toLowerCase();
  const groupArr = groupCharacters(str);
  const resultArr = groupArr.map((single, index) => {
    queryVal = queries[index];
    const val = weightedString(single);
    if (val === queryVal) {
      return 'Yes';
    }
    return 'No';
  });
  return resultArr;
};

const groupCharacters = (input) => {
  const result = [];
  let currentGroup = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      currentGroup += input[i];
    } else {
      if (currentGroup !== '') {
        result.push(currentGroup);
      }
      currentGroup = input[i];
    }
  }
  if (currentGroup !== '') {
    result.push(currentGroup);
  }
  return result;
};

const weightedString = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const str = input.toLowerCase();
  let weight = 0;
  for (let i = 0; i < str.length; i++) {
    const pos = alphabet.indexOf(str[i]);
    weight += pos + 1;
  }
  return weight;
};

console.log('1. Weighted String with Queries');
console.log('Result : ', checkWeightedStringQueries('aaabccdd', [3, 2, 6, 8]));
console.log('Result : ', checkWeightedStringQueries('aaabccdd', [3, 2, 6, 6]));

/************************
2. Highest Palindrome
************************/

function isPalindrome(str = '') {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.substring(1, str.length - 1));
}

function highestPalindrome(str, k = 0, front = '', back = '') {
  if (str === '') {
    return -1;
  }

  if (isPalindrome(str)) {
    return front + str + back;
  }

  if (k === 0) {
    return -1;
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  if (firstChar > lastChar) {
    const newStr = firstChar + str.substring(1, str.length - 1) + firstChar;
    return highestPalindrome(newStr, k - 1, front, back);
  } else if (firstChar < lastChar) {
    const newStr = lastChar + str.substring(1, str.length - 1) + lastChar;
    return highestPalindrome(newStr, k - 1, front, back);
  } else {
    return highestPalindrome(
      str.substring(1, str.length - 1),
      k,
      front + firstChar,
      firstChar + back,
    );
  }
}

console.log('2. Highest Palindrome');
console.log('Result : ', highestPalindrome('3943', 1));
console.log('Result : ', highestPalindrome('3282', 2));

/************************
3. Balanced Brackets
************************/

function isBalancedBrackets(str) {
  const stack = [];
  const openingBrackets = ['(', '{', '['];
  const closingBrackets = [')', '}', ']'];

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];

    if (openingBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else if (closingBrackets.includes(currentBracket)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentBracket)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return 'NO';
      }
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}

console.log('3. Balanced Brackets');
console.log('Result: ', isBalancedBrackets('[({}[]())[{}]]'));
console.log('Result: ', isBalancedBrackets('{[}(])'));
