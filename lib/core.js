﻿/// <reference path="./reference.ts" />
// Include Sugar Library
// http://sugarjs.com/
var sugar = require('sugar');
var Core;
(function (Core) {
    /// <reference path="../reference.ts" />
    (function (app) {
        var Application = (function () {
            function Application() {
            }
            return Application;
        })();
        app.Application = Application;
    })(Core.app || (Core.app = {}));
    var app = Core.app;
})(Core || (Core = {}));
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
var Core;
(function (Core) {
    (function (service) {
        (function (config) {
            /// <reference path="../../../reference.ts" />
            /**
            * Configuration Providers
            *
            * Configuration providers are used to read configuration information
            * necessary for application initialization.
            *
            * @namespace Core.service.config.provider
            */
            (function (provider) {
                /**
                * A base class for configuration providers.
                *
                * @class Abstract
                * @abstract
                */
                var Abstract = (function () {
                    /**
                    * Creates a new provider
                    * @constructor
                    */
                    function Abstract() {
                    }
                    return Abstract;
                })();
                provider.Abstract = Abstract;
            })(config.provider || (config.provider = {}));
            var provider = config.provider;
        })(service.config || (service.config = {}));
        var config = service.config;
    })(Core.service || (Core.service = {}));
    var service = Core.service;
})(Core || (Core = {}));
var Core;
(function (Core) {
    (function (service) {
        /// <reference path="../../reference.ts" />
        (function (provider) {
            var Abstract = (function () {
                function Abstract() {
                }
                return Abstract;
            })();
            provider.Abstract = Abstract;
        })(service.provider || (service.provider = {}));
        var provider = service.provider;
    })(Core.service || (Core.service = {}));
    var service = Core.service;
})(Core || (Core = {}));
/// <reference path="./reference.ts" />
/// <reference path="../../../lib/ts/node/node.d.ts" />
/// <reference path="../../../lib/ts/sugar/sugar.d.ts" />
// Include Sugar Library
// http://sugarjs.com/
var Sugar = require('sugar');

module.exports = Core;
//# sourceMappingURL=core.js.map
