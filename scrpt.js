// Two way to declare an object
// i:Literals
// ii:Constructor
// ONe more concept in object singleton
// Whenever object is declared by conctructor method it is knwown as singleton
// keys mei space hoga . se access nh krskte [] ye lgakr access hoga warna . se krenge



// const user = [
//     {
//         username: "Habiba khan",
//         id: "229",
//         class: "12",
//         subjects: [
//             {
//                 subject: "Maths",
//                 marks: 87,
//             },
//             {
//                 subject: "Physics",
//                 marks: 90,
//             },
//             {
//                 subject: "Pfund",
//                 marks: 80,
//             },
//         ],
//     },
//     {
//         username: "Rizwa fatima",
//         id: "319",
//         class: "11",
//         subjects: [
//             {
//                 subject: "Maths",
//                 marks: 87,
//             },
//             {
//                 subject: "Physics",
//                 marks: 90,
//             },
//             {
//                 subject: "Pfund",
//                 marks: 80,
//             },
//         ],
//     },
// ];

// function totalMarks(subjects) {
//     let total = 0;
//     for (let i = 0; i < subjects.length; i++) {
//         total += subjects[i].marks;
//     }
//     return total;
// }

// function percentage(subjects) {
//     return (totalMarks(subjects) / (subjects.length * 100)) * 100;
// }

// function grade(percentage) {
//     if (percentage >= 80) return "A+";
//     else if (percentage >= 60) return "B";
//     else if (percentage >= 50) return "C";
//     else return "F";
// }

// const inputName = prompt("Please input your name");
// const inputId = prompt("Please input your id");

// let student = null;

// for (let i = 0; i < user.length; i++) {
//     if (inputName === user[i].username && inputId === user[i].id) {
//         student = user[i];
//         break;
//     }
// }

// if (student) {
//     const studentPercentage = percentage(student.subjects);
//     console.log(grade(studentPercentage));
//     document.getElementById("report-card").innerHTML = `
//         <p><strong>Name:</strong> ${student.username}</p>
//         <p><strong>Id:</strong> ${student.id}</p>
//         <p><strong>Class:</strong> ${student.class}</p>
//         <p><strong>Marks:</strong> ${totalMarks(student.subjects)}</p>
//         <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
//         <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
//     `;
// } else {
//     console.log("Student not found");
// }
                  


// function generateEven(){
//     let inputvalue= document.getElementById('inputvalue').value;
//     let i=0;
//     let value= '';
//     while(i<=inputvalue){
//         if(i % 2 ==0){
//             value+=`${i}`

//         }
//         i++
//     }
//     document.getElementById('result').innerHTML=value
// }

let i=0;
do{
    console.log("Habiba khan");
    i++;
}
while(i>=9);

