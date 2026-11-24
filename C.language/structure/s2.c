#include <stdio.h>

struct student
{
    int rollno;
    char name[25];
    float marks;     
};

int main() {

    struct student s1,s2,s3,s4,s5;
    
    printf("Enter roll no:");
    scanf("%d",&s1.rollno);
    printf("Enter name:");
    scanf("%s",s1.name);
    printf("Enter marks");
    scanf("%f",&s1.marks);
   

    printf("Enter roll no:");
    scanf("%d",&s2.rollno);
    printf("Enter name:");
    scanf("%s",s2.name); 
    printf("Enter marks");
    scanf("%f",&s2.marks);
    
  

    printf("Enter roll no:");
    scanf("%d",&s3.rollno);
    printf("Enter name:");
    scanf("%s",s3.name);
    printf("Enter marks");
    scanf("%f",&s3.marks);
    
   

    printf("Enter roll no:"); 
    scanf("%d",&s4.rollno);
    printf("Enter name:");
    scanf("%s",s4.name);
    printf("Enter marks");
    scanf("%f",&s4.marks);
    
    

    printf("Enter roll no:");
    scanf("%d",&s5.rollno);
    printf("Enter name:");
    scanf("%s",s5.name);
    printf("Enter marks");
    scanf("%f",&s5.marks);

     
    printf(" rollno: %s\n",s1.rollno);
    printf(" name: %s\n",s1.name);
    printf("marks: %f\n",s1.marks);

     printf(" rollno: %s\n",s2.rollno);
    printf(" name: %s\n",s2.name);
    printf("marks: %f\n",s2.marks);

 printf(" rollno: %s\n",s3.rollno);
    printf(" name: %s\n",s3.name);
    printf("marks: %f\n",s3.marks);

    printf(" rollno: %s\n",s4.rollno);
    printf(" name: %s\n",s4.name);
    printf("marks: %f\n",s4.marks);

    printf(" rollno: %s\n",s5.rollno);
    printf(" name: %s\n",s5.name);
    printf("marks: %f\n",s5.marks);

    return 0;
}




