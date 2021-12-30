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
