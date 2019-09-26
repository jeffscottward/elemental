// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

// Assumptions 
//
// Array always has non-negative whole numbers
// no retrun value of function
// no complexity boundaries
// Focus on correctness

// A is the array
// n >= 1 <= 200 (length of array)
// k >= 1 <= 1000000000 ( supplied max row length #)
// A[X] >= 0 <= 1000000000 ( range of values in array )

// Needed properties of a cell
//
// each cell === width of largest number
// need to accomidate for first and last cell of each row 
// for left and right sides
// need to accomidate for first and last row's
// top/bottom of cell

function solution(A, K) {
  let arr = A;
  let arrProxy = [...A];
  let maxRowLength = K;
  let largestNum = arrProxy.sort((a, b) => b - a)[0];
  let cellWidth = String(largestNum).length
  let arrLen = arr.length
    
  let gridloopState = {
    topRow: true,
    bottomRow: false
  };
  
  // Something strange with the debug console
  // Have to inject text (not part of answer)
  // to get something to spit back a mesg

  const buildRowBorderChunk = cellWidth => {
    let tempArray = [];
    for (let i = 0; i < cellWidth; i++) {
      tempArray.push("-");
    }
    tempArray.push("+");
    let newArr = tempArray.join("");
    return newArr;
  };
 
  const buildRowTopBottomBorder = (cellWidth, rowLen, startPos) => {
    let row = [];
    row[0] = "+";
    for (let i = startPos || 0; i < rowLen; i++) {
      row.push(buildRowBorderChunk(cellWidth));
    }
    return row.join("");
  };

  const buildCell = (val, cellWidth) => {
    let valChars = String(val).length;

    // Needed spaces to fill for uniform cells
    let spaces = cellWidth - valChars;

    // String Array
    let tempArray = [];

    // Add spaces
    for (let i = 0; i < spaces; i++) {
      tempArray.push(" ");
    }

    // Add number, divider
    tempArray.push(val);
    tempArray.push("|");
    let newArr = tempArray.join("");
    return newArr;
  };

  const buildMiddleOfRowCells = (cellWidth, rowLen, arr, startPos) => {
    let midRow = [];
    midRow[0] = "|";
    for (let i = startPos || 0; i < rowLen; i++) {
      let newCell = buildCell(arr[i], cellWidth);
      midRow.push(newCell);
    }
    return midRow.join("");
  };
  
  if(arrLen > maxRowLength) {
    // Do math for more than one row
    
    // NOTE - This is where I realized the
    // the fatal flaw of not constructing the cells individually.
    // I gave it a quick whirl but felt it was a waste to build incorrectly

    // ALSO NOTE: Besides my broken hand for speed
    // I was spending time fighting the web-IDE too much 
    // to the point of not being careful about constraints

    // let rowsWithOutRemainders = Math.floor(arrLen / maxRowLength)
    // let cellRemandiners = arrLen % maxRowLength;

    // console.log("rowsWithOutRemainder: " + rowsWithOutRemainder);
    // console.log("rowWithRemainder: " + cellRemandiners);

    // let topborder
    // let valRow
    
    // for(let i = 0; i < rowsWithOutRemainders; i++){
    //   topborder = buildRowTopBottomBorder(cellWidth, maxRowLength, (i * maxRowLength));
    //   valRow = buildMiddleOfRowCells(cellWidth, arrLen, arr,  (i * maxRowLength));
    // }

    // let rowsWithOutRemaindersBottom = buildRowTopBottomBorder(cellWidth, maxRowLength);

    // for(let i = 0; i < rowsWithOutRemainders; i++){}
    // for(let i = 0; i < rowWithRemainder; i++){
    //   let valRow = buildMiddleOfRowCells(cellWidth, arrLen, arr);
    // }    
    
    // console.log("rowWithRemainder: " + rowWithRemainder);

  } else {
    let rowBorder = buildRowTopBottomBorder(cellWidth, arrLen);
    let middleRow = buildMiddleOfRowCells(cellWidth, arrLen, arr);

    // Merge rows together
    console.log(rowBorder + "\n" + middleRow + "\n" + rowBorder);
  }
}

// init app
// solution([4, 35, 80, 123, 12345, 44, 8, 5], 10);
// solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4);