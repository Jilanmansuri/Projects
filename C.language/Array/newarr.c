#include <stdio.h>
int main() {
    int arr[] = {3,3,3,3,3,3,3,3};
    int len = sizeof(arr)/sizeof(arr[0]);
    for(int i = 0; i < len; i++) {
        for(int j = i + 1; j < len; j++) {
            if(arr[i] == arr[j]) {
                printf("%d => ", arr[i]);
                printf("%d\n",j);
            }
        }
    }
    return 0;
}



// #include <stdio.h>
// int main() {
//     int arr[] = {3,3,3,3,3,3,3,3};
//     int len = sizeof(arr) / sizeof(arr[0]);

//     int num = arr[0];     // duplicate number
//     int lastIndex = 0;    // store last index

//     for(int i = 1; i < len; i++) {
//         if(arr[i] == num) {
//             lastIndex = i;   // update everytime
//         }
//     }
//     printf("%d => %d\n", num, lastIndex);

//     return 0;
// }

