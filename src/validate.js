export function validate(sentence) {
  const len = sentence.length;

  // first character capital letter,
  // checking charCode to be between A-Z
  if (sentence[0].charCodeAt() < 65 || sentence[0].charCodeAt() > 90) {
    return false;
  }

  // even number of quotation marks both " '
  if (getCountOfChar(sentence, '"') % 2 !== 0) {
    return false;
  }
  if (getCountOfChar(sentence, "'") % 2 !== 0) {
    return false;
  }

  // last character must be . ! ?
  const lastChar = sentence[len - 1];

  if (lastChar !== '.' && lastChar !== '!' && lastChar !== '?') {
    return false;
  }

  // no other period character except the last character
  if (sentence.indexOf('.') !== -1 && sentence.indexOf('.') !== len - 1) {
    return false;
  }

  // numbers below 13 should not be represented as digits
  const nums = sentence.match(/[0-9]+/g);

  if (nums) {
    for (const n of nums) {
      if (n < 13) {
        return false;
      }
    }
  }

  return true;
}

function getCountOfChar(sentence, char) {
  let counter = 0;
  for (const c of sentence) {
    if (c == char) {
      counter++;
    }
  }
  return counter;
}