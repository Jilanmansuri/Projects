#include <stdio.h>


struct Date {
    int day;
    int month;
    int year;
};

struct employee {
    char id[20];
    char name[10];
    struct Date joiningDate;
};

int main() {
    struct Date s1;
    struct employee s2;

    
    printf("Enter day:\n");
    scanf("%d", &s1.day);
    printf("Enter month:\n");
    scanf("%d", &s1.month);
    printf("Enter year:\n");
    scanf("%d", &s1.year);

    
    printf("Enter employee ID:\n");
    scanf("%s", s2.id);
    printf("Enter employee name:\n");
    scanf("%s", s2.name);
    printf("Enter joining day:\n");
    scanf("%d", &s2.joiningDate.day);
    printf("Enter joining month:\n");
    scanf("%d", &s2.joiningDate.month);
    printf("Enter joining year:\n");
    scanf("%d", &s2.joiningDate.year);

    
    
    printf("Date: %d\n", s1.day, s1.month, s1.year);

   
    printf("ID: %s\n", s2.id);
    printf("Name: %s\n", s2.name);
    printf("Joining Date: %d / %d / %d", s2.joiningDate.day,s2.joiningDate.month ,s2.joiningDate.year);

    return 0;
}