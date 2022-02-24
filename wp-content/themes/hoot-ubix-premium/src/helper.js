export const getWindowRowsCols = (windowSize) => {
    let { width1, width2, height1, height2 } = windowSize;
    const width = width1 + (width2 / 10);
    const height = height1 + (height2 / 10);
    let rows = 4;
    let cols = 4;
    if (height >= 6.6 && height < 7.6) {
        rows = 4;
    } else if (width >= 7.6 && height < 8.9) {
        rows = 5;
    } else if (height >= 8.9 && height < 10.8) {
        rows = 6;
    } else if (height >= 10.9 && height < 12.5) {
        rows = 7;
    } else if (height >= 12.6 && height < 14.2) {
        rows = 8;
    } else if (height >= 14.3 && height < 15.11) {
        rows = 9;
    } else {
        rows = 10;
    }

    if (width >= 8 && width < 9.11) {
        cols = 4;
    } else if (width >= 9.11 && width < 11.11) {
        cols = 5;
    } else if (width >= 11.11 && width < 13.11) {
        cols = 6;
    } else if (width >= 13.11 && width < 15.10) {
        cols = 7;
    } else {
        cols = 8;
    }

    return {
        rows, cols
    }
}