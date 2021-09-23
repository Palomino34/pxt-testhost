var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>
var pxsim;
(function (pxsim) {
    var PinName;
    (function (PinName) {
        /* GHI Changed
        export let LIGHT = -1; // adc
        export let TEMPERATURE = -1; // adc
    
        export let SCL = -1; // pwm
        export let SDA = -1; // pwm
        export let RX = -1; // pwm
        export let TX = -1; // pwm

        export let AN = -1; // analog
        export let RST = -1; // analog
        export let CS = -1; // analog
        export let PWM = -1; // pwm
        export let INT = -1; // pwm

    
        export let SCK = -1; //
        export let MISO = -1; //
        export let MOSI = -1; //
        
        // accelerometer and screen are on the same I2C as external
        export let ACCELEROMETER_SDA = -1;
        export let ACCELEROMETER_SCL = -1;
        export let ACCELEROMETER_INT = -1;

        export let SERVO_1 = -1;
        export let SERVO_2 = -1;
        */
        PinName.P0 = -1;
        PinName.P1 = -1;
        PinName.P2 = -1;
        PinName.P3 = -1;
        PinName.P4 = -1;
        PinName.P5 = -1;
        PinName.P6 = -1;
        PinName.P7 = -1;
        PinName.P8 = -1;
        PinName.P9 = -1;
        PinName.P10 = -1;
        PinName.P11 = -1;
        PinName.P12 = -1;
        PinName.P13 = -1;
        PinName.P14 = -1;
        PinName.P15 = -1;
        PinName.P16 = -1;
        PinName.SCL = -1;
        PinName.SDA = -1;
        function initPins() {
            var v = PinName;
            for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
                var k = _a[_i];
                var key = pxsim.getConfigKey("PIN_" + k);
                if (key != null) {
                    v[k] = pxsim.getConfig(key);
                }
            }
        }
        PinName.initPins = initPins;
    })(PinName = pxsim.PinName || (pxsim.PinName = {}));
    var paletteSrc = [
        "#000000",
        "#00FFFF",
    ];
    var DalBoard = /** @class */ (function (_super) {
        __extends(DalBoard, _super);
        function DalBoard() {
            var _this = _super.call(this) || this;
            // ledState: LedState;
            // matrixLedState: LedState[];
            _this.invertAccelerometerYAxis = true;
            PinName.initPins();
            _this._neopixelState = {};
            _this.bus.setNotify(1023 /* DEVICE_ID_NOTIFY */, 1022 /* DEVICE_ID_NOTIFY_ONE */);
            // IDs do matter!
            _this.buttonState = new pxsim.CommonButtonState([
                new pxsim.CommonButton(45),
                new pxsim.CommonButton(23),
            ]);
            //this.builtinParts["lightbulb"] = this.lightBulbState = new LightBulbState();
            _this.builtinParts["accelerometer"] = _this.accelState = new pxsim.AccelState();
            _this.builtinParts["switch"] = _this.slideSwitchState = new pxsim.SlideSwitchState();
            _this.builtinParts["audio"] = _this.audioState = new pxsim.AudioState();
            _this.builtinParts["lightsensor"] = _this.lightSensorState = new pxsim.AnalogSensorState(17 /* DEVICE_ID_LIGHT_SENSOR */, 0, 255);
            _this.builtinParts["thermometer"] = _this.thermometerState = new pxsim.AnalogSensorState(8 /* DEVICE_ID_THERMOMETER */, -5, 50);
            _this.builtinParts["screen"] = _this.screenState = new pxsim.ScreenState(paletteSrc, 128, 64);
            _this.builtinParts["accelerometer"] = _this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
            _this.builtinParts["edgeconnector"] = _this.edgeConnectorState = new pxsim.EdgeConnectorState({
                pins: [
                    /* GHI changed
                        pxsim.PinName.SERVO_1,
                        pxsim.PinName.SERVO_2,
                        pxsim.PinName.SCL,
                        pxsim.PinName.SDA,
                        pxsim.PinName.RX,
                        pxsim.PinName.TX,
                        pxsim.PinName.AN,
                        pxsim.PinName.RST,
                        pxsim.PinName.CS,
                        pxsim.PinName.PWM,
                        pxsim.PinName.INT,
                    */
                    pxsim.PinName.P0,
                    pxsim.PinName.P1,
                    pxsim.PinName.P2,
                    pxsim.PinName.P3,
                    pxsim.PinName.P4,
                    pxsim.PinName.P5,
                    pxsim.PinName.P6,
                    pxsim.PinName.P7,
                    pxsim.PinName.P8,
                    pxsim.PinName.P9,
                    pxsim.PinName.P10,
                    pxsim.PinName.P11,
                    pxsim.PinName.P12,
                    pxsim.PinName.P13,
                    pxsim.PinName.P14,
                    pxsim.PinName.P15,
                    pxsim.PinName.P16,
                    pxsim.PinName.SCL,
                    pxsim.PinName.SDA,
                ]
            });
            _this.builtinParts["microservo"] = _this.edgeConnectorState;
            _this.builtinVisuals["microservo"] = function () { return new pxsim.visuals.MicroServoView(); };
            _this.builtinPartVisuals["microservo"] = function (xy) { return pxsim.visuals.mkMicroServoPart(xy); };
            return _this;
            // this.builtinParts["led"] = this.ledState = new LedState(runtime);
            // this.matrixLedState = new Array(25)
            // for (let i = 0; i < 25; i++) {
            // this.matrixLedState[i] = new LedState(runtime);
            // }
            // this.builtinParts["matrixLedState"] = this.matrixLedState;
        }
        DalBoard.prototype.receiveMessage = function (msg) {
            if (!pxsim.runtime || pxsim.runtime.dead)
                return;
            switch (msg.type || "") {
                case "eventbus": {
                    var ev = msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                }
                case "serial": {
                    var data = msg.data || "";
                    // TODO
                    break;
                }
            }
        };
        DalBoard.prototype.initAsync = function (msg) {
            _super.prototype.initAsync.call(this, msg);
            var options = (msg.options || {});
            var boardDef = msg.boardDefinition;
            var cmpsList = msg.parts;
            var cmpDefs = msg.partDefinitions || {};
            var fnArgs = msg.fnArgs;
            var opts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
            };
            var viewHost = new pxsim.visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual
            }), opts);
            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = viewHost.getView());
            this.accelerometerState.attachEvents(this.view);
            return Promise.resolve();
        };
        DalBoard.prototype.screenshot = function () {
            return pxsim.svg.toDataUri(new XMLSerializer().serializeToString(this.view));
        };
        DalBoard.prototype.tryGetNeopixelState = function (pinId) {
            return this._neopixelState[pinId];
        };
        DalBoard.prototype.neopixelState = function (pinId) {
            var state = this._neopixelState[pinId];
            if (!state)
                state = this._neopixelState[pinId] = new pxsim.CommonNeoPixelState();
            return state;
        };
        DalBoard.prototype.defaultNeopixelPin = function () {
            return undefined;
        };
        DalBoard.prototype.getDefaultPitchPin = function () {
            return undefined;
        };
        return DalBoard;
    }(pxsim.CoreBoard));
    pxsim.DalBoard = DalBoard;
    function initRuntimeWithDalBoard() {
        pxsim.U.assert(!pxsim.runtime.board);
        var b = new DalBoard();
        pxsim.runtime.board = b;
        pxsim.runtime.postError = function (e) {
            // TODO
            pxsim.runtime.updateDisplay();
        };
    }
    pxsim.initRuntimeWithDalBoard = initRuntimeWithDalBoard;
    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var AccelState = /** @class */ (function () {
        function AccelState() {
        }
        AccelState.prototype.GetX = function () {
        };
        AccelState.prototype.GetY = function () {
        };
        AccelState.prototype.GetZ = function () {
        };
        return AccelState;
    }());
    pxsim.AccelState = AccelState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var input;
    (function (input) {
        function ReadX() {
            var acc = pxsim.board().accelState;
            acc.GetX();
            pxsim.runtime.queueDisplayUpdate();
        }
        input.ReadX = ReadX;
        function ReadY() {
            var acc = pxsim.board().accelState;
            acc.GetY();
            pxsim.runtime.queueDisplayUpdate();
        }
        input.ReadY = ReadY;
        function ReadZ() {
            var acc = pxsim.board().accelState;
            acc.GetZ();
            pxsim.runtime.queueDisplayUpdate();
        }
        input.ReadZ = ReadZ;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var game;
    (function (game) {
        function takeScreenshot() {
        }
        game.takeScreenshot = takeScreenshot;
    })(game = pxsim.game || (pxsim.game = {}));
})(pxsim || (pxsim = {}));
// namespace pxsim {
// export class LedState {
// private on: boolean;
// private needUpdate: boolean;
// animationQ: AnimationQueue;
// constructor(runtime: Runtime) {
// this.animationQ = new AnimationQueue(runtime);
// }
// setState(on: boolean) {
// this.on = on;        
// }
// getState(): boolean {
// return this.on;
// }
// }		
// }
// namespace pxsim.led {
// export function __setLed(on: boolean): void {
// const led = (board() as DalBoard).ledState;
// led.setState(on);
// runtime.queueDisplayUpdate();
// }
// } 
var pxsim;
(function (pxsim) {
    // export class LedState {
    // private on: boolean;
    // setState(on: boolean) {
    // this.on = on;        
    // }
    // getState(): boolean {
    // return this.on;
    // }
    // }
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(width, data) {
            var _this = _super.call(this) || this;
            _this.width = width;
            _this.data = data;
            _this.height = (_this.data.length / _this.width) | 0;
            return _this;
        }
        // public print() {
        // console.debug(`Image id:${this.id} size:${this.width}x${this.height}`)
        // }
        Image.prototype.get = function (x, y) {
            x = x | 0;
            y = y | 0;
            if (x < 0 || x >= this.width || y < 0 || y >= this.height)
                return 0;
            return this.data[y * this.width + x];
        };
        return Image;
    }(pxsim.RefObject));
    pxsim.Image = Image;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var leds;
    (function (leds_1) {
        var needMatrixLedUpDate;
        function getMatrixLedUpdateState() {
            return needMatrixLedUpDate;
        }
        leds_1.getMatrixLedUpdateState = getMatrixLedUpdateState;
        function setMatrixLedUpdateState(state) {
            needMatrixLedUpDate = state;
        }
        leds_1.setMatrixLedUpdateState = setMatrixLedUpdateState;
        function __setMatrixLeds(leds, interval) {
            // const ledMatrix = (board() as DalBoard).matrixLedState;
            // for (let y = 0; y < leds.height; y++) 
            // {
            // for (let x = 0; x < leds.width; x++) {
            // if (leds.get(x, y) != 0)
            // {
            // ledMatrix[y * leds.width + x].setState(true);
            // }
            // else {
            // ledMatrix[y * leds.width + x].setState(false);
            // }
            // }
            // }
            // let cb = getResume();
            // let first = true;
            // interval = 400;
            // ledMatrix[0].animationQ.enqueue({
            // interval,
            // frame: () => {
            // if (first) {
            // setMatrixLedUpdateState(true);                    
            // first = false;
            // return true;
            // }
            // return false;
            // },
            // whenDone: cb
            // })
        }
        leds_1.__setMatrixLeds = __setMatrixLeds;
        function setMatrixLeds(leds, interval) {
        }
        leds_1.setMatrixLeds = setMatrixLeds;
    })(leds = pxsim.leds || (pxsim.leds = {}));
})(pxsim || (pxsim = {}));
/*
namespace pxsim {

    export class LightBulbState {
        private r: number;
        private g: number;
        private b: number;

        setColor(r: number, g: number, b: number) {
            this.r = r;
            this.g = g;
            this.b = b;
        }

        getColor(): [number, number, number] {
            return [this.r, this.g, this.b];
        }
    }
}

namespace pxsim.lightbulb {
    export function __setRGBLed(r: number, g: number, b: number): void {
        const led = (board() as DalBoard).lightBulbState;
        led.setColor(r, g, b);
        runtime.queueDisplayUpdate();
    }
}
*/ 
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        var MB_STYLE = "\n        svg.sim {\n            box-sizing: border-box;\n            width: 100%;\n            height: 100%;\n            display: block;\n        }\n        svg.sim.grayscale {\n            -moz-filter: grayscale(1);\n            -webkit-filter: grayscale(1);\n            filter: grayscale(1);\n        }\n        .sim-button {\n            pointer-events: none;\n        }\n\n        .sim-button-outer {\n            cursor: pointer;\n        }\n        .sim-button-outer:hover {\n            stroke-width: 1px;\n            stroke: orange !important;\n        }\n        .sim-button-nut {\n            fill:#704A4A;\n            pointer-events:none;\n        }\n        .sim-button-nut:hover {\n            stroke:1px solid #704A4A;\n        }\n        .sim-pin-touch:hover {\n            stroke:#D4AF37;\n            stroke-width:1px;\n        }\n\n        .sim-pin-touch.touched:hover {\n            stroke:darkorange;\n        }\n\n        .sim-led-back:hover {\n            stroke:#fff;\n            stroke-width:3px;\n        }\n        .sim-led:hover {\n            stroke:#ff7f7f;\n            stroke-width:3px;\n        }\n\n        .sim-systemled {\n            fill:#333;\n            stroke:#555;\n            stroke-width: 1px;\n        }\n          \n         .sim-drawcircle {\n           \n            stroke:#42c5f4;\n            stroke-width: 6px;\n           \n        }\n\n        .sim-light-level-button {\n            stroke:#f1c40f;\n            stroke-width: 1px;\n        }\n\n        .sim-pin-level-button {\n            stroke:darkorange;\n            stroke-width: 1px;\n        }\n\n        .sim-sound-level-button {\n            stroke:#7f8c8d;\n            stroke-width: 1px;\n        }\n\n        .sim-antenna {\n            stroke:#555;\n            stroke-width: 2px;\n        }\n\n        .sim-text {\n            font-family:\"Lucida Console\", Monaco, monospace;\n            font-size: 40px;\n            fill: #000;\n        }\n        .sim-text, svg.sim text {\n            pointer-events: none; user-select: none;\n        }\n        .sim-text.small {\n            font-size:6px;\n        }\n        .sim-text.inverted {\n            fill:#000;\n        }\n\n        .sim-text-pin {\n            font-family:\"Lucida Console\", Monaco, monospace;\n            font-size:5px;\n            fill:#fff;\n            pointer-events: none;\n        }\n\n        .sim-thermometer {\n        }\n\n        #rgbledcircle:hover {\n            r:8px;\n        }\n\n        #SLIDE_HOVER {\n            cursor: pointer;\n        }\n        .sim-slide-switch:hover #SLIDE_HOVER {\n            stroke:orange !important;\n            stroke-width: 1px;\n        }\n\n        .sim-slide-switch-inner.on {\n            fill:#ff0000 !important;\n        }\n\n        /* animations */\n        .sim-theme-glow {\n            animation-name: sim-theme-glow-animation;\n            animation-timing-function: ease-in-out;\n            animation-direction: alternate;\n            animation-iteration-count: infinite;\n            animation-duration: 1.25s;\n        }\n        @keyframes sim-theme-glow-animation {\n            from { opacity: 1; }\n            to   { opacity: 0.75; }\n        }\n\n        .sim-flash {\n            animation-name: sim-flash-animation;\n            animation-duration: 0.1s;\n        }\n\n        @keyframes sim-flash-animation {\n            from { fill: yellow; }\n            to   { fill: default; }\n        }\n\n        .sim-flash-stroke {\n            animation-name: sim-flash-stroke-animation;\n            animation-duration: 0.4s;\n            animation-timing-function: ease-in;\n        }\n\n        @keyframes sim-flash-stroke-animation {\n            from { stroke: yellow; }\n            to   { stroke: default; }\n        }\n\n\n        .sim-sound-stroke {\n            stroke-width: 10px;\n            animation-name: sim-sound-stroke-animation;\n            animation-duration: 0.4s;\n        }\n\n        @keyframes sim-sound-stroke-animation {\n            from { stroke: yellow; }\n            to   { stroke: default; }\n        }\n\n        /* wireframe */\n        .sim-wireframe * {\n            fill: none;\n            stroke: black;\n        }\n        .sim-wireframe .sim-display,\n        .sim-wireframe .sim-led,\n        .sim-wireframe .sim-led-back,\n        .sim-wireframe .sim-head,\n        .sim-wireframe .sim-theme,\n        .sim-wireframe .sim-button-group,\n        .sim-wireframe .sim-button-label,\n        .sim-wireframe .sim-button,\n        .sim-wireframe .sim-text-pin\n        {\n            visibility: hidden;\n        }\n        .sim-wireframe .sim-label\n        {\n            stroke: none;\n            fill: #777;\n        }\n        .sim-wireframe .sim-board {\n            stroke-width: 2px;\n        }\n        *:focus {\n            outline: none;\n        }\n        .sim-button-outer:focus,\n        .sim-slide-switch:focus,\n        .sim-pin:focus,\n        .sim-thermometer:focus,\n        .sim-button-group:focus .sim-button-outer,\n        .sim-light-level-button:focus,\n        .sim-sound-level-button:focus {\n            stroke: #4D90FE;\n            stroke-width: 2px !important;\n         }\n        .no-drag {\n            user-drag: none;\n            user-select: none;\n            -moz-user-select: none;\n            -webkit-user-drag: none;\n            -webkit-user-select: none;\n            -ms-user-select: none;\n        }\n    ";
        var pinNames = [];
        var MB_WIDTH = 1795.6;
        var MB_HEIGHT = 1027.79999;
        visuals.themes = ["#3ADCFE"].map(function (accent) {
            return {
                accent: accent,
                pin: "#D4AF37",
                pinTouched: "#FFA500",
                pinActive: "#FF5500",
                ledOn: "#ff7777",
                ledOff: "transparent",
                buttonOuter: "#979797",
                buttonUps: ["#000", "#000", "#000", "#000"],
                buttonDown: "#FFA500",
                virtualButtonDown: "#FFA500",
                virtualButtonOuter: "#333",
                virtualButtonUp: "#FFF",
                lightLevelOn: "yellow",
                lightLevelOff: "#555",
                soundLevelOn: "#7f8c8d",
                soundLevelOff: "#555",
                gestureButtonOn: "#FFA500",
                gestureButtonOff: "#B4009E"
            };
        });
        function randomTheme() {
            return visuals.themes[Math.floor(Math.random() * visuals.themes.length)];
        }
        visuals.randomTheme = randomTheme;
        var BrainPadBoardSvg = /** @class */ (function () {
            function BrainPadBoardSvg(props) {
                var _this = this;
                this.props = props;
                this.pinNmToCoord = {};
                // private led:SVGCircleElement;
                this.counter = 0;
                this.lastFlashTime = 0;
                this.fixPinIds();
                this.buildDom();
                if (props && props.wireframe)
                    pxsim.svg.addClass(this.element, "sim-wireframe");
                if (props && props.theme)
                    this.updateTheme();
                if (props && props.runtime) {
                    this.board = this.props.runtime.board;
                    this.board.updateSubscribers.push(function () { return _this.updateState(); });
                    this.updateState();
                    this.attachEvents();
                    this.initScreen();
                }
                //getResume();
            }
            BrainPadBoardSvg.prototype.fixPinIds = function () {
                /* GHI changed
                for (let pn of pinNames) {
                    let key = getConfigKey(pn.name);
                    if (key != null)
                        pn.id = getConfig(key);
                }
                */
            };
            BrainPadBoardSvg.prototype.flush = function () {
            };
            BrainPadBoardSvg.prototype.initScreen = function () {
                var _this = this;
                var requested = false;
                this.screenCanvas.width = this.board.screenState.width;
                this.screenCanvas.height = this.board.screenState.height;
                var ctx = this.screenCanvas.getContext("2d");
                ctx.imageSmoothingEnabled = false;
                var imgdata = ctx.getImageData(0, 0, this.board.screenState.width, this.board.screenState.height);
                var arr = new Uint32Array(imgdata.data.buffer);
                // this.board.screenState.onChange = () => {
                // arr.set(this.board.screenState.screen)
                // runtime.queueDisplayUpdate();
                // ctx.putImageData(imgdata, 0, 0)
                // this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.screenCanvas.toDataURL());
                // window.requestAnimationFrame(this.flush)
                // }
                this.board.screenState.onChange = function () {
                    var flush = function () {
                        requested = false;
                        ctx.putImageData(imgdata, 0, 0);
                        _this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", _this.screenCanvas.toDataURL());
                    };
                    // after we did one-time setup, redefine ourselves to be quicker
                    _this.board.screenState.onChange = function () {
                        arr.set(_this.board.screenState.screen);
                        // paint rect
                        pxsim.runtime.queueDisplayUpdate();
                        if (!requested) {
                            requested = true;
                            ctx.putImageData(imgdata, 0, 0);
                            _this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", _this.screenCanvas.toDataURL());
                            window.requestAnimationFrame(flush);
                        }
                    };
                    // and finally call the redefined self
                    _this.board.screenState.onChange();
                };
            };
            BrainPadBoardSvg.prototype.getView = function () {
                return {
                    el: this.element,
                    y: 0,
                    x: 0,
                    w: MB_WIDTH,
                    h: MB_HEIGHT
                };
            };
            BrainPadBoardSvg.prototype.getCoord = function (pinNm) {
                /* GHI changed
                return this.pinNmToCoord[pinNm];
                */
                return null;
            };
            BrainPadBoardSvg.prototype.highlightPin = function (pinNm) {
                //TODO: for instructions
            };
            BrainPadBoardSvg.prototype.getPinDist = function () {
                return 10;
            };
            BrainPadBoardSvg.prototype.recordPinCoords = function () {
                /* GHI changed
                pinNames.forEach((pin, i) => {
                    const nm = pin.name;
                    const p = this.pins[i];
                    const r = p.getBoundingClientRect();
                    this.pinNmToCoord[nm] = [r.left + r.width / 2, r.top + r.height / 2];
                });
                console.log(JSON.stringify(this.pinNmToCoord, null, 2))
                */
            };
            BrainPadBoardSvg.prototype.updateTheme = function () {
                var theme = this.props.theme;
                // GHI changed svg.fills(this.buttonsOuter, theme.buttonOuter);
                pxsim.svg.fill(this.buttons[0], theme.buttonUps[0]);
                pxsim.svg.fill(this.buttons[1], theme.buttonUps[1]);
                // if (this.shakeButtonGroup) {
                //     svg.fill(this.shakeButtonGroup, this.props.theme.gestureButtonOff);
                // }
                pxsim.svg.setGradientColors(this.lightLevelGradient, theme.lightLevelOn, theme.lightLevelOff);
                pxsim.svg.setGradientColors(this.thermometerGradient, theme.ledOff, theme.ledOn);
                // svg.setGradientColors(this.soundLevelGradient, theme.soundLevelOn, theme.soundLevelOff);
                // for (const id in this.pinControls) {
                //     this.pinControls[id].updateTheme();
                // }
            };
            BrainPadBoardSvg.prototype.updateState = function () {
                var state = this.board;
                if (!state)
                    return;
                var theme = this.props.theme;
                var bpState = state.buttonState;
                var buttons = bpState.buttons;
                pxsim.svg.fill(this.buttons[0], buttons[0].pressed ? theme.buttonDown : theme.buttonUps[0]);
                pxsim.svg.fill(this.buttons[1], buttons[1].pressed ? theme.buttonDown : theme.buttonUps[1]);
                /* GHI changed
                this.updateRgbLed();
                
                this.updateGestures();
    
                this.updateSound();
                this.updateLightLevel();
                this.updateTemperature();
    
                if (!runtime || runtime.dead) svg.addClass(this.element, "grayscale");
                else svg.removeClass(this.element, "grayscale");
                */
                this.updateSound();
                this.updateLed();
                //this.UpdateScreen();
            };
            BrainPadBoardSvg.prototype.flashSystemLed = function () {
                /* GHI changed
                if (!this.systemLed)
                    this.systemLed = this.element.getElementById("LED_PWR-2") as SVGElement;
                let now = Date.now();
                if (now - this.lastFlashTime > 150) {
                    this.lastFlashTime = now;
                    svg.animate(this.systemLed, "sim-flash")
                }
                */
            };
            BrainPadBoardSvg.prototype.updateLed = function () {
                // let state = this.board;
                // if (!state) return;
                // const on = state.ledState.getState();
                // if (this.led) 
                // {
                // if (on) {
                // svg.fill(this.led, `#ff0000`);
                // this.led.style.strokeWidth = "0.28349999";
                // this.led.style.stroke = "#ff0000";
                // }
                // else {
                // svg.fill(this.led, `#ffffff`);
                // this.led.style.strokeWidth = "0.28349999";
                // this.led.style.stroke = "#0000ff";
                // }
                // }						
            };
            BrainPadBoardSvg.prototype.UpdateScreen = function () {
                // let state = this.board;
                // if (!state) return;
                // const ledMatrix = state.matrixLedState;
                // if (ledMatrix) { 
                // if (!pxsim.basic.getMatrixLedUpdateState()) {
                // return;
                // }
                // pxsim.basic.setMatrixLedUpdateState(false);
                // const on = ledMatrix[0].getState();
                // update led matrix screen
                // this.screenCanvas.width = this.board.screenState.width
                // this.screenCanvas.height = this.board.screenState.height
                // const ctx = this.screenCanvas.getContext("2d")
                // ctx.imageSmoothingEnabled = false
                // const imgdata = ctx.getImageData(0, 0, this.board.screenState.width, this.board.screenState.height)
                // const arr = new Uint32Array(imgdata.data.buffer)
                // let ledWidth = (this.board.screenState.width / 5) | 0;
                // let ledHeight = (this.board.screenState.height / 5) | 0;
                // for (let i = 0; i < this.board.screenState.screen.length; i++) {
                // this.board.screenState.screen[i] = 0xFF000000;
                // }
                // for (let led = 0; led < ledMatrix.length; led++) {
                // let xSrc = (led % 5) | 0;
                // let ySrc = (led / 5) | 0;
                // let xDest = xSrc * ledWidth;
                // let yDest = ySrc * ledHeight;
                // for (let y = yDest+1; y < yDest + ledHeight-2; y++) {
                // for (let x = xDest+1; x < xDest + ledWidth-2; x++) {
                // let arrId = (y * this.board.screenState.width + x) | 0;
                // if (ledMatrix[led].getState() == true) {
                // this.board.screenState.screen[arrId] = 0xFFFFFF00;
                // }
                // }
                // }										
                // }
                // arr.set(this.board.screenState.screen)
                // runtime.queueDisplayUpdate();
                // ctx.putImageData(imgdata, 0, 0)
                // this.lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.screenCanvas.toDataURL());				
                // window.requestAnimationFrame(this.flush)
                // }
            };
            BrainPadBoardSvg.prototype.updateRgbLed = function () {
                /* GHI changed
                let state = this.board;
                if (!state) return;
               
                const rgb = state.lightBulbState.getColor();
    
                if (!this.led) {
                    if (this.rgbLed) {
                        if (!rgb || (rgb.length >= 3 && rgb[0] === 0 && rgb[1] === 0 && rgb[2] === 0)) {
                            // Clear the pixel
                            svg.fill(this.rgbLed, `#feffe9`);
                            svg.filter(this.rgbLed, null);
                            this.rgbLed.style.strokeWidth = "0.28349999";
                            this.rgbLed.style.stroke = "#58595b";
                        } else {
                            let hsl = visuals.rgbToHsl(rgb);
                            let [h, s, l] = hsl;
                            let lx = Math.max(l * 1.3, 85);
                            // at least 10% luminosity
                            l = l * 90 / 100 + 10;
                            this.rgbLed.style.stroke = `hsl(${h}, ${s}%, ${Math.min(l * 3, 75)}%)`
                            this.rgbLed.style.strokeWidth = "1.5";
                            svg.fill(this.rgbLed, `hsl(${h}, ${s}%, ${lx}%)`)
                            svg.filter(this.rgbLed, `url(#neopixelglow)`);
                            
                            // let transform = l / 100 * 0.5;
                            // this.rgbLed.style.transform = `scale(${0.9 + transform})`;
                            // this.rgbLed.style.transformOrigin = "211.30725px 43.049255px";
                        }
                    }
                }
                */
            };
            BrainPadBoardSvg.prototype.updateSound = function () {
                /* GHI changed
                let state = this.board;
                if (!state || !state.audioState) return;
                let audioState = state.audioState;
    
                let soundBoard = this.element.getElementById('BUZZER-1002') as SVGGElement;
                if (audioState.isPlaying()) {
                    svg.addClass(soundBoard, "sim-sound-stroke");
                } else {
                    svg.removeClass(soundBoard, "sim-sound-stroke");
                }
                */
            };
            BrainPadBoardSvg.prototype.updatePins = function () {
                /* GHI changed
                let state = this.board;
                if (!state || !state.edgeConnectorState) return;
                state.edgeConnectorState.pins.forEach((pin, i) => this.updatePin(pin, i));
                */
            };
            BrainPadBoardSvg.prototype.updatePin = function (pin, index) {
                /*
                if (!pin || !this.pins[index]) return;
    
                if ((pin as pins.CommonPin).used) {
                    if (this.pinControls[pin.id] === undefined) {
                        const pinName = pinNames.filter((a) => a.id === pin.id)[0];
                        if (pinName) {
                            this.pinControls[pin.id] = new AnalogPinControl(this, this.defs, pin.id, pinName.name);
                        }
                        else {
                            // TODO: Surface pin controls for sensor pins in some way?
                            this.pinControls[pin.id] = null;
                        }
                    }
    
                    if (this.pinControls[pin.id]) {
                        this.pinControls[pin.id].updateValue();
                    }
                }
                */
            };
            BrainPadBoardSvg.prototype.updateLightLevel = function () {
                /*
                let state = this.board;
                if (!state || !state.lightSensorState.sensorUsed) return;
    
                if (!this.lightLevelButton) {
                    let gid = "gradient-light-level";
                    this.lightLevelGradient = svg.linearGradient(this.defs, gid)
                    let cy = 590;
                    let r = 50;
                    this.lightLevelButton = svg.child(this.g, "circle", {
                        cx: `100px`, cy: `${cy}px`, r: `${r}px`,
                        class: 'sim-light-level-button no-drag',
                        fill: `url(#${gid})`
                    }) as SVGCircleElement;
                    let pt = this.element.createSVGPoint();
                    svg.buttonEvents(this.lightLevelButton,
                        // move
                        (ev) => {
                            let pos = svg.cursorPoint(pt, this.element, ev);
                            let rs = r / 2;
                            let level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy - rs)) / (2 * rs) * 255)));
                            if (level != this.board.lightSensorState.getLevel()) {
                                this.board.lightSensorState.setLevel(level);
                                this.applyLightLevel();
                            }
                        },
                        // start
                        ev => { },
                        // stop
                        ev => { },
                        // keydown
                        (ev) => {
                            let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode
                            if (charCode === 40 || charCode === 37) { // Down/Left arrow
                                if (this.board.lightSensorState.getLevel() === 0) {
                                    this.board.lightSensorState.setLevel(255);
                                } else {
                                    this.board.lightSensorState.setLevel(this.board.lightSensorState.getLevel() - 1);
                                }
                                this.applyLightLevel();
                            } else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                                if (this.board.lightSensorState.getLevel() === 255) {
                                    this.board.lightSensorState.setLevel(0);
                                } else {
                                    this.board.lightSensorState.setLevel(this.board.lightSensorState.getLevel() + 1);
                                }
                                this.applyLightLevel();
                            }
                        });
                    this.lightLevelText = svg.child(this.g, "text", { x: 70, y: cy + r - 130, text: '', class: 'sim-text' }) as SVGTextElement;
                    this.updateTheme();
    
                    accessibility.makeFocusable(this.lightLevelButton);
                    accessibility.setAria(this.lightLevelButton, "slider", "Light level");
                    this.lightLevelButton.setAttribute("aria-valuemin", "0");
                    this.lightLevelButton.setAttribute("aria-valuemax", "255");
                    this.lightLevelButton.setAttribute("aria-orientation", "vertical");
                    this.lightLevelButton.setAttribute("aria-valuenow", "128");
                }
    
                svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(state.lightSensorState.getLevel() * 100 / 255))) + '%')
                this.lightLevelText.textContent = state.lightSensorState.getLevel().toString();
                */
            };
            BrainPadBoardSvg.prototype.applyLightLevel = function () {
                /*
                let lv = this.board.lightSensorState.getLevel();
                svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(lv * 100 / 255))) + '%')
                this.lightLevelText.textContent = lv.toString();
                this.lightLevelButton.setAttribute("aria-valuenow", lv.toString());
                accessibility.setLiveContent(lv.toString());
                */
            };
            BrainPadBoardSvg.prototype.updateTemperature = function () {
                /* GHI changed
                let state = this.board;
                if (!state || !state.thermometerState || !state.thermometerState.sensorUsed) return;
    
                // Celsius
                let tmin = -5;
                let tmax = 50;
                if (!this.thermometer) {
                    let gid = "gradient-thermometer";
                    this.thermometerGradient = svg.linearGradient(this.defs, gid);
                    this.thermometer = <SVGRectElement>svg.child(this.g, "rect", {
                        class: "sim-thermometer no-drag",
                        x: 72,
                        y: 120,
                        width: 39,
                        height: 260,
                        rx: 2, ry: 2,
                        fill: `url(#${gid})`
                    });
                    this.thermometerText = svg.child(this.g, "text", { class: 'sim-text', x: 70, y: 100 }) as SVGTextElement;
                    this.updateTheme();
    
                    let pt = this.element.createSVGPoint();
                    svg.buttonEvents(this.thermometer,
                        // move
                        (ev) => {
                            let cur = svg.cursorPoint(pt, this.element, ev);
                            let t = Math.max(0, Math.min(1, (380 - cur.y) / 160))
                            state.thermometerState.setLevel(Math.floor(tmin + t * (tmax - tmin)));
                            this.updateTemperature();
                        },
                        // start
                        ev => { },
                        // stop
                        ev => { },
                        // keydown
                        (ev) => {
                            let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode
                            if (charCode === 40 || charCode === 37) { // Down/Left arrow
                                if (state.thermometerState.getLevel() === -5) {
                                    state.thermometerState.setLevel(50);
                                } else {
                                    state.thermometerState.setLevel(state.thermometerState.getLevel() - 1);
                                }
                                this.updateTemperature();
                            } else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                                if (state.thermometerState.getLevel() === 50) {
                                    state.thermometerState.setLevel(-5);
                                } else {
                                    state.thermometerState.setLevel(state.thermometerState.getLevel() + 1);
                                }
                                this.updateTemperature();
                            }
                        });
    
                    accessibility.makeFocusable(this.thermometer);
                    accessibility.setAria(this.thermometer, "slider", "Thermometer");
                    this.thermometer.setAttribute("aria-valuemin", tmin.toString());
                    this.thermometer.setAttribute("aria-valuemax", tmax.toString());
                    this.thermometer.setAttribute("aria-orientation", "vertical");
                }
    
                let t = Math.max(tmin, Math.min(tmax, state.thermometerState.getLevel()))
                let per = Math.floor((state.thermometerState.getLevel() - tmin) / (tmax - tmin) * 100)
                svg.setGradientValue(this.thermometerGradient, 100 - per + "%");
    
                let unit = "°C";
                if (state.thermometerUnitState == pxsim.TemperatureUnit.Fahrenheit) {
                    unit = "°F";
                    t = ((t * 18) / 10 + 32) >> 0;
                }
                this.thermometerText.textContent = t + unit;
                this.thermometer.setAttribute("aria-valuenow", t.toString());
                this.thermometer.setAttribute("aria-valuetext", t + unit);
                accessibility.setLiveContent(t + unit);
                */
            };
            BrainPadBoardSvg.prototype.updateGestures = function () {
                /* GHI changed
                let state = this.board;
                if (state.accelerometerState.useShake && !this.shakeButtonGroup) {
                    const btnr = 2;
                    const width = 22;
                    const height = 10;
    
                    let btng = svg.child(this.g, "g", { class: "sim-button-group" });
                    this.shakeButtonGroup = btng;
                    this.shakeText = svg.child(this.g, "text", { x: 81, y: 32, class: "sim-text small" }) as SVGTextElement;
                    this.shakeText.textContent = "SHAKE"
    
                    svg.child(btng, "rect", { class: "sim-button-outer", x: 79, y: 25, rx: btnr, ry: btnr, width, height });
                    svg.fill(btng, this.props.theme.gestureButtonOff);
                    pointerEvents.down.forEach(evid => this.shakeButtonGroup.addEventListener(evid, ev => {
                        let state = this.board;
                        svg.fill(btng, this.props.theme.gestureButtonOn);
                        svg.addClass(this.shakeText, "inverted");
                    }))
                    this.shakeButtonGroup.addEventListener(pointerEvents.leave, ev => {
                        let state = this.board;
                        svg.fill(btng, this.props.theme.gestureButtonOff);
                        svg.removeClass(this.shakeText, "inverted");
                    })
                    this.shakeButtonGroup.addEventListener(pointerEvents.up, ev => {
                        let state = this.board;
                        svg.fill(btng, this.props.theme.gestureButtonOff);
                        this.board.bus.queue(DAL.DEVICE_ID_GESTURE, 11); // GESTURE_SHAKE
                        svg.removeClass(this.shakeText, "inverted");
                    })
                    accessibility.makeFocusable(this.shakeButtonGroup);
                    accessibility.enableKeyboardInteraction(this.shakeButtonGroup, () => {
                        this.board.bus.queue(DAL.DEVICE_ID_GESTURE, 11);
                    });
                    accessibility.setAria(this.shakeButtonGroup, "button", "Shake the board");
                }
                */
            };
            BrainPadBoardSvg.prototype.buildDom = function () {
                var _this = this;
                this.element = new DOMParser().parseFromString(visuals.BOARD_SVG, "image/svg+xml").querySelector("svg");
                /* GHI changed
                svg.hydrate(this.element, {
                    "version": "1.0",
                    "viewBox": `0 0 ${MB_WIDTH} ${MB_HEIGHT}`,
                    "class": "sim",
                    "x": "0px",
                    "y": "0px",
                    "width": MB_WIDTH + "px",
                    "height": MB_HEIGHT + "px",
                });
                this.style = <SVGStyleElement>svg.child(this.element, "style", {});
                this.style.textContent = MB_STYLE;
                
                this.defs = <SVGDefsElement>svg.child(this.element, "defs", {});
                this.g = <SVGGElement>svg.elt("g");
                this.element.appendChild(this.g);
                
                // filters
                let glow = svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
                svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
                let merge = svg.child(glow, "feMerge", {});
                for (let i = 0; i < 3; ++i) svg.child(merge, "feMergeNode", { in: "glow" })
    
                let neopixelglow = svg.child(this.defs, "filter", { id: "neopixelglow", x: "-300%", y: "-300%", width: "600%", height: "600%" });
                svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "4.3", result: "coloredBlur" });
                let neopixelmerge = svg.child(neopixelglow, "feMerge", {});
                svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
                svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
                svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" })
    
                
                this.rgbLed = this.element.getElementById("LIGHTBULB_LED") as SVGCircleElement;
                const lcdRect = this.element.getElementById("DISPLAY_SCREEN") as SVGRectElement;
                this.lcd = <SVGImageElement>svg.child(lcdRect.parentElement, "image", { x : lcdRect.x.baseVal.value, y : lcdRect.y.baseVal.value, width: lcdRect.width.baseVal.value, height: lcdRect.height.baseVal.value })
                
                const btnids = ["BTN_L", "BTN_R", "BTN_U", "BTN_D"];
                const btnlabels = ["Left", "Right", "Up", "Down"];
                
                this.buttonsOuter = btnids.map((n, i) => {
                    let btn = this.element.getElementById(n + "_OUTER") as SVGElement;
                    accessibility.makeFocusable(btn);
                    accessibility.setAria(btn, "button", btnlabels[i]);
                    return btn;
                });
                
                this.buttonsOuter.forEach(b => svg.addClass(b, "sim-button-outer"));
                this.buttons = btnids.map(n => this.element.getElementById(n + "_INNER") as SVGElement);
                this.buttons.forEach(b => svg.addClass(b, "sim-button"));
                
                
                
                
                
                this.screenCanvas = document.createElement("canvas");
                */
                this.screenCanvas = document.createElement("canvas");
                var lcdRect = this.element.getElementById("DISPLAY_SCREEN");
                this.lcd = pxsim.svg.child(lcdRect.parentElement, "image", { x: lcdRect.x.baseVal.value, y: lcdRect.y.baseVal.value, width: lcdRect.width.baseVal.value, height: lcdRect.height.baseVal.value });
                //this.lcdRectLed1 = this.element.getElementById("DISPLAY_SCREEN_LED1") as SVGRectElement;
                //this.lcdLed1 = <SVGImageElement>svg.child(this.lcdRectLed1.parentElement, "rect", { x : this.lcdRectLed1.x.baseVal.value, y : this.lcdRectLed1.y.baseVal.value, width: this.lcdRectLed1.width.baseVal.value, height: this.lcdRectLed1.height.baseVal.value })
                var btnids = ["A", "B"];
                this.buttons = btnids.map(function (n) { return _this.element.getElementById("BUTTON_" + n); });
                this.buttons.forEach(function (b) { return pxsim.svg.addClass(b, "sim-button-outer"); });
                // this.led = this.element.getElementById("LED") as SVGCircleElement;
            };
            BrainPadBoardSvg.prototype.mkBtn = function (left, top, label) {
                var btnr = 2;
                var btnw = 10;
                var btnn = 1.6;
                var btnnm = 2;
                var btnb = 3;
                var btng = pxsim.svg.child(this.g, "g", { class: "sim-button-group" });
                pxsim.accessibility.makeFocusable(btng);
                pxsim.accessibility.setAria(btng, "button", label);
                pxsim.svg.child(btng, "rect", { class: "sim-button-outer", x: left, y: top, rx: btnr, ry: btnr, width: btnw, height: btnw });
                var outer = btng;
                var inner = pxsim.svg.child(btng, "circle", {
                    class: "sim-button",
                    cx: left + btnw / 2,
                    cy: top + btnw / 2,
                    r: btnb
                });
                return { outer: outer, inner: inner };
            };
            BrainPadBoardSvg.prototype.attachEvents = function () {
                var _this = this;
                pxsim.Runtime.messagePosted = function (msg) {
                    switch (msg.type || "") {
                        case "serial":
                            _this.flashSystemLed();
                            break;
                    }
                };
                var bpState = this.board.buttonState;
                var stateButtons = bpState.buttons;
                this.buttons.forEach(function (btn, index) {
                    var button = stateButtons[index];
                    pxsim.pointerEvents.down.forEach(function (evid) { return btn.addEventListener(evid, function (ev) {
                        button.setPressed(true);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonDown);
                    }); });
                    btn.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                        button.setPressed(false);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonUps[index]);
                    });
                    btn.addEventListener(pxsim.pointerEvents.up, function (ev) {
                        button.setPressed(false);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonUps[index]);
                    });
                    pxsim.accessibility.enableKeyboardInteraction(btn, function () {
                        button.setPressed(true);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonDown);
                    }, function () {
                        button.setPressed(false);
                        pxsim.svg.fill(_this.buttons[index], _this.props.theme.buttonUps[index]);
                    });
                });
            };
            return BrainPadBoardSvg;
        }());
        visuals.BrainPadBoardSvg = BrainPadBoardSvg;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.BOARD_SVG = "<svg\n   version=\"1.1\"\n   id=\"svg3336\"\n   inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\"\n   x=\"0px\"\n   y=\"0px\"\n   viewBox=\"0 0 498 406\"\n   style=\"enable-background:new 0 0 498 406;\"\n   xml:space=\"preserve\"\n   sodipodi:docname=\"board.svg\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"><defs\n   id=\"defs380\" />\n<style\n   type=\"text/css\"\n   id=\"style1492\">\n\t.st0{fill:url(#path3694_00000059274564869875150710000011957716559757709225_);}\n\t.st1{fill:url(#path3698_00000147915964973541074290000005888464610750284446_);}\n\t.st2{fill:url(#path3702_00000106856627971963147470000006192414334431694253_);}\n\t.st3{fill:url(#path3706_00000137834779939291632490000002152450895056025490_);}\n\t.st4{fill:url(#path3710_00000155126961641215988860000005305993978079813788_);}\n\t.st5{fill:url(#path3714_00000000922197260626195580000010040180380662555779_);}\n\t.st6{fill:url(#path3718_00000018917913344883301690000001927294585331881389_);}\n\t.st7{fill:url(#path3722_00000066475761918088333620000010326590759302497694_);}\n\t.st8{fill:url(#path3726_00000025409448515759903470000010133787212356512920_);}\n\t.st9{fill:url(#path3730_00000001643190828513936830000009634482998148294324_);}\n\t.st10{fill:url(#path3734_00000041982907582825941310000005221855448674955195_);}\n\t.st11{fill:url(#path3738_00000035493510858565493600000004593523145978830487_);}\n\t.st12{fill:url(#path3742_00000172423787568615830830000009797144419426221195_);}\n\t.st13{fill:url(#path3746_00000110428664047487480620000004484899189864391596_);}\n\t.st14{fill:url(#path3750_00000144305058028471449560000006991331984504437391_);}\n\t.st15{fill:url(#path3754_00000025418066198260226680000010378231553548043443_);}\n\t.st16{fill:url(#path3758_00000173162584152265943150000004275285370840746920_);}\n\t.st17{fill:url(#path3762_00000088842543115397959150000008185872179878808476_);}\n\t.st18{fill:url(#path3766_00000098217945061374785820000001229106572806319767_);}\n\t.st19{fill:url(#path3770_00000061457460397759569970000017347408432990531002_);}\n\t.st20{fill:#FFFFFF;}\n\t.st21{stroke:#FFFFFF;stroke-miterlimit:10;}\n\t.st22{fill:#60410A;}\n\t.st23{fill:#262525;}\n\t.st24{fill:#848383;}\n\t.st25{fill:#575757;}\n\t.st26{fill:none;stroke:#FFFFFF;stroke-width:1.8911;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st27{fill:none;stroke:#F08000;stroke-width:2.2306;stroke-linecap:round;stroke-miterlimit:10;}\n\t\n\t\t.st28{fill:#FCFCFC;stroke:url(#circle26031_00000119813506891439227090000005708071226892268686_);stroke-width:4.2562;stroke-miterlimit:10;}\n\t\n\t\t.st29{fill:#AF740B;stroke:url(#circle26042_00000067225425597571272380000003046387648790885280_);stroke-width:4.2562;stroke-miterlimit:10;}\n\t.st30{fill:#FFB600;}\n\t.st31{fill:url(#path26065_00000176013892676233451280000006362220922515042441_);}\n\t.st32{fill:url(#path26080_00000106844149529442371760000007383151071880706701_);}\n\t.st33{fill:url(#path26091_00000035504679190592897210000016871972131765393286_);}\n\t.st34{fill:url(#path26106_00000134948944717738923610000017472034044129217442_);}\n\t.st35{fill:url(#path26121_00000060007024353144362510000011032077892493451668_);}\n\t.st36{fill:#BCBBBB;stroke:#000000;stroke-width:0.9578;stroke-miterlimit:10;}\n\t.st37{fill:#BCBBBB;stroke:#000000;stroke-width:0.9049;stroke-miterlimit:10;}\n\t.st38{fill:#470202;}\n\t.st39{fill:#470202;stroke:#000000;stroke-width:0.934;stroke-miterlimit:10;}\n\t\n\t\t.st40{fill:url(#circle26178_00000132086369126988246820000003871960555794489484_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;}\n\t\n\t\t.st41{fill:url(#circle26189_00000013892910668576434370000004230845369808906649_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;}\n</style>\n<sodipodi:namedview\n   bordercolor=\"#666666\"\n   borderopacity=\"1.0\"\n   id=\"namedview26193\"\n   inkscape:current-layer=\"svg3336\"\n   inkscape:cx=\"-23.911059\"\n   inkscape:cy=\"303.03607\"\n   inkscape:pagecheckerboard=\"0\"\n   inkscape:pageopacity=\"0.0\"\n   inkscape:pageshadow=\"2\"\n   inkscape:window-height=\"1017\"\n   inkscape:window-maximized=\"1\"\n   inkscape:window-width=\"1920\"\n   inkscape:window-x=\"1912\"\n   inkscape:window-y=\"-8\"\n   inkscape:zoom=\"1.0246305\"\n   pagecolor=\"#ffffff\"\n   showgrid=\"false\">\n\t</sodipodi:namedview>\n<path\n   id=\"path25719\"\n   d=\"M466.1,0H31.9C14.3,0,0,14.3,0,31.9v342.2c0,14.3,9.4,26.4,22.3,30.4v-0.1c0-4.1,3.3-7.4,7.4-7.4h21  c4.1,0,7.4,3.3,7.4,7.4v0.9c0,0.2,0,0.4,0,0.7h63.1v-0.7c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.7h74.2v-0.5  c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h75v-0.4c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.4H440  c0-0.3-0.1-0.6-0.1-1v-0.9c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.4c12.9-4.1,22.3-16.2,22.3-30.4V31.9  C498,14.3,483.7,0,466.1,0z M14.3,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8  C19.2,204.6,17,206.7,14.3,206.7z M486.2,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,0.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8  C491,204.6,488.8,206.7,486.2,206.7z\" />\n<linearGradient\n   id=\"path3694_00000060722228373879360890000005766174044875941551_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1142.2222\"\n   y1=\"16.351\"\n   x2=\"-1142.2222\"\n   y2=\"17.351\"\n   gradientTransform=\"matrix(14.4 0 0 44.4 16455.1992 -368.284)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop5\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop7\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop9\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop11\" />\n</linearGradient>\n<path\n   id=\"path3694\"\n   style=\"fill:url(#path3694_00000060722228373879360890000005766174044875941551_);\"\n   d=\"M0,357.7v19.2  c0,10.8,6.2,20.2,14.4,25.2v-44.4L0,357.7L0,357.7z\" />\n<linearGradient\n   id=\"path3698_00000176016813605994329080000012271472086852170392_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7001\"\n   y1=\"14.52\"\n   x2=\"-1104.7001\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11118.7002 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop15\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop17\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop19\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop21\" />\n</linearGradient>\n<path\n   id=\"path3698\"\n   style=\"fill:url(#path3698_00000176016813605994329080000012271472086852170392_);\"\n   d=\"M66.7,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3702_00000179622298570141606840000003041940647484346501_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11131.0996 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop25\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop27\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop29\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop31\" />\n</linearGradient>\n<path\n   id=\"path3702\"\n   style=\"fill:url(#path3702_00000179622298570141606840000003041940647484346501_);\"\n   d=\"M79.1,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3706_00000054251345259098646570000012909914909356729259_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11143.4004 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop35\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop37\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop39\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop41\" />\n</linearGradient>\n<path\n   id=\"path3706\"\n   style=\"fill:url(#path3706_00000054251345259098646570000012909914909356729259_);\"\n   d=\"M91.4,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3710_00000060006162439127937710000006199963038330594741_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7001\"\n   y1=\"14.52\"\n   x2=\"-1104.7001\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11155.7002 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop45\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop47\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop49\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop51\" />\n</linearGradient>\n<path\n   id=\"path3710\"\n   style=\"fill:url(#path3710_00000060006162439127937710000006199963038330594741_);\"\n   d=\"M103.7,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3714_00000080887613204631344960000005160026823740088211_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11216.2998 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop55\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop57\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop59\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop61\" />\n</linearGradient>\n<path\n   id=\"path3714\"\n   style=\"fill:url(#path3714_00000080887613204631344960000005160026823740088211_);\"\n   d=\"M164.3,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3718_00000095331150976969727520000014269420112953008783_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11228.5996 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop65\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop67\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop69\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop71\" />\n</linearGradient>\n<path\n   id=\"path3718\"\n   style=\"fill:url(#path3718_00000095331150976969727520000014269420112953008783_);\"\n   d=\"M176.6,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3722_00000163784460602726370010000013136366963129324968_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11240.9004 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop75\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop77\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop79\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop81\" />\n</linearGradient>\n<path\n   id=\"path3722\"\n   style=\"fill:url(#path3722_00000163784460602726370010000013136366963129324968_);\"\n   d=\"M188.9,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3726_00000016767143923647286060000005964356070350008475_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11253.2998 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop85\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop87\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop89\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop91\" />\n</linearGradient>\n<path\n   id=\"path3726\"\n   style=\"fill:url(#path3726_00000016767143923647286060000005964356070350008475_);\"\n   d=\"M201.3,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3730_00000127758795587014103380000000533144448036490374_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11265.5996 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop95\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop97\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop99\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop101\" />\n</linearGradient>\n<path\n   id=\"path3730\"\n   style=\"fill:url(#path3730_00000127758795587014103380000000533144448036490374_);\"\n   d=\"M213.6,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3734_00000150088302689002099680000004746314755802603148_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7001\"\n   y1=\"14.52\"\n   x2=\"-1104.7001\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11327.2002 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop105\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop107\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop109\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop111\" />\n</linearGradient>\n<path\n   id=\"path3734\"\n   style=\"fill:url(#path3734_00000150088302689002099680000004746314755802603148_);\"\n   d=\"M275.2,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3738_00000078755155326833036950000016976071973070020761_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11339.5 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop115\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop117\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop119\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop121\" />\n</linearGradient>\n<path\n   id=\"path3738\"\n   style=\"fill:url(#path3738_00000078755155326833036950000016976071973070020761_);\"\n   d=\"M287.5,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3742_00000052802368363537828320000013078680494538934667_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11351.7998 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop125\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop127\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop129\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop131\" />\n</linearGradient>\n<path\n   id=\"path3742\"\n   style=\"fill:url(#path3742_00000052802368363537828320000013078680494538934667_);\"\n   d=\"M299.8,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3746_00000182527125936468553310000001224729904496966589_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11364.0996 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop135\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop137\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop139\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop141\" />\n</linearGradient>\n<path\n   id=\"path3746\"\n   style=\"fill:url(#path3746_00000182527125936468553310000001224729904496966589_);\"\n   d=\"M312.1,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3750_00000056411538582389470030000001726237894919760046_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11376.5 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop145\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop147\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop149\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop151\" />\n</linearGradient>\n<path\n   id=\"path3750\"\n   style=\"fill:url(#path3750_00000056411538582389470030000001726237894919760046_);\"\n   d=\"M324.5,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3754_00000071536319431224921570000013464636659446269590_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11437.0996 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop155\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop157\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop159\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop161\" />\n</linearGradient>\n<path\n   id=\"path3754\"\n   style=\"fill:url(#path3754_00000071536319431224921570000013464636659446269590_);\"\n   d=\"M385.1,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3758_00000088824599398657049560000006184384116544398489_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11449.4004 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop165\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop167\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop169\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop171\" />\n</linearGradient>\n<path\n   id=\"path3758\"\n   style=\"fill:url(#path3758_00000088824599398657049560000006184384116544398489_);\"\n   d=\"M397.4,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3762_00000120538584307392742520000012867115344704609957_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7001\"\n   y1=\"14.52\"\n   x2=\"-1104.7001\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11461.7002 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop175\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop177\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop179\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop181\" />\n</linearGradient>\n<path\n   id=\"path3762\"\n   style=\"fill:url(#path3762_00000120538584307392742520000012867115344704609957_);\"\n   d=\"M409.7,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3766_00000131351633483751028650000012752926811831159182_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1104.7\"\n   y1=\"14.52\"\n   x2=\"-1104.7\"\n   y2=\"15.52\"\n   gradientTransform=\"matrix(10 0 0 50 11474 -369.3008)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop185\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop187\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop189\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop191\" />\n</linearGradient>\n<path\n   id=\"path3766\"\n   style=\"fill:url(#path3766_00000131351633483751028650000012752926811831159182_);\"\n   d=\"M422,356.7h10v50h-10  V356.7z\" />\n<linearGradient\n   id=\"path3770_00000160192690495096054620000003369887215556224693_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"-1142.2219\"\n   y1=\"16.3879\"\n   x2=\"-1142.2219\"\n   y2=\"17.3879\"\n   gradientTransform=\"matrix(14.4 0 0 44.3 16938.7969 -368.2838)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop195\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop197\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop199\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop201\" />\n</linearGradient>\n<path\n   id=\"path3770\"\n   style=\"fill:url(#path3770_00000160192690495096054620000003369887215556224693_);\"\n   d=\"M483.6,402  c8.2-5,14.4-14.4,14.4-25.1v-19.2h-14.4V402z\" />\n<path\n   id=\"path3786\"\n   d=\"M69.7,203.5c0,8.7-7,15.7-15.7,15.7s-15.7-7-15.7-15.7s7-15.7,15.7-15.7S69.7,194.9,69.7,203.5\" />\n<path\n   id=\"path25922\"\n   class=\"st20\"\n   d=\"M475.2,256.2h-61.8c-3.8,0-6.9-3.1-6.9-6.9V119.1c0-3.8,3.1-6.9,6.9-6.9h61.8  c3.8,0,6.9,3.1,6.9,6.9v130.2C482.1,253.1,479,256.2,475.2,256.2z\" />\n<path\n   id=\"path25924\"\n   class=\"st20\"\n   d=\"M87.8,256.2H26c-3.8,0-6.9-3.1-6.9-6.9V119.1c0-3.8,3.1-6.9,6.9-6.9h61.8  c3.8,0,6.9,3.1,6.9,6.9v130.2C94.7,253.1,91.6,256.2,87.8,256.2z\" />\n<g\n   id=\"g25928\">\n\t<path\n   id=\"path25926\"\n   d=\"M71.7,160.1l-13.4,0.1L57,152l-4.7,0.3l-0.3,8.1l-13.1,0.4L54.6,123L71.7,160.1z M58.2,144.3   c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.7-1.1s-1.9,0.4-2.7,1.1c-0.7,0.7-1.1,1.6-1.1,2.6s0.4,1.9,1.1,2.6   c0.7,0.7,1.6,1.1,2.7,1.1s1.9-0.4,2.7-1.1S58.2,145.3,58.2,144.3z\" />\n</g>\n<g\n   id=\"g25932\">\n\t<path\n   id=\"path25930\"\n   d=\"M459,148.5c0,7.1-5.9,10.6-17.8,10.6c-3.3,0-6.5-0.3-9.8-0.8l-2.1-34.5c6.5-0.3,10.3-0.5,11.4-0.5   c8.9,0,13.3,3.2,13.3,9.5c0,1.6-0.4,3-1.1,4.2c-0.8,1.4-2,2.3-3.4,2.6c2.7,0,5,0.7,6.7,2.3C458.1,143.7,459,145.8,459,148.5z    M444.7,134.4c0-0.9-0.3-1.7-1-2.4s-1.4-1-2.4-1s-1.7,0.3-2.3,1c-0.6,0.7-1,1.4-1,2.4c0,0.9,0.3,1.7,1,2.4c0.6,0.6,1.4,1,2.3,1   s1.7-0.3,2.4-1C444.4,136.1,444.7,135.3,444.7,134.4z M447.7,147.3c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1s-1.9,0.4-2.6,1.1   s-1.1,1.6-1.1,2.6s0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1s1.9-0.4,2.6-1.1C447.3,149.2,447.7,148.3,447.7,147.3z\" />\n</g>\n<rect\n   id=\"rect25934\"\n   x=\"121.1\"\n   y=\"81.4\"\n   class=\"st21\"\n   width=\"265.6\"\n   height=\"188.3\" />\n<path\n   id=\"DISPLAY_BASE2\"\n   class=\"st22\"\n   d=\"M159.2,244.8v8.1c0,2.8-1.3,8.1,0,10.8s9.7,5.2,13.1,6.7l24.4,11.1  c1.1,0.5,4.4,1.4,5.1,2.3s0,6.2,0,8.1h109.1c0-1.9-1.1-6.5,0-8.1c0.5-0.8,3.2-1.6,4.1-2l23.1-11.6c3.2-1.6,10.7-3.9,12.2-6.7  c1.5-2.8,0-7.6,0-10.1V245L159.2,244.8z\" />\n<path\n   id=\"DISPLAY_BASE1\"\n   class=\"st23\"\n   d=\"M124.8,232.8c1,3.1,1.7,9.6,4,11.8s7,2.8,9.5,3.7l39.2,15.4l17.4,6.8  c1.6,0.6,6.9,1.7,7.9,3.1s0.1,10.4,0.1,13.3v16.3h101V287c0-2.7-1.6-11.1,0.1-13.3c1.7-2.2,6.4-2.4,8-2.9l17.7-6.5l39.7-14.6  c2.5-0.9,7.7-1.7,9.6-3.5c2-1.8,3-9,4-12.1\" />\n<rect\n   id=\"DISPLAY_OUTER\"\n   x=\"123.5\"\n   y=\"84.4\"\n   class=\"st24\"\n   width=\"260.5\"\n   height=\"146.2\" />\n<rect\n   id=\"DISPLAY_SCREEN\"\n   x=\"127.9\"\n   y=\"86.8\"\n   width=\"251.6\"\n   height=\"141.2\" />\n<path\n   id=\"path25940\"\n   class=\"st20\"\n   d=\"M232.7,52c0,0.4,0.2,0.7,0.6,0.9c0.4,0.1,0.9,0.1,1.3,0c1.4-0.2,2.8-0.3,4.2-0.4  c0.2,0,0.4,0,0.5,0c1-0.1,2.1-0.1,3.1-0.2c0.9,0,1.8-0.1,2.6-0.4c1.1-0.4,2-1.4,2.4-2.6c0.3-1,0.2-2,0.3-3c0.4-4.1,3.5-7.5,4.8-11.4  c1.5-4.9-0.2-10.6-4-14c-1.7-1.4-3.7-2.4-5.8-2.9c-2.2-0.5-4.4-0.5-6.6,0c-2.2,0.5-4.1,1.6-5.8,3.1c-1.4,1.3-2.5,2.9-3.3,4.7  c-1.3,3.1-1.4,6.8-0.2,10c1.3,3.6,4.2,6.6,4.4,10.4c0.1,0.9,0.2,2.1,1.1,2.4c0.4,0.1,0.9,0,1.2-0.3c0.5-0.5,0.6-1.2,0.6-1.9  c0.1-2.4-1-4.6-2.1-6.7c-1.1-2.1-2.4-4.1-3-6.4c-0.8-3.4,0.2-7.1,2.6-9.6s6-3.8,9.4-3.3s6.5,2.7,8.1,5.8c1,1.9,1.4,4.1,1,6.2  c-0.8,4.9-5.3,8.9-5.2,13.9c0,0.7,0.1,1.4-0.2,2c-0.4,0.7-1.2,0.9-1.9,1.1c-1.3,0.4-2.7,0.6-4.1,0.8c-0.8,0.1-1.7,0.1-2.5,0.1  s-1.6,0-2.3,0.3C233.3,51,232.7,51.4,232.7,52z\" />\n<path\n   id=\"path25942\"\n   class=\"st20\"\n   d=\"M162.6,54.8c0,7.8-6.5,11.7-19.6,11.7c-3.6,0-7.2-0.3-10.8-0.8l-2.2-38  c7.2-0.4,11.3-0.5,12.5-0.5c9.8,0,14.7,3.5,14.7,10.4c0,1.7-0.4,3.3-1.3,4.7c-0.9,1.6-2.2,2.5-3.8,2.8c3,0,5.4,0.8,7.4,2.5  C161.6,49.5,162.6,51.8,162.6,54.8 M146.9,39.3c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1s-1.9,0.4-2.6,1.1  c-0.7,0.7-1.1,1.6-1.1,2.6s0.3,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1s1.9-0.4,2.6-1.1S146.9,40.3,146.9,39.3 M150.1,53.5  c0-1.1-0.4-2.1-1.2-2.9c-0.8-0.8-1.8-1.2-2.9-1.2c-1.1,0-2,0.4-2.8,1.2s-1.2,1.8-1.2,2.9c0,1.1,0.4,2.1,1.2,2.8  c0.8,0.8,1.7,1.2,2.8,1.2s2.1-0.4,2.9-1.2S150.1,54.6,150.1,53.5\" />\n<path\n   id=\"path25944\"\n   class=\"st20\"\n   d=\"M195.8,50.6l-11.5,2.9c-0.2-2.3-1.1-3.5-2.7-3.5c-1.5,0-2.7,1.3-3.8,3.8l0.1,11.4l-10.8,0.2  l-0.6-23.7l11.1,0.1l0.1,4c3.2-3.4,6.6-5.1,10.1-5.1C192.4,40.8,195.1,44.1,195.8,50.6\" />\n<path\n   id=\"path25946\"\n   class=\"st20\"\n   d=\"M228,64.8L217.9,66l-0.5-3.2c-1.8,2.1-4.3,3.1-7.6,3.1c-8.4,0-12.6-2-12.6-6.1  c0-3,1.2-5.1,3.5-6.5c1.6-0.9,4.1-1.5,7.5-2c4.1-0.5,6.2-1.5,6.2-3.1c0-0.9-0.4-1.6-1.1-2.1c-0.7-0.5-1.4-0.7-2.3-0.7  c-1.1,0-2,0.4-2.8,1.1c-0.7,0.7-1.1,1.6-1.2,2.7h-9.4c0.1-1,0.4-2.2,1.1-3.4c2.3-4.2,6.7-6.3,13.3-6.3c10.6,0,15.9,3.7,15.9,11.2  v14.1H228z M216.7,57.8c0-1.1-0.5-1.9-1.5-2.5c-0.9-0.5-1.8-0.7-3-0.7c-1.1,0-2.1,0.2-3,0.7c-1,0.6-1.5,1.4-1.5,2.5  c0,1,0.5,1.9,1.5,2.4c0.8,0.5,1.8,0.7,3,0.7c1.1,0,2.1-0.2,3-0.7C216.2,59.6,216.7,58.8,216.7,57.8\" />\n<path\n   id=\"path25948\"\n   class=\"st20\"\n   d=\"M280.3,58.2c0,3.4-0.1,5.8-0.3,7.3l-11.6-0.1c0.2-2.6,0.3-5.5,0.3-8.6c0-1.7-0.1-2.9-0.3-3.6  c-0.4-1.4-1.2-2.1-2.5-2.1c-1.4,0-2.7,1.3-3.8,3.8l0.1,10.9l-10.8-0.3l-0.6-22.7l11.1,0.2l0.1,4c3.3-3.4,6.6-5.1,10.1-5.1  c3.7,0,6.1,2,7.3,5.9C280,49.8,280.3,53.3,280.3,58.2\" />\n<path\n   id=\"path25950\"\n   class=\"st20\"\n   d=\"M316.3,39.7c0,4.2-1.7,7.4-5,9.5c-2.8,1.8-6.4,2.6-10.9,2.6c-0.7,0-1.3,0-1.7-0.1l1.6,13.4  L287,65.6l-1.4-38.1l14.2-0.2c5,0,8.8,0.8,11.5,2.3C314.6,31.7,316.3,35,316.3,39.7 M305.5,39.6c0-1.2-0.4-2.2-1.3-3.1  c-0.9-0.8-1.9-1.3-3.1-1.3s-2.2,0.4-3,1.3c-0.8,0.8-1.3,1.9-1.3,3.1c0,1.2,0.4,2.2,1.3,3c0.8,0.8,1.8,1.3,3,1.3s2.2-0.4,3.1-1.3  C305.1,41.8,305.5,40.8,305.5,39.6\" />\n<path\n   id=\"path25952\"\n   class=\"st20\"\n   d=\"M348.8,64.8l-10,1.2l-0.5-3.2c-1.8,2.1-4.3,3.1-7.6,3.1c-8.4,0-12.6-2-12.6-6.1  c0-3,1.2-5.1,3.5-6.5c1.6-0.9,4.1-1.5,7.5-2c4.1-0.5,6.2-1.5,6.2-3.1c0-0.9-0.4-1.6-1.1-2.1s-1.4-0.7-2.3-0.7c-1.1,0-2,0.4-2.8,1.1  c-0.7,0.7-1.1,1.6-1.2,2.7h-9.4c0.1-1,0.4-2.2,1.1-3.4c2.3-4.2,6.7-6.3,13.3-6.3c10.6,0,15.9,3.7,15.9,11.2V64.8z M337.5,57.8  c0-1.1-0.5-1.9-1.5-2.5c-0.9-0.5-1.8-0.7-3-0.7c-1.1,0-2.1,0.2-3,0.7c-1,0.6-1.5,1.4-1.5,2.5c0,1,0.5,1.9,1.5,2.4  c0.8,0.5,1.8,0.7,3,0.7c1.1,0,2.1-0.2,3-0.7C337,59.6,337.5,58.8,337.5,57.8\" />\n<path\n   id=\"path25954\"\n   class=\"st20\"\n   d=\"M384,64.9l-10.9,0.5l-0.1-1.9c-2.8,1.4-5.3,2.2-7.4,2.2c-3.8,0-6.9-1.4-9.3-4.1  c-2.2-2.6-3.3-5.9-3.3-9.8c0-3.5,1.1-6.4,3.4-8.6s5.2-3.3,8.7-3.3c2,0,4.1,0.5,6.3,1.6l-1.1-13.9l13.6-0.9L384,64.9z M373.3,52.6  c0-1.4-0.5-2.7-1.5-3.7s-2.3-1.5-3.7-1.5c-1.4,0-2.7,0.5-3.7,1.5s-1.5,2.3-1.5,3.7s0.5,2.7,1.5,3.7s2.3,1.5,3.7,1.5  c1.4,0,2.7-0.5,3.7-1.5S373.3,54,373.3,52.6\" />\n<path\n   id=\"path25956\"\n   class=\"st25\"\n   d=\"M242.8,29.2C242.8,29.2,242.9,29.2,242.8,29.2C242.9,29.2,242.9,29.2,242.8,29.2L242.8,29.2z\" />\n<polygon\n   id=\"polygon25958\"\n   class=\"st25\"\n   points=\"242.9,29.2 242.9,29.2 243.1,29.2 \" />\n<path\n   id=\"path25960\"\n   class=\"st25\"\n   d=\"M245.1,29.5h0.2l0,0l0,0H245.1z\" />\n<g\n   id=\"g25964\">\n\t<path\n   id=\"path25962\"\n   class=\"st20\"\n   d=\"M244.8,55.3l-11.3,0.6c-0.6,0-1.1-0.4-1.1-1l0,0c0-0.6,0.4-1.1,1-1.1l11.3-0.6   c0.6,0,1.1,0.4,1.1,1l0,0C245.9,54.8,245.4,55.3,244.8,55.3z\" />\n</g>\n<g\n   id=\"g25968\">\n\t<path\n   id=\"path25966\"\n   class=\"st20\"\n   d=\"M244.8,58.1l-11.3,0.6c-0.6,0-1.1-0.4-1.1-1l0,0c0-0.6,0.4-1.1,1-1.1l11.3-0.6   c0.6,0,1.1,0.4,1.1,1l0,0C245.8,57.5,245.4,58,244.8,58.1z\" />\n</g>\n<g\n   id=\"g25972\">\n\t<path\n   id=\"path25970\"\n   class=\"st20\"\n   d=\"M244.8,60.8l-11.3,0.6c-0.6,0-1.1-0.4-1.1-1l0,0c0-0.6,0.4-1.1,1-1.1l11.3-0.6   c0.6,0,1.1,0.4,1.1,1l0,0C245.9,60.3,245.4,60.8,244.8,60.8z\" />\n</g>\n<path\n   id=\"path25974\"\n   class=\"st20\"\n   d=\"M244.1,61.6c0.1,2.7-2,5-4.7,5.2c-2.7,0.1-5-2-5.2-4.7L244.1,61.6z\" />\n<path\n   id=\"path25976\"\n   class=\"st25\"\n   d=\"M242,29L242,29L242,29L242,29z\" />\n<polygon\n   id=\"polygon25978\"\n   class=\"st25\"\n   points=\"242,29 242,29 242.1,29 \" />\n<path\n   id=\"path25980\"\n   class=\"st25\"\n   d=\"M243.6,29.3h0.2l0,0l0,0H243.6z\" />\n<line\n   id=\"line25982\"\n   class=\"st26\"\n   x1=\"239.2\"\n   y1=\"14.8\"\n   x2=\"239.2\"\n   y2=\"10.3\" />\n<path\n   id=\"path25984\"\n   class=\"st27\"\n   d=\"M255.3,30.9\" />\n<path\n   id=\"path25986\"\n   class=\"st27\"\n   d=\"M217.1,31.7\" />\n<path\n   id=\"path25988\"\n   class=\"st27\"\n   d=\"M223.3,30.9\" />\n<g\n   id=\"g25996\">\n\t<path\n   id=\"path25990\"\n   class=\"st20\"\n   d=\"M237.3,36.4h-0.4c-0.9,0-1.5-0.1-1.8-0.2c-0.3-0.1-0.4-0.3-0.5-0.6c-0.1-0.2-0.1-0.5-0.1-0.8   v-1.4c0-0.5-0.1-0.8-0.3-1s-0.5-0.3-0.9-0.3c0,0,0,0-0.1,0h-0.1v-1.5h0.1c0.1,0,0.1,0,0.1,0c0.4,0,0.7-0.1,0.9-0.3s0.3-0.5,0.3-1   v-1.4c0-0.4,0-0.7,0.1-0.8c0.1-0.3,0.3-0.5,0.5-0.6c0.3-0.2,0.9-0.2,1.8-0.2h0.4v1.5c0,0,0,0-0.1,0H237c-0.3,0-0.5,0.1-0.6,0.2   s-0.2,0.3-0.2,0.7V30c0,0.5-0.1,0.8-0.2,1c-0.2,0.2-0.5,0.4-0.9,0.4c0.5,0.1,0.8,0.2,0.9,0.4c0.1,0.2,0.3,0.5,0.3,1V34   c0,0.3,0.1,0.6,0.2,0.7c0.1,0.1,0.3,0.2,0.6,0.2c0,0,0,0,0.1,0h0.1L237.3,36.4L237.3,36.4z\" />\n\t<path\n   id=\"path25992\"\n   class=\"st20\"\n   d=\"M240.3,30.1c0,0.3-0.1,0.5-0.3,0.7s-0.4,0.3-0.7,0.3s-0.5-0.1-0.7-0.3   c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7s0.4-0.3,0.7-0.3s0.5,0.1,0.7,0.3C240.1,29.6,240.3,29.9,240.3,30.1z M240.3,33.3   c0,0,0,0.1-0.1,0.3c-0.2,0.6-0.4,1-0.8,1.3h-1c0.3-0.2,0.5-0.4,0.7-0.7c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.3-0.4-0.3-0.6   c0-0.3,0.1-0.5,0.3-0.7s0.4-0.3,0.7-0.3s0.5,0.1,0.7,0.3C240.2,32.8,240.3,33,240.3,33.3z\" />\n\t<path\n   id=\"path25994\"\n   class=\"st20\"\n   d=\"M245.4,32h-0.1c-0.1,0-0.1,0-0.1,0c-0.4,0-0.7,0.1-0.9,0.3s-0.3,0.5-0.3,1v1.4   c0,0.4,0,0.7-0.1,0.9c-0.1,0.3-0.3,0.5-0.5,0.6c-0.3,0.2-0.9,0.2-1.7,0.2h-0.5v-1.5h0.1c0.1,0,0.1,0,0.1,0c0.3,0,0.5-0.1,0.6-0.2   c0.1-0.1,0.2-0.3,0.2-0.7v-1.3c0-0.5,0.1-0.8,0.3-1s0.5-0.3,0.9-0.4c-0.5-0.1-0.8-0.2-0.9-0.4c-0.2-0.2-0.2-0.5-0.2-1v-1.3   c0-0.4-0.1-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.6-0.2h-0.1c-0.1,0-0.1,0-0.1,0v-1.5h0.4c0.9,0,1.5,0.1,1.8,0.2s0.4,0.3,0.5,0.6   c0.1,0.2,0.1,0.5,0.1,0.9v1.4c0,0.5,0.1,0.8,0.3,1s0.5,0.3,0.9,0.3c0,0,0,0,0.1,0h0.1V32H245.4z\" />\n</g>\n<line\n   id=\"line25998\"\n   class=\"st26\"\n   x1=\"223.4\"\n   y1=\"30.7\"\n   x2=\"219\"\n   y2=\"31.3\" />\n<line\n   id=\"line26000\"\n   class=\"st26\"\n   x1=\"259.7\"\n   y1=\"31.4\"\n   x2=\"255.3\"\n   y2=\"30.9\" />\n<line\n   id=\"line26002\"\n   class=\"st26\"\n   x1=\"228\"\n   y1=\"19.6\"\n   x2=\"224.8\"\n   y2=\"16.5\" />\n<line\n   id=\"line26004\"\n   class=\"st26\"\n   x1=\"250.5\"\n   y1=\"19.7\"\n   x2=\"253.6\"\n   y2=\"16.5\" />\n<g\n   id=\"g26008\">\n\t<path\n   id=\"path26006\"\n   class=\"st20\"\n   d=\"M104.2,337.9c0,1.6-0.4,3.2-1.3,4.9c-2.4,4.7-6.6,7-12.5,7c-8.2,0-13.5-3-15.9-9.1   c-0.8-2-1.2-4-1.2-6.1v-0.4l10.6-0.2c0.2,1.1,0.3,2.1,0.3,3c0,0.7,0.7,1.4,2,2.2c1.2,0.6,2.2,1,3,1c2.3,0,3.5-1,3.5-2.9   c0-1.5-1.6-3-4.9-4.7c-5.5-2.9-8.6-4.5-9.1-4.9c-3.3-2.3-4.9-4.8-4.9-7.7c0-3.9,1.4-6.7,4.1-8.6c2.3-1.6,5.6-2.4,9.7-2.4   c7.9,0,13.1,2.9,15.5,8.7c0.7,1.6,1,3,1.1,4.3l-12.4,0.6c0-1.1-0.4-2-1.1-2.7s-1.6-1.1-2.7-1.1c-0.9,0-1.6,0.2-2.2,0.7   s-0.9,1.2-0.9,2c0,1.5,1.1,2.9,3.2,4c0.3,0.1,2,0.8,5.2,2.1C100.6,330.4,104.2,333.9,104.2,337.9z\" />\n</g>\n<g\n   id=\"g26012\">\n\t<path\n   id=\"path26010\"\n   class=\"st20\"\n   d=\"M206.8,324.9l-8.7,0.2l1.4,23.6l-13.1,0.2l0.2-23.5l-8.4,0.2l-1.5-11.2l30.2-1.5L206.8,324.9   L206.8,324.9z\" />\n</g>\n<g\n   id=\"g26016\">\n\t<path\n   id=\"path26014\"\n   class=\"st20\"\n   d=\"M317.7,349.6l-25.5,0.1l-0.8-36.6l24.4-1.5l0.4,9.2l-13.5,0.7l0.2,5.4l8.6-0.4l-0.2,6   l-8.2,0.5l0.2,4.1l14.4-0.8V349.6z\" />\n</g>\n<g\n   id=\"g26020\">\n\t<path\n   id=\"path26018\"\n   class=\"st20\"\n   d=\"M427.9,349.3l-13.4,0.4l0.4-18l-6.1,12.3l-6.5-12.3l1,17.4l-12.7,0.8v-35.7l11.6-1.2l5.8,16.3   l6.8-15.2l9.9-0.2L427.9,349.3z\" />\n</g>\n<linearGradient\n   id=\"circle26031_00000041276773533815216420000007297168900753734824_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"431.0719\"\n   y1=\"368.4\"\n   x2=\"481.8374\"\n   y2=\"368.4\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop258\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop260\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop262\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop264\" />\n</linearGradient>\n<circle\n   id=\"circle26031\"\n   style=\"fill:#FCFCFC;stroke:url(#circle26031_00000041276773533815216420000007297168900753734824_);stroke-width:4.2562;stroke-miterlimit:10;\"\n   cx=\"456.5\"\n   cy=\"39.6\"\n   r=\"23.3\" />\n<linearGradient\n   id=\"circle26042_00000032621163134286842090000010152564497878179211_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"18.0719\"\n   y1=\"368.1\"\n   x2=\"68.8374\"\n   y2=\"368.1\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop268\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop270\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop272\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop274\" />\n</linearGradient>\n<circle\n   id=\"circle26042\"\n   style=\"fill:#AF740B;stroke:url(#circle26042_00000032621163134286842090000010152564497878179211_);stroke-width:4.2562;stroke-miterlimit:10;\"\n   cx=\"43.5\"\n   cy=\"39.9\"\n   r=\"23.3\" />\n<path\n   id=\"LED\"\n   class=\"st30\"\n   d=\"M55.9,45.8H31c-2.7,0-4.8-2.2-4.8-4.8l0,0c0-2.7,2.2-4.8,4.8-4.8h24.8c2.7,0,4.8,2.2,4.8,4.8l0,0  C60.7,43.7,58.5,45.8,55.9,45.8z\" />\n<circle\n   id=\"circle26046\"\n   class=\"st20\"\n   cx=\"40.4\"\n   cy=\"341.6\"\n   r=\"19.3\" />\n<circle\n   id=\"circle26048\"\n   class=\"st20\"\n   cx=\"139\"\n   cy=\"340.8\"\n   r=\"19.3\" />\n<circle\n   id=\"circle26050\"\n   class=\"st20\"\n   cx=\"249.4\"\n   cy=\"340.8\"\n   r=\"19.3\" />\n<circle\n   id=\"circle26052\"\n   class=\"st20\"\n   cx=\"359.8\"\n   cy=\"340.8\"\n   r=\"19.3\" />\n<circle\n   id=\"circle26054\"\n   class=\"st20\"\n   cx=\"457.8\"\n   cy=\"341.8\"\n   r=\"19.3\" />\n<linearGradient\n   id=\"path26065_00000085944260733535863670000009582284018731036087_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"40.2\"\n   y1=\"2.1\"\n   x2=\"40.2\"\n   y2=\"90.5\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop284\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop286\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop288\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop290\" />\n</linearGradient>\n<path\n   id=\"path26065\"\n   style=\"fill:url(#path26065_00000085944260733535863670000009582284018731036087_);\"\n   d=\"M40.3,317.5  c-13.1,0.1-23.8,10.6-23.8,23.7c0,0.4-0.1,0.9-0.1,1.3v60.7c1.9,0.8,3.9,1.4,5.9,1.9v-0.2c0-4.1,3.3-7.4,7.4-7.4h21  c4.1,0,7.4,3.3,7.4,7.4v0.9v0.1h5.6v-64.7H64v-0.1C64,328.1,53.4,317.5,40.3,317.5z M40.5,360.9c-10.6,0-19.3-8.7-19.3-19.3  c0-10.7,8.7-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C59.8,352.3,51.2,360.9,40.5,360.9z\" />\n<g\n   id=\"g26069\">\n\t<path\n   id=\"path26067\"\n   d=\"M40.6,379.4c1.4,0,2.5,0.5,3.3,1.5c0.9,1.2,1.4,3.1,1.4,5.8c0,2.7-0.5,4.7-1.4,5.8c-0.8,1-1.9,1.5-3.2,1.5   c-1.4,0-2.5-0.5-3.4-1.6s-1.3-3-1.3-5.7s0.5-4.6,1.4-5.8C38.1,379.9,39.2,379.4,40.6,379.4z M40.6,381.6c-0.3,0-0.6,0.1-0.9,0.3   s-0.5,0.6-0.6,1.1c-0.2,0.7-0.3,1.9-0.3,3.6s0.1,2.8,0.3,3.5s0.4,1,0.6,1.3s0.6,0.3,0.9,0.3s0.6-0.1,0.9-0.3s0.5-0.6,0.6-1.1   c0.2-0.7,0.3-1.9,0.3-3.6s-0.1-2.8-0.3-3.5s-0.4-1-0.6-1.3S40.9,381.6,40.6,381.6z\" />\n</g>\n<linearGradient\n   id=\"path26080_00000031178460018694427050000007115252852510153111_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"249\"\n   y1=\"2\"\n   x2=\"249\"\n   y2=\"90.7\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop296\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop298\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop300\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop302\" />\n</linearGradient>\n<path\n   id=\"path26080\"\n   style=\"fill:url(#path26080_00000031178460018694427050000007115252852510153111_);\"\n   d=\"M249,317.3  c-12.8,0-22.1,10.3-23.1,23.1V406h5.2v-0.5c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h5.2v-65.6  C272.1,327.7,261.8,317.3,249,317.3z M249.4,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3  C268.7,351.5,260.1,360.1,249.4,360.1z\" />\n<linearGradient\n   id=\"path26091_00000039093919890937457560000013376885843621800881_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"139.1\"\n   y1=\"2\"\n   x2=\"139.1\"\n   y2=\"90.7\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop306\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop308\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop310\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop312\" />\n</linearGradient>\n<path\n   id=\"path26091\"\n   style=\"fill:url(#path26091_00000039093919890937457560000013376885843621800881_);\"\n   d=\"M139.1,317.3  c-12.8,0-22.1,10.3-23.1,23.1V406h5v-0.5c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h5.4v-65.6  C162.2,327.7,151.9,317.3,139.1,317.3z M139.3,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3s19.3,8.7,19.3,19.3  C158.6,351.5,150,360.1,139.3,360.1z\" />\n<g\n   id=\"g26095\">\n\t<path\n   id=\"path26093\"\n   d=\"M140.5,394h-2.7v-10.3c-1,0.9-2.2,1.6-3.5,2.1v-2.5c0.7-0.2,1.5-0.7,2.3-1.3s1.4-1.4,1.7-2.3h2.2V394z\" />\n</g>\n<linearGradient\n   id=\"path26106_00000177458175182505314590000005065186238959006399_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"359.9\"\n   y1=\"2\"\n   x2=\"359.9\"\n   y2=\"90.7\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop318\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop320\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop322\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop324\" />\n</linearGradient>\n<path\n   id=\"path26106\"\n   style=\"fill:url(#path26106_00000177458175182505314590000005065186238959006399_);\"\n   d=\"M359.9,317.3  c-12.8,0-22.1,10.3-23.1,23.1V406h5.3v-0.5c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.5h5.1v-65.6  C383,327.7,372.7,317.3,359.9,317.3z M360,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3  C379.3,351.5,370.7,360.1,360,360.1z\" />\n<g\n   id=\"g26110\">\n\t<path\n   id=\"path26108\"\n   d=\"M253.1,391.5v2.5h-9.6c0.1-1,0.4-1.9,0.9-2.7s1.5-2,3.1-3.4c1.2-1.2,2-1.9,2.3-2.3c0.4-0.6,0.6-1.1,0.6-1.7   s-0.2-1.1-0.5-1.4s-0.8-0.5-1.4-0.5c-0.6,0-1,0.2-1.4,0.5s-0.5,0.9-0.6,1.7l-2.7-0.3c0.2-1.5,0.7-2.6,1.5-3.3s1.9-1,3.2-1   c1.4,0,2.5,0.4,3.3,1.1c0.8,0.8,1.2,1.7,1.2,2.8c0,0.6-0.1,1.3-0.3,1.8c-0.2,0.6-0.6,1.2-1.1,1.8c-0.3,0.4-0.9,1-1.8,1.8   c-0.9,0.8-1.4,1.3-1.6,1.6s-0.4,0.5-0.6,0.8h5.5V391.5z\" />\n</g>\n<linearGradient\n   id=\"path26121_00000171711156512198276540000000641668459849732246_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"458\"\n   y1=\"2\"\n   x2=\"458\"\n   y2=\"90.4\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop330\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop332\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop334\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop336\" />\n</linearGradient>\n<path\n   id=\"path26121\"\n   style=\"fill:url(#path26121_00000171711156512198276540000000641668459849732246_);\"\n   d=\"M458,317.6  c-13,0-23.6,10.6-23.6,23.6V406h5.5c0-0.2,0-0.4,0-0.5v-0.9c0-4.1,3.3-7.4,7.4-7.4h21c4.1,0,7.4,3.3,7.4,7.4v0.6  c2-0.5,3.9-1.1,5.9-1.9v-62C481.6,328.1,471,317.6,458,317.6z M457.8,360.9c-10.7,0-19.3-8.6-19.3-19.3s8.6-19.3,19.3-19.3  c10.7,0,19.3,8.7,19.3,19.3C477.1,352.2,468.4,360.9,457.8,360.9z\" />\n<g\n   id=\"g26127\">\n\t<path\n   id=\"path26123\"\n   d=\"M348.3,390.2l2.7-0.3c0.1,0.7,0.3,1.2,0.7,1.6s0.8,0.5,1.3,0.5c0.6,0,1-0.2,1.4-0.6s0.6-1,0.6-1.7   s-0.2-1.2-0.6-1.6s-0.8-0.6-1.4-0.6c-0.4,0-0.8,0.1-1.3,0.2l0.3-2.2c0.7,0,1.3-0.1,1.7-0.5s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2   c-0.3-0.3-0.7-0.4-1.1-0.4c-0.5,0-0.9,0.2-1.2,0.5s-0.5,0.8-0.6,1.4l-2.5-0.4c0.2-0.9,0.4-1.6,0.8-2.1s0.8-0.9,1.5-1.2   s1.3-0.4,2.1-0.4c1.3,0,2.4,0.4,3.2,1.3c0.7,0.7,1,1.5,1,2.4c0,1.3-0.7,2.3-2.1,3c0.8,0.2,1.5,0.6,2,1.2s0.7,1.4,0.7,2.2   c0,1.3-0.5,2.3-1.4,3.2s-2.1,1.3-3.4,1.3s-2.4-0.4-3.2-1.1C348.9,392.4,348.4,391.4,348.3,390.2z\" />\n\t<path\n   id=\"path26125\"\n   d=\"M363.7,394l-5.1-14.3h3.1l3.6,10.6l3.5-10.6h3.1l-5.1,14.3H363.7z\" />\n</g>\n<g\n   id=\"g26135\">\n\t<path\n   id=\"path26129\"\n   d=\"M444.5,388.5v-2.4h6.2v5.7c-0.6,0.6-1.5,1.1-2.6,1.5s-2.3,0.7-3.5,0.7c-1.5,0-2.8-0.3-3.9-0.9   s-2-1.5-2.5-2.7s-0.8-2.4-0.8-3.8c0-1.5,0.3-2.8,0.9-4s1.5-2,2.7-2.7c0.9-0.5,2.1-0.7,3.4-0.7c1.8,0,3.2,0.4,4.2,1.1   s1.6,1.8,1.9,3.1l-2.9,0.5c-0.2-0.7-0.6-1.3-1.1-1.7s-1.3-0.6-2.1-0.6c-1.3,0-2.3,0.4-3,1.2s-1.1,2-1.1,3.6c0,1.7,0.4,3,1.1,3.8   s1.7,1.3,3,1.3c0.6,0,1.2-0.1,1.8-0.4s1.1-0.5,1.6-0.9v-1.8L444.5,388.5L444.5,388.5z\" />\n\t<path\n   id=\"path26131\"\n   d=\"M453.4,393.7v-14.3h2.8l5.9,9.6v-9.6h2.7v14.3h-2.9l-5.8-9.3v9.3H453.4z\" />\n\t<path\n   id=\"path26133\"\n   d=\"M467.8,379.4h5.3c1.2,0,2.1,0.1,2.7,0.3c0.8,0.2,1.6,0.7,2.2,1.3s1.1,1.4,1.4,2.3s0.5,2,0.5,3.4   c0,1.2-0.1,2.2-0.4,3c-0.4,1-0.9,1.9-1.5,2.5c-0.5,0.5-1.2,0.9-2,1.1c-0.6,0.2-1.5,0.3-2.6,0.3H468v-14.2H467.8z M470.7,381.8v9.5   h2.2c0.8,0,1.4,0,1.7-0.1c0.5-0.1,0.9-0.3,1.2-0.6s0.6-0.7,0.8-1.4s0.3-1.5,0.3-2.6s-0.1-2-0.3-2.5s-0.5-1.1-0.8-1.4   s-0.8-0.6-1.3-0.7c-0.4-0.1-1.2-0.1-2.4-0.1L470.7,381.8L470.7,381.8z\" />\n</g>\n<rect\n   id=\"rect26137\"\n   x=\"45.1\"\n   y=\"172\"\n   class=\"st36\"\n   width=\"22.4\"\n   height=\"72.8\" />\n<path\n   id=\"path26139\"\n   class=\"st37\"\n   d=\"M58,241.9h-2.9c-5.2,0-9.4-4.2-9.4-9.4v-48.2c0-5.2,4.2-9.4,9.4-9.4H58c5.2,0,9.4,4.2,9.4,9.4  v48.2C67.4,237.7,63.2,241.9,58,241.9z\" />\n<rect\n   id=\"rect26141\"\n   x=\"50.4\"\n   y=\"177.8\"\n   width=\"12.6\"\n   height=\"61.7\" />\n<path\n   id=\"path26143\"\n   d=\"M73.2,236.2H39.7c-6.1,0-11.1-5-11.1-11.1v-33.4c0-6.1,5-11.1,11.1-11.1h33.4c6.1,0,11.1,5,11.1,11.1v33.4  C84.3,231.2,79.3,236.2,73.2,236.2z\" />\n<path\n   id=\"path26145\"\n   class=\"st38\"\n   d=\"M68.9,232.2H44c-6.5,0-11.7-5.3-11.7-11.7v-24.9c0-6.5,5.3-11.7,11.7-11.7h24.8  c6.5,0,11.7,5.3,11.7,11.7v24.9C80.6,227,75.3,232.2,68.9,232.2z\" />\n<ellipse\n   id=\"BUTTON_A\"\n   class=\"st39\"\n   cx=\"56.4\"\n   cy=\"207.2\"\n   rx=\"21.2\"\n   ry=\"21.2\" />\n<rect\n   id=\"rect26153\"\n   x=\"434.1\"\n   y=\"171.7\"\n   class=\"st36\"\n   width=\"22.4\"\n   height=\"72.8\" />\n<path\n   id=\"path26155\"\n   class=\"st37\"\n   d=\"M447,241.7h-2.9c-5.2,0-9.4-4.2-9.4-9.4v-48.2c0-5.2,4.2-9.4,9.4-9.4h2.9  c5.2,0,9.4,4.2,9.4,9.4v48.2C456.5,237.5,452.2,241.7,447,241.7z\" />\n<rect\n   id=\"rect26157\"\n   x=\"439.5\"\n   y=\"177.5\"\n   width=\"12.6\"\n   height=\"61.7\" />\n<path\n   id=\"path26159\"\n   d=\"M462.2,236h-33.4c-6.1,0-11.1-5-11.1-11.1v-33.4c0-6.1,5-11.1,11.1-11.1h33.4c6.1,0,11.1,5,11.1,11.1v33.4  C473.3,231,468.3,236,462.2,236z\" />\n<path\n   id=\"path26161\"\n   class=\"st38\"\n   d=\"M457.9,232h-24.8c-6.5,0-11.7-5.3-11.7-11.7v-24.9c0-6.5,5.3-11.7,11.7-11.7h24.8  c6.5,0,11.7,5.3,11.7,11.7v24.9C469.6,226.7,464.4,232,457.9,232z\" />\n<ellipse\n   id=\"BUTTON_B\"\n   class=\"st39\"\n   cx=\"445.5\"\n   cy=\"207\"\n   rx=\"21.2\"\n   ry=\"21.2\" />\n<linearGradient\n   id=\"circle26178_00000067953745860036820580000011806216391709784733_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"4.7304\"\n   y1=\"108.7\"\n   x2=\"19.3764\"\n   y2=\"108.7\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop359\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop361\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop363\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop365\" />\n</linearGradient>\n<circle\n   id=\"circle26178\"\n   style=\"fill:url(#circle26178_00000067953745860036820580000011806216391709784733_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;\"\n   cx=\"12.1\"\n   cy=\"299.3\"\n   r=\"7.3\" />\n<linearGradient\n   id=\"circle26189_00000129904340494184524480000011571472474862025655_\"\n   gradientUnits=\"userSpaceOnUse\"\n   x1=\"475.8\"\n   y1=\"105\"\n   x2=\"490.446\"\n   y2=\"105\"\n   gradientTransform=\"matrix(1 0 0 -1 0 408)\">\n\t<stop\n   offset=\"0\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop369\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#D4AF37\"\n   id=\"stop371\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop373\" />\n\t<stop\n   offset=\"1\"\n   style=\"stop-color:#FF5500\"\n   id=\"stop375\" />\n</linearGradient>\n<circle\n   id=\"circle26189\"\n   style=\"fill:url(#circle26189_00000129904340494184524480000011571472474862025655_);stroke:#9E6407;stroke-width:3.7653;stroke-miterlimit:10;\"\n   cx=\"483.1\"\n   cy=\"303\"\n   r=\"7.3\" />\n</svg>\n";
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.mkBoardView = function (opts) {
            return new visuals.BrainPadBoardSvg({
                runtime: pxsim.runtime,
                theme: visuals.randomTheme(),
                disableTilt: false,
                wireframe: opts.wireframe,
            });
        };
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        var AnalogPinControl = /** @class */ (function () {
            function AnalogPinControl(parent, defs, id, name) {
                this.parent = parent;
                this.defs = defs;
                this.id = id;
                this.pin = pxsim.board().edgeConnectorState.getPin(this.id);
                // Init the button events
                this.outerElement = parent.element.getElementById(name);
                pxsim.svg.addClass(this.outerElement, "sim-pin-touch");
                this.addButtonEvents();
                if (this.pin.used) {
                    pxsim.accessibility.makeFocusable(this.outerElement);
                    pxsim.accessibility.setAria(this.outerElement, "button", this.outerElement.firstChild.textContent);
                }
                // Init the gradient controls
                // const gid = `gradient-${CPlayPinName[id]}-level`;
                // this.innerCircle = parent.element.getElementById("PIN_CONNECTOR_" + CPlayPinName[id]) as SVGCircleElement;
                // this.gradient = svg.linearGradient(this.defs, gid);
                // this.innerCircle.setAttribute("fill", `url(#${gid})`);
                // this.innerCircle.setAttribute("class", "sim-light-level-button")
                // this.addLevelControlEvents()
                this.updateTheme();
            }
            AnalogPinControl.prototype.updateTheme = function () {
                var theme = this.parent.props.theme;
                pxsim.svg.setGradientColors(this.gradient, theme.lightLevelOff, 'darkorange');
            };
            AnalogPinControl.prototype.updateValue = function () {
                var value = this.pin.value;
                if (value === this.currentValue) {
                    return;
                }
                this.currentValue = value;
                // svg.setGradientValue(this.gradient, 100 - Math.min(100, Math.max(0, Math.floor(value * 100 / 1023))) + '%')
                // if (this.innerCircle.childNodes.length) {
                //    this.innerCircle.removeChild(this.innerCircle.childNodes[0])
                // }
                pxsim.svg.title(this.outerElement, value.toString());
            };
            AnalogPinControl.prototype.addButtonEvents = function () {
                var _this = this;
                pxsim.pointerEvents.down.forEach(function (evid) { return _this.outerElement.addEventListener(evid, function (ev) {
                    _this.pin.touched = true;
                    pxsim.svg.addClass(_this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(_this.id).setPressed(true);
                }); });
                this.outerElement.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                    _this.pin.touched = false;
                    pxsim.svg.removeClass(_this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(_this.id).setPressed(false);
                });
                this.outerElement.addEventListener(pxsim.pointerEvents.up, function (ev) {
                    _this.pin.touched = false;
                    pxsim.svg.removeClass(_this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(_this.id).setPressed(false);
                });
                pxsim.accessibility.enableKeyboardInteraction(this.outerElement, function () {
                    _this.pin.touched = true;
                    pxsim.svg.addClass(_this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(_this.id).setPressed(true);
                }, function () {
                    _this.pin.touched = false;
                    pxsim.svg.removeClass(_this.outerElement, "touched");
                    pxsim.pxtcore.getTouchButton(_this.id).setPressed(false);
                });
            };
            AnalogPinControl.prototype.addLevelControlEvents = function () {
                var _this = this;
                var cy = parseFloat(this.innerCircle.getAttribute("cy"));
                var r = parseFloat(this.innerCircle.getAttribute("r"));
                var pt = this.parent.element.createSVGPoint();
                pxsim.svg.buttonEvents(this.innerCircle, function (ev) {
                    var pos = pxsim.svg.cursorPoint(pt, _this.parent.element, ev);
                    var rs = r / 2;
                    var level = Math.max(0, Math.min(1023, Math.floor((1 - (pos.y - (cy - rs)) / (2 * rs)) * 1023)));
                    if (level != _this.pin.value) {
                        _this.pin.value = level;
                        _this.updateValue();
                    }
                }, function (ev) { }, function (ev) { });
            };
            return AnalogPinControl;
        }());
        visuals.AnalogPinControl = AnalogPinControl;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
