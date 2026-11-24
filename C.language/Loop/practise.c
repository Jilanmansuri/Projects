#include <stdio.h>
int main()
{

    // Q--1

    //   int n=4;
    //   for(int i=1;i<=n;i++){
    //     for(int j=1;j<=i;j++){
    //         printf("%d",j);
    //     }
    //     printf("\n");
    //   }

    //    Q--1

    //  for(int i=1;i<=4;i++){
    //     for(int j=1;j<=i;j++){
    //         printf("%d",j);
    //     }
    //     printf("\n");
    //  }

    // Q--2

    //   for(int a=5;a>=1;a--){
    //     for(int k=1;k<=a;k++){
    //         printf("*");
    //     }
    //      printf("\n");
    //   }

    // int n;
    // scanf("%d", &n);
    // printf("\n");

    // for (int i = n; i > 0; i--)
    // {
    //     for (int j = 0; j<=n-i; j++)
    //     {
    //         printf("%d", i);
    //     }
    //     printf("\n");
    // }

    // printf("\n");

    // int n;

    // printf("\n");

    // for (int i = 68; i > 65; i--)
    // {
    //     for (int j = 67; j > i - 2; j--)
    //     {
    //         printf("%c", j);
    //     }
    //     printf("\n");
    // }

    // printf("\n");

    //   Q--3

    // int arr[] = {2, 4, 3, 5, 6, 1};
    // int n = sizeof(arr) / sizeof(arr[0]);
    // int target = 7;

    // for (int i = 0; i < n; i++) {
    //     for (int j = i + 1; j < n; j++) {
    //         if (arr[i] + arr[j] == target) {
    //             printf("(%d, %d)\n", arr[i], arr[j]);
    //         }
    //     }
    // }

    // new practise

    // Q-1

    //  int n;
    //     scanf("%d", &n);
    //     for (int i = 1; i <= n; i++)
    //     {
    //         for (int j = 1; j <= n-i; j++){
    //             printf(" ");
    //         }
    //          for (int star = 1; star <= i; star++) {
    //             printf("*");
    //         }
    //         printf("\n");
    //     }

    // q-2

    //  int n;
    //     scanf("%d", &n);
    //     for (int i = 1; i <= n; i++)
    //     {
    //         for (int j = 1; j <= n-i; j++){
    //             printf("");
    //         }
    //          for (int star = n; star >= i; star--) {
    //             printf("*");
    //         }
    //         printf("\n");
    //     }

    // Q-3

    //  int n;
    //     scanf("%d", &n);
    //     for (int i = 1; i <= n; i++)
    //     {
    //         for (int j = 1; j <= n-i; j++){
    //             printf(" ");
    //         }
    //          for (int star = 1; star <= i; star++) {
    //             printf(" *");
    //         }
    //         printf("\n");

    //     }

    // Q-4

    // int n;
    // scanf("%d", &n);
    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = i; j <= n; j++)
    //     {
    //         printf(" ");
    //     }
    //     for (int star = 1; star <= n; star++)
    //     {
    //         printf(" *");
    //     }
    //     printf("\n");
    // }

    // int n;
    // scanf("%d", &n);

    // for (int i = 1; i <= n; i++)
    // {

    //     for (int j = 1; j <= n; j++)
    //     {
    //         if (j <= n - i)
    //             printf(" ");
    //         else
    //             printf("*");
    //     }
    //     printf("\n");
    // }

    // int n;
    // scanf("%d", &n);
    // for (int a = 0; a < n; a++)
    // {
    //     for (int k = 0; k < n ; k++)
    //     {
    //         if (k < n - a - 1)

    //             printf(" ");
    //         else
    //             printf("*");
    //     }
    //     printf("\n");
    // }

    int n;
    scanf("%d", &n);

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            if (j <= i)
                printf(" ");
            else
                printf("*");
        }
        printf("\n");
    }

    return 0;
}