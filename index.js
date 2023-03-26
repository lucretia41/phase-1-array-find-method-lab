// code your solution here


superbowlWin = (record) => {
    const payton = record.find(record => record.result === "W");
    return !!payton ? payton.year : undefined;

}
// find((element, index, array) => { /* … */ })
// function superbowlWin(record) {
//     const payton = record.find(win => win.result === "W")
//     if (payton) {
//         return payton.year
//     } else {
//         return undefined
//     }
// };






