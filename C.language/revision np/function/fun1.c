#include <stdio.h>
int sum(int n1, int n2)
{
    return n1 + n2;
}
int main()
{
    int num1 = 1;
    int num2 = 2;
    printf("%p\n",&num1);
    printf("%d\n", sum(num1,num2));
    return 0;
}