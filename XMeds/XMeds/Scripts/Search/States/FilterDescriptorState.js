(function (ns) {

    ns.FilterDescriptorState = function () {
        this.filterDescriptor = null;
        this.runTypeComponentOptions = null;

        Object.defineProperty(this, "needsParameterSearchOptions", {
            get: function () {
                if (this.filterDescriptor.runTypeComponent == null)
                    return false;

                return (this.filterDescriptor.runTypeComponent == Search.runTypeComponent.parameter);
            }
        })

        Object.defineProperty(this, "needsConfigSearchOptions", {
            get: function () {
                if (this.filterDescriptor.runTypeComponent == null)
                    return false;

                return (this.filterDescriptor.runTypeComponent == Search.runTypeComponent.config);
            }
        })

        Object.defineProperty(this, "needsOperatorCriteriaOptions", {
            get: function () {
                if (this.filterDescriptor.runTypeComponent == null)
                    return false;

                if (this.filterDescriptor.runTypeComponent == Search.runTypeComponent.config) {
                    return (this.filterDescriptor.config != null);
                }

                if (this.filterDescriptor.runTypeComponent == Search.runTypeComponent.parameter) {
                    return (this.filterDescriptor.parameter != null);
                }


                return false;
            }
        })
    };

    ns.FilterDescriptorState.prototype = function () {
        
        var changeRunType = function (runType) {

        };

        return {
            filterDescriptor: this.filterDescriptor,
            runTypeComponentOptions: this.runTypeComponentOptions,
            changeRunType: changeRunType
        };
    }();

}(window.Search = window.Search || {}));