#include <stdio.h>

int main() {

      int n,i;
      int max,min;
      printf("Enter size of Array");+
      scanf("%d",&n);

      int arr[n];
      printf("Enter %d integers:\n", n);
      for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
      }

      max = arr[0];
      min = arr[0];
      for(int j=0;j<n;j++){
        if(arr[j]>max){
            max=arr[j];
        }
        if(arr[j]<min){
            min=arr[j];
        }
      }
      printf("Min = %d\n",min);
      printf("max = %d\n",max);

    return 0;
}