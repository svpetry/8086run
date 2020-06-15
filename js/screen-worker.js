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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/awesome-typescript-loader/dist/entry.js!./src/screen-worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/awesome-typescript-loader/dist/entry.js!./src/screen-worker.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/awesome-typescript-loader/dist/entry.js!./src/screen-worker.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const screen_worker_impl_1 = __webpack_require__(/*! ./screen-worker-impl */ "./src/screen-worker-impl.ts");
const context = self;
new screen_worker_impl_1.ScreenWorker(context);


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

/***/ "./src/E86Lib/Components/atGraphicsCard.ts":
/*!*************************************************!*\
  !*** ./src/E86Lib/Components/atGraphicsCard.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ATColorGraphicsCard = void 0;
const colorGraphicsCard_1 = __webpack_require__(/*! ./colorGraphicsCard */ "./src/E86Lib/Components/colorGraphicsCard.ts");
const graphicsCard_1 = __webpack_require__(/*! ./graphicsCard */ "./src/E86Lib/Components/graphicsCard.ts");
var DataFunction;
(function (DataFunction) {
    DataFunction[DataFunction["Unmodified"] = 0] = "Unmodified";
    DataFunction[DataFunction["And"] = 1] = "And";
    DataFunction[DataFunction["Or"] = 2] = "Or";
    DataFunction[DataFunction["Xor"] = 3] = "Xor";
})(DataFunction || (DataFunction = {}));
class ATColorGraphicsCard extends colorGraphicsCard_1.ColorGraphicsCard {
    constructor() {
        super();
        this.planeCount = 4;
        this.planes = new Array(this.planeCount);
        this.latches = new Array(this.planeCount);
        this.mapMask = new Array(this.planeCount);
        this.enableSetReset = new Array(this.planeCount);
        this.setReset = new Array(this.planeCount);
        this.modeControlRegister = 0;
        this.colorSelectRegister = 0;
        this.miscOutputRegister = 0;
        this.sequencerIndex = 0;
        this.sequencerRegisters = new Array(5);
        this.gdcIndex = 0;
        this.gdcRegisters = new Array(9);
        this.attributeFlipFlop = false;
        this.attributeIndex = 0;
        this.attributeRegisters = new Array(0x15);
        this.graphicsMode = false;
        this.colorPlaneEnabled = new Array(4);
        this.readMapSelect = 0;
        this.rotateCount = 0;
        this.bitMask = 0;
        this.oddEven = false;
        this.colorDontCare = new Array(4);
        this.mapMaskRegister = 0;
        this.colorCompareRegister = 0;
        this.featureControlRegister = 0;
        this.gdcGraphicsMode = false;
        this.monochrome = false;
        this.memoryModeRegister = 0;
        this.characterMapSelectRegister = 0;
        this.characterMapA = 0;
        this.characterMapB = 0;
        this.clockMode = 0;
        this.writeMode = 0;
        this.readMode = 0;
        this.chain4 = false;
        this.egaPalette = new Array(0x10);
        this.cgaPalette = new Array(0x10);
        this.memStart = 0;
        this.memSize = 0;
        this.crtBasePort = 0;
        this.charBoxWidth = 0;
        this.startAddr = 0xA0000;
        this.setRamSize(0x40000);
        this.memStart = 0xB0000;
        this.memSize = 0x10000;
        this.crtBasePort = 0x3D0;
        this.miscOutputRegister = 0x03;
        this.bitMask = 0xFF;
        for (let idx = 0; idx < 0x10; idx++) {
            this.egaPalette[idx] = this.cgaColors[idx];
            this.cgaPalette[idx] = this.cgaColors[idx];
        }
        for (let idx = 0; idx < this.planeCount; idx++) {
            this.planes[idx] = new Uint8Array(0x10000);
            this.mapMask[idx] = true;
        }
    }
    getAllowSwitchCharSets() {
        return this.characterMapA != this.characterMapB;
    }
    getCrtStartAddr() {
        return (this.crtRegisters[0x0C] << 8) + this.crtRegisters[0x0D];
    }
    getUnderlineLocation() {
        return this.crtRegisters[0x14] & 0x1F;
    }
    getMaximumCharScanLine() {
        return this.crtRegisters[0x09] & 0x1F;
    }
    getCrtOffset() {
        return this.crtRegisters[0x13];
    }
    getPresetRowScan() {
        return this.crtRegisters[0x08];
    }
    getHorizontalPixelPanning() {
        return this.attributeRegisters[0x13] & 0x0F;
    }
    getEnableLineGraphicsCharacterCode() {
        return (this.attributeRegisters[0x10] & 4) > 0;
    }
    fillIgnoredFields() {
        super.fillIgnoredFields();
        this.ignoredFields.add("planes");
        this.ignoredFields.add("egaPalette");
        this.ignoredFields.add("cgaPalette");
    }
    getMemoryData() {
        const result = new Array(this.planeCount);
        for (let i = 0; i < this.planeCount; i++)
            result[i] = this.planes[i].buffer;
        return result;
    }
    updateMemory(data) {
        for (let i = 0; i < this.planeCount; i++)
            this.planes[i] = new Uint8Array(data[i]);
    }
    in(addr) {
        if (addr == this.crtBasePort + 5)
            return this.getDataRegister();
        switch (addr) {
            case 0x3D8:
                return this.modeControlRegister;
            case 0x3D9:
                return this.colorSelectRegister;
        }
        return 0xFFFF;
    }
    out(addr, value, wordTransfer) {
        if (addr == this.crtBasePort + 4) {
            this.setIndexRegister(value & 0xFF);
            if (wordTransfer)
                this.out(0x3D5, value >> 8, false);
            return;
        }
        if (addr == this.crtBasePort + 5) {
            this.setDataRegister(value & 0xFF);
            return;
        }
        if (addr == this.crtBasePort + 0x0A) {
            this.featureControlRegister = value & 0xFF;
            return;
        }
        switch (addr) {
            case 0x3C2:
                this.miscOutputRegister = value & 0xFF;
                this.crtBasePort = (value & 1) == 0 ? 0x3B0 : 0x3D0;
                break;
            case 0x3C4:
                this.sequencerIndex = value & 0x07;
                if (wordTransfer)
                    this.out(0x3C5, (value >> 8) & 0xFF, false);
                break;
            case 0x3CE:
                this.gdcIndex = value & 0x0F;
                if (wordTransfer)
                    this.out(0x3CF, value >> 8, false);
                break;
            case 0x3CF:
                switch (this.gdcIndex) {
                    case 0x00:
                        this.setReset[0] = (value & 0x01) > 0;
                        this.setReset[1] = (value & 0x02) > 0;
                        this.setReset[2] = (value & 0x04) > 0;
                        this.setReset[3] = (value & 0x08) > 0;
                        break;
                    case 0x01:
                        this.enableSetReset[0] = (value & 0x01) > 0;
                        this.enableSetReset[1] = (value & 0x02) > 0;
                        this.enableSetReset[2] = (value & 0x04) > 0;
                        this.enableSetReset[3] = (value & 0x08) > 0;
                        break;
                    case 0x02:
                        this.colorCompareRegister = value & 0xFF;
                        break;
                    case 0x03:
                        this.rotateCount = value & 0x07;
                        switch ((value >> 3) & 0x03) {
                            case 0:
                                this.currentDataFunction = DataFunction.Unmodified;
                                break;
                            case 1:
                                this.currentDataFunction = DataFunction.And;
                                break;
                            case 2:
                                this.currentDataFunction = DataFunction.Or;
                                break;
                            case 3:
                                this.currentDataFunction = DataFunction.Xor;
                                break;
                        }
                        break;
                    case 0x04:
                        this.readMapSelect = value & 0x03;
                        break;
                    case 0x05:
                        this.writeMode = value & 0x03;
                        this.readMode = (value >> 3) & 0x01;
                        break;
                    case 0x06:
                        this.gdcGraphicsMode = (value & 0x01) > 0;
                        switch ((value >> 2) & 0x03) {
                            case 0:
                                this.memStart = 0xA0000;
                                this.memSize = 0x20000;
                                break;
                            case 1:
                                this.memStart = 0xA0000;
                                this.memSize = 0x10000;
                                break;
                            case 2:
                                this.memStart = 0xB0000;
                                this.memSize = 0x08000;
                                break;
                            case 3:
                                this.memStart = 0xB8000;
                                this.memSize = 0x08000;
                                break;
                        }
                        break;
                    case 0x07:
                        for (let idx = 0; idx < this.planeCount; idx++)
                            this.colorDontCare[idx] = (value & (1 << idx)) > 0;
                        break;
                    case 0x08:
                        this.bitMask = value;
                        break;
                }
                if (this.gdcIndex < this.gdcRegisters.length)
                    this.gdcRegisters[this.gdcIndex] = value & 0xFF;
                break;
            case 0x3D8:
                this.modeControlRegister = value & 0xFF;
                break;
            case 0x3D9:
                this.colorSelectRegister = value & 0xFF;
                break;
        }
    }
    peek(addr) {
        if (addr < this.memStart || addr >= this.memStart + this.memSize)
            return 0;
        let relAddr = addr - this.memStart;
        if (this.chain4)
            return this.planes[relAddr & 0x03][relAddr >> 2];
        const addrIsEven = (relAddr & 0x01) == 0;
        if (this.oddEven)
            relAddr >>= 1;
        for (let planeNo = 0; planeNo < this.planeCount; planeNo++)
            this.latches[planeNo] = this.planes[planeNo][relAddr];
        if (this.readMode == 0) {
            if (this.oddEven)
                return addrIsEven ? this.planes[0][relAddr] : this.planes[1][relAddr];
            return this.planes[this.readMapSelect][relAddr];
        }
        else {
            const colIdx = this.colorCompareRegister & 0x0F;
            let result = 0xFF;
            for (let planeNo = 0; planeNo < this.planeCount; planeNo++) {
                if (!this.colorDontCare[planeNo])
                    continue;
                const data = this.planes[planeNo][relAddr];
                const bitSet = (colIdx & (1 << planeNo)) > 0;
                let bitMask = 1;
                for (let idx = 0; idx < 8; idx++) {
                    if (((data & bitMask) > 0) != bitSet)
                        result &= ~bitMask;
                    bitMask <<= 1;
                }
            }
            return result & 0xFF;
        }
    }
    poke(addr, value) {
        if (addr < this.memStart || addr >= this.memStart + this.memSize)
            return;
        let relAddr = addr - this.memStart;
        if (this.chain4) {
            this.planes[relAddr & 0x03][relAddr >> 2] = value;
            return;
        }
        const addrIsEven = (relAddr & 0x01) == 0;
        if (this.oddEven)
            relAddr >>= 1;
        this.internalPoke(value, addrIsEven, relAddr);
    }
    internalPoke(value, addrIsEven, relAddr) {
        if (this.writeMode == 0) {
            let data = value;
            if (this.rotateCount > 0)
                data = ((data >> this.rotateCount) | (data << (8 - this.rotateCount))) & 0xFF;
            for (let planeNo = 0; planeNo < this.planeCount; planeNo++) {
                if (!this.mapMask[planeNo])
                    continue;
                if (this.oddEven) {
                    if ((addrIsEven && planeNo != 0 && planeNo != 2) ||
                        (!addrIsEven && planeNo != 1 && planeNo != 3))
                        continue;
                }
                const latch = this.latches[planeNo];
                let aluData = this.enableSetReset[planeNo] ? (this.setReset[planeNo] ? 0xFF : 0x00) : data;
                switch (this.currentDataFunction) {
                    case DataFunction.And:
                        aluData = latch & aluData;
                        break;
                    case DataFunction.Or:
                        aluData = latch | aluData;
                        break;
                    case DataFunction.Xor:
                        aluData = latch ^ aluData;
                        break;
                }
                this.planes[planeNo][relAddr] = ((aluData & this.bitMask) | (latch & ~this.bitMask)) & 0xFF;
            }
        }
        else if (this.writeMode == 1) {
            for (let planeNo = 0; planeNo < this.planeCount; planeNo++)
                this.planes[planeNo][relAddr] = this.latches[planeNo];
        }
        else if (this.writeMode == 2) {
            for (let planeNo = 0; planeNo < this.planeCount; planeNo++) {
                if (!this.mapMask[planeNo])
                    continue;
                if (this.oddEven) {
                    if ((addrIsEven && planeNo != 0 && planeNo != 2) ||
                        (!addrIsEven && planeNo != 1 && planeNo != 3))
                        continue;
                }
                const latch = this.latches[planeNo];
                let aluData = (value & (1 << planeNo)) > 0 ? 0xFF : 0x00;
                switch (this.currentDataFunction) {
                    case DataFunction.And:
                        aluData = latch & aluData;
                        break;
                    case DataFunction.Or:
                        aluData = latch | aluData;
                        break;
                    case DataFunction.Xor:
                        aluData = latch ^ aluData;
                        break;
                }
                this.planes[planeNo][relAddr] = ((aluData & this.bitMask) | (latch & ~this.bitMask)) & 0xFF;
            }
        }
    }
    waitForScreenDraw() {
        if (this.screenUpdateClocks == 0)
            return;
        const horAreaClocks = this.horAreaEndClocks - this.horAreaStartClocks;
        const clocks = this.eventTimer.clockCount % this.screenUpdateClocks;
        if (clocks >= this.horAreaStartClocks && clocks <= Math.trunc(this.horAreaStartClocks + horAreaClocks / 2))
            return;
    }
    calcRetraceEnable() {
        if (this.screenUpdateClocks == 0) {
            return { vertRetrace: false, enable: false };
        }
        const clocks = this.eventTimer.clockCount % this.screenUpdateClocks;
        const vertRetrace = clocks < this.vertRetraceClocks;
        let horRetrace = false;
        if (clocks >= this.horAreaStartClocks && clocks < this.horAreaEndClocks) {
            const horClocks = (clocks - this.horAreaStartClocks) % this.lineClocks;
            horRetrace = horClocks < this.horRetraceClocks;
        }
        const enable = horRetrace || (vertRetrace && clocks > this.horRetraceClocks);
        return { vertRetrace, enable };
    }
    genColor(value) {
        const red = ((value & 0x04) > 0 ? 0xAA : 0x00) + ((value & 0x20) > 0 ? 0x55 : 0x00);
        const green = ((value & 0x02) > 0 ? 0xAA : 0x00) + ((value & 0x10) > 0 ? 0x55 : 0x00);
        const blue = ((value & 0x01) > 0 ? 0xAA : 0x00) + ((value & 0x08) > 0 ? 0x55 : 0x00);
        return graphicsCard_1.Col.fromRgb(red, green, blue);
    }
    genCgaColor(value) {
        return this.cgaColors[(value & 0x07) + ((value & 0x10) > 0 ? 8 : 0)];
    }
    updateTextScreen(imageData, imageWidth, palette) {
        this.charHeight = this.getMaximumCharScanLine() + 1;
        const columnCount = Math.trunc(this.colCount / this.charBoxWidth);
        const rowCount = Math.trunc(this.lineCount / this.charHeight);
        const textData = new Array(rowCount * columnCount);
        this.internalUpdateTextScreen(textData, 0, rowCount, columnCount, palette);
        let charNo = 0;
        for (let row = 0; row < rowCount; row++) {
            for (let col = 0; col < columnCount; col++) {
                const charData = textData[charNo];
                const rect = new graphicsCard_1.IntRect(col * this.charBoxWidth, row * this.charHeight, this.charBoxWidth, this.charHeight);
                this.writePixels(imageData, imageWidth, charData, rect);
                charNo++;
            }
        }
    }
    internalUpdateTextScreen(textData, startRow, rowCount, columnCount, palette) {
        let ramPos = this.getCrtStartAddr() + startRow * columnCount;
        let charPos = startRow * columnCount;
        const allowSwitchCharsets = this.getAllowSwitchCharSets();
        const widerCharBox = this.charBoxWidth > this.charWidth;
        const planeOffsetA = this.characterMapA * 0x2000;
        const planeOffsetB = this.characterMapB * 0x2000;
        let planeOffset = 0;
        for (let row = startRow; row < startRow + rowCount; row++) {
            for (let col = 0; col < columnCount; col++) {
                const attribute = this.planes[1][ramPos];
                let textColor;
                if (allowSwitchCharsets) {
                    planeOffset = (attribute & 0x08) > 0 ? planeOffsetA : planeOffsetB;
                    textColor = palette[attribute & 0x07];
                }
                else
                    textColor = palette[attribute & 0x0F];
                const blinking = this.blink && (attribute & 0x80) > 0;
                const backgroundColor = this.blink ? palette[(attribute >> 4) & 0x07] : palette[attribute >> 4];
                if (blinking && !this.cursorOn)
                    textColor = backgroundColor;
                textData[charPos] = this.drawEgaVgaChar(this.planes[0][ramPos], textColor, backgroundColor, planeOffset, false, ramPos == this.getCursorPos() && this.cursorOn, widerCharBox);
                ramPos++;
                charPos++;
            }
        }
    }
    drawEgaVgaChar(character, text, background, planeOffset, underline, drawCursor, widerCharBox) {
        const data = new Uint32Array(this.charBoxWidth * this.charHeight);
        let dataPos = 0;
        let doCursorLine = false;
        const charPlane = this.planes[2];
        const charStart = planeOffset + (character << 5);
        const copyLastPixel = character >= 0xC0 && character <= 0xDF && this.getEnableLineGraphicsCharacterCode();
        let color = graphicsCard_1.Col.fromRgb(0, 0, 0);
        for (let y = 0; y < this.charHeight; y++) {
            const lineByte = charPlane[charStart + y];
            let bitMask = 0x80;
            const cursorStart = this.getCursorStart();
            const cursorEnd = this.getCursorEnd();
            if (drawCursor && cursorStart < this.charHeight && cursorEnd < this.charHeight) {
                const actualCursorEnd = cursorEnd == 0 ? this.charHeight - 1 : cursorEnd;
                doCursorLine = y >= cursorStart && y <= actualCursorEnd;
            }
            const fillLine = (underline && y == this.getUnderlineLocation()) || doCursorLine;
            for (let x = 0; x < this.charWidth; x++) {
                color = fillLine || (lineByte & bitMask) > 0 ? text : background;
                bitMask >>= 1;
                data[dataPos++] = color.value;
            }
            if (widerCharBox)
                data[dataPos++] = copyLastPixel ? color.value : background.value;
        }
        return data;
    }
    updateScreenCgaLo(imageData) {
        const width = 320;
        const height = 200;
        const colors = this.getCgaGraphicsColors(this.colorSelectRegister);
        const data = new Uint32Array(imageData.buffer);
        let dataIndex = 0;
        let evenRamIndex = 0x0000;
        let oddRamIndex = 0x2000;
        for (let row = 0; row < height; row++) {
            let ramIndex = (row & 0x01) == 0 ? evenRamIndex : oddRamIndex;
            for (let col = 0; col < width; col += 4) {
                const b = (ramIndex & 0x01) == 0 ? this.planes[0][ramIndex >> 1] : this.planes[1][ramIndex >> 1];
                let color;
                color = colors[b >> 6];
                data[dataIndex++] = color.value;
                color = colors[(b >> 4) & 3];
                data[dataIndex++] = color.value;
                color = colors[(b >> 2) & 3];
                data[dataIndex++] = color.value;
                color = colors[b & 3];
                data[dataIndex++] = color.value;
                ramIndex++;
            }
            if (row % 2 == 0)
                evenRamIndex = ramIndex;
            else
                oddRamIndex = ramIndex;
        }
    }
    updateScreenCgaMono(imageData, width, height) {
        const foreground = graphicsCard_1.Col.fromRgb(0xFF, 0xFF, 0xFF);
        const background = this.overscanColor;
        const data = new Uint32Array(imageData.buffer);
        let dataIndex = 0;
        let evenRamIndex = 0x0000;
        let oddRamIndex = 0x2000;
        for (let row = 0; row < height; row++) {
            let ramIndex = (row & 0x01) == 0 ? evenRamIndex : oddRamIndex;
            for (let col = 0; col < width; col += 8) {
                let b = this.planes[0][ramIndex];
                for (let idx = 0; idx < 8; idx++) {
                    if ((b & 0x80) > 0)
                        data[dataIndex++] = foreground.value;
                    else
                        data[dataIndex++] = background.value;
                    b <<= 1;
                }
                ramIndex++;
            }
            if (row % 2 == 0)
                evenRamIndex = ramIndex;
            else
                oddRamIndex = ramIndex;
        }
    }
    updateScreen16Col(imageData, width, height, colors) {
        const data = new Uint32Array(imageData.buffer);
        const virtualLineWidth = this.getCrtOffset() == 0 ? width / 8 : this.getCrtOffset() << 1;
        let ramIndex = this.getCrtStartAddr();
        let dataIndex = 0;
        const horPanning = this.getHorizontalPixelPanning();
        const realWidth = horPanning == 0 ? width : width + 8;
        for (let row = 0; row < height; row++) {
            let rowRamIndex = ramIndex;
            for (let col = 0; col < realWidth; col += 8, rowRamIndex++) {
                const planeIdx = rowRamIndex & 0xFFFF;
                let b0 = this.planes[0][planeIdx];
                let b1 = this.planes[1][planeIdx];
                let b2 = this.planes[2][planeIdx];
                let b3 = this.planes[3][planeIdx];
                for (let idx = 0; idx < 8; idx++) {
                    const colIdx = ((b0 & 0x80) >> 7) + ((b1 & 0x80) >> 6)
                        + ((b2 & 0x80) >> 5) + ((b3 & 0x80) >> 4);
                    const color = colors[colIdx];
                    if (horPanning == 0 || (col + idx >= horPanning && col + idx < realWidth - 8 + horPanning))
                        data[dataIndex++] = color.value;
                    b0 <<= 1;
                    b1 <<= 1;
                    b2 <<= 1;
                    b3 <<= 1;
                }
            }
            ramIndex += virtualLineWidth;
        }
    }
}
exports.ATColorGraphicsCard = ATColorGraphicsCard;


/***/ }),

/***/ "./src/E86Lib/Components/baseComponent.ts":
/*!************************************************!*\
  !*** ./src/E86Lib/Components/baseComponent.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
class BaseComponent {
    reset() {
        return;
    }
}
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "./src/E86Lib/Components/cgaGraphics.ts":
/*!**********************************************!*\
  !*** ./src/E86Lib/Components/cgaGraphics.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CgaGraphics = void 0;
const colorGraphicsCard_1 = __webpack_require__(/*! ./colorGraphicsCard */ "./src/E86Lib/Components/colorGraphicsCard.ts");
const graphicsCard_1 = __webpack_require__(/*! ./graphicsCard */ "./src/E86Lib/Components/graphicsCard.ts");
var Mode;
(function (Mode) {
    Mode[Mode["None"] = 0] = "None";
    Mode[Mode["Text40x25"] = 1] = "Text40x25";
    Mode[Mode["Text80x25"] = 2] = "Text80x25";
    Mode[Mode["GraphicsLo"] = 3] = "GraphicsLo";
    Mode[Mode["GraphicsHi"] = 4] = "GraphicsHi";
})(Mode || (Mode = {}));
class CgaGraphics extends colorGraphicsCard_1.ColorGraphicsCard {
    constructor() {
        super();
        this.charsetFile1 = "Fonts/cga1.dat";
        this.charsetFile2 = "Fonts/cga2.dat";
        this.charsetWidth = 32;
        this.charsetHeight = 8;
        this.horRetrace = 0;
        this.colorSelectRegister = 0;
        this.modeControlRegister = 0;
        this.charset1 = new Array(256);
        this.charset2 = new Array(256);
        this.activeCharsetNo = 0;
        this.startAddr = 0xB8000;
        this.setRamSize(0x4000);
        this.charWidth = 8;
        this.charHeight = 8;
        this.activeCharsetNo = 1;
        this.lineCount = 200;
    }
    fillIgnoredFields() {
        super.fillIgnoredFields();
        this.ignoredFields.add("charsetFile1");
        this.ignoredFields.add("charsetFile2");
        this.ignoredFieldsUpdate.add("charset1");
        this.ignoredFieldsUpdate.add("charset2");
    }
    modeChanged() {
        super.modeChanged();
        this.calcRetraceValues();
        this.charCache.clear();
    }
    getCharset() {
        return this.activeCharsetNo == 0 ? this.charset1 : this.charset2;
    }
    updateScreenGraphicsLo(imageData) {
        const colors = this.getCgaGraphicsColors(this.colorSelectRegister);
        const data = new Uint32Array(imageData.buffer);
        const width = 320;
        const height = 200;
        let dataIndex = 0;
        let evenRamIndex = 0x0000;
        let oddRamIndex = 0x2000;
        for (let row = 0; row < height; row++) {
            let ramIndex = (row & 0x01) == 0 ? evenRamIndex : oddRamIndex;
            for (let col = 0; col < width; col += 4) {
                const byteVal = this.ram[ramIndex];
                let color;
                color = colors[byteVal >> 6];
                data[dataIndex++] = color.value;
                color = colors[(byteVal >> 4) & 3];
                data[dataIndex++] = color.value;
                color = colors[(byteVal >> 2) & 3];
                data[dataIndex++] = color.value;
                color = colors[byteVal & 3];
                data[dataIndex++] = color.value;
                ramIndex++;
            }
            if (row % 2 == 0)
                evenRamIndex = ramIndex;
            else
                oddRamIndex = ramIndex;
        }
    }
    updateScreenGraphicsHi(imageData) {
        const color = this.cgaColors[this.colorSelectRegister & 0x0F];
        const data = new Uint32Array(imageData.buffer);
        const width = 640;
        const height = 200;
        let dataIndex = 0;
        let evenRamIndex = 0x0000;
        let oddRamIndex = 0x2000;
        for (let row = 0; row < height; row++) {
            let ramIndex = (row & 0x01) == 0 ? evenRamIndex : oddRamIndex;
            for (let col = 0; col < width; col += 8) {
                let byteVal = this.ram[ramIndex];
                for (let idx = 0; idx < 8; idx++) {
                    if ((byteVal & 0x80) > 0)
                        data[dataIndex] = color.value;
                    dataIndex++;
                    byteVal <<= 1;
                }
                ramIndex++;
            }
            if (row % 2 == 0)
                evenRamIndex = ramIndex;
            else
                oddRamIndex = ramIndex;
        }
    }
    updateTextScreen(imageData, imageWidth, charset, columnCount, rowCount, palette) {
        const rect = new graphicsCard_1.IntRect(0, 0, this.charWidth, this.charHeight);
        const ramCursorPos = this.getCursorPos() * 2;
        let ramPos = 0;
        for (let row = 0; row < rowCount; row++, rect.y += this.charHeight) {
            rect.x = 0;
            for (let col = 0; col < columnCount; col++, rect.x += this.charWidth) {
                const attribute = this.ram[ramPos + 1];
                const blinking = this.blink && (attribute & 0x80) > 0;
                const backgroundColor = this.blink ? palette[(attribute >> 4) & 0x07] : palette[attribute >> 4];
                let textColor = palette[attribute & 0x0F];
                if (blinking && !this.cursorOn)
                    textColor = backgroundColor;
                const charCode = this.ram[ramPos];
                const charArray = charset[charCode];
                const charData = this.drawChar(charCode, charArray, textColor, backgroundColor, false, ramPos == ramCursorPos && this.cursorOn);
                this.writePixels(imageData, imageWidth, charData, rect);
                ramPos += 2;
            }
        }
    }
    async loadCharSet() {
        await this.loadCharSetInternal(this.charset1, this.charsetFile1, this.charsetWidth, this.charsetHeight);
        await this.loadCharSetInternal(this.charset2, this.charsetFile2, this.charsetWidth, this.charsetHeight);
    }
    updateScreen(imageData, imageWidth) {
        super.updateScreen(imageData, imageWidth);
        switch (this.mode) {
            case Mode.Text40x25:
                this.updateTextScreen(imageData, imageWidth, this.getCharset(), 40, 25, this.cgaColors);
                break;
            case Mode.Text80x25:
                this.updateTextScreen(imageData, imageWidth, this.getCharset(), 80, 25, this.cgaColors);
                break;
            case Mode.GraphicsLo:
                this.updateScreenGraphicsLo(imageData);
                break;
            case Mode.GraphicsHi:
                this.updateScreenGraphicsHi(imageData);
                break;
        }
    }
    in(addr) {
        switch (addr) {
            case 0x3D1:
            case 0x3D3:
            case 0x3D5:
            case 0x3D7:
                return this.getDataRegister();
            case 0x3D8:
                return this.modeControlRegister;
            case 0x3D9:
                return this.colorSelectRegister;
            case 0x3DA:
                {
                    if (this.horRetrace == 0)
                        this.horRetrace = 2;
                    this.horRetrace--;
                    let value = this.calcVertRetrace() ? 8 : 0;
                    value += this.horRetrace == 0 ? 0 : 1;
                    return value & 0xFF;
                }
        }
        return 0;
    }
    out(addr, value, wordTransfer) {
        switch (addr) {
            case 0x3D0:
            case 0x3D2:
            case 0x3D4:
            case 0x3D6:
                this.setIndexRegister(value);
                break;
            case 0x3D1:
            case 0x3D3:
            case 0x3D5:
            case 0x3D7:
                this.setDataRegister(value);
                break;
            case 0x3D8:
                {
                    this.modeControlRegister = value & 0xFF;
                    this.blink = (value & 0x20) > 0;
                    this.blackWhite = (value & 4) > 0;
                    const oldMode = this.mode;
                    switch (value & 0x1B) {
                        case 0x08:
                            this.mode = Mode.Text40x25;
                            this.screenWidth = 320;
                            this.screenHeight = 200;
                            break;
                        case 0x09:
                            this.mode = Mode.Text80x25;
                            this.screenWidth = 640;
                            this.screenHeight = 200;
                            break;
                        case 0x0A:
                            this.mode = Mode.GraphicsLo;
                            this.screenWidth = 320;
                            this.screenHeight = 200;
                            break;
                        case 0x1A:
                            this.mode = Mode.GraphicsHi;
                            this.screenWidth = 640;
                            this.screenHeight = 200;
                            break;
                    }
                    if (this.mode != oldMode)
                        this.modeChanged();
                }
                break;
            case 0x3D9:
                this.colorSelectRegister = value & 0xFF;
                break;
            case 0x3DA:
                break;
            case 0x3DB:
                break;
            case 0x3DC:
                break;
        }
    }
}
exports.CgaGraphics = CgaGraphics;


/***/ }),

/***/ "./src/E86Lib/Components/colorGraphicsCard.ts":
/*!****************************************************!*\
  !*** ./src/E86Lib/Components/colorGraphicsCard.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorGraphicsCard = void 0;
const graphicsCard_1 = __webpack_require__(/*! ./graphicsCard */ "./src/E86Lib/Components/graphicsCard.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
class ColorGraphicsCard extends graphicsCard_1.GraphicsCard {
    constructor() {
        super();
        this.screenFrequency = 60;
        this.screenUpdateClocks = 0;
        this.lineClocks = 0;
        this.vertRetraceClocks = 0;
        this.vertBlankClocks = 0;
        this.horRetraceClocks = 0;
        this.horAreaStartClocks = 0;
        this.horAreaEndClocks = 0;
        this.blink = false;
        this.colCount = 0;
        this.lineCount = 0;
        this.cgaColors = new Array(16);
        this.initCgaColors();
    }
    modeChanged() {
        return;
    }
    calcRetraceValues() {
        if (this.lineCount == 0)
            return;
        this.screenUpdateClocks = Math.trunc((settings_1.Settings.cpuFrequency * 1000) / this.screenFrequency);
        this.vertRetraceClocks = Math.trunc(this.screenUpdateClocks / 50);
        this.vertBlankClocks = Math.trunc(this.screenUpdateClocks / 100);
        this.lineClocks = Math.trunc((this.screenUpdateClocks - this.vertRetraceClocks - this.vertBlankClocks) / this.lineCount);
        this.horRetraceClocks = Math.trunc(this.lineClocks / 5);
        this.horAreaStartClocks = this.vertRetraceClocks + Math.trunc(this.vertBlankClocks / 2);
        this.horAreaEndClocks = this.horAreaStartClocks + this.lineClocks * this.lineCount;
    }
    calcVertRetrace() {
        if (this.screenUpdateClocks == 0)
            return false;
        const clocks = this.eventTimer.clockCount % this.screenUpdateClocks;
        return clocks < this.vertRetraceClocks;
    }
    initCgaColors() {
        this.cgaColors[0] = graphicsCard_1.Col.fromRgb(0x00, 0x00, 0x00);
        this.cgaColors[1] = graphicsCard_1.Col.fromRgb(0x00, 0x00, 0xAA);
        this.cgaColors[2] = graphicsCard_1.Col.fromRgb(0x00, 0xAA, 0x00);
        this.cgaColors[3] = graphicsCard_1.Col.fromRgb(0x00, 0xAA, 0xAA);
        this.cgaColors[4] = graphicsCard_1.Col.fromRgb(0xAA, 0x00, 0x00);
        this.cgaColors[5] = graphicsCard_1.Col.fromRgb(0xAA, 0x00, 0xAA);
        this.cgaColors[6] = graphicsCard_1.Col.fromRgb(0xAA, 0x55, 0x00);
        this.cgaColors[7] = graphicsCard_1.Col.fromRgb(0xAA, 0xAA, 0xAA);
        this.cgaColors[8] = graphicsCard_1.Col.fromRgb(0x55, 0x55, 0x55);
        this.cgaColors[9] = graphicsCard_1.Col.fromRgb(0x55, 0x55, 0xFF);
        this.cgaColors[10] = graphicsCard_1.Col.fromRgb(0x55, 0xFF, 0x55);
        this.cgaColors[11] = graphicsCard_1.Col.fromRgb(0x55, 0xFF, 0xFF);
        this.cgaColors[12] = graphicsCard_1.Col.fromRgb(0xFF, 0x55, 0x55);
        this.cgaColors[13] = graphicsCard_1.Col.fromRgb(0xFF, 0x55, 0xFF);
        this.cgaColors[14] = graphicsCard_1.Col.fromRgb(0xFF, 0xFF, 0x55);
        this.cgaColors[15] = graphicsCard_1.Col.fromRgb(0xFF, 0xFF, 0xFF);
    }
    getCgaGraphicsColors(colorSelectRegister) {
        const intensified = (colorSelectRegister & 0x10) > 0 ? 8 : 0;
        const colorSet = (colorSelectRegister >> 5) & 0x01;
        const colors = new Array(4);
        colors[0] = this.cgaColors[colorSelectRegister & 0x0F];
        if (colorSet == 0) {
            colors[1] = this.cgaColors[2 + intensified];
            colors[2] = this.cgaColors[4 + intensified];
            colors[3] = this.cgaColors[6 + intensified];
        }
        else {
            colors[1] = this.cgaColors[3 + intensified];
            colors[2] = this.cgaColors[5 + intensified];
            colors[3] = this.cgaColors[7 + intensified];
        }
        return colors;
    }
}
exports.ColorGraphicsCard = ColorGraphicsCard;
ColorGraphicsCard.dataBuffer = new Array();


/***/ }),

/***/ "./src/E86Lib/Components/egaGraphics.ts":
/*!**********************************************!*\
  !*** ./src/E86Lib/Components/egaGraphics.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EgaGraphics = void 0;
const atGraphicsCard_1 = __webpack_require__(/*! ./atGraphicsCard */ "./src/E86Lib/Components/atGraphicsCard.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
var EgaMode;
(function (EgaMode) {
    EgaMode[EgaMode["None"] = 0] = "None";
    EgaMode[EgaMode["M00_CGA"] = 1] = "M00_CGA";
    EgaMode[EgaMode["M00_EGA"] = 2] = "M00_EGA";
    EgaMode[EgaMode["M02_CGA"] = 3] = "M02_CGA";
    EgaMode[EgaMode["M02_EGA"] = 4] = "M02_EGA";
    EgaMode[EgaMode["M04"] = 5] = "M04";
    EgaMode[EgaMode["M06"] = 6] = "M06";
    EgaMode[EgaMode["M07"] = 7] = "M07";
    EgaMode[EgaMode["M0D"] = 8] = "M0D";
    EgaMode[EgaMode["M0E"] = 9] = "M0E";
    EgaMode[EgaMode["M0F"] = 10] = "M0F";
    EgaMode[EgaMode["M10"] = 11] = "M10";
})(EgaMode || (EgaMode = {}));
class EgaGraphics extends atGraphicsCard_1.ATColorGraphicsCard {
    constructor() {
        super();
        this.diagnosticCount = 0;
        this.egaSwitches = [false, true, true, false];
        this.charWidth9Bits = false;
        this.mode = EgaMode.None;
        this.screenWidth = 640;
        this.screenHeight = 350;
        this.charBoxWidth = this.charWidth = 8;
    }
    fillIgnoredFields() {
        super.fillIgnoredFields();
        this.ignoredFields.add("egaSwitches");
    }
    in(addr) {
        switch (addr) {
            case 0x3C2:
                {
                    const vertRetrace = this.calcVertRetrace();
                    let value = vertRetrace ? 0 : 0x80;
                    const switchNo = (this.miscOutputRegister >> 2) & 0x03;
                    value += this.egaSwitches[switchNo] ? 0 : 0x10;
                    value += 0;
                    return value & 0xFF;
                }
            case 0x3C8:
                return 0;
            case 0x3DA:
                {
                    this.attributeFlipFlop = false;
                    const retraceInfo = this.calcRetraceEnable();
                    let value = (retraceInfo.vertRetrace ? 8 : 0) + (retraceInfo.enable ? 0 : 1);
                    if (++this.diagnosticCount == 4)
                        this.diagnosticCount = 0;
                    value += this.diagnosticCount > 1 ? 0x30 : 0;
                    return value & 0xFF;
                }
            default:
                return super.in(addr);
        }
    }
    out(addr, value, wordTransfer) {
        switch (addr) {
            case 0x3C0:
                if (this.attributeFlipFlop) {
                    if (this.attributeIndex < this.attributeRegisters.length) {
                        this.attributeRegisters[this.attributeIndex] = value & 0xFF;
                        switch (this.attributeIndex) {
                            case 0x10:
                                this.graphicsMode = (value & 0x01) > 0;
                                this.monochrome = (value & 0x02) > 0;
                                this.charWidth9Bits = (value & 0x04) > 0;
                                this.blink = (value & 0x08) > 0;
                                break;
                            case 0x11:
                                this.overscanColor = this.genColor(value & 0xFF);
                                break;
                            case 0x12:
                                for (let idx = 0; idx < this.colorPlaneEnabled.length; idx++)
                                    this.colorPlaneEnabled[idx] = (value & (1 << idx)) > 0;
                                break;
                            default:
                                if (this.attributeIndex >= 0 && this.attributeIndex <= 0x0F) {
                                    this.egaPalette[this.attributeIndex] = this.genColor(value & 0xFF);
                                    this.cgaPalette[this.attributeIndex] = this.genCgaColor(value & 0xFF);
                                }
                                break;
                        }
                    }
                    this.attributeFlipFlop = !this.attributeFlipFlop;
                }
                else {
                    this.attributeIndex = value & 0x1F;
                    this.attributeFlipFlop = !this.attributeFlipFlop;
                    if (wordTransfer)
                        this.out(addr, value >> 8, false);
                }
                break;
            case 0x3C5:
                switch (this.sequencerIndex) {
                    case 0x00:
                        break;
                    case 0x01:
                        this.clockMode = value & 0xFF;
                        break;
                    case 0x02:
                        this.mapMaskRegister = value & 0xFF;
                        this.mapMask[0] = (value & 0x01) > 0;
                        this.mapMask[1] = (value & 0x02) > 0;
                        this.mapMask[2] = (value & 0x04) > 0;
                        this.mapMask[3] = (value & 0x08) > 0;
                        break;
                    case 0x03:
                        this.characterMapSelectRegister = value & 0xFF;
                        this.characterMapA = (value >> 2) & 0x03;
                        this.characterMapB = value & 0x03;
                        break;
                    case 0x04:
                        this.memoryModeRegister = value & 0xFF;
                        this.oddEven = (value & 0x04) == 0;
                        break;
                }
                if (this.sequencerIndex < this.sequencerRegisters.length)
                    this.sequencerRegisters[this.sequencerIndex] = value & 0xFF;
                break;
            case 0x3CA:
                break;
            case 0x3CC:
                break;
            default:
                super.out(addr, value, wordTransfer);
                break;
        }
    }
    calcMode() {
        const oldMode = this.mode;
        const clockMode = this.sequencerRegisters[1];
        const mapMask = this.sequencerRegisters[2];
        const memoryMode = this.sequencerRegisters[4];
        if (clockMode == 0x0B && memoryMode == 0x03) {
            if (this.miscOutputRegister == 0x23)
                this.mode = EgaMode.M00_CGA;
            if (this.miscOutputRegister == 0xA7)
                this.mode = EgaMode.M00_EGA;
        }
        else if (clockMode == 0x01 && memoryMode == 0x03) {
            if (this.miscOutputRegister == 0x23)
                this.mode = EgaMode.M02_CGA;
            if (this.miscOutputRegister == 0xA7)
                this.mode = EgaMode.M02_EGA;
        }
        else if (clockMode == 0x0B && memoryMode == 0x02) {
            this.mode = EgaMode.M04;
        }
        else if (clockMode == 0x01 && memoryMode == 0x06) {
            if (this.miscOutputRegister == 0x23) {
                if (mapMask == 0x01)
                    this.mode = EgaMode.M06;
                else if (mapMask == 0x0F)
                    this.mode = EgaMode.M0E;
            }
            else if (this.miscOutputRegister == 0xA2)
                this.mode = EgaMode.M0F;
            else if (this.miscOutputRegister == 0xA7)
                this.mode = EgaMode.M10;
        }
        else if (clockMode == 0x00 && memoryMode == 0x03)
            this.mode = EgaMode.M07;
        else if (clockMode == 0x01 && memoryMode == 0x06)
            this.mode = EgaMode.M04;
        else if (clockMode == 0x0B && memoryMode == 0x06)
            this.mode = EgaMode.M0D;
        if (this.mode != oldMode) {
            this.modeChanged();
        }
    }
    modeChanged() {
        super.modeChanged();
        if (((this.miscOutputRegister >> 2) & 0x03) == 0x00)
            this.lineCount = 200;
        else
            this.lineCount = 350;
        if ((this.clockMode & 0x08) > 0)
            this.colCount = 320;
        else
            this.colCount = 640;
        this.calcRetraceValues();
    }
    updateDimensions() {
        this.calcMode();
        switch (this.mode) {
            case EgaMode.M00_CGA:
                this.screenWidth = 320;
                this.screenHeight = 200;
                break;
            case EgaMode.M00_EGA:
                this.screenWidth = 320;
                this.screenHeight = 350;
                break;
            case EgaMode.M02_CGA:
                this.screenWidth = 640;
                this.screenHeight = 200;
                break;
            case EgaMode.M02_EGA:
                this.screenWidth = 640;
                this.screenHeight = 350;
                break;
            case EgaMode.M04:
                this.screenWidth = 320;
                this.screenHeight = 200;
                break;
            case EgaMode.M06:
                this.screenWidth = 640;
                this.screenHeight = 200;
                break;
            case EgaMode.M07:
                this.screenWidth = 720;
                this.screenHeight = 350;
                break;
            case EgaMode.M0D:
                this.screenWidth = 320;
                this.screenHeight = 200;
                break;
            case EgaMode.M0E:
                this.screenWidth = 640;
                this.screenHeight = 200;
                break;
            case EgaMode.M0F:
                this.screenWidth = 640;
                this.screenHeight = 350;
                break;
            case EgaMode.M10:
                this.screenWidth = 640;
                this.screenHeight = 350;
                break;
        }
    }
    updateScreen(imageData, imageWidth) {
        super.updateScreen(imageData, imageWidth);
        if (settings_1.Settings.noScreenUpdateWhileRetrace)
            this.waitForScreenDraw();
        switch (this.mode) {
            case EgaMode.M00_CGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case EgaMode.M00_EGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case EgaMode.M02_CGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case EgaMode.M02_EGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case EgaMode.M04:
                this.updateScreenCgaLo(imageData);
                break;
            case EgaMode.M06:
                this.updateScreenCgaMono(imageData, 640, 200);
                break;
            case EgaMode.M07:
                break;
            case EgaMode.M0D:
                this.updateScreen16Col(imageData, 320, 200, this.cgaPalette);
                break;
            case EgaMode.M0E:
                this.updateScreen16Col(imageData, 640, 200, this.cgaPalette);
                break;
            case EgaMode.M0F:
                break;
            case EgaMode.M10:
                this.updateScreen16Col(imageData, 640, 350, this.egaPalette);
                break;
        }
    }
}
exports.EgaGraphics = EgaGraphics;


/***/ }),

/***/ "./src/E86Lib/Components/graphicsCard.ts":
/*!***********************************************!*\
  !*** ./src/E86Lib/Components/graphicsCard.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicsCard = exports.IntRect = exports.Col = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
class Col {
    constructor() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.value = 0;
    }
    static fromRgb(r, g, b) {
        const result = new Col();
        result.r = r & 0xFF;
        result.g = g & 0xFF;
        result.b = b & 0xFF;
        result.value = (result.r + (result.g << 8) + (result.b << 16) + 0xFF000000) & 0xFFFFFFFF;
        return result;
    }
}
exports.Col = Col;
class IntRect {
    constructor(x, y, width, height) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
exports.IntRect = IntRect;
class GraphicsCard extends baseComponent_1.BaseComponent {
    constructor() {
        super();
        this.cursorBlinkDelay = 250;
        this.ignoredFields = new Set();
        this.ignoredFieldsUpdate = new Set();
        this.cursorSwitchCountdown = 0;
        this.cursorSwitchStartValue = 0;
        this.charCache = new Map();
        this.crtIndexReg = 0;
        this.crtRegisters = new Uint8Array(0x19);
        this.startAddr = 0;
        this.ramSize = 0;
        this.screenWidth = 0;
        this.screenHeight = 0;
        this.charWidth = 0;
        this.charHeight = 0;
        this.supportWrite = true;
        this.supportRead = true;
        this.cursorOn = true;
        this.fillIgnoredFields();
        this.ignoredFields.forEach(field => this.ignoredFieldsUpdate.add(field));
    }
    fillIgnoredFields() {
        this.ignoredFields.add("ignoredFields");
        this.ignoredFields.add("ignoredFieldsUpdate");
        this.ignoredFields.add("ram");
        this.ignoredFields.add("charCache");
        this.ignoredFieldsUpdate.add("cursorOn");
        this.ignoredFieldsUpdate.add("cursorSwitchStartValue");
        this.ignoredFieldsUpdate.add("cursorSwitchCountdown");
    }
    setRamSize(size) {
        this.ramSize = size;
        this.ram = new Uint8Array(this.ramSize);
    }
    getCursorStart() {
        return this.crtRegisters[0x0A];
    }
    getCursorEnd() { return this.crtRegisters[0x0B]; }
    getCursorPos() {
        return (this.crtRegisters[0x0E] << 8) + this.crtRegisters[0x0F];
    }
    setScreenUpdateRate(value) {
        this.cursorSwitchStartValue = Math.trunc((this.cursorBlinkDelay * value) / 1000);
    }
    loadCharSet() {
        return;
    }
    peek(addr) {
        if (addr >= this.startAddr && addr < this.startAddr + this.ramSize)
            return this.ram[addr - this.startAddr];
        return 0;
    }
    poke(addr, value) {
        if (addr >= this.startAddr && addr < this.startAddr + this.ramSize)
            this.ram[addr - this.startAddr] = value;
    }
    loadCharSetInternal(charsetData, filePath, charsetWidth, charsetHeight) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.responseType = "text";
            req.open("GET", settings_1.Settings.baseDir + filePath, true);
            req.onload = () => {
                if (req.status != 200) {
                    reject();
                    return;
                }
                const lines = req.response.split(/\r?\n/);
                if (lines.length >= 256) {
                    for (let charNo = 0; charNo < 256; charNo++) {
                        const chars = lines[charNo].split(",");
                        const data = new Array(chars.length);
                        for (let bitNo = 0; bitNo < chars.length; bitNo++)
                            data[bitNo] = chars[bitNo] == "1";
                        charsetData[charNo] = data;
                    }
                }
                resolve();
            };
            req.onerror = () => {
                reject();
            };
            req.send();
        });
    }
    drawChar(character, charData, text, background, underline = false, drawCursor = false) {
        const key = this.calcTextCharHash(text, background, character);
        if (!underline && !drawCursor) {
            const data = this.charCache.get(key);
            if (data)
                return data;
        }
        const data = new Uint32Array(this.charWidth * this.charHeight);
        let byteNo = 0;
        let dataPos = 0;
        let doCursorLine = false;
        const cursorStart = this.getCursorStart();
        const cursorEnd = this.getCursorEnd();
        for (let y = 0; y < this.charHeight; y++) {
            if (drawCursor && cursorStart < this.charHeight && cursorEnd < this.charHeight) {
                if (cursorStart <= cursorEnd)
                    doCursorLine = y >= cursorStart && y <= cursorEnd;
                else
                    doCursorLine = y <= cursorEnd || y >= cursorStart;
            }
            const fillLine = (underline && y == this.charHeight - 1) || doCursorLine;
            for (let x = 0; x < this.charWidth; x++) {
                const color = fillLine || charData[byteNo] ? text : background;
                byteNo++;
                data[dataPos++] = color.value;
            }
        }
        if (!underline && !drawCursor)
            this.charCache.set(key, data);
        return data;
    }
    writePixels(imageData, width, data, rect) {
        const charData = new Uint8Array(data.buffer);
        let destPos = (rect.x + rect.y * width) * 4;
        let srcPos = 0;
        for (let y = 0; y < rect.height; y++) {
            imageData.set(charData.subarray(srcPos, srcPos + rect.width * 4), destPos);
            srcPos += rect.width * 4;
            destPos += width * 4;
        }
    }
    setIndexRegister(value) {
        this.crtIndexReg = value & 0x1F;
    }
    setDataRegister(value) {
        if (this.crtIndexReg < this.crtRegisters.length)
            this.crtRegisters[this.crtIndexReg] = value;
    }
    getDataRegister() {
        return this.crtIndexReg >= 0x0C && this.crtIndexReg <= 0x0F ? this.crtRegisters[this.crtIndexReg] : 0;
    }
    updateDimensions() {
        return;
    }
    getJsonInitial() {
        return JSON.stringify(this, (key, value) => {
            if (this.ignoredFields.has(key))
                return undefined;
            if (key == "eventTimer")
                return { clockCount: this.eventTimer.clockCount };
            return value;
        });
    }
    getJsonUpdate() {
        return JSON.stringify(this, (key, value) => {
            if (this.ignoredFieldsUpdate.has(key))
                return undefined;
            if (key == "eventTimer")
                return { clockCount: this.eventTimer.clockCount };
            return value;
        });
    }
    applyJson(json) {
        const obj = JSON.parse(json);
        Object.assign(this, obj);
    }
    getMemoryData() {
        return [this.ram.buffer];
    }
    updateMemory(data) {
        this.ram = new Uint8Array(data[0]);
    }
    updateScreen(imageData, imageWidth) {
        if (this.cursorSwitchStartValue > 0) {
            if (this.cursorSwitchCountdown == 0) {
                this.cursorOn = !this.cursorOn;
                this.cursorSwitchCountdown = this.cursorSwitchStartValue;
            }
            this.cursorSwitchCountdown--;
        }
    }
    calcTextCharHash(foreground, background, character) {
        return foreground.r + (foreground.g * (2 ** 8)) + (foreground.b * (2 ** 16))
            + (background.r * (2 ** 24)) + (background.g * (2 ** 32)) + (background.b * (2 ** 40))
            + (character * (2 ** 48));
    }
}
exports.GraphicsCard = GraphicsCard;


/***/ }),

/***/ "./src/E86Lib/Components/mdaGraphics.ts":
/*!**********************************************!*\
  !*** ./src/E86Lib/Components/mdaGraphics.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MdaGraphics = void 0;
const graphicsCard_1 = __webpack_require__(/*! ./graphicsCard */ "./src/E86Lib/Components/graphicsCard.ts");
class MdaGraphics extends graphicsCard_1.GraphicsCard {
    constructor() {
        super();
        this.charsetFile = "Fonts/mda.dat";
        this.charsetWidth = 32;
        this.charsetHeight = 8;
        this.charset = new Array(256);
        this.horRetrace = 0;
        this.startAddr = 0xB0000;
        this.setRamSize(0x1000);
        this.charWidth = 9;
        this.charHeight = 14;
        this.screenWidth = 80 * this.charWidth;
        this.screenHeight = 25 * this.charHeight;
        this.textColor = graphicsCard_1.Col.fromRgb(0x32, 0xCD, 0x32);
        this.textHiColor = graphicsCard_1.Col.fromRgb(0x00, 0xFF, 0x00);
        this.backgroundColor = graphicsCard_1.Col.fromRgb(0x00, 0x00, 0x00);
    }
    fillIgnoredFields() {
        super.fillIgnoredFields();
        this.ignoredFields.add("charsetFile");
        this.ignoredFieldsUpdate.add("charset");
    }
    async loadCharSet() {
        await this.loadCharSetInternal(this.charset, this.charsetFile, this.charsetWidth, this.charsetHeight);
    }
    updateScreen(imageData, imageWidth) {
        super.updateScreen(imageData, imageWidth);
        const columnCount = this.screenWidth / this.charWidth;
        const rowCount = this.screenHeight / this.charHeight;
        const rect = new graphicsCard_1.IntRect(0, 0, this.charWidth, this.charHeight);
        const ramCursorPos = this.getCursorPos() * 2;
        let ramPos = 0;
        for (let row = 0; row < rowCount; row++) {
            for (let col = 0; col < columnCount; col++) {
                const attribute = this.ram[ramPos + 1];
                const foreground = attribute & 7;
                const background = (attribute >> 4) & 7;
                const highIntensity = (attribute & 8) > 0;
                let textColor = highIntensity ? this.textHiColor : this.textColor;
                let backgroundColor = this.backgroundColor;
                if (foreground == 0 && background == 7) {
                    const color = textColor;
                    textColor = backgroundColor;
                    backgroundColor = color;
                }
                const charCode = this.ram[ramPos];
                const charArray = this.charset[charCode];
                const charData = this.drawChar(charCode, charArray, textColor, backgroundColor, foreground == 1 && background == 0, ramPos == ramCursorPos && this.cursorOn);
                rect.x = col * this.charWidth;
                rect.y = row * this.charHeight;
                this.writePixels(imageData, imageWidth, charData, rect);
                ramPos += 2;
            }
        }
    }
    in(addr) {
        switch (addr) {
            case 0x3BA:
                this.horRetrace = 1 - this.horRetrace;
                return (this.horRetrace | this.horRetrace << 3) & 0xFF;
        }
        return 0;
    }
    out(addr, value, wordTransfer) {
        switch (addr) {
            case 0x3B4:
                this.setIndexRegister(value & 0xFF);
                break;
            case 0x3B5:
                this.setDataRegister(value & 0xFF);
                break;
            case 0x3B8:
                break;
        }
    }
}
exports.MdaGraphics = MdaGraphics;


/***/ }),

/***/ "./src/E86Lib/Components/vgaGraphics.ts":
/*!**********************************************!*\
  !*** ./src/E86Lib/Components/vgaGraphics.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VgaGraphics = void 0;
const atGraphicsCard_1 = __webpack_require__(/*! ./atGraphicsCard */ "./src/E86Lib/Components/atGraphicsCard.ts");
const graphicsCard_1 = __webpack_require__(/*! ./graphicsCard */ "./src/E86Lib/Components/graphicsCard.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
var VgaMode;
(function (VgaMode) {
    VgaMode[VgaMode["None"] = 0] = "None";
    VgaMode[VgaMode["M01_CGA"] = 1] = "M01_CGA";
    VgaMode[VgaMode["M01_EGA"] = 2] = "M01_EGA";
    VgaMode[VgaMode["M01_VGA"] = 3] = "M01_VGA";
    VgaMode[VgaMode["M03_CGA"] = 4] = "M03_CGA";
    VgaMode[VgaMode["M03_EGA"] = 5] = "M03_EGA";
    VgaMode[VgaMode["M03_VGA"] = 6] = "M03_VGA";
    VgaMode[VgaMode["M04"] = 7] = "M04";
    VgaMode[VgaMode["M06"] = 8] = "M06";
    VgaMode[VgaMode["M07_EGA"] = 9] = "M07_EGA";
    VgaMode[VgaMode["M07_VGA"] = 10] = "M07_VGA";
    VgaMode[VgaMode["M0D"] = 11] = "M0D";
    VgaMode[VgaMode["M0E"] = 12] = "M0E";
    VgaMode[VgaMode["M0F"] = 13] = "M0F";
    VgaMode[VgaMode["M10"] = 14] = "M10";
    VgaMode[VgaMode["M11"] = 15] = "M11";
    VgaMode[VgaMode["M12"] = 16] = "M12";
    VgaMode[VgaMode["M13"] = 17] = "M13";
    VgaMode[VgaMode["MX_320x240"] = 18] = "MX_320x240";
})(VgaMode || (VgaMode = {}));
var DacMode;
(function (DacMode) {
    DacMode[DacMode["Read"] = 0] = "Read";
    DacMode[DacMode["Write"] = 1] = "Write";
})(DacMode || (DacMode = {}));
class VgaGraphics extends atGraphicsCard_1.ATColorGraphicsCard {
    constructor() {
        super();
        this.vgaSwitches = [false, true, true, false];
        this.paletteRam = new Array(16);
        this.dacMask = 0;
        this.videoSubsystemEnableRegister1 = 0;
        this.videoSubsystemEnableRegister2 = 0;
        this.dacEntries = new Array(256);
        this.dacWriteColIndex = 0;
        this.dacReadColIndex = 0;
        this.dacMemR = 0;
        this.dacMemG = 0;
        this.charWidth9Bits = false;
        this.mode = VgaMode.None;
        this.charBoxWidth = this.charWidth = 8;
        this.colCount = this.screenWidth = 640;
        this.lineCount = this.screenHeight = 480;
        this.dacMask = 0xFF;
        this.sequencerRegisters[4] = 2;
        this.calcRetraceValues();
    }
    getModeC256() {
        return (this.gdcRegisters[0x05] & 0x40) > 0;
    }
    getNineDotMode() {
        return (this.sequencerRegisters[1] & 0x01) == 0;
    }
    getAllowSwitchCharSets() {
        return this.characterMapA != this.characterMapB && (this.sequencerRegisters[0x04] & 2) > 0;
    }
    fillIgnoredFields() {
        super.fillIgnoredFields();
        this.ignoredFields.add("vgaSwitches");
    }
    in(addr) {
        if (addr == this.crtBasePort + 0x0A) {
            this.attributeFlipFlop = false;
            const retraceInfo = this.calcRetraceEnable();
            const value = (retraceInfo.vertRetrace ? 8 : 0) + (retraceInfo.enable ? 0 : 1);
            return value & 0xFF;
        }
        switch (addr) {
            case 0x3C2:
                {
                    const vertRetrace = this.calcVertRetrace();
                    let value = vertRetrace ? 0 : 0x80;
                    const switchNo = (this.miscOutputRegister >> 2) & 0x03;
                    value += this.vgaSwitches[switchNo] ? 0 : 0x10;
                    return value & 0xFF;
                }
            case 0x3C3:
                return this.videoSubsystemEnableRegister1;
            case 0x3C4:
                return this.sequencerIndex & 0xFFFF;
            case 0x3C5:
                if (this.sequencerIndex < this.sequencerRegisters.length)
                    return this.sequencerRegisters[this.sequencerIndex];
                return 0;
            case 0x3C6:
                return this.dacMask;
            case 0x3C7:
                return (this.dacMode == DacMode.Read ? 0x00 : 0x03) & 0xFFFF;
            case 0x3C9:
                {
                    if (this.dacMode != DacMode.Read)
                        return 0;
                    const dacIdx = Math.trunc(this.dacReadColIndex / 3);
                    let colVal = 0;
                    switch (this.dacReadColIndex % 3) {
                        case 0:
                            colVal = this.dacEntries[dacIdx].r;
                            break;
                        case 1:
                            colVal = this.dacEntries[dacIdx].g;
                            break;
                        case 2:
                            colVal = this.dacEntries[dacIdx].b;
                            break;
                    }
                    if (++this.dacReadColIndex == 768)
                        this.dacReadColIndex = 0;
                    return (colVal >> 2) & 0xFFFF;
                }
            case 0x3CA:
                return this.featureControlRegister;
            case 0x3CC:
                return this.miscOutputRegister & 0xCF;
            case 0x3CE:
                return this.gdcIndex & 0xFFFF;
            case 0x3CF:
                return (this.gdcIndex < this.gdcRegisters.length ? this.gdcRegisters[this.gdcIndex] : 0) & 0xFFFF;
            case 0x46E8:
                return this.videoSubsystemEnableRegister2;
        }
        return super.in(addr);
    }
    out(addr, value, wordTransfer) {
        switch (addr) {
            case 0x3C0:
                if (this.attributeFlipFlop) {
                    if (this.attributeIndex < this.attributeRegisters.length) {
                        this.attributeRegisters[this.attributeIndex] = value & 0xFF;
                        switch (this.attributeIndex) {
                            case 0x10:
                                this.graphicsMode = (value & 0x01) > 0;
                                this.monochrome = (value & 0x02) > 0;
                                this.charWidth9Bits = (value & 0x04) > 0;
                                this.blink = (value & 0x08) > 0;
                                break;
                            case 0x11:
                                this.overscanColor = this.genColor(value & 0xFF);
                                break;
                            case 0x12:
                                for (let idx = 0; idx < this.colorPlaneEnabled.length; idx++)
                                    this.colorPlaneEnabled[idx] = (value & (1 << idx)) > 0;
                                break;
                            default:
                                if (this.attributeIndex <= 0x0F)
                                    this.paletteRam[this.attributeIndex] = (value & 0x3F) & 0xFF;
                                break;
                        }
                    }
                    this.attributeFlipFlop = !this.attributeFlipFlop;
                }
                else {
                    this.attributeIndex = value & 0x1F;
                    this.attributeFlipFlop = !this.attributeFlipFlop;
                    if (wordTransfer)
                        this.out(addr, (value >> 8) & 0xFFFF, false);
                }
                break;
            case 0x3C3:
                this.videoSubsystemEnableRegister1 = value & 0xFF;
                break;
            case 0x3C5:
                switch (this.sequencerIndex) {
                    case 0x00:
                        break;
                    case 0x01:
                        this.clockMode = value & 0xFF;
                        break;
                    case 0x02:
                        this.mapMaskRegister = value & 0xFF;
                        this.mapMask[0] = (value & 0x01) > 0;
                        this.mapMask[1] = (value & 0x02) > 0;
                        this.mapMask[2] = (value & 0x04) > 0;
                        this.mapMask[3] = (value & 0x08) > 0;
                        break;
                    case 0x03:
                        this.characterMapSelectRegister = value & 0xFF;
                        this.characterMapA = ((value & 0x20) >> 5) + ((value >> 1) & 0x06);
                        this.characterMapB = ((value & 0x10) >> 4) + ((value << 1) & 0x06);
                        break;
                    case 0x04:
                        value |= 2;
                        this.memoryModeRegister = value & 0xFF;
                        this.oddEven = (value & 0x04) == 0;
                        this.chain4 = (value & 0x08) > 0;
                        break;
                }
                if (this.sequencerIndex < this.sequencerRegisters.length)
                    this.sequencerRegisters[this.sequencerIndex] = value & 0xFF;
                break;
            case 0x3C6:
                this.dacMask = value & 0xFF;
                break;
            case 0x3C7:
                this.dacReadColIndex = (value & 0xFF) * 3;
                this.dacMode = DacMode.Read;
                break;
            case 0x3C8:
                this.dacWriteColIndex = (value & 0xFF) * 3;
                this.dacMode = DacMode.Write;
                break;
            case 0x3C9:
                {
                    if (this.dacMode != DacMode.Write)
                        return;
                    const dacIdx = Math.trunc(this.dacWriteColIndex / 3);
                    const colVal = (value << 2) & 0xFF;
                    switch (this.dacWriteColIndex % 3) {
                        case 0:
                            this.dacMemR = colVal;
                            break;
                        case 1:
                            this.dacMemG = colVal;
                            break;
                        case 2:
                            this.dacEntries[dacIdx] = graphicsCard_1.Col.fromRgb(this.dacMemR, this.dacMemG, colVal);
                            break;
                    }
                    if (++this.dacWriteColIndex == 768)
                        this.dacWriteColIndex = 0;
                    break;
                }
            case 0x46E8:
                this.videoSubsystemEnableRegister2 = value & 0xFF;
                break;
            default:
                super.out(addr, value, wordTransfer);
                break;
        }
    }
    internalPoke(value, addrIsEven, relAddr) {
        if (this.writeMode == 3) {
        }
        else
            super.internalPoke(value, addrIsEven, relAddr);
    }
    setDataRegister(value) {
        if ((this.crtRegisters[0x11] & 0x80) == 0 || this.crtIndexReg > 0x07)
            super.setDataRegister(value);
    }
    GetDataRegister() {
        return this.crtIndexReg < this.crtRegisters.length ? this.crtRegisters[this.crtIndexReg] : 0;
    }
    calcMode() {
        const oldMode = this.mode;
        const clockMode = this.sequencerRegisters[1] & 0xFE;
        const mapMask = this.sequencerRegisters[2];
        const memoryMode = this.sequencerRegisters[4];
        const miscOut = this.miscOutputRegister & 0xCC;
        const modeControl = this.crtRegisters[0x17];
        if (this.getModeC256()) {
            this.mode = VgaMode.M13;
        }
        else if (clockMode == 0x08 && memoryMode == 0x03) {
            if (miscOut == 0x40)
                this.mode = VgaMode.M01_CGA;
            else if (miscOut == 0x80)
                this.mode = VgaMode.M01_EGA;
            else if (miscOut == 0x44)
                this.mode = VgaMode.M01_VGA;
        }
        else if (clockMode == 0x00 && memoryMode == 0x03) {
            if (miscOut == 0x40)
                this.mode = VgaMode.M03_CGA;
            else if (miscOut == 0x80)
                this.mode = VgaMode.M03_EGA;
            else if (miscOut == 0x44)
                this.mode = VgaMode.M03_VGA;
        }
        else if (clockMode == 0x08 && memoryMode == 0x02) {
            this.mode = VgaMode.M04;
        }
        else if (clockMode == 0x00 && memoryMode == 0x06) {
            if (miscOut == 0x40) {
                if (mapMask == 0x01)
                    this.mode = VgaMode.M06;
                else if (mapMask == 0x0F)
                    this.mode = VgaMode.M0E;
            }
            else if (miscOut == 0x80)
                this.mode = VgaMode.M10;
            else if (miscOut == 0xC0) {
                if (modeControl == 0xC3)
                    this.mode = VgaMode.M11;
                else if (modeControl == 0xE3)
                    this.mode = VgaMode.M12;
            }
        }
        else if (clockMode == 0x00 && memoryMode == 0x03) {
            this.mode = this.getNineDotMode() ? VgaMode.M07_VGA : VgaMode.M07_EGA;
        }
        else if (clockMode == 0x08 && memoryMode == 0x06)
            this.mode = VgaMode.M0D;
        if (this.mode != oldMode) {
            this.modeChanged();
        }
    }
    modeChanged() {
        super.modeChanged();
        switch ((this.miscOutputRegister >> 6) & 0x03) {
            case 1:
                this.lineCount = 400;
                break;
            case 2:
                this.lineCount = 350;
                break;
            case 3:
                this.lineCount = 480;
                break;
        }
        const clockTicksPerRow = ((this.miscOutputRegister >> 2) & 0x03) == 0 ? 640 : 720;
        if ((this.clockMode & 0x08) > 0)
            this.colCount = clockTicksPerRow >> 1;
        else
            this.colCount = clockTicksPerRow;
        this.calcRetraceValues();
    }
    gen16ColPalette() {
        const useColSelReg = (this.attributeRegisters[0x10] & 0x80) > 0;
        const colSelReg = this.attributeRegisters[0x14];
        const palette = new Array(16);
        for (let idx = 0; idx < 16; idx++) {
            const palVal = this.paletteRam[idx] & 0x3F;
            const dacIdx = useColSelReg ? (palVal & 0x0F) | ((colSelReg & 0x0F) << 4) : palVal | ((colSelReg & 0x0C) << 4);
            palette[idx] = this.dacEntries[dacIdx & this.dacMask];
        }
        return palette;
    }
    updateDimensions() {
        this.calcMode();
        switch (this.mode) {
            case VgaMode.M01_CGA:
                this.screenWidth = 320;
                this.screenHeight = 200;
                break;
            case VgaMode.M01_EGA:
                this.screenWidth = 320;
                this.screenHeight = 350;
                break;
            case VgaMode.M01_VGA:
                this.screenWidth = 360;
                this.screenHeight = 400;
                break;
            case VgaMode.M03_CGA:
                this.screenWidth = 640;
                this.screenHeight = 200;
                break;
            case VgaMode.M03_EGA:
                this.screenWidth = 640;
                this.screenHeight = 350;
                break;
            case VgaMode.M03_VGA:
                this.screenWidth = 720;
                this.screenHeight = 400;
                break;
            case VgaMode.M04:
                this.screenWidth = 320;
                this.screenHeight = 200;
                break;
            case VgaMode.M06:
                this.screenWidth = 640;
                this.screenHeight = 200;
                break;
            case VgaMode.M07_EGA:
                this.screenWidth = 720;
                this.screenHeight = 350;
                break;
            case VgaMode.M07_VGA:
                this.screenWidth = 720;
                this.screenHeight = 400;
                break;
            case VgaMode.M0D:
                this.screenWidth = 320;
                this.screenHeight = 200;
                break;
            case VgaMode.M0E:
                this.screenWidth = 640;
                this.screenHeight = 200;
                break;
            case VgaMode.M0F:
                this.screenWidth = 640;
                this.screenHeight = 350;
                break;
            case VgaMode.M10:
                this.screenWidth = 640;
                this.screenHeight = 350;
                break;
            case VgaMode.M11:
                this.screenWidth = 640;
                this.screenHeight = 480;
                break;
            case VgaMode.M12:
                this.screenWidth = 640;
                this.screenHeight = 480;
                break;
            case VgaMode.M13:
                this.screenWidth = 320;
                this.screenHeight = 200;
                break;
            case VgaMode.MX_320x240:
                this.screenWidth = 320;
                this.screenHeight = 240;
                break;
        }
    }
    updateScreen(imageData, imageWidth) {
        super.updateScreen(imageData, imageWidth);
        if (settings_1.Settings.noScreenUpdateWhileRetrace)
            this.waitForScreenDraw();
        this.charBoxWidth = this.getNineDotMode() ? 9 : 8;
        switch (this.mode) {
            case VgaMode.M01_CGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case VgaMode.M01_EGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case VgaMode.M01_VGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case VgaMode.M03_CGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case VgaMode.M03_EGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case VgaMode.M03_VGA:
                this.updateTextScreen(imageData, imageWidth, this.egaPalette);
                break;
            case VgaMode.M04:
                this.updateScreenCgaLo(imageData);
                break;
            case VgaMode.M06:
                this.screenWidth = 640;
                this.screenHeight = 200;
                this.updateScreenCgaMono(imageData, 640, 200);
                break;
            case VgaMode.M07_EGA:
                this.screenWidth = 720;
                this.screenHeight = 350;
                break;
            case VgaMode.M07_VGA:
                this.screenWidth = 720;
                this.screenHeight = 400;
                break;
            case VgaMode.M0D:
                this.screenWidth = 320;
                this.screenHeight = 200;
                this.updateScreen16Col(imageData, 320, 200, this.cgaPalette);
                break;
            case VgaMode.M0E:
                this.screenWidth = 640;
                this.screenHeight = 200;
                this.updateScreen16Col(imageData, 640, 200, this.cgaPalette);
                break;
            case VgaMode.M0F:
                this.screenWidth = 640;
                this.screenHeight = 350;
                break;
            case VgaMode.M10:
                this.screenWidth = 640;
                this.screenHeight = 350;
                this.updateScreen16Col(imageData, 640, 350, this.gen16ColPalette());
                break;
            case VgaMode.M11:
                this.screenWidth = 640;
                this.screenHeight = 480;
                this.updateScreenVgaMono(imageData, 640, 480);
                break;
            case VgaMode.M12:
                this.screenWidth = 640;
                this.screenHeight = 480;
                this.updateScreen16Col(imageData, 640, 480, this.gen16ColPalette());
                break;
            case VgaMode.M13:
                this.screenWidth = 320;
                this.screenHeight = 200;
                this.updateScreen256ColChain4(imageData, 320, 200);
                break;
            case VgaMode.MX_320x240:
                this.screenWidth = 640;
                this.screenHeight = 480;
                break;
        }
    }
    updateScreen256ColChain4(imageData, width, height) {
        const data = new Uint32Array(imageData.buffer);
        const colors = this.dacEntries;
        const virtualLineWidth = this.getCrtOffset() == 0 ? Math.trunc(width / 4) : this.getCrtOffset() << 1;
        let ramIndex = this.getCrtStartAddr();
        let dataIndex = 0;
        const horPanning = this.getHorizontalPixelPanning();
        const realWidth = horPanning == 0 ? width : width + 4;
        for (let row = 0; row < height; row++) {
            let rowRamIndex = ramIndex & 0xFFFF;
            for (let col = 0; col < realWidth; col += 4, rowRamIndex++) {
                for (let idx = 0; idx < 4; idx++) {
                    if (horPanning == 0 || (col + idx >= horPanning && col + idx < realWidth - 8 + horPanning))
                        data[dataIndex++] = colors[this.planes[idx][rowRamIndex]].value;
                }
            }
            ramIndex += virtualLineWidth;
        }
    }
    updateScreenVgaMono(imageData, width, height) {
        const data = new Uint32Array(imageData.buffer);
        const foreground = graphicsCard_1.Col.fromRgb(0xFF, 0xFF, 0xFF);
        const background = this.overscanColor;
        let ramIndex = 0;
        let dataIndex = 0;
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col += 8) {
                let b = this.planes[0][ramIndex];
                for (let idx = 0; idx < 8; idx++) {
                    if ((b & 0x80) > 0)
                        data[dataIndex++] = foreground.value;
                    else
                        data[dataIndex++] = background.value;
                    b <<= 1;
                }
                ramIndex++;
            }
        }
    }
}
exports.VgaGraphics = VgaGraphics;


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

/***/ "./src/screen-worker-impl.ts":
/*!***********************************!*\
  !*** ./src/screen-worker-impl.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWorker = void 0;
const settings_1 = __webpack_require__(/*! ./E86Lib/settings */ "./src/E86Lib/settings.ts");
const mdaGraphics_1 = __webpack_require__(/*! ./E86Lib/Components/mdaGraphics */ "./src/E86Lib/Components/mdaGraphics.ts");
const cgaGraphics_1 = __webpack_require__(/*! ./E86Lib/Components/cgaGraphics */ "./src/E86Lib/Components/cgaGraphics.ts");
const egaGraphics_1 = __webpack_require__(/*! ./E86Lib/Components/egaGraphics */ "./src/E86Lib/Components/egaGraphics.ts");
const vgaGraphics_1 = __webpack_require__(/*! ./E86Lib/Components/vgaGraphics */ "./src/E86Lib/Components/vgaGraphics.ts");
const screen_1 = __webpack_require__(/*! ./screen */ "./src/screen.ts");
class ScreenWorker {
    constructor(context) {
        this.context = context;
        this.context.onmessage = (ev) => {
            const action = ev.data[0];
            switch (action) {
                case "initialize":
                    this.emuWorkerPort = ev.data[1];
                    this.emuWorkerPort.onmessage = (ev) => {
                        const action = ev.data[0];
                        switch (action) {
                            case "initialize":
                                this.initialize(ev.data[1], ev.data[2]);
                                this.context.postMessage(["initialized"]);
                                break;
                            case "updatescreen":
                                {
                                    const screenData = new screen_1.AsyncScreenData();
                                    screenData.dim = {
                                        width: ev.data[2],
                                        height: ev.data[3]
                                    };
                                    if (screenData.dim.width === 0 || screenData.dim.height === 0)
                                        return;
                                    this.graphicsCard.applyJson(ev.data[1]);
                                    this.graphicsCard.updateMemory(ev.data.slice(4));
                                    const data = new Uint8ClampedArray(screenData.dim.width * screenData.dim.height * 4);
                                    screenData.buffer = data.buffer;
                                    this.graphicsCard.updateScreen(data, screenData.dim.width);
                                    this.context.postMessage(["screenupdated", screenData.dim, screenData.buffer], [screenData.buffer]);
                                }
                        }
                    };
                    break;
            }
        };
    }
    initialize(graphicsType, graphicsJson) {
        switch (graphicsType) {
            case settings_1.GraphicsType.MDA:
                this.graphicsCard = new mdaGraphics_1.MdaGraphics();
                break;
            case settings_1.GraphicsType.CGA:
                this.graphicsCard = new cgaGraphics_1.CgaGraphics();
                break;
            case settings_1.GraphicsType.EGA:
                this.graphicsCard = new egaGraphics_1.EgaGraphics();
                break;
            case settings_1.GraphicsType.VGA:
                this.graphicsCard = new vgaGraphics_1.VgaGraphics();
                break;
        }
        this.graphicsCard.applyJson(graphicsJson);
    }
}
exports.ScreenWorker = ScreenWorker;


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


/***/ })

/******/ });
//# sourceMappingURL=screen-worker.js.map