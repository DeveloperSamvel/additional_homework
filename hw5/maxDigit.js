/*
    Ալգորիթմ getMaxDigit

Ստանալ թիվ
Վերցնել թվի վերջին թվանշանը;
վերջին թվանշանը համեմատել ամենամեծ թվանշանի հետ
ստացած թվից հանել վերջին թվանշանը և բաժանել 10

գործողությունները կրկնել այնքան մինչ դեռ թիվը չի դառել 0;
վերադարձնել ամենամեծ թվանշանը
*/

/*
    Ալգորիթմ getLastDigit

Ստանալ թիվ
բաժանել 10 և վերցնել մնացորդը
վերադարձնել վերջին թվանշանը
*/


/*
    Ալգորիթմ getMaxNumber

Ստանալ 2 թիվ
եթե վերջին թվանշանը մեծ է ամենամեծ թվանշանից վերադարձնել վերջին թվանշանը
հակառակ դեպքում վերադարձնել ամենամեծ թվանշանը
*/



const getLastDigit = (number) => number % 10;

function getMaxNumber(lastDigit, maxDigit) {
    if(lastDigit > maxDigit) {
        return lastDigit;
    }

    return maxDigit;
}

function getMaxDigit(number) {
    let maxDigit = 0;
    while(number) {
        let lastDigit = getLastDigit(number);
        maxDigit = getMaxNumber(lastDigit, maxDigit);
        number = (number - lastDigit) / 10;
    }
    return maxDigit;
}

const res = getMaxDigit(84129746);
console.log(res)