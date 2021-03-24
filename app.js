const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        // For Computer's Option
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    
                // Call the Compare Hand Function To see the Winner
                compareHands(this.textContent, computerChoice);
               
                // Update Images Based On Player Choice
                playerHand.src = `assets/${this.textContent}.png`;
                computerHand.src = `assets/${computerChoice}.png`;
                },2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        }); 
    }

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        // Update Text of Winner
        const winner = document.querySelector(".winner");

        // Checking For A Tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a Tie !";
            return;
        }

        // Checking For Rock By Player
        if (playerChoice === "rock") {
            if(computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        // Checking For Paper By Player
        if (playerChoice === "paper") {
            if(computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

        // Checking For scissors By Player
        if (playerChoice === "scissors") {
            if(computerChoice === "rock") {
                winner.textContent = " Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = " Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
};
game();
