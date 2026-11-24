#include <stdio.h>
int main()
{

    // int num1 = 50;
    // char num2 = 'a';
    // float num3 = 1.1;
    // int *n1 = &num1;
    // char *n2 = &num2;
    // float *n3 = &num3;

    // printf("INT \n");
    // printf("%d \n", num1);
    // printf("%d \n", *n1);
    // printf("%p \n", n1);
    // printf("%d \n",sizeof(n1));
    // printf("%p \n\n", &n1);
    // printf("%p \n", (void*)&n1);

    // printf("Char \n");
    // printf("%p \n", &num3);
    // printf("%c \n", *n2);
    // printf("%p \n", n2);
    // printf("%p \n\n", &n2);
    
    // num2='d';
    // printf("Float \n");
    // printf("%p \n", &num2);
    // printf("%f \n", *n3);
    // printf("%p \n", n3);
    // printf("%p \n", &n3);

    // printf("Add of num1: %p \n", &num1);
    // printf("Add of num3: %p \n", num3);
    // printf("Add of &num3: %p \n", &num3);


    int num1 = 50;
char num2 = '5';
char *n2 = &num2;
int *n1 = &num1;
printf("%d \n", num1); //50
printf("%p \n", &num1); // add qf num1
printf("%p \n", n1); // address of num1
printf("%d \n", *n1); // derefrance 50
printf("%p \n", (void*)&n1); // new add

printf("%d \n", sizeof(n1));
printf("%d \n", sizeof(num1));
printf("%d \n", sizeof(n2));

    return 0;
}