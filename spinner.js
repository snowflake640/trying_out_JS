console.log("Starting in the name of Allah")

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    water: 2,
    fire : 4,
    air : 6,
    earth : 8
}

const SYMBOL_VALUE = {
    water: 5,
    fire : 4,
    air : 3,
    earth : 2
}

// Getting the initiating balance of c@@kiesss!
const deposit = () => {
    while (true){
        const depositeAmount = prompt("Enter the amount of cookies you wanna deposit: ")
        const depositAmountNum = parseFloat(depositeAmount)
        if (isNaN(depositAmountNum) || depositAmountNum <= 0) {
        console.log("Invalid deposit amount, try again >.<")
        }
        else {
        return depositAmountNum; 
        }
    }
};


// Getting the number of lines you want to play~
const getNOL = () => {
    while (true){
        const NOL = prompt("=> Enter number of lines you want to bet on: ")
        const lineNumber = parseFloat(NOL)
        if (isNaN(lineNumber) || lineNumber <= 0) {
        console.log("Choose a valid number from 1 to 3")
        }
        else {
        return lineNumber; 
        }
    }
};


// Letsee how much you wanna risk :<
const getBet = (balance, lines ) => {
    while (true) {
        const amountOfBet = prompt("=> Enter your bet amount per line: ")
        const betAmount = parseFloat(amountOfBet)
        if (isNaN(betAmount) || betAmount*lines <= 0 || betAmount*lines > balance) {
        console.log("Not in range, try again!")
        }
        else {
        return betAmount; 
        }
    }
}; 


// Main spinner function
const spin = () => {
    const symbols = [];
    for(const[symbol, count] of Object.entries(SYMBOL_COUNT)){
        for(let i=0; i<count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for(let i=0; i<COLS; i++){
        const reelSymbols = [...symbols]
        for(let j=0; j<ROWS; j++) {
            const rdnindex = Math.floor(Math.random()*reelSymbols.length);
            const selectSym = reelSymbols[rdnindex]
            reels[i].push(selectSym);
            reelSymbols.splice(rdnindex, 1);
        }
    }

    return reels;
};


// Getting the reels in properly orientation by transposing it
const trans = (reels) => {
    const reelsIn = [[], [], []];

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            reelsIn[i].push(reels[j][i]);
        }
        
    }
    return reelsIn;

} ;


// Should see the reels to see if the code is cheating :/
const reel_display = (reelsIn) =>{
    console.log("--------------- REEL SPINNN!!! ---------------")
    for(const rows of reelsIn ){
        let rowstr = "|" ;
        for(const [i, element] of rows.entries()){
            rowstr += "   " + element + "   |"
        }
        console.log(rowstr)
    }
    console.log("---------- ------- ---  --- ------- ----------")
};


// LET SEE how many cookies we wonnn :D! {or lost TT } 
const get_wins = (reelsIn, lines, bet) => {
    let winning = 0;

    for (let row=0; row<lines; row++){
        const symbols = reelsIn[row];
        let allSame = true;
        for (const symbol of symbols){
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if (allSame){
            winning = bet *  SYMBOL_VALUE[symbols[0]]
        }
    }
    return winning;
}


// Keeping the game rolinnn'
const game = () =>{
    let balance = deposit();

    while(true){
        console.log("\n***You have a balance of " + balance + " cookies***");
        const lines = getNOL();
        const bet = getBet(balance, lines);
        balance -= bet*lines;

        const reels = spin();
        const reelsIn = trans(reels);
        const finalreel = reel_display(reelsIn);
        console.log(finalreel);
        const winnings = get_wins(reelsIn, lines, bet);
        balance += winnings
        console.log("  you won " + winnings + " cookies");
        
        if(balance <=0){
            console.log("You ran out of cookies >.< Deposite again to continue.");
            break;
        }

        const playAgain = prompt("\nDo you want to play again? (y/n):  ")
        if(playAgain != "y") break;
    };

}


// Let the game begin.
game();

