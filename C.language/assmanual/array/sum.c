#include <stdio.h>
int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    int sum = 0;
    for (int i = 0; i < 5; i++)
    {
        sum += arr[i]; 
    }
    printf("Sum = %d\n", sum);
    return 0;
}


#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5, sum = 0;

    for (int i = 0; i < n; i++) sum += arr[i];

    float avg = sum / (float)n;

    printf("Sum = %d\n", sum);
    printf("Average = %.2f\n", avg);

    return 0;
}