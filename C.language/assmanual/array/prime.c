#include <stdio.h>

int main()
{

    int n = 2;
    int count = 0;

    if (n <= 1)
    {
        printf("Not prime");
        return 0;
    }

    for (int i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            count = 1;
        }
    }

    if (count == 0)
    {
        printf("Prime");
    }
    else
    {
        printf("Not prime");
    }

    return 0;
}
