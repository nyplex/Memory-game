var interval
export let timer = (s, m) => {
    let sec = (s) ? s : 0
    let min = (m) ? m : 0
    interval = setInterval(() => {
        if(sec >= 59) {
            min += 1
            sec = 0
        } 
        sec += 1
        let minString
        let secString
        if(min < 10) {
            minString = "0" + min.toString()
        }else{
            minString = min.toString()
        }

        if(sec < 10) {
            secString = "0" + sec.toString()
        }else{
            secString = sec.toString()
        }
        $("#min-timer").text(minString)
        $("#sec-timer").text(secString)
    }, 1000);
}

export let pauseTimer = () => {
    clearInterval(interval)
}

export let resetTimer = () => {
    clearInterval(interval)
    $("#sec-timer").text("00")
    $("#min-timer").text("00")
}

export let resumeTimer = () => {
    let sec = parseInt($("#sec-timer").text())
    let min = parseInt($("#min-timer").text())
    timer(sec, min)
}