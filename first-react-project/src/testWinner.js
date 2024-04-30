export default function testWinner(arr, playerTurn) {
    let cnt = 0;
    arr.forEach((e) => (e === playerTurn) ? cnt++ : false)
    if (cnt < 3) {return false}
    cnt = 0;
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            cnt=0;
        }
        if (arr[i] === playerTurn) {
            cnt++;
            if (cnt === 3) return playerTurn;
        } else {
            continue;
        }
    }
    cnt=0
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            cnt=0;
        }
        if (arr[Math.floor(i/3)+(i%3)*3] === playerTurn) {
            cnt++;
            if (cnt===3) return playerTurn
        } else {
            continue;
        }
    }
    let diag1 = true;
    let diag2 = true;
    for (let j = 0; j <3; j++) {
        if (arr[j*4]!==playerTurn || arr[j*4]===0) {
            diag1 = false;
        }
        if (arr[(j+1)*2]!==playerTurn || arr[(j+1)*2]===0) {
            diag2 = false;
        }
    }
    return (diag1 || diag2) ? playerTurn : false
}
