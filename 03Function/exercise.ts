// Exercise 1

const twoFer = (name: string = "you"): string => {
  return ` One for ${name}, One for me`;
};

console.log(twoFer());

console.log(twoFer("Elton"));

//Exercise 2

const isLeapyear = (year: number): boolean => {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapyear(2012));
