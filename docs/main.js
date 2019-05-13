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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n  <h1>\n    10 pin bowling scoresheet\n  </h1>\n\n  <button *ngIf=\"!hasGame\" (click)=\"newGame()\">new game</button>\n  <app-roll-amount\n    *ngIf=\"hasGame\"\n    [pins]=\"remainingPins\"\n    (onRoll)=\"onRoll($event)\"\n  ></app-roll-amount>\n  <app-scorecard *ngIf=\"frames\" [frames]=\"frames\"></app-scorecard>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  left: 50%;\n  width: 980px;\n  margin-left: -490px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0dXNyb21pam4vRG9jdW1lbnRzL2RldmVsb3BtZW50L2Jvd2xpbmctc2NvcmUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5ODBweDtcbiAgbWFyZ2luLWxlZnQ6IC00OTBweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.service */ "./src/app/score.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(scoreService) {
        this.scoreService = scoreService;
        this.title = 'The Bowling Score app';
        this.hasGame = false;
    }
    AppComponent.prototype.newGame = function () {
        this.scoreService.start();
        this.frames = this.scoreService.frames;
        this.remainingPins = this.scoreService.remainingPins();
        this.hasGame = this.scoreService.hasGame;
    };
    AppComponent.prototype.onRoll = function (pins) {
        this.scoreService.roll(pins);
        this.remainingPins = this.scoreService.remainingPins();
        this.hasGame = this.scoreService.hasGame;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _roll_amount_roll_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roll-amount/roll-amount.component */ "./src/app/roll-amount/roll-amount.component.ts");
/* harmony import */ var _scorecard_scorecard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scorecard/scorecard.component */ "./src/app/scorecard/scorecard.component.ts");
/* harmony import */ var _framecard_framecard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framecard/framecard.component */ "./src/app/framecard/framecard.component.ts");
/* harmony import */ var _final_framecard_final_framecard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./final-framecard/final-framecard.component */ "./src/app/final-framecard/final-framecard.component.ts");
/* harmony import */ var _roll_result_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roll-result.pipe */ "./src/app/roll-result.pipe.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _roll_amount_roll_amount_component__WEBPACK_IMPORTED_MODULE_4__["RollAmountComponent"],
                _scorecard_scorecard_component__WEBPACK_IMPORTED_MODULE_5__["ScorecardComponent"],
                _framecard_framecard_component__WEBPACK_IMPORTED_MODULE_6__["FramecardComponent"],
                _final_framecard_final_framecard_component__WEBPACK_IMPORTED_MODULE_7__["FinalFramecardComponent"],
                _roll_result_pipe__WEBPACK_IMPORTED_MODULE_8__["RollResultPipe"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/final-framecard/final-framecard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/final-framecard/final-framecard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"roll\">{{ frame.rolls[0] | rollResult }}</div>\n  <div class=\"roll\">{{ frame.rolls[1] | rollResult }}</div>\n  <div class=\"roll\">{{ frame.rolls[2] | rollResult }}</div>\n  <span class=\"score\"> {{ frame.score }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/final-framecard/final-framecard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/final-framecard/final-framecard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  color: #8af;\n  position: relative;\n  width: 60px;\n  height: 60px;\n  border: 1px solid white;\n  background-color: #333; }\n  .wrapper .roll {\n    position: absolute;\n    font-size: 0.6rem;\n    line-height: 20px;\n    text-align: center;\n    top: -1px;\n    height: 20px;\n    width: 20px;\n    border: 1px solid white;\n    right: -1px; }\n  .wrapper .roll:first-child {\n      right: 41px; }\n  .wrapper .roll:nth-child(2) {\n      right: 20px; }\n  .wrapper .score {\n    position: absolute;\n    top: 30px;\n    font-size: 1.1rem;\n    width: 100%;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0dXNyb21pam4vRG9jdW1lbnRzL2RldmVsb3BtZW50L2Jvd2xpbmctc2NvcmUvc3JjL2FwcC9maW5hbC1mcmFtZWNhcmQvZmluYWwtZnJhbWVjYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2p1c3R1c3JvbWlqbi9Eb2N1bWVudHMvZGV2ZWxvcG1lbnQvYm93bGluZy1zY29yZS9zcmMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0NFZ0I7RUREaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNCQ05zQixFQUFBO0VEQXhCO0lBU0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXLEVBQUE7RUFqQmY7TUFtQk0sV0FBVyxFQUFBO0VBbkJqQjtNQXNCTSxXQUFXLEVBQUE7RUF0QmpCO0lBMEJJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLWZyYW1lY2FyZC9maW5hbC1mcmFtZWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMnO1xuLndyYXBwZXIge1xuICBjb2xvcjogJGNvbG9yLWxpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1tZWRpdW07XG5cbiAgLnJvbGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAtMXB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICByaWdodDogLTFweDtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHJpZ2h0OiA0MXB4O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICByaWdodDogMjBweDtcbiAgICB9XG4gIH1cbiAgLnNjb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiJGJhY2tncm91bmQtZGFyazogIzAwMDtcbiRiYWNrZ3JvdW5kLW1lZGl1bTogIzMzMztcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNjY2O1xuXG4kY29sb3ItbGlnaHQ6ICM4YWY7XG4kY29sb3ItbWVkaXVtOiAjNDhkO1xuIl19 */"

/***/ }),

/***/ "./src/app/final-framecard/final-framecard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/final-framecard/final-framecard.component.ts ***!
  \**************************************************************/
/*! exports provided: FinalFramecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalFramecardComponent", function() { return FinalFramecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _frame_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame.model */ "./src/app/frame.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FinalFramecardComponent = /** @class */ (function () {
    function FinalFramecardComponent() {
    }
    FinalFramecardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _frame_model__WEBPACK_IMPORTED_MODULE_1__["Frame"])
    ], FinalFramecardComponent.prototype, "frame", void 0);
    FinalFramecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-final-framecard',
            template: __webpack_require__(/*! ./final-framecard.component.html */ "./src/app/final-framecard/final-framecard.component.html"),
            styles: [__webpack_require__(/*! ./final-framecard.component.scss */ "./src/app/final-framecard/final-framecard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinalFramecardComponent);
    return FinalFramecardComponent;
}());



/***/ }),

/***/ "./src/app/finalFrame.model.ts":
/*!*************************************!*\
  !*** ./src/app/finalFrame.model.ts ***!
  \*************************************/
/*! exports provided: FinalFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalFrame", function() { return FinalFrame; });
/* harmony import */ var _roll_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roll.model */ "./src/app/roll.model.ts");

var FinalFrame = /** @class */ (function () {
    function FinalFrame() {
        this.isClosed = false;
        this.bonus = 0;
        this.bonusRounds = 0;
        this.rolls = [];
    }
    FinalFrame.prototype.roll = function (pins) {
        switch (this.rolls.length) {
            case 0:
                // STRIKE or NORMAL
                this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](pins === 10 ? _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].STRIKE : _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL, pins));
                break;
            case 1:
                // SECOND STRIKE or NORMAL
                if (this.rolls[0].type === _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].STRIKE) {
                    this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](pins === 10 ? _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].STRIKE : _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL, pins));
                    // SPARE
                }
                else if (this.rolls[0].pins + pins === 10) {
                    this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](_roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].SPARE, pins));
                    // NORMAL, SO NO BONUS
                }
                else {
                    this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](_roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL, pins));
                    this.isClosed = true;
                }
                break;
            case 2:
                // BONUS ROUND BASED ON STRIKE IN FIRST ROLL
                // SO SPARE OR NORMAL
                if (this.rolls[1].type === _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL) {
                    this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](this.rolls[1].pins + pins === 10
                        ? _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].SPARE
                        : _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL, pins));
                    // BONUS BECAUSE SPARE OR 2 STRIKES, SO STRIKE OR NORMAL
                }
                else {
                    this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](pins === 10 ? _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].STRIKE : _roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL, pins));
                }
                this.isClosed = true;
                break;
            default:
                console.warn('invalid roll');
        }
    };
    Object.defineProperty(FinalFrame.prototype, "score", {
        get: function () {
            if (this.isClosed && typeof this.offset === 'number') {
                return this.rolls.reduce(function (prev, roll) { return prev + roll.pins; }, this.offset + this.bonus);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalFrame.prototype, "remainingPins", {
        get: function () {
            return this.rolls.reduce(function (prev, roll) { return prev - roll.pins || 10; }, 10);
        },
        enumerable: true,
        configurable: true
    });
    return FinalFrame;
}());



/***/ }),

/***/ "./src/app/frame.model.ts":
/*!********************************!*\
  !*** ./src/app/frame.model.ts ***!
  \********************************/
/*! exports provided: Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony import */ var _roll_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roll.model */ "./src/app/roll.model.ts");

var Frame = /** @class */ (function () {
    function Frame() {
        this.isClosed = false;
        this.bonusRounds = 0;
        this.bonus = 0;
        this.rolls = [];
    }
    Frame.prototype.roll = function (pins) {
        if (!this.rolls.length) {
            // STRIKE
            if (pins === 10) {
                this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](_roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].STRIKE, pins));
                this.isClosed = true;
                this.bonusRounds = 2;
                return;
            }
            // REGULAR PINFALL (FIRST ROLL)
            this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](_roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL, pins));
            return;
        }
        // SPARE
        if (this.rolls[0].pins + pins === 10) {
            this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](_roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].SPARE, pins));
            this.bonusRounds = 1;
            this.isClosed = true;
            return;
        }
        // REGULAR PINFALL (SECOND ROLL)
        this.rolls.push(new _roll_model__WEBPACK_IMPORTED_MODULE_0__["Roll"](_roll_model__WEBPACK_IMPORTED_MODULE_0__["RollType"].NORMAL, pins));
        this.isClosed = true;
        return;
    };
    Object.defineProperty(Frame.prototype, "score", {
        get: function () {
            if (this.isClosed && !this.bonusRounds && typeof this.offset === 'number') {
                return this.rolls.reduce(function (prev, roll) { return prev + roll.pins; }, this.offset + this.bonus);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "remainingPins", {
        get: function () {
            return this.rolls.reduce(function (prev, roll) { return prev - roll.pins; }, 10);
        },
        enumerable: true,
        configurable: true
    });
    return Frame;
}());



/***/ }),

/***/ "./src/app/framecard/framecard.component.html":
/*!****************************************************!*\
  !*** ./src/app/framecard/framecard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"roll\">\n    {{ frame.rolls[0] | rollResult }}\n  </div>\n  <div class=\"roll\">{{ frame.rolls[1] | rollResult }}</div>\n  <span class=\"score\"> {{ frame.score }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/framecard/framecard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/framecard/framecard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  border: 1px solid white;\n  background-color: #333;\n  color: #8af; }\n  .wrapper .roll {\n    position: absolute;\n    line-height: 20px;\n    font-size: 0.6rem;\n    text-align: center;\n    top: -1px;\n    height: 20px;\n    width: 20px;\n    border: 1px solid white;\n    right: -1px; }\n  .wrapper .roll:first-child {\n      right: 20px; }\n  .wrapper .score {\n    position: absolute;\n    top: 30px;\n    font-size: 1.1rem;\n    width: 100%;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0dXNyb21pam4vRG9jdW1lbnRzL2RldmVsb3BtZW50L2Jvd2xpbmctc2NvcmUvc3JjL2FwcC9mcmFtZWNhcmQvZnJhbWVjYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2p1c3R1c3JvbWlqbi9Eb2N1bWVudHMvZGV2ZWxvcG1lbnQvYm93bGluZy1zY29yZS9zcmMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNCQ05zQjtFRE90QixXQ0pnQixFQUFBO0VERmxCO0lBUUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXLEVBQUE7RUFoQmY7TUFrQk0sV0FBVyxFQUFBO0VBbEJqQjtJQXNCSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mcmFtZWNhcmQvZnJhbWVjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1tZWRpdW07XG4gIGNvbG9yOiAkY29sb3ItbGlnaHQ7XG4gIC5yb2xsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogLTFweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICByaWdodDogMjBweDtcbiAgICB9XG4gIH1cbiAgLnNjb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiJGJhY2tncm91bmQtZGFyazogIzAwMDtcbiRiYWNrZ3JvdW5kLW1lZGl1bTogIzMzMztcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNjY2O1xuXG4kY29sb3ItbGlnaHQ6ICM4YWY7XG4kY29sb3ItbWVkaXVtOiAjNDhkO1xuIl19 */"

/***/ }),

/***/ "./src/app/framecard/framecard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framecard/framecard.component.ts ***!
  \**************************************************/
/*! exports provided: FramecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramecardComponent", function() { return FramecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _frame_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame.model */ "./src/app/frame.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FramecardComponent = /** @class */ (function () {
    function FramecardComponent() {
    }
    FramecardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _frame_model__WEBPACK_IMPORTED_MODULE_1__["Frame"])
    ], FramecardComponent.prototype, "frame", void 0);
    FramecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-framecard',
            template: __webpack_require__(/*! ./framecard.component.html */ "./src/app/framecard/framecard.component.html"),
            styles: [__webpack_require__(/*! ./framecard.component.scss */ "./src/app/framecard/framecard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FramecardComponent);
    return FramecardComponent;
}());



/***/ }),

/***/ "./src/app/roll-amount/roll-amount.component.html":
/*!********************************************************!*\
  !*** ./src/app/roll-amount/roll-amount.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\">\n  <h2>Pins this roll</h2>\n  <button\n    *ngFor=\"let item of Arr(pins + 1).fill(1); let i = index\"\n    (click)=\"roll(i)\"\n  >\n    {{ i }}\n  </button>\n</section>\n"

/***/ }),

/***/ "./src/app/roll-amount/roll-amount.component.scss":
/*!********************************************************!*\
  !*** ./src/app/roll-amount/roll-amount.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0 5px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0dXNyb21pam4vRG9jdW1lbnRzL2RldmVsb3BtZW50L2Jvd2xpbmctc2NvcmUvc3JjL2FwcC9yb2xsLWFtb3VudC9yb2xsLWFtb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcm9sbC1hbW91bnQvcm9sbC1hbW91bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW46IDAgNXB4IDAgMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/roll-amount/roll-amount.component.ts":
/*!******************************************************!*\
  !*** ./src/app/roll-amount/roll-amount.component.ts ***!
  \******************************************************/
/*! exports provided: RollAmountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollAmountComponent", function() { return RollAmountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RollAmountComponent = /** @class */ (function () {
    function RollAmountComponent() {
        this.Arr = Array;
        this.onRoll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RollAmountComponent.prototype.ngOnInit = function () { };
    RollAmountComponent.prototype.roll = function (pins) {
        this.onRoll.emit(pins);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RollAmountComponent.prototype, "pins", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RollAmountComponent.prototype, "onRoll", void 0);
    RollAmountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roll-amount',
            template: __webpack_require__(/*! ./roll-amount.component.html */ "./src/app/roll-amount/roll-amount.component.html"),
            styles: [__webpack_require__(/*! ./roll-amount.component.scss */ "./src/app/roll-amount/roll-amount.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RollAmountComponent);
    return RollAmountComponent;
}());



/***/ }),

/***/ "./src/app/roll-result.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/roll-result.pipe.ts ***!
  \*************************************/
/*! exports provided: RollResultPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollResultPipe", function() { return RollResultPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _roll_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roll.model */ "./src/app/roll.model.ts");



var RollResultPipe = /** @class */ (function () {
    function RollResultPipe() {
    }
    RollResultPipe.prototype.transform = function (value) {
        if (value) {
            switch (value.type) {
                case _roll_model__WEBPACK_IMPORTED_MODULE_2__["RollType"].STRIKE:
                    return 'X';
                case _roll_model__WEBPACK_IMPORTED_MODULE_2__["RollType"].SPARE:
                    return '/';
                default:
                    return '' + value.pins;
            }
        }
        return '';
    };
    RollResultPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'rollResult'
        })
    ], RollResultPipe);
    return RollResultPipe;
}());



/***/ }),

/***/ "./src/app/roll.model.ts":
/*!*******************************!*\
  !*** ./src/app/roll.model.ts ***!
  \*******************************/
/*! exports provided: RollType, Roll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollType", function() { return RollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roll", function() { return Roll; });
var RollType;
(function (RollType) {
    RollType["STRIKE"] = "STRIKE";
    RollType["SPARE"] = "SPARE";
    RollType["NORMAL"] = "NORMAL";
})(RollType || (RollType = {}));
var Roll = /** @class */ (function () {
    function Roll(type, pins) {
        this.type = type;
        this.pins = pins;
    }
    return Roll;
}());



/***/ }),

/***/ "./src/app/score.service.ts":
/*!**********************************!*\
  !*** ./src/app/score.service.ts ***!
  \**********************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frame_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame.model */ "./src/app/frame.model.ts");
/* harmony import */ var _finalFrame_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finalFrame.model */ "./src/app/finalFrame.model.ts");




// gameFrames.push(new FinalFrame());
var ScoreService = /** @class */ (function () {
    function ScoreService() {
        this.hasGame = false;
    }
    ScoreService.prototype.start = function () {
        this.hasGame = true;
        this.frames = [];
        for (var i = 0; i < 9; i++) {
            this.frames.push(new _frame_model__WEBPACK_IMPORTED_MODULE_2__["Frame"]());
        }
        this.frames.push(new _finalFrame_model__WEBPACK_IMPORTED_MODULE_3__["FinalFrame"]());
        this.currentFrame = 0;
    };
    ScoreService.prototype.roll = function (pins) {
        var frame = this.frames[this.currentFrame];
        if (!frame) {
            return;
        }
        this.applyBonuses(pins);
        frame.roll(pins);
        this.calculateFrameScores();
        if (frame.isClosed) {
            this.currentFrame++;
        }
        if (this.frames.every(function (_a) {
            var isClosed = _a.isClosed;
            return isClosed;
        })) {
            this.hasGame = false;
        }
    };
    ScoreService.prototype.applyBonuses = function (pins) {
        this.frames
            .filter(function (_a) {
            var bonusRounds = _a.bonusRounds;
            return bonusRounds;
        })
            .forEach(function (frame) {
            frame.bonus += pins;
            frame.bonusRounds--;
        });
    };
    ScoreService.prototype.calculateFrameScores = function () {
        this.frames.reduce(function (prev, curr) {
            if (!prev) {
                curr.offset = 0;
                return curr;
            }
            if (prev.score) {
                curr.offset = prev.score;
            }
            return curr;
        }, undefined);
    };
    ScoreService.prototype.remainingPins = function () {
        return (this.frames[this.currentFrame] &&
            this.frames[this.currentFrame].remainingPins);
    };
    ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScoreService);
    return ScoreService;
}());



/***/ }),

/***/ "./src/app/scorecard/scorecard.component.html":
/*!****************************************************!*\
  !*** ./src/app/scorecard/scorecard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h2>Scorecard</h2>\n  <div class=\"scorecard\">\n    <div *ngFor=\"let frame of frames; let i = index\">\n      <app-framecard *ngIf=\"i < 9\" [frame]=\"frame\"></app-framecard>\n    </div>\n\n    <app-final-framecard [frame]=\"finalFrame\"></app-final-framecard>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/scorecard/scorecard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/scorecard/scorecard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper .scorecard {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0dXNyb21pam4vRG9jdW1lbnRzL2RldmVsb3BtZW50L2Jvd2xpbmctc2NvcmUvc3JjL2FwcC9zY29yZWNhcmQvc2NvcmVjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2NvcmVjYXJkL3Njb3JlY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgLnNjb3JlY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/scorecard/scorecard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/scorecard/scorecard.component.ts ***!
  \**************************************************/
/*! exports provided: ScorecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorecardComponent", function() { return ScorecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScorecardComponent = /** @class */ (function () {
    function ScorecardComponent() {
    }
    ScorecardComponent.prototype.ngOnInit = function () { };
    ScorecardComponent.prototype.ngOnChanges = function () {
        this.finalFrame = this.frames[this.frames.length - 1];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ScorecardComponent.prototype, "frames", void 0);
    ScorecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scorecard',
            template: __webpack_require__(/*! ./scorecard.component.html */ "./src/app/scorecard/scorecard.component.html"),
            styles: [__webpack_require__(/*! ./scorecard.component.scss */ "./src/app/scorecard/scorecard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScorecardComponent);
    return ScorecardComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/justusromijn/Documents/development/bowling-score/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map