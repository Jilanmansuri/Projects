#include <stdio.h>

int fib(int n) {
    if (n == 0) 
    return 0; // base case 1
    if (n == 1) 
    return 1; // base case 2
    return fib(n-1) + fib(n-2); // recursive step
}

int main() {
    printf("Fibonacci %d\n",fib(5));
    return 0;
}


// #include <stdio.h>

// int fib(int n) {
//     if (n == 0) return 0; 
//     if (n == 1) return 1; 
//     return fib(n-1) + fib(n-2);
// }

// int main() {

//     int n = 5;  // kitne numbers chahiye

//     printf("Fibonacci Series: ");
//     for (int i = 0; i <= n; i++) {
//         printf("%d ", fib(i));   // har term print hoga
//     }

//     return 0;
// }
