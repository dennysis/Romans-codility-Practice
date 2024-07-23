
// Given four digits, count how many valid times can be displayed on a digital clock (in 24-hour format) using those digits. The earliest time is 00:00 and the latest time is 23:59.

// Write a function:

// int solution(int A, int B, int C, int D);

// that, given four integers A, B, C and D (describing the four digits), returns the number of valid times that can be displayed on a digital clock.

// Examples:

// 1. Given A = 1, B = 8, C = 3, D = 2, the function should return 6. The valid times are: 12:38, 13:28, 18:23, 18:32, 21:38 and 23:18.

// 2. Given A = 2, B = 3, C = 3, D = 2, the function should return 3. The valid times are: 22:33, 23:23 and 23:32.
// 3. Given A = 6, B = 2, C = 4, D = 7, the function should return 0. It is not possible to display any valid time using the given digits.

//  Assume that:

//  A, B, C and D are integers within the range [0..9].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
function arrangedClock(A, B, C, D) {
    const digits = [A, B, C, D];
    let validTimes = new Set();

    function checker(arr, start) {
        if (start === arr.length - 1) {
            const hours = arr[0] * 10 + arr[1];
            const minutes = arr[2] * 10 + arr[3];
            if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
                validTimes.add(`${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`);
            }
        } else {
            for (let i = start; i < arr.length; i++) {
                [arr[start], arr[i]] = [arr[i], arr[start]];
                checker(arr, start + 1);
                [arr[start], arr[i]] = [arr[i], arr[start]]; 
            }
        }
    }

    checker(digits, 0);
    return validTimes.size;
}

