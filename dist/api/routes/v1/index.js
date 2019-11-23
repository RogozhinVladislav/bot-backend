"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _command = _interopRequireDefault(require("./command.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { CONFIRMATION } from '../../../config';
var CONFIRMATION = process.env.CONFIRMATION;

var router = _express["default"].Router();
/**
 * GET v1/status
 */


router.get('/status', function (req, res) {
  return res.send('OK');
});
/**
 * GET v1/docs
 */

router.use('/docs', _express["default"]["static"]('docs'));
router.post('/', function (req, res) {
  var body = req.body;
  if (body.type === 'confirmation') res.end(CONFIRMATION);
});
router.use('/commands', _command["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcm91dGVzL3YxL2luZGV4LnRzIl0sIm5hbWVzIjpbIkNPTkZJUk1BVElPTiIsInByb2Nlc3MiLCJlbnYiLCJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsInVzZSIsInBvc3QiLCJib2R5IiwidHlwZSIsImVuZCIsImNvbW1hbmRSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQURBO0lBR1FBLFksR0FBaUJDLE9BQU8sQ0FBQ0MsRyxDQUF6QkYsWTs7QUFFUixJQUFNRyxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWY7QUFFQTs7Ozs7QUFHQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsU0FBWCxFQUFzQixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxTQUFjQSxHQUFHLENBQUNDLElBQUosQ0FBUyxJQUFULENBQWQ7QUFBQSxDQUF0QjtBQUVBOzs7O0FBR0FOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLE9BQVgsRUFBb0JOLDhCQUFlLE1BQWYsQ0FBcEI7QUFFQUQsTUFBTSxDQUFDUSxJQUFQLENBQVksR0FBWixFQUFpQixVQUFDSixHQUFELEVBQU1DLEdBQU4sRUFBYztBQUFBLE1BQ3JCSSxJQURxQixHQUNaTCxHQURZLENBQ3JCSyxJQURxQjtBQUU3QixNQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBYyxjQUFsQixFQUFrQ0wsR0FBRyxDQUFDTSxHQUFKLENBQVFkLFlBQVI7QUFDbkMsQ0FIRDtBQUtBRyxNQUFNLENBQUNPLEdBQVAsQ0FBVyxXQUFYLEVBQXdCSyxtQkFBeEI7ZUFFZVosTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuLy8gaW1wb3J0IHsgQ09ORklSTUFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCBjb21tYW5kUm91dGVzIGZyb20gJy4vY29tbWFuZC5yb3V0ZSc7XG5cbmNvbnN0IHsgQ09ORklSTUFUSU9OIH0gPSBwcm9jZXNzLmVudjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyoqXG4gKiBHRVQgdjEvc3RhdHVzXG4gKi9cbnJvdXRlci5nZXQoJy9zdGF0dXMnLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdPSycpKTtcblxuLyoqXG4gKiBHRVQgdjEvZG9jc1xuICovXG5yb3V0ZXIudXNlKCcvZG9jcycsIGV4cHJlc3Muc3RhdGljKCdkb2NzJykpO1xuXG5yb3V0ZXIucG9zdCgnLycsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGJvZHkgfSA9IHJlcTtcbiAgaWYgKGJvZHkudHlwZSA9PT0gJ2NvbmZpcm1hdGlvbicpIHJlcy5lbmQoQ09ORklSTUFUSU9OKTtcbn0pO1xuXG5yb3V0ZXIudXNlKCcvY29tbWFuZHMnLCBjb21tYW5kUm91dGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19