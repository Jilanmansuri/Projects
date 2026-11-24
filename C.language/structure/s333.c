#include <stdio.h>

struct Date{

    int day;
    int month;
    int year;
  
   
};



 struct employee{
        char id[20];
        char name[10];
        
       struct Date joining;
      
       
       
    };
int main() {
  
           struct Date s1;
           

           printf("Enter day\n");
           scanf("%d",&s1.day);
           printf("Enter month\n");
           scanf("%d",&s1.month);
           printf("Enter year\n");
           scanf("%d",&s1.year);

           struct employee s2;
           

            printf("Enter id\n");
           scanf("%s",&s2.id);
           printf("Enter name\n");
           scanf("%s",&s2.name);
           
        
           printf("Enter joiningdate\n");
           scanf("%d",&s2.joining);

           printf(" day: %d\n",s1.day);
           printf(" month: %d\n",s1.month);
           printf("year: %d\n",s1.year);

           printf("year: %s\n",s2.id);
           printf("year: %s\n",s2.name);
           printf("year: %d\n",s2.date.joining);





           


    return 0;
}