export let timer = () => {
    let sec = 0
    let min = 0
    setInterval(() => {
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
        $("#timer-container").text(minString + ":" + secString)
    }, 1000);
}