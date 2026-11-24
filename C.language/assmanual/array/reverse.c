#include <stdio.h>
int main()
{
    int arr[5] = {10, 20, 30, 40, 50};
    for (int i = 4; i >= 0; i--)
    {
        printf("%d ", arr[i]);
    } 
    return 0;
}


int arr1[5] = {1,3,5,6,7};
    int arr2[5] = {};

    for(int i=0; i<5; i++){
        arr2[5-i-1] = arr1[i];
    }
    for(int i=0; i<5; i++){
        printf("%d ",arr2[i]);
    }