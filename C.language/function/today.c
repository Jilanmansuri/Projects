// #include <stdio.h>

// int factorial(int n) {
//     int fact = 1;
//     for (int i = 1; i <= n; i++)
//         fact *= i;
//     return fact;
// }

// int rog(int num) {
//        int sum = 0;
//        int digit = num % 10;
//        sum += factorial(digit);
//        for(int a=num;num>0;num/=10)
//        return sum == a;
//     }
   
        
    
// int main() {
//      int num2;
//     scanf("%d", &num2);

//     if (rog(num2))
//         printf("%d is a strong number.\n", num2);
//     else
//         printf("%d is not a strong number.\n", num2); 
//     return 0;
// }



#include <stdio.h>

int main() {



    int n=145;
    int r=n;
    int sum=0;
    while(n>0){
        int add=n%10;
        int check=1;
        for(int i=add;i>=1;i--){
            check=check*i;
        }
        sum=sum-check;
        n=n/10;
    }
    return 0;
}


























    // int a,dig,add=1;
    // scanf("%d",&a);
    // for(int i=a;i!=0;i/=10){
    //     dig = i%10;
    //     printf("%d\n",dig);
    //     int add=1;
    //     for(int j=1)
    // }