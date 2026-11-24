#include <stdio.h>
int calc(int n) {
    if (n == 0) {
        return 0;  
    } 
    return (n%10) + calc(n / 10); 
}
int main() {
    printf("%d", calc(523));  
    return 0;
}