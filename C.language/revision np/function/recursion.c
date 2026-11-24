// #include <stdio.h>
// int fibonacci(int n) {
    // if (n == 0) {
    //     return 0;
    // }
    // if (n == 1) {
    //     return 1;   
    // }
//     return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
// }

// int main() {
//     int n;
//     printf("Enter number of terms: ");
//     scanf("%d", &n);
//     for (int i = 0; i < n; i++) {
//         printf("%d ", fibonacci(i));
//     }
//     return 0;
// }






// #include <stdio.h>

// int fib(int n){
//      if (n == 0) {
//         return 0;
//     }
//     else if (n == 1) {
//         return 1;   
//     }
//     return fib(n-1)+fib(n-2);
// }
// int main() {
//   printf("%d\n",fib(0));
//   printf("%d\n",fib(1));
//   printf("%d\n",fib(2));
//   printf("%d\n",fib(3));
//   printf("%d\n",fib(4));
//   printf("%d\n",fib(5));
//   printf("%d\n",fib(6));
//   printf("%d\n",fib(7));
//   printf("%d\n",fib(8));
//   printf("%d\n",fib(9));
//   printf("%d\n",fib(10));
//     return 0;
// }



// #include <stdio.h>
// int table(int n,int a){
    
//       if(n>9){
//         return 0;
//       }
//       printf("%d X %d = %d\n",n,a,(n*a));
      
//       return table(n+1,a);
// }
// int main() {
//     printf("%d\n",table(5,5));
//     return 0;
// }



// count digit of a number

#include <stdio.h>
int calc(int n) {
    if (n == 0) {
        return 0;  
    }
    return 1 + calc(n / 10); 
}
int main() {
    printf("%d", calc(1234567890));  
    return 0;
}





// // count digit of a number
// #include <stdio.h>
// int calc(int n, int digit){
//     if(digit==0){
//         return 0;
//     }
//     return calc(digit/10);
// }
// int main() {
//     printf("%d",calc(1234,0));
//     return 0;
// }