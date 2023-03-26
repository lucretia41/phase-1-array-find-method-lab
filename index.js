// code your solution here


superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;

}
//find((element, index, array) => { /* … */ })

