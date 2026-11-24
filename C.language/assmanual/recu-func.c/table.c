#include <stdio.h>
int table(int n, int a)
{
    if (a > 10)
    {
        return 0;
    }
    printf("%d X %d = %d\n", n, a, (n * a));
    return table(n, a+1);
}
int main()
{
    printf("%d\n", table(8, 1));
    return 0;
}