"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chance = _interopRequireDefault(require("chance"));

var _command = _interopRequireDefault(require("../api/models/command.model"));

var _vkHelper = _interopRequireDefault(require("./vk-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var chance = new _chance["default"]();
var string1 = 'ляпоса $';
var reg = new RegExp(string1.replace('$', '(.+)'));
var templateString = '$ получил ляпоса';

var _default = function _default() {
  return new Promise(function (resolve, reject) {
    _vkHelper["default"].updates.hear(reg,
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context) {
        var userResource, user, userSender, targetUser, answerString;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _vkHelper["default"].snippets.resolveResource(context.$match[1]);

              case 2:
                userResource = _context.sent;
                _context.next = 5;
                return _vkHelper["default"].api.users.get({
                  user_id: userResource.id
                });

              case 5:
                user = _context.sent;
                _context.next = 8;
                return _vkHelper["default"].api.users.get({
                  user_id: context.payload.from_id
                });

              case 8:
                userSender = _context.sent;
                targetUser = chance.pickone([user, userSender]);
                answerString = templateString.replace('$', user[0].first_name);
                _context.next = 13;
                return context.send("".concat(answerString));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _command["default"].find().lean().exec(function (err, commands) {
      commands.forEach(function (command) {
        _vkHelper["default"].updates.hear(command.trigger,
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(context) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return context.send(command.answer);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
      resolve({
        commandsCount: commands.length
      });
    });
  });
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2luaXQtY29tbWFuZHMudHMiXSwibmFtZXMiOlsiY2hhbmNlIiwiQ2hhbmNlIiwic3RyaW5nMSIsInJlZyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJ0ZW1wbGF0ZVN0cmluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidmsiLCJ1cGRhdGVzIiwiaGVhciIsImNvbnRleHQiLCJzbmlwcGV0cyIsInJlc29sdmVSZXNvdXJjZSIsIiRtYXRjaCIsInVzZXJSZXNvdXJjZSIsImFwaSIsInVzZXJzIiwiZ2V0IiwidXNlcl9pZCIsImlkIiwidXNlciIsInBheWxvYWQiLCJmcm9tX2lkIiwidXNlclNlbmRlciIsInRhcmdldFVzZXIiLCJwaWNrb25lIiwiYW5zd2VyU3RyaW5nIiwiZmlyc3RfbmFtZSIsInNlbmQiLCJDb21tYW5kIiwiZmluZCIsImxlYW4iLCJleGVjIiwiZXJyIiwiY29tbWFuZHMiLCJmb3JFYWNoIiwiY29tbWFuZCIsInRyaWdnZXIiLCJhbnN3ZXIiLCJjb21tYW5kc0NvdW50IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLGtCQUFKLEVBQWY7QUFFQSxJQUFNQyxPQUFPLEdBQUcsVUFBaEI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsTUFBSixDQUFXRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsR0FBaEIsRUFBcUIsTUFBckIsQ0FBWCxDQUFaO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGtCQUF2Qjs7ZUFFZSxvQkFBTTtBQUNuQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLHlCQUFHQyxPQUFILENBQVdDLElBQVgsQ0FBZ0JULEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBcUIsaUJBQU1VLE9BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUUgscUJBQUdJLFFBQUgsQ0FBWUMsZUFBWixDQUE0QkYsT0FBTyxDQUFDRyxNQUFSLENBQWUsQ0FBZixDQUE1QixDQURSOztBQUFBO0FBQ2JDLGdCQUFBQSxZQURhO0FBQUE7QUFBQSx1QkFFQVAscUJBQUdRLEdBQUgsQ0FBT0MsS0FBUCxDQUFhQyxHQUFiLENBQWlCO0FBQUVDLGtCQUFBQSxPQUFPLEVBQUVKLFlBQVksQ0FBQ0s7QUFBeEIsaUJBQWpCLENBRkE7O0FBQUE7QUFFYkMsZ0JBQUFBLElBRmE7QUFBQTtBQUFBLHVCQUdNYixxQkFBR1EsR0FBSCxDQUFPQyxLQUFQLENBQWFDLEdBQWIsQ0FBaUI7QUFDeENDLGtCQUFBQSxPQUFPLEVBQUVSLE9BQU8sQ0FBQ1csT0FBUixDQUFnQkM7QUFEZSxpQkFBakIsQ0FITjs7QUFBQTtBQUdiQyxnQkFBQUEsVUFIYTtBQU1iQyxnQkFBQUEsVUFOYSxHQU1BM0IsTUFBTSxDQUFDNEIsT0FBUCxDQUFlLENBQUNMLElBQUQsRUFBT0csVUFBUCxDQUFmLENBTkE7QUFRYkcsZ0JBQUFBLFlBUmEsR0FRRXZCLGNBQWMsQ0FBQ0QsT0FBZixDQUF1QixHQUF2QixFQUE0QmtCLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUU8sVUFBcEMsQ0FSRjtBQUFBO0FBQUEsdUJBVWJqQixPQUFPLENBQUNrQixJQUFSLFdBQWdCRixZQUFoQixFQVZhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXJCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFBRyx3QkFBUUMsSUFBUixHQUNHQyxJQURILEdBRUdDLElBRkgsQ0FFUSxVQUFTQyxHQUFULEVBQWNDLFFBQWQsRUFBd0I7QUFDNUJBLE1BQUFBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQixVQUFBQyxPQUFPLEVBQUk7QUFDMUI3Qiw2QkFBR0MsT0FBSCxDQUFXQyxJQUFYLENBQWdCMkIsT0FBTyxDQUFDQyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQWlDLGtCQUFNM0IsT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDekJBLE9BQU8sQ0FBQ2tCLElBQVIsQ0FBYVEsT0FBTyxDQUFDRSxNQUFyQixDQUR5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdELE9BSkQ7QUFLQWpDLE1BQUFBLE9BQU8sQ0FBQztBQUFFa0MsUUFBQUEsYUFBYSxFQUFFTCxRQUFRLENBQUNNO0FBQTFCLE9BQUQsQ0FBUDtBQUNELEtBVEg7QUFVRCxHQXhCTSxDQUFQO0FBeUJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhbmNlIGZyb20gJ2NoYW5jZSc7XG5cbmltcG9ydCBDb21tYW5kIGZyb20gJy4uL2FwaS9tb2RlbHMvY29tbWFuZC5tb2RlbCc7XG5pbXBvcnQgdmsgZnJvbSAnLi92ay1oZWxwZXInO1xuXG5jb25zdCBjaGFuY2UgPSBuZXcgQ2hhbmNlKCk7XG5cbmNvbnN0IHN0cmluZzEgPSAn0LvRj9C/0L7RgdCwICQnO1xuY29uc3QgcmVnID0gbmV3IFJlZ0V4cChzdHJpbmcxLnJlcGxhY2UoJyQnLCAnKC4rKScpKTtcbmNvbnN0IHRlbXBsYXRlU3RyaW5nID0gJyQg0L/QvtC70YPRh9C40Lsg0LvRj9C/0L7RgdCwJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHZrLnVwZGF0ZXMuaGVhcihyZWcsIGFzeW5jIGNvbnRleHQgPT4ge1xuICAgICAgY29uc3QgdXNlclJlc291cmNlID0gYXdhaXQgdmsuc25pcHBldHMucmVzb2x2ZVJlc291cmNlKGNvbnRleHQuJG1hdGNoWzFdKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB2ay5hcGkudXNlcnMuZ2V0KHsgdXNlcl9pZDogdXNlclJlc291cmNlLmlkIH0pO1xuICAgICAgY29uc3QgdXNlclNlbmRlciA9IGF3YWl0IHZrLmFwaS51c2Vycy5nZXQoe1xuICAgICAgICB1c2VyX2lkOiBjb250ZXh0LnBheWxvYWQuZnJvbV9pZCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdGFyZ2V0VXNlciA9IGNoYW5jZS5waWNrb25lKFt1c2VyLCB1c2VyU2VuZGVyXSk7XG5cbiAgICAgIGNvbnN0IGFuc3dlclN0cmluZyA9IHRlbXBsYXRlU3RyaW5nLnJlcGxhY2UoJyQnLCB1c2VyWzBdLmZpcnN0X25hbWUpO1xuXG4gICAgICBhd2FpdCBjb250ZXh0LnNlbmQoYCR7YW5zd2VyU3RyaW5nfWApO1xuICAgIH0pO1xuXG4gICAgQ29tbWFuZC5maW5kKClcbiAgICAgIC5sZWFuKClcbiAgICAgIC5leGVjKGZ1bmN0aW9uKGVyciwgY29tbWFuZHMpIHtcbiAgICAgICAgY29tbWFuZHMuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICB2ay51cGRhdGVzLmhlYXIoY29tbWFuZC50cmlnZ2VyLCBhc3luYyBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGNvbnRleHQuc2VuZChjb21tYW5kLmFuc3dlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKHsgY29tbWFuZHNDb3VudDogY29tbWFuZHMubGVuZ3RoIH0pO1xuICAgICAgfSk7XG4gIH0pO1xufTtcbiJdfQ==