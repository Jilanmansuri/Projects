// #include <stdio.h>

// struct s1
// {
//     int sub1;
//     int sub2;
//     int sub3;
//     int sub4;
//     int sub5;
//     int sub6;
// };

// int main()
// {

//     struct s1 obj;

//     obj.sub1 = 45;
//     obj.sub2 = 75;
//     obj.sub3 = 85;
//     obj.sub4 = 70;
//     obj.sub5 = 60;
//     obj.sub6 = 90;

//     int total = obj.sub1 + obj.sub2 + obj.sub3 + obj.sub4 + obj.sub5 + obj.sub6;

//     float pr = (total / 6);
    
//     printf("Total Marks : %d\n",total);
//     printf("Percentage : %f\n", pr);

//     return 0;
// }




// #include <stdio.h>

// struct s1
// {
//     int v1;
//     float v2;
//     char v3;
//     long long int v4;
//     // int v5[3] ;
//     char*v6;
// };

// union s2
// {
//      int a1;
//     float a2;
//     char a3;
//     long long int a4;
//     // int a5[3] ;
//     char*a6;
  
// };


// int main()
// {

//     struct s1 obj;
//     union s2 obg;

//     obj.v1 = 45;
//     obj.v2 = 75;
//     obj.v3 = 'A';
//     obj.v4 = 43;
//     // obj.v5 [23,23,23];
//     obj.v6 ="hello";


//     obg.a1 = 45;
//     obg.a2 = 75;
//     obg.a3 = 'A';
//     obg.a4 = 43;
//     // obj.v5 [23,23,23];
//     obg.a6 ="hello";
    
//     printf("%d\n",obj.v1);
//     printf("%f\n",obj.v2);
//     printf("%c\n",obj.v3);
//     printf("%lld\n",obj.v4);
//     // printf("%d\n",obj.v5[2]);
//     printf("%s\n",obj.v6);
    
    
    
//     printf("%d\n",obg.a1);
//     // printf("%f\n",obg.a2);
//     // printf("%c\n",obg.a3);
//     // printf("%lld\n",obg.a4);
//     // // printf("%d\n",obj.v5[2]);
//     // printf("%s\n",obg.a6);
    

//     return 0;
// }





#include <stdio.h>

struct s1
{
    int v1;
    // float v2;
    char v3;
    long long int v4;
    // int v5[3] ;
    // char*v6;
};

union s2
{
     int a1;
    // float a2;
    char a3;
    long long int a4;
    // int a5[3] ;
    // char*a6;
  
};


int main()
{

    struct s1 obj;
    union s2 obg;

    obj.v1 = 45;
    // obj.v2 = 75;
    obj.v3 = 'A';
    obj.v4 = 43;
    // obj.v5 = [23,23,23];
    // obj.v6 ="hello";

    printf("%d\n",sizeof obj.v1);
    // printf("%f\n",sizeof obj.v2);
    printf("%c\n", sizeof obj.v3);
    printf("%lld\n", sizeof obj.v4);
    // printf("%d\n",obj.v5[2]);
    // printf("%s\n",sizeof obj.v6);

    obg.a1 = 45;
    // obg.a2 = 75;
    obg.a3 = 'A';
    obg.a4 = 43;
    // obj.v5 [23,23,23];
    // obg.a6 ="hello";
    
    
    
    
    printf("%d\n",sizeof obg);
    // printf("%f\n",obg.a2);
    // printf("%c\n",obg.a3);
    // printf("%lld\n",obg.a4);
    // // printf("%d\n",obj.v5[2]);
    // printf("%s\n",obg.a6);
    

    return 0;
}