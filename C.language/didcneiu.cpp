#include <iostream>
using namespace std;

int main()
{
    int a = 10;

    cout << "Good Afternoon" << endl;
    cout << a << endl;

    for (int i = 0; i < 5; i++)
    {
        if (i % 2 == 0)
        {
            cout << "Even number is: " << i << endl;
        }
        else
        {
            continue;
        }
    }
    return 0;
}
