#include <stdio.h>

int main() {
    int n, original, rev, digit;

    printf("Enter a number: ");
    scanf("%d", &n);
    original = n;

    // ----- Using for loop -----
    rev = 0;
    for (int temp = n; temp > 0; temp /= 10) {
        digit = temp % 10;
        rev = rev * 10 + digit;
    }
    if (rev == original)
        printf("For Loop: %d is a Palindrome\n", original);
    else
        printf("For Loop: %d is Not a Palindrome\n", original);

    // ----- Using while loop -----
    rev = 0;
    int temp = n;
    while (temp > 0) {
        digit = temp % 10;
        rev = rev * 10 + digit;
        temp /= 10;
    }
    if (rev == original)
        printf("While Loop: %d is a Palindrome\n", original);
    else
        printf("While Loop: %d is Not a Palindrome\n", original);

    // ----- Using do-while loop -----
    rev = 0;
    temp = n;
    do {
        digit = temp % 10;
        rev = rev * 10 + digit;
        temp /= 10;
    } while (temp > 0);

    if (rev == original)
        printf("Do-While Loop: %d is a Palindrome\n", original);
    else
        printf("Do-While Loop: %d is Not a Palindrome\n", original);

    return 0;
}