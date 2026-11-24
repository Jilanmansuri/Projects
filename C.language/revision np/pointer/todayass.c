#include <stdio.h>

int main()
{

    // int num1=10;
    // int *n=&num1;

    // printf("%p\n",&n);
    // printf("%d\n",*n);

    // Q-2

    // int num1 = 3;
    // int num2 = 5;

    // int *n1 = &num1;
    // int *n2 = &num2;

    // *n1 = *n1+*n2;
    // *n2 = *n1 -* n2;
    // *n1 = *n1 -* n2;

    // printf("n1: %d \n", *n1);
    // printf("n2: %d \n", *n2);


    // ================================================================
    // int x, y, swap;
    // int x = 10;
    // int y = 20;
    // int *a = &x;
    // int *b = &y;
    // printf("Before swapping: x = %d, y = %d\n", x, y);
    // swap = *a;
    // *a = *b;
    // *b = swap;
    // printf("After  swapping: x = %d, y = %d\n", x, y);

// ======================================================================
    // int num1 = 3;
    // int num2 = 5;
    // int *n1 = &num1;
    // int *n2 = &num2;

    // *n1 = *n1 + *n2; // 8

    // *n2 = *n1 - *n2; // 3

    // *n1 = *n1 - *n2; // 5

    // printf("%d\n", *n1);
    // printf("%d\n", *n2);




// int arr[5]={34,72,84,91,29};

// int *p=&arr[0];

// printf("%d\n",*p);
// printf("%d\n",*(p+3));



//123d
// next 4 _ADDRESS

// 1241
// 1245
// 1249
// 124d




    int arr[5] = {10, 20, 30, 40, 50};
    int *p =&arr[0];

    printf("arr[0] %p\n",&arr[0]);
    printf("before %p\n",p);
    p=&arr[3];
    printf("after %p\n",p);
    printf("%d",*p);
    
    // for (int i = 0; i < 5; i++) {
    //     printf("%d ", *(p + i));
    // }

    // int j=0;
    // while(j<5){
    //     printf("\n%d",*(p+j));
    //     j++;
    // }

}