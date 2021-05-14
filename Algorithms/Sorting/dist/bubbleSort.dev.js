"use strict";

function bubbleSort(array) //Compare number next to the current and swap on condition
{
  var arrLength = array.length;

  for (var i = 0; i < arrLength; i++) {
    //This loop is to loop the whole array
    for (var j = 0; j < arrLength; j++) {
      //This loop will loop through the numbers inside the array
      if (array[j] > array[j + 1]) //Inside here we deal only with the numbers inside the loop which is [j]
        {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
    }
  }

  return array;
}

function selectionSort(array) {
  //Loop through the numbers and find the smallest in remaining, replace it to the current index if small number is found
  // repeat (numOfElements - 1) times
  //   set the first unsorted element as the minimum
  //   for each of the unsorted elements
  //     if element < currentMinimum
  //       set element as new minimum
  //   swap minimum with first unsorted position
  var arrLength = array.length;

  for (var i = 0; i < arrLength; i++) {
    var min = i;

    for (var j = i + 1; j < arrLength; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min != i) {
      // Swapping the elements
      var tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }

  return array;
}

function insertionSort(array) {
  var length = array.length;

  for (var i = 0; j < length; i++) {}
}

var numbers = [22, 77, 99, 45, 85, 35, 41, 5, 6, 57, 12];
console.log(selectionSort(numbers));