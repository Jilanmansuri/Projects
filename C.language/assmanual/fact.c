// #include <stdio.h>

// int main() {
// int n;
// scanf("%d",&n);
// int fact=1;
// for(int i=1;i<=n;i++){
//     fact*=i;
// }
// printf("%d",fact);
//     return 0;
// }

// #include <stdio.h>
// int main() {
// int n;
// scanf("%d",&n);
// int fact=1;
// int i=1;
// while(i<=n){
//     fact*=i;
//     i++;
// }
// printf("%d",fact);
//     return 0;
// }



#include <stdio.h>
int main()
{
    int fact = 1, i = 1;
    int n;
    scanf("%d", &n);
    do
    {
        fact *= i;
        i++;
    } while (i <= n);

    printf("%d", fact);
    return 0;
}