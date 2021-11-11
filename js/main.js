let rawAnnual = document.getElementsByClassName('input-number')[0];
let netAnnual = document.getElementsByClassName('input-number')[1];
let rawMonthly = document.getElementsByClassName('input-number')[2];
let netMonthly = document.getElementsByClassName('input-number')[3];
let rawDaily = document.getElementsByClassName('input-number')[4];
let netDaily = document.getElementsByClassName('input-number')[5];
let rawSchedule = document.getElementsByClassName('input-number')[6];
let netSchedule = document.getElementsByClassName('input-number')[7];

window.onload = smic;

// 1.589,47 euros, soit 1.258 euros net,
btnSmic.addEventListener('click', smic)

    // Si le focus est sur l'input brut annuel (rawAnnual)
    if (rawAnnual.addEventListener('focus', function() {
        rawAnnual.addEventListener('keyup', () => {
                rawAnnual.value;
                rawMonthly.value = annualToMonthly(rawAnnual.value);
                rawDaily.value = monthToDay(rawMonthly.value);
                rawSchedule.value = dayToHour(rawDaily.value);

                netAnnual.value = grossInNet(rawAnnual.value, tauxMultiply);            
                netMonthly.value = annualToMonthly(netAnnual.value);            
                netDaily.value = monthToDay(netMonthly.value);
                netSchedule.value = dayToHour(netDaily.value);
        });
    } ));

    if (rawMonthly.addEventListener('focus', function() {
            rawMonthly.addEventListener('keyup', () => {
                rawMonthly.value;
                rawAnnual.value = monthlyToAnnual(rawMonthly.value);
                rawDaily.value = monthToDay(rawMonthly.value);
                rawSchedule.value = dayToHour(rawDaily.value);

                netMonthly.value = grossInNet(rawMonthly.value, tauxMultiply);
                netAnnual.value = monthlyToAnnual(netMonthly.value);
                netDaily.value = monthToDay(netMonthly.value);
                netSchedule.value = dayToHour(netDaily.value);
            });
        }
    ));

    if (rawSchedule.addEventListener('focus', function() {
            rawSchedule.addEventListener('keyup', () => {
                rawSchedule.value;
                rawDaily.value = hourToDay(rawSchedule.value);
                rawMonthly.value = dayToMonth(rawDaily.value);
                rawAnnual.value = monthlyToAnnual(rawMonthly.value);

                netSchedule.value = grossInNet(rawSchedule.value,tauxMultiply);
                netDaily.value = hourToDay(netSchedule.value);
                netMonthly.value = dayToMonth(netDaily.value);
                netAnnual.value = monthlyToAnnual(netMonthly.value);
            });
        }
    ));

    if (rawDaily.addEventListener('focus', function() {
            rawDaily.addEventListener('keyup', () => {
                rawDaily.value;
                rawMonthly.value = dayToMonth(rawDaily.value);
                rawAnnual.value = monthlyToAnnual(rawMonthly.value);
                rawSchedule.value = dayToHour(rawDaily.value);

                netDaily.value = grossInNet(rawDaily.value, tauxMultiply);
                netMonthly.value = dayToMonth(netDaily.value);
                netAnnual.value = monthlyToAnnual(netMonthly.value);
                netSchedule.value = dayToHour(netDaily.value);
            });
        }
    ));

    if (netAnnual.addEventListener('focus', function() {
            netAnnual.addEventListener('keyup', () => {
                netAnnual.value;
                netMonthly.value = annualToMonthly(netAnnual.value);            
                netDaily.value = monthToDay(netMonthly.value);
                netSchedule.value = dayToHour(netDaily.value);

                rawAnnual.value = netInGross(netAnnual.value, tauxDivide);
                rawMonthly.value = annualToMonthly(rawAnnual.value);
                rawDaily.value = monthToDay(rawMonthly.value);
                rawSchedule.value = dayToHour(rawDaily.value);
            });
        } 
    ));
    
    if (netMonthly.addEventListener('focus', function() {
        netMonthly.addEventListener('keyup', () => {
            netMonthly.value;
            netAnnual.value = monthlyToAnnual(netMonthly.value);
            netDaily.value = monthToDay(netMonthly.value);
            netSchedule.value = dayToHour(netDaily.value);

            rawMonthly.value = netInGross(netMonthly.value, tauxDivide);
            rawAnnual.value = monthlyToAnnual(rawMonthly.value);
            rawDaily.value = monthToDay(rawMonthly.value);
            rawSchedule.value = dayToHour(rawDaily.value);
        });
    }
    ));

    if (netDaily.addEventListener('focus', function() {
            netDaily.addEventListener('keyup', () => {
                netDaily.value;
                netMonthly.value = dayToMonth(netDaily.value);
                netAnnual.value = monthlyToAnnual(netMonthly.value);
                netSchedule.value = dayToHour(netDaily.value);

                rawDaily.value = netInGross(netDaily.value, tauxDivide);
                rawMonthly.value = dayToMonth(rawDaily.value);
                rawAnnual.value = monthlyToAnnual(rawMonthly.value);
                rawSchedule.value = dayToHour(rawDaily.value);
            });
        }
    ));

    if (netSchedule.addEventListener('focus', function() {
            netSchedule.addEventListener('keyup', () => {
                netSchedule.value;
                netDaily.value = hourToDay(netSchedule.value);
                netMonthly.value = dayToMonth(netDaily.value);
                netAnnual.value = monthlyToAnnual(netMonthly.value);

                rawSchedule.value = netInGross(netSchedule.value, tauxDivide);
                rawDaily.value = hourToDay(rawSchedule.value);
                rawMonthly.value = dayToMonth(rawDaily.value);
                rawAnnual.value = monthlyToAnnual(rawMonthly.value);
            });
        }
    ));




