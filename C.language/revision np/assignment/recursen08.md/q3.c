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








// #include <stdio.h>
// int fact(int n){
//     if(n==0){
//         return 1;
//     }

//     return n*fact(n-1);
// }
// int main() {
//      printf("%d",fact(5));
//     return 0;
// }