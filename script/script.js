
const btn = document.querySelector("button")
const span = document.querySelector("button span")
const arr = JSON.parse(localStorage.getItem("mode") || "[]")

const createClock = () => {
    const time = new Date()
            
            const second = time.getSeconds()
            const minute = time.getMinutes()
            const hour = time.getHours()
                console.log(hour);
            const clock = document.querySelector(".clock")
                clockWidth = clock.getBoundingClientRect().width

            const numberEls = document.querySelectorAll(".numbersContainer li")
                numberEls.forEach((numberEl,i) =>{
                    numberEl.style = `transform: translateX(${(clockWidth / 2) - (clockWidth / 12) }px); rotate: ${(i-3) * 30}deg;`
                })
            
            const hourPipe = document.querySelector(".hourPipe")
            hourPipe.style = `width: ${clockWidth / 4}px; height: ${clockWidth / 60}px; transform:rotate(${((hour * 30)-90)}deg)`
                    console.log(hourPipe.style);
            const minutePipe = document.querySelector(".minutePipe")
                minutePipe.style = `width: ${clockWidth / 3}px; height: ${clockWidth / 80}px; transform:rotate(${((minute * 6)-90)}deg)`
            
            const secondPipe = document.querySelector(".secondPipe")
                secondPipe.style = `width: ${clockWidth / 2.7}px; height: ${clockWidth / 100}px; transform:rotate(${((second * 6)-90)}deg)`

            const circle = document.querySelector(".circle") 
                circle.style = `width: ${clockWidth / 20}px;`
}

const adjustMode = () => {

    if(btn.innerText.toLowerCase() === "night mode") {
        document.body.classList.add("night")
        span.innerText = "Day Mode"
        arr.push("night")
        localStorage.setItem("mode",JSON.stringify(arr))
    }
    else {
        document.body.classList.remove("night")
        span.innerText = "Night Mode"
        arr.length = 0
        localStorage.setItem("mode",JSON.stringify(arr))
    }
}

    window.addEventListener("DOMContentLoaded",()=>{
        createClock()
        document.body.className = arr.length == 1 ? "night" : "";
        span.innerHTML = arr.length == 1 ? "Day Mode" : "Night Mode"
        setInterval(() => {
            createClock()
        }, 1000);
            
    })

    window.addEventListener("resize",()=>{
        
        setInterval(() => {
            createClock()
        }, 1000);
            
    })

    btn.addEventListener("click", adjustMode)



