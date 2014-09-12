(function (ns) {

    ns.NumericDateOperatorState = function (operatorCriteria) {
        this.operatorCriteria = operatorCriteria;

        this.operatorOptions = new Search.DateOperatorOptions();

        this.value1 = null;
        this.needsTwoUnits = false;
    };

    ns.NumericDateOperatorState.prototype = new Search.OperatorState();

    ns.NumericDateOperatorState.prototype.validateProperty = function (propertyName) {
        switch (propertyName) {
            case "value1":
                if (this.value1 == null) {
                    return { message: "A value is required", result: false };
                }

                break;
            case "unit1":
                if (this.unit1 == null) {
                    return { message: "A unit is required", result: false };
                }

                break;
            default:
                return { result: true };
        }

        return { result: true };
    };

    ns.NumericDateOperatorState.prototype.changeOperator = function (operator) {
        if (operator == null) {
            return;
        };

        if (operator == Search.operator.isInTheLast ||
            operator == Search.operator.isNotInTheLast) {
            this.operatorCriteria = new Search.NumericDateOperatorState();
            return;
        };

        if (this.operatorCriteria instanceof Search.NumericDateOperatorState &&
            (operator != Search.operator.isInTheLast && operator != Search.operator.isNotInTheLast)) {

            if (this.OperatorCriteria.filterDescriptor.parameter != null) {

                switch (this.OperatorCriteria.filterDescriptor.parameter.typeOfParameter) {
                    case "date":
                        this.OperatorCriteria.operatorState = new Search.DateOperatorState(this.OperatorCriteria);
                        break;
                    case "numeric":
                        this.OperatorCriteria.operatorState = new Search.NumericOperatorState(this.OperatorCriteria);
                        break;
                    default:

                }

            }
            else if (this.OperatorCriteria.filterDescriptor.config != null) {

                switch (this.OperatorCriteria.filterDescriptor.config.typeOfConfig) {
                    case "date":
                        this.OperatorCriteria.operatorState = new Search.DateOperatorState(this.OperatorCriteria);
                        break;
                    case "numeric":
                        this.OperatorCriteria.operatorState = new Search.NumericOperatorState(this.OperatorCriteria);
                        break;
                    default:

                }

            }

        }
    };

}(window.Search = window.Search || {}));