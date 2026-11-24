#include <stdio.h>

int main()
{
    int num, temp, sum, digit;

    printf("Enter a number: ");
    scanf("%d", &num);

    // -------- Using for loop --------
    // temp = num;
    // sum = 0;
    // for (; temp > 0; temp = temp / 10)
    // {
    //     digit = temp % 10;
    //     sum += digit;
    // }
    // printf("Using for loop,\n sum of digits = %d\n", sum);

    // temp = num;
    // sum = 0;
    // while (temp > 0)
    // {
    //     digit = temp % 10;
    //     sum += digit;
    //     temp = temp / 10;
    // }
    // printf("Using while loop, sum of digits = %d\n", sum);



    // do while


    // temp = num;
    // sum = 0;
    do
    {
        digit = temp % 10;
        sum += digit;
        temp = temp / 10;
    } while (temp > 0);
    printf("Using while loop, sum of digits = %d\n", sum);

        return 0;
} 