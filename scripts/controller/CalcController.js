class CalcController {

    constructor() {
        this._operation = [];
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
        events.split(" ").forEach(e => {
            element.addEventListener(e, fn, false);
        })
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    addNumberIntoOperation(value) {
        if (!isNaN(value)) {
            this._operation.push(value);
        }
    }

    execButton(buttonValue) {

        switch (buttonValue) {
            case "ac":
                this.clearAll();
                break

            case "ce":
                this.clearEntry(this._operation);
                break

            case "porcento":
                console.log("Porcentagem")
                break

            case "divisao":
                console.log("dividir")
                break

            case "multiplicacao":
                console.log("multiplicar")
                break

            case "subtracao":
                console.log("subtrair")
                break

            case "soma":
                console.log("Somar")
                break

            case "igual":
                console.log("Resultado")
                break

            default:

                this.addNumberIntoOperation(parseInt(buttonValue))
                console.log(this._operation)

        }
    }


    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((button) => {
            this.addEventListenerAll(button, "click drag", () => {

                this.execButton(button.classList.value.replace("btn-", ""));
            })

            this.addEventListenerAll(button, "mouseover mouseup mousedown", e => {
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