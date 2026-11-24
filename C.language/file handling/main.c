// #include <stdio.h>
// // read 'r'
// // write 'w'   => replace karta he
// // append 'a'
// // delete remove()
// // r w a
// // file open => fopen("name","opening mode");
// // fprintf()
// // fscanf()
// // fgets()
// // fclose()

// int main()
// {
//     FILE *p;
//     // char code[1000];
//     // p = fopen("index.js", "r");
//     // if (p == NULL)
//     // {
//     //     printf("file not found");
//     //     return 1;
//     // }

//     // fgets(code, sizeof(code), p);
//     // printf("%s", code);
//     // // fprintf(p, "int a=20;");

//     // fclose(p);

//     // FILE *ptr;
//     // ptr = fopen("index.js", "a");
//     // fprintf(ptr, "int a=20;");
//     // fclose(ptr);

//     // ptr = fopen("index.js", "w");

//        if (remove("index.txt") == 0) {
//         printf("File deleted successfully");
//     } else {
//         printf("File could not be deleted");
//     }

//     // remove("index.cpp");

//     return 0;
// }

#include <stdio.h>

int main()
{
    FILE *fp;
    char code[100];
    fp = fopen("name.txt", "r");

    // if (fp == NULL)
    // {
    //     printf("File not found");
    //     return 1;
    // }

    // EOF
    while (fgets(code, sizeof(code), fp) != NULL)
    {
        printf("%s", code);
    }

    // fgets(code, sizeof(code), fp);
    // fprintf(fp, "CCC");
    // fprintf(fp,"AAA BBB CCC DDD");

    fclose(fp);
    return 0;
}
