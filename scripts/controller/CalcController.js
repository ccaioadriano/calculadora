class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize() {
        let displayEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayEl.innerHTML = "1111"
        dateEl.innerHTML = "12/12/2023"
        timeEl.innerHTML = "12:00"
    }

    get displayCalc() {
        return this._displayCalc
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get dataAtual() {
        return this.dataAtual
    }

    set dataAtual(value) {
        this._currentDate = value;
    }

}