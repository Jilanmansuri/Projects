#include <stdio.h>

int main() {
    int n, i;
    int first, second, next;

    printf("Enter the number of terms for Fibonacci series: ");
    scanf("%d", &n);

    // Using for loop
    printf("\nFibonacci Series using for loop:\n");
    first = 0, second = 1;
    printf("%d %d ", first, second); // print first two terms
    for(i = 3; i <= n; i++) {
        next = first + second;
        printf("%d ", next);
        first = second;
        second = next;
    }

    // Using while loop
    printf("\n\nFibonacci Series using while loop:\n");
    first = 0, second = 1, i = 3;
    printf("%d %d ", first, second);
    while(i <= n) {
        next = first + second;
        printf("%d ", next);
        first = second;
        second = next;
        i++;
    }

    // Using do-while loop
    printf("\n\nFibonacci Series using do-while loop:\n");
    first = 0, second = 1, i = 3;
    printf("%d %d ", first, second);
    do {
        if (i > n) break; // safety check
        next = first + second;
        printf("%d ", next);
        first = second;
        second = next;
        i++;
    } while(i <= n);

    return 0;
}