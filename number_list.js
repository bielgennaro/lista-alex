//Tópico 1
function countOccurrences(list, numbers) {
  return list.reduce((count, element) => {
    if(element == numbers){
      count++;
    }
    return count;
  }, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberToCount = numbers[2];
const count = countOccurrences(numbers, numberToCount);
console.log(`O número ${numberToCount} aparece ${count} vezes no array.`);






//🐍
