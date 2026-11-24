// #include <stdio.h>
// #define PI

// int main()
// {
//     printf("-1\n");
//     printf("0\n");

// #ifdef PI
//     printf("1\n");
//     printf("2\n");

// #endif
//     printf("3\n");
//     printf("4\n");
//     return 0;
// }

#include <stdio.h>
#define AGE 22

int main()
{
#if AGE == 18
    printf("18 \n");
#elif AGE == 22
    printf("22 \n");
#else
    printf("NAhn");
#endif
    return 0;
}