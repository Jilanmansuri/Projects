#include <stdio.h>
int main()
{

    Q-1

    int n;
    scanf("%d",&n);
    for(int a=1;a<=n;a++){
        printf("*");
    }
    {
        printf("\n");
    }

      Q-2
    int m;
    scanf("%d",&m);
    for (int i = 1; i <= m; i++) {
        printf("%d", i);
       
    }
    printf("\n");

    Q-3

    int n;
    scanf("%d",&n);
    for (int i = 0; i < n; i++) {
        printf("%c ", 'A'+i);
    }

       Q-4

    int n;
    scanf("%d",&n);
    for(int a=1;a<=n;a++)
    {
        for(int j=0;j<=n;j++){
        printf("*");
    }
    printf("\n");
    }

    Q-5

    int n;
    scanf("%d",&n);
    for(int a=1;a<=n;a++)
    {
        for(int j=1;j<=n;j++){
        printf("%d",j);
    }
    printf("\n");
    }

    Q-6

    int n;
    scanf("%d",&n);
    for(int a=0;a<n;a++){
        for(int j=0;j<n;j++){
        printf("%c ",'A'+j);
    }
    printf("\n");
    }

    Q-7

    int n;
    scanf("%d",&n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }

    Q-8
       int n;
    scanf("%d",&n);
       for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            printf("%d",j);
        }
        printf("\n");
       }

       Q-9

       int n;
    scanf("%d",&n);
       for(int i=0;i<=n;i++){
        for(int j=0;j<i;j++){
            printf("%c ",'A'+j);
        }
        printf(" \n");
       }

    Q-10

    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n-i; j++){
            if(j<=i){
            printf("*");
            else()
            printf(" ");
            }
        
        printf("\n");
        }
    }

    Q-11

    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n-i; j++){
            printf(" ");
        }
         for (int k = 1; k <= i; k++) {
            printf("%d",k);
        }
        printf(" \n");

    }

    Q-12

    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n-i; j++){
            printf(" ");
        }
         for (int k = 0; k < i; k++) {
            printf("%c",'A'+k);
        }
        printf(" \n");

    }

    Q-13

    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n-i; j++){
            printf(" ");
        }
         for (int star = 1; star <=2*i-1; star++) {
            printf("*");
        }
        printf("\n");

    }

    Q-14

    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n-i; j++){
            printf("  ");
        }
         for (int k = 1; k <=2*i-1; k++) {
            printf("%d ",k);
        }
        printf("\n");

    }

    Q-15

    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n-i; j++){
            printf(" ");
        }
        for (int k = 0; k <2*i+1; k++) {
            printf("%c",'A'+k);
        }
        printf("\n");

    }

    Q-16

     int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n+1-i; j++){
            printf("*");
        }

        printf("\n");
    }

    Q-17

       int n;
       scanf("%d", &n);
       for (int i = 1; i <= n; i++)
       {
           for (int j = 1; j <= n+1-i; j++){
               printf(" %d",j);
           }

           printf("\n");
       }

       Q-18

    int n;
        scanf("%d", &n);
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n-i; j++){
                printf("%c ",'A'+j);
            }

            printf("\n");
        }

       Q-19

    int n;
    scanf("%d",&n);
    int count=1;
    for(int a=1;a<=n;a++){
        for(int j=1;j<=a;j++){
            printf("%d ",count);
            count++;
        }
        printf("\n");
    }

    Q-20

    int n;
    scanf("%d",&n);
    int count=0;
    for(int a=1;a<=n;a++){
        for(int j=1;j<=a;j++){
            printf("%c ",count+'A');
            count++;
        }
        printf("\n");
    }

    Q-21

    int n;
    scanf("%d", &n);
    for (int a = 0; a <= n; a++)
    {
        for (int j = 1; j <= a; j++)
        {
            printf(" ");
        }
        
            for (int k = 0; k<n-a; k++) 
            {
                printf("*");
            }
            printf("\n");
        
    }
    


    Q-22
        int n;
        scanf("%d", &n);
        for (int a = 0; a <= n; a++)
        {
            for (int j = 1; j <= a; j++)
            {
                printf(" ");
            }
            
                for (int k = 1; k<=n-a; k++) 
                {
                    printf("%d",k);
                }
                printf("\n");
            
        }
        
        
        
        
        Q-23
        
        int n;
        scanf("%d", &n);
        for (int a = 0; a <= n; a++)
        {
            for (int j = 1; j <= a; j++)
            {
                printf("  ");
            }
            
                for (int k = 0; k<=n-a; k++) 
                {
                    printf("%c ",'A'+k);
                }
                printf("\n");
            
        }



        Q-24

        
    int n = 5;

    for (int i = 1; i <= n; i++) {
        // Increasing part
        for (int j = 1; j <= i; j++) {
            printf("%d ", j);
        }

        // Decreasing part
        for (int j = i - 1; j >= 1; j--) {
            printf("%d ", j);
        }

        printf("\n");
    }

    







    return 0;
    }
