#include <stdio.h>

int main() {

    int n;
    printf("Enter value: ");
    scanf("%d",&n);
    int square=n*n;
    int div=10;
    int no=0;
    int check=square;
    
    while(check>0){
        no++;
        check=check/10;
    }

    for(int i=1;i<=no;i++){
        int first=square/div;
        int second=square%div;
        if((n)==(first+second)){
            printf("%s","true");
            return 0;
        }
        div=div*10;
    }
    printf("%s","false");

    return 0;
}