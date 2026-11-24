// #include <stdio.h>
// int main()
// {
//     int arr[5] = {45, 72, 12, 89, 33};
//     int max = arr[0];
//     int min = arr[0];

//     for (int i = 1; i < 5; i++)
//     {
//         if (arr[i] > max)
//             max = arr[i];

//         if (arr[i] < min)
//             min = arr[i];
//     }
//     printf("Max = %d, Min = %d\n", max, min);
//     return 0;
// }

#include <stdio.h>
int main()
{
    int arr[5] = {12, 56, 10, 43, 34};
    int max = arr[0];
    for (int i = 1; i < 5; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    printf("%d", max);
    return 0;
}