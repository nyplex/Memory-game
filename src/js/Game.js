import { ListenIconClick, timer } from "./utilities"

export class Game {
    constructor(theme, players, grid) {
        this.theme = theme 
        this.players = players
        this.grid = grid
        this.ids = null
        this.first = null
        this.second = null
        this.playersData = []
        this.playersTurn = 0
    }

    generateGamePlay(){
        this.#generateGrid(this.grid)
        this.#generatePlayerDisplay(this.players)
        this.#setupPlayersData()
        if(this.players == 1) timer()
        
    }

    #setupPlayersData(){
        for(let i = 1; i <= this.players; i++) {
            this.playersData.push({
                playerID: i,
                score: 0,
                move: 0,
            })
        }
    }
    
    #generateGrid(gridSize) {
        this.#generateIds()
        if(gridSize != 4 && gridSize != 6){
            return
        }

        const grid = gridSize * gridSize
        let html = ""

        $("#grid-container").addClass(`col${gridSize}`)

        for(let i = 0; i < grid; i++){
            let index = Math.floor(Math.random()*this.ids.length)
            let id = this.ids[index];
            this.ids.splice(index, 1)
            html += `<div class='icon-holder' data-id='${id}'></div>`
        }
        $("#grid-container").append(html)
    }

    #generatePlayerDisplay(players) {
        if(players != 1 && players != 2 && players != 3 && players != 4) {
            return 
        }
        let html = ""
        if(players === 1) {
            html = `<div class="w-[25%] bg-[#DFE7EC] py-[17px] px-[24px] sm:flex sm:flex-row justify-between items-center rounded-lg text-center">
                        <span class="sm:block font-bold font-Aktinson font-xl text-[#7191A5]">Time</span>
                        <span class="block font-bold font-Aktinson text-2xl text-[#304859]" id="timer-container">00:00</span>
                    </div>
                    <div class="w-[25%] bg-[#DFE7EC] py-[17px] px-[24px] sm:flex sm:flex-row justify-between items-center rounded-lg text-center">
                        <span class="sm:block font-bold font-Aktinson font-xl text-[#7191A5]">Moves</span>
                        <span class="block font-bold font-Aktinson text-2xl text-[#304859]">39</span>
                    </div>`
        }else {
            for(let i = 0; i < players; i++) {
                html += `<div id="player-container-${i+1}" class="w-[25%] bg-[#DFE7EC]  py-[17px] px-[24px] sm:flex sm:flex-row justify-between items-center rounded-lg text-center multiplayer-container">
                            <span class="hidden sm:block font-bold font-Aktinson font-xl text-[#7191A5]">Player ${i + 1}</span>
                            <span class="block sm:hidden font-bold font-Aktinson font-xl text-[#7191A5]">P${i+ 1}</span>
                            <span class="block font-bold font-Aktinson text-2xl text-[#304859]">4</span>
                        </div>`
            }
        }
        $("#players-container").append(html)
    }

    #generateIds() {
        let ids = []
        let grid = (this.grid * this.grid) / 2
        for(let i = 0; i < grid; i++) {
            ids.push(i + 1)
            ids.push(i + 1)
        }
        this.ids = ids
    }
}