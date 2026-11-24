#include <stdio.h>
enum weekday{monday,tuesday,wednesday,thurseday,friday,saturday,sunday};
int main() {

    enum weekday w=sunday;
    switch (w)
    {
    case monday:
    case tuesday:
    case wednesday:
    case thurseday:
    case friday:
    printf("Weekday");
    break;
        
    case saturday:
    case sunday:
    printf("Weekend");
        break;
    }
    return 0;
}