document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    let matrix = newGame(GRID_LEN);
    let history = [];

    function updateGrid() {
        gameBoard.innerHTML = '';
        for (let i = 0; i < GRID_LEN; i++) {
            for (let j = 0; j < GRID_LEN; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.value = matrix[i][j];
                if (matrix[i][j] !== 0) {
                    cell.textContent = matrix[i][j];
                    cell.style.backgroundColor = BACKGROUND_COLOR_DICT[matrix[i][j]];
                    cell.style.color = CELL_COLOR_DICT[matrix[i][j]];
                } else {
                    cell.textContent = '';
                    cell.style.backgroundColor = BACKGROUND_COLOR_CELL_EMPTY;
                }
                gameBoard.appendChild(cell);
            }
        }
    }

    document.addEventListener('keydown', (event) => {
        let key = event.key;
        if (key === KEY_QUIT) {
            window.close();
        }
        if (key === KEY_BACK && history.length > 1) {
            matrix = history.pop();
            updateGrid();
        } else if ([KEY_UP, KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP_ALT1, KEY_DOWN_ALT1, KEY_LEFT_ALT1, KEY_RIGHT_ALT1].includes(key)) {
            const command = {
                [KEY_UP]: up,
                [KEY_DOWN]: down,
                [KEY_LEFT]: left,
                [KEY_RIGHT]: right,
                [KEY_UP_ALT1]: up,
                [KEY_DOWN_ALT1]: down,
                [KEY_LEFT_ALT1]: left,
                [KEY_RIGHT_ALT1]: right,
            }[key];

            const [newMatrix, done] = command(matrix);
            if (done) {
                matrix = addTwo(newMatrix);
                history.push(matrix);
                updateGrid();
                if (gameState(matrix) === 'win') {
                    alert('You Win!');
                }
                if (gameState(matrix) === 'lose') {
                    alert('You Lose!');
                }
            }
        }
    });

    updateGrid();
});
