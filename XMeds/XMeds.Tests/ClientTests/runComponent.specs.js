/// <reference path="c:\users\declan\source\repos\newskills\xmeds\xmeds.tests\scripts\jasmine.js" />
/// <reference path="../../xmeds/scripts/search/dateoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/numericoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/operatorstate.js" />
/// <reference path="../../xmeds/scripts/search/dateunitoptions.js" />
/// <reference path="../../xmeds/scripts/search/operatorstate.js" />
/// <reference path="../../xmeds/scripts/search/numericunitoptions.js" />
/// <reference path="../../xmeds/scripts/search/numericoperatorstate.js" />
/// <reference path="../../xmeds/scripts/search/numericdateoperatorstate.js" />
/// <reference path="../../xmeds/scripts/search/dateoperatorstate.js" />
/// <reference path="../../xmeds/scripts/search/enums/operator.js" />
/// <reference path="../../xmeds/scripts/search/enums/sector.js" />
/// <reference path="../../xmeds/scripts/search/enums/parametertype.js" />
/// <reference path="../../xmeds/scripts/search/enums/function.js" />
/// <reference path="../../xmeds/scripts/search/enums/configtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtypecomponent.js" />
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

    describe("when run type is parameter and has run type component set to parameter", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameter;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.parameter;
        });

        it("should need parameter search options", function () {
            expect(filterDescriptor.needsParameterSearchOptions).toBeDefined();
            expect(filterDescriptor.needsParameterSearchOptions).toBeTruthy();
        });

        it("should not need config search options", function () {
            expect(filterDescriptor.needsConfigSearchOptions).toBeDefined();
            expect(filterDescriptor.needsConfigSearchOptions).toBeFalsy();
        });

        it("should not need operator criteria options", function () {
            expect(filterDescriptor.needsOperatorCriteriaOptions).toBeDefined();
            expect(filterDescriptor.needsOperatorCriteriaOptions).toBeFalsy();
        });

    })

    describe("when run type is config and has run type component set to config", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.config;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
        });

        it("should not need parameter search options", function () {
            expect(filterDescriptor.needsParameterSearchOptions).toBeDefined();
            expect(filterDescriptor.needsParameterSearchOptions).toBeFalsy();
        });

        it("should need config search options", function () {
            expect(filterDescriptor.needsConfigSearchOptions).toBeDefined();
            expect(filterDescriptor.needsConfigSearchOptions).toBeTruthy();
        });

        it("should have no function set", function () {
            expect(filterDescriptor.function).toBeNull();
        });

        it("should have no sector set", function () {
            expect(filterDescriptor.sector).toBeNull();
        });

    })

    describe("when run type is parameter and has run type component set to exists", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameter;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.exists;
        });

        it("should not need parameter search options", function () {
            expect(filterDescriptor.needsParameterSearchOptions).toBeDefined();
            expect(filterDescriptor.needsParameterSearchOptions).toBeFalsy();
        });

        it("should not need config search options", function () {
            expect(filterDescriptor.needsConfigSearchOptions).toBeDefined();
            expect(filterDescriptor.needsConfigSearchOptions).toBeFalsy();
        });

        it("should not need operator criteria options", function () {
            expect(filterDescriptor.needsOperatorCriteriaOptions).toBeDefined();
            expect(filterDescriptor.needsOperatorCriteriaOptions).toBeFalsy();
        });

    })

    describe("when run type is parameter and has run type component set to does not exist", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameter;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.doesNotExist;
        });

        it("should not need parameter search options", function () {
            expect(filterDescriptor.needsParameterSearchOptions).toBeDefined();
            expect(filterDescriptor.needsParameterSearchOptions).toBeFalsy();
        });

        it("should not need config search options", function () {
            expect(filterDescriptor.needsConfigSearchOptions).toBeDefined();
            expect(filterDescriptor.needsConfigSearchOptions).toBeFalsy();
        });

        it("should not need operator criteria options", function () {
            expect(filterDescriptor.needsOperatorCriteriaOptions).toBeDefined();
            expect(filterDescriptor.needsOperatorCriteriaOptions).toBeFalsy();
        });

        it("should have no function set", function () {
            expect(filterDescriptor.function).toBeNull();
        });

        it("should have no sector set", function () {
            expect(filterDescriptor.sector).toBeNull();
        });

    })

    describe("when run type component is changed from parameter to exists", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameter;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.parameter;
            filterDescriptor.parameter = new Search.Parameter("A numeric parameter", Search.parameterType.numeric);
            filterDescriptor.function = Search.function.max;
            filterDescriptor.sector = Search.sector.sector1;
            filterDescriptor.operatorCriteria.operator = Search.operator.equals;

            filterDescriptor.runTypeComponent = Search.runTypeComponent.exists;
        });

        it("should have no parameter set", function () {
            expect(filterDescriptor.parameter).toBeNull();
        });

        it("should have no config set", function () {
            expect(filterDescriptor.config).toBeNull();
        });

        it("should have no function set", function () {
            expect(filterDescriptor.function).toBeNull();
        });

        it("should have no sector set", function () {
            expect(filterDescriptor.sector).toBeNull();
        });

        it("should have no operator set", function () {
            expect(filterDescriptor.operatorCriteria.operator).toBeNull();
        });
    })

    describe("when run type component is changed from parameter to does not exist", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.parameter;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.parameter;
            filterDescriptor.parameter = new Search.Parameter("A numeric parameter", Search.parameterType.numeric);
            filterDescriptor.function = Search.function.max;
            filterDescriptor.sector = Search.sector.sector1;
            filterDescriptor.operatorCriteria.operator = Search.operator.equals;

            filterDescriptor.runTypeComponent = Search.runTypeComponent.doesNotExist;
        });

        it("should have no parameter set", function () {
            expect(filterDescriptor.parameter).toBeNull();
        });

        it("should have no config set", function () {
            expect(filterDescriptor.config).toBeNull();
        });

        it("should have no function set", function () {
            expect(filterDescriptor.function).toBeNull();
        });

        it("should have no sector set", function () {
            expect(filterDescriptor.sector).toBeNull();
        });

        it("should have no operator set", function () {
            expect(filterDescriptor.operatorCriteria.operator).toBeNull();
        });
    })

    describe("when run type component is changed from config to exists", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.config;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
            filterDescriptor.config = new Search.Parameter("A numeric config", Search.configType.numeric);
            filterDescriptor.operatorCriteria.operator = Search.operator.equals;

            filterDescriptor.runTypeComponent = Search.runTypeComponent.exists;
        });

        it("should have no parameter set", function () {
            expect(filterDescriptor.parameter).toBeNull();
        });

        it("should have no config set", function () {
            expect(filterDescriptor.config).toBeNull();
        });

        it("should have no function set", function () {
            expect(filterDescriptor.function).toBeNull();
        });

        it("should have no sector set", function () {
            expect(filterDescriptor.sector).toBeNull();
        });

        it("should have no operator set", function () {
            expect(filterDescriptor.operatorCriteria.operator).toBeNull();
        });
    })

    describe("when run type component is changed from config to does not exist", function () {

        var filterDescriptor;

        beforeEach(function () {
            filterDescriptor = new Search.FilterDescriptor();
            filterDescriptor.runType = Search.runType.config;
            filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
            filterDescriptor.parameter = new Search.Parameter("A numeric config", Search.configType.numeric);
            filterDescriptor.operatorCriteria.operator = Search.operator.equals;

            filterDescriptor.runTypeComponent = Search.runTypeComponent.doesNotExist;
        });

        it("should have no parameter set", function () {
            expect(filterDescriptor.parameter).toBeNull();
        });

        it("should have no config set", function () {
            expect(filterDescriptor.config).toBeNull();
        });

        it("should have no function set", function () {
            expect(filterDescriptor.function).toBeNull();
        });

        it("should have no sector set", function () {
            expect(filterDescriptor.sector).toBeNull();
        });

        it("should have no operator set", function () {
            expect(filterDescriptor.operatorCriteria.operator).toBeNull();
        });
    })
})