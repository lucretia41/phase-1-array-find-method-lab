// code your solution here


superbowlWin = (record) => {
    const peyton = record.find(record => record.result === "W");
    return !!peyton ? peyton.year : undefined;

}
// find((element, index, array) => { /* … */ })
// function superbowlWin(record) {
//     const peyton = record.find(win => win.result === "W")
//     if (peyton) {
//         return peyton.year
//     } else {
//         return undefined
//     }
// };
// function superbowlWin(record) {
//     const result = record.find(win => win.result === "W")
//     return !!result ? result.year : undefined;
// }
// so i know how it goes when not using payton manning as a variable






