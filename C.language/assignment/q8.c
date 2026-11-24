#include <stdio.h>
int main()
{
    int a = 10, b = 25, c = 15;
    int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    printf("Largest number = %d", largest);
    return 0;
}
