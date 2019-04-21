// my age is 22
var myAge = 22;
// early years is 2 human year and 10.5 dogs years each
var earlyYears = 2;
earlyYears = earlyYears*10.5;
//later years are years after first 2 early years of me
var laterYears = myAge-2;
// after first 2 early years, human:dog year is 1:4
laterYears = laterYears*4;
// console.log(earlyYears, laterYears);
var myAgeinDogYears = earlyYears+ laterYears;
// assign my name in lower case to myName var
var myName = 'Ba'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`)