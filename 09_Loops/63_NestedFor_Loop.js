// Nested For Loop

for (let i = 1; i <= 5; i++) 
    {
        for (let j = 1; j <=5; j++)
        {
            process.stdout.write(j + " "); // Using process.stdout.write() to print on the same line 
        }
        process.stdout.write('\n'); // Move to the next line after inner loop completes
    }