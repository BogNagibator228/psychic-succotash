// #MODS TXT LINES:
//    {"name":"ModsSettings","status":true,"parameters":{"optional": true}},
//    {"name":"SelectiveRendering","status":true,"parameters":{"optional": true}},
//    {"name":"FastCutIns","status":true,"description":"","parameters":{"name":"FastCutIns","displayedName":"Fast Cut-Ins","version":"5.2.0","parametersDetails":{"threads":{"description":"Number of processing threads","note":"If increased improves speed till certain point, but increases memory consumption. Set -1 to choose number automatically based on number of CPUs. If you experience crushes reduce this value (minimal value: 1)."},"operationTimeout":{"description":"Time limit to process single operation.","note":"If you have slow device and have errors in log, you might want to increase this value."},"disableStartupProcessing":{"description":"Disables optimizing images at the game start","note":"If you have problems during game startup change values to 'true'"},"isDebug":{"description":"Enable debug logging","note":"Enable detailed logging for debugging. 0 - disabled."}},"threads":-1,"operationTimeout":15000,"disableStartupProcessing":false,"isDebug":0}},
// #MODS TXT LINES END

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define(["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["FastCutIns"] = factory(require("PIXI"));
	else
		root["FastCutIns"] = factory(root["PIXI"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_pixi_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./module/canvasPreviewManager.ts"
/*!****************************************!*\
  !*** ./module/canvasPreviewManager.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCanvasPreview: () => (/* binding */ addCanvasPreview),
/* harmony export */   removeCanvasPreview: () => (/* binding */ removeCanvasPreview)
/* harmony export */ });
/* harmony import */ var _styles_canvases_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/canvases.css */ "./module/styles/canvases.css");

const container = createCanvasesContainer();
function addCanvasPreview(canvas) {
    container.prepend(canvas);
    setTimeout(() => fadeIn(canvas));
}
function removeCanvasPreview(canvas) {
    fadeOutAndRemove(canvas);
}
function createCanvasesContainer() {
    // TODO: Remove margin fix if game applied it.
    document.body.style.margin = '0';
    const canvases = document.createElement('div');
    canvases.className = 'canvases';
    document.body.prepend(canvases);
    return canvases;
}
const maxHeight = 50;
function fadeOutAndRemove(el) {
    el.style.height = '0%';
    setTimeout(() => el.remove(), 250);
}
function fadeIn(el) {
    el.style.height = maxHeight + '%';
}


/***/ },

/***/ "./module/convertPosesToSpriteSheet.ts"
/*!*********************************************!*\
  !*** ./module/convertPosesToSpriteSheet.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertAllPosesToSpriteSheets: () => (/* binding */ convertAllPosesToSpriteSheets),
/* harmony export */   convertPoseToSpriteSheet: () => (/* binding */ convertPoseToSpriteSheet),
/* harmony export */   generateFastPoses: () => (/* binding */ generateFastPoses),
/* harmony export */   getFastPosesFolder: () => (/* binding */ getFastPosesFolder),
/* harmony export */   getPoseSpriteSheet: () => (/* binding */ getPoseSpriteSheet),
/* harmony export */   getSupportedPoseFolder: () => (/* binding */ getSupportedPoseFolder),
/* harmony export */   loadAllSpriteSheets: () => (/* binding */ loadAllSpriteSheets)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./module/utils.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _workerAdapters_pngWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workerAdapters/pngWorker */ "./module/workerAdapters/pngWorker.ts");
/* harmony import */ var _spriteSheet_multipartSpriteSheetBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spriteSheet/multipartSpriteSheetBuilder */ "./module/spriteSheet/multipartSpriteSheetBuilder.ts");
/* harmony import */ var _spriteSheet_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spriteSheet/utils */ "./module/spriteSheet/utils.ts");
/* harmony import */ var _loadingQueue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadingQueue */ "./module/loadingQueue.ts");
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info.json */ "./module/info.json");
/* harmony import */ var _operationCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operationCache */ "./module/operationCache.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logging */ "./module/logging.ts");
/* harmony import */ var _kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @kp-mods/mods-settings */ "./node_modules/@kp-mods/mods-settings/lib/index.js");
/* harmony import */ var _kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pixiRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pixiRenderer */ "./module/pixiRenderer.ts");
/* harmony import */ var _workerAdapters_canvasWorkersPool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workerAdapters/canvasWorkersPool */ "./module/workerAdapters/canvasWorkersPool.ts");
/* harmony import */ var _poseConversionQueue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./poseConversionQueue */ "./module/poseConversionQueue.ts");
/* harmony import */ var _posesRepository__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posesRepository */ "./module/posesRepository.ts");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notifications */ "./module/notifications.ts");

















const readdirAsync = fs__WEBPACK_IMPORTED_MODULE_2__.promises?.readdir ?? (0,util__WEBPACK_IMPORTED_MODULE_3__.promisify)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.ensureFsFunction)('readdir'));
let supportedPoses = new Map();
let poseSettings;
function getPoseName(posePath) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toUrl)(posePath) + '/';
}
function getEnabledPoseSettingName(poseName) {
    return 'pose_enabled_' + poseName;
}
function getSupportedPoseFolder(location) {
    while (location !== './') {
        if (supportedPoses.has(location)) {
            const enabledPoseSettingName = getEnabledPoseSettingName(location);
            return poseSettings?.get(enabledPoseSettingName) === true
                ? location
                : undefined;
        }
        location = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(location) + '/';
    }
    return undefined;
}
function getPoseSpriteSheet(poseFolder) {
    const spriteSheet = supportedPoses.get(poseFolder);
    if (!spriteSheet) {
        throw new Error(`Fast pose '${poseFolder}' is not supported.`);
    }
    return spriteSheet;
}
function loadAllSpriteSheets() {
    for (const spriteSheetName of Array.from(supportedPoses.values())) {
        (0,_pixiRenderer__WEBPACK_IMPORTED_MODULE_12__.startLoadingSpriteSheet)(spriteSheetName);
    }
}
async function generateFastPoses() {
    const posesFolders = (0,_posesRepository__WEBPACK_IMPORTED_MODULE_15__.getPosesFolders)();
    _logging__WEBPACK_IMPORTED_MODULE_10__["default"].info(posesFolders, 'Starting optimization of poses in folders');
    for (const posesFolder of posesFolders) {
        (0,_poseConversionQueue__WEBPACK_IMPORTED_MODULE_14__.enqueuePosesConversion)(posesFolder);
    }
    await (0,_poseConversionQueue__WEBPACK_IMPORTED_MODULE_14__.completeConversion)();
}
function getFastPosesFolder(folder) {
    return folder + '_fast';
}
async function convertAllPosesToSpriteSheets(posesFolder, destination = posesFolder) {
    posesFolder = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.resolvePath)(posesFolder);
    const entries = await readdirAsync(posesFolder, { withFileTypes: true })
        .catch((err) => {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isExceptionWithCode)(err) && err.code !== 'ENOENT') {
            _logging__WEBPACK_IMPORTED_MODULE_10__["default"].warn({ err, posesFolder }, 'Unable to read content of poses folder');
        }
        return [];
    });
    const poses = [];
    for (const entry of entries) {
        // noinspection SuspiciousTypeOfGuard - Android emulators don't support `withFileTypes: true`.
        const isDirectory = typeof entry === 'string' ? !path__WEBPACK_IMPORTED_MODULE_1___default().extname(entry) : entry.isDirectory();
        // noinspection SuspiciousTypeOfGuard - Android emulators don't support `withFileTypes: true`.
        const entryName = typeof entry === 'string' ? entry : entry.name;
        if (isDirectory) {
            poses.push({
                dir: posesFolder,
                entryName
            });
        }
        else {
            _logging__WEBPACK_IMPORTED_MODULE_10__["default"].warn({ file: entryName, folder: posesFolder }, 'Found stray file in root folder');
        }
    }
    _logging__WEBPACK_IMPORTED_MODULE_10__["default"].info({ poses, posesFolder }, 'Found poses in folder');
    const progressReporter = new _loadingQueue__WEBPACK_IMPORTED_MODULE_7__["default"](`${_info_json__WEBPACK_IMPORTED_MODULE_8__.displayedName}: Checking poses in '${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRelativePath)(posesFolder)}'...`, `${_info_json__WEBPACK_IMPORTED_MODULE_8__.displayedName}: Speeding up poses in '${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRelativePath)(posesFolder)}' (one-time)...`, poses.length);
    const canvasWorkersPool = new _workerAdapters_canvasWorkersPool__WEBPACK_IMPORTED_MODULE_13__.CanvasWorkersPool();
    const failedPoses = [];
    try {
        const posesSpriteSheets = await (0,_operationCache__WEBPACK_IMPORTED_MODULE_9__.processWithCaching)(posesFolder, poses, async ({ dir, entryName }) => {
            const outputPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(destination, entryName);
            await convertPoseToSpriteSheet(canvasWorkersPool, (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(dir, entryName), entryName, outputPath);
            return {
                spriteSheet: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getUniversalPath)((0,path__WEBPACK_IMPORTED_MODULE_1__.join)(outputPath, entryName + '_0.json'))
            };
        }, (entry, error) => {
            _logging__WEBPACK_IMPORTED_MODULE_10__["default"].error({
                pose: entry.entryName,
                path: entry.dir,
                error
            }, 'Unable to convert pose to sprite sheets');
            failedPoses.push({ name: entry.entryName, reason: error.toString() });
        }, progressReporter, '5.1.2');
        // noinspection JSUnusedLocalSymbols
        const _ = (0,_notifications__WEBPACK_IMPORTED_MODULE_16__.displayOptimizationFailures)(failedPoses, posesFolder, entries.length, 'poses');
        let poseDefaultSettings = {};
        for (const { name, spriteSheet } of posesSpriteSheets) {
            if (spriteSheet) {
                const poseName = getPoseName(name);
                supportedPoses.set(poseName, spriteSheet);
                poseDefaultSettings[getEnabledPoseSettingName(poseName)] = {
                    type: 'bool',
                    defaultValue: true,
                    group: 'poses',
                    description: {
                        title: `"${poseName}" enabled`,
                        help: 'Enable fast pose rendering. Falls back to vanilla pose rendering if disabled.'
                    }
                };
            }
        }
        poseSettings = (0,_kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_11__.forMod)(_info_json__WEBPACK_IMPORTED_MODULE_8__.name)
            .addSettings(poseDefaultSettings)
            .register();
    }
    finally {
        canvasWorkersPool.dispose();
        progressReporter.dispose();
    }
}
async function convertPoseToSpriteSheet(canvasWorkersPool, poseFolder, poseName = (0,path__WEBPACK_IMPORTED_MODULE_1__.basename)(poseFolder), destination = poseFolder) {
    poseFolder = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.resolvePath)(poseFolder);
    destination = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.resolvePath)(destination);
    const spriteSheetBuilder = new _spriteSheet_multipartSpriteSheetBuilder__WEBPACK_IMPORTED_MODULE_5__.MultipartSpriteSheetBuilder(poseName, canvasWorkersPool);
    try {
        const images = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.measure)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getFiles)(poseFolder));
        _logging__WEBPACK_IMPORTED_MODULE_10__["default"].info({ pose: poseName, imagesCount: images.length }, 'Converting pose to sprite sheet');
        for (const { dir, entryName } of images) {
            if (!entryName.endsWith('.rpgmvp') && !entryName.endsWith(('.png'))) {
                continue;
            }
            const fullName = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(dir, entryName);
            const frameName = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripExtension)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.toUrl)(fullName));
            const buffer = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.measure)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.queryFile)(fullName, 'arraybuffer'));
            const { framesData } = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.measure)(() => (0,_workerAdapters_pngWorker__WEBPACK_IMPORTED_MODULE_4__["default"])(fullName, buffer));
            if (framesData.length !== 1) {
                throw new Error(`Invalid number of frames decoded (data: ${framesData.length}).`);
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.measure)(() => spriteSheetBuilder.addFrame(frameName, framesData[0], {}));
        }
        await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.measure)(() => (0,_spriteSheet_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(spriteSheetBuilder, destination));
    }
    finally {
        await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.measure)(() => spriteSheetBuilder.dispose());
    }
}


/***/ },

/***/ "./module/info.json"
/*!**************************!*\
  !*** ./module/info.json ***!
  \**************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"FastCutIns","displayedName":"Fast Cut-Ins","version":"5.2.0","parametersDetails":{"threads":{"description":"Number of processing threads","note":"If increased improves speed till certain point, but increases memory consumption. Set -1 to choose number automatically based on number of CPUs. If you experience crushes reduce this value (minimal value: 1)."},"operationTimeout":{"description":"Time limit to process single operation.","note":"If you have slow device and have errors in log, you might want to increase this value."},"disableStartupProcessing":{"description":"Disables optimizing images at the game start","note":"If you have problems during game startup change values to \'true\'"},"isDebug":{"description":"Enable debug logging","note":"Enable detailed logging for debugging. 0 - disabled."}},"threads":-1,"operationTimeout":15000,"disableStartupProcessing":false,"isDebug":0}');

/***/ },

/***/ "./module/loadingQueue.ts"
/*!********************************!*\
  !*** ./module/loadingQueue.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingProgressReporter)
/* harmony export */ });
/* harmony import */ var _styles_loaders_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/loaders.css */ "./module/styles/loaders.css");
/* harmony import */ var _styles_loading_border_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/loading-border.css */ "./module/styles/loading-border.css");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging */ "./module/logging.ts");



// TODO: Add loading queue to separate "parallel" operations in future.
class LoadingProgressReporter {
    constructor(checkingTitle, loadingTitle, total) {
        this.checkingTitle = checkingTitle;
        this.loadingTitle = loadingTitle;
        this.total = total;
        this.tasksInProgress = new Map();
        this.taskCounter = 0;
        if (!checkingTitle) {
            throw new Error('Checking title is required.');
        }
        if (!loadingTitle) {
            throw new Error('Loading title is required.');
        }
        if (Number.isNaN(total) || total < 0) {
            throw new Error('Invalid total number or units.');
        }
        this.total = Math.round(total * 2);
        this.totalProgressBar = document.createElement('div');
        this.totalProgressBar.classList.add('container');
        this.totalProgressBar.innerHTML = `
            <div class="row header">
                <div id="title">${checkingTitle}</div>
                <div>
                    <span id="totalProgress">0</span>%
                </div>
            </div>
            <svg class="border-loader"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 14 150 38"
                 preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave"
                          d="M-160 44c30 0
                             58-10 88-10s
                             58 10 88 10
                             58-10 88-10
                             58 10 88 10
                             v44h-352z" />
                </defs>
                <g class="parallax1">
                    <use xlink:href="#gentle-wave" x="50" y="-12"/>
                </g>
                <g class="parallax2">
                    <use xlink:href="#gentle-wave" x="50" y="-6"/>
                </g>
                <g class="parallax3">
                    <use xlink:href="#gentle-wave" x="50" y="2"/>
                </g>
            </svg>
        `;
        const titleElement = this.totalProgressBar.querySelector('#title');
        if (!titleElement) {
            throw new Error('Invalid report format: missing #title element');
        }
        this.titleElement = titleElement;
        document.body.appendChild(this.totalProgressBar);
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].debug({ tasks: total, processingTitle: loadingTitle }, 'Created progress reporter');
    }
    addTask(key, text) {
        this.titleElement.innerHTML = this.loadingTitle;
        this.taskCounter++;
        if (this.tasksInProgress.has(key)) {
            _logging__WEBPACK_IMPORTED_MODULE_2__["default"].error({ key }, 'Duplicate task with key.');
        }
        // TODO: Finish progress bar element.
        const taskProgressBar = document.createElement('div');
        taskProgressBar.classList.add('row');
        taskProgressBar.innerHTML = `
            <div>${text}</div>
            <div class="lds-heart"><div></div></div>
        `;
        this.totalProgressBar.appendChild(taskProgressBar);
        this.tasksInProgress.set(key, taskProgressBar);
        const progress = this.updateProgress();
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].debug({ task: key, progress, title: this.loadingTitle }, 'Started task');
    }
    completeTask(key) {
        this.taskCounter++;
        const progressElement = this.tasksInProgress.get(key);
        // TODO: Add success animation with disappearance timeout.
        progressElement?.remove();
        this.tasksInProgress.delete(key);
        const progress = this.updateProgress();
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].debug({ task: key, progress, title: this.loadingTitle }, 'Completed task');
    }
    addCompletedTask(_) {
        this.taskCounter += 2;
        const progress = this.updateProgress();
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].debug({ progress, title: this.loadingTitle }, 'Added completed task');
    }
    dispose() {
        this.setProgress(100);
        this.totalProgressBar.remove();
    }
    setProgress(progress) {
        const progressValueElement = this.totalProgressBar.querySelector('#totalProgress');
        if (progressValueElement) {
            progressValueElement.innerText = Math.round(progress).toString();
        }
    }
    updateProgress() {
        const progress = Math.round(Math.min(this.taskCounter / this.total * 100, 100));
        this.setProgress(progress);
        return progress;
    }
}


/***/ },

/***/ "./module/logging.ts"
/*!***************************!*\
  !*** ./module/logging.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLogger: () => (/* binding */ createLogger),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.json */ "./module/info.json");
/* harmony import */ var _workerAdapters_workerOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workerAdapters/workerOperation */ "./module/workerAdapters/workerOperation.ts");


const isDebug = (0,_workerAdapters_workerOperation__WEBPACK_IMPORTED_MODULE_1__.parseNumericParameter)('isDebug', 0) !== 0;
function getLoggerPrefix(level) {
    const date = new Date();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const ms = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${ms} [${level}]`;
}
function createLogger(label, isDebug) {
    return globalThis.Logger?.createDefaultLogger(label, isDebug)
        || {
            verbose: (...args) => isDebug && console.trace(getLoggerPrefix('TRC'), label, ...args),
            debug: (...args) => isDebug && console.debug(getLoggerPrefix('DBG'), label, ...args),
            info: (...args) => console.info(getLoggerPrefix('INF'), label, ...args),
            warn: (...args) => console.warn(getLoggerPrefix('WRN'), label, ...args),
            error: (...args) => console.error(getLoggerPrefix('ERR'), label, ...args),
        };
}
const logger = createLogger(_info_json__WEBPACK_IMPORTED_MODULE_0__.name, isDebug);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);


/***/ },

/***/ "./module/notifications.ts"
/*!*********************************!*\
  !*** ./module/notifications.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayOptimizationFailures: () => (/* binding */ displayOptimizationFailures),
/* harmony export */   notifySuccessWithCountdown: () => (/* binding */ notifySuccessWithCountdown)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./module/utils.ts");

async function notifySuccessWithCountdown(message) {
    if (!window.Alert) {
        return;
    }
    const getConfirmButtonText = (secondsRemain) => {
        return `Restart (${secondsRemain})`;
    };
    let countDownSec = 20;
    const countDownId = setInterval(() => {
        if (--countDownSec < 0) {
            clearInterval(countDownId);
            window.Alert?.default.clickConfirm();
            return;
        }
        const confirmButton = window.Alert?.default.getConfirmButton();
        if (confirmButton) {
            confirmButton.textContent = getConfirmButtonText(countDownSec);
        }
    }, 1000);
    try {
        const answer = await window.Alert.default.fire({
            icon: 'success',
            title: message,
            showCancelButton: true,
            cancelButtonText: 'Restart later',
            confirmButtonText: getConfirmButtonText(countDownSec)
        });
        if (answer.isConfirmed) {
            location.reload();
        }
    }
    finally {
        clearInterval(countDownId);
    }
}
async function displayOptimizationFailures(failures, location, total, failuresName) {
    if (!window.Alert) {
        return;
    }
    if (failures.length) {
        const { isConfirmed } = await Alert.default.fire({
            icon: 'error',
            title: `Failed to optimize some ${failuresName}`,
            html: `<h4>
                        Unable to optimize following ${failuresName} in folder
                        '${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRelativePath)(location).replace(/ /g, '&nbsp;')}'
                        (${failures.length}/${total}):
                    </h4>
                    <ul style="text-align: left;">
                        ${failures.map(({ name, reason }) => {
                reason = reason.replace(/"/g, '&quot;');
                name = name.replace(/[<>]/g, '');
                return `<li title="${reason}">${name}</li>`;
            }).join('\n')}
                    </ul>`,
            confirmButtonText: 'Retry',
            showCancelButton: true,
            allowOutsideClick: false,
            cancelButtonText: 'Ignore',
        });
        if (isConfirmed) {
            globalThis.location.reload();
        }
    }
}


/***/ },

/***/ "./module/operationCache.ts"
/*!**********************************!*\
  !*** ./module/operationCache.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   processWithCaching: () => (/* binding */ processWithCaching)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging */ "./module/logging.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./module/utils.ts");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _operationCacheSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operationCacheSettings */ "./module/operationCacheSettings.ts");







const writeFileAsync = fs__WEBPACK_IMPORTED_MODULE_1__.promises?.writeFile ?? (0,util__WEBPACK_IMPORTED_MODULE_3__.promisify)((0,_utils__WEBPACK_IMPORTED_MODULE_4__.ensureFsFunction)('writeFile'));
const unlinkAsync = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getFsAsync)(() => fs__WEBPACK_IMPORTED_MODULE_1__.promises?.unlink, () => null, () => (fs__WEBPACK_IMPORTED_MODULE_1___default().unlinkSync));
const statAsync = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getFsAsync)(() => fs__WEBPACK_IMPORTED_MODULE_1__.promises?.stat, () => null, () => (fs__WEBPACK_IMPORTED_MODULE_1___default().statSync));
class OperationCache {
    constructor(cacheFilePath, cache, minimalVersion) {
        this.cacheFilePath = cacheFilePath;
        this.cache = cache;
        this.minimalVersion = minimalVersion;
        if (!this.cacheFilePath) {
            throw new Error('Cache file location is required.');
        }
        if (!this.minimalVersion) {
            throw new Error('Minimal cache version is required.');
        }
        if (!this.cache) {
            this.cache = {};
        }
    }
    static async loadLocked(location, minimalVersion = OperationCache.defaultMinimalVersion) {
        return this.loadFromFile(location, OperationCache.lockFileName, minimalVersion);
    }
    static async load(location, minimalVersion = OperationCache.defaultMinimalVersion) {
        return this.loadFromFile(location, OperationCache.fileName, minimalVersion);
    }
    static async loadFromFile(location, fileName, minimalVersion = OperationCache.defaultMinimalVersion) {
        let rawCache;
        const cacheFilePath = this.getCachePath(location, fileName);
        try {
            const response = await fetch((0,_utils__WEBPACK_IMPORTED_MODULE_4__.toUrl)(cacheFilePath));
            if (response.ok) {
                rawCache = await response.json();
                _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ location }, 'Cache file loaded successfully');
            }
            else {
                _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ location }, 'Cache file is not found.');
                rawCache = {};
            }
        }
        catch {
            _logging__WEBPACK_IMPORTED_MODULE_2__["default"].warn({ location }, 'Unable to parse cache file');
            rawCache = {};
        }
        return new OperationCache(cacheFilePath, rawCache, new semver__WEBPACK_IMPORTED_MODULE_5__.SemVer(minimalVersion));
    }
    static getCachePath(location, fileName) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.resolvePath)(location, fileName);
    }
    getCache(name) {
        const cacheItem = this.cache[name];
        if (cacheItem &&
            semver__WEBPACK_IMPORTED_MODULE_5___default().gte(cacheItem.version || OperationCache.defaultMinimalVersion, this.minimalVersion)) {
            return cacheItem;
        }
        return null;
    }
    setCache(name, cache) {
        cache.version = this.minimalVersion.toString();
        this.cache[name] = cache;
    }
    async invalidate() {
        try {
            await unlinkAsync(this.cacheFilePath);
            _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ location: this.cacheFilePath }, 'Invalidated cache');
        }
        catch (error) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isExceptionWithCode)(error) && error.code === 'ENOENT') {
                _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ location: this.cacheFilePath }, 'No cache found');
            }
            else {
                throw error;
            }
        }
    }
    async save() {
        const cacheData = JSON.stringify(this.cache, undefined, 4);
        await writeFileAsync(this.cacheFilePath, cacheData);
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ location: this.cacheFilePath }, 'Cache saved');
    }
}
OperationCache.fileName = '.fast-cut-ins';
OperationCache.lockFileName = '.fast-cut-ins.lock';
OperationCache.defaultMinimalVersion = '0.0.0';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationCache);
const defaultMinCacheVersion = '0.0.0';
async function processWithCaching(dir, entries, action, onError, progressReporter, minimalVersion = defaultMinCacheVersion) {
    const lockedCache = await OperationCache.loadLocked(dir, minimalVersion);
    const cache = await OperationCache.load(dir, minimalVersion);
    let parallelism = Math.ceil((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDefaultConcurrency)() * 1.5);
    const promiseRoots = [];
    let isCacheChanged = false;
    const queue = (index, action) => {
        const rootNumber = index % parallelism;
        promiseRoots[rootNumber] ?? (promiseRoots[rootNumber] = Promise.resolve());
        promiseRoots[rootNumber] = promiseRoots[rootNumber].then(action);
    };
    const animationsInfo = [];
    _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ operationsCount: entries.length, parallelism }, 'Executing operations with cache');
    let isLowOptimizationModeSelected;
    await Promise.all(entries.map(async (fileInfo, i) => {
        const { dir: location, entryName } = fileInfo;
        const fullName = path__WEBPACK_IMPORTED_MODULE_0___default().join(location, entryName);
        const cacheKey = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getUniversalPath)(path__WEBPACK_IMPORTED_MODULE_0___default().relative(dir, fullName));
        const lockedCachedInfo = lockedCache.getCache(cacheKey);
        const cachedInfo = cache.getCache(cacheKey);
        let modifiedTime = undefined;
        const getModifiedTime = async () => {
            if (modifiedTime === undefined) {
                const stats = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.measure)(() => statAsync(fullName));
                if (stats) {
                    modifiedTime = Number(stats.mtimeMs ?? 0.1);
                }
            }
            return modifiedTime ?? 0.1;
        };
        let validCacheInfo = null;
        if (lockedCachedInfo) {
            validCacheInfo = lockedCachedInfo;
        }
        else if (cachedInfo) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isAndroid)() && _operationCacheSettings__WEBPACK_IMPORTED_MODULE_6__["default"].get('skipCacheFileModifiedCheckOnAndroid') ||
                cachedInfo.modified === await getModifiedTime()) {
                validCacheInfo = cachedInfo;
            }
        }
        if (validCacheInfo) {
            animationsInfo.push(Object.assign({ name: fullName, ...validCacheInfo.metadata }));
            progressReporter.addCompletedTask(fullName);
            return;
        }
        if (!isCacheChanged) {
            isCacheChanged = true;
            isLowOptimizationModeSelected = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.askLowRamOptimizationMode)();
            await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.measure)(() => cache.invalidate());
        }
        if (isLowOptimizationModeSelected) {
            const isLowRamMode = await isLowOptimizationModeSelected;
            parallelism = Math.ceil((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDefaultConcurrency)(isLowRamMode) * 1.5);
            isLowOptimizationModeSelected = undefined;
        }
        const executeAction = async () => {
            try {
                progressReporter.addTask(fullName, `Processing '${entryName}'...`);
                const resultMetadata = await action({ dir: location, entryName });
                cache.setCache(cacheKey, {
                    modified: await getModifiedTime(),
                    metadata: resultMetadata
                });
                animationsInfo.push({ name: fullName, ...resultMetadata });
            }
            catch (err) {
                onError(fileInfo, err);
            }
            finally {
                progressReporter.completeTask(fullName);
            }
        };
        queue(i, executeAction);
    }));
    await Promise.all(promiseRoots);
    if (isCacheChanged) {
        await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.measure)(() => cache.save());
    }
    return animationsInfo;
}


/***/ },

/***/ "./module/operationCacheSettings.ts"
/*!******************************************!*\
  !*** ./module/operationCacheSettings.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kp-mods/mods-settings */ "./node_modules/@kp-mods/mods-settings/lib/index.js");
/* harmony import */ var _kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.json */ "./module/info.json");


const operationCacheSettings = (0,_kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_0__.forMod)(_info_json__WEBPACK_IMPORTED_MODULE_1__.name)
    .addSettings({
    skipCacheFileModifiedCheckOnAndroid: {
        type: 'bool',
        defaultValue: true,
        description: {
            title: 'Skip checking cached files for changes on Android',
            help: 'Don\'t check last modified date of cached files on Android. ' +
                'It might be useful if you performed optimization on PC (where it would be quicker) ' +
                'and moved files to Android.'
        }
    },
})
    .register();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (operationCacheSettings);


/***/ },

/***/ "./module/pixiRenderer.ts"
/*!********************************!*\
  !*** ./module/pixiRenderer.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSpriteTransformer: () => (/* binding */ addSpriteTransformer),
/* harmony export */   "default": () => (/* binding */ initializeRenderer),
/* harmony export */   registerLayerRenderingOptions: () => (/* binding */ registerLayerRenderingOptions),
/* harmony export */   startLoadingSpriteSheet: () => (/* binding */ startLoadingSpriteSheet)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logging */ "./module/logging.ts");
/* harmony import */ var _convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertPosesToSpriteSheet */ "./module/convertPosesToSpriteSheet.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./module/utils.ts");
/* harmony import */ var _posesRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posesRepository */ "./module/posesRepository.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_4__);





let currentLayerId;
const spriteTransformers = [];
function applySpriteTransforms(sprite, context) {
    for (const applyTransform of spriteTransformers) {
        applyTransform(sprite, context);
    }
}
/**
 * Adds handler to adjust sprites before rendering.
 * @param transformer
 */
function addSpriteTransformer(transformer) {
    spriteTransformers.push(transformer);
}
/**
 * Register options to be applied to layer sprite before rendering.
 * @param layer - Layer to apply sprite options to
 * @param options - Sprite options
 */
function registerLayerRenderingOptions(layer, options) {
    if (layer === undefined) {
        throw new Error('Layer id is required');
    }
    if (!options || !Object.keys(options).length) {
        throw new Error('Sprite options are empty');
    }
    addSpriteTransformer((sprite, context) => {
        if (context.layerId !== layer) {
            return;
        }
        sprite.cacheAsBitmap ?? (sprite.cacheAsBitmap = options.cacheAsBitmap);
        sprite.name ?? (sprite.name = options.name);
        sprite.tint ?? (sprite.tint = options.tint);
        sprite.blendMode ?? (sprite.blendMode = options.blendMode);
        sprite.pluginName ?? (sprite.pluginName = options.pluginName);
        sprite.accessible ?? (sprite.accessible = options.accessible);
        sprite.tabIndex ?? (sprite.tabIndex = options.tabIndex);
        sprite.interactive ?? (sprite.interactive = options.interactive);
        sprite.interactiveChildren ?? (sprite.interactiveChildren = options.interactiveChildren);
        sprite.hitArea ?? (sprite.hitArea = options.hitArea);
        sprite.alpha ?? (sprite.alpha = options.alpha);
        sprite.visible ?? (sprite.visible = options.visible);
        sprite.renderable ?? (sprite.renderable = options.renderable);
        sprite.worldAlpha ?? (sprite.worldAlpha = options.worldAlpha);
        sprite.mask ?? (sprite.mask = options.mask);
        if (options.filters?.length) {
            sprite.filters = sprite.filters
                ? sprite.filters.concat(options.filters)
                : options.filters;
        }
    });
}
function getNumberOrDefault(value, defaultValue = 0) {
    return typeof value === 'number' ? value : defaultValue;
}
function getTextureFromResource(spriteSheet, name) {
    return spriteSheet.textures[name];
}
function getTexture(resource, name) {
    const spriteSheet = pixi_js__WEBPACK_IMPORTED_MODULE_4__.Assets.get(resource);
    if (!spriteSheet) {
        throw new Error(`Resource '${resource}' hasn't been loaded.`);
    }
    const texture = getTextureFromResource(spriteSheet, name);
    if (texture) {
        return texture;
    }
    if (spriteSheet.linkedSheets) {
        for (const linkedSheet of spriteSheet.linkedSheets) {
            const texture = getTextureFromResource(linkedSheet, name);
            if (texture) {
                return texture;
            }
        }
    }
    throw new Error(`Texture '${name}' not found in sprite sheet '${resource}'.`);
}
function startLoadingSpriteSheet(spriteSheetPath) {
    if (loadingSpriteSheets.has(spriteSheetPath)) {
        return;
    }
    if (pixi_js__WEBPACK_IMPORTED_MODULE_4__.Assets.cache.has(spriteSheetPath)) {
        return;
    }
    _logging__WEBPACK_IMPORTED_MODULE_0__["default"].info({ spriteSheetPath }, 'Start loading resource');
    performance.mark('load-start-' + spriteSheetPath);
    // TODO: Pass name and full url.
    const loadPromise = pixi_js__WEBPACK_IMPORTED_MODULE_4__.Assets.load({ src: spriteSheetPath })
        .then(() => {
        performance.mark('load-end-' + spriteSheetPath);
        performance.measure('spritesheet load ' + spriteSheetPath, 'load-start-' + spriteSheetPath, 'load-end-' + spriteSheetPath);
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].info({ spriteSheetPath }, 'Resource is loaded.');
    })
        .then(() => {
        performance.mark('upload-end');
    })
        .catch((err) => {
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].error({ err, spriteSheetPath }, 'Unable to load sprite sheet.');
    })
        .finally(() => {
        loadingSpriteSheets.delete(spriteSheetPath);
    });
    loadingSpriteSheets.set(spriteSheetPath, loadPromise);
}
function clearContainer(container, options) {
    for (const child of container.removeChildren()) {
        child.destroy(options);
    }
}
function transformContainer(container, x, y, rect, scale) {
    if (rect.height && rect.width) {
        const mask = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Graphics();
        mask.drawRect(0, 0, rect.width, rect.height);
        container.mask = mask;
        container.addChild(mask);
    }
    container.position.set(x, y);
    container.scale.set(scale);
}
function createLayerSpriteFromTexture(actor, drawTextureInfo) {
    const { fileName, layerId, x, y, scale, rect, texture } = drawTextureInfo;
    if (!layerId) {
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].warn({ fileName }, 'Unable to identify layer of file');
    }
    const spriteContext = {
        actor,
        fileName,
        layerId,
    };
    const sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Sprite(texture);
    sprite.name = fileName;
    sprite.position.set(x, y);
    sprite.scale.set(scale, scale);
    if (rect.height && rect.width) {
        sprite.filters = [new pixi_js__WEBPACK_IMPORTED_MODULE_4__.AlphaFilter()];
        sprite.filterArea = rect;
    }
    applySpriteTransforms(sprite, spriteContext);
    return sprite;
}
function initializeRenderer(_) {
    const actorsTexturesCache = new Map();
    const doPreload = Game_Actor.prototype.doPreloadTachie;
    Game_Actor.prototype.doPreloadTachie = function (file) {
        const folder = this.getTachieFolderName();
        const supportedPoseFolder = (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_1__.getSupportedPoseFolder)(folder);
        if (supportedPoseFolder === undefined) {
            doPreload.call(this, file);
            return;
        }
        const spriteSheetName = (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_1__.getPoseSpriteSheet)(supportedPoseFolder);
        startLoadingSpriteSheet(spriteSheetName);
    };
    function overrideDrawer(proto) {
        const drawActor = proto.drawTachieActor;
        proto.drawTachieActor = function (actor, bitmap, x, y, rect, tachieFace, scale, clearByDraw) {
            const isCacheChanged = actor.isCacheChanged();
            // TODO: Consider replacing this with bitmap (as it's an actual container).
            if (!this._isCacheApplied && !isCacheChanged) {
                const drawTextureInfos = actorsTexturesCache.get(actor.actorId());
                if (drawTextureInfos?.length) {
                    const sprites = drawTextureInfos
                        .map((info) => createLayerSpriteFromTexture(actor, info));
                    this.addChild(...sprites);
                }
                this._isCacheApplied = true;
            }
            if (actor.isTachieDisabled()) {
                return true;
            }
            const poseFolderName = actor.getTachieFolderName();
            const supportedPoseFolder = (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_1__.getSupportedPoseFolder)(poseFolderName);
            if (supportedPoseFolder === undefined) {
                const success = drawActor.call(this, actor, bitmap, x, y, rect, tachieFace, scale, clearByDraw);
                if (success) {
                    clearContainer(this);
                }
                return success;
            }
            actor.preloadTachie();
            if (loadingSpriteSheets.size) {
                return false;
            }
            const point = this.calcTachieActorPos(actor);
            actor.clearDirty();
            const customLayers = actor.actorId() === ACTOR_CHAT_FACE_ID
                ? actor.getCustomTachieLayerLoadout_Chatface()
                : actor.getCustomTachieLayerLoadout();
            x = getNumberOrDefault(x);
            y = getNumberOrDefault(y);
            tachieFace = getNumberOrDefault(tachieFace);
            scale = getNumberOrDefault(scale, 1);
            if (!rect) {
                rect = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Rectangle(0, 0, 0, 0);
                x += point.x;
                y += point.y;
            }
            if (customLayers?.length > 0 && this.children.length === 0 || isCacheChanged) {
                const drawTextureInfos = [];
                for (let i = customLayers.length - 1; i >= 0; --i) {
                    let layerId = customLayers[i];
                    currentLayerId = layerId;
                    this.applyLayer(drawTextureInfos, actor, layerId, tachieFace);
                    currentLayerId = undefined;
                    if (actor.isDirty()) {
                        return false;
                    }
                }
                const layerSprites = drawTextureInfos
                    .map((info) => createLayerSpriteFromTexture(actor, info));
                actorsTexturesCache.set(actor.actorId(), drawTextureInfos);
                actor.clearCacheChanged();
                this._isCacheApplied = false;
                clearContainer(this, { children: true });
                this.name = poseFolderName;
                this.addChild(...layerSprites);
                transformContainer(this, x, y, rect, scale);
                this.lastDrawnActorId = actor.actorId();
                this.lastDrawnPoseName = poseFolderName;
            }
            return true;
        };
        const drawImage = proto.drawTachieImage;
        proto.drawTachieImage = function (file, container, actor, x, y, rect, scale) {
            const folder = actor.getTachieFolderName();
            const supportedPoseFolder = (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_1__.getSupportedPoseFolder)(folder);
            if (supportedPoseFolder === undefined) {
                drawImage.call(this, file, container, actor, x, y, rect, scale);
                return;
            }
            const spriteSheetName = (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_1__.getPoseSpriteSheet)(supportedPoseFolder);
            if (loadingSpriteSheets.has(spriteSheetName)) {
                actor.setDirty();
                return;
            }
            if (!pixi_js__WEBPACK_IMPORTED_MODULE_4__.Assets.cache.has(spriteSheetName)) {
                _logging__WEBPACK_IMPORTED_MODULE_0__["default"].warn({ spriteSheetName }, `Sprite sheet hasn't been preloaded.`);
                startLoadingSpriteSheet(spriteSheetName);
                actor.setDirty();
                return;
            }
            try {
                const textureName = folder + file;
                const texture = getTexture(spriteSheetName, textureName);
                const baseTexture = texture.baseTexture;
                if (!baseTexture.valid || !baseTexture._glTextures[Graphics._renderer.CONTEXT_UID]) {
                    const uid = baseTexture.resource.src;
                    performance.mark(`bind-start-${uid}`);
                    Graphics._renderer.texture.bind(baseTexture);
                    performance.mark(`bind-end-${uid}`);
                    performance.measure(`spritesheet bind ${uid}`, `bind-start-${uid}`, `bind-end-${uid}`);
                    actor.setDirty();
                    return;
                }
                container.push({
                    fileName: file,
                    layerId: currentLayerId,
                    x,
                    y,
                    scale,
                    rect,
                    texture,
                });
            }
            catch (error) {
                _logging__WEBPACK_IMPORTED_MODULE_0__["default"].error({ error, file }, `Skipped rendering texture`);
                // noinspection JSUnusedLocalSymbols
                const _ = Alert.default.fire({
                    icon: 'error',
                    titleText: `Unable to display '${file}'`,
                    text: error?.toString(),
                    confirmButtonText: 'Ignore'
                });
            }
        };
    }
    overrideDrawer(Sprite.prototype);
    overrideDrawer(Window_Base.prototype);
    Sprite_Picture.prototype.loadPictureCache = function () {
    };
    Sprite_Base.prototype.getContainer = function () {
        return this;
    };
    if (ConfigManager.remSmootherCGLoading) {
        const optimizedFolders = (0,_posesRepository__WEBPACK_IMPORTED_MODULE_3__.getPosesFolders)();
        const skipPreloadFolders = optimizedFolders.map(_utils__WEBPACK_IMPORTED_MODULE_2__.getUniversalPath);
        const preloadImage = DKTools.PreloadManager.preloadImage;
        DKTools.PreloadManager.preloadImage = function (data) {
            for (const skipPreloadFolder of skipPreloadFolders) {
                if (data.path.startsWith(skipPreloadFolder)) {
                    return;
                }
            }
            preloadImage.call(this, data);
        };
        const preloadImageAsync = DKTools.PreloadManager.preloadImageAsync;
        DKTools.PreloadManager.preloadImageAsync = function (data) {
            for (const skipPreloadFolder of skipPreloadFolders) {
                if (data.path.startsWith(skipPreloadFolder)) {
                    return Promise.resolve();
                }
            }
            return preloadImageAsync.call(this, data);
        };
        (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_1__.loadAllSpriteSheets)();
    }
}
const loadingSpriteSheets = new Map();


/***/ },

/***/ "./module/poseConversionQueue.ts"
/*!***************************************!*\
  !*** ./module/poseConversionQueue.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeConversion: () => (/* binding */ completeConversion),
/* harmony export */   enqueuePosesConversion: () => (/* binding */ enqueuePosesConversion)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./module/utils.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertPosesToSpriteSheet */ "./module/convertPosesToSpriteSheet.ts");



let poseConversionQueue = Promise.resolve();
function enqueuePosesConversion(posesFolder) {
    const destination = (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_2__.getFastPosesFolder)(posesFolder);
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isAndroid)()) {
        try {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.measure)(() => (0,fs__WEBPACK_IMPORTED_MODULE_1__.mkdirSync)(destination));
        }
        catch {
        }
    }
    poseConversionQueue = poseConversionQueue.then(() => (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_2__.convertAllPosesToSpriteSheets)(posesFolder, destination));
}
async function completeConversion() {
    return poseConversionQueue;
}


/***/ },

/***/ "./module/posesRepository.ts"
/*!***********************************!*\
  !*** ./module/posesRepository.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPosesFolders: () => (/* binding */ getPosesFolders),
/* harmony export */   registerPosesFolder: () => (/* binding */ registerPosesFolder)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _poseConversionQueue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poseConversionQueue */ "./module/poseConversionQueue.ts");


const posesFolders = new Set([
    path__WEBPACK_IMPORTED_MODULE_0___default().join('img', 'karryn'),
    path__WEBPACK_IMPORTED_MODULE_0___default().join('img', 'chatface')
]);
async function registerPosesFolder(folder) {
    if (!posesFolders.has(folder)) {
        (0,_poseConversionQueue__WEBPACK_IMPORTED_MODULE_1__.enqueuePosesConversion)(folder);
        posesFolders.add(folder);
    }
    await (0,_poseConversionQueue__WEBPACK_IMPORTED_MODULE_1__.completeConversion)();
}
function getPosesFolders() {
    return Array.from(posesFolders);
}


/***/ },

/***/ "./module/settings.ts"
/*!****************************!*\
  !*** ./module/settings.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSettings)
/* harmony export */ });
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.json */ "./module/info.json");
/* harmony import */ var _kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kp-mods/mods-settings */ "./node_modules/@kp-mods/mods-settings/lib/index.js");
/* harmony import */ var _kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./module/utils.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logging */ "./module/logging.ts");
/* harmony import */ var _operationCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operationCache */ "./module/operationCache.ts");
/* harmony import */ var _convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convertPosesToSpriteSheet */ "./module/convertPosesToSpriteSheet.ts");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications */ "./module/notifications.ts");
/* harmony import */ var _posesRepository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posesRepository */ "./module/posesRepository.ts");








async function registerSettings() {
    const settings = (0,_kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_1__.forMod)(_info_json__WEBPACK_IMPORTED_MODULE_0__.name)
        .addSettings({
        convertPosesManually: {
            type: 'button',
            defaultValue: () => convert('poses'),
            description: {
                title: '\uD83D\uDF64 Convert game poses manually',
                help: 'Convert game poses  to speed things up'
            }
        },
        resetPosesCache: {
            type: 'button',
            defaultValue: () => invalidate('poses'),
            description: {
                title: '\u2B6E Reset poses cache',
                help: 'Resets cache to allow to regenerate optimized animations if there are problems.'
            }
        }
    })
        .register();
    const isOptimizationEnabled = isStartupOptimizationEnabled();
    if (isOptimizationEnabled) {
        (0,_kp_mods_mods_settings__WEBPACK_IMPORTED_MODULE_1__.forMod)(_info_json__WEBPACK_IMPORTED_MODULE_0__.name)
            .addSettingsGroup({
            name: 'poses',
            description: 'Optimized poses'
        })
            .register();
        await (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_5__.generateFastPoses)();
    }
    _logging__WEBPACK_IMPORTED_MODULE_3__["default"].info({ isOptimizationEnabled }, 'Settings are generated successfully');
    return settings;
}
function isStartupOptimizationEnabled() {
    const disableStartupProcessing = globalThis.PluginManager?.parameters(_info_json__WEBPACK_IMPORTED_MODULE_0__.name)?.['disableStartupProcessing'];
    return !/^true$/i.test(disableStartupProcessing);
}
async function invalidate(type) {
    const locations = [];
    switch (type) {
        case 'poses':
            for (const posesFolder of (0,_posesRepository__WEBPACK_IMPORTED_MODULE_7__.getPosesFolders)()) {
                locations.push(posesFolder);
            }
            break;
        default:
            throw new Error(`Unsupported target '${type}'`);
    }
    for (const location of locations) {
        const cache = await _operationCache__WEBPACK_IMPORTED_MODULE_4__["default"].load((0,_utils__WEBPACK_IMPORTED_MODULE_2__.resolvePath)(location));
        await cache.invalidate();
        await (0,_notifications__WEBPACK_IMPORTED_MODULE_6__.notifySuccessWithCountdown)(`Fast ${type} cache has been reset successfully.\n` +
            `The game needs to be restarted to regenerate ${type}.`);
    }
}
async function convert(type) {
    switch (type) {
        case 'poses':
            await (0,_convertPosesToSpriteSheet__WEBPACK_IMPORTED_MODULE_5__.generateFastPoses)();
            break;
        default:
            throw new Error(`Unsupported target '${type}'`);
    }
    await (0,_notifications__WEBPACK_IMPORTED_MODULE_6__.notifySuccessWithCountdown)(`Fast ${type} generated successfully.`);
}
let settings;
async function getSettings() {
    if (!settings) {
        settings = await registerSettings();
    }
    return settings;
}


/***/ },

/***/ "./module/spriteSheet/multipartSpriteSheetBuilder.ts"
/*!***********************************************************!*\
  !*** ./module/spriteSheet/multipartSpriteSheetBuilder.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipartSpriteSheetBuilder: () => (/* binding */ MultipartSpriteSheetBuilder)
/* harmony export */ });
/* harmony import */ var _spriteSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteSheet */ "./module/spriteSheet/spriteSheet.ts");

class MultipartSpriteSheetBuilder {
    constructor(animationName, canvasWorkersPool) {
        this.animationName = animationName;
        this.canvasWorkersPool = canvasWorkersPool;
        if (!canvasWorkersPool) {
            throw new Error('Canvas workers pool is required.');
        }
        this.sheets = [];
        this.canvasWorker = canvasWorkersPool.reserve(animationName);
    }
    addFrame(id, data, frame) {
        for (const sheet of this.sheets) {
            if (sheet.tryInsertFrame(id, data)) {
                return;
            }
        }
        const sheetIndex = this.sheets.length;
        const newSheet = new _spriteSheet__WEBPACK_IMPORTED_MODULE_0__["default"](this.animationName, sheetIndex, this.canvasWorker);
        this.sheets.push(newSheet);
        if (!newSheet.tryInsertFrame(id, data)) {
            throw new Error('Impossible to insert frame to empty sprite sheet.');
        }
    }
    async getSpriteSheetsInfo() {
        const linkedSheetNames = [];
        const sheetsData = await Promise.all(this.sheets.map(async (sheet, sheetIndex) => {
            const sheetInfo = await this.getSpriteSheetInfo(sheetIndex);
            linkedSheetNames.push(sheetInfo.name);
            return sheetInfo;
        }));
        if (linkedSheetNames.length > 1) {
            for (let i = 0; i < sheetsData.length; i++) {
                const sheet = sheetsData[i];
                const { name, sheetMetadata } = sheet;
                if (i === 0) {
                    sheet.sheetMetadata = {
                        animations: {},
                        ...sheetMetadata
                    };
                }
                sheetMetadata.meta.related_multi_packs =
                    linkedSheetNames.filter((currName) => currName !== name);
            }
        }
        return sheetsData;
    }
    dispose() {
        for (const sheet of this.sheets) {
            sheet.close();
        }
        return this.canvasWorkersPool.free(this.canvasWorker);
    }
    getSheetName(index) {
        return this.animationName + '_' + index + '.json';
    }
    async getSpriteSheetInfo(sheetIndex) {
        const sheet = this.sheets[sheetIndex];
        const sheetName = this.getSheetName(sheetIndex);
        const image = await sheet.getImage();
        const sheetMetadata = sheet.getMetadata();
        return {
            name: sheetName,
            sheetMetadata,
            image
        };
    }
}


/***/ },

/***/ "./module/spriteSheet/spriteSheet.ts"
/*!*******************************************!*\
  !*** ./module/spriteSheet/spriteSheet.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../info.json */ "./module/info.json");
/* harmony import */ var _trimmedFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trimmedFrame */ "./module/spriteSheet/trimmedFrame.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logging */ "./module/logging.ts");
/* harmony import */ var _canvasPreviewManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvasPreviewManager */ "./module/canvasPreviewManager.ts");




class SpriteSheet {
    constructor(animationName, index, canvasWorker, maxCanvasWidth = SpriteSheet.maxCanvasWidth, maxCanvasHeight = SpriteSheet.maxCanvasHeight) {
        this.animationName = animationName;
        this.index = index;
        this.canvasWorker = canvasWorker;
        if (!canvasWorker) {
            throw new Error('Canvas worker is required.');
        }
        this.canvasWorker = canvasWorker;
        this.frames = [];
        this.filledArea = { w: 0, h: 0 };
        this.currentLinePoint = { x: 0, y: 0 };
        this.canvas = canvasWorker.create(index.toString(), maxCanvasWidth, maxCanvasHeight);
        if (!this.canvas) {
            throw new Error(`Missing canvas for sheet '${this.imageName}'`);
        }
        (0,_canvasPreviewManager__WEBPACK_IMPORTED_MODULE_3__.addCanvasPreview)(this.canvas);
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ spriteSheetId: index, animationName }, 'Initialized sprite sheet for animation');
    }
    get imageName() {
        return SpriteSheet.getImageName(this.animationName, this.index);
    }
    get canvasId() {
        return this.index.toString();
    }
    static getImageName(animationName, index) {
        return animationName + '_' + index + '.png';
    }
    getMetadata() {
        const frames = {};
        for (let i = 0; i < this.frames.length; i++) {
            const frame = this.frames[i];
            const frameName = frame.getId();
            frames[frameName] = frame.getFrameMetadata();
        }
        return {
            frames: frames,
            meta: {
                app: _info_json__WEBPACK_IMPORTED_MODULE_0__.name,
                version: _info_json__WEBPACK_IMPORTED_MODULE_0__.version,
                image: this.imageName,
                format: 'RGBA8888',
                size: this.getSheetSize(),
                scale: '1',
            }
        };
    }
    getSheetSize() {
        return {
            w: Math.max(this.currentLinePoint.x, this.filledArea.w),
            h: Math.max(this.currentLinePoint.y, this.filledArea.h),
        };
    }
    tryInsertFrame(id, frameData) {
        if (!frameData) {
            throw new Error('Missing image data in frame');
        }
        const { imageBitmap } = frameData;
        const isImpossibleToFit = imageBitmap.width > this.canvas.width ||
            imageBitmap.height > this.canvas.height;
        if (isImpossibleToFit) {
            // TODO: Fire exception outside if result is false and metadata.meta.size is (0, 0).
            throw new Error(`Frame resolution (${imageBitmap.width}x${imageBitmap.height}) exceeds ` +
                `maximum resolution (${this.canvas.width}x${this.canvas.height}).`);
        }
        if (!this.canFitBelow(imageBitmap)) {
            return false;
        }
        if (!this.canFitOnLeft(imageBitmap)) {
            this.moveToNewLine();
            if (!this.canFitBelow(imageBitmap)) {
                return false;
            }
        }
        this.insertFrameInLine(id, frameData);
        return true;
    }
    getImage() {
        const { w, h } = this.getSheetSize();
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info({ spriteSheetId: this.index, width: w, height: h }, 'Creating image from sprite sheet');
        return this.canvasWorker.getImage(this.canvasId, w, h);
    }
    insertFrameInLine(frameId, frameData) {
        const { imageBitmap: image, offsetX, offsetY } = frameData;
        const { width, height } = image;
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].debug(`Inserting frame '${frameId}' (${width}x${height}) into sprite sheet #${this.index} ` +
            `(at [${this.currentLinePoint.x}, ${this.filledArea.h}])`);
        this.canvasWorker.draw(this.canvasId, image, this.currentLinePoint.x, this.filledArea.h);
        const trimmedFrame = new _trimmedFrame__WEBPACK_IMPORTED_MODULE_1__["default"](frameId, this.currentLinePoint.x, this.filledArea.h, offsetX, offsetY, width, height);
        this.frames.push(trimmedFrame);
        this.currentLinePoint.x += width;
        this.currentLinePoint.y = Math.max(this.currentLinePoint.y, height + this.filledArea.h);
        this.filledArea.w = Math.max(this.currentLinePoint.x, this.filledArea.w);
    }
    canFitOnLeft(image) {
        return this.currentLinePoint.x + image.width <= this.canvas.width;
    }
    canFitBelow(image) {
        return this.filledArea.h + image.height <= this.canvas.height;
    }
    moveToNewLine() {
        this.filledArea.h = this.currentLinePoint.y;
        this.currentLinePoint.x = 0;
    }
    close() {
        (0,_canvasPreviewManager__WEBPACK_IMPORTED_MODULE_3__.removeCanvasPreview)(this.canvas);
    }
}
SpriteSheet.maxCanvasWidth = 2048;
SpriteSheet.maxCanvasHeight = 1024;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteSheet);


/***/ },

/***/ "./module/spriteSheet/trimmedFrame.ts"
/*!********************************************!*\
  !*** ./module/spriteSheet/trimmedFrame.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrimmedFrame)
/* harmony export */ });
class TrimmedFrame {
    constructor(id, sheetX, sheetY, screenX, screenY, width, height) {
        this.id = id;
        this.sheetX = sheetX;
        this.sheetY = sheetY;
        this.screenX = screenX;
        this.screenY = screenY;
        this.width = width;
        this.height = height;
    }
    getId() {
        return this.id;
    }
    getFrameMetadata() {
        return {
            trimmed: true,
            rotated: false,
            frame: {
                x: this.sheetX,
                y: this.sheetY,
                w: this.width,
                h: this.height
            },
            spriteSourceSize: {
                x: this.screenX,
                y: this.screenY,
                w: this.width,
                h: this.height
            },
            sourceSize: {
                w: this.screenX + this.width,
                h: this.screenY + this.height
            }
        };
    }
}


/***/ },

/***/ "./module/spriteSheet/utils.ts"
/*!*************************************!*\
  !*** ./module/spriteSheet/utils.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCanvasElement: () => (/* binding */ createCanvasElement),
/* harmony export */   "default": () => (/* binding */ saveSpriteSheets)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ "./module/logging.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./module/utils.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);




const mkdirAsync = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getFsAsync)(() => fs__WEBPACK_IMPORTED_MODULE_3__.promises?.mkdir, () => null, () => fs__WEBPACK_IMPORTED_MODULE_3__.mkdirSync);
async function saveSpriteSheet(spriteSheetInfo, destination) {
    const { name, sheetMetadata, image } = spriteSheetInfo;
    const imageName = sheetMetadata.meta.image;
    _logging__WEBPACK_IMPORTED_MODULE_0__["default"].debug({ spriteSheet: name, imageName, destination }, `Saving sprite sheet.`);
    // TODO: Add png optimization.
    // const optimizedPng = await new Transformer(image)
    //     .png({
    //         compressionType: CompressionType.Best,
    //         filterType: FilterType.Paeth
    //     })
    await mkdirAsync(destination, { recursive: true }).catch(() => undefined);
    const imagePath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(destination, imageName);
    const spriteSheetJson = JSON.stringify(sheetMetadata, undefined, 4);
    const spriteSheetPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(destination, name);
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isAndroid)()) {
        const getBufferPromise = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.measure)(() => getBufferFrom(image));
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.measure)(() => (0,fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync)(spriteSheetPath, spriteSheetJson));
        const buffer = await getBufferPromise;
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.measure)(() => (0,fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync)(imagePath, buffer));
    }
    else {
        await Promise.all([
            pipeToFile(image, imagePath),
            fs__WEBPACK_IMPORTED_MODULE_3__.promises.writeFile(spriteSheetPath, spriteSheetJson)
        ]);
    }
    _logging__WEBPACK_IMPORTED_MODULE_0__["default"].info({ spriteSheet: name, destination }, `Sprite sheet is saved`);
}
async function pipeToFile(readableStream, filePath) {
    const fileStream = (0,fs__WEBPACK_IMPORTED_MODULE_3__.createWriteStream)(filePath);
    const reader = readableStream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            fileStream.close();
            break;
        }
        fileStream.write(value);
    }
}
async function getBufferFrom(stream) {
    const reader = stream.getReader();
    const buffers = [];
    let size = 0;
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            const resultBuffer = new Uint8Array(size);
            let offset = 0;
            for (const buffer of buffers) {
                resultBuffer.set(buffer, offset);
                offset += buffer.length;
            }
            return resultBuffer;
        }
        buffers.push(value);
        size += value?.length ?? 0;
    }
}
async function saveSpriteSheets(builder, destination) {
    destination = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.resolvePath)(destination);
    const saveToDestination = (info) => saveSpriteSheet(info, destination);
    const spriteSheetsInfo = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.measure)(() => builder.getSpriteSheetsInfo());
    await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.measure)(() => Promise.all(spriteSheetsInfo.map(saveToDestination)));
}
function createCanvasElement(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    if (!canvas) {
        throw new Error('Canvas is required');
    }
    return canvas;
}


/***/ },

/***/ "./module/styles/canvases.css"
/*!************************************!*\
  !*** ./module/styles/canvases.css ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_canvases_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./canvases.css */ "./node_modules/css-loader/dist/cjs.js!./module/styles/canvases.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_canvases_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_canvases_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_canvases_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_canvases_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./module/styles/loaders.css"
/*!***********************************!*\
  !*** ./module/styles/loaders.css ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loaders_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./loaders.css */ "./node_modules/css-loader/dist/cjs.js!./module/styles/loaders.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loaders_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loaders_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loaders_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loaders_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./module/styles/loading-border.css"
/*!******************************************!*\
  !*** ./module/styles/loading-border.css ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loading_border_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./loading-border.css */ "./node_modules/css-loader/dist/cjs.js!./module/styles/loading-border.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loading_border_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loading_border_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loading_border_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loading_border_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./module/utils.ts"
/*!*************************!*\
  !*** ./module/utils.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   askLowRamOptimizationMode: () => (/* binding */ askLowRamOptimizationMode),
/* harmony export */   ensureFsFunction: () => (/* binding */ ensureFsFunction),
/* harmony export */   getDefaultConcurrency: () => (/* binding */ getDefaultConcurrency),
/* harmony export */   getFiles: () => (/* binding */ getFiles),
/* harmony export */   getFsAsync: () => (/* binding */ getFsAsync),
/* harmony export */   getRelativePath: () => (/* binding */ getRelativePath),
/* harmony export */   getUniversalPath: () => (/* binding */ getUniversalPath),
/* harmony export */   isAndroid: () => (/* binding */ isAndroid),
/* harmony export */   isExceptionWithCode: () => (/* binding */ isExceptionWithCode),
/* harmony export */   measure: () => (/* binding */ measure),
/* harmony export */   parseUniversalPath: () => (/* binding */ parseUniversalPath),
/* harmony export */   queryFile: () => (/* binding */ queryFile),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   stripExtension: () => (/* binding */ stripExtension),
/* harmony export */   toUrl: () => (/* binding */ toUrl)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logging */ "./module/logging.ts");
/* harmony import */ var _workerAdapters_workerOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workerAdapters/workerOperation */ "./module/workerAdapters/workerOperation.ts");





const readdirAsync = fs__WEBPACK_IMPORTED_MODULE_1__.promises?.readdir ?? (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)(ensureFsFunction('readdir'));
function isExceptionWithCode(error) {
    return Boolean(error)
        && Object.prototype.toString.apply(error) === '[object Error]'
        && typeof error.code === 'string';
}
function ensureFsFunction(name) {
    const func = (fs__WEBPACK_IMPORTED_MODULE_1___default())[name];
    if (typeof func !== 'function') {
        const message = `Function '${name}' is not supported in fs API.`;
        _logging__WEBPACK_IMPORTED_MODULE_3__["default"].error(message);
        throw new Error(message);
    }
    return func;
}
function getFsAsync(getAsyncFs, getCallbackFs, getSyncFs) {
    const asyncFs = getAsyncFs();
    if (asyncFs) {
        return asyncFs;
    }
    _logging__WEBPACK_IMPORTED_MODULE_3__["default"].debug(`Promise version of function '${getAsyncFs}' is not supported in current fs API. ` +
        'Falling back to callback implementation.');
    const callbackFs = getCallbackFs();
    if (callbackFs) {
        return (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)(getCallbackFs);
    }
    _logging__WEBPACK_IMPORTED_MODULE_3__["default"].debug(`Callback version of function '${getCallbackFs}' is not supported in current fs API. ` +
        'Falling back to sync implementation.');
    const syncFunction = getSyncFs();
    if (!syncFunction) {
        throw new Error(`Function '${getSyncFs}' is not supported in fs API.`);
    }
    return ((...args) => {
        return new Promise((resolve, reject) => {
            try {
                const result = syncFunction.apply({}, args);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
function isAndroid() {
    return isJoiPlay() || isMaldives();
}
function isJoiPlay() {
    return process.env.USER === 'joiplay';
}
function isMaldives() {
    return process.env.USER === 'maldives';
}
function resolvePath(...localPath) {
    return path__WEBPACK_IMPORTED_MODULE_0___default().resolve(path__WEBPACK_IMPORTED_MODULE_0___default().dirname(process.mainModule?.filename || ''), ...localPath);
}
function getRelativePath(absolutePath) {
    return path__WEBPACK_IMPORTED_MODULE_0___default().relative(path__WEBPACK_IMPORTED_MODULE_0___default().dirname(process.mainModule?.filename || ''), resolvePath(absolutePath));
}
function toUrl(filePath) {
    return getUniversalPath(getRelativePath(filePath));
}
function getUniversalPath(location) {
    return (path__WEBPACK_IMPORTED_MODULE_0___default().sep) === (path__WEBPACK_IMPORTED_MODULE_0___default().posix).sep
        ? location
        : location.split((path__WEBPACK_IMPORTED_MODULE_0___default().sep)).join((path__WEBPACK_IMPORTED_MODULE_0___default().posix).sep);
}
function parseUniversalPath(location) {
    return (path__WEBPACK_IMPORTED_MODULE_0___default().sep) === (path__WEBPACK_IMPORTED_MODULE_0___default().posix).sep
        ? location
        : location.split((path__WEBPACK_IMPORTED_MODULE_0___default().posix).sep).join((path__WEBPACK_IMPORTED_MODULE_0___default().sep));
}
function stripExtension(fileName) {
    return fileName.slice(0, -path__WEBPACK_IMPORTED_MODULE_0___default().extname(fileName).length);
}
async function queryFile(filePath, type = 'text') {
    const abortController = new AbortController();
    const url = toUrl(filePath);
    const timeout = setTimeout(() => {
        abortController.abort('Exceeded timeout');
    }, 15000);
    let response;
    try {
        response = await fetch(url, { signal: abortController.signal });
    }
    catch (err) {
        throw new Error(`Unable to load '${url}' (path: ${filePath}). Details: '${err?.message ?? err}' (${status}).`);
    }
    clearTimeout(timeout);
    switch (type) {
        case 'text':
            return await response.text();
        case 'json':
            return await response.json();
        case 'arraybuffer':
            return await response.arrayBuffer();
        default:
            throw new Error(`Type ${type} is not supported.`);
    }
}
async function getFiles(location) {
    const files = [];
    async function fillFilesRecursively(dir) {
        let entries = [];
        try {
            if (isAndroid()) {
                entries = measure(() => fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(dir));
            }
            else {
                entries = await measure(() => readdirAsync(dir, { withFileTypes: true }));
            }
        }
        catch (error) {
            _logging__WEBPACK_IMPORTED_MODULE_3__["default"].warn({ dir, error }, 'Skipped directory');
        }
        for (let entry of entries) {
            const isDirectory = typeof entry === 'string' ? !path__WEBPACK_IMPORTED_MODULE_0___default().extname(entry) : entry.isDirectory();
            const entryName = typeof entry === 'string' ? entry : entry.name;
            const fullName = path__WEBPACK_IMPORTED_MODULE_0___default().join(dir, entryName);
            if (isDirectory) {
                await fillFilesRecursively(fullName);
            }
            else {
                files.push({
                    dir,
                    entryName: entryName,
                });
            }
        }
    }
    await measure(() => fillFilesRecursively(location));
    _logging__WEBPACK_IMPORTED_MODULE_3__["default"].debug({ location, filesCount: files.length }, 'Found files in folder');
    return files;
}
function isPromiseLike(value) {
    return value && typeof value.then === 'function';
}
function measure(operation, timeoutMs = 500) {
    const start = performance.now();
    const result = operation();
    const logDuration = () => {
        const duration = performance.now() - start;
        if (duration > timeoutMs) {
            _logging__WEBPACK_IMPORTED_MODULE_3__["default"].warn({ operation: operation.toString(), elapsedMs: duration }, 'Operation took too long');
        }
    };
    if (isPromiseLike(result)) {
        result.then(logDuration);
    }
    else {
        logDuration();
    }
    return result;
}
const defaultConcurrency = 2;
const maxConcurrency = 16;
let isLowRamMode = undefined;
function getDefaultConcurrency(isLowRamMode) {
    if (isLowRamMode) {
        return defaultConcurrency;
    }
    const recommendedConcurrency = Math.min(navigator.hardwareConcurrency || defaultConcurrency, maxConcurrency);
    return (0,_workerAdapters_workerOperation__WEBPACK_IMPORTED_MODULE_4__.parseNumericParameter)('threads', recommendedConcurrency);
}
async function askLowRamOptimizationMode() {
    if (isLowRamMode !== undefined) {
        return isLowRamMode;
    }
    const getConfirmButtonText = (secondsRemain) => {
        return `Default Mode (${secondsRemain})`;
    };
    let countDownSec = 30;
    const countDownId = setInterval(() => {
        if (--countDownSec < 0) {
            clearInterval(countDownId);
            window.Alert?.default.clickConfirm();
            return;
        }
        const confirmButton = window.Alert?.default.getConfirmButton();
        if (confirmButton) {
            confirmButton.textContent = getConfirmButtonText(countDownSec);
        }
    }, 1000);
    try {
        const answer = await window.Alert.default.fire({
            icon: 'question',
            title: 'Choose optimization mode',
            html: '<code><b>Default mode</b></code> allows to optimize images faster, ' +
                'but consumes more RAM, compared to <code><b>low-RAM mode</b></code>.' +
                '<hr>' +
                'If the game crushes during optimization process<br>' +
                'or if optimization of some poses fails (even after retries), ' +
                'select <code><b>low-RAM mode</b></code>.',
            showCancelButton: true,
            cancelButtonText: 'Low-RAM Mode',
            confirmButtonText: getConfirmButtonText(countDownSec),
        });
        isLowRamMode = answer.isDismissed && answer.dismiss === Alert.default.DismissReason.cancel;
    }
    finally {
        clearInterval(countDownId);
    }
    return isLowRamMode;
}


/***/ },

/***/ "./module/validator.ts"
/*!*****************************!*\
  !*** ./module/validator.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addGameVersionValidation)
/* harmony export */ });
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.json */ "./module/info.json");


const minimalSupportedGameVersion = new semver__WEBPACK_IMPORTED_MODULE_0__.SemVer('3.0.0');
/**
 * Determines whether the game version is supported by mod.
 * @return {boolean}
 */
function isGameVersionSupported() {
    const gameVersion = semver__WEBPACK_IMPORTED_MODULE_0___default().parse(RemGameVersion);
    return gameVersion && semver__WEBPACK_IMPORTED_MODULE_0___default().gte(gameVersion, minimalSupportedGameVersion);
}
function validateGameVersion() {
    if (isGameVersionSupported()) {
        return;
    }
    throw new Error(`Game version is too old. Minimal supported version is `
        + `${minimalSupportedGameVersion}. Please, update the game or disable '${_info_json__WEBPACK_IMPORTED_MODULE_1__.displayedName}' mod.`);
}
function validateDependency(dependencyName, minDependencyVersion, isOptional) {
    if (!dependencyName) {
        throw new Error('Dependency name is required.');
    }
    if (!minDependencyVersion) {
        throw new Error('Minimal dependency version is required.');
    }
    const dependencyParameters = PluginManager.parameters(dependencyName);
    if (dependencyParameters?.optional && isOptional) {
        return;
    }
    const dependencyVersion = semver__WEBPACK_IMPORTED_MODULE_0___default().parse(dependencyParameters?.version);
    if (!dependencyVersion || semver__WEBPACK_IMPORTED_MODULE_0___default().lt(dependencyVersion, minDependencyVersion)) {
        const errorMessage = `Required '${dependencyName}' v${minDependencyVersion} or newer (actual: v${dependencyParameters?.version}). ` +
            `Please update '${dependencyName}' or disable '${_info_json__WEBPACK_IMPORTED_MODULE_1__.displayedName}'.`;
        throw new Error(errorMessage);
    }
}
function validateDependencies() {
    validateDependency('ModsSettings', '3.0.0', true);
}
function addGameVersionValidation() {
    const sceneBootStart = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        validateGameVersion();
        validateDependencies();
        sceneBootStart.call(this);
    };
}


/***/ },

/***/ "./module/workerAdapters/canvasWorker.ts"
/*!***********************************************!*\
  !*** ./module/workerAdapters/canvasWorker.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasWorker: () => (/* binding */ CanvasWorker)
/* harmony export */ });
/* harmony import */ var _workerOperation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerOperation */ "./module/workerAdapters/workerOperation.ts");
/* harmony import */ var _workers_canvas_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workers/canvas.worker */ "./module/workers/canvas.worker.ts");
/* harmony import */ var _spriteSheet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spriteSheet/utils */ "./module/spriteSheet/utils.ts");



class CanvasWorker {
    constructor(workerName, worker = new Worker(new URL(
    /* webpackChunkName: 'canvas.worker' */
    /* worker import */ __webpack_require__.p + __webpack_require__.u("canvas.worker"), __webpack_require__.b))) {
        this.workerName = workerName;
        this.worker = worker;
        this.initializePromise = Promise.resolve();
        this.drawPromises = [];
        this.canvases = new Map();
        const getOperationName = (operationName, id) => `${operationName}:${id}`;
        this.initializeOperation = new _workerOperation__WEBPACK_IMPORTED_MODULE_0__.WorkerOperation(_workers_canvas_worker__WEBPACK_IMPORTED_MODULE_1__.CanvasOperation.CREATE, worker, workerName, (id) => getOperationName('initialize canvas', id));
        this.drawOperation = new _workerOperation__WEBPACK_IMPORTED_MODULE_0__.WorkerOperation(_workers_canvas_worker__WEBPACK_IMPORTED_MODULE_1__.CanvasOperation.DRAW, worker, workerName, (id) => getOperationName('draw', id));
        this.getImageOperation =
            new _workerOperation__WEBPACK_IMPORTED_MODULE_0__.WorkerOperation(_workers_canvas_worker__WEBPACK_IMPORTED_MODULE_1__.CanvasOperation.GET_IMAGE, worker, workerName, (id) => getOperationName('get image', id));
        this.clearOperation = new _workerOperation__WEBPACK_IMPORTED_MODULE_0__.WorkerOperation(_workers_canvas_worker__WEBPACK_IMPORTED_MODULE_1__.CanvasOperation.CLEAR, worker, workerName, () => 'clear');
    }
    get name() {
        return this.workerName;
    }
    create(canvasId, width, height) {
        if (this.canvases.has(canvasId)) {
            throw new Error(`Duplicate id '${canvasId}' in worker '${this.workerName}'.`);
        }
        const canvas = (0,_spriteSheet_utils__WEBPACK_IMPORTED_MODULE_2__.createCanvasElement)(width, height);
        this.canvases.set(canvasId, canvas);
        const offscreenCanvas = canvas.transferControlToOffscreen();
        const queueInitializeOperation = async () => {
            await this.initializePromise;
            await this.initializeOperation.execute(canvasId, {
                canvasId,
                canvas: offscreenCanvas,
            }, [offscreenCanvas]);
        };
        this.initializePromise = queueInitializeOperation();
        return canvas;
    }
    draw(canvasId, bitmap, x, y) {
        const drawOperation = async () => {
            await this.initializePromise;
            const uid = performance.now();
            await this.drawOperation.execute(`${canvasId}:${x}x${y}:${uid}`, { canvasId, bitmap, x, y }, [bitmap]);
        };
        this.drawPromises.push(drawOperation());
    }
    async getImage(canvasId, width, height) {
        await this.initializePromise;
        await Promise.all(this.drawPromises);
        return await this.getImageOperation.execute(canvasId, {
            canvasId,
            width,
            height,
        });
    }
    terminate() {
        this.worker.terminate();
    }
    async clear() {
        await this.clearOperation.execute('clear', {});
        this.canvases.clear();
    }
}


/***/ },

/***/ "./module/workerAdapters/canvasWorkersPool.ts"
/*!****************************************************!*\
  !*** ./module/workerAdapters/canvasWorkersPool.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasWorkersPool: () => (/* binding */ CanvasWorkersPool)
/* harmony export */ });
/* harmony import */ var _canvasWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasWorker */ "./module/workerAdapters/canvasWorker.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging */ "./module/logging.ts");


class CanvasWorkersPool {
    constructor() {
        this.workers = [];
        this.freeWorkers = [];
    }
    reserve(name) {
        return this.freeWorkers.pop() ?? this.createWorker(name);
    }
    async free(worker) {
        try {
            await worker.clear();
            this.freeWorkers.push(worker);
            _logging__WEBPACK_IMPORTED_MODULE_1__["default"].info({ free: this.freeWorkers.length, total: this.workers.length }, 'Freed canvas worker');
        }
        catch (error) {
            _logging__WEBPACK_IMPORTED_MODULE_1__["default"].error(error);
            worker.terminate();
        }
    }
    dispose() {
        for (const worker of this.workers) {
            worker.terminate();
        }
        this.workers.length = 0;
        this.freeWorkers.length = 0;
    }
    createWorker(name) {
        const canvasWorker = new _canvasWorker__WEBPACK_IMPORTED_MODULE_0__.CanvasWorker(name);
        _logging__WEBPACK_IMPORTED_MODULE_1__["default"].info({ workerName: name, id: this.workers.length }, 'Created canvas worker');
        this.workers.push(canvasWorker);
        return canvasWorker;
    }
}


/***/ },

/***/ "./module/workerAdapters/pngWorker.ts"
/*!********************************************!*\
  !*** ./module/workerAdapters/pngWorker.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decodePngData)
/* harmony export */ });
/* harmony import */ var _workerAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerAdapter */ "./module/workerAdapters/workerAdapter.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./module/utils.ts");


let pngToBufferWorker;
async function getPngToBufferWorker() {
    if (!pngToBufferWorker) {
        const isLowRamMode = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.askLowRamOptimizationMode)();
        const concurrency = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDefaultConcurrency)(isLowRamMode);
        pngToBufferWorker = new _workerAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]('pngToBuffer', () => new Worker(new URL(
        /* webpackChunkName: 'pngToBuffer.worker' */
        /* worker import */ __webpack_require__.p + __webpack_require__.u("pngToBuffer.worker"), __webpack_require__.b)), undefined, concurrency);
    }
    return pngToBufferWorker;
}
async function decodePngData(fullName, buffer) {
    const worker = await getPngToBufferWorker();
    return (buffer instanceof SharedArrayBuffer)
        ? await worker.execute(fullName, { name: fullName, buffer })
        : await worker.execute(fullName, { name: fullName, buffer }, [buffer]);
}


/***/ },

/***/ "./module/workerAdapters/workerAdapter.ts"
/*!************************************************!*\
  !*** ./module/workerAdapters/workerAdapter.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorkerAdapter)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ "./module/logging.ts");
/* harmony import */ var _workerOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workerOperation */ "./module/workerAdapters/workerOperation.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./module/utils.ts");



class WorkerAdapter {
    constructor(workerName, workerFactory, operationTimeout = (0,_workerOperation__WEBPACK_IMPORTED_MODULE_1__.getDefaultOperationTimeout)(), maxWorkers = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDefaultConcurrency)()) {
        this.workerName = workerName;
        this.workerFactory = workerFactory;
        this.operationTimeout = operationTimeout;
        this.maxWorkers = maxWorkers;
        this.workers = [];
        if (!workerFactory) {
            throw new Error('Worker factory is required');
        }
        if (!operationTimeout || operationTimeout <= 0) {
            throw new Error(`Invalid timeout ${operationTimeout}`);
        }
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].info({ workerName }, 'Initialized worker adapter.');
    }
    async execute(key, request, transfer = []) {
        const workerId = this.chooseWorkerId();
        const workerInfo = this.workers[workerId];
        workerInfo.queue++;
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].debug('Worker \'%s#%d\' queue: %d.', this.workerName, workerId, workerInfo.queue);
        try {
            return await workerInfo.operation.execute(key, request, transfer);
        }
        finally {
            workerInfo.queue--;
        }
    }
    createWorker() {
        const worker = this.workerFactory();
        const operation = new _workerOperation__WEBPACK_IMPORTED_MODULE_1__.WorkerOperation(0, worker, this.workerName, (key) => key, this.operationTimeout);
        const workerId = this.workers.length;
        this.workers.push({ worker, queue: 0, operation });
        worker.onerror = (e) => {
            _logging__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
        };
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].info({ workerName: this.workerName, workerId }, 'Created new worker.');
        return workerId;
    }
    chooseWorkerId() {
        let freestWorkerId = 0;
        for (let workerId = 0; workerId < this.workers.length; workerId++) {
            const minQueue = this.workers[freestWorkerId].queue;
            const currentQueue = this.workers[workerId].queue;
            if (currentQueue === 0) {
                return workerId;
            }
            if (currentQueue < minQueue) {
                freestWorkerId = workerId;
            }
        }
        if (this.workers.length < this.maxWorkers) {
            return this.createWorker();
        }
        return freestWorkerId;
    }
}


/***/ },

/***/ "./module/workerAdapters/workerOperation.ts"
/*!**************************************************!*\
  !*** ./module/workerAdapters/workerOperation.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerOperation: () => (/* binding */ WorkerOperation),
/* harmony export */   getDefaultOperationTimeout: () => (/* binding */ getDefaultOperationTimeout),
/* harmony export */   parseNumericParameter: () => (/* binding */ parseNumericParameter)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ "./module/logging.ts");
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info.json */ "./module/info.json");


function parseNumericParameter(parameterName, defaultValue) {
    const parameterValue = parseInt(globalThis.PluginManager?.parameters(_info_json__WEBPACK_IMPORTED_MODULE_1__.name)?.[parameterName]);
    return (!Number.isNaN(parameterValue) && parameterValue > 0)
        ? parameterValue
        : defaultValue;
}
function getDefaultOperationTimeout() {
    return Math.max(parseNumericParameter('operationTimeout', 5000), 500);
}
class WorkerOperation {
    constructor(operationId, worker, workerName, getKeyDescription, operationTimeout = getDefaultOperationTimeout()) {
        this.operationId = operationId;
        this.worker = worker;
        this.workerName = workerName;
        this.getKeyDescription = getKeyDescription;
        this.operationTimeout = operationTimeout;
        this.subscribers = new Map();
        if (!worker) {
            throw new Error('Worker is required');
        }
        if (!operationTimeout || operationTimeout <= 0) {
            throw new Error(`Invalid timeout ${operationTimeout}`);
        }
        this.worker.addEventListener('message', (response) => {
            const { operationId, key, ...data } = response.data;
            if (this.operationId !== operationId) {
                return;
            }
            const subscriber = this.subscribers.get(key);
            if (!subscriber) {
                _logging__WEBPACK_IMPORTED_MODULE_0__["default"].error(`No subscriber found for operation '%s' (worker: '%s').`, this.getKeyDescription(key), this.workerName);
                throw new Error(`No subscriber found for operation '${key}'.`);
            }
            clearTimeout(subscriber.timeoutId);
            if (data.error === undefined) {
                _logging__WEBPACK_IMPORTED_MODULE_0__["default"].debug(`Received operation '%s' result for '%s' (worker: '%s').`, this.operationId?.toString(), this.getKeyDescription(key), this.workerName);
                subscriber.resolve(data.result);
            }
            else {
                subscriber.reject(`Failed to perform operation '${this.operationId}' for '${this.getKeyDescription(key)}' ` +
                    `in worker '${this.workerName}'. Details: ${data.error}`);
            }
            this.subscribers.delete(key);
        });
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].info({
            operationId: this.operationId,
            workerName: this.workerName
        }, 'Initialized operation for worker.');
    }
    execute(key, request, transfer = []) {
        const resultPromise = this.subscribe(key);
        this.worker.postMessage({
            operationId: this.operationId,
            key,
            request
        }, {
            transfer
        });
        _logging__WEBPACK_IMPORTED_MODULE_0__["default"].debug('Started operation \'%s\' for \'%s\' to worker \'%s\'.', this.operationId?.toString(), this.getKeyDescription(key), this.workerName);
        return resultPromise;
    }
    subscribe(key) {
        return new Promise((resolve, reject) => {
            if (this.subscribers.has(key)) {
                reject(`Already waiting for result of operation '${this.operationId}' ` +
                    `for '${this.getKeyDescription(key)}'. Make sure all operation ids are unique.`);
                return;
            }
            const timeoutId = setTimeout(() => reject(`Timeout on operation '${this.operationId}' for '${this.getKeyDescription(key)}'.`), this.operationTimeout);
            this.subscribers.set(key, {
                resolve,
                reject,
                timeoutId
            });
        });
    }
}


/***/ },

/***/ "./module/workers/canvas.worker.ts"
/*!*****************************************!*\
  !*** ./module/workers/canvas.worker.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasOperation: () => (/* binding */ CanvasOperation)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./module/workers/utils.ts");

var CanvasOperation;
(function (CanvasOperation) {
    CanvasOperation[CanvasOperation["CREATE"] = 0] = "CREATE";
    CanvasOperation[CanvasOperation["DRAW"] = 1] = "DRAW";
    CanvasOperation[CanvasOperation["GET_IMAGE"] = 2] = "GET_IMAGE";
    CanvasOperation[CanvasOperation["CLEAR"] = 3] = "CLEAR";
})(CanvasOperation || (CanvasOperation = {}));
const canvases = new Map();
function getCanvas(id) {
    const canvas = canvases.get(id);
    if (!canvas) {
        throw new Error(`Canvas '${id}' is missing in canvas worker. Execute CREATE operation.`);
    }
    return canvas;
}
onmessage = async (message) => {
    const { operationId, key, request } = message.data;
    try {
        switch (operationId) {
            case CanvasOperation.CREATE: {
                const { canvasId } = request;
                if (canvases.has(canvasId)) {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.postError)(operationId, canvasId, `Duplicate canvas '${canvasId}'`);
                }
                canvases.set(canvasId, request.canvas);
                postMessage({
                    operationId,
                    key,
                    result: {},
                    error: undefined
                });
                break;
            }
            case CanvasOperation.DRAW: {
                const { canvasId, x, y, bitmap } = request;
                if (!(x >= 0 && y >= 0)) {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.postError)(operationId, key, 'Offset is invalid.');
                }
                if (!bitmap) {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.postError)(operationId, key, 'Bitmap is required.');
                }
                const canvas = getCanvas(canvasId);
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.postError)(operationId, key, 'Unable to get canvas context.');
                }
                ctx.drawImage(bitmap, x, y);
                return postMessage({
                    operationId,
                    key,
                    result: {},
                    error: undefined
                });
            }
            case CanvasOperation.GET_IMAGE: {
                const { canvasId, width, height } = request;
                if (!(width >= 0 && height >= 0)) {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.postError)(operationId, key, 'Dimensions are invalid.');
                }
                const canvas = getCanvas(canvasId);
                const blob = await getCroppedBlob(canvas, width, height);
                const image = getStream(blob);
                return postMessage({
                    operationId,
                    key,
                    result: image,
                    error: undefined
                }, {
                    transfer: [image]
                });
            }
            case CanvasOperation.CLEAR: {
                canvases.clear();
                return postMessage({
                    operationId,
                    key,
                    result: {},
                    error: undefined
                });
            }
            default: {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.postError)(operationId, key, `Operation ${operationId} is not supported.`);
            }
        }
    }
    catch (error) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.postError)(operationId, key, error);
    }
};
function getCroppedBlob(canvas, width, height) {
    const croppedCanvas = new OffscreenCanvas(width, height);
    const ctx = croppedCanvas.getContext('2d');
    if (!ctx) {
        throw new Error('Unable to obtain bitmap renderer context.');
    }
    ctx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
    return croppedCanvas.convertToBlob();
}
function getStream(blob) {
    return blob.stream();
}


/***/ },

/***/ "./module/workers/utils.ts"
/*!*********************************!*\
  !*** ./module/workers/utils.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTrimmedCoordinates: () => (/* binding */ getTrimmedCoordinates),
/* harmony export */   postError: () => (/* binding */ postError)
/* harmony export */ });
function postError(operationId, key, error) {
    if (!error) {
        error = '<no details>';
    }
    if (typeof error === 'string') {
        error = new Error(error);
    }
    postMessage({
        operationId,
        key,
        error,
        result: null
    });
}
function getTrimmedCoordinates(imageData) {
    const { width } = imageData;
    const clampedWidth = width * 4;
    let foundMinX = false;
    let foundMinY = false;
    let currentLineMinIndex = 0;
    let currentLineMaxIndex = 0;
    let minY = 0;
    let maxY = 0;
    let minX = width;
    let maxX = 0;
    let currentY = 0;
    let newLineIndex = clampedWidth;
    for (let i = 0; i < imageData.data.length; i += 4) {
        const currentLineIndex = i + clampedWidth - newLineIndex;
        const alpha = imageData.data[i + 3];
        const isTransparent = alpha === 0;
        if (!isTransparent) {
            if (!foundMinX) {
                foundMinX = true;
                currentLineMinIndex = currentLineIndex;
            }
            currentLineMaxIndex = currentLineIndex;
        }
        const isEndOfLine = (i + 4) >= newLineIndex;
        if (isEndOfLine) {
            const isTransparentLine = !foundMinX;
            if (!isTransparentLine) {
                if (!foundMinY) {
                    foundMinY = true;
                    minY = currentY;
                }
                maxY = currentY;
            }
            const lineMinX = Math.floor(currentLineMinIndex / 4);
            const lineMaxX = Math.floor(currentLineMaxIndex / 4);
            if (lineMaxX > maxX) {
                maxX = lineMaxX;
            }
            if (foundMinX && lineMinX < minX) {
                minX = lineMinX;
            }
            currentY++;
            newLineIndex += clampedWidth;
            currentLineMinIndex = 0;
            currentLineMaxIndex = 0;
            foundMinX = false;
        }
    }
    minX = Math.min(minX, maxX);
    minY = Math.min(minY, maxY);
    maxX = Math.max(maxX, minX + 1);
    maxY = Math.max(maxY, minY + 1);
    return {
        minX,
        minY,
        maxX,
        maxY
    };
}


/***/ },

/***/ "./node_modules/@kp-mods/mods-settings/lib/index.js"
/*!**********************************************************!*\
  !*** ./node_modules/@kp-mods/mods-settings/lib/index.js ***!
  \**********************************************************/
(__unused_webpack_module, exports) {

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./module/index.ts":
/*!*************************!*\
  !*** ./module/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_247__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createOptionSetting = exports.forMod = exports.registerMod = void 0;
var externalModsSettings = __importStar(__nested_webpack_require_247__(/*! ./standaloneMod */ "./standaloneMod"));
var modsSettingsGroupsRepository_1 = __importDefault(__nested_webpack_require_247__(/*! ./modsSettingsGroupsRepository */ "./module/modsSettingsGroupsRepository.ts"));
var inMemoryModsSettingsStorage = {};
var FakeModSettingsReader = /** @class */ (function () {
    function FakeModSettingsReader(modId) {
        this.modId = modId;
        if (!modId) {
            throw new Error('Mod id is required.');
        }
    }
    FakeModSettingsReader.prototype.get = function (name) {
        var _a;
        return (_a = inMemoryModsSettingsStorage[this.modId]) === null || _a === void 0 ? void 0 : _a[name].defaultValue;
    };
    return FakeModSettingsReader;
}());
var FakeSettingsBuilder = /** @class */ (function () {
    function FakeSettingsBuilder(modId, defaultSettings, modsSettingsGroupsRepository) {
        this.modId = modId;
        this.defaultSettings = defaultSettings;
        this.modsSettingsGroupsRepository = modsSettingsGroupsRepository;
        if (!defaultSettings) {
            throw new Error('Default settings is required.');
        }
    }
    FakeSettingsBuilder.prototype.addMigrations = function (configureMigrations) {
        return this;
    };
    FakeSettingsBuilder.prototype.addSettings = function (defaultSettings) {
        return new FakeSettingsBuilder(this.modId, __assign(__assign({}, this.defaultSettings), defaultSettings), this.modsSettingsGroupsRepository);
    };
    FakeSettingsBuilder.prototype.addSettingsGroup = function (group, defaultSettings) {
        if (defaultSettings === void 0) { defaultSettings = {}; }
        var groupInfo = typeof group === 'string'
            ? { name: group }
            : group;
        this.modsSettingsGroupsRepository.addGroup(this.modId, groupInfo);
        for (var _i = 0, _a = Object.values(defaultSettings); _i < _a.length; _i++) {
            var setting = _a[_i];
            setting.group = groupInfo.name;
        }
        return new FakeSettingsBuilder(this.modId, __assign(__assign({}, this.defaultSettings), defaultSettings), this.modsSettingsGroupsRepository);
    };
    FakeSettingsBuilder.prototype.addTranslator = function (translator) {
        return this;
    };
    FakeSettingsBuilder.prototype.register = function () {
        this.modsSettingsGroupsRepository.validateGroups(this.modId);
        fakeRegisteringMod(this.modId, this.defaultSettings);
        return new FakeModSettingsReader(this.modId);
    };
    return FakeSettingsBuilder;
}());
function forModWithFallback(mod) {
    var _a, _b;
    return (_b = (_a = externalModsSettings === null || externalModsSettings === void 0 ? void 0 : externalModsSettings.forMod) === null || _a === void 0 ? void 0 : _a.call(externalModsSettings, mod)) !== null && _b !== void 0 ? _b : new FakeSettingsBuilder(mod, {}, modsSettingsGroupsRepository_1.default);
}
exports.forMod = forModWithFallback;
function registerModWithFallback(modId, defaultSettings, configureMigrations) {
    var _a, _b;
    return (_b = (_a = externalModsSettings === null || externalModsSettings === void 0 ? void 0 : externalModsSettings.registerMod) === null || _a === void 0 ? void 0 : _a.call(externalModsSettings, modId, defaultSettings, configureMigrations)) !== null && _b !== void 0 ? _b : fakeRegisteringMod(modId, defaultSettings);
}
exports.registerMod = registerModWithFallback;
function fakeRegisteringMod(modId, defaultSettings) {
    var _a;
    var storedSettings = (_a = inMemoryModsSettingsStorage[modId]) !== null && _a !== void 0 ? _a : {};
    inMemoryModsSettingsStorage[modId] = __assign(__assign({}, storedSettings), defaultSettings);
    return new FakeModSettingsReader(modId);
}
var optionSettingBuilder_1 = __nested_webpack_require_247__(/*! ./optionSettingBuilder */ "./module/optionSettingBuilder.ts");
Object.defineProperty(exports, "createOptionSetting", ({ enumerable: true, get: function () { return __importDefault(optionSettingBuilder_1).default; } }));


/***/ }),

/***/ "./module/modsSettingsGroupsRepository.ts":
/*!************************************************!*\
  !*** ./module/modsSettingsGroupsRepository.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModsSettingsGroupsRepository = void 0;
var ModsSettingsGroupsRepository = /** @class */ (function () {
    function ModsSettingsGroupsRepository() {
        this.groupsByMod = new Map();
    }
    ModsSettingsGroupsRepository.prototype.addGroup = function (modName, group) {
        var modGroupsByName = this.groupsByMod.get(modName);
        if (!modGroupsByName) {
            modGroupsByName = new Map();
            this.groupsByMod.set(modName, modGroupsByName);
        }
        if (modGroupsByName.has(group.name)) {
            throw new Error("Duplicate group '".concat(group.name, "'"));
        }
        modGroupsByName.set(group.name, group);
    };
    ModsSettingsGroupsRepository.prototype.validateGroups = function (modName) {
        var modGroupsByName = this.groupsByMod.get(modName);
        if (!modGroupsByName) {
            return;
        }
        for (var _i = 0, _a = Array.from(modGroupsByName.values()); _i < _a.length; _i++) {
            var group = _a[_i];
            if (group.parent && !modGroupsByName.has(group.parent)) {
                throw new Error("Parent group '".concat(group.parent, "' not found (mod: '").concat(modName, "', group: '").concat(group.name, "')"));
            }
        }
    };
    ModsSettingsGroupsRepository.prototype.hasGroup = function (modName, groupName) {
        var _a;
        return ((_a = this.groupsByMod.get(modName)) === null || _a === void 0 ? void 0 : _a.has(groupName)) === true;
    };
    ModsSettingsGroupsRepository.prototype.getGroups = function (modName) {
        var _a;
        var groups = (_a = this.groupsByMod.get(modName)) !== null && _a !== void 0 ? _a : new Map();
        return groups;
    };
    return ModsSettingsGroupsRepository;
}());
exports.ModsSettingsGroupsRepository = ModsSettingsGroupsRepository;
var defaultModsSettingsGroupsRepository = new ModsSettingsGroupsRepository();
exports["default"] = defaultModsSettingsGroupsRepository;


/***/ }),

/***/ "./module/optionSettingBuilder.ts":
/*!****************************************!*\
  !*** ./module/optionSettingBuilder.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionSettingBuilder = void 0;
var OptionSettingBuilder = /** @class */ (function () {
    function OptionSettingBuilder(options) {
        this.setting = {
            type: 'option',
            defaultValue: options[0],
            options: options,
        };
    }
    OptionSettingBuilder.prototype.setDefaultValue = function (defaultValue) {
        this.setting.defaultValue = defaultValue;
        return this;
    };
    OptionSettingBuilder.prototype.setValidator = function (validator) {
        this.setting.validate = validator;
        return this;
    };
    OptionSettingBuilder.prototype.setOptionNameResolver = function (getDisplayedValue) {
        this.setting.getDisplayedValue = getDisplayedValue;
        return this;
    };
    OptionSettingBuilder.prototype.setDescription = function (description) {
        this.setting.description = description;
        return this;
    };
    OptionSettingBuilder.prototype.build = function () {
        return __assign({}, this.setting);
    };
    return OptionSettingBuilder;
}());
exports.OptionSettingBuilder = OptionSettingBuilder;
function createOptionSetting() {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    if (!(options === null || options === void 0 ? void 0 : options.length)) {
        throw new Error('Options is required.');
    }
    return new OptionSettingBuilder(options);
}
exports["default"] = createOptionSetting;


/***/ }),

/***/ "./standaloneMod":
/*!*******************************!*\
  !*** external "ModsSettings" ***!
  \*******************************/
/***/ ((module) => {

module.exports = (function() { return this["ModsSettings"]; }());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_10963__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_10963__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_10963__("./module/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __nested_webpack_exports__) __webpack_export_target__[i] = __nested_webpack_exports__[i];
/******/ 	if(__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./module/styles/canvases.css"
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./module/styles/canvases.css ***!
  \**************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.canvases {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
    position: absolute;
    padding-top: 3%;
    overflow: hidden;
    flex-direction: row;
    flex-wrap: nowrap;
    max-height: 30%;
    height: 30%;
    width: 100%;
    gap: 1%;
}

.canvases > canvas {
    max-height: 50%;
    display: block;
    height: 0;
    transition: 0.25s height;
}
`, "",{"version":3,"sources":["webpack://./module/styles/canvases.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,UAAU;IACV,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,WAAW;IACX,OAAO;AACX;;AAEA;IACI,eAAe;IACf,cAAc;IACd,SAAS;IACT,wBAAwB;AAC5B","sourcesContent":[".canvases {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    z-index: 2;\n    position: absolute;\n    padding-top: 3%;\n    overflow: hidden;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    max-height: 30%;\n    height: 30%;\n    width: 100%;\n    gap: 1%;\n}\n\n.canvases > canvas {\n    max-height: 50%;\n    display: block;\n    height: 0;\n    transition: 0.25s height;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./module/styles/loaders.css"
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./module/styles/loaders.css ***!
  \*************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
    background: black;
    position: absolute;
    color: white;
    top: 63%;
    left: 50%;
    width: 70%;
    transform: translate(-50%, 0%);
    font-family: GameFont;
    z-index: 4;
}

.header {
    font-weight: bold;
    font-size: 130%;
}

.row {
    display: flex;
    justify-content: space-between;
    padding: 5px;
}

.lds-heart {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    transform-origin: 10px 10px;
}

.lds-heart div {
    top: 8px;
    left: 8px;
    position: absolute;
    width: 8px;
    height: 8px;
    background: #b051cf;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.lds-heart div:after,
.lds-heart div:before {
    content: " ";
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    background: #b051cf;
}

.lds-heart div:before {
    left: -6px;
    border-radius: 50% 0 0 50%;
}

.lds-heart div:after {
    top: -6px;
    border-radius: 50% 50% 0 0;
}

@keyframes lds-heart {
    0% {
        transform: scale(0.95);
    }
    5% {
        transform: scale(1.1);
    }
    39% {
        transform: scale(0.85);
    }
    45% {
        transform: scale(1);
    }
    60% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0.9);
    }
}
`, "",{"version":3,"sources":["webpack://./module/styles/loaders.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,UAAU;IACV,8BAA8B;IAC9B,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,sEAAsE;AAC1E;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,UAAU;IACV,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,0BAA0B;AAC9B;;AAEA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,qBAAqB;IACzB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,mBAAmB;IACvB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,qBAAqB;IACzB;AACJ","sourcesContent":[".container {\n    background: black;\n    position: absolute;\n    color: white;\n    top: 63%;\n    left: 50%;\n    width: 70%;\n    transform: translate(-50%, 0%);\n    font-family: GameFont;\n    z-index: 4;\n}\n\n.header {\n    font-weight: bold;\n    font-size: 130%;\n}\n\n.row {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px;\n}\n\n.lds-heart {\n    display: inline-block;\n    position: relative;\n    width: 20px;\n    height: 20px;\n    transform: rotate(45deg);\n    transform-origin: 10px 10px;\n}\n\n.lds-heart div {\n    top: 8px;\n    left: 8px;\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    background: #b051cf;\n    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.lds-heart div:after,\n.lds-heart div:before {\n    content: \" \";\n    position: absolute;\n    display: block;\n    width: 8px;\n    height: 8px;\n    background: #b051cf;\n}\n\n.lds-heart div:before {\n    left: -6px;\n    border-radius: 50% 0 0 50%;\n}\n\n.lds-heart div:after {\n    top: -6px;\n    border-radius: 50% 50% 0 0;\n}\n\n@keyframes lds-heart {\n    0% {\n        transform: scale(0.95);\n    }\n    5% {\n        transform: scale(1.1);\n    }\n    39% {\n        transform: scale(0.85);\n    }\n    45% {\n        transform: scale(1);\n    }\n    60% {\n        transform: scale(0.95);\n    }\n    100% {\n        transform: scale(0.9);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./module/styles/loading-border.css"
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./module/styles/loading-border.css ***!
  \********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.border-loader {
    padding: 5px 0;
    display: block;
    width: 100%;
    height: 30px;
    max-height: 60px;
    margin: 0;
    bottom: 0;
    left: 0;
    float: left;

    --mask: linear-gradient(to right,
    rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%,
    rgba(0, 0, 0, 1) 98%, rgba(0, 0, 0, 0) 100%
    ) 100% 50% / 100% 100% repeat-x;

    -webkit-mask: var(--mask);
    mask: var(--mask);
}

.parallax1 > use {
    animation: move-forever1 8s linear infinite;
    fill: #da358d;
}

.parallax1 > use:nth-child(1) {
    animation-delay: -2s;
}

.parallax2 > use {
    animation: move-forever2 6s linear infinite;
    fill: #7b4ead;
}

.parallax2 > use:nth-child(1) {
    animation-delay: -2s;
}

.parallax3 > use {
    animation: move-forever3 4s linear infinite;
    fill: #000000;
}

.parallax3 > use:nth-child(1) {
    animation-delay: -2s;
}

@keyframes move-forever1 {
    0% {
        transform: translate(85px, 0%);
    }
    100% {
        transform: translate(-90px, 0%);
    }
}

@keyframes move-forever2 {
    0% {
        transform: translate(-90px, 0%);
    }
    100% {
        transform: translate(85px, 0%);
    }
}

@keyframes move-forever3 {
    0% {
        transform: translate(-90px, 0%);
    }
    100% {
        transform: translate(85px, 0%);
    }
}
`, "",{"version":3,"sources":["webpack://./module/styles/loading-border.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,cAAc;IACd,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,SAAS;IACT,SAAS;IACT,OAAO;IACP,WAAW;;IAEX;;;mCAG+B;;IAE/B,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,2CAA2C;IAC3C,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,2CAA2C;IAC3C,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,2CAA2C;IAC3C,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI;QACI,8BAA8B;IAClC;IACA;QACI,+BAA+B;IACnC;AACJ;;AAEA;IACI;QACI,+BAA+B;IACnC;IACA;QACI,8BAA8B;IAClC;AACJ;;AAEA;IACI;QACI,+BAA+B;IACnC;IACA;QACI,8BAA8B;IAClC;AACJ","sourcesContent":[".border-loader {\n    padding: 5px 0;\n    display: block;\n    width: 100%;\n    height: 30px;\n    max-height: 60px;\n    margin: 0;\n    bottom: 0;\n    left: 0;\n    float: left;\n\n    --mask: linear-gradient(to right,\n    rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%,\n    rgba(0, 0, 0, 1) 98%, rgba(0, 0, 0, 0) 100%\n    ) 100% 50% / 100% 100% repeat-x;\n\n    -webkit-mask: var(--mask);\n    mask: var(--mask);\n}\n\n.parallax1 > use {\n    animation: move-forever1 8s linear infinite;\n    fill: #da358d;\n}\n\n.parallax1 > use:nth-child(1) {\n    animation-delay: -2s;\n}\n\n.parallax2 > use {\n    animation: move-forever2 6s linear infinite;\n    fill: #7b4ead;\n}\n\n.parallax2 > use:nth-child(1) {\n    animation-delay: -2s;\n}\n\n.parallax3 > use {\n    animation: move-forever3 4s linear infinite;\n    fill: #000000;\n}\n\n.parallax3 > use:nth-child(1) {\n    animation-delay: -2s;\n}\n\n@keyframes move-forever1 {\n    0% {\n        transform: translate(85px, 0%);\n    }\n    100% {\n        transform: translate(-90px, 0%);\n    }\n}\n\n@keyframes move-forever2 {\n    0% {\n        transform: translate(-90px, 0%);\n    }\n    100% {\n        transform: translate(85px, 0%);\n    }\n}\n\n@keyframes move-forever3 {\n    0% {\n        transform: translate(-90px, 0%);\n    }\n    100% {\n        transform: translate(85px, 0%);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/semver/classes/comparator.js"
/*!***************************************************!*\
  !*** ./node_modules/semver/classes/comparator.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }

  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    comp = comp.trim().split(/\s+/).join(' ')
    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    options = parseOptions(options)

    // Special cases where nothing can possibly be lower
    if (options.includePrerelease &&
      (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
      return false
    }
    if (!options.includePrerelease &&
      (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
      return false
    }

    // Same direction increasing (> or >=)
    if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
      return true
    }
    // Same direction decreasing (< or <=)
    if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
      return true
    }
    // same SemVer and both sides are inclusive (<= or >=)
    if (
      (this.semver.version === comp.semver.version) &&
      this.operator.includes('=') && comp.operator.includes('=')) {
      return true
    }
    // opposite directions less than
    if (cmp(this.semver, '<', comp.semver, options) &&
      this.operator.startsWith('>') && comp.operator.startsWith('<')) {
      return true
    }
    // opposite directions greater than
    if (cmp(this.semver, '>', comp.semver, options) &&
      this.operator.startsWith('<') && comp.operator.startsWith('>')) {
      return true
    }
    return false
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/semver/internal/parse-options.js")
const { safeRe: re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")
const cmp = __webpack_require__(/*! ../functions/cmp */ "./node_modules/semver/functions/cmp.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ./range */ "./node_modules/semver/classes/range.js")


/***/ },

/***/ "./node_modules/semver/classes/range.js"
/*!**********************************************!*\
  !*** ./node_modules/semver/classes/range.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SPACE_CHARACTERS = /\s+/g

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.formatted = undefined
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First reduce all whitespace as much as possible so we do not have to rely
    // on potentially slow regexes like \s*. This is then stored and used for
    // future error messages as well.
    this.raw = range.trim().replace(SPACE_CHARACTERS, ' ')

    // First, split on ||
    this.set = this.raw
      .split('||')
      // map the range to a 2d array of comparators
      .map(r => this.parseRange(r.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${this.raw}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0) {
        this.set = [first]
      } else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.formatted = undefined
  }

  get range () {
    if (this.formatted === undefined) {
      this.formatted = ''
      for (let i = 0; i < this.set.length; i++) {
        if (i > 0) {
          this.formatted += '||'
        }
        const comps = this.set[i]
        for (let k = 0; k < comps.length; k++) {
          if (k > 0) {
            this.formatted += ' '
          }
          this.formatted += comps[k].toString().trim()
        }
      }
    }
    return this.formatted
  }

  format () {
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts =
      (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) |
      (this.options.loose && FLAG_LOOSE)
    const memoKey = memoOpts + ':' + range
    const cached = cache.get(memoKey)
    if (cached) {
      return cached
    }

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)

    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range)

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)
    debug('tilde trim', range)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)
    debug('caret trim', range)

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    let rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))

    if (loose) {
      // in loose mode, throw out any that are not valid comparators
      rangeList = rangeList.filter(comp => {
        debug('loose invalid filter', comp, this.options)
        return !!comp.match(re[t.COMPARATORLOOSE])
      })
    }
    debug('range list', rangeList)

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const rangeMap = new Map()
    const comparators = rangeList.map(comp => new Comparator(comp, this.options))
    for (const comp of comparators) {
      if (isNullSet(comp)) {
        return [comp]
      }
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has('')) {
      rangeMap.delete('')
    }

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}

module.exports = Range

const LRU = __webpack_require__(/*! ../internal/lrucache */ "./node_modules/semver/internal/lrucache.js")
const cache = new LRU()

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/semver/internal/parse-options.js")
const Comparator = __webpack_require__(/*! ./comparator */ "./node_modules/semver/classes/comparator.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const {
  safeRe: re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace,
} = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __webpack_require__(/*! ../internal/constants */ "./node_modules/semver/internal/constants.js")

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  comp = comp.replace(re[t.BUILD], '')
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options) => {
  return comp
    .trim()
    .split(/\s+/)
    .map((c) => replaceTilde(c, options))
    .join(' ')
}

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options) => {
  return comp
    .trim()
    .split(/\s+/)
    .map((c) => replaceCaret(c, options))
    .join(' ')
}

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp
    .split(/\s+/)
    .map((c) => replaceXRange(c, options))
    .join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<') {
        pr = '-0'
      }

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp
    .trim()
    .replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp
    .trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return `${from} ${to}`.trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ },

/***/ "./node_modules/semver/classes/semver.js"
/*!***********************************************!*\
  !*** ./node_modules/semver/classes/semver.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "./node_modules/semver/internal/constants.js")
const { safeRe: re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "./node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
        version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    if (this.major < other.major) {
      return -1
    }
    if (this.major > other.major) {
      return 1
    }
    if (this.minor < other.minor) {
      return -1
    }
    if (this.minor > other.minor) {
      return 1
    }
    if (this.patch < other.patch) {
      return -1
    }
    if (this.patch > other.patch) {
      return 1
    }
    return 0
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('build compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    if (release.startsWith('pre')) {
      if (!identifier && identifierBase === false) {
        throw new Error('invalid increment argument: identifier is empty')
      }
      // Avoid an invalid semver results
      if (identifier) {
        const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE])
        if (!match || match[1] !== identifier) {
          throw new Error(`invalid identifier: ${identifier}`)
        }
      }
    }

    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier, identifierBase)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier, identifierBase)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier, identifierBase)
        this.inc('pre', identifier, identifierBase)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase)
        }
        this.inc('pre', identifier, identifierBase)
        break
      case 'release':
        if (this.prerelease.length === 0) {
          throw new Error(`version ${this.raw} is not a prerelease`)
        }
        this.prerelease.length = 0
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0

        if (this.prerelease.length === 0) {
          this.prerelease = [base]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base]
          if (identifierBase === false) {
            prerelease = [identifier]
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease
            }
          } else {
            this.prerelease = prerelease
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format()
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`
    }
    return this
  }
}

module.exports = SemVer


/***/ },

/***/ "./node_modules/semver/functions/clean.js"
/*!************************************************!*\
  !*** ./node_modules/semver/functions/clean.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ },

/***/ "./node_modules/semver/functions/cmp.js"
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/cmp.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const eq = __webpack_require__(/*! ./eq */ "./node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./neq */ "./node_modules/semver/functions/neq.js")
const gt = __webpack_require__(/*! ./gt */ "./node_modules/semver/functions/gt.js")
const gte = __webpack_require__(/*! ./gte */ "./node_modules/semver/functions/gte.js")
const lt = __webpack_require__(/*! ./lt */ "./node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ./lte */ "./node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a === b

    case '!==':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ },

/***/ "./node_modules/semver/functions/coerce.js"
/*!*************************************************!*\
  !*** ./node_modules/semver/functions/coerce.js ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const { safeRe: re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL]
    let next
    while ((next = coerceRtlRegex.exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    coerceRtlRegex.lastIndex = -1
  }

  if (match === null) {
    return null
  }

  const major = match[2]
  const minor = match[3] || '0'
  const patch = match[4] || '0'
  const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : ''
  const build = options.includePrerelease && match[6] ? `+${match[6]}` : ''

  return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options)
}
module.exports = coerce


/***/ },

/***/ "./node_modules/semver/functions/compare-build.js"
/*!********************************************************!*\
  !*** ./node_modules/semver/functions/compare-build.js ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ },

/***/ "./node_modules/semver/functions/compare-loose.js"
/*!********************************************************!*\
  !*** ./node_modules/semver/functions/compare-loose.js ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ },

/***/ "./node_modules/semver/functions/compare.js"
/*!**************************************************!*\
  !*** ./node_modules/semver/functions/compare.js ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ },

/***/ "./node_modules/semver/functions/diff.js"
/*!***********************************************!*\
  !*** ./node_modules/semver/functions/diff.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const parse = __webpack_require__(/*! ./parse.js */ "./node_modules/semver/functions/parse.js")

const diff = (version1, version2) => {
  const v1 = parse(version1, null, true)
  const v2 = parse(version2, null, true)
  const comparison = v1.compare(v2)

  if (comparison === 0) {
    return null
  }

  const v1Higher = comparison > 0
  const highVersion = v1Higher ? v1 : v2
  const lowVersion = v1Higher ? v2 : v1
  const highHasPre = !!highVersion.prerelease.length
  const lowHasPre = !!lowVersion.prerelease.length

  if (lowHasPre && !highHasPre) {
    // Going from prerelease -> no prerelease requires some special casing

    // If the low version has only a major, then it will always be a major
    // Some examples:
    // 1.0.0-1 -> 1.0.0
    // 1.0.0-1 -> 1.1.1
    // 1.0.0-1 -> 2.0.0
    if (!lowVersion.patch && !lowVersion.minor) {
      return 'major'
    }

    // If the main part has no difference
    if (lowVersion.compareMain(highVersion) === 0) {
      if (lowVersion.minor && !lowVersion.patch) {
        return 'minor'
      }
      return 'patch'
    }
  }

  // add the `pre` prefix if we are going to a prerelease version
  const prefix = highHasPre ? 'pre' : ''

  if (v1.major !== v2.major) {
    return prefix + 'major'
  }

  if (v1.minor !== v2.minor) {
    return prefix + 'minor'
  }

  if (v1.patch !== v2.patch) {
    return prefix + 'patch'
  }

  // high and low are preleases
  return 'prerelease'
}

module.exports = diff


/***/ },

/***/ "./node_modules/semver/functions/eq.js"
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/eq.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ },

/***/ "./node_modules/semver/functions/gt.js"
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/gt.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ },

/***/ "./node_modules/semver/functions/gte.js"
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/gte.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ },

/***/ "./node_modules/semver/functions/inc.js"
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/inc.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")

const inc = (version, release, options, identifier, identifierBase) => {
  if (typeof (options) === 'string') {
    identifierBase = identifier
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(
      version instanceof SemVer ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ },

/***/ "./node_modules/semver/functions/lt.js"
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/lt.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ },

/***/ "./node_modules/semver/functions/lte.js"
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/lte.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ },

/***/ "./node_modules/semver/functions/major.js"
/*!************************************************!*\
  !*** ./node_modules/semver/functions/major.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ },

/***/ "./node_modules/semver/functions/minor.js"
/*!************************************************!*\
  !*** ./node_modules/semver/functions/minor.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ },

/***/ "./node_modules/semver/functions/neq.js"
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/neq.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ },

/***/ "./node_modules/semver/functions/parse.js"
/*!************************************************!*\
  !*** ./node_modules/semver/functions/parse.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
}

module.exports = parse


/***/ },

/***/ "./node_modules/semver/functions/patch.js"
/*!************************************************!*\
  !*** ./node_modules/semver/functions/patch.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ },

/***/ "./node_modules/semver/functions/prerelease.js"
/*!*****************************************************!*\
  !*** ./node_modules/semver/functions/prerelease.js ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ },

/***/ "./node_modules/semver/functions/rcompare.js"
/*!***************************************************!*\
  !*** ./node_modules/semver/functions/rcompare.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ },

/***/ "./node_modules/semver/functions/rsort.js"
/*!************************************************!*\
  !*** ./node_modules/semver/functions/rsort.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compareBuild = __webpack_require__(/*! ./compare-build */ "./node_modules/semver/functions/compare-build.js")
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ },

/***/ "./node_modules/semver/functions/satisfies.js"
/*!****************************************************!*\
  !*** ./node_modules/semver/functions/satisfies.js ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ },

/***/ "./node_modules/semver/functions/sort.js"
/*!***********************************************!*\
  !*** ./node_modules/semver/functions/sort.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const compareBuild = __webpack_require__(/*! ./compare-build */ "./node_modules/semver/functions/compare-build.js")
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ },

/***/ "./node_modules/semver/functions/valid.js"
/*!************************************************!*\
  !*** ./node_modules/semver/functions/valid.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ },

/***/ "./node_modules/semver/index.js"
/*!**************************************!*\
  !*** ./node_modules/semver/index.js ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__(/*! ./internal/re */ "./node_modules/semver/internal/re.js")
const constants = __webpack_require__(/*! ./internal/constants */ "./node_modules/semver/internal/constants.js")
const SemVer = __webpack_require__(/*! ./classes/semver */ "./node_modules/semver/classes/semver.js")
const identifiers = __webpack_require__(/*! ./internal/identifiers */ "./node_modules/semver/internal/identifiers.js")
const parse = __webpack_require__(/*! ./functions/parse */ "./node_modules/semver/functions/parse.js")
const valid = __webpack_require__(/*! ./functions/valid */ "./node_modules/semver/functions/valid.js")
const clean = __webpack_require__(/*! ./functions/clean */ "./node_modules/semver/functions/clean.js")
const inc = __webpack_require__(/*! ./functions/inc */ "./node_modules/semver/functions/inc.js")
const diff = __webpack_require__(/*! ./functions/diff */ "./node_modules/semver/functions/diff.js")
const major = __webpack_require__(/*! ./functions/major */ "./node_modules/semver/functions/major.js")
const minor = __webpack_require__(/*! ./functions/minor */ "./node_modules/semver/functions/minor.js")
const patch = __webpack_require__(/*! ./functions/patch */ "./node_modules/semver/functions/patch.js")
const prerelease = __webpack_require__(/*! ./functions/prerelease */ "./node_modules/semver/functions/prerelease.js")
const compare = __webpack_require__(/*! ./functions/compare */ "./node_modules/semver/functions/compare.js")
const rcompare = __webpack_require__(/*! ./functions/rcompare */ "./node_modules/semver/functions/rcompare.js")
const compareLoose = __webpack_require__(/*! ./functions/compare-loose */ "./node_modules/semver/functions/compare-loose.js")
const compareBuild = __webpack_require__(/*! ./functions/compare-build */ "./node_modules/semver/functions/compare-build.js")
const sort = __webpack_require__(/*! ./functions/sort */ "./node_modules/semver/functions/sort.js")
const rsort = __webpack_require__(/*! ./functions/rsort */ "./node_modules/semver/functions/rsort.js")
const gt = __webpack_require__(/*! ./functions/gt */ "./node_modules/semver/functions/gt.js")
const lt = __webpack_require__(/*! ./functions/lt */ "./node_modules/semver/functions/lt.js")
const eq = __webpack_require__(/*! ./functions/eq */ "./node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./functions/neq */ "./node_modules/semver/functions/neq.js")
const gte = __webpack_require__(/*! ./functions/gte */ "./node_modules/semver/functions/gte.js")
const lte = __webpack_require__(/*! ./functions/lte */ "./node_modules/semver/functions/lte.js")
const cmp = __webpack_require__(/*! ./functions/cmp */ "./node_modules/semver/functions/cmp.js")
const coerce = __webpack_require__(/*! ./functions/coerce */ "./node_modules/semver/functions/coerce.js")
const Comparator = __webpack_require__(/*! ./classes/comparator */ "./node_modules/semver/classes/comparator.js")
const Range = __webpack_require__(/*! ./classes/range */ "./node_modules/semver/classes/range.js")
const satisfies = __webpack_require__(/*! ./functions/satisfies */ "./node_modules/semver/functions/satisfies.js")
const toComparators = __webpack_require__(/*! ./ranges/to-comparators */ "./node_modules/semver/ranges/to-comparators.js")
const maxSatisfying = __webpack_require__(/*! ./ranges/max-satisfying */ "./node_modules/semver/ranges/max-satisfying.js")
const minSatisfying = __webpack_require__(/*! ./ranges/min-satisfying */ "./node_modules/semver/ranges/min-satisfying.js")
const minVersion = __webpack_require__(/*! ./ranges/min-version */ "./node_modules/semver/ranges/min-version.js")
const validRange = __webpack_require__(/*! ./ranges/valid */ "./node_modules/semver/ranges/valid.js")
const outside = __webpack_require__(/*! ./ranges/outside */ "./node_modules/semver/ranges/outside.js")
const gtr = __webpack_require__(/*! ./ranges/gtr */ "./node_modules/semver/ranges/gtr.js")
const ltr = __webpack_require__(/*! ./ranges/ltr */ "./node_modules/semver/ranges/ltr.js")
const intersects = __webpack_require__(/*! ./ranges/intersects */ "./node_modules/semver/ranges/intersects.js")
const simplifyRange = __webpack_require__(/*! ./ranges/simplify */ "./node_modules/semver/ranges/simplify.js")
const subset = __webpack_require__(/*! ./ranges/subset */ "./node_modules/semver/ranges/subset.js")
module.exports = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
}


/***/ },

/***/ "./node_modules/semver/internal/constants.js"
/*!***************************************************!*\
  !*** ./node_modules/semver/internal/constants.js ***!
  \***************************************************/
(module) {

"use strict";


// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
]

module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
}


/***/ },

/***/ "./node_modules/semver/internal/debug.js"
/*!***********************************************!*\
  !*** ./node_modules/semver/internal/debug.js ***!
  \***********************************************/
(module) {

"use strict";


const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ },

/***/ "./node_modules/semver/internal/identifiers.js"
/*!*****************************************************!*\
  !*** ./node_modules/semver/internal/identifiers.js ***!
  \*****************************************************/
(module) {

"use strict";


const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a === b ? 0 : a < b ? -1 : 1
  }

  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


/***/ },

/***/ "./node_modules/semver/internal/lrucache.js"
/*!**************************************************!*\
  !*** ./node_modules/semver/internal/lrucache.js ***!
  \**************************************************/
(module) {

"use strict";


class LRUCache {
  constructor () {
    this.max = 1000
    this.map = new Map()
  }

  get (key) {
    const value = this.map.get(key)
    if (value === undefined) {
      return undefined
    } else {
      // Remove the key from the map and add it to the end
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }
  }

  delete (key) {
    return this.map.delete(key)
  }

  set (key, value) {
    const deleted = this.delete(key)

    if (!deleted && value !== undefined) {
      // If cache is full, delete the least recently used item
      if (this.map.size >= this.max) {
        const firstKey = this.map.keys().next().value
        this.delete(firstKey)
      }

      this.map.set(key, value)
    }

    return this
  }
}

module.exports = LRUCache


/***/ },

/***/ "./node_modules/semver/internal/parse-options.js"
/*!*******************************************************!*\
  !*** ./node_modules/semver/internal/parse-options.js ***!
  \*******************************************************/
(module) {

"use strict";


// parse out just the options we care about
const looseOption = Object.freeze({ loose: true })
const emptyOpts = Object.freeze({ })
const parseOptions = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
}
module.exports = parseOptions


/***/ },

/***/ "./node_modules/semver/internal/re.js"
/*!********************************************!*\
  !*** ./node_modules/semver/internal/re.js ***!
  \********************************************/
(module, exports, __webpack_require__) {

"use strict";


const {
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_LENGTH,
} = __webpack_require__(/*! ./constants */ "./node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "./node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const safeRe = exports.safeRe = []
const src = exports.src = []
const safeSrc = exports.safeSrc = []
const t = exports.t = {}
let R = 0

const LETTERDASHNUMBER = '[a-zA-Z0-9-]'

// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
  ['\\s', 1],
  ['\\d', MAX_LENGTH],
  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
]

const makeSafeRegex = (value) => {
  for (const [token, max] of safeRegexReplacements) {
    value = value
      .split(`${token}*`).join(`${token}{0,${max}}`)
      .split(`${token}+`).join(`${token}{1,${max}}`)
  }
  return value
}

const createToken = (name, value, isGlobal) => {
  const safe = makeSafeRegex(value)
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  safeSrc[index] = safe
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '\\d+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`)

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numberic identifiers include numberic identifiers but can be longer.
// Therefore non-numberic identifiers must go first.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]
}|${src[t.NUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]
}|${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`)

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`)
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`)
createToken('COERCEFULL', src[t.COERCEPLAIN] +
              `(?:${src[t.PRERELEASE]})?` +
              `(?:${src[t.BUILD]})?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)
createToken('COERCERTLFULL', src[t.COERCEFULL], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


/***/ },

/***/ "./node_modules/semver/ranges/gtr.js"
/*!*******************************************!*\
  !*** ./node_modules/semver/ranges/gtr.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__(/*! ./outside */ "./node_modules/semver/ranges/outside.js")
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ },

/***/ "./node_modules/semver/ranges/intersects.js"
/*!**************************************************!*\
  !*** ./node_modules/semver/ranges/intersects.js ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2, options)
}
module.exports = intersects


/***/ },

/***/ "./node_modules/semver/ranges/ltr.js"
/*!*******************************************!*\
  !*** ./node_modules/semver/ranges/ltr.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const outside = __webpack_require__(/*! ./outside */ "./node_modules/semver/ranges/outside.js")
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ },

/***/ "./node_modules/semver/ranges/max-satisfying.js"
/*!******************************************************!*\
  !*** ./node_modules/semver/ranges/max-satisfying.js ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ },

/***/ "./node_modules/semver/ranges/min-satisfying.js"
/*!******************************************************!*\
  !*** ./node_modules/semver/ranges/min-satisfying.js ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ },

/***/ "./node_modules/semver/ranges/min-version.js"
/*!***************************************************!*\
  !*** ./node_modules/semver/ranges/min-version.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const gt = __webpack_require__(/*! ../functions/gt */ "./node_modules/semver/functions/gt.js")

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin))) {
      minver = setMin
    }
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ },

/***/ "./node_modules/semver/ranges/outside.js"
/*!***********************************************!*\
  !*** ./node_modules/semver/ranges/outside.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const Comparator = __webpack_require__(/*! ../classes/comparator */ "./node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const satisfies = __webpack_require__(/*! ../functions/satisfies */ "./node_modules/semver/functions/satisfies.js")
const gt = __webpack_require__(/*! ../functions/gt */ "./node_modules/semver/functions/gt.js")
const lt = __webpack_require__(/*! ../functions/lt */ "./node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ../functions/lte */ "./node_modules/semver/functions/lte.js")
const gte = __webpack_require__(/*! ../functions/gte */ "./node_modules/semver/functions/gte.js")

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ },

/***/ "./node_modules/semver/ranges/simplify.js"
/*!************************************************!*\
  !*** ./node_modules/semver/ranges/simplify.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "./node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "./node_modules/semver/functions/compare.js")
module.exports = (versions, range, options) => {
  const set = []
  let first = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!first) {
        first = version
      }
    } else {
      if (prev) {
        set.push([first, prev])
      }
      prev = null
      first = null
    }
  }
  if (first) {
    set.push([first, null])
  }

  const ranges = []
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min)
    } else if (!max && min === v[0]) {
      ranges.push('*')
    } else if (!max) {
      ranges.push(`>=${min}`)
    } else if (min === v[0]) {
      ranges.push(`<=${max}`)
    } else {
      ranges.push(`${min} - ${max}`)
    }
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ },

/***/ "./node_modules/semver/ranges/subset.js"
/*!**********************************************!*\
  !*** ./node_modules/semver/ranges/subset.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const Range = __webpack_require__(/*! ../classes/range.js */ "./node_modules/semver/classes/range.js")
const Comparator = __webpack_require__(/*! ../classes/comparator.js */ "./node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "./node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "./node_modules/semver/functions/compare.js")

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true
  }

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub) {
        continue OUTER
      }
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull) {
      return false
    }
  }
  return true
}

const minimumVersionWithPreRelease = [new Comparator('>=0.0.0-0')]
const minimumVersion = [new Comparator('>=0.0.0')]

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease
    } else {
      sub = minimumVersion
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true
    } else {
      dom = minimumVersion
    }
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options)
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options)
    } else {
      eqSet.add(c.semver)
    }
  }

  if (eqSet.size > 1) {
    return null
  }

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0) {
      return null
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null
    }
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options)) {
      return null
    }

    if (lt && !satisfies(eq, String(lt), options)) {
      return null
    }

    for (const c of dom) {
      if (!satisfies(eq, String(c), options)) {
        return false
      }
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt) {
          return false
        }
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
        return false
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt) {
          return false
        }
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
        return false
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false
    }
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false
  }

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre) {
    return false
  }

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ },

/***/ "./node_modules/semver/ranges/to-comparators.js"
/*!******************************************************!*\
  !*** ./node_modules/semver/ranges/to-comparators.js ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ },

/***/ "./node_modules/semver/ranges/valid.js"
/*!*********************************************!*\
  !*** ./node_modules/semver/ranges/valid.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "fs"
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
(module) {

"use strict";
module.exports = require("fs");

/***/ },

/***/ "path"
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
(module) {

"use strict";
module.exports = require("path");

/***/ },

/***/ "pixi.js"
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_pixi_js__;

/***/ },

/***/ "util"
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
(module) {

"use strict";
module.exports = require("util");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if ({"pngToBuffer.worker":1,"canvas.worker":1}[chunkId]) return "FastCutIns/workers/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./module/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSpriteTransformer: () => (/* reexport safe */ _pixiRenderer__WEBPACK_IMPORTED_MODULE_3__.addSpriteTransformer),
/* harmony export */   posesRepository: () => (/* reexport module object */ _posesRepository__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   registerLayerRenderingOptions: () => (/* reexport safe */ _pixiRenderer__WEBPACK_IMPORTED_MODULE_3__.registerLayerRenderingOptions)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./module/settings.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./module/validator.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging */ "./module/logging.ts");
/* harmony import */ var _pixiRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pixiRenderer */ "./module/pixiRenderer.ts");
/* harmony import */ var _posesRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posesRepository */ "./module/posesRepository.ts");





const isReady = Scene_Boot.prototype.isReady;
Scene_Boot.prototype.isReady = function () {
    return Boolean(settings) && isReady.call(this);
};
const create = Scene_Boot.prototype.create;
Scene_Boot.prototype.create = function () {
    create.call(this);
    setTimeout(async () => {
        settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_0__["default"])();
        (0,_pixiRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(settings);
        _logging__WEBPACK_IMPORTED_MODULE_2__["default"].info('Mod settings are initialized successfully.');
    }, 1000);
};
let settings;
(0,_validator__WEBPACK_IMPORTED_MODULE_1__["default"])();


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=FastCutIns.js.map