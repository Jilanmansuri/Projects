#include <stdio.h>
int main()
{

    int arr[7] = {7, 9, 15, 18, 9, 17, 6};
    float sum = 0;
    for (int a = 0; a < sizeof(arr) / sizeof(arr[0]); a++)
    {
        sum += arr[a];
    }
    float avg = sum / 7;
    printf("Average is: %f\n", avg);

    // Find repeated (duplicate) number
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++)
    {
        for (int j = i + 1; j < sizeof(arr) / sizeof(arr[0]); j++)
        {
            if (arr[i] == arr[j])
            {
                printf("Duplicate number is: %d\n", arr[i]);
            }
        }
    }

    return 0;
}