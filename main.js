(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _walkins_walkins_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkins/walkins.component */ "./src/app/walkins/walkins.component.ts");
/* harmony import */ var _callings_callings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callings/callings.component */ "./src/app/callings/callings.component.ts");
/* harmony import */ var _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counselling/counselling.component */ "./src/app/counselling/counselling.component.ts");
/* harmony import */ var _joinings_joinings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./joinings/joinings.component */ "./src/app/joinings/joinings.component.ts");
/* harmony import */ var _sdetails_sdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sdetails/sdetails.component */ "./src/app/sdetails/sdetails.component.ts");
/* harmony import */ var _cs_cs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cs/cs.component */ "./src/app/cs/cs.component.ts");
/* harmony import */ var _calling1_calling1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calling1/calling1.component */ "./src/app/calling1/calling1.component.ts");
/* harmony import */ var _counselling1_counselling1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./counselling1/counselling1.component */ "./src/app/counselling1/counselling1.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _finalstatus_finalstatus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./finalstatus/finalstatus.component */ "./src/app/finalstatus/finalstatus.component.ts");
/* harmony import */ var _rejoin_rejoin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rejoin/rejoin.component */ "./src/app/rejoin/rejoin.component.ts");
















var routes = [
    { path: '', pathMatch: "full", redirectTo: "home" },
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    },
    {
        path: "walkins",
        component: _walkins_walkins_component__WEBPACK_IMPORTED_MODULE_5__["WalkinsComponent"]
    },
    {
        path: "callings",
        component: _callings_callings_component__WEBPACK_IMPORTED_MODULE_6__["CallingsComponent"]
    },
    {
        path: "Counselling",
        component: _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_7__["CounsellingComponent"]
    },
    {
        path: "joining",
        component: _joinings_joinings_component__WEBPACK_IMPORTED_MODULE_8__["JoiningsComponent"]
    },
    {
        path: "students",
        component: _sdetails_sdetails_component__WEBPACK_IMPORTED_MODULE_9__["SdetailsComponent"]
    },
    {
        path: "currentstatus",
        component: _cs_cs_component__WEBPACK_IMPORTED_MODULE_10__["CsComponent"]
    },
    {
        path: "callings1",
        component: _calling1_calling1_component__WEBPACK_IMPORTED_MODULE_11__["Calling1Component"]
    },
    {
        path: "counselling1",
        component: _counselling1_counselling1_component__WEBPACK_IMPORTED_MODULE_12__["Counselling1Component"]
    },
    {
        path: "update",
        component: _update_update_component__WEBPACK_IMPORTED_MODULE_13__["UpdateComponent"]
    },
    {
        path: "joinings",
        component: _joinings_joinings_component__WEBPACK_IMPORTED_MODULE_8__["JoiningsComponent"]
    },
    {
        path: "studentdetails",
        component: _sdetails_sdetails_component__WEBPACK_IMPORTED_MODULE_9__["SdetailsComponent"]
    },
    {
        path: "finalStatus",
        component: _finalstatus_finalstatus_component__WEBPACK_IMPORTED_MODULE_14__["FinalstatusComponent"]
    },
    {
        path: "rejoin",
        component: _rejoin_rejoin_component__WEBPACK_IMPORTED_MODULE_15__["RejoinComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light\">\n\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/home']\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">Regsiter</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/walkins']\">Walkins</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/callings']\">Callings</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/Counselling']\">Counselling</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/joining']\">Joining</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/students']\">Students</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/finalStatus']\">Currentstatus</a>\n          </li>\n        </ul>\n      </nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mytemp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _walkins_walkins_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./walkins/walkins.component */ "./src/app/walkins/walkins.component.ts");
/* harmony import */ var _callings_callings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./callings/callings.component */ "./src/app/callings/callings.component.ts");
/* harmony import */ var _calling1_calling1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calling1/calling1.component */ "./src/app/calling1/calling1.component.ts");
/* harmony import */ var _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./counselling/counselling.component */ "./src/app/counselling/counselling.component.ts");
/* harmony import */ var _counselling1_counselling1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./counselling1/counselling1.component */ "./src/app/counselling1/counselling1.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _joinings_joinings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./joinings/joinings.component */ "./src/app/joinings/joinings.component.ts");
/* harmony import */ var _cs_cs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cs/cs.component */ "./src/app/cs/cs.component.ts");
/* harmony import */ var _sdetails_sdetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sdetails/sdetails.component */ "./src/app/sdetails/sdetails.component.ts");
/* harmony import */ var _cstatus_cstatus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cstatus/cstatus.component */ "./src/app/cstatus/cstatus.component.ts");
/* harmony import */ var _rejoin_rejoin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rejoin/rejoin.component */ "./src/app/rejoin/rejoin.component.ts");
/* harmony import */ var _finalstatus_finalstatus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./finalstatus/finalstatus.component */ "./src/app/finalstatus/finalstatus.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _walkins_walkins_component__WEBPACK_IMPORTED_MODULE_7__["WalkinsComponent"],
                _callings_callings_component__WEBPACK_IMPORTED_MODULE_8__["CallingsComponent"],
                _calling1_calling1_component__WEBPACK_IMPORTED_MODULE_9__["Calling1Component"],
                _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_10__["CounsellingComponent"],
                _counselling1_counselling1_component__WEBPACK_IMPORTED_MODULE_11__["Counselling1Component"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_12__["UpdateComponent"],
                _joinings_joinings_component__WEBPACK_IMPORTED_MODULE_13__["JoiningsComponent"],
                _cs_cs_component__WEBPACK_IMPORTED_MODULE_14__["CsComponent"],
                _sdetails_sdetails_component__WEBPACK_IMPORTED_MODULE_15__["SdetailsComponent"],
                _cstatus_cstatus_component__WEBPACK_IMPORTED_MODULE_16__["CstatusComponent"],
                _rejoin_rejoin_component__WEBPACK_IMPORTED_MODULE_17__["RejoinComponent"],
                _finalstatus_finalstatus_component__WEBPACK_IMPORTED_MODULE_18__["FinalstatusComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calling1/calling1.component.css":
/*!*************************************************!*\
  !*** ./src/app/calling1/calling1.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal1{\r\n    \r\n        margin-left: 150px;\r\n        width: 80%;\r\n        height: 100%;\r\n        background-color: darkgray\r\n}\r\n.main{\r\n        background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        background-size: cover;\r\n        width: 100%;\r\n        height: 800px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbGluZzEvY2FsbGluZzEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7UUFFUSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWjtBQUNSO0FBQ0E7UUFDUSxxS0FBcUs7UUFDckssNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGFBQWE7SUFDakIiLCJmaWxlIjoic3JjL2FwcC9jYWxsaW5nMS9jYWxsaW5nMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbDF7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXlcclxufVxyXG4ubWFpbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMtbmV3cy5tb25leWNvbnRyb2wuY29tL3N0YXRpYy1tY25ld3MvMjAxOC8xMS9idXNpbmVzcy1kZWNpc2lvbi1maW5hbmNpYWwtYWR2aWNlLWZpbmFuY2lhbC1wbGFubmluZy1maW5hbmNpYWwtYWR2aXNvci03NzB4NDMzLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/calling1/calling1.component.html":
/*!**************************************************!*\
  !*** ./src/app/calling1/calling1.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n    <div class=\"container\">\n      <div class=\"jumbotron\">\n         <h1 style=\"text-align: center\"><b>Callings</b></h1>      \n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>id</th>\n            <th>Name</th>\n            <th>Mobile</th>\n            <th>Email</th>\n            <th>Course</th>\n            <th>Source</th>\n            <th>Lead-Status</th>\n            <th>Demo-Date</th>\n            <th>Counsler</th>\n            <th>Remark</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n          </tr>\n          \n        </tbody>\n      </table>\n      <button class=\"btn btn-success\" [routerLink]=\"['/callings']\">Back</button>\n      <button  class=\"btn btn-success\" style=\"float: right;\" [routerLink]=\"['/Counselling']\">Next</button>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/calling1/calling1.component.ts":
/*!************************************************!*\
  !*** ./src/app/calling1/calling1.component.ts ***!
  \************************************************/
/*! exports provided: Calling1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calling1Component", function() { return Calling1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var Calling1Component = /** @class */ (function () {
    function Calling1Component() {
    }
    Calling1Component.prototype.ngOnInit = function () {
    };
    Calling1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calling1',
            template: __webpack_require__(/*! ./calling1.component.html */ "./src/app/calling1/calling1.component.html"),
            styles: [__webpack_require__(/*! ./calling1.component.css */ "./src/app/calling1/calling1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Calling1Component);
    return Calling1Component;
}());



/***/ }),

/***/ "./src/app/callings/callings.component.css":
/*!*************************************************!*\
  !*** ./src/app/callings/callings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal{\r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n\r\nlabel {\r\n    margin-left: 350px;\r\n}\r\n\r\ninput{\r\n    margin-left: 350px;\r\n    width:50%;\r\n   \r\n}\r\n\r\nselect{\r\n    margin-left:350px;\r\n    width:50%;\r\n}\r\n\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbGluZ3MvY2FsbGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxxS0FBcUs7SUFDckssNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jYWxsaW5ncy9jYWxsaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgIFxyXG59XHJcbnNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OjM1MHB4O1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcbi5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLW5ld3MubW9uZXljb250cm9sLmNvbS9zdGF0aWMtbWNuZXdzLzIwMTgvMTEvYnVzaW5lc3MtZGVjaXNpb24tZmluYW5jaWFsLWFkdmljZS1maW5hbmNpYWwtcGxhbm5pbmctZmluYW5jaWFsLWFkdmlzb3ItNzcweDQzMy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/callings/callings.component.html":
/*!**************************************************!*\
  !*** ./src/app/callings/callings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"container\">\n<div class=\"jumbotron\">\n<form>\n  <h1 style=\"text-align: center\">Callings</h1>\n  <label>Demo-Calls : </label><br>\n <select name=\"cars\" style=\"height:35px;color:gray\">\n    <option value=\"volvo\">Default</option>\n    <option value=\"saab\">Demo</option>\n    <option value=\"mercedes\">Callback</option>\n  </select>\n  <br>\n  <br>\n  <label>Demo Date :</label><br>\n  <input type=\"date\" name=\"bday\" style=\"height:35px;color:gray\">\n  <br>\n  <br>\n  <button class=\"btn btn-success\" style=\"margin-left:600px\" [routerLink]=\"['/callings1']\">Find</button>\n</form>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/callings/callings.component.ts":
/*!************************************************!*\
  !*** ./src/app/callings/callings.component.ts ***!
  \************************************************/
/*! exports provided: CallingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallingsComponent", function() { return CallingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var CallingsComponent = /** @class */ (function () {
    function CallingsComponent() {
    }
    CallingsComponent.prototype.ngOnInit = function () {
    };
    CallingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callings',
            template: __webpack_require__(/*! ./callings.component.html */ "./src/app/callings/callings.component.html"),
            styles: [__webpack_require__(/*! ./callings.component.css */ "./src/app/callings/callings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallingsComponent);
    return CallingsComponent;
}());



/***/ }),

/***/ "./src/app/counselling/counselling.component.css":
/*!*******************************************************!*\
  !*** ./src/app/counselling/counselling.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coun{\r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n\r\nlabel {\r\n    margin-left: 350px;\r\n}\r\n\r\ninput{\r\n    margin-left: 350px;\r\n    width:50%;\r\n   \r\n}\r\n\r\nselect{\r\n    margin-left:350px;\r\n    width:50%;\r\n}\r\n\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnNlbGxpbmcvY291bnNlbGxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxxS0FBcUs7SUFDckssNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb3Vuc2VsbGluZy9jb3Vuc2VsbGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW57XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXlcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xyXG59XHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICBcclxufVxyXG5zZWxlY3R7XHJcbiAgICBtYXJnaW4tbGVmdDozNTBweDtcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG4ubWFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy1uZXdzLm1vbmV5Y29udHJvbC5jb20vc3RhdGljLW1jbmV3cy8yMDE4LzExL2J1c2luZXNzLWRlY2lzaW9uLWZpbmFuY2lhbC1hZHZpY2UtZmluYW5jaWFsLXBsYW5uaW5nLWZpbmFuY2lhbC1hZHZpc29yLTc3MHg0MzMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/counselling/counselling.component.html":
/*!********************************************************!*\
  !*** ./src/app/counselling/counselling.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"container\">\n<div class=\"jumbotron\">\n    <form>\n      <h1 style=\"text-align: center\">Counselling</h1>\n      <label>Demo Date :</label><br>\n      <input type=\"date\" name=\"bday\" style=\"height:35px;color:gray\">\n      <br>\n      <br>\n      <label>Course : </label><br>\n      <select name=\"cars\" style=\"height:35px;color:gray\">\n      <option value=\"volvo\">Default</option>\n      <option value=\"saab\">Python</option>\n      <option value=\"mercedes\">Datascience</option>\n      <option value=\"audi\">django</option>\n      </select>\n  <br>\n  <br>\n      <button class=\"btn btn-success\" style=\"margin-left:600px\"  [routerLink]=\"['/counselling1']\" >Find</button>\n    </form>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/counselling/counselling.component.ts":
/*!******************************************************!*\
  !*** ./src/app/counselling/counselling.component.ts ***!
  \******************************************************/
/*! exports provided: CounsellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellingComponent", function() { return CounsellingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var CounsellingComponent = /** @class */ (function () {
    function CounsellingComponent() {
    }
    CounsellingComponent.prototype.ngOnInit = function () {
    };
    CounsellingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counselling',
            template: __webpack_require__(/*! ./counselling.component.html */ "./src/app/counselling/counselling.component.html"),
            styles: [__webpack_require__(/*! ./counselling.component.css */ "./src/app/counselling/counselling.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounsellingComponent);
    return CounsellingComponent;
}());



/***/ }),

/***/ "./src/app/counselling1/counselling1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/counselling1/counselling1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".couns1{\r\n    \r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnNlbGxpbmcxL2NvdW5zZWxsaW5nMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaO0FBQ0o7QUFDQTtJQUNJLHFLQUFxSztJQUNySyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvdW5zZWxsaW5nMS9jb3Vuc2VsbGluZzEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VuczF7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheVxyXG59XHJcbi5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLW5ld3MubW9uZXljb250cm9sLmNvbS9zdGF0aWMtbWNuZXdzLzIwMTgvMTEvYnVzaW5lc3MtZGVjaXNpb24tZmluYW5jaWFsLWFkdmljZS1maW5hbmNpYWwtcGxhbm5pbmctZmluYW5jaWFsLWFkdmlzb3ItNzcweDQzMy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/counselling1/counselling1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/counselling1/counselling1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"container\">\n        <div class=\"jumbotron \">\n         <h1 style=\"text-align: center\"><b>Counselling</b></h1>      \n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>id</th>\n            <th>Name</th>\n            <th>Mobile</th>\n            <th>Email</th>\n            <th>Course</th>\n            <th>Source</th>\n            <th>Lead-Status</th>\n            <th>Demo-Date</th>\n            <th>Counsler</th>\n            <th>Remark</th>\n            <th>Join</th>\n            <th>Willing</th>\n            <th>Dead</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n\n            <td><button class=\"btn btn-success\" [routerLink]=\"['/joinings']\">Join</button></td>\n            <td><button class=\"btn btn-warning\" [routerLink]=\"['/update']\">Willing</button></td>\n            <td><button class=\"btn btn-danger\"  [routerLink]=\"['/']\">Dead</button></td>\n          </tr>\n          \n        </tbody>\n      </table>\n      <button class=\"btn btn-success\" [routerLink]=\"['/Counselling']\">Back</button>\n     \n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/counselling1/counselling1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/counselling1/counselling1.component.ts ***!
  \********************************************************/
/*! exports provided: Counselling1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counselling1Component", function() { return Counselling1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var Counselling1Component = /** @class */ (function () {
    function Counselling1Component() {
    }
    Counselling1Component.prototype.ngOnInit = function () {
    };
    Counselling1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counselling1',
            template: __webpack_require__(/*! ./counselling1.component.html */ "./src/app/counselling1/counselling1.component.html"),
            styles: [__webpack_require__(/*! ./counselling1.component.css */ "./src/app/counselling1/counselling1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Counselling1Component);
    return Counselling1Component;
}());



/***/ }),

/***/ "./src/app/cs/cs.component.css":
/*!*************************************!*\
  !*** ./src/app/cs/cs.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cs{\r\n    \r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3MvY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSSxxS0FBcUs7SUFDckssNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jcy9jcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNze1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXlcclxufVxyXG4ubWFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy1uZXdzLm1vbmV5Y29udHJvbC5jb20vc3RhdGljLW1jbmV3cy8yMDE4LzExL2J1c2luZXNzLWRlY2lzaW9uLWZpbmFuY2lhbC1hZHZpY2UtZmluYW5jaWFsLXBsYW5uaW5nLWZpbmFuY2lhbC1hZHZpc29yLTc3MHg0MzMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/cs/cs.component.html":
/*!**************************************!*\
  !*** ./src/app/cs/cs.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n         <h1 style=\"text-align: center\"><b>Counselling</b></h1>      \n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Course</th>\n            <th>Name</th>\n            <th>Completion Date</th>\n            <th>Joining Date</th>\n            <th>Instructor</th>\n            <th>Mobile</th>\n            <th>Email</th>\n            <th>Status</th>\n            <th>Complete</th>\n            <th>Delay</th>\n            <th>Dead</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n\n            <td><button class=\"btn btn-success\">Complete</button></td>\n            <td><button class=\"btn btn-warning\">Delay</button></td>\n            <td><button class=\"btn btn-danger\" [routerLink]=\"['/studentdetails']\" >DisContinue</button></td>\n          </tr>\n          \n        </tbody>\n      </table>\n      <button class=\"btn btn-success\">Back</button>\n      <button  class=\"btn btn-success\" style=\"float: right;\">Next</button>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/cs/cs.component.ts":
/*!************************************!*\
  !*** ./src/app/cs/cs.component.ts ***!
  \************************************/
/*! exports provided: CsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsComponent", function() { return CsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var CsComponent = /** @class */ (function () {
    function CsComponent() {
    }
    CsComponent.prototype.ngOnInit = function () {
    };
    CsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cs',
            template: __webpack_require__(/*! ./cs.component.html */ "./src/app/cs/cs.component.html"),
            styles: [__webpack_require__(/*! ./cs.component.css */ "./src/app/cs/cs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CsComponent);
    return CsComponent;
}());



/***/ }),

/***/ "./src/app/cstatus/cstatus.component.css":
/*!***********************************************!*\
  !*** ./src/app/cstatus/cstatus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cstatus{\r\n    \r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3N0YXR1cy9jc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0kscUtBQXFLOztBQUV6SyIsImZpbGUiOiJzcmMvYXBwL2NzdGF0dXMvY3N0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzdGF0dXN7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheVxyXG59XHJcbi5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLW5ld3MubW9uZXljb250cm9sLmNvbS9zdGF0aWMtbWNuZXdzLzIwMTgvMTEvYnVzaW5lc3MtZGVjaXNpb24tZmluYW5jaWFsLWFkdmljZS1maW5hbmNpYWwtcGxhbm5pbmctZmluYW5jaWFsLWFkdmlzb3ItNzcweDQzMy5qcGcpO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cstatus/cstatus.component.html":
/*!************************************************!*\
  !*** ./src/app/cstatus/cstatus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<div class=\"cstatus\">\n    <div class=\"container\">\n         <h1 style=\"text-align: center\"><b>Counselling</b></h1>      \n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>id</th>\n            <th>Course</th>\n            <th>Name</th>\n            <th>Completion-Date</th>\n            <th>Joining-Date</th>\n            <th>Instructor</th>\n            <th>Mobile</th>\n            <th>Email</th>\n            <th>Status</th>\n            <th>Completed</th>\n            <th>Delay</th>\n            <th>Dead</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>Join</td>\n            <td>John</td>\n          </tr>\n          \n        </tbody>\n      </table>\n      <button class=\"btn btn-success\">Back</button>\n      <button  class=\"btn btn-success\" style=\"float: right;\">Next</button>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/cstatus/cstatus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cstatus/cstatus.component.ts ***!
  \**********************************************/
/*! exports provided: CstatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CstatusComponent", function() { return CstatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var CstatusComponent = /** @class */ (function () {
    function CstatusComponent() {
    }
    CstatusComponent.prototype.ngOnInit = function () {
    };
    CstatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cstatus',
            template: __webpack_require__(/*! ./cstatus.component.html */ "./src/app/cstatus/cstatus.component.html"),
            styles: [__webpack_require__(/*! ./cstatus.component.css */ "./src/app/cstatus/cstatus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CstatusComponent);
    return CstatusComponent;
}());



/***/ }),

/***/ "./src/app/finalstatus/finalstatus.component.css":
/*!*******************************************************!*\
  !*** ./src/app/finalstatus/finalstatus.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n.cs{\r\n    \r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWxzdGF0dXMvZmluYWxzdGF0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFLQUFxSztJQUNySyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9maW5hbHN0YXR1cy9maW5hbHN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMtbmV3cy5tb25leWNvbnRyb2wuY29tL3N0YXRpYy1tY25ld3MvMjAxOC8xMS9idXNpbmVzcy1kZWNpc2lvbi1maW5hbmNpYWwtYWR2aWNlLWZpbmFuY2lhbC1wbGFubmluZy1maW5hbmNpYWwtYWR2aXNvci03NzB4NDMzLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxufVxyXG4uY3N7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/finalstatus/finalstatus.component.html":
/*!********************************************************!*\
  !*** ./src/app/finalstatus/finalstatus.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<!-- <div class=\"cs\"> -->\n    <div class=\"container\">\n      <div class=\"jumbotron\">\n         <h1 style=\"text-align: center\"><b>Counselling</b></h1>      \n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Course</th>\n            <th>Name</th>\n            <th>Completion Date</th>\n            <th>Joining Date</th>\n            <th>Instructor</th>\n            <th>Mobile</th>\n            <th>Email</th>\n            <th>Status</th>\n            <th>Complete</th>\n            <th>Delay</th>\n            <th>Dead</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <!-- <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td>\n            <td>John</td> -->\n\n            <!-- <td><button class=\"btn btn-success\">Complete</button></td>\n            <td><button class=\"btn btn-warning\">Delay</button></td>\n            <td><button class=\"btn btn-danger\" [routerLink]=\"['/studentdetails']\" >DisContinue</button></td> -->\n          </tr>\n          \n        </tbody>\n      </table>\n    </div>\n    </div>\n    <!-- </div> -->\n  </div>"

/***/ }),

/***/ "./src/app/finalstatus/finalstatus.component.ts":
/*!******************************************************!*\
  !*** ./src/app/finalstatus/finalstatus.component.ts ***!
  \******************************************************/
/*! exports provided: FinalstatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalstatusComponent", function() { return FinalstatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var FinalstatusComponent = /** @class */ (function () {
    function FinalstatusComponent() {
    }
    FinalstatusComponent.prototype.ngOnInit = function () {
    };
    FinalstatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finalstatus',
            template: __webpack_require__(/*! ./finalstatus.component.html */ "./src/app/finalstatus/finalstatus.component.html"),
            styles: [__webpack_require__(/*! ./finalstatus.component.css */ "./src/app/finalstatus/finalstatus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinalstatusComponent);
    return FinalstatusComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homediv{\r\n    /* background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg); */\r\n    background-image: url(https://marketingarmor.com/wp-content/uploads/2017/09/photodune-3414091-group-of-business-people-working-at-office-m.jpg);\r\n    height: 700px; \r\n\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\na{\r\n    color:black\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyS0FBMks7SUFDM0ssK0lBQStJO0lBQy9JLGFBQWE7O0lBRWIsc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZWRpdntcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy1uZXdzLm1vbmV5Y29udHJvbC5jb20vc3RhdGljLW1jbmV3cy8yMDE4LzExL2J1c2luZXNzLWRlY2lzaW9uLWZpbmFuY2lhbC1hZHZpY2UtZmluYW5jaWFsLXBsYW5uaW5nLWZpbmFuY2lhbC1hZHZpc29yLTc3MHg0MzMuanBnKTsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21hcmtldGluZ2FybW9yLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS9waG90b2R1bmUtMzQxNDA5MS1ncm91cC1vZi1idXNpbmVzcy1wZW9wbGUtd29ya2luZy1hdC1vZmZpY2UtbS5qcGcpO1xyXG4gICAgaGVpZ2h0OiA3MDBweDsgXHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5he1xyXG4gICAgY29sb3I6YmxhY2tcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homediv\">\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n<h1 style=\"color: red;text-align:center;\"><b>Welcome to DigitalLync</b></h1>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/joinings/joinings.component.css":
/*!*************************************************!*\
  !*** ./src/app/joinings/joinings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".join{\r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\nlabel {\r\n    margin-left: 350px;\r\n}\r\ninput{\r\n    margin-left: 350px;\r\n    width:50%;\r\n   \r\n}\r\nselect{\r\n    margin-left:350px;\r\n    width:50%;\r\n}\r\noption{\r\n    color:gray\r\n}\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbmluZ3Mvam9pbmluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7O0FBRWI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHFLQUFxSzs7QUFFeksiLCJmaWxlIjoic3JjL2FwcC9qb2luaW5ncy9qb2luaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpvaW57XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXlcclxufVxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgIFxyXG59XHJcbnNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OjM1MHB4O1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcbm9wdGlvbntcclxuICAgIGNvbG9yOmdyYXlcclxufVxyXG4ubWFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy1uZXdzLm1vbmV5Y29udHJvbC5jb20vc3RhdGljLW1jbmV3cy8yMDE4LzExL2J1c2luZXNzLWRlY2lzaW9uLWZpbmFuY2lhbC1hZHZpY2UtZmluYW5jaWFsLXBsYW5uaW5nLWZpbmFuY2lhbC1hZHZpc29yLTc3MHg0MzMuanBnKTtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/joinings/joinings.component.html":
/*!**************************************************!*\
  !*** ./src/app/joinings/joinings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<div class=\"join\">\n    <h1 style=\"text-align: center\">Joinings</h1>\n    <br>\n    <form>\n    <label>Name : </label><br>\n    <input type=\"text\" placeholder=\"Enter name\" style=\"height:35px\">\n    <br>\n    <br>\n    <label>Course : </label><br>\n    <select name=\"cars\" style=\"height:35px;color:gray\">\n       <option value=\"volvo\">Default</option>\n       <option value=\"saab\">Python</option>\n       <option value=\"mercedes\">Datascience</option>\n       <option value=\"audi\">django</option>\n     </select>\n     <br>\n     <br>\n     <label>Date of joinings:</label><br>\n     <input type=\"date\" name=\"bday\" style=\"height:35px;color:gray\">\n     <br>\n     <br>\n     <label>Date of completion :</label><br>\n     <input type=\"date\" name=\"bday\" style=\"height:35px;color:gray\">\n     <br>\n     <br>\n     <label>Course fee : </label><br>\n     <input type=\"text\" placeholder=\"Enter Course fee\" style=\"height:35px\">\n     <br>\n     <br>\n     <label>Instructor : </label><br>\n     <input type=\"text\" placeholder=\"Enter Instructor\" style=\"height:35px\">\n     <br>\n     <br>\n     <label>Aadhar No : </label><br>\n     <input type=\"text\" placeholder=\"Enter Aadhar No\" style=\"height:35px\">\n     <br>\n     <br>\n     <label>Mobile No : </label><br>\n     <input type=\"text\" placeholder=\"Enter Mobile No\" style=\"height:35px\">\n     <br>\n     <br>\n     <label>Email : </label><br>\n     <input type=\"text\" placeholder=\"Enter email\" style=\"height:35px\">\n     <br>\n     <br>\n     <label>Remarks : </label><br>\n     <input type=\"text\" placeholder=\"Enter Remarks\" style=\"height:35px\">\n     <br>\n     <br>\n   \n   </form>\n   <br>\n   <button class=\"btn btn btn-success\" [routerLink]=\"['/currentstatus']\" style=\"text-align: center;margin-left:600px\"><i class=\"fa fa-plus\"></i> Join</button>\n   </div>\n  </div>"

/***/ }),

/***/ "./src/app/joinings/joinings.component.ts":
/*!************************************************!*\
  !*** ./src/app/joinings/joinings.component.ts ***!
  \************************************************/
/*! exports provided: JoiningsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoiningsComponent", function() { return JoiningsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var JoiningsComponent = /** @class */ (function () {
    function JoiningsComponent() {
    }
    JoiningsComponent.prototype.ngOnInit = function () {
    };
    JoiningsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joinings',
            template: __webpack_require__(/*! ./joinings.component.html */ "./src/app/joinings/joinings.component.html"),
            styles: [__webpack_require__(/*! ./joinings.component.css */ "./src/app/joinings/joinings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JoiningsComponent);
    return JoiningsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg{\r\n    margin-left: 150px;\r\n  \r\n    width: 70%;\r\n    height: 100%;\r\n    background-color: darkgray;\r\n    /* margin-top:-900px; */\r\n}\r\nlabel {\r\n    margin-left: 350px;\r\n}\r\ninput{\r\n    margin-left: 350px;\r\n    width:50%;\r\n   \r\n}\r\nselect{\r\n    margin-left:350px;\r\n    width:50%;\r\n}\r\noption{\r\n    color:gray\r\n}\r\n.homediv{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n\r\n    height: 1200px; \r\n\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7SUFFbEIsVUFBVTtJQUNWLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTOztBQUViO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiO0FBQ0E7SUFDSTtBQUNKO0FBRUE7SUFDSSxxS0FBcUs7O0lBRXJLLGNBQWM7O0lBRWQsc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxS0FBcUs7O0FBRXpLIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWd7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICAvKiBtYXJnaW4tdG9wOi05MDBweDsgKi9cclxufVxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgIFxyXG59XHJcbnNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OjM1MHB4O1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcbm9wdGlvbntcclxuICAgIGNvbG9yOmdyYXlcclxufVxyXG5cclxuLmhvbWVkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMtbmV3cy5tb25leWNvbnRyb2wuY29tL3N0YXRpYy1tY25ld3MvMjAxOC8xMS9idXNpbmVzcy1kZWNpc2lvbi1maW5hbmNpYWwtYWR2aWNlLWZpbmFuY2lhbC1wbGFubmluZy1maW5hbmNpYWwtYWR2aXNvci03NzB4NDMzLmpwZyk7XHJcblxyXG4gICAgaGVpZ2h0OiAxMjAwcHg7IFxyXG5cclxuICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMtbmV3cy5tb25leWNvbnRyb2wuY29tL3N0YXRpYy1tY25ld3MvMjAxOC8xMS9idXNpbmVzcy1kZWNpc2lvbi1maW5hbmNpYWwtYWR2aWNlLWZpbmFuY2lhbC1wbGFubmluZy1maW5hbmNpYWwtYWR2aXNvci03NzB4NDMzLmpwZyk7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-home></app-home> -->\r\n<!-- <div class=\"homediv\"> -->\r\n<div class=\"main\">\r\n<div class=\"transbox\">\r\n<div class=\"reg\">\r\n <h1 style=\"text-align: center\">Register</h1>\r\n <br>\r\n <form>\r\n <label>Name : </label><br>\r\n <input type=\"text\" placeholder=\"Enter name\" style=\"height:35px\">\r\n <br>\r\n <br>\r\n <label>Mobile No : </label><br>\r\n <input type=\"text\" placeholder=\"Enter mobile num\" style=\"height:35px\">\r\n <br>\r\n <br>\r\n <label>Email : </label><br>\r\n <input type=\"text\" placeholder=\"Enter email\" style=\"height:35px\">\r\n <br>\r\n <br>\r\n <label>Course : </label><br>\r\n <select name=\"cars\" style=\"height:35px;color:gray\">\r\n    <option value=\"volvo\">Default</option>\r\n    <option value=\"saab\">Python</option>\r\n    <option value=\"mercedes\">Datascience</option>\r\n    <option value=\"audi\">django</option>\r\n  </select>\r\n  <br>\r\n  <br>\r\n  <label>Source : </label><br>\r\n  <select name=\"cars\" style=\"height:35px;color:gray\">\r\n     <option value=\"volvo\">Default</option>\r\n     <option value=\"saab\">website</option>\r\n     <option value=\"mercedes\">suleka</option>\r\n     <option value=\"audi\">social network</option>\r\n  </select>\r\n  <br>\r\n  <br>\r\n   <label>Lead-Status : </label><br>\r\n <select name=\"cars\" style=\"height:35px;color:gray\">\r\n    <option value=\"volvo\">Default</option>\r\n    <option value=\"saab\">Demo</option>\r\n    <option value=\"mercedes\">Callbacks</option>\r\n  </select>\r\n  <br>\r\n  <br>\r\n  <label>Demo Date :</label><br>\r\n  <input type=\"date\" name=\"bday\" style=\"height:35px;color:gray\">\r\n  <br>\r\n  <br>\r\n  <label>Counsler : </label><br>\r\n  <input type=\"text\" placeholder=\"Enter Counsler\" style=\"height:35px\">\r\n  <br>\r\n  <br>\r\n  <label>Remarks : </label><br>\r\n  <input type=\"text\" placeholder=\"Enter Remarks\" style=\"height:35px\">\r\n  <br>\r\n  <br>\r\n</form>\r\n<br>\r\n<button class=\"btn btn btn-primary\" style=\"text-align: center;margin-left:600px\" [routerLink]=\"['/home']\"><i class=\"fa fa-plus\"></i> ADD</button>\r\n</div>\r\n<!-- </div> -->\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rejoin/rejoin.component.css":
/*!*********************************************!*\
  !*** ./src/app/rejoin/rejoin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rejoin{\r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n\r\nlabel {\r\n    margin-left: 350px;\r\n}\r\n\r\ninput{\r\n    margin-left: 350px;\r\n    width:50%;\r\n   \r\n}\r\n\r\nselect{\r\n    margin-left:350px;\r\n    width:50%;\r\n}\r\n\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVqb2luL3Jlam9pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTOztBQUViOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLHFLQUFxSztJQUNySyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jlam9pbi9yZWpvaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWpvaW57XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXlcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xyXG59XHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICBcclxufVxyXG5zZWxlY3R7XHJcbiAgICBtYXJnaW4tbGVmdDozNTBweDtcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG4ubWFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy1uZXdzLm1vbmV5Y29udHJvbC5jb20vc3RhdGljLW1jbmV3cy8yMDE4LzExL2J1c2luZXNzLWRlY2lzaW9uLWZpbmFuY2lhbC1hZHZpY2UtZmluYW5jaWFsLXBsYW5uaW5nLWZpbmFuY2lhbC1hZHZpc29yLTc3MHg0MzMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/rejoin/rejoin.component.html":
/*!**********************************************!*\
  !*** ./src/app/rejoin/rejoin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<!-- <div class=\"rejoin\"> -->\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n    <form>\n      <h1 style=\"text-align: center\">ReJoin</h1>\n      <label>Name : </label><br>\n      <input type=\"text\" placeholder=\"Enter name\" style=\"height:35px\">\n      <br>\n      <br>\n      <label>Rejoin Date :</label><br>\n      <input type=\"date\" name=\"bday\" style=\"height:35px;color:gray\">\n      <br>\n      <br>\n      <button class=\"btn btn-success\" style=\"margin-left:600px\" [routerLink]=\"['/students']\">Rejoin</button>\n    </form>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/rejoin/rejoin.component.ts":
/*!********************************************!*\
  !*** ./src/app/rejoin/rejoin.component.ts ***!
  \********************************************/
/*! exports provided: RejoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejoinComponent", function() { return RejoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var RejoinComponent = /** @class */ (function () {
    function RejoinComponent() {
    }
    RejoinComponent.prototype.ngOnInit = function () {
    };
    RejoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rejoin',
            template: __webpack_require__(/*! ./rejoin.component.html */ "./src/app/rejoin/rejoin.component.html"),
            styles: [__webpack_require__(/*! ./rejoin.component.css */ "./src/app/rejoin/rejoin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RejoinComponent);
    return RejoinComponent;
}());



/***/ }),

/***/ "./src/app/sdetails/sdetails.component.css":
/*!*************************************************!*\
  !*** ./src/app/sdetails/sdetails.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdetails{\r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2RldGFpbHMvc2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaO0FBQ0o7QUFDQTtJQUNJLHFLQUFxSztJQUNySyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NkZXRhaWxzL3NkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2RldGFpbHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXlcclxufVxyXG4ubWFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy1uZXdzLm1vbmV5Y29udHJvbC5jb20vc3RhdGljLW1jbmV3cy8yMDE4LzExL2J1c2luZXNzLWRlY2lzaW9uLWZpbmFuY2lhbC1hZHZpY2UtZmluYW5jaWFsLXBsYW5uaW5nLWZpbmFuY2lhbC1hZHZpc29yLTc3MHg0MzMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sdetails/sdetails.component.html":
/*!**************************************************!*\
  !*** ./src/app/sdetails/sdetails.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n         <h1 style=\"text-align: center\"><b>Completed-Students</b></h1>      \n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Course</th>\n            <th>Name</th>\n            <th>Completion Date</th>\n            <th>Joining Date</th>\n            <th>Instructor</th>\n            <th>Mobile</th>\n            <th>Email</th>\n            <th>Status</th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <td>John</td>\n              <td>John</td>\n              <td>John</td>\n              <td>John</td>\n              <td>John</td>\n              <td>John</td>\n              <td>John</td>\n              <td>John</td>\n              <td>John</td>\n            </tr>\n            \n          </tbody>\n        </table>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <h1 style=\"text-align: center\"><b>Inprocess-Students</b></h1>      \n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Id</th>\n              <th>Course</th>\n              <th>Name</th>\n              <th>Completion Date</th>\n              <th>Joining Date</th>\n              <th>Instructor</th>\n              <th>Mobile</th>\n              <th>Email</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n              <tr>\n                <td>John</td>\n                <td>John</td>\n                <td>John</td>\n                <td>John</td>\n                <td>John</td>\n                <td>John</td>\n                <td>John</td>\n                <td>John</td>\n                <td>John</td>\n              </tr>\n              \n            </tbody>\n          </table>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n          <h1 style=\"text-align: center\"><b>Discontinued-Students</b></h1>      \n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Id</th>\n                <th>Course</th>\n                <th>Name</th>\n                <th>Completion Date</th>\n                <th>Joining Date</th>\n                <th>Instructor</th>\n                <th>Mobile</th>\n                <th>Email</th>\n                <th>Status</th>\n                <th>Rejoin</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr>\n                  <td>John</td>\n                  <td>John</td>\n                  <td>John</td>\n                  <td>John</td>\n                  <td>John</td>\n                  <td>John</td>\n                  <td>John</td>\n                  <td>John</td>\n                  <td>John</td>\n                  <td><button class=\"btn btn-success\" [routerLink]=\"['/rejoin']\">Rejoin</button></td>\n                </tr>\n                \n              </tbody>\n            </table>\n    </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/sdetails/sdetails.component.ts":
/*!************************************************!*\
  !*** ./src/app/sdetails/sdetails.component.ts ***!
  \************************************************/
/*! exports provided: SdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdetailsComponent", function() { return SdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var SdetailsComponent = /** @class */ (function () {
    function SdetailsComponent() {
    }
    SdetailsComponent.prototype.ngOnInit = function () {
    };
    SdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sdetails',
            template: __webpack_require__(/*! ./sdetails.component.html */ "./src/app/sdetails/sdetails.component.html"),
            styles: [__webpack_require__(/*! ./sdetails.component.css */ "./src/app/sdetails/sdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SdetailsComponent);
    return SdetailsComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".update{\r\n    margin-left: 150px;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: darkgray\r\n}\r\nlabel {\r\n    margin-left: 350px;\r\n}\r\ninput{\r\n    margin-left: 350px;\r\n    width:50%;\r\n   \r\n}\r\nselect{\r\n    margin-left:350px;\r\n    width:50%;\r\n}\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBO0lBQ0kscUtBQXFLO0lBQ3JLLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheVxyXG59XHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNTBweDtcclxufVxyXG5pbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNTBweDtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgXHJcbn1cclxuc2VsZWN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6MzUwcHg7XHJcbiAgICB3aWR0aDo1MCU7XHJcbn1cclxuLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMtbmV3cy5tb25leWNvbnRyb2wuY29tL3N0YXRpYy1tY25ld3MvMjAxOC8xMS9idXNpbmVzcy1kZWNpc2lvbi1maW5hbmNpYWwtYWR2aWNlLWZpbmFuY2lhbC1wbGFubmluZy1maW5hbmNpYWwtYWR2aXNvci03NzB4NDMzLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n    <form>\n      <h1 style=\"text-align: center\">Update</h1>\n      <label>Name : </label><br>\n      <input type=\"text\" placeholder=\"Enter name\" style=\"height:35px\">\n      <br>\n      <br>\n      <label>Willing Date :</label><br>\n      <input type=\"date\" name=\"bday\" style=\"height:35px;color:gray\">\n      <br>\n      <br>\n      <button class=\"btn btn btn-warning\" [routerLink]=\"['/walkins']\" style=\"text-align: center;margin-left:600px\"><i class=\"fa fa-pencil-square-o\"></i> Update</button>\n    </form>\n    </div>\n    </div>\n  </div>\n\n    "

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var UpdateComponent = /** @class */ (function () {
    function UpdateComponent() {
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/walkins/walkins.component.css":
/*!***********************************************!*\
  !*** ./src/app/walkins/walkins.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.main{\r\n    background-image: url(https://static-news.moneycontrol.com/static-mcnews/2018/11/business-decision-financial-advice-financial-planning-financial-advisor-770x433.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa2lucy93YWxraW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kscUtBQXFLO0lBQ3JLLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2Fsa2lucy93YWxraW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMtbmV3cy5tb25leWNvbnRyb2wuY29tL3N0YXRpYy1tY25ld3MvMjAxOC8xMS9idXNpbmVzcy1kZWNpc2lvbi1maW5hbmNpYWwtYWR2aWNlLWZpbmFuY2lhbC1wbGFubmluZy1maW5hbmNpYWwtYWR2aXNvci03NzB4NDMzLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/walkins/walkins.component.html":
/*!************************************************!*\
  !*** ./src/app/walkins/walkins.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<div class=\"container\">\n    <div class=\"jumbotron\">\n     <h1 style=\"text-align: center\"><b>Walkins</b></h1>      \n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>Name</th>\n        <th>Mobile</th>\n        <th>Email</th>\n        <th>Course</th>\n        <th>Source</th>\n        <th>Lead-Status</th>\n        <th>Demo-Date</th>\n        <th>Counsler</th>\n        <th>Remark</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n      </tr>\n      <tr>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n      </tr>\n      <tr>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n      </tr>\n      <tr>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n        <td>John</td>\n      </tr>\n      \n    </tbody>\n  </table>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/walkins/walkins.component.ts":
/*!**********************************************!*\
  !*** ./src/app/walkins/walkins.component.ts ***!
  \**********************************************/
/*! exports provided: WalkinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsComponent", function() { return WalkinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var WalkinsComponent = /** @class */ (function () {
    function WalkinsComponent() {
    }
    WalkinsComponent.prototype.ngOnInit = function () {
    };
    WalkinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-walkins',
            template: __webpack_require__(/*! ./walkins.component.html */ "./src/app/walkins/walkins.component.html"),
            styles: [__webpack_require__(/*! ./walkins.component.css */ "./src/app/walkins/walkins.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WalkinsComponent);
    return WalkinsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PRAVALLIKA.DESKTOP-6FOM4GP\Desktop\ang\mytemp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map