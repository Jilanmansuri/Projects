#include <stdio.h>
int printNum(int n) {
    if (n == 0) {
        return 0;   
    }    
    printNum(n - 1);  
    printf("%d ", n);      
    return 0;
}
int main() {
    printNum(10);
    return 0;
}
