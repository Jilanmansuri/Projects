#include <stdio.h>

int main() {
    int num, sum, digit;

    // Taking input
    printf("Enter a number: ");
    scanf("%d", &num);

    // -------- Using for loop --------
   
    sum = 0;
    for (;num > 0; num = num / 10) {   //   542/10 = 54 => 54/10=5
        digit = num % 10;     
        sum += digit;
    }
    printf("Using for loop, sum of digits = %d\n", sum);



//     // -------- Using while loop --------
//     temp = num;
//     sum = 0;
//     while (temp > 0) {
//         digit = temp % 10;
//         sum += digit;
//         temp = temp / 10;
//     }
//     printf("Using while loop, sum of digits = %d\n", sum);



//     // -------- Using do-while loop --------
//     temp = num;
//     sum = 0;
//     if (temp == 0) {
//         sum = 0;   // edge case: number is 0
//     } else {
//         do {
//             digit = temp % 10;
//             sum += digit;
//             temp = temp / 10;
//         } while (temp > 0);
//     }
//     printf("Using do-while loop, sum of digits = %d\n", sum);

    return 0;
}






// #include <stdio.h>

// int main() {
//     int marks[4] = {85, 90, 78, 92};  // Declare and initialize the array
//     int size = sizeof(marks)/sizeof(marks[0]);        // Total size of the array in bytes

//     // Print the third element (index 2)
//     printf("The third element is: %d\n", marks[2]);

//     // Print the size of the array in bytes
//     printf("The size of the array in bytes is: %d\n", size);

//     return 0;
// }
