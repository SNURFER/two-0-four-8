## two-0-four-8

this project is web game for 2048, based on react.

### what is 2048?
- 2048 is played on a plain 4×4 grid, with numbered tiles that slide when a player moves them using the four arrow keys.
- Every turn, a new tile randomly appears in an empty spot on the board with a value of either 2 or 4.
- Tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid. 
- If two tiles of the same number collide while moving, they will merge into a tile with the total value of the two tiles that collided.
- The resulting tile cannot merge with another tile again in the same move.

### Strategy
Strategies in 2048 include keeping the highest tiles in a specific corner and to keep that tile in that corner and to fill the specified row with the highest numbers

## how to play
```bash
$ git clone https://github.com/SNURFER/two-0-four-8.git
$ cd [project URL]
$ npm install
$ npm run start
```