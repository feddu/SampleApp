cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-battery-status/www/battery.js",
        "id": "cordova-plugin-battery-status.battery",
        "pluginId": "cordova-plugin-battery-status",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/cordova-plugin-battery-status/src/browser/BatteryProxy.js",
        "id": "cordova-plugin-battery-status.Battery",
        "pluginId": "cordova-plugin-battery-status",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-mauron85-background-geolocation/www/backgroundGeoLocation.js",
        "id": "cordova-plugin-mauron85-background-geolocation.backgroundGeoLocation",
        "pluginId": "cordova-plugin-mauron85-background-geolocation",
        "clobbers": [
            "backgroundGeoLocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-battery-status": "1.1.2",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-legacy-whitelist": "1.1.1",
    "cordova-plugin-mauron85-background-geolocation": "0.9.6",
    "cordova-plugin-network-information": "1.2.1",
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-splashscreen": "3.2.2"
}
// BOTTOM OF METADATA
});