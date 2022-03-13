export const getWindowRowsCols = (windowSize) => {
    let { width1, width2, height1, height2 } = windowSize;
    const width = width1 * 12 + width2;
    const height = height1 * 12 + height2;
    let rows = 4;
    let cols = 4;
    if (height >= 78 && height < 90) {
        rows = 4;
    } else if (width >= 90 && height < 105) {
        rows = 5;
    } else if (height >= 105 && height < 128) {
        rows = 6;
    } else if (height >= 128 && height < 149) {
        rows = 7;
    } else if (height >= 149 && height < 170) {
        rows = 8;
    } else if (height >= 170 && height < 191) {
        rows = 9;
    } else {
        rows = 10;
    }

    if (width >= 96 && width < 107) {
        cols = 4;
    } else if (width >= 107 && width < 143) {
        cols = 5;
    } else if (width >= 143 && width < 167) {
        cols = 6;
    } else if (width >= 167 && width < 190) {
        cols = 7;
    } else if (width >= 190) {
        cols = 8;
    }

    return {
        rows, cols
    }
}