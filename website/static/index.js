// Set Focus Day ----
let focusDay = new Date(); // defaults to today
    // use get/set Date, Month, FullYear methods

const calendar = document.querySelector("#app-calendar");
calendar.insertAdjacentHTML("beforeend", `<div id="render-zone"></div>`);
const renderZone = document.querySelector("#render-zone");
const monthName = document.querySelector('#month-name');

const isWeekend = day => {
    return (day%7===6||day%7===0);
}



function Calendar() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    Object.defineProperty(this, 'render', {
        get: function() {
            this.derender;
            // set render day to focus day
            renderDay.setDate(focusDay.getDate());
            renderDay.setMonth(focusDay.getMonth());
            renderDay.setFullYear(focusDay.getFullYear());

            monthName.textContent = `${months[focusDay.getMonth()]} ${focusDay.getFullYear()}`;

            // Insert Blanks before starting day
            renderDay.setDate(1);
            let gaps = (renderDay.getDay()-1+7)%7;
            // console.log(`gaps = ${gaps}`);
            // console.log(`renderDay = ${renderDay}`);
            // console.log(`focusDay = ${focusDay}`);
            while (gaps>0) {
                renderZone.insertAdjacentHTML("beforeend", `
                <div id="X${gaps}" class="day">
                    <div class="name"></div>
                    
                </div>
                `);
                gaps--;
            }
            // reset gaps for later use
            gaps = (renderDay.getDay()-1+7)%7;
            console.log(gaps);

    

            for (renderDay.setDate(1); renderDay.getMonth() == focusDay.getMonth(); renderDay.setDate(renderDay.getDate()+1)) {
                let date = renderDay.getDate();
                let day = renderDay.getDay();
                const weekend = isWeekend(day);
                renderZone.insertAdjacentHTML("beforeend", `
                <div id="${date}" class="day ${weekend ? "weekend": ""}">
                    <div class="name">
                        ${date<=7 ? weekday[day] : ""}
                    </div>
                    ${date}
                </div>
                `);
                // console.log(day);
            }
            renderDay.setDate(renderDay.getDate()-1); // Set to last day of month rendered

            // Resize calendar rows
            const rowNum = Math.ceil((gaps + renderDay.getDate())/7);
            console.log(rowNum);
            renderZone.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`;


            return console.log("Rendered Calendar");
        }
    })

    Object.defineProperty(this, 'derender', {
        get: function() {
            renderZone.textContent = '';
        }
    })
}

function prev() {
    focusDay.setMonth(focusDay.getMonth()-1);
    cal.render;
}

function next() {
    focusDay.setMonth(focusDay.getMonth()+1);
    cal.render;
}

function Controller() {

}

let renderDay = new Date();

const cal = new Calendar;
cal.render;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
prevButton.addEventListener('click',prev);
nextButton.addEventListener('click',next);
