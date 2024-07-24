def bubble_sort(arr):
    n = len(arr)
    swapped = True
    
    while swapped:
        swapped = False
        for i in range(n - 1):
            if arr[i] > arr[i + 1]:
                # Swap elements
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        # Reduce the range of comparison
        n -= 1

def solution(A):
    bubble_sort(A)
    count = 0
    i = 0

    while i < len(A):
        max_guests = A[i]
        count += 1
        i += max_guests
    
    return count

print(solution([2, 7, 2, 9, 8])) 
print(solution([7, 3, 1, 1, 4, 5, 4, 9])) 
print(solution([1, 1, 1, 1, 1])) 
print(solution([2, 1, 4]))       
