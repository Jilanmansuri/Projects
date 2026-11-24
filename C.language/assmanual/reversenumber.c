#include <stdio.h>

int main() {
    int num, temp, digit, reverse;

    // Input number
    printf("Enter a number: ");
    scanf("%d", &num);

    // -------- Using for loop --------
    // temp = num;
    // reverse = 0;
    // for (; temp != 0; temp /= 10) {
    //     digit = temp % 10;        // Get last digit
    //     reverse = reverse * 10 + digit; // Build reversed number
    // }
    // printf("Reversed number using for loop: %d\n", reverse);


    // // // -------- Using while loop --------
    // temp = num;
    // reverse = 0;
    // while (temp != 0) {
    //     digit = temp % 10;
    //     reverse = reverse * 10 + digit;
    //     temp /= 10;
    // }
    // printf("Reversed number using while loop: %d\n", reverse);

    
    // // -------- Using do-while loop --------
    // temp = num;
    // reverse = 0;
    // do {
    //     digit = temp % 10;
    //     reverse = reverse * 10 + digit;
    //     temp /= 10;
    // } while (temp != 0);
    // printf("Reversed number using do-while loop: %d\n", reverse);


    return 0;
}

