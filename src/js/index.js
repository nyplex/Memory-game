$("#menu-btn").on("click", () => {
    $("#mobile-menu-bg").removeClass("hidden")
    $("#mobile-menu").addClass("flex").removeClass("hidden")
})

$("#resume-btn").on("click", () => {
    $("#mobile-menu-bg").addClass("hidden")
    $("#mobile-menu").removeClass("flex").addClass("hidden")
})