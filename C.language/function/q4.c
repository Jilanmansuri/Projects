#include <stdio.h>

int main() {
    int n, i, j;

    
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n], freq[n];

   
    printf("Enter %d integers:\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        freq[i] = -1; 
    }

    
    for(i = 0; i < n; i++) {
        int count = 1;
        if(freq[i] != 0) {
            for(j = i + 1; j < n; j++) {
                if(arr[i] == arr[j]) {
                    count++;
                    freq[j] = 0;
                }
            }
            freq[i] = count;
        }
    }

    printf("\nDuplicate elements and their counts:\n");
    int found = 0;
    for(i = 0; i < n; i++) {
        if(freq[i] > 1) {
            printf("%d occurs %d times\n", arr[i], freq[i]);
            found = 1;
        }
    }

    if(!found)
        printf("No duplicates found.\n");

    return 0;
}