// #include <stdio.h>
// void count(int num2){
//     num2 = num2+3;
//     printf("count: %d\n",num2);
// }
// void count2(){
//     static int num=10;
//     num++;
//     printf("count: %d\n",num);
// }

// int main() {

//     static int num2=10;

//     count(num2);
//     count(num2);
//     count(num2);

//     count2();
//     count2();
//     count2();
//     return 0;
// }

#include <stdio.h>
void count()
{
    int num2 =11;
    printf("before num2++: %d \n", num2);
    num2++;
    printf("count: %d \n", num2);
}

void count2()
{
    static int num = 10;
    num++;
    printf("num: %d \n", num);
}

int main()
{

    static int num2 = 10;
    auto int num1 = 12;
    register int num3 = 13;

    int *p=&num3;

    printf("%d \n", num2);
    printf("%d \n", num1);
    printf("%d \n", num3);

    return 0;
}