class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._currentDate;
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