import { pauseTimer } from "./utilities"

export let displaySetup = () => {
    $("#starting-game").removeClass("hidden")
}

export let hideSetup = () => {
    $("#starting-game").addClass("hidden")
}

export let setupInteraction = (game) => {
    $("#setup-container").on("click", (e) => {
        if(e.target.localName != "button") {
            return
        }
        const dataObject = $(e.target).data()
        const dataKeys = Object.keys(dataObject)[0]
    
        switch (dataKeys) {
            case "theme":
                game.theme = $(e.target).data("theme")
                $('*[data-theme]').removeClass("active")
                $(e.target).addClass("active")
                break;
            
            case "players":
                game.players = $(e.target).data("players")
                $('*[data-players]').removeClass("active")
                $(e.target).addClass("active")
                break;
            
            case "grid":
                game.grid = $(e.target).data("grid")
                $('*[data-grid]').removeClass("active")
                $(e.target).addClass("active")
                break;
        
            default:
                break;
        }
    
    })
}

export let displayFinalScore = (game) => {
    $("#final-modal, #final-bg-modal").removeClass("hidden")
    if(game.players === 1) {
        pauseTimer()
        $("#sec-elapsed").text($("#sec-timer").text())
        $("#min-elapsed").text($("#min-timer").text())
        $("#moves-taken").text(game.playersData[0].move)
    }else{
        $("#time-elapsed-container").remove()
        $("#moves-taken-container").remove()
        
        $("#final-score-para").text("Game over! Here are the results...")
        let html = generateScoreContainer(game)
        $("#score-title").text(generateScoreTitle(game))
        $(html).insertAfter($("#final-score-para"))
        
    }
}

let generateScoreTitle = (game) => {
    let count = {};
    let title = ""
    game.playersData.forEach(function(i) { count[i.winner] = (count[i.winner]||0) + 1;});
    if(count.true > 1) {
        title = "It's a tie!"
        return title
    }else{
        for(let i = 0; i < game.playersData.length; i++) {
            if(game.playersData[i].winner === true) {
                title = `Player ${game.playersData[i].playerID} Wins!`
                return title
            }
        }
    }
}

let generateScoreContainer = (game) => {
    let playersData = game.playersData
    playersData.sort(function(a, b){return a.score - b.score});
    playersData.reverse()
    game.getWinners()
    console.log(game.playersData);
    let html = ""
    
    for(let i = 0; i < playersData.length; i++) {
        let bg = "#DFE7EC"
        let winner = ""
        let playerColor = "[#7191A5]"
        let pairColor = "[#304859]"
        let pair = "Pairs"
        if(playersData[i].winner === true) {
            bg = "#152938"
            winner = "(Winner)"
            playerColor = "white"
            pairColor = "white"
        }
        if(playersData[i].score <= 1) {
            pair = "Pair"
        }
        html += `<div class="bg-[${bg}] multi-winner-container">
                    <p class="sm:text-xl text-lg text-${playerColor}">Player ${playersData[i].playerID} ${winner}</p>
                    <h6 class="sm:text-4xl text-2xl text-${pairColor}">${playersData[i].score} ${pair}</h6>
                </div>`
    }
    return html

    
}

export let hideFinalScore = () => {
    $("#final-modal, #final-bg-modal").addClass("hidden")
}
