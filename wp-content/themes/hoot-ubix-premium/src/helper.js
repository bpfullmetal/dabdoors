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

export const getAvailablecolumnsForLayoutOption = (layoutOption, customWindowproperties) => {
    let columns = [];
    let properties = {};
    switch (layoutOption) {
        case 0: 
            properties = customWindowproperties.custom_window_williamburge_405;
            columns = properties['5_pack_colums'].concat(properties['7_pack_colums'], properties['8_pack_colums']);
            break;
        case 1: 
            properties = customWindowproperties.custom_window_williamburge_305;
            columns = properties['4_pack_colums'].concat(properties['8_pack_colums']);
            break;
        case 2: 
            properties = customWindowproperties.custom_window_winston_392;
            columns = properties['4_pack_colums'].concat(properties['8_pack_colums']);
            break;
        case 3: 
            properties = customWindowproperties.custom_window_stockton_397;
            columns = properties['4_pack_colums'].concat(properties['8_pack_colums']);
            break;
        case 4: 
            properties = customWindowproperties.custom_window_sherwood_306;
            columns = properties['4_pack_colums'].concat(properties['8_pack_colums']);
            break;
        default: break;
    }
    return columns;
}

export const getAvailableOptions = (columnsCount, customWindowproperties) => {
    let availableOptions = [];
    let custom_window_williamburge_405 = customWindowproperties.custom_window_williamburge_405;
    let customWilliamburget405columns = (custom_window_williamburge_405['5_pack_columns'] ? custom_window_williamburge_405['5_pack_columns'] : []).concat(
        custom_window_williamburge_405['7_pack_colums'] ? custom_window_williamburge_405['7_pack_colums'] : [],
        custom_window_williamburge_405['8_pack_colums'] ? custom_window_williamburge_405['8_pack_colums'] : []
    );
    console.log(customWilliamburget405columns);
    if (customWilliamburget405columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(0);
    }
    let custom_window_williamburge_305 = customWindowproperties.custom_window_williamburge_305;
    let customWilliamburget305columns = (custom_window_williamburge_305['4_pack_columns'] ? custom_window_williamburge_305['4_pack_columns'] : []).concat(
        custom_window_williamburge_305['8_pack_colums'] ? custom_window_williamburge_305['8_pack_colums'] : []
    );
    if (customWilliamburget305columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(1);
    }
    let custom_window_winston_392 = customWindowproperties.custom_window_winston_392;
    let customWinston392columns = (custom_window_winston_392['4_pack_colums'] ? custom_window_winston_392['4_pack_colums'] : []).concat(
        custom_window_winston_392['8_pack_colums'] ? custom_window_winston_392['8_pack_colums'] : []
    );
    if (customWinston392columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(2);
    }
    let custom_window_stockton_397 = customWindowproperties.custom_window_stockton_397;
    let customStockton397columns = (custom_window_stockton_397['4_pack_colums'] ? custom_window_stockton_397['4_pack_colums'] : []).concat(
        custom_window_stockton_397['8_pack_colums'] ? custom_window_stockton_397['8_pack_colums'] : []
    );
    if (customStockton397columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(3);
    }
    let custom_window_sherwood_306 = customWindowproperties.custom_window_sherwood_306;
    let customSherwood306columns = (custom_window_sherwood_306['4_pack_colums'] ? custom_window_sherwood_306['4_pack_colums'] : []).concat(
        custom_window_sherwood_306['8_pack_colums'] ? custom_window_sherwood_306['8_pack_colums'] : []
    );
    if (customSherwood306columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(4);
    }
    return availableOptions;
}