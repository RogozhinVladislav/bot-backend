"use strict";

var _express = _interopRequireDefault(require("./config/express"));

var _mongoose = _interopRequireDefault(require("./config/mongoose"));

var _initBot = _interopRequireDefault(require("./helpers/init-bot"));

var _vkHelper = _interopRequireDefault(require("./helpers/vk-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { PORT } from './config';
var PORT = process.env.PORT;
(0, _mongoose["default"])().then(function (info) {
  console.log("Connected to ".concat(info.host, ":").concat(info.port, "/").concat(info.name));

  _express["default"].listen(PORT, function () {
    console.log("Listenning port: ".concat(PORT));
  });

  (0, _initBot["default"])();

  _vkHelper["default"].updates.start()["catch"](console.error);
})["catch"](function () {
  console.error('error');
  process.exit(1);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJQT1JUIiwicHJvY2VzcyIsImVudiIsInRoZW4iLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImhvc3QiLCJwb3J0IiwibmFtZSIsImFwcCIsImxpc3RlbiIsInZrIiwidXBkYXRlcyIsInN0YXJ0IiwiZXJyb3IiLCJleGl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUlBOztBQUNBOzs7O0FBSkE7SUFDUUEsSSxHQUFTQyxPQUFPLENBQUNDLEcsQ0FBakJGLEk7QUFLUiw0QkFDR0csSUFESCxDQUNRLFVBQUNDLElBQUQsRUFBZTtBQUNuQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLHdCQUE0QkYsSUFBSSxDQUFDRyxJQUFqQyxjQUF5Q0gsSUFBSSxDQUFDSSxJQUE5QyxjQUFzREosSUFBSSxDQUFDSyxJQUEzRDs7QUFDQUMsc0JBQUlDLE1BQUosQ0FBV1gsSUFBWCxFQUFpQixZQUFNO0FBQ3JCSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsNEJBQWdDTixJQUFoQztBQUNELEdBRkQ7O0FBR0E7O0FBQ0FZLHVCQUFHQyxPQUFILENBQVdDLEtBQVgsWUFBeUJULE9BQU8sQ0FBQ1UsS0FBakM7QUFDRCxDQVJILFdBU1MsWUFBTTtBQUNYVixFQUFBQSxPQUFPLENBQUNVLEtBQVIsQ0FBYyxPQUFkO0FBQ0FkLEVBQUFBLE9BQU8sQ0FBQ2UsSUFBUixDQUFhLENBQWI7QUFDRCxDQVpIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tICcuL2NvbmZpZy9leHByZXNzJztcbmltcG9ydCBtb25nb29zZSBmcm9tICcuL2NvbmZpZy9tb25nb29zZSc7XG4vLyBpbXBvcnQgeyBQT1JUIH0gZnJvbSAnLi9jb25maWcnO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuaW1wb3J0IGluaXRCb3QgZnJvbSAnLi9oZWxwZXJzL2luaXQtYm90JztcbmltcG9ydCB2ayBmcm9tICcuL2hlbHBlcnMvdmstaGVscGVyJztcblxubW9uZ29vc2UoKVxuICAudGhlbigoaW5mbzogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coYENvbm5lY3RlZCB0byAke2luZm8uaG9zdH06JHtpbmZvLnBvcnR9LyR7aW5mby5uYW1lfWApO1xuICAgIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYExpc3Rlbm5pbmcgcG9ydDogJHtQT1JUfWApO1xuICAgIH0pO1xuICAgIGluaXRCb3QoKTtcbiAgICB2ay51cGRhdGVzLnN0YXJ0KCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0pXG4gIC5jYXRjaCgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3InKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH0pO1xuIl19