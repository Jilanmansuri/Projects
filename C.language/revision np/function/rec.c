#include <stdio.h>

int main() {

    int num1=1;
    float num2=8.8;
    char num='A';
    char*str="dfghj";
    int arr[5]={1,2,3,4,5};

    printf("%p\n",&num1);
    printf("%p\n",&num1);
    printf("%p\n",&num1);
    printf("%p\n",&num2);
    printf("%p\n",&num);
    printf("%p\n",&str);
    printf("arr:%p\n",&arr[0]);
    printf("%p\n",&arr[1]);
    printf("%p\n",&arr[2]);
    printf("%p\n",&arr[3]);
    printf("%p\n",&arr[4]);

    return 0;
}