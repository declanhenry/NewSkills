(function (ns) {

    ns.RunTypeComponentOptions = function () {

    };

    ns.RunTypeComponentOptions.prototype = function () {

        return {
            exists: "exists",
            doesNotExists: "does not exist"
        };
    }();

}(window.Search = window.Search || {}));

(function (ns) {

    ns.ConfigRunTypeComponentOptions = function () {

    };

    ns.ConfigRunTypeComponentOptions.prototype = new ns.RunTypeComponentOptions();

    ns.ConfigRunTypeComponentOptions.prototype.config = "config";

}(window.Search = window.Search || {}));

(function (ns) {

    ns.ParameterRunTypeComponentOptions = function () {

    };

    ns.ParameterRunTypeComponentOptions.prototype = new ns.RunTypeComponentOptions();

    ns.ParameterRunTypeComponentOptions.prototype.parameter = "parameter";

}(window.Search = window.Search || {}));

(function (ns) {

    ns.ParameterOrConfigRunTypeComponentOptions = function () {

    };

    ns.ParameterOrConfigRunTypeComponentOptions.prototype = new ns.RunTypeComponentOptions();

    ns.ParameterOrConfigRunTypeComponentOptions.prototype.config = "config";
    ns.ParameterOrConfigRunTypeComponentOptions.prototype.parameter = "parameter";

}(window.Search = window.Search || {}));