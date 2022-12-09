function max(num1, num2)
{
    if (num2 > num1)
    {
        return num2;
    }
    else if (num1 > num2)
    {
        return num1;
    }
    else
    {
        return "The numbers are equal."
    }
}

max(10, 11);
max(15, 6);
max(7, 7);