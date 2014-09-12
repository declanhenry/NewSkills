(function (ns) {

    ns.ConfigState = function (filterDescriptor) {
        this.filterDescriptor = filterDescriptor;
    };

    ns.ConfigState.prototype = new Search.FilterDescriptorState();

    ns.ConfigState.prototype.runTypeComponentOptions = new Search.ConfigRunTypeComponentOptions();

}(window.Search = window.Search || {}));