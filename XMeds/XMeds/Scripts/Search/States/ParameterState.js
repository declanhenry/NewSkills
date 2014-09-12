(function (ns) {

    ns.ParameterState = function (filterDescriptor) {
        this.filterDescriptor = filterDescriptor;
    };

    ns.ParameterState.prototype = new Search.FilterDescriptorState();

    ns.ParameterState.prototype.runTypeComponentOptions = new Search.ParameterRunTypeComponentOptions();

}(window.Search = window.Search || {}));