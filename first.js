// You are given a list of N transfers (numbered from 0 to N−1) between two banks: bank A and bank B. The K-th transfer is described by two values:

// R[K] (either “A” or “B”) representing the recipient (the bank the transfer is sent to);
// V[K] denoting the value sent via the transfer.
// All transfers are completed in the order they appear on the list. The banks do not want to go into debt (in other words, their account balance may not drop below 0). What minimum initial account balance in each bank is necessary in order to complete the transfers?

// Assume that the following declarations are given:

// struct Results {
// int * A;
// int M; // Length of the array
// };

// Write a function:

// struct Results solution(char *R, int V[], int N);

// that, given a string R and an array of integers V, both of length N, returns an array of two integers. The integers should represent the minimum initial account balances for banks A and B in the following order: [bank A, bank B].

// Result array should be returned as a structure Results.

// Examples

// Given R = “BAABA” and V = [2, 4, 1, 1, 2], the function should return [2, 4]. The bank accounts’ balances after each transfer are shown in the following table:
//                        | A | B
// ------------------------±–±--
// initial balance | 2 | 4
// transfer 2 from A to B | 0 | 6
// transfer 4 from B to A | 4 | 2
// transfer 1 from B to A | 5 | 1
// transfer 1 from A to B | 4 | 2
// transfer 2 from B to A | 6 | 0

// Given R = “ABAB” and V = [10, 5, 10, 15], the function should return [0, 15].

// Given R = “B” and V = [100], the function should return [100, 0].

// Write an efficient algorithm for the following assumptions:

// string R and array V are both of length N;
// N is an integer within the range [1…100,000];
// each element of array V is an integer within the range [1…10,000];
// string R is made only of the characters ‘A’ and/or ‘B’.
for (let i = 0; i < R.length; i++) {
    if (R[i] === 'A') {
        current_balance_B -= V[i];
        current_balance_A += V[i];
    } else if (R[i] === 'B') {
        current_balance_A -= V[i];
        current_balance_B += V[i];
    }

min_balance_A = Math.min(min_balance_A, current_balance_A);
min_balance_B = Math.min(min_balance_B, current_balance_B);
}

const min_initial_balance_A = min_balance_A < 0 ? -min_balance_A : 0;
const min_initial_balance_B = min_balance_B < 0 ? -min_balance_B : 0;

return [min_initial_balance_A, min_initial_balance_B];