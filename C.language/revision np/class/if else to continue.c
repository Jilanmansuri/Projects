#include <stdio.h>

int main()
{

    // 	int num=12;

    // 	if(num%2==0) {
    // 		printf("even\n");
    // 	}
    // 	else if(num>0) {
    // 		printf("positive number\n");
    // 	}
    // 	else {
    // 		printf("odd\n");
    // 	}

    // ternary operator

    // 	int num1=10;
    // 	int num2=12;
    // 	(num%2==0)?num1:num2;
    //  (num%2==0)?(printf("even")):(printf("odd"));

    // start:

    // 	switch(num%2) {
    // 	case 0:
    // 	{
    // 		printf("even\n");
    // // 		break;
    // 		goto start;
    // 	}
    // 	case 1:
    // 	{
    // 		printf("odd\n");
    // // 		break;
    // 	}

    // 	default: {
    // 		printf("none\n");
    // 	}

    // 	}

    // fibonacci

    int f1 = 0;
    int f2 = 1;
    int f3;

    // for(int i=3;i<=10;i++){
    //     f3=f1+f2;
    //     f1=f2;
    //     f2=f3;

    //     printf("fibonacci %d step is:%d\n",i,f3);
    // }

    // while loop
    //  	int i=3;
    //  	while(i<=9) {
    //  		f3=f1+f2;
    //  		f1=f2;
    //  		f2=f3;
    //  		printf("fibonacci %d step is:%d\n",i,f3);
    //  		i++;
    //  	}

    // do while

    int i = 3;
    do
    {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        printf("fibonacci %d step is:%d\n", i, f3);
        i++;
    }

    while (i <= 9);

    return 0;
}