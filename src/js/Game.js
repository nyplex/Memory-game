export class Game {
    constructor(theme, players, grid) {
        this.theme = theme 
        this.players = players
        this.grid = grid
    }
    
    generateGrid(gridSize) {

        if(gridSize != 4 && gridSize != 6){
            return
        }

        const grid = gridSize * gridSize
        let html = ""

        $("#grid-container").addClass(`col${gridSize}`)

        for(let i = 0; i < grid; i++){
            html += `<div class='icon-holder' id='${i}'></div>`
        }
        $("#grid-container").append(html)
    }
}

