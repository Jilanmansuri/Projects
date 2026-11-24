// #include <stdio.h>
// struct Book
// {
//     int id;
//     char title[20];
//     float price;
// };

// void lowestPrice(struct Book b[], int n) {
//     int index = 0;

//     for (int i = 1; i < n; i++) {
//         if (b[i].price < b[index].price) {
//             index = i;
//         }
//     }

//     printf("\nBook with Lowest Price:\n");
//     printf("ID: %d\nTitle: %s\nPrice: %.2f\n", b[index].id, b[index].title, b[index].price);
// }


// int main()
// {
//     struct Book books[5] = {
//         {101, "C Programming", 450},
//         {102, "Data Structures", 550},
//         {103, "DBMS", 300},
//         {104, "Operating System", 600},
//         {105, "Computer Networks", 500}
//     };

//     return 0;
// }











#include <stdio.h>

struct Book {
    int id;
    char title[50];
    float price;
};

// Function to find book with lowest price
void lowestPrice(struct Book b[], int n) {
    int index = 0;

    for (int i = 1; i < n; i++) {
        if (b[i].price < b[index].price) {
            index = i;
        }
    }

    printf("\nBook with Lowest Price:\n");
    printf("ID: %d\nTitle: %s\nPrice: %.2f\n", b[index].id, b[index].title, b[index].price);
}

// Function to print books above average price
void printAboveAverage(struct Book b[], int n) {
    float sum = 0;

    for (int i = 0; i < n; i++) {
        sum += b[i].price;
    }

    float avg = sum / n;

    printf("\nAverage Price = %.2f\n", avg);
    printf("Books with price above average:\n");

    for (int i = 0; i < n; i++) {
        if (b[i].price > avg) {
            printf("ID: %d  Title: %s  Price: %.2f\n", b[i].id, b[i].title, b[i].price);
        }
    }
}

int main() {
    // Predefined array of 5 books
    struct Book books[5] = {
        {101, "C Programming", 450},
        {102, "Data Structures", 550},
        {103, "DBMS", 300},
        {104, "Operating System", 600},
        {105, "Computer Networks", 500}
    };

    lowestPrice(books, 5);
    printAboveAverage(books, 5);

    return 0;
}
