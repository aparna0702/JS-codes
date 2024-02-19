// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);   
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {   
        console.log(`inner loop ${j} for tye value of i: ${i}`);
    }
}

//break & continue

 for (let index = 0; index < 20; index++) {
    if(index ==5)
    {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
 }


 for (let index = 0; index < 20; index++) {
    if(index ==5)
    {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
 }