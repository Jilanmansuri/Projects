// #include <stdio.h>

//    struct st1
//    {
     
//       char*name;
//       char*email;
//       long long int mobile;
//    };
   
//    struct st2{
//              int tenth;
//              int twelth;
//              int sem1;
//    };

//    struct st3{
//      char*section;
//      char*university;

//     struct st1 s1;
//     struct st2 s2;
    
//    };

// int main() {

//     struct st3 std;
//     std.university="swa uni";
//     std.section ="chhoti class";
//     std.s1.name="Jilan";
//     std.s1.email="jilan.mansuri.cg@gmail.com";
//     std.s1.mobile=7984088939;

//     std.s2.tenth=85;
//     std.s2.twelth=81;
//     std.s2.sem1=88;


//     printf("%s\n",std.university);
//     printf("%s\n",std.section);
//     printf("%s\n",std.s1.name);
//     printf("%s\n",std.s1.email);
//     printf("%lld\n",std.s1.mobile);
//     printf("%d\n",std.s2.tenth);
//     printf("%d\n",std.s2.twelth);
//     printf("%d\n",std.s2.sem1);
   
    
    
//     return 0;
// }


#include <stdio.h>
struct sem1
{
   int a;
   long long b;
   char str;
};


union sem2
{
   int a;
   long long b;
   char str;
};


int main() {
   
   struct sem1 v1;
   union sem2 u1;

   v1.a = 45;
   u1.b =34;

   printf("%d",v1.a);
   printf("%d",u1.b);
    return 0;
}