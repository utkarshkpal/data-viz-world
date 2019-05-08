webpackHotUpdate(5,{

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(34);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(35);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(650);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactSimpleMaps = __webpack_require__(676);

var _reduxTooltip = __webpack_require__(641);

var _axios = __webpack_require__(827);

var _axios2 = _interopRequireDefault(_axios);

var _store = __webpack_require__(846);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/utkarsh/Desktop/work/dresslife/tool-tip/with-redux-tooltip/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/utkarsh/Desktop/work/dresslife/tool-tip/with-redux-tooltip/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40ZjZjOGUxYzEzZDBjMDdkYzNlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTE3MjBkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxuaW1wb3J0IHtDb21wb3NhYmxlTWFwLCBab29tYWJsZUdyb3VwLCBHZW9ncmFwaGllcywgR2VvZ3JhcGh5fSBmcm9tIFwicmVhY3Qtc2ltcGxlLW1hcHNcIlxuaW1wb3J0IHtUb29sdGlwLCBhY3Rpb25zfSBmcm9tIFwicmVkdXgtdG9vbHRpcFwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gXCIuLi9zdG9yZVwiXG5cblxuY29uc3Qge3Nob3csIGhpZGV9ID0gYWN0aW9uc1xuXG5jbGFzcyBXaXRoUmVkdXhFeGFtcGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGF0YTogW10sXG4gICAgdnR5cGU6ICdkZW5zaXR5J1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBheGlvc1xuICAgICAgLmdldCgnaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBzZWxmLnNldFN0YXRlKHtkYXRhOiByZXNwb25zZS5kYXRhfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWx0ZXJEYXRhVHlwZSA9ICgpID0+IHtcbiAgICBjb25zdCB7dnR5cGV9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodnR5cGUgPT09ICdkZW5zaXR5Jykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dnR5cGU6ICdnaW5pJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2dHlwZTogJ2RlbnNpdHknfSlcbiAgICB9XG4gIH1cblxuICBnZXRDb250ZW50ID0gKG5hbWUpID0+IHtcbiAgICBcbiAgICBjb25zdCB7ZGF0YSwgdnR5cGV9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb3VudHJ5RGF0YSA9IGRhdGEuZmlsdGVyKChlbGVtKSA9PiB7XG4gICAgICAgXG4gICAgICBpZiAobmFtZSA9PT0gZWxlbS5hbHBoYTNDb2RlKSB7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKGNvdW50cnlEYXRhWzBdKSB7XG4gICAgICBjb25zdCB7Z2luaSwgcG9wdWxhdGlvbiwgYXJlYX0gPSBjb3VudHJ5RGF0YVswXTtcbiAgICAgIGNvbnN0IGFyZWFJblNxTWlsZXMgPSBhcmVhICogMC4zODYxMDI7XG4gICAgICBjb25zdCBkZW5zaXR5ID0gcG9wdWxhdGlvbiAvIGFyZWFJblNxTWlsZXM7XG4gICAgICBpZiAodnR5cGUgPT09ICdkZW5zaXR5Jykge1xuICAgICAgICByZXR1cm4gZGVuc2l0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnaW5pO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgZm9ybWF0ID0gKHZhbHVlKSA9PntcbiAgICBpZih2YWx1ZSl7XG4gICAgICBjb25zdCB7IHZ0eXBlfSA9dGhpcy5zdGF0ZTtcbiAgICAgIGlmKHZ0eXBlID09ICdkZW5zaXR5Jyl7XG4gICAgICAgcmV0dXJuIGAke3ZhbHVlLnRvRml4ZWQoMil9IHBlciBzcSBtaWxlc2A7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gIH1cbiAgZ2V0Q29sb3IgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHt2dHlwZX0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBkO1xuICAgIGlmKHZ0eXBlID09ICdkZW5zaXR5Jyl7XG4gICAgICAgZCAgPSB0aGlzLmdldENvbnRlbnQobmFtZSk7XG4gICAgICByZXR1cm4gZCA+IDUwMCAgPyAnI0JEMDAyNicgOlxuICAgICAgICAgICAgIGQgPiAyMDAgID8gJyNFMzFBMUMnIDpcbiAgICAgICAgICAgICBkID4gMTAwICA/ICcjRkM0RTJBJyA6XG4gICAgICAgICAgICAgZCA+IDUwICAgPyAnI0ZEOEQzQycgOlxuICAgICAgICAgICAgIGQgPiAyMCAgID8gJyNGRUIyNEMnIDpcbiAgICAgICAgICAgICBkID4gMTAgICA/ICcjRkVEOTc2JyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnI0ZGRURBMCc7XG4gICAgfWVsc2Uge1xuICAgICAgIGQgID0gdGhpcy5nZXRDb250ZW50KG5hbWUpO1xuICAgICAgcmV0dXJuIGQgPiA2MCAgID8gJyNCRDAwMjYnIDpcbiAgICAgICAgICAgICBkID4gNTUgICA/ICcjQ0YzNzJEJyA6XG4gICAgICAgICAgICAgZCA+IDUwICAgPyAnI0VBM0YzMycgOlxuICAgICAgICAgICAgIGQgPiA0NSAgID8gJyNFQjYyNjMnOlxuICAgICAgICAgICAgIGQgPiA0MCAgID8gJyNGNkNDQ0QnOlxuICAgICAgICAgICAgIGQgPiAzNSAgID8gJyM5NUY1OUEnOlxuICAgICAgICAgICAgIGQgPiAzMCAgID8gJyM3RkYyMzcnOlxuICAgICAgICAgICAgIGQgPiAyNSAgID8gJyM2Q0NGMTInOlxuICAgICAgICAgICAgICAgICAgICAgICAnI0ZGRkZGRic7XG4gICAgfVxuICAgIFxuICAgIFxuICB9XG5cbiAgaGFuZGxlTW92ZSA9IChnZW9ncmFwaHksIGV2dCkgPT4ge1xuXG4gICAgY29uc3QgeCA9IGV2dC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2dC5jbGllbnRZICsgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgdGhpc1xuICAgICAgLnByb3BzXG4gICAgICAuZGlzcGF0Y2goc2hvdyh7XG4gICAgICAgIG9yaWdpbjoge1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeVxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiB0aGlzLmZvcm1hdCh0aGlzLmdldENvbnRlbnQoZ2VvZ3JhcGh5LnByb3BlcnRpZXMuYWRtMF9hMykpXG4gICAgICB9KSlcbiAgfVxuICBoYW5kbGVMZWF2ZSA9ICgpID0+IHtcbiAgICB0aGlzXG4gICAgICAucHJvcHNcbiAgICAgIC5kaXNwYXRjaChoaWRlKCkpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkYXRhLHZ0eXBlfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICB7dnR5cGUgPT09ICdkZW5zaXR5JyA/IDxoMT5Qb3B1bGF0aW9uIERlbnNpdHk8L2gxPiA6IDxoMT5HaW5pIENvZWZmaWNpZW50PC9oMT59XG4gICAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGVzfT5cbiAgICAgICAgPGRpdiBzdHlsZT17YnRuU3R5bGV9IG9uQ2xpY2s9e3RoaXMuYWx0ZXJEYXRhVHlwZX0+QnV0dG9uPC9kaXY+XG4gICAgICAge2RhdGEubGVuZ3RoID8gIFxuICAgICAgIDxkaXY+XG4gICAgICAgPENvbXBvc2FibGVNYXBcbiAgICAgICAgICBwcm9qZWN0aW9uQ29uZmlnPXt7XG4gICAgICAgICAgc2NhbGU6IDIwNSxcbiAgICAgICAgICByb3RhdGlvbjogWy0xMSwgMCwgMF1cbiAgICAgICAgfX1cbiAgICAgICAgICB3aWR0aD17OTgwfVxuICAgICAgICAgIGhlaWdodD17NTUxfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCJhdXRvXCJcbiAgICAgICAgfX0+XG5cbiAgICAgICAgICA8Wm9vbWFibGVHcm91cCBjZW50ZXI9e1swLCAyMF19PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPEdlb2dyYXBoaWVzIGRpc2FibGVPcHRpbWl6YXRpb249J2ZhbHNlJyBnZW9ncmFwaHk9XCIvc3RhdGljL3dvcmxkLTUwbS13aXRoLXBvcHVsYXRpb24uanNvblwiPlxuICAgICAgICAgICAgICB7KGdlb2dyYXBoaWVzLCBwcm9qZWN0aW9uKSA9PiBnZW9ncmFwaGllcy5tYXAoKGdlb2dyYXBoeSwgaSkgPT4gKDxHZW9ncmFwaHlcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgZ2VvZ3JhcGh5PXtnZW9ncmFwaHl9XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbj17cHJvamVjdGlvbn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVNb3ZlfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVMZWF2ZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGw6IHRoaXMuZ2V0Q29sb3IoZ2VvZ3JhcGh5LnByb3BlcnRpZXMuYWRtMF9hMyksXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzYwN0Q4QlwiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAuNzUsXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzYwN0Q4QlwiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM2MDdEOEJcIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI0ZGNTcyMlwiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM2MDdEOEJcIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19Lz4pKVxufVxuICAgICAgICAgICAgPC9HZW9ncmFwaGllcz5cbiAgICAgICAgICA8L1pvb21hYmxlR3JvdXA+XG4gICAgICAgIDwvQ29tcG9zYWJsZU1hcD5cbiAgICAgICB7dnR5cGUgPT0gJ2RlbnNpdHknPzxkaXY+IDxpbWcgc3R5bGU9e2ltZ1N0eWxlfSBjbGFzc05hbWU9J2ltZycgc3JjPScvc3RhdGljL2ltZy5wbmcnIGFsdD0nZ2luaScvPjwvZGl2Pjo8ZGl2PiA8aW1nIHN0eWxlPXtpbWdTdHlsZX0gY2xhc3NOYW1lPSdpbWcnIHNyYz0nL3N0YXRpYy9naW5pLnBuZycgYWx0PSdnaW5pJy8+PC9kaXY+fVxuICAgICAgICA8VG9vbHRpcC8+XG4gICAgICAgIDwvZGl2PiA6IDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgaW1nU3R5bGUgPSB7XG4gICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgdG9wOicxMDBweCcsXG4gICBsZWZ0Oic1MHB4J1xufVxuXG5jb25zdCBidG5TdHlsZSA9IHtcbiAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc0NnB4JyxcbiAgICBjb2xvcjogJyNmZWQzMzAnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzE0cHgnLFxuICAgIGxlZnQ6ICcyODNweCcsXG4gICAgY3Vyc29yOidwb2ludGVyJ1xufVxuXG5jb25zdCB3cmFwcGVyU3R5bGVzID0ge1xuICB3aWR0aDogXCIxMDAlXCIsXG4gIG1heFdpZHRoOiA5ODAsXG4gIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgZm9udEZhbWlseTogXCJSb2JvdG8sIHNhbnMtc2VyaWZcIlxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoV2l0aFJlZHV4RXhhbXBsZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBVUE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQTtBQUVBO0FBSEE7QUFHQTtBQUpBO0FBT0E7QUFFQTs7Ozs7O0FBakdBO0FBQUE7QUFFQTtBQUVBO0FBSEE7QUFNQTtBQUVBOzs7O0FBMkZBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFBQTtBQURBO0FBUkE7QUFZQTtBQVpBO0FBQ0E7QUFXQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBO0FBRUE7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBYkE7QUFQQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBOEJBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFuS0E7QUFDQTtBQTBLQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVEE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFSQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==