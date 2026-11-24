#include <stdio.h>

int main() {
    FILE *fp;
    char buffer[1000];

    fp = fopen("name.txt", "r");

    // EOF 
    
    while (fgets(buffer, sizeof(buffer), fp) != NULL) {
        printf("%s", buffer);
    }
    
    // fgets(buffer, sizeof(buffer), fp);
    // printf("%s", buffer);

    fclose(fp);
    return 0;
}