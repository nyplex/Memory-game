import { navbar, run } from "./navbar"

navbar()
run()

$("#setup-container").on("click", (e) => {
    if(e.target.localName != "button") {
        return
    }
    const dataObject = $(e.target).data()
    const dataKeys = Object.keys(dataObject)[0]

    switch (dataKeys) {
        case "theme":
            console.log($(e.target).data("theme"));
            break;
        
        case "players":
            console.log($(e.target).data("players"));
            break;
        
        case "grid":
            console.log($(e.target).data("grid"));
            break;
    
        default:
            break;
    }

})