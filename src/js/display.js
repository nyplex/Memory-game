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
        $("#moves-taken").text(game.playersData[0].move + 1)
    }else{
        $("#time-elapsed-container").remove()
        $("#moves-taken-container").remove()
        $("#final-score-para").text("Game over! Here are the results...")
        let html = `<div class="bg-[#152938] text-white multi-winner-container">
                        <p class="sm:text-xl text-lg">Player 3 (Winner)</p>
                        <h6 class="sm:text-4xl text-2xl">8 Pairs</h6>
                    </div>`
        $(html).insertAfter($("#final-score-para"))
        console.log("hello world");
    }
}

export let hideFinalScore = () => {
    $("#final-modal, #final-bg-modal").addClass("hidden")
}
