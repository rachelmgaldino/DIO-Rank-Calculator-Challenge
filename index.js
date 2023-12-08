// Function to calculate the score based on wins and losses
function calculateScore(wins, losses = 0) {
  return wins - losses;
}

// Function to calculate the level based on the score
function calculateLevel(score) {
  let level;

  switch (true) {
    case (score < 10):
      level = 'Iron';
      break;
    case (score >= 11 && score <= 20):
      level = 'Bronze';
      break;
    case (score >= 21 && score <= 50):
      level = 'Silver';
      break;
    case (score >= 51 && score <= 80):
      level = 'Gold';
      break;
    case (score >= 81 && score <= 90):
      level = 'Diamond';
      break;
    case (score >= 91 && score <= 100):
      level = 'Legendary';
      break;
    case (score >= 101):
      level = 'Immortal';
      break;
  }

  return level;
}

const heroScore = calculateScore(78, 10);
const heroLevel = calculateLevel(heroScore);

console.log(`The hero has a score of ${heroScore} and is at the level ${heroLevel}.`);
