// #include <stdio.h>

// //   Q-1

//     //    maximum number
// int max(int arr2[]){

//     int max=arr2[0];
//     for(int i=0;i<5;i++){
//         if(arr2[i]>max){
//             max=arr2[i];
//         }
//     }
//     printf("max number %d\n",max);
//     return 0;

// }

//         // minimum nuber

// int min(int arr3[]){

//     int min=arr3[0];
//     for(int i=0;i<5;i++){
//         if(arr3[i]<min){
//             min=arr3[i];
//         }
//     }
//     printf("min number %d\n",min);
//     return 0;

// }
//   int main()
//   {
//       int arr3[]={6,37,5,16,25};
//       min(arr3);

//           int arr2[]={6,37,5,16,25};
//           max(arr2);
//           return 0;
//       }

//  Q-2

// sum of array

//     #include<stdio.h>
// int main()
// {
// float arr2[]={6,3,9,11,25};

// float sum=0;
// float avg;
// for(int i=0; i<5; i++){
// sum=sum+arr2[i];
// }
// printf("sum of array %f\n",sum);
// printf("average is %f\n",sum/5);

// return 0;
// }

// Q--7

// #include <stdio.h>

// int main()
// {

//     int arr[] = {1, 2, 3, 2, 1};
//     int size = sizeof(arr) / sizeof(arr[0]);
//     int isPalindrome = 1;

//     for (int i = 0; i < size / 2; i++)
//     {
//         if (arr[i] = arr[size - 1 - i])
//         {
//             i = 0;
//         }
//     }

//     if (isPalindrome)
//         printf("Array is a Palindrome\n");
//     else
//         printf("Array is NOT a Palindrome\n");

//     return 0;
// }









    // Q=3


  
// #include <stdio.h>
// int main()
// {

//     int arr[4] = {1, 3, 8, 1};

//     int count = 0;
//     int len = sizeof(arr) / sizeof(arr[0]);

//     for (int i = 0; i < len; i++)

//     {
//         if (arr[0] == arr[i])
//         {
//             count++;
//         }
//     }

//     printf("freq of arr[0]: %d\n", count);

//     count = 0;
//     for (int i = 0; i < len; i++)

//     {
//         if (arr[1] == arr[i])
//         {
//             count++;
//         }
//     }

//     printf("freq of arr[0]: %d\n", count);

//     count = 0;
//     for (int i = 0; i < len; i++)

//     {
//         if (arr[2] == arr[i])
//         {
//             count++;
//         }
//     }

//     printf("freq of arr[0]: %d\n", count);

//     count = 0;
//     for (int i = 0; i < len; i++)

//     {
//         if (arr[3] == arr[i])
//         {
//             count++;
//         }
//     }

//     printf("freq of arr[0]: %d\n", count);

//     return 0;
// }



// Q=3


#include <stdio.h>

int main()
{
    // int arr[11] = {1, 3, 8, 1, 5, 8, 6, 7, 5, 5, 8};

    // int count = 0;
    // int len = sizeof(arr) / sizeof(arr[0]);

    // for (int j = 0; j < len; j++)

    // {
    //     for (int i = 0; i < len; i++)

    //     {
    //         if (arr[j] == arr[i])
    //         {
    //             count++;
    //         }
    //     }

    //     printf("freq of arr[%d]: %d\n", j, count);

    //     count = 0;
    // }




    int arr[4]={1,2,3,5};
for(int i=1;i<4;i++){
    if(arr[i]==i+1){
        
    }
    else{
        printf("%d is not",i+1);
        break;
    }
}

    return 0;
}