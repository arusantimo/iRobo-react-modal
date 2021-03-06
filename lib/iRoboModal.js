'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DeskTopModal = require('./DeskTopModal');

var _DeskTopModal2 = _interopRequireDefault(_DeskTopModal);

var _MobileModal = require('./MobileModal');

var _MobileModal2 = _interopRequireDefault(_MobileModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iRoboModal = function (_Component) {
  _inherits(iRoboModal, _Component);

  function iRoboModal(props) {
    _classCallCheck(this, iRoboModal);

    var _this = _possibleConstructorReturn(this, (iRoboModal.__proto__ || Object.getPrototypeOf(iRoboModal)).call(this, props));

    _this.state = {
      userAgent: 'DeskTop',
      isOpen: props.isOpen
    };
    _this.isClose = _this.isClose.bind(_this);
    _this.userAgentDetect = _this.userAgentDetect.bind(_this);
    return _this;
  }

  _createClass(iRoboModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.userAgentDetect();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.isOpen !== this.props.isOpen) {
        this.isClose();
      }
    }
  }, {
    key: 'isClose',
    value: function isClose(e) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'userAgentDetect',
    value: function userAgentDetect() {
      var userAgent = navigator.userAgent.indexOf('Mobile') != -1 ? 'Mobile' : 'DeskTop';
      this.setState({
        userAgent: userAgent
      });
    }
  }, {
    key: 'wheelpreventDefault',
    value: function wheelpreventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var modal = this.state.userAgent === 'DeskTop' ? _react2.default.createElement(
        _DeskTopModal2.default,
        {
          isWidth: this.props.isWidth,
          isHeight: this.props.isHeight,
          bgColor: this.props.bgColor,
          isClose: function isClose() {
            return _this2.isClose();
          }
        },
        this.props.children
      ) : _react2.default.createElement(
        _MobileModal2.default,
        {
          isWidth: this.props.isWidth,
          isHeight: this.props.isHeight,
          bgColor: this.props.bgColor
        },
        this.props.children
      );
      return _react2.default.createElement(
        'div',
        null,
        this.state.isOpen ? modal : null
      );
    }
  }]);

  return iRoboModal;
}(_react.Component);

exports.default = iRoboModal;