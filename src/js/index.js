import { navbar } from "./navbar"
import { displaySetup, hideSetup, setupInteraction } from "./display"
import { Game } from "./Game"


const game = new Game("numbers", 1, 4)

navbar()
displaySetup()
setupInteraction(game)


$("#start-game-btn").on("click", () => {
    hideSetup()
    game.generateGamePlay()
})