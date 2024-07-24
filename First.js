// Write a function solution that, given an integer N, returns a string of length N containing as many different lower-case letters ('a'-'z') as possible, in which each letter occurs an equal number of times.

// Examples:

// 1. Given N = 3, the function may return "fig", "pea", "nut", etc. Each of these strings contains three different letters with the same number of occurrences.

// 2. Given N = 5, the function may return "mango", "grape", "melon", etc.

// 3. Given N = 30, the function may return "aabbcc...oo" (each letter from 'a' to 'o' occurs twice). The string contains 15 different letters.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..200,000].


function solution(N) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';


    let fullSets = Math.floor(N / 26);
    let remainder = N % 26;


    for (let i = 0; i < fullSets; i++) {
        result += alphabet;
    }

    result += alphabet.slice(0, remainder);


    function shuffleString(str) {
        let array = str.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }

    return shuffleString(result);
}

console.log(solution(3));    // "fig", "pea", "nut", etc. (random 3-letter combinations)
console.log(solution(5));    // "mango", "grape", "melon", etc. (random 5-letter combinations)
console.log(solution(30));   // "aabbcc...oo" (random 30-letter combinations)












