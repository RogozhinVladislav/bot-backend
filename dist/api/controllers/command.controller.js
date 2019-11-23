"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _command = _interopRequireDefault(require("../models/command.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  list: function () {
    var _list = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res, next) {
      var commands;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _command["default"].find().exec();

            case 3:
              commands = _context.sent;
              res.json(commands);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).send(_context.t0); //next(error);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function list(_x, _x2, _x3) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res, next) {
      var command, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              command = new _command["default"](req.body);
              _context2.next = 4;
              return command.save();

            case 4:
              result = _context2.sent;
              res.send(result);
              next();
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              res.status(500).send(_context2.t0); //next(error);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    function create(_x4, _x5, _x6) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  update: function () {
    var _update = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res, next) {
      var id, result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _command["default"].findOneAndUpdate({
                _id: id
              }, _objectSpread({}, req.body), function (err, res) {});

            case 4:
              result = _context3.sent;
              res.send(result);
              next();
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              res.status(500).send(_context3.t0); //next(error);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    function update(_x7, _x8, _x9) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),
  "delete": function () {
    var _delete2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(req, res, next) {
      var id;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _command["default"].deleteOne({
                _id: id
              }, function (err) {// if (err) return handleError(err);
              });

            case 4:
              res.send('OK');
              next();
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              res.status(500).send(_context4.t0); //next(error);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    function _delete(_x10, _x11, _x12) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }()
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvY29tbWFuZC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbImxpc3QiLCJyZXEiLCJyZXMiLCJuZXh0IiwiQ29tbWFuZCIsImZpbmQiLCJleGVjIiwiY29tbWFuZHMiLCJqc29uIiwic3RhdHVzIiwic2VuZCIsImNyZWF0ZSIsImNvbW1hbmQiLCJib2R5Iiwic2F2ZSIsInJlc3VsdCIsInVwZGF0ZSIsImlkIiwicGFyYW1zIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsImVyciIsImRlbGV0ZU9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztlQUdlO0FBQ1BBLEVBQUFBLElBRE87QUFBQTtBQUFBO0FBQUEsNkNBQ0ZDLEdBREUsRUFDUUMsR0FEUixFQUNrQkMsSUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdjQyxvQkFBUUMsSUFBUixHQUFlQyxJQUFmLEVBSGQ7O0FBQUE7QUFHSEMsY0FBQUEsUUFIRztBQUlUTCxjQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU0QsUUFBVDtBQUpTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTVRMLGNBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLGNBTlMsQ0FPVDs7QUFQUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVVQQyxFQUFBQSxNQVZPO0FBQUE7QUFBQTtBQUFBLDhDQVVBVixHQVZBLEVBVVVDLEdBVlYsRUFVb0JDLElBVnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUhTLGNBQUFBLE9BWkcsR0FZTyxJQUFJUixtQkFBSixDQUFZSCxHQUFHLENBQUNZLElBQWhCLENBWlA7QUFBQTtBQUFBLHFCQWFZRCxPQUFPLENBQUNFLElBQVIsRUFiWjs7QUFBQTtBQWFIQyxjQUFBQSxNQWJHO0FBY1RiLGNBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTSyxNQUFUO0FBQ0FaLGNBQUFBLElBQUk7QUFmSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlCVEQsY0FBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsZUFqQlMsQ0FrQlQ7O0FBbEJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBcUJQTSxFQUFBQSxNQXJCTztBQUFBO0FBQUE7QUFBQSw4Q0FxQkFmLEdBckJBLEVBcUJVQyxHQXJCVixFQXFCb0JDLElBckJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCRGMsY0FBQUEsRUF2QkMsR0F1Qk1oQixHQUFHLENBQUNpQixNQXZCVixDQXVCREQsRUF2QkM7QUFBQTtBQUFBLHFCQXdCWWIsb0JBQVFlLGdCQUFSLENBQXlCO0FBQUVDLGdCQUFBQSxHQUFHLEVBQUVIO0FBQVAsZUFBekIsb0JBQTJDaEIsR0FBRyxDQUFDWSxJQUEvQyxHQUF1RCxVQUMxRVEsR0FEMEUsRUFFMUVuQixHQUYwRSxFQUcxRSxDQUFFLENBSGlCLENBeEJaOztBQUFBO0FBd0JIYSxjQUFBQSxNQXhCRztBQTRCVGIsY0FBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVNLLE1BQVQ7QUFDQVosY0FBQUEsSUFBSTtBQTdCSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQStCVEQsY0FBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsZUEvQlMsQ0FnQ1Q7O0FBaENTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBbUNBVCxHQW5DQSxFQW1DVUMsR0FuQ1YsRUFtQ29CQyxJQW5DcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQ0RjLGNBQUFBLEVBckNDLEdBcUNNaEIsR0FBRyxDQUFDaUIsTUFyQ1YsQ0FxQ0RELEVBckNDO0FBQUE7QUFBQSxxQkFzQ0hiLG9CQUFRa0IsU0FBUixDQUFrQjtBQUFFRixnQkFBQUEsR0FBRyxFQUFFSDtBQUFQLGVBQWxCLEVBQStCLFVBQVNJLEdBQVQsRUFBbUIsQ0FDdEQ7QUFDRCxlQUZLLENBdENHOztBQUFBO0FBeUNUbkIsY0FBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVMsSUFBVDtBQUNBUCxjQUFBQSxJQUFJO0FBMUNLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNENURCxjQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixlQTVDUyxDQTZDVDs7QUE3Q1M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1hbmQgZnJvbSAnLi4vbW9kZWxzL2NvbW1hbmQubW9kZWwnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnZG9tYWluJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luYyBsaXN0KHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbW1hbmRzID0gYXdhaXQgQ29tbWFuZC5maW5kKCkuZXhlYygpO1xuICAgICAgcmVzLmpzb24oY29tbWFuZHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcik7XG4gICAgICAvL25leHQoZXJyb3IpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgY3JlYXRlKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgQ29tbWFuZChyZXEuYm9keSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb21tYW5kLnNhdmUoKTtcbiAgICAgIHJlcy5zZW5kKHJlc3VsdCk7XG4gICAgICBuZXh0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycm9yKTtcbiAgICAgIC8vbmV4dChlcnJvcik7XG4gICAgfVxuICB9LFxuICBhc3luYyB1cGRhdGUocmVxOiBhbnksIHJlczogYW55LCBuZXh0OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IENvbW1hbmQuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgeyAuLi5yZXEuYm9keSB9LCBmdW5jdGlvbihcbiAgICAgICAgZXJyOiBhbnksXG4gICAgICAgIHJlczogYW55LFxuICAgICAgKSB7fSk7XG4gICAgICByZXMuc2VuZChyZXN1bHQpO1xuICAgICAgbmV4dCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcik7XG4gICAgICAvL25leHQoZXJyb3IpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgZGVsZXRlKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICBhd2FpdCBDb21tYW5kLmRlbGV0ZU9uZSh7IF9pZDogaWQgfSwgZnVuY3Rpb24oZXJyOiBhbnkpIHtcbiAgICAgICAgLy8gaWYgKGVycikgcmV0dXJuIGhhbmRsZUVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICAgIHJlcy5zZW5kKCdPSycpO1xuICAgICAgbmV4dCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcik7XG4gICAgICAvL25leHQoZXJyb3IpO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=