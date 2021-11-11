/** Convertie d'année en mois */
function annualToMonthly (year) {
    let month = year / 12;
    return month;
}

/** Convertie de mois en année  */
function monthlyToAnnual (month) {
    let year = month * 12;
    return year;
}

/** Convertie de mois en jour */
function monthToDay (month) {
    let day = month / 30;
    return day;
}

/** Convertie de jour en mois */
function dayToMonth (day) {
    let month = day * 30;
    return month;
}

/** Convertie de jour en heure */
function dayToHour (day) {
    let hour = day / 7;
    return hour;
}

/** Convertie d'heure en jour */
function hourToDay (hour) {
    let day = hour * 7;
    return day;
}

/** Convertie de brut en net */
function grossInNet(value, taux) {
    result = value - (value * taux);
    return result; 
}

/** Convertie de net en brut */
function netInGross (value, taux) {

    result = value / taux;
    return result; 
}

function smic () {
    netAnnual.value = '15096';
    netMonthly.value = '1258';
    netDaily.value = '73.36';
    netSchedule.value = '10.48';

    rawAnnual.value = '19074';
    rawMonthly.value = '1589.47';
    rawDaily.value = '58.03';
    rawSchedule.value = '8.29'
}


function calcul2 (value) {
    result = value * 12;
    return result;  
}