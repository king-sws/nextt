// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         document.getElementById('helo').style.visibility = "visible";
//         resolve();
//     }, 1000);
// })
// .then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById('helo2').style.visibility = "visible";
//             resolve();
//         }, 1000);
//     });
// })
// .then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById('helo3').style.visibility = "visible";
//             resolve();
//         }, 1000);
//     });
// })
// .then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById('helo4').style.visibility = "visible";
//             resolve();
//         }, 1000);
//     });
// });
async function changeVisibility() {
    const delay = x => new Promise(resolve => setTimeout(resolve, x));

    await delay(1000);
    document.getElementById('helo').style.visibility = "visible";

    await delay(1000);
    document.getElementById('helo2').style.visibility = "visible";

    await delay(1000);
    document.getElementById('helo3').style.visibility = "visible";

    await delay(1000);
    document.getElementById('helo4').style.visibility = "visible";
}

changeVisibility();
