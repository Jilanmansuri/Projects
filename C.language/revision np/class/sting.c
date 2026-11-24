// strlen — length of a C‑string (before '\0')
// strcpy — copy "source" → dest
// strcat — append "source" to end of dest
// strcmp — compare two strings lexicographically

#include <stdio.h>
#include <string.h>
int main()
{

    char one[] = "12345";
    char *two = "8923";

    // strcat - add two string  // strcpy - copy replace two string
    // strncat- jo bhi number lika hoga utne hi number add karga // strncpy - jo bhi number likha hoga usko hi replace karega second string se copy karke firast me replace karaga

    // strcat(one, two);
    // strcpy(one, two);
    // printf("%s\n", one);
    strncat(one, two, 2);
    printf("%s\n", one);

    // strncpy(one, two, 1);
    // printf("%s\n", one);

    // strcat(one, one);
    // printf("%s\n", one);
    // strcat(one, two);
    // printf("%s\n", one);
    // int d = strlen(one);
    // printf("%d\n", d);
    // int f = strlen(two);
    // printf("%d\n", f);

    char one[] = "AXZPYZ";
    char two[] = "AXZPYQA";

    printf("%d\n", strncmp("AXZPYC", "AXZPYQA", 6));
    // printf("%d\n",strncmp("XZY&*","XZY~"));
    return 0;
}