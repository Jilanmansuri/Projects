#include <stdio.h>

int main()
{
    int a = 20;    
    int b = 10;   
    char op = '/'; // hardcoded operation: +, -, *, /

    switch (op)
    {
    case '+':
        printf("Addition: %d\n", a + b);
        break;

    case '-':
        printf("Subtraction: %d\n", a - b);
        break;

    case '*':
        printf("Multiplication: %d\n", a * b);
        break;

    case '/':
        if (b != 0)
        {
            printf("Division: %d\n", a / b);
        }
        else
        {
            printf("Error: Division by zero not allowed\n");
        }
        break;

    default:
        // Default case will handle invalid operator or zero-division logic
        printf("Invalid operation\n");
    }

    return 0;
}
