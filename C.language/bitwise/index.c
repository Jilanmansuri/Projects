#include <stdio.h>

int main()
{

    int a = 8 + 2 * 9 / 12 % 9 ^ 7 % 13;
    int b = 8 + 2 * 10;
    int c = ~5;
    int d = ~-7;

    
    printf("%d\n", a);
    printf("%d\n", b);
    printf("%d\n", c);
    printf("%d\n", d);


    return 0;
}