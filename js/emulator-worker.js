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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/awesome-typescript-loader/dist/entry.js!./src/emulator-worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/awesome-typescript-loader/dist/entry.js!./src/emulator-worker.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/awesome-typescript-loader/dist/entry.js!./src/emulator-worker.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const emulator_worker_impl_1 = __webpack_require__(/*! ./emulator-worker-impl */ "./src/emulator-worker-impl.ts");
const context = self;
new emulator_worker_impl_1.EmulatorWorker(context);


/***/ }),

/***/ "./src/E86Lib/CPU/clockCycles.ts":
/*!***************************************!*\
  !*** ./src/E86Lib/CPU/clockCycles.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClockCycles386 = exports.ClockCycles8086 = void 0;
class ClockCycles8086 {
}
exports.ClockCycles8086 = ClockCycles8086;
ClockCycles8086.Rep = 7;
ClockCycles8086.Lock = 2;
ClockCycles8086.SegOverride = 2;
ClockCycles8086.Aaa = 8;
ClockCycles8086.Aad = 15;
ClockCycles8086.Aam = 19;
ClockCycles8086.Aas = 7;
ClockCycles8086.AdcRegRmReg = 3;
ClockCycles8086.AdcRegRmMem = 10;
ClockCycles8086.AdcRmRegReg = 3;
ClockCycles8086.AdcRmRegMem = 10;
ClockCycles8086.AdcAlImm = 3;
ClockCycles8086.AdcAxImm = 4;
ClockCycles8086.AdcRmImmReg = 4;
ClockCycles8086.AdcRmImmMem = 16;
ClockCycles8086.AddRegRmReg = 3;
ClockCycles8086.AddRegRmMem = 10;
ClockCycles8086.AddRmRegReg = 3;
ClockCycles8086.AddRmRegMem = 10;
ClockCycles8086.AddAlImm = 3;
ClockCycles8086.AddAxImm = 4;
ClockCycles8086.AddRmImmReg = 4;
ClockCycles8086.AddRmImmMem = 16;
ClockCycles8086.AndRegRmReg = 3;
ClockCycles8086.AndRegRmMem = 10;
ClockCycles8086.AndRmRegReg = 3;
ClockCycles8086.AndRmRegMem = 10;
ClockCycles8086.AndRmImmReg = 4;
ClockCycles8086.AndRmImmMem = 16;
ClockCycles8086.AndAlImm = 3;
ClockCycles8086.AndAxImm = 4;
ClockCycles8086.Bound = 34;
ClockCycles8086.CallNear = 19;
ClockCycles8086.CallFar = 31;
ClockCycles8086.CallNearReg = 13;
ClockCycles8086.CallNearMem = 19;
ClockCycles8086.CallFarRm = 38;
ClockCycles8086.Cbw = 2;
ClockCycles8086.Clc = 2;
ClockCycles8086.Cld = 2;
ClockCycles8086.Cli = 2;
ClockCycles8086.Cmc = 2;
ClockCycles8086.CmpRegRmReg = 3;
ClockCycles8086.CmpRegRmMem = 10;
ClockCycles8086.CmpRmRegReg = 3;
ClockCycles8086.CmpRmRegMem = 10;
ClockCycles8086.CmpAlImm = 3;
ClockCycles8086.CmpAxImm = 4;
ClockCycles8086.CmpRmImmReg = 3;
ClockCycles8086.CmpRmImmMem = 10;
ClockCycles8086.Cmps = 22;
ClockCycles8086.Cwd = 4;
ClockCycles8086.Daa = 4;
ClockCycles8086.Das = 4;
ClockCycles8086.DivReg = 29;
ClockCycles8086.DivMem = 35;
ClockCycles8086.DivReg16 = 38;
ClockCycles8086.DivMem16 = 44;
ClockCycles8086.DecReg = 3;
ClockCycles8086.DecMem = 15;
ClockCycles8086.EnterLvl0 = 19;
ClockCycles8086.EnterLvl1 = 29;
ClockCycles8086.EnterInitial = 26;
ClockCycles8086.EnterPerLvl = 20;
ClockCycles8086.Hlt = 2;
ClockCycles8086.IdivReg = 48;
ClockCycles8086.IdivMem = 54;
ClockCycles8086.IdivReg16 = 57;
ClockCycles8086.IdivMem16 = 63;
ClockCycles8086.ImulImmReg = 24;
ClockCycles8086.ImulImmMem = 31;
ClockCycles8086.ImulImmReg16 = 24;
ClockCycles8086.ImulImmMem16 = 31;
ClockCycles8086.ImulReg = 27;
ClockCycles8086.ImulMem = 33;
ClockCycles8086.ImulReg16 = 36;
ClockCycles8086.ImulMem16 = 42;
ClockCycles8086.InImm = 10;
ClockCycles8086.InDx = 8;
ClockCycles8086.IncReg = 3;
ClockCycles8086.IncMem = 15;
ClockCycles8086.Ins = 14;
ClockCycles8086.InsRep = 8;
ClockCycles8086.Int3 = 45;
ClockCycles8086.IntImm = 47;
ClockCycles8086.Into = 48;
ClockCycles8086.IntoNoInt = 4;
ClockCycles8086.Iret = 28;
ClockCycles8086.JumpCondMet = 13;
ClockCycles8086.JumpCondNotMet = 4;
ClockCycles8086.JcxzMet = 15;
ClockCycles8086.JcxzNotMet = 5;
ClockCycles8086.JmpShort = 14;
ClockCycles8086.JmpNear = 14;
ClockCycles8086.JmpNearReg = 11;
ClockCycles8086.JmpNearMem = 17;
ClockCycles8086.JmpFar = 14;
ClockCycles8086.JmpFarRm = 26;
ClockCycles8086.Lahf = 2;
ClockCycles8086.Lds = 18;
ClockCycles8086.Lea = 6;
ClockCycles8086.Leave = 8;
ClockCycles8086.Les = 18;
ClockCycles8086.Lods = 12;
ClockCycles8086.LodsRep = 11;
ClockCycles8086.Loop = 16;
ClockCycles8086.LoopFinished = 6;
ClockCycles8086.MovAxMemoffs = 8;
ClockCycles8086.MovMemoffsAx = 9;
ClockCycles8086.MovRegImm8 = 3;
ClockCycles8086.MovRegImm16 = 4;
ClockCycles8086.MovRmImm8 = 12;
ClockCycles8086.MovRmImm16 = 13;
ClockCycles8086.MovRmRegReg = 2;
ClockCycles8086.MovRmRegMem = 12;
ClockCycles8086.MovRegRmReg = 2;
ClockCycles8086.MovRegRmMem = 9;
ClockCycles8086.MovRmSegReg = 2;
ClockCycles8086.MovRmSegMem = 11;
ClockCycles8086.MovSegRmReg = 2;
ClockCycles8086.MovSegRmMem = 9;
ClockCycles8086.Movs = 14;
ClockCycles8086.MovsRep = 8;
ClockCycles8086.MulReg = 27;
ClockCycles8086.MulMem = 33;
ClockCycles8086.MulReg16 = 36;
ClockCycles8086.MulMem16 = 42;
ClockCycles8086.NegRmReg = 3;
ClockCycles8086.NegRmMem = 10;
ClockCycles8086.Nop = 3;
ClockCycles8086.NotRmReg = 3;
ClockCycles8086.NotRmMem = 10;
ClockCycles8086.OrRegRmReg = 3;
ClockCycles8086.OrRegRmMem = 10;
ClockCycles8086.OrRmRegReg = 3;
ClockCycles8086.OrRmRegMem = 10;
ClockCycles8086.OrAlImm = 3;
ClockCycles8086.OrAxImm = 4;
ClockCycles8086.OrRmImmReg = 4;
ClockCycles8086.OrRmImmMem = 16;
ClockCycles8086.OutImm = 9;
ClockCycles8086.OutDx = 7;
ClockCycles8086.Outs = 14;
ClockCycles8086.OutsRep = 8;
ClockCycles8086.PopMem = 20;
ClockCycles8086.PopReg = 10;
ClockCycles8086.PopSeg = 8;
ClockCycles8086.Popa = 51;
ClockCycles8086.Popf = 8;
ClockCycles8086.PushMem = 20;
ClockCycles8086.PushReg = 10;
ClockCycles8086.PushSeg = 9;
ClockCycles8086.Pusha = 36;
ClockCycles8086.Pushf = 9;
ClockCycles8086.PushImm8 = 10;
ClockCycles8086.PushImm16 = 10;
ClockCycles8086.PushRm = 16;
ClockCycles8086.Ret = 16;
ClockCycles8086.RetImm = 18;
ClockCycles8086.Retf = 22;
ClockCycles8086.RetfImm = 25;
ClockCycles8086.Sahf = 3;
ClockCycles8086.SbbRegRmReg = 3;
ClockCycles8086.SbbRegRmMem = 10;
ClockCycles8086.SbbRmRegReg = 3;
ClockCycles8086.SbbRmRegMem = 10;
ClockCycles8086.SbbAlImm = 3;
ClockCycles8086.SbbAxImm = 4;
ClockCycles8086.SbbRmImmReg = 4;
ClockCycles8086.SbbRmImmMem = 16;
ClockCycles8086.Scas = 15;
ClockCycles8086.SetFlag = 2;
ClockCycles8086.ShiftRmReg = 2;
ClockCycles8086.ShiftRmMem = 15;
ClockCycles8086.ShiftRmImmReg = 5;
ClockCycles8086.ShiftRmImmMem = 17;
ClockCycles8086.ShiftRmClReg = 5;
ClockCycles8086.ShiftRmClMem = 17;
ClockCycles8086.Stos = 10;
ClockCycles8086.StosRep = 9;
ClockCycles8086.SubRegRmReg = 3;
ClockCycles8086.SubRegRmMem = 10;
ClockCycles8086.SubRmRegReg = 3;
ClockCycles8086.SubRmRegMem = 10;
ClockCycles8086.SubAlImm = 3;
ClockCycles8086.SubAxImm = 4;
ClockCycles8086.SubRmImmReg = 4;
ClockCycles8086.SubRmImmMem = 16;
ClockCycles8086.TestReg = 3;
ClockCycles8086.TestMem = 10;
ClockCycles8086.TestAlImm = 3;
ClockCycles8086.TestAxImm = 4;
ClockCycles8086.TestRmImmReg = 4;
ClockCycles8086.TestRmImmMem = 10;
ClockCycles8086.Wait = 6;
ClockCycles8086.XchgReg = 3;
ClockCycles8086.XchgRegRmReg = 4;
ClockCycles8086.XchgRegRmMem = 17;
ClockCycles8086.Xlat = 11;
ClockCycles8086.XorRegRmReg = 3;
ClockCycles8086.XorRegRmMem = 10;
ClockCycles8086.XorRmRegReg = 3;
ClockCycles8086.XorRmRegMem = 10;
ClockCycles8086.XorAlImm = 3;
ClockCycles8086.XorAxImm = 4;
ClockCycles8086.XorRmImmReg = 4;
ClockCycles8086.XorRmImmMem = 16;
ClockCycles8086.FpuInstruction = 3;
ClockCycles8086.HardInterrupt = 40;
class ClockCycles386 {
}
exports.ClockCycles386 = ClockCycles386;
ClockCycles386.Rep = 2;
ClockCycles386.Lock = 2;
ClockCycles386.SegOverride = 2;
ClockCycles386.Aaa = 4;
ClockCycles386.Aad = 19;
ClockCycles386.Aam = 17;
ClockCycles386.Aas = 4;
ClockCycles386.AdcRegRmReg = 2;
ClockCycles386.AdcRegRmMem = 6;
ClockCycles386.AdcRmRegReg = 2;
ClockCycles386.AdcRmRegMem = 7;
ClockCycles386.AdcAlImm = 2;
ClockCycles386.AdcAxImm = 2;
ClockCycles386.AdcRmImmReg = 2;
ClockCycles386.AdcRmImmMem = 7;
ClockCycles386.AddRegRmReg = 2;
ClockCycles386.AddRegRmMem = 6;
ClockCycles386.AddRmRegReg = 2;
ClockCycles386.AddRmRegMem = 7;
ClockCycles386.AddAlImm = 2;
ClockCycles386.AddAxImm = 2;
ClockCycles386.AddRmImmReg = 2;
ClockCycles386.AddRmImmMem = 7;
ClockCycles386.AndRegRmReg = 2;
ClockCycles386.AndRegRmMem = 6;
ClockCycles386.AndRmRegReg = 2;
ClockCycles386.AndRmRegMem = 7;
ClockCycles386.AndAlImm = 2;
ClockCycles386.AndAxImm = 2;
ClockCycles386.AndRmImmReg = 2;
ClockCycles386.AndRmImmMem = 7;
ClockCycles386.ArplReg = 20;
ClockCycles386.ArplMem = 21;
ClockCycles386.Bound = 10;
ClockCycles386.BsfBase = 10;
ClockCycles386.BsfBit = 3;
ClockCycles386.BtReg = 3;
ClockCycles386.BtMem = 10;
ClockCycles386.BtImmReg = 3;
ClockCycles386.BtImmMem = 6;
ClockCycles386.BtcReg = 6;
ClockCycles386.BtcMem = 13;
ClockCycles386.BtcImmReg = 6;
ClockCycles386.BtcImmMem = 8;
ClockCycles386.CallNear = 7;
ClockCycles386.CallFar = 17;
ClockCycles386.CallNearReg = 7;
ClockCycles386.CallNearMem = 11;
ClockCycles386.CallFarRm = 22;
ClockCycles386.Cbw = 3;
ClockCycles386.Clc = 2;
ClockCycles386.Cld = 2;
ClockCycles386.Cli = 3;
ClockCycles386.Clts = 5;
ClockCycles386.Cmc = 2;
ClockCycles386.CmpRegRmReg = 2;
ClockCycles386.CmpRegRmMem = 6;
ClockCycles386.CmpRmRegReg = 2;
ClockCycles386.CmpRmRegMem = 5;
ClockCycles386.CmpAlImm = 2;
ClockCycles386.CmpAxImm = 2;
ClockCycles386.CmpRmImmReg = 2;
ClockCycles386.CmpRmImmMem = 5;
ClockCycles386.Cmps = 10;
ClockCycles386.Cwd = 2;
ClockCycles386.Daa = 4;
ClockCycles386.Das = 4;
ClockCycles386.DecReg = 2;
ClockCycles386.DecMem = 6;
ClockCycles386.DivReg = 14;
ClockCycles386.DivMem = 17;
ClockCycles386.DivReg16 = 22;
ClockCycles386.DivMem16 = 25;
ClockCycles386.DivReg32 = 38;
ClockCycles386.DivMem32 = 41;
ClockCycles386.EnterLvl0 = 10;
ClockCycles386.EnterLvl1 = 12;
ClockCycles386.EnterInitial = 15;
ClockCycles386.EnterPerLvl = 4;
ClockCycles386.Hlt = 5;
ClockCycles386.IdivReg = 19;
ClockCycles386.IdivMem = 19;
ClockCycles386.IdivReg16 = 27;
ClockCycles386.IdivMem16 = 27;
ClockCycles386.IdivReg32 = 43;
ClockCycles386.IdivMem32 = 43;
ClockCycles386.ImulImmReg = 12;
ClockCycles386.ImulImmMem = 15;
ClockCycles386.ImulImmReg16 = 16;
ClockCycles386.ImulImmMem16 = 19;
ClockCycles386.ImulImmReg32 = 24;
ClockCycles386.ImulImmMem32 = 27;
ClockCycles386.ImulReg = 12;
ClockCycles386.ImulMem = 15;
ClockCycles386.ImulReg16 = 16;
ClockCycles386.ImulMem16 = 19;
ClockCycles386.ImulReg32 = 24;
ClockCycles386.ImulMem32 = 27;
ClockCycles386.InImm = 12;
ClockCycles386.InDx = 13;
ClockCycles386.IncReg = 2;
ClockCycles386.IncMem = 6;
ClockCycles386.Ins = 15;
ClockCycles386.InsRep = 15;
ClockCycles386.Int3 = 33;
ClockCycles386.IntImm = 37;
ClockCycles386.Into = 35;
ClockCycles386.IntoNo = 3;
ClockCycles386.Iret = 22;
ClockCycles386.JumpCondMet = 7;
ClockCycles386.JumpCondNotMet = 3;
ClockCycles386.JcxzMet = 9;
ClockCycles386.JcxzNotMet = 5;
ClockCycles386.JmpShort = 7;
ClockCycles386.JmpNear = 7;
ClockCycles386.JmpNearReg = 7;
ClockCycles386.JmpNearMem = 10;
ClockCycles386.JmpFar = 12;
ClockCycles386.JmpFarRm = 43;
ClockCycles386.Lahf = 2;
ClockCycles386.Lar = 16;
ClockCycles386.Lds = 7;
ClockCycles386.Lea = 2;
ClockCycles386.Leave = 4;
ClockCycles386.LidtLgdt = 11;
ClockCycles386.Lldt = 20;
ClockCycles386.Ltr = 27;
ClockCycles386.LmswReg = 10;
ClockCycles386.LmswMem = 13;
ClockCycles386.Lods = 5;
ClockCycles386.LodsRep = 5;
ClockCycles386.Loop = 11;
ClockCycles386.LoopFinished = 2;
ClockCycles386.MovAxMemoffs = 4;
ClockCycles386.MovMemoffsAx = 2;
ClockCycles386.MovRegImm8 = 2;
ClockCycles386.MovRegImm16 = 2;
ClockCycles386.MovRmImm8 = 2;
ClockCycles386.MovRmImm16 = 2;
ClockCycles386.MovRmRegReg = 2;
ClockCycles386.MovRmRegMem = 2;
ClockCycles386.MovRegRmReg = 2;
ClockCycles386.MovRegRmMem = 4;
ClockCycles386.MovRmSegReg = 2;
ClockCycles386.MovRmSegMem = 2;
ClockCycles386.MovSegRmReg = 2;
ClockCycles386.MovSegRmMem = 5;
ClockCycles386.MovRegCr = 6;
ClockCycles386.MovCr0Reg = 10;
ClockCycles386.MovCr2Reg = 4;
ClockCycles386.MovCr3Reg = 5;
ClockCycles386.MovDr0Reg = 22;
ClockCycles386.MovDr6Reg = 16;
ClockCycles386.MovRegDr0 = 22;
ClockCycles386.MovRegDr6 = 14;
ClockCycles386.MovRegTr = 12;
ClockCycles386.MovTrReg = 12;
ClockCycles386.Movs = 7;
ClockCycles386.MovsRep = 7;
ClockCycles386.MovsxReg = 3;
ClockCycles386.MovsxMem = 6;
ClockCycles386.MovzxReg = 3;
ClockCycles386.MovzxMem = 6;
ClockCycles386.MulReg = 12;
ClockCycles386.MulMem = 15;
ClockCycles386.MulReg16 = 16;
ClockCycles386.MulMem16 = 19;
ClockCycles386.MulReg32 = 24;
ClockCycles386.MulMem32 = 27;
ClockCycles386.NegRmReg = 2;
ClockCycles386.NegRmMem = 6;
ClockCycles386.Nop = 3;
ClockCycles386.NotRmReg = 2;
ClockCycles386.NotRmMem = 6;
ClockCycles386.OrRegRmReg = 2;
ClockCycles386.OrRegRmMem = 7;
ClockCycles386.OrRmRegReg = 2;
ClockCycles386.OrRmRegMem = 6;
ClockCycles386.OrAlImm = 2;
ClockCycles386.OrAxImm = 2;
ClockCycles386.OrRmImmReg = 2;
ClockCycles386.OrRmImmMem = 7;
ClockCycles386.OutImm = 10;
ClockCycles386.OutDx = 11;
ClockCycles386.Outs = 14;
ClockCycles386.OutsRep = 14;
ClockCycles386.PopMem = 5;
ClockCycles386.PopReg = 4;
ClockCycles386.PopSeg = 7;
ClockCycles386.Popa = 24;
ClockCycles386.Popf = 5;
ClockCycles386.PushMem = 5;
ClockCycles386.PushReg = 2;
ClockCycles386.PushSeg = 2;
ClockCycles386.Pusha = 18;
ClockCycles386.Pushf = 4;
ClockCycles386.PushImm8 = 2;
ClockCycles386.PushImm16 = 2;
ClockCycles386.PushRm = 2;
ClockCycles386.Ret = 10;
ClockCycles386.RetImm = 10;
ClockCycles386.Retf = 18;
ClockCycles386.RetfImm = 18;
ClockCycles386.Sahf = 3;
ClockCycles386.SbbRegRmReg = 2;
ClockCycles386.SbbRegRmMem = 7;
ClockCycles386.SbbRmRegReg = 2;
ClockCycles386.SbbRmRegMem = 6;
ClockCycles386.SbbAlImm = 2;
ClockCycles386.SbbAxImm = 2;
ClockCycles386.SbbRmImmReg = 2;
ClockCycles386.SbbRmImmMem = 7;
ClockCycles386.Scas = 7;
ClockCycles386.SetCondMet = 5;
ClockCycles386.SetCondNotMet = 4;
ClockCycles386.SetFlag = 2;
ClockCycles386.ShiftRmReg = 3;
ClockCycles386.ShiftRmMem = 7;
ClockCycles386.ShiftRmImmReg = 3;
ClockCycles386.ShiftRmImmMem = 7;
ClockCycles386.ShiftRmClReg = 3;
ClockCycles386.ShiftRmClMem = 7;
ClockCycles386.ShldReg = 3;
ClockCycles386.ShldMem = 7;
ClockCycles386.SidtSgdt = 9;
ClockCycles386.Sldt = 2;
ClockCycles386.SmswReg = 2;
ClockCycles386.SmswMem = 3;
ClockCycles386.Stos = 4;
ClockCycles386.StosRep = 4;
ClockCycles386.Str = 25;
ClockCycles386.SubRegRmReg = 2;
ClockCycles386.SubRegRmMem = 7;
ClockCycles386.SubRmRegReg = 2;
ClockCycles386.SubRmRegMem = 6;
ClockCycles386.SubAlImm = 2;
ClockCycles386.SubAxImm = 2;
ClockCycles386.SubRmImmReg = 2;
ClockCycles386.SubRmImmMem = 7;
ClockCycles386.TestReg = 2;
ClockCycles386.TestMem = 5;
ClockCycles386.TestAlImm = 2;
ClockCycles386.TestAxImm = 2;
ClockCycles386.TestRmImmReg = 2;
ClockCycles386.TestRmImmMem = 5;
ClockCycles386.Wait = 6;
ClockCycles386.XchgReg = 3;
ClockCycles386.XchgRegRmReg = 3;
ClockCycles386.XchgRegRmMem = 5;
ClockCycles386.Xlat = 5;
ClockCycles386.XorRegRmReg = 2;
ClockCycles386.XorRegRmMem = 7;
ClockCycles386.XorRmRegReg = 2;
ClockCycles386.XorRmRegMem = 6;
ClockCycles386.XorAlImm = 2;
ClockCycles386.XorAxImm = 2;
ClockCycles386.XorRmImmReg = 2;
ClockCycles386.XorRmImmMem = 7;
ClockCycles386.FpuInstruction = 3;
ClockCycles386.HardInterrupt = 40;


/***/ }),

/***/ "./src/E86Lib/CPU/cpu186.ts":
/*!**********************************!*\
  !*** ./src/E86Lib/CPU/cpu186.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpu186 = void 0;
const cpuUtils_1 = __webpack_require__(/*! ./cpuUtils */ "./src/E86Lib/CPU/cpuUtils.ts");
const flags_1 = __webpack_require__(/*! ./flags */ "./src/E86Lib/CPU/flags.ts");
const clockCycles_1 = __webpack_require__(/*! ./clockCycles */ "./src/E86Lib/CPU/clockCycles.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
class InstrInfo {
}
class EffAddrInfo {
}
class Cpu186 {
    constructor(memMapper, portMapper) {
        this.parities = new Array(0x100);
        this.flags = new flags_1.Flags16();
        this.instStartIp = 0;
        this.repeatIp = 0;
        this.cpuEvents = new Array();
        this.eventGen = 0;
        this.AX = 0;
        this.BX = 0;
        this.CX = 0;
        this.DX = 0;
        this.SP = 0;
        this.BP = 0;
        this.SI = 0;
        this.DI = 0;
        this.IP = 0;
        this.CS = 0;
        this.SS = 0;
        this.ES = 0;
        this.DS = 0;
        this.instCount = 0;
        this.clockCount = 0;
        this.workLoad = 0;
        this.memoryProvider = memMapper;
        this.portProvider = portMapper;
        this.initParities();
        this.execReset();
    }
    getAL() {
        return this.AX & 0xFF;
    }
    setAL(value) {
        this.AX = (this.AX & 0xFF00) | (value & 0xFF);
    }
    getAH() {
        return (this.AX >> 8) & 0xFF;
    }
    setAH(value) {
        this.AX = (this.AX & 0x00FF) | ((value & 0xFF) << 8);
    }
    getBL() {
        return this.BX & 0xFF;
    }
    setBL(value) {
        this.BX = (this.BX & 0xFF00) | (value & 0xFF);
    }
    getBH() {
        return (this.BX >> 8) & 0xFF;
    }
    setBH(value) {
        this.BX = (this.BX & 0x00FF) | ((value & 0xFF) << 8);
    }
    getCL() {
        return this.CX & 0xFF;
    }
    setCL(value) {
        this.CX = (this.CX & 0xFF00) | (value & 0xFF);
    }
    getCH() {
        return (this.CX >> 8) & 0xFF;
    }
    setCH(value) {
        this.CX = (this.CX & 0x00FF) | ((value & 0xFF) << 8);
    }
    getDL() {
        return this.DX & 0xFF;
    }
    setDL(value) {
        this.DX = (this.DX & 0xFF00) | (value & 0xFF);
    }
    getDH() {
        return (this.DX >> 8) & 0xFF;
    }
    setDH(value) {
        this.DX = (this.DX & 0x00FF) | ((value & 0xFF) << 8);
    }
    get FLAGS() {
        return this.flags.value;
    }
    getInstructionByte() {
        return this.getMemByte(this.CS, this.IP);
    }
    getAddressByte() {
        return this.getMemByte(this.CS, (this.IP + 1) & 0xFFFF);
    }
    getName() {
        return "Intel 80186";
    }
    getCurrentCodeAddr() {
        return this.genAddr(this.CS, this.IP);
    }
    getCodeSeg32Bit() {
        return false;
    }
    initParities() {
        for (let num = 0; num < 0x100; num++) {
            const bitCount = ((num & 1) != 0 ? 1 : 0) +
                ((num & 2) != 0 ? 1 : 0) +
                ((num & 4) != 0 ? 1 : 0) +
                ((num & 8) != 0 ? 1 : 0) +
                ((num & 16) != 0 ? 1 : 0) +
                ((num & 32) != 0 ? 1 : 0) +
                ((num & 64) != 0 ? 1 : 0) +
                ((num & 128) != 0 ? 1 : 0);
            this.parities[num] = (bitCount & 1) == 0;
        }
    }
    reset() {
        this.doReset = true;
    }
    run() {
    }
    execNextInstruction() {
        this.execInstructions(1);
    }
    genAddr(seg, offs) {
        return ((seg << 4) + offs) & 0xFFFFF;
    }
    execReset() {
        this.cpuEvents.length = 0;
        this.hardInterrupt = null;
        this.softInterrupt = null;
        this.blockInterrupt = false;
        this.stringOperation = cpuUtils_1.Repeat.None;
        this.repeatIp = 0;
        this.segOverride = null;
        this.flags.value = 0x0000;
        this.IP = 0xFFF0;
        this.CS = 0xF000;
        this.DS = this.ES = this.SS = 0;
        this.halt = false;
    }
    execInstructions(clockCount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const endCount = this.clockCount + clockCount;
        do {
            try {
                while (this.clockCount < endCount) {
                    this.instStartIp = this.IP;
                    let opCode = this.readNextCodeByte();
                    if (this.doReset) {
                        this.doReset = false;
                        this.execReset();
                        return;
                    }
                    let execNextOpcode;
                    do {
                        execNextOpcode = false;
                        switch (opCode) {
                            case 0xF3:
                                this.clockCount += clockCycles_1.ClockCycles8086.Rep;
                                this.stringOperation = cpuUtils_1.Repeat.RepZ;
                                this.repeatIp = (this.IP - 1) & 0xFFFF;
                                opCode = this.readNextCodeByte();
                                execNextOpcode = true;
                                break;
                            case 0xF2:
                                this.clockCount += clockCycles_1.ClockCycles8086.Rep;
                                this.stringOperation = cpuUtils_1.Repeat.RepNz;
                                this.repeatIp = (this.IP - 1) & 0xFFFF;
                                opCode = this.readNextCodeByte();
                                execNextOpcode = true;
                                break;
                            case 0xF0:
                                this.clockCount += clockCycles_1.ClockCycles8086.Lock;
                                opCode = this.readNextCodeByte();
                                execNextOpcode = true;
                                break;
                            case 0x2E:
                                this.clockCount += clockCycles_1.ClockCycles8086.SegOverride;
                                this.segOverride = this.CS;
                                opCode = this.readNextCodeByte();
                                execNextOpcode = true;
                                break;
                            case 0x3E:
                                this.clockCount += clockCycles_1.ClockCycles8086.SegOverride;
                                this.segOverride = this.DS;
                                opCode = this.readNextCodeByte();
                                execNextOpcode = true;
                                break;
                            case 0x26:
                                this.clockCount += clockCycles_1.ClockCycles8086.SegOverride;
                                this.segOverride = this.ES;
                                opCode = this.readNextCodeByte();
                                execNextOpcode = true;
                                break;
                            case 0x36:
                                this.clockCount += clockCycles_1.ClockCycles8086.SegOverride;
                                this.segOverride = this.SS;
                                opCode = this.readNextCodeByte();
                                execNextOpcode = true;
                                break;
                            case 0x37:
                                this.clockCount += clockCycles_1.ClockCycles8086.Aaa;
                                if ((this.getAL() & 0x0F) > 9 || this.flags.AF) {
                                    this.setAL(this.getAL() + 6);
                                    this.setAH(this.getAH() + 1);
                                    this.flags.CF = true;
                                    this.flags.AF = true;
                                }
                                else {
                                    this.flags.CF = false;
                                    this.flags.AF = false;
                                }
                                this.setAL(this.getAL() & 0x0F);
                                this.calcParitySignZeroFlagW(this.AX);
                                break;
                            case 0xD5:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Aad;
                                    const baseValue = this.readNextCodeByte();
                                    this.setAL(this.getAH() * baseValue + this.getAL());
                                    this.setAH(0);
                                    this.calcParitySignZeroFlagW(this.AX);
                                    break;
                                }
                            case 0xD4:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Aam;
                                    const baseValue = this.readNextCodeByte();
                                    this.setAH(this.getAL() / baseValue);
                                    this.setAL(this.getAL() % baseValue);
                                    this.calcParitySignZeroFlagW(this.AX);
                                    break;
                                }
                            case 0x3F:
                                this.clockCount += clockCycles_1.ClockCycles8086.Aas;
                                if ((this.getAL() & 0x0F) > 9 || this.flags.AF) {
                                    this.setAL(this.getAL() - 6);
                                    this.setAH(this.getAH() - 1);
                                    this.flags.CF = true;
                                    this.flags.AF = true;
                                }
                                else {
                                    this.flags.CF = false;
                                    this.flags.AF = false;
                                }
                                this.setAL(this.getAL() & 0x0F);
                                break;
                            case 0x10:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.adcByte(v1, v2), clockCycles_1.ClockCycles8086.AddRmRegReg, clockCycles_1.ClockCycles8086.AddRmRegMem);
                                break;
                            case 0x11:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.adcWord(v1, v2), clockCycles_1.ClockCycles8086.AdcRegRmReg, clockCycles_1.ClockCycles8086.AdcRegRmMem);
                                break;
                            case 0x12:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.adcByte(v1, v2), clockCycles_1.ClockCycles8086.AddRmRegReg, clockCycles_1.ClockCycles8086.AddRmRegMem);
                                break;
                            case 0x13:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.adcWord(v1, v2), clockCycles_1.ClockCycles8086.AddRmRegReg, clockCycles_1.ClockCycles8086.AddRmRegMem);
                                break;
                            case 0x14:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.AddAlImm;
                                    const operand = this.readNextCodeByte();
                                    this.setAL(this.adcByte(this.getAL(), operand));
                                    break;
                                }
                            case 0x15:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.AddAxImm;
                                    const operand = this.readNextCodeWord();
                                    this.AX = this.adcWord(this.AX, operand);
                                    break;
                                }
                            case 0x00:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.addByte(v1, v2), clockCycles_1.ClockCycles8086.AddRmRegReg, clockCycles_1.ClockCycles8086.AddRmRegMem);
                                break;
                            case 0x01:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.addWord(v1, v2), clockCycles_1.ClockCycles8086.AddRmRegReg, clockCycles_1.ClockCycles8086.AddRmRegMem);
                                break;
                            case 0x02:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.addByte(v1, v2), clockCycles_1.ClockCycles8086.AddRegRmMem, clockCycles_1.ClockCycles8086.AddRegRmMem);
                                break;
                            case 0x03:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.addWord(v1, v2), clockCycles_1.ClockCycles8086.AddRegRmReg, clockCycles_1.ClockCycles8086.AddRegRmMem);
                                break;
                            case 0x04:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.AddAlImm;
                                    const operand = this.readNextCodeByte();
                                    this.setAL(this.addByte(this.getAL(), operand));
                                    break;
                                }
                            case 0x05:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.AddAxImm;
                                    const operand = this.readNextCodeWord();
                                    this.AX = this.addWord(this.AX, operand);
                                    break;
                                }
                            case 0x20:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value & operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.AndRmRegReg, clockCycles_1.ClockCycles8086.AndRmRegMem);
                                break;
                            case 0x21:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value & operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.AndRmRegReg, clockCycles_1.ClockCycles8086.AndRmRegMem);
                                break;
                            case 0x22:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    const result = (value & operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.AndRegRmReg, clockCycles_1.ClockCycles8086.AndRegRmMem);
                                break;
                            case 0x23:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    const result = (value & operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.AndRegRmReg, clockCycles_1.ClockCycles8086.AndRegRmMem);
                                break;
                            case 0x24:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.AndAlImm;
                                    const operand = this.readNextCodeByte();
                                    const result = (this.getAL() & operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.setAL(result);
                                    this.calcParitySignZeroFlagB(result);
                                    break;
                                }
                            case 0x25:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.AndAxImm;
                                    const operand = this.readNextCodeWord();
                                    const result = (this.AX & operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.AX = result;
                                    this.calcParitySignZeroFlagW(result);
                                }
                                break;
                            case 0x62:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Bound;
                                    const ii = this.readAndDecodeAddressByte();
                                    if (ii.mode == 3)
                                        this.handleIllegalOpcode();
                                    let lowerBound = this.memoryProvider.peekW(ii.rmAddr);
                                    if (lowerBound > 0x7FFF)
                                        lowerBound -= 0x10000;
                                    let upperBound = this.memoryProvider.peekW(ii.rmAddr + 2) + 2;
                                    if (upperBound > 0x7FFF)
                                        upperBound -= 0x10000;
                                    let index = this.getRegWord(ii.reg);
                                    if (index > 0x7FFF)
                                        index -= 0x10000;
                                    if (index < lowerBound || index > upperBound) {
                                        this.IP = this.instStartIp;
                                        throw new cpuUtils_1.CpuError(cpuUtils_1.CpuExCode.BR);
                                    }
                                }
                                break;
                            case 0xE8:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.CallNear;
                                    let destOffs = this.readNextCodeWord();
                                    if (destOffs > 0x7FFF)
                                        destOffs -= 0x10000;
                                    this.pushWord(this.IP & 0xFFFF);
                                    this.IP = (this.IP + destOffs) & 0xFFFF;
                                    break;
                                }
                            case 0x9A:
                                this.clockCount += clockCycles_1.ClockCycles8086.CallFar;
                                {
                                    const destOffs = this.readNextCodeWord();
                                    const destSeg = this.readNextCodeWord();
                                    this.pushWord(this.CS);
                                    this.pushWord(this.IP & 0xFFFF);
                                    this.CS = destSeg;
                                    this.IP = destOffs;
                                }
                                break;
                            case 0x98:
                                this.clockCount += clockCycles_1.ClockCycles8086.Cbw;
                                if (this.getAL() > 0x7F)
                                    this.setAH(0xFF);
                                else
                                    this.setAH(0x00);
                                break;
                            case 0xF8:
                                this.clockCount += clockCycles_1.ClockCycles8086.Clc;
                                this.flags.CF = false;
                                break;
                            case 0xFC:
                                this.clockCount += clockCycles_1.ClockCycles8086.Cld;
                                this.flags.DF = false;
                                break;
                            case 0xFA:
                                this.clockCount += clockCycles_1.ClockCycles8086.Clc;
                                this.flags.IF = false;
                                break;
                            case 0xF5:
                                this.clockCount += clockCycles_1.ClockCycles8086.Cmc;
                                this.flags.CF = !this.flags.CF;
                                break;
                            case 0x38:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    this.subByte(value, operand);
                                    return 0;
                                }, clockCycles_1.ClockCycles8086.CmpRmRegReg, clockCycles_1.ClockCycles8086.CmpRmRegMem, false);
                                break;
                            case 0x39:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    this.subWord(value, operand);
                                    return 0;
                                }, clockCycles_1.ClockCycles8086.CmpRmRegReg, clockCycles_1.ClockCycles8086.CmpRmRegMem, false);
                                break;
                            case 0x3A:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    this.subByte(value, operand);
                                    return 0;
                                }, clockCycles_1.ClockCycles8086.CmpRegRmReg, clockCycles_1.ClockCycles8086.CmpRegRmMem, false);
                                break;
                            case 0x3B:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    this.subWord(value, operand);
                                    return 0;
                                }, clockCycles_1.ClockCycles8086.CmpRegRmReg, clockCycles_1.ClockCycles8086.CmpRegRmMem, false);
                                break;
                            case 0x3C:
                                this.clockCount += clockCycles_1.ClockCycles8086.CmpAlImm;
                                this.subByte(this.getAL(), this.readNextCodeByte());
                                break;
                            case 0x3D:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.CmpAxImm;
                                    const operand = this.readNextCodeWord();
                                    this.subWord(this.AX, operand);
                                }
                                break;
                            case 0xA6:
                                {
                                    if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                        this.clockCount += clockCycles_1.ClockCycles8086.Cmps;
                                        this.subByte(this.getMemByte((_a = this.segOverride) !== null && _a !== void 0 ? _a : this.DS, this.SI), this.getMemByte(this.ES, this.DI));
                                        if (this.flags.DF) {
                                            this.SI = (this.SI - 1) & 0xFFFF;
                                            this.DI = (this.DI - 1) & 0xFFFF;
                                        }
                                        else {
                                            this.SI = (this.SI + 1) & 0xFFFF;
                                            this.DI = (this.DI + 1) & 0xFFFF;
                                        }
                                        this.handleRepeatCheckZeroFlag();
                                    }
                                    this.stringOperation = cpuUtils_1.Repeat.None;
                                    break;
                                }
                            case 0xA7:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Cmps;
                                    this.subWord(this.getMemWord((_b = this.segOverride) !== null && _b !== void 0 ? _b : this.DS, this.SI), this.getMemWord(this.ES, this.DI));
                                    if (this.flags.DF) {
                                        this.SI = (this.SI - 2) & 0xFFFF;
                                        this.DI = (this.DI - 2) & 0xFFFF;
                                    }
                                    else {
                                        this.SI = (this.SI + 2) & 0xFFFF;
                                        this.DI = (this.DI + 2) & 0xFFFF;
                                    }
                                    this.handleRepeatCheckZeroFlag();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0x99:
                                this.clockCount += clockCycles_1.ClockCycles8086.Cwd;
                                this.DX = (this.AX >= 0x8000 ? 0xFFFF : 0) & 0xFFFF;
                                break;
                            case 0x27:
                                this.clockCount += clockCycles_1.ClockCycles8086.Daa;
                                if ((this.getAL() & 0x0F) > 9 || this.flags.AF) {
                                    this.setAL(this.getAL() + 6);
                                    this.flags.AF = true;
                                }
                                if (this.getAL() > 0x9F || this.flags.CF) {
                                    this.setAL(this.getAL() + 0x60);
                                    this.flags.CF = true;
                                }
                                this.calcParitySignZeroFlagB(this.getAL());
                                break;
                            case 0x2F:
                                this.clockCount += clockCycles_1.ClockCycles8086.Das;
                                if ((this.getAL() & 0x0F) > 9 || this.flags.AF) {
                                    this.setAL(this.getAL() - 6);
                                    this.flags.AF = true;
                                }
                                if (this.getAL() > 0x9F || this.flags.CF) {
                                    this.setAL(this.getAL() - 0x60);
                                    this.flags.CF = true;
                                }
                                this.calcParitySignZeroFlagB(this.getAL());
                                break;
                            case 0x48:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.AX = this.decWord(this.AX);
                                break;
                            case 0x49:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.CX = this.decWord(this.CX);
                                break;
                            case 0x4A:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.DX = this.decWord(this.DX);
                                break;
                            case 0x4B:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.BX = this.decWord(this.BX);
                                break;
                            case 0x4C:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.SP = this.decWord(this.SP);
                                break;
                            case 0x4D:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.BP = this.decWord(this.BP);
                                break;
                            case 0x4E:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.SI = this.decWord(this.SI);
                                break;
                            case 0x4F:
                                this.clockCount += clockCycles_1.ClockCycles8086.DecReg;
                                this.DI = this.decWord(this.DI);
                                break;
                            case 0xC8:
                                {
                                    const size = this.readNextCodeWord();
                                    let level = this.readNextCodeByte();
                                    if (level == 0)
                                        this.clockCount += clockCycles_1.ClockCycles8086.EnterLvl0;
                                    else if (level == 1)
                                        this.clockCount += clockCycles_1.ClockCycles8086.EnterLvl1;
                                    else
                                        this.clockCount += clockCycles_1.ClockCycles8086.EnterInitial + clockCycles_1.ClockCycles8086.EnterPerLvl * (level - 1);
                                    level = level & 0x1F;
                                    this.pushWord(this.BP);
                                    const framePtr = this.SP;
                                    if (level > 0) {
                                        for (let idx = 1; idx < level; idx++) {
                                            this.BP = (this.BP - 2) & 0xFFFF;
                                            this.pushWord(this.getMemWord(this.SS, this.BP));
                                        }
                                        this.pushWord(framePtr);
                                    }
                                    this.BP = framePtr;
                                    this.SP = (this.SP - size) & 0xFFFF;
                                    break;
                                }
                            case 0xF4:
                                this.clockCount += clockCycles_1.ClockCycles8086.Hlt;
                                this.halt = true;
                                this.IP = (this.IP - 1) & 0xFFFF;
                                break;
                            case 0x6B:
                                {
                                    this.doWordOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                        if (operand > 0x7FFF)
                                            operand -= 0x10000;
                                        let multi = this.readNextCodeByte();
                                        if (multi > 0x7F)
                                            multi -= 0x100;
                                        const result = operand * multi;
                                        const hiWord = (result >> 16) & 0xFFFF;
                                        this.flags.CF = this.flags.OF = hiWord != 0 && hiWord != 0xFFFF;
                                        this.flags.ZF = false;
                                        return result & 0xFFFF;
                                    }, clockCycles_1.ClockCycles8086.ImulImmReg, clockCycles_1.ClockCycles8086.ImulImmMem);
                                }
                                break;
                            case 0x69:
                                {
                                    this.doWordOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                        if (operand > 0x7FFF)
                                            operand -= 0x10000;
                                        let multi = this.readNextCodeWord();
                                        if (multi > 0x7FFF)
                                            multi -= 0x10000;
                                        const result = operand * multi;
                                        const hiWord = (result >> 16) & 0xFFFF;
                                        this.flags.CF = this.flags.OF = hiWord != 0 && hiWord != 0xFFFF;
                                        this.flags.ZF = false;
                                        return result & 0xFFFF;
                                    }, clockCycles_1.ClockCycles8086.ImulImmReg16, clockCycles_1.ClockCycles8086.ImulImmMem16);
                                }
                                break;
                            case 0xE4:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.InImm;
                                    const port = this.readNextCodeByte();
                                    this.setAL(this.portProvider.in(port));
                                    break;
                                }
                            case 0xE5:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.InImm;
                                    const port = this.readNextCodeByte();
                                    this.AX = this.portProvider.in(port);
                                    break;
                                }
                            case 0xEC:
                                this.clockCount += clockCycles_1.ClockCycles8086.InDx;
                                this.setAL(this.portProvider.in(this.DX));
                                break;
                            case 0xED:
                                this.clockCount += clockCycles_1.ClockCycles8086.InDx;
                                this.AX = this.portProvider.in(this.DX);
                                break;
                            case 0x40:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.AX = this.incWord(this.AX);
                                break;
                            case 0x41:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.CX = this.incWord(this.CX);
                                break;
                            case 0x42:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.DX = this.incWord(this.DX);
                                break;
                            case 0x43:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.BX = this.incWord(this.BX);
                                break;
                            case 0x44:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.SP = this.incWord(this.SP);
                                break;
                            case 0x45:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.BP = this.incWord(this.BP);
                                break;
                            case 0x46:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.SI = this.incWord(this.SI);
                                break;
                            case 0x47:
                                this.clockCount += clockCycles_1.ClockCycles8086.IncReg;
                                this.DI = this.incWord(this.DI);
                                break;
                            case 0x6C:
                                {
                                    if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                        this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Ins : clockCycles_1.ClockCycles8086.InsRep;
                                        this.setMemByte(this.ES, this.DI, this.portProvider.in(this.DX) & 0xFF);
                                        if (this.flags.DF)
                                            this.DI = (this.DI - 1) & 0xFFFF;
                                        else
                                            this.DI = (this.DI + 1) & 0xFFFF;
                                        this.handleRepeat();
                                    }
                                    this.stringOperation = cpuUtils_1.Repeat.None;
                                    break;
                                }
                            case 0x6D:
                                {
                                    if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                        this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Ins : clockCycles_1.ClockCycles8086.InsRep;
                                        this.setMemWord(this.ES, this.DI, this.portProvider.in(this.DX));
                                        if (this.flags.DF)
                                            this.DI = (this.DI - 2) & 0xFFFF;
                                        else
                                            this.DI = (this.DI + 2) & 0xFFFF;
                                        this.handleRepeat();
                                    }
                                    this.stringOperation = cpuUtils_1.Repeat.None;
                                    break;
                                }
                            case 0xCC:
                                this.clockCount += clockCycles_1.ClockCycles8086.Int3;
                                this.doSoftInterrupt(3);
                                break;
                            case 0xCD:
                                this.clockCount += clockCycles_1.ClockCycles8086.IntImm;
                                this.doSoftInterrupt(this.readNextCodeByte());
                                break;
                            case 0xCE:
                                if (this.flags.OF) {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Into;
                                    this.doSoftInterrupt(4);
                                }
                                else
                                    this.clockCount += clockCycles_1.ClockCycles8086.IntoNoInt;
                                break;
                            case 0xCF:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Iret;
                                    this.IP = this.popWord();
                                    this.CS = this.popWord();
                                    this.flags.value = this.popWord();
                                    this.blockInterrupt = true;
                                    break;
                                }
                            case 0x77:
                                this.handleConditionalJump(!this.flags.CF && !this.flags.ZF);
                                break;
                            case 0x73:
                                this.handleConditionalJump(!this.flags.CF);
                                break;
                            case 0x72:
                                this.handleConditionalJump(this.flags.CF);
                                break;
                            case 0x76:
                                this.handleConditionalJump(this.flags.CF || this.flags.ZF);
                                break;
                            case 0xE3:
                                {
                                    let addr = this.readNextCodeByte();
                                    if (addr > 0x7F)
                                        addr -= 0x100;
                                    if (this.CX == 0) {
                                        this.clockCount += clockCycles_1.ClockCycles8086.JcxzMet;
                                        this.IP = (this.IP + addr) & 0xFFFF;
                                    }
                                    else
                                        this.clockCount += clockCycles_1.ClockCycles8086.JcxzNotMet;
                                    break;
                                }
                            case 0x74:
                                this.handleConditionalJump(this.flags.ZF);
                                break;
                            case 0x7F:
                                this.handleConditionalJump(!this.flags.ZF && this.flags.SF == this.flags.OF);
                                break;
                            case 0x7D:
                                this.handleConditionalJump(this.flags.SF == this.flags.OF);
                                break;
                            case 0x7C:
                                this.handleConditionalJump(this.flags.SF != this.flags.OF);
                                break;
                            case 0x7E:
                                this.handleConditionalJump(this.flags.ZF || this.flags.SF != this.flags.OF);
                                break;
                            case 0xEB:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.JmpShort;
                                    let dest = this.readNextCodeByte();
                                    if (dest > 0x7F)
                                        dest -= 0x100;
                                    this.IP = (this.IP + dest) & 0xFFFF;
                                    break;
                                }
                            case 0xE9:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.JmpNear;
                                    let dest = this.readNextCodeWord();
                                    if (dest > 0x7FFF)
                                        dest -= 0x10000;
                                    this.IP = (this.IP + dest) & 0xFFFF;
                                    break;
                                }
                            case 0xEA:
                                this.clockCount += clockCycles_1.ClockCycles8086.JmpFar;
                                {
                                    const destOffs = this.readNextCodeWord();
                                    const destSeg = this.readNextCodeWord();
                                    this.CS = destSeg;
                                    this.IP = destOffs;
                                }
                                break;
                            case 0x75:
                                this.handleConditionalJump(!this.flags.ZF);
                                break;
                            case 0x71:
                                this.handleConditionalJump(!this.flags.OF);
                                break;
                            case 0x79:
                                this.handleConditionalJump(!this.flags.SF);
                                break;
                            case 0x7B:
                                this.handleConditionalJump(!this.flags.PF);
                                break;
                            case 0x70:
                                this.handleConditionalJump(this.flags.OF);
                                break;
                            case 0x7A:
                                this.handleConditionalJump(this.flags.PF);
                                break;
                            case 0x78:
                                this.handleConditionalJump(this.flags.SF);
                                break;
                            case 0x9F:
                                this.clockCount += clockCycles_1.ClockCycles8086.Lahf;
                                this.setAH(this.flags.value);
                                break;
                            case 0xC5:
                                this.DS = this.loadSeg();
                                break;
                            case 0x8D:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Lea;
                                    const addressByte = this.readNextCodeByte();
                                    const mode = (addressByte & 0xC0) >> 6;
                                    const reg = (addressByte & 0x38) >> 3;
                                    const rm = addressByte & 0x07;
                                    if (mode == 3)
                                        this.handleIllegalOpcode();
                                    const ei = this.calcEa(mode, rm);
                                    this.setRegWord(reg, ei.ea);
                                }
                                break;
                            case 0xC9:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Leave;
                                    this.SP = this.BP;
                                    this.BP = this.popWord();
                                    break;
                                }
                            case 0xC4:
                                this.ES = this.loadSeg();
                                break;
                            case 0xAC:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Lods : clockCycles_1.ClockCycles8086.LodsRep;
                                    this.setAL(this.getMemByte((_c = this.segOverride) !== null && _c !== void 0 ? _c : this.DS, this.SI));
                                    if (this.flags.DF)
                                        this.SI = (this.SI - 1) & 0xFFFF;
                                    else
                                        this.SI = (this.SI + 1) & 0xFFFF;
                                    this.handleRepeat();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0xAD:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Lods : clockCycles_1.ClockCycles8086.LodsRep;
                                    this.AX = this.getMemWord((_d = this.segOverride) !== null && _d !== void 0 ? _d : this.DS, this.SI);
                                    if (this.flags.DF)
                                        this.SI = (this.SI - 2) & 0xFFFF;
                                    else
                                        this.SI = (this.SI + 2) & 0xFFFF;
                                    this.handleRepeat();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0xE2:
                                {
                                    let addr = this.readNextCodeByte();
                                    if (addr > 0x7F)
                                        addr -= 0x100;
                                    this.CX = (this.CX - 1) & 0xFFFF;
                                    if (this.CX > 0) {
                                        this.clockCount += clockCycles_1.ClockCycles8086.Loop;
                                        this.IP = (this.IP + addr) & 0xFFFF;
                                    }
                                    else
                                        this.clockCount += clockCycles_1.ClockCycles8086.LoopFinished;
                                    break;
                                }
                            case 0xE1:
                                {
                                    let addr = this.readNextCodeByte();
                                    if (addr > 0x7F)
                                        addr -= 0x100;
                                    this.CX = (this.CX - 1) & 0xFFFF;
                                    if (this.CX > 0 && this.flags.ZF) {
                                        this.clockCount += clockCycles_1.ClockCycles8086.Loop;
                                        this.IP = (this.IP + addr) & 0xFFFF;
                                    }
                                    else
                                        this.clockCount += clockCycles_1.ClockCycles8086.LoopFinished;
                                    break;
                                }
                            case 0xE0:
                                {
                                    let addr = this.readNextCodeByte();
                                    if (addr > 0x7F)
                                        addr -= 0x100;
                                    this.CX = (this.CX - 1) & 0xFFFF;
                                    if (this.CX > 0 && !this.flags.ZF) {
                                        this.clockCount += clockCycles_1.ClockCycles8086.Loop;
                                        this.IP = (this.IP + addr) & 0xFFFF;
                                    }
                                    else
                                        this.clockCount += clockCycles_1.ClockCycles8086.LoopFinished;
                                    break;
                                }
                            case 0xA0:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.MovAxMemoffs;
                                    const offs = this.readNextCodeWord();
                                    this.setAL(this.getMemByte((_e = this.segOverride) !== null && _e !== void 0 ? _e : this.DS, offs));
                                    break;
                                }
                            case 0xA1:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.MovAxMemoffs;
                                    const offs = this.readNextCodeWord();
                                    this.AX = this.getMemWord((_f = this.segOverride) !== null && _f !== void 0 ? _f : this.DS, offs);
                                }
                                break;
                            case 0xA2:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.MovMemoffsAx;
                                    const offs = this.readNextCodeWord();
                                    this.setMemByte((_g = this.segOverride) !== null && _g !== void 0 ? _g : this.DS, offs, this.getAL());
                                    break;
                                }
                            case 0xA3:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.MovMemoffsAx;
                                    const offs = this.readNextCodeWord();
                                    this.setMemWord((_h = this.segOverride) !== null && _h !== void 0 ? _h : this.DS, offs, this.AX);
                                }
                                break;
                            case 0xB0:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setAL(this.readNextCodeByte());
                                break;
                            case 0xB1:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setCL(this.readNextCodeByte());
                                break;
                            case 0xB2:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setDL(this.readNextCodeByte());
                                break;
                            case 0xB3:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setBL(this.readNextCodeByte());
                                break;
                            case 0xB4:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setAH(this.readNextCodeByte());
                                break;
                            case 0xB5:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setCH(this.readNextCodeByte());
                                break;
                            case 0xB6:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setDH(this.readNextCodeByte());
                                break;
                            case 0xB7:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm8;
                                this.setBH(this.readNextCodeByte());
                                break;
                            case 0xB8:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.AX = this.readNextCodeWord();
                                break;
                            case 0xB9:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.CX = this.readNextCodeWord();
                                break;
                            case 0xBA:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.DX = this.readNextCodeWord();
                                break;
                            case 0xBB:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.BX = this.readNextCodeWord();
                                break;
                            case 0xBC:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.SP = this.readNextCodeWord();
                                break;
                            case 0xBD:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.BP = this.readNextCodeWord();
                                break;
                            case 0xBE:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.SI = this.readNextCodeWord();
                                break;
                            case 0xBF:
                                this.clockCount += clockCycles_1.ClockCycles8086.MovRegImm16;
                                this.DI = this.readNextCodeWord();
                                break;
                            case 0xC6:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.MovRmImm8;
                                    const ii = this.readAndDecodeAddressByte();
                                    const value = this.readNextCodeByte();
                                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, value);
                                    break;
                                }
                            case 0xC7:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.MovRmImm16;
                                    const ii = this.readAndDecodeAddressByte();
                                    const value = this.readNextCodeWord();
                                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, value);
                                    break;
                                }
                            case 0x88:
                                this.doByteOperationU(cpuUtils_1.Direction.RegToRm, value => value, clockCycles_1.ClockCycles8086.MovRmRegReg, clockCycles_1.ClockCycles8086.MovRmRegMem);
                                break;
                            case 0x89:
                                this.doWordOperationU(cpuUtils_1.Direction.RegToRm, value => value, clockCycles_1.ClockCycles8086.MovRmRegReg, clockCycles_1.ClockCycles8086.MovRmRegMem);
                                break;
                            case 0x8A:
                                this.doByteOperationU(cpuUtils_1.Direction.RmToReg, value => value, clockCycles_1.ClockCycles8086.MovRegRmReg, clockCycles_1.ClockCycles8086.MovRegRmMem);
                                break;
                            case 0x8B:
                                this.doWordOperationU(cpuUtils_1.Direction.RmToReg, value => value, clockCycles_1.ClockCycles8086.MovRegRmReg, clockCycles_1.ClockCycles8086.MovRegRmMem);
                                break;
                            case 0x8C:
                                this.doSegRegWordOperation(cpuUtils_1.Direction.RegToRm, value => value, clockCycles_1.ClockCycles8086.MovRmSegReg, clockCycles_1.ClockCycles8086.MovRmSegMem);
                                break;
                            case 0x8E:
                                this.doSegRegWordOperation(cpuUtils_1.Direction.RmToReg, value => value, clockCycles_1.ClockCycles8086.MovSegRmReg, clockCycles_1.ClockCycles8086.MovSegRmMem);
                                break;
                            case 0xA4:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? 14 : 8;
                                    this.setMemByte(this.ES, this.DI, this.getMemByte((_j = this.segOverride) !== null && _j !== void 0 ? _j : this.DS, this.SI));
                                    if (this.flags.DF) {
                                        this.SI = (this.SI - 1) & 0xFFFF;
                                        this.DI = (this.DI - 1) & 0xFFFF;
                                    }
                                    else {
                                        this.SI = (this.SI + 1) & 0xFFFF;
                                        this.DI = (this.DI + 1) & 0xFFFF;
                                    }
                                    this.handleRepeat();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0xA5:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Movs : clockCycles_1.ClockCycles8086.MovsRep;
                                    this.setMemWord(this.ES, this.DI, this.getMemWord((_k = this.segOverride) !== null && _k !== void 0 ? _k : this.DS, this.SI));
                                    if (this.flags.DF) {
                                        this.SI = (this.SI - 2) & 0xFFFF;
                                        this.DI = (this.DI - 2) & 0xFFFF;
                                    }
                                    else {
                                        this.SI = (this.SI + 2) & 0xFFFF;
                                        this.DI = (this.DI + 2) & 0xFFFF;
                                    }
                                    this.handleRepeat();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0x90:
                                this.clockCount += clockCycles_1.ClockCycles8086.Nop;
                                break;
                            case 0x08:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value | operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.OrRmRegReg, clockCycles_1.ClockCycles8086.OrRmRegMem);
                                break;
                            case 0x09:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value | operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.OrRmRegReg, clockCycles_1.ClockCycles8086.OrRmRegMem);
                                break;
                            case 0x0A:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    const result = (value | operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.OrRegRmReg, clockCycles_1.ClockCycles8086.OrRegRmMem);
                                break;
                            case 0x0B:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    const result = (value | operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.OrRegRmReg, clockCycles_1.ClockCycles8086.OrRegRmMem);
                                break;
                            case 0x0C:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.OrAlImm;
                                    const operand = this.readNextCodeByte();
                                    const result = (this.getAL() | operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.setAL(result);
                                    this.calcParitySignZeroFlagB(this.getAL());
                                    break;
                                }
                            case 0x0D:
                                this.clockCount += clockCycles_1.ClockCycles8086.OrAxImm;
                                {
                                    const operand = this.readNextCodeWord();
                                    const result = (this.AX | operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.AX = result;
                                    this.calcParitySignZeroFlagW(this.AX);
                                }
                                break;
                            case 0xE6:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.OutImm;
                                    const port = this.readNextCodeByte();
                                    this.portProvider.out(port, this.getAL(), false);
                                    break;
                                }
                            case 0xE7:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.OutImm;
                                    const port = this.readNextCodeByte();
                                    this.portProvider.out(port, this.AX, true);
                                    break;
                                }
                            case 0xEE:
                                this.clockCount += clockCycles_1.ClockCycles8086.OutDx;
                                this.portProvider.out(this.DX, this.getAL(), false);
                                break;
                            case 0xEF:
                                this.clockCount += clockCycles_1.ClockCycles8086.OutDx;
                                this.portProvider.out(this.DX, this.AX, true);
                                break;
                            case 0x6E:
                                {
                                    if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                        this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Outs : clockCycles_1.ClockCycles8086.OutsRep;
                                        this.portProvider.out(this.DX, this.getMemByte((_l = this.segOverride) !== null && _l !== void 0 ? _l : this.DS, this.SI), false);
                                        if (this.flags.DF)
                                            this.SI = (this.SI - 1) & 0xFFFF;
                                        else
                                            this.SI = (this.SI + 1) & 0xFFFF;
                                        this.handleRepeat();
                                    }
                                    this.stringOperation = cpuUtils_1.Repeat.None;
                                    break;
                                }
                            case 0x6F:
                                {
                                    if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                        this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Outs : clockCycles_1.ClockCycles8086.OutsRep;
                                        this.portProvider.out(this.DX, this.getMemWord((_m = this.segOverride) !== null && _m !== void 0 ? _m : this.DS, this.SI), true);
                                        if (this.flags.DF)
                                            this.SI = (this.SI - 2) & 0xFFFF;
                                        else
                                            this.SI = (this.SI + 2) & 0xFFFF;
                                        this.handleRepeat();
                                    }
                                    this.stringOperation = cpuUtils_1.Repeat.None;
                                }
                                break;
                            case 0x58:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.AX = this.popWord();
                                break;
                            case 0x59:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.CX = this.popWord();
                                break;
                            case 0x5A:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.DX = this.popWord();
                                break;
                            case 0x5B:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.BX = this.popWord();
                                break;
                            case 0x5C:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.SP = this.popWord();
                                break;
                            case 0x5D:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.BP = this.popWord();
                                break;
                            case 0x5E:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.SI = this.popWord();
                                break;
                            case 0x5F:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopReg;
                                this.DI = this.popWord();
                                break;
                            case 0x07:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopSeg;
                                this.ES = this.popWord();
                                break;
                            case 0x17:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopSeg;
                                this.SS = this.popWord();
                                break;
                            case 0x1F:
                                this.clockCount += clockCycles_1.ClockCycles8086.PopSeg;
                                this.DS = this.popWord();
                                break;
                            case 0x8F:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.PopMem;
                                    const ii = this.readAndDecodeAddressByte();
                                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, this.popWord());
                                    break;
                                }
                            case 0x61:
                                this.clockCount += clockCycles_1.ClockCycles8086.Popa;
                                this.DI = this.popWord();
                                this.SI = this.popWord();
                                this.BP = this.popWord();
                                this.SP = (this.SP + 2) & 0xFFFF;
                                this.BX = this.popWord();
                                this.DX = this.popWord();
                                this.CX = this.popWord();
                                this.AX = this.popWord();
                                break;
                            case 0x9D:
                                this.clockCount += clockCycles_1.ClockCycles8086.Popf;
                                this.flags.value = this.popWord();
                                break;
                            case 0x50:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord(this.AX);
                                break;
                            case 0x51:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord(this.CX);
                                break;
                            case 0x52:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord(this.DX);
                                break;
                            case 0x53:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord(this.BX);
                                break;
                            case 0x54:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord((this.SP - 2) & 0xFFFF);
                                break;
                            case 0x55:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord(this.BP);
                                break;
                            case 0x56:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord(this.SI);
                                break;
                            case 0x57:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushReg;
                                this.pushWord(this.DI);
                                break;
                            case 0x06:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushSeg;
                                this.pushWord(this.ES);
                                break;
                            case 0x0E:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushSeg;
                                this.pushWord(this.CS);
                                break;
                            case 0x16:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushSeg;
                                this.pushWord(this.SS);
                                break;
                            case 0x1E:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushSeg;
                                this.pushWord(this.DS);
                                break;
                            case 0x6A:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushImm8;
                                this.pushWord(this.readNextCodeByte());
                                break;
                            case 0x68:
                                this.clockCount += clockCycles_1.ClockCycles8086.PushImm16;
                                this.pushWord(this.readNextCodeWord());
                                break;
                            case 0x60:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Pusha;
                                    const tempSp = this.SP;
                                    this.pushWord(this.AX);
                                    this.pushWord(this.CX);
                                    this.pushWord(this.DX);
                                    this.pushWord(this.BX);
                                    this.pushWord(tempSp);
                                    this.pushWord(this.BP);
                                    this.pushWord(this.SI);
                                    this.pushWord(this.DI);
                                    break;
                                }
                            case 0x9C:
                                this.clockCount += clockCycles_1.ClockCycles8086.Pushf;
                                this.pushWord(this.flags.value);
                                break;
                            case 0xC3:
                                this.clockCount += clockCycles_1.ClockCycles8086.Ret;
                                this.IP = this.popWord();
                                break;
                            case 0xC2:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.RetImm;
                                    const increment = this.readNextCodeWord();
                                    this.IP = this.popWord();
                                    this.SP = (this.SP + increment) & 0xFFFF;
                                    break;
                                }
                            case 0xCB:
                                this.clockCount += clockCycles_1.ClockCycles8086.Retf;
                                this.IP = this.popWord();
                                this.CS = this.popWord();
                                break;
                            case 0xCA:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.RetfImm;
                                    const increment = this.readNextCodeWord();
                                    this.IP = this.popWord();
                                    this.CS = this.popWord();
                                    this.SP = (this.SP + increment) & 0xFFFF;
                                    break;
                                }
                            case 0x9E:
                                this.clockCount += clockCycles_1.ClockCycles8086.Lahf;
                                this.flags.value = ((this.flags.value & 0xFF00) | this.getAH()) & 0xFFFF;
                                break;
                            case 0x18:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.sbbByte(v1, v2), clockCycles_1.ClockCycles8086.SbbRmRegReg, clockCycles_1.ClockCycles8086.SbbRmRegMem);
                                break;
                            case 0x19:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.sbbWord(v1, v2), clockCycles_1.ClockCycles8086.SbbRmRegReg, clockCycles_1.ClockCycles8086.SbbRmRegMem);
                                break;
                            case 0x1A:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.sbbByte(v1, v2), clockCycles_1.ClockCycles8086.SbbRegRmReg, clockCycles_1.ClockCycles8086.SbbRegRmMem);
                                break;
                            case 0x1B:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.sbbWord(v1, v2), clockCycles_1.ClockCycles8086.SbbRegRmReg, clockCycles_1.ClockCycles8086.SbbRegRmMem);
                                break;
                            case 0x1C:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.SbbAlImm;
                                    this.setAL(this.sbbByte(this.getAL(), this.readNextCodeByte()));
                                    break;
                                }
                            case 0x1D:
                                this.clockCount += clockCycles_1.ClockCycles8086.SbbAxImm;
                                this.AX = this.sbbWord(this.AX, this.readNextCodeWord());
                                break;
                            case 0xAE:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Scas;
                                    this.subByte(this.getAL(), this.getMemByte(this.ES, this.DI));
                                    if (this.flags.DF)
                                        this.DI = (this.DI - 1) & 0xFFFF;
                                    else
                                        this.DI = (this.DI + 1) & 0xFFFF;
                                    this.handleRepeatCheckZeroFlag();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0xAF:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += clockCycles_1.ClockCycles8086.Scas;
                                    this.subWord(this.AX, this.getMemWord(this.ES, this.DI));
                                    if (this.flags.DF)
                                        this.DI = (this.DI - 2) & 0xFFFF;
                                    else
                                        this.DI = (this.DI + 2) & 0xFFFF;
                                    this.handleRepeatCheckZeroFlag();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0xF9:
                                this.clockCount += clockCycles_1.ClockCycles8086.SetFlag;
                                this.flags.CF = true;
                                break;
                            case 0xFD:
                                this.clockCount += clockCycles_1.ClockCycles8086.SetFlag;
                                this.flags.DF = true;
                                break;
                            case 0xFB:
                                this.clockCount += clockCycles_1.ClockCycles8086.SetFlag;
                                this.flags.IF = true;
                                this.blockInterrupt = true;
                                break;
                            case 0xAA:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Stos : clockCycles_1.ClockCycles8086.StosRep;
                                    this.setMemByte(this.ES, this.DI, this.getAL());
                                    if (this.flags.DF)
                                        this.DI = (this.DI - 1) & 0xFFFF;
                                    else
                                        this.DI = (this.DI + 1) & 0xFFFF;
                                    this.handleRepeat();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0xAB:
                                if (this.stringOperation == cpuUtils_1.Repeat.None || this.CX != 0) {
                                    this.clockCount += this.stringOperation == cpuUtils_1.Repeat.None ? clockCycles_1.ClockCycles8086.Stos : clockCycles_1.ClockCycles8086.StosRep;
                                    this.setMemWord(this.ES, this.DI, this.AX);
                                    if (this.flags.DF)
                                        this.DI = (this.DI - 2) & 0xFFFF;
                                    else
                                        this.DI = (this.DI + 2) & 0xFFFF;
                                    this.handleRepeat();
                                }
                                this.stringOperation = cpuUtils_1.Repeat.None;
                                break;
                            case 0x28:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.subByte(v1, v2), clockCycles_1.ClockCycles8086.SubRmRegReg, clockCycles_1.ClockCycles8086.SubRmRegMem);
                                break;
                            case 0x29:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (v1, v2) => this.subWord(v1, v2), clockCycles_1.ClockCycles8086.SubRmRegReg, clockCycles_1.ClockCycles8086.SubRmRegMem);
                                break;
                            case 0x2A:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.subByte(v1, v2), clockCycles_1.ClockCycles8086.SubRegRmReg, clockCycles_1.ClockCycles8086.SubRegRmMem);
                                break;
                            case 0x2B:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (v1, v2) => this.subWord(v1, v2), clockCycles_1.ClockCycles8086.SubRegRmReg, clockCycles_1.ClockCycles8086.SubRegRmMem);
                                break;
                            case 0x2C:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.SubAlImm;
                                    const operand = this.readNextCodeByte();
                                    this.setAL(this.subByte(this.getAL(), operand));
                                    break;
                                }
                            case 0x2D:
                                this.clockCount += clockCycles_1.ClockCycles8086.SubAxImm;
                                this.AX = this.subWord(this.AX, this.readNextCodeWord());
                                break;
                            case 0x84:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value & operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    return 0;
                                }, clockCycles_1.ClockCycles8086.TestReg, clockCycles_1.ClockCycles8086.TestMem, false);
                                break;
                            case 0x85:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value & operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                    return 0;
                                }, clockCycles_1.ClockCycles8086.TestReg, clockCycles_1.ClockCycles8086.TestMem, false);
                                break;
                            case 0xA8:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.TestAlImm;
                                    const operand = this.readNextCodeByte();
                                    const result = (this.getAL() & operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    break;
                                }
                            case 0xA9:
                                this.clockCount += clockCycles_1.ClockCycles8086.TestAxImm;
                                {
                                    const operand = this.readNextCodeWord();
                                    const result = (this.AX & operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                }
                                break;
                            case 0x9B:
                                this.clockCount += clockCycles_1.ClockCycles8086.Wait;
                                break;
                            case 0x91:
                                this.clockCount += clockCycles_1.ClockCycles8086.XchgReg;
                                {
                                    const temp = this.AX;
                                    this.AX = this.CX;
                                    this.CX = temp;
                                }
                                break;
                            case 0x92:
                                this.clockCount += clockCycles_1.ClockCycles8086.XchgReg;
                                {
                                    const temp = this.AX;
                                    this.AX = this.DX;
                                    this.DX = temp;
                                }
                                break;
                            case 0x93:
                                this.clockCount += clockCycles_1.ClockCycles8086.XchgReg;
                                {
                                    const temp = this.AX;
                                    this.AX = this.BX;
                                    this.BX = temp;
                                }
                                break;
                            case 0x94:
                                this.clockCount += clockCycles_1.ClockCycles8086.XchgReg;
                                {
                                    const temp = this.AX;
                                    this.AX = this.SP;
                                    this.SP = temp;
                                }
                                break;
                            case 0x95:
                                this.clockCount += clockCycles_1.ClockCycles8086.XchgReg;
                                {
                                    const temp = this.AX;
                                    this.AX = this.BP;
                                    this.BP = temp;
                                }
                                break;
                            case 0x96:
                                this.clockCount += clockCycles_1.ClockCycles8086.XchgReg;
                                {
                                    const temp = this.AX;
                                    this.AX = this.SI;
                                    this.SI = temp;
                                }
                                break;
                            case 0x97:
                                this.clockCount += clockCycles_1.ClockCycles8086.XchgReg;
                                {
                                    const temp = this.AX;
                                    this.AX = this.DI;
                                    this.DI = temp;
                                }
                                break;
                            case 0x86:
                                {
                                    const ii = this.readAndDecodeAddressByte();
                                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.XchgRegRmReg : clockCycles_1.ClockCycles8086.XchgRegRmMem;
                                    const temp = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, this.getRegByte(ii.reg));
                                    this.setRegByte(ii.reg, temp);
                                    break;
                                }
                            case 0x87:
                                {
                                    const ii = this.readAndDecodeAddressByte();
                                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.XchgRegRmReg : clockCycles_1.ClockCycles8086.XchgRegRmMem;
                                    const temp = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, this.getRegWord(ii.reg));
                                    this.setRegWord(ii.reg, temp);
                                }
                                break;
                            case 0xD7:
                                this.clockCount += clockCycles_1.ClockCycles8086.Xlat;
                                this.setAL(this.getMemByte((_o = this.segOverride) !== null && _o !== void 0 ? _o : this.DS, (this.BX + this.getAL()) & 0xFFFF));
                                break;
                            case 0x30:
                                this.doByteOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value ^ operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.XorRmRegReg, clockCycles_1.ClockCycles8086.XorRmRegMem);
                                break;
                            case 0x31:
                                this.doWordOperation(cpuUtils_1.Direction.RegToRm, (value, operand) => {
                                    const result = (value ^ operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.XorRmRegReg, clockCycles_1.ClockCycles8086.XorRmRegMem);
                                break;
                            case 0x32:
                                this.doByteOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    const result = (value ^ operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagB(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.XorRegRmReg, clockCycles_1.ClockCycles8086.XorRegRmMem);
                                break;
                            case 0x33:
                                this.doWordOperation(cpuUtils_1.Direction.RmToReg, (value, operand) => {
                                    const result = (value ^ operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.calcParitySignZeroFlagW(result);
                                    return result;
                                }, clockCycles_1.ClockCycles8086.XorRegRmReg, clockCycles_1.ClockCycles8086.XorRegRmMem);
                                break;
                            case 0x34:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.XorAlImm;
                                    const operand = this.readNextCodeByte();
                                    const result = (this.getAL() ^ operand) & 0xFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.setAL(result);
                                    this.calcParitySignZeroFlagB(this.getAL());
                                    break;
                                }
                            case 0x35:
                                {
                                    this.clockCount += clockCycles_1.ClockCycles8086.XorAxImm;
                                    const operand = this.readNextCodeWord();
                                    const result = (this.AX ^ operand) & 0xFFFF;
                                    this.flags.CF = this.flags.OF = false;
                                    this.AX = result;
                                    this.calcParitySignZeroFlagW(this.AX);
                                }
                                break;
                            case 0xFE:
                                this.handleOpcodeFeFf(false);
                                break;
                            case 0xFF:
                                this.handleOpcodeFeFf(true);
                                break;
                            case 0x80:
                                this.handleOpcode80();
                                break;
                            case 0x81:
                                this.handleOpcode81();
                                break;
                            case 0x83:
                                this.handleOpcode83();
                                break;
                            case 0xF6:
                                this.handleOpcodeF6();
                                break;
                            case 0xF7:
                                this.handleOpcodeF7();
                                break;
                            case 0xD0:
                                this.handleOpcodeD0();
                                break;
                            case 0xD1:
                                this.handleOpcodeD1();
                                break;
                            case 0xD2:
                                this.handleOpcodeD2();
                                break;
                            case 0xD3:
                                this.handleOpcodeD3();
                                break;
                            case 0xC0:
                                this.handleOpcodeC0();
                                break;
                            case 0xC1:
                                this.handleOpcodeC1();
                                break;
                            case 0xD8:
                            case 0xD9:
                            case 0xDA:
                            case 0xDB:
                            case 0xDC:
                            case 0xDD:
                            case 0xDE:
                            case 0xDF:
                                this.handleFpuInstruction(opCode);
                                break;
                            default:
                                this.handleIllegalOpcode();
                                break;
                        }
                    } while (execNextOpcode);
                    this.segOverride = null;
                    if (this.blockInterrupt)
                        this.blockInterrupt = false;
                    else {
                        if (this.flags.TF)
                            this.doSoftInterrupt(1);
                        if (this.softInterrupt != null || this.hardInterrupt != null)
                            this.processInterrupt();
                    }
                    if ((this.instCount & 0x0F) == 0)
                        this.handleCpuEvents();
                    this.instCount++;
                }
            }
            catch (e) {
                if (e instanceof cpuUtils_1.CpuError) {
                    this.segOverride = null;
                    this.doSoftInterrupt(e.exCode);
                    if (this.blockInterrupt)
                        this.blockInterrupt = false;
                    else
                        this.processInterrupt();
                    this.instCount++;
                }
                else
                    throw e;
            }
        } while (this.clockCount < endCount);
    }
    handleIllegalOpcode() {
        return;
    }
    handleFpuInstruction(opCode) {
        this.clockCount += clockCycles_1.ClockCycles8086.FpuInstruction;
        const cmd = this.readNextCodeByte();
        if (cmd < 0xC0) {
            this.IP = (this.IP - 1) & 0xFFFF;
            this.readAndDecodeAddressByte();
        }
    }
    handleCpuEvents() {
        for (let idx = this.cpuEvents.length - 1; idx >= 0; idx--) {
            const cpuEvent = this.cpuEvents[idx];
            if (cpuEvent.clockCount <= this.clockCount) {
                cpuEvent.action();
                this.cpuEvents.splice(idx, 1);
            }
        }
    }
    handleConditionalJump(conditionMet) {
        if (conditionMet) {
            let addr = this.readNextCodeByte();
            if (addr > 0x7F)
                addr -= 0x100;
            this.clockCount += clockCycles_1.ClockCycles8086.JumpCondMet;
            this.IP = (this.IP + addr) & 0xFFFF;
        }
        else {
            this.IP = (this.IP + 1) & 0xFFFF;
            this.clockCount += clockCycles_1.ClockCycles8086.JumpCondNotMet;
        }
    }
    handleRepeat() {
        if (this.stringOperation == cpuUtils_1.Repeat.None)
            return;
        this.CX = (this.CX - 1) & 0xFFFF;
        if (this.CX != 0)
            this.IP = this.repeatIp;
    }
    handleRepeatCheckZeroFlag() {
        if (this.stringOperation == cpuUtils_1.Repeat.None)
            return;
        this.CX = (this.CX - 1) & 0xFFFF;
        if (this.CX != 0 && ((this.stringOperation == cpuUtils_1.Repeat.RepZ && this.flags.ZF) || (this.stringOperation == cpuUtils_1.Repeat.RepNz && !this.flags.ZF)))
            this.IP = this.repeatIp;
    }
    processInterrupt() {
        let interrupt;
        if (this.softInterrupt != null) {
            interrupt = this.softInterrupt;
            this.softInterrupt = null;
            this.pushWord(this.flags.value);
        }
        else if (this.hardInterrupt != null && this.flags.IF) {
            this.clockCount += clockCycles_1.ClockCycles8086.HardInterrupt;
            if (this.halt) {
                this.halt = false;
                this.IP = (this.IP + 1) & 0xFFFF;
            }
            interrupt = this.hardInterrupt;
            this.hardInterrupt = null;
            this.pushWord(this.flags.value);
        }
        else
            return;
        this.flags.IF = false;
        this.flags.TF = false;
        this.pushWord(this.CS);
        this.pushWord(this.IP);
        this.IP = this.memoryProvider.peekW(interrupt * 4);
        this.CS = this.memoryProvider.peekW(interrupt * 4 + 2);
    }
    handleOpcodeFeFf(wordOperation) {
        const ii = this.readAndDecodeAddressByte();
        switch (ii.reg) {
            case 0:
                this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.IncReg : clockCycles_1.ClockCycles8086.IncMem;
                if (wordOperation)
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, this.incWord(this.getRmWord(ii.mode, ii.rm, ii.rmAddr)));
                else
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, this.incByte(this.getRmByte(ii.mode, ii.rm, ii.rmAddr)));
                break;
            case 1:
                this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.DecReg : clockCycles_1.ClockCycles8086.DecMem;
                if (wordOperation)
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, this.decWord(this.getRmWord(ii.mode, ii.rm, ii.rmAddr)));
                else
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, this.decByte(this.getRmByte(ii.mode, ii.rm, ii.rmAddr)));
                break;
            case 2:
                this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.CallNearReg : clockCycles_1.ClockCycles8086.CallNearMem;
                this.pushWord(this.IP);
                this.IP = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                break;
            case 3:
                {
                    this.clockCount += clockCycles_1.ClockCycles8086.CallFarRm;
                    if (ii.mode == 3)
                        this.handleIllegalOpcode();
                    this.pushWord(this.CS);
                    this.pushWord(this.IP);
                    const destOffs = this.memoryProvider.peekW(ii.rmAddr);
                    ii.rmAddr += 2;
                    const destSeg = this.memoryProvider.peekW(ii.rmAddr);
                    this.CS = destSeg;
                    this.IP = destOffs;
                }
                break;
            case 4:
                this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.JmpNearReg : clockCycles_1.ClockCycles8086.JmpNearMem;
                this.IP = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                break;
            case 5:
                {
                    this.clockCount += clockCycles_1.ClockCycles8086.JmpFarRm;
                    if (ii.mode == 3)
                        this.handleIllegalOpcode();
                    const destOffs = this.memoryProvider.peekW(ii.rmAddr);
                    const destSeg = this.memoryProvider.peekW(ii.rmAddr + 2);
                    this.CS = destSeg;
                    this.IP = destOffs;
                }
                break;
            case 6:
                this.clockCount += clockCycles_1.ClockCycles8086.PushRm;
                this.pushWord(this.getRmWord(ii.mode, ii.rm, ii.rmAddr));
                break;
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcode80() {
        const ii = this.readAndDecodeAddressByte();
        switch (ii.reg) {
            case 0:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AddRmImmReg : clockCycles_1.ClockCycles8086.AddRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    const result = this.addByte(value, operand);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 1:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.OrRmImmReg : clockCycles_1.ClockCycles8086.OrRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    const result = (value | operand) & 0xFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagB(result);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 2:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AdcRmImmReg : clockCycles_1.ClockCycles8086.AdcRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    const result = this.adcByte(value, operand);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 3:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.SbbRmImmReg : clockCycles_1.ClockCycles8086.SbbRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    const result = this.sbbByte(value, operand);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 4:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AndRmImmReg : clockCycles_1.ClockCycles8086.AndRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    const result = (value & operand) & 0xFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagB(result);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 5:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.SubRmImmReg : clockCycles_1.ClockCycles8086.SubRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    const result = this.subByte(value, operand);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 6:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.XorRmImmReg : clockCycles_1.ClockCycles8086.XorRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    const result = (value ^ operand) & 0xFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagB(result);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 7:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.CmpRmImmReg : clockCycles_1.ClockCycles8086.CmpRmImmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeByte();
                    this.subByte(value, operand);
                    break;
                }
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcode81() {
        const ii = this.readAndDecodeAddressByte();
        switch (ii.reg) {
            case 0:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AddRmImmReg : clockCycles_1.ClockCycles8086.AddRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    const result = this.addWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 1:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.OrRmImmReg : clockCycles_1.ClockCycles8086.OrRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    const result = (value | operand) & 0xFFFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagW(result);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                }
                break;
            case 2:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AdcRmImmReg : clockCycles_1.ClockCycles8086.AdcRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    const result = this.adcWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 3:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.SbbRmImmReg : clockCycles_1.ClockCycles8086.SbbRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    const result = this.sbbWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 4:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AndRmImmReg : clockCycles_1.ClockCycles8086.AndRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    const result = (value & operand) & 0xFFFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagW(result);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 5:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.SubRmImmReg : clockCycles_1.ClockCycles8086.SubRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    const result = this.subWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 6:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.XorRmImmReg : clockCycles_1.ClockCycles8086.XorRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    const result = (value ^ operand) & 0xFFFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagW(result);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 7:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.CmpRmImmReg : clockCycles_1.ClockCycles8086.CmpRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const operand = this.readNextCodeWord();
                    this.subWord(value, operand);
                    break;
                }
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcode83() {
        const ii = this.readAndDecodeAddressByte();
        switch (ii.reg) {
            case 0:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AddRmImmReg : clockCycles_1.ClockCycles8086.AddRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    const result = this.addWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 1:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.OrRmImmReg : clockCycles_1.ClockCycles8086.OrRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    const result = (value | operand) & 0xFFFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagW(result);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 2:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AdcRmImmReg : clockCycles_1.ClockCycles8086.AdcRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    const result = this.adcWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 3:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.SbbRmImmReg : clockCycles_1.ClockCycles8086.SbbRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    const result = this.sbbWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 4:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.AndRmImmReg : clockCycles_1.ClockCycles8086.AndRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    const result = (value & operand) & 0xFFFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagW(result);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 5:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.SubRmImmReg : clockCycles_1.ClockCycles8086.SubRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    const result = this.subWord(value, operand);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 6:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.XorRmImmReg : clockCycles_1.ClockCycles8086.XorRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    const result = (value ^ operand) & 0xFFFF;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagW(result);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 7:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.CmpRmImmReg : clockCycles_1.ClockCycles8086.CmpRmImmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const byteOperand = this.readNextCodeByte();
                    const operand = byteOperand > 127 ? byteOperand + 0xFF00 : byteOperand;
                    this.subWord(value, operand);
                    break;
                }
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeF6() {
        const ii = this.readAndDecodeAddressByte();
        switch (ii.reg) {
            case 0:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.TestRmImmReg : clockCycles_1.ClockCycles8086.TestRmImmMem;
                    const operand = this.readNextCodeByte();
                    const result = this.getRmByte(ii.mode, ii.rm, ii.rmAddr) & operand;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagB(result);
                    break;
                }
            case 2:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.NotRmReg : clockCycles_1.ClockCycles8086.NotRmMem;
                    let value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    value = ~value & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, value);
                    break;
                }
            case 3:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.NegRmReg : clockCycles_1.ClockCycles8086.NegRmMem;
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const result = this.subByte(0, value);
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, result);
                    break;
                }
            case 4:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.MulReg : clockCycles_1.ClockCycles8086.MulMem;
                    const result = this.getAL() * this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    this.flags.CF = this.flags.OF = result > 0xFF;
                    this.flags.ZF = false;
                    this.AX = result & 0xFFFF;
                    break;
                }
            case 5:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ImulReg : clockCycles_1.ClockCycles8086.ImulMem;
                    let op1 = this.getAL();
                    if (op1 > 0x7F)
                        op1 -= 0x100;
                    let op2 = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    if (op2 > 0x7F)
                        op2 -= 0x100;
                    const result = op1 * op2;
                    this.AX = result & 0xFFFF;
                    this.flags.CF = this.flags.OF = this.getAH() != 0 && this.getAH() != 0xFF;
                    this.flags.ZF = false;
                    break;
                }
            case 6:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.DivReg : clockCycles_1.ClockCycles8086.DivMem;
                    const dividend = this.AX;
                    const divisor = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    if (divisor == 0)
                        this.doSoftInterrupt(0);
                    else {
                        const result = Math.trunc(dividend / divisor);
                        if (result > 0xFF)
                            this.doSoftInterrupt(0);
                        else {
                            this.setAL(result);
                            this.setAH(dividend % divisor);
                        }
                    }
                    break;
                }
            case 7:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.IdivReg : clockCycles_1.ClockCycles8086.IdivMem;
                    const dividend = this.AX > 0x7FFF ? this.AX - 0x10000 : this.AX;
                    let divisor = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    if (divisor > 0x7F)
                        divisor -= 0x100;
                    if (divisor == 0)
                        this.doSoftInterrupt(0);
                    else {
                        const result = Math.trunc(dividend / divisor);
                        if (result >= 0x80 || result < -0x80)
                            this.doSoftInterrupt(0);
                        else {
                            this.setAL(result);
                            this.setAH(dividend % divisor);
                        }
                    }
                    break;
                }
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeF7() {
        const ii = this.readAndDecodeAddressByte();
        switch (ii.reg) {
            case 0:
                this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.TestRmImmReg : clockCycles_1.ClockCycles8086.TestRmImmMem;
                {
                    const operand = this.readNextCodeWord();
                    const result = this.getRmWord(ii.mode, ii.rm, ii.rmAddr) & operand;
                    this.flags.CF = this.flags.OF = false;
                    this.calcParitySignZeroFlagW(result);
                }
                break;
            case 2:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.NotRmReg : clockCycles_1.ClockCycles8086.NotRmMem;
                    let value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    value = ~value & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, value);
                }
                break;
            case 3:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.NegRmReg : clockCycles_1.ClockCycles8086.NegRmMem;
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const result = this.subWord(0, value);
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, result);
                }
                break;
            case 4:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.MulReg16 : clockCycles_1.ClockCycles8086.MulMem16;
                    const result = this.AX * this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    this.flags.CF = this.flags.OF = result > 0xFFFF;
                    this.flags.ZF = false;
                    this.AX = result & 0xFFFF;
                    this.DX = (result >> 16) & 0xFFFF;
                }
                break;
            case 5:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ImulReg16 : clockCycles_1.ClockCycles8086.ImulMem16;
                    const op1 = this.AX > 0x7FFF ? this.AX - 0x10000 : this.AX;
                    let op2 = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    if (op2 > 0x7FFF)
                        op2 -= 0x10000;
                    const result = op1 * op2;
                    this.AX = result & 0xFFFF;
                    this.DX = (result >> 16) & 0xFFFF;
                    this.flags.CF = this.flags.OF = this.DX != 0 && this.DX != 0xFFFF;
                    this.flags.ZF = false;
                }
                break;
            case 6:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.DivReg16 : clockCycles_1.ClockCycles8086.DivMem16;
                    const dividend = (this.DX << 16) + this.AX;
                    const divisor = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    if (divisor == 0)
                        this.doSoftInterrupt(0);
                    else {
                        const result = Math.trunc(dividend / divisor);
                        if (result > 0xFFFF)
                            this.doSoftInterrupt(0);
                        else {
                            this.AX = result & 0xFFFF;
                            this.DX = (dividend % divisor) & 0xFFFF;
                        }
                    }
                }
                break;
            case 7:
                {
                    this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.IdivReg16 : clockCycles_1.ClockCycles8086.IdivMem16;
                    const dividend = ((this.DX << 16) + this.AX) & 0xFFFFFFFF;
                    let divisor = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    if (divisor > 0x7FFF)
                        divisor -= 0x10000;
                    if (divisor == 0)
                        this.softInterrupt = 0;
                    else {
                        const result = Math.trunc(dividend / divisor);
                        if (result >= 0x8000 || result < -0x8000)
                            this.doSoftInterrupt(0);
                        else {
                            this.AX = result & 0xFFFF;
                            this.DX = (dividend % divisor) & 0xFFFF;
                        }
                    }
                }
                break;
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeD0() {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ShiftRmReg : clockCycles_1.ClockCycles8086.ShiftRmMem;
        switch (ii.reg) {
            case 0:
                {
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value << 1) | (value >> 7)) & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x80) != (newValue & 0x80);
                    this.flags.CF = (value & 0x80) > 0;
                    break;
                }
            case 1:
                {
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value >> 1) | (value << 7)) & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x80) != (newValue & 0x80);
                    this.flags.CF = (value & 0x01) > 0;
                    break;
                }
            case 2:
                {
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value << 1) + (this.flags.CF ? 1 : 0)) & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x80) != (newValue & 0x80);
                    this.flags.CF = (value & 0x80) > 0;
                    break;
                }
            case 3:
                {
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value >> 1) + (this.flags.CF ? 0x80 : 0)) & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x80) != (newValue & 0x80);
                    this.flags.CF = (value & 0x01) > 0;
                    break;
                }
            case 4:
                {
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = (value << 1) & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.calcParitySignZeroFlagB(newValue);
                    this.flags.OF = (value & 0x80) != (newValue & 0x80);
                    this.flags.CF = (value & 0x80) > 0;
                    break;
                }
            case 5:
                {
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = (value >> 1) & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.calcParitySignZeroFlagB(newValue);
                    this.flags.OF = (value & 0x80) != (newValue & 0x80);
                    this.flags.CF = (value & 0x01) > 0;
                    break;
                }
            case 7:
                {
                    const value = this.getRmByte(ii.mode, ii.rm, ii.rmAddr);
                    const neg = value & 0x80;
                    const newValue = ((value >> 1) | neg) & 0xFF;
                    this.setRmByte(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.calcParitySignZeroFlagB(newValue);
                    this.flags.OF = false;
                    this.flags.CF = (value & 0x01) > 0;
                    break;
                }
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeD1() {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ShiftRmReg : clockCycles_1.ClockCycles8086.ShiftRmMem;
        switch (ii.reg) {
            case 0:
                {
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value << 1) | (value >> 15)) & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
                    this.flags.CF = (value & 0x8000) > 0;
                    break;
                }
            case 1:
                {
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value >> 1) | (value << 15)) & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
                    this.flags.CF = (value & 0x0001) > 0;
                    break;
                }
            case 2:
                {
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value << 1) + (this.flags.CF ? 1 : 0)) & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
                    this.flags.CF = (value & 0x8000) > 0;
                    break;
                }
            case 3:
                {
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = ((value >> 1) + (this.flags.CF ? 0x8000 : 0)) & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
                    this.flags.CF = (value & 0x0001) > 0;
                    break;
                }
            case 4:
                {
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = (value << 1) & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.calcParitySignZeroFlagW(newValue);
                    this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
                    this.flags.CF = (value & 0x8000) > 0;
                    break;
                }
            case 5:
                {
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const newValue = (value >> 1) & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.calcParitySignZeroFlagW(newValue);
                    this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
                    this.flags.CF = (value & 0x0001) > 0;
                    break;
                }
            case 7:
                {
                    const value = this.getRmWord(ii.mode, ii.rm, ii.rmAddr);
                    const neg = value & 0x8000;
                    const newValue = ((value >> 1) | neg) & 0xFFFF;
                    this.setRmWord(ii.mode, ii.rm, ii.rmAddr, newValue);
                    this.calcParitySignZeroFlagW(newValue);
                    this.flags.OF = false;
                    this.flags.CF = (value & 0x0001) > 0;
                    break;
                }
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeC0() {
        const ii = this.readAndDecodeAddressByte();
        const count = this.readNextCodeByte() & 0x1F;
        this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ShiftRmImmReg + count : clockCycles_1.ClockCycles8086.ShiftRmImmMem + count;
        switch (ii.reg) {
            case 0:
                this.rolByte(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 1:
                this.rorByte(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 2:
                this.rclByte(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 3:
                this.rcrByte(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 4:
                this.shlByte(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 5:
                this.shrByte(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 7:
                this.sarByte(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeC1() {
        const ii = this.readAndDecodeAddressByte();
        const count = this.readNextCodeByte();
        this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ShiftRmImmReg + count : clockCycles_1.ClockCycles8086.ShiftRmImmMem + count;
        switch (ii.reg) {
            case 0:
                this.rolWord(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 1:
                this.rorWord(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 2:
                this.rclWord(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 3:
                this.rcrWord(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 4:
                this.shlWord(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 5:
                this.shrWord(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            case 7:
                this.sarWord(ii.mode, ii.rm, ii.rmAddr, count);
                break;
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeD2() {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ShiftRmClReg + this.getCL() : clockCycles_1.ClockCycles8086.ShiftRmClMem + this.getCL();
        switch (ii.reg) {
            case 0:
                this.rolByte(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 1:
                this.rorByte(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 2:
                this.rclByte(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 3:
                this.rcrByte(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 4:
                this.shlByte(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 5:
                this.shrByte(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 7:
                this.sarByte(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    handleOpcodeD3() {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? clockCycles_1.ClockCycles8086.ShiftRmClReg + this.getCL() : clockCycles_1.ClockCycles8086.ShiftRmClMem + this.getCL();
        switch (ii.reg) {
            case 0:
                this.rolWord(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 1:
                this.rorWord(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 2:
                this.rclWord(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 3:
                this.rcrWord(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 4:
                this.shlWord(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 5:
                this.shrWord(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            case 7:
                this.sarWord(ii.mode, ii.rm, ii.rmAddr, this.getCL());
                break;
            default:
                this.handleIllegalOpcode();
                break;
        }
    }
    incByte(value) {
        value = (value + 1) & 0xFF;
        this.calcParitySignZeroFlagB(value);
        this.flags.OF = value == 0x80;
        this.flags.AF = (value & 0x0F) == 0;
        return value;
    }
    incWord(value) {
        value = (value + 1) & 0xFFFF;
        this.calcParitySignZeroFlagW(value);
        this.flags.OF = value == 0x8000;
        this.flags.AF = (value & 0x0F) == 0;
        return value;
    }
    decWord(value) {
        value = (value - 1) & 0xFFFF;
        this.calcParitySignZeroFlagW(value);
        this.flags.OF = value == 0x7FFF;
        this.flags.AF = (value & 0x0F) == 0x0F;
        return value;
    }
    decByte(value) {
        value = (value - 1) & 0xFF;
        this.calcParitySignZeroFlagB(value);
        this.flags.OF = value == 0x7F;
        this.flags.AF = (value & 0x0F) == 0x0F;
        return value;
    }
    rolByte(mode, rm, rmAddr, count) {
        const bits = count & 0x07;
        const value = this.getRmByte(mode, rm, rmAddr);
        const newValue = ((value << bits) | (value >> 8 - bits)) & 0xFF;
        this.setRmByte(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x80) != (newValue & 0x80);
            this.flags.CF = (value & (1 << 8 - bits)) > 0;
        }
    }
    rorByte(mode, rm, rmAddr, count) {
        const bits = count & 0x07;
        const value = this.getRmByte(mode, rm, rmAddr);
        const newValue = ((value >> bits) | (value << 8 - bits)) & 0xFF;
        this.setRmByte(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x80) != (newValue & 0x80);
            this.flags.CF = (value & (1 << bits - 1)) > 0;
        }
    }
    rclByte(mode, rm, rmAddr, count) {
        const bits = (count & 0x1F) % 9;
        const value = this.getRmByte(mode, rm, rmAddr);
        const cfValue = (bits > 0 && this.flags.CF) ? 1 << bits - 1 : 0;
        const newValue = ((value << bits) | cfValue | (value >> 9 - bits)) & 0xFF;
        this.setRmByte(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x80) != (newValue & 0x80);
            this.flags.CF = (value & (1 << 8 - bits)) > 0;
        }
    }
    rcrByte(mode, rm, rmAddr, count) {
        const bits = (count & 0x1F) % 9;
        const value = this.getRmByte(mode, rm, rmAddr);
        const cfValue = (bits > 0 && this.flags.CF) ? 1 << 8 - bits : 0;
        const newValue = ((value >> bits) | cfValue | (value << 9 - bits)) & 0xFF;
        this.setRmByte(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x80) != (newValue & 0x80);
            this.flags.CF = (value & (1 << bits - 1)) > 0;
        }
    }
    shlByte(mode, rm, rmAddr, count) {
        const bits = count & 0x1F;
        const value = this.getRmByte(mode, rm, rmAddr);
        const newValue = (value << bits) & 0xFF;
        this.setRmByte(mode, rm, rmAddr, newValue);
        this.calcParitySignZeroFlagB(newValue);
        if (bits == 1)
            this.flags.OF = (value & 0x80) != (newValue & 0x80);
        this.flags.CF = bits <= 8 && (value & (1 << 8 - bits)) > 0;
    }
    shrByte(mode, rm, rmAddr, count) {
        const bits = count & 0x1F;
        const value = this.getRmByte(mode, rm, rmAddr);
        const newValue = (value >> bits) & 0xFF;
        this.setRmByte(mode, rm, rmAddr, newValue);
        this.calcParitySignZeroFlagB(newValue);
        if (bits == 1)
            this.flags.OF = (value & 0x80) != (newValue & 0x80);
        this.flags.CF = bits > 0 && (value & (1 << bits - 1)) > 0;
    }
    sarByte(mode, rm, rmAddr, count) {
        const bits = count & 0x1F;
        const value = this.getRmByte(mode, rm, rmAddr);
        const neg = (value & 0x80) > 0 ? 0xFF << 8 - bits : 0;
        const newValue = ((value >> bits) | neg) & 0xFF;
        this.setRmByte(mode, rm, rmAddr, newValue);
        this.calcParitySignZeroFlagB(newValue);
        this.flags.OF = false;
        this.flags.CF = bits > 0 && (value & (1 << bits - 1)) > 0;
    }
    rolWord(mode, rm, rmAddr, count) {
        const bits = count & 0x0F;
        const value = this.getRmWord(mode, rm, rmAddr);
        const newValue = ((value << bits) | (value >> 16 - bits)) & 0xFFFF;
        this.setRmWord(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
            this.flags.CF = (value & (1 << 16 - bits)) > 0;
        }
    }
    rorWord(mode, rm, rmAddr, count) {
        const bits = count & 0x0F;
        const value = this.getRmWord(mode, rm, rmAddr);
        const newValue = ((value >> bits) | (value << 16 - bits)) & 0xFFFF;
        this.setRmWord(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
            this.flags.CF = (value & (1 << bits - 1)) > 0;
        }
    }
    rclWord(mode, rm, rmAddr, count) {
        const bits = (count & 0x1F) % 17;
        const value = this.getRmWord(mode, rm, rmAddr);
        const cfValue = (bits > 0 && this.flags.CF) ? 1 << bits - 1 : 0;
        const newValue = ((value << bits) | cfValue | (value >> 17 - bits)) & 0xFFFF;
        this.setRmWord(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
            this.flags.CF = (value & (1 << 16 - bits)) > 0;
        }
    }
    rcrWord(mode, rm, rmAddr, count) {
        const bits = (count & 0x1F) % 17;
        const value = this.getRmWord(mode, rm, rmAddr);
        const cfValue = (bits > 0 && this.flags.CF) ? 1 << 16 - bits : 0;
        const newValue = ((value >> bits) | cfValue | (value << 17 - bits)) & 0xFFFF;
        this.setRmWord(mode, rm, rmAddr, newValue);
        if (bits > 0) {
            if (bits == 1)
                this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
            this.flags.CF = (value & (1 << bits - 1)) > 0;
        }
    }
    shlWord(mode, rm, rmAddr, count) {
        const bits = count & 0x1F;
        const value = this.getRmWord(mode, rm, rmAddr);
        const newValue = (value << bits) & 0xFFFF;
        this.setRmWord(mode, rm, rmAddr, newValue);
        this.calcParitySignZeroFlagW(newValue);
        if (bits == 1)
            this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
        this.flags.CF = bits <= 16 && (value & (1 << 16 - bits)) > 0;
    }
    shrWord(mode, rm, rmAddr, count) {
        const bits = count & 0x1F;
        const value = this.getRmWord(mode, rm, rmAddr);
        const newValue = (value >> bits) & 0xFFFF;
        this.setRmWord(mode, rm, rmAddr, newValue);
        this.calcParitySignZeroFlagW(newValue);
        if (bits == 1)
            this.flags.OF = (value & 0x8000) != (newValue & 0x8000);
        this.flags.CF = bits > 0 && (value & (1 << bits - 1)) > 0;
    }
    sarWord(mode, rm, rmAddr, count) {
        const bits = count & 0x1F;
        const value = this.getRmWord(mode, rm, rmAddr);
        const neg = (value & 0x8000) > 0 ? 0xFFFF << 16 - bits : 0;
        const newValue = ((value >> bits) | neg) & 0xFFFF;
        this.setRmWord(mode, rm, rmAddr, newValue);
        this.calcParitySignZeroFlagW(newValue);
        this.flags.OF = false;
        this.flags.CF = bits > 0 && (value & (1 << bits - 1)) > 0;
    }
    subByte(val1, val2) {
        let result = val1 - val2;
        const signedResult = (val1 > 0x7F ? val1 - 0x100 : val1) - (val2 > 0x7F ? val2 - 0x100 : val2);
        this.flags.CF = result < 0;
        this.flags.OF = signedResult > 0x7F || signedResult < -0x80;
        this.flags.AF = (val1 & 0x0F) - (val2 & 0x0F) < 0;
        result &= 0xFF;
        this.calcParitySignZeroFlagB(result);
        return result;
    }
    subWord(val1, val2) {
        let result = val1 - val2;
        const signedResult = (val1 > 0x7FFF ? val1 - 0x10000 : val1) - (val2 > 0x7FFF ? val2 - 0x10000 : val2);
        this.flags.CF = result < 0;
        this.flags.OF = signedResult > 0x7FFF || signedResult < -0x8000;
        this.flags.AF = (val1 & 0x0F) - (val2 & 0x0F) < 0;
        result &= 0xFFFF;
        this.calcParitySignZeroFlagW(result);
        return result;
    }
    sbbByte(val1, val2) {
        const borrow = this.flags.CF ? 1 : 0;
        let result = val1 - val2 - borrow;
        const signedResult = (val1 > 0x7F ? val1 - 0x100 : val1) - (val2 > 0x7F ? val2 - 0x100 : val2) - borrow;
        this.flags.CF = result < 0;
        this.flags.OF = signedResult > 0x7F || signedResult < -0x80;
        this.flags.AF = (val1 & 0x0F) - (val2 & 0x0F) - borrow < 0;
        result &= 0xFF;
        this.calcParitySignZeroFlagB(result);
        return result;
    }
    sbbWord(val1, val2) {
        const borrow = this.flags.CF ? 1 : 0;
        let result = val1 - val2 - borrow;
        const signedResult = (val1 > 0x7FFF ? val1 - 0x10000 : val1) - (val2 > 0x7FFF ? val2 - 0x10000 : val2) - borrow;
        this.flags.CF = result < 0;
        this.flags.OF = signedResult > 0x7FFF || signedResult < -0x8000;
        this.flags.AF = (val1 & 0x0F) - (val2 & 0x0F) - borrow < 0;
        result &= 0xFFFF;
        this.calcParitySignZeroFlagW(result);
        return result;
    }
    addByte(val1, val2) {
        let result = val1 + val2;
        const signedResult = (val1 > 0x7F ? val1 - 0x100 : val1) - (val2 > 0x7F ? val2 - 0x100 : val2);
        this.flags.CF = result > 0xFF;
        this.flags.OF = signedResult > 0x7F || signedResult < -0x80;
        this.flags.AF = (val1 & 0x0F) + (val2 & 0x0F) > 0x0F;
        result &= 0xFF;
        this.calcParitySignZeroFlagB(result);
        return result;
    }
    addWord(val1, val2) {
        let result = val1 + val2;
        const signedResult = (val1 > 0x7FFF ? val1 - 0x10000 : val1) - (val2 > 0x7FFF ? val2 - 0x10000 : val2);
        this.flags.CF = result > 0xFFFF;
        this.flags.OF = signedResult > 0x7FFF || signedResult < -0x8000;
        this.flags.AF = (val1 & 0x0F) + (val2 & 0x0F) > 0x0F;
        result &= 0xFFFF;
        this.calcParitySignZeroFlagW(result);
        return result;
    }
    adcByte(val1, val2) {
        const carry = this.flags.CF ? 1 : 0;
        let result = val1 + val2 + carry;
        const signedResult = (val1 > 0x7F ? val1 - 0x100 : val1) - (val2 > 0x7F ? val2 - 0x100 : val2) + carry;
        this.flags.CF = result > 0xFF;
        this.flags.OF = signedResult > 0x7F || signedResult < -0x80;
        this.flags.AF = (val1 & 0x0F) + (val2 & 0x0F) + carry > 0x0F;
        result &= 0xFF;
        this.calcParitySignZeroFlagB(result);
        return result;
    }
    adcWord(val1, val2) {
        const carry = this.flags.CF ? 1 : 0;
        let result = val1 + val2 + carry;
        const signedResult = (val1 > 0x7FFF ? val1 - 0x10000 : val1) - (val2 > 0x7FFF ? val2 - 0x10000 : val2) + carry;
        this.flags.CF = result > 0xFFFF;
        this.flags.OF = signedResult > 0x7FFF || signedResult < -0x8000;
        this.flags.AF = (val1 & 0x0F) + (val2 & 0x0F) + carry > 0x0F;
        result &= 0xFFFF;
        this.calcParitySignZeroFlagW(result);
        return result;
    }
    loadSeg() {
        this.clockCount += clockCycles_1.ClockCycles8086.Lds;
        const ii = this.readAndDecodeAddressByte();
        if (ii.mode == 3)
            this.handleIllegalOpcode();
        const offs = this.memoryProvider.peekW(ii.rmAddr);
        this.setRegWord(ii.reg, offs);
        ii.rmAddr += 2;
        return this.memoryProvider.peekW(ii.rmAddr);
    }
    pushWord(value) {
        this.SP = (this.SP - 2) & 0xFFFF;
        this.memoryProvider.pokeW(this.genAddr(this.SS, this.SP), value);
    }
    popWord() {
        const value = this.memoryProvider.peekW(this.genAddr(this.SS, this.SP));
        this.SP = (this.SP + 2) & 0xFFFF;
        return value;
    }
    calcParitySignZeroFlagB(value) {
        value &= 0xFF;
        this.flags.PF = this.parities[value];
        this.flags.SF = (value & 0x80) > 0;
        this.flags.ZF = value == 0;
    }
    calcParitySignZeroFlagW(value) {
        value &= 0xFFFF;
        this.flags.PF = this.parities[value & 0xFF];
        this.flags.SF = (value & 0x8000) > 0;
        this.flags.ZF = value == 0;
    }
    readAndDecodeAddressByte() {
        const ii = new InstrInfo();
        const addressByte = this.readNextCodeByte();
        ii.mode = (addressByte & 0xC0) >> 6;
        ii.reg = (addressByte & 0x38) >> 3;
        ii.rm = addressByte & 0x07;
        if (ii.mode == 3)
            ii.rmAddr = 0;
        else
            ii.rmAddr = this.calcRmAddr(ii.mode, ii.rm);
        return ii;
    }
    doByteOperationU(direction, operation, regClocks, memClocks, saveOutput = true) {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? regClocks : memClocks;
        if (direction == cpuUtils_1.Direction.RegToRm) {
            const output = operation(this.getRegByte(ii.reg));
            if (saveOutput)
                this.setRmByte(ii.mode, ii.rm, ii.rmAddr, output);
        }
        else {
            const output = operation(this.getRmByte(ii.mode, ii.rm, ii.rmAddr));
            if (saveOutput)
                this.setRegByte(ii.reg, output);
        }
    }
    doByteOperation(direction, operation, regClocks, memClocks, saveOutput = true) {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? regClocks : memClocks;
        if (direction == cpuUtils_1.Direction.RegToRm) {
            const output = operation(this.getRmByte(ii.mode, ii.rm, ii.rmAddr), this.getRegByte(ii.reg));
            if (saveOutput)
                this.setRmByte(ii.mode, ii.rm, ii.rmAddr, output);
        }
        else {
            const output = operation(this.getRegByte(ii.reg), this.getRmByte(ii.mode, ii.rm, ii.rmAddr));
            if (saveOutput)
                this.setRegByte(ii.reg, output);
        }
    }
    doWordOperationU(direction, operation, regClocks, memClocks, saveOutput = true) {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? regClocks : memClocks;
        if (direction == cpuUtils_1.Direction.RegToRm) {
            const output = operation(this.getRegWord(ii.reg));
            if (saveOutput)
                this.setRmWord(ii.mode, ii.rm, ii.rmAddr, output);
        }
        else {
            const output = operation(this.getRmWord(ii.mode, ii.rm, ii.rmAddr));
            if (saveOutput)
                this.setRegWord(ii.reg, output);
        }
    }
    doSegRegWordOperation(direction, operation, regClocks, memClocks, saveOutput = true) {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? regClocks : memClocks;
        if (direction == cpuUtils_1.Direction.RegToRm) {
            const output = operation(this.getSegReg(ii.reg));
            if (saveOutput)
                this.setRmWord(ii.mode, ii.rm, ii.rmAddr, output);
        }
        else {
            const output = operation(this.getRmWord(ii.mode, ii.rm, ii.rmAddr));
            if (saveOutput)
                this.setSegReg(ii.reg, output);
        }
    }
    doWordOperation(direction, operation, regClocks, memClocks, saveOutput = true) {
        const ii = this.readAndDecodeAddressByte();
        this.clockCount += ii.mode == 3 ? regClocks : memClocks;
        if (direction == cpuUtils_1.Direction.RegToRm) {
            const output = operation(this.getRmWord(ii.mode, ii.rm, ii.rmAddr), this.getRegWord(ii.reg));
            if (saveOutput)
                this.setRmWord(ii.mode, ii.rm, ii.rmAddr, output);
        }
        else {
            const output = operation(this.getRegWord(ii.reg), this.getRmWord(ii.mode, ii.rm, ii.rmAddr));
            if (saveOutput)
                this.setRegWord(ii.reg, output);
        }
    }
    calcRmAddr(mode, rm) {
        var _a;
        const ei = this.calcEa(mode, rm);
        return this.genAddr((_a = this.segOverride) !== null && _a !== void 0 ? _a : ei.defaultSeg, ei.ea);
    }
    calcEa(mode, rm) {
        const eai = new EffAddrInfo();
        switch (mode) {
            case 0:
                switch (rm) {
                    case 0:
                        eai.defaultSeg = this.DS;
                        eai.ea = (this.BX + this.SI) & 0xFFFF;
                        return eai;
                    case 1:
                        eai.defaultSeg = this.DS;
                        eai.ea = (this.BX + this.DI) & 0xFFFF;
                        return eai;
                    case 2:
                        eai.defaultSeg = this.SS;
                        eai.ea = (this.BP + this.SI) & 0xFFFF;
                        return eai;
                    case 3:
                        eai.defaultSeg = this.SS;
                        eai.ea = (this.BP + this.DI) & 0xFFFF;
                        return eai;
                    case 4:
                        eai.defaultSeg = this.DS;
                        eai.ea = this.SI;
                        return eai;
                    case 5:
                        eai.defaultSeg = this.DS;
                        eai.ea = this.DI;
                        return eai;
                    case 6:
                        eai.defaultSeg = this.DS;
                        eai.ea = this.readNextCodeWord();
                        return eai;
                    case 7:
                        eai.defaultSeg = this.DS;
                        eai.ea = this.BX;
                        return eai;
                }
                break;
            case 1:
                {
                    let disp8 = this.readNextCodeByte();
                    if (disp8 > 0x7F)
                        disp8 -= 0x100;
                    switch (rm) {
                        case 0:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.BX + this.SI + disp8) & 0xFFFF;
                            return eai;
                        case 1:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.BX + this.DI + disp8) & 0xFFFF;
                            return eai;
                        case 2:
                            eai.defaultSeg = this.SS;
                            eai.ea = (this.BP + this.SI + disp8) & 0xFFFF;
                            return eai;
                        case 3:
                            eai.defaultSeg = this.SS;
                            eai.ea = (this.BP + this.DI + disp8) & 0xFFFF;
                            return eai;
                        case 4:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.SI + disp8) & 0xFFFF;
                            return eai;
                        case 5:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.DI + disp8) & 0xFFFF;
                            return eai;
                        case 6:
                            eai.defaultSeg = this.SS;
                            eai.ea = (this.BP + disp8) & 0xFFFF;
                            return eai;
                        case 7:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.BX + disp8) & 0xFFFF;
                            return eai;
                    }
                }
                break;
            case 2:
                {
                    const disp16 = this.readNextCodeWord();
                    switch (rm) {
                        case 0:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.BX + this.SI + disp16) & 0xFFFF;
                            return eai;
                        case 1:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.BX + this.DI + disp16) & 0xFFFF;
                            return eai;
                        case 2:
                            eai.defaultSeg = this.SS;
                            eai.ea = (this.BP + this.SI + disp16) & 0xFFFF;
                            return eai;
                        case 3:
                            eai.defaultSeg = this.SS;
                            eai.ea = (this.BP + this.DI + disp16) & 0xFFFF;
                            return eai;
                        case 4:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.SI + disp16) & 0xFFFF;
                            return eai;
                        case 5:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.DI + disp16) & 0xFFFF;
                            return eai;
                        case 6:
                            eai.defaultSeg = this.SS;
                            eai.ea = (this.BP + disp16) & 0xFFFF;
                            return eai;
                        case 7:
                            eai.defaultSeg = this.DS;
                            eai.ea = (this.BX + disp16) & 0xFFFF;
                            return eai;
                    }
                }
                break;
        }
        eai.defaultSeg = this.DS;
        eai.ea = 0;
        return eai;
    }
    getRegByte(reg) {
        switch (reg) {
            case 0:
                return this.getAL();
            case 1:
                return this.getCL();
            case 2:
                return this.getDL();
            case 3:
                return this.getBL();
            case 4:
                return this.getAH();
            case 5:
                return this.getCH();
            case 6:
                return this.getDH();
            case 7:
                return this.getBH();
        }
        return 0;
    }
    setRegByte(reg, value) {
        switch (reg) {
            case 0:
                this.setAL(value);
                break;
            case 1:
                this.setCL(value);
                break;
            case 2:
                this.setDL(value);
                break;
            case 3:
                this.setBL(value);
                break;
            case 4:
                this.setAH(value);
                break;
            case 5:
                this.setCH(value);
                break;
            case 6:
                this.setDH(value);
                break;
            case 7:
                this.setBH(value);
                break;
        }
    }
    getRmByte(mode, rm, rmAddr) {
        return mode == 3 ? this.getRegByte(rm) : this.memoryProvider.peek(rmAddr);
    }
    setRmByte(mode, rm, rmAddr, value) {
        if (mode == 3)
            this.setRegByte(rm, value);
        else
            this.memoryProvider.poke(rmAddr, value);
    }
    getRegWord(res) {
        switch (res) {
            case 0:
                return this.AX;
            case 1:
                return this.CX;
            case 2:
                return this.DX;
            case 3:
                return this.BX;
            case 4:
                return this.SP;
            case 5:
                return this.BP;
            case 6:
                return this.SI;
            case 7:
                return this.DI;
        }
        return 0;
    }
    getSegReg(res) {
        switch (res) {
            case 0:
                return this.ES;
            case 1:
                return this.CS;
            case 2:
                return this.SS;
            case 3:
                return this.DS;
        }
        return 0;
    }
    setRegWord(reg, value) {
        switch (reg) {
            case 0:
                this.AX = value;
                break;
            case 1:
                this.CX = value;
                break;
            case 2:
                this.DX = value;
                break;
            case 3:
                this.BX = value;
                break;
            case 4:
                this.SP = value;
                break;
            case 5:
                this.BP = value;
                break;
            case 6:
                this.SI = value;
                break;
            case 7:
                this.DI = value;
                break;
        }
    }
    setSegReg(reg, value) {
        switch (reg) {
            case 0:
                this.ES = value;
                break;
            case 1:
                this.CS = value;
                break;
            case 2:
                this.SS = value;
                this.blockInterrupt = true;
                break;
            case 3:
                this.DS = value;
                break;
        }
    }
    getRmWord(mode, rm, rmAddr) {
        return mode == 3 ? this.getRegWord(rm) : this.memoryProvider.peekW(rmAddr);
    }
    setRmWord(mode, rm, rmAddr, value) {
        if (mode == 3)
            this.setRegWord(rm, value);
        else
            this.memoryProvider.pokeW(rmAddr, value);
    }
    setMemByte(seg, offs, value) {
        this.memoryProvider.poke(this.genAddr(seg, offs), value);
    }
    setMemWord(seg, offs, value) {
        this.memoryProvider.pokeW(this.genAddr(seg, offs), value);
    }
    readNextCodeByte() {
        const addr = this.genAddr(this.CS, this.IP);
        this.IP = (this.IP + 1) & 0xFFFF;
        return this.memoryProvider.peek(addr);
    }
    readNextCodeWord() {
        const result = this.memoryProvider.peekW(this.genAddr(this.CS, this.IP));
        this.IP = (this.IP + 2) & 0xFFFF;
        return result;
    }
    getMemByte(seg, offs) {
        return this.memoryProvider.peek(this.genAddr(seg, offs));
    }
    getMemWord(seg, offs) {
        return this.memoryProvider.peekW(this.genAddr(seg, offs));
    }
    doSoftInterrupt(value) {
        if (this.handleSoftInterrupt(value))
            return;
        this.softInterrupt = value;
    }
    handleSoftInterrupt(value) {
        switch (value) {
            case 0x13:
                if (this.getAH() == 0x04) {
                    this.setAH(0);
                    this.flags.CF = false;
                    return true;
                }
                break;
        }
        return false;
    }
    doInterrupt(value) {
        this.hardInterrupt = value;
    }
    setEvent(timeoutMicroSeconds, e) {
        const newId = ++this.eventGen;
        this.cpuEvents.push({
            action: e,
            clockCount: this.clockCount + Math.trunc((timeoutMicroSeconds * settings_1.Settings.cpuFrequency) / 1000),
            id: newId
        });
        return newId;
    }
    deleteEvent(id) {
        for (let idx = 0; idx < this.cpuEvents.length; idx++) {
            if (this.cpuEvents[idx].id == id) {
                this.cpuEvents.splice(idx, 1);
                break;
            }
        }
    }
}
exports.Cpu186 = Cpu186;


/***/ }),

/***/ "./src/E86Lib/CPU/cpu386.ts":
/*!**********************************!*\
  !*** ./src/E86Lib/CPU/cpu386.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpu386 = void 0;
class Cpu386 {
    constructor(memMapper, portMapper) {
    }
    reset() {
        throw new Error("Method not implemented.");
    }
    run() {
        throw new Error("Method not implemented.");
    }
    getCurrentCodeAddr() {
        throw new Error("Method not implemented.");
    }
    getCodeSeg32Bit() {
        throw new Error("Method not implemented.");
    }
    execNextInstruction() {
        throw new Error("Method not implemented.");
    }
    execInstructions(clockCount) {
        throw new Error("Method not implemented.");
    }
    getInstructionByte() {
        throw new Error("Method not implemented.");
    }
    getAddressByte() {
        throw new Error("Method not implemented.");
    }
    getName() {
        throw new Error("Method not implemented.");
    }
    doInterrupt(value) {
        throw new Error("Method not implemented.");
    }
    setEvent(timeoutMicroSeconds, e) {
        throw new Error("Method not implemented.");
    }
    deleteEvent(id) {
        throw new Error("Method not implemented.");
    }
}
exports.Cpu386 = Cpu386;


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

/***/ "./src/E86Lib/CPU/disassembler.ts":
/*!****************************************!*\
  !*** ./src/E86Lib/CPU/disassembler.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Disassembler = void 0;
class InstructionInfo {
}
class Disassembler {
    constructor(cpu, memory) {
        this.instructionLineOffset = 32;
        this.hexValues = Array();
        this.startAddress = 0;
        this.localAddress = 0;
        this.cpu = cpu;
        this.memory = memory;
    }
    get instBytes() {
        let str = "";
        for (let idx = 0; idx < this.hexValues.length; idx++) {
            const v = this.hexValues[idx];
            if (str != "")
                str += " ";
            str += v.toString(16).toUpperCase().padStart(2, "0");
        }
        return str;
    }
    get disassembledLine() {
        const instructionBytes = this.instBytes.padEnd(this.instructionLineOffset, " ");
        return this.startAddress.toString(16).toUpperCase().padStart(5, "0") + "  " + instructionBytes + "    " + this.instruction;
    }
    doDisassemble(address = -1) {
        this.hexValues.length = 0;
        this.instruction = "";
        if (address == -1)
            this.startAddress = this.cpu.getCurrentCodeAddr();
        else
            this.startAddress = address;
        this.localAddress = this.startAddress;
        let opCode = this.getNextByte();
        let prefixFound;
        this.op32Bit = this.addr32Bit = this.cpu.getCodeSeg32Bit();
        do {
            prefixFound = false;
            switch (opCode) {
                case 0xF3:
                    this.instruction += "REP ";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
                case 0xF2:
                    this.instruction += "REPNZ ";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
            }
            switch (opCode) {
                case 0xF0:
                    this.instruction += "LOCK ";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
                case 0x2E:
                    this.segOverride = "CS:";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
                case 0x3E:
                    this.segOverride = "DS:";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
                case 0x26:
                    this.segOverride = "ES:";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
                case 0x36:
                    this.segOverride = "SS:";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
                case 0x64:
                    this.segOverride = "FS:";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
                case 0x65:
                    this.segOverride = "GS:";
                    opCode = this.getNextByte();
                    prefixFound = true;
                    break;
            }
            if (opCode == 0x66) {
                this.op32Bit = !this.op32Bit;
                opCode = this.getNextByte();
                prefixFound = true;
            }
            if (opCode == 0x67) {
                this.addr32Bit = !this.addr32Bit;
                opCode = this.getNextByte();
                prefixFound = true;
            }
        } while (prefixFound);
        this.processOpcode(opCode);
        this.segOverride = "";
    }
    processOpcode(opcode) {
        switch (opcode) {
            case 0x37:
                this.instruction = "AAA";
                break;
            case 0xD5:
                this.instruction = "AAD";
                break;
            case 0xD4:
                this.instruction = "AAM";
                break;
            case 0x3F:
                this.instruction = "AAS";
                break;
            case 0x10:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `ADC ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x11:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `ADC ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x12:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `ADC ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x13:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `ADC ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x14:
                this.instruction = `ADC AL, ${this.getNextByteStr()}`;
                break;
            case 0x15:
                if (this.op32Bit)
                    this.instruction = `ADC EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `ADC AX, ${this.getNextWordStr()}`;
                break;
            case 0x00:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `ADD ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x01:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `ADD ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x02:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `ADD ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x03:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `ADD ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x04:
                this.instruction = `ADD AL, ${this.getNextByteStr()}`;
                break;
            case 0x05:
                this.instruction = `ADD AX, ${this.getNextWordStr()}`;
                break;
            case 0x20:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `AND ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x21:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `AND ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x22:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `AND ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x23:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `AND ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x24:
                this.instruction = `AND AL, ${this.getNextByteStr()}`;
                break;
            case 0x25:
                if (this.op32Bit)
                    this.instruction = `AND EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `AND AX, ${this.getNextWordStr()}`;
                break;
            case 0x63:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `ARPL ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x62:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `BOUND ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0xE8:
                if (this.op32Bit)
                    this.instruction = `CALL ${this.getNextSDwordStr()}`;
                else
                    this.instruction = `CALL ${this.getNextSWordStr()}`;
                break;
            case 0x9A:
                {
                    const destOffs = this.getNextWord();
                    const destSeg = this.getNextWord();
                    this.instruction = `CALL FAR ${this.wordToHex(destSeg)}:${this.wordToHex(destOffs)}`;
                }
                break;
            case 0x98:
                if (this.op32Bit)
                    this.instruction = "CWDE";
                else
                    this.instruction = "CBW";
                break;
            case 0xF8:
                this.instruction = "CLC";
                break;
            case 0xFC:
                this.instruction = "CLD";
                break;
            case 0xFA:
                this.instruction = "CLI";
                break;
            case 0xF5:
                this.instruction = "CMC";
                break;
            case 0x38:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `CMP ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x39:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `CMP ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x3A:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `CMP ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x3B:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `CMP ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x3C:
                this.instruction = `CMP AL, ${this.getNextByteStr()}`;
                break;
            case 0x3D:
                if (this.op32Bit)
                    this.instruction = `CMP EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `CMP AX, ${this.getNextWordStr()}`;
                break;
            case 0xA6:
                {
                    this.instruction += "CMPSB";
                    const marker32 = this.addr32Bit ? "E" : "";
                    const seg = this.segOverride == "" ? "DS:" : this.segOverride;
                    this.instruction += ` ES:[${marker32}DI], ${seg}[${marker32}SI]`;
                }
                break;
            case 0xA7:
                {
                    if (this.op32Bit)
                        this.instruction += "CMPSD";
                    else
                        this.instruction += "CMPSW";
                    const marker32 = this.addr32Bit ? "E" : "";
                    const seg = this.segOverride == "" ? "DS:" : this.segOverride;
                    this.instruction += ` ES:[${marker32}DI], ${seg}[${marker32}SI]`;
                }
                break;
            case 0x99:
                if (this.op32Bit)
                    this.instruction = "CDQ";
                else
                    this.instruction = "CWD";
                break;
            case 0x27:
                this.instruction = "DAA";
                break;
            case 0x2F:
                this.instruction = "DAS";
                break;
            case 0x48:
                this.instruction = `DEC ${this.prefixOp32()}AX`;
                break;
            case 0x49:
                this.instruction = `DEC ${this.prefixOp32()}CX`;
                break;
            case 0x4A:
                this.instruction = `DEC ${this.prefixOp32()}DX`;
                break;
            case 0x4B:
                this.instruction = `DEC ${this.prefixOp32()}BX`;
                break;
            case 0x4C:
                this.instruction = `DEC ${this.prefixOp32()}SP`;
                break;
            case 0x4D:
                this.instruction = `DEC ${this.prefixOp32()}BP`;
                break;
            case 0x4E:
                this.instruction = `DEC ${this.prefixOp32()}SI`;
                break;
            case 0x4F:
                this.instruction = `DEC ${this.prefixOp32()}DI`;
                break;
            case 0xC8:
                this.instruction = `ENTER ${this.getNextWordStr()}, ${this.getNextByteStr()}`;
                break;
            case 0xF4:
                this.instruction = "HLT";
                break;
            case 0x6B:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    if (ii.regStr == ii.rmStr)
                        this.instruction = `IMUL ${ii.regStr}, ${this.getNextByteStr()}`;
                    else
                        this.instruction = `IMUL ${ii.regStr}, ${ii.rmStr}, ${this.getNextByteStr()}`;
                }
                break;
            case 0x69:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    const value = this.op32Bit ? this.getNextDwordStr() : this.getNextWordStr();
                    if (ii.regStr == ii.rmStr)
                        this.instruction = `IMUL ${ii.regStr}, ${value}`;
                    else
                        this.instruction = `IMUL ${ii.regStr}, ${ii.rmStr}, ${value}`;
                }
                break;
            case 0xE4:
                this.instruction = `IN AL, ${this.getNextByteStr()}`;
                break;
            case 0xE5:
                this.instruction = `IN ${this.prefixOp32()}AX, ${this.getNextByteStr()}`;
                break;
            case 0xEC:
                this.instruction = "IN AL, DX";
                break;
            case 0xED:
                this.instruction = `IN ${this.prefixOp32()}AX, DX`;
                break;
            case 0x40:
                this.instruction = `INC ${this.prefixOp32()}AX`;
                break;
            case 0x41:
                this.instruction = `INC ${this.prefixOp32()}CX`;
                break;
            case 0x42:
                this.instruction = `INC ${this.prefixOp32()}DX`;
                break;
            case 0x43:
                this.instruction = `INC ${this.prefixOp32()}BX`;
                break;
            case 0x44:
                this.instruction = `INC ${this.prefixOp32()}SP`;
                break;
            case 0x45:
                this.instruction = `INC ${this.prefixOp32()}BP`;
                break;
            case 0x46:
                this.instruction = `INC ${this.prefixOp32()}SI`;
                break;
            case 0x47:
                this.instruction = `INC ${this.prefixOp32()}DI`;
                break;
            case 0x6C:
                this.instruction += "INSB";
                break;
            case 0x6D:
                if (this.op32Bit)
                    this.instruction += "INSD";
                else
                    this.instruction += "INSW";
                break;
            case 0xCC:
                this.instruction = "INT3";
                break;
            case 0xCD:
                this.instruction = `INT ${this.getNextByteStr()}`;
                break;
            case 0xCE:
                this.instruction = "INTO";
                break;
            case 0xCF:
                if (this.op32Bit)
                    this.instruction = "IRETD";
                else
                    this.instruction = "IRET";
                break;
            case 0x77:
                this.instruction = `JA ${this.getNextSByteStr()}`;
                break;
            case 0x73:
                this.instruction = `JAE/JNC ${this.getNextSByteStr()}`;
                break;
            case 0x72:
                this.instruction = `JB/JC ${this.getNextSByteStr()}`;
                break;
            case 0x76:
                this.instruction = `JBE ${this.getNextSByteStr()}`;
                break;
            case 0xE3:
                this.instruction = `JCXZ ${this.getNextSByteStr()}`;
                break;
            case 0x74:
                this.instruction = `JE ${this.getNextSByteStr()}`;
                break;
            case 0x7F:
                this.instruction = `JG ${this.getNextSByteStr()}`;
                break;
            case 0x7D:
                this.instruction = `JGE ${this.getNextSByteStr()}`;
                break;
            case 0x7C:
                this.instruction = `JL ${this.getNextSByteStr()}`;
                break;
            case 0x7E:
                this.instruction = `JLE ${this.getNextSByteStr()}`;
                break;
            case 0xEB:
                this.instruction = `JMP ${this.getNextSByteStr()}`;
                break;
            case 0xE9:
                if (this.op32Bit)
                    this.instruction = `JMP ${this.getNextSDwordStr()}`;
                else
                    this.instruction = `JMP ${this.getNextSWordStr()}`;
                break;
            case 0xEA:
                if (this.op32Bit) {
                    const destOffs = this.getNextDword();
                    const destSeg = this.getNextWord();
                    this.instruction = `JMP FAR ${this.wordToHex(destSeg)}:${this.dwordToHex(destOffs)}`;
                }
                else {
                    const destOffs = this.getNextWord();
                    const destSeg = this.getNextWord();
                    this.instruction = `JMP FAR ${this.wordToHex(destSeg)}:${this.wordToHex(destOffs)}`;
                }
                break;
            case 0x75:
                this.instruction = `JNE ${this.getNextSByteStr()}`;
                break;
            case 0x71:
                this.instruction = `JNO ${this.getNextSByteStr()}`;
                break;
            case 0x79:
                this.instruction = `JNS ${this.getNextSByteStr()}`;
                break;
            case 0x7B:
                this.instruction = `JNP ${this.getNextSByteStr()}`;
                break;
            case 0x70:
                this.instruction = `JO ${this.getNextSByteStr()}`;
                break;
            case 0x7A:
                this.instruction = `JP ${this.getNextSByteStr()}`;
                break;
            case 0x78:
                this.instruction = `JS ${this.getNextSByteStr()}`;
                break;
            case 0x9F:
                this.instruction = "LAHF";
                break;
            case 0xC5:
                this.loadSeg("DS");
                break;
            case 0x8D:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `LEA ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0xC9:
                this.instruction = "LEAVE";
                break;
            case 0xC4:
                this.loadSeg("ES");
                break;
            case 0xF0:
                this.instruction = "LOCK";
                break;
            case 0xAC:
                this.instruction += "LODSB";
                {
                    let reg = "SI";
                    if (this.addr32Bit)
                        reg = `E${reg}`;
                    if (this.segOverride != "")
                        this.instruction += ` ${this.segOverride}[${reg}]`;
                    else if (this.addr32Bit)
                        this.instruction += ` [${reg}]`;
                }
                break;
            case 0xAD:
                {
                    let reg = "SI";
                    if (this.addr32Bit)
                        reg = `E${reg}`;
                    if (this.op32Bit)
                        this.instruction += "LODSD";
                    else
                        this.instruction += "LODSW";
                    if (this.segOverride != "")
                        this.instruction += ` ${this.segOverride}[${reg}]`;
                    else if (this.addr32Bit)
                        this.instruction += ` [${reg}]`;
                }
                break;
            case 0xE2:
                this.instruction = `LOOP ${this.getNextSByteStr()}`;
                break;
            case 0xE1:
                this.instruction = `LOOPZ ${this.getNextSByteStr()}`;
                break;
            case 0xE0:
                this.instruction = `LOOPNZ ${this.getNextSByteStr()}`;
                break;
            case 0xA0:
                this.instruction = `MOV AL, ${this.segOverride}[${this.getNextWordStr()}]`;
                break;
            case 0xA1:
                {
                    const addr = this.addr32Bit ? this.getNextDwordStr() : this.getNextWordStr();
                    const reg = this.op32Bit ? "EAX" : "AX";
                    this.instruction = `MOV ${reg}, ${this.segOverride}[${addr}]`;
                }
                break;
            case 0xA2:
                this.instruction = `MOV ${this.segOverride}[${this.getNextWordStr()}], AL`;
                break;
            case 0xA3:
                {
                    const addr = this.addr32Bit ? this.getNextDwordStr() : this.getNextWordStr();
                    const reg = this.op32Bit ? "EAX" : "AX";
                    this.instruction = `MOV ${this.segOverride}[${addr}], ${reg}`;
                }
                break;
            case 0xB0:
                this.instruction = `MOV AL, ${this.getNextByteStr()}`;
                break;
            case 0xB1:
                this.instruction = `MOV CL, ${this.getNextByteStr()}`;
                break;
            case 0xB2:
                this.instruction = `MOV DL, ${this.getNextByteStr()}`;
                break;
            case 0xB3:
                this.instruction = `MOV BL, ${this.getNextByteStr()}`;
                break;
            case 0xB4:
                this.instruction = `MOV AH, ${this.getNextByteStr()}`;
                break;
            case 0xB5:
                this.instruction = `MOV CH, ${this.getNextByteStr()}`;
                break;
            case 0xB6:
                this.instruction = `MOV DH, ${this.getNextByteStr()}`;
                break;
            case 0xB7:
                this.instruction = `MOV BH, ${this.getNextByteStr()}`;
                break;
            case 0xB8:
                if (this.op32Bit)
                    this.instruction = `MOV EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV AX, ${this.getNextWordStr()}`;
                break;
            case 0xB9:
                if (this.op32Bit)
                    this.instruction = `MOV ECX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV CX, ${this.getNextWordStr()}`;
                break;
            case 0xBA:
                if (this.op32Bit)
                    this.instruction = `MOV EDX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV DX, ${this.getNextWordStr()}`;
                break;
            case 0xBB:
                if (this.op32Bit)
                    this.instruction = `MOV EBX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV BX, ${this.getNextWordStr()}`;
                break;
            case 0xBC:
                if (this.op32Bit)
                    this.instruction = `MOV ESP, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV SP, ${this.getNextWordStr()}`;
                break;
            case 0xBD:
                if (this.op32Bit)
                    this.instruction = `MOV EBP, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV BP, ${this.getNextWordStr()}`;
                break;
            case 0xBE:
                if (this.op32Bit)
                    this.instruction = `MOV ESI, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV SI, ${this.getNextWordStr()}`;
                break;
            case 0xBF:
                if (this.op32Bit)
                    this.instruction = `MOV EDI, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `MOV DI, ${this.getNextWordStr()}`;
                break;
            case 0xC6:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `MOV ${ii.rmStr}, ${this.getNextByteStr()}`;
                }
                break;
            case 0xC7:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    if (this.op32Bit)
                        this.instruction = `MOV ${ii.rmStr}, ${this.getNextDwordStr()}`;
                    else
                        this.instruction = `MOV ${ii.rmStr}, ${this.getNextWordStr()}`;
                }
                break;
            case 0x88:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `MOV ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x89:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `MOV ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x8A:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `MOV ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x8B:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `MOV ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x8C:
                {
                    this.op32Bit = false;
                    const ii = this.readAndDecodeAddressByte(false, true);
                    this.instruction = `MOV ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x8E:
                {
                    this.op32Bit = false;
                    const ii = this.readAndDecodeAddressByte(false, true);
                    this.instruction = `MOV ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0xA4:
                this.instruction += "MOVSB";
                {
                    const marker32 = this.addr32Bit ? "E" : "";
                    const seg = this.segOverride == "" ? "DS:" : this.segOverride;
                    this.instruction += ` ES:[${marker32}DI], ${seg}[${marker32}SI]`;
                }
                break;
            case 0xA5:
                {
                    if (this.op32Bit)
                        this.instruction += "MOVSD";
                    else
                        this.instruction += "MOVSW";
                    const marker32 = this.addr32Bit ? "E" : "";
                    const seg = this.segOverride == "" ? "DS:" : this.segOverride;
                    this.instruction += ` ES:[${marker32}DI], ${seg}[${marker32}SI]`;
                }
                break;
            case 0x90:
                this.instruction = "NOP";
                break;
            case 0x08:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `OR ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x09:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `OR ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x0A:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `OR ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x0B:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `OR ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x0C:
                this.instruction = `OR AL, ${this.getNextByteStr()}`;
                break;
            case 0x0D:
                if (this.op32Bit)
                    this.instruction = `OR EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `OR AX, ${this.getNextWordStr()}`;
                break;
            case 0xE6:
                this.instruction = `OUT ${this.getNextByteStr()}, AL`;
                break;
            case 0xE7:
                this.instruction = `OUT ${this.getNextByteStr()}, AX`;
                break;
            case 0xEE:
                this.instruction = "OUT DX, AL";
                break;
            case 0xEF:
                if (this.op32Bit)
                    this.instruction = "OUT DX, EAX";
                else
                    this.instruction = "OUT DX, AX";
                break;
            case 0x6E:
                this.instruction += "OUTSB";
                if (this.addr32Bit)
                    this.instruction += " DX, [ESI]";
                break;
            case 0x6F:
                if (this.op32Bit)
                    this.instruction += "OUTSD";
                else
                    this.instruction += "OUTSW";
                if (this.addr32Bit)
                    this.instruction += " DX, [ESI]";
                break;
            case 0x58:
                this.instruction = `POP ${this.prefixOp32()}AX`;
                break;
            case 0x59:
                this.instruction = `POP ${this.prefixOp32()}CX`;
                break;
            case 0x5A:
                this.instruction = `POP ${this.prefixOp32()}DX`;
                break;
            case 0x5B:
                this.instruction = `POP ${this.prefixOp32()}BX`;
                break;
            case 0x5C:
                this.instruction = `POP ${this.prefixOp32()}SP`;
                break;
            case 0x5D:
                this.instruction = `POP ${this.prefixOp32()}BP`;
                break;
            case 0x5E:
                this.instruction = `POP ${this.prefixOp32()}SI`;
                break;
            case 0x5F:
                this.instruction = `POP ${this.prefixOp32()}DI`;
                break;
            case 0x07:
                this.instruction = "POP ES";
                break;
            case 0x17:
                this.instruction = "POP SS";
                break;
            case 0x1F:
                this.instruction = "POP DS";
                break;
            case 0x8F:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    if (this.op32Bit)
                        this.instruction = `POP DWORD ${ii.rmStr}`;
                    else
                        this.instruction = `POP ${ii.rmStr}`;
                }
                break;
            case 0x61:
                if (this.op32Bit)
                    this.instruction = "POPAD";
                else
                    this.instruction = "POPA";
                break;
            case 0x9D:
                if (this.op32Bit)
                    this.instruction = "POPFD";
                else
                    this.instruction = "POPF";
                break;
            case 0x50:
                this.instruction = `PUSH ${this.prefixOp32()}AX`;
                break;
            case 0x51:
                this.instruction = `PUSH ${this.prefixOp32()}CX`;
                break;
            case 0x52:
                this.instruction = `PUSH ${this.prefixOp32()}DX`;
                break;
            case 0x53:
                this.instruction = `PUSH ${this.prefixOp32()}BX`;
                break;
            case 0x54:
                this.instruction = `PUSH ${this.prefixOp32()}SP`;
                break;
            case 0x55:
                this.instruction = `PUSH ${this.prefixOp32()}BP`;
                break;
            case 0x56:
                this.instruction = `PUSH ${this.prefixOp32()}SI`;
                break;
            case 0x57:
                this.instruction = `PUSH ${this.prefixOp32()}DI`;
                break;
            case 0x06:
                this.instruction = "PUSH ES";
                break;
            case 0x0E:
                this.instruction = "PUSH CS";
                break;
            case 0x16:
                this.instruction = "PUSH SS";
                break;
            case 0x1E:
                this.instruction = "PUSH DS";
                break;
            case 0x6A:
                this.instruction = `PUSH ${this.getNextByteStr()}`;
                break;
            case 0x68:
                if (this.op32Bit)
                    this.instruction = `PUSH ${this.getNextDwordStr()}`;
                else
                    this.instruction = `PUSH ${this.getNextWordStr()}`;
                break;
            case 0x60:
                if (this.op32Bit)
                    this.instruction = "PUSHAD";
                else
                    this.instruction = "PUSHA";
                break;
            case 0x9C:
                if (this.op32Bit)
                    this.instruction = "PUSHFD";
                else
                    this.instruction = "PUSHF";
                break;
            case 0xC3:
                this.instruction = "RET";
                break;
            case 0xC2:
                this.instruction = `RET ${this.getNextWordStr()}`;
                break;
            case 0xCB:
                this.instruction = "RETF";
                break;
            case 0xCA:
                this.instruction = `RETF ${this.getNextWordStr()}`;
                break;
            case 0x9E:
                this.instruction = "SAHF";
                break;
            case 0x18:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `SBB ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x19:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SBB ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x1A:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `SBB ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x1B:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SBB ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x1C:
                this.instruction = `SBB AL, ${this.getNextByteStr()}`;
                break;
            case 0x1D:
                if (this.op32Bit)
                    this.instruction = `SBB EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `SBB AX, ${this.getNextWordStr()}`;
                break;
            case 0xAE:
                this.instruction += "SCASB";
                if (this.addr32Bit)
                    this.instruction += " [EDI]";
                break;
            case 0xAF:
                if (this.op32Bit)
                    this.instruction += "SCASD";
                else
                    this.instruction += "SCASW";
                if (this.addr32Bit)
                    this.instruction += " [EDI]";
                break;
            case 0xF9:
                this.instruction = "STC";
                break;
            case 0xFD:
                this.instruction = "STD";
                break;
            case 0xFB:
                this.instruction = "STI";
                break;
            case 0xAA:
                this.instruction += "STOSB";
                if (this.addr32Bit)
                    this.instruction += " [EDI]";
                break;
            case 0xAB:
                if (this.op32Bit)
                    this.instruction += "STOSD";
                else
                    this.instruction += "STOSW";
                if (this.addr32Bit)
                    this.instruction += " [EDI]";
                break;
            case 0x28:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `SUB ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x29:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SUB ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x2A:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `SUB ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x2B:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SUB ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x2C:
                this.instruction = `SUB AL, ${this.getNextByteStr()}`;
                break;
            case 0x2D:
                if (this.op32Bit)
                    this.instruction = `SUB EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `SUB AX, ${this.getNextWordStr()}`;
                break;
            case 0x84:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `TEST ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x85:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `TEST ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0xA8:
                this.instruction = `TEST AL, ${this.getNextByteStr()}`;
                break;
            case 0xA9:
                if (this.op32Bit)
                    this.instruction = `TEST EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `TEST AX, ${this.getNextWordStr()}`;
                break;
            case 0x9B:
                this.instruction = "WAIT";
                break;
            case 0x91:
                this.instruction = "XCHG AX, CX";
                break;
            case 0x92:
                this.instruction = "XCHG AX, DX";
                break;
            case 0x93:
                this.instruction = "XCHG AX, BX";
                break;
            case 0x94:
                this.instruction = "XCHG AX, SP";
                break;
            case 0x95:
                this.instruction = "XCHG AX, BP";
                break;
            case 0x96:
                this.instruction = "XCHG AX, SI";
                break;
            case 0x97:
                this.instruction = "XCHG AX, DI";
                break;
            case 0x86:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `XCHG ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x87:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `XCHG ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0xD7:
                this.instruction = `XLAT ${this.segOverride}[BX]`;
                break;
            case 0x30:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `XOR ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x31:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `XOR ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0x32:
                {
                    const ii = this.readAndDecodeAddressByte(true);
                    this.instruction = `XOR ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x33:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `XOR ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x34:
                this.instruction = `XOR AL, ${this.getNextByteStr()}`;
                break;
            case 0x35:
                if (this.op32Bit)
                    this.instruction = `XOR EAX, ${this.getNextDwordStr()}`;
                else
                    this.instruction = `XOR AX, ${this.getNextWordStr()}`;
                break;
            case 0xFE:
                this.handleOpcodeFeFf(false);
                break;
            case 0xFF:
                this.handleOpcodeFeFf(true);
                break;
            case 0x80:
                this.handleOpcode80();
                break;
            case 0x81:
                this.handleOpcode81();
                break;
            case 0x83:
                this.handleOpcode83();
                break;
            case 0xF6:
                this.handleOpcodeF6();
                break;
            case 0xF7:
                this.handleOpcodeF7();
                break;
            case 0x0F:
                this.handleOpcode0F();
                break;
            case 0xD0:
                this.handleOpcodeD0();
                break;
            case 0xD1:
                this.handleOpcodeD1();
                break;
            case 0xD2:
                this.handleOpcodeD2();
                break;
            case 0xD3:
                this.handleOpcodeD3();
                break;
            case 0xC0:
                this.handleOpcodeC0();
                break;
            case 0xC1:
                this.handleOpcodeC1();
                break;
        }
    }
    handleOpcodeFeFf(wordOperation) {
        const ii = this.readAndDecodeAddressByte(!wordOperation);
        switch (ii.reg) {
            case 0:
                if (this.op32Bit)
                    this.instruction = `INC DWORD ${ii.rmStr}`;
                else
                    this.instruction = `INC ${ii.rmStr}`;
                break;
            case 1:
                if (this.op32Bit)
                    this.instruction = `DEC DWORD ${ii.rmStr}`;
                else
                    this.instruction = `DEC ${ii.rmStr}`;
                break;
            case 4:
                this.instruction = `JMP ${ii.rmStr}`;
                break;
            case 2:
                this.instruction = `CALL ${ii.rmStr}`;
                break;
            case 3:
                this.instruction = `CALL FAR ${ii.rmStr}`;
                break;
            case 5:
                this.instruction = `JMP FAR ${ii.rmStr}`;
                break;
            case 6:
                if (wordOperation) {
                    if (this.op32Bit)
                        this.instruction = `PUSH DWORD ${ii.rmStr}`;
                    else
                        this.instruction = `PUSH ${ii.rmStr}`;
                }
                break;
        }
    }
    handleOpcode80() {
        const ii = this.readAndDecodeAddressByte(true);
        const imm8Str = this.getNextByteStr();
        switch (ii.reg) {
            case 0:
                this.instruction = `ADD ${ii.rmStr}, ${imm8Str}`;
                break;
            case 1:
                this.instruction = `OR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 2:
                this.instruction = `ADC ${ii.rmStr}, ${imm8Str}`;
                break;
            case 3:
                this.instruction = `SBC ${ii.rmStr}, ${imm8Str}`;
                break;
            case 4:
                this.instruction = `AND ${ii.rmStr}, ${imm8Str}`;
                break;
            case 5:
                this.instruction = `SUB ${ii.rmStr}, ${imm8Str}`;
                break;
            case 6:
                this.instruction = `XOR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 7:
                this.instruction = `CMP ${ii.rmStr}, ${imm8Str}`;
                break;
        }
    }
    handleOpcode81() {
        const ii = this.readAndDecodeAddressByte(false);
        const immStr = this.op32Bit ? this.getNextDwordStr() : this.getNextWordStr();
        switch (ii.reg) {
            case 0:
                this.instruction = `ADD ${ii.rmStr}, ${immStr}`;
                break;
            case 1:
                this.instruction = `OR ${ii.rmStr}, ${immStr}`;
                break;
            case 2:
                this.instruction = `ADC ${ii.rmStr}, ${immStr}`;
                break;
            case 3:
                this.instruction = `SBC ${ii.rmStr}, ${immStr}`;
                break;
            case 4:
                this.instruction = `AND ${ii.rmStr}, ${immStr}`;
                break;
            case 5:
                this.instruction = `SUB ${ii.rmStr}, ${immStr}`;
                break;
            case 6:
                this.instruction = `XOR ${ii.rmStr}, ${immStr}`;
                break;
            case 7:
                this.instruction = `CMP ${ii.rmStr}, ${immStr}`;
                break;
        }
    }
    handleOpcode83() {
        const ii = this.readAndDecodeAddressByte(false);
        const imm8Str = this.getNextByteStr();
        switch (ii.reg) {
            case 0:
                this.instruction = `ADD ${ii.rmStr}, ${imm8Str}`;
                break;
            case 1:
                this.instruction = `OR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 2:
                this.instruction = `ADC ${ii.rmStr}, ${imm8Str}`;
                break;
            case 3:
                this.instruction = `SBC ${ii.rmStr}, ${imm8Str}`;
                break;
            case 4:
                this.instruction = `AND ${ii.rmStr}, ${imm8Str}`;
                break;
            case 5:
                this.instruction = `SUB ${ii.rmStr}, ${imm8Str}`;
                break;
            case 6:
                this.instruction = `XOR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 7:
                this.instruction = `CMP ${ii.rmStr}, ${imm8Str}`;
                break;
        }
    }
    handleOpcodeF6() {
        const ii = this.readAndDecodeAddressByte(true);
        switch (ii.reg) {
            case 0:
                this.instruction = `TEST ${ii.rmStr}, ${this.getNextByteStr()}`;
                break;
            case 2:
                this.instruction = `NOT ${ii.rmStr}`;
                break;
            case 3:
                this.instruction = `NEG ${ii.rmStr}`;
                break;
            case 4:
                this.instruction = `MUL ${ii.rmStr}`;
                break;
            case 5:
                this.instruction = `IMUL ${ii.rmStr}`;
                break;
            case 6:
                this.instruction = `DIV ${ii.rmStr}`;
                break;
            case 7:
                this.instruction = `IDIV ${ii.rmStr}`;
                break;
        }
    }
    handleOpcodeF7() {
        const ii = this.readAndDecodeAddressByte(false);
        switch (ii.reg) {
            case 0:
                this.instruction = `TEST ${ii.rmStr}, ${this.getNextWordStr()}`;
                break;
            case 2:
                this.instruction = `NOT ${ii.rmStr}`;
                break;
            case 3:
                this.instruction = `NEG ${ii.rmStr}`;
                break;
            case 4:
                this.instruction = `MUL ${ii.rmStr}`;
                break;
            case 5:
                this.instruction = `IMUL ${ii.rmStr}`;
                break;
            case 6:
                this.instruction = `DIV ${ii.rmStr}`;
                break;
            case 7:
                this.instruction = `IDIV ${ii.rmStr}`;
                break;
        }
    }
    handleOpcode0F() {
        const opCode = this.getNextByte();
        switch (opCode) {
            case 0x00:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    switch (ii.reg) {
                        case 0:
                            this.instruction = `SLDT ${ii.rmStr}`;
                            break;
                        case 1:
                            this.instruction = `STR ${ii.rmStr}`;
                            break;
                        case 2:
                            this.instruction = `LLDT ${ii.rmStr}`;
                            break;
                        case 3:
                            this.instruction = `LTR ${ii.rmStr}`;
                            break;
                    }
                }
                break;
            case 0x01:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    switch (ii.reg) {
                        case 0:
                            this.instruction = `SGDT ${ii.rmStr}`;
                            break;
                        case 1:
                            this.instruction = `SIDT ${ii.rmStr}`;
                            break;
                        case 2:
                            this.instruction = `LGDT ${ii.rmStr}`;
                            break;
                        case 3:
                            this.instruction = `LIDT ${ii.rmStr}`;
                            break;
                        case 4:
                            this.instruction = `SMSW ${ii.rmStr}`;
                            break;
                        case 6:
                            this.instruction = `LMSW ${ii.rmStr}`;
                            break;
                    }
                }
                break;
            case 0x02:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `LAR ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0x06:
                this.instruction = "CLTS";
                break;
            case 0x09:
                this.instruction = "WBINVD";
                break;
            case 0x20:
                {
                    this.op32Bit = true;
                    const ii = this.readAndDecodeAddressByte(false);
                    switch (ii.reg) {
                        case 0:
                            this.instruction = `MOV ${ii.rmStr}, CR0`;
                            break;
                        case 1:
                            this.instruction = `MOV ${ii.rmStr}, CR1`;
                            break;
                        case 2:
                            this.instruction = `MOV ${ii.rmStr}, CR2`;
                            break;
                        case 3:
                            this.instruction = `MOV ${ii.rmStr}, CR3`;
                            break;
                    }
                }
                break;
            case 0x21:
                {
                    this.op32Bit = true;
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `MOV ${ii.rmStr}, DR${ii.reg}`;
                }
                break;
            case 0x22:
                {
                    this.op32Bit = true;
                    const ii = this.readAndDecodeAddressByte(false);
                    switch (ii.reg) {
                        case 0:
                            this.instruction = `MOV CR0, ${ii.rmStr}`;
                            break;
                        case 1:
                            this.instruction = `MOV CR1, ${ii.rmStr}`;
                            break;
                        case 2:
                            this.instruction = `MOV CR2, ${ii.rmStr}`;
                            break;
                        case 3:
                            this.instruction = `MOV CR3, ${ii.rmStr}`;
                            break;
                    }
                }
                break;
            case 0x23:
                {
                    this.op32Bit = true;
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `MOV DR${ii.reg}, ${ii.rmStr}`;
                }
                break;
            case 0x24:
                {
                    this.op32Bit = true;
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `MOV ${ii.rmStr}, TR${ii.reg}`;
                }
                break;
            case 0x26:
                {
                    this.op32Bit = true;
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `MOV TR${ii.reg}, ${ii.rmStr}`;
                }
                break;
            case 0x80:
                this.instruction = `JO ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x81:
                this.instruction = `JNO ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x82:
                this.instruction = `JB/JC ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x83:
                this.instruction = `JNB/JNC ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x84:
                this.instruction = `JE/JZ ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x85:
                this.instruction = `JNE/JZ ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x86:
                this.instruction = `JBE ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x87:
                this.instruction = `JA ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x88:
                this.instruction = `JS ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x89:
                this.instruction = `JNS ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x8A:
                this.instruction = `JP ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x8B:
                this.instruction = `JNP ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x8C:
                this.instruction = `JL ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x8D:
                this.instruction = `JGE ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x8E:
                this.instruction = `JLE ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x8F:
                this.instruction = `JG ${this.op32Bit ? this.getNextSDwordStr() : this.getNextSWordStr()}`;
                break;
            case 0x90:
                this.instruction = `SETO ${this.getRm8Str()}`;
                break;
            case 0x91:
                this.instruction = `SETNO ${this.getRm8Str()}`;
                break;
            case 0x92:
                this.instruction = `SETB/SETC ${this.getRm8Str()}`;
                break;
            case 0x93:
                this.instruction = `SETNB/SETNC ${this.getRm8Str()}`;
                break;
            case 0x94:
                this.instruction = `SETE/SETZ ${this.getRm8Str()}`;
                break;
            case 0x95:
                this.instruction = `SETNE/SETZ ${this.getRm8Str()}`;
                break;
            case 0x96:
                this.instruction = `SETBE ${this.getRm8Str()}`;
                break;
            case 0x97:
                this.instruction = `SETA ${this.getRm8Str()}`;
                break;
            case 0x98:
                this.instruction = `SETS ${this.getRm8Str()}`;
                break;
            case 0x99:
                this.instruction = `SETNS ${this.getRm8Str()}`;
                break;
            case 0x9A:
                this.instruction = `SETP ${this.getRm8Str()}`;
                break;
            case 0x9B:
                this.instruction = `SETNP ${this.getRm8Str()}`;
                break;
            case 0x9C:
                this.instruction = `SETL ${this.getRm8Str()}`;
                break;
            case 0x9D:
                this.instruction = `SETGE ${this.getRm8Str()}`;
                break;
            case 0x9E:
                this.instruction = `SETLE ${this.getRm8Str()}`;
                break;
            case 0x9F:
                this.instruction = `SETG ${this.getRm8Str()}`;
                break;
            case 0xA0:
                this.instruction = "PUSH FS";
                break;
            case 0xA1:
                this.instruction = "POP FS";
                break;
            case 0xA3:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `BT ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0xA4:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SHLD ${ii.rmStr}, ${ii.regStr}, ${this.getNextByteStr()}`;
                }
                break;
            case 0xA5:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SHLD ${ii.rmStr}, ${ii.regStr}, CL`;
                }
                break;
            case 0xA8:
                this.instruction = "PUSH GS";
                break;
            case 0xA9:
                this.instruction = "POP GS";
                break;
            case 0xAB:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `BTS ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0xAC:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SHRD ${ii.rmStr}, ${ii.regStr}, ${this.getNextByteStr()}`;
                }
                break;
            case 0xAD:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `SHRD ${ii.rmStr}, ${ii.regStr}, CL`;
                }
                break;
            case 0xB2:
                this.loadSeg("SS");
                break;
            case 0xB3:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `BTR ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0xB4:
                this.loadSeg("FS");
                break;
            case 0xB5:
                this.loadSeg("GS");
                break;
            case 0xB6:
                {
                    const addressByte = this.getNextByte();
                    const ii = this.decodeAddressByte(addressByte, false);
                    const iiByte = this.decodeAddressByte(addressByte, true, false, true);
                    this.instruction = `MOVZX ${ii.regStr}, ${iiByte.rmStr}`;
                }
                break;
            case 0xB7:
                {
                    const addressByte = this.getNextByte();
                    const ii = this.decodeAddressByte(addressByte, false);
                    this.op32Bit = false;
                    const iiWord = this.decodeAddressByte(addressByte, false, false, true);
                    this.instruction = `MOVZX ${ii.regStr}, ${iiWord.rmStr}`;
                }
                break;
            case 0xBA:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    const posStr = this.getNextByteStr();
                    switch (ii.reg) {
                        case 0x04:
                            this.instruction = `BT ${ii.rmStr}, ${posStr}`;
                            break;
                        case 0x05:
                            this.instruction = `BTS ${ii.rmStr}, ${posStr}`;
                            break;
                        case 0x06:
                            this.instruction = `BTR ${ii.rmStr}, ${posStr}`;
                            break;
                        case 0x07:
                            this.instruction = `BTC ${ii.rmStr}, ${posStr}`;
                            break;
                    }
                }
                break;
            case 0xBB:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `BTC ${ii.rmStr}, ${ii.regStr}`;
                }
                break;
            case 0xBC:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `BSF ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
            case 0xBD:
                {
                    const ii = this.readAndDecodeAddressByte(false);
                    this.instruction = `BSR ${ii.regStr}, ${ii.rmStr}`;
                }
                break;
        }
    }
    handleOpcodeD0() {
        const ii = this.readAndDecodeAddressByte(true);
        switch (ii.reg) {
            case 0:
                this.instruction = `ROL ${ii.rmStr}, 1`;
                break;
            case 1:
                this.instruction = `ROR ${ii.rmStr}, 1`;
                break;
            case 2:
                this.instruction = `RCL ${ii.rmStr}, 1`;
                break;
            case 3:
                this.instruction = `RCR ${ii.rmStr}, 1`;
                break;
            case 4:
                this.instruction = `SHL ${ii.rmStr}, 1`;
                break;
            case 5:
                this.instruction = `SHR ${ii.rmStr}, 1`;
                break;
            case 6:
                this.instruction = `SAL ${ii.rmStr}, 1`;
                break;
            case 7:
                this.instruction = `SAR ${ii.rmStr}, 1`;
                break;
        }
    }
    handleOpcodeD1() {
        const ii = this.readAndDecodeAddressByte(false);
        switch (ii.reg) {
            case 0:
                this.instruction = `ROL ${ii.rmStr}, 1`;
                break;
            case 1:
                this.instruction = `ROR ${ii.rmStr}, 1`;
                break;
            case 2:
                this.instruction = `RCL ${ii.rmStr}, 1`;
                break;
            case 3:
                this.instruction = `RCR ${ii.rmStr}, 1`;
                break;
            case 4:
                this.instruction = `SHL ${ii.rmStr}, 1`;
                break;
            case 5:
                this.instruction = `SHR ${ii.rmStr}, 1`;
                break;
            case 6:
                this.instruction = `SAL ${ii.rmStr}, 1`;
                break;
            case 7:
                this.instruction = `SAR ${ii.rmStr}, 1`;
                break;
        }
    }
    handleOpcodeD2() {
        const ii = this.readAndDecodeAddressByte(true);
        switch (ii.reg) {
            case 0:
                this.instruction = `ROL ${ii.rmStr}, CL`;
                break;
            case 1:
                this.instruction = `ROR ${ii.rmStr}, CL`;
                break;
            case 2:
                this.instruction = `RCL ${ii.rmStr}, CL`;
                break;
            case 3:
                this.instruction = `RCR ${ii.rmStr}, CL`;
                break;
            case 4:
                this.instruction = `SHL ${ii.rmStr}, CL`;
                break;
            case 5:
                this.instruction = `SHR ${ii.rmStr}, CL`;
                break;
            case 6:
                this.instruction = `SAL ${ii.rmStr}, CL`;
                break;
            case 7:
                this.instruction = `SAR ${ii.rmStr}, CL`;
                break;
        }
    }
    handleOpcodeD3() {
        const ii = this.readAndDecodeAddressByte(false);
        switch (ii.reg) {
            case 0:
                this.instruction = `ROL ${ii.rmStr}, CL`;
                break;
            case 1:
                this.instruction = `ROR ${ii.rmStr}, CL`;
                break;
            case 2:
                this.instruction = `RCL ${ii.rmStr}, CL`;
                break;
            case 3:
                this.instruction = `RCR ${ii.rmStr}, CL`;
                break;
            case 4:
                this.instruction = `SHL ${ii.rmStr}, CL`;
                break;
            case 5:
                this.instruction = `SHR ${ii.rmStr}, CL`;
                break;
            case 6:
                this.instruction = `SAL ${ii.rmStr}, CL`;
                break;
            case 7:
                this.instruction = `SAR ${ii.rmStr}, CL`;
                break;
        }
    }
    handleOpcodeC0() {
        const ii = this.readAndDecodeAddressByte(true);
        const imm8Str = this.getNextByteStr();
        switch (ii.reg) {
            case 0:
                this.instruction = `ROL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 1:
                this.instruction = `ROR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 2:
                this.instruction = `RCL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 3:
                this.instruction = `RCR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 4:
                this.instruction = `SHL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 5:
                this.instruction = `SHR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 6:
                this.instruction = `SAL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 7:
                this.instruction = `SAR ${ii.rmStr}, ${imm8Str}`;
                break;
        }
    }
    handleOpcodeC1() {
        const ii = this.readAndDecodeAddressByte(false);
        const imm8Str = this.getNextByteStr();
        switch (ii.reg) {
            case 0:
                this.instruction = `ROL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 1:
                this.instruction = `ROR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 2:
                this.instruction = `RCL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 3:
                this.instruction = `RCR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 4:
                this.instruction = `SHL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 5:
                this.instruction = `SHR ${ii.rmStr}, ${imm8Str}`;
                break;
            case 6:
                this.instruction = `SAL ${ii.rmStr}, ${imm8Str}`;
                break;
            case 7:
                this.instruction = `SAR ${ii.rmStr}, ${imm8Str}`;
                break;
        }
    }
    readAndDecodeAddressByte(byteOperation, useSreg = false, displayOperandSize = false) {
        const addressByte = this.getNextByte();
        return this.decodeAddressByte(addressByte, byteOperation, useSreg, displayOperandSize);
    }
    decodeAddressByte(addressByte, byteOperation, useSreg = false, displayOperandSize = false) {
        const mode = (addressByte & 0xC0) >> 6;
        const reg = (addressByte & 0x38) >> 3;
        const rm = addressByte & 0x07;
        const ii = new InstructionInfo();
        ii.reg = reg;
        ii.regStr = byteOperation ? this.getRegByte(reg) : this.getRegWord(reg, useSreg);
        ii.rmStr = "";
        let opSize = "";
        if (displayOperandSize) {
            if (byteOperation)
                opSize = "BYTE ";
            else if (this.op32Bit)
                opSize = "DWORD ";
            else
                opSize = "WORD ";
        }
        switch (mode) {
            case 0:
                if (this.addr32Bit) {
                    switch (rm) {
                        case 0:
                            ii.rmStr = this.segOverride + "[EAX]";
                            break;
                        case 1:
                            ii.rmStr = this.segOverride + "[ECX]";
                            break;
                        case 2:
                            ii.rmStr = this.segOverride + "[EDX]";
                            break;
                        case 3:
                            ii.rmStr = this.segOverride + "[EBX]";
                            break;
                        case 4:
                            {
                                const sib = this.readSib(mode);
                                ii.rmStr = this.segOverride + sib;
                            }
                            break;
                        case 5:
                            {
                                const offs = this.getNextDword();
                                ii.rmStr = `${this.segOverride}[${this.dwordToHex(offs)}]`;
                            }
                            break;
                        case 6:
                            ii.rmStr = this.segOverride + "[ESI]";
                            break;
                        case 7:
                            ii.rmStr = this.segOverride + "[EDI]";
                            break;
                    }
                }
                else {
                    switch (rm) {
                        case 0:
                            ii.rmStr = this.segOverride + "[BX + SI]";
                            break;
                        case 1:
                            ii.rmStr = this.segOverride + "[BX + DI]";
                            break;
                        case 2:
                            ii.rmStr = this.segOverride + "[BP + SI]";
                            break;
                        case 3:
                            ii.rmStr = this.segOverride + "[BP + DI]";
                            break;
                        case 4:
                            ii.rmStr = this.segOverride + "[SI]";
                            break;
                        case 5:
                            ii.rmStr = this.segOverride + "[DI]";
                            break;
                        case 6:
                            {
                                const offs = this.getNextWord();
                                ii.rmStr = `${this.segOverride}[${this.wordToHex(offs)}]`;
                            }
                            break;
                        case 7:
                            ii.rmStr = this.segOverride + "[BX]";
                            break;
                    }
                }
                ii.rmStr = opSize + ii.rmStr;
                break;
            case 1:
                if (this.addr32Bit) {
                    switch (rm) {
                        case 0:
                            ii.rmStr = `${this.segOverride}[EAX ${this.getNextSByteStr()}]`;
                            break;
                        case 1:
                            ii.rmStr = `${this.segOverride}[ECX ${this.getNextSByteStr()}]`;
                            break;
                        case 2:
                            ii.rmStr = `${this.segOverride}[EDX ${this.getNextSByteStr()}]`;
                            break;
                        case 3:
                            ii.rmStr = `${this.segOverride}[EBX ${this.getNextSByteStr()}]`;
                            break;
                        case 4:
                            {
                                const sib = this.readSib(mode);
                                ii.rmStr = this.segOverride + sib + " " + this.getNextSByteStr();
                            }
                            break;
                        case 5:
                            ii.rmStr = `${this.segOverride}[EBP ${this.getNextSByteStr()}]`;
                            break;
                        case 6:
                            ii.rmStr = `${this.segOverride}[BSI ${this.getNextSByteStr()}]`;
                            break;
                        case 7:
                            ii.rmStr = `${this.segOverride}[BDI ${this.getNextSByteStr()}]`;
                            break;
                    }
                }
                else {
                    const disp8 = this.getNextByte();
                    switch (rm) {
                        case 0:
                            ii.rmStr = `${this.segOverride}[BX + SI ${this.sByteToHex(disp8)}]`;
                            break;
                        case 1:
                            ii.rmStr = `${this.segOverride}[BX + DI ${this.sByteToHex(disp8)}]`;
                            break;
                        case 2:
                            ii.rmStr = `${this.segOverride}[BP + SI ${this.sByteToHex(disp8)}]`;
                            break;
                        case 3:
                            ii.rmStr = `${this.segOverride}[BP + DI ${this.sByteToHex(disp8)}]`;
                            break;
                        case 4:
                            ii.rmStr = `${this.segOverride}[SI ${this.sByteToHex(disp8)}]`;
                            break;
                        case 5:
                            ii.rmStr = `${this.segOverride}[DI ${this.sByteToHex(disp8)}]`;
                            break;
                        case 6:
                            ii.rmStr = `${this.segOverride}[BP ${this.sByteToHex(disp8)}]`;
                            break;
                        case 7:
                            ii.rmStr = `${this.segOverride}[BX ${this.sByteToHex(disp8)}]`;
                            break;
                    }
                }
                ii.rmStr = opSize + ii.rmStr;
                break;
            case 2:
                if (this.addr32Bit) {
                    switch (rm) {
                        case 0:
                            ii.rmStr = `${this.segOverride}[EAX ${this.getNextSDwordStr()}]`;
                            break;
                        case 1:
                            ii.rmStr = `${this.segOverride}[ECX ${this.getNextSDwordStr()}]`;
                            break;
                        case 2:
                            ii.rmStr = `${this.segOverride}[EDX ${this.getNextSDwordStr()}]`;
                            break;
                        case 3:
                            ii.rmStr = `${this.segOverride}[EBX ${this.getNextSDwordStr()}]`;
                            break;
                        case 4:
                            {
                                const sib = this.readSib(mode);
                                ii.rmStr = this.segOverride + this.getNextDwordStr() + sib;
                            }
                            break;
                        case 5:
                            ii.rmStr = `${this.segOverride}[EBP ${this.getNextSDwordStr()}]`;
                            break;
                        case 6:
                            ii.rmStr = `${this.segOverride}[ESI ${this.getNextSDwordStr()}]`;
                            break;
                        case 7:
                            ii.rmStr = `${this.segOverride}[EDI ${this.getNextSDwordStr()}]`;
                            break;
                    }
                }
                else {
                    const disp16 = this.getNextWord();
                    switch (rm) {
                        case 0:
                            ii.rmStr = `${this.segOverride}[BX + SI ${this.sWordToHex(disp16)}]`;
                            break;
                        case 1:
                            ii.rmStr = `${this.segOverride}[BX + DI ${this.sWordToHex(disp16)}]`;
                            break;
                        case 2:
                            ii.rmStr = `${this.segOverride}[BP + SI ${this.sWordToHex(disp16)}]`;
                            break;
                        case 3:
                            ii.rmStr = `${this.segOverride}[BP + DI ${this.sWordToHex(disp16)}]`;
                            break;
                        case 4:
                            ii.rmStr = `${this.segOverride}[SI ${this.sWordToHex(disp16)}]`;
                            break;
                        case 5:
                            ii.rmStr = `${this.segOverride}[DI ${this.sWordToHex(disp16)}]`;
                            break;
                        case 6:
                            ii.rmStr = `${this.segOverride}[BP ${this.sWordToHex(disp16)}]`;
                            break;
                        case 7:
                            ii.rmStr = `${this.segOverride}[BX ${this.sWordToHex(disp16)}]`;
                            break;
                    }
                }
                ii.rmStr = opSize + ii.rmStr;
                break;
            case 3:
                ii.rmStr = byteOperation ? this.getRegByte(rm) : this.getRegWord(rm);
                break;
        }
        return ii;
    }
    readSib(mod) {
        const val = this.getNextByte();
        const sibBase = val & 0x07;
        const sibIndex = (val >> 3) & 0x07;
        const sibScale = (val >> 6) & 0x03;
        let result = "";
        switch (sibBase) {
            case 0:
                result += "[EAX]";
                break;
            case 1:
                result += "[ECX]";
                break;
            case 2:
                result += "[EDX]";
                break;
            case 3:
                result += "[EBX]";
                break;
            case 4:
                result += "[ESP]";
                break;
            case 5:
                if (mod == 0)
                    result += this.getNextDwordStr();
                else
                    result += "[EBP]";
                break;
            case 6:
                result += "[ESI]";
                break;
            case 7:
                result += "[EDI]";
                break;
        }
        result += "[";
        switch (sibIndex) {
            case 0:
                result += "EAX";
                break;
            case 1:
                result += "ECX";
                break;
            case 2:
                result += "EDX";
                break;
            case 3:
                result += "EBX";
                break;
            case 5:
                result += "EBP";
                break;
            case 6:
                result += "ESI";
                break;
            case 7:
                result += "EDI";
                break;
        }
        switch (sibScale) {
            case 0:
                result += "*1";
                break;
            case 1:
                result += "*2";
                break;
            case 2:
                result += "*4";
                break;
            case 3:
                result += "*8";
                break;
        }
        result += "]";
        return result;
    }
    getRegByte(reg) {
        switch (reg) {
            case 0:
                return "AL";
            case 1:
                return "CL";
            case 2:
                return "DL";
            case 3:
                return "BL";
            case 4:
                return "AH";
            case 5:
                return "CH";
            case 6:
                return "DH";
            case 7:
                return "BH";
        }
        return "";
    }
    getRegWord(reg, useSreg = false) {
        if (useSreg) {
            switch (reg) {
                case 0:
                    return "ES";
                case 1:
                    return "CS";
                case 2:
                    return "SS";
                case 3:
                    return "DS";
                case 4:
                    return "FS";
                case 5:
                    return "GS";
            }
        }
        else {
            let regName = "";
            switch (reg) {
                case 0:
                    regName = "AX";
                    break;
                case 1:
                    regName = "CX";
                    break;
                case 2:
                    regName = "DX";
                    break;
                case 3:
                    regName = "BX";
                    break;
                case 4:
                    regName = "SP";
                    break;
                case 5:
                    regName = "BP";
                    break;
                case 6:
                    regName = "SI";
                    break;
                case 7:
                    regName = "DI";
                    break;
            }
            if (this.op32Bit)
                regName = `E${regName}`;
            return regName;
        }
        return "";
    }
    loadSeg(segName) {
        {
            const ii = this.readAndDecodeAddressByte(false);
            this.instruction = `L${segName} ${ii.regStr}, ${ii.rmStr}`;
        }
    }
    getRm8Str() {
        const ii = this.readAndDecodeAddressByte(true);
        return ii.rmStr;
    }
    byteToHex(value) {
        return `${(value & 0xFF).toString(16).toUpperCase().padStart(2, "0")}h`;
    }
    wordToHex(value) {
        return `${(value & 0xFFFF).toString(16).toUpperCase().padStart(4, "0")}h`;
    }
    dwordToHex(value) {
        return `${(value & 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, "0")}h`;
    }
    sByteToHex(value) {
        if (value > 0x7F)
            return `- ${(0x100 - value).toString(16).toUpperCase().padStart(2, "0")}h`;
        else
            return `+ ${value.toString(16).toUpperCase().padStart(2, "0")}h`;
    }
    sWordToHex(value) {
        if (value > 0x7FFF)
            return `- ${(0x10000 - value).toString(16).toUpperCase().padStart(4, "0")}h`;
        else
            return `+ ${value.toString(16).toUpperCase().padStart(4, "0")}h`;
    }
    sDwordToHex(value) {
        value |= 0;
        if (value < 0)
            return `- ${(-value).toString(16).toUpperCase().padStart(8, "0")}h`;
        else
            return `+ ${value.toString(16).toUpperCase().padStart(8, "0")}h`;
    }
    getNextByte() {
        const b = this.memory.peek(this.localAddress++);
        this.hexValues.push(b);
        return b & 0xFF;
    }
    getNextSByteStr() {
        return this.sByteToHex(this.getNextByte());
    }
    getNextByteStr() {
        return this.byteToHex(this.getNextByte());
    }
    getNextWord() {
        const loByte = this.memory.peek(this.localAddress++);
        this.hexValues.push(loByte);
        const hiByte = this.memory.peek(this.localAddress++);
        this.hexValues.push(hiByte);
        return (loByte + (hiByte << 8)) & 0xFFFF;
    }
    getNextSWordStr() {
        return this.sWordToHex(this.getNextWord());
    }
    getNextWordStr() {
        return this.wordToHex(this.getNextWord());
    }
    getNextDword() {
        const loWord = this.getNextWord();
        const hiWord = this.getNextWord();
        return (loWord + (hiWord << 16)) & 0xFFFFFFFF;
    }
    getNextSDwordStr() {
        return this.sDwordToHex(this.getNextDword());
    }
    getNextDwordStr() {
        return this.dwordToHex(this.getNextDword());
    }
    prefixOp32() {
        return this.op32Bit ? "E" : "";
    }
}
exports.Disassembler = Disassembler;


/***/ }),

/***/ "./src/E86Lib/CPU/flags.ts":
/*!*********************************!*\
  !*** ./src/E86Lib/CPU/flags.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Flags16 = exports.FlagValue = void 0;
var FlagValue;
(function (FlagValue) {
    FlagValue[FlagValue["Carry"] = 1] = "Carry";
    FlagValue[FlagValue["Parity"] = 4] = "Parity";
    FlagValue[FlagValue["Adjust"] = 16] = "Adjust";
    FlagValue[FlagValue["Zero"] = 64] = "Zero";
    FlagValue[FlagValue["Sign"] = 128] = "Sign";
    FlagValue[FlagValue["Trap"] = 256] = "Trap";
    FlagValue[FlagValue["IntEnable"] = 512] = "IntEnable";
    FlagValue[FlagValue["Direction"] = 1024] = "Direction";
    FlagValue[FlagValue["Overflow"] = 2048] = "Overflow";
    FlagValue[FlagValue["IoPrivilegeLevel0"] = 4096] = "IoPrivilegeLevel0";
    FlagValue[FlagValue["IoPrivilegeLevel1"] = 8192] = "IoPrivilegeLevel1";
    FlagValue[FlagValue["NestedTask"] = 16384] = "NestedTask";
    FlagValue[FlagValue["Resume"] = 65536] = "Resume";
    FlagValue[FlagValue["Virtual8086Mode"] = 131072] = "Virtual8086Mode";
})(FlagValue = exports.FlagValue || (exports.FlagValue = {}));
class Flags16 {
    constructor() {
        this.internalValue = 0;
        this.internalValue = 0xF000;
    }
    setFlag(flagValue) {
        this.internalValue |= flagValue;
    }
    resetFlag(flagValue) {
        this.internalValue &= ~flagValue & 0xFFFF;
    }
    getFlag(flagValue) {
        return (this.internalValue & flagValue) > 0;
    }
    get CF() {
        return this.getFlag(FlagValue.Carry);
    }
    set CF(value) {
        if (value)
            this.setFlag(FlagValue.Carry);
        else
            this.resetFlag(FlagValue.Carry);
    }
    get PF() {
        return this.getFlag(FlagValue.Parity);
    }
    set PF(value) {
        if (value)
            this.setFlag(FlagValue.Parity);
        else
            this.resetFlag(FlagValue.Parity);
    }
    get AF() {
        return this.getFlag(FlagValue.Adjust);
    }
    set AF(value) {
        if (value)
            this.setFlag(FlagValue.Adjust);
        else
            this.resetFlag(FlagValue.Adjust);
    }
    get ZF() {
        return this.getFlag(FlagValue.Zero);
    }
    set ZF(value) {
        if (value)
            this.setFlag(FlagValue.Zero);
        else
            this.resetFlag(FlagValue.Zero);
    }
    get SF() {
        return this.getFlag(FlagValue.Sign);
    }
    set SF(value) {
        if (value)
            this.setFlag(FlagValue.Sign);
        else
            this.resetFlag(FlagValue.Sign);
    }
    get TF() {
        return this.getFlag(FlagValue.Trap);
    }
    set TF(value) {
        if (value)
            this.setFlag(FlagValue.Trap);
        else
            this.resetFlag(FlagValue.Trap);
    }
    get IF() {
        return this.getFlag(FlagValue.IntEnable);
    }
    set IF(value) {
        if (value)
            this.setFlag(FlagValue.IntEnable);
        else
            this.resetFlag(FlagValue.IntEnable);
    }
    get DF() {
        return this.getFlag(FlagValue.Direction);
    }
    set DF(value) {
        if (value)
            this.setFlag(FlagValue.Direction);
        else
            this.resetFlag(FlagValue.Direction);
    }
    get OF() {
        return this.getFlag(FlagValue.Overflow);
    }
    set OF(value) {
        if (value)
            this.setFlag(FlagValue.Overflow);
        else
            this.resetFlag(FlagValue.Overflow);
    }
    get value() {
        return this.internalValue;
    }
    set value(value) {
        this.internalValue = value | 0xf000;
    }
}
exports.Flags16 = Flags16;


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

/***/ "./src/E86Lib/Components/dmaController.ts":
/*!************************************************!*\
  !*** ./src/E86Lib/Components/dmaController.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DmaController = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
var DmaMode;
(function (DmaMode) {
    DmaMode[DmaMode["Demand"] = 0] = "Demand";
    DmaMode[DmaMode["Single"] = 1] = "Single";
    DmaMode[DmaMode["Block"] = 2] = "Block";
    DmaMode[DmaMode["Cascade"] = 3] = "Cascade";
})(DmaMode || (DmaMode = {}));
var DmaIncrement;
(function (DmaIncrement) {
    DmaIncrement[DmaIncrement["Inc"] = 0] = "Inc";
    DmaIncrement[DmaIncrement["Dec"] = 1] = "Dec";
})(DmaIncrement || (DmaIncrement = {}));
var DmaTransferType;
(function (DmaTransferType) {
    DmaTransferType[DmaTransferType["Verify"] = 0] = "Verify";
    DmaTransferType[DmaTransferType["WriteMem"] = 1] = "WriteMem";
    DmaTransferType[DmaTransferType["ReadMem"] = 2] = "ReadMem";
    DmaTransferType[DmaTransferType["Undefined"] = 3] = "Undefined";
})(DmaTransferType || (DmaTransferType = {}));
class DmaController extends baseComponent_1.BaseComponent {
    constructor(memProvider, checkMemRefreshActiveFunc) {
        super();
        this.channelCount = 8;
        this.memRefreshChannel = 0;
        this.blockSize = new Array(this.channelCount);
        this.blockSizeByteNo = new Array(this.channelCount);
        this.page = new Array(this.channelCount);
        this.offset = new Array(this.channelCount);
        this.offsetByteNo = new Array(this.channelCount);
        this.mode = new Array(this.channelCount);
        this.inc = new Array(this.channelCount);
        this.autoInit = new Array(this.channelCount);
        this.transferType = new Array(this.channelCount);
        this.channelEnabled = new Array(this.channelCount);
        this.terminalCount = new Array(this.channelCount);
        this.memoryProvider = memProvider;
        this.checkMemRefreshActiveFunc = checkMemRefreshActiveFunc;
        for (let idx = 0; idx < this.channelCount; idx++)
            this.channelEnabled[idx] = true;
    }
    readByte(array, byteNoArray, channel) {
        let result;
        if (byteNoArray[channel] == 0)
            result = array[channel] & 0x00FF;
        else
            result = ((array[channel] & 0xFF00) >> 8) & 0xFF;
        byteNoArray[channel] = 1 - byteNoArray[channel];
        return result;
    }
    writeByte(array, byteNoArray, channel, value) {
        if (byteNoArray[channel] == 0)
            array[channel] = ((array[channel] & 0xFF00) | value) & 0xFFFF;
        else
            array[channel] = ((array[channel] & 0x00FF) | (value << 8)) & 0xFFFF;
        byteNoArray[channel] = 1 - byteNoArray[channel];
    }
    memRefreshActive() {
        return this.autoInit[this.memRefreshChannel] && this.checkMemRefreshActiveFunc();
    }
    in(addr) {
        if (addr >= 0 && addr <= 7) {
            const channel = Math.trunc(addr / 2);
            if (addr % 2 == 0) {
                if (channel == this.memRefreshChannel && this.memRefreshActive())
                    this.offset[channel] += 17;
                return this.readByte(this.offset, this.offsetByteNo, channel);
            }
            return this.readByte(this.blockSize, this.blockSizeByteNo, channel);
        }
        if (addr >= 0xC0 && addr <= 0xCF) {
            const channel = 4 + Math.trunc((addr - 0xC0) / 4);
            if (addr % 4 == 0)
                return this.readByte(this.offset, this.offsetByteNo, channel);
            if (addr % 4 == 2)
                return this.readByte(this.blockSize, this.blockSizeByteNo, channel);
        }
        if (addr == 0x08) {
            if (this.memRefreshActive())
                this.terminalCount[this.memRefreshChannel] = true;
            return ((this.terminalCount[0] ? 1 : 0) | (this.terminalCount[1] ? 2 : 0) |
                (this.terminalCount[2] ? 4 : 0) | (this.terminalCount[3] ? 8 : 0)) & 0xFF;
        }
        return 0;
    }
    out(addr, value, wordTransfer) {
        if (addr >= 0 && addr <= 7) {
            const channel = Math.trunc(addr / 2);
            if (addr % 2 == 0)
                this.writeByte(this.offset, this.offsetByteNo, channel, value);
            else
                this.writeByte(this.blockSize, this.blockSizeByteNo, channel, value);
            this.terminalCount[channel] = false;
            return;
        }
        if (addr >= 0xC0 && addr <= 0xCF) {
            const channel = 4 + Math.trunc((addr - 0xC0) / 4);
            if (addr % 4 == 0)
                this.writeByte(this.offset, this.offsetByteNo, channel, value);
            else if (addr % 4 == 2)
                this.writeByte(this.blockSize, this.blockSizeByteNo, channel, value);
            this.terminalCount[channel] = false;
            return;
        }
        switch (addr) {
            case 0x87:
                this.page[0] = value & 0xFF;
                break;
            case 0x83:
                this.page[1] = value & 0xFF;
                break;
            case 0x81:
                this.page[2] = value & 0xFF;
                break;
            case 0x82:
                this.page[3] = value & 0xFF;
                break;
            case 0x8F:
                this.page[4] = value & 0xFF;
                break;
            case 0x8B:
                this.page[5] = value & 0xFF;
                break;
            case 0x89:
                this.page[6] = value & 0xFF;
                break;
            case 0x8A:
                this.page[7] = value & 0xFF;
                break;
            case 0x08:
                break;
            case 0x09:
                break;
            case 0x0A:
                {
                    const channel = value & 0x03;
                    this.channelEnabled[channel] = (value & 4) == 0;
                }
                break;
            case 0x0B:
                {
                    const channel = value & 0x03;
                    switch ((value >> 2) & 0x03) {
                        case 0:
                            this.transferType[channel] = DmaTransferType.Verify;
                            break;
                        case 1:
                            this.transferType[channel] = DmaTransferType.WriteMem;
                            break;
                        case 2:
                            this.transferType[channel] = DmaTransferType.ReadMem;
                            break;
                        case 3:
                            this.transferType[channel] = DmaTransferType.Undefined;
                            break;
                    }
                    this.autoInit[channel] = (value & 16) > 0;
                    this.inc[channel] = (value & 32) > 0 ? DmaIncrement.Dec : DmaIncrement.Inc;
                    switch ((value >> 6) & 0x03) {
                        case 0:
                            this.mode[channel] = DmaMode.Demand;
                            break;
                        case 1:
                            this.mode[channel] = DmaMode.Single;
                            break;
                        case 2:
                            this.mode[channel] = DmaMode.Block;
                            break;
                        case 3:
                            this.mode[channel] = DmaMode.Cascade;
                            break;
                    }
                    this.terminalCount[channel] = false;
                }
                break;
            case 0x0C:
                for (let idx = 0; idx < this.channelCount; idx++) {
                    this.blockSizeByteNo[idx] = 0;
                    this.offsetByteNo[idx] = 0;
                }
                break;
            case 0x0D:
                for (let idx = 0; idx < this.channelCount; idx++) {
                    this.blockSize[idx] = 0;
                    this.blockSizeByteNo[idx] = 0;
                    this.page[idx] = 0;
                    this.offset[idx] = 0;
                    this.offsetByteNo[idx] = 0;
                    this.mode[idx] = 0;
                    this.inc[idx] = DmaIncrement.Inc;
                    this.autoInit[idx] = false;
                    this.channelEnabled[idx] = true;
                    this.terminalCount[idx] = false;
                }
                break;
            case 0x0E:
                break;
            case 0x0F:
                break;
        }
    }
    triggerDmaDeviceToMem(dmaChannel, dataProvider, finishedAction) {
        if (this.mode[dmaChannel] == DmaMode.Single || this.mode[dmaChannel] == DmaMode.Block) {
            let ramAddr = (this.page[dmaChannel] << 16) + this.offset[dmaChannel];
            let count = this.blockSize[dmaChannel] + 1;
            const direction = this.inc[dmaChannel] == DmaIncrement.Inc ? 1 : -1;
            const di = { endOfData: false };
            while (count > 0 && !di.endOfData) {
                this.memoryProvider.poke(ramAddr, dataProvider.getNextByte(di));
                ramAddr += direction;
                count--;
            }
            this.terminalCount[dmaChannel] = true;
            if (finishedAction)
                finishedAction();
        }
    }
    triggerDmaMemToDevice(dmaChannel, dataProvider, finishedAction) {
        if (this.mode[dmaChannel] == DmaMode.Single || this.mode[dmaChannel] == DmaMode.Block) {
            let ramAddr = (this.page[dmaChannel] << 16) + this.offset[dmaChannel];
            let count = this.blockSize[dmaChannel] + 1;
            const direction = this.inc[dmaChannel] == DmaIncrement.Inc ? 1 : -1;
            const di = { endOfData: false };
            while (count > 0 && !di.endOfData) {
                dataProvider.setNextByte(this.memoryProvider.peek(ramAddr), di);
                ramAddr += direction;
                count--;
            }
            this.terminalCount[dmaChannel] = true;
            if (finishedAction)
                finishedAction();
        }
    }
}
exports.DmaController = DmaController;


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

/***/ "./src/E86Lib/Components/floppyDisk.ts":
/*!*********************************************!*\
  !*** ./src/E86Lib/Components/floppyDisk.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FloppyDisk = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const interruptController_1 = __webpack_require__(/*! ./interruptController */ "./src/E86Lib/Components/interruptController.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
var FloppyType;
(function (FloppyType) {
    FloppyType[FloppyType["F360"] = 0] = "F360";
    FloppyType[FloppyType["F720"] = 1] = "F720";
})(FloppyType || (FloppyType = {}));
var FloppyDataDir;
(function (FloppyDataDir) {
    FloppyDataDir[FloppyDataDir["Input"] = 0] = "Input";
    FloppyDataDir[FloppyDataDir["Output"] = 1] = "Output";
})(FloppyDataDir || (FloppyDataDir = {}));
class DriveInfo {
    reset() {
        this.seekEnd = false;
        this.noData = false;
        this.timeout = false;
        this.endOfCylinder = false;
        this.deleteAddressMark = false;
    }
}
class CommandInfo {
    constructor() {
        this.head = 0;
        this.track = 0;
        this.sector = 0;
        this.sectorSize = 0;
        this.trackLength = 0;
        this.gap3Length = 0;
        this.dataLength = 0;
        this.fillByte = 0;
    }
}
class DriveSpecs {
    constructor(heads, sectors, tracks) {
        this.heads = 0;
        this.tracks = 0;
        this.sectors = 0;
        this.heads = heads;
        this.sectors = sectors;
        this.tracks = tracks;
    }
    get diskSize() {
        return this.heads * this.tracks * this.sectors * DriveSpecs.sectorSize;
    }
    calcLba(track, head, sector) {
        return (track * this.heads + head) * this.sectors + sector - 1;
    }
}
DriveSpecs.sectorSize = 512;
class FloppyDisk extends baseComponent_1.BaseComponent {
    constructor(pic, dmaController) {
        super();
        this.commandDelay = 1000;
        this.maxDriveCount = 4;
        this.driveSpecsByFloppyType = new Array();
        this.motor = new Array(this.maxDriveCount);
        this.active = new Array(this.maxDriveCount);
        this.selectedDrive = 0;
        this.dataRegisterReady = true;
        this.dataDirection = FloppyDataDir.Input;
        this.driveInfo = new Array(this.maxDriveCount);
        this.commandInfo = new Array(this.maxDriveCount);
        this.driveSpecs = new Array(this.maxDriveCount);
        this.interruptCode = 0;
        this.diskImages = new Array(this.maxDriveCount);
        this.diskImagePath = new Array(this.maxDriveCount);
        this.imageChanged = new Array(this.maxDriveCount);
        this.outputQueue = new Array();
        this.currDataPosition = new Array(this.maxDriveCount);
        this.currDataLength = new Array(this.maxDriveCount);
        this.currentCommand = 0;
        this.cmdByteNo = 0;
        this.headLoadTime = new Array(this.maxDriveCount);
        this.headUnloadTime = new Array(this.maxDriveCount);
        this.stepRate = new Array(this.maxDriveCount);
        this.pic = pic;
        this.dmaController = dmaController;
        for (let idx = 0; idx < this.maxDriveCount; idx++) {
            this.driveInfo[idx] = new DriveInfo();
            this.commandInfo[idx] = new CommandInfo();
        }
        this.initDriveSpecs();
    }
    *getFloppyTypes() {
        yield FloppyType.F360;
        yield FloppyType.F720;
    }
    initDriveSpecs() {
        this.driveSpecsByFloppyType = new Array(Object.keys(FloppyType).length / 2);
        this.driveSpecsByFloppyType[FloppyType.F360] = new DriveSpecs(2, 9, 40);
        this.driveSpecsByFloppyType[FloppyType.F720] = new DriveSpecs(2, 9, 80);
    }
    internalLoadImage(driveNo, buffer) {
        for (const floppyType of this.getFloppyTypes()) {
            const driveSpec = this.driveSpecsByFloppyType[floppyType];
            if (driveSpec.diskSize == buffer.byteLength) {
                this.driveInfo[driveNo].reset();
                this.active[driveNo] = false;
                this.motor[driveNo] = false;
                this.driveSpecs[driveNo] = driveSpec;
                this.diskImages[driveNo] = new Uint8Array(buffer);
                return true;
            }
        }
        return false;
    }
    async loadImageFromFile(filePath, driveNo) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.responseType = "arraybuffer";
            req.open("GET", settings_1.Settings.baseDir + filePath, true);
            req.onload = async () => {
                if (req.status != 200) {
                    reject();
                    return;
                }
                const buffer = req.response;
                if (this.internalLoadImage(driveNo, buffer)) {
                    this.diskImagePath[driveNo] = filePath;
                    resolve(true);
                    return;
                }
                this.diskImages[driveNo] = null;
                resolve(false);
            };
            req.onerror = () => {
                this.diskImages[driveNo] = null;
                reject();
            };
            req.send();
        });
    }
    loadImageFromBuffer(buffer, driveNo) {
        this.internalLoadImage(driveNo, buffer);
    }
    async saveImage(driveNo) {
        if (this.diskImagePath[driveNo] && this.imageChanged[driveNo]) {
            this.imageChanged[driveNo] = false;
        }
    }
    async saveImages() {
        for (let idx = 0; idx < this.maxDriveCount; idx++)
            await this.saveImage(idx);
    }
    async ejectImage(driveNo) {
        await this.saveImage(driveNo);
        this.diskImages[driveNo] = null;
    }
    internalReset() {
        for (let idx = 0; idx < this.maxDriveCount; idx++)
            this.motor[idx] = false;
        this.selectedDrive = 0;
        this.dmaIrqEnabled = false;
        this.dataDirection = FloppyDataDir.Input;
        this.outputQueue.length = 0;
        this.resetCount = 0;
        this.doInterrupt(100, 3);
    }
    doInterrupt(delayMicrosec, interruptCode) {
        this.busy = this.outputQueue.length > 0;
        this.interruptCode = interruptCode;
        if (delayMicrosec == 0)
            this.pic.doInterrupt(interruptController_1.HardwareInterrupt.Diskette);
        else {
            this.eventTimer.setEvent(delayMicrosec, () => {
                this.pic.doInterrupt(interruptController_1.HardwareInterrupt.Diskette);
            });
        }
    }
    newCommand() {
        this.driveInfo[this.selectedDrive].reset();
        this.dataDirection = FloppyDataDir.Input;
        this.outputQueue.length = 0;
    }
    getStatus0() {
        let status;
        if (this.resetCount != null) {
            status = this.resetCount;
            if (this.resetCount < 3)
                this.resetCount++;
            else
                this.resetCount = null;
            status |= 0xC0;
        }
        else {
            status = this.selectedDrive;
            status |= this.interruptCode << 6;
        }
        if (this.commandInfo[this.selectedDrive].head == 1)
            status |= 4;
        if (this.driveInfo[this.selectedDrive].seekEnd)
            status |= 32;
        status |= this.interruptCode << 6;
        return status;
    }
    getStatus1() {
        let status = 0;
        if (this.driveInfo[this.selectedDrive].noData)
            status |= 4;
        if (this.driveInfo[this.selectedDrive].timeout)
            status |= 16;
        if (this.driveInfo[this.selectedDrive].endOfCylinder)
            status |= 128;
        return status;
    }
    getStatus2() {
        let status = 0;
        if (this.driveInfo[this.selectedDrive].deleteAddressMark)
            status |= 64;
        return status;
    }
    getStatus3() {
        let status = this.selectedDrive;
        if (this.commandInfo[this.selectedDrive].head == 1)
            status |= 0x04;
        status |= 0x08;
        if (this.commandInfo[this.selectedDrive].track == 0)
            status |= 0x10;
        status |= 0x20;
        return status;
    }
    initOutput() {
        this.outputQueue.length = 0;
        this.dataDirection = FloppyDataDir.Output;
    }
    in(addr) {
        switch (addr) {
            case 0x3F4:
                {
                    let result = 0;
                    for (let idx = 0; idx < this.maxDriveCount; idx++) {
                        if (this.active[idx])
                            result |= (1 << idx) & 0xFF;
                    }
                    if (this.busy)
                        result |= 16;
                    if (!this.dmaIrqEnabled)
                        result |= 32;
                    if (this.dataDirection == FloppyDataDir.Output)
                        result |= 64;
                    if (this.dataRegisterReady)
                        result |= 128;
                    return result;
                }
            case 0x3F5:
                if (this.dataDirection == FloppyDataDir.Output && this.outputQueue.length > 0) {
                    const dequeue = this.outputQueue.shift();
                    if (this.outputQueue.length == 0) {
                        this.dataDirection = FloppyDataDir.Input;
                        this.busy = false;
                    }
                    return dequeue;
                }
                break;
        }
        return 0xFF;
    }
    out(addr, value, wordTransfer) {
        if (this.busy) {
            this.busy = false;
            this.outputQueue.length = 0;
        }
        const v = value & 0xFF;
        switch (addr) {
            case 0x3F2:
                {
                    if ((v & 0x04) == 0) {
                        this.internalReset();
                        return;
                    }
                    this.selectedDrive = v & 0x03;
                    this.dmaIrqEnabled = (v & 0x08) > 0;
                    for (let idx = 0; idx < this.maxDriveCount; idx++)
                        this.motor[idx] = (v & (0x10 << idx)) > 0;
                    break;
                }
            case 0x3F5:
                if (this.cmdByteNo == 0) {
                    this.currentCommand = v & 0x1F;
                    this.commandInfo[this.selectedDrive].multiTrack = (v & 0x80) > 0;
                    this.newCommand();
                }
                switch (this.currentCommand) {
                    case 0x02:
                        this.cmdReadTrack(v);
                        break;
                    case 0x05:
                        this.cmdWriteSector(v);
                        break;
                    case 0x06:
                        this.cmdReadSector(v);
                        break;
                    case 0x09:
                        this.cmdWriteDeletedSector(v);
                        break;
                    case 0x0C:
                        this.cmdReadDeletedSector(v);
                        break;
                    case 0x0D:
                        this.cmdFormatTrack(v);
                        break;
                    case 0x03:
                        this.cmdFixDriveData(v);
                        break;
                    case 0x04:
                        this.cmdCheckDriveStatus();
                        break;
                    case 0x07:
                        this.cmdCalibrateDrive();
                        break;
                    case 0x08:
                        this.cmdCheckInterruptStatus();
                        break;
                    case 0x0A:
                        this.cmdReadSectorId(v);
                        break;
                    case 0x0F:
                        this.cmdSeekParkHead(v);
                        break;
                    default:
                        this.cmdInvalid();
                        break;
                }
                break;
        }
    }
    cmdReadTrack(value) {
        this.resetCount = null;
        this.setAccessValues(value);
        if (this.cmdByteNo == 8) {
            this.cmdByteNo = 0;
            this.busy = true;
            throw new Error("Method not implemented.");
        }
        else
            this.cmdByteNo++;
    }
    cmdWriteSector(value) {
        this.resetCount = null;
        this.setAccessValues(value);
        if (this.cmdByteNo == 8) {
            this.cmdByteNo = 0;
            this.busy = true;
            if (this.diskImages[this.selectedDrive] == null) {
                this.doInterrupt(10, 1);
            }
            else {
                const cmdInfo = this.commandInfo[this.selectedDrive];
                const driveSpec = this.driveSpecs[this.selectedDrive];
                const position = driveSpec.calcLba(cmdInfo.track, cmdInfo.head, cmdInfo.sector) * DriveSpecs.sectorSize;
                let length = cmdInfo.trackLength * DriveSpecs.sectorSize;
                if (length < 0)
                    length = DriveSpecs.sectorSize;
                this.currDataPosition[this.selectedDrive] = position;
                this.currDataLength[this.selectedDrive] = length;
                const finishedAction = () => {
                    this.driveInfo[this.selectedDrive].seekEnd = true;
                    this.initOutput();
                    this.outputQueue.push(this.getStatus0());
                    this.outputQueue.push(this.getStatus1());
                    this.outputQueue.push(this.getStatus2());
                    this.outputQueue.push(cmdInfo.track);
                    this.outputQueue.push(cmdInfo.head);
                    this.outputQueue.push(cmdInfo.sector);
                    this.outputQueue.push(cmdInfo.sectorSize);
                    this.doInterrupt(10, 0);
                };
                this.eventTimer.setEvent(this.commandDelay, () => {
                    this.dmaController.triggerDmaMemToDevice(2, this, finishedAction);
                    this.imageChanged[this.selectedDrive] = true;
                });
            }
        }
        else
            this.cmdByteNo++;
    }
    cmdReadSector(value) {
        this.resetCount = null;
        this.setAccessValues(value);
        if (this.cmdByteNo == 8) {
            this.cmdByteNo = 0;
            this.busy = true;
            if (this.diskImages[this.selectedDrive] == null) {
                this.doInterrupt(10, 1);
            }
            else {
                const cmdInfo = this.commandInfo[this.selectedDrive];
                const drvSpecs = this.driveSpecs[this.selectedDrive];
                this.currDataPosition[this.selectedDrive] = 0;
                const position = drvSpecs.calcLba(cmdInfo.track, cmdInfo.head, cmdInfo.sector) * DriveSpecs.sectorSize;
                let length = cmdInfo.trackLength * DriveSpecs.sectorSize;
                if (length < 0)
                    length = DriveSpecs.sectorSize;
                this.currDataPosition[this.selectedDrive] = position;
                this.currDataLength[this.selectedDrive] = length;
                const finishedAction = () => {
                    this.driveInfo[this.selectedDrive].seekEnd = true;
                    this.initOutput();
                    this.outputQueue.push(this.getStatus0());
                    this.outputQueue.push(this.getStatus1());
                    this.outputQueue.push(this.getStatus2());
                    this.outputQueue.push(cmdInfo.track);
                    this.outputQueue.push(cmdInfo.head);
                    this.outputQueue.push(cmdInfo.sector);
                    this.outputQueue.push(cmdInfo.sectorSize);
                    this.doInterrupt(10, 0);
                };
                this.eventTimer.setEvent(this.commandDelay, () => this.dmaController.triggerDmaDeviceToMem(2, this, () => finishedAction()));
            }
        }
        else
            this.cmdByteNo++;
    }
    cmdWriteDeletedSector(value) {
        this.resetCount = null;
        this.setAccessValues(value);
        if (this.cmdByteNo == 8) {
            this.cmdByteNo = 0;
            this.busy = true;
            throw new Error("Method not implemented.");
        }
        else
            this.cmdByteNo++;
    }
    cmdReadDeletedSector(value) {
        this.resetCount = null;
        this.setAccessValues(value);
        if (this.cmdByteNo == 8) {
            this.cmdByteNo = 0;
            this.busy = true;
            throw new Error("Method not implemented.");
        }
        else
            this.cmdByteNo++;
    }
    cmdFormatTrack(value) {
        this.resetCount = null;
        switch (this.cmdByteNo) {
            case 1:
                this.commandInfo[this.selectedDrive].head = (value >> 2) & 1;
                break;
            case 2:
                this.commandInfo[this.selectedDrive].sectorSize = value;
                break;
            case 3:
                this.commandInfo[this.selectedDrive].trackLength = value;
                break;
            case 4:
                this.commandInfo[this.selectedDrive].gap3Length = value;
                break;
            case 5:
                this.commandInfo[this.selectedDrive].fillByte = value;
                break;
        }
        if (this.cmdByteNo == 5) {
            this.cmdByteNo = 0;
            this.busy = true;
            this.eventTimer.setEvent(1000, () => this.doInterrupt(10, 0));
        }
        else
            this.cmdByteNo++;
    }
    cmdFixDriveData(value) {
        this.resetCount = null;
        switch (this.cmdByteNo) {
            case 1:
                this.headUnloadTime[this.selectedDrive] = value & 3;
                this.stepRate[this.selectedDrive] = (value >> 4) & 3;
                break;
            case 2:
                this.dmaIrqEnabled = (value & 1) > 0;
                this.headLoadTime[this.selectedDrive] = (value >> 1) & 0x7F;
                break;
        }
        if (this.cmdByteNo == 2) {
            this.cmdByteNo = 0;
        }
        else
            this.cmdByteNo++;
    }
    cmdCheckDriveStatus() {
        this.resetCount = null;
        if (this.cmdByteNo == 1) {
            this.cmdByteNo = 0;
            this.busy = true;
            this.initOutput();
            this.outputQueue.push(this.getStatus3());
        }
        else
            this.cmdByteNo++;
    }
    cmdCalibrateDrive() {
        this.resetCount = null;
        if (this.cmdByteNo == 1) {
            this.cmdByteNo = 0;
            this.active[this.selectedDrive] = true;
            this.eventTimer.setEvent(10000, () => {
                this.commandInfo[this.selectedDrive].track = 0;
                this.driveInfo[this.selectedDrive].seekEnd = true;
                this.active[this.selectedDrive] = false;
                this.doInterrupt(0, 0);
            });
        }
        else
            this.cmdByteNo++;
    }
    cmdCheckInterruptStatus() {
        this.busy = true;
        this.initOutput();
        this.outputQueue.push(this.getStatus0());
        this.outputQueue.push(this.commandInfo[this.selectedDrive].track);
    }
    cmdReadSectorId(value) {
        this.resetCount = null;
        if (this.cmdByteNo == 1) {
            this.cmdByteNo = 0;
            this.commandInfo[this.selectedDrive].head = (value >> 2) & 1;
            this.busy = true;
            throw new Error("Method not implemented.");
        }
        else
            this.cmdByteNo++;
    }
    cmdSeekParkHead(value) {
        this.resetCount = null;
        if (this.cmdByteNo == 2) {
            this.cmdByteNo = 0;
            this.active[this.selectedDrive] = true;
            this.eventTimer.setEvent(10000, () => {
                this.commandInfo[this.selectedDrive].track = value;
                this.driveInfo[this.selectedDrive].seekEnd = true;
                this.active[this.selectedDrive] = false;
                this.doInterrupt(0, 0);
            });
        }
        else
            this.cmdByteNo++;
    }
    cmdInvalid() {
        this.resetCount = null;
        this.busy = true;
        this.interruptCode = 2;
        this.initOutput();
        this.outputQueue.push(this.getStatus0());
    }
    setAccessValues(value) {
        switch (this.cmdByteNo) {
            case 1:
                break;
            case 2:
                this.commandInfo[this.selectedDrive].track = value;
                break;
            case 3:
                this.commandInfo[this.selectedDrive].head = value;
                break;
            case 4:
                this.commandInfo[this.selectedDrive].sector = value;
                break;
            case 5:
                this.commandInfo[this.selectedDrive].sectorSize = value;
                break;
            case 6:
                this.commandInfo[this.selectedDrive].trackLength = value;
                break;
            case 7:
                this.commandInfo[this.selectedDrive].gap3Length = value;
                break;
            case 8:
                this.commandInfo[this.selectedDrive].dataLength = value;
                break;
        }
    }
    getNextByte(dataInfo) {
        if (this.currDataLength[this.selectedDrive] > 0) {
            dataInfo.endOfData = false;
            this.currDataLength[this.selectedDrive]--;
            return this.diskImages[this.selectedDrive][this.currDataPosition[this.selectedDrive]++];
        }
        else
            dataInfo.endOfData = true;
        return 0;
    }
    setNextByte(data, dataInfo) {
        if (this.currDataLength[this.selectedDrive] > 0) {
            dataInfo.endOfData = false;
            this.currDataLength[this.selectedDrive]--;
            this.diskImages[this.selectedDrive][this.currDataPosition[this.selectedDrive]++] = data;
        }
        else
            dataInfo.endOfData = true;
    }
}
exports.FloppyDisk = FloppyDisk;


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

/***/ "./src/E86Lib/Components/hardDisk.ts":
/*!*******************************************!*\
  !*** ./src/E86Lib/Components/hardDisk.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HardDisk = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const interruptController_1 = __webpack_require__(/*! ./interruptController */ "./src/E86Lib/Components/interruptController.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
class HardDriveSpecs {
    constructor(biosType, cylinders, heads, sectors, switchCode) {
        this.biosType = 0;
        this.cylinders = 0;
        this.heads = 0;
        this.sectors = 0;
        this.switchCode = 0;
        this.biosType = biosType;
        this.cylinders = cylinders;
        this.heads = heads;
        this.sectors = sectors;
        this.switchCode = switchCode;
    }
    get diskSize() {
        return this.heads * this.cylinders * this.sectors * HardDriveSpecs.sectorSize;
    }
    calcLba(cylinder, head, sector) {
        if (cylinder < this.cylinders || head < this.heads || sector < this.sectors)
            return (cylinder * this.heads + head) * this.sectors + sector;
        return null;
    }
}
HardDriveSpecs.sectorSize = 512;
var HdError;
(function (HdError) {
    HdError[HdError["None"] = 0] = "None";
    HdError[HdError["NoIndexSignal"] = 1] = "NoIndexSignal";
    HdError[HdError["NoSeekCompleteSignal"] = 2] = "NoSeekCompleteSignal";
    HdError[HdError["WriteFault"] = 3] = "WriteFault";
    HdError[HdError["NoReadyAfterDriveSelect"] = 4] = "NoReadyAfterDriveSelect";
    HdError[HdError["NoTrack00Signal"] = 6] = "NoTrack00Signal";
    HdError[HdError["SeekNotComplete"] = 8] = "SeekNotComplete";
    HdError[HdError["IdReadError"] = 16] = "IdReadError";
    HdError[HdError["DataError"] = 17] = "DataError";
    HdError[HdError["NoAddressMark"] = 18] = "NoAddressMark";
    HdError[HdError["SectorNotFound"] = 20] = "SectorNotFound";
    HdError[HdError["SeekError"] = 21] = "SeekError";
    HdError[HdError["CorrectableDataError"] = 24] = "CorrectableDataError";
    HdError[HdError["BadTrack"] = 25] = "BadTrack";
    HdError[HdError["InvalidCommand"] = 32] = "InvalidCommand";
    HdError[HdError["IllegalDiskAddress"] = 33] = "IllegalDiskAddress";
    HdError[HdError["RamError"] = 48] = "RamError";
    HdError[HdError["ProgramChecksumError"] = 49] = "ProgramChecksumError";
    HdError[HdError["EccError"] = 50] = "EccError";
})(HdError || (HdError = {}));
class HardDisk extends baseComponent_1.BaseComponent {
    constructor(pic, dmaController) {
        super();
        this.driveCount = 2;
        this.commandDelay = 500;
        this.readWriteDelay = 100;
        this.allDriveSpecs = new Array();
        this.driveSpecs = new Array(this.driveCount);
        this.diskImages = new Array(this.driveCount);
        this.diskImagePath = new Array(this.driveCount);
        this.imageChanged = new Array(this.driveCount);
        this.selectedDrive = 0;
        this.head = 0;
        this.cylinder = 0;
        this.sector = 0;
        this.interlBlockCount = 0;
        this.controlField = 0;
        this.command = 0;
        this.dataPointer = 0;
        this.dmaInterruptMask = 0;
        this.driveCharacteristics = new Array(this.driveCount);
        this.dcbByteNo = 0;
        this.errorBytes = new Array();
        this.outputBytes = new Array();
        this.addressValid = true;
        this.pic = pic;
        this.dmaController = dmaController;
        this.initDriveSpecs();
        this.setDriveType(0, 2);
        this.setDriveType(1, 2);
        for (let idx = 0; idx < this.driveCount; idx++) {
            this.driveCharacteristics[idx] = new Uint8Array(8);
            this.diskImagePath[idx] = settings_1.Settings.hdImageDir + "HD" + idx + ".ima";
        }
    }
    async loadImages() {
        console.log("hardDisk.loadImages started");
        for (let driveNo = 0; driveNo < this.driveCount; driveNo++) {
            if (this.driveSpecs[driveNo] == null)
                return;
            await this.loadImage(driveNo);
        }
        console.log("hardDisk.loadImages finished");
    }
    async saveImages() {
        for (let idx = 0; idx < this.driveCount; idx++)
            await this.saveImage(idx);
    }
    loadImage(driveNo) {
        const path = settings_1.Settings.baseDir + this.diskImagePath[driveNo];
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.responseType = "arraybuffer";
            req.open("GET", path, true);
            req.onload = () => {
                if (req.status != 200) {
                    reject();
                    return;
                }
                const buffer = req.response;
                const data = new Uint8Array(buffer);
                if (data.length == this.driveSpecs[driveNo].diskSize) {
                    this.diskImages[driveNo] = data;
                    this.imageChanged[driveNo] = false;
                }
                resolve();
            };
            req.onerror = () => {
                reject();
            };
            req.send();
        });
    }
    async saveImage(driveNo) {
    }
    generateError(error) {
        this.errorBytes.length = 0;
        this.errorBytes.push((this.addressValid ? 0x80 : 0 + error) & 0xFF);
        this.errorBytes.push(((this.selectedDrive << 5) + this.head) & 0xFF);
        this.errorBytes.push((((this.cylinder & 0x700) >> 3) + this.sector & 0xFF));
        this.errorBytes.push(this.cylinder);
        this.currentCommandError = true;
    }
    in(addr) {
        var _a, _b, _c, _d;
        switch (addr) {
            case 0x320:
                if (this.statusByte != null) {
                    const status = this.statusByte;
                    this.statusByte = null;
                    this.requestBit = false;
                    this.modeBit = false;
                    this.commandDataBit = false;
                    this.busyBit = false;
                    return status;
                }
                if (this.outputBytes.length > 0) {
                    const data = this.outputBytes.shift();
                    return data;
                }
                break;
            case 0x321:
                {
                    const status = ((this.requestBit ? 1 : 0) + (this.modeBit ? 2 : 0) + (this.commandDataBit ? 4 : 0) + (this.busyBit ? 8 : 0) +
                        (this.statusByte != null ? 0x20 : 0)) & 0xFFFF;
                    return status;
                }
            case 0x322:
                {
                    const switchCode = ((_b = ((_a = this.driveSpecs[0]) === null || _a === void 0 ? void 0 : _a.switchCode) << 2) !== null && _b !== void 0 ? _b : 0) +
                        ((_d = (_c = this.driveSpecs[1]) === null || _c === void 0 ? void 0 : _c.switchCode) !== null && _d !== void 0 ? _d : 0);
                    return switchCode & 0xFFFF;
                }
        }
        return 0;
    }
    out(addr, value, wordTransfer) {
        switch (addr) {
            case 0x320:
                this.commandDataBit = false;
                this.writeDataByte(value & 0xFF);
                break;
            case 0x321:
                if ((value & 64) > 0)
                    this.reset();
                break;
            case 0x322:
                this.requestBit = true;
                this.commandDataBit = true;
                this.busyBit = true;
                break;
            case 0x323:
                this.interruptEnabled = (value & 0x02) > 0;
                this.dmaInterruptMask = value;
                break;
        }
    }
    setDriveType(driveNo, type) {
        const specs = this.allDriveSpecs.find(_ => _.biosType == type);
        if (specs == null)
            throw new Error("Harddisk drive type " + type + " not found.");
        this.driveSpecs[driveNo] = specs;
        this.diskImages[driveNo] = new Uint8Array(specs.diskSize);
    }
    initDriveSpecs() {
        this.allDriveSpecs.push(new HardDriveSpecs(1, 306, 4, 17, 0x00));
        this.allDriveSpecs.push(new HardDriveSpecs(2, 615, 4, 17, 0x01));
        this.allDriveSpecs.push(new HardDriveSpecs(13, 306, 8, 17, 0x03));
        this.allDriveSpecs.push(new HardDriveSpecs(16, 612, 4, 17, 0x02));
    }
    reset() {
        super.reset();
        this.selectedDrive = 0;
        this.dcbByteNo = 0;
        this.requestBit = false;
        this.commandDataBit = false;
        this.busyBit = false;
        this.requestBit = false;
        this.errorBytes.length = 0;
        this.currentCommandError = false;
        this.outputBytes.length = 0;
    }
    writeDataByte(value) {
        switch (this.dcbByteNo) {
            case 0:
                this.command = value;
                break;
            case 1:
                this.head = value & 0x1F;
                this.selectedDrive = (value & 0x20) > 0 ? 1 : 0;
                break;
            case 2:
                this.sector = value & 0x3F;
                this.cylinder = (value & 0xC0) << 2;
                break;
            case 3:
                this.cylinder = this.cylinder + value;
                break;
            case 4:
                this.interlBlockCount = value;
                break;
            case 5:
                this.controlField = value;
                break;
        }
        if (this.dcbByteNo < 5)
            this.dcbByteNo++;
        else {
            if (this.command == 0x0C && this.dcbByteNo < 13) {
                this.driveCharacteristics[this.selectedDrive][this.dcbByteNo - 5] = value;
                this.dcbByteNo++;
            }
            else {
                this.dcbByteNo = 0;
                this.executeCommand();
            }
        }
    }
    getStatusByte() {
        let result = 0;
        if (this.selectedDrive == 1)
            result |= 0x20;
        if (this.currentCommandError)
            result |= 0x02;
        return result;
    }
    commandFinished() {
        this.command = 0;
        this.eventTimer.setEvent(this.commandDelay, () => {
            this.commandDataBit = true;
            this.modeBit = true;
            this.statusByte = this.getStatusByte();
            this.currentCommandError = false;
            this.isBusy = false;
            if (this.interruptEnabled)
                this.pic.doInterrupt(interruptController_1.HardwareInterrupt.Harddisk);
        });
    }
    executeCommand() {
        if (this.isBusy)
            return;
        this.isBusy = true;
        this.currentCommandError = false;
        this.errorBytes.length = 0;
        if (this.driveSpecs[this.selectedDrive] == null) {
        }
        else {
            switch (this.command) {
                case 0x00:
                    break;
                case 0x01:
                    break;
                case 0x03:
                    while (this.errorBytes.length > 0)
                        this.outputBytes.push(this.errorBytes.shift());
                    break;
                case 0x04:
                    break;
                case 0x05:
                    break;
                case 0x06:
                    break;
                case 0x07:
                    break;
                case 0x08:
                    this.dataPointer = this.calcLba(this.cylinder, this.head, this.sector) * HardDriveSpecs.sectorSize;
                    if (!this.currentCommandError) {
                        this.eventTimer.setEvent(this.readWriteDelay, () => this.dmaController.triggerDmaDeviceToMem(3, this, null));
                    }
                    break;
                case 0x0A:
                    this.dataPointer = this.calcLba(this.cylinder, this.head, this.sector) * HardDriveSpecs.sectorSize;
                    if (!this.currentCommandError) {
                        this.eventTimer.setEvent(this.readWriteDelay, () => {
                            this.dmaController.triggerDmaMemToDevice(3, this, null);
                            this.imageChanged[this.selectedDrive] = true;
                        });
                    }
                    break;
                case 0x0B:
                    break;
                case 0x0C:
                    break;
                case 0x0D:
                    break;
                case 0x0E:
                    throw new Error("Method not implemented.");
                case 0x0F:
                    break;
                case 0xE0:
                    break;
                case 0xE3:
                    break;
                case 0xE4:
                    break;
                case 0xE5:
                    throw new Error("Method not implemented.");
                case 0xE6:
                    throw new Error("Method not implemented.");
                default:
                    this.generateError(HdError.InvalidCommand);
                    break;
            }
        }
        this.commandFinished();
    }
    calcLba(cylinder, head, sector) {
        const lba = this.driveSpecs[this.selectedDrive].calcLba(cylinder, head, sector);
        if (lba == null) {
            this.generateError(HdError.IllegalDiskAddress);
            return 0;
        }
        return lba;
    }
    getNextByte(dataInfo) {
        const image = this.diskImages[this.selectedDrive];
        if (this.dataPointer < image.length) {
            dataInfo.endOfData = false;
            return image[this.dataPointer++];
        }
        dataInfo.endOfData = true;
        return 0;
    }
    setNextByte(data, dataInfo) {
        dataInfo.endOfData = false;
        this.diskImages[this.selectedDrive][this.dataPointer++] = data;
    }
}
exports.HardDisk = HardDisk;


/***/ }),

/***/ "./src/E86Lib/Components/interruptController.ts":
/*!******************************************************!*\
  !*** ./src/E86Lib/Components/interruptController.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InterruptController = exports.HardwareInterrupt = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
var HardwareInterrupt;
(function (HardwareInterrupt) {
    HardwareInterrupt[HardwareInterrupt["Timer"] = 0] = "Timer";
    HardwareInterrupt[HardwareInterrupt["Keyboard"] = 1] = "Keyboard";
    HardwareInterrupt[HardwareInterrupt["Reserved"] = 2] = "Reserved";
    HardwareInterrupt[HardwareInterrupt["Serial3"] = 3] = "Serial3";
    HardwareInterrupt[HardwareInterrupt["Serial4"] = 4] = "Serial4";
    HardwareInterrupt[HardwareInterrupt["Harddisk"] = 5] = "Harddisk";
    HardwareInterrupt[HardwareInterrupt["Diskette"] = 6] = "Diskette";
    HardwareInterrupt[HardwareInterrupt["Printer"] = 7] = "Printer";
})(HardwareInterrupt = exports.HardwareInterrupt || (exports.HardwareInterrupt = {}));
class InterruptController extends baseComponent_1.BaseComponent {
    constructor() {
        super();
        this.defaultOffset = 8;
        this.pendingInterrupts = new Array();
        this.intMaskReg = 0;
        this.inServiceReg = 0;
        this.intRequestReg = 0;
        this.initCommandWords = new Array(4);
        this.opControlWord2 = 0;
        this.opControlWord3 = 0;
        this.writeByteNo = 0;
        this.reset();
    }
    reset() {
        super.reset();
        this.currentInterrupt = null;
        this.pendingInterrupts.length = 0;
        this.writeByteNo = 1;
        this.intMaskReg = 0;
        this.inServiceReg = 0;
        this.intRequestReg = 0;
        this.initCommandWords[1] = this.defaultOffset;
    }
    in(addr) {
        switch (addr) {
            case 0x20:
                {
                    const value = this.opControlWord3 & 0x03;
                    if (value == 2)
                        return this.intRequestReg;
                    if (value == 3) {
                        return this.inServiceReg;
                    }
                }
                break;
            case 0x21:
                if (!this.initializationMode)
                    return this.intMaskReg;
                break;
        }
        return 0;
    }
    out(addr, value, wordTransfer) {
        switch (addr) {
            case 0x20:
                if ((value & 0x10) > 0) {
                    this.initializationMode = true;
                    this.initCommandWords[0] = value & 0xFF;
                    this.reset();
                }
                else {
                    this.initializationMode = false;
                    const ocwSelector = (value >> 3) & 0x03;
                    if (ocwSelector == 0) {
                        this.opControlWord2 = value & 0xFF;
                        const cmd = this.opControlWord2 >> 5;
                        switch (cmd) {
                            case 0x01:
                                this.endOfInterrupt();
                                break;
                            case 0x03:
                                this.endOfInterrupt();
                                break;
                            case 0x05:
                                break;
                            case 0x04:
                                break;
                            case 0x00:
                                break;
                            case 0x07:
                                break;
                            case 0x06:
                                break;
                        }
                    }
                    else if (ocwSelector == 1 && (value & 0x80) == 0) {
                        this.opControlWord3 = value & 0xFF;
                    }
                }
                break;
            case 0x21:
                if (this.initializationMode) {
                    this.initCommandWords[this.writeByteNo++] = value & 0xFF;
                    if (this.writeByteNo == 4 || (this.writeByteNo == 3 && (this.initCommandWords[0] & 0x01) == 0)) {
                        if (this.writeByteNo == 3)
                            this.initCommandWords[3] = 0;
                        this.initializationMode = false;
                    }
                }
                else {
                    this.intMaskReg = value & 0xFF;
                }
                break;
        }
    }
    endOfInterrupt() {
        if (this.currentInterrupt == null)
            return;
        this.inServiceReg &= ~(1 << this.currentInterrupt) & 0xFF;
        if (this.pendingInterrupts.length > 0)
            this.internalDoInterrupt(this.pendingInterrupts.shift());
        else
            this.currentInterrupt = null;
    }
    internalDoInterrupt(intNo) {
        const iVal = (1 << intNo) & 0xFF;
        if ((this.intMaskReg & iVal) == 0) {
            this.doCpuInterrupt(intNo + (this.initCommandWords[1] & 0xF8));
            this.inServiceReg |= iVal;
            this.currentInterrupt = intNo;
        }
    }
    doInterrupt(intNo) {
        const intNoValue = intNo;
        if (this.currentInterrupt == null)
            this.internalDoInterrupt(intNoValue);
        else if (intNo != HardwareInterrupt.Timer || (this.currentInterrupt != intNoValue && !this.pendingInterrupts.includes(intNoValue)))
            this.pendingInterrupts.push(intNoValue);
    }
}
exports.InterruptController = InterruptController;


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

/***/ "./src/E86Lib/Components/mouse.ts":
/*!****************************************!*\
  !*** ./src/E86Lib/Components/mouse.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const uartInterfaces_1 = __webpack_require__(/*! ./uartInterfaces */ "./src/E86Lib/Components/uartInterfaces.ts");
class Mouse extends baseComponent_1.BaseComponent {
    constructor(eventTimer) {
        super();
        this.lastPosition = { x: 0, y: 0 };
        this.eventTimer = eventTimer;
    }
    get dataTerminalReady() {
        return this._dataTerminalReady;
    }
    set dataTerminalReady(value) {
        if (this._dataTerminalReady == value)
            return;
        this._dataTerminalReady = value;
        this.paramsChanged();
    }
    get requestToSend() {
        return this._requestToSend;
    }
    set requestToSend(value) {
        if (this._requestToSend == value)
            return;
        this._requestToSend = value;
        this.paramsChanged();
    }
    get uartPort() {
        return this._uartPort;
    }
    set uartPort(value) {
        if (this._uartPort != null)
            this._uartPort.onSerialParamsChanged = null;
        this._uartPort = value;
        if (this._uartPort != null)
            this._uartPort.onSerialParamsChanged = this.paramsChanged;
    }
    get checkParamsOk() {
        return this.uartPort.baudRate == 1200 && this.uartPort.dataWordLen == 7 &&
            this.uartPort.stopBits == uartInterfaces_1.StopBits.One && this.uartPort.parity == uartInterfaces_1.Parity.None &&
            this.requestToSend && this.dataTerminalReady;
    }
    get transmitBufferEmpty() {
        return true;
    }
    paramsChanged() {
        if (this.checkParamsOk) {
            if (this.eventId != null)
                this.eventTimer.deleteEvent(this.eventId);
            this.eventId = this.eventTimer.setEvent(2500, () => {
                this.uartPort.writeData(0x4D);
                this.paramsOk = true;
                this.eventId = null;
            });
        }
        else
            this.paramsOk = false;
    }
    sendMouseData(deltaX, deltaY, leftButton, rightButton) {
        if (this.paramsOk) {
            let dx = deltaX;
            if (dx < -128)
                dx = -128;
            if (dx > 127)
                dx = 127;
            if (dx < 0)
                dx += 256;
            let dy = deltaY;
            if (dy < -128)
                dy = -128;
            if (dy > 127)
                dy = 127;
            if (dy < 0)
                dy += 256;
            const data = 0x40 +
                (leftButton ? 0x20 : 0) +
                (rightButton ? 0x10 : 0) +
                ((dy & 0xC0) >> 4) +
                ((dx & 0xC0) >> 6);
            this.uartPort.writeData(data & 0xFF);
            this.uartPort.writeData((dx & 0x3F) & 0xFF);
            this.uartPort.writeData((dy & 0x3F) & 0xFF);
        }
    }
    clearTransmitBuffer() {
        return;
    }
    mouseMoveDelta(deltaX, deltaY) {
        this.sendMouseData(deltaX, deltaY, false, false);
    }
    mouseEvent(position, leftButton, rightButton) {
        if (Math.abs(this.lastPosition.x) > 0.1 || Math.abs(this.lastPosition.y) > 0.1) {
            const deltaX = position.x - this.lastPosition.x;
            const deltaY = position.y - this.lastPosition.y;
            this.sendMouseData(deltaX, deltaY, leftButton, rightButton);
        }
        this.lastPosition = position;
    }
    resetMove() {
        this.lastPosition = { x: 0, y: 0 };
    }
}
exports.Mouse = Mouse;


/***/ }),

/***/ "./src/E86Lib/Components/ppi.ts":
/*!**************************************!*\
  !*** ./src/E86Lib/Components/ppi.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ppi = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const interruptController_1 = __webpack_require__(/*! ./interruptController */ "./src/E86Lib/Components/interruptController.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
class Ppi extends baseComponent_1.BaseComponent {
    constructor(pic, onSpeaker) {
        super();
        this.emptyKey = 0;
        this.keyDelay = 500;
        this.keyQueue = new Array();
        this.currentKey = 0;
        this.kbClockLowClockCount = 0;
        this.pic = pic;
        this.onSpeaker = onSpeaker;
    }
    get speakerEnabled() {
        return this._speakerEnabled;
    }
    addScanCode(code) {
        if (this.kbClockLow)
            return;
        if (this.keyEventActive)
            this.keyQueue.push(code);
        else {
            this.keyEventActive = true;
            this.keyQueue.push(code);
            this.eventTimer.setEvent(this.keyDelay, () => this.doKeyEvent());
        }
    }
    in(addr) {
        switch (addr) {
            case 0x60:
                {
                    const key = this.currentKey;
                    return key;
                }
            case 0x61:
                {
                    this.kbRefreshToggle = !this.kbRefreshToggle;
                    let result = 0;
                    if (!this.kbClockLow)
                        result |= 0x40;
                    if (this.kbRefreshToggle)
                        result |= 0x10;
                    if (this.readHighSwitches)
                        result |= 0x08;
                    if (this.speakerData)
                        result |= 0x02;
                    if (this.speakerGate)
                        result |= 0x01;
                    return result;
                }
            case 0x62:
                if (this.readHighSwitches) {
                    const value = settings_1.Settings.graphicsAdapterType == settings_1.GraphicsType.EGA || settings_1.Settings.graphicsAdapterType == settings_1.GraphicsType.VGA ? 0 : (settings_1.Settings.monochromeGraphics ? 3 : 2);
                    return (value + ((settings_1.Settings.floppyCount - 1) << 2)) & 0xFFFF;
                }
                return 0x0D;
            case 0x63:
                return 0;
        }
        return 0;
    }
    out(addr, value, wordTransfer) {
        switch (addr) {
            case 0x60:
                break;
            case 0x61:
                {
                    if ((value & 0x80) > 0) {
                        this.currentKey = this.emptyKey;
                    }
                    const newKbClockLow = (value & 0x40) == 0;
                    if (newKbClockLow != this.kbClockLow) {
                        if (newKbClockLow) {
                            this.kbClockLowClockCount = this.eventTimer.clockCount;
                        }
                        else {
                            if (this.eventTimer.clockCount - this.kbClockLowClockCount >= 12 * settings_1.Settings.cpuFrequency) {
                                this.eventTimer.setEvent(100, () => {
                                    this.keyQueue.length = 0;
                                    this.addScanCode(0xAA);
                                });
                            }
                        }
                        this.kbClockLow = newKbClockLow;
                    }
                    this.speakerGate = (value & 1) > 0;
                    this.speakerData = (value & 2) > 0;
                    const speakerEnabled = this.speakerGate && this.speakerData;
                    const changed = (this.speakerEnabled != speakerEnabled);
                    this._speakerEnabled = speakerEnabled;
                    if (changed)
                        this.onSpeaker();
                    this.readHighSwitches = (value & 8) > 0;
                }
                break;
            case 0x62:
                break;
        }
    }
    doKeyEvent() {
        if (this.keyQueue.length > 0) {
            this.internalAddScanCode(this.keyQueue.shift());
            this.eventTimer.setEvent(this.keyDelay, () => this.doKeyEvent());
        }
        else
            this.keyEventActive = false;
    }
    internalAddScanCode(code) {
        if (!this.kbClockLow) {
            this.currentKey = code;
            this.pic.doInterrupt(interruptController_1.HardwareInterrupt.Keyboard);
        }
    }
}
exports.Ppi = Ppi;


/***/ }),

/***/ "./src/E86Lib/Components/ram.ts":
/*!**************************************!*\
  !*** ./src/E86Lib/Components/ram.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ram = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
class Ram extends baseComponent_1.BaseComponent {
    constructor(sizeKb, offset) {
        super();
        this.offset = 0;
        this.sizeKb = 0;
        this.supportWrite = true;
        this.supportRead = true;
        this.sizeKb = sizeKb;
        this.offset = offset;
        this.memory = new Uint8Array(sizeKb * 1024);
    }
    get addrLo() {
        return this.offset;
    }
    get addrHi() {
        return this.offset + this.sizeKb * 1024;
    }
    peek(addr) {
        if (addr >= this.offset && addr < this.offset + this.memory.length)
            return this.memory[addr - this.offset];
        return 0;
    }
    poke(addr, value) {
        if (addr >= this.offset && addr < this.offset + this.memory.length)
            this.memory[addr - this.offset] = value;
    }
}
exports.Ram = Ram;


/***/ }),

/***/ "./src/E86Lib/Components/realTimeClock.ts":
/*!************************************************!*\
  !*** ./src/E86Lib/Components/realTimeClock.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RealTimeClock = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
class RealTimeClock extends baseComponent_1.BaseComponent {
    constructor(basePort) {
        super();
        this.basePort = 0;
        this.basePort = basePort;
    }
    in(addr) {
        const date = new Date();
        switch (addr - this.basePort) {
            case 0x00:
                return this.calcBcd(date.getMilliseconds() % 100);
            case 0x01:
                return this.calcBcd(Math.trunc(date.getMilliseconds() / 10));
            case 0x02:
                return this.calcBcd(date.getSeconds());
            case 0x03:
                return this.calcBcd(date.getMinutes());
            case 0x04:
                return this.calcBcd(date.getHours());
            case 0x05:
                return this.calcBcd((date.getDay() + 6) % 7 + 1);
            case 0x06:
                return this.calcBcd(date.getDate());
            case 0x07:
                return this.calcBcd(date.getMonth());
            case 0x09:
                return this.calcBcd(date.getFullYear() % 100);
            case 0x10:
                return 0x00;
            case 0x14:
                return 0x00;
        }
        return 0;
    }
    calcBcd(number) {
        return ((number % 10) + (Math.trunc(number / 10) << 4)) & 0xFF;
    }
    out(addr, value, wordTransfer) {
        return;
    }
}
exports.RealTimeClock = RealTimeClock;


/***/ }),

/***/ "./src/E86Lib/Components/rom.ts":
/*!**************************************!*\
  !*** ./src/E86Lib/Components/rom.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rom = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
class Rom extends baseComponent_1.BaseComponent {
    constructor(startAddr) {
        super();
        this.startAddr = 0;
        this.size = 0;
        this.supportWrite = false;
        this.supportRead = true;
        this.startAddr = startAddr;
    }
    async load(fileName) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.responseType = "arraybuffer";
            req.open("GET", settings_1.Settings.baseDir + fileName, true);
            req.onload = () => {
                if (req.status == 200) {
                    const buffer = req.response;
                    this.data = new Uint8Array(buffer);
                    this.size = this.data.length;
                    resolve();
                }
                else
                    reject();
            };
            req.onerror = () => {
                reject();
            };
            req.send();
        });
    }
    getEndAddr() {
        return this.startAddr + this.size - 1;
    }
    peek(addr) {
        return this.data[addr - this.startAddr];
    }
    poke(addr, value) {
        return;
    }
}
exports.Rom = Rom;


/***/ }),

/***/ "./src/E86Lib/Components/timer.ts":
/*!****************************************!*\
  !*** ./src/E86Lib/Components/timer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const interruptController_1 = __webpack_require__(/*! ./interruptController */ "./src/E86Lib/Components/interruptController.ts");
const settings_1 = __webpack_require__(/*! ../settings */ "./src/E86Lib/settings.ts");
var CounterAccess;
(function (CounterAccess) {
    CounterAccess[CounterAccess["LowNibble"] = 0] = "LowNibble";
    CounterAccess[CounterAccess["HighNibble"] = 1] = "HighNibble";
    CounterAccess[CounterAccess["LowAndHigh"] = 2] = "LowAndHigh";
})(CounterAccess || (CounterAccess = {}));
var CountMode;
(function (CountMode) {
    CountMode[CountMode["M16Bit"] = 0] = "M16Bit";
    CountMode[CountMode["Bcd"] = 1] = "Bcd";
})(CountMode || (CountMode = {}));
class Counter {
    constructor(timer, pic, counterNo) {
        this.countsPerSec = 1193180;
        this.countsPerMs = Math.trunc(this.countsPerSec / 1000);
        this.byteNo = 0;
        this.latchValue = 0;
        this._mode = 0;
        this.startValue = 0;
        this.startClockCount = 0;
        this.eventId = 0;
        this.timer = timer;
        this.pic = pic;
        this.counterNo = counterNo;
    }
    get accessMode() {
        return this._accessMode;
    }
    set accessMode(value) {
        this._accessMode = value;
        this.byteNo = 0;
    }
    get frequency() {
        return Math.trunc(this.countsPerSec / this.startValue);
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
        if (this.eventId > 0)
            this.timer.eventTimer.deleteEvent(this.eventId);
        switch (this.mode) {
            case 0:
                break;
            case 1:
                throw new Error("Method not implemented.");
            case 2:
                break;
            case 3:
                break;
            case 4:
                throw new Error("Method not implemented.");
            case 5:
                throw new Error("Method not implemented.");
        }
    }
    calcValue() {
        if (this.isRunning) {
            const elapsedMicroSeconds = Math.trunc(((this.timer.eventTimer.clockCount - this.startClockCount) * 1000) / settings_1.Settings.cpuFrequency);
            return (this.startValue - Math.trunc((elapsedMicroSeconds * this.countsPerMs) / 1000)) & 0xFFFF;
        }
        return 0;
    }
    writeFinished() {
        this.isRunning = true;
        if (this.startValue == 0)
            this.startValue = 0x10000;
        if (this.mode == 3 || this.mode == 2 || this.mode == 0) {
            if (this.eventId > 0)
                this.timer.eventTimer.deleteEvent(this.eventId);
            this.startClockCount = this.timer.eventTimer.clockCount;
            this.eventId = this.timer.eventTimer.setEvent(Math.trunc((this.startValue * 1000) / this.countsPerMs), () => this.onCountZero());
            if (this.onChangeFrequency)
                this.onChangeFrequency();
        }
    }
    onCountZero() {
        if (this.generateTimerInt)
            this.pic.doInterrupt(interruptController_1.HardwareInterrupt.Timer);
        switch (this.mode) {
            case 0:
                this.isRunning = false;
                break;
            case 2:
            case 3:
                this.startClockCount = this.timer.eventTimer.clockCount;
                this.eventId = this.timer.eventTimer.setEvent(Math.trunc((this.startValue * 1000) / this.countsPerMs), () => this.onCountZero());
                break;
        }
    }
    reset() {
        this.mode = 0;
        this.eventId = 0;
        this.isRunning = false;
        this.byteNo = 0;
    }
    write(value) {
        switch (this.accessMode) {
            case CounterAccess.LowNibble:
                this.startValue = ((this.startValue & 0xFF00) | value) & 0xFFFF;
                this.writeFinished();
                break;
            case CounterAccess.HighNibble:
                this.startValue = ((this.startValue & 0x00FF) | (value << 8)) & 0xFFFF;
                this.writeFinished();
                break;
            case CounterAccess.LowAndHigh:
                if (this.byteNo == 0)
                    this.startValue = ((this.startValue & 0xFF00) | value) & 0xFFFF;
                else {
                    this.startValue = ((this.startValue & 0x00FF) | (value << 8)) & 0xFFFF;
                    this.writeFinished();
                }
                this.byteNo = 1 - this.byteNo;
                break;
        }
    }
    read() {
        let result = 0;
        const val = this.isLatched ? this.latchValue : this.calcValue();
        switch (this.accessMode) {
            case CounterAccess.LowNibble:
                result = val & 0xFF;
                this.isLatched = false;
                break;
            case CounterAccess.HighNibble:
                result = (val >> 8) & 0xFF;
                this.isLatched = false;
                break;
            case CounterAccess.LowAndHigh:
                if (this.byteNo == 0)
                    result = (val & 0xFF);
                else {
                    result = (val >> 8) & 0xFF;
                    this.isLatched = false;
                }
                this.byteNo = 1 - this.byteNo;
                break;
        }
        return result;
    }
    doLatch() {
        this.latchValue = this.calcValue();
        this.isLatched = true;
    }
}
class Timer extends baseComponent_1.BaseComponent {
    constructor(pic, onChangeSpeakerFrequency) {
        super();
        this.counters = new Array(3);
        this.memRefreshActive = true;
        for (let idx = 0; idx < this.counters.length; idx++)
            this.counters[idx] = new Counter(this, pic, idx);
        this.counters[0].generateTimerInt = true;
        if (onChangeSpeakerFrequency != null)
            this.counters[2].onChangeFrequency = onChangeSpeakerFrequency;
    }
    get speakerFrequency() {
        return this.counters[2].mode == 3 ? this.counters[2].frequency : 0;
    }
    reset() {
        super.reset();
        for (const counter of this.counters)
            counter.reset();
    }
    in(addr) {
        if (addr >= 0x40 && addr <= 0x42)
            return this.counters[addr - 0x40].read();
        return 0;
    }
    out(addr, value, wordTransfer) {
        if (addr >= 0x40 && addr <= 0x42)
            this.counters[addr - 0x40].write(value & 0xFF);
        if (addr == 0x43) {
            const cntrNo = (value >> 6) & 0x03;
            if (cntrNo > 2)
                return;
            const counter = this.counters[cntrNo];
            const command = (value >> 4) & 0x03;
            const mode = (value >> 1) & 0x07;
            switch (command) {
                case 0:
                    counter.doLatch();
                    break;
                case 1:
                    counter.accessMode = CounterAccess.LowNibble;
                    break;
                case 2:
                    counter.accessMode = CounterAccess.HighNibble;
                    break;
                case 3:
                    counter.accessMode = CounterAccess.LowAndHigh;
                    break;
            }
            if (command != 0) {
                counter.countMode = (value & 1) > 0 ? CountMode.Bcd : CountMode.M16Bit;
                counter.mode = mode;
            }
        }
    }
}
exports.Timer = Timer;


/***/ }),

/***/ "./src/E86Lib/Components/uartInterfaces.ts":
/*!*************************************************!*\
  !*** ./src/E86Lib/Components/uartInterfaces.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Parity = exports.StopBits = void 0;
var StopBits;
(function (StopBits) {
    StopBits[StopBits["One"] = 0] = "One";
    StopBits[StopBits["OnePointFive"] = 1] = "OnePointFive";
    StopBits[StopBits["Two"] = 2] = "Two";
})(StopBits = exports.StopBits || (exports.StopBits = {}));
var Parity;
(function (Parity) {
    Parity[Parity["None"] = 0] = "None";
    Parity[Parity["Odd"] = 1] = "Odd";
    Parity[Parity["Even"] = 2] = "Even";
    Parity[Parity["Mark"] = 3] = "Mark";
    Parity[Parity["Space"] = 4] = "Space";
})(Parity = exports.Parity || (exports.Parity = {}));


/***/ }),

/***/ "./src/E86Lib/Components/uartPort.ts":
/*!*******************************************!*\
  !*** ./src/E86Lib/Components/uartPort.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UartPort = void 0;
const baseComponent_1 = __webpack_require__(/*! ./baseComponent */ "./src/E86Lib/Components/baseComponent.ts");
const uartInterfaces_1 = __webpack_require__(/*! ./uartInterfaces */ "./src/E86Lib/Components/uartInterfaces.ts");
var InterruptCause;
(function (InterruptCause) {
    InterruptCause[InterruptCause["None"] = 0] = "None";
    InterruptCause[InterruptCause["ModemStatusChange"] = 1] = "ModemStatusChange";
    InterruptCause[InterruptCause["TransmitterHoldingRegEmpty"] = 2] = "TransmitterHoldingRegEmpty";
    InterruptCause[InterruptCause["ReceivedDataAvailable"] = 3] = "ReceivedDataAvailable";
    InterruptCause[InterruptCause["LineStatusChange"] = 4] = "LineStatusChange";
    InterruptCause[InterruptCause["CharacterTimeout"] = 5] = "CharacterTimeout";
})(InterruptCause || (InterruptCause = {}));
class UartPort extends baseComponent_1.BaseComponent {
    constructor(port, irq, pic) {
        super();
        this.receiveIrqDelay = 0;
        this.receiveBuffer = new Array();
        this.divisorLatch = 0;
        this.interruptEnableRegister = 0;
        this.lineControlRegister = 0;
        this.scratchRegister = 0;
        this.dmaMode = 0;
        this.dlab = 0;
        this.lastModemStatus = 0;
        this.dataWordLen = 0;
        this.receivedBytesThreshold = 0;
        this.port = port;
        this.irq = irq;
        this.pic = pic;
        this.receivedBytesThreshold = 1;
    }
    getModemStatus() {
        if (this.loopbackMode) {
            return (this.requestToSend ? 0x01 : 0) +
                (this.dataTerminalReady ? 0x02 : 0) +
                (this.auxOutput1 ? 0x04 : 0) +
                (this.auxOutput2 ? 0x08 : 0);
        }
        if (this.serialDevice != null) {
            return (this.serialDevice.clearToSend ? 0x01 : 0) +
                (this.serialDevice.dataSetReady ? 0x02 : 0) +
                (this.serialDevice.ringIndicator ? 0x04 : 0) +
                (this.serialDevice.dataCarrierDetect ? 0x08 : 0);
        }
        return 0;
    }
    in(addr) {
        switch (addr - this.port) {
            case 0:
                if (this.dlab == 0) {
                    let data = 0;
                    if (this.onBeforeReadReceiveBuffer)
                        this.onBeforeReadReceiveBuffer();
                    {
                        if (this.receiveBuffer.length > 0)
                            data = this.receiveBuffer.shift();
                    }
                    {
                        this.clearInterrupt(InterruptCause.ReceivedDataAvailable);
                        this.clearInterrupt(InterruptCause.CharacterTimeout);
                        if ((this.interruptEnableRegister & 0x01) > 0 && this.receiveBuffer.length >= this.receivedBytesThreshold)
                            this.doInterruptWithDelay(InterruptCause.ReceivedDataAvailable, this.receiveIrqDelay);
                    }
                    return data;
                }
                else {
                    return this.divisorLatch & 0xFF;
                }
            case 1:
                if (this.dlab == 0)
                    return this.interruptEnableRegister;
                else {
                    return (this.divisorLatch >> 8) & 0xFFFF;
                }
            case 2:
                {
                    let result = 0;
                    {
                        if (!this.uartInterruptPending)
                            result = 1;
                        switch (this.interruptCause) {
                            case InterruptCause.ModemStatusChange:
                                break;
                            case InterruptCause.TransmitterHoldingRegEmpty:
                                result |= 0x02;
                                this.interruptCause = InterruptCause.None;
                                this.uartInterruptPending = false;
                                break;
                            case InterruptCause.ReceivedDataAvailable:
                                result |= 0x04;
                                break;
                            case InterruptCause.LineStatusChange:
                                result |= 0x06;
                                break;
                            case InterruptCause.CharacterTimeout:
                                result |= 0x0C;
                                break;
                        }
                    }
                    if (this.fifosEnabled)
                        result |= 0xC0;
                    return result & 0xFF;
                }
            case 3:
                return this.lineControlRegister;
            case 4:
                {
                    const result = (this.dataTerminalReady ? 0x01 : 0) +
                        (this.requestToSend ? 0x02 : 0) +
                        (this.auxOutput1 ? 0x04 : 0) +
                        (this.auxOutput2 ? 0x08 : 0) +
                        (this.loopbackMode ? 0x10 : 0);
                    return result & 0xFF;
                }
            case 5:
                {
                    let result = 0;
                    {
                        if (this.receiveBuffer.length > 0)
                            result += 1;
                    }
                    if (this.serialDevice == null || this.serialDevice.transmitBufferEmpty)
                        result |= 0x60;
                    this.clearInterrupt(InterruptCause.LineStatusChange);
                    return result & 0xFF;
                }
            case 6:
                {
                    const modemStatus = this.getModemStatus();
                    let result = ((this.lastModemStatus ^ modemStatus) & 0x0B) + (modemStatus << 4);
                    result += this.trailingEdgeRingIndicator ? 0x04 : 0;
                    this.trailingEdgeRingIndicator = false;
                    this.lastModemStatus = modemStatus;
                    this.clearInterrupt(InterruptCause.ModemStatusChange);
                    return result & 0xFF;
                }
            case 7:
                return this.scratchRegister;
        }
        return 0;
    }
    out(addr, value, wordTransfer) {
        var _a;
        switch (addr - this.port) {
            case 0:
                if (this.dlab == 0) {
                    this.clearInterrupt(InterruptCause.TransmitterHoldingRegEmpty);
                    if (this.loopbackMode) {
                        this.transmitBufferEmpty();
                        this.writeData(value & 0xFF);
                    }
                    else if (this.onTransmit)
                        this.onTransmit(value & 0xFF);
                }
                else {
                    this.divisorLatch = ((this.divisorLatch & 0xFF00) + (value & 0xFF)) & 0xFFFF;
                    this.serialParamsChanged();
                }
                break;
            case 1:
                if (this.dlab == 0) {
                    this.interruptEnableRegister = value & 0x0F;
                }
                else {
                    this.divisorLatch = ((this.divisorLatch & 0x00FF) + (value << 8)) & 0xFFFF;
                    this.serialParamsChanged();
                }
                break;
            case 2:
                this.fifosEnabled = (value & 0x01) > 0;
                if ((value & 0x02) > 0) {
                    this.receiveBuffer.length = 0;
                }
                if ((value & 0x04) > 0)
                    (_a = this.serialDevice) === null || _a === void 0 ? void 0 : _a.clearTransmitBuffer();
                this.dmaMode = (value >> 3) & 0x01;
                switch (value >> 6) {
                    case 0:
                        this.receivedBytesThreshold = 1;
                        break;
                    case 1:
                        this.receivedBytesThreshold = 4;
                        break;
                    case 2:
                        this.receivedBytesThreshold = 8;
                        break;
                    case 3:
                        this.receivedBytesThreshold = 14;
                        break;
                }
                break;
            case 3:
                this.lineControlRegister = value & 0xFF;
                switch (value & 0x03) {
                    case 0:
                        this.dataWordLen = 5;
                        break;
                    case 1:
                        this.dataWordLen = 6;
                        break;
                    case 2:
                        this.dataWordLen = 7;
                        break;
                    case 3:
                        this.dataWordLen = 8;
                        break;
                }
                this.stopBits = (value & 0x04) > 0 ? (this.dataWordLen <= 5 ? uartInterfaces_1.StopBits.OnePointFive : uartInterfaces_1.StopBits.Two) : uartInterfaces_1.StopBits.One;
                if ((value & 0x08) == 0)
                    this.parity = uartInterfaces_1.Parity.None;
                else {
                    switch ((value >> 4) & 0x03) {
                        case 0:
                            this.parity = uartInterfaces_1.Parity.Odd;
                            break;
                        case 1:
                            this.parity = uartInterfaces_1.Parity.Even;
                            break;
                        case 2:
                            this.parity = uartInterfaces_1.Parity.Mark;
                            break;
                        case 3:
                            this.parity = uartInterfaces_1.Parity.Space;
                            break;
                    }
                }
                this.breakSignalEnabled = (value & 0x40) > 0;
                this.dlab = (value >> 7) & 0x01;
                this.serialParamsChanged();
                break;
            case 4:
                {
                    const oldLoopbackMode = this.loopbackMode;
                    this.dataTerminalReady = (value & 0x01) > 0;
                    this.requestToSend = (value & 0x02) > 0;
                    this.auxOutput1 = (value & 0x04) > 0;
                    this.auxOutput2 = (value & 0x08) > 0;
                    this.loopbackMode = (value & 0x10) > 0;
                    if (this.loopbackMode && !oldLoopbackMode)
                        this.lastModemStatus = this.getModemStatus();
                    if (this.loopbackMode)
                        this.modemStatusChanged();
                    if (this.serialDevice != null) {
                        this.serialDevice.dataTerminalReady = this.dataTerminalReady;
                        this.serialDevice.requestToSend = this.requestToSend;
                    }
                }
                break;
            case 5:
                break;
            case 6:
                this.trailingEdgeRingIndicator = (value & 0x04) > 0;
                break;
            case 7:
                this.scratchRegister = value & 0xFF;
                break;
        }
    }
    get baudRate() {
        const freq = 1843200;
        return this.divisorLatch > 0 ? Math.trunc(freq / (this.divisorLatch << 4)) : 0;
    }
    connect(serialDevice) {
        this.serialDevice = serialDevice;
        this.serialDevice.uartPort = this;
        this.serialDevice.onTransmitBufferEmpty = this.transmitBufferEmpty;
    }
    disconnect() {
        this.serialDevice.uartPort = null;
        this.serialDevice = null;
    }
    writeData(data) {
        this.receiveBuffer.push(data);
        if ((this.interruptEnableRegister & 0x01) > 0 && this.receiveBuffer.length >= this.receivedBytesThreshold)
            this.doInterrupt(InterruptCause.ReceivedDataAvailable);
    }
    modemStatusChanged() {
        if ((this.interruptEnableRegister & 0x08) > 0)
            this.doInterrupt(InterruptCause.ModemStatusChange);
    }
    doInterruptWithDelay(interruptCause, delay) {
        if (this.interruptPending)
            return;
        this.interruptPending = true;
        this.eventTimer.setEvent(delay, () => this.doInterrupt(interruptCause));
    }
    doInterrupt(interruptCause) {
        if (this.uartInterruptPending)
            return;
        this.interruptCause = interruptCause;
        this.uartInterruptPending = true;
        this.pic.doInterrupt(this.irq);
        this.interruptPending = false;
    }
    clearInterrupt(interruptCause) {
        if (this.interruptCause == interruptCause) {
            this.interruptCause = InterruptCause.None;
            this.uartInterruptPending = false;
        }
    }
    serialParamsChanged() {
        if (this.onSerialParamsChanged)
            this.onSerialParamsChanged();
        this.receiveBuffer.length = 0;
        if (this.baudRate > 0) {
            this.receiveIrqDelay = Math.trunc(1000000 / this.baudRate);
        }
    }
    transmitBufferEmpty() {
        if ((this.interruptEnableRegister & 0x02) > 0)
            this.doInterrupt(InterruptCause.TransmitterHoldingRegEmpty);
    }
}
exports.UartPort = UartPort;


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

/***/ "./src/E86Lib/Utils/memoryMapper.ts":
/*!******************************************!*\
  !*** ./src/E86Lib/Utils/memoryMapper.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryMapper = void 0;
class MemoryMapper {
    constructor(ramSizeKb) {
        this.extRamStart = 0x10000;
        this.memoryMappings = new Array();
        this.readMappings = new Array();
        this.writeMappings = new Array();
        this.extRamLimit = 0;
        this.supportRead = true;
        this.supportWrite = true;
        const extRamSizeKb = ramSizeKb > 1024 ? ramSizeKb - 1024 : 0;
        this.ram = new Uint8Array(Math.min(ramSizeKb, 640) * 1024);
        this.extRam = new Uint8Array(extRamSizeKb * 1024);
        this.extRamLimit = this.extRamStart + extRamSizeKb;
    }
    peek(addr) {
        if (addr < this.ram.length)
            return this.ram[addr];
        if (addr >= this.extRamStart && addr < this.extRamLimit)
            return this.extRam[addr - this.extRamStart];
        for (let idx = 0; idx < this.readMappings.length; idx++) {
            const mapping = this.readMappings[idx];
            if (mapping.addrLo <= addr && mapping.addrHi >= addr)
                return mapping.provider.peek(addr);
        }
        return 0;
    }
    poke(addr, value) {
        if (addr < this.ram.length) {
            this.ram[addr] = value & 0xFF;
            return;
        }
        if (addr >= this.extRamStart && addr < this.extRamLimit) {
            this.extRam[addr - this.extRamStart] = value & 0xFF;
            return;
        }
        for (let idx = 0; idx < this.readMappings.length; idx++) {
            const mapping = this.readMappings[idx];
            if (mapping.addrLo <= addr && mapping.addrHi >= addr) {
                mapping.provider.poke(addr, value & 0xFF);
                return;
            }
        }
    }
    peekW(addr) {
        if (addr < this.ram.length - 1)
            return this.ram[addr] + (this.ram[addr + 1] << 8);
        if (addr >= this.extRamStart && addr < this.extRamLimit) {
            const extRamAddr = addr - this.extRamStart;
            return this.extRam[extRamAddr] + (this.extRam[extRamAddr + 1] << 8);
        }
        for (let idx = 0; idx < this.readMappings.length; idx++) {
            const mapping = this.readMappings[idx];
            if (mapping.addrLo <= addr && mapping.addrHi >= addr)
                return mapping.provider.peek(addr) + (mapping.provider.peek(addr + 1) << 8);
        }
        return 0;
    }
    pokeW(addr, value) {
        if (addr < this.ram.length - 1) {
            this.ram[addr] = value & 0xFF;
            this.ram[addr + 1] = (value >> 8) & 0xFF;
            return;
        }
        if (addr >= this.extRamStart && addr < this.extRamLimit) {
            const extRamAddr = addr - this.extRamStart;
            this.extRam[extRamAddr] = value & 0xFF;
            this.extRam[extRamAddr + 1] = (value >> 8) & 0xFF;
        }
        for (let idx = 0; idx < this.readMappings.length; idx++) {
            const mapping = this.readMappings[idx];
            if (mapping.addrLo <= addr && mapping.addrHi >= addr) {
                mapping.provider.poke(addr, value & 0xFF);
                mapping.provider.poke(addr + 1, (value >> 8) & 0xFF);
                return;
            }
        }
    }
    peekD(addr) {
        if (addr < this.ram.length - 1)
            return this.ram[addr] + (this.ram[addr + 1] << 8) + (this.ram[addr + 2] << 16) + (this.ram[addr + 3] << 24);
        if (addr >= this.extRamStart && addr < this.extRamLimit) {
            const extRamAddr = addr - this.extRamStart;
            return this.extRam[extRamAddr] + (this.extRam[extRamAddr + 1] << 8) + (this.extRam[extRamAddr + 2] << 16) + (this.extRam[extRamAddr + 3] << 24);
        }
        for (let idx = 0; idx < this.readMappings.length; idx++) {
            const mapping = this.readMappings[idx];
            if (mapping.addrLo <= addr && mapping.addrHi >= addr) {
                return (mapping.provider.peek(addr) + (mapping.provider.peek(addr + 1) << 8)
                    + (mapping.provider.peek(addr + 2) << 16) + (mapping.provider.peek(addr + 3) << 24));
            }
        }
        return 0;
    }
    pokeD(addr, value) {
        if (addr < this.ram.length - 1) {
            this.ram[addr] = value & 0xFF;
            this.ram[addr + 1] = (value >> 8) & 0xFF;
            this.ram[addr + 2] = (value >> 16) & 0xFF;
            this.ram[addr + 3] = (value >> 24) & 0xFF;
            return;
        }
        if (addr >= this.extRamStart && addr < this.extRamLimit) {
            const extRamAddr = addr - this.extRamStart;
            this.extRam[extRamAddr] = value & 0xFF;
            this.extRam[extRamAddr + 1] = (value >> 8) & 0xFF;
            this.extRam[extRamAddr + 2] = (value >> 16) & 0xFF;
            this.extRam[extRamAddr + 3] = (value >> 24) & 0xFF;
        }
        for (let idx = 0; idx < this.readMappings.length; idx++) {
            const mapping = this.readMappings[idx];
            if (mapping.addrLo <= addr && mapping.addrHi >= addr) {
                mapping.provider.poke(addr, value & 0xFF);
                mapping.provider.poke(addr + 1, (value >> 8) & 0xFF);
                mapping.provider.poke(addr + 2, (value >> 16) & 0xFF);
                mapping.provider.poke(addr + 3, (value >> 24) & 0xFF);
                return;
            }
        }
    }
    register(addrLo, addrHigh, provider) {
        this.memoryMappings.push({
            addrLo: addrLo,
            addrHi: addrHigh,
            provider: provider,
            supportRead: provider.supportRead,
            supportWrite: provider.supportWrite
        });
    }
    FinishRegistration() {
        for (const mapping of this.memoryMappings) {
            if (mapping.supportRead)
                this.readMappings.push(mapping);
            if (mapping.supportWrite)
                this.writeMappings.push(mapping);
        }
    }
}
exports.MemoryMapper = MemoryMapper;


/***/ }),

/***/ "./src/E86Lib/Utils/portMapper.ts":
/*!****************************************!*\
  !*** ./src/E86Lib/Utils/portMapper.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PortMapper = void 0;
class PortMapper {
    constructor() {
        this.portMappings = new Array();
    }
    in(addr) {
        for (let idx = 0; idx < this.portMappings.length; idx++) {
            const mapping = this.portMappings[idx];
            if (mapping.portLo <= addr && mapping.portHi >= addr)
                return mapping.provider.in(addr) & 0xFFFF;
        }
        return 0xFFFF;
    }
    out(addr, value, wordTransfer) {
        for (let idx = 0; idx < this.portMappings.length; idx++) {
            const mapping = this.portMappings[idx];
            if (mapping.portLo <= addr && mapping.portHi >= addr) {
                mapping.provider.out(addr, value, wordTransfer);
                return;
            }
        }
    }
    register(portLo, portHi, provider) {
        this.portMappings.push({ provider: provider, portLo: portLo, portHi: portHi });
    }
}
exports.PortMapper = PortMapper;


/***/ }),

/***/ "./src/E86Lib/emulator.ts":
/*!********************************!*\
  !*** ./src/E86Lib/emulator.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emulator = void 0;
const memoryMapper_1 = __webpack_require__(/*! ./Utils/memoryMapper */ "./src/E86Lib/Utils/memoryMapper.ts");
const portMapper_1 = __webpack_require__(/*! ./Utils/portMapper */ "./src/E86Lib/Utils/portMapper.ts");
const cpuUtils_1 = __webpack_require__(/*! ./CPU/cpuUtils */ "./src/E86Lib/CPU/cpuUtils.ts");
const dmaController_1 = __webpack_require__(/*! ./Components/dmaController */ "./src/E86Lib/Components/dmaController.ts");
const interruptController_1 = __webpack_require__(/*! ./Components/interruptController */ "./src/E86Lib/Components/interruptController.ts");
const ppi_1 = __webpack_require__(/*! ./Components/ppi */ "./src/E86Lib/Components/ppi.ts");
const timer_1 = __webpack_require__(/*! ./Components/timer */ "./src/E86Lib/Components/timer.ts");
const hardDisk_1 = __webpack_require__(/*! ./Components/hardDisk */ "./src/E86Lib/Components/hardDisk.ts");
const floppyDisk_1 = __webpack_require__(/*! ./Components/floppyDisk */ "./src/E86Lib/Components/floppyDisk.ts");
const uartPort_1 = __webpack_require__(/*! ./Components/uartPort */ "./src/E86Lib/Components/uartPort.ts");
const mouse_1 = __webpack_require__(/*! ./Components/mouse */ "./src/E86Lib/Components/mouse.ts");
const rom_1 = __webpack_require__(/*! ./Components/rom */ "./src/E86Lib/Components/rom.ts");
const ram_1 = __webpack_require__(/*! ./Components/ram */ "./src/E86Lib/Components/ram.ts");
const settings_1 = __webpack_require__(/*! ./settings */ "./src/E86Lib/settings.ts");
const cpu186_1 = __webpack_require__(/*! ./CPU/cpu186 */ "./src/E86Lib/CPU/cpu186.ts");
const cpu386_1 = __webpack_require__(/*! ./CPU/cpu386 */ "./src/E86Lib/CPU/cpu386.ts");
const disassembler_1 = __webpack_require__(/*! ./CPU/disassembler */ "./src/E86Lib/CPU/disassembler.ts");
const mdaGraphics_1 = __webpack_require__(/*! ./Components/mdaGraphics */ "./src/E86Lib/Components/mdaGraphics.ts");
const realTimeClock_1 = __webpack_require__(/*! ./Components/realTimeClock */ "./src/E86Lib/Components/realTimeClock.ts");
const cgaGraphics_1 = __webpack_require__(/*! ./Components/cgaGraphics */ "./src/E86Lib/Components/cgaGraphics.ts");
const egaGraphics_1 = __webpack_require__(/*! ./Components/egaGraphics */ "./src/E86Lib/Components/egaGraphics.ts");
const vgaGraphics_1 = __webpack_require__(/*! ./Components/vgaGraphics */ "./src/E86Lib/Components/vgaGraphics.ts");
class Emulator {
    constructor(screenUpdateRate) {
        this.components = new Array();
        this.screenUpdateRate = 0;
        this.roms = new Array();
        this.screenUpdateRate = screenUpdateRate;
        this.memMapper = new memoryMapper_1.MemoryMapper(settings_1.Settings.ramAmount);
        this.portMapper = new portMapper_1.PortMapper();
        switch (settings_1.Settings.cpuType) {
            case cpuUtils_1.CpuType.Cpu186:
                this.cpu = new cpu186_1.Cpu186(this.memMapper, this.portMapper);
                break;
            case cpuUtils_1.CpuType.Cpu386:
                this.cpu = new cpu386_1.Cpu386(this.memMapper, this.portMapper);
                break;
        }
        this.disassembler = new disassembler_1.Disassembler(this.cpu, this.memMapper);
    }
    getWorkLoad() {
        return this.cpu.workLoad;
    }
    getInstCount() {
        return this.cpu.instCount;
    }
    changeScreenUpdateRate(value) {
        if (this.screenUpdateRate == value)
            return;
        this.screenUpdateRate = value;
        if (this.graphicsCard != null)
            this.graphicsCard.setScreenUpdateRate(value);
    }
    getCpuName() {
        return this.cpu.getName();
    }
    getAX() {
        return this.cpu.AX;
    }
    getBX() {
        return this.cpu.BX;
    }
    getCX() {
        return this.cpu.CX;
    }
    getDX() {
        return this.cpu.DX;
    }
    getSP() {
        return this.cpu.SP;
    }
    getBP() {
        return this.cpu.BP;
    }
    getSI() {
        return this.cpu.SI;
    }
    getDI() {
        return this.cpu.DI;
    }
    getCS() {
        return this.cpu.CS;
    }
    getDS() {
        return this.cpu.DS;
    }
    getES() {
        return this.cpu.ES;
    }
    getSS() {
        return this.cpu.SS;
    }
    getIP() {
        return this.cpu.IP;
    }
    getFLAGS() {
        return this.cpu.FLAGS;
    }
    getHalt() {
        return this.cpu.halt;
    }
    getInstructionByte() {
        return this.cpu.getInstructionByte();
    }
    getAddressByte() {
        return this.cpu.getAddressByte();
    }
    getScreenWidth() {
        return this.graphicsCard.screenWidth;
    }
    getScreenHeight() {
        return this.graphicsCard.screenHeight;
    }
    updateGraphicDimensions() {
        var _a;
        (_a = this.graphicsCard) === null || _a === void 0 ? void 0 : _a.updateDimensions();
    }
    updateScreen(imageData, imageWidth) {
        var _a;
        (_a = this.graphicsCard) === null || _a === void 0 ? void 0 : _a.updateScreen(imageData, imageWidth);
    }
    dumpMemory(fileName) {
        throw new Error("Method not implemented.");
    }
    getMemByte(address) {
        return this.memMapper.peek(address);
    }
    async prepare() {
        for (const rom of this.roms) {
            this.memMapper.register(rom.startAddr, rom.getEndAddr(), rom);
            this.registerComponent(rom);
        }
        if (settings_1.Settings.enableUma) {
            const ram = new ram_1.Ram(128, 0xD0000);
            this.memMapper.register(ram.addrLo, ram.addrHi, ram);
            this.registerComponent(ram);
        }
        this.dmaController = new dmaController_1.DmaController(this.memMapper, () => this.timer.memRefreshActive);
        this.portMapper.register(0x00, 0x0F, this.dmaController);
        this.portMapper.register(0x80, 0x8F, this.dmaController);
        this.portMapper.register(0xC0, 0xDF, this.dmaController);
        this.registerComponent(this.dmaController);
        this.interruptController = new interruptController_1.InterruptController();
        this.portMapper.register(0x20, 0x21, this.interruptController);
        this.registerComponent(this.interruptController);
        switch (settings_1.Settings.graphicsAdapterType) {
            case settings_1.GraphicsType.MDA:
                this.graphicsCard = new mdaGraphics_1.MdaGraphics();
                this.portMapper.register(0x3B0, 0x3BF, this.graphicsCard);
                this.memMapper.register(0xB0000, 0xB3FFF, this.graphicsCard);
                break;
            case settings_1.GraphicsType.CGA:
                this.graphicsCard = new cgaGraphics_1.CgaGraphics();
                this.portMapper.register(0x3D0, 0x3DF, this.graphicsCard);
                this.memMapper.register(0xB8000, 0xBBFFF, this.graphicsCard);
                break;
            case settings_1.GraphicsType.EGA:
                this.graphicsCard = new egaGraphics_1.EgaGraphics();
                this.portMapper.register(0x3C0, 0x3DF, this.graphicsCard);
                this.memMapper.register(0xA0000, 0xBFFFF, this.graphicsCard);
                break;
            case settings_1.GraphicsType.VGA:
                this.graphicsCard = new vgaGraphics_1.VgaGraphics();
                this.portMapper.register(0x3B0, 0x3DF, this.graphicsCard);
                this.portMapper.register(0x46E8, 0x46E8, this.graphicsCard);
                this.memMapper.register(0xA0000, 0xBFFFF, this.graphicsCard);
                break;
        }
        this.graphicsCard.setScreenUpdateRate(this.screenUpdateRate);
        await this.graphicsCard.loadCharSet();
        this.registerComponent(this.graphicsCard);
        this.ppi = new ppi_1.Ppi(this.interruptController, () => this.onSpeaker());
        this.portMapper.register(0x60, 0x63, this.ppi);
        this.registerComponent(this.ppi);
        this.speakerController = this.ppi;
        this.keyboard = this.ppi;
        this.timer = new timer_1.Timer(this.interruptController, () => this.onSpeaker());
        this.portMapper.register(0x40, 0x5F, this.timer);
        this.registerComponent(this.timer);
        if (settings_1.Settings.enableHdController) {
            this.hardDisk = new hardDisk_1.HardDisk(this.interruptController, this.dmaController);
            await this.hardDisk.loadImages();
            this.portMapper.register(0x320, 0x323, this.hardDisk);
            this.registerComponent(this.hardDisk);
        }
        this.floppyDisk = new floppyDisk_1.FloppyDisk(this.interruptController, this.dmaController);
        this.portMapper.register(0x3F0, 0x3F7, this.floppyDisk);
        this.registerComponent(this.floppyDisk);
        this.mouse = new mouse_1.Mouse(this.cpu);
        if (settings_1.Settings.com1Device != settings_1.ComDevice.None) {
            this.uartPort1 = new uartPort_1.UartPort(0x3F8, interruptController_1.HardwareInterrupt.Serial4, this.interruptController);
            this.portMapper.register(0x3F8, 0x3FF, this.uartPort1);
            this.registerComponent(this.uartPort1);
            this.connectSerialDevice(this.uartPort1, settings_1.Settings.com1Device);
        }
        if (settings_1.Settings.com2Device != settings_1.ComDevice.None) {
            this.uartPort2 = new uartPort_1.UartPort(0x2F8, interruptController_1.HardwareInterrupt.Serial3, this.interruptController);
            this.portMapper.register(0x2F8, 0x2FF, this.uartPort2);
            this.registerComponent(this.uartPort2);
            this.connectSerialDevice(this.uartPort2, settings_1.Settings.com2Device);
        }
        if (settings_1.Settings.enableRtc) {
            const rtc = new realTimeClock_1.RealTimeClock(0x340);
            this.portMapper.register(0x340, 0x357, rtc);
            this.registerComponent(rtc);
        }
        this.memMapper.FinishRegistration();
    }
    connectSerialDevice(uartPort, device) {
        if (device == settings_1.ComDevice.EmulatedMouse)
            uartPort.connect(this.mouse);
    }
    registerComponent(component) {
        this.components.push(component);
        component.eventTimer = this.cpu;
        component.doCpuInterrupt = (no) => this.cpu.doInterrupt(no);
    }
    onSpeaker() {
        var _a;
        (_a = this.soundGenerator) === null || _a === void 0 ? void 0 : _a.setFrequency(this.speakerController.speakerEnabled ? this.timer.speakerFrequency : 0);
    }
    run() {
        this.isRunning = true;
        try {
            this.cpu.reset();
            this.cpu.run();
        }
        finally {
            this.isRunning = false;
        }
    }
    step() {
        this.cpu.execNextInstruction();
    }
    runClocks(clockCount) {
        this.cpu.execInstructions(clockCount);
    }
    get eventTimer() {
        return this.cpu;
    }
    async reset() {
        var _a, _b;
        await ((_a = this.hardDisk) === null || _a === void 0 ? void 0 : _a.saveImages());
        await ((_b = this.floppyDisk) === null || _b === void 0 ? void 0 : _b.saveImages());
        this.cpu.reset();
        for (const component of this.components)
            component.reset();
    }
    async loadRom(filePath, address) {
        const rom = new rom_1.Rom(address);
        await rom.load(filePath);
        this.roms.push(rom);
    }
    async loadDiskImageFromFile(filePath, driveNo) {
        return await this.floppyDisk.loadImageFromFile(filePath, driveNo);
    }
    loadDiskImageFromBuffer(buffer, driveNo) {
        this.floppyDisk.loadImageFromBuffer(buffer, driveNo);
    }
    async ejectDiskImage(driveNo) {
        await this.floppyDisk.ejectImage(driveNo);
    }
    runDebug(writeLine) {
        this.cpu.reset();
        while (!this.cpu.halt) {
            this.disassembler.doDisassemble();
            writeLine(this.disassembler.disassembledLine);
            this.cpu.execNextInstruction();
        }
        writeLine("");
        writeLine("finished.");
    }
    sendKey(code) {
        this.keyboard.addScanCode(code);
    }
    screenMouseEvent(position, leftButton, rightButton) {
        var _a;
        (_a = this.mouse) === null || _a === void 0 ? void 0 : _a.mouseEvent(position, leftButton, rightButton);
    }
    screenMouseReset() {
        this.mouse.resetMove();
    }
    mouseMoveDelta(deltaX, deltaY) {
        this.mouse.mouseMoveDelta(deltaX, deltaY);
    }
    async loadIntoRam(file, address) {
    }
    async loadBios(filePath) {
        const rom = new rom_1.Rom(0);
        await rom.load(filePath);
        rom.startAddr = 0x100000 - rom.size;
        this.roms.push(rom);
    }
}
exports.Emulator = Emulator;


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

/***/ "./src/emulator-worker-impl.ts":
/*!*************************************!*\
  !*** ./src/emulator-worker-impl.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmulatorWorker = void 0;
const settings_1 = __webpack_require__(/*! ./E86Lib/settings */ "./src/E86Lib/settings.ts");
const emulator_1 = __webpack_require__(/*! ./E86Lib/emulator */ "./src/E86Lib/emulator.ts");
class EmulatorWorker {
    constructor(context) {
        this.initialized = false;
        this.running = false;
        this.doReset = false;
        this.intervalLength = 20;
        this.context = context;
        context.onmessage = (ev) => {
            const action = ev.data[0];
            switch (action) {
                case "initialize":
                    if (!this.initialized) {
                        this.screenWorkerPort = ev.data[2];
                        this.initialize(ev.data[1]);
                    }
                    break;
                case "run":
                    this.running = true;
                    this.doRun();
                    break;
                case "stop":
                    this.running = false;
                    break;
                case "reset":
                    this.doReset = true;
                    break;
                case "sendkey":
                    if (this.running)
                        this.emulator.sendKey(ev.data[1]);
                    break;
                case "updatescreen":
                    if (this.running) {
                        this.emulator.updateGraphicDimensions();
                        const json = this.emulator.graphicsCard.getJsonUpdate();
                        const data = this.emulator.graphicsCard.getMemoryData();
                        this.screenWorkerPort.postMessage(["updatescreen", json, this.emulator.getScreenWidth(), this.emulator.getScreenHeight(), ...data]);
                    }
                    break;
                case "loadimage":
                    if (!this.initialized)
                        return;
                    this.emulator.loadDiskImageFromBuffer(ev.data[2], ev.data[1]);
                    break;
                case "mousereset":
                    if (!this.initialized)
                        return;
                    this.emulator.screenMouseReset();
                    break;
                case "mouseevent":
                    {
                        if (!this.initialized)
                            return;
                        const position = ev.data[1];
                        const leftButton = ev.data[2];
                        const rightButton = ev.data[3];
                        this.emulator.screenMouseEvent(position, leftButton, rightButton);
                    }
                    break;
                case "mousemovedelta":
                    {
                        if (!this.initialized)
                            return;
                        const deltaX = ev.data[1];
                        const deltaY = ev.data[2];
                        this.emulator.mouseMoveDelta(deltaX, deltaY);
                    }
                    break;
            }
        };
    }
    async doRun() {
        if (this.doReset) {
            this.doReset = false;
            this.emulator.reset();
        }
        const startTime = new Date();
        this.emulator.runClocks(this.clocksPerInterval);
        const diff = (new Date()).getTime() - startTime.getTime();
        const delay = diff < this.intervalLength ? this.intervalLength - diff : 1;
        if (this.running) {
            setTimeout(() => {
                this.doRun();
            }, delay);
        }
        else
            this.context.postMessage(["stopped"]);
    }
    async initialize(startParameters) {
        settings_1.Settings.baseDir = "../";
        settings_1.Settings.hdImageDir = "HDImages/";
        settings_1.Settings.cpuType = startParameters.cpuType;
        settings_1.Settings.cpuFrequency = startParameters.cpuFrequency;
        settings_1.Settings.ramAmount = startParameters.ramAmount;
        settings_1.Settings.graphicsAdapterType = startParameters.graphicsAdapterType;
        settings_1.Settings.enableHdController = startParameters.enableHdController;
        settings_1.Settings.enableUma = startParameters.enableUma;
        settings_1.Settings.enableRtc = startParameters.enableRtc;
        settings_1.Settings.com1Device = startParameters.com1Device;
        settings_1.Settings.com2Device = startParameters.com2Device;
        this.clocksPerInterval = Math.trunc(settings_1.Settings.cpuFrequency * this.intervalLength);
        this.emulator = new emulator_1.Emulator(startParameters.screenUpdateRate);
        await this.emulator.loadBios("Roms/BIOS/" + startParameters.biosImage);
        switch (settings_1.Settings.graphicsAdapterType) {
            case settings_1.GraphicsType.EGA:
                await this.emulator.loadRom("Roms/EGA/genoa-ega-2.41.rom", 0xC0000);
                break;
            case settings_1.GraphicsType.VGA:
                await this.emulator.loadRom("Roms/VGA/ibm-vga.rom", 0xC0000);
                break;
        }
        if (settings_1.Settings.enableHdController) {
            await this.emulator.loadRom("Roms/Harddisk/IBM_XEBEC_62X0822_1985.BIN", 0xC8000);
        }
        await this.emulator.prepare();
        this.initialized = true;
        this.screenWorkerPort.postMessage(["initialize", settings_1.Settings.graphicsAdapterType, this.emulator.graphicsCard.getJsonInitial()]);
        this.context.postMessage(["initialized"]);
    }
}
exports.EmulatorWorker = EmulatorWorker;


/***/ })

/******/ });
//# sourceMappingURL=emulator-worker.js.map