// #include <stdio.h>
// int obj(int num){
//     printf("%d\n",num);
//     return obj(num-1);
// }
// // int obj1(){
// //     int num=10;
// //     return num;
// // }
// // char obj2(){
// //     char num=65;
// //     return num;
// // }
// // float obj3(){
// //     float num=10.34;
// //     return num;
// // }
// int main() {

// //  printf("%d\n",obj1());
// //  printf("%c\n",obj2());
// //  printf("%f\n",obj3());

// obj(5);
//     return 0;
// }



// #include <stdio.h>
// int obj(int num){
//     if(num>20){
//         return 1;
//     }
//     printf("%d\n",num);
//     return obj(num+3);
// }

// int main() {
//     obj(5);
    
//     return 0;
// }



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