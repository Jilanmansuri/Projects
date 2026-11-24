#include <stdio.h>
// void max(){
//     float arr1[5] = {7.5,11.4,86.3,45.2,34.1};

//      int length= sizeof(arr1)/sizeof(arr1[0]);
//      printf("lenth of array : %d\n ",length);
     
//     float max = arr1[0];
//     for(int i=0;i<5;i++){
//         if(arr1[i]>max){
//             max=arr1[i];
//         }
//     }
//     printf("max %f\n",max);
// }



    


// void min(){
//     int arr1[5] = {7,11,86,45,34};

//      int length= sizeof(arr1)/sizeof(arr1[0]);
//      printf("lenth of array : %d\n ",length);
     
//     int min = arr1[0];
//     for(int i=0;i<5;i++){
//         if(arr1[i]<min){
//             min=arr1[i];
//         }
//     }
//     printf("min %d\n",min);
// }




// int main()
// {
//    max();
    // min();







// void max(){
//     int arr1[5] = {7,11,86,45,34};

//      int length= sizeof(arr1)/sizeof(arr1[0]);
//      printf("lenth of array : %d\n ",length);
     
//     int max = arr1[0];
//     for(int i=0;i<5;i++){
//         if(arr1[i]>max){
//             max=arr1[i];
//         }
//     }
//     printf("max %d\n",max);
// }
// int main()
// {
//     max();





void max(int arr1[]){
    int max = arr1[0];
     for(int i=0;i<5;i++){
        if(arr1[i]>max){
            max=arr1[i];
        }
    }
    printf("max %d\n",max);

}
int main(){
    int arr2[] = {2,3,6,-1,-22};
    int arr1[] = {22,33,65,-121,-22};
    max(arr1);
    max(arr2);



   // 	  int arr[5] = {4,5,7,9,10};
	  
// 	  printf("reverse of array\n");

// 	  for(int a=4;a>=0;a--){

// 	      printf("%d\n",arr[a]);
// 	  }


//   printf("second largest array %d\n",arr[3]);
      
      
      
    //   int length= sizeof(arr)/sizeof(arr[0]);
      
    //   printf("lenth of array : %d ",length);
      
      


    // int arr1[7] = {4,5,6,7,8,9,10};
    //  int arr2[7] = {};
     
     
    //  for(int i=0;i<7;i++){
    //      arr2[7-i-1] = arr1[i];
    //  }
     
    //  for(int i=0; i<7 ; i++){
    //      printf("%d\n",arr2[i]);
    //  }
    

    //  char arr3[3] = {'a','b','c'};
    //  printf("array3 size %d \n",sizeof(arr3));
     
    //  float arr4[4] = {3.4,4.1,8.7,9.2};
    //  printf("array4 size %d\n",sizeof(arr4));
     
    //  double arr5[4] = {3,4,8,9};
    //  printf("array4 size %d\n",sizeof(arr5));
     
    //  int length= sizeof(arr3)/sizeof(arr3[0]);
    //   printf("lenth of array : %d\n ",length);
    
    //   int len= sizeof(arr4)/sizeof(arr4[0]);
    //    printf("lenth of array : %d\n ",len);
    
    //    int lnt= sizeof(arr5)/sizeof(arr5[0]);
    //     printf("lenth of array : %d\n ",lnt);
     

    return 0;
}