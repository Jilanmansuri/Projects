#include <stdio.h>

int main() {
    int n, i;
    int max, min;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
   
    printf("Enter %d integers:\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    max = min = arr[0];

    
    for(i = 0; i < n; i++) {
        if(arr[i] > max)
            max = arr[i];
        if(arr[i] < min)
            min = arr[i];
    }


    printf("Maximum element: %d\n", max);
    printf("Minimum element: %d\n", min);

    return 0;
}