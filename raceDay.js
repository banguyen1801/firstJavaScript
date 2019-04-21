let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = false;
let runnerAge = 18;
if (runnerAge > 18 && registerEarly) {
  raceNumber += 1000;
}
if (runnerAge > 18 && registerEarly){
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if ( runnerAge > 18 && !registerEarly){
  consile.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 am. Your race number is ${raceNumber}.`);
} else {
  console.log(`Please go see the registration desk.`);
}