(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity),
        l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
}
)();
var Oa = {
    exports: {}
}
  , bl = {}
  , Da = {
    exports: {}
}
  , T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur = Symbol.for("react.element")
  , Ed = Symbol.for("react.portal")
  , Fd = Symbol.for("react.fragment")
  , Pd = Symbol.for("react.strict_mode")
  , Cd = Symbol.for("react.profiler")
  , Ld = Symbol.for("react.provider")
  , Rd = Symbol.for("react.context")
  , _d = Symbol.for("react.forward_ref")
  , Td = Symbol.for("react.suspense")
  , zd = Symbol.for("react.memo")
  , Md = Symbol.for("react.lazy")
  , Ns = Symbol.iterator;
function Bd(e) {
    return e === null || typeof e != "object" ? null : (e = Ns && e[Ns] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var $a = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Aa = Object.assign
  , Ua = {};
function gn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ua,
    this.updater = n || $a
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
gn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Wa() {}
Wa.prototype = gn.prototype;
function gi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ua,
    this.updater = n || $a
}
var xi = gi.prototype = new Wa;
xi.constructor = gi;
Aa(xi, gn.prototype);
xi.isPureReactComponent = !0;
var js = Array.isArray
  , Ha = Object.prototype.hasOwnProperty
  , vi = {
    current: null
}
  , Va = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Qa(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Ha.call(t, r) && !Va.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        l.children = n;
    else if (1 < a) {
        for (var u = Array(a), c = 0; c < a; c++)
            u[c] = arguments[c + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: ur,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: vi.current
    }
}
function Id(e, t) {
    return {
        $$typeof: ur,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function yi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ur
}
function Od(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ss = /\/+/g;
function Ql(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Od("" + e.key) : t.toString(36)
}
function Dr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ur:
            case Ed:
                i = !0
            }
        }
    if (i)
        return i = e,
        l = l(i),
        e = r === "" ? "." + Ql(i, 0) : r,
        js(l) ? (n = "",
        e != null && (n = e.replace(Ss, "$&/") + "/"),
        Dr(l, t, n, "", function(c) {
            return c
        })) : l != null && (yi(l) && (l = Id(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ss, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    js(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + Ql(o, a);
            i += Dr(o, t, n, u, l)
        }
    else if (u = Bd(e),
    typeof u == "function")
        for (e = u.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            u = r + Ql(o, a++),
            i += Dr(o, t, n, u, l);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function kr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Dr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }),
    r
}
function Dd(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var de = {
    current: null
}
  , $r = {
    transition: null
}
  , $d = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: $r,
    ReactCurrentOwner: vi
};
function Ka() {
    throw Error("act(...) is not supported in production builds of React.")
}
T.Children = {
    map: kr,
    forEach: function(e, t, n) {
        kr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return kr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return kr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!yi(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = gn;
T.Fragment = Fd;
T.Profiler = Cd;
T.PureComponent = gi;
T.StrictMode = Pd;
T.Suspense = Td;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
T.act = Ka;
T.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Aa({}, e.props)
      , l = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = vi.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (u in t)
            Ha.call(t, u) && !Va.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var c = 0; c < u; c++)
            a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: ur,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
}
;
T.createContext = function(e) {
    return e = {
        $$typeof: Rd,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ld,
        _context: e
    },
    e.Consumer = e
}
;
T.createElement = Qa;
T.createFactory = function(e) {
    var t = Qa.bind(null, e);
    return t.type = e,
    t
}
;
T.createRef = function() {
    return {
        current: null
    }
}
;
T.forwardRef = function(e) {
    return {
        $$typeof: _d,
        render: e
    }
}
;
T.isValidElement = yi;
T.lazy = function(e) {
    return {
        $$typeof: Md,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Dd
    }
}
;
T.memo = function(e, t) {
    return {
        $$typeof: zd,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
T.startTransition = function(e) {
    var t = $r.transition;
    $r.transition = {};
    try {
        e()
    } finally {
        $r.transition = t
    }
}
;
T.unstable_act = Ka;
T.useCallback = function(e, t) {
    return de.current.useCallback(e, t)
}
;
T.useContext = function(e) {
    return de.current.useContext(e)
}
;
T.useDebugValue = function() {}
;
T.useDeferredValue = function(e) {
    return de.current.useDeferredValue(e)
}
;
T.useEffect = function(e, t) {
    return de.current.useEffect(e, t)
}
;
T.useId = function() {
    return de.current.useId()
}
;
T.useImperativeHandle = function(e, t, n) {
    return de.current.useImperativeHandle(e, t, n)
}
;
T.useInsertionEffect = function(e, t) {
    return de.current.useInsertionEffect(e, t)
}
;
T.useLayoutEffect = function(e, t) {
    return de.current.useLayoutEffect(e, t)
}
;
T.useMemo = function(e, t) {
    return de.current.useMemo(e, t)
}
;
T.useReducer = function(e, t, n) {
    return de.current.useReducer(e, t, n)
}
;
T.useRef = function(e) {
    return de.current.useRef(e)
}
;
T.useState = function(e) {
    return de.current.useState(e)
}
;
T.useSyncExternalStore = function(e, t, n) {
    return de.current.useSyncExternalStore(e, t, n)
}
;
T.useTransition = function() {
    return de.current.useTransition()
}
;
T.version = "18.3.1";
Da.exports = T;
var x = Da.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = x
  , Ud = Symbol.for("react.element")
  , Wd = Symbol.for("react.fragment")
  , Hd = Object.prototype.hasOwnProperty
  , Vd = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Qd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ya(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        Hd.call(t, r) && !Qd.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Ud,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Vd.current
    }
}
bl.Fragment = Wd;
bl.jsx = Ya;
bl.jsxs = Ya;
Oa.exports = bl;
var s = Oa.exports
  , Ga = {
    exports: {}
}
  , je = {}
  , Xa = {
    exports: {}
}
  , Za = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, R) {
        var _ = E.length;
        E.push(R);
        e: for (; 0 < _; ) {
            var Y = _ - 1 >>> 1
              , J = E[Y];
            if (0 < l(J, R))
                E[Y] = R,
                E[_] = J,
                _ = Y;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var R = E[0]
          , _ = E.pop();
        if (_ !== R) {
            E[0] = _;
            e: for (var Y = 0, J = E.length, yr = J >>> 1; Y < yr; ) {
                var Et = 2 * (Y + 1) - 1
                  , Vl = E[Et]
                  , Ft = Et + 1
                  , wr = E[Ft];
                if (0 > l(Vl, _))
                    Ft < J && 0 > l(wr, Vl) ? (E[Y] = wr,
                    E[Ft] = _,
                    Y = Ft) : (E[Y] = Vl,
                    E[Et] = _,
                    Y = Et);
                else if (Ft < J && 0 > l(wr, _))
                    E[Y] = wr,
                    E[Ft] = _,
                    Y = Ft;
                else
                    break e
            }
        }
        return R
    }
    function l(E, R) {
        var _ = E.sortIndex - R.sortIndex;
        return _ !== 0 ? _ : E.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var u = []
      , c = []
      , p = 1
      , h = null
      , g = 3
      , v = !1
      , y = !1
      , k = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(E) {
        for (var R = n(c); R !== null; ) {
            if (R.callback === null)
                r(c);
            else if (R.startTime <= E)
                r(c),
                R.sortIndex = R.expirationTime,
                t(u, R);
            else
                break;
            R = n(c)
        }
    }
    function w(E) {
        if (k = !1,
        m(E),
        !y)
            if (n(u) !== null)
                y = !0,
                Wl(j);
            else {
                var R = n(c);
                R !== null && Hl(w, R.startTime - E)
            }
    }
    function j(E, R) {
        y = !1,
        k && (k = !1,
        f(C),
        C = -1),
        v = !0;
        var _ = g;
        try {
            for (m(R),
            h = n(u); h !== null && (!(h.expirationTime > R) || E && !me()); ) {
                var Y = h.callback;
                if (typeof Y == "function") {
                    h.callback = null,
                    g = h.priorityLevel;
                    var J = Y(h.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof J == "function" ? h.callback = J : h === n(u) && r(u),
                    m(R)
                } else
                    r(u);
                h = n(u)
            }
            if (h !== null)
                var yr = !0;
            else {
                var Et = n(c);
                Et !== null && Hl(w, Et.startTime - R),
                yr = !1
            }
            return yr
        } finally {
            h = null,
            g = _,
            v = !1
        }
    }
    var P = !1
      , F = null
      , C = -1
      , M = 5
      , L = -1;
    function me() {
        return !(e.unstable_now() - L < M)
    }
    function kn() {
        if (F !== null) {
            var E = e.unstable_now();
            L = E;
            var R = !0;
            try {
                R = F(!0, E)
            } finally {
                R ? Nn() : (P = !1,
                F = null)
            }
        } else
            P = !1
    }
    var Nn;
    if (typeof d == "function")
        Nn = function() {
            d(kn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ks = new MessageChannel
          , bd = ks.port2;
        ks.port1.onmessage = kn,
        Nn = function() {
            bd.postMessage(null)
        }
    } else
        Nn = function() {
            S(kn, 0)
        }
        ;
    function Wl(E) {
        F = E,
        P || (P = !0,
        Nn())
    }
    function Hl(E, R) {
        C = S(function() {
            E(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || v || (y = !0,
        Wl(j))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(E) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = g
        }
        var _ = g;
        g = R;
        try {
            return E()
        } finally {
            g = _
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, R) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var _ = g;
        g = E;
        try {
            return R()
        } finally {
            g = _
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, R, _) {
        var Y = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay,
        _ = typeof _ == "number" && 0 < _ ? Y + _ : Y) : _ = Y,
        E) {
        case 1:
            var J = -1;
            break;
        case 2:
            J = 250;
            break;
        case 5:
            J = 1073741823;
            break;
        case 4:
            J = 1e4;
            break;
        default:
            J = 5e3
        }
        return J = _ + J,
        E = {
            id: p++,
            callback: R,
            priorityLevel: E,
            startTime: _,
            expirationTime: J,
            sortIndex: -1
        },
        _ > Y ? (E.sortIndex = _,
        t(c, E),
        n(u) === null && E === n(c) && (k ? (f(C),
        C = -1) : k = !0,
        Hl(w, _ - Y))) : (E.sortIndex = J,
        t(u, E),
        y || v || (y = !0,
        Wl(j))),
        E
    }
    ,
    e.unstable_shouldYield = me,
    e.unstable_wrapCallback = function(E) {
        var R = g;
        return function() {
            var _ = g;
            g = R;
            try {
                return E.apply(this, arguments)
            } finally {
                g = _
            }
        }
    }
}
)(Za);
Xa.exports = Za;
var Kd = Xa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd = x
  , Ne = Kd;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var qa = new Set
  , Vn = {};
function $t(e, t) {
    un(e, t),
    un(e + "Capture", t)
}
function un(e, t) {
    for (Vn[e] = t,
    e = 0; e < t.length; e++)
        qa.add(t[e])
}
var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ko = Object.prototype.hasOwnProperty
  , Gd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , bs = {}
  , Es = {};
function Xd(e) {
    return ko.call(Es, e) ? !0 : ko.call(bs, e) ? !1 : Gd.test(e) ? Es[e] = !0 : (bs[e] = !0,
    !1)
}
function Zd(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function qd(e, t, n, r) {
    if (t === null || typeof t > "u" || Zd(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function fe(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    le[e] = new fe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    le[t] = new fe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    le[e] = new fe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    le[e] = new fe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    le[e] = new fe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    le[e] = new fe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    le[e] = new fe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    le[e] = new fe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    le[e] = new fe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var wi = /[\-:]([a-z])/g;
function ki(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(wi, ki);
    le[t] = new fe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(wi, ki);
    le[t] = new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(wi, ki);
    le[t] = new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    le[e] = new fe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
le.xlinkHref = new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    le[e] = new fe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ni(e, t, n, r) {
    var l = le.hasOwnProperty(t) ? le[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qd(t, n, l, r) && (n = null),
    r || l === null ? Xd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var lt = Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Nr = Symbol.for("react.element")
  , Ht = Symbol.for("react.portal")
  , Vt = Symbol.for("react.fragment")
  , ji = Symbol.for("react.strict_mode")
  , No = Symbol.for("react.profiler")
  , Ja = Symbol.for("react.provider")
  , eu = Symbol.for("react.context")
  , Si = Symbol.for("react.forward_ref")
  , jo = Symbol.for("react.suspense")
  , So = Symbol.for("react.suspense_list")
  , bi = Symbol.for("react.memo")
  , it = Symbol.for("react.lazy")
  , tu = Symbol.for("react.offscreen")
  , Fs = Symbol.iterator;
function jn(e) {
    return e === null || typeof e != "object" ? null : (e = Fs && e[Fs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Q = Object.assign, Kl;
function _n(e) {
    if (Kl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Kl = t && t[1] || ""
        }
    return `
` + Kl + e
}
var Yl = !1;
function Gl(e, t) {
    if (!e || Yl)
        return "";
    Yl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (l[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || l[i] !== o[a]) {
                                var u = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Yl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? _n(e) : ""
}
function Jd(e) {
    switch (e.tag) {
    case 5:
        return _n(e.type);
    case 16:
        return _n("Lazy");
    case 13:
        return _n("Suspense");
    case 19:
        return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Gl(e.type, !1),
        e;
    case 11:
        return e = Gl(e.type.render, !1),
        e;
    case 1:
        return e = Gl(e.type, !0),
        e;
    default:
        return ""
    }
}
function bo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Vt:
        return "Fragment";
    case Ht:
        return "Portal";
    case No:
        return "Profiler";
    case ji:
        return "StrictMode";
    case jo:
        return "Suspense";
    case So:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case eu:
            return (e.displayName || "Context") + ".Consumer";
        case Ja:
            return (e._context.displayName || "Context") + ".Provider";
        case Si:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case bi:
            return t = e.displayName || null,
            t !== null ? t : bo(e.type) || "Memo";
        case it:
            t = e._payload,
            e = e._init;
            try {
                return bo(e(t))
            } catch {}
        }
    return null
}
function ef(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return bo(t);
    case 8:
        return t === ji ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function wt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function nu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function tf(e) {
    var t = nu(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function jr(e) {
    e._valueTracker || (e._valueTracker = tf(e))
}
function ru(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = nu(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Jr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Eo(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ps(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = wt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function lu(e, t) {
    t = t.checked,
    t != null && Ni(e, "checked", t, !1)
}
function Fo(e, t) {
    lu(e, t);
    var n = wt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Po(e, t.type, n) : t.hasOwnProperty("defaultValue") && Po(e, t.type, wt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Cs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Po(e, t, n) {
    (t !== "number" || Jr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Tn = Array.isArray;
function nn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + wt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function Co(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ls(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (Tn(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: wt(n)
    }
}
function ou(e, t) {
    var n = wt(t.value)
      , r = wt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Rs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function iu(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Lo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Sr, su = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Sr = Sr || document.createElement("div"),
        Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Sr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Qn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function(e) {
    nf.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Bn[t] = Bn[e]
    })
});
function au(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bn.hasOwnProperty(e) && Bn[e] ? ("" + t).trim() : t + "px"
}
function uu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = au(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var rf = Q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ro(e, t) {
    if (t) {
        if (rf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function _o(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var To = null;
function Ei(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var zo = null
  , rn = null
  , ln = null;
function _s(e) {
    if (e = fr(e)) {
        if (typeof zo != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = Ll(t),
        zo(e.stateNode, e.type, t))
    }
}
function cu(e) {
    rn ? ln ? ln.push(e) : ln = [e] : rn = e
}
function du() {
    if (rn) {
        var e = rn
          , t = ln;
        if (ln = rn = null,
        _s(e),
        t)
            for (e = 0; e < t.length; e++)
                _s(t[e])
    }
}
function fu(e, t) {
    return e(t)
}
function mu() {}
var Xl = !1;
function pu(e, t, n) {
    if (Xl)
        return e(t, n);
    Xl = !0;
    try {
        return fu(e, t, n)
    } finally {
        Xl = !1,
        (rn !== null || ln !== null) && (mu(),
        du())
    }
}
function Kn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ll(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var Mo = !1;
if (Je)
    try {
        var Sn = {};
        Object.defineProperty(Sn, "passive", {
            get: function() {
                Mo = !0
            }
        }),
        window.addEventListener("test", Sn, Sn),
        window.removeEventListener("test", Sn, Sn)
    } catch {
        Mo = !1
    }
function lf(e, t, n, r, l, o, i, a, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (p) {
        this.onError(p)
    }
}
var In = !1
  , el = null
  , tl = !1
  , Bo = null
  , of = {
    onError: function(e) {
        In = !0,
        el = e
    }
};
function sf(e, t, n, r, l, o, i, a, u) {
    In = !1,
    el = null,
    lf.apply(of, arguments)
}
function af(e, t, n, r, l, o, i, a, u) {
    if (sf.apply(this, arguments),
    In) {
        if (In) {
            var c = el;
            In = !1,
            el = null
        } else
            throw Error(N(198));
        tl || (tl = !0,
        Bo = c)
    }
}
function At(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function hu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ts(e) {
    if (At(e) !== e)
        throw Error(N(188))
}
function uf(e) {
    var t = e.alternate;
    if (!t) {
        if (t = At(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n)
                    return Ts(l),
                    e;
                if (o === r)
                    return Ts(l),
                    t;
                o = o.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = l,
            r = o;
        else {
            for (var i = !1, a = l.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = l,
                    r = o;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = l,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = o,
                        r = l;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = o,
                        n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function gu(e) {
    return e = uf(e),
    e !== null ? xu(e) : null
}
function xu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = xu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var vu = Ne.unstable_scheduleCallback
  , zs = Ne.unstable_cancelCallback
  , cf = Ne.unstable_shouldYield
  , df = Ne.unstable_requestPaint
  , G = Ne.unstable_now
  , ff = Ne.unstable_getCurrentPriorityLevel
  , Fi = Ne.unstable_ImmediatePriority
  , yu = Ne.unstable_UserBlockingPriority
  , nl = Ne.unstable_NormalPriority
  , mf = Ne.unstable_LowPriority
  , wu = Ne.unstable_IdlePriority
  , El = null
  , Ue = null;
function pf(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function")
        try {
            Ue.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Be = Math.clz32 ? Math.clz32 : xf
  , hf = Math.log
  , gf = Math.LN2;
function xf(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (hf(e) / gf | 0) | 0
}
var br = 64
  , Er = 4194304;
function zn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function rl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~l;
        a !== 0 ? r = zn(a) : (o &= i,
        o !== 0 && (r = zn(o)))
    } else
        i = n & ~l,
        i !== 0 ? r = zn(i) : o !== 0 && (r = zn(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    o = t & -t,
    l >= o || l === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Be(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function vf(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function yf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - Be(o)
          , a = 1 << i
          , u = l[i];
        u === -1 ? (!(a & n) || a & r) && (l[i] = vf(a, t)) : u <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function Io(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ku() {
    var e = br;
    return br <<= 1,
    !(br & 4194240) && (br = 64),
    e
}
function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function cr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Be(t),
    e[t] = n
}
function wf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Be(n)
          , o = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~o
    }
}
function Pi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Be(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var I = 0;
function Nu(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ju, Ci, Su, bu, Eu, Oo = !1, Fr = [], ft = null, mt = null, pt = null, Yn = new Map, Gn = new Map, at = [], kf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ms(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        ft = null;
        break;
    case "dragenter":
    case "dragleave":
        mt = null;
        break;
    case "mouseover":
    case "mouseout":
        pt = null;
        break;
    case "pointerover":
    case "pointerout":
        Yn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Gn.delete(t.pointerId)
    }
}
function bn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    },
    t !== null && (t = fr(t),
    t !== null && Ci(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function Nf(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return ft = bn(ft, e, t, n, r, l),
        !0;
    case "dragenter":
        return mt = bn(mt, e, t, n, r, l),
        !0;
    case "mouseover":
        return pt = bn(pt, e, t, n, r, l),
        !0;
    case "pointerover":
        var o = l.pointerId;
        return Yn.set(o, bn(Yn.get(o) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return o = l.pointerId,
        Gn.set(o, bn(Gn.get(o) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function Fu(e) {
    var t = Lt(e.target);
    if (t !== null) {
        var n = At(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = hu(n),
                t !== null) {
                    e.blockedOn = t,
                    Eu(e.priority, function() {
                        Su(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ar(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            To = r,
            n.target.dispatchEvent(r),
            To = null
        } else
            return t = fr(n),
            t !== null && Ci(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Bs(e, t, n) {
    Ar(e) && n.delete(t)
}
function jf() {
    Oo = !1,
    ft !== null && Ar(ft) && (ft = null),
    mt !== null && Ar(mt) && (mt = null),
    pt !== null && Ar(pt) && (pt = null),
    Yn.forEach(Bs),
    Gn.forEach(Bs)
}
function En(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Oo || (Oo = !0,
    Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, jf)))
}
function Xn(e) {
    function t(l) {
        return En(l, e)
    }
    if (0 < Fr.length) {
        En(Fr[0], e);
        for (var n = 1; n < Fr.length; n++) {
            var r = Fr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ft !== null && En(ft, e),
    mt !== null && En(mt, e),
    pt !== null && En(pt, e),
    Yn.forEach(t),
    Gn.forEach(t),
    n = 0; n < at.length; n++)
        r = at[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < at.length && (n = at[0],
    n.blockedOn === null); )
        Fu(n),
        n.blockedOn === null && at.shift()
}
var on = lt.ReactCurrentBatchConfig
  , ll = !0;
function Sf(e, t, n, r) {
    var l = I
      , o = on.transition;
    on.transition = null;
    try {
        I = 1,
        Li(e, t, n, r)
    } finally {
        I = l,
        on.transition = o
    }
}
function bf(e, t, n, r) {
    var l = I
      , o = on.transition;
    on.transition = null;
    try {
        I = 4,
        Li(e, t, n, r)
    } finally {
        I = l,
        on.transition = o
    }
}
function Li(e, t, n, r) {
    if (ll) {
        var l = Do(e, t, n, r);
        if (l === null)
            so(e, t, r, ol, n),
            Ms(e, r);
        else if (Nf(l, e, t, n, r))
            r.stopPropagation();
        else if (Ms(e, r),
        t & 4 && -1 < kf.indexOf(e)) {
            for (; l !== null; ) {
                var o = fr(l);
                if (o !== null && ju(o),
                o = Do(e, t, n, r),
                o === null && so(e, t, r, ol, n),
                o === l)
                    break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else
            so(e, t, r, null, n)
    }
}
var ol = null;
function Do(e, t, n, r) {
    if (ol = null,
    e = Ei(r),
    e = Lt(e),
    e !== null)
        if (t = At(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = hu(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ol = e,
    null
}
function Pu(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (ff()) {
        case Fi:
            return 1;
        case yu:
            return 4;
        case nl:
        case mf:
            return 16;
        case wu:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ct = null
  , Ri = null
  , Ur = null;
function Cu() {
    if (Ur)
        return Ur;
    var e, t = Ri, n = t.length, r, l = "value"in ct ? ct.value : ct.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
        ;
    return Ur = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Wr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Pr() {
    return !0
}
function Is() {
    return !1
}
function Se(e) {
    function t(n, r, l, o, i) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pr : Is,
        this.isPropagationStopped = Is,
        this
    }
    return Q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Pr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Pr)
        },
        persist: function() {},
        isPersistent: Pr
    }),
    t
}
var xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, _i = Se(xn), dr = Q({}, xn, {
    view: 0,
    detail: 0
}), Ef = Se(dr), ql, Jl, Fn, Fl = Q({}, dr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Fn && (Fn && e.type === "mousemove" ? (ql = e.screenX - Fn.screenX,
        Jl = e.screenY - Fn.screenY) : Jl = ql = 0,
        Fn = e),
        ql)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Jl
    }
}), Os = Se(Fl), Ff = Q({}, Fl, {
    dataTransfer: 0
}), Pf = Se(Ff), Cf = Q({}, dr, {
    relatedTarget: 0
}), eo = Se(Cf), Lf = Q({}, xn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Rf = Se(Lf), _f = Q({}, xn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Tf = Se(_f), zf = Q({}, xn, {
    data: 0
}), Ds = Se(zf), Mf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Bf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, If = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Of(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = If[e]) ? !!t[e] : !1
}
function Ti() {
    return Of
}
var Df = Q({}, dr, {
    key: function(e) {
        if (e.key) {
            var t = Mf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Wr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function(e) {
        return e.type === "keypress" ? Wr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Wr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , $f = Se(Df)
  , Af = Q({}, Fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , $s = Se(Af)
  , Uf = Q({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti
})
  , Wf = Se(Uf)
  , Hf = Q({}, xn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Vf = Se(Hf)
  , Qf = Q({}, Fl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Kf = Se(Qf)
  , Yf = [9, 13, 27, 32]
  , zi = Je && "CompositionEvent"in window
  , On = null;
Je && "documentMode"in document && (On = document.documentMode);
var Gf = Je && "TextEvent"in window && !On
  , Lu = Je && (!zi || On && 8 < On && 11 >= On)
  , As = " "
  , Us = !1;
function Ru(e, t) {
    switch (e) {
    case "keyup":
        return Yf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function _u(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Qt = !1;
function Xf(e, t) {
    switch (e) {
    case "compositionend":
        return _u(t);
    case "keypress":
        return t.which !== 32 ? null : (Us = !0,
        As);
    case "textInput":
        return e = t.data,
        e === As && Us ? null : e;
    default:
        return null
    }
}
function Zf(e, t) {
    if (Qt)
        return e === "compositionend" || !zi && Ru(e, t) ? (e = Cu(),
        Ur = Ri = ct = null,
        Qt = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Lu && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var qf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qf[e.type] : t === "textarea"
}
function Tu(e, t, n, r) {
    cu(r),
    t = il(t, "onChange"),
    0 < t.length && (n = new _i("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Dn = null
  , Zn = null;
function Jf(e) {
    Hu(e, 0)
}
function Pl(e) {
    var t = Gt(e);
    if (ru(t))
        return e
}
function em(e, t) {
    if (e === "change")
        return t
}
var zu = !1;
if (Je) {
    var to;
    if (Je) {
        var no = "oninput"in document;
        if (!no) {
            var Hs = document.createElement("div");
            Hs.setAttribute("oninput", "return;"),
            no = typeof Hs.oninput == "function"
        }
        to = no
    } else
        to = !1;
    zu = to && (!document.documentMode || 9 < document.documentMode)
}
function Vs() {
    Dn && (Dn.detachEvent("onpropertychange", Mu),
    Zn = Dn = null)
}
function Mu(e) {
    if (e.propertyName === "value" && Pl(Zn)) {
        var t = [];
        Tu(t, Zn, e, Ei(e)),
        pu(Jf, t)
    }
}
function tm(e, t, n) {
    e === "focusin" ? (Vs(),
    Dn = t,
    Zn = n,
    Dn.attachEvent("onpropertychange", Mu)) : e === "focusout" && Vs()
}
function nm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Pl(Zn)
}
function rm(e, t) {
    if (e === "click")
        return Pl(t)
}
function lm(e, t) {
    if (e === "input" || e === "change")
        return Pl(t)
}
function om(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : om;
function qn(e, t) {
    if (Oe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ko.call(t, l) || !Oe(e[l], t[l]))
            return !1
    }
    return !0
}
function Qs(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ks(e, t) {
    var n = Qs(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Qs(n)
    }
}
function Bu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Iu() {
    for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Jr(e.document)
    }
    return t
}
function Mi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function im(e) {
    var t = Iu()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Bu(n.ownerDocument.documentElement, n)) {
        if (r !== null && Mi(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l),
                !e.extend && o > r && (l = r,
                r = o,
                o = l),
                l = Ks(n, o);
                var i = Ks(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var sm = Je && "documentMode"in document && 11 >= document.documentMode
  , Kt = null
  , $o = null
  , $n = null
  , Ao = !1;
function Ys(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ao || Kt == null || Kt !== Jr(r) || (r = Kt,
    "selectionStart"in r && Mi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    $n && qn($n, r) || ($n = r,
    r = il($o, "onSelect"),
    0 < r.length && (t = new _i("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Kt)))
}
function Cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Yt = {
    animationend: Cr("Animation", "AnimationEnd"),
    animationiteration: Cr("Animation", "AnimationIteration"),
    animationstart: Cr("Animation", "AnimationStart"),
    transitionend: Cr("Transition", "TransitionEnd")
}
  , ro = {}
  , Ou = {};
Je && (Ou = document.createElement("div").style,
"AnimationEvent"in window || (delete Yt.animationend.animation,
delete Yt.animationiteration.animation,
delete Yt.animationstart.animation),
"TransitionEvent"in window || delete Yt.transitionend.transition);
function Cl(e) {
    if (ro[e])
        return ro[e];
    if (!Yt[e])
        return e;
    var t = Yt[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ou)
            return ro[e] = t[n];
    return e
}
var Du = Cl("animationend")
  , $u = Cl("animationiteration")
  , Au = Cl("animationstart")
  , Uu = Cl("transitionend")
  , Wu = new Map
  , Gs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Nt(e, t) {
    Wu.set(e, t),
    $t(t, [e])
}
for (var lo = 0; lo < Gs.length; lo++) {
    var oo = Gs[lo]
      , am = oo.toLowerCase()
      , um = oo[0].toUpperCase() + oo.slice(1);
    Nt(am, "on" + um)
}
Nt(Du, "onAnimationEnd");
Nt($u, "onAnimationIteration");
Nt(Au, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(Uu, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
$t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function Xs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    af(r, t, void 0, e),
    e.currentTarget = null
}
function Hu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , u = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    u !== o && l.isPropagationStopped())
                        break e;
                    Xs(l, a, c),
                    o = u
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    u = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    u !== o && l.isPropagationStopped())
                        break e;
                    Xs(l, a, c),
                    o = u
                }
        }
    }
    if (tl)
        throw e = Bo,
        tl = !1,
        Bo = null,
        e
}
function $(e, t) {
    var n = t[Qo];
    n === void 0 && (n = t[Qo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Vu(t, e, 2, !1),
    n.add(r))
}
function io(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Vu(n, e, r, t)
}
var Lr = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
    if (!e[Lr]) {
        e[Lr] = !0,
        qa.forEach(function(n) {
            n !== "selectionchange" && (cm.has(n) || io(n, !1, e),
            io(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Lr] || (t[Lr] = !0,
        io("selectionchange", !1, t))
    }
}
function Vu(e, t, n, r) {
    switch (Pu(t)) {
    case 1:
        var l = Sf;
        break;
    case 4:
        l = bf;
        break;
    default:
        l = Li
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !Mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function so(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || a.nodeType === 8 && a.parentNode === l)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var u = i.tag;
                        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo,
                        u === l || u.nodeType === 8 && u.parentNode === l))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = Lt(a),
                    i === null)
                        return;
                    if (u = i.tag,
                    u === 5 || u === 6) {
                        r = o = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    pu(function() {
        var c = o
          , p = Ei(n)
          , h = [];
        e: {
            var g = Wu.get(e);
            if (g !== void 0) {
                var v = _i
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Wr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = $f;
                    break;
                case "focusin":
                    y = "focus",
                    v = eo;
                    break;
                case "focusout":
                    y = "blur",
                    v = eo;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = eo;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = Os;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Pf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Wf;
                    break;
                case Du:
                case $u:
                case Au:
                    v = Rf;
                    break;
                case Uu:
                    v = Vf;
                    break;
                case "scroll":
                    v = Ef;
                    break;
                case "wheel":
                    v = Kf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Tf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = $s
                }
                var k = (t & 4) !== 0
                  , S = !k && e === "scroll"
                  , f = k ? g !== null ? g + "Capture" : null : g;
                k = [];
                for (var d = c, m; d !== null; ) {
                    m = d;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w,
                    f !== null && (w = Kn(d, f),
                    w != null && k.push(er(d, w, m)))),
                    S)
                        break;
                    d = d.return
                }
                0 < k.length && (g = new v(g,y,null,n,p),
                h.push({
                    event: g,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                g && n !== To && (y = n.relatedTarget || n.fromElement) && (Lt(y) || y[et]))
                    break e;
                if ((v || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window,
                v ? (y = n.relatedTarget || n.toElement,
                v = c,
                y = y ? Lt(y) : null,
                y !== null && (S = At(y),
                y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                y = c),
                v !== y)) {
                    if (k = Os,
                    w = "onMouseLeave",
                    f = "onMouseEnter",
                    d = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = $s,
                    w = "onPointerLeave",
                    f = "onPointerEnter",
                    d = "pointer"),
                    S = v == null ? g : Gt(v),
                    m = y == null ? g : Gt(y),
                    g = new k(w,d + "leave",v,n,p),
                    g.target = S,
                    g.relatedTarget = m,
                    w = null,
                    Lt(p) === c && (k = new k(f,d + "enter",y,n,p),
                    k.target = m,
                    k.relatedTarget = S,
                    w = k),
                    S = w,
                    v && y)
                        t: {
                            for (k = v,
                            f = y,
                            d = 0,
                            m = k; m; m = Ut(m))
                                d++;
                            for (m = 0,
                            w = f; w; w = Ut(w))
                                m++;
                            for (; 0 < d - m; )
                                k = Ut(k),
                                d--;
                            for (; 0 < m - d; )
                                f = Ut(f),
                                m--;
                            for (; d--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = Ut(k),
                                f = Ut(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    v !== null && Zs(h, g, v, k, !1),
                    y !== null && S !== null && Zs(h, S, y, k, !0)
                }
            }
            e: {
                if (g = c ? Gt(c) : window,
                v = g.nodeName && g.nodeName.toLowerCase(),
                v === "select" || v === "input" && g.type === "file")
                    var j = em;
                else if (Ws(g))
                    if (zu)
                        j = lm;
                    else {
                        j = nm;
                        var P = tm
                    }
                else
                    (v = g.nodeName) && v.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (j = rm);
                if (j && (j = j(e, c))) {
                    Tu(h, j, n, p);
                    break e
                }
                P && P(e, g, c),
                e === "focusout" && (P = g._wrapperState) && P.controlled && g.type === "number" && Po(g, "number", g.value)
            }
            switch (P = c ? Gt(c) : window,
            e) {
            case "focusin":
                (Ws(P) || P.contentEditable === "true") && (Kt = P,
                $o = c,
                $n = null);
                break;
            case "focusout":
                $n = $o = Kt = null;
                break;
            case "mousedown":
                Ao = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ao = !1,
                Ys(h, n, p);
                break;
            case "selectionchange":
                if (sm)
                    break;
            case "keydown":
            case "keyup":
                Ys(h, n, p)
            }
            var F;
            if (zi)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                Qt ? Ru(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (Lu && n.locale !== "ko" && (Qt || C !== "onCompositionStart" ? C === "onCompositionEnd" && Qt && (F = Cu()) : (ct = p,
            Ri = "value"in ct ? ct.value : ct.textContent,
            Qt = !0)),
            P = il(c, C),
            0 < P.length && (C = new Ds(C,e,null,n,p),
            h.push({
                event: C,
                listeners: P
            }),
            F ? C.data = F : (F = _u(n),
            F !== null && (C.data = F)))),
            (F = Gf ? Xf(e, n) : Zf(e, n)) && (c = il(c, "onBeforeInput"),
            0 < c.length && (p = new Ds("onBeforeInput","beforeinput",null,n,p),
            h.push({
                event: p,
                listeners: c
            }),
            p.data = F))
        }
        Hu(h, t)
    })
}
function er(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function il(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , o = l.stateNode;
        l.tag === 5 && o !== null && (l = o,
        o = Kn(e, n),
        o != null && r.unshift(er(e, o, l)),
        o = Kn(e, t),
        o != null && r.push(er(e, o, l))),
        e = e.return
    }
    return r
}
function Ut(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Zs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , u = a.alternate
          , c = a.stateNode;
        if (u !== null && u === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        l ? (u = Kn(n, o),
        u != null && i.unshift(er(n, u, a))) : l || (u = Kn(n, o),
        u != null && i.push(er(n, u, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var dm = /\r\n?/g
  , fm = /\u0000|\uFFFD/g;
function qs(e) {
    return (typeof e == "string" ? e : "" + e).replace(dm, `
`).replace(fm, "")
}
function Rr(e, t, n) {
    if (t = qs(t),
    qs(e) !== t && n)
        throw Error(N(425))
}
function sl() {}
var Uo = null
  , Wo = null;
function Ho(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Vo = typeof setTimeout == "function" ? setTimeout : void 0
  , mm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Js = typeof Promise == "function" ? Promise : void 0
  , pm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Js < "u" ? function(e) {
    return Js.resolve(null).then(e).catch(hm)
}
: Vo;
function hm(e) {
    setTimeout(function() {
        throw e
    })
}
function ao(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Xn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Xn(t)
}
function ht(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ea(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var vn = Math.random().toString(36).slice(2)
  , Ae = "__reactFiber$" + vn
  , tr = "__reactProps$" + vn
  , et = "__reactContainer$" + vn
  , Qo = "__reactEvents$" + vn
  , gm = "__reactListeners$" + vn
  , xm = "__reactHandles$" + vn;
function Lt(e) {
    var t = e[Ae];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[et] || n[Ae]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = ea(e); e !== null; ) {
                    if (n = e[Ae])
                        return n;
                    e = ea(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function fr(e) {
    return e = e[Ae] || e[et],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Gt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function Ll(e) {
    return e[tr] || null
}
var Ko = []
  , Xt = -1;
function jt(e) {
    return {
        current: e
    }
}
function A(e) {
    0 > Xt || (e.current = Ko[Xt],
    Ko[Xt] = null,
    Xt--)
}
function D(e, t) {
    Xt++,
    Ko[Xt] = e.current,
    e.current = t
}
var kt = {}
  , ae = jt(kt)
  , ge = jt(!1)
  , Mt = kt;
function cn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return kt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
        l[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function xe(e) {
    return e = e.childContextTypes,
    e != null
}
function al() {
    A(ge),
    A(ae)
}
function ta(e, t, n) {
    if (ae.current !== kt)
        throw Error(N(168));
    D(ae, t),
    D(ge, n)
}
function Qu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(N(108, ef(e) || "Unknown", l));
    return Q({}, n, r)
}
function ul(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt,
    Mt = ae.current,
    D(ae, e),
    D(ge, ge.current),
    !0
}
function na(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = Qu(e, t, Mt),
    r.__reactInternalMemoizedMergedChildContext = e,
    A(ge),
    A(ae),
    D(ae, e)) : A(ge),
    D(ge, n)
}
var Ye = null
  , Rl = !1
  , uo = !1;
function Ku(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}
function vm(e) {
    Rl = !0,
    Ku(e)
}
function St() {
    if (!uo && Ye !== null) {
        uo = !0;
        var e = 0
          , t = I;
        try {
            var n = Ye;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ye = null,
            Rl = !1
        } catch (l) {
            throw Ye !== null && (Ye = Ye.slice(e + 1)),
            vu(Fi, St),
            l
        } finally {
            I = t,
            uo = !1
        }
    }
    return null
}
var Zt = []
  , qt = 0
  , cl = null
  , dl = 0
  , Ee = []
  , Fe = 0
  , Bt = null
  , Ge = 1
  , Xe = "";
function Pt(e, t) {
    Zt[qt++] = dl,
    Zt[qt++] = cl,
    cl = e,
    dl = t
}
function Yu(e, t, n) {
    Ee[Fe++] = Ge,
    Ee[Fe++] = Xe,
    Ee[Fe++] = Bt,
    Bt = e;
    var r = Ge;
    e = Xe;
    var l = 32 - Be(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var o = 32 - Be(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        l -= i,
        Ge = 1 << 32 - Be(t) + l | n << l | r,
        Xe = o + e
    } else
        Ge = 1 << o | n << l | r,
        Xe = e
}
function Bi(e) {
    e.return !== null && (Pt(e, 1),
    Yu(e, 1, 0))
}
function Ii(e) {
    for (; e === cl; )
        cl = Zt[--qt],
        Zt[qt] = null,
        dl = Zt[--qt],
        Zt[qt] = null;
    for (; e === Bt; )
        Bt = Ee[--Fe],
        Ee[Fe] = null,
        Xe = Ee[--Fe],
        Ee[Fe] = null,
        Ge = Ee[--Fe],
        Ee[Fe] = null
}
var ke = null
  , we = null
  , U = !1
  , Me = null;
function Gu(e, t) {
    var n = Pe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ra(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ke = e,
        we = ht(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ke = e,
        we = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Bt !== null ? {
            id: Ge,
            overflow: Xe
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Pe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ke = e,
        we = null,
        !0) : !1;
    default:
        return !1
    }
}
function Yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Go(e) {
    if (U) {
        var t = we;
        if (t) {
            var n = t;
            if (!ra(e, t)) {
                if (Yo(e))
                    throw Error(N(418));
                t = ht(n.nextSibling);
                var r = ke;
                t && ra(e, t) ? Gu(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                ke = e)
            }
        } else {
            if (Yo(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            ke = e
        }
    }
}
function la(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ke = e
}
function _r(e) {
    if (e !== ke)
        return !1;
    if (!U)
        return la(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ho(e.type, e.memoizedProps)),
    t && (t = we)) {
        if (Yo(e))
            throw Xu(),
            Error(N(418));
        for (; t; )
            Gu(e, t),
            t = ht(t.nextSibling)
    }
    if (la(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            we = ht(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            we = null
        }
    } else
        we = ke ? ht(e.stateNode.nextSibling) : null;
    return !0
}
function Xu() {
    for (var e = we; e; )
        e = ht(e.nextSibling)
}
function dn() {
    we = ke = null,
    U = !1
}
function Oi(e) {
    Me === null ? Me = [e] : Me.push(e)
}
var ym = lt.ReactCurrentBatchConfig;
function Pn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var l = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var a = l.refs;
                i === null ? delete a[o] : a[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function Tr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function oa(e) {
    var t = e._init;
    return t(e._payload)
}
function Zu(e) {
    function t(f, d) {
        if (e) {
            var m = f.deletions;
            m === null ? (f.deletions = [d],
            f.flags |= 16) : m.push(d)
        }
    }
    function n(f, d) {
        if (!e)
            return null;
        for (; d !== null; )
            t(f, d),
            d = d.sibling;
        return null
    }
    function r(f, d) {
        for (f = new Map; d !== null; )
            d.key !== null ? f.set(d.key, d) : f.set(d.index, d),
            d = d.sibling;
        return f
    }
    function l(f, d) {
        return f = yt(f, d),
        f.index = 0,
        f.sibling = null,
        f
    }
    function o(f, d, m) {
        return f.index = m,
        e ? (m = f.alternate,
        m !== null ? (m = m.index,
        m < d ? (f.flags |= 2,
        d) : m) : (f.flags |= 2,
        d)) : (f.flags |= 1048576,
        d)
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function a(f, d, m, w) {
        return d === null || d.tag !== 6 ? (d = xo(m, f.mode, w),
        d.return = f,
        d) : (d = l(d, m),
        d.return = f,
        d)
    }
    function u(f, d, m, w) {
        var j = m.type;
        return j === Vt ? p(f, d, m.props.children, w, m.key) : d !== null && (d.elementType === j || typeof j == "object" && j !== null && j.$$typeof === it && oa(j) === d.type) ? (w = l(d, m.props),
        w.ref = Pn(f, d, m),
        w.return = f,
        w) : (w = Xr(m.type, m.key, m.props, null, f.mode, w),
        w.ref = Pn(f, d, m),
        w.return = f,
        w)
    }
    function c(f, d, m, w) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = vo(m, f.mode, w),
        d.return = f,
        d) : (d = l(d, m.children || []),
        d.return = f,
        d)
    }
    function p(f, d, m, w, j) {
        return d === null || d.tag !== 7 ? (d = zt(m, f.mode, w, j),
        d.return = f,
        d) : (d = l(d, m),
        d.return = f,
        d)
    }
    function h(f, d, m) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = xo("" + d, f.mode, m),
            d.return = f,
            d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case Nr:
                return m = Xr(d.type, d.key, d.props, null, f.mode, m),
                m.ref = Pn(f, null, d),
                m.return = f,
                m;
            case Ht:
                return d = vo(d, f.mode, m),
                d.return = f,
                d;
            case it:
                var w = d._init;
                return h(f, w(d._payload), m)
            }
            if (Tn(d) || jn(d))
                return d = zt(d, f.mode, m, null),
                d.return = f,
                d;
            Tr(f, d)
        }
        return null
    }
    function g(f, d, m, w) {
        var j = d !== null ? d.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return j !== null ? null : a(f, d, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Nr:
                return m.key === j ? u(f, d, m, w) : null;
            case Ht:
                return m.key === j ? c(f, d, m, w) : null;
            case it:
                return j = m._init,
                g(f, d, j(m._payload), w)
            }
            if (Tn(m) || jn(m))
                return j !== null ? null : p(f, d, m, w, null);
            Tr(f, m)
        }
        return null
    }
    function v(f, d, m, w, j) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return f = f.get(m) || null,
            a(d, f, "" + w, j);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Nr:
                return f = f.get(w.key === null ? m : w.key) || null,
                u(d, f, w, j);
            case Ht:
                return f = f.get(w.key === null ? m : w.key) || null,
                c(d, f, w, j);
            case it:
                var P = w._init;
                return v(f, d, m, P(w._payload), j)
            }
            if (Tn(w) || jn(w))
                return f = f.get(m) || null,
                p(d, f, w, j, null);
            Tr(d, w)
        }
        return null
    }
    function y(f, d, m, w) {
        for (var j = null, P = null, F = d, C = d = 0, M = null; F !== null && C < m.length; C++) {
            F.index > C ? (M = F,
            F = null) : M = F.sibling;
            var L = g(f, F, m[C], w);
            if (L === null) {
                F === null && (F = M);
                break
            }
            e && F && L.alternate === null && t(f, F),
            d = o(L, d, C),
            P === null ? j = L : P.sibling = L,
            P = L,
            F = M
        }
        if (C === m.length)
            return n(f, F),
            U && Pt(f, C),
            j;
        if (F === null) {
            for (; C < m.length; C++)
                F = h(f, m[C], w),
                F !== null && (d = o(F, d, C),
                P === null ? j = F : P.sibling = F,
                P = F);
            return U && Pt(f, C),
            j
        }
        for (F = r(f, F); C < m.length; C++)
            M = v(F, f, C, m[C], w),
            M !== null && (e && M.alternate !== null && F.delete(M.key === null ? C : M.key),
            d = o(M, d, C),
            P === null ? j = M : P.sibling = M,
            P = M);
        return e && F.forEach(function(me) {
            return t(f, me)
        }),
        U && Pt(f, C),
        j
    }
    function k(f, d, m, w) {
        var j = jn(m);
        if (typeof j != "function")
            throw Error(N(150));
        if (m = j.call(m),
        m == null)
            throw Error(N(151));
        for (var P = j = null, F = d, C = d = 0, M = null, L = m.next(); F !== null && !L.done; C++,
        L = m.next()) {
            F.index > C ? (M = F,
            F = null) : M = F.sibling;
            var me = g(f, F, L.value, w);
            if (me === null) {
                F === null && (F = M);
                break
            }
            e && F && me.alternate === null && t(f, F),
            d = o(me, d, C),
            P === null ? j = me : P.sibling = me,
            P = me,
            F = M
        }
        if (L.done)
            return n(f, F),
            U && Pt(f, C),
            j;
        if (F === null) {
            for (; !L.done; C++,
            L = m.next())
                L = h(f, L.value, w),
                L !== null && (d = o(L, d, C),
                P === null ? j = L : P.sibling = L,
                P = L);
            return U && Pt(f, C),
            j
        }
        for (F = r(f, F); !L.done; C++,
        L = m.next())
            L = v(F, f, C, L.value, w),
            L !== null && (e && L.alternate !== null && F.delete(L.key === null ? C : L.key),
            d = o(L, d, C),
            P === null ? j = L : P.sibling = L,
            P = L);
        return e && F.forEach(function(kn) {
            return t(f, kn)
        }),
        U && Pt(f, C),
        j
    }
    function S(f, d, m, w) {
        if (typeof m == "object" && m !== null && m.type === Vt && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Nr:
                e: {
                    for (var j = m.key, P = d; P !== null; ) {
                        if (P.key === j) {
                            if (j = m.type,
                            j === Vt) {
                                if (P.tag === 7) {
                                    n(f, P.sibling),
                                    d = l(P, m.props.children),
                                    d.return = f,
                                    f = d;
                                    break e
                                }
                            } else if (P.elementType === j || typeof j == "object" && j !== null && j.$$typeof === it && oa(j) === P.type) {
                                n(f, P.sibling),
                                d = l(P, m.props),
                                d.ref = Pn(f, P, m),
                                d.return = f,
                                f = d;
                                break e
                            }
                            n(f, P);
                            break
                        } else
                            t(f, P);
                        P = P.sibling
                    }
                    m.type === Vt ? (d = zt(m.props.children, f.mode, w, m.key),
                    d.return = f,
                    f = d) : (w = Xr(m.type, m.key, m.props, null, f.mode, w),
                    w.ref = Pn(f, d, m),
                    w.return = f,
                    f = w)
                }
                return i(f);
            case Ht:
                e: {
                    for (P = m.key; d !== null; ) {
                        if (d.key === P)
                            if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                                n(f, d.sibling),
                                d = l(d, m.children || []),
                                d.return = f,
                                f = d;
                                break e
                            } else {
                                n(f, d);
                                break
                            }
                        else
                            t(f, d);
                        d = d.sibling
                    }
                    d = vo(m, f.mode, w),
                    d.return = f,
                    f = d
                }
                return i(f);
            case it:
                return P = m._init,
                S(f, d, P(m._payload), w)
            }
            if (Tn(m))
                return y(f, d, m, w);
            if (jn(m))
                return k(f, d, m, w);
            Tr(f, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        d !== null && d.tag === 6 ? (n(f, d.sibling),
        d = l(d, m),
        d.return = f,
        f = d) : (n(f, d),
        d = xo(m, f.mode, w),
        d.return = f,
        f = d),
        i(f)) : n(f, d)
    }
    return S
}
var fn = Zu(!0)
  , qu = Zu(!1)
  , fl = jt(null)
  , ml = null
  , Jt = null
  , Di = null;
function $i() {
    Di = Jt = ml = null
}
function Ai(e) {
    var t = fl.current;
    A(fl),
    e._currentValue = t
}
function Xo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function sn(e, t) {
    ml = e,
    Di = Jt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (he = !0),
    e.firstContext = null)
}
function Le(e) {
    var t = e._currentValue;
    if (Di !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Jt === null) {
            if (ml === null)
                throw Error(N(308));
            Jt = e,
            ml.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Jt = Jt.next = e;
    return t
}
var Rt = null;
function Ui(e) {
    Rt === null ? Rt = [e] : Rt.push(e)
}
function Ju(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    Ui(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    tt(e, r)
}
function tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var st = !1;
function Wi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ec(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ze(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function gt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    B & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        tt(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    Ui(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    tt(e, n)
}
function Hr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pi(e, n)
    }
}
function ia(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else
            l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function pl(e, t, n, r) {
    var l = e.updateQueue;
    st = !1;
    var o = l.firstBaseUpdate
      , i = l.lastBaseUpdate
      , a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a
          , c = u.next;
        u.next = null,
        i === null ? o = c : i.next = c,
        i = u;
        var p = e.alternate;
        p !== null && (p = p.updateQueue,
        a = p.lastBaseUpdate,
        a !== i && (a === null ? p.firstBaseUpdate = c : a.next = c,
        p.lastBaseUpdate = u))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0,
        p = c = u = null,
        a = o;
        do {
            var g = a.lane
              , v = a.eventTime;
            if ((r & g) === g) {
                p !== null && (p = p.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , k = a;
                    switch (g = t,
                    v = n,
                    k.tag) {
                    case 1:
                        if (y = k.payload,
                        typeof y == "function") {
                            h = y.call(v, h, g);
                            break e
                        }
                        h = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = k.payload,
                        g = typeof y == "function" ? y.call(v, h, g) : y,
                        g == null)
                            break e;
                        h = Q({}, h, g);
                        break e;
                    case 2:
                        st = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                g = l.effects,
                g === null ? l.effects = [a] : g.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: g,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                p === null ? (c = p = v,
                u = h) : p = p.next = v,
                i |= g;
            if (a = a.next,
            a === null) {
                if (a = l.shared.pending,
                a === null)
                    break;
                g = a,
                a = g.next,
                g.next = null,
                l.lastBaseUpdate = g,
                l.shared.pending = null
            }
        } while (!0);
        if (p === null && (u = h),
        l.baseState = u,
        l.firstBaseUpdate = c,
        l.lastBaseUpdate = p,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                i |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            o === null && (l.shared.lanes = 0);
        Ot |= i,
        e.lanes = i,
        e.memoizedState = h
    }
}
function sa(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(N(191, l));
                l.call(r)
            }
        }
}
var mr = {}
  , We = jt(mr)
  , nr = jt(mr)
  , rr = jt(mr);
function _t(e) {
    if (e === mr)
        throw Error(N(174));
    return e
}
function Hi(e, t) {
    switch (D(rr, t),
    D(nr, e),
    D(We, mr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Lo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Lo(t, e)
    }
    A(We),
    D(We, t)
}
function mn() {
    A(We),
    A(nr),
    A(rr)
}
function tc(e) {
    _t(rr.current);
    var t = _t(We.current)
      , n = Lo(t, e.type);
    t !== n && (D(nr, e),
    D(We, n))
}
function Vi(e) {
    nr.current === e && (A(We),
    A(nr))
}
var W = jt(0);
function hl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var co = [];
function Qi() {
    for (var e = 0; e < co.length; e++)
        co[e]._workInProgressVersionPrimary = null;
    co.length = 0
}
var Vr = lt.ReactCurrentDispatcher
  , fo = lt.ReactCurrentBatchConfig
  , It = 0
  , H = null
  , Z = null
  , ee = null
  , gl = !1
  , An = !1
  , lr = 0
  , wm = 0;
function oe() {
    throw Error(N(321))
}
function Ki(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n]))
            return !1;
    return !0
}
function Yi(e, t, n, r, l, o) {
    if (It = o,
    H = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Vr.current = e === null || e.memoizedState === null ? Sm : bm,
    e = n(r, l),
    An) {
        o = 0;
        do {
            if (An = !1,
            lr = 0,
            25 <= o)
                throw Error(N(301));
            o += 1,
            ee = Z = null,
            t.updateQueue = null,
            Vr.current = Em,
            e = n(r, l)
        } while (An)
    }
    if (Vr.current = xl,
    t = Z !== null && Z.next !== null,
    It = 0,
    ee = Z = H = null,
    gl = !1,
    t)
        throw Error(N(300));
    return e
}
function Gi() {
    var e = lr !== 0;
    return lr = 0,
    e
}
function $e() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ee === null ? H.memoizedState = ee = e : ee = ee.next = e,
    ee
}
function Re() {
    if (Z === null) {
        var e = H.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Z.next;
    var t = ee === null ? H.memoizedState : ee.next;
    if (t !== null)
        ee = t,
        Z = e;
    else {
        if (e === null)
            throw Error(N(310));
        Z = e,
        e = {
            memoizedState: Z.memoizedState,
            baseState: Z.baseState,
            baseQueue: Z.baseQueue,
            queue: Z.queue,
            next: null
        },
        ee === null ? H.memoizedState = ee = e : ee = ee.next = e
    }
    return ee
}
function or(e, t) {
    return typeof t == "function" ? t(e) : t
}
function mo(e) {
    var t = Re()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = Z
      , l = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next,
            o.next = i
        }
        r.baseQueue = l = o,
        n.pending = null
    }
    if (l !== null) {
        o = l.next,
        r = r.baseState;
        var a = i = null
          , u = null
          , c = o;
        do {
            var p = c.lane;
            if ((It & p) === p)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: p,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (a = u = h,
                i = r) : u = u.next = h,
                H.lanes |= p,
                Ot |= p
            }
            c = c.next
        } while (c !== null && c !== o);
        u === null ? i = r : u.next = a,
        Oe(r, t.memoizedState) || (he = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            o = l.lane,
            H.lanes |= o,
            Ot |= o,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function po(e) {
    var t = Re()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== l);
        Oe(o, t.memoizedState) || (he = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function nc() {}
function rc(e, t) {
    var n = H
      , r = Re()
      , l = t()
      , o = !Oe(r.memoizedState, l);
    if (o && (r.memoizedState = l,
    he = !0),
    r = r.queue,
    Xi(ic.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ir(9, oc.bind(null, n, r, l, t), void 0, null),
        te === null)
            throw Error(N(349));
        It & 30 || lc(n, t, l)
    }
    return l
}
function lc(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = H.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    H.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function oc(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    sc(t) && ac(e)
}
function ic(e, t, n) {
    return n(function() {
        sc(t) && ac(e)
    })
}
function sc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}
function ac(e) {
    var t = tt(e, 1);
    t !== null && Ie(t, e, 1, -1)
}
function aa(e) {
    var t = $e();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: or,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = jm.bind(null, H, e),
    [t.memoizedState, e]
}
function ir(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = H.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    H.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function uc() {
    return Re().memoizedState
}
function Qr(e, t, n, r) {
    var l = $e();
    H.flags |= e,
    l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r)
}
function _l(e, t, n, r) {
    var l = Re();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Z !== null) {
        var i = Z.memoizedState;
        if (o = i.destroy,
        r !== null && Ki(r, i.deps)) {
            l.memoizedState = ir(t, n, o, r);
            return
        }
    }
    H.flags |= e,
    l.memoizedState = ir(1 | t, n, o, r)
}
function ua(e, t) {
    return Qr(8390656, 8, e, t)
}
function Xi(e, t) {
    return _l(2048, 8, e, t)
}
function cc(e, t) {
    return _l(4, 2, e, t)
}
function dc(e, t) {
    return _l(4, 4, e, t)
}
function fc(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function mc(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    _l(4, 4, fc.bind(null, t, e), n)
}
function Zi() {}
function pc(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function hc(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ki(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function gc(e, t, n) {
    return It & 21 ? (Oe(n, t) || (n = ku(),
    H.lanes |= n,
    Ot |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    he = !0),
    e.memoizedState = n)
}
function km(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = fo.transition;
    fo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        I = n,
        fo.transition = r
    }
}
function xc() {
    return Re().memoizedState
}
function Nm(e, t, n) {
    var r = vt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    vc(e))
        yc(t, n);
    else if (n = Ju(e, t, n, r),
    n !== null) {
        var l = ce();
        Ie(n, e, r, l),
        wc(n, t, r)
    }
}
function jm(e, t, n) {
    var r = vt(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (vc(e))
        yc(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , a = o(i, n);
                if (l.hasEagerState = !0,
                l.eagerState = a,
                Oe(a, i)) {
                    var u = t.interleaved;
                    u === null ? (l.next = l,
                    Ui(t)) : (l.next = u.next,
                    u.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Ju(e, t, l, r),
        n !== null && (l = ce(),
        Ie(n, e, r, l),
        wc(n, t, r))
    }
}
function vc(e) {
    var t = e.alternate;
    return e === H || t !== null && t === H
}
function yc(e, t) {
    An = gl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function wc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pi(e, n)
    }
}
var xl = {
    readContext: Le,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1
}
  , Sm = {
    readContext: Le,
    useCallback: function(e, t) {
        return $e().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Le,
    useEffect: ua,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Qr(4194308, 4, fc.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Qr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Qr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = $e();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = $e();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Nm.bind(null, H, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = $e();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: aa,
    useDebugValue: Zi,
    useDeferredValue: function(e) {
        return $e().memoizedState = e
    },
    useTransition: function() {
        var e = aa(!1)
          , t = e[0];
        return e = km.bind(null, e[1]),
        $e().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = H
          , l = $e();
        if (U) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            te === null)
                throw Error(N(349));
            It & 30 || lc(r, t, n)
        }
        l.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return l.queue = o,
        ua(ic.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        ir(9, oc.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = $e()
          , t = te.identifierPrefix;
        if (U) {
            var n = Xe
              , r = Ge;
            n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = lr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = wm++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , bm = {
    readContext: Le,
    useCallback: pc,
    useContext: Le,
    useEffect: Xi,
    useImperativeHandle: mc,
    useInsertionEffect: cc,
    useLayoutEffect: dc,
    useMemo: hc,
    useReducer: mo,
    useRef: uc,
    useState: function() {
        return mo(or)
    },
    useDebugValue: Zi,
    useDeferredValue: function(e) {
        var t = Re();
        return gc(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = mo(or)[0]
          , t = Re().memoizedState;
        return [e, t]
    },
    useMutableSource: nc,
    useSyncExternalStore: rc,
    useId: xc,
    unstable_isNewReconciler: !1
}
  , Em = {
    readContext: Le,
    useCallback: pc,
    useContext: Le,
    useEffect: Xi,
    useImperativeHandle: mc,
    useInsertionEffect: cc,
    useLayoutEffect: dc,
    useMemo: hc,
    useReducer: po,
    useRef: uc,
    useState: function() {
        return po(or)
    },
    useDebugValue: Zi,
    useDeferredValue: function(e) {
        var t = Re();
        return Z === null ? t.memoizedState = e : gc(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = po(or)[0]
          , t = Re().memoizedState;
        return [e, t]
    },
    useMutableSource: nc,
    useSyncExternalStore: rc,
    useId: xc,
    unstable_isNewReconciler: !1
};
function Te(e, t) {
    if (e && e.defaultProps) {
        t = Q({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Zo(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Tl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? At(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ce()
          , l = vt(e)
          , o = Ze(r, l);
        o.payload = t,
        n != null && (o.callback = n),
        t = gt(e, o, l),
        t !== null && (Ie(t, e, l, r),
        Hr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ce()
          , l = vt(e)
          , o = Ze(r, l);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = gt(e, o, l),
        t !== null && (Ie(t, e, l, r),
        Hr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ce()
          , r = vt(e)
          , l = Ze(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = gt(e, l, r),
        t !== null && (Ie(t, e, r, n),
        Hr(t, e, r))
    }
};
function ca(e, t, n, r, l, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, o) : !0
}
function kc(e, t, n) {
    var r = !1
      , l = kt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Le(o) : (l = xe(t) ? Mt : ae.current,
    r = t.contextTypes,
    o = (r = r != null) ? cn(e, l) : kt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Tl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function da(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null)
}
function qo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Wi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Le(o) : (o = xe(t) ? Mt : ae.current,
    l.context = cn(e, o)),
    l.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Zo(e, t, o, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && Tl.enqueueReplaceState(l, l.state, null),
    pl(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function pn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Jd(r),
            r = r.return;
        while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function ho(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Jo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Fm = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
    n = Ze(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        yl || (yl = !0,
        ui = r),
        Jo(e, t)
    }
    ,
    n
}
function jc(e, t, n) {
    n = Ze(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Jo(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Jo(e, t),
        typeof r != "function" && (xt === null ? xt = new Set([this]) : xt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function fa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Fm;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Am.bind(null, e, t, n),
    t.then(e, e))
}
function ma(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function pa(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ze(-1, 1),
    t.tag = 2,
    gt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Pm = lt.ReactCurrentOwner
  , he = !1;
function ue(e, t, n, r) {
    t.child = e === null ? qu(t, null, n, r) : fn(t, e.child, n, r)
}
function ha(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return sn(t, l),
    r = Yi(e, t, n, r, o, l),
    n = Gi(),
    e !== null && !he ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    nt(e, t, l)) : (U && n && Bi(t),
    t.flags |= 1,
    ue(e, t, r, l),
    t.child)
}
function ga(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !os(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Sc(e, t, o, r, l)) : (e = Xr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : qn,
        n(i, r) && e.ref === t.ref)
            return nt(e, t, l)
    }
    return t.flags |= 1,
    e = yt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Sc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (qn(o, r) && e.ref === t.ref)
            if (he = !1,
            t.pendingProps = r = o,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (he = !0);
            else
                return t.lanes = e.lanes,
                nt(e, t, l)
    }
    return ei(e, t, n, r, l)
}
function bc(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            D(tn, ye),
            ye |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                D(tn, ye),
                ye |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            D(tn, ye),
            ye |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        D(tn, ye),
        ye |= r;
    return ue(e, t, l, n),
    t.child
}
function Ec(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ei(e, t, n, r, l) {
    var o = xe(n) ? Mt : ae.current;
    return o = cn(t, o),
    sn(t, l),
    n = Yi(e, t, n, r, o, l),
    r = Gi(),
    e !== null && !he ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    nt(e, t, l)) : (U && r && Bi(t),
    t.flags |= 1,
    ue(e, t, n, l),
    t.child)
}
function xa(e, t, n, r, l) {
    if (xe(n)) {
        var o = !0;
        ul(t)
    } else
        o = !1;
    if (sn(t, l),
    t.stateNode === null)
        Kr(e, t),
        kc(t, n, r),
        qo(t, n, r, l),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var u = i.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Le(c) : (c = xe(n) ? Mt : ae.current,
        c = cn(t, c));
        var p = n.getDerivedStateFromProps
          , h = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== c) && da(t, i, r, c),
        st = !1;
        var g = t.memoizedState;
        i.state = g,
        pl(t, r, i, l),
        u = t.memoizedState,
        a !== r || g !== u || ge.current || st ? (typeof p == "function" && (Zo(t, n, p, r),
        u = t.memoizedState),
        (a = st || ca(t, n, a, r, g, u, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        i.props = r,
        i.state = u,
        i.context = c,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        ec(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : Te(t.type, a),
        i.props = c,
        h = t.pendingProps,
        g = i.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Le(u) : (u = xe(n) ? Mt : ae.current,
        u = cn(t, u));
        var v = n.getDerivedStateFromProps;
        (p = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || g !== u) && da(t, i, r, u),
        st = !1,
        g = t.memoizedState,
        i.state = g,
        pl(t, r, i, l);
        var y = t.memoizedState;
        a !== h || g !== y || ge.current || st ? (typeof v == "function" && (Zo(t, n, v, r),
        y = t.memoizedState),
        (c = st || ca(t, n, c, r, g, y, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        i.props = r,
        i.state = y,
        i.context = u,
        r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ti(e, t, n, r, o, l)
}
function ti(e, t, n, r, l, o) {
    Ec(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return l && na(t, n, !1),
        nt(e, t, o);
    r = t.stateNode,
    Pm.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = fn(t, e.child, null, o),
    t.child = fn(t, null, a, o)) : ue(e, t, a, o),
    t.memoizedState = r.state,
    l && na(t, n, !0),
    t.child
}
function Fc(e) {
    var t = e.stateNode;
    t.pendingContext ? ta(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ta(e, t.context, !1),
    Hi(e, t.containerInfo)
}
function va(e, t, n, r, l) {
    return dn(),
    Oi(l),
    t.flags |= 256,
    ue(e, t, n, r),
    t.child
}
var ni = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ri(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Pc(e, t, n) {
    var r = t.pendingProps, l = W.current, o = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    D(W, l & 1),
    e === null)
        return Go(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = Bl(i, r, 0, null),
        e = zt(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = ri(n),
        t.memoizedState = ni,
        e) : qi(t, i));
    if (l = e.memoizedState,
    l !== null && (a = l.dehydrated,
    a !== null))
        return Cm(e, t, i, r, a, l, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        l = e.child,
        a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = yt(l, u),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        a !== null ? o = yt(a, o) : (o = zt(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? ri(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = ni,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = yt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function qi(e, t) {
    return t = Bl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function zr(e, t, n, r) {
    return r !== null && Oi(r),
    fn(t, e.child, null, n),
    e = qi(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Cm(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ho(Error(N(422))),
        zr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        l = t.mode,
        r = Bl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        o = zt(o, l, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && fn(t, e.child, null, i),
        t.child.memoizedState = ri(i),
        t.memoizedState = ni,
        o);
    if (!(t.mode & 1))
        return zr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(N(419)),
        r = ho(o, r, void 0),
        zr(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    he || a) {
        if (r = te,
        r !== null) {
            switch (i & -i) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l,
            l !== 0 && l !== o.retryLane && (o.retryLane = l,
            tt(e, l),
            Ie(r, e, l, -1))
        }
        return ls(),
        r = ho(Error(N(421))),
        zr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Um.bind(null, e),
    l._reactRetry = t,
    null) : (e = o.treeContext,
    we = ht(l.nextSibling),
    ke = t,
    U = !0,
    Me = null,
    e !== null && (Ee[Fe++] = Ge,
    Ee[Fe++] = Xe,
    Ee[Fe++] = Bt,
    Ge = e.id,
    Xe = e.overflow,
    Bt = t),
    t = qi(t, r.children),
    t.flags |= 4096,
    t)
}
function ya(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Xo(e.return, t, n)
}
function go(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = l)
}
function Cc(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , o = r.tail;
    if (ue(e, t, r.children, n),
    r = W.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ya(e, n, t);
                else if (e.tag === 19)
                    ya(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (D(W, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && hl(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            go(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && hl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            go(t, !0, n, null, o);
            break;
        case "together":
            go(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Kr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function nt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Ot |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = yt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = yt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Lm(e, t, n) {
    switch (t.tag) {
    case 3:
        Fc(t),
        dn();
        break;
    case 5:
        tc(t);
        break;
    case 1:
        xe(t.type) && ul(t);
        break;
    case 4:
        Hi(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        D(fl, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (D(W, W.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Pc(e, t, n) : (D(W, W.current & 1),
            e = nt(e, t, n),
            e !== null ? e.sibling : null);
        D(W, W.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Cc(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        D(W, W.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        bc(e, t, n)
    }
    return nt(e, t, n)
}
var Lc, li, Rc, _c;
Lc = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
li = function() {}
;
Rc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        _t(We.current);
        var o = null;
        switch (n) {
        case "input":
            l = Eo(e, l),
            r = Eo(e, r),
            o = [];
            break;
        case "select":
            l = Q({}, l, {
                value: void 0
            }),
            r = Q({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            l = Co(e, l),
            r = Co(e, r),
            o = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sl)
        }
        Ro(n, r);
        var i;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var a = l[c];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Vn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (a = l != null ? l[c] : void 0,
            r.hasOwnProperty(c) && u !== a && (u != null || a != null))
                if (c === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in u)
                            u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}),
                            n[i] = u[i])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    a = a ? a.__html : void 0,
                    u != null && a !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Vn.hasOwnProperty(c) ? (u != null && c === "onScroll" && $("scroll", e),
                    o || a === u || (o = [])) : (o = o || []).push(c, u))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
_c = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Cn(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Rm(e, t, n) {
    var r = t.pendingProps;
    switch (Ii(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ie(t),
        null;
    case 1:
        return xe(t.type) && al(),
        ie(t),
        null;
    case 3:
        return r = t.stateNode,
        mn(),
        A(ge),
        A(ae),
        Qi(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (_r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Me !== null && (fi(Me),
        Me = null))),
        li(e, t),
        ie(t),
        null;
    case 5:
        Vi(t);
        var l = _t(rr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Rc(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return ie(t),
                null
            }
            if (e = _t(We.current),
            _r(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Ae] = t,
                r[tr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    $("cancel", r),
                    $("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    $("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Mn.length; l++)
                        $(Mn[l], r);
                    break;
                case "source":
                    $("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    $("error", r),
                    $("load", r);
                    break;
                case "details":
                    $("toggle", r);
                    break;
                case "input":
                    Ps(r, o),
                    $("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    $("invalid", r);
                    break;
                case "textarea":
                    Ls(r, o),
                    $("invalid", r)
                }
                Ro(n, o),
                l = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var a = o[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Rr(r.textContent, a, e),
                        l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Rr(r.textContent, a, e),
                        l = ["children", "" + a]) : Vn.hasOwnProperty(i) && a != null && i === "onScroll" && $("scroll", r)
                    }
                switch (n) {
                case "input":
                    jr(r),
                    Cs(r, o, !0);
                    break;
                case "textarea":
                    jr(r),
                    Rs(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = sl)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = iu(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Ae] = t,
                e[tr] = r,
                Lc(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = _o(n, r),
                    n) {
                    case "dialog":
                        $("cancel", e),
                        $("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        $("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Mn.length; l++)
                            $(Mn[l], e);
                        l = r;
                        break;
                    case "source":
                        $("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        $("error", e),
                        $("load", e),
                        l = r;
                        break;
                    case "details":
                        $("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Ps(e, r),
                        l = Eo(e, r),
                        $("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = Q({}, r, {
                            value: void 0
                        }),
                        $("invalid", e);
                        break;
                    case "textarea":
                        Ls(e, r),
                        l = Co(e, r),
                        $("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    Ro(n, l),
                    a = l;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var u = a[o];
                            o === "style" ? uu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && su(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Qn(e, u) : typeof u == "number" && Qn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? u != null && o === "onScroll" && $("scroll", e) : u != null && Ni(e, o, u, i))
                        }
                    switch (n) {
                    case "input":
                        jr(e),
                        Cs(e, r, !1);
                        break;
                    case "textarea":
                        jr(e),
                        Rs(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + wt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? nn(e, !!r.multiple, o, !1) : r.defaultValue != null && nn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = sl)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ie(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            _c(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = _t(rr.current),
            _t(We.current),
            _r(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ae] = t,
                (o = r.nodeValue !== n) && (e = ke,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Rr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ae] = t,
                t.stateNode = r
        }
        return ie(t),
        null;
    case 13:
        if (A(W),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && we !== null && t.mode & 1 && !(t.flags & 128))
                Xu(),
                dn(),
                t.flags |= 98560,
                o = !1;
            else if (o = _r(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(N(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(N(317));
                    o[Ae] = t
                } else
                    dn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ie(t),
                o = !1
            } else
                Me !== null && (fi(Me),
                Me = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || W.current & 1 ? q === 0 && (q = 3) : ls())),
        t.updateQueue !== null && (t.flags |= 4),
        ie(t),
        null);
    case 4:
        return mn(),
        li(e, t),
        e === null && Jn(t.stateNode.containerInfo),
        ie(t),
        null;
    case 10:
        return Ai(t.type._context),
        ie(t),
        null;
    case 17:
        return xe(t.type) && al(),
        ie(t),
        null;
    case 19:
        if (A(W),
        o = t.memoizedState,
        o === null)
            return ie(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                Cn(o, !1);
            else {
                if (q !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = hl(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Cn(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return D(W, W.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && G() > hn && (t.flags |= 128,
                r = !0,
                Cn(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = hl(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Cn(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
                        return ie(t),
                        null
                } else
                    2 * G() - o.renderingStartTime > hn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Cn(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = G(),
        t.sibling = null,
        n = W.current,
        D(W, r ? n & 1 | 2 : n & 1),
        t) : (ie(t),
        null);
    case 22:
    case 23:
        return rs(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ye & 1073741824 && (ie(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function _m(e, t) {
    switch (Ii(t),
    t.tag) {
    case 1:
        return xe(t.type) && al(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return mn(),
        A(ge),
        A(ae),
        Qi(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Vi(t),
        null;
    case 13:
        if (A(W),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            dn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return A(W),
        null;
    case 4:
        return mn(),
        null;
    case 10:
        return Ai(t.type._context),
        null;
    case 22:
    case 23:
        return rs(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Mr = !1
  , se = !1
  , Tm = typeof WeakSet == "function" ? WeakSet : Set
  , b = null;
function en(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                K(e, t, r)
            }
        else
            n.current = null
}
function oi(e, t, n) {
    try {
        n()
    } catch (r) {
        K(e, t, r)
    }
}
var wa = !1;
function zm(e, t) {
    if (Uo = ll,
    e = Iu(),
    Mi(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , u = -1
                      , c = 0
                      , p = 0
                      , h = e
                      , g = null;
                    t: for (; ; ) {
                        for (var v; h !== n || l !== 0 && h.nodeType !== 3 || (a = i + l),
                        h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r),
                        h.nodeType === 3 && (i += h.nodeValue.length),
                        (v = h.firstChild) !== null; )
                            g = h,
                            h = v;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (g === n && ++c === l && (a = i),
                            g === o && ++p === r && (u = i),
                            (v = h.nextSibling) !== null)
                                break;
                            h = g,
                            g = h.parentNode
                        }
                        h = v
                    }
                    n = a === -1 || u === -1 ? null : {
                        start: a,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Wo = {
        focusedElem: e,
        selectionRange: n
    },
    ll = !1,
    b = t; b !== null; )
        if (t = b,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            b = e;
        else
            for (; b !== null; ) {
                t = b;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var k = y.memoizedProps
                                  , S = y.memoizedState
                                  , f = t.stateNode
                                  , d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), S);
                                f.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (w) {
                    K(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    b = e;
                    break
                }
                b = t.return
            }
    return y = wa,
    wa = !1,
    y
}
function Un(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0,
                o !== void 0 && oi(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function zl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ii(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Tc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Tc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ae],
    delete t[tr],
    delete t[Qo],
    delete t[gm],
    delete t[xm])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function zc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ka(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || zc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function si(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = sl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (si(e, t, n),
        e = e.sibling; e !== null; )
            si(e, t, n),
            e = e.sibling
}
function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ai(e, t, n),
        e = e.sibling; e !== null; )
            ai(e, t, n),
            e = e.sibling
}
var ne = null
  , ze = !1;
function ot(e, t, n) {
    for (n = n.child; n !== null; )
        Mc(e, t, n),
        n = n.sibling
}
function Mc(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
        try {
            Ue.onCommitFiberUnmount(El, n)
        } catch {}
    switch (n.tag) {
    case 5:
        se || en(n, t);
    case 6:
        var r = ne
          , l = ze;
        ne = null,
        ot(e, t, n),
        ne = r,
        ze = l,
        ne !== null && (ze ? (e = ne,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
        break;
    case 18:
        ne !== null && (ze ? (e = ne,
        n = n.stateNode,
        e.nodeType === 8 ? ao(e.parentNode, n) : e.nodeType === 1 && ao(e, n),
        Xn(e)) : ao(ne, n.stateNode));
        break;
    case 4:
        r = ne,
        l = ze,
        ne = n.stateNode.containerInfo,
        ze = !0,
        ot(e, t, n),
        ne = r,
        ze = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!se && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var o = l
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && oi(n, t, i),
                l = l.next
            } while (l !== r)
        }
        ot(e, t, n);
        break;
    case 1:
        if (!se && (en(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                K(n, t, a)
            }
        ot(e, t, n);
        break;
    case 21:
        ot(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (se = (r = se) || n.memoizedState !== null,
        ot(e, t, n),
        se = r) : ot(e, t, n);
        break;
    default:
        ot(e, t, n)
    }
}
function Na(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Tm),
        t.forEach(function(r) {
            var l = Wm.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function _e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ne = a.stateNode,
                        ze = !1;
                        break e;
                    case 3:
                        ne = a.stateNode.containerInfo,
                        ze = !0;
                        break e;
                    case 4:
                        ne = a.stateNode.containerInfo,
                        ze = !0;
                        break e
                    }
                    a = a.return
                }
                if (ne === null)
                    throw Error(N(160));
                Mc(o, i, l),
                ne = null,
                ze = !1;
                var u = l.alternate;
                u !== null && (u.return = null),
                l.return = null
            } catch (c) {
                K(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Bc(t, e),
            t = t.sibling
}
function Bc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (_e(t, e),
        De(e),
        r & 4) {
            try {
                Un(3, e, e.return),
                zl(3, e)
            } catch (k) {
                K(e, e.return, k)
            }
            try {
                Un(5, e, e.return)
            } catch (k) {
                K(e, e.return, k)
            }
        }
        break;
    case 1:
        _e(t, e),
        De(e),
        r & 512 && n !== null && en(n, n.return);
        break;
    case 5:
        if (_e(t, e),
        De(e),
        r & 512 && n !== null && en(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Qn(l, "")
            } catch (k) {
                K(e, e.return, k)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , a = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && lu(l, o),
                    _o(a, i);
                    var c = _o(a, o);
                    for (i = 0; i < u.length; i += 2) {
                        var p = u[i]
                          , h = u[i + 1];
                        p === "style" ? uu(l, h) : p === "dangerouslySetInnerHTML" ? su(l, h) : p === "children" ? Qn(l, h) : Ni(l, p, h, c)
                    }
                    switch (a) {
                    case "input":
                        Fo(l, o);
                        break;
                    case "textarea":
                        ou(l, o);
                        break;
                    case "select":
                        var g = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var v = o.value;
                        v != null ? nn(l, !!o.multiple, v, !1) : g !== !!o.multiple && (o.defaultValue != null ? nn(l, !!o.multiple, o.defaultValue, !0) : nn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[tr] = o
                } catch (k) {
                    K(e, e.return, k)
                }
        }
        break;
    case 6:
        if (_e(t, e),
        De(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            l = e.stateNode,
            o = e.memoizedProps;
            try {
                l.nodeValue = o
            } catch (k) {
                K(e, e.return, k)
            }
        }
        break;
    case 3:
        if (_e(t, e),
        De(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Xn(t.containerInfo)
            } catch (k) {
                K(e, e.return, k)
            }
        break;
    case 4:
        _e(t, e),
        De(e);
        break;
    case 13:
        _e(t, e),
        De(e),
        l = e.child,
        l.flags & 8192 && (o = l.memoizedState !== null,
        l.stateNode.isHidden = o,
        !o || l.alternate !== null && l.alternate.memoizedState !== null || (ts = G())),
        r & 4 && Na(e);
        break;
    case 22:
        if (p = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (se = (c = se) || p,
        _e(t, e),
        se = c) : _e(t, e),
        De(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !p && e.mode & 1)
                for (b = e,
                p = e.child; p !== null; ) {
                    for (h = b = p; b !== null; ) {
                        switch (g = b,
                        v = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Un(4, g, g.return);
                            break;
                        case 1:
                            en(g, g.return);
                            var y = g.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (k) {
                                    K(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            en(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                Sa(h);
                                continue
                            }
                        }
                        v !== null ? (v.return = g,
                        b = v) : Sa(h)
                    }
                    p = p.sibling
                }
            e: for (p = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (p === null) {
                        p = h;
                        try {
                            l = h.stateNode,
                            c ? (o = l.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode,
                            u = h.memoizedProps.style,
                            i = u != null && u.hasOwnProperty("display") ? u.display : null,
                            a.style.display = au("display", i))
                        } catch (k) {
                            K(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (p === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (k) {
                            K(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    p === h && (p = null),
                    h = h.return
                }
                p === h && (p = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        _e(t, e),
        De(e),
        r & 4 && Na(e);
        break;
    case 21:
        break;
    default:
        _e(t, e),
        De(e)
    }
}
function De(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (zc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Qn(l, ""),
                r.flags &= -33);
                var o = ka(e);
                ai(e, o, l);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = ka(e);
                si(e, a, i);
                break;
            default:
                throw Error(N(161))
            }
        } catch (u) {
            K(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Mm(e, t, n) {
    b = e,
    Ic(e)
}
function Ic(e, t, n) {
    for (var r = (e.mode & 1) !== 0; b !== null; ) {
        var l = b
          , o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Mr;
            if (!i) {
                var a = l.alternate
                  , u = a !== null && a.memoizedState !== null || se;
                a = Mr;
                var c = se;
                if (Mr = i,
                (se = u) && !c)
                    for (b = l; b !== null; )
                        i = b,
                        u = i.child,
                        i.tag === 22 && i.memoizedState !== null ? ba(l) : u !== null ? (u.return = i,
                        b = u) : ba(l);
                for (; o !== null; )
                    b = o,
                    Ic(o),
                    o = o.sibling;
                b = l,
                Mr = a,
                se = c
            }
            ja(e)
        } else
            l.subtreeFlags & 8772 && o !== null ? (o.return = l,
            b = o) : ja(e)
    }
}
function ja(e) {
    for (; b !== null; ) {
        var t = b;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        se || zl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !se)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && sa(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            sa(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var p = c.memoizedState;
                                if (p !== null) {
                                    var h = p.dehydrated;
                                    h !== null && Xn(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                se || t.flags & 512 && ii(t)
            } catch (g) {
                K(t, t.return, g)
            }
        }
        if (t === e) {
            b = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            b = n;
            break
        }
        b = t.return
    }
}
function Sa(e) {
    for (; b !== null; ) {
        var t = b;
        if (t === e) {
            b = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            b = n;
            break
        }
        b = t.return
    }
}
function ba(e) {
    for (; b !== null; ) {
        var t = b;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    zl(4, t)
                } catch (u) {
                    K(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        K(t, l, u)
                    }
                }
                var o = t.return;
                try {
                    ii(t)
                } catch (u) {
                    K(t, o, u)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    ii(t)
                } catch (u) {
                    K(t, i, u)
                }
            }
        } catch (u) {
            K(t, t.return, u)
        }
        if (t === e) {
            b = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            b = a;
            break
        }
        b = t.return
    }
}
var Bm = Math.ceil
  , vl = lt.ReactCurrentDispatcher
  , Ji = lt.ReactCurrentOwner
  , Ce = lt.ReactCurrentBatchConfig
  , B = 0
  , te = null
  , X = null
  , re = 0
  , ye = 0
  , tn = jt(0)
  , q = 0
  , sr = null
  , Ot = 0
  , Ml = 0
  , es = 0
  , Wn = null
  , pe = null
  , ts = 0
  , hn = 1 / 0
  , Ke = null
  , yl = !1
  , ui = null
  , xt = null
  , Br = !1
  , dt = null
  , wl = 0
  , Hn = 0
  , ci = null
  , Yr = -1
  , Gr = 0;
function ce() {
    return B & 6 ? G() : Yr !== -1 ? Yr : Yr = G()
}
function vt(e) {
    return e.mode & 1 ? B & 2 && re !== 0 ? re & -re : ym.transition !== null ? (Gr === 0 && (Gr = ku()),
    Gr) : (e = I,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Pu(e.type)),
    e) : 1
}
function Ie(e, t, n, r) {
    if (50 < Hn)
        throw Hn = 0,
        ci = null,
        Error(N(185));
    cr(e, n, r),
    (!(B & 2) || e !== te) && (e === te && (!(B & 2) && (Ml |= n),
    q === 4 && ut(e, re)),
    ve(e, r),
    n === 1 && B === 0 && !(t.mode & 1) && (hn = G() + 500,
    Rl && St()))
}
function ve(e, t) {
    var n = e.callbackNode;
    yf(e, t);
    var r = rl(e, e === te ? re : 0);
    if (r === 0)
        n !== null && zs(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && zs(n),
        t === 1)
            e.tag === 0 ? vm(Ea.bind(null, e)) : Ku(Ea.bind(null, e)),
            pm(function() {
                !(B & 6) && St()
            }),
            n = null;
        else {
            switch (Nu(r)) {
            case 1:
                n = Fi;
                break;
            case 4:
                n = yu;
                break;
            case 16:
                n = nl;
                break;
            case 536870912:
                n = wu;
                break;
            default:
                n = nl
            }
            n = Vc(n, Oc.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Oc(e, t) {
    if (Yr = -1,
    Gr = 0,
    B & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (an() && e.callbackNode !== n)
        return null;
    var r = rl(e, e === te ? re : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = kl(e, r);
    else {
        t = r;
        var l = B;
        B |= 2;
        var o = $c();
        (te !== e || re !== t) && (Ke = null,
        hn = G() + 500,
        Tt(e, t));
        do
            try {
                Dm();
                break
            } catch (a) {
                Dc(e, a)
            }
        while (!0);
        $i(),
        vl.current = o,
        B = l,
        X !== null ? t = 0 : (te = null,
        re = 0,
        t = q)
    }
    if (t !== 0) {
        if (t === 2 && (l = Io(e),
        l !== 0 && (r = l,
        t = di(e, l))),
        t === 1)
            throw n = sr,
            Tt(e, 0),
            ut(e, r),
            ve(e, G()),
            n;
        if (t === 6)
            ut(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !Im(l) && (t = kl(e, r),
            t === 2 && (o = Io(e),
            o !== 0 && (r = o,
            t = di(e, o))),
            t === 1))
                throw n = sr,
                Tt(e, 0),
                ut(e, r),
                ve(e, G()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                Ct(e, pe, Ke);
                break;
            case 3:
                if (ut(e, r),
                (r & 130023424) === r && (t = ts + 500 - G(),
                10 < t)) {
                    if (rl(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ce(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = Vo(Ct.bind(null, e, pe, Ke), t);
                    break
                }
                Ct(e, pe, Ke);
                break;
            case 4:
                if (ut(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var i = 31 - Be(r);
                    o = 1 << i,
                    i = t[i],
                    i > l && (l = i),
                    r &= ~o
                }
                if (r = l,
                r = G() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bm(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Vo(Ct.bind(null, e, pe, Ke), r);
                    break
                }
                Ct(e, pe, Ke);
                break;
            case 5:
                Ct(e, pe, Ke);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return ve(e, G()),
    e.callbackNode === n ? Oc.bind(null, e) : null
}
function di(e, t) {
    var n = Wn;
    return e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    e = kl(e, t),
    e !== 2 && (t = pe,
    pe = n,
    t !== null && fi(t)),
    e
}
function fi(e) {
    pe === null ? pe = e : pe.push.apply(pe, e)
}
function Im(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(o(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function ut(e, t) {
    for (t &= ~es,
    t &= ~Ml,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Be(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Ea(e) {
    if (B & 6)
        throw Error(N(327));
    an();
    var t = rl(e, 0);
    if (!(t & 1))
        return ve(e, G()),
        null;
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Io(e);
        r !== 0 && (t = r,
        n = di(e, r))
    }
    if (n === 1)
        throw n = sr,
        Tt(e, 0),
        ut(e, t),
        ve(e, G()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ct(e, pe, Ke),
    ve(e, G()),
    null
}
function ns(e, t) {
    var n = B;
    B |= 1;
    try {
        return e(t)
    } finally {
        B = n,
        B === 0 && (hn = G() + 500,
        Rl && St())
    }
}
function Dt(e) {
    dt !== null && dt.tag === 0 && !(B & 6) && an();
    var t = B;
    B |= 1;
    var n = Ce.transition
      , r = I;
    try {
        if (Ce.transition = null,
        I = 1,
        e)
            return e()
    } finally {
        I = r,
        Ce.transition = n,
        B = t,
        !(B & 6) && St()
    }
}
function rs() {
    ye = tn.current,
    A(tn)
}
function Tt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    mm(n)),
    X !== null)
        for (n = X.return; n !== null; ) {
            var r = n;
            switch (Ii(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && al();
                break;
            case 3:
                mn(),
                A(ge),
                A(ae),
                Qi();
                break;
            case 5:
                Vi(r);
                break;
            case 4:
                mn();
                break;
            case 13:
                A(W);
                break;
            case 19:
                A(W);
                break;
            case 10:
                Ai(r.type._context);
                break;
            case 22:
            case 23:
                rs()
            }
            n = n.return
        }
    if (te = e,
    X = e = yt(e.current, null),
    re = ye = t,
    q = 0,
    sr = null,
    es = Ml = Ot = 0,
    pe = Wn = null,
    Rt !== null) {
        for (t = 0; t < Rt.length; t++)
            if (n = Rt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l,
                    r.next = i
                }
                n.pending = r
            }
        Rt = null
    }
    return e
}
function Dc(e, t) {
    do {
        var n = X;
        try {
            if ($i(),
            Vr.current = xl,
            gl) {
                for (var r = H.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                gl = !1
            }
            if (It = 0,
            ee = Z = H = null,
            An = !1,
            lr = 0,
            Ji.current = null,
            n === null || n.return === null) {
                q = 1,
                sr = t,
                X = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , a = n
                  , u = t;
                if (t = re,
                a.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , p = a
                      , h = p.tag;
                    if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var g = p.alternate;
                        g ? (p.updateQueue = g.updateQueue,
                        p.memoizedState = g.memoizedState,
                        p.lanes = g.lanes) : (p.updateQueue = null,
                        p.memoizedState = null)
                    }
                    var v = ma(i);
                    if (v !== null) {
                        v.flags &= -257,
                        pa(v, i, a, o, t),
                        v.mode & 1 && fa(o, c, t),
                        t = v,
                        u = c;
                        var y = t.updateQueue;
                        if (y === null) {
                            var k = new Set;
                            k.add(u),
                            t.updateQueue = k
                        } else
                            y.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            fa(o, c, t),
                            ls();
                            break e
                        }
                        u = Error(N(426))
                    }
                } else if (U && a.mode & 1) {
                    var S = ma(i);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        pa(S, i, a, o, t),
                        Oi(pn(u, a));
                        break e
                    }
                }
                o = u = pn(u, a),
                q !== 4 && (q = 2),
                Wn === null ? Wn = [o] : Wn.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var f = Nc(o, u, t);
                        ia(o, f);
                        break e;
                    case 1:
                        a = u;
                        var d = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (xt === null || !xt.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var w = jc(o, a, t);
                            ia(o, w);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Uc(n)
        } catch (j) {
            t = j,
            X === n && n !== null && (X = n = n.return);
            continue
        }
        break
    } while (!0)
}
function $c() {
    var e = vl.current;
    return vl.current = xl,
    e === null ? xl : e
}
function ls() {
    (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || !(Ot & 268435455) && !(Ml & 268435455) || ut(te, re)
}
function kl(e, t) {
    var n = B;
    B |= 2;
    var r = $c();
    (te !== e || re !== t) && (Ke = null,
    Tt(e, t));
    do
        try {
            Om();
            break
        } catch (l) {
            Dc(e, l)
        }
    while (!0);
    if ($i(),
    B = n,
    vl.current = r,
    X !== null)
        throw Error(N(261));
    return te = null,
    re = 0,
    q
}
function Om() {
    for (; X !== null; )
        Ac(X)
}
function Dm() {
    for (; X !== null && !cf(); )
        Ac(X)
}
function Ac(e) {
    var t = Hc(e.alternate, e, ye);
    e.memoizedProps = e.pendingProps,
    t === null ? Uc(e) : X = t,
    Ji.current = null
}
function Uc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = _m(n, t),
            n !== null) {
                n.flags &= 32767,
                X = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                q = 6,
                X = null;
                return
            }
        } else if (n = Rm(n, t, ye),
        n !== null) {
            X = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            X = t;
            return
        }
        X = t = e
    } while (t !== null);
    q === 0 && (q = 5)
}
function Ct(e, t, n) {
    var r = I
      , l = Ce.transition;
    try {
        Ce.transition = null,
        I = 1,
        $m(e, t, n, r)
    } finally {
        Ce.transition = l,
        I = r
    }
    return null
}
function $m(e, t, n, r) {
    do
        an();
    while (dt !== null);
    if (B & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (wf(e, o),
    e === te && (X = te = null,
    re = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Br || (Br = !0,
    Vc(nl, function() {
        return an(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Ce.transition,
        Ce.transition = null;
        var i = I;
        I = 1;
        var a = B;
        B |= 4,
        Ji.current = null,
        zm(e, n),
        Bc(n, e),
        im(Wo),
        ll = !!Uo,
        Wo = Uo = null,
        e.current = n,
        Mm(n),
        df(),
        B = a,
        I = i,
        Ce.transition = o
    } else
        e.current = n;
    if (Br && (Br = !1,
    dt = e,
    wl = l),
    o = e.pendingLanes,
    o === 0 && (xt = null),
    pf(n.stateNode),
    ve(e, G()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (yl)
        throw yl = !1,
        e = ui,
        ui = null,
        e;
    return wl & 1 && e.tag !== 0 && an(),
    o = e.pendingLanes,
    o & 1 ? e === ci ? Hn++ : (Hn = 0,
    ci = e) : Hn = 0,
    St(),
    null
}
function an() {
    if (dt !== null) {
        var e = Nu(wl)
          , t = Ce.transition
          , n = I;
        try {
            if (Ce.transition = null,
            I = 16 > e ? 16 : e,
            dt === null)
                var r = !1;
            else {
                if (e = dt,
                dt = null,
                wl = 0,
                B & 6)
                    throw Error(N(331));
                var l = B;
                for (B |= 4,
                b = e.current; b !== null; ) {
                    var o = b
                      , i = o.child;
                    if (b.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var c = a[u];
                                for (b = c; b !== null; ) {
                                    var p = b;
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Un(8, p, o)
                                    }
                                    var h = p.child;
                                    if (h !== null)
                                        h.return = p,
                                        b = h;
                                    else
                                        for (; b !== null; ) {
                                            p = b;
                                            var g = p.sibling
                                              , v = p.return;
                                            if (Tc(p),
                                            p === c) {
                                                b = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = v,
                                                b = g;
                                                break
                                            }
                                            b = v
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var k = y.child;
                                if (k !== null) {
                                    y.child = null;
                                    do {
                                        var S = k.sibling;
                                        k.sibling = null,
                                        k = S
                                    } while (k !== null)
                                }
                            }
                            b = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        b = i;
                    else
                        e: for (; b !== null; ) {
                            if (o = b,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Un(9, o, o.return)
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return,
                                b = f;
                                break e
                            }
                            b = o.return
                        }
                }
                var d = e.current;
                for (b = d; b !== null; ) {
                    i = b;
                    var m = i.child;
                    if (i.subtreeFlags & 2064 && m !== null)
                        m.return = i,
                        b = m;
                    else
                        e: for (i = d; b !== null; ) {
                            if (a = b,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zl(9, a)
                                    }
                                } catch (j) {
                                    K(a, a.return, j)
                                }
                            if (a === i) {
                                b = null;
                                break e
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                w.return = a.return,
                                b = w;
                                break e
                            }
                            b = a.return
                        }
                }
                if (B = l,
                St(),
                Ue && typeof Ue.onPostCommitFiberRoot == "function")
                    try {
                        Ue.onPostCommitFiberRoot(El, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            I = n,
            Ce.transition = t
        }
    }
    return !1
}
function Fa(e, t, n) {
    t = pn(n, t),
    t = Nc(e, t, 1),
    e = gt(e, t, 1),
    t = ce(),
    e !== null && (cr(e, 1, t),
    ve(e, t))
}
function K(e, t, n) {
    if (e.tag === 3)
        Fa(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Fa(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
                    e = pn(n, e),
                    e = jc(t, e, 1),
                    t = gt(t, e, 1),
                    e = ce(),
                    t !== null && (cr(t, 1, e),
                    ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Am(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ce(),
    e.pingedLanes |= e.suspendedLanes & n,
    te === e && (re & n) === n && (q === 4 || q === 3 && (re & 130023424) === re && 500 > G() - ts ? Tt(e, 0) : es |= n),
    ve(e, t)
}
function Wc(e, t) {
    t === 0 && (e.mode & 1 ? (t = Er,
    Er <<= 1,
    !(Er & 130023424) && (Er = 4194304)) : t = 1);
    var n = ce();
    e = tt(e, t),
    e !== null && (cr(e, t, n),
    ve(e, n))
}
function Um(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Wc(e, n)
}
function Wm(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    Wc(e, n)
}
var Hc;
Hc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ge.current)
            he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return he = !1,
                Lm(e, t, n);
            he = !!(e.flags & 131072)
        }
    else
        he = !1,
        U && t.flags & 1048576 && Yu(t, dl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Kr(e, t),
        e = t.pendingProps;
        var l = cn(t, ae.current);
        sn(t, n),
        l = Yi(null, t, r, e, l, n);
        var o = Gi();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        xe(r) ? (o = !0,
        ul(t)) : o = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Wi(t),
        l.updater = Tl,
        t.stateNode = l,
        l._reactInternals = t,
        qo(t, r, e, n),
        t = ti(null, t, r, !0, o, n)) : (t.tag = 0,
        U && o && Bi(t),
        ue(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Kr(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Vm(r),
            e = Te(r, e),
            l) {
            case 0:
                t = ei(null, t, r, e, n);
                break e;
            case 1:
                t = xa(null, t, r, e, n);
                break e;
            case 11:
                t = ha(null, t, r, e, n);
                break e;
            case 14:
                t = ga(null, t, r, Te(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Te(r, l),
        ei(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Te(r, l),
        xa(e, t, r, l, n);
    case 3:
        e: {
            if (Fc(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            o = t.memoizedState,
            l = o.element,
            ec(e, t),
            pl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    l = pn(Error(N(423)), t),
                    t = va(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = pn(Error(N(424)), t),
                    t = va(e, t, r, n, l);
                    break e
                } else
                    for (we = ht(t.stateNode.containerInfo.firstChild),
                    ke = t,
                    U = !0,
                    Me = null,
                    n = qu(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (dn(),
                r === l) {
                    t = nt(e, t, n);
                    break e
                }
                ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return tc(t),
        e === null && Go(t),
        r = t.type,
        l = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = l.children,
        Ho(r, l) ? i = null : o !== null && Ho(r, o) && (t.flags |= 32),
        Ec(e, t),
        ue(e, t, i, n),
        t.child;
    case 6:
        return e === null && Go(t),
        null;
    case 13:
        return Pc(e, t, n);
    case 4:
        return Hi(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = fn(t, null, r, n) : ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Te(r, l),
        ha(e, t, r, l, n);
    case 7:
        return ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            o = t.memoizedProps,
            i = l.value,
            D(fl, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (Oe(o.value, i)) {
                    if (o.children === l.children && !ge.current) {
                        t = nt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            i = o.child;
                            for (var u = a.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (o.tag === 1) {
                                        u = Ze(-1, n & -n),
                                        u.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var p = c.pending;
                                            p === null ? u.next = u : (u.next = p.next,
                                            p.next = u),
                                            c.pending = u
                                        }
                                    }
                                    o.lanes |= n,
                                    u = o.alternate,
                                    u !== null && (u.lanes |= n),
                                    Xo(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(N(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            Xo(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            ue(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        sn(t, n),
        l = Le(l),
        r = r(l),
        t.flags |= 1,
        ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Te(r, t.pendingProps),
        l = Te(r.type, l),
        ga(e, t, r, l, n);
    case 15:
        return Sc(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Te(r, l),
        Kr(e, t),
        t.tag = 1,
        xe(r) ? (e = !0,
        ul(t)) : e = !1,
        sn(t, n),
        kc(t, r, l),
        qo(t, r, l, n),
        ti(null, t, r, !0, e, n);
    case 19:
        return Cc(e, t, n);
    case 22:
        return bc(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function Vc(e, t) {
    return vu(e, t)
}
function Hm(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Pe(e, t, n, r) {
    return new Hm(e,t,n,r)
}
function os(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Vm(e) {
    if (typeof e == "function")
        return os(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Si)
            return 11;
        if (e === bi)
            return 14
    }
    return 2
}
function yt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Pe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Xr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        os(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Vt:
            return zt(n.children, l, o, t);
        case ji:
            i = 8,
            l |= 8;
            break;
        case No:
            return e = Pe(12, n, t, l | 2),
            e.elementType = No,
            e.lanes = o,
            e;
        case jo:
            return e = Pe(13, n, t, l),
            e.elementType = jo,
            e.lanes = o,
            e;
        case So:
            return e = Pe(19, n, t, l),
            e.elementType = So,
            e.lanes = o,
            e;
        case tu:
            return Bl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ja:
                    i = 10;
                    break e;
                case eu:
                    i = 9;
                    break e;
                case Si:
                    i = 11;
                    break e;
                case bi:
                    i = 14;
                    break e;
                case it:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = Pe(i, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function zt(e, t, n, r) {
    return e = Pe(7, e, r, t),
    e.lanes = n,
    e
}
function Bl(e, t, n, r) {
    return e = Pe(22, e, r, t),
    e.elementType = tu,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function xo(e, t, n) {
    return e = Pe(6, e, null, t),
    e.lanes = n,
    e
}
function vo(e, t, n) {
    return t = Pe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Qm(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Zl(0),
    this.expirationTimes = Zl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Zl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function is(e, t, n, r, l, o, i, a, u) {
    return e = new Qm(e,t,n,a,u),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Pe(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Wi(o),
    e
}
function Km(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ht,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Qc(e) {
    if (!e)
        return kt;
    e = e._reactInternals;
    e: {
        if (At(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (xe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (xe(n))
            return Qu(e, n, t)
    }
    return t
}
function Kc(e, t, n, r, l, o, i, a, u) {
    return e = is(n, r, !0, e, l, o, i, a, u),
    e.context = Qc(null),
    n = e.current,
    r = ce(),
    l = vt(n),
    o = Ze(r, l),
    o.callback = t ?? null,
    gt(n, o, l),
    e.current.lanes = l,
    cr(e, l, r),
    ve(e, r),
    e
}
function Il(e, t, n, r) {
    var l = t.current
      , o = ce()
      , i = vt(l);
    return n = Qc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ze(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = gt(l, t, i),
    e !== null && (Ie(e, l, i, o),
    Hr(e, l, i)),
    i
}
function Nl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Pa(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ss(e, t) {
    Pa(e, t),
    (e = e.alternate) && Pa(e, t)
}
function Ym() {
    return null
}
var Yc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function as(e) {
    this._internalRoot = e
}
Ol.prototype.render = as.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    Il(e, t, null, null)
}
;
Ol.prototype.unmount = as.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dt(function() {
            Il(null, e, null, null)
        }),
        t[et] = null
    }
}
;
function Ol(e) {
    this._internalRoot = e
}
Ol.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = bu();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++)
            ;
        at.splice(n, 0, e),
        n === 0 && Fu(e)
    }
}
;
function us(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Dl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ca() {}
function Gm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = Nl(i);
                o.call(c)
            }
        }
        var i = Kc(t, r, e, 0, null, !1, !1, "", Ca);
        return e._reactRootContainer = i,
        e[et] = i.current,
        Jn(e.nodeType === 8 ? e.parentNode : e),
        Dt(),
        i
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = Nl(u);
            a.call(c)
        }
    }
    var u = is(e, 0, !1, null, null, !1, !1, "", Ca);
    return e._reactRootContainer = u,
    e[et] = u.current,
    Jn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function() {
        Il(t, u, n, r)
    }),
    u
}
function $l(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = Nl(i);
                a.call(u)
            }
        }
        Il(t, i, e, l)
    } else
        i = Gm(n, t, e, l, r);
    return Nl(i)
}
ju = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = zn(t.pendingLanes);
            n !== 0 && (Pi(t, n | 1),
            ve(t, G()),
            !(B & 6) && (hn = G() + 500,
            St()))
        }
        break;
    case 13:
        Dt(function() {
            var r = tt(e, 1);
            if (r !== null) {
                var l = ce();
                Ie(r, e, 1, l)
            }
        }),
        ss(e, 1)
    }
}
;
Ci = function(e) {
    if (e.tag === 13) {
        var t = tt(e, 134217728);
        if (t !== null) {
            var n = ce();
            Ie(t, e, 134217728, n)
        }
        ss(e, 134217728)
    }
}
;
Su = function(e) {
    if (e.tag === 13) {
        var t = vt(e)
          , n = tt(e, t);
        if (n !== null) {
            var r = ce();
            Ie(n, e, t, r)
        }
        ss(e, t)
    }
}
;
bu = function() {
    return I
}
;
Eu = function(e, t) {
    var n = I;
    try {
        return I = e,
        t()
    } finally {
        I = n
    }
}
;
zo = function(e, t, n) {
    switch (t) {
    case "input":
        if (Fo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Ll(r);
                    if (!l)
                        throw Error(N(90));
                    ru(r),
                    Fo(r, l)
                }
            }
        }
        break;
    case "textarea":
        ou(e, n);
        break;
    case "select":
        t = n.value,
        t != null && nn(e, !!n.multiple, t, !1)
    }
}
;
fu = ns;
mu = Dt;
var Xm = {
    usingClientEntryPoint: !1,
    Events: [fr, Gt, Ll, cu, du, ns]
}
  , Ln = {
    findFiberByHostInstance: Lt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Zm = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = gu(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || Ym,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ir.isDisabled && Ir.supportsFiber)
        try {
            El = Ir.inject(Zm),
            Ue = Ir
        } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xm;
je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!us(t))
        throw Error(N(200));
    return Km(e, t, null, n)
}
;
je.createRoot = function(e, t) {
    if (!us(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , l = Yc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = is(e, 1, !1, null, null, n, !1, r, l),
    e[et] = t.current,
    Jn(e.nodeType === 8 ? e.parentNode : e),
    new as(t)
}
;
je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = gu(t),
    e = e === null ? null : e.stateNode,
    e
}
;
je.flushSync = function(e) {
    return Dt(e)
}
;
je.hydrate = function(e, t, n) {
    if (!Dl(t))
        throw Error(N(200));
    return $l(null, e, t, !0, n)
}
;
je.hydrateRoot = function(e, t, n) {
    if (!us(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , o = ""
      , i = Yc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Kc(t, null, e, 1, n ?? null, l, !1, o, i),
    e[et] = t.current,
    Jn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ol(t)
}
;
je.render = function(e, t, n) {
    if (!Dl(t))
        throw Error(N(200));
    return $l(null, e, t, !1, n)
}
;
je.unmountComponentAtNode = function(e) {
    if (!Dl(e))
        throw Error(N(40));
    return e._reactRootContainer ? (Dt(function() {
        $l(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[et] = null
        })
    }),
    !0) : !1
}
;
je.unstable_batchedUpdates = ns;
je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Dl(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return $l(e, t, n, !1, r)
}
;
je.version = "18.3.1-next-f1338f8080-20240426";
function Gc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)
        } catch (e) {
            console.error(e)
        }
}
Gc(),
Ga.exports = je;
var qm = Ga.exports, Xc, La = qm;
Xc = La.createRoot,
La.hydrateRoot;
/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Ra = "popstate";
function Jm(e={}) {
    function t(r, l) {
        let {pathname: o, search: i, hash: a} = r.location;
        return mi("", {
            pathname: o,
            search: i,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function n(r, l) {
        return typeof l == "string" ? l : ar(l)
    }
    return tp(t, n, null, e)
}
function V(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function He(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function ep() {
    return Math.random().toString(36).substring(2, 10)
}
function _a(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function mi(e, t, n=null, r) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? yn(t) : t,
        state: n,
        key: t && t.key || r || ep()
    }
}
function ar({pathname: e="/", search: t="", hash: n=""}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
}
function yn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substring(n),
        e = e.substring(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substring(r),
        e = e.substring(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function tp(e, t, n, r={}) {
    let {window: l=document.defaultView, v5Compat: o=!1} = r
      , i = l.history
      , a = "POP"
      , u = null
      , c = p();
    c == null && (c = 0,
    i.replaceState({
        ...i.state,
        idx: c
    }, ""));
    function p() {
        return (i.state || {
            idx: null
        }).idx
    }
    function h() {
        a = "POP";
        let S = p()
          , f = S == null ? null : S - c;
        c = S,
        u && u({
            action: a,
            location: k.location,
            delta: f
        })
    }
    function g(S, f) {
        a = "PUSH";
        let d = mi(k.location, S, f);
        c = p() + 1;
        let m = _a(d, c)
          , w = k.createHref(d);
        try {
            i.pushState(m, "", w)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError")
                throw j;
            l.location.assign(w)
        }
        o && u && u({
            action: a,
            location: k.location,
            delta: 1
        })
    }
    function v(S, f) {
        a = "REPLACE";
        let d = mi(k.location, S, f);
        c = p();
        let m = _a(d, c)
          , w = k.createHref(d);
        i.replaceState(m, "", w),
        o && u && u({
            action: a,
            location: k.location,
            delta: 0
        })
    }
    function y(S) {
        return np(S)
    }
    let k = {
        get action() {
            return a
        },
        get location() {
            return e(l, i)
        },
        listen(S) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(Ra, h),
            u = S,
            () => {
                l.removeEventListener(Ra, h),
                u = null
            }
        },
        createHref(S) {
            return t(l, S)
        },
        createURL: y,
        encodeLocation(S) {
            let f = y(S);
            return {
                pathname: f.pathname,
                search: f.search,
                hash: f.hash
            }
        },
        push: g,
        replace: v,
        go(S) {
            return i.go(S)
        }
    };
    return k
}
function np(e, t=!1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href),
    V(n, "No window.location.(origin|href) available to create URL");
    let r = typeof e == "string" ? e : ar(e);
    return r = r.replace(/ $/, "%20"),
    !t && r.startsWith("//") && (r = n + r),
    new URL(r,n)
}
function Zc(e, t, n="/") {
    return rp(e, t, n, !1)
}
function rp(e, t, n, r) {
    let l = typeof t == "string" ? yn(t) : t
      , o = rt(l.pathname || "/", n);
    if (o == null)
        return null;
    let i = qc(e);
    lp(i);
    let a = null;
    for (let u = 0; a == null && u < i.length; ++u) {
        let c = hp(o);
        a = mp(i[u], c, r)
    }
    return a
}
function qc(e, t=[], n=[], r="", l=!1) {
    let o = (i, a, u=l, c) => {
        let p = {
            relativePath: c === void 0 ? i.path || "" : c,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: a,
            route: i
        };
        if (p.relativePath.startsWith("/")) {
            if (!p.relativePath.startsWith(r) && u)
                return;
            V(p.relativePath.startsWith(r), `Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            p.relativePath = p.relativePath.slice(r.length)
        }
        let h = qe([r, p.relativePath])
          , g = n.concat(p);
        i.children && i.children.length > 0 && (V(i.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`),
        qc(i.children, t, g, h, u)),
        !(i.path == null && !i.index) && t.push({
            path: h,
            score: dp(h, i.index),
            routesMeta: g
        })
    }
    ;
    return e.forEach( (i, a) => {
        var u;
        if (i.path === "" || !((u = i.path) != null && u.includes("?")))
            o(i, a);
        else
            for (let c of Jc(i.path))
                o(i, a, !0, c)
    }
    ),
    t
}
function Jc(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , l = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return l ? [o, ""] : [o];
    let i = Jc(r.join("/"))
      , a = [];
    return a.push(...i.map(u => u === "" ? o : [o, u].join("/"))),
    l && a.push(...i),
    a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function lp(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : fp(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
var op = /^:[\w-]+$/
  , ip = 3
  , sp = 2
  , ap = 1
  , up = 10
  , cp = -2
  , Ta = e => e === "*";
function dp(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Ta) && (r += cp),
    t && (r += sp),
    n.filter(l => !Ta(l)).reduce( (l, o) => l + (op.test(o) ? ip : o === "" ? ap : up), r)
}
function fp(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function mp(e, t, n=!1) {
    let {routesMeta: r} = e
      , l = {}
      , o = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let u = r[a]
          , c = a === r.length - 1
          , p = o === "/" ? t : t.slice(o.length) || "/"
          , h = jl({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: c
        }, p)
          , g = u.route;
        if (!h && c && n && !r[r.length - 1].route.index && (h = jl({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, p)),
        !h)
            return null;
        Object.assign(l, h.params),
        i.push({
            params: l,
            pathname: qe([o, h.pathname]),
            pathnameBase: yp(qe([o, h.pathnameBase])),
            route: g
        }),
        h.pathnameBase !== "/" && (o = qe([o, h.pathnameBase]))
    }
    return i
}
function jl(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = pp(e.path, e.caseSensitive, e.end)
      , l = t.match(n);
    if (!l)
        return null;
    let o = l[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , a = l.slice(1);
    return {
        params: r.reduce( (c, {paramName: p, isOptional: h}, g) => {
            if (p === "*") {
                let y = a[g] || "";
                i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[g];
            return h && !v ? c[p] = void 0 : c[p] = (v || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function pp(e, t=!1, n=!0) {
    He(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let r = []
      , l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, u) => (r.push({
        paramName: a,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,t ? void 0 : "i"), r]
}
function hp(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return He(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
        e
    }
}
function rt(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function gp(e, t="/") {
    let {pathname: n, search: r="", hash: l=""} = typeof e == "string" ? yn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : xp(n, t) : t,
        search: wp(r),
        hash: kp(l)
    }
}
function xp(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function yo(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function vp(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function ed(e) {
    let t = vp(e);
    return t.map( (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase)
}
function td(e, t, n, r=!1) {
    let l;
    typeof e == "string" ? l = yn(e) : (l = {
        ...e
    },
    V(!l.pathname || !l.pathname.includes("?"), yo("?", "pathname", "search", l)),
    V(!l.pathname || !l.pathname.includes("#"), yo("#", "pathname", "hash", l)),
    V(!l.search || !l.search.includes("#"), yo("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, a;
    if (i == null)
        a = n;
    else {
        let h = t.length - 1;
        if (!r && i.startsWith("..")) {
            let g = i.split("/");
            for (; g[0] === ".."; )
                g.shift(),
                h -= 1;
            l.pathname = g.join("/")
        }
        a = h >= 0 ? t[h] : "/"
    }
    let u = gp(l, a)
      , c = i && i !== "/" && i.endsWith("/")
      , p = (o || i === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || p) && (u.pathname += "/"),
    u
}
var qe = e => e.join("/").replace(/\/\/+/g, "/")
  , yp = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , wp = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , kp = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Np(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
var nd = ["POST", "PUT", "PATCH", "DELETE"];
new Set(nd);
var jp = ["GET", ...nd];
new Set(jp);
var wn = x.createContext(null);
wn.displayName = "DataRouter";
var Al = x.createContext(null);
Al.displayName = "DataRouterState";
x.createContext(!1);
var rd = x.createContext({
    isTransitioning: !1
});
rd.displayName = "ViewTransition";
var Sp = x.createContext(new Map);
Sp.displayName = "Fetchers";
var bp = x.createContext(null);
bp.displayName = "Await";
var Ve = x.createContext(null);
Ve.displayName = "Navigation";
var pr = x.createContext(null);
pr.displayName = "Location";
var Qe = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Qe.displayName = "Route";
var cs = x.createContext(null);
cs.displayName = "RouteError";
function Ep(e, {relative: t}={}) {
    V(hr(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: n, navigator: r} = x.useContext(Ve)
      , {hash: l, pathname: o, search: i} = gr(e, {
        relative: t
    })
      , a = o;
    return n !== "/" && (a = o === "/" ? n : qe([n, o])),
    r.createHref({
        pathname: a,
        search: i,
        hash: l
    })
}
function hr() {
    return x.useContext(pr) != null
}
function bt() {
    return V(hr(), "useLocation() may be used only in the context of a <Router> component."),
    x.useContext(pr).location
}
var ld = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function od(e) {
    x.useContext(Ve).static || x.useLayoutEffect(e)
}
function Fp() {
    let {isDataRoute: e} = x.useContext(Qe);
    return e ? Ap() : Pp()
}
function Pp() {
    V(hr(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = x.useContext(wn)
      , {basename: t, navigator: n} = x.useContext(Ve)
      , {matches: r} = x.useContext(Qe)
      , {pathname: l} = bt()
      , o = JSON.stringify(ed(r))
      , i = x.useRef(!1);
    return od( () => {
        i.current = !0
    }
    ),
    x.useCallback( (u, c={}) => {
        if (He(i.current, ld),
        !i.current)
            return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let p = td(u, JSON.parse(o), l, c.relative === "path");
        e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : qe([t, p.pathname])),
        (c.replace ? n.replace : n.push)(p, c.state, c)
    }
    , [t, n, o, l, e])
}
x.createContext(null);
function Cp() {
    let {matches: e} = x.useContext(Qe)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function gr(e, {relative: t}={}) {
    let {matches: n} = x.useContext(Qe)
      , {pathname: r} = bt()
      , l = JSON.stringify(ed(n));
    return x.useMemo( () => td(e, JSON.parse(l), r, t === "path"), [e, l, r, t])
}
function Lp(e, t) {
    return id(e, t)
}
function id(e, t, n, r, l) {
    var d;
    V(hr(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: o} = x.useContext(Ve)
      , {matches: i} = x.useContext(Qe)
      , a = i[i.length - 1]
      , u = a ? a.params : {}
      , c = a ? a.pathname : "/"
      , p = a ? a.pathnameBase : "/"
      , h = a && a.route;
    {
        let m = h && h.path || "";
        sd(c, !h || m.endsWith("*") || m.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m === "/" ? "*" : `${m}/*`}">.`)
    }
    let g = bt(), v;
    if (t) {
        let m = typeof t == "string" ? yn(t) : t;
        V(p === "/" || ((d = m.pathname) == null ? void 0 : d.startsWith(p)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${m.pathname}" was given in the \`location\` prop.`),
        v = m
    } else
        v = g;
    let y = v.pathname || "/"
      , k = y;
    if (p !== "/") {
        let m = p.replace(/^\//, "").split("/");
        k = "/" + y.replace(/^\//, "").split("/").slice(m.length).join("/")
    }
    let S = Zc(e, {
        pathname: k
    });
    He(h || S != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
    He(S == null || S[S.length - 1].route.element !== void 0 || S[S.length - 1].route.Component !== void 0 || S[S.length - 1].route.lazy !== void 0, `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let f = Mp(S && S.map(m => Object.assign({}, m, {
        params: Object.assign({}, u, m.params),
        pathname: qe([p, o.encodeLocation ? o.encodeLocation(m.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : m.pathname]),
        pathnameBase: m.pathnameBase === "/" ? p : qe([p, o.encodeLocation ? o.encodeLocation(m.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : m.pathnameBase])
    })), i, n, r, l);
    return t && f ? x.createElement(pr.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...v
            },
            navigationType: "POP"
        }
    }, f) : f
}
function Rp() {
    let e = $p()
      , t = Np(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = "rgba(200,200,200, 0.5)"
      , l = {
        padding: "0.5rem",
        backgroundColor: r
    }
      , o = {
        padding: "2px 4px",
        backgroundColor: r
    }
      , i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e),
    i = x.createElement(x.Fragment, null, x.createElement("p", null, "💿 Hey developer 👋"), x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", x.createElement("code", {
        style: o
    }, "ErrorBoundary"), " or", " ", x.createElement("code", {
        style: o
    }, "errorElement"), " prop on your route.")),
    x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: l
    }, n) : null, i)
}
var _p = x.createElement(Rp, null)
  , Tp = class extends x.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        this.props.unstable_onError ? this.props.unstable_onError(e, t) : console.error("React Router caught the following error during render", e)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(Qe.Provider, {
            value: this.props.routeContext
        }, x.createElement(cs.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function zp({routeContext: e, match: t, children: n}) {
    let r = x.useContext(wn);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    x.createElement(Qe.Provider, {
        value: e
    }, n)
}
function Mp(e, t=[], n=null, r=null, l=null) {
    if (e == null) {
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , i = n == null ? void 0 : n.errors;
    if (i != null) {
        let c = o.findIndex(p => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0);
        V(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let a = !1
      , u = -1;
    if (n)
        for (let c = 0; c < o.length; c++) {
            let p = o[c];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c),
            p.route.id) {
                let {loaderData: h, errors: g} = n
                  , v = p.route.loader && !h.hasOwnProperty(p.route.id) && (!g || g[p.route.id] === void 0);
                if (p.route.lazy || v) {
                    a = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (c, p, h) => {
        let g, v = !1, y = null, k = null;
        n && (g = i && p.route.id ? i[p.route.id] : void 0,
        y = p.route.errorElement || _p,
        a && (u < 0 && h === 0 ? (sd("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        v = !0,
        k = null) : u === h && (v = !0,
        k = p.route.hydrateFallbackElement || null)));
        let S = t.concat(o.slice(0, h + 1))
          , f = () => {
            let d;
            return g ? d = y : v ? d = k : p.route.Component ? d = x.createElement(p.route.Component, null) : p.route.element ? d = p.route.element : d = c,
            x.createElement(zp, {
                match: p,
                routeContext: {
                    outlet: c,
                    matches: S,
                    isDataRoute: n != null
                },
                children: d
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || h === 0) ? x.createElement(Tp, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: g,
            children: f(),
            routeContext: {
                outlet: null,
                matches: S,
                isDataRoute: !0
            },
            unstable_onError: r
        }) : f()
    }
    , null)
}
function ds(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Bp(e) {
    let t = x.useContext(wn);
    return V(t, ds(e)),
    t
}
function Ip(e) {
    let t = x.useContext(Al);
    return V(t, ds(e)),
    t
}
function Op(e) {
    let t = x.useContext(Qe);
    return V(t, ds(e)),
    t
}
function fs(e) {
    let t = Op(e)
      , n = t.matches[t.matches.length - 1];
    return V(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function Dp() {
    return fs("useRouteId")
}
function $p() {
    var r;
    let e = x.useContext(cs)
      , t = Ip("useRouteError")
      , n = fs("useRouteError");
    return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n]
}
function Ap() {
    let {router: e} = Bp("useNavigate")
      , t = fs("useNavigate")
      , n = x.useRef(!1);
    return od( () => {
        n.current = !0
    }
    ),
    x.useCallback(async (l, o={}) => {
        He(n.current, ld),
        n.current && (typeof l == "number" ? e.navigate(l) : await e.navigate(l, {
            fromRouteId: t,
            ...o
        }))
    }
    , [e, t])
}
var za = {};
function sd(e, t, n) {
    !t && !za[e] && (za[e] = !0,
    He(!1, n))
}
x.memo(Up);
function Up({routes: e, future: t, state: n, unstable_onError: r}) {
    return id(e, void 0, n, r, t)
}
function Wt(e) {
    V(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Wp({basename: e="/", children: t=null, location: n, navigationType: r="POP", navigator: l, static: o=!1}) {
    V(!hr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let i = e.replace(/^\/*/, "/")
      , a = x.useMemo( () => ({
        basename: i,
        navigator: l,
        static: o,
        future: {}
    }), [i, l, o]);
    typeof n == "string" && (n = yn(n));
    let {pathname: u="/", search: c="", hash: p="", state: h=null, key: g="default"} = n
      , v = x.useMemo( () => {
        let y = rt(u, i);
        return y == null ? null : {
            location: {
                pathname: y,
                search: c,
                hash: p,
                state: h,
                key: g
            },
            navigationType: r
        }
    }
    , [i, u, c, p, h, g, r]);
    return He(v != null, `<Router basename="${i}"> is not able to match the URL "${u}${c}${p}" because it does not start with the basename, so the <Router> won't render anything.`),
    v == null ? null : x.createElement(Ve.Provider, {
        value: a
    }, x.createElement(pr.Provider, {
        children: t,
        value: v
    }))
}
function Hp({children: e, location: t}) {
    return Lp(pi(e), t)
}
function pi(e, t=[]) {
    let n = [];
    return x.Children.forEach(e, (r, l) => {
        if (!x.isValidElement(r))
            return;
        let o = [...t, l];
        if (r.type === x.Fragment) {
            n.push.apply(n, pi(r.props.children, o));
            return
        }
        V(r.type === Wt, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        V(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            middleware: r.props.middleware,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = pi(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
var Zr = "get"
  , qr = "application/x-www-form-urlencoded";
function Ul(e) {
    return e != null && typeof e.tagName == "string"
}
function Vp(e) {
    return Ul(e) && e.tagName.toLowerCase() === "button"
}
function Qp(e) {
    return Ul(e) && e.tagName.toLowerCase() === "form"
}
function Kp(e) {
    return Ul(e) && e.tagName.toLowerCase() === "input"
}
function Yp(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Gp(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Yp(e)
}
var Or = null;
function Xp() {
    if (Or === null)
        try {
            new FormData(document.createElement("form"),0),
            Or = !1
        } catch {
            Or = !0
        }
    return Or
}
var Zp = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function wo(e) {
    return e != null && !Zp.has(e) ? (He(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qr}"`),
    null) : e
}
function qp(e, t) {
    let n, r, l, o, i;
    if (Qp(e)) {
        let a = e.getAttribute("action");
        r = a ? rt(a, t) : null,
        n = e.getAttribute("method") || Zr,
        l = wo(e.getAttribute("enctype")) || qr,
        o = new FormData(e)
    } else if (Vp(e) || Kp(e) && (e.type === "submit" || e.type === "image")) {
        let a = e.form;
        if (a == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || a.getAttribute("action");
        if (r = u ? rt(u, t) : null,
        n = e.getAttribute("formmethod") || a.getAttribute("method") || Zr,
        l = wo(e.getAttribute("formenctype")) || wo(a.getAttribute("enctype")) || qr,
        o = new FormData(a,e),
        !Xp()) {
            let {name: c, type: p, value: h} = e;
            if (p === "image") {
                let g = c ? `${c}.` : "";
                o.append(`${g}x`, "0"),
                o.append(`${g}y`, "0")
            } else
                c && o.append(c, h)
        }
    } else {
        if (Ul(e))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = Zr,
        r = null,
        l = qr,
        i = e
    }
    return o && l === "text/plain" && (i = o,
    o = void 0),
    {
        action: r,
        method: n.toLowerCase(),
        encType: l,
        formData: o,
        body: i
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ms(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Jp(e, t, n) {
    let r = typeof e == "string" ? new URL(e,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return r.pathname === "/" ? r.pathname = `_root.${n}` : t && rt(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.${n}` : r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`,
    r
}
async function eh(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await import(e.module);
        return t[e.id] = n,
        n
    } catch (n) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function th(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function nh(e, t, n) {
    let r = await Promise.all(e.map(async l => {
        let o = t.routes[l.route.id];
        if (o) {
            let i = await eh(o, n);
            return i.links ? i.links() : []
        }
        return []
    }
    ));
    return ih(r.flat(1).filter(th).filter(l => l.rel === "stylesheet" || l.rel === "preload").map(l => l.rel === "stylesheet" ? {
        ...l,
        rel: "prefetch",
        as: "style"
    } : {
        ...l,
        rel: "prefetch"
    }))
}
function Ma(e, t, n, r, l, o) {
    let i = (u, c) => n[c] ? u.route.id !== n[c].route.id : !0
      , a = (u, c) => {
        var p;
        return n[c].pathname !== u.pathname || ((p = n[c].route.path) == null ? void 0 : p.endsWith("*")) && n[c].params["*"] !== u.params["*"]
    }
    ;
    return o === "assets" ? t.filter( (u, c) => i(u, c) || a(u, c)) : o === "data" ? t.filter( (u, c) => {
        var h;
        let p = r.routes[u.route.id];
        if (!p || !p.hasLoader)
            return !1;
        if (i(u, c) || a(u, c))
            return !0;
        if (u.route.shouldRevalidate) {
            let g = u.route.shouldRevalidate({
                currentUrl: new URL(l.pathname + l.search + l.hash,window.origin),
                currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
                nextUrl: new URL(e,window.origin),
                nextParams: u.params,
                defaultShouldRevalidate: !0
            });
            if (typeof g == "boolean")
                return g
        }
        return !0
    }
    ) : []
}
function rh(e, t, {includeHydrateFallback: n}={}) {
    return lh(e.map(r => {
        let l = t.routes[r.route.id];
        if (!l)
            return [];
        let o = [l.module];
        return l.clientActionModule && (o = o.concat(l.clientActionModule)),
        l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)),
        n && l.hydrateFallbackModule && (o = o.concat(l.hydrateFallbackModule)),
        l.imports && (o = o.concat(l.imports)),
        o
    }
    ).flat(1))
}
function lh(e) {
    return [...new Set(e)]
}
function oh(e) {
    let t = {}
      , n = Object.keys(e).sort();
    for (let r of n)
        t[r] = e[r];
    return t
}
function ih(e, t) {
    let n = new Set;
    return new Set(t),
    e.reduce( (r, l) => {
        let o = JSON.stringify(oh(l));
        return n.has(o) || (n.add(o),
        r.push({
            key: o,
            link: l
        })),
        r
    }
    , [])
}
function ad() {
    let e = x.useContext(wn);
    return ms(e, "You must render this element inside a <DataRouterContext.Provider> element"),
    e
}
function sh() {
    let e = x.useContext(Al);
    return ms(e, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    e
}
var ps = x.createContext(void 0);
ps.displayName = "FrameworkContext";
function ud() {
    let e = x.useContext(ps);
    return ms(e, "You must render this element inside a <HydratedRouter> element"),
    e
}
function ah(e, t) {
    let n = x.useContext(ps)
      , [r,l] = x.useState(!1)
      , [o,i] = x.useState(!1)
      , {onFocus: a, onBlur: u, onMouseEnter: c, onMouseLeave: p, onTouchStart: h} = t
      , g = x.useRef(null);
    x.useEffect( () => {
        if (e === "render" && i(!0),
        e === "viewport") {
            let k = f => {
                f.forEach(d => {
                    i(d.isIntersecting)
                }
                )
            }
              , S = new IntersectionObserver(k,{
                threshold: .5
            });
            return g.current && S.observe(g.current),
            () => {
                S.disconnect()
            }
        }
    }
    , [e]),
    x.useEffect( () => {
        if (r) {
            let k = setTimeout( () => {
                i(!0)
            }
            , 100);
            return () => {
                clearTimeout(k)
            }
        }
    }
    , [r]);
    let v = () => {
        l(!0)
    }
      , y = () => {
        l(!1),
        i(!1)
    }
    ;
    return n ? e !== "intent" ? [o, g, {}] : [o, g, {
        onFocus: Rn(a, v),
        onBlur: Rn(u, y),
        onMouseEnter: Rn(c, v),
        onMouseLeave: Rn(p, y),
        onTouchStart: Rn(h, v)
    }] : [!1, g, {}]
}
function Rn(e, t) {
    return n => {
        e && e(n),
        n.defaultPrevented || t(n)
    }
}
function uh({page: e, ...t}) {
    let {router: n} = ad()
      , r = x.useMemo( () => Zc(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? x.createElement(dh, {
        page: e,
        matches: r,
        ...t
    }) : null
}
function ch(e) {
    let {manifest: t, routeModules: n} = ud()
      , [r,l] = x.useState([]);
    return x.useEffect( () => {
        let o = !1;
        return nh(e, t, n).then(i => {
            o || l(i)
        }
        ),
        () => {
            o = !0
        }
    }
    , [e, t, n]),
    r
}
function dh({page: e, matches: t, ...n}) {
    let r = bt()
      , {manifest: l, routeModules: o} = ud()
      , {basename: i} = ad()
      , {loaderData: a, matches: u} = sh()
      , c = x.useMemo( () => Ma(e, t, u, l, r, "data"), [e, t, u, l, r])
      , p = x.useMemo( () => Ma(e, t, u, l, r, "assets"), [e, t, u, l, r])
      , h = x.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let y = new Set
          , k = !1;
        if (t.forEach(f => {
            var m;
            let d = l.routes[f.route.id];
            !d || !d.hasLoader || (!c.some(w => w.route.id === f.route.id) && f.route.id in a && ((m = o[f.route.id]) != null && m.shouldRevalidate) || d.hasClientLoader ? k = !0 : y.add(f.route.id))
        }
        ),
        y.size === 0)
            return [];
        let S = Jp(e, i, "data");
        return k && y.size > 0 && S.searchParams.set("_routes", t.filter(f => y.has(f.route.id)).map(f => f.route.id).join(",")),
        [S.pathname + S.search]
    }
    , [i, a, r, l, c, t, e, o])
      , g = x.useMemo( () => rh(p, l), [p, l])
      , v = ch(p);
    return x.createElement(x.Fragment, null, h.map(y => x.createElement("link", {
        key: y,
        rel: "prefetch",
        as: "fetch",
        href: y,
        ...n
    })), g.map(y => x.createElement("link", {
        key: y,
        rel: "modulepreload",
        href: y,
        ...n
    })), v.map( ({key: y, link: k}) => x.createElement("link", {
        key: y,
        nonce: n.nonce,
        ...k
    })))
}
function fh(...e) {
    return t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        }
        )
    }
}
var cd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    cd && (window.__reactRouterVersion = "7.9.4")
} catch {}
function mh({basename: e, children: t, window: n}) {
    let r = x.useRef();
    r.current == null && (r.current = Jm({
        window: n,
        v5Compat: !0
    }));
    let l = r.current
      , [o,i] = x.useState({
        action: l.action,
        location: l.location
    })
      , a = x.useCallback(u => {
        x.startTransition( () => i(u))
    }
    , [i]);
    return x.useLayoutEffect( () => l.listen(a), [l, a]),
    x.createElement(Wp, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: l
    })
}
var dd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , O = x.forwardRef(function({onClick: t, discover: n="render", prefetch: r="none", relative: l, reloadDocument: o, replace: i, state: a, target: u, to: c, preventScrollReset: p, viewTransition: h, ...g}, v) {
    let {basename: y} = x.useContext(Ve), k = typeof c == "string" && dd.test(c), S, f = !1;
    if (typeof c == "string" && k && (S = c,
    cd))
        try {
            let M = new URL(window.location.href)
              , L = c.startsWith("//") ? new URL(M.protocol + c) : new URL(c)
              , me = rt(L.pathname, y);
            L.origin === M.origin && me != null ? c = me + L.search + L.hash : f = !0
        } catch {
            He(!1, `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let d = Ep(c, {
        relative: l
    })
      , [m,w,j] = ah(r, g)
      , P = xh(c, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: p,
        relative: l,
        viewTransition: h
    });
    function F(M) {
        t && t(M),
        M.defaultPrevented || P(M)
    }
    let C = x.createElement("a", {
        ...g,
        ...j,
        href: S || d,
        onClick: f || o ? t : F,
        ref: fh(v, w),
        target: u,
        "data-discover": !k && n === "render" ? "true" : void 0
    });
    return m && !k ? x.createElement(x.Fragment, null, C, x.createElement(uh, {
        page: d
    })) : C
});
O.displayName = "Link";
var ph = x.forwardRef(function({"aria-current": t="page", caseSensitive: n=!1, className: r="", end: l=!1, style: o, to: i, viewTransition: a, children: u, ...c}, p) {
    let h = gr(i, {
        relative: c.relative
    })
      , g = bt()
      , v = x.useContext(Al)
      , {navigator: y, basename: k} = x.useContext(Ve)
      , S = v != null && Nh(h) && a === !0
      , f = y.encodeLocation ? y.encodeLocation(h).pathname : h.pathname
      , d = g.pathname
      , m = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
    n || (d = d.toLowerCase(),
    m = m ? m.toLowerCase() : null,
    f = f.toLowerCase()),
    m && k && (m = rt(m, k) || m);
    const w = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let j = d === f || !l && d.startsWith(f) && d.charAt(w) === "/", P = m != null && (m === f || !l && m.startsWith(f) && m.charAt(f.length) === "/"), F = {
        isActive: j,
        isPending: P,
        isTransitioning: S
    }, C = j ? t : void 0, M;
    typeof r == "function" ? M = r(F) : M = [r, j ? "active" : null, P ? "pending" : null, S ? "transitioning" : null].filter(Boolean).join(" ");
    let L = typeof o == "function" ? o(F) : o;
    return x.createElement(O, {
        ...c,
        "aria-current": C,
        className: M,
        ref: p,
        style: L,
        to: i,
        viewTransition: a
    }, typeof u == "function" ? u(F) : u)
});
ph.displayName = "NavLink";
var hh = x.forwardRef( ({discover: e="render", fetcherKey: t, navigate: n, reloadDocument: r, replace: l, state: o, method: i=Zr, action: a, onSubmit: u, relative: c, preventScrollReset: p, viewTransition: h, ...g}, v) => {
    let y = wh()
      , k = kh(a, {
        relative: c
    })
      , S = i.toLowerCase() === "get" ? "get" : "post"
      , f = typeof a == "string" && dd.test(a)
      , d = m => {
        if (u && u(m),
        m.defaultPrevented)
            return;
        m.preventDefault();
        let w = m.nativeEvent.submitter
          , j = (w == null ? void 0 : w.getAttribute("formmethod")) || i;
        y(w || m.currentTarget, {
            fetcherKey: t,
            method: j,
            navigate: n,
            replace: l,
            state: o,
            relative: c,
            preventScrollReset: p,
            viewTransition: h
        })
    }
    ;
    return x.createElement("form", {
        ref: v,
        method: S,
        action: k,
        onSubmit: r ? u : d,
        ...g,
        "data-discover": !f && e === "render" ? "true" : void 0
    })
}
);
hh.displayName = "Form";
function gh(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function fd(e) {
    let t = x.useContext(wn);
    return V(t, gh(e)),
    t
}
function xh(e, {target: t, replace: n, state: r, preventScrollReset: l, relative: o, viewTransition: i}={}) {
    let a = Fp()
      , u = bt()
      , c = gr(e, {
        relative: o
    });
    return x.useCallback(p => {
        if (Gp(p, t)) {
            p.preventDefault();
            let h = n !== void 0 ? n : ar(u) === ar(c);
            a(e, {
                replace: h,
                state: r,
                preventScrollReset: l,
                relative: o,
                viewTransition: i
            })
        }
    }
    , [u, a, c, n, r, t, e, l, o, i])
}
var vh = 0
  , yh = () => `__${String(++vh)}__`;
function wh() {
    let {router: e} = fd("useSubmit")
      , {basename: t} = x.useContext(Ve)
      , n = Dp();
    return x.useCallback(async (r, l={}) => {
        let {action: o, method: i, encType: a, formData: u, body: c} = qp(r, t);
        if (l.navigate === !1) {
            let p = l.fetcherKey || yh();
            await e.fetch(p, n, l.action || o, {
                preventScrollReset: l.preventScrollReset,
                formData: u,
                body: c,
                formMethod: l.method || i,
                formEncType: l.encType || a,
                flushSync: l.flushSync
            })
        } else
            await e.navigate(l.action || o, {
                preventScrollReset: l.preventScrollReset,
                formData: u,
                body: c,
                formMethod: l.method || i,
                formEncType: l.encType || a,
                replace: l.replace,
                state: l.state,
                fromRouteId: n,
                flushSync: l.flushSync,
                viewTransition: l.viewTransition
            })
    }
    , [e, t, n])
}
function kh(e, {relative: t}={}) {
    let {basename: n} = x.useContext(Ve)
      , r = x.useContext(Qe);
    V(r, "useFormAction must be used inside a RouteContext");
    let[l] = r.matches.slice(-1)
      , o = {
        ...gr(e || ".", {
            relative: t
        })
    }
      , i = bt();
    if (e == null) {
        o.search = i.search;
        let a = new URLSearchParams(o.search)
          , u = a.getAll("index");
        if (u.some(p => p === "")) {
            a.delete("index"),
            u.filter(h => h).forEach(h => a.append("index", h));
            let p = a.toString();
            o.search = p ? `?${p}` : ""
        }
    }
    return (!e || e === ".") && l.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : qe([n, o.pathname])),
    ar(o)
}
function Nh(e, {relative: t}={}) {
    let n = x.useContext(rd);
    V(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = fd("useViewTransitionState")
      , l = gr(e, {
        relative: t
    });
    if (!n.isTransitioning)
        return !1;
    let o = rt(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , i = rt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return jl(l.pathname, i) != null || jl(l.pathname, o) != null
}
const jh = {
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About",
        "nav.contact": "Contact",
        "hero.badge": "Powered by diPencil",
        "hero.title": "Smart IT. Secure Growth.",
        "hero.subtitle": "LanWave helps businesses optimize performance, reduce downtime, and scale securely through expert IT consulting and managed services.",
        "hero.cta1": "Get a Consultation",
        "hero.cta2": "View Services",
        "hero.feature1": "Secure Infrastructure",
        "hero.feature2": "High Performance",
        "hero.feature3": "Cloud Solutions",
        "about.badge": "WHO WE ARE",
        "about.title": "Your Trusted IT Partner",
        "about.p1": "LanWave is a full-service IT consulting and managed services company dedicated to helping businesses thrive in the digital age. We combine deep technical expertise with strategic thinking to deliver solutions that drive real business value.",
        "about.p2": "From network infrastructure to cybersecurity, cloud solutions to digital transformation, we provide comprehensive IT support that lets you focus on what you do best—growing your business.",
        "about.tagline": "Empowering growth through technology.",
        "about.stat1": "Clients Served",
        "about.stat2": "Uptime Guarantee",
        "about.card1.title": "Infrastructure",
        "about.card1.desc": "Enterprise-grade systems",
        "about.card2.title": "Security",
        "about.card2.desc": "Advanced protection",
        "about.card3.title": "Performance",
        "about.card3.desc": "Optimized operations",
        "about.card4": "Support",
        "services.badge": "OUR SERVICES",
        "services.title": "Complete IT Solutions for Modern Business",
        "services.subtitle": "From consulting to implementation, we provide end-to-end IT services that drive efficiency, security, and growth.",
        "services.learnMore": "Learn More",
        "services.it-consulting": "IT Consulting",
        "services.it-consulting.desc": "Strategic technology guidance to align IT with your business goals and maximize ROI.",
        "services.managed-it": "Managed IT Services",
        "services.managed-it.desc": "Proactive monitoring, maintenance, and management of your entire IT infrastructure.",
        "services.technical-support": "Technical Support & Helpdesk",
        "services.technical-support.desc": "24/7 expert support to keep your team productive and systems running smoothly.",
        "services.network-security": "Network Infrastructure & Security",
        "services.network-security.desc": "Design, deployment, and optimization of secure, high-performance network systems.",
        "services.cloud-solutions": "Cloud & Server Solutions",
        "services.cloud-solutions.desc": "Scalable cloud migration, management, and server infrastructure services.",
        "services.cybersecurity": "Cybersecurity & Compliance",
        "services.cybersecurity.desc": "Comprehensive security solutions to protect your data and ensure regulatory compliance.",
        "services.digital-transformation": "Digital Transformation",
        "services.digital-transformation.desc": "Modern solutions to digitize operations and accelerate your business evolution.",
        "services.cctv": "CCTV & Security Systems",
        "services.cctv.desc": "Advanced surveillance and physical security infrastructure for complete protection.",
        "services.field-support": "Field Tech Support",
        "services.field-support.desc": "On-site technical assistance and hardware support wherever you need it.",
        "why.badge": "WHY CHOOSE US",
        "why.title": "The LanWave Advantage",
        "why.subtitle": "We combine technical excellence with personalized service to deliver IT solutions that truly make a difference.",
        "why.support": "24/7 Support",
        "why.support.desc": "Round-the-clock monitoring and support to keep your business running.",
        "why.certified": "Certified Engineers",
        "why.certified.desc": "Industry-certified professionals with extensive technical expertise.",
        "why.security": "Advanced Security",
        "why.security.desc": "Multi-layered security protocols to protect your critical assets.",
        "why.custom": "Custom Solutions",
        "why.custom.desc": "Tailored IT strategies designed specifically for your business needs.",
        "why.team": "Dedicated Team",
        "why.team.desc": "A committed team focused on your success and business growth.",
        "why.results": "Proven Results",
        "why.results.desc": "Track record of delivering measurable business improvements.",
        "why.partners": "Trusted by business partnerships",
        "cta.title": "Let's build your secure IT foundation.",
        "cta.subtitle": "Transform your business with enterprise-grade IT solutions. Our experts are ready to help you succeed.",
        "cta.button": "Talk to an Expert",
        "contact.badge": "GET IN TOUCH",
        "contact.title": "Ready to Transform Your IT?",
        "contact.subtitle": "Let's discuss how we can help your business thrive with the right technology solutions.",
        "contact.name": "Your Name",
        "contact.email": "Email Address",
        "contact.company": "Company Name",
        "contact.message": "Your Message",
        "contact.send": "Send Message",
        "contact.info": "Contact Information",
        "contact.email.label": "Email",
        "contact.phone.label": "Phone",
        "contact.location.label": "Location",
        "contact.hours": "Business Hours",
        "contact.weekday": "Monday - Friday",
        "contact.emergency": "Emergency Support",
        "contact.available": "24/7 Available",
        "footer.tagline": "Empowering businesses with cutting-edge IT solutions and managed services for secure, scalable growth.",
        "footer.powered": "Powered by",
        "footer.quickLinks": "Quick Links",
        "footer.services": "Services",
        "footer.connect": "Connect With Us",
        "footer.social": "Follow us on social media for updates and insights.",
        "footer.rights": "© 2025 Mostafa KAndeel. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "service.keyFeatures": "Key Features",
        "service.benefits": "Benefits",
        "service.ready": "Ready to Get Started?",
        "service.contact": "Contact us today to learn more about how this service can benefit your business.",
        "chatbox.title": "LanWave Support",
        "chatbox.online": "Online Now",
        "chatbox.welcome": "Hello! Welcome to LanWave. How can we help you today?",
        "chatbox.support": "Need technical support? Contact us directly:",
        "chatbox.placeholder": "Type your message...",
        "aboutPage.title": "About LanWave",
        "aboutPage.subtitle": "Your trusted partner for innovative IT solutions and digital transformation since 2010.",
        "aboutPage.story.title": "Our Story",
        "aboutPage.story.p1": "Founded in 2010, LanWave has been at the forefront of delivering cutting-edge IT solutions to businesses across the region. What started as a small team of passionate technologists has grown into a leading provider of comprehensive IT services.",
        "aboutPage.story.p2": "We have successfully partnered with over 500 organizations, helping them navigate the complexities of modern technology. Our commitment to excellence and innovation has earned us a reputation as a trusted advisor in the IT industry.",
        "aboutPage.story.p3": "Today, we continue to push boundaries and set new standards in IT service delivery, maintaining a 99.9% uptime guarantee and delivering solutions that drive real business value for our clients.",
        "aboutPage.stats.clients": "Happy Clients",
        "aboutPage.stats.uptime": "Uptime Guarantee",
        "aboutPage.stats.experience": "Years Experience",
        "aboutPage.stats.projects": "Projects Completed",
        "aboutPage.mission.title": "Our Mission & Vision",
        "aboutPage.mission.desc": "Driving digital transformation through innovative technology solutions.",
        "aboutPage.mission.our": "Our Mission",
        "aboutPage.mission.ourDesc": "To empower businesses with reliable, secure, and innovative IT solutions that drive growth, efficiency, and competitive advantage in the digital age.",
        "aboutPage.vision.title": "Our Vision",
        "aboutPage.vision.desc": "To be the most trusted IT services partner in the region, recognized for our technical excellence, customer service, and commitment to innovation.",
        "aboutPage.values.title": "Our Core Values",
        "aboutPage.values.subtitle": "The principles that guide everything we do.",
        "aboutPage.values.security": "Security First",
        "aboutPage.values.security.desc": "We prioritize the security and privacy of your data above all else, implementing industry-leading security measures.",
        "aboutPage.values.innovation": "Innovation",
        "aboutPage.values.innovation.desc": "We stay ahead of technology trends to bring you the most advanced and effective solutions.",
        "aboutPage.values.partnership": "Partnership",
        "aboutPage.values.partnership.desc": "We build long-term relationships with our clients, acting as an extension of your team.",
        "aboutPage.values.excellence": "Excellence",
        "aboutPage.values.excellence.desc": "We maintain the highest standards in everything we do, from service delivery to customer support.",
        "aboutPage.team.title": "Leadership Team",
        "aboutPage.team.subtitle": "Meet the experts behind our success.",
        "aboutPage.team.ceo.name": "Mostafa Kandeel",
        "aboutPage.team.ceo.role": "Chief Executive Officer",
        "aboutPage.team.ceo.desc": "20+ years of experience in IT leadership and digital transformation.",
        "aboutPage.team.cto.name": "Ahmed Kandeel",
        "aboutPage.team.cto.role": "Chief Technology Officer",
        "aboutPage.team.cto.desc": "Expert in cloud architecture and emerging technologies with 15+ years experience.",
        "aboutPage.team.director.name": "Alaa Ali",
        "aboutPage.team.director.role": "Operations Director",
        "aboutPage.team.director.desc": "Specializes in service delivery and operational excellence with 18+ years experience.",
        "aboutPage.team.lead.name": "Mostafa Mahmoud",
        "aboutPage.team.lead.role": "Technical Lead",
        "aboutPage.team.lead.desc": "Leading our technical teams with expertise in cybersecurity and infrastructure.",
        "aboutPage.cta.title": "Ready to Transform Your Business?",
        "aboutPage.cta.desc": "Let's discuss how our IT solutions can help your business thrive in the digital age.",
        "contactPage.title": "Get in Touch",
        "contactPage.subtitle": "Have a question or ready to start your project? We're here to help.",
        "contactPage.form.title": "Send us a Message",
        "contactPage.form.namePlaceholder": "Enter your full name",
        "contactPage.form.emailPlaceholder": "Enter your email address",
        "contactPage.form.companyPlaceholder": "Your company name",
        "contactPage.form.phone": "Phone Number",
        "contactPage.form.phonePlaceholder": "Your phone number",
        "contactPage.form.service": "Service Interested In",
        "contactPage.form.selectService": "Select a service",
        "contactPage.form.messagePlaceholder": "Tell us about your project or inquiry...",
        "contactPage.success.title": "Message Sent Successfully!",
        "contactPage.success.message": "Thank you for reaching out. We'll get back to you within 24 hours.",
        "contactPage.quickResponse.title": "Quick Response Guarantee",
        "contactPage.quickResponse.desc": "We respond to all inquiries within 1 hour during business hours and provide 24/7 emergency support.",
        "contactPage.available.support": "Technical Support",
        "contactPage.available.hour": "Hour",
        "contactPage.available.response": "Response Time",
        "contactPage.available.experience": "Years of Experience"
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.services": "الخدمات",
        "nav.about": "من نحن",
        "nav.contact": "اتصل بنا",
        "hero.badge": "مدعوم من diPencil",
        "hero.title": "تقنية ذكية. نمو آمن.",
        "hero.subtitle": "تساعد LanWave الشركات على تحسين الأداء وتقليل وقت التوقف والتوسع بشكل آمن من خلال الاستشارات والخدمات المُدارة لتقنية المعلومات.",
        "hero.cta1": "احصل على استشارة",
        "hero.cta2": "عرض الخدمات",
        "hero.feature1": "بنية تحتية آمنة",
        "hero.feature2": "أداء عالي",
        "hero.feature3": "حلول سحابية",
        "about.badge": "من نحن",
        "about.title": "شريكك الموثوق في تقنية المعلومات",
        "about.p1": "LanWave هي شركة استشارات وخدمات مُدارة متكاملة لتقنية المعلومات تهدف إلى مساعدة الشركات على النجاح في العصر الرقمي. نجمع بين الخبرة التقنية العميقة والتفكير الاستراتيجي لتقديم حلول تحقق قيمة تجارية حقيقية.",
        "about.p2": "من البنية التحتية للشبكات إلى الأمن السيبراني، ومن الحلول السحابية إلى التحول الرقمي، نوفر دعمًا شاملاً لتقنية المعلومات يتيح لك التركيز على ما تقوم به بشكل أفضل - تنمية عملك.",
        "about.tagline": "تمكين النمو من خلال التكنولوجيا.",
        "about.stat1": "عميل تم خدمتهم",
        "about.stat2": "ضمان وقت التشغيل",
        "about.card1.title": "البنية التحتية",
        "about.card1.desc": "أنظمة على مستوى المؤسسات",
        "about.card2.title": "الأمان",
        "about.card2.desc": "حماية متقدمة",
        "about.card3.title": "الأداء",
        "about.card3.desc": "عمليات محسّنة",
        "about.card4": "الدعم",
        "services.badge": "خدماتنا",
        "services.title": "حلول تقنية متكاملة للأعمال الحديثة",
        "services.subtitle": "من الاستشارات إلى التنفيذ، نقدم خدمات تقنية شاملة تدفع الكفاءة والأمان والنمو.",
        "services.learnMore": "اعرف المزيد",
        "services.it-consulting": "الاستشارات التقنية",
        "services.it-consulting.desc": "إرشادات تقنية استراتيجية لمواءمة تقنية المعلومات مع أهداف عملك وزيادة العائد على الاستثمار.",
        "services.managed-it": "خدمات تقنية المعلومات المُدارة",
        "services.managed-it.desc": "المراقبة والصيانة والإدارة الاستباقية لبنيتك التحتية الكاملة لتقنية المعلومات.",
        "services.technical-support": "الدعم الفني ومكتب المساعدة",
        "services.technical-support.desc": "دعم متخصص على مدار الساعة للحفاظ على إنتاجية فريقك وأنظمتك.",
        "services.network-security": "البنية التحتية للشبكات والأمن",
        "services.network-security.desc": "تصميم ونشر وتحسين أنظمة الشبكات الآمنة وعالية الأداء.",
        "services.cloud-solutions": "الحلول السحابية وخوادم",
        "services.cloud-solutions.desc": "خدمات الترحيل السحابي القابلة للتطوير والإدارة والبنية التحتية للخوادم.",
        "services.cybersecurity": "الأمن السيبراني والامتثال",
        "services.cybersecurity.desc": "حلول أمنية شاملة لحماية بياناتك وضمان الامتثال التنظيمي.",
        "services.digital-transformation": "التحول الرقمي",
        "services.digital-transformation.desc": "حلول حديثة لرقمنة العمليات وتسريع تطور أعمالك.",
        "services.cctv": "كاميرات المراقبة وأنظمة الأمن",
        "services.cctv.desc": "بنية تحتية متقدمة للمراقبة والأمن الفعلي للحماية الكاملة.",
        "services.field-support": "الدعم الفني الميداني",
        "services.field-support.desc": "المساعدة التقنية في الموقع ودعم الأجهزة أينما تحتاجها.",
        "why.badge": "لماذا تختارنا",
        "why.title": "ميزة LanWave",
        "why.subtitle": "نجمع بين التميز التقني والخدمة الشخصية لتقديم حلول تقنية تحدث فرقًا حقيقيًا.",
        "why.support": "دعم على مدار الساعة",
        "why.support.desc": "مراقبة ودعم على مدار الساعة للحفاظ على عملك.",
        "why.certified": "مهندسون معتمدون",
        "why.certified.desc": "محترفون معتمدون من الصناعة بخبرة تقنية واسعة.",
        "why.security": "أمن متقدم",
        "why.security.desc": "بروتوكولات أمنية متعددة الطبقات لحماية أصولك الحيوية.",
        "why.custom": "حلول مخصصة",
        "why.custom.desc": "استراتيجيات تقنية مصممة خصيصًا لاحتياجات عملك.",
        "why.team": "فريق مخصص",
        "why.team.desc": "فريق ملتزم يركز على نجاحك ونمو عملك.",
        "why.results": "نتائج مثبتة",
        "why.results.desc": "سجل حافل في تحقيق تحسينات تجارية قابلة للقياس.",
        "why.partners": "موثوق به من قبل شراكات الأعمال",
        "cta.title": "دعنا نبني بنيتك التحتية التقنية الآمنة.",
        "cta.subtitle": "حول عملك بحلول تقنية على مستوى المؤسسات. خبراؤنا جاهزون لمساعدتك على النجاح.",
        "cta.button": "تحدث إلى خبير",
        "contact.badge": "تواصل معنا",
        "contact.title": "هل أنت مستعد لتحويل تقنيتك؟",
        "contact.subtitle": "دعنا نناقش كيف يمكننا مساعدة عملك على الازدهار بالحلول التقنية المناسبة.",
        "contact.name": "اسمك",
        "contact.email": "البريد الإلكتروني",
        "contact.company": "اسم الشركة",
        "contact.message": "رسالتك",
        "contact.send": "إرسال الرسالة",
        "contact.info": "معلومات الاتصال",
        "contact.email.label": "البريد الإلكتروني",
        "contact.phone.label": "الهاتف",
        "contact.location.label": "الموقع",
        "contact.hours": "ساعات العمل",
        "contact.weekday": "الإثنين - الجمعة",
        "contact.emergency": "الدعم الطارئ",
        "contact.available": "متاح 24/7",
        "footer.tagline": "تمكين الشركات بحلول تقنية متطورة وخدمات مُدارة للنمو الآمن والقابل للتطوير.",
        "footer.powered": "مدعوم من",
        "footer.quickLinks": "روابط سريعة",
        "footer.services": "الخدمات",
        "footer.connect": "تواصل معنا",
        "footer.social": "تابعنا على وسائل التواصل الاجتماعي للتحديثات والرؤى.",
        "footer.rights": "© 2025 LanWave. جميع الحقوق محفوظة.",
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "service.keyFeatures": "الميزات الرئيسية",
        "service.benefits": "الفوائد",
        "service.ready": "هل أنت مستعد للبدء؟",
        "service.contact": "اتصل بنا اليوم لمعرفة المزيد حول كيف يمكن لهذه الخدمة أن تفيد عملك.",
        "chatbox.title": "دعم LanWave",
        "chatbox.online": "متصل الآن",
        "chatbox.welcome": "مرحباً! أهلاً بك في LanWave. كيف يمكننا مساعدتك اليوم؟",
        "chatbox.support": "تحتاج دعم فني؟ تواصل معنا مباشرة:",
        "chatbox.placeholder": "اكتب رسالتك...",
        "aboutPage.title": "عن LanWave",
        "aboutPage.subtitle": "شريكك الموثوق للحلول التقنية المبتكرة والتحول الرقمي منذ عام 2010.",
        "aboutPage.story.title": "قصتنا",
        "aboutPage.story.p1": "تأسست LanWave في عام 2010، وكانت في طليعة تقديم حلول تقنية متطورة للشركات في جميع أنحاء المنطقة. بدأنا كفريق صغير من التقنيين المتحمسين ونمونا لنصبح مزود رائد للخدمات التقنية الشاملة.",
        "aboutPage.story.p2": "نجحنا في الشراكة مع أكثر من 500 مؤسسة، ساعدناهم في التعامل مع تعقيدات التكنولوجيا الحديثة. التزامنا بالتميز والابتكار منحنا سمعة طيبة كمستشار موثوق في صناعة تقنية المعلومات.",
        "aboutPage.story.p3": "اليوم، نواصل تجاوز الحدود ووضع معايير جديدة في تقديم خدمات تقنية المعلومات، مع الحفاظ على ضمان 99.9٪ من وقت التشغيل وتقديم حلول تحقق قيمة تجارية حقيقية لعملائنا.",
        "aboutPage.stats.clients": "عميل سعيد",
        "aboutPage.stats.uptime": "ضمان وقت التشغيل",
        "aboutPage.stats.experience": "سنوات من الخبرة",
        "aboutPage.stats.projects": "مشروع مكتمل",
        "aboutPage.mission.title": "مهمتنا ورؤيتنا",
        "aboutPage.mission.desc": "قيادة التحول الرقمي من خلال حلول تقنية مبتكرة.",
        "aboutPage.mission.our": "مهمتنا",
        "aboutPage.mission.ourDesc": "تمكين الشركات بحلول تقنية موثوقة وآمنة ومبتكرة تدفع النمو والكفاءة والميزة التنافسية في العصر الرقمي.",
        "aboutPage.vision.title": "رؤيتنا",
        "aboutPage.vision.desc": "أن نكون الشريك الأكثر ثقة في خدمات تقنية المعلومات في المنطقة، معروفين بتميزنا التقني وخدمة العملاء والتزامنا بالابتكار.",
        "aboutPage.values.title": "قيمنا الأساسية",
        "aboutPage.values.subtitle": "المبادئ التي توجه كل ما نقوم به.",
        "aboutPage.values.security": "الأمان أولاً",
        "aboutPage.values.security.desc": "نعطي الأولوية لأمن وخصوصية بياناتك قبل كل شيء، من خلال تطبيق تدابير أمنية رائدة في الصناعة.",
        "aboutPage.values.innovation": "الابتكار",
        "aboutPage.values.innovation.desc": "نبقى في طليعة اتجاهات التكنولوجيا لنقدم لك أكثر الحلول تقدماً وفعالية.",
        "aboutPage.values.partnership": "الشراكة",
        "aboutPage.values.partnership.desc": "نبني علاقات طويلة الأمد مع عملائنا، ونعمل كامتداد لفريقك.",
        "aboutPage.values.excellence": "التميز",
        "aboutPage.values.excellence.desc": "نحافظ على أعلى المعايير في كل ما نقوم به، من تقديم الخدمات إلى دعم العملاء.",
        "aboutPage.team.title": "فريق القيادة",
        "aboutPage.team.subtitle": "تعرف على الخبراء وراء نجاحنا.",
        "aboutPage.team.ceo.name": "أحمد المنصوري",
        "aboutPage.team.ceo.role": "الرئيس التنفيذي",
        "aboutPage.team.ceo.desc": "أكثر من 20 عاماً من الخبرة في قيادة تقنية المعلومات والتحول الرقمي.",
        "aboutPage.team.cto.name": "سارة جونسون",
        "aboutPage.team.cto.role": "رئيسة التكنولوجيا",
        "aboutPage.team.cto.desc": "خبيرة في هندسة السحابة والتقنيات الناشئة مع أكثر من 15 عاماً من الخبرة.",
        "aboutPage.team.director.name": "محمد الخليفة",
        "aboutPage.team.director.role": "مدير العمليات",
        "aboutPage.team.director.desc": "متخصص في تقديم الخدمات والتميز التشغيلي مع أكثر من 18 عاماً من الخبرة.",
        "aboutPage.team.lead.name": "جينيفر تشين",
        "aboutPage.team.lead.role": "قائدة التقنية",
        "aboutPage.team.lead.desc": "تقود فرقنا التقنية بخبرة في الأمن السيبراني والبنية التحتية.",
        "aboutPage.cta.title": "هل أنت مستعد لتحويل عملك؟",
        "aboutPage.cta.desc": "دعنا نناقش كيف يمكن لحلولنا التقنية أن تساعد عملك على النمو في العصر الرقمي.",
        "contactPage.title": "تواصل معنا",
        "contactPage.subtitle": "لديك سؤال أو مستعد لبدء مشروعك؟ نحن هنا للمساعدة.",
        "contactPage.form.title": "أرسل لنا رسالة",
        "contactPage.form.namePlaceholder": "أدخل اسمك الكامل",
        "contactPage.form.emailPlaceholder": "أدخل بريدك الإلكتروني",
        "contactPage.form.companyPlaceholder": "اسم شركتك",
        "contactPage.form.phone": "رقم الهاتف",
        "contactPage.form.phonePlaceholder": "رقم هاتفك",
        "contactPage.form.service": "الخدمة المهتم بها",
        "contactPage.form.selectService": "اختر خدمة",
        "contactPage.form.messagePlaceholder": "أخبرنا عن مشروعك أو استفسارك...",
        "contactPage.success.title": "تم إرسال الرسالة بنجاح!",
        "contactPage.success.message": "شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.",
        "contactPage.quickResponse.title": "ضمان الاستجابة السريعة",
        "contactPage.quickResponse.desc": "نحن نرد على جميع الاستفسارات خلال ساعة واحدة خلال ساعات العمل ونوفر دعماً طارئاً على مدار الساعة.",
        "contactPage.available.support": "الدعم الفني",
        "contactPage.available.hour": "ساعة",
        "contactPage.available.response": "وقت الاستجابة",
        "contactPage.available.experience": "سنوات من الخبرة"
    }
}
  , md = x.createContext(void 0);
function Sh({children: e}) {
    const [t,n] = x.useState("en");
    x.useEffect( () => {
        document.documentElement.lang = t,
        document.documentElement.dir = t === "ar" ? "rtl" : "ltr"
    }
    , [t]);
    const r = () => {
        n(o => o === "en" ? "ar" : "en")
    }
      , l = o => jh[t][o] || o;
    return s.jsx(md.Provider, {
        value: {
            language: t,
            toggleLanguage: r,
            t: l,
            dir: t === "ar" ? "rtl" : "ltr"
        },
        children: e
    })
}
function be() {
    const e = x.useContext(md);
    if (e === void 0)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return e
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bh = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , z = (e, t) => {
    const n = x.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: o=2, absoluteStrokeWidth: i, className: a="", children: u, ...c}, p) => x.createElement("svg", {
        ref: p,
        ...bh,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${Eh(e)}`, a].join(" "),
        ...c
    }, [...t.map( ([h,g]) => x.createElement(h, g)), ...Array.isArray(u) ? u : [u]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = z("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = z("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = z("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = z("Camera", [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = z("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lh = z("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = z("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = z("Cloud", [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = z("Facebook", [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hi = z("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = z("Headphones", [["path", {
    d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
    key: "1xhozi"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = z("Lightbulb", [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = z("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = z("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = z("MapPin", [["path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    key: "2oe9fu"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th = z("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = z("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = z("Network", [["rect", {
    x: "16",
    y: "16",
    width: "6",
    height: "6",
    rx: "1",
    key: "4q2zg0"
}], ["rect", {
    x: "2",
    y: "16",
    width: "6",
    height: "6",
    rx: "1",
    key: "8cvhb9"
}], ["rect", {
    x: "9",
    y: "2",
    width: "6",
    height: "6",
    rx: "1",
    key: "1egb70"
}], ["path", {
    d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
    key: "1jsf9p"
}], ["path", {
    d: "M12 12V8",
    key: "2874zd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = z("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zh = z("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh = z("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = z("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = z("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh = z("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = z("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = z("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wd = z("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = z("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oh = z("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = z("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dh = z("Video", [["path", {
    d: "m22 8-6 4 6 4V8Z",
    key: "50v9me"
}], ["rect", {
    width: "14",
    height: "12",
    x: "2",
    y: "6",
    rx: "2",
    ry: "2",
    key: "1rqjg6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = z("Workflow", [["rect", {
    width: "8",
    height: "8",
    x: "3",
    y: "3",
    rx: "2",
    key: "by2w9f"
}], ["path", {
    d: "M7 11v4a2 2 0 0 0 2 2h4",
    key: "xkn7yn"
}], ["rect", {
    width: "8",
    height: "8",
    x: "13",
    y: "13",
    rx: "2",
    key: "1cgmvn"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = z("Wrench", [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jd = z("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = z("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]]);
function Ah() {
    const [e,t] = x.useState(!1)
      , {language: n, toggleLanguage: r, t: l} = be();
    return s.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-[#1E1E2F]/95 backdrop-blur-md border-b border-white/10",
        children: [s.jsx("div", {
            className: "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",
            children: s.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [s.jsx(O, {
                    to: "/",
                    className: "flex items-center",
                    children: s.jsx("img", {
                        src: "/images/logo3-1536x478.png",
                        alt: "LanWave",
                        className: "h-12"
                    })
                }), s.jsxs("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [s.jsx(O, {
                        to: "/",
                        className: "text-gray-300 hover:text-[#FF6B35] transition-colors font-medium",
                        children: l("nav.home")
                    }), s.jsx(O, {
                        to: "/services",
                        className: "text-gray-300 hover:text-[#FF6B35] transition-colors font-medium",
                        children: l("nav.services")
                    }), s.jsx(O, {
                        to: "/about",
                        className: "text-gray-300 hover:text-[#FF6B35] transition-colors font-medium",
                        children: l("nav.about")
                    }), s.jsx(O, {
                        to: "/contact",
                        className: "text-gray-300 hover:text-[#FF6B35] transition-colors font-medium",
                        children: l("nav.contact")
                    }), s.jsxs("button", {
                        onClick: r,
                        className: "flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10",
                        children: [s.jsx(hi, {
                            className: "w-4 h-4 text-[#FF6B35]"
                        }), s.jsx("span", {
                            className: "text-white text-sm font-medium",
                            children: n === "en" ? "العربية" : "English"
                        })]
                    }), s.jsx(O, {
                        to: "/#contact",
                        className: "px-6 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full text-white font-semibold hover:scale-105 transition-transform",
                        children: l("hero.cta1")
                    })]
                }), s.jsx("button", {
                    onClick: () => t(!e),
                    className: "md:hidden p-2 text-white hover:text-[#FF6B35] transition-colors",
                    children: e ? s.jsx(jd, {
                        className: "w-6 h-6"
                    }) : s.jsx(Th, {
                        className: "w-6 h-6"
                    })
                })]
            })
        }), e && s.jsx("div", {
            className: "md:hidden bg-[#1E1E2F] border-t border-white/10",
            children: s.jsxs("div", {
                className: "px-6 py-4 space-y-3",
                children: [s.jsx(O, {
                    to: "/",
                    className: "block text-gray-300 hover:text-[#FF6B35] transition-colors font-medium py-2",
                    onClick: () => t(!1),
                    children: l("nav.home")
                }), s.jsx(O, {
                    to: "/services",
                    className: "block text-gray-300 hover:text-[#FF6B35] transition-colors font-medium py-2",
                    onClick: () => t(!1),
                    children: l("nav.services")
                }), s.jsx(O, {
                    to: "/about",
                    className: "block text-gray-300 hover:text-[#FF6B35] transition-colors font-medium py-2",
                    onClick: () => t(!1),
                    children: l("nav.about")
                }), s.jsx(O, {
                    to: "/contact",
                    className: "block text-gray-300 hover:text-[#FF6B35] transition-colors font-medium py-2",
                    onClick: () => t(!1),
                    children: l("nav.contact")
                }), s.jsxs("button", {
                    onClick: r,
                    className: "flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 w-full justify-center",
                    children: [s.jsx(hi, {
                        className: "w-4 h-4 text-[#FF6B35]"
                    }), s.jsx("span", {
                        className: "text-white text-sm font-medium",
                        children: n === "en" ? "العربية" : "English"
                    })]
                }), s.jsx(O, {
                    to: "/#contact",
                    className: "block text-center px-6 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full text-white font-semibold mt-4",
                    onClick: () => t(!1),
                    children: l("hero.cta1")
                })]
            })
        })]
    })
}
function Uh() {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState("")
      , {t: l} = be()
      , o = i => {
        i.preventDefault(),
        n.trim() && r("")
    }
    ;
    return s.jsxs(s.Fragment, {
        children: [!e && s.jsx("button", {
            onClick: () => t(!0),
            className: "fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce",
            children: s.jsx(Ba, {
                className: "w-8 h-8 text-white"
            })
        }), e && s.jsxs("div", {
            className: "fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200",
            children: [s.jsxs("div", {
                className: "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] p-4 flex items-center justify-between",
                children: [s.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [s.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center",
                        children: s.jsx(Ba, {
                            className: "w-6 h-6 text-white"
                        })
                    }), s.jsxs("div", {
                        children: [s.jsx("h3", {
                            className: "text-white font-bold text-lg",
                            children: l("chatbox.title")
                        }), s.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [s.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-green-400 animate-pulse"
                            }), s.jsx("span", {
                                className: "text-white/90 text-xs",
                                children: l("chatbox.online")
                            })]
                        })]
                    })]
                }), s.jsx("button", {
                    onClick: () => t(!1),
                    className: "text-white/80 hover:text-white transition-colors",
                    children: s.jsx(jd, {
                        className: "w-6 h-6"
                    })
                })]
            }), s.jsxs("div", {
                className: "flex-1 p-6 space-y-4 bg-gray-50 max-h-[400px] overflow-y-auto",
                children: [s.jsxs("div", {
                    className: "flex gap-3 animate-fade-in",
                    children: [s.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center flex-shrink-0",
                        children: s.jsx("span", {
                            className: "text-white font-bold text-sm",
                            children: "LW"
                        })
                    }), s.jsx("div", {
                        className: "bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]",
                        children: s.jsx("p", {
                            className: "text-gray-800 text-sm leading-relaxed",
                            children: l("chatbox.welcome")
                        })
                    })]
                }), s.jsxs("div", {
                    className: "flex gap-3 animate-fade-in",
                    style: {
                        animationDelay: "0.5s"
                    },
                    children: [s.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center flex-shrink-0",
                        children: s.jsx("span", {
                            className: "text-white font-bold text-sm",
                            children: "LW"
                        })
                    }), s.jsxs("div", {
                        className: "bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]",
                        children: [s.jsx("p", {
                            className: "text-gray-800 text-sm leading-relaxed mb-3",
                            children: l("chatbox.support")
                        }), s.jsxs("div", {
                            className: "space-y-2",
                            children: [s.jsxs("a", {
                                href: "tel:+966123456789",
                                className: "flex items-center gap-2 text-[#FF6B35] hover:text-[#F7931E] transition-colors",
                                children: [s.jsx(Sl, {
                                    className: "w-4 h-4"
                                }), s.jsx("span", {
                                    className: "text-sm font-semibold",
                                    children: "+966 12 345 6789"
                                })]
                            }), s.jsxs("a", {
                                href: "tel:+966987654321",
                                className: "flex items-center gap-2 text-[#FF6B35] hover:text-[#F7931E] transition-colors",
                                children: [s.jsx(Sl, {
                                    className: "w-4 h-4"
                                }), s.jsx("span", {
                                    className: "text-sm font-semibold",
                                    children: "+966 98 765 4321"
                                })]
                            }), s.jsxs("a", {
                                href: "mailto:support@lanwave.com",
                                className: "flex items-center gap-2 text-[#FF6B35] hover:text-[#F7931E] transition-colors",
                                children: [s.jsx(vs, {
                                    className: "w-4 h-4"
                                }), s.jsx("span", {
                                    className: "text-sm font-semibold",
                                    children: "support@lanwave.com"
                                })]
                            })]
                        })]
                    })]
                })]
            }), s.jsx("form", {
                onSubmit: o,
                className: "p-4 bg-white border-t border-gray-200",
                children: s.jsxs("div", {
                    className: "flex gap-2",
                    children: [s.jsx("input", {
                        type: "text",
                        value: n,
                        onChange: i => r(i.target.value),
                        placeholder: l("chatbox.placeholder"),
                        className: "flex-1 px-4 py-3 rounded-full border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none text-sm"
                    }), s.jsx("button", {
                        type: "submit",
                        disabled: !n.trim(),
                        className: "w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100",
                        children: s.jsx(yd, {
                            className: "w-5 h-5 text-white"
                        })
                    })]
                })
            })]
        }), s.jsx("style", {
            children: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `
        })]
    })
}
function Wh() {
    const {pathname: e} = bt();
    return x.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [e]),
    null
}
function Hh() {
    const {t: e} = be();
    return s.jsxs("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E1E2F] via-[#0a0a15] to-[#1E1E2F] pt-20",
        children: [s.jsxs("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [s.jsxs("div", {
                className: "absolute inset-0 opacity-30",
                children: [s.jsx("div", {
                    className: "absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6B35] rounded-full filter blur-[128px] animate-pulse"
                }), s.jsx("div", {
                    className: "absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#F7931E] rounded-full filter blur-[128px] animate-pulse delay-1000"
                })]
            }), s.jsx("div", {
                className: "absolute inset-0",
                children: [...Array(20)].map( (t, n) => s.jsx("div", {
                    className: "absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan",
                    style: {
                        top: `${n * 5}%`,
                        left: "0",
                        right: "0",
                        animationDelay: `${n * .2}s`,
                        opacity: .1
                    }
                }, n))
            })]
        }), s.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center py-12 sm:py-16",
            children: [s.jsxs("div", {
                className: "animate-fade-in-up",
                children: [s.jsx("div", {
                    className: "inline-block mb-4 sm:mb-6 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/20 to-[#F7931E]/20 rounded-full border border-[#FF6B35]/30 backdrop-blur-sm",
                    children: s.jsx("span", {
                        className: "text-[#FF6B35] text-xs sm:text-sm font-medium",
                        children: e("hero.badge")
                    })
                }), s.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent leading-tight px-4",
                    children: e("hero.title")
                }), s.jsx("p", {
                    className: "text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4",
                    children: e("hero.subtitle")
                }), s.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4",
                    children: [s.jsxs("button", {
                        className: "w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full font-semibold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base",
                        children: [e("hero.cta1"), s.jsx(hs, {
                            className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                        })]
                    }), s.jsxs("button", {
                        className: "w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base",
                        children: [s.jsx(zh, {
                            className: "w-4 h-4 sm:w-5 sm:h-5"
                        }), e("hero.cta2")]
                    })]
                })]
            }), s.jsx("div", {
                className: "mt-12 sm:mt-16 lg:mt-20 animate-fade-in-up delay-300 px-4",
                children: s.jsxs("div", {
                    className: "relative max-w-4xl mx-auto",
                    children: [s.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-xl sm:rounded-2xl blur-xl opacity-30 animate-pulse"
                    }), s.jsx("div", {
                        className: "relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl",
                        children: s.jsx("div", {
                            className: "grid grid-cols-3 gap-4 sm:gap-6",
                            children: [{
                                icon: "🔒",
                                key: "hero.feature1"
                            }, {
                                icon: "⚡",
                                key: "hero.feature2"
                            }, {
                                icon: "☁️",
                                key: "hero.feature3"
                            }].map( (t, n) => s.jsxs("div", {
                                className: "text-center",
                                children: [s.jsx("div", {
                                    className: "text-3xl sm:text-4xl mb-1 sm:mb-2",
                                    children: t.icon
                                }), s.jsx("div", {
                                    className: "text-xs sm:text-sm text-gray-300",
                                    children: e(t.key)
                                })]
                            }, n))
                        })
                    })]
                })
            })]
        })]
    })
}
function Vh() {
    const {t: e} = be();
    return s.jsx("section", {
        id: "about",
        className: "py-16 sm:py-20 lg:py-24 bg-white",
        children: s.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12",
            children: s.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center",
                children: [s.jsxs("div", {
                    className: "relative order-2 lg:order-1",
                    children: [s.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#F7931E]/20 rounded-3xl blur-2xl"
                    }), s.jsx("div", {
                        className: "relative bg-gradient-to-br from-[#1E1E2F] to-[#0a0a15] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl",
                        children: s.jsxs("div", {
                            className: "grid grid-cols-2 gap-3 sm:gap-4",
                            children: [s.jsxs("div", {
                                className: "bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:scale-105 transition-transform",
                                children: [s.jsx(ys, {
                                    className: "w-8 h-8 sm:w-12 sm:h-12 text-[#FF6B35] mb-2 sm:mb-4"
                                }), s.jsx("div", {
                                    className: "text-white font-semibold text-sm sm:text-base mb-1",
                                    children: e("about.card1.title")
                                }), s.jsx("div", {
                                    className: "text-gray-400 text-xs sm:text-sm",
                                    children: e("about.card1.desc")
                                })]
                            }), s.jsxs("div", {
                                className: "bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:scale-105 transition-transform mt-4 sm:mt-8",
                                children: [s.jsx(xr, {
                                    className: "w-8 h-8 sm:w-12 sm:h-12 text-[#F7931E] mb-2 sm:mb-4"
                                }), s.jsx("div", {
                                    className: "text-white font-semibold text-sm sm:text-base mb-1",
                                    children: e("about.card2.title")
                                }), s.jsx("div", {
                                    className: "text-gray-400 text-xs sm:text-sm",
                                    children: e("about.card2.desc")
                                })]
                            }), s.jsxs("div", {
                                className: "bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:scale-105 transition-transform",
                                children: [s.jsx(Sd, {
                                    className: "w-8 h-8 sm:w-12 sm:h-12 text-[#FF6B35] mb-2 sm:mb-4"
                                }), s.jsx("div", {
                                    className: "text-white font-semibold text-sm sm:text-base mb-1",
                                    children: e("about.card3.title")
                                }), s.jsx("div", {
                                    className: "text-gray-400 text-xs sm:text-sm",
                                    children: e("about.card3.desc")
                                })]
                            }), s.jsx("div", {
                                className: "bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center mt-4 sm:mt-8",
                                children: s.jsxs("div", {
                                    className: "text-center",
                                    children: [s.jsx("div", {
                                        className: "text-3xl sm:text-4xl font-bold text-white mb-1",
                                        children: "24/7"
                                    }), s.jsx("div", {
                                        className: "text-white/90 text-xs sm:text-sm",
                                        children: e("about.card4")
                                    })]
                                })
                            })]
                        })
                    })]
                }), s.jsxs("div", {
                    className: "order-1 lg:order-2",
                    children: [s.jsx("div", {
                        className: "inline-block mb-4 px-4 py-2 bg-[#FF6B35]/10 rounded-full",
                        children: s.jsx("span", {
                            className: "text-[#FF6B35] text-xs sm:text-sm font-semibold",
                            children: e("about.badge")
                        })
                    }), s.jsx("h2", {
                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E2F] mb-4 sm:mb-6",
                        children: e("about.title")
                    }), s.jsx("p", {
                        className: "text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed",
                        children: e("about.p1")
                    }), s.jsx("p", {
                        className: "text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed",
                        children: e("about.p2")
                    }), s.jsx("div", {
                        className: "inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent font-bold text-lg sm:text-xl",
                        children: e("about.tagline")
                    }), s.jsxs("div", {
                        className: "mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6",
                        children: [s.jsxs("div", {
                            children: [s.jsx("div", {
                                className: "text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-2",
                                children: "500+"
                            }), s.jsx("div", {
                                className: "text-sm sm:text-base text-gray-600",
                                children: e("about.stat1")
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("div", {
                                className: "text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-2",
                                children: "99.9%"
                            }), s.jsx("div", {
                                className: "text-sm sm:text-base text-gray-600",
                                children: e("about.stat2")
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}
const Qh = [{
    id: "it-consulting",
    icon: gd,
    gradient: "from-[#FF6B35] to-[#FF8C42]"
}, {
    id: "managed-it",
    icon: ys,
    gradient: "from-[#F7931E] to-[#FFA500]"
}, {
    id: "technical-support",
    icon: hd,
    gradient: "from-[#FF6B35] to-[#F7931E]"
}, {
    id: "network-security",
    icon: vd,
    gradient: "from-[#FF8C42] to-[#FF6B35]"
}, {
    id: "cloud-solutions",
    icon: pd,
    gradient: "from-[#F7931E] to-[#FF6B35]"
}, {
    id: "cybersecurity",
    icon: xr,
    gradient: "from-[#FF6B35] to-[#FFA500]"
}, {
    id: "digital-transformation",
    icon: $h,
    gradient: "from-[#FFA500] to-[#F7931E]"
}, {
    id: "cctv",
    icon: Ph,
    gradient: "from-[#FF6B35] to-[#FF8C42]"
}, {
    id: "field-support",
    icon: Nd,
    gradient: "from-[#F7931E] to-[#FF6B35]"
}];
function Kh() {
    const {t: e} = be();
    return s.jsx("section", {
        id: "services",
        className: "py-24 bg-gradient-to-b from-gray-50 to-white",
        children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",
            children: [s.jsxs("div", {
                className: "text-center mb-16",
                children: [s.jsx("div", {
                    className: "inline-block mb-4 px-4 py-2 bg-[#FF6B35]/10 rounded-full",
                    children: s.jsx("span", {
                        className: "text-[#FF6B35] text-sm font-semibold",
                        children: e("services.badge")
                    })
                }), s.jsx("h2", {
                    className: "text-4xl sm:text-5xl font-bold text-[#1E1E2F] mb-6",
                    children: e("services.title")
                }), s.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: e("services.subtitle")
                })]
            }), s.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: Qh.map( (t, n) => {
                    const r = t.icon;
                    return s.jsxs(O, {
                        to: `/service/${t.id}`,
                        className: "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden",
                        children: [s.jsx("div", {
                            className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-full blur-2xl",
                            style: {
                                background: "linear-gradient(to bottom right, #FF6B35, #F7931E)"
                            }
                        }), s.jsx("div", {
                            className: `inline-flex p-4 rounded-xl bg-gradient-to-br ${t.gradient} mb-6 group-hover:scale-110 transition-transform shadow-lg`,
                            children: s.jsx(r, {
                                className: "w-8 h-8 text-white"
                            })
                        }), s.jsx("h3", {
                            className: "text-xl font-bold text-[#1E1E2F] mb-3 group-hover:text-[#FF6B35] transition-colors",
                            children: e(`services.${t.id}`)
                        }), s.jsx("p", {
                            className: "text-gray-600 mb-6 leading-relaxed",
                            children: e(`services.${t.id}.desc`)
                        }), s.jsxs("div", {
                            className: "text-[#FF6B35] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all",
                            children: [e("services.learnMore"), s.jsx("span", {
                                className: "text-xl",
                                children: "→"
                            })]
                        })]
                    }, n)
                }
                )
            })]
        })
    })
}
const Yh = [{
    icon: xs,
    key: "support"
}, {
    icon: gs,
    key: "certified"
}, {
    icon: xr,
    key: "security"
}, {
    icon: Bh,
    key: "custom"
}, {
    icon: ws,
    key: "team"
}, {
    icon: kd,
    key: "results"
}]
  , Ia = [{
    name: "AWS",
    logo: "/images/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png"
}, {
    name: "Google Cloud",
    logo: "/images/R1.png"
}, {
    name: "Microsoft",
    logo: "/images/R2.png"
}, {
    name: "Salesforce",
    logo: "/images/Sf-marketingcloud-logo-e1587790570648-450x271.png"
}, {
    name: "Hostinger",
    logo: "/images/Hostinger_logo.png"
}];
function Gh() {
    const {t: e} = be();
    return s.jsxs("section", {
        className: "relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#1E1E2F] via-[#0a0a15] to-[#1E1E2F]",
        children: [s.jsxs("div", {
            className: "absolute inset-0 opacity-20",
            children: [s.jsx("div", {
                className: "absolute top-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6B35] rounded-full filter blur-[128px]"
            }), s.jsx("div", {
                className: "absolute bottom-1/4 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#F7931E] rounded-full filter blur-[128px]"
            })]
        }), s.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12",
            children: [s.jsxs("div", {
                className: "text-center mb-12 sm:mb-16",
                children: [s.jsx("div", {
                    className: "inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10",
                    children: s.jsx("span", {
                        className: "text-[#FF6B35] text-xs sm:text-sm font-semibold",
                        children: e("why.badge")
                    })
                }), s.jsx("h2", {
                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6",
                    children: e("why.title")
                }), s.jsx("p", {
                    className: "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto",
                    children: e("why.subtitle")
                })]
            }), s.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20",
                children: Yh.map( (t, n) => {
                    const r = t.icon;
                    return s.jsxs("div", {
                        className: "group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 hover:border-[#FF6B35]/50 transition-all duration-300 hover:-translate-y-1",
                        children: [s.jsx("div", {
                            className: "inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] mb-4 sm:mb-6 group-hover:scale-110 transition-transform",
                            children: s.jsx(r, {
                                className: "w-5 h-5 sm:w-6 sm:h-6 text-white"
                            })
                        }), s.jsx("h3", {
                            className: "text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3",
                            children: e(`why.${t.key}`)
                        }), s.jsx("p", {
                            className: "text-sm sm:text-base text-gray-300 leading-relaxed",
                            children: e(`why.${t.key}.desc`)
                        })]
                    }, n)
                }
                )
            }), s.jsx("div", {
                className: "text-center mb-8 sm:mb-10",
                children: s.jsx("h3", {
                    className: "text-xl sm:text-2xl font-bold text-white mb-2",
                    children: e("why.partners")
                })
            }), s.jsx("div", {
                className: "relative overflow-hidden mb-8 sm:mb-12",
                children: s.jsx("div", {
                    className: "flex animate-scroll-infinite",
                    children: [...Ia, ...Ia].map( (t, n) => s.jsx("div", {
                        className: "flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",
                        children: s.jsx("div", {
                            className: "bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10 hover:border-[#FF6B35]/50 hover:bg-white/20 transition-all",
                            children: s.jsx("img", {
                                src: t.logo,
                                alt: t.name,
                                className: "h-8 sm:h-10 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                            })
                        })
                    }, n))
                })
            }), s.jsx("div", {
                className: "flex items-center justify-center gap-3 sm:gap-4",
                children: s.jsx("div", {
                    className: "bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 border border-white/10",
                    children: s.jsxs("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        children: [s.jsx("img", {
                            src: "/images/pencil-white.png",
                            alt: "diPencil",
                            className: "h-6 sm:h-8 w-auto object-contain"
                        }), s.jsxs("div", {
                            className: "border-l border-white/20 pl-2 sm:pl-3",
                            children: [s.jsx("div", {
                                className: "flex items-center gap-1 mb-0.5",
                                children: [...Array(5)].map( (t, n) => s.jsx(Ih, {
                                    className: `w-3 h-3 sm:w-4 sm:h-4 ${n < 4 ? "fill-[#F7931E] text-[#F7931E]" : "fill-gray-400 text-gray-400"}`
                                }, n))
                            }), s.jsxs("div", {
                                className: "text-white font-bold text-sm sm:text-base",
                                children: ["4.8/5 ", s.jsx("span", {
                                    className: "text-gray-400 font-normal text-xs sm:text-sm",
                                    children: "1,208 Reviews"
                                })]
                            })]
                        })]
                    })
                })
            })]
        }), s.jsx("style", {
            children: `
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `
        })]
    })
}
function Xh() {
    const {t: e} = be();
    return s.jsxs("section", {
        className: "py-16 sm:py-20 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] relative overflow-hidden",
        children: [s.jsx("div", {
            className: "absolute inset-0 opacity-20",
            children: s.jsx("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px"
                }
            })
        }), s.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center",
            children: [s.jsx("h2", {
                className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6",
                children: e("cta.title")
            }), s.jsx("p", {
                className: "text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto",
                children: e("cta.subtitle")
            }), s.jsxs("button", {
                className: "group px-8 sm:px-10 py-4 sm:py-5 bg-white rounded-full font-bold text-[#FF6B35] shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto text-base sm:text-lg",
                children: [e("cta.button"), s.jsx(hs, {
                    className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
                })]
            })]
        })]
    })
}
function Zh() {
    const {t: e} = be()
      , [t,n] = x.useState({
        name: "",
        email: "",
        company: "",
        message: ""
    })
      , r = o => {
        o.preventDefault(),
        console.log("Form submitted:", t)
    }
      , l = o => {
        n(i => ({
            ...i,
            [o.target.name]: o.target.value
        }))
    }
    ;
    return s.jsx("section", {
        id: "contact",
        className: "py-16 sm:py-20 lg:py-24 bg-white",
        children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12",
            children: [s.jsxs("div", {
                className: "text-center mb-12 sm:mb-16",
                children: [s.jsx("div", {
                    className: "inline-block mb-4 px-4 py-2 bg-[#FF6B35]/10 rounded-full",
                    children: s.jsx("span", {
                        className: "text-[#FF6B35] text-xs sm:text-sm font-semibold",
                        children: e("contact.badge")
                    })
                }), s.jsx("h2", {
                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E2F] mb-4 sm:mb-6",
                    children: e("contact.title")
                }), s.jsx("p", {
                    className: "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto",
                    children: e("contact.subtitle")
                })]
            }), s.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12",
                children: [s.jsx("div", {
                    children: s.jsxs("form", {
                        onSubmit: r,
                        className: "space-y-5 sm:space-y-6",
                        children: [s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "name",
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: e("contact.name")
                            }), s.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                value: t.name,
                                onChange: l,
                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all text-sm sm:text-base",
                                required: !0
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: e("contact.email")
                            }), s.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                value: t.email,
                                onChange: l,
                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all text-sm sm:text-base",
                                required: !0
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "company",
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: e("contact.company")
                            }), s.jsx("input", {
                                type: "text",
                                id: "company",
                                name: "company",
                                value: t.company,
                                onChange: l,
                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all text-sm sm:text-base"
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "message",
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: e("contact.message")
                            }), s.jsx("textarea", {
                                id: "message",
                                name: "message",
                                value: t.message,
                                onChange: l,
                                rows: 5,
                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all resize-none text-sm sm:text-base",
                                required: !0
                            })]
                        }), s.jsx("button", {
                            type: "submit",
                            className: "w-full px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-xl font-semibold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base",
                            children: e("contact.send")
                        })]
                    })
                }), s.jsx("div", {
                    className: "lg:pl-6",
                    children: s.jsxs("div", {
                        className: "bg-gradient-to-br from-[#1E1E2F] to-[#0a0a15] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white h-full relative overflow-hidden",
                        children: [s.jsx("div", {
                            className: "absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#FF6B35] rounded-full filter blur-[128px] opacity-20"
                        }), s.jsxs("div", {
                            className: "relative z-10",
                            children: [s.jsx("h3", {
                                className: "text-xl sm:text-2xl font-bold mb-6 sm:mb-8",
                                children: e("contact.info")
                            }), s.jsxs("div", {
                                className: "space-y-5 sm:space-y-6",
                                children: [s.jsxs("div", {
                                    className: "flex items-start gap-3 sm:gap-4",
                                    children: [s.jsx("div", {
                                        className: "p-2.5 sm:p-3 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-lg flex-shrink-0",
                                        children: s.jsx(vs, {
                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                        })
                                    }), s.jsxs("div", {
                                        children: [s.jsx("div", {
                                            className: "font-semibold mb-1 text-sm sm:text-base",
                                            children: e("contact.email.label")
                                        }), s.jsx("div", {
                                            className: "text-gray-300 text-sm sm:text-base",
                                            children: "info@lanwave.com"
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-start gap-3 sm:gap-4",
                                    children: [s.jsx("div", {
                                        className: "p-2.5 sm:p-3 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-lg flex-shrink-0",
                                        children: s.jsx(Sl, {
                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                        })
                                    }), s.jsxs("div", {
                                        children: [s.jsx("div", {
                                            className: "font-semibold mb-1 text-sm sm:text-base",
                                            children: e("contact.phone.label")
                                        }), s.jsx("div", {
                                            className: "text-gray-300 text-sm sm:text-base",
                                            children: "+1 (555) 123-4567"
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-start gap-3 sm:gap-4",
                                    children: [s.jsx("div", {
                                        className: "p-2.5 sm:p-3 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-lg flex-shrink-0",
                                        children: s.jsx(xd, {
                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                        })
                                    }), s.jsxs("div", {
                                        children: [s.jsx("div", {
                                            className: "font-semibold mb-1 text-sm sm:text-base",
                                            children: e("contact.location.label")
                                        }), s.jsxs("div", {
                                            className: "text-gray-300 text-sm sm:text-base",
                                            children: ["123 Tech Boulevard", s.jsx("br", {}), "Silicon Valley, CA 94025"]
                                        })]
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10",
                                children: [s.jsx("div", {
                                    className: "text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4",
                                    children: e("contact.hours")
                                }), s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [s.jsxs("div", {
                                        className: "flex justify-between text-sm sm:text-base",
                                        children: [s.jsx("span", {
                                            className: "text-gray-300",
                                            children: e("contact.weekday")
                                        }), s.jsx("span", {
                                            className: "text-white font-semibold",
                                            children: "9:00 AM - 6:00 PM"
                                        })]
                                    }), s.jsxs("div", {
                                        className: "flex justify-between text-sm sm:text-base",
                                        children: [s.jsx("span", {
                                            className: "text-gray-300",
                                            children: e("contact.emergency")
                                        }), s.jsx("span", {
                                            className: "text-[#F7931E] font-semibold",
                                            children: e("contact.available")
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}
function vr() {
    const {t: e} = be();
    return s.jsx("footer", {
        className: "bg-gradient-to-br from-[#1E1E2F] via-[#0a0a15] to-[#1E1E2F] text-white py-12 sm:py-16",
        children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12",
            children: [s.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12",
                children: [s.jsxs("div", {
                    className: "col-span-1 sm:col-span-2 lg:col-span-1",
                    children: [s.jsx(O, {
                        to: "/",
                        className: "inline-block mb-4",
                        children: s.jsx("img", {
                            src: "/logo3-1536x478.png",
                            alt: "LanWave",
                            className: "h-10 sm:h-12 w-auto"
                        })
                    }), s.jsx("p", {
                        className: "text-gray-400 leading-relaxed mb-4 text-sm sm:text-base",
                        children: e("footer.tagline")
                    }), s.jsxs("div", {
                        className: "text-xs sm:text-sm text-gray-500",
                        children: [e("footer.powered"), " ", s.jsx("span", {
                            className: "text-[#FF6B35] font-semibold",
                            children: "diPencil Studio"
                        })]
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h4", {
                        className: "font-bold text-base sm:text-lg mb-4",
                        children: e("footer.quickLinks")
                    }), s.jsxs("ul", {
                        className: "space-y-2 sm:space-y-3",
                        children: [s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("nav.home")
                            })
                        }), s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/#services",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("nav.services")
                            })
                        }), s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/#about",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("nav.about")
                            })
                        }), s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/#contact",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("nav.contact")
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h4", {
                        className: "font-bold text-base sm:text-lg mb-4",
                        children: e("footer.services")
                    }), s.jsxs("ul", {
                        className: "space-y-2 sm:space-y-3",
                        children: [s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/service/it-consulting",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("services.it-consulting")
                            })
                        }), s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/service/managed-it",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("services.managed-it")
                            })
                        }), s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/service/cybersecurity",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("services.cybersecurity")
                            })
                        }), s.jsx("li", {
                            children: s.jsx(O, {
                                to: "/service/cloud-solutions",
                                className: "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm sm:text-base",
                                children: e("services.cloud-solutions")
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h4", {
                        className: "font-bold text-base sm:text-lg mb-4",
                        children: e("footer.connect")
                    }), s.jsx("p", {
                        className: "text-gray-400 mb-4 text-sm sm:text-base",
                        children: e("footer.social")
                    }), s.jsxs("div", {
                        className: "flex gap-3 sm:gap-4",
                        children: [s.jsx("a", {
                            href: "#",
                            className: "p-2.5 sm:p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-[#FF6B35] hover:to-[#F7931E] transition-all duration-300 group",
                            children: s.jsx(_h, {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors"
                            })
                        }), s.jsx("a", {
                            href: "#",
                            className: "p-2.5 sm:p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-[#FF6B35] hover:to-[#F7931E] transition-all duration-300 group",
                            children: s.jsx(Oh, {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors"
                            })
                        }), s.jsx("a", {
                            href: "#",
                            className: "p-2.5 sm:p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-[#FF6B35] hover:to-[#F7931E] transition-all duration-300 group",
                            children: s.jsx(Rh, {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors"
                            })
                        })]
                    })]
                })]
            }), s.jsxs("div", {
                className: "pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left",
                children: [s.jsx("div", {
                    className: "text-gray-400 text-xs sm:text-sm",
                    children: e("footer.rights")
                }), s.jsxs("div", {
                    className: "flex gap-4 sm:gap-6 text-xs sm:text-sm",
                    children: [s.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-[#FF6B35] transition-colors",
                        children: e("footer.privacy")
                    }), s.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-[#FF6B35] transition-colors",
                        children: e("footer.terms")
                    })]
                })]
            })]
        })
    })
}
function qh() {
    return s.jsxs(s.Fragment, {
        children: [s.jsx(Hh, {}), s.jsx(Vh, {}), s.jsx(Kh, {}), s.jsx(Gh, {}), s.jsx(Xh, {}), s.jsx(Zh, {}), s.jsx(vr, {})]
    })
}
const Jh = {
    "it-consulting": {
        icon: "💡",
        features: {
            en: ["Strategic IT Planning", "Technology Assessment", "Digital Strategy Development", "IT Roadmap Creation", "Cost Optimization", "Vendor Management"],
            ar: ["التخطيط الاستراتيجي لتقنية المعلومات", "تقييم التكنولوجيا", "تطوير الاستراتيجية الرقمية", "إنشاء خارطة طريق تقنية المعلومات", "تحسين التكاليف", "إدارة الموردين"]
        },
        benefits: {
            en: ["Align technology with business goals", "Reduce IT costs", "Improve operational efficiency", "Make informed technology decisions"],
            ar: ["مواءمة التكنولوجيا مع أهداف العمل", "تقليل تكاليف تقنية المعلومات", "تحسين الكفاءة التشغيلية", "اتخاذ قرارات تقنية مدروسة"]
        }
    },
    "managed-it": {
        icon: "🖥️",
        features: {
            en: ["24/7 System Monitoring", "Proactive Maintenance", "Patch Management", "Performance Optimization", "Backup & Recovery", "IT Asset Management"],
            ar: ["مراقبة الأنظمة على مدار الساعة", "الصيانة الاستباقية", "إدارة التحديثات", "تحسين الأداء", "النسخ الاحتياطي والاسترداد", "إدارة أصول تقنية المعلومات"]
        },
        benefits: {
            en: ["Reduce downtime", "Predictable IT costs", "Focus on core business", "Access to expert team"],
            ar: ["تقليل وقت التوقف", "تكاليف تقنية معلومات متوقعة", "التركيز على العمل الأساسي", "الوصول إلى فريق خبراء"]
        }
    },
    "technical-support": {
        icon: "🎧",
        features: {
            en: ["24/7 Help Desk", "Remote Support", "Ticket Management", "User Training", "Issue Resolution", "Multi-language Support"],
            ar: ["مكتب مساعدة على مدار الساعة", "الدعم عن بُعد", "إدارة التذاكر", "تدريب المستخدمين", "حل المشكلات", "دعم متعدد اللغات"]
        },
        benefits: {
            en: ["Fast response times", "Minimal disruption", "Increased productivity", "User satisfaction"],
            ar: ["أوقات استجابة سريعة", "أقل قدر من الاضطراب", "زيادة الإنتاجية", "رضا المستخدم"]
        }
    },
    "network-security": {
        icon: "🔐",
        features: {
            en: ["Network Design", "Infrastructure Setup", "Firewall Configuration", "VPN Solutions", "Network Monitoring", "Security Audits"],
            ar: ["تصميم الشبكات", "إعداد البنية التحتية", "تكوين جدار الحماية", "حلول VPN", "مراقبة الشبكة", "تدقيق الأمان"]
        },
        benefits: {
            en: ["Secure network infrastructure", "High-performance connectivity", "Scalable solutions", "Reduced security risks"],
            ar: ["بنية تحتية شبكية آمنة", "اتصال عالي الأداء", "حلول قابلة للتوسع", "تقليل المخاطر الأمنية"]
        }
    },
    "cloud-solutions": {
        icon: "☁️",
        features: {
            en: ["Cloud Migration", "Cloud Infrastructure", "Hybrid Cloud Solutions", "Cloud Backup", "Server Management", "Cloud Optimization"],
            ar: ["الترحيل السحابي", "البنية التحتية السحابية", "حلول السحابة الهجينة", "النسخ الاحتياطي السحابي", "إدارة الخوادم", "تحسين السحابة"]
        },
        benefits: {
            en: ["Scalability & flexibility", "Cost savings", "Improved collaboration", "Business continuity"],
            ar: ["قابلية التوسع والمرونة", "توفير التكاليف", "تحسين التعاون", "استمرارية الأعمال"]
        }
    },
    cybersecurity: {
        icon: "🛡️",
        features: {
            en: ["Security Assessment", "Threat Detection", "Incident Response", "Compliance Management", "Security Training", "Penetration Testing"],
            ar: ["تقييم الأمان", "كشف التهديدات", "الاستجابة للحوادث", "إدارة الامتثال", "التدريب الأمني", "اختبار الاختراق"]
        },
        benefits: {
            en: ["Protect sensitive data", "Meet compliance requirements", "Prevent cyber attacks", "Build customer trust"],
            ar: ["حماية البيانات الحساسة", "تلبية متطلبات الامتثال", "منع الهجمات السيبرانية", "بناء ثقة العملاء"]
        }
    },
    "digital-transformation": {
        icon: "🚀",
        features: {
            en: ["Process Automation", "Digital Strategy", "Legacy System Modernization", "Workflow Optimization", "Change Management", "Analytics & Insights"],
            ar: ["أتمتة العمليات", "الاستراتيجية الرقمية", "تحديث الأنظمة القديمة", "تحسين سير العمل", "إدارة التغيير", "التحليلات والرؤى"]
        },
        benefits: {
            en: ["Increased efficiency", "Better customer experience", "Competitive advantage", "Data-driven decisions"],
            ar: ["زيادة الكفاءة", "تجربة أفضل للعملاء", "ميزة تنافسية", "قرارات مبنية على البيانات"]
        }
    },
    cctv: {
        icon: "📹",
        features: {
            en: ["CCTV Installation", "Access Control Systems", "Remote Monitoring", "Video Analytics", "Storage Solutions", "System Integration"],
            ar: ["تركيب كاميرات المراقبة", "أنظمة التحكم في الوصول", "المراقبة عن بُعد", "تحليلات الفيديو", "حلول التخزين", "تكامل الأنظمة"]
        },
        benefits: {
            en: ["Enhanced security", "Crime prevention", "Remote surveillance", "Evidence collection"],
            ar: ["أمان محسّن", "منع الجريمة", "المراقبة عن بُعد", "جمع الأدلة"]
        }
    },
    "field-support": {
        icon: "🔧",
        features: {
            en: ["On-site Support", "Hardware Installation", "Equipment Repair", "Emergency Response", "Preventive Maintenance", "Equipment Upgrades"],
            ar: ["الدعم في الموقع", "تركيب الأجهزة", "إصلاح المعدات", "الاستجابة الطارئة", "الصيانة الوقائية", "ترقية المعدات"]
        },
        benefits: {
            en: ["Quick on-site response", "Minimal downtime", "Expert technicians", "Flexible scheduling"],
            ar: ["استجابة سريعة في الموقع", "أقل وقت توقف", "فنيون خبراء", "جدولة مرنة"]
        }
    }
};
function eg() {
    const {serviceId: e} = Cp()
      , {t, language: n} = be()
      , r = Jh[e];
    if (!r)
        return s.jsx("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center pt-20",
            children: s.jsxs("div", {
                className: "text-center px-4",
                children: [s.jsx("h1", {
                    className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-4",
                    children: n === "en" ? "Service Not Found" : "الخدمة غير موجودة"
                }), s.jsx(O, {
                    to: "/",
                    className: "text-[#FF6B35] hover:underline",
                    children: n === "en" ? "Return to Home" : "العودة للرئيسية"
                })]
            })
        });
    const l = r.features[n]
      , o = r.benefits[n];
    return s.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [s.jsxs("div", {
            className: "pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-[#1E1E2F] via-[#0a0a15] to-[#1E1E2F] relative overflow-hidden",
            children: [s.jsxs("div", {
                className: "absolute inset-0 opacity-20",
                children: [s.jsx("div", {
                    className: "absolute top-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6B35] rounded-full filter blur-[128px]"
                }), s.jsx("div", {
                    className: "absolute bottom-1/4 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#F7931E] rounded-full filter blur-[128px]"
                })]
            }), s.jsxs("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12",
                children: [s.jsxs(O, {
                    to: "/",
                    className: "inline-flex items-center gap-2 text-gray-300 hover:text-[#FF6B35] transition-colors mb-6 sm:mb-8 text-sm sm:text-base",
                    children: [s.jsx(Fh, {
                        className: "w-4 h-4 sm:w-5 sm:h-5"
                    }), s.jsx("span", {
                        children: n === "en" ? "Back to Home" : "العودة للرئيسية"
                    })]
                }), s.jsxs("div", {
                    className: "flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6",
                    children: [s.jsx("div", {
                        className: "text-5xl sm:text-6xl",
                        children: r.icon
                    }), s.jsx("h1", {
                        className: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white",
                        children: t(`services.${e}`)
                    })]
                }), s.jsx("p", {
                    className: "text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl",
                    children: t(`services.${e}.desc`)
                })]
            })]
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20",
            children: [s.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 lg:gap-16",
                children: [s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-2xl sm:text-3xl font-bold text-[#1E1E2F] mb-6 sm:mb-8",
                        children: t("service.keyFeatures")
                    }), s.jsx("div", {
                        className: "space-y-3 sm:space-y-4",
                        children: l.map( (i, a) => s.jsxs("div", {
                            className: "flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors",
                            children: [s.jsx("div", {
                                className: "flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] flex items-center justify-center",
                                children: s.jsx(Lh, {
                                    className: "w-3 h-3 sm:w-4 sm:h-4 text-white"
                                })
                            }), s.jsx("span", {
                                className: "text-gray-700 font-medium text-sm sm:text-base",
                                children: i
                            })]
                        }, a))
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-2xl sm:text-3xl font-bold text-[#1E1E2F] mb-6 sm:mb-8",
                        children: t("service.benefits")
                    }), s.jsx("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: o.map( (i, a) => s.jsxs("div", {
                            className: "flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5 rounded-xl border border-[#FF6B35]/20",
                            children: [s.jsx("div", {
                                className: "flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] flex items-center justify-center",
                                children: s.jsx("span", {
                                    className: "text-white font-bold text-sm sm:text-base",
                                    children: a + 1
                                })
                            }), s.jsx("span", {
                                className: "text-gray-700 font-medium text-base sm:text-lg",
                                children: i
                            })]
                        }, a))
                    })]
                })]
            }), s.jsxs("div", {
                className: "mt-16 sm:mt-20 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center",
                children: [s.jsx("h2", {
                    className: "text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4",
                    children: t("service.ready")
                }), s.jsx("p", {
                    className: "text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto",
                    children: t("service.contact")
                }), s.jsx(O, {
                    to: "/#contact",
                    className: "inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white rounded-full font-bold text-[#FF6B35] shadow-2xl hover:scale-105 transition-transform text-sm sm:text-base",
                    children: t("cta.button")
                })]
            })]
        }), s.jsx(vr, {})]
    })
}
const tg = [{
    id: "it-consulting",
    icon: gd,
    color: "from-orange-400 to-orange-600"
}, {
    id: "managed-it",
    icon: ys,
    color: "from-orange-500 to-orange-700"
}, {
    id: "technical-support",
    icon: hd,
    color: "from-orange-400 to-orange-600"
}, {
    id: "network-security",
    icon: vd,
    color: "from-orange-400 to-orange-600"
}, {
    id: "cloud-solutions",
    icon: pd,
    color: "from-orange-500 to-orange-700"
}, {
    id: "cybersecurity",
    icon: xr,
    color: "from-orange-500 to-orange-700"
}, {
    id: "digital-transformation",
    icon: Mh,
    color: "from-orange-400 to-orange-600"
}, {
    id: "cctv",
    icon: Dh,
    color: "from-orange-400 to-orange-600"
}, {
    id: "field-support",
    icon: Nd,
    color: "from-orange-500 to-orange-700"
}];
function ng() {
    const {t: e} = be();
    return s.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: [s.jsxs("div", {
            className: "pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-[#1E1E2F] via-[#0a0a15] to-[#1E1E2F] relative overflow-hidden",
            children: [s.jsxs("div", {
                className: "absolute inset-0 opacity-20",
                children: [s.jsx("div", {
                    className: "absolute top-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6B35] rounded-full filter blur-[128px]"
                }), s.jsx("div", {
                    className: "absolute bottom-1/4 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#F7931E] rounded-full filter blur-[128px]"
                })]
            }), s.jsxs("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center",
                children: [s.jsx("div", {
                    className: "inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10",
                    children: s.jsx("span", {
                        className: "text-[#FF6B35] text-xs sm:text-sm font-semibold",
                        children: e("services.badge")
                    })
                }), s.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6",
                    children: e("services.title")
                }), s.jsx("p", {
                    className: "text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto",
                    children: e("services.subtitle")
                })]
            })]
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20",
            children: [s.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
                children: tg.map(t => {
                    const n = t.icon;
                    return s.jsxs(O, {
                        to: `/service/${t.id}`,
                        className: "group relative bg-white rounded-3xl shadow-lg p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2",
                        children: [s.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                        }), s.jsxs("div", {
                            className: "relative",
                            children: [s.jsx("div", {
                                className: `inline-flex p-5 rounded-2xl bg-gradient-to-br ${t.color} mb-6 group-hover:scale-110 transition-transform`,
                                children: s.jsx(n, {
                                    className: "w-10 h-10 text-white",
                                    strokeWidth: 2
                                })
                            }), s.jsx("h3", {
                                className: "text-xl sm:text-2xl font-bold text-[#1E1E2F] mb-4 leading-tight",
                                children: e(`services.${t.id}`)
                            }), s.jsx("p", {
                                className: "text-gray-600 text-sm sm:text-base leading-relaxed mb-6",
                                children: e(`services.${t.id}.desc`)
                            }), s.jsxs("div", {
                                className: "flex items-center text-[#FF6B35] font-bold text-sm",
                                children: [s.jsx("span", {
                                    children: e("services.learnMore")
                                }), s.jsx(hs, {
                                    className: "w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                                })]
                            })]
                        })]
                    }, t.id)
                }
                )
            }), s.jsxs("div", {
                className: "mt-20 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-3xl p-10 sm:p-16 text-center shadow-2xl",
                children: [s.jsx("h2", {
                    className: "text-3xl sm:text-4xl font-bold text-white mb-4",
                    children: e("services.customSolution")
                }), s.jsx("p", {
                    className: "text-white/95 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed",
                    children: e("services.customDesc")
                }), s.jsx(O, {
                    to: "/contact",
                    className: "inline-block px-10 sm:px-12 py-4 sm:py-5 bg-white rounded-full font-bold text-[#FF6B35] text-lg shadow-2xl hover:scale-105 transition-transform",
                    children: e("cta.button")
                })]
            })]
        }), s.jsx(vr, {})]
    })
}
const rg = [{
    key: "clients",
    value: "500+",
    icon: ws
}, {
    key: "uptime",
    value: "99.9%",
    icon: kd
}, {
    key: "experience",
    value: "15+",
    icon: gs
}, {
    key: "projects",
    value: "1000+",
    icon: wd
}]
  , lg = [{
    icon: xr,
    key: "security"
}, {
    icon: Sd,
    key: "innovation"
}, {
    icon: ws,
    key: "partnership"
}, {
    icon: gs,
    key: "excellence"
}]
  , og = [{
    key: "ceo",
    role: "ceo"
}, {
    key: "cto",
    role: "cto"
}, {
    key: "director",
    role: "director"
}, {
    key: "lead",
    role: "lead"
}];
function ig() {
    const {t: e} = be();
    return s.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: [s.jsxs("div", {
            className: "pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-[#1E1E2F] via-[#0a0a15] to-[#1E1E2F] relative overflow-hidden",
            children: [s.jsxs("div", {
                className: "absolute inset-0 opacity-20",
                children: [s.jsx("div", {
                    className: "absolute top-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6B35] rounded-full filter blur-[128px]"
                }), s.jsx("div", {
                    className: "absolute bottom-1/4 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#F7931E] rounded-full filter blur-[128px]"
                })]
            }), s.jsxs("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center",
                children: [s.jsx("div", {
                    className: "inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10",
                    children: s.jsx("span", {
                        className: "text-[#FF6B35] text-xs sm:text-sm font-semibold",
                        children: e("about.badge")
                    })
                }), s.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6",
                    children: e("aboutPage.title")
                }), s.jsx("p", {
                    className: "text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto",
                    children: e("aboutPage.subtitle")
                })]
            })]
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20",
            children: [s.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20",
                children: [s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-3xl sm:text-4xl font-bold text-[#1E1E2F] mb-6",
                        children: e("aboutPage.story.title")
                    }), s.jsxs("div", {
                        className: "space-y-4 text-gray-700 leading-relaxed",
                        children: [s.jsx("p", {
                            className: "text-base sm:text-lg",
                            children: e("aboutPage.story.p1")
                        }), s.jsx("p", {
                            className: "text-base sm:text-lg",
                            children: e("aboutPage.story.p2")
                        }), s.jsx("p", {
                            className: "text-base sm:text-lg",
                            children: e("aboutPage.story.p3")
                        })]
                    })]
                }), s.jsx("div", {
                    className: "grid grid-cols-2 gap-4 sm:gap-6",
                    children: rg.map( (t, n) => {
                        const r = t.icon;
                        return s.jsxs("div", {
                            className: "bg-gradient-to-br from-[#FF6B35]/10 to-[#F7931E]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#FF6B35]/20 text-center",
                            children: [s.jsx("div", {
                                className: "inline-flex p-3 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] mb-4",
                                children: s.jsx(r, {
                                    className: "w-6 h-6 text-white"
                                })
                            }), s.jsx("div", {
                                className: "text-3xl sm:text-4xl font-bold text-[#1E1E2F] mb-2",
                                children: t.value
                            }), s.jsx("div", {
                                className: "text-sm sm:text-base text-gray-600",
                                children: e(`aboutPage.stats.${t.key}`)
                            })]
                        }, n)
                    }
                    )
                })]
            }), s.jsxs("div", {
                className: "mb-20",
                children: [s.jsxs("div", {
                    className: "text-center mb-12 sm:mb-16",
                    children: [s.jsx("h2", {
                        className: "text-3xl sm:text-4xl font-bold text-[#1E1E2F] mb-4",
                        children: e("aboutPage.mission.title")
                    }), s.jsx("p", {
                        className: "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto",
                        children: e("aboutPage.mission.desc")
                    })]
                }), s.jsx("div", {
                    className: "bg-gradient-to-br from-[#1E1E2F] to-[#0a0a15] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white",
                    children: s.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-8 sm:gap-12",
                        children: [s.jsxs("div", {
                            children: [s.jsxs("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [s.jsx(wd, {
                                    className: "w-8 h-8 text-[#FF6B35]"
                                }), s.jsx("h3", {
                                    className: "text-2xl font-bold",
                                    children: e("aboutPage.mission.our")
                                })]
                            }), s.jsx("p", {
                                className: "text-gray-300 leading-relaxed",
                                children: e("aboutPage.mission.ourDesc")
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsxs("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [s.jsx(hi, {
                                    className: "w-8 h-8 text-[#F7931E]"
                                }), s.jsx("h3", {
                                    className: "text-2xl font-bold",
                                    children: e("aboutPage.vision.title")
                                })]
                            }), s.jsx("p", {
                                className: "text-gray-300 leading-relaxed",
                                children: e("aboutPage.vision.desc")
                            })]
                        })]
                    })
                })]
            }), s.jsxs("div", {
                className: "mb-20",
                children: [s.jsxs("div", {
                    className: "text-center mb-12 sm:mb-16",
                    children: [s.jsx("h2", {
                        className: "text-3xl sm:text-4xl font-bold text-[#1E1E2F] mb-4",
                        children: e("aboutPage.values.title")
                    }), s.jsx("p", {
                        className: "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto",
                        children: e("aboutPage.values.subtitle")
                    })]
                }), s.jsx("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
                    children: lg.map( (t, n) => {
                        const r = t.icon;
                        return s.jsxs("div", {
                            className: "group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-[#FF6B35] hover:shadow-xl transition-all duration-300 hover:-translate-y-2",
                            children: [s.jsx("div", {
                                className: "inline-flex p-3 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] mb-4 group-hover:scale-110 transition-transform",
                                children: s.jsx(r, {
                                    className: "w-6 h-6 text-white"
                                })
                            }), s.jsx("h3", {
                                className: "text-xl font-bold text-[#1E1E2F] mb-3",
                                children: e(`aboutPage.values.${t.key}`)
                            }), s.jsx("p", {
                                className: "text-gray-600 text-sm leading-relaxed",
                                children: e(`aboutPage.values.${t.key}.desc`)
                            })]
                        }, n)
                    }
                    )
                })]
            }), s.jsxs("div", {
                className: "mb-20",
                children: [s.jsxs("div", {
                    className: "text-center mb-12 sm:mb-16",
                    children: [s.jsx("h2", {
                        className: "text-3xl sm:text-4xl font-bold text-[#1E1E2F] mb-4",
                        children: e("aboutPage.team.title")
                    }), s.jsx("p", {
                        className: "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto",
                        children: e("aboutPage.team.subtitle")
                    })]
                }), s.jsx("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
                    children: og.map( (t, n) => s.jsxs("div", {
                        className: "group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300",
                        children: [s.jsx("div", {
                            className: "w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center text-white text-3xl sm:text-4xl font-bold",
                            children: e(`aboutPage.team.${t.key}.name`).charAt(0)
                        }), s.jsx("h3", {
                            className: "text-lg sm:text-xl font-bold text-[#1E1E2F] mb-2",
                            children: e(`aboutPage.team.${t.key}.name`)
                        }), s.jsx("p", {
                            className: "text-[#FF6B35] font-semibold mb-3 text-sm sm:text-base",
                            children: e(`aboutPage.team.${t.key}.role`)
                        }), s.jsx("p", {
                            className: "text-gray-600 text-sm leading-relaxed",
                            children: e(`aboutPage.team.${t.key}.desc`)
                        })]
                    }, n))
                })]
            }), s.jsxs("div", {
                className: "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center",
                children: [s.jsx(xs, {
                    className: "w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4"
                }), s.jsx("h2", {
                    className: "text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4",
                    children: e("aboutPage.cta.title")
                }), s.jsx("p", {
                    className: "text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto",
                    children: e("aboutPage.cta.desc")
                }), s.jsx("a", {
                    href: "/contact",
                    className: "inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white rounded-full font-bold text-[#FF6B35] shadow-2xl hover:scale-105 transition-transform text-sm sm:text-base",
                    children: e("cta.button")
                })]
            })]
        }), s.jsx(vr, {})]
    })
}
function sg() {
    const {t: e} = be()
      , [t,n] = x.useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
    })
      , [r,l] = x.useState(!1)
      , o = a => {
        a.preventDefault(),
        l(!0),
        setTimeout( () => {
            l(!1),
            n({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: ""
            })
        }
        , 3e3)
    }
      , i = a => {
        n({
            ...t,
            [a.target.name]: a.target.value
        })
    }
    ;
    return s.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: [s.jsxs("div", {
            className: "pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-[#1E1E2F] via-[#0a0a15] to-[#1E1E2F] relative overflow-hidden",
            children: [s.jsxs("div", {
                className: "absolute inset-0 opacity-20",
                children: [s.jsx("div", {
                    className: "absolute top-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6B35] rounded-full filter blur-[128px]"
                }), s.jsx("div", {
                    className: "absolute bottom-1/4 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#F7931E] rounded-full filter blur-[128px]"
                })]
            }), s.jsxs("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center",
                children: [s.jsx("div", {
                    className: "inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10",
                    children: s.jsx("span", {
                        className: "text-[#FF6B35] text-xs sm:text-sm font-semibold",
                        children: e("contact.badge")
                    })
                }), s.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6",
                    children: e("contactPage.title")
                }), s.jsx("p", {
                    className: "text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto",
                    children: e("contactPage.subtitle")
                })]
            })]
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20",
            children: [s.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16",
                children: [s.jsx("div", {
                    className: "lg:col-span-2",
                    children: s.jsxs("div", {
                        className: "bg-white rounded-3xl shadow-lg border border-gray-200 p-6 sm:p-8 lg:p-10",
                        children: [s.jsx("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-[#1E1E2F] mb-6 sm:mb-8",
                            children: e("contactPage.form.title")
                        }), r ? s.jsxs("div", {
                            className: "flex flex-col items-center justify-center py-12",
                            children: [s.jsx(Ch, {
                                className: "w-16 h-16 sm:w-20 sm:h-20 text-green-500 mb-4"
                            }), s.jsx("h3", {
                                className: "text-xl sm:text-2xl font-bold text-[#1E1E2F] mb-2",
                                children: e("contactPage.success.title")
                            }), s.jsx("p", {
                                className: "text-gray-600 text-center",
                                children: e("contactPage.success.message")
                            })]
                        }) : s.jsxs("form", {
                            onSubmit: o,
                            className: "space-y-5 sm:space-y-6",
                            children: [s.jsxs("div", {
                                className: "grid sm:grid-cols-2 gap-5 sm:gap-6",
                                children: [s.jsxs("div", {
                                    children: [s.jsxs("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: [e("contact.name"), " *"]
                                    }), s.jsx("input", {
                                        type: "text",
                                        name: "name",
                                        value: t.name,
                                        onChange: i,
                                        required: !0,
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all",
                                        placeholder: e("contactPage.form.namePlaceholder")
                                    })]
                                }), s.jsxs("div", {
                                    children: [s.jsxs("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: [e("contact.email"), " *"]
                                    }), s.jsx("input", {
                                        type: "email",
                                        name: "email",
                                        value: t.email,
                                        onChange: i,
                                        required: !0,
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all",
                                        placeholder: e("contactPage.form.emailPlaceholder")
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "grid sm:grid-cols-2 gap-5 sm:gap-6",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: e("contact.company")
                                    }), s.jsx("input", {
                                        type: "text",
                                        name: "company",
                                        value: t.company,
                                        onChange: i,
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all",
                                        placeholder: e("contactPage.form.companyPlaceholder")
                                    })]
                                }), s.jsxs("div", {
                                    children: [s.jsx("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: e("contactPage.form.phone")
                                    }), s.jsx("input", {
                                        type: "tel",
                                        name: "phone",
                                        value: t.phone,
                                        onChange: i,
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all",
                                        placeholder: e("contactPage.form.phonePlaceholder")
                                    })]
                                })]
                            }), s.jsxs("div", {
                                children: [s.jsx("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: e("contactPage.form.service")
                                }), s.jsxs("select", {
                                    name: "service",
                                    value: t.service,
                                    onChange: i,
                                    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all",
                                    children: [s.jsx("option", {
                                        value: "",
                                        children: e("contactPage.form.selectService")
                                    }), s.jsx("option", {
                                        value: "it-consulting",
                                        children: e("services.it-consulting")
                                    }), s.jsx("option", {
                                        value: "managed-it",
                                        children: e("services.managed-it")
                                    }), s.jsx("option", {
                                        value: "technical-support",
                                        children: e("services.technical-support")
                                    }), s.jsx("option", {
                                        value: "network-security",
                                        children: e("services.network-security")
                                    }), s.jsx("option", {
                                        value: "cloud-solutions",
                                        children: e("services.cloud-solutions")
                                    }), s.jsx("option", {
                                        value: "cybersecurity",
                                        children: e("services.cybersecurity")
                                    }), s.jsx("option", {
                                        value: "digital-transformation",
                                        children: e("services.digital-transformation")
                                    }), s.jsx("option", {
                                        value: "cctv",
                                        children: e("services.cctv")
                                    }), s.jsx("option", {
                                        value: "field-support",
                                        children: e("services.field-support")
                                    })]
                                })]
                            }), s.jsxs("div", {
                                children: [s.jsxs("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [e("contact.message"), " *"]
                                }), s.jsx("textarea", {
                                    name: "message",
                                    value: t.message,
                                    onChange: i,
                                    required: !0,
                                    rows: 6,
                                    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all resize-none",
                                    placeholder: e("contactPage.form.messagePlaceholder")
                                })]
                            }), s.jsxs("button", {
                                type: "submit",
                                className: "w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2",
                                children: [s.jsx(yd, {
                                    className: "w-5 h-5"
                                }), s.jsx("span", {
                                    children: e("contact.send")
                                })]
                            })]
                        })]
                    })
                }), s.jsxs("div", {
                    className: "space-y-6",
                    children: [s.jsxs("div", {
                        className: "bg-gradient-to-br from-[#1E1E2F] to-[#0a0a15] rounded-2xl p-6 sm:p-8 text-white",
                        children: [s.jsx("h3", {
                            className: "text-xl sm:text-2xl font-bold mb-6",
                            children: e("contact.info")
                        }), s.jsxs("div", {
                            className: "space-y-6",
                            children: [s.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [s.jsx("div", {
                                    className: "flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center",
                                    children: s.jsx(vs, {
                                        className: "w-6 h-6"
                                    })
                                }), s.jsxs("div", {
                                    children: [s.jsx("div", {
                                        className: "text-sm text-gray-400 mb-1",
                                        children: e("contact.email.label")
                                    }), s.jsx("a", {
                                        href: "mailto:info@lanwave.com",
                                        className: "text-white hover:text-[#FF6B35] transition-colors",
                                        children: "info@lanwave.com"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [s.jsx("div", {
                                    className: "flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center",
                                    children: s.jsx(Sl, {
                                        className: "w-6 h-6"
                                    })
                                }), s.jsxs("div", {
                                    children: [s.jsx("div", {
                                        className: "text-sm text-gray-400 mb-1",
                                        children: e("contact.phone.label")
                                    }), s.jsx("a", {
                                        href: "tel:+1234567890",
                                        className: "text-white hover:text-[#FF6B35] transition-colors",
                                        children: "+1 (234) 567-890"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [s.jsx("div", {
                                    className: "flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center",
                                    children: s.jsx(xd, {
                                        className: "w-6 h-6"
                                    })
                                }), s.jsxs("div", {
                                    children: [s.jsx("div", {
                                        className: "text-sm text-gray-400 mb-1",
                                        children: e("contact.location.label")
                                    }), s.jsxs("div", {
                                        className: "text-white",
                                        children: ["123 Business Street", s.jsx("br", {}), "Tech District, City 12345"]
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [s.jsx("div", {
                                    className: "flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center",
                                    children: s.jsx(xs, {
                                        className: "w-6 h-6"
                                    })
                                }), s.jsxs("div", {
                                    children: [s.jsx("div", {
                                        className: "text-sm text-gray-400 mb-1",
                                        children: e("contact.hours")
                                    }), s.jsxs("div", {
                                        className: "text-white",
                                        children: [e("contact.weekday"), ": 9:00 AM - 6:00 PM", s.jsx("br", {}), e("contact.emergency"), ": ", e("contact.available")]
                                    })]
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "bg-gradient-to-br from-[#FF6B35]/10 to-[#F7931E]/10 rounded-2xl p-6 sm:p-8 border border-[#FF6B35]/20",
                        children: [s.jsx("h3", {
                            className: "text-lg sm:text-xl font-bold text-[#1E1E2F] mb-3",
                            children: e("contactPage.quickResponse.title")
                        }), s.jsx("p", {
                            className: "text-gray-700 text-sm leading-relaxed",
                            children: e("contactPage.quickResponse.desc")
                        })]
                    })]
                })]
            }), s.jsx("div", {
                className: "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-2xl sm:rounded-3xl p-8 sm:p-12",
                children: s.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 text-white text-center",
                    children: [s.jsxs("div", {
                        children: [s.jsx("div", {
                            className: "text-3xl sm:text-4xl font-bold mb-2",
                            children: "24/7"
                        }), s.jsx("div", {
                            className: "text-white/90",
                            children: e("contactPage.available.support")
                        })]
                    }), s.jsxs("div", {
                        children: [s.jsxs("div", {
                            className: "text-3xl sm:text-4xl font-bold mb-2",
                            children: ["< 1 ", e("contactPage.available.hour")]
                        }), s.jsx("div", {
                            className: "text-white/90",
                            children: e("contactPage.available.response")
                        })]
                    }), s.jsxs("div", {
                        children: [s.jsx("div", {
                            className: "text-3xl sm:text-4xl font-bold mb-2",
                            children: "15+"
                        }), s.jsx("div", {
                            className: "text-white/90",
                            children: e("contactPage.available.experience")
                        })]
                    })]
                })
            })]
        }), s.jsx(vr, {})]
    })
}
function ag() {
    return s.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [s.jsx(Ah, {}), s.jsx(Wh, {}), s.jsxs(Hp, {
            children: [s.jsx(Wt, {
                path: "/",
                element: s.jsx(qh, {})
            }), s.jsx(Wt, {
                path: "/services",
                element: s.jsx(ng, {})
            }), s.jsx(Wt, {
                path: "/service/:serviceId",
                element: s.jsx(eg, {})
            }), s.jsx(Wt, {
                path: "/about",
                element: s.jsx(ig, {})
            }), s.jsx(Wt, {
                path: "/contact",
                element: s.jsx(sg, {})
            })]
        }), s.jsx(Uh, {})]
    })
}
Xc(document.getElementById("root")).render(s.jsx(x.StrictMode, {
    children: s.jsx(mh, {
        children: s.jsx(Sh, {
            children: s.jsx(ag, {})
        })
    })
}));
