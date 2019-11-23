"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("./config"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhYmFzZS50cyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1vbmdvb3NlIiwiZ2xvYmFsIiwic2V0IiwiY29ubmVjdGlvbiIsIm9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib25jZSIsImNvbm5lY3Rpb25zIiwiY29ubmVjdCIsImNvbmZpZyIsIk1PTkdPX1VSTCIsInVzZU5ld1VybFBhcnNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWUsb0JBQU07QUFDakIsU0FBTyxJQUFJQSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyx5QkFBU0gsT0FBVCxHQUFtQkksTUFBTSxDQUFDSixPQUExQjs7QUFDQUcseUJBQVNFLEdBQVQsQ0FBYSxPQUFiLEVBQXNCLElBQXRCOztBQUVBRix5QkFBU0csVUFBVCxDQUNLQyxFQURMLENBQ1EsT0FEUixFQUNpQixVQUFBQyxLQUFLO0FBQUEsYUFBSU4sTUFBTSxDQUFDTSxLQUFELENBQVY7QUFBQSxLQUR0QixFQUVLRCxFQUZMLENBRVEsT0FGUixFQUVpQjtBQUFBLGFBQU1FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLENBQU47QUFBQSxLQUZqQixFQUdLQyxJQUhMLENBR1UsTUFIVixFQUdrQjtBQUFBLGFBQU1WLE9BQU8sQ0FBQ0UscUJBQVNTLFdBQVQsQ0FBcUIsQ0FBckIsQ0FBRCxDQUFiO0FBQUEsS0FIbEI7O0FBS0FULHlCQUFTVSxPQUFULENBQWlCQyxtQkFBT0MsU0FBeEIsRUFBbUM7QUFBRUMsTUFBQUEsZUFBZSxFQUFFO0FBQW5CLEtBQW5DO0FBQ0MsR0FWRSxDQUFQO0FBV0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBtb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG4gICAgICAgIG1vbmdvb3NlLnNldCgnZGVidWcnLCB0cnVlKTtcblxuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uXG4gICAgICAgICAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgIC5vbignY2xvc2UnLCAoKSA9PiBjb25zb2xlLmxvZygnRGF0YWJhc2UgY29ubmVjdGlvbiBjbG9zZWQuJykpXG4gICAgICAgICAgICAub25jZSgnb3BlbicsICgpID0+IHJlc29sdmUobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0pKTtcblxuICAgICAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5NT05HT19VUkwsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbn0iXX0=