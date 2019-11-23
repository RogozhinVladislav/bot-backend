"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _command = _interopRequireDefault(require("../../controllers/command.controller"));

var _command2 = require("../../middlewares/command");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_command["default"].list);
router.route('/').post(_command["default"].create, (0, _command2.hearCommand)());
router.route('/:id').put(_command["default"].update);
router.route('/:id')["delete"](_command["default"]["delete"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcm91dGVzL3YxL2NvbW1hbmQucm91dGUudHMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInJvdXRlIiwiZ2V0IiwiY29tbWFuZENvbnRyb2xsZXIiLCJsaXN0IiwicG9zdCIsImNyZWF0ZSIsInB1dCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxvQkFBUUMsTUFBUixFQUFmOztBQUVBRixNQUFNLENBQUNHLEtBQVAsQ0FBYSxHQUFiLEVBQWtCQyxHQUFsQixDQUFzQkMsb0JBQWtCQyxJQUF4QztBQUNBTixNQUFNLENBQUNHLEtBQVAsQ0FBYSxHQUFiLEVBQWtCSSxJQUFsQixDQUF1QkYsb0JBQWtCRyxNQUF6QyxFQUFpRCw0QkFBakQ7QUFDQVIsTUFBTSxDQUFDRyxLQUFQLENBQWEsTUFBYixFQUFxQk0sR0FBckIsQ0FBeUJKLG9CQUFrQkssTUFBM0M7QUFDQVYsTUFBTSxDQUFDRyxLQUFQLENBQWEsTUFBYixZQUE0QkUsNkJBQTVCO2VBRWVMLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb21tYW5kQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9jb21tYW5kLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaGVhckNvbW1hbmQgfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlcy9jb21tYW5kJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnJvdXRlKCcvJykuZ2V0KGNvbW1hbmRDb250cm9sbGVyLmxpc3QpO1xucm91dGVyLnJvdXRlKCcvJykucG9zdChjb21tYW5kQ29udHJvbGxlci5jcmVhdGUsIGhlYXJDb21tYW5kKCkpO1xucm91dGVyLnJvdXRlKCcvOmlkJykucHV0KGNvbW1hbmRDb250cm9sbGVyLnVwZGF0ZSk7XG5yb3V0ZXIucm91dGUoJy86aWQnKS5kZWxldGUoY29tbWFuZENvbnRyb2xsZXIuZGVsZXRlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19