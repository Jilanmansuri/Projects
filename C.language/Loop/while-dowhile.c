#include <stdio.h>
int main()
{

    int a, n;
    scanf("%d", &n);

    printf("\nfor\n");
    for (a = 1; a <= 10; a++)
    {
        printf("%d\n", a * n);
    }

    printf("\nwhile\n");

    a = 1;
    while (a <= 10)
    {
        printf("%d x %d = %d\n", n, a, n * a);
        a++;
    }

    printf("\ndo while\n");

    a = 1;
    do
    {
        printf("%d\n", a * n);
        a++;
    } while (a <= 10);

    return 0;
}