/// <reference path="c:\users\declan\source\repos\newskills\xmeds\xmeds.tests\scripts\jasmine.js" />
/// <reference path="../../xmeds/scripts/search/dateoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/numericoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/operatorstate.js" />
/// <reference path="../../xmeds/scripts/search/enums/operator.js" />
/// <reference path="../../xmeds/scripts/search/enums/sector.js" />
/// <reference path="../../xmeds/scripts/search/enums/parametertype.js" />
/// <reference path="../../xmeds/scripts/search/enums/function.js" />
/// <reference path="../../xmeds/scripts/search/enums/configtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtypecomponent.js" />
/// <reference path="../../xmeds/scripts/search/dateunitoptions.js" />
/// <reference path="../../xmeds/scripts/search/operatorstate.js" />
/// <reference path="../../xmeds/scripts/search/numericunitoptions.js" />
/// <reference path="../../xmeds/scripts/search/numericoperatorstate.js" />
/// <reference path="../../xmeds/scripts/search/numericdateoperatorstate.js" />
/// <reference path="../../xmeds/scripts/search/dateoperatorstate.js" />
/// <reference path="../../xmeds/scripts/search/runtypecomponentoptions.js" />
/// <reference path="../../xmeds/scripts/search/states/filterdescriptorstate.js" />
/// <reference path="../../xmeds/scripts/search/states/parameterstate.js" />
/// <reference path="../../xmeds/scripts/search/states/configstate.js" />
/// <reference path="../../xmeds/scripts/search/states/parameterorconfigstate.js" />
/// <reference path="../../xmeds/scripts/search/config.js" />
/// <reference path="../../xmeds/scripts/search/operatorcriteria.js" />
/// <reference path="../../xmeds/scripts/search/parameter.js" />
/// <reference path="../../xmeds/scripts/search/filterdescriptor.js" />

describe("A FilterDescriptor", function () {

    describe("when new", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
        });

        it("should have no child filter descriptors", function () {

            expect(filterDescriptor.hasChildren).toBeDefined();
            expect(filterDescriptor.hasChildren()).toBeFalsy();

        });

        it("should have a state of parameter state", function () {

            expect(filterDescriptor.state).toBeDefined();
            expect(filterDescriptor.state instanceof Search.ParameterState).toBeTruthy();

        });

        it("should have a state run type component options of type 'ParameterRunTypeComponentOptions'", function () {

            expect(filterDescriptor.state.runTypeComponentOptions).toBeDefined();
            expect(filterDescriptor.state.runTypeComponentOptions instanceof Search.ParameterRunTypeComponentOptions).toBeTruthy();

        });

    });

    describe("when run type is config", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.config;
        });

        it("should have a state run type component options of type 'ConfigRunTypeComponentOptions'", function () {

            expect(filterDescriptor.state.runTypeComponentOptions).toBeDefined();
            expect(filterDescriptor.state instanceof Search.ConfigState).toBeTruthy();
            expect(filterDescriptor.state.runTypeComponentOptions instanceof Search.ConfigRunTypeComponentOptions).toBeTruthy();
            expect(filterDescriptor.state.runTypeComponentOptions.config).toBeDefined();

        });

    });

    describe("when run type is config or parameter", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameterOrConfig;

        });

        it("should have a state run type component options of type 'ParameterOrConfigRunTypeComponentOptions'", function () {

            expect(filterDescriptor.state.runTypeComponentOptions).toBeDefined();
            expect(filterDescriptor.state instanceof Search.ParameterOrConfigState).toBeTruthy();
            expect(filterDescriptor.state.runTypeComponentOptions instanceof Search.ParameterOrConfigRunTypeComponentOptions).toBeTruthy();
            expect(filterDescriptor.state.runTypeComponentOptions.config).toBeDefined();
            expect(filterDescriptor.state.runTypeComponentOptions.parameter).toBeDefined();

        });

    });

    describe("when run type is config and it has a date config set", function () {

        var filterDescriptor;

        describe("and it's operator needs one value", function () {
            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.parameterOrConfig;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A date config", Search.configType.date);
                filterDescriptor.operatorCriteria.operator = Search.operator.contains;
            });

            it("should validate only value1 as required", function () {

                expect(filterDescriptor.operatorCriteria.needsTwoValues).toBeDefined();

                expect(filterDescriptor.operatorCriteria.operatorState.validateProperty("value1").result).toBeFalsy();
                expect(filterDescriptor.operatorCriteria.operatorState.validateProperty("value2").result).toBeTruthy();

            });
        });

        describe("and it's operator needs two values", function () {
            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.parameterOrConfig;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A date config", Search.configType.date);
                filterDescriptor.operatorCriteria.operator = Search.operator.isBetween;
            });

            it("should validate value1 and value2 as required", function () {

                expect(filterDescriptor.operatorCriteria.needsTwoValues).toBeDefined();

                expect(filterDescriptor.operatorCriteria.operatorState.validateProperty("value1").result).toBeFalsy();
                expect(filterDescriptor.operatorCriteria.operatorState.validateProperty("value2").result).toBeFalsy();

            });
        });

        describe("and it's operator is exists", function () {
            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.parameterOrConfig;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A date config", Search.configType.date);
                filterDescriptor.operatorCriteria.operator = Search.operator.exists;
            });

            it("should not need values and units", function () {

                expect(filterDescriptor.operatorCriteria.needsValuesAndUnits).toBeFalsy();

            });
        });

        describe("and it's operator is isBetween", function () {
            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.parameterOrConfig;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A date config", Search.configType.date);
                filterDescriptor.operatorCriteria.operator = Search.operator.isBetween;
            });

            it("should need two values", function () {

                expect(filterDescriptor.operatorCriteria.needsTwoValues).toBeTruthy();

            });
        });

        describe("and it's operator is isNotBetween", function () {
            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.parameterOrConfig;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A date config", Search.configType.date);
                filterDescriptor.operatorCriteria.operator = Search.operator.isNotBetween;
            });

            it("should need two values", function () {

                expect(filterDescriptor.operatorCriteria.needsTwoValues).toBeTruthy();

            });
        });

        describe("and it's operator is isInTheLast", function () {
            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.parameterOrConfig;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A date config", Search.configType.date);
                filterDescriptor.operatorCriteria.operator = Search.operator.isInTheLast;
            });

            it("should not need two values", function () {

                expect(filterDescriptor.operatorCriteria.needsTwoValues).toBeFalsy();

            });

            it("should not need unit 1", function () {
            
                //filterDescriptor.operatorCriteria.operatorState.changeOperator(Search.operator.isInTheLast);
                expect(filterDescriptor.operatorCriteria.operatorState instanceof Search.DateOperatorState).toBeTruthy();

                //expect(filterDescriptor.operatorCriteria.operatorState.operator == Search.operator.exists).toBeTruthy();

            });
        });
    });

});