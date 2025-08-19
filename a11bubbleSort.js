// Swap function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Bubble Sort
function bubbleSort(arr) {
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      comparisons++; 

      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swaps++; 
        flag = true;
      }
    }
    if (!flag) {
        break;
    }
  }

  console.log("Sorted Array:", arr);
  console.log("Comparisons:", comparisons);
  console.log("Swaps:", swaps);
}

// Example
let arr = [5, 3, 8, 1, 2];
bubbleSort(arr);
