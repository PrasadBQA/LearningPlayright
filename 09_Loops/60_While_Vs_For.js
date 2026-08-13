let age = 7;
while (true) 
    {
        if (age > 10)
        {
            console.log(`Age is greater than 10, breaking the loop.`);
            break;
        }
        console.log(`Age is: ${age}`);
        age++;
    }