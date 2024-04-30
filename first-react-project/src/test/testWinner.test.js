import testWinner from "../testWinner"
const testCase1 = [
    "X","X","O",
    "X","O","",
    "X","O","O"
]
const testCase2 = [
    "X","X","X",
    "","","",
    "","",""
]
const testCaseOWin = [
    "O","O","O",
    "","","",
    "","",""
]
const testCaseOWin1 = [
    "X","O","X",
    "O","X","X",
    "O","O","O"
]
const testCaseOWin3 = [
    "O","X","",
    "O","","X",
    "O","X",""
]
const testCaseOWin4 = [
    "O","X","",
    "O","O","X",
    "X","X","O"
]

const gtestCaseOWin1 = [
    "O", "X", "",
    "O", "O", "X",
    "X", "X", "O",
  ];
  
const gtestCaseOWin2 = [
    "X", "O", "O",
    "O", "O", "X",
    "O", "X", "O",
  ];
  
  const gtestCaseOWin3 = [
    "X", "O", "X",
    "O", "O", "O",
    "X", "X", "O",
  ];
  
  const gtestCaseOWin4 = [
    "X", "O", "X", 
    "X", "X", "O",
    "O", "O", "O",
  ];
  
  const gtestCaseOWin5 = [
    "O", "O", "O",
    "O", "X", "X",
    "X", "X", "O",
  ];
  
const gtestCaseOWin6 = [
    "X", "O", "X",
    "O", "O", "X",
    "X", "O", "O",
];

const draw1 = [
    "X", "O", "X",
    "O", "X", "O",
    "O", "X", "O",
];

const draw2 = [
    "O", "X", "O",
    "O", "X", "O", 
    "X", "O", "X"
];
  

// Different syntax :
// test('returns true', () => {
//     expect(testWinner()).toBe(true)
// })
it(`The result boolean value, Boolean(result) where result = testWinner([
    "O","O","O",
    "","","",
    "","",""
], "O") should be true`, () => {
    let result = testWinner(testCaseOWin, "O");
    expect(Boolean(result)).toBe(true)
})

it('The result should be "O", horizontal tests', () => {
    let result = testWinner(testCaseOWin, "O");
    expect(result).toBe("O")
    result = testWinner(testCaseOWin1, "O");
    expect(result).toBe("O")
    result = testWinner(gtestCaseOWin3, "O");
    expect(result).toBe("O")
    result = testWinner(gtestCaseOWin4, "O");
    expect(result).toBe("O")
    result = testWinner(gtestCaseOWin5, "O");
    expect(result).toBe("O")
})

it('Result should be "O", vertical tests', () => {
    let result = testWinner(gtestCaseOWin3, "O")
    expect(result).toBe("O")
    result = testWinner(gtestCaseOWin6, "O");
    expect(result).toBe("O")
})

it('Result should be "O", diagonal tests', () => {
    let result = testWinner(gtestCaseOWin1, "O")
    expect(result).toBe("O")
    result = testWinner(gtestCaseOWin2, "O")
    expect(result).toBe("O")
})

it('The result should be false', () =>{
    let result = testWinner(testCaseOWin, "X");
    expect(result).toBe(false)
    result = testWinner(testCaseOWin4, "X");
    expect(result).toBe(false)
    result = testWinner(draw1, "X");
    expect(result).toBe(false)
    result = testWinner(draw2, "O");
    expect(result).toBe(false)
})

it('Some x Win Cases', () => {
    let result = testWinner(testCase1, "X");
    expect(result).toBe("X")
    result = testWinner(testCase2, "X");
    expect(result).toBe("X")
})