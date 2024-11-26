const array = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];
const resultMap = array.map(x => x * 5);

console.log(resultMap);



-----------------------------------------------------------------------------


const sizesInMillimeters = [600, 1500, 200, 3750, 1550, 1400, 1000];

const sizesInMeters = sizesInMillimeters.map(size => size / 1000);
console.log('Размеры в метрах:', sizesInMeters);

const sizesInInches = sizesInMillimeters.map(size => Math.round(size / 25.4));
console.log('Размеры в дюймах (округленные):', sizesInInches);


--------------------------------------------------------------------------------

const strings = ["потоп", "река", "казак", "школа", "дед", "кино", "молоко"];

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё]/gi, '');
  
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

const palindromes = strings.filter(isPalindrome);

console.log("Палиндромы:", palindromes);

