"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hearCommand = void 0;

var _vkHelper = _interopRequireDefault(require("../../helpers/vk-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var hearCommand = function hearCommand() {
  return function (req, res, next) {
    var _req$body = req.body,
        trigger = _req$body.trigger,
        answer = _req$body.answer;

    _vkHelper["default"].updates.hear(trigger,
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return context.send(answer);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()); //   next();

  };
};

exports.hearCommand = hearCommand;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvY29tbWFuZC50cyJdLCJuYW1lcyI6WyJoZWFyQ29tbWFuZCIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwidHJpZ2dlciIsImFuc3dlciIsInZrIiwidXBkYXRlcyIsImhlYXIiLCJjb250ZXh0Iiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTSxVQUFDQyxHQUFELEVBQVdDLEdBQVgsRUFBcUJDLElBQXJCLEVBQW1DO0FBQUEsb0JBQ3RDRixHQUFHLENBQUNHLElBRGtDO0FBQUEsUUFDMURDLE9BRDBELGFBQzFEQSxPQUQwRDtBQUFBLFFBQ2pEQyxNQURpRCxhQUNqREEsTUFEaUQ7O0FBRWxFQyx5QkFBR0MsT0FBSCxDQUFXQyxJQUFYLENBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQXlCLGlCQUFNSyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNqQkEsT0FBTyxDQUFDQyxJQUFSLENBQWFMLE1BQWIsQ0FEaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGa0UsQ0FLbEU7O0FBQ0QsR0FOMEI7QUFBQSxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2ayBmcm9tICcuLi8uLi9oZWxwZXJzL3ZrLWhlbHBlcic7XG5cbmV4cG9ydCBjb25zdCBoZWFyQ29tbWFuZCA9ICgpID0+IChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuICBjb25zdCB7IHRyaWdnZXIsIGFuc3dlciB9ID0gcmVxLmJvZHk7XG4gIHZrLnVwZGF0ZXMuaGVhcih0cmlnZ2VyLCBhc3luYyBjb250ZXh0ID0+IHtcbiAgICBhd2FpdCBjb250ZXh0LnNlbmQoYW5zd2VyKTtcbiAgfSk7XG4gIC8vICAgbmV4dCgpO1xufTtcbiJdfQ==