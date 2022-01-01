import { navbar } from "./navbar"
import { displaySetup, hideSetup, setupInteraction } from "./display"
import { Game } from "./Game"




//sessionStorage.clear()



if(sessionStorage.getItem("game")) {
    let value = JSON.parse(sessionStorage.getItem("game"))
    let game = new Game(value.theme, value.players, value.grid)
    hideSetup()
    game.generateGamePlay()
    sessionStorage.clear()
    navbar(game)
}else{
    let game = new Game("numbers", 1, 4)
    displaySetup()
    setupInteraction(game)
    $("#start-game-btn").on("click", () => {
        hideSetup()
        game.generateGamePlay()
    })
    navbar(game)
}







