// write a function returning a boolean if the object has enough age to vote
function canIVote(age){
    return age >= 18 ? true : false;
  }
// if 2 string parameters are the same, return true, else false
function agreeOrDisagree(string1, string2) {
    return string1 === string2 ? 'You agree!' : 'You disagree!';
  }
// function tells if the object is a child, teen or adult or senior or none of the above
const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}
// return the letter grade calculated from 3 int params, grade 0 or 100+ of any param is not accepted
function finalGrade(n1, n2, n3) {
    avgGrade = (n1+n2+n3)/3;
    if(n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100 ){
      return 'You have entered an invalid grade.';
    }else if(avgGrade <=59) {
      return 'F';
    }else if(avgGrade <= 69){
      return 'D';
    }else if(avgGrade <= 79){
      return 'C';
    }else if(avgGrade <= 89){
      return 'B';
    }else {
      return 'A';
    }
  }
