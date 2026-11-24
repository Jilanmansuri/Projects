#include <stdio.h>

struct player
{
    char name[50];
    int run;
    int matches;
};

int main()
{

    struct player players[5] = {
        {"virat", 450, 23},
        {"dhoni", 550, 21},
        {"jadeja", 300, 16},
        {"rohit", 600, 20},
        {"sachin", 500, 28}};

        printf(players.players[2]);
    return 0;
}