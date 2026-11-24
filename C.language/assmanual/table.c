#include <stdio.h>
int main()
{
    int n;    
    printf("Enter number:");
    scanf("%d",&n);
    // for(int i=1;i<=10;i++){
    //     printf("%d X %d = %d\n",n,i,n*i);
    // }

    int i=1;
    // while(i<=10){
    //    printf("%d X %d = %d\n",n,i,n*i);
    //    i++;
    // }

    do{
        printf("%d X %d = %d\n",n,i,n*i);
        i++;
    }
    while(i<=10);










    return 0;
}