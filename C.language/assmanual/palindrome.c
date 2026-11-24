#include <stdio.h>
int main()
{
    int num, temp, digit, reverse;
    scanf("%d", &num);
    temp = num;
    reverse = 0;
    // for (; temp != 0; temp /= 10)
    // {
    //     digit = temp % 10;
    //     reverse = reverse * 10 + digit;
    // }
    // if (num == reverse)
    //     printf("is palindrome");

    // else
    //     printf("no palindrome");


    while (temp > 0)
    {
        digit = temp % 10;
        reverse = reverse * 10 + digit;
        temp/=10;
    }
    if (num == reverse)
    {
        printf("is palindrome");
    }
    else
    {
        printf("no palindrome");
    }
    return 0;
}