#include <stdio.h>
int main()
{
    int arr[5] = {1, 2, 1, 2, 4};
    for (int i = 0; i < 5; i++)
    {
        int count = 1;
        for (int j = i + 1; j < 5; j++)
        {
            if (arr[i] == arr[j])
            {
                count++;
            }
        }
        if (count > 1)
        {
            printf("%d \n", arr[i]);
        }
    }
    return 0;
}