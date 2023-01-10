let class_info = [];

class_info.push({
    performance: { phy: 30, chem: 20, math: 30 },
  name: "sanni",
});

class_info.push({
    name: "bola",
    performance: { phy: 50, chem: 40, math: 10 },
});

class_info.push({
    name: "anu",
    performance: { phy: 90, chem: 60, math: 70 },
});

let score = []

class_info.forEach((info) => {
    score.push(Object.values(info.performance).reduce((a, b) => a + b)
)})

console.log("here is the avarage score", score.reduce((a, b) => a + b / score.length));

class_info.forEach(
  (x) => (x.total = Object.values(x.performance).reduce((a, b) => a + b))
);
console.log(class_info);

const sortinfo = (x) => {
  return (a, b) => {
    if (a[x] < b[x]) {
      return a[x];
    } else if (a[x] > b[x]) {
      return -1;
    }
    return 0;
  };
};

// console.log(class_info.sort(sortinfo("total")));



// // teacher
// let classData = [];

// classData.push({ name: "Peter", performance: { Phy: 90, Chem: 96, Math: 70 } });
// classData.push({
//   name: "Malush",
//   performance: { Phy: 10, Chem: 20, Math: 10 },
// });
// classData.push({
//   name: "Samuel",
//   performance: { Phy: 22, Chem: 15, Math: 10 },
// });
// classData.push({
//   name: "Gideon",
//   performance: { Phy: 11, Chem: 12, Math: 33 },
// });

// // console.log(classData);
// let classScore = [];
// classData.forEach((el) => {
//   classScore.push(Object.values(el.performance).reduce((a, b) => a + b));
// });

// // console.log(
// //   "The average class Performance is: ",
// //   classScore.reduce((a, b) => a + b) / classScore.length
// // );

// classData.forEach((el) => {
//   //   classScore.push(Object.values(el.performance).reduce((a, b) => a + b));
//   el.total = Object.values(el.performance).reduce((a, b) => a + b);
// });
// console.log(classData);

// const sortedData = (x) => {
//   return (a, b) => {
//     if (a[x] < b[x]) {
//       return 1;
//     } else if (a[x] > b[x]) {
//       return -1;
//     }
//     return 0;
//   };
// };

// // console.log(classData.sort(sortedData("total")));
