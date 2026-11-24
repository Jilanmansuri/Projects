#include <stdio.h>
struct Name{
    
	int roll;
	char section;
	float cgpa;
	char add[80];
};

union Name1{
    
	int roll;
	char section;
	float cgpa;
	char add[80];
};


int main()
{
   struct Name s1 ={1,'A',87.5,"ssdfghjytredf"};
   
   printf("%d\n",s1.roll);
   printf("%c\n",s1.section);
   printf("%f\n",s1.cgpa);
   printf("%s\n",s1.add);
   
   
   struct Name s2 ={2,'A',87.5,"ssdfghjytredf"};
   
   printf("%d\n",s2.roll);
   printf("%c\n",s2.section);
   printf("%.2f\n",s2.cgpa);
   printf("%s\n",s2.add);
   
   
//   union union union union 
   union Name1 u1 ={2};
   
   printf("%d\n",u1.roll);
   printf("%c\n",u1.section);
   printf("%.2f\n",u1.cgpa);
   printf("%s\n",u1.add);
   
   
   
   
   
   
	return 0;
}