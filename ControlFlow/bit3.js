function max(num1, num2)
{
    (num2 > num1) ?
        printf(num2) :
    (num1 > num2) ?
        printf(num1) :
    (num1 == num2) ?
        printf("The numbers are equal.");
}

max(15, 6);