var numIslands = function(grid, connectedComponents = 0) {
    const [ rows, cols ] = [ grid.length, grid[0].length ]

    for (let row = 0; row < rows; row++) {/* Time O(ROWS) */
        for (let col = 0; col < cols; col++) {/* Time O(COLS) */
            const isIsland = grid[row][col] === '1';
            if (isIsland) connectedComponents++;

            bfs(grid, rows, cols, new Queue([ [ row, col ] ]));/* Space O(MIN(ROWS,COLS)) */
        }
    }

    return connectedComponents
 }

 const bfs = (grid, rows, cols, queue) => {
    while (!queue.isEmpty()) {
        for (let i = (queue.size() - 1); 0 <= i; i--) {/* Time O(WIDTH) */
            const [ row, col ] = queue.dequeue();

            const isWater = grid[row][col] === '0';
            if (isWater) continue;

            grid[row][col] = '0';

            for (const [ _row, _col ] of getNeighbors(row, rows, col, cols)) {
                queue.enqueue([ _row, _col ]);             /* Space O(MIN(ROWS,COLS)) */
            }
        }
    }
 }

var getNeighbors = (row, rows, col, cols) => [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
    .map(([ _row, _col]) => [ (row + _row), (col + _col) ])
    .filter(([ _row, _col ]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols));
