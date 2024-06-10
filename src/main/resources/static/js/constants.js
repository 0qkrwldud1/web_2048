const SIZE = 400;
const GRID_LEN = 4;
const GRID_PADDING = 10;

const BACKGROUND_COLOR_GAME = "#92877d";
const BACKGROUND_COLOR_CELL_EMPTY = "#9e948a";

const BACKGROUND_COLOR_DICT = {
    2: "#eee4da",
    4: "#ede0c8",
    8: "#f2b179",
    16: "#f59563",
    32: "#f67c5f",
    64: "#f65e3b",
    128: "#edcf72",
    256: "#edcc61",
    512: "#edc850",
    1024: "#edc53f",
    2048: "#edc22e",
    4096: "#eee4da",
    8192: "#edc22e",
    16384: "#f2b179",
    32768: "#f59563",
    65536: "#f67c5f",
};

const CELL_COLOR_DICT = {
    2: "#776e65",
    4: "#776e65",
    8: "#f9f6f2",
    16: "#f9f6f2",
    32: "#f9f6f2",
    64: "#f9f6f2",
    128: "#f9f6f2",
    256: "#f9f6f2",
    512: "#f9f6f2",
    1024: "#f9f6f2",
    2048: "#f9f6f2",
    4096: "#776e65",
    8192: "#f9f6f2",
    16384: "#776e65",
    32768: "#776e65",
    65536: "#f9f6f2",
};

const FONT = "Verdana";

const KEY_QUIT = "Escape";
const KEY_BACK = "b";

const KEY_UP = "ArrowUp";
const KEY_DOWN = "ArrowDown";
const KEY_LEFT = "ArrowLeft";
const KEY_RIGHT = "ArrowRight";

const KEY_UP_ALT1 = "w";
const KEY_DOWN_ALT1 = "s";
const KEY_LEFT_ALT1 = "a";
const KEY_RIGHT_ALT1 = "d";

const KEY_UP_ALT2 = "i";
const KEY_DOWN_ALT2 = "k";
const KEY_LEFT_ALT2 = "j";
const KEY_RIGHT_ALT2 = "l";
