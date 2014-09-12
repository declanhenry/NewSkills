(function (ns) {

    ns.ParameterOrConfigState = function (filterDescriptor) {
        this.filterDescriptor = filterDescriptor;
    };

    ns.ParameterOrConfigState.prototype = new Search.FilterDescriptorState();

    ns.ParameterOrConfigState.prototype.runTypeComponentOptions = new Search.ParameterOrConfigRunTypeComponentOptions();

}(window.Search = window.Search || {}));