import React, { lazy, Suspense } from 'react';
export var loadable = function loadable(importFunc) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            fallback: null
        },
        _ref$fallback = _ref.fallback,
        fallback = _ref$fallback === void 0 ? null : _ref$fallback;

    var LazyComponent = /*#__PURE__*/lazy(importFunc);
    return function (props) {
        return /*#__PURE__*/React.createElement(Suspense, {
            fallback: fallback
        }, /*#__PURE__*/React.createElement(LazyComponent, props));
    };
};