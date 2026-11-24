#include <stdio.h>

   enum Day {MON,TUE,WED,THU,FRI,SAT,SUN};
int main() {
   
   for(int i=MON;i<=SUN;i++){
       printf("Day %d\n",i);
   }
   return 0;
}