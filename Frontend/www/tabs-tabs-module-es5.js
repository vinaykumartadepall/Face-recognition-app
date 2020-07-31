(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
  \**************************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return HapticsImpactStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return HapticsNotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return KeyboardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return KeyboardResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return ActionSheetOptionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return PermissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return PhotosAlbumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return StatusBarStyle; });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Application directory
     */
    FilesystemDirectory["Application"] = "APPLICATION";
    /**
     * The Documents directory
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory (Android only)
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory (Android only)
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf16";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var HapticsNotificationType;
(function (HapticsNotificationType) {
    HapticsNotificationType["SUCCESS"] = "SUCCESS";
    HapticsNotificationType["WARNING"] = "WARNING";
    HapticsNotificationType["ERROR"] = "ERROR";
})(HapticsNotificationType || (HapticsNotificationType = {}));
var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Dark"] = "DARK";
    KeyboardStyle["Light"] = "LIGHT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
    KeyboardResize["Body"] = "body";
    KeyboardResize["Ionic"] = "ionic";
    KeyboardResize["Native"] = "native";
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
//
var PermissionType;
(function (PermissionType) {
    PermissionType["Camera"] = "camera";
    PermissionType["Photos"] = "photos";
    PermissionType["Geolocation"] = "geolocation";
    PermissionType["Notifications"] = "notifications";
    PermissionType["ClipboardRead"] = "clipboard-read";
    PermissionType["ClipboardWrite"] = "clipboard-write";
})(PermissionType || (PermissionType = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    /**
     * Light text for dark backgrounds.
     */
    StatusBarStyle["Dark"] = "DARK";
    /**
     * Dark text for light backgrounds.
     */
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/global.js":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
  \*********************************************************/
/*! exports provided: Capacitor, Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony import */ var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-runtime */ "./node_modules/@capacitor/core/dist/esm/web-runtime.js");

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = (function (globalThis) {
    // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
    // Ensure the global is assigned the same Capacitor instance,
    // then export Capacitor so it can be imported in other modules
    return globalThis.Capacitor = (globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]());
})(
// figure out the current globalThis, such as "window", "self" or "global"
// ensure errors are not thrown in an node SSR environment or web worker
typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, Capacitor, Plugins, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"]; });

/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"]; });

/* harmony import */ var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-plugins */ "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"]; });

/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
  \*******************************************************/
/*! exports provided: extend, uuid4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
  \**************************************************************/
/*! exports provided: registerWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/accessibility */ "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony import */ var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/app */ "./node_modules/@capacitor/core/dist/esm/web/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"]; });

/* harmony import */ var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/browser */ "./node_modules/@capacitor/core/dist/esm/web/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"]; });

/* harmony import */ var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/camera */ "./node_modules/@capacitor/core/dist/esm/web/camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]; });

/* harmony import */ var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/clipboard */ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]; });

/* harmony import */ var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/filesystem */ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"]; });

/* harmony import */ var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/geolocation */ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]; });

/* harmony import */ var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/device */ "./node_modules/@capacitor/core/dist/esm/web/device.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"]; });

/* harmony import */ var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/local-notifications */ "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"]; });

/* harmony import */ var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/share */ "./node_modules/@capacitor/core/dist/esm/web/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"]; });

/* harmony import */ var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/modals */ "./node_modules/@capacitor/core/dist/esm/web/modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"]; });

/* harmony import */ var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/motion */ "./node_modules/@capacitor/core/dist/esm/web/motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"]; });

/* harmony import */ var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web/network */ "./node_modules/@capacitor/core/dist/esm/web/network.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"]; });

/* harmony import */ var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web/permissions */ "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"]; });

/* harmony import */ var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web/splash-screen */ "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"]; });

/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web/storage */ "./node_modules/@capacitor/core/dist/esm/web/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"]; });

/* harmony import */ var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web/toast */ "./node_modules/@capacitor/core/dist/esm/web/toast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"]; });




















Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
var registerWebPlugin = function (plugin) {
    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
  \**************************************************************/
/*! exports provided: CapacitorWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function() { return CapacitorWeb; });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.platform = 'web';
        this.isNative = false;
        // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry
        this.Plugins = {};
        // Build a proxy for the Plugins object that returns the "Noop Plugin"
        // if a plugin isn't available
        this.Plugins = new Proxy(this.Plugins, {
            get: function (target, prop) {
                if (typeof target[prop] === 'undefined') {
                    var thisRef_1 = _this;
                    return new Proxy({}, {
                        get: function (_target, _prop) {
                            if (typeof _target[_prop] === 'undefined') {
                                return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                            }
                            else {
                                return _target[_prop];
                            }
                        }
                    });
                }
                else {
                    return target[prop];
                }
            }
        });
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
  \********************************************************************/
/*! exports provided: AccessibilityPluginWeb, Accessibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return AccessibilityPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return Accessibility; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var AccessibilityPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);
    function AccessibilityPluginWeb() {
        return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
        }) || this;
    }
    AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
    };
    AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
        }
        var utterance = new SpeechSynthesisUtterance(options.value);
        if (options.language) {
            utterance.lang = options.language;
        }
        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
    };
    return AccessibilityPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Accessibility = new AccessibilityPluginWeb();

//# sourceMappingURL=accessibility.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/app.js":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
  \**********************************************************/
/*! exports provided: AppPluginWeb, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return AppPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var AppPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);
    function AppPluginWeb() {
        var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
        }) || this;
        if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }
        return _this;
    }
    AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
    };
    AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({ value: true });
    };
    AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({ completed: true });
    };
    AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({ url: '' });
    };
    AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
            isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
    };
    return AppPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var App = new AppPluginWeb();

//# sourceMappingURL=app.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
  \**************************************************************/
/*! exports provided: BrowserPluginWeb, Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return BrowserPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var BrowserPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || '_blank');
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/camera.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
  \*************************************************************/
/*! exports provided: CameraPluginWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return CameraPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var CameraPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                options;
                return [2 /*return*/, new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var cameraModal;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    cameraModal = document.createElement('pwa-camera-modal');
                                    document.body.appendChild(cameraModal);
                                    return [4 /*yield*/, cameraModal.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    cameraModal.addEventListener('onPhoto', function (e) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject('User cancelled photos app');
                                                    return [3 /*break*/, 4];
                                                case 1:
                                                    if (!(photo instanceof Error)) return [3 /*break*/, 2];
                                                    reject(photo.message);
                                                    return [3 /*break*/, 4];
                                                case 2:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo, options)];
                                                case 3:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 4;
                                                case 4:
                                                    cameraModal.dismiss();
                                                    document.body.removeChild(cameraModal);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = function () {
                    var r = reader.result;
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                        resolve({
                            dataUrl: r,
                            format: format
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format
                        });
                    }
                };
                reader.onerror = function (e) {
                    reject(e);
                };
            }
        });
    };
    return CameraPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
  \****************************************************************/
/*! exports provided: ClipboardPluginWeb, Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return ClipboardPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ClipboardPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string !== undefined || options.url)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (options.image) {
                            return [2 /*return*/, Promise.reject('Setting images not supported on the web')];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text, data, _i, _a, item;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(_options.type === 'string' || _options.type === 'url')) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.readText()];
                    case 1:
                        text = _b.sent();
                        return [2 /*return*/, Promise.resolve({ value: text })];
                    case 2: return [4 /*yield*/, navigator.clipboard.read()];
                    case 3:
                        data = _b.sent();
                        for (_i = 0, _a = data.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            if (item.type === 'text/plain') {
                                return [2 /*return*/, Promise.resolve({ value: item.getAs('text/plain') })];
                            }
                        }
                        _b.label = 4;
                    case 4: return [2 /*return*/, Promise.reject('Unable to get data from clipboard')];
                }
            });
        });
    };
    return ClipboardPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/device.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
  \*************************************************************/
/*! exports provided: DevicePluginWeb, Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return DevicePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var DevicePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ua, uaFields, battery, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ua = navigator.userAgent;
                        uaFields = this.parseUa(ua);
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            model: uaFields.model,
                            platform: 'web',
                            appVersion: '',
                            appBuild: '',
                            operatingSystem: uaFields.operatingSystem,
                            osVersion: uaFields.osVersion,
                            manufacturer: navigator.vendor,
                            isVirtual: false,
                            batteryLevel: battery.level,
                            isCharging: battery.charging,
                            uuid: this.getUid()
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
                }
            }
        }
        if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
        }
        else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
        }
        else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
        }
        else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
        }
        else {
            uaFields.operatingSystem = 'unknown';
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
  \*****************************************************************/
/*! exports provided: FilesystemPluginWeb, Filesystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return FilesystemPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return Filesystem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var FilesystemPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);
    function FilesystemPluginWeb() {
        var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
        }) || this;
        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
    }
    FilesystemPluginWeb.prototype.initDb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this._db !== undefined) {
                    return [2 /*return*/, this._db];
                }
                if (!('indexedDB' in window)) {
                    throw new Error('This browser doesn\'t support IndexedDB');
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                        request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;
                        request.onsuccess = function () {
                            _this._db = request.result;
                            resolve(request.result);
                        };
                        request.onerror = function () { return reject(request.error); };
                        request.onblocked = function () {
                            console.warn('db blocked');
                        };
                    })];
            });
        });
    };
    FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;
        switch (event.oldVersion) {
            case 0:
            case 1:
            default:
                if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                }
                var store = db.createObjectStore('FileStorage', { keyPath: 'path' });
                store.createIndex('by_folder', 'folder');
        }
    };
    FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var req = store[cmd].apply(store, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var index = store.index(indexName);
                            var req = index[cmd].apply(index, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '')
            fsPath += '/' + cleanedUriPath;
        return fsPath;
    };
    FilesystemPluginWeb.prototype.clear = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conn, tx, store;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initDb()];
                    case 1:
                        conn = _a.sent();
                        tx = conn.transaction(['FileStorage'], 'readwrite');
                        store = tx.objectStore('FileStorage');
                        store.clear();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Read a file from disk
     * @param options options for the file read
     * @return a promise that resolves with the read file data result
     */
    FilesystemPluginWeb.prototype.readFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [2 /*return*/, { data: entry.content }];
                }
            });
        });
    };
    /**
     * Write a file to disk in the specified location on device
     * @param options options for the file write
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.writeFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        encoding = options.encoding;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: now,
                            mtime: now,
                            content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data,
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Append to a file on disk in the specified location on device
     * @param options options for the file append
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.appendFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, parentArgPath, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        now = Date.now();
                        ctime = now;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (occupiedEntry !== undefined) {
                            data = occupiedEntry.content + data;
                            ctime = occupiedEntry.ctime;
                        }
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: ctime,
                            mtime: now,
                            content: data
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Delete a file from disk
     * @param options options for the file delete
     * @return a promise that resolves with the deleted file data result
     */
    FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        if (entries.length !== 0)
                            throw Error('Folder is not empty.');
                        return [4 /*yield*/, this.dbRequest('delete', [path])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Create a directory.
     * @param options options for the mkdir
     * @return a promise that resolves with the mkdir result
     */
    FilesystemPluginWeb.prototype.mkdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, createIntermediateDirectories, recursive, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        createIntermediateDirectories = options.createIntermediateDirectories;
                        if (options.createIntermediateDirectories !== undefined) {
                            console.warn('createIntermediateDirectories is deprecated, use recursive');
                        }
                        recursive = options.recursive;
                        doRecursive = (createIntermediateDirectories || recursive);
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        depth = (path.match(/\//g) || []).length;
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 2:
                        occupiedEntry = _a.sent();
                        if (depth === 1)
                            throw Error('Cannot create Root directory');
                        if (occupiedEntry !== undefined)
                            throw Error('Current directory does already exist.');
                        if (!doRecursive && depth !== 2 && parentEntry === undefined)
                            throw Error('Parent directory must exist');
                        if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({
                                path: parentArgPath,
                                directory: options.directory,
                                recursive: doRecursive
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = { path: path, folder: parentPath, type: 'directory', size: 0, ctime: now, mtime: now };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Remove a directory
     * @param options the options for the directory remove
     */
    FilesystemPluginWeb.prototype.rmdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = options.path, directory = options.directory, recursive = options.recursive;
                        fullPath = this.getPath(directory, path);
                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                    case 1:
                        entry = _b.sent();
                        if (entry === undefined)
                            throw Error('Folder does not exist.');
                        if (entry.type !== 'directory')
                            throw Error('Requested path is not a directory');
                        return [4 /*yield*/, this.readdir({ path: path, directory: directory })];
                    case 2:
                        readDirResult = _b.sent();
                        if (readDirResult.files.length !== 0 && !recursive)
                            throw Error('Folder is not empty');
                        _i = 0, _a = readDirResult.files;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        entry_1 = _a[_i];
                        entryPath = path + "/" + entry_1;
                        return [4 /*yield*/, this.stat({ path: entryPath, directory: directory })];
                    case 4:
                        entryObj = _b.sent();
                        if (!(entryObj.type === 'file')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deleteFile({ path: entryPath, directory: directory })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rmdir({ path: entryPath, directory: directory, recursive: recursive })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: return [4 /*yield*/, this.dbRequest('delete', [fullPath])];
                    case 10:
                        _b.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Return a list of files from the directory (not recursive)
     * @param options the options for the readdir operation
     * @return a promise that resolves with the readdir directory listing result
     */
    FilesystemPluginWeb.prototype.readdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (options.path !== '' && entry === undefined)
                            throw Error('Folder does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        names = entries.map(function (e) {
                            return e.substring(path.length + 1);
                        });
                        return [2 /*return*/, { files: names }];
                }
            });
        });
    };
    /**
     * Return full File URI for a path and directory
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.getUri = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Return data about a file
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.stat = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                type: entry.type,
                                size: entry.size,
                                ctime: entry.ctime,
                                mtime: entry.mtime,
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Rename a file or directory
     * @param options the options for the rename operation
     * @return a promise that resolves with the rename result
     */
    FilesystemPluginWeb.prototype.rename = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, true)];
            });
        });
    };
    /**
     * Copy a file or directory
     * @param options the options for the copy operation
     * @return a promise that resolves with the copy result
     */
    FilesystemPluginWeb.prototype.copy = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, false)];
            });
        });
    };
    /**
     * Function that can perform a copy or a rename
     * @param options the options for the rename operation
     * @param doRename whether to perform a rename or copy operation
     * @return a promise that resolves with the result
     */
    FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) { doRename = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;
                        if (!to || !from) {
                            throw Error('Both to and from must be provided');
                        }
                        // If no "to" directory is provided, use the "from" directory
                        if (!toDirectory) {
                            toDirectory = fromDirectory;
                        }
                        fromPath = this.getPath(fromDirectory, from);
                        toPath = this.getPath(toDirectory, to);
                        // Test that the "to" and "from" locations are different
                        if (fromPath === toPath) {
                            return [2 /*return*/, {}];
                        }
                        if (toPath.startsWith(fromPath)) {
                            throw Error('To path cannot contain the from path');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, this.stat({
                                path: to,
                                directory: toDirectory
                            })];
                    case 2:
                        toObj = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        e_1 = _b.sent();
                        toPathComponents = to.split('/');
                        toPathComponents.pop();
                        toPath_1 = toPathComponents.join('/');
                        if (!(toPathComponents.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.stat({
                                path: toPath_1,
                                directory: toDirectory,
                            })];
                    case 4:
                        toParentDirectory = _b.sent();
                        if (toParentDirectory.type !== 'directory') {
                            throw new Error('Parent directory of the to path is a file');
                        }
                        _b.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6:
                        // Cannot overwrite a directory
                        if (toObj && toObj.type === 'directory') {
                            throw new Error('Cannot overwrite a directory with a file');
                        }
                        return [4 /*yield*/, this.stat({
                                path: from,
                                directory: fromDirectory,
                            })];
                    case 7:
                        fromObj = _b.sent();
                        updateTime = function (path, ctime, mtime) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var fullPath, entry;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fullPath = this.getPath(toDirectory, path);
                                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                                    case 1:
                                        entry = _a.sent();
                                        entry.ctime = ctime;
                                        entry.mtime = mtime;
                                        return [4 /*yield*/, this.dbRequest('put', [entry])];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        _a = fromObj.type;
                        switch (_a) {
                            case 'file': return [3 /*break*/, 8];
                            case 'directory': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 28];
                    case 8: return [4 /*yield*/, this.readFile({
                            path: from,
                            directory: fromDirectory
                        })];
                    case 9:
                        file = _b.sent();
                        if (!doRename) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.deleteFile({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: 
                    // Write the file to the new location
                    return [4 /*yield*/, this.writeFile({
                            path: to,
                            directory: toDirectory,
                            data: file.data
                        })];
                    case 12:
                        // Write the file to the new location
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 14];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: 
                    // Resolve promise
                    return [2 /*return*/, {}];
                    case 15:
                        if (toObj) {
                            throw Error('Cannot move a directory over an existing object');
                        }
                        _b.label = 16;
                    case 16:
                        _b.trys.push([16, 20, , 21]);
                        // Create the to directory
                        return [4 /*yield*/, this.mkdir({
                                path: to,
                                directory: toDirectory,
                                recursive: false,
                            })];
                    case 17:
                        // Create the to directory
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 19];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        e_2 = _b.sent();
                        return [3 /*break*/, 21];
                    case 21: return [4 /*yield*/, this.readdir({
                            path: from,
                            directory: fromDirectory,
                        })];
                    case 22:
                        contents = (_b.sent()).files;
                        _i = 0, contents_1 = contents;
                        _b.label = 23;
                    case 23:
                        if (!(_i < contents_1.length)) return [3 /*break*/, 26];
                        filename = contents_1[_i];
                        // Move item from the from directory to the to directory
                        return [4 /*yield*/, this._copy({
                                from: from + "/" + filename,
                                to: to + "/" + filename,
                                directory: fromDirectory,
                                toDirectory: toDirectory,
                            }, doRename)];
                    case 24:
                        // Move item from the from directory to the to directory
                        _b.sent();
                        _b.label = 25;
                    case 25:
                        _i++;
                        return [3 /*break*/, 23];
                    case 26:
                        if (!doRename) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.rmdir({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 27:
                        _b.sent();
                        _b.label = 28;
                    case 28: return [2 /*return*/, {}];
                }
            });
        });
    };
    FilesystemPluginWeb._debug = true;
    return FilesystemPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Filesystem = new FilesystemPluginWeb();

//# sourceMappingURL=filesystem.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
  \******************************************************************/
/*! exports provided: GeolocationPluginWeb, Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return GeolocationPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var GeolocationPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
  \************************************************************/
/*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return WebPluginRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return WebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return mergeWebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return mergeWebPlugin; });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(function (listener) { return listener(data); });
        }
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
  \**************************************************************************/
/*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return LocalNotificationsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return LocalNotifications; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var LocalNotificationsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);
    function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
        }) || this;
        _this.pending = [];
        return _this;
    }
    LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;
        var toRemove = [];
        var now = +new Date;
        this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
                if (+localNotification.schedule.at <= now) {
                    _this.buildNotification(localNotification);
                    toRemove.push(localNotification);
                }
            }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) { return !toRemove.find(function (ln) { return ln === localNotification; }); });
    };
    LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;
        var l = localNotification;
        if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date;
            this.pending.push(l);
            setTimeout(function () {
                _this.sendPending();
            }, diff);
            return;
        }
        this.buildNotification(localNotification);
    };
    LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
            body: l.body
        });
    };
    LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;
        var notifications = [];
        options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
            notifications: notifications.map(function (_) { return { id: '' }; })
        });
    };
    LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
                return {
                    id: '' + localNotification.id
                };
            })
        });
    };
    LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
    };
    LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) { return !pending.notifications.find(function (ln) { return ln.id === '' + localNotification.id; }); });
        return Promise.resolve();
    };
    LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        throw new Error('Method not implemented.');
    };
    LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
                if (result === 'denied' || result === 'default') {
                    reject(result);
                    return;
                }
                resolve({
                    results: [result]
                });
            });
        });
    };
    return LocalNotificationsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var LocalNotifications = new LocalNotificationsPluginWeb();

//# sourceMappingURL=local-notifications.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/modals.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
  \*************************************************************/
/*! exports provided: ModalsPluginWeb, Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return ModalsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ModalsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.prompt(options.message, options.inputPlaceholder || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var controller, items, actionSheetElement;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    controller = document.querySelector('ion-action-sheet-controller');
                                    if (!controller) {
                                        controller = document.createElement('ion-action-sheet-controller');
                                        document.body.appendChild(controller);
                                    }
                                    return [4 /*yield*/, controller.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    items = options.options.map(function (o, i) {
                                        return {
                                            text: o.title,
                                            role: o.style && o.style.toLowerCase() || '',
                                            icon: o.icon || '',
                                            handler: function () {
                                                resolve({
                                                    index: i
                                                });
                                            }
                                        };
                                    });
                                    return [4 /*yield*/, controller.create({
                                            title: options.title,
                                            buttons: items
                                        })];
                                case 2:
                                    actionSheetElement = _a.sent();
                                    return [4 /*yield*/, actionSheetElement.present()];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/motion.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
  \*************************************************************/
/*! exports provided: MotionPluginWeb, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return MotionPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var MotionPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);
    function MotionPluginWeb() {
        var _this = _super.call(this, {
            name: 'Motion'
        }) || this;
        _this.registerWindowListener('devicemotion', 'accel');
        _this.registerWindowListener('deviceorientation', 'orientation');
        return _this;
    }
    return MotionPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Motion = new MotionPluginWeb();

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/network.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
  \**************************************************************/
/*! exports provided: NetworkPluginWeb, Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return NetworkPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var NetworkPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);
    function NetworkPluginWeb() {
        var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
        }) || this;
        _this.listenerFunction = null;
        return _this;
    }
    NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
            if (!window.navigator) {
                reject('Network info not available');
                return;
            }
            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
            resolve({
                connected: connected,
                connectionType: connected ? connectionType : 'none'
            });
        });
    };
    NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, { connected: true, connectionType: connectionType });
        var offlineBindFunc = listenerFunc.bind(thisRef, { connected: false, connectionType: 'none' });
        if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
                remove: function () {
                    window.removeEventListener('online', onlineBindFunc);
                    window.removeEventListener('offline', offlineBindFunc);
                }
            };
        }
    };
    return NetworkPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Network = new NetworkPluginWeb();

//# sourceMappingURL=network.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
  \******************************************************************/
/*! exports provided: PermissionsPluginWeb, Permissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return PermissionsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return Permissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var PermissionsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);
    function PermissionsPluginWeb() {
        return _super.call(this, {
            name: 'Permissions'
        }) || this;
    }
    PermissionsPluginWeb.prototype.query = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigator, name, ret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator = window.navigator;
                        if (!navigator.permissions) {
                            return [2 /*return*/, Promise.reject('This browser does not support the Permissions API')];
                        }
                        name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                        return [4 /*yield*/, navigator.permissions.query({ name: name })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, {
                                state: ret.state
                            }];
                }
            });
        });
    };
    return PermissionsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Permissions = new PermissionsPluginWeb();

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/share.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
  \************************************************************/
/*! exports provided: SharePluginWeb, Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return SharePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SharePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject('Web Share API not available');
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
  \********************************************************************/
/*! exports provided: SplashScreenPluginWeb, SplashScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return SplashScreenPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return SplashScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SplashScreenPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);
    function SplashScreenPluginWeb() {
        return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
        }) || this;
    }
    SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
    };
    SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
    };
    return SplashScreenPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var SplashScreen = new SplashScreenPluginWeb();

//# sourceMappingURL=splash-screen.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
  \**************************************************************/
/*! exports provided: StoragePluginWeb, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return StoragePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var StoragePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = '_cap_';
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/toast.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
  \************************************************************/
/*! exports provided: ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return ToastPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ToastPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);
    function ToastPluginWeb() {
        return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
        }) || this;
    }
    ToastPluginWeb.prototype.show = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var duration, toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                duration = 3000;
                if (options.duration) {
                    duration = options.duration === 'long' ? 5000 : 3000;
                }
                toast = document.createElement('pwa-toast');
                toast.duration = duration;
                toast.message = options.text;
                document.body.appendChild(toast);
                return [2 /*return*/];
            });
        });
    };
    return ToastPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Toast = new ToastPluginWeb();

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "./node_modules/@ionic-native/file/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/file/ngx/index.js ***!
  \******************************************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var File = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR'
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationStorageDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "dataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "dataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "cacheDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "cacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalApplicationStorageDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalApplicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalDataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalCacheDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalCacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalRootDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalRootDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "tempDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "tempDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "syncedDataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "syncedDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "documentsDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "documentsDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "sharedDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "sharedDirectory", value); },
        enumerable: true,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    File = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], File);
    return File;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sZ0ZBQTRELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQXNzQmhGLHdCQUFpQjs7O1FBOER6QyxzQkFBZ0IsR0FBUTtZQUN0QixDQUFDLEVBQUUsZUFBZTtZQUNsQixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLDZCQUE2QjtZQUNoQyxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLENBQUMsRUFBRSxZQUFZO1lBQ2YsQ0FBQyxFQUFFLDBCQUEwQjtZQUM3QixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLGlCQUFpQjtZQUNyQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7OztJQU9GLCtCQUFnQjs7O21EQUFvQjtnQkFDbEMsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFXRCx1QkFBUSxhQUFDLElBQVksRUFBRSxHQUFXOzs7bURBQW9CO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxD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M0JrQixzQ0FBb0I7Ozs7OzswQkFLcEIsNkNBQTJCOzs7Ozs7MEJBSzNCLCtCQUFhOzs7Ozs7MEJBTWIsZ0NBQWM7Ozs7OzswQkFLZCxxREFBbUM7Ozs7OzswQkFLbkMsdUNBQXFCOzs7Ozs7MEJBS3JCLHdDQUFzQjs7Ozs7OzBCQUt0Qix1Q0FBcUI7Ozs7OzswQkFLckIsK0JBQWE7Ozs7OzswQkFLYixxQ0FBbUI7Ozs7OzswQkFLbkIsb0NBQWtCOzs7Ozs7MEJBS2xCLGlDQUFlOzs7Ozs7Ozs7OztJQTVEdkIsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBdnNCakI7RUF1c0IwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFDaGVjaywgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmlsZSBleHRlbmRzIEJsb2Ige1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcbiAgICovXG4gIGxhc3RNb2RpZmllZDogbnVtYmVyO1xuICAvKipcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXG4gICAqL1xuICBsYXN0TW9kaWZpZWREYXRlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBTaXplIGluIGJ5dGVzXG4gICAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKlxuICAgKiBGaWxlIG1pbWUgdHlwZVxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUmV0dXJucyBhIFwic2xpY2VcIiBvZiB0aGUgZmlsZS4gU2luY2UgQ29yZG92YSBGaWxlcyBkb24ndCBjb250YWluIHRoZSBhY3R1YWxcbiAgICogY29udGVudCwgdGhpcyByZWFsbHkgcmV0dXJucyBhIEZpbGUgd2l0aCBhZGp1c3RlZCBzdGFydCBhbmQgZW5kLlxuICAgKiBTbGljZXMgb2Ygc2xpY2VzIGFyZSBzdXBwb3J0ZWQuXG4gICAqIEBwYXJhbSBzdGFydCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHNsaWNlIChpbmNsdXNpdmUpLlxuICAgKiBAcGFyYW0gZW5kIHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBlbmQgdGhlIHNsaWNlIChleGNsdXNpdmUpLlxuICAgKi9cbiAgc2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBCbG9iO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsRmlsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBzdG9yYWdlIHdpdGggbm8gZ3VhcmFudGVlIG9mIHBlcnNpc3RlbmNlLlxuICAgKi9cbiAgVEVNUE9SQVJZOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2UgdGhhdCBzaG91bGQgbm90IGJlIHJlbW92ZWQgYnkgdGhlIHVzZXIgYWdlbnQgd2l0aG91dCBhcHBsaWNhdGlvbiBvciB1c2VyIHBlcm1pc3Npb24uXG4gICAqL1xuICBQRVJTSVNURU5UOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGEgZmlsZXN5c3RlbSBpbiB3aGljaCB0byBzdG9yZSBhcHBsaWNhdGlvbiBkYXRhLlxuICAgKiBAcGFyYW0gdHlwZSBXaGV0aGVyIHRoZSBmaWxlc3lzdGVtIHJlcXVlc3RlZCBzaG91bGQgYmUgcGVyc2lzdGVudCwgYXMgZGVmaW5lZCBhYm92ZS4gVXNlIG9uZSBvZiBURU1QT1JBUlkgb3JcbiAgICogICBQRVJTSVNURU5ULlxuICAgKiBAcGFyYW0gc2l6ZSBUaGlzIGlzIGFuIGluZGljYXRvciBvZiBob3cgbXVjaCBzdG9yYWdlIHNwYWNlLCBpbiBieXRlcywgdGhlIGFwcGxpY2F0aW9uIGV4cGVjdHMgdG8gbmVlZC5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBUaGUgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBhZ2VudCBwcm92aWRlcyBhIGZpbGVzeXN0ZW0uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgZmlsZXN5c3RlbSBpc1xuICAgKiAgIGRlbmllZC5cbiAgICovXG4gIHJlcXVlc3RGaWxlU3lzdGVtKFxuICAgIHR5cGU6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGxvb2sgdXAgdGhlIEVudHJ5IGZvciBhIGZpbGUgb3IgZGlyZWN0b3J5IHJlZmVycmVkIHRvIGJ5IGEgbG9jYWwgVVJMLlxuICAgKiBAcGFyYW0gdXJsIEEgVVJMIHJlZmVycmluZyB0byBhIGxvY2FsIGZpbGUgaW4gYSBmaWxlc3lzdGVtIGFjY2Vzc2FibGUgdmlhIHRoaXMgQVBJLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmVwb3J0IHRoZSBGaWxlRW50cnkgdG8gd2hpY2ggdGhlIHN1cHBsaWVkIFVSTCByZWZlcnMuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgRW50cnkgaXNcbiAgICogICBkZW5pZWQuXG4gICAqL1xuICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZUVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogc2VlIHJlcXVlc3RGaWxlU3lzdGVtLlxuICAgKi9cbiAgd2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG4gICAgdHlwZTogbnVtYmVyLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVTeXN0ZW1DYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGZpbGUgb3IgZGlyZWN0b3J5IHdhcyBsYXN0IG1vZGlmaWVkLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIG1vZGlmaWNhdGlvblRpbWU6IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmaWxlLCBpbiBieXRlcy4gVGhpcyBtdXN0IHJldHVybiAwIGZvciBkaXJlY3Rvcmllcy5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ3Mge1xuICAvKipcbiAgICogVXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2VyIHdhbnRzIHRvIGNyZWF0ZSBhIGZpbGUgb3IgZGlyZWN0b3J5IGlmIGl0IHdhcyBub3QgcHJldmlvdXNseSB0aGVyZS5cbiAgICovXG4gIGNyZWF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ5IGl0c2VsZiwgZXhjbHVzaXZlIG11c3QgaGF2ZSBubyBlZmZlY3QuIFVzZWQgd2l0aCBjcmVhdGUsIGl0IG11c3QgY2F1c2UgZ2V0RmlsZSBhbmQgZ2V0RGlyZWN0b3J5IHRvIGZhaWwgaWYgdGhlXG4gICAqIHRhcmdldCBwYXRoIGFscmVhZHkgZXhpc3RzLlxuICAgKi9cbiAgZXhjbHVzaXZlPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTeXN0ZW0ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSBzeXN0ZW0uIFRoZSBzcGVjaWZpY3Mgb2YgbmFtaW5nIGZpbGVzeXN0ZW1zIGlzIHVuc3BlY2lmaWVkLCBidXQgYSBuYW1lIG11c3QgYmUgdW5pcXVlXG4gICAqIGFjcm9zcyB0aGUgbGlzdCBvZiBleHBvc2VkIGZpbGUgc3lzdGVtcy5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgZmlsZSBzeXN0ZW0uXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgcm9vdDogRGlyZWN0b3J5RW50cnk7XG5cbiAgdG9KU09OKCk6IHN0cmluZztcblxuICBlbmNvZGVVUklQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeSB7XG4gIC8qKlxuICAgKiBFbnRyeSBpcyBhIGZpbGUuXG4gICAqL1xuICBpc0ZpbGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVudHJ5IGlzIGEgZGlyZWN0b3J5LlxuICAgKi9cbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgbWV0YWRhdGEgYWJvdXQgdGhpcyBlbnRyeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIHRpbWUgb2YgdGhlIGxhc3QgbW9kaWZpY2F0aW9uLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBFcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0TWV0YWRhdGEoXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWV0YWRhdGEgb2YgdGhlIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBNZXRhZGF0YSBvYmplY3RcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIEZpbGVFcnJvclxuICAgKiBAcGFyYW0gbWV0YWRhdGFPYmplY3Qge01ldGFkYXRhfSBrZXlzIGFuZCB2YWx1ZXMgdG8gc2V0XG4gICAqL1xuICBzZXRNZXRhZGF0YShcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjayxcbiAgICBtZXRhZGF0YU9iamVjdDogTWV0YWRhdGFcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGVudHJ5LCBleGNsdWRpbmcgdGhlIHBhdGggbGVhZGluZyB0byBpdC5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmdWxsIGFic29sdXRlIHBhdGggZnJvbSB0aGUgcm9vdCB0byB0aGUgZW50cnkuXG4gICAqL1xuICBmdWxsUGF0aDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZpbGUgc3lzdGVtIG9uIHdoaWNoIHRoZSBlbnRyeSByZXNpZGVzLlxuICAgKi9cbiAgZmlsZXN5c3RlbTogRmlsZVN5c3RlbTtcbiAgLyoqXG4gICAqIGFuIGFsdGVybmF0ZSBVUkwgd2hpY2ggY2FuIGJlIHVzZWQgYnkgbmF0aXZlIHdlYnZpZXcgY29udHJvbHMsIGZvciBleGFtcGxlIG1lZGlhIHBsYXllcnMuXG4gICAqL1xuICBuYXRpdmVVUkw6IHN0cmluZztcblxuICAvKipcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgdGltZSBvZiB0aGUgbGFzdCBtb2RpZmljYXRpb24uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBnZXRNZXRhZGF0YShcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBtZXRhZGF0YSBvZiB0aGUgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIE1ldGFkYXRhIG9iamVjdFxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXG4gICAqIEBwYXJhbSBtZXRhZGF0YU9iamVjdCB7TWV0YWRhdGF9IGtleXMgYW5kIHZhbHVlcyB0byBzZXRcbiAgICovXG4gIHNldE1ldGFkYXRhKFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrOiBFcnJvckNhbGxiYWNrLFxuICAgIG1ldGFkYXRhT2JqZWN0OiBNZXRhZGF0YVxuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBNb3ZlIGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxuICAgKlxuICAgKiA8dWk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cbiAgICogPGxpPm1vdmUgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8dWw+XG4gICAqXG4gICAqIEEgbW92ZSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuXG4gICAqIEEgbW92ZSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBkaXJlY3RvcnkuXG4gICAqL1xuICBtb3ZlVG8oXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQ29weSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcbiAgICpcbiAgICogPHVsPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XG4gICAqIDxsaT4gY29weSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8bGk+IEEgY29weSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuPC9saT5cbiAgICogPGxpPiBBIGNvcHkgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXRcbiAgICogZGlyZWN0b3J5LjwvbGk+XG4gICAqIDwvdWw+XG4gICAqXG4gICAqIERpcmVjdG9yeSBjb3BpZXMgYXJlIGFsd2F5cyByZWN1cnNpdmUtLXRoYXQgaXMsIHRoZXkgY29weSBhbGwgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICovXG4gIGNvcHlUbyhcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxuICAgIG5ld05hbWU/OiBzdHJpbmcsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS4gVW5saWtlIHRoZSBVUk4gZGVmaW5lZCBpbiBbRklMRS1BUEktRURdLCBpdCBoYXMgbm8gc3BlY2lmaWNcbiAgICogZXhwaXJhdGlvbjsgYXMgaXQgZGVzY3JpYmVzIGEgbG9jYXRpb24gb24gZGlzaywgaXQgc2hvdWxkIGJlIHZhbGlkIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhhdCBsb2NhdGlvbiBleGlzdHMuXG4gICAqL1xuICB0b1VSTCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS5cbiAgICogQHJldHVybiBzdHJpbmcgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5XG4gICAqL1xuICB0b0ludGVybmFsVVJMKCk6IHN0cmluZztcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGZpbGUgb3IgZGlyZWN0b3J5LiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGRlbGV0ZSBhIGRpcmVjdG9yeSB0aGF0IGlzIG5vdCBlbXB0eS4gSXQgaXMgYW4gZXJyb3IgdG9cbiAgICogYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlKHN1Y2Nlc3NDYWxsYmFjazogVm9pZENhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgdGhlIHBhcmVudCBEaXJlY3RvcnlFbnRyeSBjb250YWluaW5nIHRoaXMgRW50cnkuIElmIHRoaXMgRW50cnkgaXMgdGhlIHJvb3Qgb2YgaXRzIGZpbGVzeXN0ZW0sIGl0cyBwYXJlbnRcbiAgICogaXMgaXRzZWxmLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBwYXJlbnQgRW50cnkuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0UGFyZW50KFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRGlyZWN0b3J5RW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZGlyZWN0b3J5IG9uIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5RW50cnkgZXh0ZW5kcyBFbnRyeSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IERpcmVjdG9yeVJlYWRlciB0byByZWFkIEVudHJpZXMgZnJvbSB0aGlzIERpcmVjdG9yeS5cbiAgICovXG4gIGNyZWF0ZVJlYWRlcigpOiBEaXJlY3RvcnlSZWFkZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBmaWxlLlxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBmaWxlIHRvIGJlIGxvb2tlZCB1cCBvclxuICAgKiAgIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZmlsZSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlLCBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCBjcmVhdGUgaXQgYXMgYVxuICAgKiAgIHplcm8tbGVuZ3RoIGZpbGUgYW5kIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgRmlsZUVudHJ5LjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBkaXJlY3RvcnksIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCByZXR1cm4gYSBGaWxlRW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XG4gICAqICAgICA8L3VsPlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBGaWxlIHNlbGVjdGVkIG9yIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0RmlsZShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZsYWdzLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEZpbGVFbnRyeUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBwYXRoIEVpdGhlciBhbiBhYnNvbHV0ZSBwYXRoIG9yIGEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoaXMgRGlyZWN0b3J5RW50cnkgdG8gdGhlIGRpcmVjdG9yeSB0byBiZSBsb29rZWQgdXBcbiAgICogICBvciBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCBjcmVhdGUgYW5kIHJldHVyblxuICAgKiAgIGEgY29ycmVzcG9uZGluZyBEaXJlY3RvcnlFbnRyeS48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBmaWxlLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IHJldHVybiBhIERpcmVjdG9yeUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxuICAgKiAgICAgPC91bD5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayAgIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBEaXJlY3RvcnlFbnRyeSBzZWxlY3RlZCBvciBjcmVhdGVkLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICpcbiAgICovXG4gIGdldERpcmVjdG9yeShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZsYWdzLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGRpcmVjdG9yeSBhbmQgYWxsIG9mIGl0cyBjb250ZW50cywgaWYgYW55LiBJbiB0aGUgZXZlbnQgb2YgYW4gZXJyb3IgW2UuZy4gdHJ5aW5nIHRvIGRlbGV0ZSBhIGRpcmVjdG9yeVxuICAgKiB0aGF0IGNvbnRhaW5zIGEgZmlsZSB0aGF0IGNhbm5vdCBiZSByZW1vdmVkXSwgc29tZSBvZiB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeSBtYXkgYmUgZGVsZXRlZC4gSXQgaXMgYW4gZXJyb3JcbiAgICogdG8gYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlUmVjdXJzaXZlbHkoXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBWb2lkQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgbGV0cyBhIHVzZXIgbGlzdCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgaW4gYSBkaXJlY3RvcnkuIElmIHRoZXJlIGFyZSBubyBhZGRpdGlvbnMgdG8gb3JcbiAqIGRlbGV0aW9ucyBmcm9tIGEgZGlyZWN0b3J5IGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IGNhbGwgdG8gcmVhZEVudHJpZXMsIGFuZCBubyBlcnJvcnMgb2NjdXIsIHRoZW46XG4gKiA8dWw+XG4gKiA8bGk+IEEgc2VyaWVzIG9mIGNhbGxzIHRvIHJlYWRFbnRyaWVzIG11c3QgcmV0dXJuIGVhY2ggZW50cnkgaW4gdGhlIGRpcmVjdG9yeSBleGFjdGx5IG9uY2UuPC9saT5cbiAqIDxsaT4gT25jZSBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBuZXh0IGNhbGwgdG8gcmVhZEVudHJpZXMgbXVzdCBwcm9kdWNlIGFuIGVtcHR5IGFycmF5LjwvbGk+XG4gKiA8bGk+IElmIG5vdCBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBhcnJheSBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBiZSBlbXB0eS48L2xpPlxuICogPGxpPiBUaGUgZW50cmllcyBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBpbmNsdWRlIHRoZSBkaXJlY3RvcnkgaXRzZWxmIFtcIi5cIl0gb3IgaXRzIHBhcmVudCBbXCIuLlwiXS48L2xpPlxuICogPC91bD5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvcnlSZWFkZXIge1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBoYXNSZWFkRW50cmllczogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVhZCB0aGUgbmV4dCBibG9jayBvZiBlbnRyaWVzIGZyb20gdGhpcyBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQ2FsbGVkIG9uY2UgcGVyIHN1Y2Nlc3NmdWwgY2FsbCB0byByZWFkRW50cmllcyB0byBkZWxpdmVyIHRoZSBuZXh0IHByZXZpb3VzbHktdW5yZXBvcnRlZFxuICAgKiAgIHNldCBvZiBFbnRyaWVzIGluIHRoZSBhc3NvY2lhdGVkIERpcmVjdG9yeS4gSWYgYWxsIEVudHJpZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmV0dXJuZWQgZnJvbSBwcmV2aW91cyBpbnZvY2F0aW9uc1xuICAgKiAgIG9mIHJlYWRFbnRyaWVzLCBzdWNjZXNzQ2FsbGJhY2sgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIHplcm8tbGVuZ3RoIGFycmF5IGFzIGFuIGFyZ3VtZW50LlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIGluZGljYXRpbmcgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyBmcm9tIHRoZSBEaXJlY3RvcnkuXG4gICAqL1xuICByZWFkRW50cmllcyhcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEVudHJpZXNDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBvbiBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSBleHRlbmRzIEVudHJ5IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVdyaXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgbmV3IEZpbGVXcml0ZXIuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgY3JlYXRlV3JpdGVyKFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVdyaXRlckNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBGaWxlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBGaWxlLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGZpbGUoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBXaGVuIHJlcXVlc3RGaWxlU3lzdGVtKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZVN5c3RlbUNhbGxiYWNrID0gKGZpbGVzeXN0ZW06IEZpbGVTeXN0ZW0pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cnlDYWxsYmFjayA9IChlbnRyeTogRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRmlsZUVudHJ5IG9iamVjdHMuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBGaWxlRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRGlyZWN0b3J5RW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRGlyZWN0b3J5RW50cnlDYWxsYmFjayA9IChlbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogV2hlbiByZWFkRW50cmllcygpIHN1Y2NlZWRzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVudHJpZXNDYWxsYmFjayA9IChlbnRyaWVzOiBFbnRyeVtdKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIGZpbGUgYW5kIGRpcmVjdG9yeSBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgTWV0YWRhdGFDYWxsYmFjayA9IChtZXRhZGF0YTogTWV0YWRhdGEpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGNyZWF0ZSBhIEZpbGVXcml0ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVXcml0ZXJDYWxsYmFjayA9IChmaWxlV3JpdGVyOiBGaWxlV3JpdGVyKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBvYnRhaW4gYSBGaWxlLlxuICovXG5leHBvcnQgdHlwZSBGaWxlQ2FsbGJhY2sgPSAoZmlsZTogSUZpbGUpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBnZW5lcmljIGNhbGxiYWNrIHVzZWQgdG8gaW5kaWNhdGUgc3VjY2VzcyBvZiBhbiBhc3luY2hyb25vdXMgbWV0aG9kLlxuICovXG5leHBvcnQgdHlwZSBWb2lkQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFdoZW4gYW4gZXJyb3Igb2NjdXJzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVycm9yQ2FsbGJhY2sgPSAoZXJyOiBGaWxlRXJyb3IpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlUmVzdWx0IHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZmlsZVJlbW92ZWQ6IEVudHJ5O1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVNhdmVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAvKipcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcbiAgICogaW1wbGVtZW50aW5nIHRoZSBXb3JrZXJVdGlscyBpbnRlcmZhY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxuICAgKiA8b2w+XG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xuICAgKiBlbHNlLiA8L2xpPlxuICAgKiA8bGk+IFNldCByZWFkeVN0YXRlIHRvIERPTkUuIDwvbGk+XG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcbiAgICogdGFza3MuIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoZSB3cml0ZSBhbGdvcml0aG0gYmVpbmcgcHJvY2Vzc2VkLiA8L2xpPlxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgd3JpdGUgZW5kIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxuICAgKiA8L29sPlxuICAgKi9cbiAgYWJvcnQoKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIGJsb2IgaXMgYmVpbmcgd3JpdHRlbi5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBJTklUOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgb2JqZWN0IGhhcyBiZWVuIGNvbnN0cnVjdGVkLCBidXQgdGhlcmUgaXMgbm8gcGVuZGluZyB3cml0ZS5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBXUklUSU5HOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgZW50aXJlIEJsb2IgaGFzIGJlZW4gd3JpdHRlbiB0byB0aGUgZmlsZSwgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSB3cml0ZSwgb3IgdGhlIHdyaXRlIHdhcyBhYm9ydGVkIHVzaW5nXG4gICAqIGFib3J0KCkuIFRoZSBGaWxlU2F2ZXIgaXMgbm8gbG9uZ2VyIHdyaXRpbmcgdGhlIGJsb2IuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgRE9ORTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIEZpbGVTYXZlciBvYmplY3QgY2FuIGJlIGluIG9uZSBvZiAzIHN0YXRlcy4gVGhlIHJlYWR5U3RhdGUgYXR0cmlidXRlLCBvbiBnZXR0aW5nLCBtdXN0IHJldHVybiB0aGUgY3VycmVudFxuICAgKiBzdGF0ZSwgd2hpY2ggbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAqIDx1bD5cbiAgICogPGxpPklOSVQ8L2xpPlxuICAgKiA8bGk+V1JJVElORzwvbGk+XG4gICAqIDxsaT5ET05FPC9saT5cbiAgICogPHVsPlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHJlYWR5U3RhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgb24gdGhlIEZpbGVTYXZlci5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBlcnJvcjogRXJyb3I7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBzdGFydCBldmVudHNcbiAgICovXG4gIG9ud3JpdGVzdGFydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgcHJvZ3Jlc3MgZXZlbnRzLlxuICAgKi9cbiAgb25wcm9ncmVzczogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZXZlbnRzLlxuICAgKi9cbiAgb253cml0ZTogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgYWJvcnQgZXZlbnRzLlxuICAgKi9cbiAgb25hYm9ydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgZXJyb3IgZXZlbnRzLlxuICAgKi9cbiAgb25lcnJvcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZW5kIGV2ZW50cy5cbiAgICovXG4gIG9ud3JpdGVlbmQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcbiAgICogaW1wbGVtZW50aW5nIHRoZSBXb3JrZXJVdGlscyBpbnRlcmZhY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxuICAgKiA8b2w+XG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xuICAgKiBlbHNlLiA8L2xpPlxuICAgKiA8bGk+IFNldCByZWFkeVN0YXRlIHRvIERPTkUuIDwvbGk+XG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcbiAgICogdGFza3MuIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoZSB3cml0ZSBhbGdvcml0aG0gYmVpbmcgcHJvY2Vzc2VkLiA8L2xpPlxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgd3JpdGVlbmQgPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhpcyBhbGdvcml0aG0uIDwvbGk+XG4gICAqIDwvb2w+XG4gICAqL1xuICBhYm9ydCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFRoaXMgaW50ZXJmYWNlIGV4cGFuZHMgb24gdGhlIEZpbGVTYXZlciBpbnRlcmZhY2UgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHdyaXRlIGFjdGlvbnMsIHJhdGhlciB0aGFuIGp1c3Qgc2F2aW5nIGFcbiAqICAgc2luZ2xlIEJsb2IuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVXcml0ZXIgZXh0ZW5kcyBGaWxlU2F2ZXIge1xuICAvKipcbiAgICogVGhlIGJ5dGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHRvIHRoZSBmaWxlIHdpbGwgb2NjdXIuIFRoaXMgbXVzdCBiZSBubyBncmVhdGVyIHRoYW4gbGVuZ3RoLlxuICAgKiBBIG5ld2x5LWNyZWF0ZWQgRmlsZVdyaXRlciBtdXN0IGhhdmUgcG9zaXRpb24gc2V0IHRvIDAuXG4gICAqL1xuICBwb3NpdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBmaWxlLiBJZiB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIHJlYWQgYWNjZXNzIHRvIHRoZSBmaWxlLCB0aGlzIG11c3QgYmUgdGhlIGhpZ2hlc3QgYnl0ZSBvZmZzZXQgYXRcbiAgICogd2hpY2ggdGhlIHVzZXIgaGFzIHdyaXR0ZW4uXG4gICAqL1xuICBsZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogV3JpdGUgdGhlIHN1cHBsaWVkIGRhdGEgdG8gdGhlIGZpbGUgYXQgcG9zaXRpb24uXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBibG9iIHRvIHdyaXRlLlxuICAgKi9cbiAgd3JpdGUoZGF0YTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogU2VlayBzZXRzIHRoZSBmaWxlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHdpbGwgb2NjdXIuXG4gICAqIEBwYXJhbSBvZmZzZXQgSWYgbm9ubmVnYXRpdmUsIGFuIGFic29sdXRlIGJ5dGUgb2Zmc2V0IGludG8gdGhlIGZpbGUuIElmIG5lZ2F0aXZlLCBhbiBvZmZzZXQgYmFjayBmcm9tIHRoZSBlbmQgb2ZcbiAgICogICB0aGUgZmlsZS5cbiAgICovXG4gIHNlZWsob2Zmc2V0OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgdG8gdGhhdCBzcGVjaWZpZWQuIElmIHNob3J0ZW5pbmcgdGhlIGZpbGUsIGRhdGEgYmV5b25kIHRoZSBuZXcgbGVuZ3RoIG11c3QgYmVcbiAgICogZGlzY2FyZGVkLiBJZiBleHRlbmRpbmcgdGhlIGZpbGUsIHRoZSBleGlzdGluZyBkYXRhIG11c3QgYmUgemVyby1wYWRkZWQgdXAgdG8gdGhlIG5ldyBsZW5ndGguXG4gICAqIEBwYXJhbSBzaXplIFRoZSBzaXplIHRvIHdoaWNoIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgaXMgdG8gYmUgYWRqdXN0ZWQsIG1lYXN1cmVkIGluIGJ5dGVzLlxuICAgKi9cbiAgdHJ1bmNhdGUoc2l6ZTogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVPcHRpb25zIHtcbiAgcmVwbGFjZT86IGJvb2xlYW47XG4gIGFwcGVuZD86IGJvb2xlYW47XG4gIHRydW5jYXRlPzogbnVtYmVyOyAvLyBpZiBwcmVzZW50LCBudW1iZXIgb2YgYnl0ZXMgdG8gdHJ1bmNhdGUgZmlsZSB0byBiZWZvcmUgd3JpdGluZ1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZUVycm9yIHtcbiAgc3RhdGljIE5PVF9GT1VORF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNFQ1VSSVRZX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgQUJPUlRfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBOT1RfUkVBREFCTEVfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBFTkNPRElOR19FUlI6IG51bWJlcjtcbiAgc3RhdGljIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgSU5WQUxJRF9TVEFURV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNZTlRBWF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIElOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUVVPVEFfRVhDRUVERURfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBUWVBFX01JU01BVENIX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUEFUSF9FWElTVFNfRVJSOiBudW1iZXI7XG4gIC8qKiBFcnJvciBjb2RlICovXG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlcik7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlUmVhZGVyIHtcbiAgc3RhdGljIEVNUFRZOiBudW1iZXI7XG4gIHN0YXRpYyBMT0FESU5HOiBudW1iZXI7XG4gIHN0YXRpYyBET05FOiBudW1iZXI7XG4gIHN0YXRpYyBSRUFEX0NIVU5LX1NJWkU6IG51bWJlcjtcblxuICByZWFkeVN0YXRlOiBudW1iZXI7IC8vIHNlZSBjb25zdGFudHMgaW4gdmFyIGRlY2xhcmF0aW9uIGJlbG93XG4gIGVycm9yOiBFcnJvcjtcbiAgcmVzdWx0OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjsgLy8gdHlwZSBkZXBlbmRzIG9uIHJlYWRBc1hYWCgpIGNhbGwgdHlwZVxuXG4gIG9ubG9hZHN0YXJ0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbnByb2dyZXNzOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmxvYWQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9uZXJyb3I6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ubG9hZGVuZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25hYm9ydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcblxuICBhYm9ydCgpOiB2b2lkO1xuXG4gIHJlYWRBc1RleHQoZmU6IElGaWxlLCBlbmNvZGluZz86IHN0cmluZyk6IHZvaWQ7XG5cbiAgcmVhZEFzRGF0YVVSTChmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0FycmF5QnVmZmVyKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIFdpbmRvdyBleHRlbmRzIExvY2FsRmlsZVN5c3RlbSB7fVxuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogV2luZG93O1xuXG4vKipcbiAqIEBuYW1lIEZpbGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaW1wbGVtZW50cyBhIEZpbGUgQVBJIGFsbG93aW5nIHJlYWQvd3JpdGUgYWNjZXNzIHRvIGZpbGVzIHJlc2lkaW5nIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogVGhlIEZpbGUgY2xhc3MgaW1wbGVtZW50cyBzdGF0aWMgY29udmVuaWVuY2UgZnVuY3Rpb25zIHRvIGFjY2VzcyBmaWxlcyBhbmQgZGlyZWN0b3JpZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYFxuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlLmNoZWNrRGlyKHRoaXMuZmlsZS5kYXRhRGlyZWN0b3J5LCAnbXlkaXInKS50aGVuKF8gPT4gY29uc29sZS5sb2coJ0RpcmVjdG9yeSBleGlzdHMnKSkuY2F0Y2goZXJyID0+XG4gKiAgIGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZG9lc24ndCBleGlzdCcpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiAgVGhpcyBwbHVnaW4gaXMgYmFzZWQgb24gc2V2ZXJhbCBzcGVjcywgaW5jbHVkaW5nIDogVGhlIEhUTUw1IEZpbGUgQVBJIGh0dHA6IC8vd3d3LnczLm9yZy9UUi9GaWxlQVBJL1xuICogIFRoZSAobm93LWRlZnVuY3QpIERpcmVjdG9yaWVzIGFuZCBTeXN0ZW0gZXh0ZW5zaW9ucyBMYXRlc3Q6IGh0dHA6IC8vd3d3LnczLm9yZy9UUi8yMDEyL1dELWZpbGUtc3lzdGVtLWFwaS0yMDEyMDQxNy9cbiAqICBBbHRob3VnaCBtb3N0IG9mIHRoZSBwbHVnaW4gY29kZSB3YXMgd3JpdHRlbiB3aGVuIGFuIGVhcmxpZXIgc3BlYyB3YXMgY3VycmVudDogaHR0cDpcbiAqICAgLy93d3cudzMub3JnL1RSLzIwMTEvV0QtZmlsZS1zeXN0ZW0tYXBpLTIwMTEwNDE5LyBJdCBhbHNvIGltcGxlbWVudHMgdGhlIEZpbGVXcml0ZXIgc3BlYyA6IGh0dHA6XG4gKiAgIC8vZGV2LnczLm9yZy8yMDA5L2RhcC9maWxlLXN5c3RlbS9maWxlLXdyaXRlci5odG1sXG4gKiAgQGludGVyZmFjZXNcbiAqICBJRmlsZVxuICogIEVudHJ5XG4gKiAgRGlyZWN0b3J5RW50cnlcbiAqICBEaXJlY3RvcnlSZWFkZXJcbiAqICBGaWxlU3lzdGVtXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLmZpbGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiAgUmVhZC1vbmx5IGRpcmVjdG9yeSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcy5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhY2hlZCBmaWxlcyB0aGF0IHNob3VsZCBzdXJ2aXZlIGFwcCByZXN0YXJ0cy5cbiAgICogQXBwcyBzaG91bGQgbm90IHJlbHkgb24gdGhlIE9TIHRvIGRlbGV0ZSBmaWxlcyBpbiBoZXJlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGNhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBzcGFjZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBBbmRyb2lkOiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMgb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIGNhY2hlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxDYWNoZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgZXh0ZXJuYWwgc3RvcmFnZSAoU0QgY2FyZCkgcm9vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbFJvb3REaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBUZW1wIGRpcmVjdG9yeSB0aGF0IHRoZSBPUyBjYW4gY2xlYXIgYXQgd2lsbC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0ZW1wRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogSG9sZHMgYXBwLXNwZWNpZmljIGZpbGVzIHRoYXQgc2hvdWxkIGJlIHN5bmNlZCAoZS5nLiB0byBpQ2xvdWQpLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHN5bmNlZERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBGaWxlcyBwcml2YXRlIHRvIHRoZSBhcHAsIGJ1dCB0aGF0IGFyZSBtZWFuaW5nZnVsIHRvIG90aGVyIGFwcGxpY2F0aW9ucyAoZS5nLiBPZmZpY2UgZmlsZXMpXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZG9jdW1lbnRzRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJsYWNrQmVycnkxMDogRmlsZXMgZ2xvYmFsbHkgYXZhaWxhYmxlIHRvIGFsbCBhcHBzXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgc2hhcmVkRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgY29yZG92YUZpbGVFcnJvcjogYW55ID0ge1xuICAgIDE6ICdOT1RfRk9VTkRfRVJSJyxcbiAgICAyOiAnU0VDVVJJVFlfRVJSJyxcbiAgICAzOiAnQUJPUlRfRVJSJyxcbiAgICA0OiAnTk9UX1JFQURBQkxFX0VSUicsXG4gICAgNTogJ0VOQ09ESU5HX0VSUicsXG4gICAgNjogJ05PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUicsXG4gICAgNzogJ0lOVkFMSURfU1RBVEVfRVJSJyxcbiAgICA4OiAnU1lOVEFYX0VSUicsXG4gICAgOTogJ0lOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUicsXG4gICAgMTA6ICdRVU9UQV9FWENFRURFRF9FUlInLFxuICAgIDExOiAnVFlQRV9NSVNNQVRDSF9FUlInLFxuICAgIDEyOiAnUEFUSF9FWElTVFNfRVJSJyxcbiAgICAxMzogJ1dST05HX0VOVFJZX1RZUEUnLFxuICAgIDE0OiAnRElSX1JFQURfRVJSJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVtYWluaW5nIGZyZWUgZGlzayBzcGFjZSBpbiBCeXRlc1xuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGdldEZyZWVEaXNrU3BhY2UoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvcmRvdmEuZXhlYyhyZXNvbHZlIGFzIChkYXRhOiBhbnkpID0+IGFueSwgcmVqZWN0IGFzIChkYXRhOiBhbnkpID0+IGFueSwgJ0ZpbGUnLCAnZ2V0RnJlZURpc2tTcGFjZScsIFtdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGRpcmVjdG9yeSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY2hlY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgZGlyZWN0b3J5IGV4aXN0cyBvciByZWplY3RzIHdpdGggYW5cbiAgICogICBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjaGVja0RpcihwYXRoOiBzdHJpbmcsIGRpcjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpcikpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aCArIGRpcjtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKGZ1bGxQYXRoKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZGlyZWN0b3J5IGluIHRoZSBzcGVjaWZpYyBwYXRoLlxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAqIElmIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIElmIHRydWUsIHJlcGxhY2VzIGZpbGUgd2l0aCBzYW1lIG5hbWUuIElmIGZhbHNlIHJldHVybnMgZXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBEaXJlY3RvcnlFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlRGlyKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBkaXJOYW1lOiBzdHJpbmcsXG4gICAgcmVwbGFjZTogYm9vbGVhblxuICApOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oZnNlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGRpcmVjdG9yeSBhdCBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgVGhlIGRpcmVjdG9yeSBuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGRpcmVjdG9yeSB0byBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBzb3VyY2UgcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBzb3VyY2UgZGlyZWN0b3J5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggVGhlIGRlc3RpbmF0aW9uIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBUaGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnl8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRGlyZWN0b3J5RW50cnkgb2JqZWN0IG9yXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIG1vdmVEaXIoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGRpck5hbWU6IHN0cmluZyxcbiAgICBuZXdQYXRoOiBzdHJpbmcsXG4gICAgbmV3RGlyTmFtZTogc3RyaW5nXG4gICk6IFByb21pc2U8RGlyZWN0b3J5RW50cnkgfCBFbnRyeT4ge1xuICAgIG5ld0Rpck5hbWUgPSBuZXdEaXJOYW1lIHx8IGRpck5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZW5hdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNkZSwgZGVzdGVuYXRpb24sIG5ld0Rpck5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgYSBkaXJlY3RvcnkgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtcyBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjb3B5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgTmV3IG5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjb3B5RGlyKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBkaXJOYW1lOiBzdHJpbmcsXG4gICAgbmV3UGF0aDogc3RyaW5nLFxuICAgIG5ld0Rpck5hbWU6IHN0cmluZ1xuICApOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3JjZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZGUsIGRlc3RlLCBuZXdEaXJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IGZpbGVzIGFuZCBkaXJlY3RvcnkgZnJvbSBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnlbXT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgRW50cnkgb2JqZWN0cyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbGlzdERpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnlbXT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxFbnRyeVtdPihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHtcbiAgICAgICAgICBjcmVhdGU6IGZhbHNlLFxuICAgICAgICAgIGV4Y2x1c2l2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBkZS5jcmVhdGVSZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEVudHJpZXMocmVhZGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGZpbGVzIGFuZCB0aGUgZGlyZWN0b3J5IGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVSZWN1cnNpdmVseShwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PFJlbW92ZVJlc3VsdD4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yaW1yYWYoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBmaWxlIGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjaGVja0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKHBhdGggKyBmaWxlKS50aGVuKGZzZSA9PiB7XG4gICAgICBpZiAoZnNlLmlzRmlsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xuICAgICAgICBlcnIubWVzc2FnZSA9ICdpbnB1dCBpcyBub3QgYSBmaWxlJztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGJvb2xlYW4+KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBmaWxlIGluIHRoZSBzcGVjaWZpYyBwYXRoLlxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgKiBJZiBhbiBleGlzdGluZyBmaWxlIGV4aXN0cyBhbmQgdGhlIHJlcGxhY2UgdmFsdWUgaXMgZmFsc2UsIHRoZSBwcm9taXNlIHdpbGwgZmFpbCBhbmQgcmV0dXJuIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZUZpbGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgcmVwbGFjZTogYm9vbGVhblxuICApOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiB0cnVlXG4gICAgfTtcblxuICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgb3B0aW9ucy5leGNsdXNpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aCkudGhlbihmc2UgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgZmlsZSBmcm9tIGEgZGVzaXJlZCBsb2NhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIHJlbW92ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZmUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZmUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYSBuZXcgZmlsZSB0byB0aGUgZGVzaXJlZCBsb2NhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBwYXRoIHJlbGF0aXZlIHRvIGJhc2UgcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCBjb250ZW50LCBibG9iIG9yIEFycmF5QnVmZmVyIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gd2hldGhlciB0byByZXBsYWNlL2FwcGVuZCB0byBhbiBleGlzdGluZyBmaWxlLiBTZWUgSVdyaXRlT3B0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHdyaXRlRmlsZShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICB0ZXh0OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIsXG4gICAgb3B0aW9uczogSVdyaXRlT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEZpbGVPcHRzOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogIW9wdGlvbnMuYXBwZW5kLFxuICAgICAgZXhjbHVzaXZlOiAhb3B0aW9ucy5yZXBsYWNlXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUsIGdldEZpbGVPcHRzKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlRW50cnkoZmlsZUVudHJ5LCB0ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGNvbnRlbnQgdG8gRmlsZUVudHJ5LlxuICAgKiBAaGlkZGVuXG4gICAqIFdyaXRlIHRvIGFuIGV4aXN0aW5nIGZpbGUuXG4gICAqIEBwYXJhbSB7RmlsZUVudHJ5fSBmZSBmaWxlIGVudHJ5IG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IG9wdGlvbnMgcmVwbGFjZSBmaWxlIGlmIHNldCB0byB0cnVlLiBTZWUgV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fSAgUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZUZpbGVFbnRyeShcbiAgICBmZTogRmlsZUVudHJ5LFxuICAgIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcixcbiAgICBvcHRpb25zOiBJV3JpdGVPcHRpb25zXG4gICkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyaXRlcihmZSlcbiAgICAgIC50aGVuKHdyaXRlciA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmFwcGVuZCkge1xuICAgICAgICAgIHdyaXRlci5zZWVrKHdyaXRlci5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHJ1bmNhdGUpIHtcbiAgICAgICAgICB3cml0ZXIudHJ1bmNhdGUob3B0aW9ucy50cnVuY2F0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZSh3cml0ZXIsIHRleHQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYn0gdGV4dCBjb250ZW50IG9yIGJsb2IgdG8gd3JpdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHdyaXRlRXhpc3RpbmdGaWxlKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxuICAgIHRleHQ6IHN0cmluZyB8IEJsb2JcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlKHBhdGgsIGZpbGVOYW1lLCB0ZXh0LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgY29udGVudHMgb2YgYSBmaWxlIGFzIHRleHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgc3RyaW5nIG9yIHJlamVjdHMgd2l0aFxuICAgKiAgIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc1RleHQocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ1RleHQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGEgYmFzZTY0IGVuY29kZWQgZGF0YSB1cmwuXG4gICAqIEEgZGF0YSB1cmwgaXMgb2YgdGhlIGZvcm06XG4gICAqICAgICAgZGF0YTogWzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBkYXRhIFVSTCBvciByZWplY3RzXG4gICAqICAgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNEYXRhVVJMKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdEYXRhVVJMJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJpbmFyeSBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyByZWplY3RzIHdpdGggYW5cbiAgICogICBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNCaW5hcnlTdHJpbmcocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0JpbmFyeVN0cmluZycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYW4gQXJyYXlCdWZmZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBBcnJheUJ1ZmZlciBvclxuICAgKiAgIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNBcnJheUJ1ZmZlcihwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxBcnJheUJ1ZmZlcj4ocGF0aCwgZmlsZSwgJ0FycmF5QnVmZmVyJyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGZpbGUgdG8gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBtb3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gbW92ZSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbW92ZUZpbGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgbmV3UGF0aDogc3RyaW5nLFxuICAgIG5ld0ZpbGVOYW1lOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNmZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IGEgZmlsZSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGZpbGUgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY29weVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjb3B5RmlsZShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICBuZXdQYXRoOiBzdHJpbmcsXG4gICAgbmV3RmlsZU5hbWU6IHN0cmluZ1xuICApOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgbmV3RmlsZU5hbWUgPSBuZXdGaWxlTmFtZSB8fCBmaWxlTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2ZlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgZmlsbEVycm9yTWVzc2FnZShlcnI6IEZpbGVFcnJvcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBlcnIubWVzc2FnZSA9IHRoaXMuY29yZG92YUZpbGVFcnJvcltlcnIuY29kZV07XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGZpbGUgc3lzdGVtIFVSTFxuICAgKiBAcGFyYW0gZmlsZVVybCB7c3RyaW5nfSBmaWxlIHN5c3RlbSB1cmxcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZmlsZVVybDogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTChcbiAgICAgICAgICBmaWxlVXJsLFxuICAgICAgICAgIChlbnRyeTogRW50cnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZW50cnkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGRpcmVjdG9yeSB1cmxcbiAgICogQHBhcmFtIGRpcmVjdG9yeVVybCB7c3RyaW5nfSBkaXJlY3Rvcnkgc3lzdGVtIHVybFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVzb2x2ZURpcmVjdG9yeVVybChkaXJlY3RvcnlVcmw6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGRpcmVjdG9yeVVybCkudGhlbihkZSA9PiB7XG4gICAgICBpZiAoZGUuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIGRlIGFzIERpcmVjdG9yeUVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGRpcmVjdG9yeSc7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxEaXJlY3RvcnlFbnRyeT4oZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxuICAgKiBAcGFyYW0gZGlyZWN0b3J5TmFtZSB7c3RyaW5nfSBEaXJlY3RvcnkgbmFtZVxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXREaXJlY3RvcnkoXG4gICAgZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LFxuICAgIGRpcmVjdG9yeU5hbWU6IHN0cmluZyxcbiAgICBmbGFnczogRmxhZ3NcbiAgKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RGlyZWN0b3J5KFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWUsXG4gICAgICAgICAgZmxhZ3MsXG4gICAgICAgICAgZGUgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGZpbGVcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxuICAgKiBAcGFyYW0gZmlsZU5hbWUge3N0cmluZ30gRmlsZSBuYW1lXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXRGaWxlKFxuICAgIGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSxcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxuICAgIGZsYWdzOiBGbGFnc1xuICApOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxGaWxlRW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldEZpbGUoZmlsZU5hbWUsIGZsYWdzLCByZXNvbHZlLCBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XG4gICAgICAgIHJlamVjdCh4Yyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRGaWxlPFQ+KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmaWxlOiBzdHJpbmcsXG4gICAgcmVhZEFzOiAnQXJyYXlCdWZmZXInIHwgJ0JpbmFyeVN0cmluZycgfCAnRGF0YVVSTCcgfCAnVGV4dCdcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZGlyZWN0b3J5RW50cnksIGZpbGUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIGdldFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVhZGVyLnJlc3VsdCAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5yZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgocmVhZGVyLnJlc3VsdCBhcyBhbnkpIGFzIFQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWFkZXIuZXJyb3IgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIuZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoeyBjb2RlOiBudWxsLCBtZXNzYWdlOiAnUkVBREVSX09OTE9BREVORF9FUlInIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmaWxlRW50cnkuZmlsZShcbiAgICAgICAgICAgIGZpbGUgPT4ge1xuICAgICAgICAgICAgICByZWFkZXJbYHJlYWRBcyR7cmVhZEFzfWBdLmNhbGwocmVhZGVyLCBmaWxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZShmZTogRW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW1vdmVSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZlLnJlbW92ZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZmUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlKFxuICAgIHNyY2U6IEVudHJ5LFxuICAgIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LFxuICAgIG5ld05hbWU6IHN0cmluZ1xuICApOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLm1vdmVUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgZGVzdGUgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY29weShcbiAgICBzcmNlOiBFbnRyeSxcbiAgICBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSxcbiAgICBuZXdOYW1lOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3JjZS5jb3B5VG8oXG4gICAgICAgIGRlc3RkaXIsXG4gICAgICAgIG5ld05hbWUsXG4gICAgICAgIGRlc3RlID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRlc3RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHJlYWRFbnRyaWVzKGRyOiBEaXJlY3RvcnlSZWFkZXIpOiBQcm9taXNlPEVudHJ5W10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RW50cnlbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZHIucmVhZEVudHJpZXMoXG4gICAgICAgIGVudHJpZXMgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZW50cmllcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByaW1yYWYoZGU6IERpcmVjdG9yeUVudHJ5KTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVtb3ZlUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBkZS5yZW1vdmVSZWN1cnNpdmVseShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZGUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVXcml0ZXIoZmU6IEZpbGVFbnRyeSk6IFByb21pc2U8RmlsZVdyaXRlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxGaWxlV3JpdGVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZS5jcmVhdGVXcml0ZXIoXG4gICAgICAgIHdyaXRlciA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh3cml0ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgd3JpdGUoXG4gICAgd3JpdGVyOiBGaWxlV3JpdGVyLFxuICAgIGd1OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXJcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoZ3UgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICByZXR1cm4gdGhpcy53cml0ZUZpbGVJbkNodW5rcyh3cml0ZXIsIGd1KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3cml0ZXIub253cml0ZWVuZCA9IGV2dCA9PiB7XG4gICAgICAgIGlmICh3cml0ZXIuZXJyb3IpIHtcbiAgICAgICAgICByZWplY3Qod3JpdGVyLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGV2dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3cml0ZXIud3JpdGUoZ3UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgd3JpdGVGaWxlSW5DaHVua3Mod3JpdGVyOiBGaWxlV3JpdGVyLCBmaWxlOiBCbG9iKSB7XG4gICAgY29uc3QgQkxPQ0tfU0laRSA9IDEwMjQgKiAxMDI0O1xuICAgIGxldCB3cml0dGVuU2l6ZSA9IDA7XG5cbiAgICBmdW5jdGlvbiB3cml0ZU5leHRDaHVuaygpIHtcbiAgICAgIGNvbnN0IHNpemUgPSBNYXRoLm1pbihCTE9DS19TSVpFLCBmaWxlLnNpemUgLSB3cml0dGVuU2l6ZSk7XG4gICAgICBjb25zdCBjaHVuayA9IGZpbGUuc2xpY2Uod3JpdHRlblNpemUsIHdyaXR0ZW5TaXplICsgc2l6ZSk7XG5cbiAgICAgIHdyaXR0ZW5TaXplICs9IHNpemU7XG4gICAgICB3cml0ZXIud3JpdGUoY2h1bmspO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3JpdGVyLm9uZXJyb3IgPSByZWplY3QgYXMgKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAgICAgd3JpdGVyLm9ud3JpdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3cml0dGVuU2l6ZSA8IGZpbGUuc2l6ZSkge1xuICAgICAgICAgIHdyaXRlTmV4dENodW5rKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd3JpdGVOZXh0Q2h1bmsoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs-homePage.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs-homePage.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!-- <p> Ohh!!!! </p>\n<p> That's awesome </p> -->\n\n<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Face-Capture and Recognition\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-col class=\"ion-align-self-center\">\n          <div style=\"height: 100%; display: flex;align-items: center; justify-content: center;\">\n            <ion-card>\n              <ion-card-header>\n                <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n                <ion-card-title>Find a Match</ion-card-title>\n              </ion-card-header>\n  \n              <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" > -->\n              <!-- </ion-fab> -->\n              <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n                <ion-card-content>\n                    <ion-button [routerLink]=\"['/Match']\" color=\"success\">Match Face</ion-button>\n                </ion-card-content>\n              </div>\n            </ion-card>\n          </div>\n        </ion-col>\n        <p style=\"color: white; text-align: center;font-size: x-large;\"> OR </p>\n\n        <ion-col>\n          <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title>Upload to database!</ion-card-title>\n              </ion-card-header>\n              <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n                <ion-card-content>\n                    <ion-button [routerLink]=\"['/Upload']\">Upload!</ion-button> \n                </ion-card-content>\n              </div>\n            </ion-card>\n          </div>\n        </ion-col>\n      </ion-grid>\n    \n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs-match.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs-match.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-tabs>\n\n   <ion-tab-bar slot=\"bottom\"> \n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"camera\"></ion-icon>\n      <ion-label>Home page</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs> -->\n\n<!-- <input\n  style=\"display: none\"\n  type=\"file\" (change)=\"onFileChanged($event)\"\n  #fileInput>\n<button (click)=\"fileInput.click()\">Select File</button>\n<button (click)=\"onUpload()\">Upload!</button> -->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Match Face\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"myclass\"> -->\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"takePicture()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n  <!-- <input type=\"file\" name=\"file\" (change)=\"onFileChanged($event)\" #fileInput> -->\n\n  <!-- <ion-button (click)=\"fileInput.click()\">Select File</ion-button>\n      \n      <ion-button color=\"success\" (click)=\"matchFace()\">Match Face</ion-button>\n      \n      <ion-button (click)=\"onUpload()\">\n        <ion-icon name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n      \n      <ion-button color=\"warning\" (click)=\"getImage()\">Display Image</ion-button>\n      \n      <br>\n      <br> \n      <ion-input background=\"blue\" autofocus=\"true\" type=\"text\" (input)=\"onNameChanged($event.target.value)\"></ion-input> -->\n\n\n  <div *ngIf=\"hide_home\">\n    <ion-grid>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"height: 100%; display: flex;align-items: center; justify-content: center;\">\n          <ion-card>\n            <ion-card-header>\n              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n              <ion-card-title>Capture a new Image!</ion-card-title>\n            </ion-card-header>\n\n            <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" > -->\n            <!-- </ion-fab> -->\n            <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n              <ion-card-content>\n                <ion-button (click)=\"takePicture()\">\n                  <ion-icon name=\"camera\"></ion-icon>\n                  Capture Image\n                </ion-button>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <!-- <hr color=\"white\" width=\"85%\" > -->\n      <p style=\"color: white; text-align: center;font-size: x-large;margin-top: 0%;margin-bottom: 0%;\"> OR </p>\n\n      <ion-col>\n        <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Upload from your device!</ion-card-title>\n            </ion-card-header>\n            <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n              <ion-card-content>\n                <ion-button (click)=\"fileInput.click()\">\n                  <input type=\"file\" name=\"file\" (change)=\"onFileChanged($event)\" #fileInput>\n                  <ion-icon name=\"cloud-upload\"></ion-icon>\n                  Upload File\n                </ion-button>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-grid>\n    <!-- <ion-button color=\"success\" (click)=\"matchFace()\">Match Face</ion-button>\n    <ion-button color=\"warning\" (click)=\"getImage()\">Display Image</ion-button>\n    <ion-button (click)=\"onUpload()\">Upload!</ion-button>  -->\n\n  </div>\n  <!-- <ion-button (click)=\"hide()\"> hide </ion-button>\n    <ion-button (click)=\"unhide()\"> unhide </ion-button> -->\n  <div *ngIf=\"isImageSaved\" style=\"text-align:-webkit-center;\">\n    <ion-img style=\"width: 75vw; height: 75vh;align-self:center;margin-top: 2%;\" [src]=\"cardImageBase64\"></ion-img>\n    <ion-button style=\"margin-top: 2%;margin-right: 1%;\" color=\"success\" (click)=\"confirmed()\">Confirm</ion-button>\n    <ion-button style=\"margin-top: 2%;margin-left: 1%;\" color=\"danger\" (click)=\"goBack()\"> Cancel </ion-button>\n  </div>\n  <!-- <ion-img width=\"20\" height=\"20\" [src]=\"base64Image\"></ion-img> -->\n  <div *ngIf=\"hide_home\" style=\"text-align: center;\">\n    <ion-button color=\"danger\" [routerLink]=\"['/']\"> Back </ion-button>\n  </div>\n\n  <div *ngIf=\"isMatched\" style=\"text-align:-webkit-center;\">\n    <!-- <ion-img style=\"width: 30vw; height: 30vh;align-self:center;margin-top: 2%;\" [src]=\"cardImageBase64\"></ion-img> -->\n    <p style=\"color: white\" (click)=\"get_name()\"> The person in the image is {{ this.faceName }}</p>\n    <ion-img *ngIf=\"!show_matched\" style=\"width: 75vw; height: 75vh;align-self:center;\" [src]=\"base64Image\"></ion-img>\n    <ion-img *ngIf=\"show_matched\" style=\"width: 75vw; height: 75vh;align-self:center;\" [src]=\"matched_image\"></ion-img>\n    <ion-button *ngIf=\"!show_matched\" style=\"margin-top: 2%;margin-left: 1%;\" color=\"success\" (click)=\"show_matched_face()\"> Show Matched </ion-button>\n    <ion-button *ngIf=\"show_matched\" style=\"margin-top: 2%;margin-left: 1%;\" color=\"success\" (click)=\"unshow_matched_face()\"> Show Original </ion-button>\n    <ion-button style=\"margin-top: 2%;margin-left: 1%;\" color=\"danger\" (click)=\"goBack()\"> Back </ion-button>\n  </div>\n</ion-content>\n<!-- <div background=\"white\">\n    <ion-input background=\"white\" autofocus=\"true\" font-color=\"white\" type=\"text\" (input)=\"onNameChanged($event.target.value)\"></ion-input>\n  </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs-upload.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs-upload.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-tabs>\n\n   <ion-tab-bar slot=\"bottom\"> \n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"camera\"></ion-icon>\n      <ion-label>Home page</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs> -->\n\n<!-- <input\n  style=\"display: none\"\n  type=\"file\" (change)=\"onFileChanged($event)\"\n  #fileInput>\n<button (click)=\"fileInput.click()\">Select File</button>\n<button (click)=\"onUpload()\">Upload!</button> -->\n\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Upload Image\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"myclass\"> -->\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"takePicture()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n  <!-- <input type=\"file\" name=\"file\" (change)=\"onFileChanged($event)\" #fileInput> -->\n\n  <!-- <ion-button (click)=\"fileInput.click()\">Select File</ion-button>\n      \n      <ion-button color=\"success\" (click)=\"matchFace()\">Match Face</ion-button>\n      \n      <ion-button (click)=\"onUpload()\">\n        <ion-icon name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n      \n      <ion-button color=\"warning\" (click)=\"getImage()\">Display Image</ion-button>\n      \n      <br>\n      <br> \n      <ion-input background=\"blue\" autofocus=\"true\" type=\"text\" (input)=\"onNameChanged($event.target.value)\"></ion-input> -->\n\n\n\n  <div *ngIf=\"isSuccess\" style=\"color: rgb(81, 211, 30); text-align: center;padding-top: 1%;\">\n    Uploaded Succesfully\n  </div>\n\n  <div *ngIf=\"hide_home\">\n    <ion-grid>\n      <ion-col class=\"ion-align-self-center\">\n        <div style=\"height: 100%; display: flex;align-items: center; justify-content: center;\">\n          <ion-card>\n            <ion-card-header>\n              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n              <ion-card-title>Capture a new Image!</ion-card-title>\n            </ion-card-header>\n\n            <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" > -->\n            <!-- </ion-fab> -->\n            <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n              <ion-card-content>\n                <ion-button (click)=\"takePicture()\">\n                  <ion-icon name=\"camera\"></ion-icon>\n                  Capture Image\n                </ion-button>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <!-- <hr color=\"white\" width=\"85%\" > -->\n      <p style=\"color: white; text-align: center;font-size: x-large;margin-top: 0%;margin-bottom: 0%;\"> OR </p>\n\n      <ion-col>\n        <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Upload from your device!</ion-card-title>\n            </ion-card-header>\n            <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n              <ion-card-content>\n                <ion-button (click)=\"fileInput.click()\">\n                  <input type=\"file\" name=\"file\" (change)=\"onFileChanged($event)\" #fileInput>\n                  <ion-icon name=\"cloud-upload\"></ion-icon>\n                  Upload File\n                </ion-button>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-grid>\n    <!-- <ion-button color=\"success\" (click)=\"matchFace()\">Match Face</ion-button>\n    <ion-button color=\"warning\" (click)=\"getImage()\">Display Image</ion-button>\n    <ion-button (click)=\"onUpload()\">Upload!</ion-button>  -->\n\n  </div>\n  <!-- <ion-button (click)=\"hide()\"> hide </ion-button>\n    <ion-button (click)=\"unhide()\"> unhide </ion-button> -->\n  <div *ngIf=\"isImageSaved\" style=\"text-align:-webkit-center;\">\n    <ion-img style=\"width: 75vw; height: 75vh;align-self:center;margin-top: 2%;\" [src]=\"cardImageBase64\"></ion-img>\n    <ion-button style=\"margin-top: 2%;\" color=\"success\" (click)=\"presentAlertPrompt()\">Confirm</ion-button>\n    <ion-button style=\"margin-top: 2%;\" color=\"danger\" (click)=\"goBack()\">Cancel</ion-button>\n  </div>\n  <!-- <ion-img width=\"20\" height=\"20\" [src]=\"base64Image\"></ion-img> -->\n  <div *ngIf=\"hide_home\" style=\"text-align: center;\">\n    <ion-button color=\"danger\" [routerLink]=\"['/']\"> Back </ion-button>\n  </div>\n</ion-content>\n<!-- <div background=\"white\">\n    <ion-input background=\"white\" autofocus=\"true\" font-color=\"white\" type=\"text\" (input)=\"onNameChanged($event.target.value)\"></ion-input>\n  </div> -->"

/***/ }),

/***/ "./src/app/tabs/tabs-homePage.page.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs-homePage.page.ts ***!
  \********************************************/
/*! exports provided: Tabs_homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_homePage", function() { return Tabs_homePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tabs_homePage = /** @class */ (function () {
    function Tabs_homePage() {
    }
    Tabs_homePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs-homePage.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs-homePage.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tabs_homePage);
    return Tabs_homePage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs-match.page.ts":
/*!*****************************************!*\
  !*** ./src/app/tabs/tabs-match.page.ts ***!
  \*****************************************/
/*! exports provided: Tabs_match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_match", function() { return Tabs_match; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");






var FileTransfer = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].FileTransfer, Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Filesystem;
var Tabs_match = /** @class */ (function () {
    function Tabs_match(sanitizer, http, file) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.file = file;
        this.faceName = "__________"; // Name of the person identified
        this.itr = 0;
        this.head = 'data:image/jpg;base64,'; // Extra header for converting into JPEG format
        this.show_matched = false;
        this.hide_home = true;
        this.isMatched = false;
        // this.my_ip = 'http://0.0.0.0:5000'
        // this.my_ip = 'http://bd04a536.ngrok.io'
        /* Change this line to set the IP address of the backend server */
        this.my_ip = 'http://serverbysahil.herokuapp.com';
    }
    /* Function called when the "Show matched" button is clicked after fining a match */
    Tabs_match.prototype.show_matched_face = function () {
        this.show_matched = true;
    };
    /* Function called when the "Show Original" button is clicked after fining a match */
    Tabs_match.prototype.unshow_matched_face = function () {
        this.show_matched = false;
    };
    /* Function called to get the name of the identified person for displaying in the app */
    Tabs_match.prototype.get_name = function () {
        return this.faceName;
    };
    /* Function used to read a file from the device */
    Tabs_match.prototype.getFileReader = function () {
        var fileReader = new FileReader();
        var zoneOriginalInstance = fileReader["__zone_symbol__originalInstance"];
        return zoneOriginalInstance || fileReader;
    };
    /* Function to set a delay for specified time (in milliseconds) */
    Tabs_match.prototype.delay = function (ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tabs_match.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    /*
    Function used to capture an image through device's camera
    Called when "Capture image" button is clicked
    The captured image is strored in the variable "this.cardImageBase64"
    */
    Tabs_match.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hide_home = false;
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                                quality: 100,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64,
                                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera
                            })];
                    case 1:
                        image = _a.sent();
                        /* This part of code converts the image in base64 string format to base64 JPEG image */
                        this.cardImageBase64 = image.base64String;
                        this.clickedImage = this.b64toBlob(image.base64String, 'image/png');
                        this.itr = 0;
                        while (this.itr < this.head.length) {
                            if (this.cardImageBase64[this.itr] != this.head[this.itr]) {
                                this.cardImageBase64 = this.head + this.cardImageBase64;
                                break;
                            }
                        }
                        this.isImageSaved = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
    This function is used to select a file and read image from the selected file
    Called when "Upolad File" button is clicked
    The selected image is strored in the variable "this.cardImageBase64"
    */
    Tabs_match.prototype.onFileChanged = function (event) {
        var _this = this;
        this.hide_home = false;
        this.selectedFile = event.target.files[0];
        /* this part of cade selects a file and reads the image in the file */
        var reader = this.getFileReader();
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function (rs) {
                var imgBase64Path = e.target.result;
                _this.cardImageBase64 = imgBase64Path;
                console.log(_this.cardImageBase64);
                _this.isImageSaved = true;
            };
        };
        reader.readAsDataURL(event.target.files[0]);
        this.delay(1000);
    };
    Tabs_match.prototype.onNameChanged = function (searchValue) {
        this.namefield = searchValue;
        console.log(searchValue);
    };
    /*
    This function finds a match for the image using the corresponding routes for image clicked by camera and selected as file
    Both requests send back the selected image with a box around the name specifying the person's name and the image it is matched to along with the name of the person
    */
    Tabs_match.prototype.matchFace = function () {
        var _this = this;
        /*
        Matches an image clicked by camera along with the name of the person to the backend server using http POST request
        Response contains the following:
        1) The original image sent for match with a boox around the face
        2) The image with which it is matched with
        3) Name of the person identified
        */
        if (!this.selectedFile) {
            this.http.post(this.my_ip + '/imagematch', this.clickedImage).subscribe(function (res) {
                // this.getImage();
                console.log("res");
                console.log(res);
                _this.base64Image = 'data:image/jpg;base64,' + res['boxed_image'];
                _this.faceName = res['face_name'];
                _this.matched_image = 'data:image/jpg;base64,' + res['matched_image'];
                // this.faceName = res['face_name']
                // console.log(this.base64Image)
            }, function (err) {
                console.log("err", err);
                _this.faceName = "Unknown";
                _this.base64Image = _this.cardImageBase64;
            });
        }
        /*
        Matches an image selected from a file along with the name of the person to the backend server using http POST request
        Response contains the following :
        1) The original image sent for match with a boox around the face
        2) The image with which it is matched with
        3) Name of the person identified
        */
        else {
            this.http.post(this.my_ip + '/imagematch', this.selectedFile).subscribe(function (res) {
                // this.getImage();
                _this.base64Image = 'data:image/jpg;base64,' + res['boxed_image'];
                _this.faceName = res['face_name'];
                _this.matched_image = 'data:image/jpg;base64,' + res['matched_image'];
                console.log(_this.base64Image);
                // console.log(res['matched_image'])
            }, function (err) {
                console.log("err", err);
                _this.faceName = "Unknown";
                _this.base64Image = _this.cardImageBase64;
            });
        }
    };
    /* This function is called when The "confirm" button is clicked after selecting an image to find match */
    Tabs_match.prototype.confirmed = function () {
        // this.hide_home=true
        this.isMatched = true;
        this.isImageSaved = false;
        this.matchFace();
    };
    /* This function is used to go back to the "Upload an image" page to select another image to upload */
    Tabs_match.prototype.goBack = function () {
        window.location.reload();
    };
    Tabs_match.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] }
    ]; };
    Tabs_match = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs-match.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs-match.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
        /*
        Developed by:
        SAHIL BHATT, VINAY KUMAR TADEPALLI, AMOGH TIWARI, UMESH CHANDRA POLA
        @2020
        
        This code explains the functions used to choose an image for performing face recognition as well as the communication
        mechanism between the app and server.
        Installation of the libraries above via 'npm install' is necessary for running the app
        ----------------------------------------------------------------------------------------------------
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]])
    ], Tabs_match);
    return Tabs_match;
}());



/***/ }),

/***/ "./src/app/tabs/tabs-upload.page.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs-upload.page.ts ***!
  \******************************************/
/*! exports provided: Tabs_upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_upload", function() { return Tabs_upload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var Tabs_upload = /** @class */ (function () {
    /* This part of code converts the image in base64 string format to base64 JPEG image */
    function Tabs_upload(sanitizer, http, file, alertController) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.file = file;
        this.alertController = alertController;
        this.itr = 0;
        this.head = 'data:image/jpg;base64,'; // Extra header for converting into JPEG format
        this.hide_home = true;
        this.isSuccess = false;
        // this.my_ip = 'http://0.0.0.0:5000'
        // this.my_ip = 'http://bd04a536.ngrok.io'
        /* Change this line to set the IP address of the backend server */
        this.my_ip = 'http://serverbysahil.herokuapp.com';
    }
    /* Function used to read a file from the device */
    Tabs_upload.prototype.getFileReader = function () {
        var fileReader = new FileReader();
        var zoneOriginalInstance = fileReader["__zone_symbol__originalInstance"];
        return zoneOriginalInstance || fileReader;
    };
    /* Function to set a delay for specified time (in milliseconds) */
    Tabs_upload.prototype.delay = function (ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
    Function used to capture an image through device's camera
    Called when "Capture image" button is clicked
    The captured image is strored in the variable "this.cardImageBase64"
    */
    Tabs_upload.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isSuccess = false;
                        this.hide_home = false;
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                                quality: 100,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64,
                                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera
                            })];
                    case 1:
                        image = _a.sent();
                        /* This part of code converts the image in base64 string format to base64 JPEG image */
                        this.cardImageBase64 = image.base64String;
                        this.clickedImage = image.base64String;
                        this.itr = 0;
                        while (this.itr < this.head.length) {
                            if (this.cardImageBase64[this.itr] != this.head[this.itr]) {
                                this.cardImageBase64 = this.head + this.cardImageBase64;
                                break;
                            }
                        }
                        this.isImageSaved = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
    This function is used to select a file and read image from the selected file
    Called when "Upolad File" button is clicked
    The selected image is strored in the variable "this.cardImageBase64"
    */
    Tabs_upload.prototype.onFileChanged = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.hide_home = false;
                this.isSuccess = false;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile);
                this.cardImageBase64 = "wait";
                reader = this.getFileReader();
                reader.onload = function (e) {
                    var image = new Image();
                    image.src = e.target.result;
                    image.onload = function (rs) {
                        var imgBase64Path = e.target.result;
                        _this.cardImageBase64 = imgBase64Path;
                        console.log(_this.cardImageBase64);
                        _this.isImageSaved = true;
                    };
                };
                reader.readAsDataURL(event.target.files[0]);
                this.delay(1000); // waits for the image to load
                return [2 /*return*/];
            });
        });
    };
    /* This was used in an earlier version to input the name of the person. NOT USED IN CURRENT VERSION */
    Tabs_upload.prototype.onNameChanged = function (searchValue) {
        this.namefield = searchValue;
        console.log(searchValue);
    };
    /* This function uploads the image to the backend server using the corresponding routes for image clicked by camera and selected as file */
    Tabs_upload.prototype.onUpload = function (name) {
        var _this = this;
        this.hide_home = true;
        /* Uploads an image clicked by camera along with the name of the person to the backend server using http POST request */
        if (!this.selectedFile) {
            this.http.post(this.my_ip + '/cameraupload/' + name, this.clickedImage).subscribe(function () { _this.isSuccess = true; });
        }
        /* Uploads an image selected from a file along with the name of the person to the backend server using http POST request */
        else {
            this.http.post(this.my_ip + '/imageupload/' + name, this.selectedFile).subscribe(function () { _this.isSuccess = true; });
        }
    };
    /*
    This function is used to create an alert box that asks the user to enter his name
    Called when "Confirm" button is clicked after selecting an image to upload
    */
    Tabs_upload.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isSuccess = false;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Enter name!',
                                animated: true,
                                inputs: [
                                    {
                                        name: 'Name',
                                        type: 'text',
                                        placeholder: 'Name'
                                    },
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function (data) {
                                            _this.isImageSaved = false;
                                            _this.onUpload(data.Name);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* This function is used to go back to the "Upload an image" page to select another image to upload */
    Tabs_upload.prototype.goBack = function () {
        window.location.reload();
    };
    Tabs_upload.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    Tabs_upload = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs-upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs-upload.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
        /*
        Developed by:
        SAHIL BHATT, VINAY KUMAR TADEPALLI, AMOGH TIWARI, UMESH CHANDRA POLA
        @2020
        
        This code explains the functions used to choose an image for performing face recognition as well as the communication
        mechanism between the app and server.
        Installation of the libraries above via 'npm install' is necessary for running the app
        ----------------------------------------------------------------------------------------------------
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], Tabs_upload);
    return Tabs_upload;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_homePage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs-homePage.page */ "./src/app/tabs/tabs-homePage.page.ts");
/* harmony import */ var _tabs_upload_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs-upload.page */ "./src/app/tabs/tabs-upload.page.ts");
/* harmony import */ var _tabs_match_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs-match.page */ "./src/app/tabs/tabs-match.page.ts");
// import { IonicModule } from '@ionic/angular';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { TabsPageRoutingModule } from './tabs-routing.module';
// import { TabsPage } from './tabs.page';
// @NgModule({
//   imports: [
//     IonicModule,
//     CommonModule,
//     FormsModule,
//     TabsPageRoutingModule
//   ],
//   declarations: [TabsPage]
// })
// export class TabsPageModule {}









var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '', component: _tabs_homePage_page__WEBPACK_IMPORTED_MODULE_7__["Tabs_homePage"],
                    },
                    {
                        path: 'Upload', component: _tabs_upload_page__WEBPACK_IMPORTED_MODULE_8__["Tabs_upload"]
                    },
                    {
                        path: 'Match', component: _tabs_match_page__WEBPACK_IMPORTED_MODULE_9__["Tabs_match"]
                    }
                ])
            ],
            declarations: [_tabs_homePage_page__WEBPACK_IMPORTED_MODULE_7__["Tabs_homePage"], _tabs_upload_page__WEBPACK_IMPORTED_MODULE_8__["Tabs_upload"], _tabs_match_page__WEBPACK_IMPORTED_MODULE_9__["Tabs_match"]],
            providers: [
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: black;\n  -webkit-box-align: right;\n          align-items: right;\n  -webkit-box-pack: right;\n          justify-content: right;\n}\n\nion-card-title {\n  --color: white ;\n}\n\ninput {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpbmF5L3NlbTQvU1NBRC9wcm9qZWN0L0ZhY2VEZXRlY3Rpb24vRnJvbnRlbmQvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLGtCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtBQ0NEOztBREVBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuIC0tYmFja2dyb3VuZCA6IGJsYWNrO1xuIGFsaWduLWl0ZW1zOiByaWdodDtcbiBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG5pb24tY2FyZC10aXRsZXtcbiAtLWNvbG9yIDogd2hpdGVcbn1cblxuaW5wdXR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gaW9uLWNhcmR7XG4vLyAgLS1hbGlnbiA6IGNlbnRlclxuLy8gfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6IHdoaXRlIDtcbn1cblxuaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map