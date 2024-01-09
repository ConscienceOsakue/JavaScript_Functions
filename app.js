console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}
printOdds(100);




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age){
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age}
    year(s) until you can drive.`;

    if (age < 16){
        console.log(tooYoungMsg);

    }else {
        console.log(oldEnoughMsg);
    }
}

checkAge("Eka", 14);
checkAge("Frank", 27);
checkAge("kel", 30);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) {
    if (x > 0 && y > 0){
        return "Quadrant 1";
    }else if (x < 0 && y > 0){
        return "Quadrant 2";
    }else if (x < 0 && y < 0){
        return "Quadrant 3";
    }else if (x > 0 && y < 0){
        return "Quadrant 4";
    }else if (x == 0 && y != 0){
        return "X Axis";
    }else if (x != 0 && y == 0){
        return "Y Axis";
    }else {
        return "Origin";
    }

}
console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c){
    let isValid = isValidTriangle(a, b, c);
    if (isValid){
        if (a == b && b == c){
            return `Equilateral`;
        }else if (a == b || b == c || a == c){
            return `Isosceles`;
        }else {
            return `Scalene`;
        }
    }else {
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(2,3,4)); //scalene
console.log(checkTriangle(2,2,2)); //eduilateral
console.log(checkTriangle(1,2,2)); //isosceles
console.log(checkTriangle(1,1,2)); //invalid



// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainindDays = periodLength - day;
    let remainindData = planLimit - usage;
    let projectedUsage = remainindDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${remainindDays} day(s) remaining`);

    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day`);

    if(currentAvg > projectedAvg){
        statusMsg = "EXCEEDING";

    }else if(currentAvg < projectedAvg){
        statusMsg = "UNDER";
    }else{
        statusMsg = "AT"
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)})
GB from your data limit. To stay below your data plan, use no more than ${(remainindData / remainindDays).toFixed(2)} GB/day`)
}

dataUsageFeedback(100, 15, 56);
