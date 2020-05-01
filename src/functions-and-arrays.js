// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(first, second) {
  if (first > second)
    return first;
  else if (second > first)
    return second;
  else
    return first;
}



// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(names) {
  var max = 0, name = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > max) { max = names[i].length; name = names[i]; }
  }

  if (name == "")
    return null;
  else
    return name;

}



// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}



// Progression #4: Calculate the average
// where is the data array??s
//const data = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false];
function add(data) {
  var sum = 0;
  if (data.length == 0)
    return 0;
  else {
    sum = 0;
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === 'number') { sum += data[i]; }
      else if (typeof data[i] === 'string') { sum += data[i].length; }
      else if (typeof data[i] === 'boolean') {
        if (data[i] === true) { sum += 1; }
        else { sum += 0; }
      }
      else {
        throw new Error("Unsupported data type sir or ma'am");
      }
    }
    return sum;
  }

}





// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg) {
  var sum = add(numbersAvg);
  if (sum == 0)
    return null;
  else
    return (sum / numbersAvg.length);
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  var sum = 0;
  for (let i = 0; i < wordsArr.length; i++) { sum += wordsArr[i].length; }
  if (sum == 0)
    return null;
  else
    return (sum / wordsArr.length);
}


function avg(mixedArr) {
  var sum = add(mixedArr);
  if (sum == 0)
    return null;
  else
    var value = (sum / mixedArr.length);
  var v = value.toFixed(2);
  return parseFloat(v);
}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique) {
  if (wordsUnique.length == 0)
    return null;
  else
    var unique = wordsUnique.filter((item, i, ar) => ar.indexOf(item) === i);
  return unique;
}



// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, word) {

  if (wordsFind.length == 0)
    return null;
  else
    var wordf = wordsFind.filter(value => value == word);
  if (wordf != "")
    return true;
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(words, word) {
  var count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] == word)
      count++;
  }
  return count;

}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix) {
  var maxProduct = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j + 3 < matrix[i].length) {
        product = (matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3]);
        if (product > maxProduct)
          maxProduct = product;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j + 3 < matrix[j].length) {
        product = (matrix[j][i] * matrix[j][i + 1] * matrix[j][i + 2] * matrix[j][i + 3]);
        if (product > maxProduct)
          maxProduct = product;
      }
    }
  }


  return maxProduct


}










