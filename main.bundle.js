webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n<div>\n<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_user_list_component__ = __webpack_require__("../../../../../src/app/users/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todos_todo_list_component__ = __webpack_require__("../../../../../src/app/todos/todo-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__users_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__todos_todo_list_component__["a" /* TodoListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_clarity_angular__["a" /* ClarityModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__users_user_list_component__["a" /* UserListComponent */] },
                { path: 'todo/:id', component: __WEBPACK_IMPORTED_MODULE_8__todos_todo_list_component__["a" /* TodoListComponent */] },
                { path: '', redirectTo: 'users', pathMatch: 'full' },
                { path: "**", redirectTo: 'users', pathMatch: 'full' }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/todos/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-set{\r\n    margin-top:20px;\r\n    margin-bottom: 20px; \r\n}\r\n.stiketodo{\r\n    text-decoration: line-through;\r\n}\r\n.back{\r\n    float: right;\r\n}\r\n.page-header{\r\n    padding: 15px;\r\n}\r\n.back a{\r\n    color: white;\r\n}\r\n.back a:hover{\r\n    color: white;\r\n}\r\n\r\ntbody {\r\n    display:block;\r\n    max-height:350px;\r\n    overflow:auto;\r\n}\r\nthead, tbody tr {\r\n    display:table;\r\n    width:100%;\r\n    table-layout:fixed;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todos/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-set\">\r\n    <header class=\"header header-4\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 page-header\">\r\n            <span class=\"title back\">\r\n                <a [routerLink]=\"['/users']\">\r\n                    << Back</a>\r\n            </span>\r\n            <span class=\"title\">ToDos</span>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"left\">#</th>\r\n                        <th class=\"left\">ToDo Title</th>\r\n                        <th>Status</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr aria-colspan=\"3\" *ngIf=\"TodoList?.length<=0\" style=\"text-align:center\">No Records available</tr>\r\n                    <tr *ngFor=\"let todo of TodoList let i = index\">\r\n                        <td class=\"left\">{{i+1}}</td>\r\n                        <td class=\"left\" [ngClass]=\"{'stiketodo': todo.completed === true }\">{{todo.title}}</td>\r\n                        <td>\r\n                            <input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"StatusChange(todo)\">\r\n                        </td>\r\n                        <td><clr-icon shape=\"trash\" size=\"20\" class=\"is-solid\" (click)=\"DeleteTodo(todo)\" style=\"cursor:pointer\"></clr-icon></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-md-9 col-lg-9 col-sm-12 col-xs-12\">\r\n            <form (ngSubmit)=\"CreateToDo()\" ngNativeValidate>\r\n                <section class=\"form-block\">\r\n                    <label>Create Todo</label>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"required\">Todo Title</label>\r\n                        <label  aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation invalid tooltip-sm\">\r\n                            <input [ngModelOptions]=\"{standalone: true}\" type=\"text\" [(ngModel)]=\"TodoTitle\" required>\r\n                            <span class=\"tooltip-content\">\r\n                                This field cannot be empty!\r\n                            </span>\r\n                        </label>\r\n                    </div>\r\n                </section>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"TodoTitle=''\">Cancel</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/todos/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_icons__ = __webpack_require__("../../../../clarity-icons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clarity_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_icons_shapes_essential_shapes__ = __webpack_require__("../../../../clarity-icons/shapes/essential-shapes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_icons_shapes_essential_shapes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarity_icons_shapes_essential_shapes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_list_model__ = __webpack_require__("../../../../../src/app/todos/todo-list.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoListComponent = (function () {
    function TodoListComponent(route, http) {
        this.route = route;
        this.http = http;
        this.TodoList = new Array();
        this.NewTodo = new __WEBPACK_IMPORTED_MODULE_5__todo_list_model__["a" /* Todo */]();
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.PageLoad();
    };
    TodoListComponent.prototype.PageLoad = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + this.id)
            .subscribe(function (data) { _this.TodoList = data.json(); }, function (err) {
            console.log('Unable to fetch Todo!');
        });
    };
    TodoListComponent.prototype.StatusChange = function (todoObj) {
        todoObj.completed = !todoObj.completed;
        this.http.post('https://jsonplaceholder.typicode.com/todos', todoObj)
            .subscribe(function (data) {
            console.log(data.json());
            alert("Status changed successfully");
        }, function (err) {
            console.log('Something went wrong');
        });
    };
    TodoListComponent.prototype.DeleteTodo = function (todoObj) {
        var _this = this;
        this.http.delete('https://jsonplaceholder.typicode.com/todos/' + todoObj.id)
            .subscribe(function (data) {
            console.log(data.json());
            var index = _this.TodoList.indexOf(todoObj);
            _this.TodoList.splice(index, 1);
            alert("Todo Deleted successfully");
        }, function (err) {
            console.log('Something went wrong');
        });
    };
    TodoListComponent.prototype.CreateToDo = function () {
        var _this = this;
        this.NewTodo.completed = false;
        this.NewTodo.userId = this.id;
        this.NewTodo.title = this.TodoTitle;
        this.http.post('https://jsonplaceholder.typicode.com/todos', this.NewTodo)
            .subscribe(function (data) {
            console.log(data.json());
            _this.TodoList.push(data.json());
            _this.TodoTitle = '';
            alert("Todo Created successfully");
        }, function (err) {
            console.log('Something went wrong!');
        });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/todos/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todos/todo-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/todos/todo-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());

//# sourceMappingURL=todo-list.model.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-set{\r\n    margin-top:20px;\r\n    margin-bottom: 20px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-set\">\r\n    <header class=\"header header-4\">\r\n        <div class=\"branding\">\r\n            <span class=\"title\">Users</span>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let user of UsersList\">\r\n            <div class=\"card clickable\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">{{user.name}}</h4>\r\n                    <div class=\"card-media-block\">\r\n                        <div class=\"card-media-description\">\r\n                            <span class=\"card-media-title\">\r\n                                User Name: {{user.username}}\r\n                            </span>\r\n                            <span class=\"card-media-text\">\r\n                                Phone: {{user.phone}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <ul class=\"list-group list-group-flush\">\r\n                    <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n                    <li class=\"list-group-item\">Website: {{user.website}}</li>\r\n                    <li class=\"list-group-item\">Company: {{user.company.name}}</li>\r\n                </ul>\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Address</h4>\r\n                    <p class=\"card-text\">\r\n                        {{user.address.street}},\r\n                        <br>{{user.address.suite}},\r\n                        <br>{{user.address.city}},\r\n                        <br>{{user.address.zipcode}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a [routerLink]=\"['/todo',user.id]\" class=\"btn btn-primary\">View Todos</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = (function () {
    function UserListComponent(http) {
        this.http = http;
        this.UsersList = new Array();
        this.PageLoad();
    }
    UserListComponent.prototype.PageLoad = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(function (data) { _this.UsersList = data.json(); }, function (err) {
            console.log('Something went wrong!');
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/users/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map