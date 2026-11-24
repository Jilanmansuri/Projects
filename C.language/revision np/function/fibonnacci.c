#include <stdio.h>

int main() {
    int n, i;
    int first, second, next;

    printf("Enter the number of terms for Fibonacci series: ");
    scanf("%d", &n);
    first=0;
    second=1;
    printf("%d" "%d",first,second);
    for(int i=3;i<=n;i++){
        next=first+second;
        printf("%d",next);
        first=second;
        second=next;
    }

    return 0;
}



#include <stdio.h>
int fact(int num){
   
    if(num==1){
        return 1;
    }
    return num*fact(num-1);
}
int main() {
    printf("%d",fact(4));
    return 0;
}








