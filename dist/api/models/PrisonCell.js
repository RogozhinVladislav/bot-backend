"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var PrisonCellSchema = new Schema({}, {
  strict: false
});

var PrisonCell = _mongoose["default"].model('PrisonCell', PrisonCellSchema);

var _default = PrisonCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL1ByaXNvbkNlbGwudHMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJQcmlzb25DZWxsU2NoZW1hIiwic3RyaWN0IiwiUHJpc29uQ2VsbCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTRCxNQUF4QjtBQUVBLElBQU1FLGdCQUFnQixHQUFHLElBQUlGLE1BQUosQ0FBVyxFQUFYLEVBQWU7QUFBRUcsRUFBQUEsTUFBTSxFQUFFO0FBQVYsQ0FBZixDQUF6Qjs7QUFDQSxJQUFNQyxVQUFVLEdBQUdILHFCQUFTSSxLQUFULENBQWUsWUFBZixFQUE2QkgsZ0JBQTdCLENBQW5COztlQUVlRSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxuY29uc3QgUHJpc29uQ2VsbFNjaGVtYSA9IG5ldyBTY2hlbWEoe30sIHsgc3RyaWN0OiBmYWxzZSB9KTtcbmNvbnN0IFByaXNvbkNlbGwgPSBtb25nb29zZS5tb2RlbCgnUHJpc29uQ2VsbCcsIFByaXNvbkNlbGxTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQcmlzb25DZWxsO1xuIl19