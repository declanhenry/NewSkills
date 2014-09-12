(function (ns) {

    ns.DateOperatorState = function (operatorCriteria) {
        this.operatorCriteria = operatorCriteria;

        this.operatorOptions = new Search.DateOperatorOptions();
        this.unitOptions = new Search.DateUnitOptions();

        this.value1 = null;
        this.value2 = null;
    };

    ns.DateOperatorState.prototype = new Search.OperatorState();

    ns.DateOperatorState.prototype.validateProperty = function (propertyName) {
        switch (propertyName) {
            case "value1":
                if (this.value1 == null) {
                    return { message: "Value 1 is required", result: false };
                }

                if (this.operatorCriteria.needsTwoValues && this.value2 != null) {
                    if (this.value1 > this.value2) {
                        return { message: "Value 2 must be less thann Value 1", result: false };
                    }
                }

                break;
            case "value2":
                if (!this.operatorCriteria.needsTwoValues) {
                    return { result: true };
                }

                if (this.value2 == null) {
                    return { message: "Value 2 is required", result: false };
                }

                break;
            case "unit1":
                if (this.unit1 == null) {
                    return { message: "Unit 1 is required", result: false };
                }

                break;
            case "unit2":
                if (!this.operatorCriteria.needsTwoValues) {
                    return { result: true };
                }

                if (this.unit2 == null) {
                    return { message: "Unit 2 is required", result: false };
                }

                break;
            default:
                return { result: true };
        }

        return { result: true };
    };

    ns.DateOperatorState.prototype.changeOperator = function (operator) {
        this.unitOptions = new Search.DateUnitOptions();

        if (operator == null) {
            return;
        };

        //this.operatorCriteria.operatorState.operator = Search.operator.exists;
        //return;

        if (this.operatorCriteria.operatorState.operator == Search.operator.isInTheLast ||
            this.operatorCriteria.operatorState.operator == Search.operator.isNotInTheLast) {
            this.operatorCriteria = new Search.NumericDateOperatorState(this.operatorCriteria);
        };
    };

}(window.Search = window.Search || {}));