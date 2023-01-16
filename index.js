// First Task
// ----------
// const checkAge = (age) => (age > 18) ? 'true' : confirm('Родители разрешили?')
// const checkAge = (age) => (age > 18) || confirm('Родители разрешили?')
// console.log(checkAge(19))


// Second Task
// -----------
// function pow (x, n) {
//     let result = x
//     for (let i = 1; i < n; i++) {
//         result = result * x
//     }
//     return result
// } 
// console.log(pow(3, 4))

// const pow = (x, n) => Math.pow(x,n)
// console.log(pow(3, 3))


// Third Task
// -----------
// const ask = (question, yes, no) => confirm(question) ? yes() : no()
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );


// Fourth Task
// -----------
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b)=> b-a);
// console.log(arr)


// Fifth Task
// -----------
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
// let names = [ vasya.name, petya.name, masha.name ];
// alert( names );

// Sixth Task
// -----------
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user=>({
//     fullName: `${user.name} ${user.surname}`, id: user.id
// }))

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
