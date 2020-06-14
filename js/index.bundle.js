!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=11)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=t.ComDevice=t.GraphicsType=void 0;const a=s(2);var n,i;!function(e){e[e.MDA=0]="MDA",e[e.Hercules=1]="Hercules",e[e.CGA=2]="CGA",e[e.EGA=3]="EGA",e[e.VGA=4]="VGA"}(n=t.GraphicsType||(t.GraphicsType={})),function(e){e[e.None=0]="None",e[e.NotConnected=1]="NotConnected",e[e.EmulatedMouse=2]="EmulatedMouse"}(i=t.ComDevice||(t.ComDevice={}));class r{static get monochromeGraphics(){return this.graphicsAdapterType==n.MDA||this.graphicsAdapterType==n.Hercules}}t.Settings=r,r.cpuType=a.CpuType.Cpu186,r.cpuFrequency=4770,r.ramAmount=640,r.floppyCount=2,r.graphicsAdapterType=n.CGA,r.enableHdController=!0,r.enableUma=!0,r.enableRtc=!0,r.com1Device=i.EmulatedMouse,r.com1PortName="",r.com2Device=i.None,r.com2PortName="",r.hdImageDir="HdImages/",r.baseDir="",r.noScreenUpdateWhileRetrace=!0},,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CpuError=t.CpuExCode=t.CpuReg=t.Access=t.CpuMode=t.Repeat=t.Direction=t.CpuType=void 0,function(e){e[e.Cpu186=0]="Cpu186",e[e.Cpu386=1]="Cpu386"}(t.CpuType||(t.CpuType={})),function(e){e[e.RegToRm=0]="RegToRm",e[e.RmToReg=1]="RmToReg"}(t.Direction||(t.Direction={})),function(e){e[e.None=0]="None",e[e.RepZ=1]="RepZ",e[e.RepNz=2]="RepNz"}(t.Repeat||(t.Repeat={})),function(e){e[e.Real=0]="Real",e[e.Protected=1]="Protected",e[e.Virtual8086=2]="Virtual8086"}(t.CpuMode||(t.CpuMode={})),function(e){e[e.Read=0]="Read",e[e.Write=1]="Write"}(t.Access||(t.Access={}));t.CpuReg=class{getLoWord(){return 65535&this.value}setLoWord(e){this.value=(4294901760&this.value)+(65535&e)}getLoByte(){return 255&this.value}setLoByte(e){this.value=(4294967040&this.value)+(255&e)}getHiByte(){return this.value>>8&255}setHiByte(e){this.value=(4294902015&this.value)+((255&e)<<8)}},function(e){e[e.DE=0]="DE",e[e.DB=1]="DB",e[e.BP=3]="BP",e[e.OF=4]="OF",e[e.BR=5]="BR",e[e.UD=6]="UD",e[e.NM=7]="NM",e[e.DF=8]="DF",e[e.TS=10]="TS",e[e.NP=11]="NP",e[e.SS=12]="SS",e[e.GP=13]="GP",e[e.PF=14]="PF",e[e.MF=16]="MF",e[e.AC=17]="AC",e[e.MC=18]="MC",e[e.XF=19]="XF",e[e.VE=20]="VE",e[e.SX=30]="SX"}(t.CpuExCode||(t.CpuExCode={}));t.CpuError=class{constructor(e,t=null){this.exCode=e,this.errorCode=t}}},,,function(e,t,s){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.Utils=t.KeyAction=void 0,function(e){e[e.Press=0]="Press",e[e.Release=1]="Release"}(a=t.KeyAction||(t.KeyAction={}));t.Utils=class{static delay(e){return new Promise(t=>setTimeout(t,e))}static download(e,t){const s=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),s.setAttribute("download",e),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}static getScanCode(e,t){let s=0;switch(e){case"Escape":s=1;break;case"Digit1":s=2;break;case"Digit2":s=3;break;case"Digit3":s=4;break;case"Digit4":s=5;break;case"Digit5":s=6;break;case"Digit6":s=7;break;case"Digit7":s=8;break;case"Digit8":s=9;break;case"Digit9":s=10;break;case"Digit0":s=11;break;case"Minus":s=12;break;case"Equal":s=13;break;case"Backspace":s=14;break;case"Tab":s=15;break;case"KeyQ":s=16;break;case"KeyW":s=17;break;case"KeyE":s=18;break;case"KeyR":s=19;break;case"KeyT":s=20;break;case"KeyY":s=21;break;case"KeyU":s=22;break;case"KeyI":s=23;break;case"KeyO":s=24;break;case"KeyP":s=25;break;case"BracketLeft":s=26;break;case"BracketRight":s=27;break;case"Enter":s=28;break;case"ControlRight":case"ControlLeft":s=29;break;case"KeyA":s=30;break;case"KeyS":s=31;break;case"KeyD":s=32;break;case"KeyF":s=33;break;case"KeyG":s=34;break;case"KeyH":s=35;break;case"KeyJ":s=36;break;case"KeyK":s=37;break;case"KeyL":s=38;break;case"Semicolon":s=39;break;case"Quote":s=40;break;case"Backslash":s=41;break;case"ShiftLeft":s=42;break;case"IntlBackslash":s=43;break;case"KeyZ":s=44;break;case"KeyX":s=45;break;case"KeyC":s=46;break;case"KeyV":s=47;break;case"KeyB":s=48;break;case"KeyN":s=49;break;case"KeyM":s=50;break;case"Comma":s=51;break;case"Period":s=52;break;case"Slash":s=53;break;case"ShiftRight":s=54;break;case"AltRight":case"AltLeft":s=56;break;case"Space":s=57;break;case"CapsLock":s=58;break;case"F1":s=59;break;case"F2":s=60;break;case"F3":s=61;break;case"F4":s=62;break;case"F5":s=63;break;case"F6":s=64;break;case"F7":s=65;break;case"F8":s=66;break;case"F9":s=67;break;case"F10":s=68;break;case"NumLock":s=69;break;case"PageUp":s=73;break;case"PageDown":s=81;break;case"ArrowLeft":s=75;break;case"ArrowRight":s=77;break;case"ArrowUp":s=72;break;case"ArrowDown":s=80;break;case"Home":s=71;break;case"End":s=79;break;case"Delete":s=83;break;case"Insert":s=82}return t==a.Release&&0!=s&&(s+=128),s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScreenHelperAsync=t.AsyncScreenData=t.ScreenHelperSync=t.Dimensions=void 0;t.Dimensions=class{constructor(){this.width=0,this.height=0}};class a{constructor(e){this.frameCount=0,this.screenContainer=document.getElementById("screen-container"),this.screen=document.getElementById("screen"),this.updateFrame=60/e}updateCanvasIfNeeded(e){if((!this.canvas||this.canvas.width!=e.width||this.canvas.height!=e.height)&&0!=e.width&&0!=e.height){const t=this.screenContainer.clientWidth/e.width,s=this.screenContainer.clientHeight/e.height;this.screen.style.transform=`scaleX(${t}) scaleY(${s})`,this.screen.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.width=e.width,this.canvas.height=e.height,this.screen.appendChild(this.canvas),this.renderingContext=this.canvas.getContext("2d"),this.imagedata=this.renderingContext.createImageData(e.width,e.height)}}}t.ScreenHelperSync=class extends a{constructor(e){super(e.screenUpdateRate),this.emulator=e}animationFrame(){if(0==this.frameCount){this.emulator.updateGraphicDimensions();const e={width:this.emulator.getScreenWidth(),height:this.emulator.getScreenHeight()};this.updateCanvasIfNeeded(e),this.renderingContext&&(this.emulator.updateScreen(this.imagedata.data,this.imagedata.width),this.renderingContext.putImageData(this.imagedata,0,0))}++this.frameCount>=this.updateFrame&&(this.frameCount=0),window.requestAnimationFrame(()=>this.animationFrame())}};t.AsyncScreenData=class{};t.ScreenHelperAsync=class extends a{constructor(e){super(e),this.updateFrame=60/e}animationFrame(){this.screenData&&(this.updateCanvasIfNeeded(this.screenData.dim),this.renderingContext&&(this.imagedata.data.set(new Uint8ClampedArray(this.screenData.buffer),0),this.renderingContext.putImageData(this.imagedata,0,0),this.screenData=null)),0==this.frameCount&&this.worker.postMessage(["updatescreen"]),++this.frameCount>=this.updateFrame&&(this.frameCount=0),window.requestAnimationFrame(()=>this.animationFrame())}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.State=void 0;class a{}t.State=a,a.screenUpdateRate=20,a.initializedWorkerCount=0,a.initialized=!1,a.running=!1},,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(7),n=s(5),i=s(12),r=s(14),o=s(6),c=s(15),u=s(16),l=s(17),d=s(18);new class{constructor(){this.screenHelper=new o.ScreenHelperAsync(a.State.screenUpdateRate),this.emuWorker=new l,this.screenWorker=new d,this.workerChannel=new MessageChannel,this.diskImages=new c.DiskImages(this.emuWorker),this.settings=new i.Settings,this.screenHelper.worker=this.emuWorker,this.runButton=document.getElementById("run-button"),this.emuWorker.onmessage=e=>{switch(e.data[0]){case"initialized":this.workerInitialized();break;case"stopped":a.State.running=!1,this.runButton.style.border="1px solid white"}},this.screenWorker.onmessage=e=>{switch(e.data[0]){case"initialized":this.workerInitialized();break;case"screenupdated":{const t=new o.AsyncScreenData;t.dim=e.data[1],t.buffer=e.data[2],t.dim.width>0&&t.dim.height>0&&(this.screenHelper.screenData=t)}}},this.settings.initStartParams(),this.runButton.addEventListener("click",()=>this.run()),document.getElementById("stop-button").addEventListener("click",()=>this.stop()),document.getElementById("reset-button").addEventListener("click",()=>this.reset()),document.addEventListener("keydown",e=>{if(!e.repeat)return this.emuWorker.postMessage(["sendkey",n.Utils.getScanCode(e.code,n.KeyAction.Press)]),e.preventDefault(),e.stopPropagation(),!1}),document.addEventListener("keyup",e=>(this.emuWorker.postMessage(["sendkey",n.Utils.getScanCode(e.code,n.KeyAction.Release)]),e.preventDefault(),e.stopPropagation(),!1))}workerInitialized(){a.State.initializedWorkerCount++,a.State.initializedWorkerCount<2||(window.requestAnimationFrame(()=>this.screenHelper.animationFrame()),a.State.initialized=!0,this.diskImages.transferImagesToEmulator(),u.MouseInput.initialize(this.emuWorker))}initialize(){const e=new r.StartParameters;e.screenUpdateRate=a.State.screenUpdateRate,this.settings.readStartParams(e),this.settings.writeStartParamsToCookie(e),document.getElementById("settings").style.visibility="hidden",this.screenWorker.postMessage(["initialize",this.workerChannel.port2],[this.workerChannel.port2]),this.emuWorker.postMessage(["initialize",e,this.workerChannel.port1],[this.workerChannel.port1])}async run(){if(!a.State.running){if(a.State.running=!0,this.runButton.style.border="1px solid #FF3333",!a.State.initialized)for(this.initialize();!a.State.initialized;)await n.Utils.delay(20);this.emuWorker.postMessage(["run"])}}stop(){a.State.running&&this.emuWorker.postMessage(["stop"])}async reset(){this.emuWorker.postMessage(["reset"])}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=void 0;const a=s(13),n=s(0),i=s(2);t.Settings=class{constructor(){this.biosImageElement=document.getElementById("bios-image"),this.cpuTypeElement=document.getElementById("cpu-type"),this.cpuFrequencyElement=document.getElementById("cpu-frequency"),this.ramAmountElement=document.getElementById("ram-amount"),this.enableUmaElement=document.getElementById("enable-uma"),this.graphicsElement=document.getElementById("graphics"),this.com1Element=document.getElementById("com1"),this.com2Element=document.getElementById("com2"),this.enableRtcElement=document.getElementById("enable-rtc"),this.enableHdControllerElement=document.getElementById("enable-hdcontroller")}fillBiosFiles(e){const t=new XMLHttpRequest;t.responseType="text",t.open("GET","Roms/BIOS/biosfiles.txt",!0),t.onload=()=>{if(200==t.status){const s=t.response.split(/\r?\n/);for(let t of s)if(t=t.trim(),t.length>0){const s=t.startsWith("*");s&&(t=t.substr(1));const a=document.createElement("option");a.value=t,a.innerHTML=t.split(".")[0],(s&&!e||t==e)&&(a.defaultSelected=!0),this.biosImageElement.appendChild(a)}}},t.send()}readStartParams(e){switch(this.cpuTypeElement.value){case"Cpu186":e.cpuType=i.CpuType.Cpu186;break;case"Cpu386":e.cpuType=i.CpuType.Cpu386}switch(e.cpuFrequency=parseInt(this.cpuFrequencyElement.value),e.ramAmount=parseInt(this.ramAmountElement.value),e.enableUma=this.enableUmaElement.checked,this.graphicsElement.value){case"MDA":e.graphicsAdapterType=n.GraphicsType.MDA;break;case"CGA":e.graphicsAdapterType=n.GraphicsType.CGA;break;case"EGA":e.graphicsAdapterType=n.GraphicsType.EGA;break;case"VGA":e.graphicsAdapterType=n.GraphicsType.VGA}switch(this.com1Element.value){case"None":e.com1Device=n.ComDevice.None;break;case"NotConnected":e.com1Device=n.ComDevice.NotConnected;break;case"EmulatedMouse":e.com1Device=n.ComDevice.EmulatedMouse}switch(this.com2Element.value){case"None":e.com2Device=n.ComDevice.None;break;case"NotConnected":e.com2Device=n.ComDevice.NotConnected;break;case"EmulatedMouse":e.com2Device=n.ComDevice.EmulatedMouse}e.enableRtc=this.enableRtcElement.checked,e.enableHdController=this.enableHdControllerElement.checked,e.biosImage=this.biosImageElement.value}writeStartParamsToCookie(e){a.set("settings",encodeURI(JSON.stringify(e)),{expires:365})}initStartParams(){const e=a.get("settings");if(e){const t=JSON.parse(decodeURI(e));this.cpuTypeElement.value=i.CpuType[t.cpuType],this.cpuFrequencyElement.value=t.cpuFrequency.toString(),this.ramAmountElement.value=t.ramAmount.toString(),this.enableUmaElement.checked=t.enableUma,this.graphicsElement.value=n.GraphicsType[t.graphicsAdapterType],this.com1Element.value=n.ComDevice[t.com1Device],this.com2Element.value=n.ComDevice[t.com2Device],this.enableRtcElement.checked=t.enableRtc,this.enableHdControllerElement.checked=t.enableHdController,this.fillBiosFiles(t.biosImage)}else this.fillBiosFiles()}}},function(e,t,s){var a,n;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(n="function"==typeof(a=i)?a.call(t,s,t,e):a)||(e.exports=n),!0,e.exports=i(),!!0){var r=window.Cookies,o=window.Cookies=i();o.noConflict=function(){return window.Cookies=r,o}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var s=arguments[e];for(var a in s)t[a]=s[a]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function s(a){function n(){}function i(t,s,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},n.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var r=JSON.stringify(s);/^[\{\[]/.test(r)&&(s=r)}catch(e){}s=a.write?a.write(s,t):encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o="";for(var c in i)i[c]&&(o+="; "+c,!0!==i[c]&&(o+="="+i[c].split(";")[0]));return document.cookie=t+"="+s+o}}function r(e,s){if("undefined"!=typeof document){for(var n={},i=document.cookie?document.cookie.split("; "):[],r=0;r<i.length;r++){var o=i[r].split("="),c=o.slice(1).join("=");s||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var u=t(o[0]);if(c=(a.read||a)(c,u)||t(c),s)try{c=JSON.parse(c)}catch(e){}if(n[u]=c,e===u)break}catch(e){}}return e?n[e]:n}}return n.set=i,n.get=function(e){return r(e,!1)},n.getJSON=function(e){return r(e,!0)},n.remove=function(t,s){i(t,"",e(s,{expires:-1}))},n.defaults={},n.withConverter=s,n}((function(){}))}))},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StartParameters=void 0;t.StartParameters=class{}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiskImages=void 0;const a=s(7);t.DiskImages=class{constructor(e){this.driveLetters=["a","b"],this.driveFileElement=new Array(2),this.driveImageName=new Array(2),this.buffer=new Array(2),this.emuWorker=e,this.initDrive(0),this.initDrive(1)}initDrive(e){const t=this.driveLetters[e];this.driveFileElement[e]=document.getElementById(`drive${t}-file`),this.driveImageName[e]=document.getElementById(`drive${t}-image`),document.getElementById(`drive${t}-button`).addEventListener("click",t=>{this.driveFileElement[e].click(),t.preventDefault()}),this.driveFileElement[e].onchange=async()=>{const t=this.driveFileElement[e].files[0];t&&(this.buffer[e]=await t.arrayBuffer(),this.driveImageName[e].innerHTML=t.name,await this.transferImagesToEmulator())}}async transferImagesToEmulator(){a.State.running&&a.State.initialized&&(this.transferImageToEmulator(0),this.transferImageToEmulator(1))}transferImageToEmulator(e){this.buffer[e]&&(this.emuWorker.postMessage(["loadimage",e,this.buffer[e]],[this.buffer[e]]),this.buffer[e]=null)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MouseInput=void 0;class a{static initialize(e){const t=document.getElementById("screen-border");t.addEventListener("mouseenter",t=>{e.postMessage(["mousereset"])}),t.addEventListener("mousemove",t=>{const s={x:t.offsetX,y:t.offsetY};e.postMessage(["mouseevent",s,this.leftButton,this.rightButton])}),t.addEventListener("mousedown",t=>{const s={x:t.offsetX,y:t.offsetY};switch(t.button){case 0:this.leftButton=!0;break;case 1:this.rightButton=!0}e.postMessage(["mouseevent",s,this.leftButton,this.rightButton])}),t.addEventListener("mouseup",t=>{const s={x:t.offsetX,y:t.offsetY};switch(t.button){case 0:this.leftButton=!1;break;case 1:this.rightButton=!1}e.postMessage(["mouseevent",s,this.leftButton,this.rightButton])})}}t.MouseInput=a,a.leftButton=!1,a.rightButton=!1},function(e,t,s){e.exports=function(){return new Worker(s.p+"js/emulator-worker.js")}},function(e,t,s){e.exports=function(){return new Worker(s.p+"js/screen-worker.js")}}]);
//# sourceMappingURL=index.bundle.js.map