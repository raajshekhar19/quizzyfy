let readlineSync =require("readline-sync");
let kuler = require("kuler");
let score = 0;
let userName = readlineSync.question("Enter your name _");
console.log(kuler(`\n hello ${userName} Welcome to the quiz game:`,"#dc2626"))
console.log("\nPlease select only the given options by typing them \n")



//creating the questions...

const database = {
    
    data :[
        {
            question: `let a = {}, b = {}
            console.log(a == b)
            console.log(a === b)`,
            options:{
                a:"false false",
                b:"false true",
                c:"true false",
                d:"true true"
            },
            correctAnswer: "a"
        },
        {
            question: `Object.assign(target,source) creates which type of copy`,
            options:{
                a:"shallow copy",
                b:"deep copy",
                c:"nested copy",
                d:"creates a new ref"   
            },
            correctAnswer: "a"
            
        },
        {
            question: `Is method chaining possible with forEach?`,
            options:{
                a:"true ",
                b:"false "
            },
            correctAnswer: "b"
        },

    ]
}


//creating leaderboard
let leaderboard = {
    data:[
        {
            name:"Himanshu",
            score:"3"
        },
        {
            name:"Anurag",
            score:"3"
        },
    ]
}


//creating the logic 
function playGame(userAnswer, correctAnswer){
    if (userAnswer===correctAnswer) {
        console.log(kuler(`Correct answer!!😊`,"#0596969"))
        score++;
    } else {
        console.log(kuler("Wrong answer!!😒","#b91c1c"))
        console.log(kuler(`The correct answer is ${correctAnswer}`,"#1d4ed8"))
    }

}




//question incoming, answer giving, and reading process

function showQuesttionAndOPtion(database){
    for(let i = 0;i<database.data.length;i++){
        console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
        for(let key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`);

        }
        let userAnswer = readlineSync.question("Enter your answer - ").toLowerCase();
        playGame(userAnswer,database.data[i].correctAnswer)
    }
   
}

function highScorer(leaderboard){
    leaderboard.data.push({name: userName , score: score})
    let sortedScoreList = leaderboard.data.sort((a,b)=>b.score - a.score);
    console.log("\nCheck your position on the leader board\n ")
    for(let leader of sortedScoreList){
        console.log(`${leader.name} -Score- ${leader.score}`)
    }
}


showQuesttionAndOPtion(database);


if(score>=2){
    console.log(kuler(` Wow! ${userName} Your score is ${score}`,"#0ed"))
}
else{
    console.log(kuler(`${userName} Your score is ${score}`,"#0ed"))
}


highScorer(leaderboard);