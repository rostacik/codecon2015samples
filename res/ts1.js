"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) {
            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
                resolve(value);
            });
        }
        function onfulfill(value) {
            try {
                step("next", value);
            } catch (e) {
                reject(e);
            }
        }
        function onreject(value) {
            try {
                step("throw", value);
            } catch (e) {
                reject(e);
            }
        }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var demoModule;
(function (demoModule) {
    "use strict";
    function getOnionCountAsync() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var promise;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        promise = new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                resolve(Math.floor(Math.random() * 10 + 1));
                            }, 2000);
                        });
                        return context$3$0.abrupt("return", promise);

                    case 2:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.getOnionCountAsync = getOnionCountAsync;
    function theOnionCase() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        console.log("je cibula v byte?");
                        context$3$0.next = 3;
                        return getOnionCountAsync();

                    case 3:
                        res = context$3$0.sent;

                        console.log("cibula count : " + res);

                    case 5:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.theOnionCase = theOnionCase;
    function theOnionCaseWhileLoop() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        res = undefined;

                    case 1:
                        console.log("je cibula v byte?");
                        context$3$0.next = 4;
                        return getOnionCountAsync();

                    case 4:
                        res = context$3$0.sent;

                        console.log("cibula count : " + res);
                        if (res <= 4) {
                            console.log("BOHA!!!!");
                        } else {
                            console.log("ech, no dobre");
                        }

                    case 7:
                        if (res <= 4) {
                            context$3$0.next = 1;
                            break;
                        }

                    case 8:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.theOnionCaseWhileLoop = theOnionCaseWhileLoop;
    function getConfirmAsync(message) {
        var promise = new Promise(function (resolve, reject) {
            var res = confirm(message);
            resolve(res);
        });
        return promise;
    }
    demoModule.getConfirmAsync = getConfirmAsync;
    function consumeGetConfirmAsync() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return getConfirmAsync("please pick yes/no");

                    case 2:
                        res = context$3$0.sent;

                        console.log(res);

                    case 4:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.consumeGetConfirmAsync = consumeGetConfirmAsync;
    function getConfirmAsyncNoPromise(message) {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        return context$3$0.abrupt("return", confirm(message));

                    case 1:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.getConfirmAsyncNoPromise = getConfirmAsyncNoPromise;
    function consumeGetConfirmAsyncNoPromise() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return getConfirmAsyncNoPromise("please pick yes/no");

                    case 2:
                        res = context$3$0.sent;

                        console.log(res);

                    case 4:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.consumeGetConfirmAsyncNoPromise = consumeGetConfirmAsyncNoPromise;
    function getJSONAsync(url) {
        var promise = new Promise(function (resolve, reject) {
            var client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
            function handler() {
                if (this.readyState === this.DONE) {
                    if (this.status === 200) {
                        if (this.response) {
                            resolve(fixResponse(this.response));
                        } else if (this.responseText) {
                            resolve(fixResponse(this.responseText));
                        }
                    } else {
                        reject(this);
                    }
                }
            }
            ;
        });
        return promise;
    }
    demoModule.getJSONAsync = getJSONAsync;
    function fixResponse(response) {
        if (response) {
            var res = undefined;
            if (typeof response === "string") {
                try {
                    res = JSON.parse(response);
                } catch (e) {
                    res = response;
                } finally {
                    return res;
                }
            } else {
                return response;
            }
        }
    }
    function promiseAllSample() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return Promise.all([getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/297345.json?language=en&apikey=meSocYcloNe"), getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/2-298738_1_AL.json?language=en&apikey=meSocYcloNe"), getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/2-301459_1_AL.json?language=en&apikey=meSocYcloNe"), getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/297124.json?language=en&apikey=meSocYcloNe")]);

                    case 2:
                        res = context$3$0.sent;

                        res.forEach(function (value) {
                            var val = undefined;
                            if (Array.isArray(value)) {
                                val = value;
                            } else {
                                val = JSON.parse(value);
                            }
                            console.log("Weather conditions : " + val[0].WeatherText + " with " + val[0].Temperature.Metric.Value + val[0].Temperature.Metric.Unit);
                        });

                    case 4:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.promiseAllSample = promiseAllSample;
    function sameObjectMoreThens() {
        var promise;
        promise = new Promise(function (resolve, reject) {
            var res = confirm("abcd");
            resolve(res);
        });
        promise.then(function (value) {
            console.log("from first then");
            console.log(value);
        }, function (reason) {
            console.log("from first reject");
            console.log(reason);
        });
        promise.then(function (value) {
            console.log("from second then");
            console.log(value);
        }, function (reason) {
            console.log("from second reject");
            console.log(reason);
        });
        promise.then(function (value) {
            console.log("from third then");
            console.log(value);
        }, function (reason) {
            console.log("from third reject");
            console.log(reason);
        });
    }
    demoModule.sameObjectMoreThens = sameObjectMoreThens;
    function chainedThen() {
        var promise;
        promise = new Promise(function (resolve, reject) {
            var res = confirm("abcd");
            resolve(res);
        });
        promise.then(function (value) {
            console.log("from first then");
            console.log(value);
            return Promise.resolve("abcd");
        }, function (reason) {
            console.log("from first reject");
            console.log(reason);
        }).then(function (value) {
            console.log("from second then");
            console.log(value);
            return Promise.resolve(123);
        }, function (reason) {
            console.log("from second reject");
            console.log(reason);
        }).then(function (value) {
            console.log("from third then");
            console.log(value);
        }, function (reason) {
            console.log("from third reject");
            console.log(reason);
        });
    }
    demoModule.chainedThen = chainedThen;
    function getConfirmThrowingAsync(message) {
        var promise = new Promise(function (resolve, reject) {
            var res = confirm(message);
            if (res) {
                resolve(res);
            } else {
                reject("rejected, because user returned no");
            }
        });
        return promise;
    }
    demoModule.getConfirmThrowingAsync = getConfirmThrowingAsync;
    function tryCatchAsyncFn() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.prev = 0;
                        context$3$0.next = 3;
                        return getConfirmThrowingAsync("je cibula v byte?");

                    case 3:
                        res = context$3$0.sent;

                        console.log("cibula vraj v byte JE : " + res);
                        context$3$0.next = 10;
                        break;

                    case 7:
                        context$3$0.prev = 7;
                        context$3$0.t0 = context$3$0["catch"](0);

                        console.log("cibula vraj v byte NIEJE : " + context$3$0.t0);

                    case 10:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this, [[0, 7]]);
        }));
    }
    demoModule.tryCatchAsyncFn = tryCatchAsyncFn;
    function simplePromise() {
        var promise = new Promise(function (resolve, reject) {
            var res = confirm("abcd");
            resolve(res);
        }).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    }
    demoModule.simplePromise = simplePromise;
    function simpleAwait() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return getConfirmAsync("abcd");

                    case 2:
                        res = context$3$0.sent;

                        console.log(res);

                    case 4:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.simpleAwait = simpleAwait;
    function simpleAwaitWithProp() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var gca, res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        gca = getConfirmAsync("abcd");
                        context$3$0.next = 3;
                        return gca;

                    case 3:
                        res = context$3$0.sent;

                        console.log(res);

                    case 5:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.simpleAwaitWithProp = simpleAwaitWithProp;
    function returnStringAsync() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        return context$3$0.abrupt("return", "abcd");

                    case 1:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.returnStringAsync = returnStringAsync;
    function consumeStringAsync() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function callee$2$0() {
            var res;
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return returnStringAsync();

                    case 2:
                        res = context$3$0.sent;

                        console.log(res);

                    case 4:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        }));
    }
    demoModule.consumeStringAsync = consumeStringAsync;
})(demoModule || (demoModule = {}));
//# sourceMappingURL=ts1.js.map
