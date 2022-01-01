import { pauseTimer, resumeTimer } from "./utilities"

export let navbar = (game) => {
    $("#menu-btn").on("click", () => {
        $("#mobile-menu-bg").removeClass("hidden")
        $("#mobile-menu").addClass("flex").removeClass("hidden")
        pauseTimer()
    })
    $("#resume-btn").on("click", () => {
        $("#mobile-menu-bg").addClass("hidden")
        $("#mobile-menu").removeClass("flex").addClass("hidden")
        resumeTimer()
    })
    $("#restart-game-mb").on("click", () => {
        $("#mobile-menu-bg").addClass("hidden")
        $("#mobile-menu").removeClass("flex").addClass("hidden")
    })
    $('*[data-button="new-game"]').on("click", () => {
        location.reload();
    })
    $('*[data-button="restart-game"]').on("click", () => {
        sessionStorage.setItem("game", JSON.stringify(game))
        location.reload()
    })
    
}
