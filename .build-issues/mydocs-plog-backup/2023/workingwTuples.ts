const array1 = ["Bülent", "Morten", 52, "Male"]
console.log(array1, typeof array1)

const objArray1 = {
    nameX: "Volkan",
    last : "Morten",
    age: 16,
    gender: "Male"
}

console.log(objArray1, typeof objArray1);


// Destructuring example of objArray1

const { nameX, last, age, gender } = objArray1;


console.log(nameX, last, age, gender)


const { nameX: anotherName, age: anotherAge } = objArray1;

console.log(anotherName); // Stefan
console.log(anotherAge); // 40


const [ x, y, w] = array1;
console.log(x, y, w)


const [xx, yy, ...zz] = array1;
console.log(xx, yy);
console.log(zz);