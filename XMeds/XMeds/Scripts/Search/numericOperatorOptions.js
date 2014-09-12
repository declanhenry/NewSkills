(function (ns) {

    ns.NumericOperatorOptions = function () {

    };

    ns.NumericOperatorOptions.prototype = function () {
        return {
            equals: "equals",
            doesNotEqual: "does not equal",
            isGreaterThan: "is greater than",
            isLessThan: "is less than",
            isBetween: "is between",
            isNotBetween: "is not between",
            exists: "exists",
            doesNotExist: "does not exist"
        };
    }();

}(window.Search = window.Search || {}));