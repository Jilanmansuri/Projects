#include <stdio.h>
int printNum(int n) {
    if (n == 0) {
        return 0;   
    }    
    printf("%d ", n);        
    return printNum(n - 1);
}
int main() {
    printNum(10);
    return 0;
}
