webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/material-forms/material-forms.module": [
		"./src/app/material-forms/material-forms.module.ts",
		"material-forms.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <a [routerLink]=\"['/material-forms']\">Material Forms</a> &nbsp; &nbsp; &nbsp;\n  <a [routerLink]=\"['/material-forms/reused']\">Reused</a>\n</div>\n<div>\n<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_angular__ = __webpack_require__("./node_modules/clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_user_list_component__ = __webpack_require__("./src/app/users/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todos_todo_list_component__ = __webpack_require__("./src/app/todos/todo-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__users_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__todos_todo_list_component__["a" /* TodoListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_clarity_angular__["a" /* ClarityModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_9__users_user_list_component__["a" /* UserListComponent */] },
                    { path: 'todo/:id', component: __WEBPACK_IMPORTED_MODULE_10__todos_todo_list_component__["a" /* TodoListComponent */] },
                    {
                        path: 'material-forms', loadChildren: 'app/material-forms/material-forms.module#MaterialFormdModule',
                    },
                    { path: '', redirectTo: 'users', pathMatch: 'full' },
                    { path: "**", redirectTo: 'users', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todos/todo-list.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://unpkg.com/clarity-ui/clarity-ui.min.css\");\n@import url(\"https://unpkg.com/clarity-icons/clarity-icons.min.css\");\n.margin-set{\n    margin-top:20px;\n    margin-bottom: 20px; \n}\n.stiketodo{\n    text-decoration: line-through;\n}\n.back{\n    float: right;\n}\n.page-header{\n    padding: 15px;\n}\n.back a{\n    color: white;\n}\n.back a:hover{\n    color: white;\n}\ntbody {\n    display:block;\n    max-height:350px;\n    overflow:auto;\n}\nthead, tbody tr {\n    display:table;\n    width:100%;\n    table-layout:fixed;\n}"

/***/ }),

/***/ "./src/app/todos/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-set\">\n    <header class=\"header header-4\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 page-header\">\n            <span class=\"title back\">\n                <a [routerLink]=\"['/users']\">\n                    << Back</a>\n            </span>\n            <span class=\"title\">ToDos</span>\n        </div>\n    </header>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th class=\"left\">#</th>\n                        <th class=\"left\">ToDo Title</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr aria-colspan=\"3\" *ngIf=\"TodoList?.length<=0\" style=\"text-align:center\">No Records available</tr>\n                    <tr *ngFor=\"let todo of TodoList let i = index\">\n                        <td class=\"left\">{{i+1}}</td>\n                        <td class=\"left\" [ngClass]=\"{'stiketodo': todo.completed === true }\">{{todo.title}}</td>\n                        <td>\n                            <input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"StatusChange(todo)\">\n                        </td>\n                        <td><clr-icon shape=\"trash\" size=\"20\" class=\"is-solid\" (click)=\"DeleteTodo(todo)\" style=\"cursor:pointer\"></clr-icon></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-9 col-lg-9 col-sm-12 col-xs-12\">\n            <form (ngSubmit)=\"CreateToDo()\" ngNativeValidate>\n                <section class=\"form-block\">\n                    <label>Create Todo</label>\n                    <div class=\"form-group\">\n                        <label class=\"required\">Todo Title</label>\n                        <label  aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation invalid tooltip-sm\">\n                            <input [ngModelOptions]=\"{standalone: true}\" type=\"text\" [(ngModel)]=\"TodoTitle\" required>\n                            <span class=\"tooltip-content\">\n                                This field cannot be empty!\n                            </span>\n                        </label>\n                    </div>\n                </section>\n                <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"TodoTitle=''\">Cancel</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/todos/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_icons__ = __webpack_require__("./node_modules/clarity-icons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clarity_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_icons_shapes_essential_shapes__ = __webpack_require__("./node_modules/clarity-icons/shapes/essential-shapes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_icons_shapes_essential_shapes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarity_icons_shapes_essential_shapes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_list_model__ = __webpack_require__("./src/app/todos/todo-list.model.ts");
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
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/todos/todo-list.component.html"),
            styles: [__webpack_require__("./src/app/todos/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/users/user-list.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://unpkg.com/clarity-ui/clarity-ui.min.css\");\n@import url(\"https://unpkg.com/clarity-icons/clarity-icons.min.css\");\n.margin-set{\n    margin-top:20px;\n    margin-bottom: 20px; \n}"

/***/ }),

/***/ "./src/app/users/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-set\">\n    <header class=\"header header-4\">\n        <div class=\"branding\">\n            <span class=\"title\">Users</span>\n        </div>\n    </header>\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let user of UsersList\">\n            <div class=\"card clickable\">\n                <div class=\"card-block\">\n                    <h4 class=\"card-title\">{{user.name}}</h4>\n                    <div class=\"card-media-block\">\n                        <div class=\"card-media-description\">\n                            <span class=\"card-media-title\">\n                                User Name: {{user.username}}\n                            </span>\n                            <span class=\"card-media-text\">\n                                Phone: {{user.phone}}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\">Email: {{user.email}}</li>\n                    <li class=\"list-group-item\">Website: {{user.website}}</li>\n                    <li class=\"list-group-item\">Company: {{user.company.name}}</li>\n                </ul>\n                <div class=\"card-block\">\n                    <h4 class=\"card-title\">Address</h4>\n                    <p class=\"card-text\">\n                        {{user.address.street}},\n                        <br>{{user.address.suite}},\n                        <br>{{user.address.city}},\n                        <br>{{user.address.zipcode}}\n                    </p>\n                </div>\n                <div class=\"card-footer\">\n                    <a [routerLink]=\"['/todo',user.id]\" class=\"btn btn-primary\">View Todos</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/users/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
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
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/users/user-list.component.html"),
            styles: [__webpack_require__("./src/app/users/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map