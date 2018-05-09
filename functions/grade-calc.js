// two arguments student score, total possible score
// 15/20 -> Print - You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59



let yourGradeMessage = function (studentScore, maxScore) {        
    let testPercent = (studentScore / maxScore) * 100;
    let letterGrade = ' ';

    if (testPercent >= 90) {
        letterGrade = 'A';
    } else if (testPercent >= 80) {
        letterGrade = 'B';
    } else if (testPercent >= 70) {
        letterGrade = 'C';
    } else if (testPercent >= 60) {
        letterGrade = 'D';
    } else if (testPercent >= 0) {
        letterGrade = 'F';
    } 

    return `You got a ${letterGrade} (${testPercent}%)!`;
}

let myTest = yourGradeMessage(15, 20);
console.log(myTest);





