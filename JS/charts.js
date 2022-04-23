// // const ctx = document.getElementById("myChart").getContext("2d");

// // const label = ["Dec", "Jan", "Fev", "Mar", "Apr", "May", "Jun"];

// // const data = {
// //     labels,
// //     dataSets: [{
// //         data: [56, 32, 25, 87, 66, 1, 75],
// //         label: "LAST 6 MONTHS",
// //     }, ],
// // };

// // const config = {
// //     type: "line",
// //     data: data,
// //     options: {
// //         responsive: true,
// //     },
// // };

// const myChart = new Chart(ctx, config);

// const ctx = document.getElementById("myChart").getContext("2d");
// const myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels: ["Dec", "Jan", "Fev", "Mar", "Apr", "May", "Jun"],
//         datasets: [{
//                 label: "# of Cotas",
//                 data: [56, 32, 25, 87, 66, 1, 75],
//                 borderColor: ["rgba(5, 0, 145, 1)"],
//                 borderWidth: 1.5,
//                 tension: 0.5,
//             },
//             {
//                 label: "# of Votes",
//                 data: [25, 23, 52, 11, 55, 8, 56],

//                 borderColor: ["rgba(255, 159, 64, 1)"],
//                 borderWidth: 1.5,
//                 tension: 0.5,
//             },
//         ],
//     },

//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     },
// });