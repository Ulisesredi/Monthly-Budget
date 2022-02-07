"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oq": () => (/* binding */ ADD_EXPENSE),
/* harmony export */   "hQ": () => (/* binding */ REMOVE_EXPENSE),
/* harmony export */   "A3": () => (/* binding */ ADD_INCOME),
/* harmony export */   "Li": () => (/* binding */ REMOVE_INCOME)
/* harmony export */ });
const ADD_EXPENSE = "ADD_EXPENSE";
const REMOVE_EXPENSE = "REMOVE_EXPENSE";
const ADD_INCOME = "ADD_INCOME";
const REMOVE_INCOME = "REMOVE_INCOME";


/***/ }),

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./Redux/type.js
var type = __webpack_require__(961);
;// CONCATENATED MODULE: ./Redux/reducer.js

function income(state = {}, action) {
    switch(action.type){
        case type/* ADD_INCOME */.A3:
            return {
                id: action.id,
                type: "INCOME",
                text: action.text,
                amount: action.amount
            };
        default:
            return state;
    }
}
function expense(state = {}, action) {
    switch(action.type){
        case type/* ADD_EXPENSE */.oq:
            return {
                id: action.id,
                type: "EXPENSE",
                text: action.text,
                amount: action.amount
            };
        default:
            return state;
    }
}
function calc(state = [], action) {
    switch(action.type){
        case type/* ADD_EXPENSE */.oq:
            return [
                ...state,
                expense(undefined, action)
            ];
        case type/* REMOVE_EXPENSE */.hQ:
            return state.filter((it)=>it.id != action.id
            );
        case type/* ADD_INCOME */.A3:
            return [
                ...state,
                income(undefined, action)
            ];
        case type/* REMOVE_INCOME */.Li:
            return state.filter((it)=>it.id != action.id
            );
        default:
            return state;
    }
};

;// CONCATENATED MODULE: external "redux-persist/lib/storage/createWebStorage"
const createWebStorage_namespaceObject = require("redux-persist/lib/storage/createWebStorage");
;// CONCATENATED MODULE: ./Redux/sync_storage.js

const createNoopStorage = ()=>{
    return {
        getItem (_key) {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem (_key) {
            return Promise.resolve();
        }
    };
};
const storage =  false ? 0 : createNoopStorage();
/* harmony default export */ const sync_storage = (storage);

;// CONCATENATED MODULE: ./Redux/index.js





const combinedReducer = (0,external_redux_namespaceObject.combineReducers)({
    calc: calc
});
// BINDING MIDDLEWARE
const bindMiddleware = (middleware)=>{
    if (false) {}
    return (0,external_redux_namespaceObject.applyMiddleware)(...middleware);
};
const makeStore = ({ isServer  })=>{
    if (isServer) {
        //If it's on server side, create a store
        return (0,external_redux_namespaceObject.createStore)(combinedReducer, bindMiddleware([
            (external_redux_thunk_default())
        ]));
    } else {
        //If it's on client side, create a store which will persist
        const { persistStore , persistReducer  } = __webpack_require__(161);
        const persistConfig = {
            key: "nextjs",
            whitelist: [
                "calc"
            ],
            storage: sync_storage
        };
        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer
        const store = (0,external_redux_namespaceObject.createStore)(persistedReducer, bindMiddleware([
            (external_redux_thunk_default())
        ])); // Creating the store again
        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
        return store;
    }
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: ./pages/_app.jsx





function MyApp({ Component , pageProps  }) {
    const store = (0,external_react_redux_.useStore)((state)=>state
    );
    return  false ? /*#__PURE__*/ 0 : /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
        persistor: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(394));
module.exports = __webpack_exports__;

})();