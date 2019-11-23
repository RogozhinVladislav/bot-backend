"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _v = _interopRequireDefault(require("../api/routes/v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])());
app.use('/v1', _v["default"]);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZXhwcmVzcy50cyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLDBCQUFaO0FBQ0FBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyx1QkFBV0MsSUFBWCxFQUFSO0FBQ0FILEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyx1QkFBV0UsVUFBWCxDQUFzQjtBQUFFQyxFQUFBQSxRQUFRLEVBQUU7QUFBWixDQUF0QixDQUFSO0FBQ0FMLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLHVCQUFSO0FBRUFELEdBQUcsQ0FBQ0MsR0FBSixDQUFRLEtBQVIsRUFBZUssYUFBZjtlQUVlTixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vYXBpL3JvdXRlcy92MSc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC51c2UoJy92MScsIHJvdXRlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiXX0=