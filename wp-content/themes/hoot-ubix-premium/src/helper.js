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
            columns = properties['5_pack_columns'].concat(properties['7_pack_columns'], properties['8_pack_columns']);
            break;
        case 1: 
            properties = customWindowproperties.custom_window_williamburge_305;
            columns = properties['4_pack_columns'].concat(properties['8_pack_columns']);
            break;
        case 2: 
            properties = customWindowproperties.custom_window_winston_392;
            columns = properties['4_pack_columns'].concat(properties['8_pack_columns']);
            break;
        case 3: 
            properties = customWindowproperties.custom_window_stockton_397;
            columns = properties['1_pack_columns'];
            break;
        case 4: 
            properties = customWindowproperties.custom_window_sherwood_306;
            columns = properties['4_pack_columns'].concat(properties['8_pack_columns']);
            break;
        default: break;
    }
    return columns;
}

export const getAvailableOptions = (columnsCount, customWindowproperties) => {
    let availableOptions = [];
    let custom_window_williamburge_405 = customWindowproperties.custom_window_williamburge_405;
    let customWilliamburget405columns = (custom_window_williamburge_405['5_pack_columns'] ? custom_window_williamburge_405['5_pack_columns'] : []).concat(
        custom_window_williamburge_405['7_pack_columns'] ? custom_window_williamburge_405['7_pack_columns'] : [],
        custom_window_williamburge_405['8_pack_columns'] ? custom_window_williamburge_405['8_pack_columns'] : []
    );
    // console.log(customWilliamburget405columns);
    if (customWilliamburget405columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(0);
    }
    let custom_window_williamburge_305 = customWindowproperties.custom_window_williamburge_305;
    let customWilliamburget305columns = (custom_window_williamburge_305['4_pack_columns'] ? custom_window_williamburge_305['4_pack_columns'] : []).concat(
        custom_window_williamburge_305['8_pack_columns'] ? custom_window_williamburge_305['8_pack_columns'] : []
    );
    if (customWilliamburget305columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(1);
    }
    let custom_window_winston_392 = customWindowproperties.custom_window_winston_392;
    let customWinston392columns = (custom_window_winston_392['4_pack_columns'] ? custom_window_winston_392['4_pack_columns'] : []).concat(
        custom_window_winston_392['8_pack_columns'] ? custom_window_winston_392['8_pack_columns'] : []
    );
    if (customWinston392columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(2);
    }
    let custom_window_stockton_397 = customWindowproperties.custom_window_stockton_397;
    let customStockton397columns = custom_window_stockton_397['1_pack_columns'] ? custom_window_stockton_397['1_pack_columns'] : [];
    if (customStockton397columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(3);
    }
    let custom_window_sherwood_306 = customWindowproperties.custom_window_sherwood_306;
    let customSherwood306columns = (custom_window_sherwood_306['4_pack_columns'] ? custom_window_sherwood_306['4_pack_columns'] : []).concat(
        custom_window_sherwood_306['8_pack_columns'] ? custom_window_sherwood_306['8_pack_columns'] : []
    );
    if (customSherwood306columns.indexOf(String(columnsCount)) > -1) {
        availableOptions.push(4);
    }
    // console.log(availableOptions);
    return availableOptions;
}

export const getPack = (layoutOption, columnsCount, customWindowProperties) => {
    if (layoutOption == 0) {
        let williamburge405Properties = customWindowProperties.custom_window_williamburge_405;
        if (williamburge405Properties) {
            let pack_columns_5 = williamburge405Properties['5_pack_columns'] ? williamburge405Properties['5_pack_columns'] : [];
            if (pack_columns_5.indexOf(String(columnsCount)) > -1) {
                return 5;
            }
            let pack_columns_7 = williamburge405Properties['7_pack_columns'] ? williamburge405Properties['7_pack_columns'] : [];
            if ( pack_columns_7.indexOf(String(columnsCount)) > -1) {
                return 7;
            }
            let pack_columns_8 = williamburge405Properties['8_pack_columns'] ? williamburge405Properties['8_pack_columns'] : [];
            if (pack_columns_8.indexOf(String(columnsCount)) > -1) {
                return 8;
            }
        }
    } else if (layoutOption == 1) {
        let properties = customWindowProperties.custom_window_williamburge_305;
        if (properties) {
            let pack_columns_4 = properties['4_pack_columns'];
            if ( pack_columns_4.indexOf(String(columnsCount)) > -1 ) {
                return 4;
            }
            let pack_columns_8 = properties['8_pack_columns'];
            if (pack_columns_8.indexOf(String(columnsCount)) > -1) {
                return 8;
            }
        }
    } else if (layoutOption == 2) {
        let properties = customWindowProperties.custom_window_winston_392;
        if (properties) {
            let pack_columns_4 = properties['4_pack_columns'];
            if ( pack_columns_4.indexOf(String(columnsCount)) > -1 ) {
                return 4;
            }
            let pack_columns_8 = properties['8_pack_columns'];
            if (pack_columns_8.indexOf(String(columnsCount)) > -1) {
                return 8;
            }
        }
    } else if (layoutOption == 3) {
        let properties = customWindowProperties.custom_window_stockton_397;
        if (properties) {
            let pack_columns_1 = properties['1_pack_columns'];
            if ( pack_columns_1.indexOf(String(columnsCount)) > -1 ) {
                return 1;
            }
        }
    } else if (layoutOption == 4) {
        let properties = customWindowProperties.custom_window_sherwood_306;
        if (properties) {
            let pack_columns_4 = properties['4_pack_columns'];
            if ( pack_columns_4.indexOf(String(columnsCount)) > -1 ) {
                return 4;
            }
            let pack_columns_8 = properties['8_pack_columns'];
            if (pack_columns_8.indexOf(String(columnsCount)) > -1) {
                return 8;
            }
        }
    } else {
        return null;
    }
    return null;
}

export const getPriceForCustomWindow = (layoutOption, packCount, customWindowProperties, cols) => {
    // console.log(layoutOption, packCount, cols);
    if (layoutOption == 0) {
        if (packCount == 5) {
            let perPrice = customWindowProperties.custom_window_williamburge_405['5_pack_price'];
            let packGroundCount = Math.floor(cols / 5) + 1;
            if ( cols % 5 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        } else if (packCount == 7) {
            let perPrice = customWindowProperties.custom_window_williamburge_405['7_pack_price'];
            let packGroundCount = Math.floor(cols / 7) + 1;
            if ( cols % 7 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        } else if (packCount == 8) {
            let perPrice = customWindowProperties.custom_window_williamburge_405['8_pack_price'];
            let packGroundCount = Math.floor(cols / 8) + 1;
            if ( cols % 8 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        }
    } else if (layoutOption == 1) {
        if (packCount == 4) {
            let perPrice = customWindowProperties.custom_window_williamburge_305['4_pack_price'];
            let packGroundCount = Math.floor(cols / 4) + 1;
            if ( cols % 4 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        } else if (packCount == 8) {
            let perPrice = customWindowProperties.custom_window_williamburge_305['8_pack_price'];
            let packGroundCount = Math.floor(cols / 8) + 1;
            if ( cols % 8 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        }
    } else if (layoutOption == 2) {
        if (packCount == 4) {
            let perPrice = customWindowProperties.custom_window_winston_392['4_pack_price'];
            let packGroundCount = Math.floor(cols / 4) + 1;
            if ( cols % 4 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        } else if (packCount == 8) {
            let perPrice = customWindowProperties.custom_window_winston_392['8_pack_price'];
            let packGroundCount = Math.floor(cols / 8) + 1;
            if ( cols % 8 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        }
    } else if (layoutOption == 3) {
        if (packCount == 1) {
            let perPrice = customWindowProperties.custom_window_stockton_397['1_pack_price'];
            return perPrice * cols;
        }        
    } else if (layoutOption == 4) {
        if (packCount == 4) {
            let perPrice = customWindowProperties.custom_window_sherwood_306['4_pack_price'];
            let packGroundCount = Math.floor(cols / 4) + 1;
            if ( cols % 4 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        } else if (packCount == 8) {
            let perPrice = customWindowProperties.custom_window_sherwood_306['8_pack_price'];
            let packGroundCount = Math.floor(cols / 8) + 1;
            if ( cols % 8 == 0) {
                packGroundCount = packGroundCount - 1;
            }
            return perPrice * packGroundCount;
        }
        
    }
    return 0;
}