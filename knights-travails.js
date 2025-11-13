  // [x, y] : x represents vertical-axis and y represents horizontal-axis

const visitedTracker = [ 
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false]
];

  // if parentTracker[2][1] === [0, 0], then it means that,
  // that position was reached from [0, 0] position(parentTracker[0][0])
const parentTracker = [ 
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];

function knightMoves(startingPosition, endingPosition) {
  const path = [];

  const queue = [];
  let idx = 0;
  visitedTracker[ startingPosition[0] ][ startingPosition[1] ] = true;
  queue.push(startingPosition);

  while (visitedTracker[ endingPosition[0] ][ endingPosition[1] ] !== true) {
    let current = queue[idx++];

    let x = current[0];
    let y = current[1];

    const possibleMove1 = [x-2, y+1];
    const possibleMove2 = [x-1, y+2];
    const possibleMove3 = [x+2, y+1];
    const possibleMove4 = [x+1, y+2];
    const possibleMove5 = [x-2, y-1];
    const possibleMove6 = [x-1, y-2];
    const possibleMove7 = [x+2, y-1];
    const possibleMove8 = [x+1, y-2];

    if (
      possibleMove1[0] >= 0 && possibleMove1[0] <= 7 &&
      possibleMove1[1] >= 0 && possibleMove1[1] <= 7 &&
      visitedTracker[ possibleMove1[0] ][ possibleMove1[1] ] === false
    ) {
      visitedTracker[ possibleMove1[0] ][ possibleMove1[1] ] = true;
      parentTracker[ possibleMove1[0] ][ possibleMove1[1] ] = current;
      queue.push(possibleMove1);
    }
    if (
      possibleMove2[0] >= 0 && possibleMove2[0] <= 7 &&
      possibleMove2[1] >= 0 && possibleMove2[1] <= 7 &&
      visitedTracker[ possibleMove2[0] ][ possibleMove2[1] ] === false
    ) {
      visitedTracker[ possibleMove2[0] ][ possibleMove2[1] ] = true;
      parentTracker[ possibleMove2[0] ][ possibleMove2[1] ] = current;
      queue.push(possibleMove2);
    }
    if (
      possibleMove3[0] >= 0 && possibleMove3[0] <= 7 &&
      possibleMove3[1] >= 0 && possibleMove3[1] <= 7 &&
      visitedTracker[ possibleMove3[0] ][ possibleMove3[1] ] === false
    ) {
      visitedTracker[ possibleMove3[0] ][ possibleMove3[1] ] = true;
      parentTracker[ possibleMove3[0] ][ possibleMove3[1] ] = current;
      queue.push(possibleMove3);
    }
    if (
      possibleMove4[0] >= 0 && possibleMove4[0] <= 7 &&
      possibleMove4[1] >= 0 && possibleMove4[1] <= 7 &&
      visitedTracker[ possibleMove4[0] ][ possibleMove4[1] ] === false
    ) {
      visitedTracker[ possibleMove4[0] ][ possibleMove4[1] ] = true;
      parentTracker[ possibleMove4[0] ][ possibleMove4[1] ] = current;
      queue.push(possibleMove4);
    }
    if (
      possibleMove5[0] >= 0 && possibleMove5[0] <= 7 &&
      possibleMove5[1] >= 0 && possibleMove5[1] <= 7 &&
      visitedTracker[ possibleMove5[0] ][ possibleMove5[1] ] === false
    ) {
      visitedTracker[ possibleMove5[0] ][ possibleMove5[1] ] = true;
      parentTracker[ possibleMove5[0] ][ possibleMove5[1] ] = current;
      queue.push(possibleMove5);
    }
    if (
      possibleMove6[0] >= 0 && possibleMove6[0] <= 7 &&
      possibleMove6[1] >= 0 && possibleMove6[1] <= 7 &&
      visitedTracker[ possibleMove6[0] ][ possibleMove6[1] ] === false
    ) {
      visitedTracker[ possibleMove6[0] ][ possibleMove6[1] ] = true;
      parentTracker[ possibleMove6[0] ][ possibleMove6[1] ] = current;
      queue.push(possibleMove6);
    }
    if (
      possibleMove7[0] >= 0 && possibleMove7[0] <= 7 &&
      possibleMove7[1] >= 0 && possibleMove7[1] <= 7 &&
      visitedTracker[ possibleMove7[0] ][ possibleMove7[1] ] === false
    ) {
      visitedTracker[ possibleMove7[0] ][ possibleMove7[1] ] = true;
      parentTracker[ possibleMove7[0] ][ possibleMove7[1] ] = current;
      queue.push(possibleMove7);
    }
    if (
      possibleMove8[0] >= 0 && possibleMove8[0] <= 7 &&
      possibleMove8[1] >= 0 && possibleMove8[1] <= 7 &&
      visitedTracker[ possibleMove8[0] ][ possibleMove8[1] ] === false
    ) {
      visitedTracker[ possibleMove8[0] ][ possibleMove8[1] ] = true;
      parentTracker[ possibleMove8[0] ][ possibleMove8[1] ] = current;
      queue.push(possibleMove8);
    }
  }

  let parent = endingPosition;
  while (parent !== startingPosition) {
    path.push(parentTracker[ parent[0] ][ parent[1] ]);
    parent = parentTracker[ parent[0] ][ parent[1] ];
  }
  path.unshift(endingPosition);

  console.log(`You made it in ${path.length - 1} move(s)!  Here's your path:`);
  path.reverse().forEach((vertex) => console.log(vertex));
}
