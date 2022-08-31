"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusHttp;
(function (StatusHttp) {
    StatusHttp[StatusHttp["OK"] = 200] = "OK";
    StatusHttp[StatusHttp["CREATED"] = 201] = "CREATED";
    StatusHttp[StatusHttp["ACCEPTED"] = 202] = "ACCEPTED";
    StatusHttp[StatusHttp["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusHttp[StatusHttp["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusHttp[StatusHttp["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusHttp[StatusHttp["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusHttp[StatusHttp["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusHttp[StatusHttp["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    StatusHttp[StatusHttp["CONFLICT"] = 409] = "CONFLICT";
    StatusHttp[StatusHttp["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    StatusHttp[StatusHttp["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    StatusHttp[StatusHttp["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(StatusHttp || (StatusHttp = {}));
exports.default = StatusHttp;
