
// // #include <stdio.h>

// // struct book
// // {
// //     char title[25];
// //     char author[25];
// //     float price;

// // };

// // int main() {
    
// //     struct book s1;
    
// //     scanf("%s",s1.title);,
// //     scanf("%s",s1.author);
// //     scanf("%f",&s1.price);
    
// //     printf(" title: %s\n",s1.title);
// //     printf(" author: %s\n",s1.author);
// //     printf("price: %f\n",s1.price);

// //     return 0;
// // }




// #include <stdio.h>

// struct book
// {
//     char* title;
//     char* author;
//     float price;

// };

// int main() {
    
//     struct book s1;
    
//     // scanf("%s",s1.title);
//     // scanf("%s",s1.author);
//     // scanf("%f",&s1.price);

//     s1.title="name";
//     s1.author="hrloo";
//     s1.price=54.2;
    
//     printf(" title: %s\n",s1.title);
//     printf(" author: %s\n",s1.author);
//     printf("price: %f\n",s1.price);




//     return 0;
// }












#include <stdio.h>

struct data{
    int num;
    char*name;
    long long int mob;
};


int main() {

    struct data s1;
    s1.num=23;
    s1.name="jilan";
    s1.mob=23456789;
   
    printf("%d\n",s1.num);
    printf("%s\n",s1.name);
    printf("%d",s1.mob);

    return 0;
}