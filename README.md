# Knights Travails Exercise/Project

A small JavaScript implementation that finds the shortest sequence of knight moves between two squares on a standard 8×8 chessboard using breadth-first search (BFS). The program validates inputs to prevent out-of-bounds (OOB) access, tracks parent positions to reconstruct the shortest path, and logs the move count and path to the console. This project is built to meet [The Odin Project's Knights Travails assignment/project](https://www.theodinproject.com/lessons/javascript-knights-travails).

---

## Features / API

The repository exposes the following top-level functions (see `knights-travails.js`):

* `knightMoves(startingPosition, endingPosition)` — compute and print the shortest path from `startingPosition` to `endingPosition`.

  * **Inputs:** two arrays in the form `[x, y]` with `0 <= x <= 7` and `0 <= y <= 7` (0-based coordinates). Example: `[0, 0]` represents the bottom-left corner.
  * **Behaviour:** throws an `Error` if either position is invalid. Uses BFS with local `visitedTracker` and `parentTracker` arrays and prints the result to the console.
* `isOnBoard(pos)` — helper that validates a position is a 2-length integer array within the 0..7 range.

> Note: the current implementation logs output via `console.log`. If you need the function to return a value (e.g., for tests), see the "Suggested changes" section below.

---

## Design notes / Default behaviour

* **Input format:** positions are plain numeric arrays `[x, y]` (x = column, y = row). All inputs are validated using `isOnBoard`.
* **Shortest path algorithm:** BFS is used to guarantee the shortest number of knight moves. A `visitedTracker` boolean grid prevents revisiting squares; a `parentTracker` grid stores the parent that led to each visited square so the path can be reconstructed.
* **Error handling:** the function throws a descriptive `Error` when inputs are invalid. This makes failures explicit during manual testing.

---

## Usage

### In the browser (quick manual test)

1. Open the `knights-travails.js` file in a browser environment (via a small `index.html` that includes the script), or paste the function into the DevTools console.
2. Call the function with numeric coordinate arrays:

```js
// example calls
knightMoves([0, 0], [1, 2]); // You made it in 1 move(s)!  Here's your path: [0,0] -> [1,2]
knightMoves([0, 0], [7, 7]); // prints number of moves and path
```

---

## Example

Calling `knightMoves([0, 0], [7, 7])` prints a short path and a line similar to:

```
You made it in 6 move(s)!  Here's your path:
[0,0]
[1,2]
[2,4]
[3,6]
[5,7]
[7,6]
[7,7]
```

(Exact path may differ by BFS traversal order but will always be a shortest path.)

---

## Suggested changes (for testability and reusability)

If you plan to add automated tests or reuse the logic programmatically, consider the following small changes:

1. **Return a value instead of printing:** modify `knightMoves` so it returns an object like `{ moves: <number>, path: [[x,y], ...] }` and let the caller decide how to log or assert results.
2. **Export the function:** convert the file to an ES module (`export function knightMoves(...)`) so `import { knightMoves } from './knights-travails.js'` works in tests.

---

## Implementation notes (important details)

* `isOnBoard(pos)` validates that `pos` is an integer 2-tuple inside the `[0, 7]` range.
* `knightMoves` builds two 8×8 grids: `visitedTracker` (booleans) and `parentTracker` (stores parent coordinates). The BFS queue is an array with an index-based pointer (no external queue dependency).
* After the BFS marks the `endingPosition` visited, the function reconstructs the path by following `parentTracker` pointers backward from the target to the start.
