function getHandScore(input: string): void {
  let results: string[];

  if (!input.includes("-") && input.includes(" ")) {
    results = input.split(" ");
  } else if (!input.includes(" ") && input.includes("-")) {
    results = input.split("-");
  } else {
    throw new Error(
      "Invalid input format. The format should be like 'AA BB CC' or 'AA-BB-CC'"
    );
  }

  type Scores = { [suit: string]: number };
  const score: Scores = {
    S: 0,
    C: 0,
    H: 0,
    D: 0,
  };
  const cards = results;
  console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const suit = card.charAt(0);
    const rank = card.slice(1);

    if (rank.includes("J") || rank.includes("Q") || rank.includes("K")) {
      score[suit] += 10;
    } else if (rank === "A") {
      score[suit] += 11;
    } else {
      score[suit] += parseInt(rank);
    }
    console.log(score);
  }
}

getHandScore("SA-S2-S10");
