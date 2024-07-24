// There are N guests (numbered from 0 to N-1) in a sanatorium waiting to be assigned a room. In each room, any number of guests can be accommodated. However, not all guests like to have a lot of roommates.

// You are given an array A of N integers: the K-th guest wants to be in a room that contains at most A[K] guests, including themselves.

// Write a function:

// int solution(int A[], int N);

// that, given the array A, returns the minimum number of rooms needed to accommodate all guests.

// Examples:

// 1. Given A = [1, 1, 1, 1, 1], your function should return 5. Each guest should be accommodated in their own separate room.

// 2. Given A = [2, 1, 4], your function should return 2. The second guest should be accommodated in one room and the other two guests in another room.

// 3. Given A = [2, 7, 2, 9, 8], your function should return 2. The first and the third guests should be accommodated in one room and the other three guests in another room.

// 4. Given A = [7, 3, 1, 1, 4, 5, 4, 9], your function should return 4. The guests can be accommodated as follows: the first two guests in one room, the third and the fourth guests in two single rooms, and the other guests in another room.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..100,000].



function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    // Decrease the range of comparison
    n--;
  } while (swapped);

  return arr;
}

function solution(A) {
  bubbleSort(A);
  let count = 0;
  let i = 0;

  while (i < A.length) {
    let maxGuests = A[i];
    count++;
    i += maxGuests;
  }

  return count;
}



console.log(solution([7, 3, 1, 1, 4, 5, 4, 9])); 
console.log(solution([1, 1, 1, 1, 1])); 
console.log(solution([2, 7, 2, 9, 8])); 
console.log(solution([2, 1, 4])); 

