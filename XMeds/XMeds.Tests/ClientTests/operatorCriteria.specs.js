/// <reference path="c:\users\declan\source\repos\newskills\xmeds\xmeds.tests\scripts\jasmine.js" />
/// <reference path="../../xmeds/scripts/search/operatorstate.js" />
/// <reference path="../../xmeds/scripts/search/enums/operator.js" />
/// <reference path="../../xmeds/scripts/search/enums/sector.js" />
/// <reference path="../../xmeds/scripts/search/enums/parametertype.js" />
/// <reference path="../../xmeds/scripts/search/enums/function.js" />
/// <reference path="../../xmeds/scripts/search/enums/configtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtype.js" />
/// <reference path="../../xmeds/scripts/search/enums/runtypecomponent.js" />
/// <reference path="../../xmeds/scripts/search/dateoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/numericoperatoroptions.js" />
/// <reference path="../../xmeds/scripts/search/dateunitoptions.js" />
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

describe("FilerDescriptor", function () {

    describe("when operator run type component is parameter", function () {

        describe("and when a parameter item is set to a numeric parameter ", function () {

            var filterDescriptor;

            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.parameter;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.parameter;
                filterDescriptor.parameter = new Search.Parameter("A numeric parameter", Search.parameterType.numeric);
            });

            it("should only have numeric type values for operator options", function () {

                expect(filterDescriptor.operatorCriteria.operatorOptions).toBeDefined();
                expect(filterDescriptor.operatorCriteria.operatorOptions instanceof Search.NumericOperatorOptions).toBeTruthy();

            });

        });

    });

    describe("when operator run type component is config", function () {

        describe("and when a config item is set to a date config ", function () {

            var filterDescriptor;

            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.config;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A date config", Search.configType.date);
            });

            it("should only have date type values for operator options", function () {

                expect(filterDescriptor.operatorCriteria.operatorOptions).toBeDefined();
                expect(filterDescriptor.operatorCriteria.operatorOptions instanceof Search.DateOperatorOptions).toBeTruthy();

            });

        });

        describe("and when a config item is set to a numeric config ", function () {

            var filterDescriptor;

            beforeEach(function () {
                filterDescriptor = new Search.FilterDescriptor();
                filterDescriptor.runType = Search.runType.config;
                filterDescriptor.runTypeComponent = Search.runTypeComponent.config;
                filterDescriptor.config = new Search.Config("A numeric config", Search.configType.numeric);
            });

            it("should only have numeric type values for operator options", function () {

                expect(filterDescriptor.operatorCriteria.operatorOptions).toBeDefined();
                expect(filterDescriptor.operatorCriteria.operatorOptions instanceof Search.NumericOperatorOptions).toBeTruthy();

            });

        });

    });

});