(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "../node_modules/@theia/markers/lib/browser/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@theia/markers/lib/browser/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./marker-manager */ "../node_modules/@theia/markers/lib/browser/marker-manager.js"));
__export(__webpack_require__(/*! ./problem/problem-manager */ "../node_modules/@theia/markers/lib/browser/problem/problem-manager.js"));


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-browser-module.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-browser-module.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
exports.ContainerModule = inversify_1.ContainerModule;
var monaco_loader_1 = __webpack_require__(/*! ./monaco-loader */ "../node_modules/@theia/monaco/lib/browser/monaco-loader.js");
exports.default = monaco_loader_1.loadVsRequire(window)
    .then(function (vsRequire) { return monaco_loader_1.loadMonaco(vsRequire); })
    .then(function () {
    return Promise.resolve().then(function () { return __webpack_require__(/*! ./monaco-frontend-module */ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js"); });
}).then(function (module) {
    return module.default;
});


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var MonacoBulkEditService = /** @class */ (function () {
    function MonacoBulkEditService() {
    }
    MonacoBulkEditService.prototype.apply = function (edit) {
        return this.workspace.applyBulkEdit(edit);
    };
    __decorate([
        inversify_1.inject(monaco_workspace_1.MonacoWorkspace),
        __metadata("design:type", monaco_workspace_1.MonacoWorkspace)
    ], MonacoBulkEditService.prototype, "workspace", void 0);
    MonacoBulkEditService = __decorate([
        inversify_1.injectable()
    ], MonacoBulkEditService);
    return MonacoBulkEditService;
}());
exports.MonacoBulkEditService = MonacoBulkEditService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var MonacoCommandRegistry = /** @class */ (function () {
    function MonacoCommandRegistry(commands, editorManager, selectionService) {
        this.commands = commands;
        this.editorManager = editorManager;
        this.selectionService = selectionService;
    }
    MonacoCommandRegistry_1 = MonacoCommandRegistry;
    MonacoCommandRegistry.prototype.prefix = function (command) {
        return MonacoCommandRegistry_1.MONACO_COMMAND_PREFIX + command;
    };
    MonacoCommandRegistry.prototype.validate = function (command) {
        var monacoCommand = this.prefix(command);
        return this.commands.commandIds.indexOf(monacoCommand) !== -1 ? monacoCommand : undefined;
    };
    MonacoCommandRegistry.prototype.registerCommand = function (command, handler) {
        this.commands.registerCommand(__assign({}, command, { id: this.prefix(command.id) }), this.newHandler(handler));
    };
    MonacoCommandRegistry.prototype.registerHandler = function (command, handler) {
        this.commands.registerHandler(command, this.newHandler(handler));
    };
    MonacoCommandRegistry.prototype.newHandler = function (monacoHandler) {
        var _this = this;
        return {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.execute.apply(_this, __spread([monacoHandler], args));
            },
            isEnabled: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.isEnabled.apply(_this, __spread([monacoHandler], args));
            },
            isVisible: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.isVisible.apply(_this, __spread([monacoHandler], args));
            }
        };
    };
    // tslint:disable-next-line:no-any
    MonacoCommandRegistry.prototype.execute = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var editor = monaco_editor_1.MonacoEditor.getCurrent(this.editorManager);
        if (editor) {
            editor.focus();
            return Promise.resolve(monacoHandler.execute.apply(monacoHandler, __spread([editor], args)));
        }
        return Promise.resolve();
    };
    // tslint:disable-next-line:no-any
    MonacoCommandRegistry.prototype.isEnabled = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var editor = monaco_editor_1.MonacoEditor.getCurrent(this.editorManager);
        return !!editor && (!monacoHandler.isEnabled || monacoHandler.isEnabled.apply(monacoHandler, __spread([editor], args)));
    };
    // tslint:disable-next-line:no-any
    MonacoCommandRegistry.prototype.isVisible = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return browser_1.TextEditorSelection.is(this.selectionService.selection);
    };
    var MonacoCommandRegistry_1;
    MonacoCommandRegistry.MONACO_COMMAND_PREFIX = 'monaco.';
    MonacoCommandRegistry = MonacoCommandRegistry_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(core_1.CommandRegistry)),
        __param(1, inversify_1.inject(browser_1.EditorManager)),
        __param(2, inversify_1.inject(core_1.SelectionService)),
        __metadata("design:paramtypes", [core_1.CommandRegistry,
            browser_1.EditorManager,
            core_1.SelectionService])
    ], MonacoCommandRegistry);
    return MonacoCommandRegistry;
}());
exports.MonacoCommandRegistry = MonacoCommandRegistry;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-command-service.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-command-service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
exports.MonacoCommandServiceFactory = Symbol('MonacoCommandServiceFactory');
var MonacoCommandService = /** @class */ (function () {
    function MonacoCommandService(commandRegistry) {
        this.commandRegistry = commandRegistry;
        this._onWillExecuteCommand = new common_1.Emitter();
        this.delegateListeners = new common_1.DisposableCollection();
    }
    Object.defineProperty(MonacoCommandService.prototype, "onWillExecuteCommand", {
        get: function () {
            return this._onWillExecuteCommand.event;
        },
        enumerable: true,
        configurable: true
    });
    MonacoCommandService.prototype.setDelegate = function (delegate) {
        var _this = this;
        this.delegateListeners.dispose();
        this.delegate = delegate;
        if (this.delegate) {
            this.delegateListeners.push(this.delegate._onWillExecuteCommand.event(function (event) {
                return _this._onWillExecuteCommand.fire(event);
            }));
        }
    };
    // tslint:disable-next-line:no-any
    MonacoCommandService.prototype.executeCommand = function (commandId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, handler;
            return __generator(this, function (_c) {
                handler = (_a = this.commandRegistry).getActiveHandler.apply(_a, __spread([commandId], args));
                if (handler) {
                    this._onWillExecuteCommand.fire({ commandId: commandId });
                    return [2 /*return*/, handler.execute.apply(handler, __spread(args))];
                }
                if (this.delegate) {
                    return [2 /*return*/, (_b = this.delegate).executeCommand.apply(_b, __spread([commandId], args))];
                }
                throw new Error("command '" + commandId + "' not found");
            });
        });
    };
    MonacoCommandService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.CommandRegistry)),
        __metadata("design:paramtypes", [common_1.CommandRegistry])
    ], MonacoCommandService);
    return MonacoCommandService;
}());
exports.MonacoCommandService = MonacoCommandService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-command.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-command.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_1 = __webpack_require__(/*! monaco-languageclient/lib */ "../node_modules/monaco-languageclient/lib/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-service */ "../node_modules/@theia/core/lib/browser/quick-open/quick-open-service.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-model */ "../node_modules/@theia/core/lib/browser/quick-open/quick-open-model.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var MenuRegistry = monaco.actions.MenuRegistry;
var MonacoCommands;
(function (MonacoCommands) {
    var e_1, _a, e_2, _b, e_3, _c;
    MonacoCommands.UNDO = 'undo';
    MonacoCommands.REDO = 'redo';
    MonacoCommands.COMMON_KEYBOARD_ACTIONS = new Set([MonacoCommands.UNDO, MonacoCommands.REDO]);
    MonacoCommands.COMMON_ACTIONS = {};
    MonacoCommands.COMMON_ACTIONS[MonacoCommands.UNDO] = browser_1.CommonCommands.UNDO.id;
    MonacoCommands.COMMON_ACTIONS[MonacoCommands.REDO] = browser_1.CommonCommands.REDO.id;
    MonacoCommands.COMMON_ACTIONS['actions.find'] = browser_1.CommonCommands.FIND.id;
    MonacoCommands.COMMON_ACTIONS['editor.action.startFindReplaceAction'] = browser_1.CommonCommands.REPLACE.id;
    MonacoCommands.SELECTION_SELECT_ALL = 'editor.action.select.all';
    MonacoCommands.SELECTION_EXPAND_SELECTION = 'editor.action.smartSelect.grow';
    MonacoCommands.SELECTION_SHRINK_SELECTION = 'editor.action.smartSelect.shrink';
    MonacoCommands.SELECTION_COPY_LINE_UP = 'editor.action.copyLinesUpAction';
    MonacoCommands.SELECTION_COPY_LINE_DOWN = 'editor.action.copyLinesDownAction';
    MonacoCommands.SELECTION_MOVE_LINE_UP = 'editor.action.moveLinesUpAction';
    MonacoCommands.SELECTION_MOVE_LINE_DOWN = 'editor.action.moveLinesDownAction';
    MonacoCommands.SELECTION_ADD_CURSOR_ABOVE = 'editor.action.insertCursorAbove';
    MonacoCommands.SELECTION_ADD_CURSOR_BELOW = 'editor.action.insertCursorBelow';
    MonacoCommands.SELECTION_ADD_CURSOR_TO_LINE_END = 'editor.action.insertCursorAtEndOfEachLineSelected';
    MonacoCommands.SELECTION_ADD_NEXT_OCCURRENCE = 'editor.action.addSelectionToNextFindMatch';
    MonacoCommands.SELECTION_ADD_PREVIOUS_OCCURRENCE = 'editor.action.addSelectionToPreviousFindMatch';
    MonacoCommands.SELECTION_SELECT_ALL_OCCURRENCES = 'editor.action.selectHighlights';
    MonacoCommands.ACTIONS = new Map();
    MonacoCommands.ACTIONS.set(MonacoCommands.SELECTION_SELECT_ALL, { id: MonacoCommands.SELECTION_SELECT_ALL, label: 'Select All', delegate: 'editor.action.selectAll' });
    MonacoCommands.EXCLUDE_ACTIONS = new Set(__spread(Object.keys(MonacoCommands.COMMON_ACTIONS), [
        'editor.action.quickCommand',
        'editor.action.clipboardCutAction',
        'editor.action.clipboardCopyAction',
        'editor.action.clipboardPasteAction'
    ]));
    var iconClasses = new Map();
    try {
        for (var _d = __values(MenuRegistry.getMenuItems(7)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var menuItem = _e.value;
            if (menuItem.command.iconClass) {
                iconClasses.set(menuItem.command.id, menuItem.command.iconClass);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _f = __values(monaco.editorExtensions.EditorExtensionsRegistry.getEditorActions()), _g = _f.next(); !_g.done; _g = _f.next()) {
            var command = _g.value;
            var id = command.id;
            if (!MonacoCommands.EXCLUDE_ACTIONS.has(id)) {
                var label = command.label;
                var iconClass = iconClasses.get(id);
                MonacoCommands.ACTIONS.set(id, { id: id, label: label, iconClass: iconClass });
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var _h = __values(monaco.keybindings.KeybindingsRegistry.getDefaultKeybindings()), _j = _h.next(); !_j.done; _j = _h.next()) {
            var keybinding = _j.value;
            var id = keybinding.command;
            if (!MonacoCommands.ACTIONS.has(id) && !MonacoCommands.EXCLUDE_ACTIONS.has(id)) {
                MonacoCommands.ACTIONS.set(id, { id: id, delegate: id });
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
        }
        finally { if (e_3) throw e_3.error; }
    }
})(MonacoCommands = exports.MonacoCommands || (exports.MonacoCommands = {}));
var MonacoEditorCommandHandlers = /** @class */ (function () {
    function MonacoEditorCommandHandlers() {
    }
    MonacoEditorCommandHandlers.prototype.registerCommands = function () {
        this.registerCommonCommandHandlers();
        this.registerEditorCommandHandlers();
        this.registerMonacoActionCommands();
    };
    MonacoEditorCommandHandlers.prototype.registerCommonCommandHandlers = function () {
        // tslint:disable-next-line:forin
        for (var action in MonacoCommands.COMMON_ACTIONS) {
            var command = MonacoCommands.COMMON_ACTIONS[action];
            var handler = this.newCommonActionHandler(action);
            this.registry.registerHandler(command, handler);
        }
    };
    MonacoEditorCommandHandlers.prototype.newCommonActionHandler = function (action) {
        return this.isCommonKeyboardAction(action) ? this.newKeyboardHandler(action) : this.newActionHandler(action);
    };
    MonacoEditorCommandHandlers.prototype.isCommonKeyboardAction = function (action) {
        return MonacoCommands.COMMON_KEYBOARD_ACTIONS.has(action);
    };
    MonacoEditorCommandHandlers.prototype.registerEditorCommandHandlers = function () {
        this.registry.registerHandler(browser_2.EditorCommands.SHOW_REFERENCES.id, this.newShowReferenceHandler());
        this.registry.registerHandler(browser_2.EditorCommands.CONFIG_INDENTATION.id, this.newConfigIndentationHandler());
        this.registry.registerHandler(browser_2.EditorCommands.CONFIG_EOL.id, this.newConfigEolHandler());
        this.registry.registerHandler(browser_2.EditorCommands.INDENT_USING_SPACES.id, this.newConfigTabSizeHandler(true));
        this.registry.registerHandler(browser_2.EditorCommands.INDENT_USING_TABS.id, this.newConfigTabSizeHandler(false));
    };
    MonacoEditorCommandHandlers.prototype.newShowReferenceHandler = function () {
        var _this = this;
        return {
            execute: function (editor, uri, position, locations) {
                editor.commandService.executeCommand('editor.action.showReferences', monaco.Uri.parse(uri), _this.p2m.asPosition(position), locations.map(function (l) { return _this.p2m.asLocation(l); }));
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newConfigIndentationHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureIndentation(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureIndentation = function (editor) {
        var _this = this;
        var options = [true, false].map(function (useSpaces) {
            return new quick_open_model_1.QuickOpenItem({
                label: "Indent Using " + (useSpaces ? 'Spaces' : 'Tabs'),
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.configureTabSize(editor, useSpaces);
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select Action',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.newConfigEolHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureEol(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureEol = function (editor) {
        var _this = this;
        var options = ['LF', 'CRLF'].map(function (lineEnding) {
            return new quick_open_model_1.QuickOpenItem({
                label: lineEnding,
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.setEol(editor, lineEnding);
                        return true;
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select End of Line Sequence',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.setEol = function (editor, lineEnding) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            if (lineEnding === 'CRLF' || lineEnding === '\r\n') {
                model.pushEOL(monaco.editor.EndOfLineSequence.CRLF);
            }
            else {
                model.pushEOL(monaco.editor.EndOfLineSequence.LF);
            }
        }
    };
    MonacoEditorCommandHandlers.prototype.newConfigTabSizeHandler = function (useSpaces) {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureTabSize(editor, useSpaces); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureTabSize = function (editor, useSpaces) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            var tabSize_1 = model.getOptions().tabSize;
            var sizes = Array.from(Array(8), function (_, x) { return x + 1; });
            var tabSizeOptions_1 = sizes.map(function (size) {
                return new quick_open_model_1.QuickOpenItem({
                    label: size === tabSize_1 ? size + "   Configured Tab Size" : size.toString(),
                    run: function (mode) {
                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                            return false;
                        }
                        model.updateOptions({
                            tabSize: size || tabSize_1,
                            insertSpaces: useSpaces
                        });
                        return true;
                    }
                });
            });
            this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(tabSizeOptions_1); } }, {
                placeholder: 'Select Tab Size for Current File',
                fuzzyMatchLabel: true,
                selectIndex: function (lookFor) {
                    if (!lookFor || lookFor === '') {
                        return tabSize_1 - 1;
                    }
                    return 0;
                }
            });
        }
    };
    MonacoEditorCommandHandlers.prototype.registerMonacoActionCommands = function () {
        var e_4, _a;
        try {
            for (var _b = __values(MonacoCommands.ACTIONS.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var action = _c.value;
                var handler = this.newMonacoActionHandler(action);
                this.registry.registerCommand(action, handler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MonacoEditorCommandHandlers.prototype.newMonacoActionHandler = function (action) {
        var delegate = action.delegate;
        return delegate ? this.newCommandHandler(delegate) : this.newActionHandler(action.id);
    };
    MonacoEditorCommandHandlers.prototype.newKeyboardHandler = function (action) {
        return {
            execute: function (editor) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return editor.getControl()._modelData.cursor.trigger('keyboard', action, args);
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newCommandHandler = function (action) {
        return {
            execute: function (editor) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var _a;
                return (_a = editor.commandService).executeCommand.apply(_a, __spread([action], args));
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newActionHandler = function (action) {
        return {
            execute: function (editor) { return editor.runAction(action); },
            isEnabled: function (editor) { return editor.isActionSupported(action); }
        };
    };
    __decorate([
        inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry),
        __metadata("design:type", monaco_command_registry_1.MonacoCommandRegistry)
    ], MonacoEditorCommandHandlers.prototype, "registry", void 0);
    __decorate([
        inversify_1.inject(lib_1.ProtocolToMonacoConverter),
        __metadata("design:type", lib_1.ProtocolToMonacoConverter)
    ], MonacoEditorCommandHandlers.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], MonacoEditorCommandHandlers.prototype, "quickOpenService", void 0);
    MonacoEditorCommandHandlers = __decorate([
        inversify_1.injectable()
    ], MonacoEditorCommandHandlers);
    return MonacoEditorCommandHandlers;
}());
exports.MonacoEditorCommandHandlers = MonacoEditorCommandHandlers;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-configurations.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-configurations.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var MonacoConfigurations = /** @class */ (function () {
    function MonacoConfigurations() {
        this.onDidChangeConfigurationEmitter = new common_1.Emitter();
        this.onDidChangeConfiguration = this.onDidChangeConfigurationEmitter.event;
    }
    MonacoConfigurations_1 = MonacoConfigurations;
    MonacoConfigurations.prototype.init = function () {
        var _this = this;
        this.reconcileData();
        this.preferences.onPreferencesChanged(function (changes) { return _this.reconcileData(changes); });
    };
    MonacoConfigurations.prototype.reconcileData = function (changes) {
        var _this = this;
        this.onDidChangeConfigurationEmitter.fire({
            affectedSections: MonacoConfigurations_1.parseSections(changes),
            affectsConfiguration: function (section) { return _this.affectsConfiguration(section, changes); }
        });
    };
    MonacoConfigurations.prototype.affectsConfiguration = function (section, changes) {
        if (!changes) {
            return true;
        }
        for (var preferenceName in changes) {
            if (section.startsWith(preferenceName) || preferenceName.startsWith(section)) {
                return true;
            }
        }
        return false;
    };
    MonacoConfigurations.prototype.getConfiguration = function (section, resource) {
        return new MonacoWorkspaceConfiguration(this.preferences, this.preferenceSchemaProvider, section, resource);
    };
    var MonacoConfigurations_1;
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], MonacoConfigurations.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], MonacoConfigurations.prototype, "preferenceSchemaProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoConfigurations.prototype, "init", null);
    MonacoConfigurations = MonacoConfigurations_1 = __decorate([
        inversify_1.injectable()
    ], MonacoConfigurations);
    return MonacoConfigurations;
}());
exports.MonacoConfigurations = MonacoConfigurations;
(function (MonacoConfigurations) {
    function parseSections(changes) {
        var e_1, _a;
        if (!changes) {
            return undefined;
        }
        var sections = [];
        try {
            for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var hasOverride = key.startsWith('[');
                while (key) {
                    sections.push(key);
                    if (hasOverride && key.indexOf('.') !== -1) {
                        sections.push(key.substr(key.indexOf('.')));
                    }
                    var index = key.lastIndexOf('.');
                    key = key.substring(0, index);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return sections;
    }
    MonacoConfigurations.parseSections = parseSections;
})(MonacoConfigurations = exports.MonacoConfigurations || (exports.MonacoConfigurations = {}));
exports.MonacoConfigurations = MonacoConfigurations;
var MonacoWorkspaceConfiguration = /** @class */ (function () {
    function MonacoWorkspaceConfiguration(preferences, preferenceSchemaProvider, section, resource) {
        this.preferences = preferences;
        this.preferenceSchemaProvider = preferenceSchemaProvider;
        this.section = section;
        this.resource = resource;
    }
    MonacoWorkspaceConfiguration.prototype.getSection = function (section) {
        if (this.section) {
            return this.section + '.' + section;
        }
        return section;
    };
    MonacoWorkspaceConfiguration.prototype.has = function (section) {
        return this.preferences.inspect(this.getSection(section), this.resource) !== undefined;
    };
    MonacoWorkspaceConfiguration.prototype.get = function (section, defaultValue) {
        return this.preferences.get(this.getSection(section), defaultValue, this.resource);
    };
    MonacoWorkspaceConfiguration.prototype.toJSON = function () {
        var proxy = browser_1.createPreferenceProxy(this.preferences, this.preferenceSchemaProvider.getCombinedSchema(), {
            resourceUri: this.resource,
            style: 'deep'
        });
        if (this.section) {
            return proxy[this.section];
        }
        return proxy;
    };
    return MonacoWorkspaceConfiguration;
}());
exports.MonacoWorkspaceConfiguration = MonacoWorkspaceConfiguration;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var MonacoContextKeyService = /** @class */ (function (_super) {
    __extends(MonacoContextKeyService, _super);
    function MonacoContextKeyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expressions = new Map();
        return _this;
    }
    MonacoContextKeyService.prototype.init = function () {
        var _this = this;
        this.contextKeyService.onDidChangeContext(function (e) {
            return _this.fireDidChange({
                affects: function (keys) { return e.affectsSome(keys); }
            });
        });
    };
    MonacoContextKeyService.prototype.createKey = function (key, defaultValue) {
        return this.contextKeyService.createKey(key, defaultValue);
    };
    MonacoContextKeyService.prototype.match = function (expression, context) {
        var ctx = context || this.activeContext || (window.document.activeElement instanceof HTMLElement ? window.document.activeElement : undefined);
        var parsed = this.parse(expression);
        if (!ctx) {
            return this.contextKeyService.contextMatchesRules(parsed);
        }
        var keyContext = this.contextKeyService.getContext(ctx);
        return monaco.keybindings.KeybindingResolver.contextMatchesRules(keyContext, parsed);
    };
    MonacoContextKeyService.prototype.parse = function (when) {
        var expression = this.expressions.get(when);
        if (!expression) {
            expression = monaco.contextkey.ContextKeyExpr.deserialize(when);
            this.expressions.set(when, expression);
        }
        return expression;
    };
    MonacoContextKeyService.prototype.parseKeys = function (expression) {
        return new Set(monaco.contextkey.ContextKeyExpr.deserialize(expression).keys());
    };
    __decorate([
        inversify_1.inject(monaco.contextKeyService.ContextKeyService),
        __metadata("design:type", monaco.contextKeyService.ContextKeyService)
    ], MonacoContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoContextKeyService.prototype, "init", null);
    MonacoContextKeyService = __decorate([
        inversify_1.injectable()
    ], MonacoContextKeyService);
    return MonacoContextKeyService;
}(context_key_service_1.ContextKeyService));
exports.MonacoContextKeyService = MonacoContextKeyService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../node_modules/@phosphor/widgets/lib/index.js");
var commands_1 = __webpack_require__(/*! @phosphor/commands */ "../node_modules/@phosphor/commands/lib/index.js");
var MonacoContextMenuService = /** @class */ (function () {
    function MonacoContextMenuService(contextMenuRenderer) {
        this.contextMenuRenderer = contextMenuRenderer;
    }
    MonacoContextMenuService.prototype.showContextMenu = function (delegate) {
        var e_1, _a;
        var anchor = browser_2.toAnchor(delegate.getAnchor());
        // If it is the general context menu, we want to delegate to our menu registry entirely and ignore the actually passed actions.
        // Unfortunately checking the existence of certain properties seems to be the best way to tell, what kind of context menu is requested.
        if (delegate.hasOwnProperty('getKeyBinding')) {
            this.contextMenuRenderer.render(browser_1.EDITOR_CONTEXT_MENU, anchor, function () { return delegate.onHide(false); });
        }
        else {
            var actions = delegate.getActions();
            var commands = new commands_1.CommandRegistry();
            var menu = new widgets_1.Menu({
                commands: commands
            });
            var _loop_1 = function (action) {
                var commandId = 'quickfix_' + actions.indexOf(action);
                commands.addCommand(commandId, {
                    label: action.label,
                    className: action.class,
                    isToggled: function () { return action.checked; },
                    isEnabled: function () { return action.enabled; },
                    execute: function () { return action.run(); }
                });
                menu.addItem({
                    type: 'command',
                    command: commandId
                });
            };
            try {
                for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                    var action = actions_1_1.value;
                    _loop_1(action);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            menu.aboutToClose.connect(function () { return delegate.onHide(false); });
            menu.open(anchor.x, anchor.y);
        }
    };
    MonacoContextMenuService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.ContextMenuRenderer)),
        __metadata("design:paramtypes", [Object])
    ], MonacoContextMenuService);
    return MonacoContextMenuService;
}());
exports.MonacoContextMenuService = MonacoContextMenuService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "../node_modules/@theia/core/lib/browser/diff-uris.js");
var MonacoDiffEditor = /** @class */ (function (_super) {
    __extends(MonacoDiffEditor, _super);
    function MonacoDiffEditor(uri, node, originalModel, modifiedModel, services, diffNavigatorFactory, options, override) {
        var _this = _super.call(this, uri, modifiedModel, node, services, options, override) || this;
        _this.uri = uri;
        _this.node = node;
        _this.originalModel = originalModel;
        _this.modifiedModel = modifiedModel;
        _this.diffNavigatorFactory = diffNavigatorFactory;
        _this.documents.add(originalModel);
        var original = originalModel.textEditorModel;
        var modified = modifiedModel.textEditorModel;
        _this._diffNavigator = diffNavigatorFactory.createdDiffNavigator(_this._diffEditor, options);
        _this._diffEditor.setModel({ original: original, modified: modified });
        return _this;
    }
    Object.defineProperty(MonacoDiffEditor.prototype, "diffEditor", {
        get: function () {
            return this._diffEditor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoDiffEditor.prototype, "diffNavigator", {
        get: function () {
            return this._diffNavigator;
        },
        enumerable: true,
        configurable: true
    });
    MonacoDiffEditor.prototype.create = function (options, override) {
        this._diffEditor = monaco.editor.createDiffEditor(this.node, __assign({}, options, { fixedOverflowWidgets: true }), override);
        this.editor = this._diffEditor.getModifiedEditor();
        return this._diffEditor;
    };
    MonacoDiffEditor.prototype.resize = function (dimension) {
        if (this.node) {
            var layoutSize = this.computeLayoutSize(this.node, dimension);
            this._diffEditor.layout(layoutSize);
        }
    };
    MonacoDiffEditor.prototype.isActionSupported = function (id) {
        var action = this._diffEditor.getSupportedActions().find(function (a) { return a.id === id; });
        return !!action && action.isSupported() && _super.prototype.isActionSupported.call(this, id);
    };
    MonacoDiffEditor.prototype.deltaDecorations = function (params) {
        console.warn('`deltaDecorations` should be called on either the original, or the modified editor.');
        return [];
    };
    MonacoDiffEditor.prototype.getResourceUri = function () {
        return new uri_1.default(this.originalModel.uri);
    };
    MonacoDiffEditor.prototype.createMoveToUri = function (resourceUri) {
        var _a = __read(diff_uris_1.DiffUris.decode(this.uri), 2), left = _a[0], right = _a[1];
        return diff_uris_1.DiffUris.encode(left.withPath(resourceUri.path), right.withPath(resourceUri.path));
    };
    return MonacoDiffEditor;
}(monaco_editor_1.MonacoEditor));
exports.MonacoDiffEditor = MonacoDiffEditor;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var MonacoDiffNavigatorFactory = /** @class */ (function () {
    function MonacoDiffNavigatorFactory() {
    }
    MonacoDiffNavigatorFactory.prototype.createdDiffNavigator = function (editor, options) {
        var navigator = monaco.editor.createDiffNavigator(editor, options);
        var ensureInitialized = function (fwd) {
            if (navigator.nextIdx < -1) {
                navigator._initIdx(fwd);
            }
        };
        return {
            canNavigate: function () { return navigator.canNavigate(); },
            hasNext: function () {
                ensureInitialized(true);
                return navigator.nextIdx + 1 < navigator.ranges.length;
            },
            hasPrevious: function () {
                ensureInitialized(false);
                return navigator.nextIdx > 0;
            },
            next: function () { return navigator.next(); },
            previous: function () { return navigator.previous(); },
            revealFirst: navigator.revealFirst,
        };
    };
    MonacoDiffNavigatorFactory.nullNavigator = {
        canNavigate: function () { return false; },
        hasNext: function () { return false; },
        hasPrevious: function () { return false; },
        next: function () { },
        previous: function () { },
        revealFirst: false,
    };
    MonacoDiffNavigatorFactory = __decorate([
        inversify_1.injectable()
    ], MonacoDiffNavigatorFactory);
    return MonacoDiffNavigatorFactory;
}());
exports.MonacoDiffNavigatorFactory = MonacoDiffNavigatorFactory;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "../node_modules/@theia/core/lib/browser/diff-uris.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var monaco_command_service_1 = __webpack_require__(/*! ./monaco-command-service */ "../node_modules/@theia/monaco/lib/browser/monaco-command-service.js");
var monaco_context_menu_1 = __webpack_require__(/*! ./monaco-context-menu */ "../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js");
var monaco_diff_editor_1 = __webpack_require__(/*! ./monaco-diff-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js");
var monaco_diff_navigator_factory_1 = __webpack_require__(/*! ./monaco-diff-navigator-factory */ "../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_editor_model_1 = __webpack_require__(/*! ./monaco-editor-model */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! ./monaco-quick-open-service */ "../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var monaco_bulk_edit_service_1 = __webpack_require__(/*! ./monaco-bulk-edit-service */ "../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js");
var application_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/application-protocol */ "../node_modules/@theia/core/lib/common/application-protocol.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var MonacoEditorProvider = /** @class */ (function () {
    function MonacoEditorProvider(codeEditorService, textModelService, contextMenuService, m2p, p2m, workspace, commandServiceFactory, editorPreferences, quickOpenService, diffNavigatorFactory, applicationServer, contextKeyService) {
        var _this = this;
        this.codeEditorService = codeEditorService;
        this.textModelService = textModelService;
        this.contextMenuService = contextMenuService;
        this.m2p = m2p;
        this.p2m = p2m;
        this.workspace = workspace;
        this.commandServiceFactory = commandServiceFactory;
        this.editorPreferences = editorPreferences;
        this.quickOpenService = quickOpenService;
        this.diffNavigatorFactory = diffNavigatorFactory;
        this.applicationServer = applicationServer;
        this.contextKeyService = contextKeyService;
        this.isWindowsBackend = false;
        var staticServices = monaco.services.StaticServices;
        var init = staticServices.init.bind(monaco.services.StaticServices);
        this.applicationServer.getBackendOS().then(function (os) {
            _this.isWindowsBackend = os === core_1.OS.Type.Windows;
        });
        if (staticServices.resourcePropertiesService) {
            // tslint:disable-next-line:no-any
            var original = staticServices.resourcePropertiesService.get();
            original.getEOL = function () {
                var eol = _this.editorPreferences['files.eol'];
                if (eol) {
                    if (eol !== 'auto') {
                        return eol;
                    }
                }
                return _this.isWindowsBackend ? '\r\n' : '\n';
            };
        }
        monaco.services.StaticServices.init = function (o) {
            var result = init(o);
            result[0].set(monaco.services.ICodeEditorService, codeEditorService);
            return result;
        };
    }
    MonacoEditorProvider_1 = MonacoEditorProvider;
    MonacoEditorProvider.prototype.getModel = function (uri, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var reference;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.textModelService.createModelReference(uri)];
                    case 1:
                        reference = _a.sent();
                        toDispose.push(reference);
                        return [2 /*return*/, reference.object];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.get = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorPreferences.ready];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.doCreateEditor(function (override, toDispose) { return _this.createEditor(uri, override, toDispose); })];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.doCreateEditor = function (factory) {
        return __awaiter(this, void 0, void 0, function () {
            var commandService, contextKeyService, _a, codeEditorService, textModelService, contextMenuService, IWorkspaceEditService, toDispose, editor, standaloneCommandService;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        commandService = this.commandServiceFactory();
                        contextKeyService = this.contextKeyService.createScoped();
                        _a = this, codeEditorService = _a.codeEditorService, textModelService = _a.textModelService, contextMenuService = _a.contextMenuService;
                        IWorkspaceEditService = this.bulkEditService;
                        toDispose = new common_1.DisposableCollection();
                        return [4 /*yield*/, factory({
                                codeEditorService: codeEditorService,
                                textModelService: textModelService,
                                contextMenuService: contextMenuService,
                                commandService: commandService,
                                IWorkspaceEditService: IWorkspaceEditService,
                                contextKeyService: contextKeyService
                            }, toDispose)];
                    case 1:
                        editor = _b.sent();
                        editor.onDispose(function () { return toDispose.dispose(); });
                        standaloneCommandService = new monaco.services.StandaloneCommandService(editor.instantiationService);
                        commandService.setDelegate(standaloneCommandService);
                        this.installQuickOpenService(editor);
                        this.installReferencesController(editor);
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.createEditor = function (uri, override, toDispose) {
        if (diff_uris_1.DiffUris.isDiffUri(uri)) {
            return this.createMonacoDiffEditor(uri, override, toDispose);
        }
        return this.createMonacoEditor(uri, override, toDispose);
    };
    Object.defineProperty(MonacoEditorProvider.prototype, "preferencePrefixes", {
        get: function () {
            return ['editor.'];
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorProvider.prototype.createMonacoEditor = function (uri, override, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var model, options, editor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getModel(uri, toDispose)];
                    case 1:
                        model = _a.sent();
                        options = this.createMonacoEditorOptions(model);
                        editor = new monaco_editor_1.MonacoEditor(uri, model, document.createElement('div'), this.services, options, override);
                        toDispose.push(this.editorPreferences.onPreferenceChanged(function (event) {
                            if (event.affects(uri.toString(), model.languageId)) {
                                _this.updateMonacoEditorOptions(editor, event);
                            }
                        }));
                        toDispose.push(editor.onLanguageChanged(function () { return _this.updateMonacoEditorOptions(editor); }));
                        editor.document.onWillSaveModel(function (event) { return event.waitUntil(_this.formatOnSave(editor, event)); });
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.createMonacoEditorOptions = function (model) {
        var options = this.createOptions(this.preferencePrefixes, model.uri, model.languageId);
        options.model = model.textEditorModel;
        options.readOnly = model.readOnly;
        return options;
    };
    MonacoEditorProvider.prototype.updateMonacoEditorOptions = function (editor, event) {
        if (event) {
            var preferenceName = event.preferenceName;
            var overrideIdentifier = editor.document.languageId;
            var newValue = this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, editor.uri.toString());
            editor.getControl().updateOptions(this.setOption(preferenceName, newValue, this.preferencePrefixes));
        }
        else {
            var options = this.createMonacoEditorOptions(editor.document);
            delete options.model;
            editor.getControl().updateOptions(options);
        }
    };
    MonacoEditorProvider.prototype.formatOnSave = function (editor, event) {
        return __awaiter(this, void 0, void 0, function () {
            var overrideIdentifier, uri, formatOnSave, formatOnSaveTimeout, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (event.reason !== monaco_languageclient_1.TextDocumentSaveReason.Manual) {
                            return [2 /*return*/, []];
                        }
                        overrideIdentifier = editor.document.languageId;
                        uri = editor.uri.toString();
                        formatOnSave = this.editorPreferences.get({ preferenceName: 'editor.formatOnSave', overrideIdentifier: overrideIdentifier }, undefined, uri);
                        if (!formatOnSave) {
                            return [2 /*return*/, []];
                        }
                        formatOnSaveTimeout = this.editorPreferences.get({ preferenceName: 'editor.formatOnSaveTimeout', overrideIdentifier: overrideIdentifier }, undefined, uri);
                        _b = (_a = Promise).race;
                        _c = [new Promise(function (reject) { return setTimeout(function () { return reject(new Error("Aborted format on save after " + formatOnSaveTimeout + "ms")); }, formatOnSaveTimeout); })];
                        return [4 /*yield*/, editor.commandService.executeCommand('monaco.editor.action.formatDocument')];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.concat([
                                _d.sent()
                            ])])];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, []];
                }
            });
        });
    };
    Object.defineProperty(MonacoEditorProvider.prototype, "diffPreferencePrefixes", {
        get: function () {
            return __spread(this.preferencePrefixes, ['diffEditor.']);
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorProvider.prototype.createMonacoDiffEditor = function (uri, override, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, original, modified, _b, originalModel, modifiedModel, options, editor;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = __read(diff_uris_1.DiffUris.decode(uri), 2), original = _a[0], modified = _a[1];
                        return [4 /*yield*/, Promise.all([this.getModel(original, toDispose), this.getModel(modified, toDispose)])];
                    case 1:
                        _b = __read.apply(void 0, [_c.sent(), 2]), originalModel = _b[0], modifiedModel = _b[1];
                        options = this.createMonacoDiffEditorOptions(originalModel, modifiedModel);
                        editor = new monaco_diff_editor_1.MonacoDiffEditor(uri, document.createElement('div'), originalModel, modifiedModel, this.services, this.diffNavigatorFactory, options, override);
                        toDispose.push(this.editorPreferences.onPreferenceChanged(function (event) {
                            var originalFileUri = original.withoutQuery().withScheme('file').toString();
                            if (event.affects(originalFileUri, editor.document.languageId)) {
                                _this.updateMonacoDiffEditorOptions(editor, event, originalFileUri);
                            }
                        }));
                        toDispose.push(editor.onLanguageChanged(function () { return _this.updateMonacoDiffEditorOptions(editor); }));
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.createMonacoDiffEditorOptions = function (original, modified) {
        var options = this.createOptions(this.diffPreferencePrefixes, modified.uri, modified.languageId);
        options.originalEditable = !original.readOnly;
        options.readOnly = modified.readOnly;
        return options;
    };
    MonacoEditorProvider.prototype.updateMonacoDiffEditorOptions = function (editor, event, resourceUri) {
        if (event) {
            var preferenceName = event.preferenceName;
            var overrideIdentifier = editor.document.languageId;
            var newValue = this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, resourceUri);
            editor.diffEditor.updateOptions(this.setOption(preferenceName, newValue, this.diffPreferencePrefixes));
        }
        else {
            var options = this.createMonacoDiffEditorOptions(editor.originalModel, editor.modifiedModel);
            editor.diffEditor.updateOptions(options);
        }
    };
    MonacoEditorProvider.prototype.createOptions = function (prefixes, uri, overrideIdentifier) {
        var _this = this;
        return Object.keys(this.editorPreferences).reduce(function (options, preferenceName) {
            var value = _this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, uri);
            return _this.setOption(preferenceName, common_1.deepClone(value), prefixes, options);
        }, {});
    };
    MonacoEditorProvider.prototype.setOption = function (preferenceName, value, prefixes, options) {
        if (options === void 0) { options = {}; }
        var optionName = this.toOptionName(preferenceName, prefixes);
        this.doSetOption(options, value, optionName.split('.'));
        return options;
    };
    MonacoEditorProvider.prototype.toOptionName = function (preferenceName, prefixes) {
        var e_1, _a;
        try {
            for (var prefixes_1 = __values(prefixes), prefixes_1_1 = prefixes_1.next(); !prefixes_1_1.done; prefixes_1_1 = prefixes_1.next()) {
                var prefix = prefixes_1_1.value;
                if (preferenceName.startsWith(prefix)) {
                    return preferenceName.substr(prefix.length);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (prefixes_1_1 && !prefixes_1_1.done && (_a = prefixes_1.return)) _a.call(prefixes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return preferenceName;
    };
    MonacoEditorProvider.prototype.doSetOption = function (obj, value, names, idx) {
        if (idx === void 0) { idx = 0; }
        var name = names[idx];
        if (!obj[name]) {
            if (names.length > (idx + 1)) {
                obj[name] = {};
                this.doSetOption(obj[name], value, names, (idx + 1));
            }
            else {
                obj[name] = value;
            }
        }
    };
    MonacoEditorProvider.prototype.installQuickOpenService = function (editor) {
        var _this = this;
        var control = editor.getControl();
        var quickOpenController = control._contributions['editor.controller.quickOpenController'];
        quickOpenController.run = function (options) {
            var selection = control.getSelection();
            _this.quickOpenService.internalOpen(__assign({}, options, { onClose: function (canceled) {
                    quickOpenController.clearDecorations();
                    if (canceled && selection) {
                        control.setSelection(selection);
                        control.revealRangeInCenterIfOutsideViewport(selection);
                    }
                    editor.focus();
                } }));
        };
    };
    MonacoEditorProvider.prototype.installReferencesController = function (editor) {
        var control = editor.getControl();
        var referencesController = control._contributions['editor.contrib.referencesController'];
        referencesController._gotoReference = function (ref) {
            referencesController._widget.hide();
            referencesController._ignoreModelChangeEvent = true;
            var range = monaco.Range.lift(ref.range).collapseToStart();
            // prerse the model that it does not get disposed if an editor preview replaces an editor
            var model = referencesController._model;
            referencesController._model = undefined;
            referencesController._editorService.openCodeEditor({
                resource: ref.uri,
                options: { selection: range }
            }, control).then(function (openedEditor) {
                referencesController._model = model;
                referencesController._ignoreModelChangeEvent = false;
                if (!openedEditor) {
                    referencesController.closeWidget();
                    return;
                }
                if (openedEditor !== control) {
                    // preserve the model that it does not get disposed in `referencesController.closeWidget`
                    referencesController._model = undefined;
                    // to preserve the active editor
                    var focus_1 = control.focus;
                    control.focus = function () { };
                    referencesController.closeWidget();
                    control.focus = focus_1;
                    var modelPromise = Promise.resolve(model);
                    modelPromise.cancel = function () { };
                    openedEditor._contributions['editor.contrib.referencesController'].toggleWidget(range, modelPromise, {
                        getMetaTitle: function (m) { return m.references.length > 1 ? " \u2013 " + m.references.length + " references" : ''; }
                    });
                    return;
                }
                if (referencesController._widget) {
                    referencesController._widget.show(range);
                    referencesController._widget.focus();
                }
            }, function (e) {
                referencesController._ignoreModelChangeEvent = false;
                monaco.error.onUnexpectedError(e);
            });
        };
    };
    MonacoEditorProvider.prototype.getDiffNavigator = function (editor) {
        if (editor instanceof monaco_diff_editor_1.MonacoDiffEditor) {
            return editor.diffNavigator;
        }
        return monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory.nullNavigator;
    };
    MonacoEditorProvider.prototype.createInline = function (uri, node, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doCreateEditor(function (override, toDispose) { return __awaiter(_this, void 0, void 0, function () {
                        var document, model;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    override.contextMenuService = {
                                        showContextMenu: function () { }
                                    };
                                    document = new monaco_editor_model_1.MonacoEditorModel({
                                        uri: uri,
                                        readContents: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2 /*return*/, ''];
                                        }); }); },
                                        dispose: function () { }
                                    }, this.m2p, this.p2m);
                                    toDispose.push(document);
                                    return [4 /*yield*/, document.load()];
                                case 1:
                                    model = (_a.sent()).textEditorModel;
                                    return [2 /*return*/, new monaco_editor_1.MonacoEditor(uri, document, node, this.services, Object.assign({
                                            model: model,
                                            isSimpleWidget: true,
                                            autoSizing: false,
                                            minHeight: 1,
                                            maxHeight: 1
                                        }, MonacoEditorProvider_1.inlineOptions, options), override)];
                            }
                        });
                    }); })];
            });
        });
    };
    var MonacoEditorProvider_1;
    MonacoEditorProvider.inlineOptions = {
        wordWrap: 'on',
        overviewRulerLanes: 0,
        glyphMargin: false,
        lineNumbers: 'off',
        folding: false,
        selectOnLineNumbers: false,
        hideCursorInOverviewRuler: true,
        selectionHighlight: false,
        scrollbar: {
            horizontal: 'hidden'
        },
        lineDecorationsWidth: 0,
        overviewRulerBorder: false,
        scrollBeyondLastLine: false,
        renderLineHighlight: 'none',
        fixedOverflowWidgets: true,
        acceptSuggestionOnEnter: 'smart',
        minimap: {
            enabled: false
        }
    };
    __decorate([
        inversify_1.inject(monaco_bulk_edit_service_1.MonacoBulkEditService),
        __metadata("design:type", monaco_bulk_edit_service_1.MonacoBulkEditService)
    ], MonacoEditorProvider.prototype, "bulkEditService", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_1.MonacoEditorServices),
        __metadata("design:type", monaco_editor_1.MonacoEditorServices)
    ], MonacoEditorProvider.prototype, "services", void 0);
    MonacoEditorProvider = MonacoEditorProvider_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_editor_service_1.MonacoEditorService)),
        __param(1, inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService)),
        __param(2, inversify_1.inject(monaco_context_menu_1.MonacoContextMenuService)),
        __param(3, inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter)),
        __param(4, inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter)),
        __param(5, inversify_1.inject(monaco_workspace_1.MonacoWorkspace)),
        __param(6, inversify_1.inject(monaco_command_service_1.MonacoCommandServiceFactory)),
        __param(7, inversify_1.inject(browser_1.EditorPreferences)),
        __param(8, inversify_1.inject(monaco_quick_open_service_1.MonacoQuickOpenService)),
        __param(9, inversify_1.inject(monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory)),
        __param(10, inversify_1.inject(application_protocol_1.ApplicationServer)),
        __param(11, inversify_1.inject(monaco.contextKeyService.ContextKeyService)),
        __metadata("design:paramtypes", [monaco_editor_service_1.MonacoEditorService,
            monaco_text_model_service_1.MonacoTextModelService,
            monaco_context_menu_1.MonacoContextMenuService,
            monaco_languageclient_1.MonacoToProtocolConverter,
            monaco_languageclient_1.ProtocolToMonacoConverter,
            monaco_workspace_1.MonacoWorkspace, Function, Object, monaco_quick_open_service_1.MonacoQuickOpenService,
            monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory, Object, monaco.contextKeyService.ContextKeyService])
    ], MonacoEditorProvider);
    return MonacoEditorProvider;
}());
exports.MonacoEditorProvider = MonacoEditorProvider;
//# sourceMappingURL=monaco-editor-provider.js.map

/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
inversify_1.decorate(inversify_1.injectable(), monaco.services.CodeEditorServiceImpl);
var MonacoEditorService = /** @class */ (function (_super) {
    __extends(MonacoEditorService, _super);
    function MonacoEditorService() {
        return _super.call(this, monaco.services.StaticServices.standaloneThemeService.get()) || this;
    }
    MonacoEditorService_1 = MonacoEditorService;
    MonacoEditorService.prototype.getActiveCodeEditor = function () {
        var editor = monaco_editor_1.MonacoEditor.getActive(this.editors);
        return editor && editor.getControl();
    };
    MonacoEditorService.prototype.openCodeEditor = function (input, source, sideBySide) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, openerOptions, widget, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new uri_1.default(input.resource.toString());
                        openerOptions = this.createEditorOpenerOptions(input, source, sideBySide);
                        return [4 /*yield*/, browser_1.open(this.openerService, uri, openerOptions)];
                    case 1:
                        widget = _a.sent();
                        return [4 /*yield*/, this.findEditorWidgetByUri(widget, uri.toString())];
                    case 2:
                        editorWidget = _a.sent();
                        if (editorWidget && editorWidget.editor instanceof monaco_editor_1.MonacoEditor) {
                            return [2 /*return*/, editorWidget.editor.getControl()];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoEditorService.prototype.findEditorWidgetByUri = function (widget, uriAsString) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, _b, _c, childWidget, editorWidget, e_1_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (widget instanceof browser_2.EditorWidget) {
                            if (widget.editor.uri.toString() === uriAsString) {
                                return [2 /*return*/, widget];
                            }
                            return [2 /*return*/, undefined];
                        }
                        if (!browser_1.ApplicationShell.TrackableWidgetProvider.is(widget)) return [3 /*break*/, 9];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        return [4 /*yield*/, widget.getTrackableWidgets()];
                    case 2:
                        _b = __values.apply(void 0, [_d.sent()]), _c = _b.next();
                        _d.label = 3;
                    case 3:
                        if (!!_c.done) return [3 /*break*/, 6];
                        childWidget = _c.value;
                        return [4 /*yield*/, this.findEditorWidgetByUri(childWidget, uriAsString)];
                    case 4:
                        editorWidget = _d.sent();
                        if (editorWidget) {
                            return [2 /*return*/, editorWidget];
                        }
                        _d.label = 5;
                    case 5:
                        _c = _b.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoEditorService.prototype.createEditorOpenerOptions = function (input, source, sideBySide) {
        var mode = this.getEditorOpenMode(input);
        var selection = input.options && this.m2p.asRange(input.options.selection);
        var widgetOptions = this.getWidgetOptions(source, sideBySide);
        var preview = !!this.preferencesService.get(MonacoEditorService_1.ENABLE_PREVIEW_PREFERENCE, false);
        return { mode: mode, selection: selection, widgetOptions: widgetOptions, preview: preview };
    };
    MonacoEditorService.prototype.getEditorOpenMode = function (input) {
        var options = __assign({ preserveFocus: false, revealIfVisible: true }, input.options);
        if (options.preserveFocus) {
            return 'reveal';
        }
        return options.revealIfVisible ? 'activate' : 'open';
    };
    MonacoEditorService.prototype.getWidgetOptions = function (source, sideBySide) {
        var ref = monaco_editor_1.MonacoEditor.getWidgetFor(this.editors, source);
        if (!ref) {
            return undefined;
        }
        var area = (ref && this.shell.getAreaFor(ref)) || 'main';
        var mode = ref && sideBySide ? 'split-right' : undefined;
        return { area: area, mode: mode, ref: ref };
    };
    var MonacoEditorService_1;
    MonacoEditorService.ENABLE_PREVIEW_PREFERENCE = 'editor.enablePreview';
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], MonacoEditorService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoEditorService.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], MonacoEditorService.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], MonacoEditorService.prototype, "editors", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], MonacoEditorService.prototype, "preferencesService", void 0);
    MonacoEditorService = MonacoEditorService_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonacoEditorService);
    return MonacoEditorService;
}(monaco.services.CodeEditorServiceImpl));
exports.MonacoEditorService = MonacoEditorService;
//# sourceMappingURL=monaco-editor-service.js.map

/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var monaco_snippet_suggest_provider_1 = __webpack_require__(/*! ./monaco-snippet-suggest-provider */ "../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js");
var MonacoFrontendApplicationContribution = /** @class */ (function () {
    function MonacoFrontendApplicationContribution() {
    }
    MonacoFrontendApplicationContribution.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, _b, _c, language, registerLanguage;
            var _this = this;
            return __generator(this, function (_d) {
                monaco.suggest.setSnippetSuggestSupport(this.snippetSuggestProvider);
                try {
                    for (_b = __values(monaco.languages.getLanguages()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        language = _c.value;
                        this.preferenceSchema.registerOverrideIdentifier(language.id);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                registerLanguage = monaco.languages.register.bind(monaco.languages);
                monaco.languages.register = function (language) {
                    registerLanguage(language);
                    _this.preferenceSchema.registerOverrideIdentifier(language.id);
                };
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider),
        __metadata("design:type", monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider)
    ], MonacoFrontendApplicationContribution.prototype, "snippetSuggestProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], MonacoFrontendApplicationContribution.prototype, "preferenceSchema", void 0);
    MonacoFrontendApplicationContribution = __decorate([
        inversify_1.injectable()
    ], MonacoFrontendApplicationContribution);
    return MonacoFrontendApplicationContribution;
}());
exports.MonacoFrontendApplicationContribution = MonacoFrontendApplicationContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/monaco/src/browser/style/index.css");
__webpack_require__(/*! ../../src/browser/style/symbol-sprite.svg */ "../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg");
__webpack_require__(/*! ../../src/browser/style/symbol-icons.css */ "../node_modules/@theia/monaco/src/browser/style/symbol-icons.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var preference_scope_1 = __webpack_require__(/*! @theia/core/lib/common/preferences/preference-scope */ "../node_modules/@theia/core/lib/common/preferences/preference-scope.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var editor_keybinding_contexts_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-keybinding-contexts */ "../node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var monaco_editor_provider_1 = __webpack_require__(/*! ./monaco-editor-provider */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var monaco_menu_1 = __webpack_require__(/*! ./monaco-menu */ "../node_modules/@theia/monaco/lib/browser/monaco-menu.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "../node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_keybinding_1 = __webpack_require__(/*! ./monaco-keybinding */ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding.js");
var monaco_languages_1 = __webpack_require__(/*! ./monaco-languages */ "../node_modules/@theia/monaco/lib/browser/monaco-languages.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var monaco_configurations_1 = __webpack_require__(/*! ./monaco-configurations */ "../node_modules/@theia/monaco/lib/browser/monaco-configurations.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_context_menu_1 = __webpack_require__(/*! ./monaco-context-menu */ "../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js");
var monaco_outline_contribution_1 = __webpack_require__(/*! ./monaco-outline-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js");
var monaco_status_bar_contribution_1 = __webpack_require__(/*! ./monaco-status-bar-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js");
var monaco_command_service_1 = __webpack_require__(/*! ./monaco-command-service */ "../node_modules/@theia/monaco/lib/browser/monaco-command-service.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! ./monaco-quick-open-service */ "../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var monaco_diff_navigator_factory_1 = __webpack_require__(/*! ./monaco-diff-navigator-factory */ "../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js");
var monaco_keybinding_contexts_1 = __webpack_require__(/*! ./monaco-keybinding-contexts */ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js");
var monaco_frontend_application_contribution_1 = __webpack_require__(/*! ./monaco-frontend-application-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js");
var monaco_textmate_frontend_bindings_1 = __webpack_require__(/*! ./textmate/monaco-textmate-frontend-bindings */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js");
var monaco_semantic_highlighting_service_1 = __webpack_require__(/*! ./monaco-semantic-highlighting-service */ "../node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service */ "../node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var monaco_bulk_edit_service_1 = __webpack_require__(/*! ./monaco-bulk-edit-service */ "../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js");
var monaco_outline_decorator_1 = __webpack_require__(/*! ./monaco-outline-decorator */ "../node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js");
var outline_decorator_service_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-decorator-service */ "../node_modules/@theia/outline-view/lib/browser/outline-decorator-service.js");
var monaco_snippet_suggest_provider_1 = __webpack_require__(/*! ./monaco-snippet-suggest-provider */ "../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var monaco_context_key_service_1 = __webpack_require__(/*! ./monaco-context-key-service */ "../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js");
var monaco_mime_service_1 = __webpack_require__(/*! ./monaco-mime-service */ "../node_modules/@theia/monaco/lib/browser/monaco-mime-service.js");
var mime_service_1 = __webpack_require__(/*! @theia/core/lib/browser/mime-service */ "../node_modules/@theia/core/lib/browser/mime-service.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.MonacoToProtocolConverter);
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.ProtocolToMonacoConverter);
inversify_1.decorate(inversify_1.injectable(), monaco.contextKeyService.ContextKeyService);
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(monaco_context_key_service_1.MonacoContextKeyService).toSelf().inSingletonScope();
    rebind(context_key_service_1.ContextKeyService).toService(monaco_context_key_service_1.MonacoContextKeyService);
    bind(monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(monaco_frontend_application_contribution_1.MonacoFrontendApplicationContribution).inSingletonScope();
    bind(monaco_languageclient_1.MonacoToProtocolConverter).toSelf().inSingletonScope();
    bind(monaco_languageclient_1.ProtocolToMonacoConverter).toSelf().inSingletonScope();
    bind(monaco_languages_1.MonacoLanguages).toSelf().inSingletonScope();
    bind(browser_2.Languages).toService(monaco_languages_1.MonacoLanguages);
    bind(monaco_configurations_1.MonacoConfigurations).toSelf().inSingletonScope();
    bind(monaco_workspace_1.MonacoWorkspace).toSelf().inSingletonScope();
    bind(browser_2.Workspace).toService(monaco_workspace_1.MonacoWorkspace);
    bind(exports.MonacoConfigurationService).toDynamicValue(function (_a) {
        var container = _a.container;
        return createMonacoConfigurationService(container);
    }).inSingletonScope();
    bind(monaco.contextKeyService.ContextKeyService).toDynamicValue(function (_a) {
        var container = _a.container;
        return new monaco.contextKeyService.ContextKeyService(container.get(exports.MonacoConfigurationService));
    }).inSingletonScope();
    bind(monaco_bulk_edit_service_1.MonacoBulkEditService).toSelf().inSingletonScope();
    bind(monaco_editor_service_1.MonacoEditorService).toSelf().inSingletonScope();
    bind(monaco_text_model_service_1.MonacoTextModelService).toSelf().inSingletonScope();
    bind(monaco_context_menu_1.MonacoContextMenuService).toSelf().inSingletonScope();
    bind(monaco_editor_1.MonacoEditorServices).toSelf().inSingletonScope();
    bind(monaco_editor_provider_1.MonacoEditorProvider).toSelf().inSingletonScope();
    bind(monaco_command_service_1.MonacoCommandService).toSelf().inTransientScope();
    bind(monaco_command_service_1.MonacoCommandServiceFactory).toAutoFactory(monaco_command_service_1.MonacoCommandService);
    bind(browser_3.TextEditorProvider).toProvider(function (context) {
        return function (uri) { return context.container.get(monaco_editor_provider_1.MonacoEditorProvider).get(uri); };
    });
    bind(monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory).toSelf().inSingletonScope();
    bind(browser_3.DiffNavigatorProvider).toFactory(function (context) {
        return function (editor) { return context.container.get(monaco_editor_provider_1.MonacoEditorProvider).getDiffNavigator(editor); };
    });
    bind(monaco_outline_contribution_1.MonacoOutlineContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_outline_contribution_1.MonacoOutlineContribution);
    bind(monaco_status_bar_contribution_1.MonacoStatusBarContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_status_bar_contribution_1.MonacoStatusBarContribution);
    bind(monaco_command_registry_1.MonacoCommandRegistry).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).to(monaco_command_1.MonacoEditorCommandHandlers).inSingletonScope();
    bind(common_1.MenuContribution).to(monaco_menu_1.MonacoEditorMenuContribution).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(monaco_keybinding_1.MonacoKeybindingContribution).inSingletonScope();
    rebind(editor_keybinding_contexts_1.StrictEditorTextFocusContext).to(monaco_keybinding_contexts_1.MonacoStrictEditorTextFocusContext).inSingletonScope();
    bind(monaco_quick_open_service_1.MonacoQuickOpenService).toSelf().inSingletonScope();
    rebind(browser_1.QuickOpenService).toService(monaco_quick_open_service_1.MonacoQuickOpenService);
    monaco_textmate_frontend_bindings_1.default(bind, unbind, isBound, rebind);
    bind(monaco_semantic_highlighting_service_1.MonacoSemanticHighlightingService).toSelf().inSingletonScope();
    rebind(semantic_highlighting_service_1.SemanticHighlightingService).to(monaco_semantic_highlighting_service_1.MonacoSemanticHighlightingService).inSingletonScope();
    bind(monaco_outline_decorator_1.MonacoOutlineDecorator).toSelf().inSingletonScope();
    bind(outline_decorator_service_1.OutlineTreeDecorator).toService(monaco_outline_decorator_1.MonacoOutlineDecorator);
    bind(monaco_mime_service_1.MonacoMimeService).toSelf().inSingletonScope();
    rebind(mime_service_1.MimeService).toService(monaco_mime_service_1.MonacoMimeService);
});
exports.MonacoConfigurationService = Symbol('MonacoConfigurationService');
function createMonacoConfigurationService(container) {
    var configurations = container.get(monaco_configurations_1.MonacoConfigurations);
    var preferences = container.get(browser_1.PreferenceService);
    var preferenceSchemaProvider = container.get(browser_1.PreferenceSchemaProvider);
    var service = monaco.services.StaticServices.configurationService.get();
    var _configuration = service._configuration;
    _configuration.getValue = function (section, overrides, workspace) {
        var overrideIdentifier = overrides && 'overrideIdentifier' in overrides && overrides['overrideIdentifier'] || undefined;
        var resourceUri = overrides && 'resource' in overrides && overrides['resource'].toString();
        // tslint:disable-next-line:no-any
        var proxy = browser_1.createPreferenceProxy(preferences, preferenceSchemaProvider.getCombinedSchema(), {
            resourceUri: resourceUri, overrideIdentifier: overrideIdentifier, style: 'both'
        });
        if (section) {
            return proxy[section];
        }
        return proxy;
    };
    var initFromConfiguration = debounce(function () {
        var event = new monaco.services.ConfigurationChangeEvent();
        event._source = 6 /* DEFAULT */;
        service._onDidChangeConfiguration.fire(event);
    });
    preferences.onPreferenceChanged(function (e) {
        if (e.scope === preference_scope_1.PreferenceScope.Default) {
            initFromConfiguration();
        }
    });
    configurations.onDidChangeConfiguration(function (e) {
        if (e.affectedSections) {
            var event_1 = new monaco.services.ConfigurationChangeEvent();
            event_1.change(e.affectedSections);
            service._onDidChangeConfiguration.fire(event_1);
        }
    });
    return service;
}
exports.createMonacoConfigurationService = createMonacoConfigurationService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var editor_keybinding_contexts_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-keybinding-contexts */ "../node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
/**
 * Besides checking whether this editor is the currently active one and has the focus, it also checks the followings:
 *  - the suggest widget is visible
 *  - the find (and replace) widget is visible.
 *  - the rename input widget (which we use for refactoring and not find and replace) is visible.
 *
 * If any of the above-mentioned additional checks evaluates to `true` the `canHandle` will evaluate to `false`.
 *
 * See: https://github.com/eamodio/vscode-gitlens/blob/57226d54d1e929be04b02ee31ca294c50305481b/package.json#L2857
 */
var MonacoStrictEditorTextFocusContext = /** @class */ (function (_super) {
    __extends(MonacoStrictEditorTextFocusContext, _super);
    function MonacoStrictEditorTextFocusContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonacoStrictEditorTextFocusContext.prototype.canHandle = function (widget) {
        var editor = widget.editor;
        if (editor instanceof monaco_editor_1.MonacoEditor) {
            return editor.isFocused({ strict: true });
        }
        return _super.prototype.canHandle.call(this, widget);
    };
    MonacoStrictEditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], MonacoStrictEditorTextFocusContext);
    return MonacoStrictEditorTextFocusContext;
}(editor_keybinding_contexts_1.StrictEditorTextFocusContext));
exports.MonacoStrictEditorTextFocusContext = MonacoStrictEditorTextFocusContext;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-keybinding.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "../node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var monaco_keycode_map_1 = __webpack_require__(/*! ./monaco-keycode-map */ "../node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
function monaco2BrowserKeyCode(keyCode) {
    for (var i = 0; i < monaco_keycode_map_1.KEY_CODE_MAP.length; i++) {
        if (monaco_keycode_map_1.KEY_CODE_MAP[i] === keyCode) {
            return i;
        }
    }
    return -1;
}
var MonacoKeybindingContribution = /** @class */ (function () {
    function MonacoKeybindingContribution() {
    }
    MonacoKeybindingContribution.prototype.registerKeybindings = function (registry) {
        var defaultKeybindings = monaco.keybindings.KeybindingsRegistry.getDefaultKeybindings();
        // register in reverse order to align with Monaco dispatch logic:
        // https://github.com/TypeFox/vscode/blob/70b8db24a37fafc77247de7f7cb5bb0195120ed0/src/vs/platform/keybinding/common/keybindingResolver.ts#L302
        for (var i = defaultKeybindings.length - 1; i >= 0; i--) {
            var item = defaultKeybindings[i];
            var command = this.commands.validate(item.command);
            if (command) {
                var raw = item.keybinding;
                var when = item.when && item.when.serialize();
                var keybinding = raw instanceof monaco.keybindings.SimpleKeybinding
                    ? this.keyCode(raw).toString()
                    : this.keySequence(raw).join(' ');
                registry.registerKeybinding({ command: command, keybinding: keybinding, when: when });
            }
        }
        // `Select All` is not an editor action just like everything else.
        var selectAllCommand = this.commands.validate(monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL);
        if (selectAllCommand) {
            registry.registerKeybinding({
                command: selectAllCommand,
                keybinding: 'ctrlcmd+a',
                context: browser_2.EditorKeybindingContexts.editorTextFocus
            });
        }
    };
    MonacoKeybindingContribution.prototype.keyCode = function (keybinding) {
        var keyCode = keybinding.keyCode;
        var sequence = {
            first: browser_1.Key.getKey(monaco2BrowserKeyCode(keyCode & 0xff)),
            modifiers: []
        };
        if (keybinding.ctrlKey) {
            if (core_1.isOSX) {
                sequence.modifiers.push(browser_1.KeyModifier.MacCtrl);
            }
            else {
                sequence.modifiers.push(browser_1.KeyModifier.CtrlCmd);
            }
        }
        if (keybinding.shiftKey) {
            sequence.modifiers.push(browser_1.KeyModifier.Shift);
        }
        if (keybinding.altKey) {
            sequence.modifiers.push(browser_1.KeyModifier.Alt);
        }
        if (keybinding.metaKey && sequence.modifiers.indexOf(browser_1.KeyModifier.CtrlCmd) === -1) {
            sequence.modifiers.push(browser_1.KeyModifier.CtrlCmd);
        }
        return browser_1.KeyCode.createKeyCode(sequence);
    };
    MonacoKeybindingContribution.prototype.keySequence = function (keybinding) {
        var _this = this;
        return keybinding.parts.map(function (part) { return _this.keyCode(part); });
    };
    __decorate([
        inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry),
        __metadata("design:type", monaco_command_registry_1.MonacoCommandRegistry)
    ], MonacoKeybindingContribution.prototype, "commands", void 0);
    MonacoKeybindingContribution = __decorate([
        inversify_1.injectable()
    ], MonacoKeybindingContribution);
    return MonacoKeybindingContribution;
}());
exports.MonacoKeybindingContribution = MonacoKeybindingContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
var browser = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var KeyCode = monaco.KeyCode;
exports.KEY_CODE_MAP = [];
(function () {
    exports.KEY_CODE_MAP[3] = KeyCode.PauseBreak; // VK_CANCEL 0x03 Control-break processing
    exports.KEY_CODE_MAP[8] = KeyCode.Backspace;
    exports.KEY_CODE_MAP[9] = KeyCode.Tab;
    exports.KEY_CODE_MAP[13] = KeyCode.Enter;
    exports.KEY_CODE_MAP[16] = KeyCode.Shift;
    exports.KEY_CODE_MAP[17] = KeyCode.Ctrl;
    exports.KEY_CODE_MAP[18] = KeyCode.Alt;
    exports.KEY_CODE_MAP[19] = KeyCode.PauseBreak;
    exports.KEY_CODE_MAP[20] = KeyCode.CapsLock;
    exports.KEY_CODE_MAP[27] = KeyCode.Escape;
    exports.KEY_CODE_MAP[32] = KeyCode.Space;
    exports.KEY_CODE_MAP[33] = KeyCode.PageUp;
    exports.KEY_CODE_MAP[34] = KeyCode.PageDown;
    exports.KEY_CODE_MAP[35] = KeyCode.End;
    exports.KEY_CODE_MAP[36] = KeyCode.Home;
    exports.KEY_CODE_MAP[37] = KeyCode.LeftArrow;
    exports.KEY_CODE_MAP[38] = KeyCode.UpArrow;
    exports.KEY_CODE_MAP[39] = KeyCode.RightArrow;
    exports.KEY_CODE_MAP[40] = KeyCode.DownArrow;
    exports.KEY_CODE_MAP[45] = KeyCode.Insert;
    exports.KEY_CODE_MAP[46] = KeyCode.Delete;
    exports.KEY_CODE_MAP[48] = KeyCode.KEY_0;
    exports.KEY_CODE_MAP[49] = KeyCode.KEY_1;
    exports.KEY_CODE_MAP[50] = KeyCode.KEY_2;
    exports.KEY_CODE_MAP[51] = KeyCode.KEY_3;
    exports.KEY_CODE_MAP[52] = KeyCode.KEY_4;
    exports.KEY_CODE_MAP[53] = KeyCode.KEY_5;
    exports.KEY_CODE_MAP[54] = KeyCode.KEY_6;
    exports.KEY_CODE_MAP[55] = KeyCode.KEY_7;
    exports.KEY_CODE_MAP[56] = KeyCode.KEY_8;
    exports.KEY_CODE_MAP[57] = KeyCode.KEY_9;
    exports.KEY_CODE_MAP[65] = KeyCode.KEY_A;
    exports.KEY_CODE_MAP[66] = KeyCode.KEY_B;
    exports.KEY_CODE_MAP[67] = KeyCode.KEY_C;
    exports.KEY_CODE_MAP[68] = KeyCode.KEY_D;
    exports.KEY_CODE_MAP[69] = KeyCode.KEY_E;
    exports.KEY_CODE_MAP[70] = KeyCode.KEY_F;
    exports.KEY_CODE_MAP[71] = KeyCode.KEY_G;
    exports.KEY_CODE_MAP[72] = KeyCode.KEY_H;
    exports.KEY_CODE_MAP[73] = KeyCode.KEY_I;
    exports.KEY_CODE_MAP[74] = KeyCode.KEY_J;
    exports.KEY_CODE_MAP[75] = KeyCode.KEY_K;
    exports.KEY_CODE_MAP[76] = KeyCode.KEY_L;
    exports.KEY_CODE_MAP[77] = KeyCode.KEY_M;
    exports.KEY_CODE_MAP[78] = KeyCode.KEY_N;
    exports.KEY_CODE_MAP[79] = KeyCode.KEY_O;
    exports.KEY_CODE_MAP[80] = KeyCode.KEY_P;
    exports.KEY_CODE_MAP[81] = KeyCode.KEY_Q;
    exports.KEY_CODE_MAP[82] = KeyCode.KEY_R;
    exports.KEY_CODE_MAP[83] = KeyCode.KEY_S;
    exports.KEY_CODE_MAP[84] = KeyCode.KEY_T;
    exports.KEY_CODE_MAP[85] = KeyCode.KEY_U;
    exports.KEY_CODE_MAP[86] = KeyCode.KEY_V;
    exports.KEY_CODE_MAP[87] = KeyCode.KEY_W;
    exports.KEY_CODE_MAP[88] = KeyCode.KEY_X;
    exports.KEY_CODE_MAP[89] = KeyCode.KEY_Y;
    exports.KEY_CODE_MAP[90] = KeyCode.KEY_Z;
    exports.KEY_CODE_MAP[93] = KeyCode.ContextMenu;
    exports.KEY_CODE_MAP[96] = KeyCode.NUMPAD_0;
    exports.KEY_CODE_MAP[97] = KeyCode.NUMPAD_1;
    exports.KEY_CODE_MAP[98] = KeyCode.NUMPAD_2;
    exports.KEY_CODE_MAP[99] = KeyCode.NUMPAD_3;
    exports.KEY_CODE_MAP[100] = KeyCode.NUMPAD_4;
    exports.KEY_CODE_MAP[101] = KeyCode.NUMPAD_5;
    exports.KEY_CODE_MAP[102] = KeyCode.NUMPAD_6;
    exports.KEY_CODE_MAP[103] = KeyCode.NUMPAD_7;
    exports.KEY_CODE_MAP[104] = KeyCode.NUMPAD_8;
    exports.KEY_CODE_MAP[105] = KeyCode.NUMPAD_9;
    exports.KEY_CODE_MAP[106] = KeyCode.NUMPAD_MULTIPLY;
    exports.KEY_CODE_MAP[107] = KeyCode.NUMPAD_ADD;
    exports.KEY_CODE_MAP[108] = KeyCode.NUMPAD_SEPARATOR;
    exports.KEY_CODE_MAP[109] = KeyCode.NUMPAD_SUBTRACT;
    exports.KEY_CODE_MAP[110] = KeyCode.NUMPAD_DECIMAL;
    exports.KEY_CODE_MAP[111] = KeyCode.NUMPAD_DIVIDE;
    exports.KEY_CODE_MAP[112] = KeyCode.F1;
    exports.KEY_CODE_MAP[113] = KeyCode.F2;
    exports.KEY_CODE_MAP[114] = KeyCode.F3;
    exports.KEY_CODE_MAP[115] = KeyCode.F4;
    exports.KEY_CODE_MAP[116] = KeyCode.F5;
    exports.KEY_CODE_MAP[117] = KeyCode.F6;
    exports.KEY_CODE_MAP[118] = KeyCode.F7;
    exports.KEY_CODE_MAP[119] = KeyCode.F8;
    exports.KEY_CODE_MAP[120] = KeyCode.F9;
    exports.KEY_CODE_MAP[121] = KeyCode.F10;
    exports.KEY_CODE_MAP[122] = KeyCode.F11;
    exports.KEY_CODE_MAP[123] = KeyCode.F12;
    exports.KEY_CODE_MAP[124] = KeyCode.F13;
    exports.KEY_CODE_MAP[125] = KeyCode.F14;
    exports.KEY_CODE_MAP[126] = KeyCode.F15;
    exports.KEY_CODE_MAP[127] = KeyCode.F16;
    exports.KEY_CODE_MAP[128] = KeyCode.F17;
    exports.KEY_CODE_MAP[129] = KeyCode.F18;
    exports.KEY_CODE_MAP[130] = KeyCode.F19;
    exports.KEY_CODE_MAP[144] = KeyCode.NumLock;
    exports.KEY_CODE_MAP[145] = KeyCode.ScrollLock;
    exports.KEY_CODE_MAP[186] = KeyCode.US_SEMICOLON;
    exports.KEY_CODE_MAP[187] = KeyCode.US_EQUAL;
    exports.KEY_CODE_MAP[188] = KeyCode.US_COMMA;
    exports.KEY_CODE_MAP[189] = KeyCode.US_MINUS;
    exports.KEY_CODE_MAP[190] = KeyCode.US_DOT;
    exports.KEY_CODE_MAP[191] = KeyCode.US_SLASH;
    exports.KEY_CODE_MAP[192] = KeyCode.US_BACKTICK;
    exports.KEY_CODE_MAP[193] = KeyCode.ABNT_C1;
    exports.KEY_CODE_MAP[194] = KeyCode.ABNT_C2;
    exports.KEY_CODE_MAP[219] = KeyCode.US_OPEN_SQUARE_BRACKET;
    exports.KEY_CODE_MAP[220] = KeyCode.US_BACKSLASH;
    exports.KEY_CODE_MAP[221] = KeyCode.US_CLOSE_SQUARE_BRACKET;
    exports.KEY_CODE_MAP[222] = KeyCode.US_QUOTE;
    exports.KEY_CODE_MAP[223] = KeyCode.OEM_8;
    exports.KEY_CODE_MAP[226] = KeyCode.OEM_102;
    /**
     * https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
     * If an Input Method Editor is processing key input and the event is keydown, return 229.
     */
    exports.KEY_CODE_MAP[229] = KeyCode.KEY_IN_COMPOSITION;
    if (browser.isIE) {
        exports.KEY_CODE_MAP[91] = KeyCode.Meta;
    }
    else if (browser.isFirefox) {
        exports.KEY_CODE_MAP[59] = KeyCode.US_SEMICOLON;
        exports.KEY_CODE_MAP[107] = KeyCode.US_EQUAL;
        exports.KEY_CODE_MAP[109] = KeyCode.US_MINUS;
        if (monaco.platform.OS === 2 /* Macintosh */) {
            exports.KEY_CODE_MAP[224] = KeyCode.Meta;
        }
    }
    else if (browser.isWebKit) {
        exports.KEY_CODE_MAP[91] = KeyCode.Meta;
        if (monaco.platform.OS === 2 /* Macintosh */) {
            // the two meta keys in the Mac have different key codes (91 and 93)
            exports.KEY_CODE_MAP[93] = KeyCode.Meta;
        }
        else {
            exports.KEY_CODE_MAP[92] = KeyCode.Meta;
        }
    }
})();


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-languages.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-languages.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var problem_manager_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-manager */ "../node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var monaco_diagnostic_collection_1 = __webpack_require__(/*! monaco-languageclient/lib/monaco-diagnostic-collection */ "../node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js");
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.MonacoLanguages);
inversify_1.decorate(inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter), monaco_languageclient_1.MonacoLanguages, 0);
inversify_1.decorate(inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter), monaco_languageclient_1.MonacoLanguages, 1);
var MonacoLanguages = /** @class */ (function (_super) {
    __extends(MonacoLanguages, _super);
    function MonacoLanguages(p2m, m2p, problemManager) {
        var e_1, _a;
        var _this = _super.call(this, p2m, m2p) || this;
        _this.problemManager = problemManager;
        _this.workspaceSymbolProviders = [];
        _this.makers = new Map();
        try {
            for (var _b = __values(_this.problemManager.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var uri = _c.value;
                _this.updateMarkers(new uri_1.default(uri));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        _this.problemManager.onDidChangeMarkers(function (uri) { return _this.updateMarkers(uri); });
        return _this;
    }
    MonacoLanguages.prototype.updateMarkers = function (uri) {
        var e_2, _a, e_3, _b, e_4, _c;
        var uriString = uri.toString();
        var owners = new Map();
        try {
            for (var _d = __values(this.problemManager.findMarkers({ uri: uri })), _e = _d.next(); !_e.done; _e = _d.next()) {
                var marker = _e.value;
                var diagnostics = owners.get(marker.owner) || [];
                diagnostics.push(marker.data);
                owners.set(marker.owner, diagnostics);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var toClean = new Set(this.makers.keys());
        try {
            for (var owners_1 = __values(owners), owners_1_1 = owners_1.next(); !owners_1_1.done; owners_1_1 = owners_1.next()) {
                var _f = __read(owners_1_1.value, 2), owner = _f[0], diagnostics = _f[1];
                toClean.delete(owner);
                var collection = this.makers.get(owner) || new monaco_diagnostic_collection_1.MonacoDiagnosticCollection(owner, this.p2m);
                collection.set(uriString, diagnostics);
                this.makers.set(owner, collection);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (owners_1_1 && !owners_1_1.done && (_b = owners_1.return)) _b.call(owners_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var toClean_1 = __values(toClean), toClean_1_1 = toClean_1.next(); !toClean_1_1.done; toClean_1_1 = toClean_1.next()) {
                var owner = toClean_1_1.value;
                var collection = this.makers.get(owner);
                if (collection) {
                    collection.set(uriString, []);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (toClean_1_1 && !toClean_1_1.done && (_c = toClean_1.return)) _c.call(toClean_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MonacoLanguages.prototype.createDiagnosticCollection = function (name) {
        var _this = this;
        var owner = name || 'default';
        var uris = [];
        return {
            set: function (uri, diagnostics) {
                _this.problemManager.setMarkers(new uri_1.default(uri), owner, diagnostics);
                uris.push(uri);
            },
            dispose: function () {
                var e_5, _a;
                try {
                    for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                        var uri = uris_1_1.value;
                        _this.problemManager.setMarkers(new uri_1.default(uri), owner, []);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        };
    };
    MonacoLanguages.prototype.registerWorkspaceSymbolProvider = function (provider) {
        var _this = this;
        this.workspaceSymbolProviders.push(provider);
        return disposable_1.Disposable.create(function () {
            var index = _this.workspaceSymbolProviders.indexOf(provider);
            if (index !== -1) {
                _this.workspaceSymbolProviders.splice(index, 1);
            }
        });
    };
    Object.defineProperty(MonacoLanguages.prototype, "languages", {
        get: function () {
            return __spread(this.mergeLanguages(monaco.languages.getLanguages()).values());
        },
        enumerable: true,
        configurable: true
    });
    MonacoLanguages.prototype.getLanguage = function (languageId) {
        return this.mergeLanguages(monaco.languages.getLanguages().filter(function (language) { return language.id === languageId; })).get(languageId);
    };
    MonacoLanguages.prototype.mergeLanguages = function (registered) {
        var e_6, _a, e_7, _b, e_8, _c, e_9, _d;
        var languages = new Map();
        try {
            for (var registered_1 = __values(registered), registered_1_1 = registered_1.next(); !registered_1_1.done; registered_1_1 = registered_1.next()) {
                var _e = registered_1_1.value, id = _e.id, aliases = _e.aliases, extensions = _e.extensions, filenames = _e.filenames;
                var merged = languages.get(id) || {
                    id: id,
                    name: '',
                    extensions: new Set(),
                    filenames: new Set()
                };
                if (!merged.name && aliases && aliases.length) {
                    merged.name = aliases[0];
                }
                if (extensions && extensions.length) {
                    try {
                        for (var extensions_1 = __values(extensions), extensions_1_1 = extensions_1.next(); !extensions_1_1.done; extensions_1_1 = extensions_1.next()) {
                            var extension = extensions_1_1.value;
                            merged.extensions.add(extension);
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (extensions_1_1 && !extensions_1_1.done && (_b = extensions_1.return)) _b.call(extensions_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
                if (filenames && filenames.length) {
                    try {
                        for (var filenames_1 = __values(filenames), filenames_1_1 = filenames_1.next(); !filenames_1_1.done; filenames_1_1 = filenames_1.next()) {
                            var filename = filenames_1_1.value;
                            merged.filenames.add(filename);
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (filenames_1_1 && !filenames_1_1.done && (_c = filenames_1.return)) _c.call(filenames_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
                languages.set(id, merged);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (registered_1_1 && !registered_1_1.done && (_a = registered_1.return)) _a.call(registered_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var languages_1 = __values(languages), languages_1_1 = languages_1.next(); !languages_1_1.done; languages_1_1 = languages_1.next()) {
                var _f = __read(languages_1_1.value, 2), id = _f[0], language = _f[1];
                if (!language.name) {
                    language.name = id;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (languages_1_1 && !languages_1_1.done && (_d = languages_1.return)) _d.call(languages_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return languages;
    };
    MonacoLanguages.prototype.createSignatureHelpProvider = function (selector, provider) {
        var _this = this;
        var triggerCharacters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            triggerCharacters[_i - 2] = arguments[_i];
        }
        var signatureHelpTriggerCharacters = __spread((provider.triggerCharacters || triggerCharacters || []));
        var signatureHelpRetriggerCharacters = __spread((provider.retriggerCharacters || []));
        return {
            signatureHelpTriggerCharacters: signatureHelpTriggerCharacters,
            signatureHelpRetriggerCharacters: signatureHelpRetriggerCharacters,
            provideSignatureHelp: function (model, position, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, help;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asTextDocumentPositionParams(model, position);
                            return [4 /*yield*/, provider.provideSignatureHelp(params, token, undefined /* not used by LC */)];
                        case 1:
                            help = _a.sent();
                            if (!help) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, {
                                    value: this.p2m.asSignatureHelp(help),
                                    dispose: function () { }
                                }];
                    }
                });
            }); }
        };
    };
    MonacoLanguages.prototype.createCodeActionProvider = function (selector, provider) {
        var _this = this;
        return {
            provideCodeActions: function (model, range, context, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, actions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asCodeActionParams(model, range, context);
                            return [4 /*yield*/, provider.provideCodeActions(params, token)];
                        case 1:
                            actions = _a.sent();
                            if (!actions) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, {
                                    actions: this.p2m.asCodeActions(actions),
                                    dispose: function () { }
                                }];
                    }
                });
            }); }
        };
    };
    MonacoLanguages.prototype.createCodeLensProvider = function (selector, provider) {
        var _this = this;
        return {
            provideCodeLenses: function (model, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, lenses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asCodeLensParams(model);
                            return [4 /*yield*/, provider.provideCodeLenses(params, token)];
                        case 1:
                            lenses = _a.sent();
                            if (!lenses) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, {
                                    lenses: this.p2m.asCodeLenses(lenses),
                                    dispose: function () { }
                                }];
                    }
                });
            }); },
            resolveCodeLens: provider.resolveCodeLens ? function (model, codeLens, token) { return __awaiter(_this, void 0, void 0, function () {
                var protocolCodeLens, result, resolvedCodeLens;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, codeLens];
                            }
                            protocolCodeLens = this.m2p.asCodeLens(codeLens);
                            return [4 /*yield*/, provider.resolveCodeLens(protocolCodeLens, token)];
                        case 1:
                            result = _a.sent();
                            if (result) {
                                resolvedCodeLens = this.p2m.asCodeLens(result);
                                Object.assign(codeLens, resolvedCodeLens);
                            }
                            return [2 /*return*/, codeLens];
                    }
                });
            }); } : (function (_, codeLens, __) { return codeLens; })
        };
    };
    MonacoLanguages = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter)),
        __param(1, inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter)),
        __param(2, inversify_1.inject(problem_manager_1.ProblemManager)),
        __metadata("design:paramtypes", [monaco_languageclient_1.ProtocolToMonacoConverter,
            monaco_languageclient_1.MonacoToProtocolConverter,
            problem_manager_1.ProblemManager])
    ], MonacoLanguages);
    return MonacoLanguages;
}(monaco_languageclient_1.MonacoLanguages));
exports.MonacoLanguages = MonacoLanguages;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-loader.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-loader.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
function loadVsRequire(context) {
    // Monaco uses a custom amd loader that over-rides node's require.
    // Keep a reference to an original require so we can restore it after executing the amd loader file.
    var originalRequire = context.require;
    return new Promise(function (resolve) {
        return window.addEventListener('load', function () {
            var vsLoader = document.createElement('script');
            vsLoader.type = 'text/javascript';
            vsLoader.src = './vs/loader.js';
            vsLoader.charset = 'utf-8';
            vsLoader.addEventListener('load', function () {
                // Save Monaco's amd require and restore the original require
                var amdRequire = context.require;
                if (originalRequire) {
                    context.require = originalRequire;
                }
                resolve(amdRequire);
            });
            document.body.appendChild(vsLoader);
        }, { once: true });
    });
}
exports.loadVsRequire = loadVsRequire;
function loadMonaco(vsRequire) {
    return new Promise(function (resolve) {
        vsRequire(['vs/editor/editor.main'], function () {
            vsRequire([
                'vs/language/css/monaco.contribution',
                'vs/language/html/monaco.contribution',
                'vs/platform/commands/common/commands',
                'vs/platform/actions/common/actions',
                'vs/platform/keybinding/common/keybindingsRegistry',
                'vs/platform/keybinding/common/keybindingResolver',
                'vs/platform/keybinding/common/usLayoutResolvedKeybinding',
                'vs/base/common/keybindingLabels',
                'vs/base/common/keyCodes',
                'vs/base/common/mime',
                'vs/editor/browser/editorExtensions',
                'vs/editor/standalone/browser/simpleServices',
                'vs/editor/standalone/browser/standaloneServices',
                'vs/base/parts/quickopen/browser/quickOpenWidget',
                'vs/base/parts/quickopen/browser/quickOpenModel',
                'vs/base/common/filters',
                'vs/platform/theme/common/styler',
                'vs/base/common/platform',
                'vs/editor/common/modes',
                'vs/editor/contrib/suggest/suggest',
                'vs/editor/contrib/snippet/snippetParser',
                'vs/platform/configuration/common/configuration',
                'vs/platform/configuration/common/configurationModels',
                'vs/editor/browser/services/codeEditorService',
                'vs/editor/browser/services/codeEditorServiceImpl',
                'vs/platform/contextkey/common/contextkey',
                'vs/platform/contextkey/browser/contextKeyService',
                'vs/base/common/errors'
            ], function (css, html, commands, actions, keybindingsRegistry, keybindingResolver, resolvedKeybinding, keybindingLabels, keyCodes, mime, editorExtensions, simpleServices, standaloneServices, quickOpenWidget, quickOpenModel, filters, styler, platform, modes, suggest, snippetParser, configuration, configurationModels, codeEditorService, codeEditorServiceImpl, contextKey, contextKeyService, error) {
                var global = self;
                global.monaco.commands = commands;
                global.monaco.actions = actions;
                global.monaco.keybindings = Object.assign({}, keybindingsRegistry, keybindingResolver, resolvedKeybinding, keybindingLabels, keyCodes);
                global.monaco.services = Object.assign({}, simpleServices, standaloneServices, configuration, configurationModels, codeEditorService, codeEditorServiceImpl);
                global.monaco.quickOpen = Object.assign({}, quickOpenWidget, quickOpenModel);
                global.monaco.filters = filters;
                global.monaco.theme = styler;
                global.monaco.platform = platform;
                global.monaco.editorExtensions = editorExtensions;
                global.monaco.modes = modes;
                global.monaco.suggest = suggest;
                global.monaco.snippetParser = snippetParser;
                global.monaco.contextkey = contextKey;
                global.monaco.contextKeyService = contextKeyService;
                global.monaco.mime = mime;
                global.monaco.error = error;
                resolve();
            });
        });
    });
}
exports.loadMonaco = loadMonaco;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-menu.js":
/*!****************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-menu.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "../node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var MenuRegistry = monaco.actions.MenuRegistry;
var MonacoMenus;
(function (MonacoMenus) {
    MonacoMenus.SELECTION = __spread(common_1.MAIN_MENU_BAR, ['3_selection']);
    MonacoMenus.SELECTION_GROUP = {
        id: '1_selection_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL,
            monaco_command_1.MonacoCommands.SELECTION_EXPAND_SELECTION,
            monaco_command_1.MonacoCommands.SELECTION_SHRINK_SELECTION
        ]
    };
    MonacoMenus.SELECTION_MOVE_GROUP = {
        id: '2_copy_move_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_COPY_LINE_UP,
            monaco_command_1.MonacoCommands.SELECTION_COPY_LINE_DOWN,
            monaco_command_1.MonacoCommands.SELECTION_MOVE_LINE_UP,
            monaco_command_1.MonacoCommands.SELECTION_MOVE_LINE_DOWN
        ]
    };
    MonacoMenus.SELECTION_CURSOR_GROUP = {
        id: '3_cursor_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_ABOVE,
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_BELOW,
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_TO_LINE_END,
            monaco_command_1.MonacoCommands.SELECTION_ADD_NEXT_OCCURRENCE,
            monaco_command_1.MonacoCommands.SELECTION_ADD_PREVIOUS_OCCURRENCE,
            monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL_OCCURRENCES
        ]
    };
    MonacoMenus.SELECTION_GROUPS = [
        MonacoMenus.SELECTION_GROUP,
        MonacoMenus.SELECTION_MOVE_GROUP,
        MonacoMenus.SELECTION_CURSOR_GROUP
    ];
})(MonacoMenus = exports.MonacoMenus || (exports.MonacoMenus = {}));
var MonacoEditorMenuContribution = /** @class */ (function () {
    function MonacoEditorMenuContribution(commands) {
        this.commands = commands;
    }
    MonacoEditorMenuContribution.prototype.registerMenus = function (registry) {
        var _this = this;
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __values(MenuRegistry.getMenuItems(7)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var item = _d.value;
                var commandId = this.commands.validate(item.command.id);
                if (commandId) {
                    var menuPath = __spread(browser_1.EDITOR_CONTEXT_MENU, [(item.group || '')]);
                    registry.registerMenuAction(menuPath, { commandId: commandId });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        registry.registerSubmenu(MonacoMenus.SELECTION, 'Selection');
        var _loop_1 = function (group) {
            group.actions.forEach(function (action, index) {
                var commandId = _this.commands.validate(action);
                if (commandId) {
                    var path = __spread(MonacoMenus.SELECTION, [group.id]);
                    var order = index.toString();
                    registry.registerMenuAction(path, { commandId: commandId, order: order });
                }
            });
        };
        try {
            for (var _e = __values(MonacoMenus.SELECTION_GROUPS), _f = _e.next(); !_f.done; _f = _e.next()) {
                var group = _f.value;
                _loop_1(group);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoEditorMenuContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry)),
        __metadata("design:paramtypes", [monaco_command_registry_1.MonacoCommandRegistry])
    ], MonacoEditorMenuContribution);
    return MonacoEditorMenuContribution;
}());
exports.MonacoEditorMenuContribution = MonacoEditorMenuContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-mime-service.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-mime-service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mime_service_1 = __webpack_require__(/*! @theia/core/lib/browser/mime-service */ "../node_modules/@theia/core/lib/browser/mime-service.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var MonacoMimeService = /** @class */ (function (_super) {
    __extends(MonacoMimeService, _super);
    function MonacoMimeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonacoMimeService.prototype.setAssociations = function (associations) {
        var e_1, _a;
        monaco.mime.clearTextMimes(true);
        try {
            for (var associations_1 = __values(associations), associations_1_1 = associations_1.next(); !associations_1_1.done; associations_1_1 = associations_1.next()) {
                var association = associations_1_1.value;
                var mimetype = this.getMimeForMode(association.id) || "text/x-" + association.id;
                monaco.mime.registerTextMime({ id: association.id, mime: mimetype, filepattern: association.filepattern, userConfigured: true }, false);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (associations_1_1 && !associations_1_1.done && (_a = associations_1.return)) _a.call(associations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MonacoMimeService.prototype.getMimeForMode = function (langId) {
        var e_2, _a;
        try {
            for (var _b = __values(monaco.languages.getLanguages()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var language = _c.value;
                if (language.id === langId && language.mimetypes) {
                    return language.mimetypes[0];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
    };
    MonacoMimeService = __decorate([
        inversify_1.injectable()
    ], MonacoMimeService);
    return MonacoMimeService;
}(mime_service_1.MimeService));
exports.MonacoMimeService = MonacoMimeService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var SymbolKind = monaco.languages.SymbolKind;
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var DocumentSymbolProviderRegistry = monaco.modes.DocumentSymbolProviderRegistry;
var CancellationTokenSource = monaco.CancellationTokenSource;
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var outline_view_service_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-service */ "../node_modules/@theia/outline-view/lib/browser/outline-view-service.js");
var outline_view_widget_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-widget */ "../node_modules/@theia/outline-view/lib/browser/outline-view-widget.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
var MonacoOutlineContribution = /** @class */ (function () {
    function MonacoOutlineContribution() {
        this.toDisposeOnClose = new core_1.DisposableCollection();
        this.toDisposeOnEditor = new core_1.DisposableCollection();
        this.canUpdateOutline = true;
        this.tokenSource = new CancellationTokenSource();
    }
    MonacoOutlineContribution.prototype.onStart = function (app) {
        var _this = this;
        this.outlineViewService.onDidChangeOpenState(function (open) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (open) {
                    this.toDisposeOnClose.push(this.toDisposeOnEditor);
                    this.toDisposeOnClose.push(DocumentSymbolProviderRegistry.onDidChange(debounce(function () { return _this.updateOutline(); })));
                    this.toDisposeOnClose.push(this.editorManager.onCurrentEditorChanged(debounce(function () { return _this.handleCurrentEditorChanged(); }, 50)));
                    this.handleCurrentEditorChanged();
                }
                else {
                    this.toDisposeOnClose.dispose();
                }
                return [2 /*return*/];
            });
        }); });
        this.outlineViewService.onDidSelect(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(MonacoOutlineSymbolInformationNode.is(node) && node.parent)) return [3 /*break*/, 2];
                        options = {
                            mode: 'reveal',
                            selection: node.range
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        this.outlineViewService.onDidOpen(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!MonacoOutlineSymbolInformationNode.is(node)) return [3 /*break*/, 2];
                        options = {
                            selection: {
                                start: node.range.start
                            }
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    MonacoOutlineContribution.prototype.selectInEditor = function (node, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Avoid cyclic updates: Outline -> Editor -> Outline.
                        this.canUpdateOutline = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.editorManager.open(node.uri, options)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.canUpdateOutline = true;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.handleCurrentEditorChanged = function () {
        var _this = this;
        this.toDisposeOnEditor.dispose();
        if (this.toDisposeOnClose.disposed) {
            return;
        }
        this.toDisposeOnClose.push(this.toDisposeOnEditor);
        this.toDisposeOnEditor.push(core_1.Disposable.create(function () { return _this.roots = undefined; }));
        var editor = this.editorManager.currentEditor;
        if (editor) {
            var model = monaco_editor_1.MonacoEditor.get(editor).getControl().getModel();
            if (model) {
                this.toDisposeOnEditor.push(model.onDidChangeContent(function () {
                    _this.roots = undefined; // Invalidate the previously resolved roots.
                    _this.updateOutline();
                }));
            }
            this.toDisposeOnEditor.push(editor.editor.onSelectionChanged(function (selection) { return _this.updateOutline(selection); }));
        }
        this.updateOutline();
    };
    MonacoOutlineContribution.prototype.updateOutline = function (editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var token, editor, model, roots, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.canUpdateOutline) {
                            return [2 /*return*/];
                        }
                        this.tokenSource.cancel();
                        this.tokenSource = new CancellationTokenSource();
                        token = this.tokenSource.token;
                        editor = monaco_editor_1.MonacoEditor.get(this.editorManager.currentEditor);
                        model = editor && editor.getControl().getModel();
                        _a = model;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createRoots(model, token, editorSelection)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        roots = _a;
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.outlineViewService.publish(roots || []);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createRoots = function (model, token, editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, _b, resetSelection_1, providers, uri, providers_1, providers_1_1, provider, symbols, nodes, _c, e_1_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.roots && this.roots.length > 0)) return [3 /*break*/, 1];
                        resetSelection_1 = function (node) {
                            node.selected = false;
                            node.children.forEach(resetSelection_1);
                        };
                        this.roots.forEach(resetSelection_1);
                        return [3 /*break*/, 12];
                    case 1:
                        this.roots = [];
                        return [4 /*yield*/, DocumentSymbolProviderRegistry.all(model)];
                    case 2:
                        providers = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        uri = new uri_1.default(model.uri.toString());
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        providers_1 = __values(providers), providers_1_1 = providers_1.next();
                        _d.label = 4;
                    case 4:
                        if (!!providers_1_1.done) return [3 /*break*/, 9];
                        provider = providers_1_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, provider.provideDocumentSymbols(model, token)];
                    case 6:
                        symbols = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        nodes = this.createNodes(uri, symbols || []);
                        (_b = this.roots).push.apply(_b, __spread(nodes));
                        return [3 /*break*/, 8];
                    case 7:
                        _c = _d.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        providers_1_1 = providers_1.next();
                        return [3 /*break*/, 4];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        this.applySelection(this.roots, editorSelection);
                        return [2 /*return*/, this.roots];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createNodes = function (uri, symbols) {
        var _this = this;
        var e_2, _a, e_3, _b;
        var rangeBased = false;
        var ids = new Map();
        var roots = [];
        var nodesByName = symbols.sort(this.orderByPosition).reduce(function (result, symbol) {
            var node = _this.createNode(uri, symbol, ids);
            if (symbol.children) {
                MonacoOutlineSymbolInformationNode.insert(roots, node);
            }
            else {
                rangeBased = rangeBased || symbol.range.startLineNumber !== symbol.range.endLineNumber;
                var values = result.get(symbol.name) || [];
                values.push({ symbol: symbol, node: node });
                result.set(symbol.name, values);
            }
            return result;
        }, new Map());
        try {
            for (var _c = __values(nodesByName.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var nodes = _d.value;
                var _loop_1 = function (node, symbol) {
                    if (!symbol.containerName) {
                        MonacoOutlineSymbolInformationNode.insert(roots, node);
                    }
                    else {
                        var possibleParents = nodesByName.get(symbol.containerName);
                        if (possibleParents) {
                            var parent_1 = possibleParents.find(function (possibleParent) { return _this.parentContains(symbol, possibleParent.symbol, rangeBased); });
                            if (parent_1) {
                                node.parent = parent_1.node;
                                MonacoOutlineSymbolInformationNode.insert(parent_1.node.children, node);
                            }
                        }
                    }
                };
                try {
                    for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var _e = nodes_1_1.value, node = _e.node, symbol = _e.symbol;
                        _loop_1(node, symbol);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_b = nodes_1.return)) _b.call(nodes_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!roots.length) {
            var nodes = nodesByName.values().next().value;
            if (nodes && !nodes[0].node.parent) {
                return [nodes[0].node];
            }
            return [];
        }
        return roots;
    };
    /**
     * Sets the selection on the sub-trees based on the optional editor selection.
     * Select the narrowest node that is strictly contains the editor selection.
     */
    MonacoOutlineContribution.prototype.applySelection = function (roots, editorSelection) {
        var e_4, _a;
        if (editorSelection) {
            try {
                for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                    var root = roots_1_1.value;
                    if (this.parentContains(editorSelection, root.fullRange, true)) {
                        var children = root.children;
                        root.selected = !root.expanded || !this.applySelection(children, editorSelection);
                        return true;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return false;
    };
    /**
     * Returns `true` if `candidate` is strictly contained inside `parent`
     *
     * If the argument is a `DocumentSymbol`, then `getFullRange` will be used to retrieve the range of the underlying symbol.
     */
    MonacoOutlineContribution.prototype.parentContains = function (candidate, parent, rangeBased) {
        // TODO: move this code to the `monaco-languageclient`: https://github.com/eclipse-theia/theia/pull/2885#discussion_r217800446
        var candidateRange = browser_1.Range.is(candidate) ? candidate : this.getFullRange(candidate);
        var parentRange = browser_1.Range.is(parent) ? parent : this.getFullRange(parent);
        var sameStartLine = candidateRange.start.line === parentRange.start.line;
        var startColGreaterOrEqual = candidateRange.start.character >= parentRange.start.character;
        var startLineGreater = candidateRange.start.line > parentRange.start.line;
        var sameEndLine = candidateRange.end.line === parentRange.end.line;
        var endColSmallerOrEqual = candidateRange.end.character <= parentRange.end.character;
        var endLineSmaller = candidateRange.end.line < parentRange.end.line;
        return (((sameStartLine && startColGreaterOrEqual || startLineGreater) &&
            (sameEndLine && endColSmallerOrEqual || endLineSmaller)) || !rangeBased);
    };
    /**
     * `monaco` to LSP `Range` converter. Converts the `1-based` location indices into `0-based` ones.
     */
    MonacoOutlineContribution.prototype.asRange = function (range) {
        var startLineNumber = range.startLineNumber, startColumn = range.startColumn, endLineNumber = range.endLineNumber, endColumn = range.endColumn;
        return {
            start: {
                line: startLineNumber - 1,
                character: startColumn - 1
            },
            end: {
                line: endLineNumber - 1,
                character: endColumn - 1
            }
        };
    };
    /**
     * Returns with a range enclosing this symbol not including leading/trailing whitespace but everything else like comments.
     * This information is typically used to determine if the clients cursor is inside the symbol to reveal in the symbol in the UI.
     * This allows to obtain the range including the associated comments.
     *
     * See: [`DocumentSymbol#range`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getFullRange = function (documentSymbol) {
        return this.asRange(documentSymbol.range);
    };
    /**
     * The range that should be selected and revealed when this symbol is being picked, e.g the name of a function. Must be contained by the `getSelectionRange`.
     *
     * See: [`DocumentSymbol#selectionRange`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getNameRange = function (documentSymbol) {
        return this.asRange(documentSymbol.selectionRange);
    };
    MonacoOutlineContribution.prototype.createNode = function (uri, symbol, ids, parent) {
        var e_5, _a;
        var id = this.createId(symbol.name, ids);
        var children = [];
        var node = {
            children: children,
            id: id,
            iconClass: SymbolKind[symbol.kind].toString().toLowerCase(),
            name: this.getName(symbol),
            detail: this.getDetail(symbol),
            parent: parent,
            uri: uri,
            range: this.getNameRange(symbol),
            fullRange: this.getFullRange(symbol),
            selected: false,
            expanded: this.shouldExpand(symbol)
        };
        if (symbol.children) {
            try {
                for (var _b = __values(symbol.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    MonacoOutlineSymbolInformationNode.insert(children, this.createNode(uri, child, ids, node));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        return node;
    };
    MonacoOutlineContribution.prototype.getName = function (symbol) {
        return symbol.name;
    };
    MonacoOutlineContribution.prototype.getDetail = function (symbol) {
        return symbol.detail;
    };
    MonacoOutlineContribution.prototype.createId = function (name, ids) {
        var counter = ids.get(name);
        var index = typeof counter === 'number' ? counter + 1 : 0;
        ids.set(name, index);
        return name + '_' + index;
    };
    MonacoOutlineContribution.prototype.shouldExpand = function (symbol) {
        return [SymbolKind.Class,
            SymbolKind.Enum, SymbolKind.File,
            SymbolKind.Interface, SymbolKind.Module,
            SymbolKind.Namespace, SymbolKind.Object,
            SymbolKind.Package, SymbolKind.Struct].indexOf(symbol.kind) !== -1;
    };
    MonacoOutlineContribution.prototype.orderByPosition = function (symbol, symbol2) {
        var startLineComparison = symbol.range.startLineNumber - symbol2.range.startLineNumber;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startOffsetComparison = symbol.range.startColumn - symbol2.range.startColumn;
        if (startOffsetComparison !== 0) {
            return startOffsetComparison;
        }
        var endLineComparison = symbol.range.endLineNumber - symbol2.range.endLineNumber;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return symbol.range.endColumn - symbol2.range.endColumn;
    };
    __decorate([
        inversify_1.inject(outline_view_service_1.OutlineViewService),
        __metadata("design:type", outline_view_service_1.OutlineViewService)
    ], MonacoOutlineContribution.prototype, "outlineViewService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], MonacoOutlineContribution.prototype, "editorManager", void 0);
    MonacoOutlineContribution = __decorate([
        inversify_1.injectable()
    ], MonacoOutlineContribution);
    return MonacoOutlineContribution;
}());
exports.MonacoOutlineContribution = MonacoOutlineContribution;
var MonacoOutlineSymbolInformationNode;
(function (MonacoOutlineSymbolInformationNode) {
    function is(node) {
        return outline_view_widget_1.OutlineSymbolInformationNode.is(node) && 'uri' in node && 'range' in node;
    }
    MonacoOutlineSymbolInformationNode.is = is;
    function insert(nodes, node) {
        var index = nodes.findIndex(function (current) { return compare(node, current) < 0; });
        if (index === -1) {
            nodes.push(node);
        }
        else {
            nodes.splice(index, 0, node);
        }
    }
    MonacoOutlineSymbolInformationNode.insert = insert;
    function compare(node, node2) {
        var startLineComparison = node.range.start.line - node2.range.start.line;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startColumnComparison = node.range.start.character - node2.range.start.character;
        if (startColumnComparison !== 0) {
            return startColumnComparison;
        }
        var endLineComparison = node2.range.end.line - node.range.end.line;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return node2.range.end.character - node.range.end.character;
    }
    MonacoOutlineSymbolInformationNode.compare = compare;
})(MonacoOutlineSymbolInformationNode = exports.MonacoOutlineSymbolInformationNode || (exports.MonacoOutlineSymbolInformationNode = {}));


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 RedHat and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var tree_iterator_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-iterator */ "../node_modules/@theia/core/lib/browser/tree/tree-iterator.js");
var monaco_outline_contribution_1 = __webpack_require__(/*! ./monaco-outline-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js");
var MonacoOutlineDecorator = /** @class */ (function () {
    function MonacoOutlineDecorator() {
        this.id = 'theia-monaco-outline-decorator';
        this.emitter = new event_1.Emitter();
    }
    MonacoOutlineDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.collectDecorations(tree)];
            });
        });
    };
    Object.defineProperty(MonacoOutlineDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MonacoOutlineDecorator.prototype.collectDecorations = function (tree) {
        var e_1, _a;
        var result = new Map();
        if (tree.root === undefined) {
            return result;
        }
        try {
            for (var _b = __values(new tree_iterator_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var treeNode = _c.value;
                if (monaco_outline_contribution_1.MonacoOutlineSymbolInformationNode.is(treeNode) && treeNode.detail) {
                    result.set(treeNode.id, this.toDecoration(treeNode));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    MonacoOutlineDecorator.prototype.toDecoration = function (node) {
        var captionSuffixes = [{
                data: (node.detail || ''),
                fontData: {
                    color: 'var(--theia-ui-font-color2)',
                }
            }];
        return {
            captionSuffixes: captionSuffixes
        };
    };
    MonacoOutlineDecorator = __decorate([
        inversify_1.injectable()
    ], MonacoOutlineDecorator);
    return MonacoOutlineDecorator;
}());
exports.MonacoOutlineDecorator = MonacoOutlineDecorator;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var message_service_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/message-service-protocol */ "../node_modules/@theia/core/lib/common/message-service-protocol.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var monaco_keycode_map_1 = __webpack_require__(/*! ./monaco-keycode-map */ "../node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js");
var monaco_context_key_service_1 = __webpack_require__(/*! ./monaco-context-key-service */ "../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-open-service */ "../node_modules/@theia/core/lib/common/quick-open-service.js");
var MonacoQuickOpenService = /** @class */ (function (_super) {
    __extends(MonacoQuickOpenService, _super);
    function MonacoQuickOpenService() {
        var _this = _super.call(this) || this;
        var overlayWidgets = document.createElement('div');
        overlayWidgets.classList.add('quick-open-overlay');
        document.body.appendChild(overlayWidgets);
        var container = _this.container = document.createElement('quick-open-container');
        container.style.position = 'absolute';
        container.style.top = '0px';
        container.style.right = '50%';
        container.style.zIndex = '1000000';
        overlayWidgets.appendChild(container);
        return _this;
    }
    MonacoQuickOpenService.prototype.init = function () {
        this.inQuickOpenKey = this.contextKeyService.createKey('inQuickOpen', false);
    };
    MonacoQuickOpenService.prototype.open = function (model, options) {
        this.internalOpen(new MonacoQuickOpenControllerOptsImpl(model, this.keybindingRegistry, options));
    };
    MonacoQuickOpenService.prototype.hide = function (reason) {
        var hideReason;
        switch (reason) {
            case quick_open_service_1.QuickOpenHideReason.ELEMENT_SELECTED:
                hideReason = monaco.quickOpen.HideReason.ELEMENT_SELECTED;
                break;
            case quick_open_service_1.QuickOpenHideReason.FOCUS_LOST:
                hideReason = monaco.quickOpen.HideReason.FOCUS_LOST;
                break;
            case quick_open_service_1.QuickOpenHideReason.CANCELED:
                hideReason = monaco.quickOpen.HideReason.CANCELED;
                break;
        }
        this.widget.hide(hideReason);
    };
    MonacoQuickOpenService.prototype.showDecoration = function (type) {
        var decoration = monaco.MarkerSeverity.Info;
        if (type === message_service_protocol_1.MessageType.Warning) {
            decoration = monaco.MarkerSeverity.Warning;
        }
        else if (type === message_service_protocol_1.MessageType.Error) {
            decoration = monaco.MarkerSeverity.Error;
        }
        this.showInputDecoration(decoration);
    };
    MonacoQuickOpenService.prototype.hideDecoration = function () {
        this.clearInputDecoration();
    };
    MonacoQuickOpenService.prototype.refresh = function () {
        var inputBox = this.widget.inputBox;
        if (inputBox) {
            this.onType(inputBox.inputElement.value);
        }
    };
    MonacoQuickOpenService.prototype.internalOpen = function (opts) {
        if (this.widgetNode && this.widgetNode.offsetParent !== null) {
            this.hide();
        }
        this.opts = opts;
        var activeContext = window.document.activeElement || undefined;
        if (!activeContext || !this.container.contains(activeContext)) {
            this.previousActiveElement = activeContext;
            this.contextKeyService.activeContext = activeContext instanceof HTMLElement ? activeContext : undefined;
        }
        this.hideDecoration();
        this.widget.show(this.opts.prefix || '');
        this.setPlaceHolder(opts.inputAriaLabel);
        this.setPassword(opts.password ? true : false);
        this.setEnabled(opts.enabled);
        this.setValueSelected(opts.inputAriaLabel, opts.valueSelection);
        this.inQuickOpenKey.set(true);
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.tabIndex = 1;
        }
    };
    MonacoQuickOpenService.prototype.setValueSelected = function (value, selectLocation) {
        if (!value) {
            return;
        }
        var widget = this.widget;
        if (widget.inputBox) {
            if (!selectLocation) {
                widget.inputBox.inputElement.setSelectionRange(0, value.length);
                return;
            }
            if (selectLocation[0] === selectLocation[1]) {
                widget.inputBox.inputElement.setSelectionRange(selectLocation[0], selectLocation[0]);
                return;
            }
            widget.inputBox.inputElement.setSelectionRange(selectLocation[0], selectLocation[1]);
        }
    };
    MonacoQuickOpenService.prototype.setEnabled = function (isEnabled) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.readOnly = (isEnabled !== undefined) ? !isEnabled : false;
        }
    };
    MonacoQuickOpenService.prototype.setValue = function (value) {
        if (this.widget && this.widget.inputBox) {
            this.widget.inputBox.inputElement.value = (value !== undefined) ? value : '';
        }
    };
    MonacoQuickOpenService.prototype.setPlaceHolder = function (placeHolder) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.setPlaceHolder(placeHolder);
        }
    };
    MonacoQuickOpenService.prototype.setPassword = function (isPassword) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.type = isPassword ? 'password' : 'text';
        }
    };
    MonacoQuickOpenService.prototype.showInputDecoration = function (decoration) {
        var widget = this.widget;
        if (widget.inputBox) {
            var type = decoration === monaco.MarkerSeverity.Info ? 1 :
                decoration === monaco.MarkerSeverity.Warning ? 2 : 3;
            widget.inputBox.showMessage({ type: type, content: '' });
        }
    };
    MonacoQuickOpenService.prototype.clearInputDecoration = function () {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.hideMessage();
        }
    };
    Object.defineProperty(MonacoQuickOpenService.prototype, "widget", {
        get: function () {
            var _this = this;
            if (this._widget) {
                return this._widget;
            }
            this._widget = new monaco.quickOpen.QuickOpenWidget(this.container, {
                onOk: function () {
                    _this.previousActiveElement = undefined;
                    _this.contextKeyService.activeContext = undefined;
                    _this.onClose(false);
                },
                onCancel: function () {
                    if (_this.previousActiveElement instanceof HTMLElement) {
                        _this.previousActiveElement.focus();
                    }
                    _this.previousActiveElement = undefined;
                    _this.contextKeyService.activeContext = undefined;
                    _this.onClose(true);
                },
                onType: function (lookFor) { return _this.onType(lookFor || ''); },
                onFocusLost: function () {
                    if (_this.opts && _this.opts.ignoreFocusOut !== undefined) {
                        if (_this.opts.ignoreFocusOut === false) {
                            _this.onClose(true);
                        }
                        return _this.opts.ignoreFocusOut;
                    }
                    else {
                        return false;
                    }
                }
            }, {});
            this.attachQuickOpenStyler();
            var newWidget = this._widget.create();
            this._widgetNode = newWidget;
            return this._widget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenService.prototype, "widgetNode", {
        get: function () {
            return this._widgetNode;
        },
        enumerable: true,
        configurable: true
    });
    MonacoQuickOpenService.prototype.attachQuickOpenStyler = function () {
        var _this = this;
        if (!this._widget) {
            return;
        }
        var themeService = monaco.services.StaticServices.standaloneThemeService.get();
        var detach = monaco.theme.attachQuickOpenStyler(this._widget, themeService);
        var dispose = themeService.onThemeChange(function () {
            detach.dispose();
            _this.attachQuickOpenStyler();
            dispose.dispose();
        });
    };
    MonacoQuickOpenService.prototype.onClose = function (cancelled) {
        if (this.opts && this.opts.onClose) {
            this.opts.onClose(cancelled);
        }
        this.inQuickOpenKey.set(false);
    };
    MonacoQuickOpenService.prototype.onType = function (lookFor) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, m;
            var _this = this;
            return __generator(this, function (_a) {
                opts = this.opts;
                if (this.widget && opts) {
                    if (opts.onType) {
                        opts.onType(lookFor, function (model) {
                            return _this.widget.setInput(model, opts.getAutoFocus(lookFor), opts.inputAriaLabel);
                        });
                    }
                    else {
                        m = opts.getModel(lookFor);
                        this.widget.setInput(m, opts.getAutoFocus(lookFor), opts.inputAriaLabel);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(monaco_context_key_service_1.MonacoContextKeyService),
        __metadata("design:type", monaco_context_key_service_1.MonacoContextKeyService)
    ], MonacoQuickOpenService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], MonacoQuickOpenService.prototype, "keybindingRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoQuickOpenService.prototype, "init", null);
    MonacoQuickOpenService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonacoQuickOpenService);
    return MonacoQuickOpenService;
}(browser_1.QuickOpenService));
exports.MonacoQuickOpenService = MonacoQuickOpenService;
var MonacoQuickOpenControllerOptsImpl = /** @class */ (function () {
    function MonacoQuickOpenControllerOptsImpl(model, keybindingService, options) {
        this.model = model;
        this.keybindingService = keybindingService;
        this.model = model;
        this.options = browser_1.QuickOpenOptions.resolve(options);
        this.password = this.options.password;
    }
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "enabled", {
        get: function () {
            return this.options.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "prefix", {
        get: function () {
            return this.options.prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "ignoreFocusOut", {
        get: function () {
            return this.options.ignoreFocusOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "inputAriaLabel", {
        get: function () {
            return this.options.placeholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "valueSelection", {
        get: function () {
            return this.options.valueSelection || [-1, -1];
        },
        enumerable: true,
        configurable: true
    });
    MonacoQuickOpenControllerOptsImpl.prototype.onClose = function (cancelled) {
        this.options.onClose(cancelled);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.toOpenModel = function (lookFor, items, actionProvider) {
        var e_1, _a;
        var entries = [];
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                var entry = this.createEntry(item, lookFor);
                if (entry) {
                    entries.push(entry);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.options.fuzzySort) {
            entries.sort(function (a, b) { return monaco.quickOpen.compareEntries(a, b, lookFor); });
        }
        return new monaco.quickOpen.QuickOpenModel(entries, actionProvider ? new MonacoQuickOpenActionProvider(actionProvider) : undefined);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.getModel = function (lookFor) {
        throw new Error('getModel not supported!');
    };
    MonacoQuickOpenControllerOptsImpl.prototype.onType = function (lookFor, acceptor) {
        var _this = this;
        this.model.onType(lookFor, function (items, actionProvider) {
            var result = _this.toOpenModel(lookFor, items, actionProvider);
            acceptor(result);
        });
    };
    MonacoQuickOpenControllerOptsImpl.prototype.createEntry = function (item, lookFor) {
        if (this.options.skipPrefix) {
            lookFor = lookFor.substr(this.options.skipPrefix);
        }
        if (this.options.trimInput) {
            lookFor = lookFor.trim();
        }
        var _a = this.options, fuzzyMatchLabel = _a.fuzzyMatchLabel, fuzzyMatchDescription = _a.fuzzyMatchDescription, fuzzyMatchDetail = _a.fuzzyMatchDetail;
        var labelHighlights = fuzzyMatchLabel ? this.matchesFuzzy(lookFor, item.getLabel(), fuzzyMatchLabel) : item.getLabelHighlights();
        var descriptionHighlights = fuzzyMatchDescription ? this.matchesFuzzy(lookFor, item.getDescription(), fuzzyMatchDescription) : item.getDescriptionHighlights();
        var detailHighlights = fuzzyMatchDetail ? this.matchesFuzzy(lookFor, item.getDetail(), fuzzyMatchDetail) : item.getDetailHighlights();
        if ((lookFor && !labelHighlights && !descriptionHighlights && !detailHighlights)
            && !this.options.showItemsWithoutHighlight) {
            return undefined;
        }
        var entry = item instanceof browser_1.QuickOpenGroupItem
            ? new QuickOpenEntryGroup(item, this.keybindingService)
            : new QuickOpenEntry(item, this.keybindingService);
        entry.setHighlights(labelHighlights || [], descriptionHighlights, detailHighlights);
        return entry;
    };
    MonacoQuickOpenControllerOptsImpl.prototype.matchesFuzzy = function (lookFor, value, options) {
        if (!lookFor || !value) {
            return undefined;
        }
        var enableSeparateSubstringMatching = typeof options === 'object' && options.enableSeparateSubstringMatching;
        return monaco.filters.matchesFuzzy(lookFor, value, enableSeparateSubstringMatching);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.getAutoFocus = function (lookFor) {
        if (this.options.selectIndex) {
            var idx = this.options.selectIndex(lookFor);
            if (idx >= 0) {
                return {
                    autoFocusIndex: idx
                };
            }
        }
        return {
            autoFocusFirstEntry: true,
            autoFocusPrefixMatch: lookFor
        };
    };
    return MonacoQuickOpenControllerOptsImpl;
}());
exports.MonacoQuickOpenControllerOptsImpl = MonacoQuickOpenControllerOptsImpl;
var QuickOpenEntry = /** @class */ (function (_super) {
    __extends(QuickOpenEntry, _super);
    function QuickOpenEntry(item, keybindingService) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.keybindingService = keybindingService;
        return _this;
    }
    QuickOpenEntry.prototype.getLabel = function () {
        return this.item.getLabel();
    };
    QuickOpenEntry.prototype.getAriaLabel = function () {
        return this.item.getTooltip();
    };
    QuickOpenEntry.prototype.getDetail = function () {
        return this.item.getDetail();
    };
    QuickOpenEntry.prototype.getDescription = function () {
        return this.item.getDescription();
    };
    QuickOpenEntry.prototype.isHidden = function () {
        return _super.prototype.isHidden.call(this) || this.item.isHidden();
    };
    QuickOpenEntry.prototype.getResource = function () {
        var uri = this.item.getUri();
        return uri ? monaco.Uri.parse(uri.toString()) : undefined;
    };
    QuickOpenEntry.prototype.getIcon = function () {
        return this.item.getIconClass();
    };
    QuickOpenEntry.prototype.getKeybinding = function () {
        var keybinding = this.item.getKeybinding();
        if (!keybinding) {
            return undefined;
        }
        var keySequence;
        try {
            keySequence = this.keybindingService.resolveKeybinding(keybinding);
        }
        catch (error) {
            return undefined;
        }
        return new TheiaResolvedKeybinding(keySequence, this.keybindingService);
    };
    QuickOpenEntry.prototype.run = function (mode) {
        if (mode === 1) {
            return this.item.run(browser_1.QuickOpenMode.OPEN);
        }
        if (mode === 2) {
            return this.item.run(browser_1.QuickOpenMode.OPEN_IN_BACKGROUND);
        }
        if (mode === 0) {
            return this.item.run(browser_1.QuickOpenMode.PREVIEW);
        }
        return false;
    };
    return QuickOpenEntry;
}(monaco.quickOpen.QuickOpenEntry));
exports.QuickOpenEntry = QuickOpenEntry;
var QuickOpenEntryGroup = /** @class */ (function (_super) {
    __extends(QuickOpenEntryGroup, _super);
    function QuickOpenEntryGroup(item, keybindingService) {
        var _this = _super.call(this, new QuickOpenEntry(item, keybindingService)) || this;
        _this.item = item;
        _this.keybindingService = keybindingService;
        return _this;
    }
    QuickOpenEntryGroup.prototype.getGroupLabel = function () {
        return this.item.getGroupLabel() || '';
    };
    QuickOpenEntryGroup.prototype.showBorder = function () {
        return this.item.showBorder();
    };
    QuickOpenEntryGroup.prototype.getKeybinding = function () {
        var entry = this.getEntry();
        return entry ? entry.getKeybinding() : _super.prototype.getKeybinding.call(this);
    };
    return QuickOpenEntryGroup;
}(monaco.quickOpen.QuickOpenEntryGroup));
exports.QuickOpenEntryGroup = QuickOpenEntryGroup;
var MonacoQuickOpenAction = /** @class */ (function () {
    function MonacoQuickOpenAction(action) {
        this.action = action;
    }
    Object.defineProperty(MonacoQuickOpenAction.prototype, "id", {
        get: function () {
            return this.action.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "label", {
        get: function () {
            return this.action.label || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "tooltip", {
        get: function () {
            return this.action.tooltip || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "class", {
        get: function () {
            return this.action.class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "enabled", {
        get: function () {
            return this.action.enabled || true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "checked", {
        get: function () {
            return this.action.checked || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "radio", {
        get: function () {
            return this.action.radio || false;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    MonacoQuickOpenAction.prototype.run = function (entry) {
        return this.action.run(entry.item);
    };
    MonacoQuickOpenAction.prototype.dispose = function () {
        this.action.dispose();
    };
    return MonacoQuickOpenAction;
}());
exports.MonacoQuickOpenAction = MonacoQuickOpenAction;
var MonacoQuickOpenActionProvider = /** @class */ (function () {
    function MonacoQuickOpenActionProvider(provider) {
        this.provider = provider;
    }
    // tslint:disable-next-line:no-any
    MonacoQuickOpenActionProvider.prototype.hasActions = function (element, entry) {
        return this.provider.hasActions(entry.item);
    };
    // tslint:disable-next-line:no-any
    MonacoQuickOpenActionProvider.prototype.getActions = function (element, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var actions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getActions(entry.item)];
                    case 1:
                        actions = _a.sent();
                        return [2 /*return*/, actions.map(function (action) { return new MonacoQuickOpenAction(action); })];
                }
            });
        });
    };
    MonacoQuickOpenActionProvider.prototype.hasSecondaryActions = function () {
        return false;
    };
    MonacoQuickOpenActionProvider.prototype.getSecondaryActions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, []];
            });
        });
    };
    MonacoQuickOpenActionProvider.prototype.getActionItem = function () {
        return undefined;
    };
    return MonacoQuickOpenActionProvider;
}());
exports.MonacoQuickOpenActionProvider = MonacoQuickOpenActionProvider;
var TheiaResolvedKeybinding = /** @class */ (function (_super) {
    __extends(TheiaResolvedKeybinding, _super);
    function TheiaResolvedKeybinding(keySequence, keybindingService) {
        var _this = _super.call(this) || this;
        _this.keySequence = keySequence;
        _this.parts = keySequence.map(function (keyCode) {
            // tslint:disable-next-line:no-null-keyword
            var keyLabel = keyCode.key ? keybindingService.acceleratorForKey(keyCode.key) : null;
            var keyAriaLabel = keyLabel;
            return new monaco.keybindings.ResolvedKeybindingPart(keyCode.ctrl, keyCode.shift, keyCode.alt, keyCode.meta, keyLabel, keyAriaLabel);
        });
        return _this;
    }
    TheiaResolvedKeybinding.prototype.getLabel = function () {
        return monaco.keybindings.UILabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    TheiaResolvedKeybinding.prototype.getAriaLabel = function () {
        return monaco.keybindings.UILabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyAriaLabel; });
    };
    TheiaResolvedKeybinding.prototype.getElectronAccelerator = function () {
        if (this.isChord) {
            // Electron cannot handle chords
            // tslint:disable-next-line:no-null-keyword
            return null;
        }
        return monaco.keybindings.ElectronAcceleratorLabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    TheiaResolvedKeybinding.prototype.getUserSettingsLabel = function () {
        return monaco.keybindings.UserSettingsLabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    TheiaResolvedKeybinding.prototype.isWYSIWYG = function () {
        return true;
    };
    TheiaResolvedKeybinding.prototype.isChord = function () {
        return this.parts.length > 1;
    };
    TheiaResolvedKeybinding.prototype.getDispatchParts = function () {
        var _this = this;
        return this.keySequence.map(function (keyCode) { return monaco.keybindings.USLayoutResolvedKeybinding.getDispatchStr(_this.toKeybinding(keyCode)); });
    };
    TheiaResolvedKeybinding.prototype.toKeybinding = function (keyCode) {
        return new monaco.keybindings.SimpleKeybinding(keyCode.ctrl, keyCode.shift, keyCode.alt, keyCode.meta, monaco_keycode_map_1.KEY_CODE_MAP[keyCode.key.keyCode]);
    };
    TheiaResolvedKeybinding.prototype.getParts = function () {
        return this.parts;
    };
    return TheiaResolvedKeybinding;
}(monaco.keybindings.ResolvedKeybinding));


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "../node_modules/@theia/core/lib/common/logger.js");
var editor_manager_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-manager */ "../node_modules/@theia/editor/lib/browser/editor-manager.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service */ "../node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
/**
 * A helper class for grouping information about a decoration type that has
 * been registered with the editor service.
 */
var DecorationTypeInfo = /** @class */ (function () {
    function DecorationTypeInfo() {
    }
    return DecorationTypeInfo;
}());
var MonacoSemanticHighlightingService = /** @class */ (function (_super) {
    __extends(MonacoSemanticHighlightingService, _super);
    function MonacoSemanticHighlightingService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decorations = new Map();
        _this.toDisposeOnEditorClose = new Map();
        _this.toDisposeOnUnregister = new Map();
        // laguage id -> (scope index -> decoration type)
        _this.decorationTypes = new Map();
        _this.lastDecorationTypeId = 0;
        return _this;
    }
    MonacoSemanticHighlightingService.prototype.nextDecorationTypeKey = function () {
        return 'MonacoSemanticHighlighting' + (++this.lastDecorationTypeId);
    };
    MonacoSemanticHighlightingService.prototype.registerDecorationTypesForLanguage = function (languageId) {
        var scopes = this.scopes.get(languageId);
        if (scopes) {
            var decorationTypes = new Map();
            for (var index = 0; index < scopes.length; index++) {
                var modelDecoration = this.toDecorationType(scopes[index]);
                if (modelDecoration) {
                    decorationTypes.set(index, modelDecoration);
                }
            }
            this.decorationTypes.set(languageId, decorationTypes);
        }
    };
    MonacoSemanticHighlightingService.prototype.removeDecorationTypesForLanguage = function (languageId) {
        var e_1, _a;
        var decorationTypes = this.decorationTypes.get(languageId);
        if (!decorationTypes) {
            this.logger.warn("No decoration types are registered for language: " + languageId);
            return;
        }
        try {
            for (var decorationTypes_1 = __values(decorationTypes), decorationTypes_1_1 = decorationTypes_1.next(); !decorationTypes_1_1.done; decorationTypes_1_1 = decorationTypes_1.next()) {
                var _b = __read(decorationTypes_1_1.value, 2), decorationType = _b[1];
                this.monacoEditorService.removeDecorationType(decorationType.key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (decorationTypes_1_1 && !decorationTypes_1_1.done && (_a = decorationTypes_1.return)) _a.call(decorationTypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MonacoSemanticHighlightingService.prototype.refreshDecorationTypesForLanguage = function (languageId) {
        var e_2, _a;
        var decorationTypes = this.decorationTypes.get(languageId);
        var scopes = this.scopes.get(languageId);
        if (!decorationTypes || !scopes) {
            this.logger.warn("No decoration types are registered for language: " + languageId);
            return;
        }
        try {
            for (var decorationTypes_2 = __values(decorationTypes), decorationTypes_2_1 = decorationTypes_2.next(); !decorationTypes_2_1.done; decorationTypes_2_1 = decorationTypes_2.next()) {
                var _b = __read(decorationTypes_2_1.value, 2), scope = _b[0], decorationType = _b[1];
                // Pass in the existing key to associate the new color with the same
                // decoration type, thereby reusing it.
                var newDecorationType = this.toDecorationType(scopes[scope], decorationType.key);
                if (newDecorationType) {
                    decorationType.options = newDecorationType.options;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (decorationTypes_2_1 && !decorationTypes_2_1.done && (_a = decorationTypes_2.return)) _a.call(decorationTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoSemanticHighlightingService.prototype.register = function (languageId, scopes) {
        var _this = this;
        var result = _super.prototype.register.call(this, languageId, scopes);
        this.registerDecorationTypesForLanguage(languageId);
        var disposable = this.themeService().onThemeChange(function () {
            // When the theme changes, refresh the decoration types to reflect
            // the colors for the old theme.
            // Note that we do not remove the old decoration types and add new ones.
            // The new ones would have different class names, and we'd have to
            // update all open editors to use the new class names.
            _this.refreshDecorationTypesForLanguage(languageId);
        });
        this.toDisposeOnUnregister.set(languageId, disposable);
        return result;
    };
    MonacoSemanticHighlightingService.prototype.unregister = function (languageId) {
        _super.prototype.unregister.call(this, languageId);
        this.removeDecorationTypesForLanguage(languageId);
        var disposable = this.toDisposeOnUnregister.get(languageId);
        if (disposable) {
            disposable.dispose();
        }
        this.decorationTypes.delete(languageId);
        this.toDisposeOnUnregister.delete(languageId);
    };
    MonacoSemanticHighlightingService.prototype.toDecorationType = function (scopes, reuseKey) {
        var e_3, _a;
        var key = reuseKey || this.nextDecorationTypeKey();
        try {
            // TODO: why for-of? How to pick the right scope? Is it fine to get the first element (with the narrowest scope)?
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                var tokenTheme = this.tokenTheme();
                var metadata = tokenTheme.match(undefined, scope);
                // Don't use the inlineClassName from the TokenMetadata, because this
                // will conflict with styles used for TM scopes
                // (https://github.com/Microsoft/monaco-editor/issues/1070).
                // Instead, get the token color, use registerDecorationType() to cause
                // monaco to allocate a new inlineClassName for that color, and use
                // resolveDecorationOptions() to get an IModelDecorationOptions
                // containing that inlineClassName.
                var colorIndex = monaco.modes.TokenMetadata.getForeground(metadata);
                var color = tokenTheme.getColorMap()[colorIndex];
                // If we wanted to support other decoration options such as font style,
                // we could include them here.
                var options = {
                    color: color.toString(),
                };
                this.monacoEditorService.registerDecorationType(key, options);
                return {
                    key: key,
                    options: this.monacoEditorService.resolveDecorationOptions(key, false)
                };
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return undefined;
    };
    MonacoSemanticHighlightingService.prototype.decorate = function (languageId, uri, ranges) {
        return __awaiter(this, void 0, void 0, function () {
            var editor, key, newDecorations, oldDecorations, newState, decorationIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editor(uri)];
                    case 1:
                        editor = _a.sent();
                        if (!editor) {
                            return [2 /*return*/];
                        }
                        key = uri.toString();
                        if (!this.toDisposeOnEditorClose.has(key)) {
                            this.toDisposeOnEditorClose.set(key, new disposable_1.DisposableCollection(editor.onDispose(function () { return _this.deleteDecorations(key, editor); })));
                        }
                        newDecorations = ranges.map(function (range) { return _this.toDecoration(languageId, range); });
                        oldDecorations = this.oldDecorations(key, editor, ranges);
                        newState = editor.deltaDecorations({
                            newDecorations: newDecorations,
                            oldDecorations: oldDecorations
                        });
                        decorationIds = this.decorationIds(key);
                        newState.forEach(function (id) { return decorationIds.add(id); });
                        this.decorations.set(key, decorationIds);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoSemanticHighlightingService.prototype.dispose = function () {
        Array.from(this.toDisposeOnEditorClose.values()).forEach(function (disposable) { return disposable.dispose(); });
    };
    MonacoSemanticHighlightingService.prototype.decorationIds = function (uri) {
        return this.decorations.get(typeof uri === 'string' ? uri : uri.toString()) || new Set();
    };
    MonacoSemanticHighlightingService.prototype.editor = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(typeof uri === 'string' ? new uri_1.default(uri) : uri)];
                    case 1:
                        editorWidget = _a.sent();
                        if (!!editorWidget && editorWidget.editor instanceof monaco_editor_1.MonacoEditor) {
                            return [2 /*return*/, editorWidget.editor];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoSemanticHighlightingService.prototype.model = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editor(uri)];
                    case 1:
                        editor = _a.sent();
                        if (editor) {
                            return [2 /*return*/, editor.getControl().getModel() || undefined];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Returns all the semantic highlighting decoration IDs that are affected by any of the range arguments.
     */
    MonacoSemanticHighlightingService.prototype.oldDecorations = function (uri, editor, ranges) {
        var ids = this.decorationIds(uri);
        var affectedLines = Array.from(new Set(ranges.map(function (r) { return [r.start.line, r.end.line]; }).reduce(function (prev, curr) { return prev.concat(curr); }, [])));
        return affectedLines
            .map(function (line) { return editor.getLinesDecorations(line, line); })
            .reduce(function (prev, curr) { return prev.concat(curr); }, [])
            .map(function (decoration) { return decoration.id; })
            .filter(function (id) { return ids.has(id); });
    };
    MonacoSemanticHighlightingService.prototype.deleteDecorations = function (uri, editor) {
        var ids = this.decorations.get(uri);
        if (ids) {
            var oldDecorations = Array.from(ids);
            editor.deltaDecorations({
                newDecorations: [],
                oldDecorations: oldDecorations
            });
            this.decorations.delete(uri);
        }
        var disposable = this.toDisposeOnEditorClose.get(uri);
        if (disposable) {
            disposable.dispose();
        }
        this.toDisposeOnEditorClose.delete(uri);
    };
    MonacoSemanticHighlightingService.prototype.toDecoration = function (languageId, range) {
        var start = range.start, end = range.end;
        var options = this.toOptions(languageId, range.scope);
        return {
            range: semantic_highlighting_service_1.Range.create(start, end),
            options: options
        };
    };
    MonacoSemanticHighlightingService.prototype.toOptions = function (languageId, scope) {
        if (scope !== undefined) {
            var decorationTypes = this.decorationTypes.get(languageId);
            if (decorationTypes) {
                var decoration = decorationTypes.get(scope);
                if (decoration) {
                    return {
                        inlineClassName: decoration.options.inlineClassName || undefined
                    };
                }
            }
        }
        return {};
    };
    MonacoSemanticHighlightingService.prototype.themeService = function () {
        return monaco.services.StaticServices.standaloneThemeService.get();
    };
    MonacoSemanticHighlightingService.prototype.tokenTheme = function () {
        return this.themeService().getTheme().tokenTheme;
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], MonacoSemanticHighlightingService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], MonacoSemanticHighlightingService.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_service_1.MonacoEditorService),
        __metadata("design:type", monaco_editor_service_1.MonacoEditorService)
    ], MonacoSemanticHighlightingService.prototype, "monacoEditorService", void 0);
    MonacoSemanticHighlightingService = __decorate([
        inversify_1.injectable()
    ], MonacoSemanticHighlightingService);
    return MonacoSemanticHighlightingService;
}(semantic_highlighting_service_1.SemanticHighlightingService));
exports.MonacoSemanticHighlightingService = MonacoSemanticHighlightingService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "../node_modules/jsonc-parser/lib/esm/main.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var MonacoSnippetSuggestProvider = /** @class */ (function () {
    function MonacoSnippetSuggestProvider() {
        this.snippets = new Map();
        this.pendingSnippets = new Map();
    }
    MonacoSnippetSuggestProvider_1 = MonacoSnippetSuggestProvider;
    MonacoSnippetSuggestProvider.prototype.provideCompletionItems = function (model, position, context) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, languageId, snippetsForLanguage, suggestions, pos, lineOffsets, linePrefixLow, endsInWhitespace, word, availableSnippets, _loop_1, lineOffsets_1, lineOffsets_1_1, start;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // copied and modified from https://github.com/microsoft/vscode/blob/master/src/vs/workbench/contrib/snippets/browser/snippetCompletionProvider.ts
                        if (position.column >= MonacoSnippetSuggestProvider_1._maxPrefix) {
                            return [2 /*return*/, undefined];
                        }
                        if (context.triggerKind === browser_1.CompletionTriggerKind.TriggerCharacter && context.triggerCharacter === ' ') {
                            // no snippets when suggestions have been triggered by space
                            return [2 /*return*/, undefined];
                        }
                        languageId = model.getModeId();
                        return [4 /*yield*/, this.loadSnippets(languageId)];
                    case 1:
                        _b.sent();
                        snippetsForLanguage = this.snippets.get(languageId) || [];
                        pos = { lineNumber: position.lineNumber, column: 1 };
                        lineOffsets = [];
                        linePrefixLow = model.getLineContent(position.lineNumber).substr(0, position.column - 1).toLowerCase();
                        endsInWhitespace = linePrefixLow.match(/\s$/);
                        while (pos.column < position.column) {
                            word = model.getWordAtPosition(pos);
                            if (word) {
                                // at a word
                                lineOffsets.push(word.startColumn - 1);
                                pos.column = word.endColumn + 1;
                                if (word.endColumn - 1 < linePrefixLow.length && !/\s/.test(linePrefixLow[word.endColumn - 1])) {
                                    lineOffsets.push(word.endColumn - 1);
                                }
                            }
                            else if (!/\s/.test(linePrefixLow[pos.column - 1])) {
                                // at a none-whitespace character
                                lineOffsets.push(pos.column - 1);
                                pos.column += 1;
                            }
                            else {
                                // always advance!
                                pos.column += 1;
                            }
                        }
                        availableSnippets = new Set();
                        snippetsForLanguage.forEach(availableSnippets.add, availableSnippets);
                        suggestions = [];
                        _loop_1 = function (start) {
                            availableSnippets.forEach(function (snippet) {
                                if (_this.isPatternInWord(linePrefixLow, start, linePrefixLow.length, snippet.prefix.toLowerCase(), 0, snippet.prefix.length)) {
                                    suggestions.push(new MonacoSnippetSuggestion(snippet, monaco.Range.fromPositions(position.delta(0, -(linePrefixLow.length - start)), position)));
                                    availableSnippets.delete(snippet);
                                }
                            });
                        };
                        try {
                            for (lineOffsets_1 = __values(lineOffsets), lineOffsets_1_1 = lineOffsets_1.next(); !lineOffsets_1_1.done; lineOffsets_1_1 = lineOffsets_1.next()) {
                                start = lineOffsets_1_1.value;
                                _loop_1(start);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (lineOffsets_1_1 && !lineOffsets_1_1.done && (_a = lineOffsets_1.return)) _a.call(lineOffsets_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (endsInWhitespace || lineOffsets.length === 0) {
                            // add remaing snippets when the current prefix ends in whitespace or when no
                            // interesting positions have been found
                            availableSnippets.forEach(function (snippet) {
                                suggestions.push(new MonacoSnippetSuggestion(snippet, monaco.Range.fromPositions(position)));
                            });
                        }
                        // dismbiguate suggestions with same labels
                        suggestions.sort(MonacoSnippetSuggestion.compareByLabel);
                        return [2 /*return*/, { suggestions: suggestions }];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.resolveCompletionItem = function (textModel, position, item) {
        return item instanceof MonacoSnippetSuggestion ? item.resolve() : item;
    };
    MonacoSnippetSuggestProvider.prototype.loadSnippets = function (scope) {
        return __awaiter(this, void 0, void 0, function () {
            var pending;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pending = [];
                        pending.push.apply(pending, __spread((this.pendingSnippets.get(scope) || [])));
                        pending.push.apply(pending, __spread((this.pendingSnippets.get('*') || [])));
                        if (!pending.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(pending)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.fromURI = function (uri, options) {
        var e_2, _a;
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        var pending = this.loadURI(uri, options, toDispose);
        var language = options.language;
        var scopes = Array.isArray(language) ? language : !!language ? [language] : ['*'];
        var _loop_2 = function (scope) {
            var pendingSnippets = this_1.pendingSnippets.get(scope) || [];
            pendingSnippets.push(pending);
            this_1.pendingSnippets.set(scope, pendingSnippets);
            toDispose.push(disposable_1.Disposable.create(function () {
                var index = pendingSnippets.indexOf(pending);
                if (index !== -1) {
                    pendingSnippets.splice(index, 1);
                }
            }));
        };
        var this_1 = this;
        try {
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                _loop_2(scope);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return toDispose;
    };
    /**
     * should NOT throw to prevent load erros on suggest
     */
    MonacoSnippetSuggestProvider.prototype.loadURI = function (uri, options, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var content, snippets, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.filesystem.resolveContent(uri.toString(), { encoding: 'utf-8' })];
                    case 1:
                        content = (_a.sent()).content;
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        snippets = content && jsoncparser.parse(content, undefined, { disallowComments: false });
                        toDispose.push(this.fromJSON(snippets, options));
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        if (!common_1.FileSystemError.FileNotFound.is(e_3) && !common_1.FileSystemError.FileIsDirectory.is(e_3)) {
                            console.error(e_3);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.fromJSON = function (snippets, _a) {
        var _this = this;
        var language = _a.language, source = _a.source;
        var toDispose = new disposable_1.DisposableCollection();
        this.parseSnippets(snippets, function (name, snippet) {
            var e_4, _a;
            var prefix = snippet.prefix, body = snippet.body, description = snippet.description;
            if (Array.isArray(body)) {
                body = body.join('\n');
            }
            if (typeof prefix !== 'string' || typeof body !== 'string') {
                return;
            }
            var scopes = [];
            if (language) {
                if (Array.isArray(language)) {
                    scopes.push.apply(scopes, __spread(language));
                }
                else {
                    scopes.push(language);
                }
            }
            else if (typeof snippet.scope === 'string') {
                try {
                    for (var _b = __values(snippet.scope.split(',')), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var rawScope = _c.value;
                        var scope = rawScope.trim();
                        if (scope) {
                            scopes.push(scope);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            toDispose.push(_this.push({
                scopes: scopes,
                name: name,
                prefix: prefix,
                description: description,
                body: body,
                source: source
            }));
        });
        return toDispose;
    };
    MonacoSnippetSuggestProvider.prototype.parseSnippets = function (snippets, accept) {
        if (typeof snippets === 'object') {
            // tslint:disable-next-line:forin
            for (var name_1 in snippets) {
                var scopeOrTemplate = snippets[name_1];
                if (JsonSerializedSnippet.is(scopeOrTemplate)) {
                    accept(name_1, scopeOrTemplate);
                }
                else {
                    this.parseSnippets(scopeOrTemplate, accept);
                }
            }
        }
    };
    MonacoSnippetSuggestProvider.prototype.push = function () {
        var snippets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            snippets[_i] = arguments[_i];
        }
        var e_5, _a;
        var toDispose = new disposable_1.DisposableCollection();
        var _loop_3 = function (snippet) {
            var e_6, _a;
            var _loop_4 = function (scope) {
                var languageSnippets = this_2.snippets.get(scope) || [];
                languageSnippets.push(snippet);
                this_2.snippets.set(scope, languageSnippets);
                toDispose.push(disposable_1.Disposable.create(function () {
                    var index = languageSnippets.indexOf(snippet);
                    if (index !== -1) {
                        languageSnippets.splice(index, 1);
                    }
                }));
            };
            try {
                for (var _b = __values(snippet.scopes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var scope = _c.value;
                    _loop_4(scope);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        var this_2 = this;
        try {
            for (var snippets_1 = __values(snippets), snippets_1_1 = snippets_1.next(); !snippets_1_1.done; snippets_1_1 = snippets_1.next()) {
                var snippet = snippets_1_1.value;
                _loop_3(snippet);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (snippets_1_1 && !snippets_1_1.done && (_a = snippets_1.return)) _a.call(snippets_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return toDispose;
    };
    MonacoSnippetSuggestProvider.prototype.isPatternInWord = function (patternLow, patternPos, patternLen, wordLow, wordPos, wordLen) {
        while (patternPos < patternLen && wordPos < wordLen) {
            if (patternLow[patternPos] === wordLow[wordPos]) {
                patternPos += 1;
            }
            wordPos += 1;
        }
        return patternPos === patternLen; // pattern must be exhausted
    };
    var MonacoSnippetSuggestProvider_1;
    MonacoSnippetSuggestProvider._maxPrefix = 10000;
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], MonacoSnippetSuggestProvider.prototype, "filesystem", void 0);
    MonacoSnippetSuggestProvider = MonacoSnippetSuggestProvider_1 = __decorate([
        inversify_1.injectable()
    ], MonacoSnippetSuggestProvider);
    return MonacoSnippetSuggestProvider;
}());
exports.MonacoSnippetSuggestProvider = MonacoSnippetSuggestProvider;
var JsonSerializedSnippet;
(function (JsonSerializedSnippet) {
    function is(obj) {
        return typeof obj === 'object' && 'body' in obj && 'prefix' in obj;
    }
    JsonSerializedSnippet.is = is;
})(JsonSerializedSnippet = exports.JsonSerializedSnippet || (exports.JsonSerializedSnippet = {}));
var MonacoSnippetSuggestion = /** @class */ (function () {
    function MonacoSnippetSuggestion(snippet, range) {
        this.snippet = snippet;
        this.range = range;
        this.noAutoAccept = true;
        this.kind = monaco.languages.CompletionItemKind.Snippet;
        this.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
        this.resolved = false;
        this.label = snippet.prefix;
        this.detail = (snippet.description || snippet.name) + " (" + snippet.source + ")";
        this.insertText = snippet.body;
        this.sortText = "z-" + snippet.prefix;
        this.range = range;
    }
    MonacoSnippetSuggestion.prototype.resolve = function () {
        if (!this.resolved) {
            var codeSnippet = new monaco.snippetParser.SnippetParser().parse(this.snippet.body).toString();
            this.documentation = { value: '```\n' + codeSnippet + '```' };
            this.resolved = true;
        }
        return this;
    };
    MonacoSnippetSuggestion.compareByLabel = function (a, b) {
        return a.label > b.label ? 1 : a.label < b.label ? -1 : 0;
    };
    return MonacoSnippetSuggestion;
}());
exports.MonacoSnippetSuggestion = MonacoSnippetSuggestion;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var MonacoStatusBarContribution = /** @class */ (function () {
    function MonacoStatusBarContribution(editorManager, statusBar) {
        this.editorManager = editorManager;
        this.statusBar = statusBar;
        this.toDispose = new core_1.DisposableCollection();
    }
    MonacoStatusBarContribution.prototype.onStart = function (app) {
        var _this = this;
        this.updateStatusBar();
        this.editorManager.onCurrentEditorChanged(function () { return _this.updateStatusBar(); });
    };
    MonacoStatusBarContribution.prototype.updateStatusBar = function () {
        var _this = this;
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            this.setConfigTabSizeWidget();
            this.setLineEndingWidget();
            this.toDispose.dispose();
            this.toDispose.push(editorModel.onDidChangeOptions(function () {
                _this.setConfigTabSizeWidget();
                _this.setLineEndingWidget();
            }));
            var previous_1 = editorModel.getEOL();
            this.toDispose.push(editorModel.onDidChangeContent(function (e) {
                if (previous_1 !== e.eol) {
                    previous_1 = e.eol;
                    _this.setLineEndingWidget();
                }
            }));
        }
        else {
            this.removeConfigTabSizeWidget();
            this.removeLineEndingWidget();
        }
    };
    MonacoStatusBarContribution.prototype.setConfigTabSizeWidget = function () {
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            var modelOptions = editorModel.getOptions();
            var tabSize = modelOptions.tabSize;
            var useSpaceOrTab = modelOptions.insertSpaces ? 'Spaces' : 'Tab Size';
            this.statusBar.setElement('editor-status-tabbing-config', {
                text: useSpaceOrTab + ": " + tabSize,
                alignment: browser_1.StatusBarAlignment.RIGHT,
                priority: 10,
                command: browser_2.EditorCommands.CONFIG_INDENTATION.id
            });
        }
    };
    MonacoStatusBarContribution.prototype.removeConfigTabSizeWidget = function () {
        this.statusBar.removeElement('editor-status-tabbing-config');
    };
    MonacoStatusBarContribution.prototype.setLineEndingWidget = function () {
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            var eol = editorModel.getEOL();
            var text = eol === '\n' ? 'LF' : 'CRLF';
            this.statusBar.setElement('editor-status-eol', {
                text: "" + text,
                alignment: browser_1.StatusBarAlignment.RIGHT,
                priority: 11,
                command: browser_2.EditorCommands.CONFIG_EOL.id
            });
        }
    };
    MonacoStatusBarContribution.prototype.removeLineEndingWidget = function () {
        this.statusBar.removeElement('editor-status-eol');
    };
    MonacoStatusBarContribution.prototype.getModel = function (editor) {
        var monacoEditor = monaco_editor_1.MonacoEditor.get(editor);
        return monacoEditor && monacoEditor.getControl().getModel() || undefined;
    };
    MonacoStatusBarContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.EditorManager)),
        __param(1, inversify_1.inject(browser_1.StatusBar)),
        __metadata("design:paramtypes", [browser_2.EditorManager, Object])
    ], MonacoStatusBarContribution);
    return MonacoStatusBarContribution;
}());
exports.MonacoStatusBarContribution = MonacoStatusBarContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-workspace.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var lang = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_4 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_configurations_1 = __webpack_require__(/*! ./monaco-configurations */ "../node_modules/@theia/monaco/lib/browser/monaco-configurations.js");
var browser_5 = __webpack_require__(/*! @theia/markers/lib/browser */ "../node_modules/@theia/markers/lib/browser/index.js");
var CreateResourceEdit;
(function (CreateResourceEdit) {
    function is(arg) {
        return 'newUri' in arg
            && typeof arg.newUri === 'string' // tslint:disable-line:no-any
            && (!('oldUri' in arg) || typeof arg.oldUri === 'undefined'); // tslint:disable-line:no-any
    }
    CreateResourceEdit.is = is;
})(CreateResourceEdit = exports.CreateResourceEdit || (exports.CreateResourceEdit = {}));
var DeleteResourceEdit;
(function (DeleteResourceEdit) {
    function is(arg) {
        return 'oldUri' in arg
            && typeof arg.oldUri === 'string' // tslint:disable-line:no-any
            && (!('newUri' in arg) || typeof arg.newUri === 'undefined'); // tslint:disable-line:no-any
    }
    DeleteResourceEdit.is = is;
})(DeleteResourceEdit = exports.DeleteResourceEdit || (exports.DeleteResourceEdit = {}));
var RenameResourceEdit;
(function (RenameResourceEdit) {
    function is(arg) {
        return 'oldUri' in arg
            && typeof arg.oldUri === 'string' // tslint:disable-line:no-any
            && 'newUri' in arg
            && typeof arg.newUri === 'string'; // tslint:disable-line:no-any
    }
    RenameResourceEdit.is = is;
})(RenameResourceEdit = exports.RenameResourceEdit || (exports.RenameResourceEdit = {}));
var TextEdits;
(function (TextEdits) {
    function is(arg) {
        return 'uri' in arg
            && typeof arg.uri === 'string'; // tslint:disable-line:no-any
    }
    TextEdits.is = is;
    function isVersioned(arg) {
        return is(arg) && arg.version !== undefined;
    }
    TextEdits.isVersioned = isVersioned;
})(TextEdits = exports.TextEdits || (exports.TextEdits = {}));
var EditsByEditor;
(function (EditsByEditor) {
    function is(arg) {
        return TextEdits.is(arg)
            && 'editor' in arg
            && arg.editor instanceof monaco_editor_1.MonacoEditor; // tslint:disable-line:no-any
    }
    EditsByEditor.is = is;
})(EditsByEditor = exports.EditsByEditor || (exports.EditsByEditor = {}));
var MonacoWorkspace = /** @class */ (function () {
    function MonacoWorkspace() {
        var _this = this;
        this.capabilities = {
            applyEdit: true,
            workspaceEdit: {
                documentChanges: true
            }
        };
        this.ready = new Promise(function (resolve) {
            _this.resolveReady = resolve;
        });
        this.onDidOpenTextDocumentEmitter = new browser_4.Emitter();
        this.onDidOpenTextDocument = this.onDidOpenTextDocumentEmitter.event;
        this.onDidCloseTextDocumentEmitter = new browser_4.Emitter();
        this.onDidCloseTextDocument = this.onDidCloseTextDocumentEmitter.event;
        this.onDidChangeTextDocumentEmitter = new browser_4.Emitter();
        this.onDidChangeTextDocument = this.onDidChangeTextDocumentEmitter.event;
        this.onWillSaveTextDocumentEmitter = new browser_4.Emitter();
        this.onWillSaveTextDocument = this.onWillSaveTextDocumentEmitter.event;
        this.onDidSaveTextDocumentEmitter = new browser_4.Emitter();
        this.onDidSaveTextDocument = this.onDidSaveTextDocumentEmitter.event;
        this._rootUri = null;
    }
    MonacoWorkspace.prototype.init = function () {
        var _this = this;
        var e_1, _a;
        this.workspaceService.roots.then(function (roots) {
            var rootStat = roots[0];
            if (rootStat) {
                _this._rootUri = rootStat.uri;
                _this.resolveReady();
            }
        });
        try {
            for (var _b = __values(this.textModelService.models), _c = _b.next(); !_c.done; _c = _b.next()) {
                var model = _c.value;
                this.fireDidOpen(model);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.textModelService.onDidCreate(function (model) { return _this.fireDidOpen(model); });
    };
    Object.defineProperty(MonacoWorkspace.prototype, "rootUri", {
        get: function () {
            return this._rootUri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoWorkspace.prototype, "rootPath", {
        get: function () {
            return this._rootUri && new uri_1.default(this._rootUri).path.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoWorkspace.prototype, "textDocuments", {
        get: function () {
            return this.textModelService.models;
        },
        enumerable: true,
        configurable: true
    });
    MonacoWorkspace.prototype.getTextDocument = function (uri) {
        return this.textModelService.get(uri);
    };
    MonacoWorkspace.prototype.fireDidOpen = function (model) {
        var _this = this;
        this.doFireDidOpen(model);
        model.textEditorModel.onDidChangeLanguage(function (e) {
            _this.problems.cleanAllMarkers(new uri_1.default(model.uri));
            model.setLanguageId(e.oldLanguage);
            try {
                _this.fireDidClose(model);
            }
            finally {
                model.setLanguageId(undefined);
            }
            _this.doFireDidOpen(model);
        });
        model.onDidChangeContent(function (event) { return _this.fireDidChangeContent(event); });
        model.onDidSaveModel(function () { return _this.fireDidSave(model); });
        model.onWillSaveModel(function (event) { return _this.fireWillSave(event); });
        model.onDirtyChanged(function () { return _this.openEditorIfDirty(model); });
        model.onDispose(function () { return _this.fireDidClose(model); });
    };
    MonacoWorkspace.prototype.doFireDidOpen = function (model) {
        this.onDidOpenTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.fireDidClose = function (model) {
        this.onDidCloseTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.fireDidChangeContent = function (event) {
        var model = event.model, contentChanges = event.contentChanges;
        this.onDidChangeTextDocumentEmitter.fire({
            textDocument: model,
            contentChanges: contentChanges
        });
    };
    MonacoWorkspace.prototype.fireWillSave = function (event) {
        var _this = this;
        var reason = event.reason;
        var timeout = new Promise(function (resolve) {
            return setTimeout(function () { return resolve([]); }, 1000);
        });
        var resolveEdits = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var e_2, _a, thenables, allEdits, _b, _c, listenerEdits, e_2_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        thenables = [];
                        allEdits = [];
                        this.onWillSaveTextDocumentEmitter.fire({
                            textDocument: event.model,
                            reason: reason,
                            waitUntil: function (thenable) {
                                thenables.push(thenable);
                            }
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, Promise.all(thenables)];
                    case 2:
                        _b = __values.apply(void 0, [_d.sent()]), _c = _b.next();
                        _d.label = 3;
                    case 3:
                        if (!!_c.done) return [3 /*break*/, 5];
                        listenerEdits = _c.value;
                        allEdits.push.apply(allEdits, __spread(listenerEdits));
                        _d.label = 4;
                    case 4:
                        _c = _b.next();
                        return [3 /*break*/, 3];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        resolve(allEdits);
                        return [2 /*return*/];
                }
            });
        }); });
        event.waitUntil(Promise.race([resolveEdits, timeout]).then(function (edits) {
            return _this.p2m.asTextEdits(edits).map(function (edit) { return edit; });
        }));
    };
    MonacoWorkspace.prototype.fireDidSave = function (model) {
        this.onDidSaveTextDocumentEmitter.fire(model);
    };
    MonacoWorkspace.prototype.openEditorIfDirty = function (model) {
        var _this = this;
        if (model.dirty && monaco_editor_1.MonacoEditor.findByDocument(this.editorManager, model).length === 0) {
            // create a new reference to make sure the model is not disposed before it is
            // acquired by the editor, thus losing the changes that made it dirty.
            this.textModelService.createModelReference(model.textEditorModel.uri).then(function (ref) {
                _this.editorManager.open(new uri_1.default(model.uri), {
                    mode: 'open',
                }).then(function (editor) { return ref.dispose(); });
            });
        }
    };
    MonacoWorkspace.prototype.createFileSystemWatcher = function (globPattern, ignoreCreateEvents, ignoreChangeEvents, ignoreDeleteEvents) {
        var disposables = new common_1.DisposableCollection();
        var onDidCreateEmitter = new lang.Emitter();
        disposables.push(onDidCreateEmitter);
        var onDidChangeEmitter = new lang.Emitter();
        disposables.push(onDidChangeEmitter);
        var onDidDeleteEmitter = new lang.Emitter();
        disposables.push(onDidDeleteEmitter);
        disposables.push(this.fileSystemWatcher.onFilesChanged(function (changes) {
            var e_3, _a;
            try {
                for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                    var change = changes_1_1.value;
                    var fileChangeType = change.type;
                    if (ignoreCreateEvents === true && fileChangeType === browser_1.FileChangeType.ADDED) {
                        continue;
                    }
                    if (ignoreChangeEvents === true && fileChangeType === browser_1.FileChangeType.UPDATED) {
                        continue;
                    }
                    if (ignoreDeleteEvents === true && fileChangeType === browser_1.FileChangeType.DELETED) {
                        continue;
                    }
                    var uri = change.uri.toString();
                    var codeUri = change.uri['codeUri'];
                    if (monaco_languageclient_1.testGlob(globPattern, uri)) {
                        if (fileChangeType === browser_1.FileChangeType.ADDED) {
                            onDidCreateEmitter.fire(codeUri);
                        }
                        else if (fileChangeType === browser_1.FileChangeType.UPDATED) {
                            onDidChangeEmitter.fire(codeUri);
                        }
                        else if (fileChangeType === browser_1.FileChangeType.DELETED) {
                            onDidDeleteEmitter.fire(codeUri);
                        }
                        else {
                            throw new Error("Unexpected file change type: " + fileChangeType + ".");
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }));
        return {
            onDidCreate: onDidCreateEmitter.event,
            onDidChange: onDidChangeEmitter.event,
            onDidDelete: onDidDeleteEmitter.event,
            dispose: function () { return disposables.dispose(); }
        };
    };
    MonacoWorkspace.prototype.applyEdit = function (changes, options) {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        workspaceEdit = this.p2m.asWorkspaceEdit(changes);
                        return [4 /*yield*/, this.applyBulkEdit(workspaceEdit, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MonacoWorkspace.prototype.applyBulkEdit = function (workspaceEdit, options) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4, _a, unresolvedEdits, edits, totalEdits, totalFiles, _loop_1, this_1, edits_1, edits_1_1, edit, e_4_1, ariaSummary, e_5, ariaSummary;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        unresolvedEdits = this.groupEdits(workspaceEdit);
                        return [4 /*yield*/, this.openEditors(unresolvedEdits, options)];
                    case 1:
                        edits = _b.sent();
                        this.checkVersions(edits);
                        totalEdits = 0;
                        totalFiles = 0;
                        _loop_1 = function (edit) {
                            var editor, model, currentSelections_1, editOperations;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!TextEdits.is(edit)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_1.toTextEditWithEditor(edit)];
                                    case 1:
                                        editor = (_a.sent()).editor;
                                        model = editor.document.textEditorModel;
                                        currentSelections_1 = editor.getControl().getSelections() || [];
                                        editOperations = edit.textEdits.map(function (e) { return ({
                                            identifier: undefined,
                                            forceMoveMarkers: false,
                                            range: new monaco.Range(e.range.startLineNumber, e.range.startColumn, e.range.endLineNumber, e.range.endColumn),
                                            text: e.text
                                        }); });
                                        // start a fresh operation
                                        model.pushStackElement();
                                        model.pushEditOperations(currentSelections_1, editOperations, function (_) { return currentSelections_1; });
                                        // push again to make this change an undoable operation
                                        model.pushStackElement();
                                        totalFiles += 1;
                                        totalEdits += editOperations.length;
                                        return [3 /*break*/, 3];
                                    case 2:
                                        if (CreateResourceEdit.is(edit) || DeleteResourceEdit.is(edit) || RenameResourceEdit.is(edit)) {
                                            this_1.performResourceEdit(edit);
                                        }
                                        else {
                                            throw new Error("Unexpected edit type: " + JSON.stringify(edit));
                                        }
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        edits_1 = __values(edits), edits_1_1 = edits_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!edits_1_1.done) return [3 /*break*/, 6];
                        edit = edits_1_1.value;
                        return [5 /*yield**/, _loop_1(edit)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        edits_1_1 = edits_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_4_1 = _b.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        ariaSummary = this.getAriaSummary(totalEdits, totalFiles);
                        return [2 /*return*/, { ariaSummary: ariaSummary }];
                    case 10:
                        e_5 = _b.sent();
                        ariaSummary = "Error applying workspace edits: " + e_5.toString();
                        console.error(ariaSummary);
                        return [2 /*return*/, { ariaSummary: ariaSummary }];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    MonacoWorkspace.prototype.openEditors = function (edits, options) {
        return __awaiter(this, void 0, void 0, function () {
            var e_6, _a, result, edits_2, edits_2_1, edit, _b, _c, e_6_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        result = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        edits_2 = __values(edits), edits_2_1 = edits_2.next();
                        _d.label = 2;
                    case 2:
                        if (!!edits_2_1.done) return [3 /*break*/, 6];
                        edit = edits_2_1.value;
                        if (!(TextEdits.is(edit) && TextEdits.isVersioned(edit) && !EditsByEditor.is(edit))) return [3 /*break*/, 4];
                        _c = (_b = result).push;
                        return [4 /*yield*/, this.toTextEditWithEditor(edit, options)];
                    case 3:
                        _c.apply(_b, [_d.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        result.push(edit);
                        _d.label = 5;
                    case 5:
                        edits_2_1 = edits_2.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_6_1 = _d.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (edits_2_1 && !edits_2_1.done && (_a = edits_2.return)) _a.call(edits_2);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, result];
                }
            });
        });
    };
    MonacoWorkspace.prototype.toTextEditWithEditor = function (textEdit, options) {
        return __awaiter(this, void 0, void 0, function () {
            var editorWidget, editor, textEditWithEditor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (EditsByEditor.is(textEdit)) {
                            return [2 /*return*/, textEdit];
                        }
                        return [4 /*yield*/, this.editorManager.open(new uri_1.default(textEdit.uri), options)];
                    case 1:
                        editorWidget = _a.sent();
                        editor = monaco_editor_1.MonacoEditor.get(editorWidget);
                        if (!editor) {
                            throw Error("Could not open editor. URI: " + textEdit.uri);
                        }
                        textEditWithEditor = __assign({}, textEdit, { editor: editor });
                        return [2 /*return*/, textEditWithEditor];
                }
            });
        });
    };
    MonacoWorkspace.prototype.checkVersions = function (edits) {
        var e_7, _a;
        try {
            for (var _b = __values(edits.filter(TextEdits.is).filter(TextEdits.isVersioned)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var textEdit = _c.value;
                if (!EditsByEditor.is(textEdit)) {
                    throw Error("Could not open editor for URI: " + textEdit.uri + ".");
                }
                var model = textEdit.editor.document.textEditorModel;
                if (textEdit.version !== undefined && model.getVersionId() !== textEdit.version) {
                    throw Error("Version conflict in editor. URI: " + textEdit.uri);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    MonacoWorkspace.prototype.getAriaSummary = function (totalEdits, totalFiles) {
        if (totalEdits === 0) {
            return 'Made no edits';
        }
        if (totalEdits > 1 && totalFiles > 1) {
            return "Made " + totalEdits + " text edits in " + totalFiles + " files";
        }
        return "Made " + totalEdits + " text edits in one file";
    };
    MonacoWorkspace.prototype.groupEdits = function (workspaceEdit) {
        var e_8, _a, _b;
        var map = new Map();
        var result = [];
        try {
            for (var _c = __values(workspaceEdit.edits), _d = _c.next(); !_d.done; _d = _c.next()) {
                var edit = _d.value;
                if (this.isResourceFileEdit(edit)) {
                    var resourceTextEdit = edit;
                    var uri = resourceTextEdit.resource.toString();
                    var version = resourceTextEdit.modelVersionId;
                    var editorEdit = map.get(uri);
                    if (!editorEdit) {
                        editorEdit = {
                            uri: uri,
                            version: version,
                            textEdits: []
                        };
                        map.set(uri, editorEdit);
                        result.push(editorEdit);
                    }
                    else {
                        if (editorEdit.version !== version) {
                            throw Error("Multiple versions for the same URI '" + uri + "' within the same workspace edit.");
                        }
                    }
                    (_b = editorEdit.textEdits).push.apply(_b, __spread(resourceTextEdit.edits));
                }
                else {
                    var options = edit.options;
                    var oldUri = !!edit.oldUri ? edit.oldUri.toString() : undefined;
                    var newUri = !!edit.newUri ? edit.newUri.toString() : undefined;
                    result.push({
                        oldUri: oldUri,
                        newUri: newUri,
                        options: options
                    });
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    };
    MonacoWorkspace.prototype.performResourceEdit = function (edit) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, exists, stat;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = edit.options || {};
                        if (!RenameResourceEdit.is(edit)) return [3 /*break*/, 4];
                        _a = options.overwrite === undefined && options.ignoreIfExists;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.exists(edit.newUri)];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        // rename
                        if (_a) {
                            return [2 /*return*/]; // not overwriting, but ignoring, and the target file exists
                        }
                        return [4 /*yield*/, this.fileSystem.move(edit.oldUri, edit.newUri, { overwrite: options.overwrite })];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 4:
                        if (!DeleteResourceEdit.is(edit)) return [3 /*break*/, 9];
                        _b = !options.ignoreIfNotExists;
                        if (_b) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.fileSystem.exists(edit.oldUri)];
                    case 5:
                        _b = (_c.sent());
                        _c.label = 6;
                    case 6:
                        if (!_b) return [3 /*break*/, 8];
                        if (options.recursive === false) {
                            console.warn("Ignored 'recursive': 'false' option. Deleting recursively.");
                        }
                        return [4 /*yield*/, this.fileSystem.delete(edit.oldUri)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        if (!CreateResourceEdit.is(edit)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.fileSystem.exists(edit.newUri)];
                    case 10:
                        exists = _c.sent();
                        // create file
                        if (options.overwrite === undefined && options.ignoreIfExists && exists) {
                            return [2 /*return*/]; // not overwriting, but ignoring, and the target file exists
                        }
                        if (!(exists && options.overwrite)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.fileSystem.getFileStat(edit.newUri)];
                    case 11:
                        stat = _c.sent();
                        if (!stat) {
                            throw new Error("Cannot get file stat for the resource: " + edit.newUri + ".");
                        }
                        return [4 /*yield*/, this.fileSystem.setContent(stat, '')];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, this.fileSystem.createFile(edit.newUri)];
                    case 14:
                        _c.sent();
                        _c.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    MonacoWorkspace.prototype.isResourceFileEdit = function (edit) {
        // tslint:disable-next-line:no-any
        return 'resource' in edit && edit.resource instanceof monaco.Uri;
    };
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], MonacoWorkspace.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], MonacoWorkspace.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.FileSystemWatcher),
        __metadata("design:type", browser_1.FileSystemWatcher)
    ], MonacoWorkspace.prototype, "fileSystemWatcher", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], MonacoWorkspace.prototype, "textModelService", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoWorkspace.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter),
        __metadata("design:type", monaco_languageclient_1.ProtocolToMonacoConverter)
    ], MonacoWorkspace.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(browser_3.EditorManager),
        __metadata("design:type", browser_3.EditorManager)
    ], MonacoWorkspace.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(monaco_configurations_1.MonacoConfigurations),
        __metadata("design:type", monaco_configurations_1.MonacoConfigurations)
    ], MonacoWorkspace.prototype, "configurations", void 0);
    __decorate([
        inversify_1.inject(browser_5.ProblemManager),
        __metadata("design:type", browser_5.ProblemManager)
    ], MonacoWorkspace.prototype, "problems", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoWorkspace.prototype, "init", null);
    MonacoWorkspace = __decorate([
        inversify_1.injectable()
    ], MonacoWorkspace);
    return MonacoWorkspace;
}());
exports.MonacoWorkspace = MonacoWorkspace;


/***/ }),

/***/ "../node_modules/@theia/monaco/src/browser/style/index.css":
/*!*****************************************************************!*\
  !*** ../node_modules/@theia/monaco/src/browser/style/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@theia/monaco/src/browser/style/symbol-icons.css":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/src/browser/style/symbol-icons.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./symbol-icons.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/symbol-icons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf2aabacdc2b3a5768b03545cb1d8330.svg";

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/index.css":
/*!********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/monaco/src/browser/style/index.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".monaco-editor {\n    padding-bottom: 5.6px;\n    font-family: var(--theia-ui-font-family);\n    font-size: inherit !important;\n}\n\n.monaco-editor, .monaco-editor-background {\n    background: var(--theia-layout-color0);\n}\n\n.monaco-editor .margin {\n    background: var(--theia-layout-color0);\n}\n\n.monaco-keybinding-key {\n    color: var(--theia-ui-font-color1) !important;\n}\n\n/*\n * set z-index to 0, so tabs are not above overlay widgets\n */\n.p-TabBar.theia-app-centers {\n    z-index: 0;\n    display: flex;\n}\n\n/*\n * we need to disable the background image when using font awesome icons and file-icons\n */\n.monaco-quick-open-widget .quick-open-tree .quick-open-entry .quick-open-entry-icon.fa,\n.monaco-quick-open-widget .quick-open-tree .quick-open-entry .quick-open-entry-icon.file-icon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: none;\n    margin-right: 0px;\n}\n\n.monaco-quick-open-widget {\n    background-color: var(--theia-layout-color1) !important;\n}\n\n.quick-open-entry .quick-open-row .monaco-icon-label .monaco-icon-label-description-container .monaco-highlighted-label .highlight {\n    color: var(--theia-accent-color1);\n}\n\n.quick-open-entry .quick-open-row .monaco-icon-label .monaco-icon-label-description-container .label-description {\n    color: var(--theia-ui-font-color2);\n    font-size: calc(var(--theia-ui-font-size0) * 0.95);\n}\n\n.monaco-editor .zone-widget {\n\tposition: absolute;\n\tz-index: 10;\n}\n\n.monaco-editor .zone-widget .zone-widget-container {\n\tborder-top-style: solid;\n\tborder-bottom-style: solid;\n\tborder-top-width: 0;\n\tborder-bottom-width: 0;\n    border-top-color: var(--theia-accent-color2);\n    border-bottom-color: var(--theia-accent-color2);\n\tposition: relative;\n}\n\n.monaco-editor .parameter-hints-widget > .wrapper {\n    overflow: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/symbol-icons.css":
/*!***************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/monaco/src/browser/style/symbol-icons.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".symbol-icon {\n    background-image: url(" + escape(__webpack_require__(/*! ./symbol-sprite.svg */ "../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg")) + ");\n    background-repeat: no-repeat;\n    overflow: hidden;\n    min-width: 16px;\n    height: 16px;\n    margin-right: 4px;\n}\n\n.symbol-icon-center {\n    align-self: center;\n}\n\n.symbol-icon.method {\n    background-position: 0 calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.constant,\n.symbol-icon.variable {\n    background-position: -22px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.class {\n    background-position: -42px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.interface {\n    background-position: -62px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.module {\n    background-position: -82px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.property {\n    background-position: -102px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.enum {\n    background-position: -122px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.rule {\n    background-position: -242px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.file {\n    background-position: -262px calc(var(--theia-sprite-y-offset));\n}", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=25.bundle.js.map