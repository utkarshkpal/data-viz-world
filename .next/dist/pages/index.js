"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactSimpleMaps = require("react-simple-maps");

var _reduxTooltip = require("redux-tooltip");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/utkarsh/Desktop/work/dresslife/tool-tip/with-redux-tooltip/pages/index.js?entry";


var show = _reduxTooltip.actions.show,
    hide = _reduxTooltip.actions.hide;

var WithReduxExample = function (_Component) {
  (0, _inherits3.default)(WithReduxExample, _Component);

  function WithReduxExample() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithReduxExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithReduxExample.__proto__ || (0, _getPrototypeOf2.default)(WithReduxExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      data: [],
      vtype: 'density'
    }, _this.alterDataType = function () {
      var vtype = _this.state.vtype;

      if (vtype === 'density') {
        _this.setState({ vtype: 'gini' });
      } else {
        _this.setState({ vtype: 'density' });
      }
    }, _this.getContent = function (name) {
      var _this$state = _this.state,
          data = _this$state.data,
          vtype = _this$state.vtype;

      var countryData = data.filter(function (elem) {

        if (name === elem.alpha3Code) {

          return true;
        }
        return false;
      });
      if (countryData[0]) {
        var _countryData$ = countryData[0],
            gini = _countryData$.gini,
            population = _countryData$.population,
            area = _countryData$.area;

        var areaInSqMiles = area * 0.386102;
        var density = population / areaInSqMiles;
        if (vtype === 'density') {
          return density;
        } else {
          return gini;
        }
      }
    }, _this.format = function (value) {
      if (value) {
        var vtype = _this.state.vtype;

        if (vtype == 'density') {
          return value.toFixed(2) + " per sq miles";
        }
        return value;
      }
    }, _this.getColor = function (name) {
      var vtype = _this.state.vtype;

      var d = void 0;
      if (vtype == 'density') {
        d = _this.getContent(name);
        return d > 500 ? '#BD0026' : d > 200 ? '#E31A1C' : d > 100 ? '#FC4E2A' : d > 50 ? '#FD8D3C' : d > 20 ? '#FEB24C' : d > 10 ? '#FED976' : '#FFEDA0';
      } else {
        d = _this.getContent(name);
        return d > 60 ? '#BD0026' : d > 55 ? '#CF372D' : d > 50 ? '#EA3F33' : d > 45 ? '#EB6263' : d > 40 ? '#F6CCCD' : d > 35 ? '#95F59A' : d > 30 ? '#7FF237' : d > 25 ? '#6CCF12' : '#FFFFFF';
      }
    }, _this.handleMove = function (geography, evt) {

      var x = evt.clientX;
      var y = evt.clientY + window.pageYOffset;
      _this.props.dispatch(show({
        origin: {
          x: x,
          y: y
        },
        content: _this.format(_this.getContent(geography.properties.adm0_a3))
      }));
    }, _this.handleLeave = function () {
      _this.props.dispatch(hide());
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WithReduxExample, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      _axios2.default.get('https://restcountries.eu/rest/v2/all').then(function (response) {
        self.setState({ data: response.data });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          data = _state.data,
          vtype = _state.vtype;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, vtype === 'density' ? _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Population Density") : _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Gini Coefficient"), _react2.default.createElement("div", { style: wrapperStyles, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement("div", { style: btnStyle, onClick: this.alterDataType, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Button"), data.length ? _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement(_reactSimpleMaps.ComposableMap, {
        projectionConfig: {
          scale: 205,
          rotation: [-11, 0, 0]
        },
        width: 980,
        height: 551,
        style: {
          width: "100%",
          height: "auto"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement(_reactSimpleMaps.ZoomableGroup, { center: [0, 20], __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_reactSimpleMaps.Geographies, { disableOptimization: "false", geography: "/static/world-50m-with-population.json", __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, function (geographies, projection) {
        return geographies.map(function (geography, i) {
          return _react2.default.createElement(_reactSimpleMaps.Geography, {
            key: i,
            geography: geography,
            projection: projection,
            onMouseMove: _this2.handleMove,
            onMouseLeave: _this2.handleLeave,
            style: {
              default: {
                fill: _this2.getColor(geography.properties.adm0_a3),
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none"
              },
              hover: {
                fill: "#607D8B",
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none"
              },
              pressed: {
                fill: "#FF5722",
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none"
              }
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          });
        });
      }))), vtype == 'density' ? _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, " ", _react2.default.createElement("img", { style: imgStyle, className: "img", src: "/static/img.png", alt: "gini", __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      })) : _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, " ", _react2.default.createElement("img", { style: imgStyle, className: "img", src: "/static/gini.png", alt: "gini", __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      })), _react2.default.createElement(_reduxTooltip.Tooltip, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      })) : _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "Loading...")));
    }
  }]);

  return WithReduxExample;
}(_react.Component);

var imgStyle = {
  position: 'absolute',
  top: '100px',
  left: '50px'
};

var btnStyle = {
  display: 'inline-block',
  background: '#000',
  padding: '15px',
  fontSize: '18px',
  borderRadius: '46px',
  color: '#fed330',
  position: 'absolute',
  top: '14px',
  left: '283px',
  cursor: 'pointer'
};

var wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif"
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(WithReduxExample);