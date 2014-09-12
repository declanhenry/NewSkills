(function (ns) {

    ns.OperatorCriteria = function (filterDescriptor) {
        this.filterDescriptor = filterDescriptor;
        this.operatorState = new Search.NumericOperatorState(this);

        var _operator = null;

        Object.defineProperty(this, "operatorOptions", {
            get: function () { return this.operatorState.operatorOptions; }
        })

        Object.defineProperty(this, "needsTwoValues", {
            get: function () { return this.operatorState.needsTwoValues; }
        })

        Object.defineProperty(this, "needsValuesAndUnits", {
            get: function () { return this.operatorState.needsValuesAndUnits; }
        })

        Object.defineProperty(this, "needsUnits", {
            get: function () { return this.operatorState.needsUnits; }
        })

        Object.defineProperty(this, "needsTwoUnits", {
            get: function () { return this.operatorState.needsTwoUnits; }
        })

        Object.defineProperty(this, "operator", {
            get: function () { return _operator; },
            set: function (value)
            {
                _operator = value;
                this.operatorState.changeOperator(_operator);
            }
        })
    };

}(window.Search = window.Search || {}));