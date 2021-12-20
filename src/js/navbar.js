export let navbar = () => {
    $("#menu-btn").on("click", () => {
        $("#mobile-menu-bg").removeClass("hidden")
        $("#mobile-menu").addClass("flex").removeClass("hidden")
    })
    $("#resume-btn").on("click", () => {
        $("#mobile-menu-bg").addClass("hidden")
        $("#mobile-menu").removeClass("flex").addClass("hidden")
    })
}


export let run = () => {
    $("#starting-game").toggleClass("hidden")
    $("#start-btn").on("click", () => {
        $("#starting-game").toggleClass("hidden")
    })
}