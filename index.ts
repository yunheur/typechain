const name = "yunheur",
age = 28,
gender = "male";

// gender는 선택
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age)

export {};