// declare function ie checkSpeed

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
// use if statement so as to execute more than one condiotion on a code
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}


const speed = 80;
checkSpeed(speed);
