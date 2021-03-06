(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "../node_modules/@theia/core/lib/browser/menu/browser-context-menu-renderer.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/browser/menu/browser-context-menu-renderer.js ***!
  \*************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var context_menu_renderer_1 = __webpack_require__(/*! ../context-menu-renderer */ "../node_modules/@theia/core/lib/browser/context-menu-renderer.js");
var browser_menu_plugin_1 = __webpack_require__(/*! ./browser-menu-plugin */ "../node_modules/@theia/core/lib/browser/menu/browser-menu-plugin.js");
var BrowserContextMenuRenderer = /** @class */ (function () {
    function BrowserContextMenuRenderer(menuFactory) {
        this.menuFactory = menuFactory;
    }
    BrowserContextMenuRenderer.prototype.render = function (arg, arg2, arg3) {
        var _a = context_menu_renderer_1.RenderContextMenuOptions.resolve(arg, arg2, arg3), menuPath = _a.menuPath, anchor = _a.anchor, args = _a.args, onHide = _a.onHide;
        var contextMenu = this.menuFactory.createContextMenu(menuPath, args);
        var _b = anchor instanceof MouseEvent ? { x: anchor.clientX, y: anchor.clientY } : anchor, x = _b.x, y = _b.y;
        if (onHide) {
            contextMenu.aboutToClose.connect(function () { return onHide(); });
        }
        contextMenu.open(x, y);
    };
    BrowserContextMenuRenderer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_menu_plugin_1.BrowserMainMenuFactory)),
        __metadata("design:paramtypes", [browser_menu_plugin_1.BrowserMainMenuFactory])
    ], BrowserContextMenuRenderer);
    return BrowserContextMenuRenderer;
}());
exports.BrowserContextMenuRenderer = BrowserContextMenuRenderer;


/***/ }),

/***/ "../node_modules/@theia/core/lib/browser/menu/browser-menu-module.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/browser/menu/browser-menu-module.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var frontend_application_1 = __webpack_require__(/*! ../frontend-application */ "../node_modules/@theia/core/lib/browser/frontend-application.js");
var context_menu_renderer_1 = __webpack_require__(/*! ../context-menu-renderer */ "../node_modules/@theia/core/lib/browser/context-menu-renderer.js");
var browser_menu_plugin_1 = __webpack_require__(/*! ./browser-menu-plugin */ "../node_modules/@theia/core/lib/browser/menu/browser-menu-plugin.js");
var browser_context_menu_renderer_1 = __webpack_require__(/*! ./browser-context-menu-renderer */ "../node_modules/@theia/core/lib/browser/menu/browser-context-menu-renderer.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(browser_menu_plugin_1.BrowserMainMenuFactory).toSelf().inSingletonScope();
    bind(context_menu_renderer_1.ContextMenuRenderer).to(browser_context_menu_renderer_1.BrowserContextMenuRenderer).inSingletonScope();
    bind(browser_menu_plugin_1.BrowserMenuBarContribution).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(browser_menu_plugin_1.BrowserMenuBarContribution);
});


/***/ }),

/***/ "../node_modules/@theia/core/lib/browser/menu/browser-menu-plugin.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/browser/menu/browser-menu-plugin.js ***!
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
// tslint:disable:no-any
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../node_modules/@phosphor/widgets/lib/index.js");
var commands_1 = __webpack_require__(/*! @phosphor/commands */ "../node_modules/@phosphor/commands/lib/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@theia/core/lib/common/index.js");
var keybinding_1 = __webpack_require__(/*! ../keybinding */ "../node_modules/@theia/core/lib/browser/keybinding.js");
var context_key_service_1 = __webpack_require__(/*! ../context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var context_menu_context_1 = __webpack_require__(/*! ./context-menu-context */ "../node_modules/@theia/core/lib/browser/menu/context-menu-context.js");
var BrowserMainMenuFactory = /** @class */ (function () {
    function BrowserMainMenuFactory(commandRegistry, keybindingRegistry, menuProvider) {
        this.commandRegistry = commandRegistry;
        this.keybindingRegistry = keybindingRegistry;
        this.menuProvider = menuProvider;
    }
    BrowserMainMenuFactory.prototype.createMenuBar = function () {
        var _this = this;
        var menuBar = new DynamicMenuBarWidget();
        menuBar.id = 'theia:menubar';
        this.fillMenuBar(menuBar);
        var listener = this.keybindingRegistry.onKeybindingsChanged(function () {
            menuBar.clearMenus();
            _this.fillMenuBar(menuBar);
        });
        menuBar.disposed.connect(function () { return listener.dispose(); });
        return menuBar;
    };
    BrowserMainMenuFactory.prototype.fillMenuBar = function (menuBar) {
        var e_1, _a;
        var menuModel = this.menuProvider.getMenu(common_1.MAIN_MENU_BAR);
        var phosphorCommands = this.createPhosphorCommands(menuModel);
        // for the main menu we want all items to be visible.
        phosphorCommands.isVisible = function () { return true; };
        try {
            for (var _b = __values(menuModel.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var menu = _c.value;
                if (menu instanceof common_1.CompositeMenuNode) {
                    var menuWidget = new DynamicMenuWidget(menu, { commands: phosphorCommands }, this.contextKeyService, this.context);
                    menuBar.addMenu(menuWidget);
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
    };
    BrowserMainMenuFactory.prototype.createContextMenu = function (path, args) {
        var menuModel = this.menuProvider.getMenu(path);
        var phosphorCommands = this.createPhosphorCommands(menuModel, args);
        var contextMenu = new DynamicMenuWidget(menuModel, { commands: phosphorCommands }, this.contextKeyService, this.context);
        return contextMenu;
    };
    BrowserMainMenuFactory.prototype.createPhosphorCommands = function (menu, args) {
        if (args === void 0) { args = []; }
        var commands = new commands_1.CommandRegistry();
        this.addPhosphorCommands(commands, menu, args);
        return commands;
    };
    BrowserMainMenuFactory.prototype.addPhosphorCommands = function (commands, menu, args) {
        var e_2, _a;
        try {
            for (var _b = __values(menu.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child instanceof common_1.ActionMenuNode) {
                    this.addPhosphorCommand(commands, child, args);
                    if (child.altNode) {
                        this.addPhosphorCommand(commands, child.altNode, args);
                    }
                }
                else if (child instanceof common_1.CompositeMenuNode) {
                    this.addPhosphorCommands(commands, child, args);
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
    };
    BrowserMainMenuFactory.prototype.addPhosphorCommand = function (commands, menu, args) {
        var _this = this;
        var command = this.commandRegistry.getCommand(menu.action.commandId);
        if (!command) {
            return;
        }
        if (commands.hasCommand(command.id)) {
            // several menu items can be registered for the same command in different contexts
            return;
        }
        commands.addCommand(command.id, {
            execute: function () {
                var _a;
                return (_a = _this.commandRegistry).executeCommand.apply(_a, __spread([command.id], args));
            },
            label: menu.label,
            icon: menu.icon,
            isEnabled: function () {
                var _a;
                return (_a = _this.commandRegistry).isEnabled.apply(_a, __spread([command.id], args));
            },
            isVisible: function () {
                var _a;
                return (_a = _this.commandRegistry).isVisible.apply(_a, __spread([command.id], args));
            },
            isToggled: function () {
                var _a;
                return (_a = _this.commandRegistry).isToggled.apply(_a, __spread([command.id], args));
            }
        });
        var bindings = this.keybindingRegistry.getKeybindingsForCommand(command.id);
        /* Only consider the first keybinding. */
        if (bindings.length > 0) {
            var binding = bindings[0];
            var keys = this.keybindingRegistry.acceleratorFor(binding);
            commands.addKeyBinding({
                command: command.id,
                keys: keys,
                selector: '.p-Widget' // We have the Phosphor.JS dependency anyway.
            });
        }
    };
    __decorate([
        inversify_1.inject(common_1.ILogger),
        __metadata("design:type", Object)
    ], BrowserMainMenuFactory.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], BrowserMainMenuFactory.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(context_menu_context_1.ContextMenuContext),
        __metadata("design:type", context_menu_context_1.ContextMenuContext)
    ], BrowserMainMenuFactory.prototype, "context", void 0);
    BrowserMainMenuFactory = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.CommandRegistry)),
        __param(1, inversify_1.inject(keybinding_1.KeybindingRegistry)),
        __param(2, inversify_1.inject(common_1.MenuModelRegistry)),
        __metadata("design:paramtypes", [common_1.CommandRegistry,
            keybinding_1.KeybindingRegistry,
            common_1.MenuModelRegistry])
    ], BrowserMainMenuFactory);
    return BrowserMainMenuFactory;
}());
exports.BrowserMainMenuFactory = BrowserMainMenuFactory;
var DynamicMenuBarWidget = /** @class */ (function (_super) {
    __extends(DynamicMenuBarWidget, _super);
    function DynamicMenuBarWidget() {
        var _this = _super.call(this) || this;
        // HACK we need to hook in on private method _openChildMenu. Don't do this at home!
        DynamicMenuBarWidget.prototype['_openChildMenu'] = function () {
            if (_this.activeMenu instanceof DynamicMenuWidget) {
                _this.activeMenu.aboutToShow();
            }
            _super.prototype['_openChildMenu'].call(_this);
        };
        return _this;
    }
    return DynamicMenuBarWidget;
}(widgets_1.MenuBar));
/**
 * A menu widget that would recompute its items on update
 */
var DynamicMenuWidget = /** @class */ (function (_super) {
    __extends(DynamicMenuWidget, _super);
    function DynamicMenuWidget(menu, options, contextKeyService, context) {
        var _this = _super.call(this, options) || this;
        _this.menu = menu;
        _this.options = options;
        _this.contextKeyService = contextKeyService;
        _this.context = context;
        if (menu.label) {
            _this.title.label = menu.label;
        }
        _this.updateSubMenus(_this, _this.menu, _this.options.commands);
        return _this;
    }
    DynamicMenuWidget.prototype.aboutToShow = function () {
        this.clearItems();
        this.updateSubMenus(this, this.menu, this.options.commands);
    };
    DynamicMenuWidget.prototype.open = function (x, y, options) {
        var _this = this;
        // we want to restore the focus after the menu closes.
        var previouslyActive = window.document.activeElement;
        var cb = function () {
            previouslyActive.focus();
            _this.aboutToClose.disconnect(cb);
        };
        this.aboutToClose.connect(cb);
        _super.prototype.open.call(this, x, y, options);
    };
    DynamicMenuWidget.prototype.updateSubMenus = function (parent, menu, commands) {
        var e_3, _a;
        var items = this.buildSubMenus([], menu, commands);
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                parent.addItem(item);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    DynamicMenuWidget.prototype.buildSubMenus = function (items, menu, commands) {
        var e_4, _a;
        try {
            for (var _b = __values(menu.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item instanceof common_1.CompositeMenuNode) {
                    if (item.children.length > 0) {
                        // do not render empty nodes
                        if (item.isSubmenu) { // submenu node
                            var submenu = new DynamicMenuWidget(item, this.options, this.contextKeyService, this.context);
                            if (submenu.items.length === 0) {
                                continue;
                            }
                            items.push({
                                type: 'submenu',
                                submenu: submenu,
                            });
                        }
                        else { // group node
                            var submenu = this.buildSubMenus([], item, commands);
                            if (submenu.length === 0) {
                                continue;
                            }
                            if (items.length > 0) {
                                // do not put a separator above the first group
                                items.push({
                                    type: 'separator'
                                });
                            }
                            // render children
                            items.push.apply(items, __spread(submenu));
                        }
                    }
                }
                else if (item instanceof common_1.ActionMenuNode) {
                    var node = item.altNode && this.context.altPressed ? item.altNode : item;
                    var when = node.action.when;
                    if (!(commands.isVisible(node.action.commandId) && (!when || this.contextKeyService.match(when)))) {
                        continue;
                    }
                    items.push({
                        command: node.action.commandId,
                        type: 'command'
                    });
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
        return items;
    };
    return DynamicMenuWidget;
}(widgets_1.Menu));
var BrowserMenuBarContribution = /** @class */ (function () {
    function BrowserMenuBarContribution(factory) {
        this.factory = factory;
    }
    BrowserMenuBarContribution.prototype.onStart = function (app) {
        var logo = this.createLogo();
        app.shell.addWidget(logo, { area: 'top' });
        var menu = this.factory.createMenuBar();
        app.shell.addWidget(menu, { area: 'top' });
    };
    BrowserMenuBarContribution.prototype.createLogo = function () {
        var logo = new widgets_1.Widget();
        logo.id = 'theia:icon';
        logo.addClass('theia-icon');
        return logo;
    };
    BrowserMenuBarContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(BrowserMainMenuFactory)),
        __metadata("design:paramtypes", [BrowserMainMenuFactory])
    ], BrowserMenuBarContribution);
    return BrowserMenuBarContribution;
}());
exports.BrowserMenuBarContribution = BrowserMenuBarContribution;


/***/ })

}]);
//# sourceMappingURL=35.bundle.js.map