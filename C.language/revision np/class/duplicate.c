
#include <stdio.h>
int main()
{

    int arr[7] = {7, 9, 15, 18, 9, 18, 9};
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