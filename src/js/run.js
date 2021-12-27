import { hideSetup } from "./display"

export let runGame = (game) => {
    hideSetup()
    game.generateGamePlay()
}