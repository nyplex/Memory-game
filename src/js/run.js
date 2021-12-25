import { hideSetup } from "./display"

export let runGame = (game) => {
    hideSetup()
    game.generateGrid(game.grid)
}