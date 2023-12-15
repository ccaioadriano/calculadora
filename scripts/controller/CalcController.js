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

    getLastElement(list) {
        return list[list.length - 1];
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }


    setError(){
        this.displayCalc = "Error";
    }

    execButton(buttonValue) {

        switch (buttonValue) {
            case "ac":
                this.clearAll();
                break;

            case "ce":
                this.clearEntry(this._operation);
                break;

            case "porcento":
                this.addOperation("%");
                break;

            case "divisao":
                this.addOperation("/");
 
                break;

            case "multiplicacao":
                this.addOperation("*");
     
                break;

            case "subtracao":
                this.addOperation("-");
  
                break;

            case "soma":
                this.addOperation("+");

                break;

            case "igual":
                
                break;

            case "ponto":
                this.addOperation(".");
            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(buttonValue));
                break;
            default:
                this.setError();
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