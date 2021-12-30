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
        this.iconsFound = []
    }

    generateGamePlay() {
        this.#generateGamePlay(this.grid)
        this.#setupPlayersData()
        this.#play()
    }

    #play() {
        $("#grid-container").on("click", (e) => {
            if(!$(e.target).hasClass("icon-holder")) {
                return
            }
            if(this.iconsFound.includes($(e.target).data("id"))) {
                return
            }
            if(this.first === null && this.second === null) {
                this.first = $(e.target).data("id")
                if(this.theme === "numbers") {
                    $(e.target).children("h4").removeClass("hidden")
                }else{
                    $(e.target).children("img").removeClass("hidden")
                    //$(e.target).append(`<img class="memory-number" src="assets/icons/${this.first}.svg"/>`)
                }
            }else if (this.first != null && this.second === null) {
                this.second = $(e.target).data("id")
                if(this.theme === "numbers") {
                    $(e.target).children("h4").removeClass("hidden")
                }else{
                    $(e.target).children("img").removeClass("hidden")
                    //$(e.target).append(`<img class="memory-number" src="assets/icons/${this.second}.svg"/>`)
                }
                this.#checkMatch()
            }
        })
    }

    #checkMatch() {
        console.log(this.iconsFound);
        this.#updateMoves()
        if(this.first === this.second) {
            this.playersData[this.playersTurn].score += 1
            this.iconsFound.push(this.first)
            this.#whosTurn(true)
        }else{
            setTimeout(() => {
                $(`*[data-id="${this.first}"]`).children("h4, img").addClass("hidden")
                $(`*[data-id="${this.second}"]`).children("h4, img").addClass("hidden")
            }, 500)
            this.#whosTurn()
        }

        setTimeout(() => {
            this.#displayMultiplayerScore()
            this.first = null
            this.second = null
        }, 600)
    }

    #displayMultiplayerScore() {
        if(this.players === 1) {
            return
        }
        this.playersData.forEach(player => {
            $(`#multiplayer-score-${player.playerID}`).text(player.score)
        });
    }

    #whosTurn(playAgain) {
        if(playAgain){
            return
        }
        if((this.playersTurn + 1) == this.playersData.length) {
            this.playersTurn = 0
        }else if(this.players === 1) {
            this.playersTurn = 0
        }else{
            this.playersTurn += 1
        }
        $(".multiplayer-container").removeClass("yourTurn")
        $(`#player-container-${this.playersTurn + 1}`).addClass("yourTurn")
    }

    #setupPlayersData() {
        for(let i = 1; i <= this.players; i++) {
            this.playersData.push({
                playerID: i,
                score: 0,
                move: 0,
            })
        }
    }
    
    #generateGamePlay(gridSize) {
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
            html += `<div class='icon-holder' id="icon-holder-${i + 1}" data-id='${id}'>
                        <h4 class="memory-number hidden">${id}</h4>
                        <img class="memory-number hidden w-[50%]" src="assets/icons/${id}.svg">
                    </div>`
        }
        $("#grid-container").append(html)
        this.#generatePlayerDisplay(this.players)
        if(this.players == 1) timer()
    }

    #generatePlayerDisplay(players) {
        if(players != 1 && players != 2 && players != 3 && players != 4) {
            return 
        }
        let html = ""
        if(players === 1) {
            html = `<div class="w-[25%] bg-[#DFE7EC] py-[17px] px-[24px] sm:flex sm:flex-row justify-between items-center rounded-lg text-center">
                        <span class="sm:block font-bold font-Aktinson font-xl text-[#7191A5]">Time</span>
                        <span class="block font-bold font-Aktinson text-2xl text-[#304859]" id="timer-container"><span id="min-timer">00</span>:<span id="sec-timer">00</span></span>
                    </div>
                    <div class="w-[25%] bg-[#DFE7EC] py-[17px] px-[24px] sm:flex sm:flex-row justify-between items-center rounded-lg text-center">
                        <span class="sm:block font-bold font-Aktinson font-xl text-[#7191A5]">Moves</span>
                        <span class="block font-bold font-Aktinson text-2xl text-[#304859]" id="moves-container">0</span>
                    </div>`
        }else {
            for(let i = 0; i < players; i++) {
                html += `<div id="player-container-${i+1}" class="w-[25%] bg-[#DFE7EC]  py-[17px] px-[24px] sm:flex sm:flex-row justify-between items-center rounded-lg text-center multiplayer-container">
                            <span class="hidden sm:block font-bold font-Aktinson font-xl text-[#7191A5]">Player ${i + 1}</span>
                            <span class="block sm:hidden font-bold font-Aktinson font-xl text-[#7191A5]">P${i+ 1}</span>
                            <span id="multiplayer-score-${i+1}" class="block font-bold font-Aktinson text-2xl text-[#304859]">0</span>
                        </div>`
            }
        }
        $("#players-container").append(html)
        $("#player-container-1").addClass("yourTurn")
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

    #updateMoves(){
        this.playersData[this.playersTurn].move += 1
        $("#moves-container").text(this.playersData[this.playersTurn].move)
    }
}