(function (ns) {

    ns.FilterDescriptor = function () {
        this.filterDescriptors = [];
        this.state = new Search.ParameterState(this);
        this.operatorCriteria = new Search.OperatorCriteria(this);
        this.sector = null;
        this.function = null;
        var _runType = null;
        var _runTypeComponent = null;
        var _parameter = null;
        var _config = null;

        var changeParameter = function (parameter) {
            this.operatorCriteria.operatorState.changeParameter(parameter);
        };

        var changeConfig = function (config) {
            this.operatorCriteria.operatorState.changeConfig(config);
        };

        var changeRunType = function (runType) {
            switch (runType) {
                case "config":
                    this.state = new Search.ConfigState(this);
                    break;
                case "parameter":
                    this.state = new Search.ParameterState(this);
                    break;
                case "parameterOrConfig":
                    this.state = new Search.ParameterOrConfigState(this);
                    break;
                default:
                    this.state = new Search.ConfigState(this);
                    break;
            }

            this.parameter = null;
            this.config = null;
            this.sector = null;
            this.function = null;
            this.operatorCriteria.operator = null;
        };

        var changeRunTypeComponent = function (runTypeComponent) {
            if (runTypeComponent != null && (runTypeComponent == Search.runTypeComponent.exists || runTypeComponent == Search.runTypeComponent.doesNotExist)) {
                this.parameter = null;
                this.config = null;
                this.sector = null;
                this.function = null;
                this.operatorCriteria.operator = null;
            }
        };

        Object.defineProperty(this, "runType", {
            get: function () { return _runType },
            set: function (value) {
                _runType = value;
                changeRunType.call(this, _runType);
            }
        })

        Object.defineProperty(this, "runTypeComponent", {
            get: function () { return _runTypeComponent },
            set: function (value) {
                _runTypeComponent = value;
                changeRunTypeComponent.call(this, _runTypeComponent);
            }
        })

        Object.defineProperty(this, "parameter", {
            get: function () { return _parameter },
            set: function (value) {
                _parameter = value;
                changeParameter.call(this, _parameter);
            }
        })

        Object.defineProperty(this, "config", {
            get: function () { return _config },
            set: function (value) {
                _config = value;
                changeConfig.call(this, _config);
            }
        })

        Object.defineProperty(this, "needsRunComponentOptions", {
            get: function () { return !(this.runType == null); }
        })

        Object.defineProperty(this, "needsParameterSearchOptions", {
            get: function () { return this.state.needsParameterSearchOptions; }
        })

        Object.defineProperty(this, "needsConfigSearchOptions", {
            get: function () { return this.state.needsConfigSearchOptions; }
        })

        Object.defineProperty(this, "needsOperatorCriteriaOptions", {
            get: function () { return this.state.needsOperatorCriteriaOptions; }
        })
    };

    ns.FilterDescriptor.prototype = function () {

        var hasChildren = function () {
            return (this.filterDescriptors.length > 0);
        }; 

        return {
            hasChildren: hasChildren
        };
    }();

}(window.Search = window.Search || {}));