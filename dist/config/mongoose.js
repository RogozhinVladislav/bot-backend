"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return new Promise(function (resolve, reject) {
    _mongoose["default"].Promise = global.Promise;

    _mongoose["default"].set('debug', true);

    _mongoose["default"].connection.on('error', function (error) {
      return reject(error);
    }).on('close', function () {
      return console.log('Database connection closed.');
    }).once('open', function () {
      return resolve(_mongoose["default"].connections[0]);
    });

    _mongoose["default"].connect(_config["default"].MONGO_URL, {
      useNewUrlParser: true
    });
  });
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbW9uZ29vc2UudHMiXSwibmFtZXMiOlsiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtb25nb29zZSIsImdsb2JhbCIsInNldCIsImNvbm5lY3Rpb24iLCJvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uY2UiLCJjb25uZWN0aW9ucyIsImNvbm5lY3QiLCJjb25maWciLCJNT05HT19VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztlQUVlLG9CQUFNO0FBQ2pCLFNBQU8sSUFBSUEsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MseUJBQVNILE9BQVQsR0FBbUJJLE1BQU0sQ0FBQ0osT0FBMUI7O0FBQ0FHLHlCQUFTRSxHQUFULENBQWEsT0FBYixFQUFzQixJQUF0Qjs7QUFFQUYseUJBQVNHLFVBQVQsQ0FDS0MsRUFETCxDQUNRLE9BRFIsRUFDaUIsVUFBQUMsS0FBSztBQUFBLGFBQUlOLE1BQU0sQ0FBQ00sS0FBRCxDQUFWO0FBQUEsS0FEdEIsRUFFS0QsRUFGTCxDQUVRLE9BRlIsRUFFaUI7QUFBQSxhQUFNRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixDQUFOO0FBQUEsS0FGakIsRUFHS0MsSUFITCxDQUdVLE1BSFYsRUFHa0I7QUFBQSxhQUFNVixPQUFPLENBQUNFLHFCQUFTUyxXQUFULENBQXFCLENBQXJCLENBQUQsQ0FBYjtBQUFBLEtBSGxCOztBQUtBVCx5QkFBU1UsT0FBVCxDQUFpQkMsbUJBQU9DLFNBQXhCLEVBQW1DO0FBQUVDLE1BQUFBLGVBQWUsRUFBRTtBQUFuQixLQUFuQztBQUNDLEdBVkUsQ0FBUDtBQVdILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIG1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbiAgICAgICAgbW9uZ29vc2Uuc2V0KCdkZWJ1ZycsIHRydWUpO1xuXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb25cbiAgICAgICAgICAgIC5vbignZXJyb3InLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKVxuICAgICAgICAgICAgLm9uKCdjbG9zZScsICgpID0+IGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0aW9uIGNsb3NlZC4nKSlcbiAgICAgICAgICAgIC5vbmNlKCdvcGVuJywgKCkgPT4gcmVzb2x2ZShtb25nb29zZS5jb25uZWN0aW9uc1swXSkpO1xuXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLk1PTkdPX1VSTCwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUgfSk7XG4gICAgICAgIH0pO1xufSJdfQ==