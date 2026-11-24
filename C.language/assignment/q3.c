#include <stdio.h>

union storage
{
    int x;
    float y;
    char z;
};

int main()
{
    union storage u2;

    u2.x = 45;
    u2.y = 34.43;
    u2.z = 'A';

    printf("%c", u2.z);

    return 0;
}