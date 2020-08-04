import numeral from "numeral";

export class Utils {
    formatNumber(number, decimalPlaces, k){
        let formattedNumber = +number.toFixed(6);
        if(formattedNumber > 10000 && k){
            formattedNumber = numeral(formattedNumber).format("0,0."+"0".repeat(decimalPlaces)+"a");
        } else {
            formattedNumber = numeral(formattedNumber).format("0,0."+"0".repeat(decimalPlaces));
        }
        return formattedNumber;
    }
}