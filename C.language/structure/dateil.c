#include <stdio.h>

struct student
{
    char *name;
    char *email;
    int uid;
};

struct data
{
    long long int mobile;
    char *birthdate;
    char *address;
    struct student obj;
      
};

int main()
{

    struct data std;
    std.mobile=7984088939;
    std.obj.name="jilan";
    std.obj.uid=108623;

    printf("%lld\n", std.mobile);
    printf("%s\n", std.obj.name);
    printf("%d\n", std.obj.uid);

    // s1[0].name = "jilan";
    // s1[0].email = "jilan.f.mansuri.cg@gmail.com";
    // s1[0].uid = 108623;


    // s1[1].name = "ronan";
    // s1[1].email = "roman@gmail.com";
    // s1[1].uid = 230423;
    

    // s1[2].name = "ronaldo";
    // s1[2].email = "ronaldo@gmail.com";
    // s1[2].uid = 567873;

    // //  s2.mobile=7995408859;
    // //  s2.birthdate="24/13/2007";
    // //  s2.address="swa uki kalol";

    // printf("%s\n", s1[0].name);
    // printf("%s\n", s1[0].email);
    // printf("%d\n", s1[0].uid);

  
    // printf("%s\n", s1[1].name);
    // printf("%s\n", s1[1].email);
    // printf("%d\n", s1[1].uid);


    // printf("%s\n", s1[2].name);
    // printf("%s\n", s1[2].email);
    // printf("%d\n", s1[2].uid);

    // printf("%lld\n",s2.mobile);
    // printf("%s\n",s2.birthdate);
    // printf("%s\n",s2.address);

    return 0;
}








// printf("Name :: %s\n",name);
// printf("Email :: %s\n",email);
// printf("Mobile :: %lld\n",mobile);
// printf("Birthdate :: %s\n",birthdate);
// printf("Addressr :: %s\n",address);
// printf("Uid :: %d\n",uid);

// char name[]="Jilan Mansuri";
// char email[]="jilan.f.mansuri.cg@gmail.com";
// long long int mobile=7984088939;
// char birthdate[]="24 oct 2007";
// char address[]="himmatnagar,gujarat";
// char uid[]="SUK250054CE056";

// char*name;
// char*email;
// long long int mobile;
// char*birthdate;
// char*address;
// char*uid;