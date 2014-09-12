(function (ns) {

    ns.OperatorState = function () {
        this.operator = null;
        this.operatorOptions = new Search.NumericOperatorOptions();

        this.operatorCriteria = null;

        Object.defineProperty(this, "needsTwoValues", {
            get: function () {

                if (this.operatorCriteria.operator == null) {
                    return false;
                }

                if (!this.operatorCriteria.filterDescriptor.needsOperatorCriteriaOptions) {
                    return false;
                }

                if (this.operatorCriteria.operator == Search.operator.isBetween ||
                   this.operatorCriteria.operator == Search.operator.isNotBetween) {
                    return true;
                }

                return false;
            }
        });

        Object.defineProperty(this, "needsValuesAndUnits", {
            get: function () {

                if (this.operatorCriteria.operator == null) {
                    return false;
                }

                if (!this.operatorCriteria.filterDescriptor.needsOperatorCriteriaOptions) {
                    return false;
                }

                if (this.operatorCriteria.operator == Search.operator.exists ||
                   this.operatorCriteria.operator == Search.operator.doesNotExist) {
                    return false;
                }

                return true;
            }
        });
    };

    ns.OperatorState.prototype = function () {

        var changeConfig = function (config) {
            if (config == null)
            {
                return;
            }

            switch (config.typeOfConfig) {
                case "numeric":
                    this.operatorCriteria.operatorState = new Search.NumericOperatorState(this.operatorCriteria);
                    break;
                default:
                    this.operatorCriteria.operatorState = new Search.DateOperatorState(this.operatorCriteria);
                    break;
            }
        };

        var changeParameter = function (parameter) {
            if (parameter == null)
            {
                return;
            }

            switch (parameter.typeOfParameter) {
                case "numeric":
                    this.operatorCriteria.operatorState = new Search.NumericOperatorState(this.operatorCriteria);
                    break;
                default:
                    this.operatorCriteria.operatorState = new Search.DateOperatorState(this.operatorCriteria);
                    break;
            }
        };

        return {
            changeConfig: changeConfig,
            changeParameter: changeParameter
        };
    }();

    ns.OperatorState.prototype.changeOperator = function (operator) { };

}(window.Search = window.Search || {}));