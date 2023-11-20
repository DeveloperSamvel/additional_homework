/*
    Algorithm findAllNumbersWithEvenDigits
Ստանալ 2 թիվ
վերածել, թվերը նվազագույնի, առավելագույնի
ստուգել այդ թվերից նվազագույնը արդյոք զույգ է

եթե ոչ
    անցնել հաջորդ թվին
հակառակ դեպքում
    ոչինչ չանել
ստուգել այդ թվի բոլոր թվանշանները զույգ են, թե ոչ
եթե ոչ
    անցնել հաջորդ թվանծանին, մինչ կգտնվի համապատասխանը
գտնվելու պարագայում
    ավելացնել զանգվածի մեջ

կրկնել այս ցիկլը այնքան ժամանակ, միչ նվազագույնը փոքր է, առավելագույնից

վերադարձնել զանգված
*/

/*
    Algorithm arrayToNumberSequence

ստանալ զանգված
եթե զանգվածը դատարկ է
    վերադարձնել 'Such numbers does not exist' արտահայտությունը
հակառակ դեպքում
    զանգվածի տառը ստուգել վերջինն է, թե ոչ
        եթե ոչ տպել այդ տառը վերջում ավելացնելով ստորակետ և բացատ
        հակառակ պարագայում տպել տառը և դուրս գալ ցիկլից

վերադարձնել թվային հաջորդականություն
*/

/*
    Algorithm checkAllDigitsNumberEven

ստանալ թիվ
թիվը բաժանել 10 - i և վերցնել մնացորդը
այդ մնացորդը ստուգել բաժանվում է 2 - i առանց մնացորդի
եթե ոչ
    վերադարձնել false
հակառակ դեպքում
    թվից հանել մնացորդը և բաժանել 10 - i 

կրկնել այս ցիկլը այնքան ժամանակ, մինչ թիվը մեծ է 0 - ից

եթե ցիկլից դուրս եկավ վերադարձրու true
*/

function checkAllDigitsNumberEven(number) {
    while(number > 0) {
        let remainder = number % 10;
        if(remainder % 2 !== 0) {
            return false;
        }

        number = (number - remainder) / 10;
    }

    return true;
}

function findAllNumbersWithEvenDigits(number1, number2) {
    const arr = [];
    if (number1 > number2) {
        [number1, number2] = [number2, number1];
    }

    while(number1 <= number2) {
        if(number1 % 2 !== 0) {
            number1++;
        }

        if(checkAllDigitsNumberEven(number1)) {
            arr.push(number1);
        }

        number1 += 2;
    }

    return arrayToNumberSequence(arr);
}

function arrayToNumberSequence(arr) {
    let numberSequence = "";
    if(arr.length) {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if(i !== arr.length - 1) {
                numberSequence += item.toString() + ", ";
            }
            else {
                numberSequence += item.toString();
            }
        }

        return numberSequence;
    }

    return 'Such numbers does not exist';
}

let res = findAllNumbersWithEvenDigits(19, 42);
// let res = findAllNumbersWithEvenDigits(99, 199);
console.log(res);