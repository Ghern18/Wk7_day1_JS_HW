console.log('Hello world');


/* 
JavaScript is not Java
var declarations
hoisting
*/

var firstName;


firstName = 'brandt';
console.log(firstName);


const lastName = 'Smith'
// const lastName = '' error


let firstName2 

firstName2 = 'brandt'
firstName2 = 'Brandt'

const num = 5

const afloat = 4.5

console.log(num + 10)
console.log(num  * 10)
console.log(afloat / 5)
console.log(Math.floor(11 / 2))

console.log(10  ** 2)
console.log(11 % 2)

const alist = [1, 4, 5]
alist.push(19)
console.log(alist)

alist.push(39, 19)
console.log(alist)

const ob = {fName: 'dylan', 'lName': 'smith'}

console.log(ob['fName'])
console.log(ob.lName)

ob['lName'] = 'love'
console.log(ob.lName)

function adder(num1, num2){
  return num1 + num2
}

console.log(adder(10, 15));

const greeting = () => {
  console.log(' in arrow func')
}

greeting()

const greetFullName = (fName, lName) => {
  console.log(`${fName} ${lName}`)
}

greetFullName('brandt', 'carlson')


if ( 10 > 4 ) {
  console.log(' 10 > 4')
}

const age = 88

if (age < 18){
  console.log('child')
} else if ( age >= 18 && age < 65 ){
  console.log('adult')
} else {
  console.log('elder')
}


console.log(
  age < 18 ? 'child' : 'adult'
)

console.log(
  age < 18 ? 
  'child' : 
  age < 65 ?
  'adult' :
  'elder'
)

const nums = [2,4,8,66,88]
for (let i = 0; i < nums.length; i++){
  console.log(nums[i])
  console.log('bottom of loop')
}

for (const num of nums){
  console.log(num)
  console.log('bottom of 2nd loop')
}

let i = 0

while (i < -1){
  console.log(++i)
}

let y = 0 
do{
  console.log(y, 'y')
  y++
}while( y < -1)

const students = ['justin','parker','mike', 'catrina']

const [student1, student2, student3] = students

console.log(student2)

console.log(students)

students.map((student) => {console.log(student)})

console.log(students.map( student => student.length))

console.log(students.filter(
  student => student.length === 6
))

console.log(5 === '5')
console.log(
  [4,3,2].reduce((acc, curr) => acc + curr )
)


const addTwo = num => num + 2

console.log(addTwo(5));

(num) => {
  return num + 2
}

console.log(students.slice(0,2))

students.splice(2, 1 ,'judah')

console.log(students)



console.log(students[0].search('N'))