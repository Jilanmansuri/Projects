// 8. Count digits using recursion
#include <stdio.h>
int count(int n) {
    if (n == 0) {
        return 0;
    }
    return 1+count(n / 10);   
}
int main() {
    int n = 10020;
    if (n == 0) {
        printf("1");
    } else {
        printf("%d", count(n));
    }
    return 0;
}