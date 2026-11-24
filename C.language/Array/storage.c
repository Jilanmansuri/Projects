#include <stdio.h>
void count(int num2){
    num2 = num2+3;
    printf("count: %d\n",num2);
}
void count2(){
    static int num=10;
    num++;
    printf("count: %d\n",num);
}

int main() {
    
    static int num2=10;

    count(num2);
    count(num2);
    count(num2);

    count2();
    count2();
    count2();
    return 0;
}