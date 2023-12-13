// მომხმარებელს შეყავს სამკუთხედის გვერდები, თქვენ უნდა დაადგინოთ იარსებებს თუ არა ასეთი სამკუთხედი(სამკუთხედი შეიძლება არსებობდეს თუ მისი ნებისმიერი ორი გვერდის სიგრძეების ჯამი მეტია მესამეზე)

const a = +prompt('სამკუთხედის პირველი გვერდი');
const b = +prompt("სამკუთხედის მეორე გვერდი");
const c = +prompt("სამკუთხედის მესამე გვერდი");

const textOne = 'სამკუთხედის ზომები შეესაბამება რეალობას'
const textTwo = 'სამკუთხედის ზომები არ შეესაბამება რეალობას'

if (a + b > c && a + c > b && b + c > a) {
  console.log(textOne);
} else {
  console.log(textTwo);
}



// მომხმარებელს შეყავს სამი რიცხვი. თქვენ უნდა დაადგინოთ არის თუ არა პირველი რივცხვი მოთავსებული მეორეს და მესამეს შორის

const firstNumb = +prompt('შეიყვანე პირველი რიცხვი')
const secondNumb = +prompt('შეიყვანე მეორე რიცხვი')
const thirdNumb = +prompt('შეიყვანე მესამე რიცხვი')

const firstText = 'პირველი რიცხვი მოთავსებულია მეორესა და მესამე რიცხვებს შორის'
const secondText = 'პირველი რიცხვი სხვაგანაა )))'

if (firstNumb > secondNumb && firstNumb < thirdNumb) {
  console.log(firstText);
} else {
  console.log(secondText);
}




// მომხმარებელს შეყავს წელი. თქვენ უნდა დაადგინოთ არის თუ არა ეს წელი ნაკიანი.(წელი ნაკიანია თუ ის უნაშთოდ იყოფა 4ზე და არ იყოფა უნაშთოდ 100ზე, ან უნაშთოდ იყოფა 400ზე)

const birthDate = +prompt('შეიყვანე შენი დაბადების წელი')

const date = 'შენ ნაკიან წელში დაბადებულხარ ))'
const otherDate = 'შენ არ ხარ ნაკიან წელში დაბადებული'

if (birthDate % 4 == 0 && birthDate % 100 != 0) {
  console.log(date);
} else if (birthDate % 400 == 0) {
  console.log(date);
} else {
  console.log(otherDate);
}