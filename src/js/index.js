import { navbar } from "./navbar"
import { displaySetup } from "./display"
import { Game } from "./Game"
import { runGame } from "./run"


const game = new Game("numbers", 1, 4)

navbar()
displaySetup()



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

$("#start-game-btn").on("click", () => {
    runGame(game)
})