"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var SimpleCommandSchema = new Schema({}, {
  strict: false
});

var SimpleCommand = _mongoose["default"].model('SimpleCommand', SimpleCommandSchema);

var _default = SimpleCommand;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2NvbW1hbmQubW9kZWwudHMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJTaW1wbGVDb21tYW5kU2NoZW1hIiwic3RyaWN0IiwiU2ltcGxlQ29tbWFuZCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTRCxNQUF4QjtBQUVBLElBQU1FLG1CQUFtQixHQUFHLElBQUlGLE1BQUosQ0FBVyxFQUFYLEVBQWU7QUFBRUcsRUFBQUEsTUFBTSxFQUFFO0FBQVYsQ0FBZixDQUE1Qjs7QUFDQSxJQUFNQyxhQUFhLEdBQUdILHFCQUFTSSxLQUFULENBQWUsZUFBZixFQUFnQ0gsbUJBQWhDLENBQXRCOztlQUVlRSxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxuY29uc3QgU2ltcGxlQ29tbWFuZFNjaGVtYSA9IG5ldyBTY2hlbWEoe30sIHsgc3RyaWN0OiBmYWxzZSB9KTtcbmNvbnN0IFNpbXBsZUNvbW1hbmQgPSBtb25nb29zZS5tb2RlbCgnU2ltcGxlQ29tbWFuZCcsIFNpbXBsZUNvbW1hbmRTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVDb21tYW5kO1xuIl19