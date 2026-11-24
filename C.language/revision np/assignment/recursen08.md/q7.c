// 7. Maximum in an array using recursion
#include <stdio.h>
int findMax(int arr[], int n)
{
    if (n == 1)
    {
        return arr[0];
    }
    int maxRest = findMax(arr, n - 1);
    if (arr[n - 1] > maxRest)
    {
        return arr[n - 1];
    }
    else
    {
        return maxRest;
    }
}

int main()
{
    int arr[] = {10, 55, 3, 78, 2, 90, 12};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = findMax(arr, n);
    printf("Maximum element: %d", max);
    return 0;
}




// #include <stdio.h>
// int findMax(int arr[] ,  int n){
// if(n==1){
//     return arr[0]; // Base case
// }
// int max = findMax(arr , n-1);
//  if( arr[n-1] > max) {
//     return arr[n-1];
//  }
//  else return max;
// }

// int main(){
//     int arr1[] = {3, 99, 1, 7,89};
//     int n1 = sizeof(arr1) / sizeof(arr1[0]);
//     printf("Max: %d\n", findMax(arr1, n1));
// return 0;
// }