"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Search = function(param) {\n    var recipe = param.recipe;\n    var getData = function getData() {\n        fetch(\"https://themealdb.com/api/json/v1/1/search.php?s=\".concat(search)).then(function(res) {\n            return res.json();\n        }).then(function(resObject) {\n            setData(resObject);\n            console.log(\"resObject\", resObject);\n        }).catch(function(err) {\n            console.error(err);\n        });\n    };\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), search = ref2[0], setSearch = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), data = ref3[0], setData = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"search\", search);\n    }, [\n        search\n    ]);\n    var handleInput = function(setter, e) {\n        setter(e.target.value);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\Codage\\\\projets post bocal\\\\next.js\\\\NextRecipe\\\\nextrecipe\\\\pages\\\\search.js\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"D:\\\\Codage\\\\projets post bocal\\\\next.js\\\\NextRecipe\\\\nextrecipe\\\\pages\\\\search.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Recherchez parmis les recettes\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search a recipe\",\n                onChange: function(e) {\n                    return handleInput(setSearch, e);\n                },\n                __source: {\n                    fileName: \"D:\\\\Codage\\\\projets post bocal\\\\next.js\\\\NextRecipe\\\\nextrecipe\\\\pages\\\\search.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: getData,\n                __source: {\n                    fileName: \"D:\\\\Codage\\\\projets post bocal\\\\next.js\\\\NextRecipe\\\\nextrecipe\\\\pages\\\\search.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"click\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"D:\\\\Codage\\\\projets post bocal\\\\next.js\\\\NextRecipe\\\\nextrecipe\\\\pages\\\\search.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: recipe === null || recipe === void 0 ? void 0 : (ref = recipe.meals) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.strMeal\n            })\n        ]\n    }));\n};\n_s(Search, \"TzMbx2bAjDhvCkrav3tHkEymkoI=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDs7O0FBRWxELEdBQUssQ0FBQ0csTUFBTSxHQUFHLFFBQVEsUUFBUSxDQUFDO1FBQWRDLE1BQU0sU0FBTkEsTUFBTTtRQUliQyxPQUFPLEdBQWhCLFFBQVEsQ0FBQ0EsT0FBTyxHQUFHLENBQUM7UUFDbEJDLEtBQUssQ0FBRSxDQUFpRCxtREFBUyxPQUFQQyxNQUFNLEdBQzdEQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztZQUNkLE1BQU0sQ0FBQ0EsR0FBRyxDQUFDQyxJQUFJO1FBQ2pCLENBQUMsRUFDQUYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsU0FBUyxFQUFLLENBQUM7WUFDcEJDLE9BQU8sQ0FBQ0QsU0FBUztZQUNqQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFFSCxTQUFTO1FBQ3BDLENBQUMsRUFDQUksS0FBSyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7WUFDZkgsT0FBTyxDQUFDSSxLQUFLLENBQUNELEdBQUc7UUFDbkIsQ0FBQztJQUNMLENBQUM7UUFvQk9aLEdBQWE7O0lBbkNyQixHQUFLLENBQXVCSCxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFsQ00sTUFBTSxHQUFlTixJQUFjLEtBQTNCaUIsU0FBUyxHQUFJakIsSUFBYztJQUMxQyxHQUFLLENBQW1CQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUE5QmtCLElBQUksR0FBYWxCLElBQWMsS0FBekJXLE9BQU8sR0FBSVgsSUFBYztJQWdCdENDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFFUCxNQUFNO0lBQzlCLENBQUMsRUFBRSxDQUFDQTtRQUFBQSxNQUFNO0lBQUEsQ0FBQztJQUVYLEdBQUssQ0FBQ2EsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsTUFBTSxFQUFFQyxDQUFDLEVBQUssQ0FBQztRQUNsQ0QsTUFBTSxDQUFDQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztJQUN2QixDQUFDO0lBRUQsTUFBTSx1RUFDSEMsQ0FBRzs7Ozs7Ozs7aUZBQ0RDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBOEI7O2lGQUVqQ0MsQ0FBSztnQkFDSkMsSUFBSSxFQUFDLENBQU07Z0JBQ1hDLFdBQVcsRUFBQyxDQUFpQjtnQkFDN0JDLFFBQVEsRUFBRSxRQUFRLENBQVBSLENBQUM7b0JBQUtGLE1BQU0sQ0FBTkEsV0FBVyxDQUFDRixTQUFTLEVBQUVJLENBQUM7Ozs7Ozs7OztpRkFFMUNTLENBQU07Z0JBQUNDLE9BQU8sRUFBRTNCLE9BQU87Ozs7Ozs7MEJBQUUsQ0FBSzs7aUZBQzlCNEIsQ0FBQzs7Ozs7OzswQkFBRTdCLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLElBQWJBLEdBQWEsR0FBYkEsTUFBTSxDQUFFOEIsS0FBSyxjQUFiOUIsR0FBYSxLQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLFdBQWJBLEdBQWEsQ0FBRyxDQUFDLHdCQUFqQkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxRQUFPK0IsT0FBTzs7OztBQUdyQyxDQUFDO0dBdkNLaEMsTUFBTTtLQUFOQSxNQUFNO0FBeUNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzkyMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7IHJlY2lwZSB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vdGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cz0ke3NlYXJjaH1gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNPYmplY3QpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlc09iamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNPYmplY3RcIiwgcmVzT2JqZWN0KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2VhcmNoXCIsIHNlYXJjaCk7XHJcbiAgfSwgW3NlYXJjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChzZXR0ZXIsIGUpID0+IHtcclxuICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5SZWNoZXJjaGV6IHBhcm1pcyBsZXMgcmVjZXR0ZXM8L2gxPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgcmVjaXBlXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KHNldFNlYXJjaCwgZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Z2V0RGF0YX0+Y2xpY2s8L2J1dHRvbj5cclxuICAgICAgPHA+e3JlY2lwZT8ubWVhbHM/LlswXT8uc3RyTWVhbH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInJlY2lwZSIsImdldERhdGEiLCJmZXRjaCIsInNlYXJjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzT2JqZWN0Iiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwic2V0U2VhcmNoIiwiZGF0YSIsImhhbmRsZUlucHV0Iiwic2V0dGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJtZWFscyIsInN0ck1lYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

});