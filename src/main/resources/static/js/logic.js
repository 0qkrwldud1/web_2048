function newGame(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(new Array(n).fill(0));
    }
    matrix = addTwo(matrix);
    matrix = addTwo(matrix);
    return matrix;
}

function addTwo(mat) {
    let a = randomInt(0, mat.length - 1);
    let b = randomInt(0, mat.length - 1);
    while (mat[a][b] !== 0) {
        a = randomInt(0, mat.length - 1);
        b = randomInt(0, mat.length - 1);
    }
    mat[a][b] = 2;
    return mat;
}

function gameState(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 2048) return 'win';
        }
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) return 'not over';
        }
    }
    for (let i = 0; i < mat.length - 1; i++) {
        for (let j = 0; j < mat[0].length - 1; j++) {
            if (mat[i][j] === mat[i + 1][j] || mat[i][j] === mat[i][j + 1]) {
                return 'not over';
            }
        }
    }
    for (let k = 0; k < mat.length - 1; k++) {
        if (mat[mat.length - 1][k] === mat[mat.length - 1][k + 1]) return 'not over';
    }
    for (let j = 0; j < mat.length - 1; j++) {
        if (mat[j][mat.length - 1] === mat[j + 1][mat.length - 1]) return 'not over';
    }
    return 'lose';
}

function reverse(mat) {
    let newMat = [];
    for (let i = 0; i < mat.length; i++) {
        newMat.push([]);
        for (let j = 0; j < mat[0].length; j++) {
            newMat[i].push(mat[i][mat[0].length - j - 1]);
        }
    }
    return newMat;
}

function transpose(mat) {
    let newMat = [];
    for (let i = 0; i < mat[0].length; i++) {
        newMat.push([]);
        for (let j = 0; j < mat.length; j++) {
            newMat[i].push(mat[j][i]);
        }
    }
    return newMat;
}

function coverUp(mat) {
    let newMat = mat.map(row => row.slice());
    let done = false;
    for (let i = 0; i < GRID_LEN; i++) {
        let count = 0;
        for (let j = 0; j < GRID_LEN; j++) {
            if (mat[i][j] !== 0) {
                newMat[i][count] = mat[i][j];
                if (j !== count) done = true;
                count++;
            }
        }
        for (let k = count; k < GRID_LEN; k++) {
            newMat[i][k] = 0;
        }
    }
    return [newMat, done];
}

function merge(mat, done) {
    for (let i = 0; i < GRID_LEN; i++) {
        for (let j = 0; j < GRID_LEN - 1; j++) {
            if (mat[i][j] === mat[i][j + 1] && mat[i][j] !== 0) {
                mat[i][j] *= 2;
                mat[i][j + 1] = 0;
                done = true;
            }
        }
    }
    return [mat, done];
}

function up(game) {
    let newGame = transpose(game);
    let [newMat, done] = coverUp(newGame);
    [newMat, done] = merge(newMat, done);
    newMat = coverUp(newMat)[0];
    return [transpose(newMat), done];
}

function down(game) {
    let newGame = transpose(reverse(game));
    let [newMat, done] = coverUp(newGame);
    [newMat, done] = merge(newMat, done);
    newMat = coverUp(newMat)[0];
    return [transpose(reverse(newMat)), done];
}

function left(game) {
    let [newMat, done] = coverUp(game);
    [newMat, done] = merge(newMat, done);
    newMat = coverUp(newMat)[0];
    return [newMat, done];
}

function right(game) {
    let [newMat, done] = coverUp(reverse(game));
    [newMat, done] = merge(newMat, done);
    newMat = coverUp(newMat)[0];
    return [reverse(newMat), done];
}

function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
