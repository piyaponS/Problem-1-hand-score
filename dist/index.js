"use strict";
function getHandScore(input) {
    let results;
    if (!input.includes("-") && input.includes(" ")) {
        results = input.split(" ");
    }
    else if (!input.includes(" ") && input.includes("-")) {
        results = input.split("-");
    }
    else {
        throw new Error("Invalid input format. The format should be like 'AA BB CC' or 'AA-BB-CC'");
    }
    const score = {
        S: 0,
        C: 0,
        H: 0,
        D: 0,
    };
    const cards = results;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const suit = card.charAt(0);
        const rank = card.slice(1);
        if (rank.includes("J") || rank.includes("Q") || rank.includes("K")) {
            score[suit] += 10;
        }
        else if (rank === "A") {
            score[suit] += 11;
        }
        else {
            score[suit] += parseInt(rank);
        }
        console.log(`Card${i + 1}:`, score);
    }
    let maxScore = 0;
    for (let suit in score) {
        maxScore = Math.max(maxScore, score[suit]);
        console.log(`${suit}:`, score[suit]);
    }
    console.log(`So, the score is ${maxScore} here`);
    return maxScore;
}
getHandScore("S8 S10 CA");
//# sourceMappingURL=index.js.map