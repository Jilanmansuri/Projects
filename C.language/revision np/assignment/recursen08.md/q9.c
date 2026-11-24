// Power function using recursion
#include <stdio.h>
int power(int n, int p){
    {
    if (p == 0)
    return 1;
    }
    return n * power(n, p - 1); 
}

int main()
{
    printf("%d",power(5, 3));
    return 0;
}