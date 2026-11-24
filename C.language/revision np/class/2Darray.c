#include <stdio.h>
#include <string.h>
int main()
{
    // //      R  C
    // int arr[3][3] = {
    //     {0, 1, 2}, // R0
    //     {3, 4, 5}, // R1
    //     {6, 7, 8}  // R2
    //                // C0 C1 C2
    // };

    // // printf("%d\n", arr[0][2]);
    // // printf("%d\n", arr[2][2]);
    // // printf("%d\n", arr[2][0]);
    // // printf("%d\n", arr[1][0]);
    // // printf("%d\n", arr[1][2]);

    // int arr2[2][4] = {
    //     {1, 2, 3, 4},
    //     {5, 6, 7, 8}};
    //  printf("%d\n", arr2[0][2]);
    //  printf("%d\n", arr2[1][3]);
    //  printf("%d\n", arr2[1][1]);

    //  char *str="Jilan Mansuri";
    // char str[20];
   
    // printf("enter full name");
    // fgets(str,sizeof(str),stdin);
    // // printf("%s\n",str);
    // puts(str);


    // char name[5]="ab de";
    // puts(name);



char one[20]="ABC";
char *two="XYz";

printf("%s\n",one);
printf("%s\n",two);

int d = strlen(one);
printf("%d\n",d);

int f=strlen(two);
printf("%d\n",f);


    return 0;
}