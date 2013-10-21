/// <reference path="./reference.ts" />
// Include Sugar Library
// http://sugarjs.com/
var sugar = require('sugar');
var Core;
(function (Core) {
    (function (data) {
        /// <reference path="../../reference.ts" />
        (function (type) {
            var Abstract = (function () {
                function Abstract() {
                }
                return Abstract;
            })();
            type.Abstract = Abstract;
        })(data.type || (data.type = {}));
        var type = data.type;
    })(Core.data || (Core.data = {}));
    var data = Core.data;
})(Core || (Core = {}));
var Core;
(function (Core) {
    (function (data) {
        /// <reference path="../../reference.ts" />
        (function (type) {
            var NumberType = (function () {
                function NumberType() {
                }
                return NumberType;
            })();
            type.NumberType = NumberType;
        })(data.type || (data.type = {}));
        var type = data.type;
    })(Core.data || (Core.data = {}));
    var data = Core.data;
})(Core || (Core = {}));
var Core;
(function (Core) {
    (function (data) {
        /// <reference path="../../reference.ts" />
        (function (validation) {
            /**
            * Represents the result of a validation operation.
            * @module Core/data/validation
            */
            var AbstractResult = (function () {
                function AbstractResult(success, errorMessages) {
                    if (typeof success === "undefined") { success = true; }
                    if (typeof errorMessages === "undefined") { errorMessages = ""; }
                    this._success = success;

                    if (typeof errorMessages === "string") {
                        if (errorMessages === "") {
                            errorMessages = [];
                        } else {
                            errorMessages = [errorMessages];
                        }
                    }

                    this._errorMessages = errorMessages;
                }
                return AbstractResult;
            })();
            validation.AbstractResult = AbstractResult;
        })(data.validation || (data.validation = {}));
        var validation = data.validation;
    })(Core.data || (Core.data = {}));
    var data = Core.data;
})(Core || (Core = {}));
/// <reference path="./reference.ts" />
/// <reference path="../../../lib/ts/node/node.d.ts" />
/// <reference path="../../../lib/ts/sugar/sugar.d.ts" />
// Include Sugar Library
// http://sugarjs.com/
var Sugar = require('sugar');

module.exports = Core;
//# sourceMappingURL=core.js.map
