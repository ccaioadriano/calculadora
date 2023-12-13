class CalcController {

    constructor() {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.updateDisplayDateTime()

        setInterval(() => {
            this.updateDisplayDateTime()
        }, 1000)

    }

    addEventListenerAll(element, events, fn) {
        events.split(" ").forEach(e=>{
            element.addEventListener(e, fn, false);
        })
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((button) => {
            this.addEventListenerAll(button, "click drag", () => {

                console.log(button.classList.value.replace("btn-", ""))
            })

            this.addEventListenerAll(button, "mouseover mouseup mousedown", e=>{
                button.style.cursor = "pointer";
            })
        })
    }


    updateDisplayDateTime() {
        this.displayDate = this.displayDate.toLocaleDateString(this._locale);
        this.displayTime = this.displayDate.toLocaleTimeString(this._locale);
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get displayDate() {
        return new Date();
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

}