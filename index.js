// code your solution here
function saturdayFun(toDo = 'roller-skate') {
    return `This Saturday, I want to ${toDo}!`
}

function mondayWork(toDo = 'go to the office') {
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(symbol) {
    return function(adj = 'special') {
        return `You are ${symbol}${adj}${symbol}!`;
    }
}
