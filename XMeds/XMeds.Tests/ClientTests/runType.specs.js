/// <reference path="c:\users\declan\source\repos\newskills\xmeds\xmeds.tests\scripts\jasmine.js" />
/// <reference path="../../xmeds/scripts/search/operatorstate.js" />
/// <reference path="../../xmeds/scripts/search/enums/operator.js" />
/// <reference path="../../xmeds/scripts/search/enums/sector.js" />
/// <reference path="../../xmeds/scripts/search/dateoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/numericoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/enums/parametertype.js" />
/// <reference path="../../xmeds/scripts/search/enums/function.js" />
/// <reference path="../../xmeds/scripts/search/enums/configtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtypecomponent.js" />
/// <reference path="../../xmeds/scripts/search/dateoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/numericoperatoroptions.js" />
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

    describe("when run type is parameter", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameter;
        });

        it("should have a state run type component options of type 'ParameterRunTypeComponentOptions'", function () {

            expect(filterDescriptor.state.runTypeComponentOptions).toBeDefined();
            expect(filterDescriptor.state instanceof Search.ParameterState).toBeTruthy();
            expect(filterDescriptor.state.runTypeComponentOptions instanceof Search.ParameterRunTypeComponentOptions).toBeTruthy();
            expect(filterDescriptor.state.runTypeComponentOptions.parameter).toBeDefined();

        });

        it("should need run component options", function () {

            expect(filterDescriptor.needsRunComponentOptions).toBeDefined();
            expect(filterDescriptor.needsRunComponentOptions).toBeTruthy();

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

        it("should need run component options", function () {

            expect(filterDescriptor.needsRunComponentOptions).toBeDefined();
            expect(filterDescriptor.needsRunComponentOptions).toBeTruthy();

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

    describe("when a parameter was selected and run type changes", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameter;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.parameter;
            filterDescriptor.parameter = new Search.Parameter("A numeric parameter", Search.parameterType.numeric);
            filterDescriptor.function = Search.function.max;
            filterDescriptor.sector = Search.sector.sector1;
            filterDescriptor.operatorCriteria.operator = Search.operator.equals;

            filterDescriptor.runType = Search.runType.config;

        });

        it("should have no config item set", function () {

            expect(filterDescriptor.config).toBeDefined();
            expect(filterDescriptor.config).toBeNull();

        });

        it("should have no parameter item set", function () {

            expect(filterDescriptor.parameter).toBeDefined();
            expect(filterDescriptor.parameter).toBeNull();

        });

        it("should have no function item set", function () {

            expect(filterDescriptor.function).toBeDefined();
            expect(filterDescriptor.function).toBeNull();

        });

        it("should have no sector item set", function () {

            expect(filterDescriptor.sector).toBeDefined();
            expect(filterDescriptor.sector).toBeNull();

        });

        it("should have no operator criteria operator set", function () {

            expect(filterDescriptor.operatorCriteria).toBeDefined();
            expect(filterDescriptor.operatorCriteria.operator).toBeNull();

        });

    });

    describe("when a config was selected and run type changes", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.config;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
            filterDescriptor.parameter = new Search.Parameter("A numeric config", "");
            filterDescriptor.operatorCriteria.operator = Search.operator.equals;

            filterDescriptor.runType = Search.runType.parameter;

        });

        it("should have no config item set", function () {

            expect(filterDescriptor.config).toBeDefined();
            expect(filterDescriptor.config).toBeNull();

        });

        it("should have no parameter item set", function () {

            expect(filterDescriptor.parameter).toBeDefined();
            expect(filterDescriptor.parameter).toBeNull();

        });

        it("should have no function item set", function () {

            expect(filterDescriptor.function).toBeDefined();
            expect(filterDescriptor.function).toBeNull();

        });

        it("should have no sector item set", function () {

            expect(filterDescriptor.sector).toBeDefined();
            expect(filterDescriptor.sector).toBeNull();

        });

        it("should have no operator criteria operator set", function () {

            expect(filterDescriptor.operatorCriteria).toBeDefined();
            expect(filterDescriptor.operatorCriteria.operator).toBeNull();

        });

    });

});