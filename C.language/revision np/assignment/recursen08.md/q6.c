#include <stdio.h>
int calc(int n, int rev)
{
    if (n == 0)
    {
        return rev;
    }
    int digit = n % 10;
    rev = rev * 10 + digit;
    return calc(n / 10, rev);
}
int main()
{
    printf("%d", calc(523, 0));
    return 0;
}
