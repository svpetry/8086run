/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js?name=js/[name].js!./src/emulator-worker.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js?name=js/[name].js!./src/emulator-worker.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "js/emulator-worker.js");
};

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js?name=js/[name].js!./src/screen-worker.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js?name=js/[name].js!./src/screen-worker.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "js/screen-worker.js");
};

/***/ }),

/***/ "./src/E86Lib/CPU/cpuUtils.ts":
/*!************************************!*\
  !*** ./src/E86Lib/CPU/cpuUtils.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuError = exports.CpuExCode = exports.CpuReg = exports.Access = exports.CpuMode = exports.Repeat = exports.Direction = exports.CpuType = void 0;
var CpuType;
(function (CpuType) {
    CpuType[CpuType["Cpu186"] = 0] = "Cpu186";
    CpuType[CpuType["Cpu386"] = 1] = "Cpu386";
})(CpuType = exports.CpuType || (exports.CpuType = {}));
var Direction;
(function (Direction) {
    Direction[Direction["RegToRm"] = 0] = "RegToRm";
    Direction[Direction["RmToReg"] = 1] = "RmToReg";
})(Direction = exports.Direction || (exports.Direction = {}));
var Repeat;
(function (Repeat) {
    Repeat[Repeat["None"] = 0] = "None";
    Repeat[Repeat["RepZ"] = 1] = "RepZ";
    Repeat[Repeat["RepNz"] = 2] = "RepNz";
})(Repeat = exports.Repeat || (exports.Repeat = {}));
var CpuMode;
(function (CpuMode) {
    CpuMode[CpuMode["Real"] = 0] = "Real";
    CpuMode[CpuMode["Protected"] = 1] = "Protected";
    CpuMode[CpuMode["Virtual8086"] = 2] = "Virtual8086";
})(CpuMode = exports.CpuMode || (exports.CpuMode = {}));
var Access;
(function (Access) {
    Access[Access["Read"] = 0] = "Read";
    Access[Access["Write"] = 1] = "Write";
})(Access = exports.Access || (exports.Access = {}));
class CpuReg {
    getLoWord() {
        return this.value & 0xFFFF;
    }
    setLoWord(value) {
        this.value = (this.value & 0xFFFF0000) + (value & 0xFFFF);
    }
    getLoByte() {
        return this.value & 0xFF;
    }
    setLoByte(value) {
        this.value = (this.value & 0xFFFFFF00) + (value & 0xFF);
    }
    getHiByte() {
        return (this.value >> 8) & 0xFF;
    }
    setHiByte(value) {
        this.value = (this.value & 0xFFFF00FF) + ((value & 0xFF) << 8);
    }
}
exports.CpuReg = CpuReg;
var CpuExCode;
(function (CpuExCode) {
    CpuExCode[CpuExCode["DE"] = 0] = "DE";
    CpuExCode[CpuExCode["DB"] = 1] = "DB";
    CpuExCode[CpuExCode["BP"] = 3] = "BP";
    CpuExCode[CpuExCode["OF"] = 4] = "OF";
    CpuExCode[CpuExCode["BR"] = 5] = "BR";
    CpuExCode[CpuExCode["UD"] = 6] = "UD";
    CpuExCode[CpuExCode["NM"] = 7] = "NM";
    CpuExCode[CpuExCode["DF"] = 8] = "DF";
    CpuExCode[CpuExCode["TS"] = 10] = "TS";
    CpuExCode[CpuExCode["NP"] = 11] = "NP";
    CpuExCode[CpuExCode["SS"] = 12] = "SS";
    CpuExCode[CpuExCode["GP"] = 13] = "GP";
    CpuExCode[CpuExCode["PF"] = 14] = "PF";
    CpuExCode[CpuExCode["MF"] = 16] = "MF";
    CpuExCode[CpuExCode["AC"] = 17] = "AC";
    CpuExCode[CpuExCode["MC"] = 18] = "MC";
    CpuExCode[CpuExCode["XF"] = 19] = "XF";
    CpuExCode[CpuExCode["VE"] = 20] = "VE";
    CpuExCode[CpuExCode["SX"] = 30] = "SX";
})(CpuExCode = exports.CpuExCode || (exports.CpuExCode = {}));
class CpuError {
    constructor(exCode, errorCode = null) {
        this.exCode = exCode;
        this.errorCode = errorCode;
    }
}
exports.CpuError = CpuError;


/***/ }),

/***/ "./src/E86Lib/settings.ts":
/*!********************************!*\
  !*** ./src/E86Lib/settings.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.ComDevice = exports.GraphicsType = void 0;
const cpuUtils_1 = __webpack_require__(/*! ./CPU/cpuUtils */ "./src/E86Lib/CPU/cpuUtils.ts");
var GraphicsType;
(function (GraphicsType) {
    GraphicsType[GraphicsType["MDA"] = 0] = "MDA";
    GraphicsType[GraphicsType["Hercules"] = 1] = "Hercules";
    GraphicsType[GraphicsType["CGA"] = 2] = "CGA";
    GraphicsType[GraphicsType["EGA"] = 3] = "EGA";
    GraphicsType[GraphicsType["VGA"] = 4] = "VGA";
})(GraphicsType = exports.GraphicsType || (exports.GraphicsType = {}));
var ComDevice;
(function (ComDevice) {
    ComDevice[ComDevice["None"] = 0] = "None";
    ComDevice[ComDevice["NotConnected"] = 1] = "NotConnected";
    ComDevice[ComDevice["EmulatedMouse"] = 2] = "EmulatedMouse";
})(ComDevice = exports.ComDevice || (exports.ComDevice = {}));
class Settings {
    static get monochromeGraphics() {
        return this.graphicsAdapterType == GraphicsType.MDA || this.graphicsAdapterType == GraphicsType.Hercules;
    }
}
exports.Settings = Settings;
Settings.cpuType = cpuUtils_1.CpuType.Cpu186;
Settings.cpuFrequency = 4770;
Settings.ramAmount = 640;
Settings.floppyCount = 2;
Settings.graphicsAdapterType = GraphicsType.CGA;
Settings.enableHdController = true;
Settings.enableUma = true;
Settings.enableRtc = true;
Settings.com1Device = ComDevice.EmulatedMouse;
Settings.com1PortName = "";
Settings.com2Device = ComDevice.None;
Settings.com2PortName = "";
Settings.hdImageDir = "HdImages/";
Settings.baseDir = "";
Settings.noScreenUpdateWhileRetrace = true;


/***/ }),

/***/ "./src/disk-images.ts":
/*!****************************!*\
  !*** ./src/disk-images.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskImages = void 0;
const state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
class DiskImages {
    constructor(emuWorker) {
        this.driveLetters = ["a", "b"];
        this.driveFileElement = new Array(2);
        this.driveImageName = new Array(2);
        this.buffer = new Array(2);
        this.emuWorker = emuWorker;
        this.initDrive(0);
        this.initDrive(1);
    }
    initDrive(driveNo) {
        const letter = this.driveLetters[driveNo];
        this.driveFileElement[driveNo] = document.getElementById(`drive${letter}-file`);
        this.driveImageName[driveNo] = document.getElementById(`drive${letter}-image`);
        document.getElementById(`drive${letter}-button`).addEventListener("click", (ev) => {
            this.driveFileElement[driveNo].click();
            ev.preventDefault();
        });
        this.driveFileElement[driveNo].onchange = async () => {
            const file = this.driveFileElement[driveNo].files[0];
            if (file) {
                this.buffer[driveNo] = await file.arrayBuffer();
                this.driveImageName[driveNo].innerHTML = file.name;
                await this.transferImagesToEmulator();
            }
        };
    }
    async transferImagesToEmulator() {
        if (state_1.State.running && state_1.State.initialized) {
            this.transferImageToEmulator(0);
            this.transferImageToEmulator(1);
        }
    }
    transferImageToEmulator(driveNo) {
        if (this.buffer[driveNo]) {
            this.emuWorker.postMessage(["loadimage", driveNo, this.buffer[driveNo]], [this.buffer[driveNo]]);
            this.buffer[driveNo] = null;
        }
    }
}
exports.DiskImages = DiskImages;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const settings_1 = __webpack_require__(/*! ./settings */ "./src/settings.ts");
const start_parameters_1 = __webpack_require__(/*! ./start-parameters */ "./src/start-parameters.ts");
const screen_1 = __webpack_require__(/*! ./screen */ "./src/screen.ts");
const disk_images_1 = __webpack_require__(/*! ./disk-images */ "./src/disk-images.ts");
const mouse_input_1 = __webpack_require__(/*! ./mouse-input */ "./src/mouse-input.ts");
const EmuWorker = __webpack_require__(/*! worker-loader?name=js/[name].js!./emulator-worker */ "./node_modules/worker-loader/dist/cjs.js?name=js/[name].js!./src/emulator-worker.ts");
const ScreenWorker = __webpack_require__(/*! worker-loader?name=js/[name].js!./screen-worker */ "./node_modules/worker-loader/dist/cjs.js?name=js/[name].js!./src/screen-worker.ts");
class Emulator {
    constructor() {
        this.screenHelper = new screen_1.ScreenHelperAsync(state_1.State.screenUpdateRate);
        this.emuWorker = new EmuWorker();
        this.screenWorker = new ScreenWorker();
        this.workerChannel = new MessageChannel();
        this.diskImages = new disk_images_1.DiskImages(this.emuWorker);
        this.settings = new settings_1.Settings();
        this.screenHelper.worker = this.emuWorker;
        this.runButton = document.getElementById("run-button");
        this.emuWorker.onmessage = (ev) => {
            const action = ev.data[0];
            switch (action) {
                case "initialized":
                    this.workerInitialized();
                    break;
                case "stopped":
                    state_1.State.running = false;
                    this.runButton.style.border = "1px solid white";
                    break;
            }
        };
        this.screenWorker.onmessage = (ev) => {
            const action = ev.data[0];
            switch (action) {
                case "initialized":
                    this.workerInitialized();
                    break;
                case "screenupdated":
                    {
                        const screenData = new screen_1.AsyncScreenData();
                        screenData.dim = ev.data[1];
                        screenData.buffer = ev.data[2];
                        if (screenData.dim.width > 0 && screenData.dim.height > 0)
                            this.screenHelper.screenData = screenData;
                    }
                    break;
            }
        };
        this.settings.initStartParams();
        this.runButton.addEventListener("click", () => this.run());
        document.getElementById("stop-button").addEventListener("click", () => this.stop());
        document.getElementById("reset-button").addEventListener("click", () => this.reset());
        document.addEventListener("keydown", (ev) => {
            if (ev.repeat)
                return;
            this.emuWorker.postMessage(["sendkey", utils_1.Utils.getScanCode(ev.code, utils_1.KeyAction.Press)]);
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        });
        document.addEventListener("keyup", (ev) => {
            this.emuWorker.postMessage(["sendkey", utils_1.Utils.getScanCode(ev.code, utils_1.KeyAction.Release)]);
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        });
    }
    workerInitialized() {
        state_1.State.initializedWorkerCount++;
        if (state_1.State.initializedWorkerCount < 2)
            return;
        window.requestAnimationFrame(() => this.screenHelper.animationFrame());
        state_1.State.initialized = true;
        this.diskImages.transferImagesToEmulator();
        mouse_input_1.MouseInput.initialize(this.emuWorker);
    }
    initialize() {
        const startParameters = new start_parameters_1.StartParameters();
        startParameters.screenUpdateRate = state_1.State.screenUpdateRate;
        this.settings.readStartParams(startParameters);
        this.settings.writeStartParamsToCookie(startParameters);
        document.getElementById("settings").style.visibility = "hidden";
        this.screenWorker.postMessage(["initialize", this.workerChannel.port2], [this.workerChannel.port2]);
        this.emuWorker.postMessage(["initialize", startParameters, this.workerChannel.port1], [this.workerChannel.port1]);
    }
    async run() {
        if (state_1.State.running)
            return;
        state_1.State.running = true;
        this.runButton.style.border = "1px solid #FF3333";
        if (!state_1.State.initialized) {
            this.initialize();
            while (!state_1.State.initialized)
                await utils_1.Utils.delay(20);
        }
        this.emuWorker.postMessage(["run"]);
    }
    stop() {
        if (!state_1.State.running)
            return;
        this.emuWorker.postMessage(["stop"]);
        return;
    }
    async reset() {
        this.emuWorker.postMessage(["reset"]);
    }
}
new Emulator();


/***/ }),

/***/ "./src/mouse-input.ts":
/*!****************************!*\
  !*** ./src/mouse-input.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseInput = void 0;
class MouseInput {
    static initialize(worker) {
        const element = document.getElementById("screen-border");
        element.addEventListener("mouseenter", (ev) => {
            worker.postMessage(["mousereset"]);
        });
        element.addEventListener("mousemove", (ev) => {
            const position = { x: ev.offsetX, y: ev.offsetY };
            worker.postMessage(["mouseevent", position, this.leftButton, this.rightButton]);
        });
        element.addEventListener("mousedown", (ev) => {
            const position = { x: ev.offsetX, y: ev.offsetY };
            switch (ev.button) {
                case 0:
                    this.leftButton = true;
                    break;
                case 1:
                    this.rightButton = true;
                    break;
            }
            worker.postMessage(["mouseevent", position, this.leftButton, this.rightButton]);
        });
        element.addEventListener("mouseup", (ev) => {
            const position = { x: ev.offsetX, y: ev.offsetY };
            switch (ev.button) {
                case 0:
                    this.leftButton = false;
                    break;
                case 1:
                    this.rightButton = false;
                    break;
            }
            worker.postMessage(["mouseevent", position, this.leftButton, this.rightButton]);
        });
    }
}
exports.MouseInput = MouseInput;
MouseInput.leftButton = false;
MouseInput.rightButton = false;


/***/ }),

/***/ "./src/screen.ts":
/*!***********************!*\
  !*** ./src/screen.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHelperAsync = exports.AsyncScreenData = exports.ScreenHelperSync = exports.Dimensions = void 0;
class Dimensions {
    constructor() {
        this.width = 0;
        this.height = 0;
    }
}
exports.Dimensions = Dimensions;
class ScreenHelper {
    constructor(screenUpdateRate) {
        this.frameCount = 0;
        this.screenContainer = document.getElementById("screen-container");
        this.screen = document.getElementById("screen");
        this.updateFrame = 60 / screenUpdateRate;
    }
    updateCanvasIfNeeded(dim) {
        if ((!this.canvas || this.canvas.width != dim.width || this.canvas.height != dim.height) && dim.width != 0 && dim.height != 0) {
            const scaleX = this.screenContainer.clientWidth / dim.width;
            const scaleY = this.screenContainer.clientHeight / dim.height;
            this.screen.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
            this.screen.innerHTML = "";
            this.canvas = document.createElement("canvas");
            this.canvas.width = dim.width;
            this.canvas.height = dim.height;
            this.screen.appendChild(this.canvas);
            this.renderingContext = this.canvas.getContext("2d");
            this.imagedata = this.renderingContext.createImageData(dim.width, dim.height);
        }
    }
}
class ScreenHelperSync extends ScreenHelper {
    constructor(emulator) {
        super(emulator.screenUpdateRate);
        this.emulator = emulator;
    }
    animationFrame() {
        if (this.frameCount == 0) {
            this.emulator.updateGraphicDimensions();
            const dim = {
                width: this.emulator.getScreenWidth(),
                height: this.emulator.getScreenHeight()
            };
            this.updateCanvasIfNeeded(dim);
            if (this.renderingContext) {
                this.emulator.updateScreen(this.imagedata.data, this.imagedata.width);
                this.renderingContext.putImageData(this.imagedata, 0, 0);
            }
        }
        if (++this.frameCount >= this.updateFrame)
            this.frameCount = 0;
        window.requestAnimationFrame(() => this.animationFrame());
        return;
    }
}
exports.ScreenHelperSync = ScreenHelperSync;
class AsyncScreenData {
}
exports.AsyncScreenData = AsyncScreenData;
class ScreenHelperAsync extends ScreenHelper {
    constructor(screenUpdateRate) {
        super(screenUpdateRate);
        this.updateFrame = 60 / screenUpdateRate;
    }
    animationFrame() {
        if (this.screenData) {
            this.updateCanvasIfNeeded(this.screenData.dim);
            if (this.renderingContext) {
                this.imagedata.data.set(new Uint8ClampedArray(this.screenData.buffer), 0);
                this.renderingContext.putImageData(this.imagedata, 0, 0);
                this.screenData = null;
            }
        }
        if (this.frameCount == 0)
            this.worker.postMessage(["updatescreen"]);
        if (++this.frameCount >= this.updateFrame)
            this.frameCount = 0;
        window.requestAnimationFrame(() => this.animationFrame());
        return;
    }
}
exports.ScreenHelperAsync = ScreenHelperAsync;


/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
const Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
const settings_1 = __webpack_require__(/*! ./E86Lib/settings */ "./src/E86Lib/settings.ts");
const cpuUtils_1 = __webpack_require__(/*! ./E86Lib/CPU/cpuUtils */ "./src/E86Lib/CPU/cpuUtils.ts");
class Settings {
    constructor() {
        this.biosImageElement = document.getElementById("bios-image");
        this.cpuTypeElement = document.getElementById("cpu-type");
        this.cpuFrequencyElement = document.getElementById("cpu-frequency");
        this.ramAmountElement = document.getElementById("ram-amount");
        this.enableUmaElement = document.getElementById("enable-uma");
        this.graphicsElement = document.getElementById("graphics");
        this.com1Element = document.getElementById("com1");
        this.com2Element = document.getElementById("com2");
        this.enableRtcElement = document.getElementById("enable-rtc");
        this.enableHdControllerElement = document.getElementById("enable-hdcontroller");
    }
    fillBiosFiles(defaultFile) {
        const req = new XMLHttpRequest();
        req.responseType = "text";
        req.open("GET", "Roms/BIOS/biosfiles.txt", true);
        req.onload = () => {
            if (req.status == 200) {
                const lines = req.response.split(/\r?\n/);
                for (let line of lines) {
                    line = line.trim();
                    if (line.length > 0) {
                        const isDefault = line.startsWith("*");
                        if (isDefault)
                            line = line.substr(1);
                        const optionElement = document.createElement("option");
                        optionElement.value = line;
                        optionElement.innerHTML = line.split(".")[0];
                        if (isDefault && !defaultFile || line == defaultFile)
                            optionElement.defaultSelected = true;
                        this.biosImageElement.appendChild(optionElement);
                    }
                }
            }
        };
        req.send();
    }
    readStartParams(startParameters) {
        switch (this.cpuTypeElement.value) {
            case "Cpu186":
                startParameters.cpuType = cpuUtils_1.CpuType.Cpu186;
                break;
            case "Cpu386":
                startParameters.cpuType = cpuUtils_1.CpuType.Cpu386;
                break;
        }
        startParameters.cpuFrequency = parseInt(this.cpuFrequencyElement.value);
        startParameters.ramAmount = parseInt(this.ramAmountElement.value);
        startParameters.enableUma = this.enableUmaElement.checked;
        switch (this.graphicsElement.value) {
            case "MDA":
                startParameters.graphicsAdapterType = settings_1.GraphicsType.MDA;
                break;
            case "CGA":
                startParameters.graphicsAdapterType = settings_1.GraphicsType.CGA;
                break;
            case "EGA":
                startParameters.graphicsAdapterType = settings_1.GraphicsType.EGA;
                break;
            case "VGA":
                startParameters.graphicsAdapterType = settings_1.GraphicsType.VGA;
                break;
        }
        switch (this.com1Element.value) {
            case "None":
                startParameters.com1Device = settings_1.ComDevice.None;
                break;
            case "NotConnected":
                startParameters.com1Device = settings_1.ComDevice.NotConnected;
                break;
            case "EmulatedMouse":
                startParameters.com1Device = settings_1.ComDevice.EmulatedMouse;
                break;
        }
        switch (this.com2Element.value) {
            case "None":
                startParameters.com2Device = settings_1.ComDevice.None;
                break;
            case "NotConnected":
                startParameters.com2Device = settings_1.ComDevice.NotConnected;
                break;
            case "EmulatedMouse":
                startParameters.com2Device = settings_1.ComDevice.EmulatedMouse;
                break;
        }
        startParameters.enableRtc = this.enableRtcElement.checked;
        startParameters.enableHdController = this.enableHdControllerElement.checked;
        startParameters.biosImage = this.biosImageElement.value;
    }
    writeStartParamsToCookie(startParams) {
        Cookies.set("settings", encodeURI(JSON.stringify(startParams)), { expires: 365 });
    }
    initStartParams() {
        const str = Cookies.get("settings");
        if (str) {
            const startParams = JSON.parse(decodeURI(str));
            this.cpuTypeElement.value = cpuUtils_1.CpuType[startParams.cpuType];
            this.cpuFrequencyElement.value = startParams.cpuFrequency.toString();
            this.ramAmountElement.value = startParams.ramAmount.toString();
            this.enableUmaElement.checked = startParams.enableUma;
            this.graphicsElement.value = settings_1.GraphicsType[startParams.graphicsAdapterType];
            this.com1Element.value = settings_1.ComDevice[startParams.com1Device];
            this.com2Element.value = settings_1.ComDevice[startParams.com2Device];
            this.enableRtcElement.checked = startParams.enableRtc;
            this.enableHdControllerElement.checked = startParams.enableHdController;
            this.fillBiosFiles(startParams.biosImage);
        }
        else
            this.fillBiosFiles();
    }
}
exports.Settings = Settings;


/***/ }),

/***/ "./src/start-parameters.ts":
/*!*********************************!*\
  !*** ./src/start-parameters.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartParameters = void 0;
class StartParameters {
}
exports.StartParameters = StartParameters;


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
class State {
}
exports.State = State;
State.screenUpdateRate = 20;
State.initializedWorkerCount = 0;
State.initialized = false;
State.running = false;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = exports.KeyAction = void 0;
var KeyAction;
(function (KeyAction) {
    KeyAction[KeyAction["Press"] = 0] = "Press";
    KeyAction[KeyAction["Release"] = 1] = "Release";
})(KeyAction = exports.KeyAction || (exports.KeyAction = {}));
class Utils {
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    static download(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    static getScanCode(key, keyAction) {
        let scanCode = 0;
        switch (key) {
            case "Escape":
                scanCode = 0x01;
                break;
            case "Digit1":
                scanCode = 0x02;
                break;
            case "Digit2":
                scanCode = 0x03;
                break;
            case "Digit3":
                scanCode = 0x04;
                break;
            case "Digit4":
                scanCode = 0x05;
                break;
            case "Digit5":
                scanCode = 0x06;
                break;
            case "Digit6":
                scanCode = 0x07;
                break;
            case "Digit7":
                scanCode = 0x08;
                break;
            case "Digit8":
                scanCode = 0x09;
                break;
            case "Digit9":
                scanCode = 0x0A;
                break;
            case "Digit0":
                scanCode = 0x0B;
                break;
            case "Minus":
                scanCode = 0x0C;
                break;
            case "Equal":
                scanCode = 0x0D;
                break;
            case "Backspace":
                scanCode = 0x0E;
                break;
            case "Tab":
                scanCode = 0x0F;
                break;
            case "KeyQ":
                scanCode = 0x10;
                break;
            case "KeyW":
                scanCode = 0x11;
                break;
            case "KeyE":
                scanCode = 0x12;
                break;
            case "KeyR":
                scanCode = 0x13;
                break;
            case "KeyT":
                scanCode = 0x14;
                break;
            case "KeyY":
                scanCode = 0x15;
                break;
            case "KeyU":
                scanCode = 0x16;
                break;
            case "KeyI":
                scanCode = 0x17;
                break;
            case "KeyO":
                scanCode = 0x18;
                break;
            case "KeyP":
                scanCode = 0x19;
                break;
            case "BracketLeft":
                scanCode = 0x1A;
                break;
            case "BracketRight":
                scanCode = 0x1B;
                break;
            case "Enter":
                scanCode = 0x1C;
                break;
            case "ControlRight":
            case "ControlLeft":
                scanCode = 0x1D;
                break;
            case "KeyA":
                scanCode = 0x1E;
                break;
            case "KeyS":
                scanCode = 0x1F;
                break;
            case "KeyD":
                scanCode = 0x20;
                break;
            case "KeyF":
                scanCode = 0x21;
                break;
            case "KeyG":
                scanCode = 0x22;
                break;
            case "KeyH":
                scanCode = 0x23;
                break;
            case "KeyJ":
                scanCode = 0x24;
                break;
            case "KeyK":
                scanCode = 0x25;
                break;
            case "KeyL":
                scanCode = 0x26;
                break;
            case "Semicolon":
                scanCode = 0x27;
                break;
            case "Quote":
                scanCode = 0x28;
                break;
            case "Backslash":
                scanCode = 0x29;
                break;
            case "ShiftLeft":
                scanCode = 0x2A;
                break;
            case "IntlBackslash":
                scanCode = 0x2B;
                break;
            case "KeyZ":
                scanCode = 0x2C;
                break;
            case "KeyX":
                scanCode = 0x2D;
                break;
            case "KeyC":
                scanCode = 0x2E;
                break;
            case "KeyV":
                scanCode = 0x2F;
                break;
            case "KeyB":
                scanCode = 0x30;
                break;
            case "KeyN":
                scanCode = 0x31;
                break;
            case "KeyM":
                scanCode = 0x32;
                break;
            case "Comma":
                scanCode = 0x33;
                break;
            case "Period":
                scanCode = 0x34;
                break;
            case "Slash":
                scanCode = 0x35;
                break;
            case "ShiftRight":
                scanCode = 0x36;
                break;
            case "AltRight":
            case "AltLeft":
                scanCode = 0x38;
                break;
            case "Space":
                scanCode = 0x39;
                break;
            case "CapsLock":
                scanCode = 0x3A;
                break;
            case "F1":
                scanCode = 0x3B;
                break;
            case "F2":
                scanCode = 0x3C;
                break;
            case "F3":
                scanCode = 0x3D;
                break;
            case "F4":
                scanCode = 0x3E;
                break;
            case "F5":
                scanCode = 0x3F;
                break;
            case "F6":
                scanCode = 0x40;
                break;
            case "F7":
                scanCode = 0x41;
                break;
            case "F8":
                scanCode = 0x42;
                break;
            case "F9":
                scanCode = 0x43;
                break;
            case "F10":
                scanCode = 0x44;
                break;
            case "NumLock":
                scanCode = 0x45;
                break;
            case "PageUp":
                scanCode = 0x49;
                break;
            case "PageDown":
                scanCode = 0x51;
                break;
            case "ArrowLeft":
                scanCode = 0x4B;
                break;
            case "ArrowRight":
                scanCode = 0x4D;
                break;
            case "ArrowUp":
                scanCode = 0x48;
                break;
            case "ArrowDown":
                scanCode = 0x50;
                break;
            case "Home":
                scanCode = 0x47;
                break;
            case "End":
                scanCode = 0x4F;
                break;
            case "Delete":
                scanCode = 0x53;
                break;
            case "Insert":
                scanCode = 0x52;
                break;
        }
        if (keyAction == KeyAction.Release && scanCode != 0)
            scanCode += 128;
        return scanCode;
    }
}
exports.Utils = Utils;


/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map