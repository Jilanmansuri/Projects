#include <stdio.h>

int main()
{

    // int num1 = 50;
    // int *num3 = &num1;
   
    // printf("%d\n", num1);
    // printf("%d\n", *num3);

    // num1=20;
    // printf("%d\n",*num3);


    int num1=50;
    char num2='A';
    float num3=60;

    int *a=&num1;
    char *b=&num2;
    float *c=&num3;
    
    printf("%p\n",&num1);
    printf("%p\n",&num2);
    printf("%p\n",&num3);
    printf("%d\n",*a);
    printf("%c\n",*b);
    printf("%f\n",*c);

    return 0;
}


    // printf("Add of num1: %p \n", &num1);
    // printf("Add of num3: %p \n", num3);
    // printf("Add of &num3: %p \n", &num3);