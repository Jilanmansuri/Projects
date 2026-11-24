#include <stdio.h>

int factorial(int n) {
    int fact = 1;
    for (int i = 1; i <= n; i++)
        fact *= i;
    return fact;
}

int rog(int num) {
    int original = num,
     sum = 0;
    while (num > 0) {
        int digit = num % 10;
        sum += factorial(digit);
        num /= 10;
    }
    return sum == original;
}

int main() {
    int num2;
    scanf("%d", &num2);

    if (rog(num2))
        printf("%d is a Strong Number.\n", num2);
    else
        printf("%d is NOT a Strong Number.\n", num2);

    return 0;
}