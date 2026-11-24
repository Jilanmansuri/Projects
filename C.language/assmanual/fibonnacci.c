#include <stdio.h>
int main()
{
    int first, second, next;
    first = 0;
    second = 1;
    int n;
    scanf("%d", &n);
    printf("%d"
           " %d",
           first, second);
    // for(int i=3;i<20;i++){
    //    next=first+second;
    //    printf(" %d",next);
    //    first=second;
    //    second=next;
    // }

    // int i=3;
    // while(i<=n){
    //     next=first+second;
    //    printf(" %d",next);
    //    first=second;
    //    second=next;
    //    i++;
    // }

    int i = 3;
    do
    {
        next = first + second;
        printf(" %d", next);
        first = second;
        second = next;
        i++;
    } while (i <= n);

    return 0;
}
