var CCC = CCC || {};

CCC.STATIC=CCC.STATIC || {};

CCC.STATIC.BASEIMAGEPATH = "https://images.cryptocompare.com/"

CCC.STATIC.TYPE={
    'TRADE': '0',
    'NEWS': '1',
    'CURRENT': '2',
    'LOADCOMPLETE': '3',
    'COINPAIRS': '4',
    'CURRENTAGG': '5',
    'TOPLIST': '6',
    'TOPLISTCHANGE': '7',
    'ORDERBOOK': '8',
    'ORDERBOOKSNASPHOT': '9',
    'ACTIVATION': '10',
    'FULLVOLUME': '11',
    'REMOVEEXCHANGE': '12',
    'UNMAPPEDTRADE': '14',
    'TOTALVALUE': '15',
    'SUBSCRIBECOMPLETE': '16',
    'UNSUBSCRIBECOMPLETE': '17',
    'UNSUBSCRIBEALLCOMPLETE': '18',
    'FORCEDUNSUBSCRIBE': '19',
    'TOPTIERFULLVOLUME': '21',
    'HISTO': '24',

    'TOPOFORDERBOOK': '30',
    'TOPOFORDERBOOKNOVALUE': '31',

    'TRADECATCHUP': '100',
    'NEWSCATCHUP': '101',
    'UNMAPPEDTRADECATCHUP': '114',

    'TRADECATCHUPCOMPLETE': '300',
    'NEWSCATCHUPCOMPLETE': '301',
    'UNMAPPEDTRADECATCHUPCOMPLETE': '314',
    'UNAUTHORIZED': '401',
    'RATELIMIT': '429',
    'NOTFOUND': '404',
    'ERROR': '500',

    'HEARTBEAT': '999'
};

CCC.STATIC.CURRENCY = CCC.STATIC.CURRENCY || {};

CCC.STATIC.CURRENCY.SYMBOL = {
    'BTC'  : 'Ƀ'
    , 'LTC'  : 'Ł'
    , 'DAO'  : 'Ð'
    , 'USD'  : '$'
    , 'CNY'  : '¥'
    , 'EUR'  : '€'
    , 'GBP'  : '£'
    , 'JPY'  : '¥'
    , 'PLN'  : 'zł'
    , 'RUB'  : '₽'
    , 'ETH'  : 'Ξ'
    , 'GOLD' : 'Gold g'
    , 'INR'  : '₹'
    , 'BRL'  : 'R$'
    , 'KRW'  : '₩'
    , 'RUR'  : '₽'
    , 'USDT' : '₮'
};

CCC.STATIC.CURRENCY.getSymbol = function(symbol){
    if(CCC.STATIC.CURRENCY.SYMBOL[symbol] !== undefined){
        return CCC.STATIC.CURRENCY.SYMBOL[symbol];
    }
    return symbol;
};

CCC.STATIC.UTIL = {
    chartColors: {
        Green:{Title:"Green",Hex:"#5cb85c"},
        LightGrey:{Title:"Grey",Hex:"#D7D7D7"},
        Red:{Title:"Red",Hex:"#A11B0A"},
        Blue:{Title:"Blue",Hex:"#0A1623"},
        Black:{Title:"Black",Hex:"#000000"},
        Orange:{Title:"Orange",Hex:"#F89017"},
        BrightGreen:{Title:"Bright Green",Hex:"#00D665"},
        DarkGreen:{Title:"Dark Green",Hex:"#398439"},
        LighRed:{Title:"Light Red",Hex:"#D44E3D"},
        DarkBlue:{Title:"Dark Blue",Hex:"#002387"},
        Yellow:{Title:"Yellow",Hex:"#FFF700"},
        White:{Title:"White",Hex:"#FFFFFF"}
    },
    exchangeNameMapping : {
        'CCCAGG':'CryptoCompare Index',
        'BTCChina':'BTCC',
        'GDAX':'Coinbase',
        'SafeCoin':'SafeTrade',
        'trxmarket':'Poloni DEX'
    },
    isMobile: function(userAgent){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4)))
            return true;
        return false;
    },
    convertToMB : function(bytes){
        return (parseInt(bytes,10)/1024/1024).toFixed(2)+' MB';
    },
    getNameForExchange : function(exchangeName){
        if(this.exchangeNameMapping.hasOwnProperty(exchangeName)){
            return this.exchangeNameMapping[exchangeName];
        }
        return exchangeName;
    },
    noExponents : function(value){
        var data= String(value).split(/[eE]/);
        if(data.length== 1) return data[0];

        var  z= '', sign= value<0? '-':'',
            str= data[0].replace('.', ''),
            mag= Number(data[1])+ 1;

        if(mag<0){
            z= sign + '0.';
            while(mag++) z += '0';
            return z + str.replace(/^\-/,'');
        }
        mag -= str.length;
        while(mag--) z += '0';
        return str + z;
    },
    reduceFloatVal : function(value){
        value = parseFloat(value);
        var absValue = Math.abs(value);
        if(absValue>10){
            value = Math.round(value * 100) / 100;
            return value;
        }
        if(absValue>=0.00001000){
            return parseFloat(value.toPrecision(4));
        }
        if(absValue>=0.00000100){
            return parseFloat(value.toPrecision(3));
        }
        if(absValue>=0.00000010){
            return parseFloat(value.toPrecision(2));
        }
        return parseFloat(value.toPrecision(1));
    },
    reduceReal : function(value){
        value = parseFloat(value);
        return parseFloat(value.toFixed(8));
    },
    convertCurrentKeyToAll : function(key){
        var valuesArray = key.split("~");
        valuesArray[0]=CCC.STATIC.TYPE.CURRENTAGG;
        valuesArray[1]='CCCAGG';
        return valuesArray.join('~');
    },
    convertCurrentKeyToTrade : function(key){
        var valuesArray = key.split("~");
        valuesArray[0]=CCC.STATIC.TYPE.TRADE;
        return valuesArray.join('~');
    },
    convertValueToDisplay: function(symbol,value,filterNumberFunctionAngularJS,type,fullNumbers){
        var prefix = '';
        var valueSign=1;
        value = parseFloat(value);
        var valueAbs=Math.abs(value);
        var decimalsOnBigNumbers = 2;
        var decimalsOnNormalNumbers = 2;
        var decimalsOnSmallNumbers = 4;
        if(fullNumbers===true){
            decimalsOnBigNumbers =2;
            decimalsOnNormalNumbers = 0;
            decimalsOnSmallNumbers= 4;
        }
        if(type=="8decimals"){
            decimalsOnBigNumbers =4;
            decimalsOnNormalNumbers = 8;
            decimalsOnSmallNumbers= 8;
            if(value<0.0001 && value>=0.00001){decimalsOnSmallNumbers=4;}
            if(value<0.001 && value>=0.0001){decimalsOnSmallNumbers=5;}
            if(value<0.01 && value>=0.001){decimalsOnSmallNumbers=6;}
            if(value<0.1 && value>=0.01){decimalsOnSmallNumbers=7;}
        }
        if(symbol!=''){prefix = symbol+' ';}
        if(value<0){valueSign = -1;}
        if(value==0){return prefix+'0';}

        if(value<0.00001000 && value>=0.00000100 && decimalsOnSmallNumbers>3){
            decimalsOnSmallNumbers=3;
        }
        if(value<0.00000100 && value>=0.00000010 && decimalsOnSmallNumbers>2){
            decimalsOnSmallNumbers=2;
        }
        if(value<0.00000010 && decimalsOnSmallNumbers>1){
            decimalsOnSmallNumbers=1;
        }

        if(type=="short"||type=="8decimals"){
            if(valueAbs>1000000000){
                valueAbs=valueAbs/1000000000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' B';
            }
            if(valueAbs>1000000){
                valueAbs=valueAbs/1000000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' M';
            }
            if(valueAbs>10000){
                valueAbs=valueAbs/1000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' k';
            }
            if(type=="8decimals" && valueAbs>=100){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers);
            }
            if(valueAbs>=1){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnNormalNumbers);
            }
            return prefix+(valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers);
        }else{
            if(valueAbs>=10){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnNormalNumbers);
            }

            return prefix+this.noExponents((valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers));
        }
    }
};


CCC.TRADE=CCC.TRADE || {};
/*
trade fields binary values always in the last ~
*/

CCC.TRADE.FLAGS = {
    'SELL'       : 0x1 // hex for binary 1
    , 'BUY'        : 0x2 // hex for binary 10
    , 'UNKNOWN'    : 0x4 // hex for binary 100
}

CCC.TRADE.FIELDS = {
    'T'          : 0x0  // hex for binary 0, it is a special case of fields that are always there TYPE
    , 'M'          : 0x0  // hex for binary 0, it is a special case of fields that are always there MARKET
    , 'FSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there FROM SYMBOL
    , 'TSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there TO SYMBOL
    , 'F'          : 0x0  // hex for binary 0, it is a special case of fields that are always there FLAGS
    , 'ID'         : 0x1  // hex for binary 1                                                       ID
    , 'TS'         : 0x2  // hex for binary 10                                                      TIMESTAMP
    , 'Q'          : 0x4  // hex for binary 100                                                     QUANTITY
    , 'P'          : 0x8  // hex for binary 1000                                                    PRICE
    , 'TOTAL'      : 0x10 // hex for binary 10000                                                   TOTAL

};

CCC.TRADE.DISPLAY = CCC.TRADE.DISPLAY||{};
CCC.TRADE.DISPLAY.FIELDS = {
    'T'          : {"Show":false}
    , 'M'          : {"Show":true, 'Filter':'Market'}
    , 'FSYM'       : {"Show":true, 'Filter':'CurrencySymbol'}
    , 'TSYM'       : {"Show":true, 'Filter':'CurrencySymbol'}
    , 'F'          : {"Show":true, 'Filter':'TradeFlag'}
    , 'ID'         : {"Show":true, 'Filter':'Text'}
    , 'TS'         : {'Show':true, 'Filter':'Date'  , 'Format':'yyyy MMMM dd HH:mm:ss'}
    , 'Q'          : {'Show':true, 'Filter':'Number', 'Symbol':'FSYM'}
    , 'P'          : {'Show':true, 'Filter':'Number', 'Symbol':'TSYM'}
    , 'TOTAL'      : {'Show':true, 'Filter':'Number', 'Symbol':'TSYM'}

};

CCC.TRADE.pack = function(tradeObject){
    var mask = 0;
    var packedTrade ='';
    for (var field in tradeObject) {
        packedTrade += '~'+tradeObject[field];
        mask|=this.FIELDS[field];
    }
    return packedTrade.substr(1)+'~'+mask.toString(16);
};

CCC.TRADE.unpack = function(tradeString){
    var valuesArray = tradeString.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght-1];
    var maskInt = parseInt(mask,16);
    var unpackedTrade = {};
    var currentField = 0;
    for(var property in this.FIELDS){
        if(this.FIELDS[property] === 0)
        {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
        else if(maskInt&this.FIELDS[property])
        {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
    }

    return unpackedTrade;
}

CCC.TRADE.getKey = function(tradeObject){
    return tradeObject['T']+'~'+tradeObject['M']+'~'+tradeObject['FSYM']+'~'+tradeObject['TSYM'];
};

CCC.CURRENT=CCC.CURRENT || {};
/*
current fields mask values always in the last ~
*/

CCC.CURRENT.FLAGS = {
    'PRICEUP'        : 0x1    // hex for binary 1
    , 'PRICEDOWN'      : 0x2    // hex for binary 10
    , 'PRICEUNCHANGED' : 0x4    // hex for binary 100
    , 'BIDUP'          : 0x8    // hex for binary 1000
    , 'BIDDOWN'        : 0x10   // hex for binary 10000
    , 'BIDUNCHANGED'   : 0x20   // hex for binary 100000
    , 'OFFERUP'        : 0x40   // hex for binary 1000000
    , 'OFFERDOWN'      : 0x80   // hex for binary 10000000
    , 'OFFERUNCHANGED' : 0x100  // hex for binary 100000000
    , 'MEDIANUP'       : 0x200  // hex for binary 1000000000
    , 'MEDIANDOWN'     : 0x400  // hex for binary 10000000000
    , 'MEDIANUNCHANGED': 0x800  // hex for binary 100000000000
};

CCC.CURRENT.FIELDS={
    'TYPE'            : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'MARKET'          : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'FROMSYMBOL'      : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'TOSYMBOL'        : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'FLAGS'           : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'PRICE'           : 0x1       // hex for binary 1
    , 'BID'             : 0x2       // hex for binary 10
    , 'OFFER'           : 0x4       // hex for binary 100
    , 'LASTUPDATE'      : 0x8       // hex for binary 1000
    , 'MEDIAN'          : 0x10      // hex for binary 10000
    , 'LASTVOLUME'      : 0x20      // hex for binary 100000
    , 'LASTVOLUMETO'    : 0x40      // hex for binary 1000000
    , 'LASTTRADEID'     : 0x80      // hex for binary 10000000
    , 'VOLUMEDAY'       : 0x100     // hex for binary 100000000
    , 'VOLUMEDAYTO'     : 0x200     // hex for binary 1000000000
    , 'VOLUME24HOUR'    : 0x400     // hex for binary 10000000000
    , 'VOLUME24HOURTO'  : 0x800     // hex for binary 100000000000
    , 'OPENDAY'         : 0x1000    // hex for binary 1000000000000
    , 'HIGHDAY'         : 0x2000    // hex for binary 10000000000000
    , 'LOWDAY'          : 0x4000    // hex for binary 100000000000000
    , 'OPEN24HOUR'      : 0x8000    // hex for binary 1000000000000000
    , 'HIGH24HOUR'      : 0x10000   // hex for binary 10000000000000000
    , 'LOW24HOUR'       : 0x20000   // hex for binary 100000000000000000
    , 'LASTMARKET'      : 0x40000   // hex for binary 1000000000000000000, this is a special case and will only appear on CCCAGG messages
    , 'VOLUMEHOUR'      : 0x80000   // hex for binary 10000000000000000000
    , 'VOLUMEHOURTO'    : 0x100000  // hex for binary 100000000000000000000
    , 'OPENHOUR'        : 0x200000  // hex for binary 1000000000000000000000
    , 'HIGHHOUR'        : 0x400000  // hex for binary 10000000000000000000000
    , 'LOWHOUR'         : 0x800000  // hex for binary 100000000000000000000000
};

CCC.CURRENT.FIELDSOPERATION = {
    'TYPE'            	: {'Multiply': {
            'Op': 'obj1',
            'Field': 'TYPE'
        }, 'Divide': {
            'Op': 'obj1',
            'Field': 'TYPE'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'TYPE'
        }}
    , 'MARKET'          	: {'Multiply': {
            'Op': 'obj1',
            'Field': 'MARKET'
        }, 'Divide': {
            'Op': 'obj1',
            'Field': 'MARKET'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'MARKET'
        }}
    , 'FROMSYMBOL'      	: {'Multiply': {
            'Op': 'obj1',
            'Field': 'FROMSYMBOL'
        }, 'Divide': {
            'Op': 'obj1',
            'Field': 'FROMSYMBOL'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'TOSYMBOL'
        }}
    , 'TOSYMBOL'        	: {'Multiply': {
            'Op': 'obj2',
            'Field': 'TOSYMBOL'
        }, 'Divide': {
            'Op': 'obj2',
            'Field': 'FROMSYMBOL'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'FROMSYMBOL'
        }}
    , 'FLAGS'           	: {'Multiply': {
            'Op': 'obj1',
            'Field': 'FLAGS'
        }, 'Divide': {
            'Op': 'obj1',
            'Field': 'FLAGS'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'FLAGS'
        }}
    , 'PRICE'           	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'PRICE'
        }}
    , 'BID'             	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'BID'
        }}
    , 'OFFER'           	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'OFFER'
        }}
    , 'LASTUPDATE'      	: {'Multiply': {
            'Op': 'obj2',
            'Field': 'LASTUPDATE'
        }, 'Divide': {
            'Op': 'obj1',
            'Field': 'LASTUPDATE'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'LASTUPDATE'
        }}
    , 'MEDIAN'             	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'MEDIAN'
        }}
    , 'LASTVOLUME'      	: {'Multiply': {
            'Op': 'NotAplicable'
        }, 'Divide': {
            'Op': 'NotAplicable'
        }, 'Invert': {
            'Op': 'NotAplicable'
        }}
    , 'LASTVOLUMETO'    	: {'Multiply': {
            'Op': 'NotAplicable'
        }, 'Divide': {
            'Op': 'NotAplicable'
        }, 'Invert': {
            'Op': 'NotAplicable'
        }}
    , 'LASTTRADEID'     	: {'Multiply': {
            'Op': 'NotAplicable'
        }, 'Divide': {
            'Op': 'NotAplicable'
        }, 'Invert': {
            'Op': 'NotAplicable'
        }}
    , 'VOLUMEDAY'        	: {'Multiply': {
            'Op': 'NotAplicable'
        }, 'Divide': {
            'Op': 'NotAplicable'
        }, 'Invert': {
            'Op': 'NotAplicable'
        }}
    , 'VOLUMEDAYTO'     	: {'Multiply': {
            'Op': 'NotAplicable'
        }, 'Divide': {
            'Op': 'NotAplicable'
        }, 'Invert': {
            'Op': 'NotAplicable'
        }}
    , 'VOLUME24HOUR'    	: {'Multiply': {
            'Op': 'Volume24H'
        }, 'Divide': {
            'Op': 'NotAplicable'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'VOLUME24HOURTO'
        }}
    , 'VOLUME24HOURTO'  	: {'Multiply': {
            'Op': 'Volume24HTo'
        }, 'Divide': {
            'Op': 'NotAplicable'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'VOLUME24HOUR'
        }}
    , 'OPENDAY'          	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'OPENDAY'
        }}
    , 'HIGHDAY'         	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'LOWDAY'
        }}
    , 'LOWDAY'         	    : {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'HIGHDAY'
        }}
    , 'OPEN24HOUR'      	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'OPEN24HOUR'
        }}
    , 'HIGH24HOUR'      	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'LOW24HOUR'
        }}
    , 'LOW24HOUR'       	: {'Multiply': {
            'Op': 'multiply'
        }, 'Divide': {
            'Op': 'divide'
        }, 'Invert': {
            'Op': 'invert',
            'Field': 'HIGH24HOUR'
        }}
    , 'LASTMARKET'      	: {'Multiply': {
            'Op': 'obj1',
            'Field': 'LASTMARKET'
        }, 'Divide': {
            'Op': 'obj1',
            'Field': 'LASTMARKET'
        }, 'Invert': {
            'Op': 'obj1',
            'Field': 'LASTMARKET'
        }},
    'VOLUMEHOUR': {
        'Multiply': {
            'Op': 'NotAplicable'
        },
        'Divide': {
            'Op': 'NotAplicable'
        },
        'Invert': {
            'Op': 'NotAplicable'
        }
    },
    'VOLUMEHOURTO': {
        'Multiply': {
            'Op': 'NotAplicable'
        },
        'Divide': {
            'Op': 'NotAplicable'
        },
        'Invert': {
            'Op': 'NotAplicable'
        }
    },
    'OPENHOUR': {
        'Multiply': {
            'Op': 'multiply'
        },
        'Divide': {
            'Op': 'divide'
        },
        'Invert': {
            'Op': 'invert',
            'Field': 'OPENHOUR'
        }
    },
    'HIGHHOUR': {
        'Multiply': {
            'Op': 'multiply'
        },
        'Divide': {
            'Op': 'divide'
        },
        'Invert': {
            'Op': 'invert',
            'Field': 'HIGHHOUR'
        }
    },
    'LOWHOUR': {
        'Multiply': {
            'Op': 'multiply'
        },
        'Divide': {
            'Op': 'divide'
        },
        'Invert': {
            'Op': 'invert',
            'Field': 'LOWHOUR'
        }
    }
};

CCC.CURRENT.DISPLAY = CCC.CURRENT.DISPLAY||{};
CCC.CURRENT.DISPLAY.FLAGSLINK = {
    'PRICEUP'         : ['PRICEDOWN','PRICEUNCHANGED']
    , 'PRICEDOWN'       : ['PRICEUP','PRICEUNCHANGED']
    , 'PRICEUNCHANGED'  : ['PRICEUP','PRICEDOWN']
    , 'BIDUP'           : ['BIDDOWN','BIDUNCHANGED']
    , 'BIDDOWN'         : ['BIDUP','BIDUNCHANGED']
    , 'BIDUNCHANGED'    : ['BIDUP','BIDDOWN']
    , 'OFFERUP'         : ['OFFERDOWN','OFFERUNCHANGED']
    , 'OFFERDOWN'       : ['OFFERUP','OFFERUNCHANGED']
    , 'OFFERUNCHANGED'  : ['OFFERUP','OFFERDOWN']
    , 'MEDIANUP'        : ['MEDIANDOWN','MEDIANUNCHANGED']
    , 'MEDIANDOWN'      : ['MEDIANUP','MEDIANUNCHANGED']
    , 'MEDIANUNCHANGED' : ['MEDIANUP','MEDIANDOWN']
};

CCC.CURRENT.DISPLAY.FIELDS={
    'TYPE'            : {'Show':false, 'Default':'5'}
    , 'MARKET'          : {'Show':true, 'Filter':'Market', 'Default':'N/A'}
    , 'FROMSYMBOL'      : {'Show':false, 'Default':'BTC'}
    , 'TOSYMBOL'        : {'Show':false, 'Default':'BTC'}
    , 'FLAGS'           : {'Show':false, 'Default':0}
    , 'PRICE'           : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'BID'             : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'OFFER'           : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'LASTUPDATE'      : {'Show':true, 'Filter':'Date'  , 'Format':'yyyy MMMM dd HH:mm:ss', 'Default':Math.floor((new Date()).getTime()/1000)}
    , 'MEDIAN'          : {'Show':true,' Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'LASTVOLUME'      : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL', 'Default':0, 'SortNumberAsWell':false}
    , 'LASTVOLUMETO'    : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':0, 'SortNumberAsWell':false}
    , 'LASTTRADEID'     : {'Show':true, 'Filter':'String', 'Default':0}
    , 'VOLUMEDAY'       : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL', 'Default':0, 'SortNumberAsWell':false}
    , 'VOLUMEDAYTO'     : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':0, 'SortNumberAsWell':false}
    , 'VOLUME24HOUR'    : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL', 'Default':0, 'SortNumberAsWell':true}
    , 'VOLUME24HOURTO'  : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':0, 'SortNumberAsWell':true}
    , 'OPENDAY'         : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'HIGHDAY'         : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'LOWDAY'          : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'OPEN24HOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'HIGH24HOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'LOW24HOUR'       : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL', 'Default':1, 'SortNumberAsWell':false}
    , 'LASTMARKET'      : {'Show':true, 'Filter':'String', 'Default':'N/A'}
    , 'VOLUMEHOUR'      : {'Show': true, 'Filter': 'Number', 'Symbol': 'FROMSYMBOL'}
    , 'VOLUMEHOURTO'    : {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
    , 'OPENHOUR'        : {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
    , 'HIGHHOUR'        : {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
    , 'LOWHOUR'         : {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
};

CCC.CURRENT.pack = function(currentObject)
{
    var mask = 0;
    var packedCurrent ='';
    for(var property in this.FIELDS)
    {
        if(currentObject.hasOwnProperty(property)){
            packedCurrent += '~'+currentObject[property];
            mask|=this.FIELDS[property];
        }
    }
    //removing first character beacsue it is a ~
    return packedCurrent.substr(1)+'~'+mask.toString(16);
};

CCC.CURRENT.unpack = function(value)
{
    var valuesArray = value.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght-1];
    var maskInt = parseInt(mask,16);
    var unpackedCurrent = {};
    var currentField = 0;
    for(var property in this.FIELDS)
    {
        if(this.FIELDS[property] === 0)
        {
            unpackedCurrent[property] = valuesArray[currentField];
            currentField++;
        }
        else if(maskInt&this.FIELDS[property])
        {
            //i know this is a hack, for cccagg, future code please don't hate me:(, i did this to avoid
            //subscribing to trades as well in order to show the last market
            if(property === 'LASTMARKET'){
                unpackedCurrent[property] = valuesArray[currentField];
            }else{
                unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
            }
            currentField++;
        }
    }

    return unpackedCurrent;
};
CCC.CURRENT.getKey = function(currentObject){
    return currentObject['TYPE']+'~'+currentObject['MARKET']+'~'+currentObject['FROMSYMBOL']+'~'+currentObject['TOSYMBOL'];
};
CCC.CURRENT.getKeyFromStreamerData = function(streamerData){
    var valuesArray = streamerData.split("~");
    return valuesArray[0]+'~'+valuesArray[1]+'~'+valuesArray[2]+'~'+valuesArray[3];
};

CCC.CURRENT.conversionInfoToObj = function (conversionInfo) {
    var toSymbol = CCC.STATIC.CURRENCY.getSymbol(conversionInfo['CurrencyTo']);
    var fromSymbol = CCC.STATIC.CURRENCY.getSymbol(conversionInfo['CurrencyFrom']);
    var totalCoinsMined = conversionInfo['Supply'];
    var fullVolume = conversionInfo['FULLVOLUME'];
    var topTierFullVolume = conversionInfo['TOPTIERFULLVOLUME'];
    var conversionType = conversionInfo['Conversion'];
    var objToReturn = {};
    switch(conversionType) {
        case "direct":
            objToReturn = CCC.CURRENT.unpack(conversionInfo.RAW[0]);
            break;
        case "multiply":
            var obj1 = CCC.CURRENT.unpack(conversionInfo.RAW[0])
            var obj2 = CCC.CURRENT.unpack(conversionInfo.RAW[1]);
            objToReturn = CCC.CURRENT.multiply(obj1,obj2,obj1.VOLUME24HOUR);
            break;
        case "divide":
            var obj1 = CCC.CURRENT.unpack(conversionInfo.RAW[0])
            var obj2 = CCC.CURRENT.unpack(conversionInfo.RAW[1]);
            objToReturn = CCC.CURRENT.divide(obj1,obj2);
            break;
        case "invert":
            objToReturn = CCC.CURRENT.invert(CCC.CURRENT.unpack(conversionInfo.RAW[0]));
            break;
        case "invert_divide":
            var obj1 = CCC.CURRENT.unpack(conversionInfo.RAW[0])
            var obj2 = CCC.CURRENT.unpack(conversionInfo.RAW[1]);
            objToReturn = CCC.CURRENT.divide(CCC.CURRENT.invert(obj1),CCC.CURRENT.invert(obj2));
    }
    objToReturn.FULLVOLUME = fullVolume;
    objToReturn.FULLVOLUMETO = fullVolume*objToReturn.PRICE;

    objToReturn.TOPTIERFULLVOLUME = topTierFullVolume;
    objToReturn.TOPTIERFULLVOLUMETO = topTierFullVolume*objToReturn.PRICE;

    objToReturn.CHANGE24HOUR = objToReturn.PRICE - objToReturn.OPEN24HOUR;
    objToReturn.CHANGEPCT24HOUR = objToReturn.CHANGE24HOUR/objToReturn.OPEN24HOUR*100;

    if(totalCoinsMined>0){
        objToReturn.MKTCAP = objToReturn.PRICE*totalCoinsMined;
    } else {
        objToReturn.MKTCAP = 0;
    }
    return objToReturn;
}

CCC.CURRENT.multiply = function (obj1, obj2, volume24H, volume24HTo) {
    var newObject = {};
    for (var property in this.FIELDSOPERATION) {
        switch (this.FIELDSOPERATION[property].Multiply.Op){
            case 'obj1':
                if (obj1.hasOwnProperty(this.FIELDSOPERATION[property].Multiply.Field)) {
                    newObject[property] = obj1[this.FIELDSOPERATION[property].Multiply.Field];
                }
                break;
            case 'obj2':
                if (obj2.hasOwnProperty(this.FIELDSOPERATION[property].Multiply.Field)) {
                    newObject[property] = obj2[this.FIELDSOPERATION[property].Multiply.Field];
                }
                break;
            case 'multiply':
                if (obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) {
                    newObject[property] = obj1[property] * obj2["PRICE"];
                }
                break;
            case 'NotAplicable':
                if (obj1.hasOwnProperty(property)) {
                    newObject[property] = 0;
                }
                break;
            case 'Volume24H':
                newObject[property] = volume24H||0;
                break;
            case 'Volume24HTo':
                newObject[property] = volume24HTo||0;
                break;
            case 'highest':
                if (obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) {
                    if (obj1[property] > obj2[property]){
                        newObject[property] = obj1[property];
                    } else {
                        newObject[property] = obj2[property];
                    }
                }
                break;
        }
    }

    return newObject;
};

CCC.CURRENT.divide = function (obj1, obj2) {
    var newObject = {};

    for (var property in this.FIELDSOPERATION) {
        switch (this.FIELDSOPERATION[property].Divide.Op) {
            case 'obj1':
                if (obj1.hasOwnProperty(this.FIELDSOPERATION[property].Divide.Field)) {
                    newObject[property] = obj1[this.FIELDSOPERATION[property].Divide.Field];
                }
                break;
            case 'obj2':
                if (obj2.hasOwnProperty(this.FIELDSOPERATION[property].Divide.Field)) {
                    newObject[property] = obj2[this.FIELDSOPERATION[property].Divide.Field];
                }
                break;
            case 'divide':
                if (obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) {
                    newObject[property] = obj1[property] / obj2["PRICE"];
                }
                break;
            case 'NotAplicable':
                if (obj1.hasOwnProperty(property)) {
                    newObject[property] = 0;
                }
                break;
            case 'highest':
                if (obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) {
                    if (obj1[property] > obj2[property]) {
                        newObject[property] = obj1[property];
                    } else {
                        newObject[property] = obj2[property];
                    }
                }
                break;
        }
    }

    return newObject;
};

CCC.CURRENT.invert = function (obj1) {
    var newObject = {};

    for (var property in this.FIELDSOPERATION) {
        switch (this.FIELDSOPERATION[property].Invert.Op) {
            case 'obj1':
                if (obj1.hasOwnProperty(this.FIELDSOPERATION[property].Invert.Field)) {
                    newObject[property] = obj1[this.FIELDSOPERATION[property].Invert.Field];
                }
                break;
            case 'invert':
                if (obj1.hasOwnProperty(this.FIELDSOPERATION[property].Invert.Field) && obj1[this.FIELDSOPERATION[property].Invert.Field] > 0) {
                    newObject[property] = 1 / obj1[this.FIELDSOPERATION[property].Invert.Field];
                }else{
                    newObject[property] = 0;
                }
                break;
            case 'NotAplicable':
                if (obj1.hasOwnProperty(property)) {
                    newObject[property] = 0;
                }
                break;
        }
    }

    return newObject;
};




CCC.ORDER=CCC.ORDER || {};

CCC.ORDER.FLAGS = {
    'ADD'         : 0x1  // hex for binary 1
    , 'REMOVE'      : 0x2  // hex for binary 10
    , 'CHANGE'      : 0x4  // hex for binary 100
    , 'NOACTION'    : 0x8  // hex for binary 1000
};

CCC.ORDER.SIDE = {
    'BID'        : 0x1 // hex for binary 1  | it is ordered from highest to lowest !BUY!
    , 'ASK'        : 0x2 // hex for binary 10 | it is ordered from lowest to highest !SELL!
};

CCC.ORDER.FIELDS = {
    'T'          : 0x0  // hex for binary 0, it is a special case of fields that are always there TYPE
    , 'M'          : 0x0  // hex for binary 0, it is a special case of fields that are always there MARKET
    , 'FSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there FROM SYMBOL
    , 'TSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there TO SYMBOL
    , 'S'          : 0x0  // hex for binary 0, it is a special case of fields that are always there SIDE
    , 'F'          : 0x0  // hex for binary 0, it is a special case of fields that are always there FLAGS
    , 'SEQ'        : 0x0  // hex for binary 0, it is a special case of fields that are always there SEQUANCE
    , 'P'          : 0x0  // hex for binary 0, it is a special case of fields that are always there PRICE
    , 'Q'          : 0x0  // hex for binary 0, it is a special case of fields that are always there QUANTITY
};


CCC.ORDER.FIELDSNOKEY = {
    'P'          : 0x0  // hex for binary 0, it is a special case of fields that are always there PRICE
    , 'Q'          : 0x0  // hex for binary 0, it is a special case of fields that are always there QUANTITY
};

CCC.ORDER.DISPLAY = CCC.ORDER.DISPLAY||{};
CCC.ORDER.DISPLAY.FIELDS = {
    'T'          : {"Show":false, 'Filter':'None'}
    , 'M'          : {"Show":true,  'Filter':'Market'}
    , 'FSYM'       : {"Show":true,  'Filter':'CurrencySymbol'}
    , 'TSYM'       : {"Show":true,  'Filter':'CurrencySymbol'}
    , 'S'          : {"Show":true,  'Filter':'Integer'}
    , 'F'          : {"Show":true,  'Filter':'Integer'}
    , 'SEQ'        : {'Show':false, 'Filter':'Integer'}
    , 'P'          : {'Show':true,  'Filter':'Number', 'Symbol':'TSYM'}
    , 'Q'          : {'Show':true,  'Filter':'Number', 'Symbol':'NONE'}
};

CCC.ORDER.pack = function(orderObject){
    var packedOrder ='';
    for(var property in this.FIELDS){
        if(orderObject.hasOwnProperty(property)){
            packedOrder += '~'+orderObject[property];
        }
    }
    //removing first character because it is a ~
    return packedOrder.substr(1);
};

CCC.ORDER.packNoType = function(orderObject){
    var packedOrder ='';
    for(var property in this.FIELDS){
        if(property=='T'){
            continue;
        }
        if(orderObject.hasOwnProperty(property)){
            packedOrder += '~'+orderObject[property];
        }
    }
    //removing first character beacsue it is a ~
    return packedOrder.substr(1);
};

CCC.ORDER.packNoKey = function(orderObject){
    var packedOrder ='';
    for(var property in this.FIELDSNOKEY){
        if(orderObject.hasOwnProperty(property)){
            packedOrder += '~'+orderObject[property];
        }
    }
    //removing first character beacsue it is a ~
    return packedOrder.substr(1);
};


CCC.ORDER.unpack = function(orderString){
    var valuesArray = orderString.split("~");
    var totalValues = valuesArray.length;
    var unpackedOrder = {};
    var currentField = 0;
    for(var property in this.FIELDS){
        if(this.FIELDS[property] === 0 && currentField<totalValues){
            if(this.DISPLAY.FIELDS[property].Filter=='Number'){
                unpackedOrder[property] = parseFloat(valuesArray[currentField]);
            }else if(this.DISPLAY.FIELDS[property].Filter=='Integer'){
                unpackedOrder[property] = parseInt(valuesArray[currentField],10);
            }else{
                unpackedOrder[property] = valuesArray[currentField];
            }
            currentField++;
        }
    }
    return unpackedOrder;
};

CCC.ORDER.getKey = function(orderObject){
    return orderObject['T']+'~'+orderObject['M']+'~'+orderObject['FSYM']+'~'+orderObject['TSYM'];
};

CCC.ORDER.getOrderBookKey = function(orderObject){
    return orderObject['M']+'~'+orderObject['FSYM']+'~'+orderObject['TSYM'];
};

CCC.ORDER.unpackOrderBookKey = function(orderBookKey){
    var parts= orderBookKey.split('~');
    return {M:parts[0],FSYM:parts[1],TSYM:parts[2]};
};

CCC.ORDER.getObjectKey = function(orderObject){
    return orderObject['P']+'~'+orderObject['S'];
};

CCC.ORDER.getExchangeKey = function(orderObject){
    return orderObject['T']+'~'+orderObject['M'];
};

CCC.ORDER.getTypeText = function(orderObject){
    for(var property in this.FLAGS){
        if(this.FLAGS[property]===orderObject.F){
            return property;
        }

    }
    return "N/A";
};

CCC.FULLVOLUME = CCC.FULLVOLUME || {};

CCC.FULLVOLUME.FIELDS = {
    'TYPE': 0x0,
    'SYMBOL': 0x0,
    'FULLVOLUME': 0x0
};

CCC.FULLVOLUME.unpack = function(volStr) {
    var valuesArray = volStr.split("~");
    var unpackedCurrent = {};
    var currentField = 0;
    var fields = this.FIELDS;
    for (var property in fields) {
        if (fields[property] == 0) {
            if(property == 'FULLVOLUME') {
                unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
            } else {
                unpackedCurrent[property] = valuesArray[currentField];
            }
            currentField++;
        }
    }
    return unpackedCurrent;
};

CCC.FULLVOLUME.pack = function(volObj) {
    var packedVol = '';
    for (var property in volObj) {
        packedVol += '~' + volObj[property];
    }
    var strToReturn = packedVol.substr(1);
    return strToReturn;
};

CCC.FULLVOLUME.getKey = function(currentObject){
    return CCC.STATIC.TYPE.FULLVOLUME +'~'+currentObject['SYMBOL'];
};



CCC.TOPTIERFULLVOLUME = CCC.TOPTIERFULLVOLUME || {};

CCC.TOPTIERFULLVOLUME.FIELDS = {
    'TYPE': 0x0,
    'SYMBOL': 0x0,
    'TOPTIERFULLVOLUME': 0x0
};

CCC.TOPTIERFULLVOLUME.unpack = function(volStr) {
    var valuesArray = volStr.split("~");
    var unpackedCurrent = {};
    var currentField = 0;
    var fields = this.FIELDS;
    for (var property in fields) {
        if (fields[property] == 0) {
            if(property == 'TOPTIERFULLVOLUME') {
                if (valuesArray[currentField] !== undefined) {
                    unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
                } else {
                    unpackedCurrent[property] = 0;
                }
            } else {
                unpackedCurrent[property] = valuesArray[currentField];
            }
            currentField++;
        }
    }
    return unpackedCurrent;
};

CCC.TOPTIERFULLVOLUME.pack = function(volObj) {
    var packedVol = '';
    for (var property in volObj) {
        packedVol += '~' + volObj[property];
    }
    var strToReturn = packedVol.substr(1);
    return strToReturn;
};

CCC.TOPTIERFULLVOLUME.getKey = function(currentObject){
    return CCC.STATIC.TYPE.TOPTIERFULLVOLUME +'~'+currentObject['SYMBOL'];
};


CCC.NEWS = CCC.NEWS || {};

CCC.NEWS.DATA={
    newsFeed: [],
    acceptedNewsCategories: [],
    defaultNewsApiParams: {
        'feeds':'ALL_NEWS_FEEDS', 'categories':'ALL_NEWS_CATEGORIES', 'excludeCategories':'NO_EXCLUDED_NEWS_CATEGORIES'
    },
    newsFilters: {
        'feeds': 				{'name':'Feeds', 'headerText':'News Feeds', 'urlParam':'feeds', 'filterType':'feeds','buttonText':'Reset News Feeds' },
        'categories': 			{'name':'Include', 'headerText':'Categories', 'urlParam':'categories', 'filterType':'categories', 'buttonText':'Reset' },
        'excludeCategories': 	{'name':'Exclude', 'headerText':'Exclude', 'urlParam':'excludeCategories', 'filterType':'categories','buttonText':'Reset' }
    },
    newsUserActions: {
        2: 			{'name':'Downvote', 'key':'downvotes','userActionNumber':2, 'className':'news-downvote', 'actionSelectedSymbol':'fa-thumbs-down', 'actionNotSelectedSymbol':'fa-thumbs-o-down', 'oppositeAction':'upvotes'},
        1: 			{'name':'Upvote', 'key':'upvotes', 'userActionNumber':1, 'className':'news-upvote', 'actionSelectedSymbol':'fa-thumbs-up', 'actionNotSelectedSymbol':'fa-thumbs-o-up', 'oppositeAction':'downvotes'}
    },
    newsSortOrders:{
        'latest': { sortOrderName:'Latest News Articles', urlParam:'latest' },
        'popular': { sortOrderName:'Most Popular Articles', urlParam:'popular' }
    }
};

CCC.COUNTRYINFO = CCC.COUNTRYINFO || {};
CCC.COUNTRYINFO.data={
    "AF":{
        "Timezone":"(UTC+04:30) Kabul",
        "DisplayName":"Afghanistan",
        "Currency":[
            "AFN"
        ],
        "TimeDifferenceFromUTCInMinutes":240
    },
    "AX":{
        "Timezone":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "DisplayName":"Aland Islands",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "AL":{
        "Timezone":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "DisplayName":"Albania",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "DZ":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Algeria",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "AS":{
        "Timezone":"(UTC-11:00) Coordinated Universal Time -11",
        "DisplayName":"American Samoa",
        "TimeDifferenceFromUTCInMinutes":-660
    },
    "AD":{
        "Timezone":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "DisplayName":"Andorra",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "AO":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Angola",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "AI":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Anguilla",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "AQ":{
        "Timezone":"(UTC+07:00) Novosibirsk",
        "DisplayName":"Antarctica",
        "TimeDifferenceFromUTCInMinutes":420
    },
    "AG":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Antigua and Barbuda",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "AR":{
        "Timezone":"(UTC-03:00) Buenos Aires",
        "DisplayName":"Argentina",
        "TimeDifferenceFromUTCInMinutes":-180
    },
    "AM":{
        "Timezone":"(UTC+04:00) Yerevan",
        "DisplayName":"Armenia",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "AW":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Aruba",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "AU":{
        "Timezone":"(UTC+10:00) Canberra, Melbourne, Sydney",
        "DisplayName":"Australia",
        "TimeDifferenceFromUTCInMinutes":600
    },
    "AT":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Austria",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "AZ":{
        "Timezone":"(UTC+04:00) Baku",
        "DisplayName":"Azerbaijan",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "BS":{
        "Timezone":"(UTC-05:00) Eastern Time (US and Canada)",
        "DisplayName":"Bahamas",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "BH":{
        "Timezone":"(UTC+03:00) Kuwait, Riyadh",
        "DisplayName":"Bahrain",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "BD":{
        "Timezone":"(UTC+06:00) Dhaka",
        "DisplayName":"Bangladesh",
        "TimeDifferenceFromUTCInMinutes":360
    },
    "BB":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Barbados",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "BY":{
        "Timezone":"(UTC+02:00) Minsk",
        "DisplayName":"Belarus",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "BE":{
        "Timezone":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        "DisplayName":"Belgium",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "BZ":{
        "Timezone":"(UTC-06:00) Central America",
        "DisplayName":"Belize",
        "TimeDifferenceFromUTCInMinutes":-360
    },
    "BJ":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Benin",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "BM":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Bermuda",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "BT":{
        "Timezone":"(UTC+06:00) Astana",
        "DisplayName":"Bhutan",
        "TimeDifferenceFromUTCInMinutes":360
    },
    "BO":{
        "Timezone":"(UTC-04:00) Cuiaba",
        "DisplayName":"Bolivia",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "BQ":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Bonaire, Saint Eustatius and Saba",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "BA":{
        "Timezone":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "DisplayName":"Bosnia and Herzegovina",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "BW":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Botswana",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "BV":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Bouvet Island",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "BR":{
        "Timezone":"(UTC-03:00) Brasilia",
        "DisplayName":"Brazil",
        "TimeDifferenceFromUTCInMinutes":-180
    },
    "IO":{
        "Timezone":"(UTC+06:00) Astana",
        "DisplayName":"British Indian Ocean Territory",
        "TimeDifferenceFromUTCInMinutes":360
    },
    "BN":{
        "Timezone":"(UTC+08:00) Kuala Lumpur, Singapore",
        "DisplayName":"Brunei Darussalam",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "BG":{
        "Timezone":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "DisplayName":"Bulgaria",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "BF":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Burkina Faso",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "BI":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Burundi",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "KH":{
        "Timezone":"(UTC+07:00) Bangkok, Hanoi, Jakarta",
        "DisplayName":"Cambodia",
        "TimeDifferenceFromUTCInMinutes":420
    },
    "CM":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Cameroon",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "CA":{
        "Timezone":"(UTC-05:00) Eastern Time (US and Canada)",
        "DisplayName":"Canada",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "CV":{
        "Timezone":"(UTC-01:00) Cabo Verde Is.",
        "DisplayName":"Cape Verde",
        "TimeDifferenceFromUTCInMinutes":-60
    },
    "KY":{
        "Timezone":"(UTC-05:00) Eastern Time (US and Canada)",
        "DisplayName":"Cayman Islands",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "CF":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Central African Republic",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "TD":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Chad",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "CL":{
        "Timezone":"(UTC-04:00) Santiago",
        "DisplayName":"Chile",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "CN":{
        "Timezone":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        "DisplayName":"China",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "CX":{
        "Timezone":"(UTC+14:00) Kiritimati Island",
        "DisplayName":"Christmas Island",
        "TimeDifferenceFromUTCInMinutes":840
    },
    "CC":{
        "Timezone":"(UTC+06:30) Yangon (Rangoon)",
        "DisplayName":"Cocos (Keeling) Islands",
        "TimeDifferenceFromUTCInMinutes":360
    },
    "CO":{
        "Timezone":"(UTC-05:00) Bogota, Lima, Quito",
        "DisplayName":"Colombia",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "KM":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Comoros",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "CG":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Congo (Brazzaville)",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "CD":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Congo [DRC]",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "CK":{
        "Timezone":"(UTC-10:00) Hawaii",
        "DisplayName":"Cook Islands",
        "TimeDifferenceFromUTCInMinutes":-600
    },
    "CR":{
        "Timezone":"(UTC-06:00) Central America",
        "DisplayName":"Costa Rica",
        "TimeDifferenceFromUTCInMinutes":-360
    },
    "CI":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Ivory Coast",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "HR":{
        "Timezone":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "DisplayName":"Croatia",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "CU":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Cuba",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "CW":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Curaçao",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "CY":{
        "Timezone":"(UTC+02:00) Istanbul",
        "DisplayName":"Cyprus",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "CZ":{
        "Timezone":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "DisplayName":"Czech Republic",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "DK":{
        "Timezone":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        "DisplayName":"Denmark",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "DJ":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Djibouti",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "DM":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Dominica",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "DO":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Dominican Republic",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "EC":{
        "Timezone":"(UTC-05:00) Eastern Time (US and Canada)",
        "DisplayName":"Ecuador",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "EG":{
        "Timezone":"(UTC+02:00) Cairo",
        "DisplayName":"Egypt",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "SV":{
        "Timezone":"(UTC-06:00) Central America",
        "DisplayName":"El Salvador",
        "TimeDifferenceFromUTCInMinutes":-360
    },
    "GQ":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Equatorial Guinea",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "ER":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Eritrea",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "EE":{
        "Timezone":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "DisplayName":"Estonia",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "ET":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Ethiopia",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "FK":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Falkland Islands (Malvinas)",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "FO":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Faroe Islands",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "FJ":{
        "Timezone":"(UTC+12:00) Fiji",
        "DisplayName":"Fiji",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "FI":{
        "Timezone":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "DisplayName":"Finland",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "FR":{
        "Timezone":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        "DisplayName":"France",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "GF":{
        "Timezone":"(UTC-03:00) Cayenne, Fortaleza",
        "DisplayName":"French Guiana",
        "TimeDifferenceFromUTCInMinutes":-180
    },
    "PF":{
        "Timezone":"(UTC-10:00) Hawaii",
        "DisplayName":"French Polynesia",
        "TimeDifferenceFromUTCInMinutes":-600
    },
    "TF":{
        "Timezone":"(UTC+05:00) Tashkent",
        "DisplayName":"French Southern Territories",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "GA":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Gabon",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "GM":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Gambia",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "GE":{
        "Timezone":"(UTC+04:00) Tbilisi",
        "DisplayName":"Georgia",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "DE":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Germany",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "GH":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Ghana",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "GI":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Gibraltar",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "GR":{
        "Timezone":"(UTC+02:00) Athens, Bucharest",
        "DisplayName":"Greece",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "GL":{
        "Timezone":"(UTC-03:00) Greenland",
        "DisplayName":"Greenland",
        "TimeDifferenceFromUTCInMinutes":-180
    },
    "GD":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Grenada",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "GP":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Guadeloupe",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "GU":{
        "Timezone":"(UTC+10:00) Canberra, Melbourne, Sydney",
        "DisplayName":"Guam",
        "TimeDifferenceFromUTCInMinutes":600
    },
    "GT":{
        "Timezone":"(UTC-06:00) Central Time (US and Canada)",
        "DisplayName":"Guatemala",
        "TimeDifferenceFromUTCInMinutes":-360
    },
    "GG":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Guernsey",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "GN":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Guinea",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "GW":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Guinea-Bissau",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "GY":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Guyana",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "HT":{
        "Timezone":"(UTC-05:00) Eastern Time (US and Canada)",
        "DisplayName":"Haiti",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "HM":{
        "Timezone":"(UTC+05:00) Tashkent",
        "DisplayName":"Heard Island and McDonald Islands",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "VA":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Holy See",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "HN":{
        "Timezone":"(UTC-06:00) Central America",
        "DisplayName":"Honduras",
        "TimeDifferenceFromUTCInMinutes":-360
    },
    "HK":{
        "Timezone":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        "DisplayName":"Hong Kong",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "HU":{
        "Timezone":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "DisplayName":"Hungary",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "IS":{
        "Timezone":"(UTC) Monrovia, Reykjavik",
        "DisplayName":"Iceland",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "IN":{
        "Timezone":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "DisplayName":"India",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "ID":{
        "Timezone":"(UTC+07:00) Bangkok, Hanoi, Jakarta",
        "DisplayName":"Indonesia",
        "TimeDifferenceFromUTCInMinutes":420
    },
    "IR":{
        "Timezone":"(UTC+03:30) Tehran",
        "DisplayName":"Iran",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "IQ":{
        "Timezone":"(UTC+03:00) Baghdad",
        "DisplayName":"Iraq",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "IE":{
        "Timezone":"(UTC) Dublin, Edinburgh, Lisbon, London",
        "DisplayName":"Ireland",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "IM":{
        "Timezone":"(UTC) Dublin, Edinburgh, Lisbon, London",
        "DisplayName":"Isle of Man",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "IL":{
        "Timezone":"(UTC+02:00) Jerusalem",
        "DisplayName":"Israel",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "IT":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Italy",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "JM":{
        "Timezone":"(UTC-05:00) Eastern Time (US and Canada)",
        "DisplayName":"Jamaica",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "JP":{
        "Timezone":"(UTC+09:00) Osaka, Sapporo, Tokyo",
        "DisplayName":"Japan",
        "TimeDifferenceFromUTCInMinutes":540
    },
    "JE":{
        "Timezone":"(UTC) Dublin, Edinburgh, Lisbon, London",
        "DisplayName":"Jersey",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "JO":{
        "Timezone":"(UTC+02:00) Amman",
        "DisplayName":"Jordan",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "KZ":{
        "Timezone":"(UTC+06:00) Astana",
        "DisplayName":"Kazakhstan",
        "TimeDifferenceFromUTCInMinutes":360
    },
    "KE":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Kenya",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "KI":{
        "Timezone":"(UTC+12:00) Coordinated Universal Time +12",
        "DisplayName":"Kiribati",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "KP":{
        "Timezone":"(UTC+09:00) Seoul",
        "DisplayName":"Korea, Democratic People's Republic of",
        "TimeDifferenceFromUTCInMinutes":540
    },
    "KR":{
        "Timezone":"(UTC+09:00) Seoul",
        "DisplayName":"Korea",
        "TimeDifferenceFromUTCInMinutes":540
    },
    "KW":{
        "Timezone":"(UTC+03:00) Kuwait, Riyadh",
        "DisplayName":"Kuwait",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "KG":{
        "Timezone":"(UTC+06:00) Astana",
        "DisplayName":"Kyrgyzstan",
        "TimeDifferenceFromUTCInMinutes":360
    },
    "LA":{
        "Timezone":"(UTC+07:00) Bangkok, Hanoi, Jakarta",
        "DisplayName":"Lao PDR",
        "TimeDifferenceFromUTCInMinutes":420
    },
    "LV":{
        "Timezone":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "DisplayName":"Latvia",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "LB":{
        "Timezone":"(UTC+02:00) Beirut",
        "DisplayName":"Lebanon",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "LS":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Lesotho",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "LR":{
        "Timezone":"(UTC) Monrovia, Reykjavik",
        "DisplayName":"Liberia",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "LY":{
        "Timezone":"(UTC+02:00) Cairo",
        "DisplayName":"Libya",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "LI":{
        "Timezone":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        "DisplayName":"Liechtenstein",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "LT":{
        "Timezone":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "DisplayName":"Lithuania",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "LU":{
        "Timezone":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        "DisplayName":"Luxembourg",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "MO":{
        "Timezone":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        "DisplayName":"Macao SAR",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "MK":{
        "Timezone":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "DisplayName":"Macedonia (Former Yugoslav Republic of Macedonia)",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "MG":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Madagascar",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "MW":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Malawi",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "MY":{
        "Timezone":"(UTC+08:00) Kuala Lumpur, Singapore",
        "DisplayName":"Malaysia",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "MV":{
        "Timezone":"(UTC+05:00) Tashkent",
        "DisplayName":"Maldives",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "ML":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Mali",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "MT":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Malta",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "MH":{
        "Timezone":"(UTC+12:00) Coordinated Universal Time +12",
        "DisplayName":"Marshall Islands",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "MQ":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Martinique",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "MR":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Mauritania",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "MU":{
        "Timezone":"(UTC+04:00) Port Louis",
        "DisplayName":"Mauritius",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "YT":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Mayotte",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "MX":{
        "Timezone":"(UTC-06:00) Guadalajara, Mexico City, Monterrey",
        "DisplayName":"Mexico",
        "TimeDifferenceFromUTCInMinutes":-360
    },
    "FM":{
        "Timezone":"(UTC+10:00) Canberra, Melbourne, Sydney",
        "DisplayName":"Micronesia, Federated States of",
        "TimeDifferenceFromUTCInMinutes":600
    },
    "MD":{
        "Timezone":"(UTC+02:00) Athens, Bucharest",
        "DisplayName":"Moldova",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "MC":{
        "Timezone":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        "DisplayName":"Principality of Monaco",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "MN":{
        "Timezone":"(UTC+08:00) Ulaanbaatar",
        "DisplayName":"Mongolia",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "ME":{
        "Timezone":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "DisplayName":"Montenegro",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "MS":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Montserrat",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "MA":{
        "Timezone":"(UTC) Casablanca",
        "DisplayName":"Morocco",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "MZ":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Mozambique",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "MM":{
        "Timezone":"(UTC+06:30) Yangon (Rangoon)",
        "DisplayName":"Myanmar",
        "TimeDifferenceFromUTCInMinutes":360
    },
    "NA":{
        "Timezone":"(UTC+01:00) Windhoek",
        "DisplayName":"Namibia",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "NR":{
        "Timezone":"(UTC+12:00) Coordinated Universal Time +12",
        "DisplayName":"Nauru",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "NP":{
        "Timezone":"(UTC+05:45) Kathmandu",
        "DisplayName":"Nepal",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "NL":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Netherlands",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "NC":{
        "Timezone":"(UTC+11:00) Solomon Is., New Caledonia",
        "DisplayName":"New Caledonia",
        "TimeDifferenceFromUTCInMinutes":660
    },
    "NZ":{
        "Timezone":"(UTC+12:00) Auckland, Wellington",
        "DisplayName":"New Zealand",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "NI":{
        "Timezone":"(UTC-06:00) Central America",
        "DisplayName":"Nicaragua",
        "TimeDifferenceFromUTCInMinutes":-360
    },
    "NE":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Niger",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "NG":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Nigeria",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "NU":{
        "Timezone":"(UTC-11:00) Coordinated Universal Time -11",
        "DisplayName":"Niue",
        "TimeDifferenceFromUTCInMinutes":-660
    },
    "NF":{
        "Timezone":"(UTC+12:00) Auckland, Wellington",
        "DisplayName":"Norfolk Island",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "MP":{
        "Timezone":"(UTC+10:00) Canberra, Melbourne, Sydney",
        "DisplayName":"Northern Mariana Islands",
        "TimeDifferenceFromUTCInMinutes":600
    },
    "NO":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Norway",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "OM":{
        "Timezone":"(UTC+04:00) Abu Dhabi, Muscat",
        "DisplayName":"Oman",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "PK":{
        "Timezone":"(UTC+05:00) Islamabad, Karachi",
        "DisplayName":"Pakistan",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "PW":{
        "Timezone":"(UTC+09:00) Seoul",
        "DisplayName":"Palau",
        "TimeDifferenceFromUTCInMinutes":540
    },
    "PS":{
        "Timezone":"(UTC+02:00) Jerusalem",
        "DisplayName":"Palestine, State of",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "PA":{
        "Timezone":"(UTC-05:00) Bogota, Lima, Quito",
        "DisplayName":"Panama",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "PG":{
        "Timezone":"(UTC+10:00) Canberra, Melbourne, Sydney",
        "DisplayName":"Papua New Guinea",
        "TimeDifferenceFromUTCInMinutes":600
    },
    "PY":{
        "Timezone":"(UTC-04:00) Asuncion",
        "DisplayName":"Paraguay",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "PE":{
        "Timezone":"(UTC-05:00) Bogota, Lima, Quito",
        "DisplayName":"Peru",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "PH":{
        "Timezone":"(UTC+08:00) Kuala Lumpur, Singapore",
        "DisplayName":"Philippines",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "PN":{
        "Timezone":"(UTC-08:00) Pacific Time (US and Canada)",
        "DisplayName":"Pitcairn",
        "TimeDifferenceFromUTCInMinutes":-480
    },
    "PL":{
        "Timezone":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "DisplayName":"Poland",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "PT":{
        "Timezone":"(UTC) Dublin, Edinburgh, Lisbon, London",
        "DisplayName":"Portugal",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "PR":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Puerto Rico",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "QA":{
        "Timezone":"(UTC+03:00) Kuwait, Riyadh",
        "DisplayName":"Qatar",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "RE":{
        "Timezone":"(UTC+04:00) Abu Dhabi, Muscat",
        "DisplayName":"Réunion",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "RO":{
        "Timezone":"(UTC+02:00) Athens, Bucharest",
        "DisplayName":"Romania",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "RU":{
        "Timezone":"(UTC+04:00) Moscow, St. Petersburg, Volgograd",
        "DisplayName":"Russia",
        "Currency":[
            "RUR",
            "RUB"
        ],
        "TimeDifferenceFromUTCInMinutes":240
    },
    "RW":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Rwanda",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "BL":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Saint Barthélemy",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "SH":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Saint Helena, Ascension and Tristan da Cunha",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "KN":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Saint Kitts and Nevis",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "LC":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Saint Lucia",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "MF":{
        "Timezone":"(UTC-04:00) Asuncion",
        "DisplayName":"Saint Martin (French part)",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "PM":{
        "Timezone":"(UTC-03:00) Cayenne, Fortaleza",
        "DisplayName":"Saint Pierre and Miquelon",
        "TimeDifferenceFromUTCInMinutes":-180
    },
    "VC":{
        "Timezone":"(UTC-04:00) Santiago",
        "DisplayName":"Saint Vincent and the Grenadines",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "WS":{
        "Timezone":"(UTC+13:00) Samoa",
        "DisplayName":"Samoa",
        "TimeDifferenceFromUTCInMinutes":780
    },
    "SM":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"San Marino",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "ST":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Sao Tome and Principe",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "SA":{
        "Timezone":"(UTC+03:00) Kuwait, Riyadh",
        "DisplayName":"Saudi Arabia",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "SN":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Senegal",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "RS":{
        "Timezone":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "DisplayName":"Serbia",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "SC":{
        "Timezone":"(UTC+04:00) Abu Dhabi, Muscat",
        "DisplayName":"Seychelles",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "SL":{
        "Timezone":"(UTC) Monrovia, Reykjavik",
        "DisplayName":"Sierra Leone",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "SG":{
        "Timezone":"(UTC+08:00) Kuala Lumpur, Singapore",
        "DisplayName":"Singapore",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "SX":{
        "Timezone":"(UTC-04:00) Asuncion",
        "DisplayName":"Sint Maarten (Dutch part)",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "SK":{
        "Timezone":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "DisplayName":"Slovakia",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "SI":{
        "Timezone":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "DisplayName":"Slovenia",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "SB":{
        "Timezone":"(UTC+11:00) Solomon Is., New Caledonia",
        "DisplayName":"Solomon Islands",
        "TimeDifferenceFromUTCInMinutes":660
    },
    "SO":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Somalia",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "ZA":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"South Africa",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "GS":{
        "Timezone":"(UTC-02:00) Mid-Atlantic",
        "DisplayName":"South Georgia and the South Sandwich Islands",
        "TimeDifferenceFromUTCInMinutes":-120
    },
    "SS":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"South Sudan",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "ES":{
        "Timezone":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        "DisplayName":"Spain",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "LK":{
        "Timezone":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "DisplayName":"Sri Lanka",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "SD":{
        "Timezone":"(UTC+02:00) Amman",
        "DisplayName":"Sudan",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "SR":{
        "Timezone":"(UTC-03:00) Montevideo",
        "DisplayName":"Suriname",
        "TimeDifferenceFromUTCInMinutes":-180
    },
    "SJ":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Svalbard and Jan Mayen",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "SZ":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Swaziland",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "SE":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Sweden",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "CH":{
        "Timezone":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "DisplayName":"Switzerland",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "SY":{
        "Timezone":"(UTC+02:00) Damascus",
        "DisplayName":"Syria",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "TW":{
        "Timezone":"(UTC+08:00) Taipei",
        "DisplayName":"Taiwan",
        "TimeDifferenceFromUTCInMinutes":480
    },
    "TJ":{
        "Timezone":"(UTC+05:00) Tashkent",
        "DisplayName":"Tajikistan",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "TZ":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Tanzania, United Republic of",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "TH":{
        "Timezone":"(UTC+07:00) Bangkok, Hanoi, Jakarta",
        "DisplayName":"Thailand",
        "TimeDifferenceFromUTCInMinutes":420
    },
    "TL":{
        "Timezone":"(UTC+09:00) Osaka, Sapporo, Tokyo",
        "DisplayName":"Timor-Leste",
        "TimeDifferenceFromUTCInMinutes":540
    },
    "TG":{
        "Timezone":"(UTC) Coordinated Universal Time",
        "DisplayName":"Togo",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "TK":{
        "Timezone":"(UTC+13:00)Samoa",
        "DisplayName":"Tokelau",
        "TimeDifferenceFromUTCInMinutes":780
    },
    "TO":{
        "Timezone":"(UTC+13:00) Nuku'alofa",
        "DisplayName":"Tonga",
        "TimeDifferenceFromUTCInMinutes":780
    },
    "TT":{
        "Timezone":"(UTC-04:00) Atlantic Time (Canada)",
        "DisplayName":"Trinidad and Tobago",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "TN":{
        "Timezone":"(UTC+01:00) West Central Africa",
        "DisplayName":"Tunisia",
        "TimeDifferenceFromUTCInMinutes":60
    },
    "TR":{
        "Timezone":"(UTC+02:00) Istanbul",
        "DisplayName":"Turkey",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "TM":{
        "Timezone":"(UTC+05:00) Tashkent",
        "DisplayName":"Turkmenistan",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "TC":{
        "Timezone":"(UTC-05:00) Bogota, Lima, Quito",
        "DisplayName":"Turks and Caicos Islands",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "TV":{
        "Timezone":"(UTC+12:00) Magadan",
        "DisplayName":"Tuvalu",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "UG":{
        "Timezone":"(UTC+03:00) Nairobi",
        "DisplayName":"Uganda",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "UA":{
        "Timezone":"(UTC+02:00) Minsk",
        "DisplayName":"Ukraine",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "AE":{
        "Timezone":"(UTC+04:00) Abu Dhabi, Muscat",
        "DisplayName":"U.A.E.",
        "TimeDifferenceFromUTCInMinutes":240
    },
    "GB":{
        "Timezone":"(UTC) Dublin, Edinburgh, Lisbon, London",
        "DisplayName":"United Kingdom",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "US":{
        "Timezone":"(UTC-05:00) Eastern Time (US and Canada)",
        "DisplayName":"United States",
        "TimeDifferenceFromUTCInMinutes":-300
    },
    "UM":{
        "Timezone":"(UTC+12:00) Magadan",
        "DisplayName":"United States Minor Outlying Islands",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "UY":{
        "Timezone":"(UTC-03:00) Montevideo",
        "DisplayName":"Uruguay",
        "TimeDifferenceFromUTCInMinutes":-180
    },
    "UZ":{
        "Timezone":"(UTC+05:00) Tashkent",
        "DisplayName":"Uzbekistan",
        "TimeDifferenceFromUTCInMinutes":300
    },
    "VU":{
        "Timezone":"(UTC+11:00) Solomon Is., New Caledonia",
        "DisplayName":"Vanuatu",
        "TimeDifferenceFromUTCInMinutes":660
    },
    "VE":{
        "Timezone":"(UTC-04:30) Caracas",
        "DisplayName":"Bolivarian Republic of Venezuela",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "VN":{
        "Timezone":"(UTC+07:00) Bangkok, Hanoi, Jakarta",
        "DisplayName":"Vietnam",
        "TimeDifferenceFromUTCInMinutes":420
    },
    "VG":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Virgin Islands, British",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "VI":{
        "Timezone":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        "DisplayName":"Virgin Islands, U.S.",
        "TimeDifferenceFromUTCInMinutes":-240
    },
    "WF":{
        "Timezone":"(UTC+12:00) Coordinated Universal Time +12",
        "DisplayName":"Wallis and Futuna",
        "TimeDifferenceFromUTCInMinutes":720
    },
    "EH":{
        "Timezone":"(UTC) Casablanca",
        "DisplayName":"Western Sahara",
        "TimeDifferenceFromUTCInMinutes":0
    },
    "YE":{
        "Timezone":"(UTC+03:00) Kuwait, Riyadh",
        "DisplayName":"Yemen",
        "TimeDifferenceFromUTCInMinutes":180
    },
    "ZM":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Zambia",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "ZW":{
        "Timezone":"(UTC+02:00) Harare, Pretoria",
        "DisplayName":"Zimbabwe",
        "TimeDifferenceFromUTCInMinutes":120
    },
    "NotAvailable":{
        "Timezone":"(UTC) Dublin, Edinburgh, Lisbon, London",
        "DisplayName":"",
        "TimeDifferenceFromUTCInMinutes":0
    }
};


CCC.COUNTRYINFO.countryToCurrency = {
    "US":"USD",
    "GB":"GBP",
    "DE":"EUR",
    "FR":"EUR",
    "IT":"EUR",
    "PT":"EUR",
    "RO":"RON",
    "HU":"HUF",
    "AU":"AUD",
    "BR":"BRL",
    "CA":"CAD",
    "CH":"CHF",
    "CN":"CNY",
    "HK":"HKD",
    "IN":"INR",
    "JP":"JPY",
    "KR":"KRW",
    "MX":"MXN",
    "NZ":"NZD",
    "PH":"PHP",
    "PL":"PLN",
    "RU":"RUB",
    "SG":"SGD",
    "VE":"VEF",
    "VN":"VND"
};

CCC.COUNTRYINFO.getFiatCurrencies = function(){
    var fiatCurrenciesArrayToReturn = [];
    for(var countrySymbol in CCC.COUNTRYINFO.countryToCurrency){
        var currentFiatCurrency = CCC.COUNTRYINFO.countryToCurrency[countrySymbol];
        if (fiatCurrenciesArrayToReturn.indexOf(currentFiatCurrency)===-1){
            fiatCurrenciesArrayToReturn.push(currentFiatCurrency);
        }
    }
    return fiatCurrenciesArrayToReturn;
};

CCC.COUNTRYINFO.getCountryTimezoneOptions = function(){
    var timezoneArrayToReturn = [];
    for(var countryCode in CCC.COUNTRYINFO.data){
        var indexOfTimezone = timezoneArrayToReturn.findIndex(function(obj){return obj.Timezone===CCC.COUNTRYINFO.data[countryCode].Timezone})
        if (indexOfTimezone===-1){
            timezoneArrayToReturn.push(CCC.COUNTRYINFO.data[countryCode]);
        }
    }
    timezoneArrayToReturn.sort(function(a,b){
        return a.TimeDifferenceFromUTCInMinutes - b.TimeDifferenceFromUTCInMinutes;
    });
    return timezoneArrayToReturn.map(function(obj){return obj.Timezone});
};


CCC.COUNTRYINFO.getCountryDisplayNames = function(){
    var countryDisplayNamesArrayToReturn = [];
    for(var countryCode in CCC.COUNTRYINFO.data){
        countryDisplayNamesArrayToReturn.push(CCC.COUNTRYINFO.data[countryCode].DisplayName);
    }
    return countryDisplayNamesArrayToReturn.sort();
};

export { CCC };