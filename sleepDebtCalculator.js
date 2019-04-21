function getSleepHours(day){
    switch (day){
      case 'monday':
        return 3;
        break;
      case 'tuesday':
        return 4;
        break;
      case 'wednesday':
        return 5;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 9;
        break;
    }
  }
  function getActualSleepHours(){
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  function getIdealSleepHours(idealHours){
    return idealHours*7;
  }
  console.log(getActualSleepHours(), getIdealSleepHours(8));
  function calculateSleepDebt(){
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log('User got the perfect amount of sleep.');
    }else if (actualSleepHours > idealSleepHours){
      var overSleep = Math.abs(actualSleepHours - idealSleepHours);
      console.log('User got more sleep than needed.');
      console.log(`Overslept by ${overSleep} hours.`);
    } else {
      var overSleep = Math.abs(actualSleepHours - idealSleepHours);
      console.log('User should get some rest.');
      console.log(`Sleepdebt is ${overSleep} hours.`);
    }
  }
  calculateSleepDebt();