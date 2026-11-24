#include <stdio.h>
int fibonacci(int n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;   
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
}
int main() {
    int n=10;
    for (int i = 0; i < n; i++) {
        printf("%d ", fibonacci(i));
    }
    return 0;
}


// #include <stdio.h>
// void fibSeries(int n, int a, int b){
//     if(n == 0) return;            
//     printf("%d ", a);             
//     fibSeries(n-1, b, a+b);      
// }

// int main(){
//     int terms = 8;
//     printf("Fibonacci series:\n");
//     fibSeries(terms, 0, 1);        
//     return 0;
// }