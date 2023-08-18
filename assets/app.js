'use strict';
{
  const StartBtn = document.getElementById("js-startButton")
  const TopHero = document.querySelector(".top-hero")
  const Fight = document.querySelector(".fight")
  
  //スタートボタンを押したら 画面のフェードアウト＆フェードイン実装
  StartBtn.addEventListener("click",function(){
    TopHero.classList.add("fadeout")
    TopHero.style.display = "none";
    Fight.style.display = "block";
    Fight.classList.add("fadein")
  })
  
  const Options = document.querySelectorAll(".options button")
  const Player = document.querySelector(".player-hand")
  const Computer = document.querySelector(".computer-hand")
  const FightTitle = document.querySelector(".fight-title")

  //手をシェイクする関数
  const ShakeHand = () =>{
    Player.style.animation = "shakePlayer 2s ease";
    Computer.style.animation = "shakeComputer 2s ease";
  }
  //animationのリセット
  const resetAnimation = () =>{
    Player.style.animation = ""
    Computer.style.animation = ""
  } 

  //スコア加算の関数
  let playerscore = 0;
  let computerscore = 0;
  const changeScore = () =>{
    let myscore = document.querySelector(".js-player-score")
    let opponentscore = document.querySelector(".js-computer-score")
    myscore.textContent = playerscore ;
    opponentscore.textContent = computerscore;
  }

  //optionsのボタンが押されたときの処理
  Options.forEach(hands => {
    hands.addEventListener("click",function(){
      ShakeHand()
      const kindHands = ["rock","paper","scissors"]
      const HandsIndex = Math.floor(Math.random()*3)
      let PlayerHand = hands.textContent
      let ComputerHand = kindHands[HandsIndex]
      
      //2秒後に画を変化させ、FightTitleのチェンジを行う
      setTimeout(() => {
        BattlePhase()
        resetAnimation()
        Player.src = `./assets/img/${PlayerHand}.png`;
        Computer.src = `./assets/img/${ComputerHand}.png`;
      },2000);

      //勝ったときと負けた時の場合分け
      const BattlePhase = () =>{
        if (PlayerHand===ComputerHand) {
          FightTitle.textContent = "It is a tie"
        }else if (PlayerHand === "rock"){
          if (ComputerHand==="scissors"){
            playerscore++;
            changeScore()
            FightTitle.textContent = "Player Wins";
          }
          else if (ComputerHand==="paper"){
            computerscore++;
            changeScore()
            FightTitle.textContent = "Computer Wins";
          }
        }else if (PlayerHand === "paper"){
          if (ComputerHand==="rock"){
            playerscore++;
            changeScore()
            FightTitle.textContent = "Player Wins";
          }
          else if (ComputerHand==="scissors"){
            computerscore++;
            changeScore()
            FightTitle.textContent = "Computer Wins";
          }
        }else if (PlayerHand === "scissors"){
          if (ComputerHand==="paper"){
            playerscore++;
            changeScore()
            FightTitle.textContent = "Player Wins";
          }
          else if (ComputerHand==="rock"){
            computerscore++;
            changeScore()
            FightTitle.textContent = "Computer Wins";
          }
        }
      }
    });
  })
}