!
function(A, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = A.document ? e(A, !0) : function(A) {
        if (!A.document) throw new Error("jQuery requires a window with a document");
        return e(A)
    }: e(A)
} ("undefined" != typeof window ? window: this,
function(A, e) {
    "use strict";
    function t(A, e) {
        e = e || _;
        var t = e.createElement("script");
        t.text = A,
        e.head.appendChild(t).parentNode.removeChild(t)
    }
    function n(A) {
        var e = !!A && "length" in A && A.length,
        t = EA.type(A);
        return "function" !== t && !EA.isWindow(A) && ("array" === t || 0 === e || "number" == typeof e && e > 0 && e - 1 in A)
    }
    function g(A, e, t) {
        if (EA.isFunction(e)) return EA.grep(A,
        function(A, n) {
            return !! e.call(A, n, A) !== t
        });
        if (e.nodeType) return EA.grep(A,
        function(A) {
            return A === e !== t
        });
        if ("string" == typeof e) {
            if (pA.test(e)) return EA.filter(e, A, t);
            e = EA.filter(e, A)
        }
        return EA.grep(A,
        function(A) {
            return gA.call(e, A) > -1 !== t && 1 === A.nodeType
        })
    }
    function i(A, e) {
        for (; (A = A[e]) && 1 !== A.nodeType;);
        return A
    }
    function o(A) {
        var e = {};
        return EA.each(A.match(HA) || [],
        function(A, t) {
            e[t] = !0
        }),
        e
    }
    function r(A) {
        return A
    }
    function B(A) {
        throw A
    }
    function C(A, e, t) {
        var n;
        try {
            A && EA.isFunction(n = A.promise) ? n.call(A).done(e).fail(t) : A && EA.isFunction(n = A.then) ? n.call(A, e, t) : e.call(void 0, A)
        } catch(A) {
            t.call(void 0, A)
        }
    }
    function a() {
        _.removeEventListener("DOMContentLoaded", a),
        A.removeEventListener("load", a),
        EA.ready()
    }
    function s() {
        this.expando = EA.expando + s.uid++
    }
    function E(A, e, t) {
        var n;
        if (void 0 === t && 1 === A.nodeType) if (n = "data-" + e.replace(NA, "-$&").toLowerCase(), t = A.getAttribute(n), "string" == typeof t) {
            try {
                t = "true" === t || "false" !== t && ("null" === t ? null: +t + "" === t ? +t: mA.test(t) ? JSON.parse(t) : t)
            } catch(g) {}
            JA.set(A, e, t)
        } else t = void 0;
        return t
    }
    function I(A, e, t, n) {
        var g, i = 1,
        o = 20,
        r = n ?
        function() {
            return n.cur()
        }: function() {
            return EA.css(A, e, "")
        },
        B = r(),
        C = t && t[3] || (EA.cssNumber[e] ? "": "px"),
        a = (EA.cssNumber[e] || "px" !== C && +B) && LA.exec(EA.css(A, e));
        if (a && a[3] !== C) {
            C = C || a[3],
            t = t || [],
            a = +B || 1;
            do i = i || ".5",
            a /= i,
            EA.style(A, e, a + C);
            while (i !== (i = r() / B) && 1 !== i && --o)
        }
        return t && (a = +a || +B || 0, g = t[1] ? a + (t[1] + 1) * t[2] : +t[2], n && (n.unit = C, n.start = a, n.end = g)),
        g
    }
    function Q(A) {
        var e, t = A.ownerDocument,
        n = A.nodeName,
        g = bA[n];
        return g ? g: (e = t.body.appendChild(t.createElement(n)), g = EA.css(e, "display"), e.parentNode.removeChild(e), "none" === g && (g = "block"), bA[n] = g, g)
    }
    function h(A, e) {
        for (var t, n, g = [], i = 0, o = A.length; i < o; i++) n = A[i],
        n.style && (t = n.style.display, e ? ("none" === t && (g[i] = PA.get(n, "display") || null, g[i] || (n.style.display = "")), "" === n.style.display && TA(n) && (g[i] = Q(n))) : "none" !== t && (g[i] = "none", PA.set(n, "display", t)));
        for (i = 0; i < o; i++) null != g[i] && (A[i].style.display = g[i]);
        return A
    }
    function c(A, e) {
        var t = "undefined" != typeof A.getElementsByTagName ? A.getElementsByTagName(e || "*") : "undefined" != typeof A.querySelectorAll ? A.querySelectorAll(e || "*") : [];
        return void 0 === e || e && EA.nodeName(A, e) ? EA.merge([A], t) : t
    }
    function w(A, e) {
        for (var t = 0,
        n = A.length; t < n; t++) PA.set(A[t], "globalEval", !e || PA.get(e[t], "globalEval"))
    }
    function f(A, e, t, n, g) {
        for (var i, o, r, B, C, a, s = e.createDocumentFragment(), E = [], I = 0, Q = A.length; I < Q; I++) if (i = A[I], i || 0 === i) if ("object" === EA.type(i)) EA.merge(E, i.nodeType ? [i] : i);
        else if (VA.test(i)) {
            for (o = o || s.appendChild(e.createElement("div")), r = (yA.exec(i) || ["", ""])[1].toLowerCase(), B = XA[r] || XA._default, o.innerHTML = B[1] + EA.htmlPrefilter(i) + B[2], a = B[0]; a--;) o = o.lastChild;
            EA.merge(E, o.childNodes),
            o = s.firstChild,
            o.textContent = ""
        } else E.push(e.createTextNode(i));
        for (s.textContent = "", I = 0; i = E[I++];) if (n && EA.inArray(i, n) > -1) g && g.push(i);
        else if (C = EA.contains(i.ownerDocument, i), o = c(s.appendChild(i), "script"), C && w(o), t) for (a = 0; i = o[a++];) jA.test(i.type || "") && t.push(i);
        return s
    }
    function u() {
        return ! 0
    }
    function l() {
        return ! 1
    }
    function D() {
        try {
            return _.activeElement
        } catch(A) {}
    }
    function p(A, e, t, n, g, i) {
        var o, r;
        if ("object" == typeof e) {
            "string" != typeof t && (n = n || t, t = void 0);
            for (r in e) p(A, r, t, n, e[r], i);
            return A
        }
        if (null == n && null == g ? (g = t, n = t = void 0) : null == g && ("string" == typeof t ? (g = n, n = void 0) : (g = n, n = t, t = void 0)), g === !1) g = l;
        else if (!g) return A;
        return 1 === i && (o = g, g = function(A) {
            return EA().off(A),
            o.apply(this, arguments)
        },
        g.guid = o.guid || (o.guid = EA.guid++)),
        A.each(function() {
            EA.event.add(this, e, g, n, t)
        })
    }
    function d(A, e) {
        return EA.nodeName(A, "table") && EA.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? A.getElementsByTagName("tbody")[0] || A: A
    }
    function M(A) {
        return A.type = (null !== A.getAttribute("type")) + "/" + A.type,
        A
    }
    function F(A) {
        var e = ee.exec(A.type);
        return e ? A.type = e[1] : A.removeAttribute("type"),
        A
    }
    function G(A, e) {
        var t, n, g, i, o, r, B, C;
        if (1 === e.nodeType) {
            if (PA.hasData(A) && (i = PA.access(A), o = PA.set(e, i), C = i.events)) {
                delete o.handle,
                o.events = {};
                for (g in C) for (t = 0, n = C[g].length; t < n; t++) EA.event.add(e, g, C[g][t])
            }
            JA.hasData(A) && (r = JA.access(A), B = EA.extend({},
            r), JA.set(e, B))
        }
    }
    function Y(A, e) {
        var t = e.nodeName.toLowerCase();
        "input" === t && xA.test(A.type) ? e.checked = A.checked: "input" !== t && "textarea" !== t || (e.defaultValue = A.defaultValue)
    }
    function H(A, e, n, g) {
        e = tA.apply([], e);
        var i, o, r, B, C, a, s = 0,
        E = A.length,
        I = E - 1,
        Q = e[0],
        h = EA.isFunction(Q);
        if (h || E > 1 && "string" == typeof Q && !aA.checkClone && Ae.test(Q)) return A.each(function(t) {
            var i = A.eq(t);
            h && (e[0] = Q.call(this, t, i.html())),
            H(i, e, n, g)
        });
        if (E && (i = f(e, A[0].ownerDocument, !1, A, g), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || g)) {
            for (r = EA.map(c(i, "script"), M), B = r.length; s < E; s++) C = i,
            s !== I && (C = EA.clone(C, !0, !0), B && EA.merge(r, c(C, "script"))),
            n.call(A[s], C, s);
            if (B) for (a = r[r.length - 1].ownerDocument, EA.map(r, F), s = 0; s < B; s++) C = r[s],
            jA.test(C.type || "") && !PA.access(C, "globalEval") && EA.contains(a, C) && (C.src ? EA._evalUrl && EA._evalUrl(C.src) : t(C.textContent.replace(te, ""), a))
        }
        return A
    }
    function U(A, e, t) {
        for (var n, g = e ? EA.filter(e, A) : A, i = 0; null != (n = g[i]); i++) t || 1 !== n.nodeType || EA.cleanData(c(n)),
        n.parentNode && (t && EA.contains(n.ownerDocument, n) && w(c(n, "script")), n.parentNode.removeChild(n));
        return A
    }
    function R(A, e, t) {
        var n, g, i, o, r = A.style;
        return t = t || ie(A),
        t && (o = t.getPropertyValue(e) || t[e], "" !== o || EA.contains(A.ownerDocument, A) || (o = EA.style(A, e)), !aA.pixelMarginRight() && ge.test(o) && ne.test(e) && (n = r.width, g = r.minWidth, i = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = t.width, r.width = n, r.minWidth = g, r.maxWidth = i)),
        void 0 !== o ? o + "": o
    }
    function v(A, e) {
        return {
            get: function() {
                return A() ? void delete this.get: (this.get = e).apply(this, arguments)
            }
        }
    }
    function K(A) {
        if (A in ae) return A;
        for (var e = A[0].toUpperCase() + A.slice(1), t = Ce.length; t--;) if (A = Ce[t] + e, A in ae) return A
    }
    function P(A, e, t) {
        var n = LA.exec(e);
        return n ? Math.max(0, n[2] - (t || 0)) + (n[3] || "px") : e
    }
    function J(A, e, t, n, g) {
        for (var i = t === (n ? "border": "content") ? 4 : "width" === e ? 1 : 0, o = 0; i < 4; i += 2)"margin" === t && (o += EA.css(A, t + OA[i], !0, g)),
        n ? ("content" === t && (o -= EA.css(A, "padding" + OA[i], !0, g)), "margin" !== t && (o -= EA.css(A, "border" + OA[i] + "Width", !0, g))) : (o += EA.css(A, "padding" + OA[i], !0, g), "padding" !== t && (o += EA.css(A, "border" + OA[i] + "Width", !0, g)));
        return o
    }
    function m(A, e, t) {
        var n, g = !0,
        i = ie(A),
        o = "border-box" === EA.css(A, "boxSizing", !1, i);
        if (A.getClientRects().length && (n = A.getBoundingClientRect()[e]), n <= 0 || null == n) {
            if (n = R(A, e, i), (n < 0 || null == n) && (n = A.style[e]), ge.test(n)) return n;
            g = o && (aA.boxSizingReliable() || n === A.style[e]),
            n = parseFloat(n) || 0
        }
        return n + J(A, e, t || (o ? "border": "content"), g, i) + "px"
    }
    function N(A, e, t, n, g) {
        return new N.prototype.init(A, e, t, n, g)
    }
    function k() {
        Ee && (A.requestAnimationFrame(k), EA.fx.tick())
    }
    function L() {
        return A.setTimeout(function() {
            se = void 0
        }),
        se = EA.now()
    }
    function O(A, e) {
        var t, n = 0,
        g = {
            height: A
        };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) t = OA[n],
        g["margin" + t] = g["padding" + t] = A;
        return e && (g.opacity = g.width = A),
        g
    }
    function T(A, e, t) {
        for (var n, g = (x.tweeners[e] || []).concat(x.tweeners["*"]), i = 0, o = g.length; i < o; i++) if (n = g[i].call(t, e, A)) return n
    }
    function S(A, e, t) {
        var n, g, i, o, r, B, C, a, s = "width" in e || "height" in e,
        E = this,
        I = {},
        Q = A.style,
        c = A.nodeType && TA(A),
        w = PA.get(A, "fxshow");
        t.queue || (o = EA._queueHooks(A, "fx"), null == o.unqueued && (o.unqueued = 0, r = o.empty.fire, o.empty.fire = function() {
            o.unqueued || r()
        }), o.unqueued++, E.always(function() {
            E.always(function() {
                o.unqueued--,
                EA.queue(A, "fx").length || o.empty.fire()
            })
        }));
        for (n in e) if (g = e[n], Ie.test(g)) {
            if (delete e[n], i = i || "toggle" === g, g === (c ? "hide": "show")) {
                if ("show" !== g || !w || void 0 === w[n]) continue;
                c = !0
            }
            I[n] = w && w[n] || EA.style(A, n)
        }
        if (B = !EA.isEmptyObject(e), B || !EA.isEmptyObject(I)) {
            s && 1 === A.nodeType && (t.overflow = [Q.overflow, Q.overflowX, Q.overflowY], C = w && w.display, null == C && (C = PA.get(A, "display")), a = EA.css(A, "display"), "none" === a && (C ? a = C: (h([A], !0), C = A.style.display || C, a = EA.css(A, "display"), h([A]))), ("inline" === a || "inline-block" === a && null != C) && "none" === EA.css(A, "float") && (B || (E.done(function() {
                Q.display = C
            }), null == C && (a = Q.display, C = "none" === a ? "": a)), Q.display = "inline-block")),
            t.overflow && (Q.overflow = "hidden", E.always(function() {
                Q.overflow = t.overflow[0],
                Q.overflowX = t.overflow[1],
                Q.overflowY = t.overflow[2]
            })),
            B = !1;
            for (n in I) B || (w ? "hidden" in w && (c = w.hidden) : w = PA.access(A, "fxshow", {
                display: C
            }), i && (w.hidden = !c), c && h([A], !0), E.done(function() {
                c || h([A]),
                PA.remove(A, "fxshow");
                for (n in I) EA.style(A, n, I[n])
            })),
            B = T(c ? w[n] : 0, n, E),
            n in w || (w[n] = B.start, c && (B.end = B.start, B.start = 0))
        }
    }
    function b(A, e) {
        var t, n, g, i, o;
        for (t in A) if (n = EA.camelCase(t), g = e[n], i = A[t], EA.isArray(i) && (g = i[1], i = A[t] = i[0]), t !== n && (A[n] = i, delete A[t]), o = EA.cssHooks[n], o && "expand" in o) {
            i = o.expand(i),
            delete A[n];
            for (t in i) t in A || (A[t] = i[t], e[t] = g)
        } else e[n] = g
    }
    function x(A, e, t) {
        var n, g, i = 0,
        o = x.prefilters.length,
        r = EA.Deferred().always(function() {
            delete B.elem
        }),
        B = function() {
            if (g) return ! 1;
            for (var e = se || L(), t = Math.max(0, C.startTime + C.duration - e), n = t / C.duration || 0, i = 1 - n, o = 0, B = C.tweens.length; o < B; o++) C.tweens[o].run(i);
            return r.notifyWith(A, [C, i, t]),
            i < 1 && B ? t: (r.resolveWith(A, [C]), !1)
        },
        C = r.promise({
            elem: A,
            props: EA.extend({},
            e),
            opts: EA.extend(!0, {
                specialEasing: {},
                easing: EA.easing._default
            },
            t),
            originalProperties: e,
            originalOptions: t,
            startTime: se || L(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = EA.Tween(A, C.opts, e, t, C.opts.specialEasing[e] || C.opts.easing);
                return C.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0,
                n = e ? C.tweens.length: 0;
                if (g) return this;
                for (g = !0; t < n; t++) C.tweens[t].run(1);
                return e ? (r.notifyWith(A, [C, 1, 0]), r.resolveWith(A, [C, e])) : r.rejectWith(A, [C, e]),
                this
            }
        }),
        a = C.props;
        for (b(a, C.opts.specialEasing); i < o; i++) if (n = x.prefilters[i].call(C, A, a, C.opts)) return EA.isFunction(n.stop) && (EA._queueHooks(C.elem, C.opts.queue).stop = EA.proxy(n.stop, n)),
        n;
        return EA.map(a, T, C),
        EA.isFunction(C.opts.start) && C.opts.start.call(A, C),
        EA.fx.timer(EA.extend(B, {
            elem: A,
            anim: C,
            queue: C.opts.queue
        })),
        C.progress(C.opts.progress).done(C.opts.done, C.opts.complete).fail(C.opts.fail).always(C.opts.always)
    }
    function y(A) {
        return A.getAttribute && A.getAttribute("class") || ""
    }
    function j(A, e, t, n) {
        var g;
        if (EA.isArray(e)) EA.each(e,
        function(e, g) {
            t || Ge.test(A) ? n(A, g) : j(A + "[" + ("object" == typeof g && null != g ? e: "") + "]", g, t, n)
        });
        else if (t || "object" !== EA.type(e)) n(A, e);
        else for (g in e) j(A + "[" + g + "]", e[g], t, n)
    }
    function X(A) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, g = 0,
            i = e.toLowerCase().match(HA) || [];
            if (EA.isFunction(t)) for (; n = i[g++];)"+" === n[0] ? (n = n.slice(1) || "*", (A[n] = A[n] || []).unshift(t)) : (A[n] = A[n] || []).push(t)
        }
    }
    function V(A, e, t, n) {
        function g(r) {
            var B;
            return i[r] = !0,
            EA.each(A[r] || [],
            function(A, r) {
                var C = r(e, t, n);
                return "string" != typeof C || o || i[C] ? o ? !(B = C) : void 0 : (e.dataTypes.unshift(C), g(C), !1)
            }),
            B
        }
        var i = {},
        o = A === Le;
        return g(e.dataTypes[0]) || !i["*"] && g("*")
    }
    function W(A, e) {
        var t, n, g = EA.ajaxSettings.flatOptions || {};
        for (t in e) void 0 !== e[t] && ((g[t] ? A: n || (n = {}))[t] = e[t]);
        return n && EA.extend(!0, A, n),
        A
    }
    function z(A, e, t) {
        for (var n, g, i, o, r = A.contents,
        B = A.dataTypes;
        "*" === B[0];) B.shift(),
        void 0 === n && (n = A.mimeType || e.getResponseHeader("Content-Type"));
        if (n) for (g in r) if (r[g] && r[g].test(n)) {
            B.unshift(g);
            break
        }
        if (B[0] in t) i = B[0];
        else {
            for (g in t) {
                if (!B[0] || A.converters[g + " " + B[0]]) {
                    i = g;
                    break
                }
                o || (o = g)
            }
            i = i || o
        }
        if (i) return i !== B[0] && B.unshift(i),
        t[i]
    }
    function q(A, e, t, n) {
        var g, i, o, r, B, C = {},
        a = A.dataTypes.slice();
        if (a[1]) for (o in A.converters) C[o.toLowerCase()] = A.converters[o];
        for (i = a.shift(); i;) if (A.responseFields[i] && (t[A.responseFields[i]] = e), !B && n && A.dataFilter && (e = A.dataFilter(e, A.dataType)), B = i, i = a.shift()) if ("*" === i) i = B;
        else if ("*" !== B && B !== i) {
            if (o = C[B + " " + i] || C["* " + i], !o) for (g in C) if (r = g.split(" "), r[1] === i && (o = C[B + " " + r[0]] || C["* " + r[0]])) {
                o === !0 ? o = C[g] : C[g] !== !0 && (i = r[0], a.unshift(r[1]));
                break
            }
            if (o !== !0) if (o && A["throws"]) e = o(e);
            else try {
                e = o(e)
            } catch(s) {
                return {
                    state: "parsererror",
                    error: o ? s: "No conversion from " + B + " to " + i
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function Z(A) {
        return EA.isWindow(A) ? A: 9 === A.nodeType && A.defaultView
    }
    var $ = [],
    _ = A.document,
    AA = Object.getPrototypeOf,
    eA = $.slice,
    tA = $.concat,
    nA = $.push,
    gA = $.indexOf,
    iA = {},
    oA = iA.toString,
    rA = iA.hasOwnProperty,
    BA = rA.toString,
    CA = BA.call(Object),
    aA = {},
    sA = "3.1.0",
    EA = function(A, e) {
        return new EA.fn.init(A, e)
    },
    IA = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    QA = /^-ms-/,
    hA = /-([a-z])/g,
    cA = function(A, e) {
        return e.toUpperCase()
    };
    EA.fn = EA.prototype = {
        jquery: sA,
        constructor: EA,
        length: 0,
        toArray: function() {
            return eA.call(this)
        },
        get: function(A) {
            return null != A ? A < 0 ? this[A + this.length] : this[A] : eA.call(this)
        },
        pushStack: function(A) {
            var e = EA.merge(this.constructor(), A);
            return e.prevObject = this,
            e
        },
        each: function(A) {
            return EA.each(this, A)
        },
        map: function(A) {
            return this.pushStack(EA.map(this,
            function(e, t) {
                return A.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(eA.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(A) {
            var e = this.length,
            t = +A + (A < 0 ? e: 0);
            return this.pushStack(t >= 0 && t < e ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: nA,
        sort: $.sort,
        splice: $.splice
    },
    EA.extend = EA.fn.extend = function() {
        var A, e, t, n, g, i, o = arguments[0] || {},
        r = 1,
        B = arguments.length,
        C = !1;
        for ("boolean" == typeof o && (C = o, o = arguments[r] || {},
        r++), "object" == typeof o || EA.isFunction(o) || (o = {}), r === B && (o = this, r--); r < B; r++) if (null != (A = arguments[r])) for (e in A) t = o[e],
        n = A[e],
        o !== n && (C && n && (EA.isPlainObject(n) || (g = EA.isArray(n))) ? (g ? (g = !1, i = t && EA.isArray(t) ? t: []) : i = t && EA.isPlainObject(t) ? t: {},
        o[e] = EA.extend(C, i, n)) : void 0 !== n && (o[e] = n));
        return o
    },
    EA.extend({
        expando: "jQuery" + (sA + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(A) {
            throw new Error(A)
        },
        noop: function() {},
        isFunction: function(A) {
            return "function" === EA.type(A)
        },
        isArray: Array.isArray,
        isWindow: function(A) {
            return null != A && A === A.window
        },
        isNumeric: function(A) {
            var e = EA.type(A);
            return ("number" === e || "string" === e) && !isNaN(A - parseFloat(A))
        },
        isPlainObject: function(A) {
            var e, t;
            return ! (!A || "[object Object]" !== oA.call(A) || (e = AA(A)) && (t = rA.call(e, "constructor") && e.constructor, "function" != typeof t || BA.call(t) !== CA))
        },
        isEmptyObject: function(A) {
            var e;
            for (e in A) return ! 1;
            return ! 0
        },
        type: function(A) {
            return null == A ? A + "": "object" == typeof A || "function" == typeof A ? iA[oA.call(A)] || "object": typeof A
        },
        globalEval: function(A) {
            t(A)
        },
        camelCase: function(A) {
            return A.replace(QA, "ms-").replace(hA, cA)
        },
        nodeName: function(A, e) {
            return A.nodeName && A.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(A, e) {
            var t, g = 0;
            if (n(A)) for (t = A.length; g < t && e.call(A[g], g, A[g]) !== !1; g++);
            else for (g in A) if (e.call(A[g], g, A[g]) === !1) break;
            return A
        },
        trim: function(A) {
            return null == A ? "": (A + "").replace(IA, "")
        },
        makeArray: function(A, e) {
            var t = e || [];
            return null != A && (n(Object(A)) ? EA.merge(t, "string" == typeof A ? [A] : A) : nA.call(t, A)),
            t
        },
        inArray: function(A, e, t) {
            return null == e ? -1 : gA.call(e, A, t)
        },
        merge: function(A, e) {
            for (var t = +e.length,
            n = 0,
            g = A.length; n < t; n++) A[g++] = e[n];
            return A.length = g,
            A
        },
        grep: function(A, e, t) {
            for (var n, g = [], i = 0, o = A.length, r = !t; i < o; i++) n = !e(A[i], i),
            n !== r && g.push(A[i]);
            return g
        },
        map: function(A, e, t) {
            var g, i, o = 0,
            r = [];
            if (n(A)) for (g = A.length; o < g; o++) i = e(A[o], o, t),
            null != i && r.push(i);
            else for (o in A) i = e(A[o], o, t),
            null != i && r.push(i);
            return tA.apply([], r)
        },
        guid: 1,
        proxy: function(A, e) {
            var t, n, g;
            if ("string" == typeof e && (t = A[e], e = A, A = t), EA.isFunction(A)) return n = eA.call(arguments, 2),
            g = function() {
                return A.apply(e || this, n.concat(eA.call(arguments)))
            },
            g.guid = A.guid = A.guid || EA.guid++,
            g
        },
        now: Date.now,
        support: aA
    }),
    "function" == typeof Symbol && (EA.fn[Symbol.iterator] = $[Symbol.iterator]),
    EA.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(A, e) {
        iA["[object " + e + "]"] = e.toLowerCase()
    });
    var wA = function(A) {
        function e(A, e, t, n) {
            var g, i, o, r, B, C, a, E = e && e.ownerDocument,
            Q = e ? e.nodeType: 9;
            if (t = t || [], "string" != typeof A || !A || 1 !== Q && 9 !== Q && 11 !== Q) return t;
            if (!n && ((e ? e.ownerDocument || e: S) !== P && K(e), e = e || P, m)) {
                if (11 !== Q && (B = wA.exec(A))) if (g = B[1]) {
                    if (9 === Q) {
                        if (! (o = e.getElementById(g))) return t;
                        if (o.id === g) return t.push(o),
                        t
                    } else if (E && (o = E.getElementById(g)) && O(e, o) && o.id === g) return t.push(o),
                    t
                } else {
                    if (B[2]) return $.apply(t, e.getElementsByTagName(A)),
                    t;
                    if ((g = B[3]) && p.getElementsByClassName && e.getElementsByClassName) return $.apply(t, e.getElementsByClassName(g)),
                    t
                }
                if (p.qsa && !X[A + " "] && (!N || !N.test(A))) {
                    if (1 !== Q) E = e,
                    a = A;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((r = e.getAttribute("id")) ? r = r.replace(DA, pA) : e.setAttribute("id", r = T), C = G(A), i = C.length; i--;) C[i] = "#" + r + " " + I(C[i]);
                        a = C.join(","),
                        E = fA.test(A) && s(e.parentNode) || e
                    }
                    if (a) try {
                        return $.apply(t, E.querySelectorAll(a)),
                        t
                    } catch(h) {} finally {
                        r === T && e.removeAttribute("id")
                    }
                }
            }
            return H(A.replace(rA, "$1"), e, t, n)
        }
        function t() {
            function A(t, n) {
                return e.push(t + " ") > d.cacheLength && delete A[e.shift()],
                A[t + " "] = n
            }
            var e = [];
            return A
        }
        function n(A) {
            return A[T] = !0,
            A
        }
        function g(A) {
            var e = P.createElement("fieldset");
            try {
                return !! A(e)
            } catch(t) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function i(A, e) {
            for (var t = A.split("|"), n = t.length; n--;) d.attrHandle[t[n]] = e
        }
        function o(A, e) {
            var t = e && A,
            n = t && 1 === A.nodeType && 1 === e.nodeType && A.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (t) for (; t = t.nextSibling;) if (t === e) return - 1;
            return A ? 1 : -1
        }
        function r(A) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && e.type === A
            }
        }
        function B(A) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === A
            }
        }
        function C(A) {
            return function(e) {
                return "label" in e && e.disabled === A || "form" in e && e.disabled === A || "form" in e && e.disabled === !1 && (e.isDisabled === A || e.isDisabled !== !A && ("label" in e || !MA(e)) !== A)
            }
        }
        function a(A) {
            return n(function(e) {
                return e = +e,
                n(function(t, n) {
                    for (var g, i = A([], t.length, e), o = i.length; o--;) t[g = i[o]] && (t[g] = !(n[g] = t[g]))
                })
            })
        }
        function s(A) {
            return A && "undefined" != typeof A.getElementsByTagName && A
        }
        function E() {}
        function I(A) {
            for (var e = 0,
            t = A.length,
            n = ""; e < t; e++) n += A[e].value;
            return n
        }
        function Q(A, e, t) {
            var n = e.dir,
            g = e.next,
            i = g || n,
            o = t && "parentNode" === i,
            r = x++;
            return e.first ?
            function(e, t, g) {
                for (; e = e[n];) if (1 === e.nodeType || o) return A(e, t, g)
            }: function(e, t, B) {
                var C, a, s, E = [b, r];
                if (B) {
                    for (; e = e[n];) if ((1 === e.nodeType || o) && A(e, t, B)) return ! 0
                } else for (; e = e[n];) if (1 === e.nodeType || o) if (s = e[T] || (e[T] = {}), a = s[e.uniqueID] || (s[e.uniqueID] = {}), g && g === e.nodeName.toLowerCase()) e = e[n] || e;
                else {
                    if ((C = a[i]) && C[0] === b && C[1] === r) return E[2] = C[2];
                    if (a[i] = E, E[2] = A(e, t, B)) return ! 0
                }
            }
        }
        function h(A) {
            return A.length > 1 ?
            function(e, t, n) {
                for (var g = A.length; g--;) if (!A[g](e, t, n)) return ! 1;
                return ! 0
            }: A[0]
        }
        function c(A, t, n) {
            for (var g = 0,
            i = t.length; g < i; g++) e(A, t[g], n);
            return n
        }
        function w(A, e, t, n, g) {
            for (var i, o = [], r = 0, B = A.length, C = null != e; r < B; r++)(i = A[r]) && (t && !t(i, n, g) || (o.push(i), C && e.push(r)));
            return o
        }
        function f(A, e, t, g, i, o) {
            return g && !g[T] && (g = f(g)),
            i && !i[T] && (i = f(i, o)),
            n(function(n, o, r, B) {
                var C, a, s, E = [],
                I = [],
                Q = o.length,
                h = n || c(e || "*", r.nodeType ? [r] : r, []),
                f = !A || !n && e ? h: w(h, E, A, r, B),
                u = t ? i || (n ? A: Q || g) ? [] : o: f;
                if (t && t(f, u, r, B), g) for (C = w(u, I), g(C, [], r, B), a = C.length; a--;)(s = C[a]) && (u[I[a]] = !(f[I[a]] = s));
                if (n) {
                    if (i || A) {
                        if (i) {
                            for (C = [], a = u.length; a--;)(s = u[a]) && C.push(f[a] = s);
                            i(null, u = [], C, B)
                        }
                        for (a = u.length; a--;)(s = u[a]) && (C = i ? AA(n, s) : E[a]) > -1 && (n[C] = !(o[C] = s))
                    }
                } else u = w(u === o ? u.splice(Q, u.length) : u),
                i ? i(null, o, u, B) : $.apply(o, u)
            })
        }
        function u(A) {
            for (var e, t, n, g = A.length,
            i = d.relative[A[0].type], o = i || d.relative[" "], r = i ? 1 : 0, B = Q(function(A) {
                return A === e
            },
            o, !0), C = Q(function(A) {
                return AA(e, A) > -1
            },
            o, !0), a = [function(A, t, n) {
                var g = !i && (n || t !== U) || ((e = t).nodeType ? B(A, t, n) : C(A, t, n));
                return e = null,
                g
            }]; r < g; r++) if (t = d.relative[A[r].type]) a = [Q(h(a), t)];
            else {
                if (t = d.filter[A[r].type].apply(null, A[r].matches), t[T]) {
                    for (n = ++r; n < g && !d.relative[A[n].type]; n++);
                    return f(r > 1 && h(a), r > 1 && I(A.slice(0, r - 1).concat({
                        value: " " === A[r - 2].type ? "*": ""
                    })).replace(rA, "$1"), t, r < n && u(A.slice(r, n)), n < g && u(A = A.slice(n)), n < g && I(A))
                }
                a.push(t)
            }
            return h(a)
        }
        function l(A, t) {
            var g = t.length > 0,
            i = A.length > 0,
            o = function(n, o, r, B, C) {
                var a, s, E, I = 0,
                Q = "0",
                h = n && [],
                c = [],
                f = U,
                u = n || i && d.find.TAG("*", C),
                l = b += null == f ? 1 : Math.random() || .1,
                D = u.length;
                for (C && (U = o === P || o || C); Q !== D && null != (a = u[Q]); Q++) {
                    if (i && a) {
                        for (s = 0, o || a.ownerDocument === P || (K(a), r = !m); E = A[s++];) if (E(a, o || P, r)) {
                            B.push(a);
                            break
                        }
                        C && (b = l)
                    }
                    g && ((a = !E && a) && I--, n && h.push(a))
                }
                if (I += Q, g && Q !== I) {
                    for (s = 0; E = t[s++];) E(h, c, o, r);
                    if (n) {
                        if (I > 0) for (; Q--;) h[Q] || c[Q] || (c[Q] = q.call(B));
                        c = w(c)
                    }
                    $.apply(B, c),
                    C && !n && c.length > 0 && I + t.length > 1 && e.uniqueSort(B)
                }
                return C && (b = l, U = f),
                h
            };
            return g ? n(o) : o
        }
        var D, p, d, M, F, G, Y, H, U, R, v, K, P, J, m, N, k, L, O, T = "sizzle" + 1 * new Date,
        S = A.document,
        b = 0,
        x = 0,
        y = t(),
        j = t(),
        X = t(),
        V = function(A, e) {
            return A === e && (v = !0),
            0
        },
        W = {}.hasOwnProperty,
        z = [],
        q = z.pop,
        Z = z.push,
        $ = z.push,
        _ = z.slice,
        AA = function(A, e) {
            for (var t = 0,
            n = A.length; t < n; t++) if (A[t] === e) return t;
            return - 1
        },
        eA = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        tA = "[\\x20\\t\\r\\n\\f]",
        nA = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        gA = "\\[" + tA + "*(" + nA + ")(?:" + tA + "*([*^$|!~]?=)" + tA + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nA + "))|)" + tA + "*\\]",
        iA = ":(" + nA + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gA + ")*)|.*)\\)|)",
        oA = new RegExp(tA + "+", "g"),
        rA = new RegExp("^" + tA + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tA + "+$", "g"),
        BA = new RegExp("^" + tA + "*," + tA + "*"),
        CA = new RegExp("^" + tA + "*([>+~]|" + tA + ")" + tA + "*"),
        aA = new RegExp("=" + tA + "*([^\\]'\"]*?)" + tA + "*\\]", "g"),
        sA = new RegExp(iA),
        EA = new RegExp("^" + nA + "$"),
        IA = {
            ID: new RegExp("^#(" + nA + ")"),
            CLASS: new RegExp("^\\.(" + nA + ")"),
            TAG: new RegExp("^(" + nA + "|[*])"),
            ATTR: new RegExp("^" + gA),
            PSEUDO: new RegExp("^" + iA),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tA + "*(even|odd|(([+-]|)(\\d*)n|)" + tA + "*(?:([+-]|)" + tA + "*(\\d+)|))" + tA + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + eA + ")$", "i"),
            needsContext: new RegExp("^" + tA + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tA + "*((?:-\\d)?\\d*)" + tA + "*\\)|)(?=[^-]|$)", "i")
        },
        QA = /^(?:input|select|textarea|button)$/i,
        hA = /^h\d$/i,
        cA = /^[^{]+\{\s*\[native \w/,
        wA = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        fA = /[+~]/,
        uA = new RegExp("\\\\([\\da-f]{1,6}" + tA + "?|(" + tA + ")|.)", "ig"),
        lA = function(A, e, t) {
            var n = "0x" + e - 65536;
            return n !== n || t ? e: n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        DA = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        pA = function(A, e) {
            return e ? "\0" === A ? "�": A.slice(0, -1) + "\\" + A.charCodeAt(A.length - 1).toString(16) + " ": "\\" + A
        },
        dA = function() {
            K()
        },
        MA = Q(function(A) {
            return A.disabled === !0
        },
        {
            dir: "parentNode",
            next: "legend"
        });
        try {
            $.apply(z = _.call(S.childNodes), S.childNodes),
            z[S.childNodes.length].nodeType
        } catch(FA) {
            $ = {
                apply: z.length ?
                function(A, e) {
                    Z.apply(A, _.call(e))
                }: function(A, e) {
                    for (var t = A.length,
                    n = 0; A[t++] = e[n++];);
                    A.length = t - 1
                }
            }
        }
        p = e.support = {},
        F = e.isXML = function(A) {
            var e = A && (A.ownerDocument || A).documentElement;
            return !! e && "HTML" !== e.nodeName
        },
        K = e.setDocument = function(A) {
            var e, t, n = A ? A.ownerDocument || A: S;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, J = P.documentElement, m = !F(P), S !== P && (t = P.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", dA, !1) : t.attachEvent && t.attachEvent("onunload", dA)), p.attributes = g(function(A) {
                return A.className = "i",
                !A.getAttribute("className")
            }), p.getElementsByTagName = g(function(A) {
                return A.appendChild(P.createComment("")),
                !A.getElementsByTagName("*").length
            }), p.getElementsByClassName = cA.test(P.getElementsByClassName), p.getById = g(function(A) {
                return J.appendChild(A).id = T,
                !P.getElementsByName || !P.getElementsByName(T).length
            }), p.getById ? (d.find.ID = function(A, e) {
                if ("undefined" != typeof e.getElementById && m) {
                    var t = e.getElementById(A);
                    return t ? [t] : []
                }
            },
            d.filter.ID = function(A) {
                var e = A.replace(uA, lA);
                return function(A) {
                    return A.getAttribute("id") === e
                }
            }) : (delete d.find.ID, d.filter.ID = function(A) {
                var e = A.replace(uA, lA);
                return function(A) {
                    var t = "undefined" != typeof A.getAttributeNode && A.getAttributeNode("id");
                    return t && t.value === e
                }
            }), d.find.TAG = p.getElementsByTagName ?
            function(A, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(A) : p.qsa ? e.querySelectorAll(A) : void 0
            }: function(A, e) {
                var t, n = [],
                g = 0,
                i = e.getElementsByTagName(A);
                if ("*" === A) {
                    for (; t = i[g++];) 1 === t.nodeType && n.push(t);
                    return n
                }
                return i
            },
            d.find.CLASS = p.getElementsByClassName &&
            function(A, e) {
                if ("undefined" != typeof e.getElementsByClassName && m) return e.getElementsByClassName(A)
            },
            k = [], N = [], (p.qsa = cA.test(P.querySelectorAll)) && (g(function(A) {
                J.appendChild(A).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                A.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tA + "*(?:''|\"\")"),
                A.querySelectorAll("[selected]").length || N.push("\\[" + tA + "*(?:value|" + eA + ")"),
                A.querySelectorAll("[id~=" + T + "-]").length || N.push("~="),
                A.querySelectorAll(":checked").length || N.push(":checked"),
                A.querySelectorAll("a#" + T + "+*").length || N.push(".#.+[+~]")
            }), g(function(A) {
                A.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = P.createElement("input");
                e.setAttribute("type", "hidden"),
                A.appendChild(e).setAttribute("name", "D"),
                A.querySelectorAll("[name=d]").length && N.push("name" + tA + "*[*^$|!~]?="),
                2 !== A.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"),
                J.appendChild(A).disabled = !0,
                2 !== A.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"),
                A.querySelectorAll("*,:x"),
                N.push(",.*:")
            })), (p.matchesSelector = cA.test(L = J.matches || J.webkitMatchesSelector || J.mozMatchesSelector || J.oMatchesSelector || J.msMatchesSelector)) && g(function(A) {
                p.disconnectedMatch = L.call(A, "*"),
                L.call(A, "[s!='']:x"),
                k.push("!=", iA)
            }), N = N.length && new RegExp(N.join("|")), k = k.length && new RegExp(k.join("|")), e = cA.test(J.compareDocumentPosition), O = e || cA.test(J.contains) ?
            function(A, e) {
                var t = 9 === A.nodeType ? A.documentElement: A,
                n = e && e.parentNode;
                return A === n || !(!n || 1 !== n.nodeType || !(t.contains ? t.contains(n) : A.compareDocumentPosition && 16 & A.compareDocumentPosition(n)))
            }: function(A, e) {
                if (e) for (; e = e.parentNode;) if (e === A) return ! 0;
                return ! 1
            },
            V = e ?
            function(A, e) {
                if (A === e) return v = !0,
                0;
                var t = !A.compareDocumentPosition - !e.compareDocumentPosition;
                return t ? t: (t = (A.ownerDocument || A) === (e.ownerDocument || e) ? A.compareDocumentPosition(e) : 1, 1 & t || !p.sortDetached && e.compareDocumentPosition(A) === t ? A === P || A.ownerDocument === S && O(S, A) ? -1 : e === P || e.ownerDocument === S && O(S, e) ? 1 : R ? AA(R, A) - AA(R, e) : 0 : 4 & t ? -1 : 1)
            }: function(A, e) {
                if (A === e) return v = !0,
                0;
                var t, n = 0,
                g = A.parentNode,
                i = e.parentNode,
                r = [A],
                B = [e];
                if (!g || !i) return A === P ? -1 : e === P ? 1 : g ? -1 : i ? 1 : R ? AA(R, A) - AA(R, e) : 0;
                if (g === i) return o(A, e);
                for (t = A; t = t.parentNode;) r.unshift(t);
                for (t = e; t = t.parentNode;) B.unshift(t);
                for (; r[n] === B[n];) n++;
                return n ? o(r[n], B[n]) : r[n] === S ? -1 : B[n] === S ? 1 : 0
            },
            P) : P
        },
        e.matches = function(A, t) {
            return e(A, null, null, t)
        },
        e.matchesSelector = function(A, t) {
            if ((A.ownerDocument || A) !== P && K(A), t = t.replace(aA, "='$1']"), p.matchesSelector && m && !X[t + " "] && (!k || !k.test(t)) && (!N || !N.test(t))) try {
                var n = L.call(A, t);
                if (n || p.disconnectedMatch || A.document && 11 !== A.document.nodeType) return n
            } catch(g) {}
            return e(t, P, null, [A]).length > 0
        },
        e.contains = function(A, e) {
            return (A.ownerDocument || A) !== P && K(A),
            O(A, e)
        },
        e.attr = function(A, e) { (A.ownerDocument || A) !== P && K(A);
            var t = d.attrHandle[e.toLowerCase()],
            n = t && W.call(d.attrHandle, e.toLowerCase()) ? t(A, e, !m) : void 0;
            return void 0 !== n ? n: p.attributes || !m ? A.getAttribute(e) : (n = A.getAttributeNode(e)) && n.specified ? n.value: null
        },
        e.escape = function(A) {
            return (A + "").replace(DA, pA)
        },
        e.error = function(A) {
            throw new Error("Syntax error, unrecognized expression: " + A)
        },
        e.uniqueSort = function(A) {
            var e, t = [],
            n = 0,
            g = 0;
            if (v = !p.detectDuplicates, R = !p.sortStable && A.slice(0), A.sort(V), v) {
                for (; e = A[g++];) e === A[g] && (n = t.push(g));
                for (; n--;) A.splice(t[n], 1)
            }
            return R = null,
            A
        },
        M = e.getText = function(A) {
            var e, t = "",
            n = 0,
            g = A.nodeType;
            if (g) {
                if (1 === g || 9 === g || 11 === g) {
                    if ("string" == typeof A.textContent) return A.textContent;
                    for (A = A.firstChild; A; A = A.nextSibling) t += M(A)
                } else if (3 === g || 4 === g) return A.nodeValue
            } else for (; e = A[n++];) t += M(e);
            return t
        },
        d = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: IA,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(A) {
                    return A[1] = A[1].replace(uA, lA),
                    A[3] = (A[3] || A[4] || A[5] || "").replace(uA, lA),
                    "~=" === A[2] && (A[3] = " " + A[3] + " "),
                    A.slice(0, 4)
                },
                CHILD: function(A) {
                    return A[1] = A[1].toLowerCase(),
                    "nth" === A[1].slice(0, 3) ? (A[3] || e.error(A[0]), A[4] = +(A[4] ? A[5] + (A[6] || 1) : 2 * ("even" === A[3] || "odd" === A[3])), A[5] = +(A[7] + A[8] || "odd" === A[3])) : A[3] && e.error(A[0]),
                    A
                },
                PSEUDO: function(A) {
                    var e, t = !A[6] && A[2];
                    return IA.CHILD.test(A[0]) ? null: (A[3] ? A[2] = A[4] || A[5] || "": t && sA.test(t) && (e = G(t, !0)) && (e = t.indexOf(")", t.length - e) - t.length) && (A[0] = A[0].slice(0, e), A[2] = t.slice(0, e)), A.slice(0, 3))
                }
            },
            filter: {
                TAG: function(A) {
                    var e = A.replace(uA, lA).toLowerCase();
                    return "*" === A ?
                    function() {
                        return ! 0
                    }: function(A) {
                        return A.nodeName && A.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(A) {
                    var e = y[A + " "];
                    return e || (e = new RegExp("(^|" + tA + ")" + A + "(" + tA + "|$)")) && y(A,
                    function(A) {
                        return e.test("string" == typeof A.className && A.className || "undefined" != typeof A.getAttribute && A.getAttribute("class") || "")
                    })
                },
                ATTR: function(A, t, n) {
                    return function(g) {
                        var i = e.attr(g, A);
                        return null == i ? "!=" === t: !t || (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice( - n.length) === n: "~=" === t ? (" " + i.replace(oA, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(A, e, t, n, g) {
                    var i = "nth" !== A.slice(0, 3),
                    o = "last" !== A.slice( - 4),
                    r = "of-type" === e;
                    return 1 === n && 0 === g ?
                    function(A) {
                        return !! A.parentNode
                    }: function(e, t, B) {
                        var C, a, s, E, I, Q, h = i !== o ? "nextSibling": "previousSibling",
                        c = e.parentNode,
                        w = r && e.nodeName.toLowerCase(),
                        f = !B && !r,
                        u = !1;
                        if (c) {
                            if (i) {
                                for (; h;) {
                                    for (E = e; E = E[h];) if (r ? E.nodeName.toLowerCase() === w: 1 === E.nodeType) return ! 1;
                                    Q = h = "only" === A && !Q && "nextSibling"
                                }
                                return ! 0
                            }
                            if (Q = [o ? c.firstChild: c.lastChild], o && f) {
                                for (E = c, s = E[T] || (E[T] = {}), a = s[E.uniqueID] || (s[E.uniqueID] = {}), C = a[A] || [], I = C[0] === b && C[1], u = I && C[2], E = I && c.childNodes[I]; E = ++I && E && E[h] || (u = I = 0) || Q.pop();) if (1 === E.nodeType && ++u && E === e) {
                                    a[A] = [b, I, u];
                                    break
                                }
                            } else if (f && (E = e, s = E[T] || (E[T] = {}), a = s[E.uniqueID] || (s[E.uniqueID] = {}), C = a[A] || [], I = C[0] === b && C[1], u = I), u === !1) for (; (E = ++I && E && E[h] || (u = I = 0) || Q.pop()) && ((r ? E.nodeName.toLowerCase() !== w: 1 !== E.nodeType) || !++u || (f && (s = E[T] || (E[T] = {}), a = s[E.uniqueID] || (s[E.uniqueID] = {}), a[A] = [b, u]), E !== e)););
                            return u -= g,
                            u === n || u % n === 0 && u / n >= 0
                        }
                    }
                },
                PSEUDO: function(A, t) {
                    var g, i = d.pseudos[A] || d.setFilters[A.toLowerCase()] || e.error("unsupported pseudo: " + A);
                    return i[T] ? i(t) : i.length > 1 ? (g = [A, A, "", t], d.setFilters.hasOwnProperty(A.toLowerCase()) ? n(function(A, e) {
                        for (var n, g = i(A, t), o = g.length; o--;) n = AA(A, g[o]),
                        A[n] = !(e[n] = g[o])
                    }) : function(A) {
                        return i(A, 0, g)
                    }) : i
                }
            },
            pseudos: {
                not: n(function(A) {
                    var e = [],
                    t = [],
                    g = Y(A.replace(rA, "$1"));
                    return g[T] ? n(function(A, e, t, n) {
                        for (var i, o = g(A, null, n, []), r = A.length; r--;)(i = o[r]) && (A[r] = !(e[r] = i))
                    }) : function(A, n, i) {
                        return e[0] = A,
                        g(e, null, i, t),
                        e[0] = null,
                        !t.pop()
                    }
                }),
                has: n(function(A) {
                    return function(t) {
                        return e(A, t).length > 0
                    }
                }),
                contains: n(function(A) {
                    return A = A.replace(uA, lA),
                    function(e) {
                        return (e.textContent || e.innerText || M(e)).indexOf(A) > -1
                    }
                }),
                lang: n(function(A) {
                    return EA.test(A || "") || e.error("unsupported lang: " + A),
                    A = A.replace(uA, lA).toLowerCase(),
                    function(e) {
                        var t;
                        do
                        if (t = m ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return t = t.toLowerCase(),
                        t === A || 0 === t.indexOf(A + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var t = A.location && A.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(A) {
                    return A === J
                },
                focus: function(A) {
                    return A === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(A.type || A.href || ~A.tabIndex)
                },
                enabled: C(!1),
                disabled: C(!0),
                checked: function(A) {
                    var e = A.nodeName.toLowerCase();
                    return "input" === e && !!A.checked || "option" === e && !!A.selected
                },
                selected: function(A) {
                    return A.parentNode && A.parentNode.selectedIndex,
                    A.selected === !0
                },
                empty: function(A) {
                    for (A = A.firstChild; A; A = A.nextSibling) if (A.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(A) {
                    return ! d.pseudos.empty(A)
                },
                header: function(A) {
                    return hA.test(A.nodeName)
                },
                input: function(A) {
                    return QA.test(A.nodeName)
                },
                button: function(A) {
                    var e = A.nodeName.toLowerCase();
                    return "input" === e && "button" === A.type || "button" === e
                },
                text: function(A) {
                    var e;
                    return "input" === A.nodeName.toLowerCase() && "text" === A.type && (null == (e = A.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(A, e) {
                    return [e - 1]
                }),
                eq: a(function(A, e, t) {
                    return [t < 0 ? t + e: t]
                }),
                even: a(function(A, e) {
                    for (var t = 0; t < e; t += 2) A.push(t);
                    return A
                }),
                odd: a(function(A, e) {
                    for (var t = 1; t < e; t += 2) A.push(t);
                    return A
                }),
                lt: a(function(A, e, t) {
                    for (var n = t < 0 ? t + e: t; --n >= 0;) A.push(n);
                    return A
                }),
                gt: a(function(A, e, t) {
                    for (var n = t < 0 ? t + e: t; ++n < e;) A.push(n);
                    return A
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (D in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[D] = r(D);
        for (D in {
            submit: !0,
            reset: !0
        }) d.pseudos[D] = B(D);
        return E.prototype = d.filters = d.pseudos,
        d.setFilters = new E,
        G = e.tokenize = function(A, t) {
            var n, g, i, o, r, B, C, a = j[A + " "];
            if (a) return t ? 0 : a.slice(0);
            for (r = A, B = [], C = d.preFilter; r;) {
                n && !(g = BA.exec(r)) || (g && (r = r.slice(g[0].length) || r), B.push(i = [])),
                n = !1,
                (g = CA.exec(r)) && (n = g.shift(), i.push({
                    value: n,
                    type: g[0].replace(rA, " ")
                }), r = r.slice(n.length));
                for (o in d.filter) ! (g = IA[o].exec(r)) || C[o] && !(g = C[o](g)) || (n = g.shift(), i.push({
                    value: n,
                    type: o,
                    matches: g
                }), r = r.slice(n.length));
                if (!n) break
            }
            return t ? r.length: r ? e.error(A) : j(A, B).slice(0)
        },
        Y = e.compile = function(A, e) {
            var t, n = [],
            g = [],
            i = X[A + " "];
            if (!i) {
                for (e || (e = G(A)), t = e.length; t--;) i = u(e[t]),
                i[T] ? n.push(i) : g.push(i);
                i = X(A, l(g, n)),
                i.selector = A
            }
            return i
        },
        H = e.select = function(A, e, t, n) {
            var g, i, o, r, B, C = "function" == typeof A && A,
            a = !n && G(A = C.selector || A);
            if (t = t || [], 1 === a.length) {
                if (i = a[0] = a[0].slice(0), i.length > 2 && "ID" === (o = i[0]).type && p.getById && 9 === e.nodeType && m && d.relative[i[1].type]) {
                    if (e = (d.find.ID(o.matches[0].replace(uA, lA), e) || [])[0], !e) return t;
                    C && (e = e.parentNode),
                    A = A.slice(i.shift().value.length)
                }
                for (g = IA.needsContext.test(A) ? 0 : i.length; g--&&(o = i[g], !d.relative[r = o.type]);) if ((B = d.find[r]) && (n = B(o.matches[0].replace(uA, lA), fA.test(i[0].type) && s(e.parentNode) || e))) {
                    if (i.splice(g, 1), A = n.length && I(i), !A) return $.apply(t, n),
                    t;
                    break
                }
            }
            return (C || Y(A, a))(n, e, !m, t, !e || fA.test(A) && s(e.parentNode) || e),
            t
        },
        p.sortStable = T.split("").sort(V).join("") === T,
        p.detectDuplicates = !!v,
        K(),
        p.sortDetached = g(function(A) {
            return 1 & A.compareDocumentPosition(P.createElement("fieldset"))
        }),
        g(function(A) {
            return A.innerHTML = "<a href='#'></a>",
            "#" === A.firstChild.getAttribute("href")
        }) || i("type|href|height|width",
        function(A, e, t) {
            if (!t) return A.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        p.attributes && g(function(A) {
            return A.innerHTML = "<input/>",
            A.firstChild.setAttribute("value", ""),
            "" === A.firstChild.getAttribute("value")
        }) || i("value",
        function(A, e, t) {
            if (!t && "input" === A.nodeName.toLowerCase()) return A.defaultValue
        }),
        g(function(A) {
            return null == A.getAttribute("disabled")
        }) || i(eA,
        function(A, e, t) {
            var n;
            if (!t) return A[e] === !0 ? e.toLowerCase() : (n = A.getAttributeNode(e)) && n.specified ? n.value: null
        }),
        e
    } (A);
    EA.find = wA,
    EA.expr = wA.selectors,
    EA.expr[":"] = EA.expr.pseudos,
    EA.uniqueSort = EA.unique = wA.uniqueSort,
    EA.text = wA.getText,
    EA.isXMLDoc = wA.isXML,
    EA.contains = wA.contains,
    EA.escapeSelector = wA.escape;
    var fA = function(A, e, t) {
        for (var n = [], g = void 0 !== t; (A = A[e]) && 9 !== A.nodeType;) if (1 === A.nodeType) {
            if (g && EA(A).is(t)) break;
            n.push(A)
        }
        return n
    },
    uA = function(A, e) {
        for (var t = []; A; A = A.nextSibling) 1 === A.nodeType && A !== e && t.push(A);
        return t
    },
    lA = EA.expr.match.needsContext,
    DA = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    pA = /^.[^:#\[\.,]*$/;
    EA.filter = function(A, e, t) {
        var n = e[0];
        return t && (A = ":not(" + A + ")"),
        1 === e.length && 1 === n.nodeType ? EA.find.matchesSelector(n, A) ? [n] : [] : EA.find.matches(A, EA.grep(e,
        function(A) {
            return 1 === A.nodeType
        }))
    },
    EA.fn.extend({
        find: function(A) {
            var e, t, n = this.length,
            g = this;
            if ("string" != typeof A) return this.pushStack(EA(A).filter(function() {
                for (e = 0; e < n; e++) if (EA.contains(g[e], this)) return ! 0
            }));
            for (t = this.pushStack([]), e = 0; e < n; e++) EA.find(A, g[e], t);
            return n > 1 ? EA.uniqueSort(t) : t
        },
        filter: function(A) {
            return this.pushStack(g(this, A || [], !1))
        },
        not: function(A) {
            return this.pushStack(g(this, A || [], !0))
        },
        is: function(A) {
            return !! g(this, "string" == typeof A && lA.test(A) ? EA(A) : A || [], !1).length
        }
    });
    var dA, MA = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    FA = EA.fn.init = function(A, e, t) {
        var n, g;
        if (!A) return this;
        if (t = t || dA, "string" == typeof A) {
            if (n = "<" === A[0] && ">" === A[A.length - 1] && A.length >= 3 ? [null, A, null] : MA.exec(A), !n || !n[1] && e) return ! e || e.jquery ? (e || t).find(A) : this.constructor(e).find(A);
            if (n[1]) {
                if (e = e instanceof EA ? e[0] : e, EA.merge(this, EA.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e: _, !0)), DA.test(n[1]) && EA.isPlainObject(e)) for (n in e) EA.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return g = _.getElementById(n[2]),
            g && (this[0] = g, this.length = 1),
            this
        }
        return A.nodeType ? (this[0] = A, this.length = 1, this) : EA.isFunction(A) ? void 0 !== t.ready ? t.ready(A) : A(EA) : EA.makeArray(A, this)
    };
    FA.prototype = EA.fn,
    dA = EA(_);
    var GA = /^(?:parents|prev(?:Until|All))/,
    YA = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    EA.fn.extend({
        has: function(A) {
            var e = EA(A, this),
            t = e.length;
            return this.filter(function() {
                for (var A = 0; A < t; A++) if (EA.contains(this, e[A])) return ! 0
            })
        },
        closest: function(A, e) {
            var t, n = 0,
            g = this.length,
            i = [],
            o = "string" != typeof A && EA(A);
            if (!lA.test(A)) for (; n < g; n++) for (t = this[n]; t && t !== e; t = t.parentNode) if (t.nodeType < 11 && (o ? o.index(t) > -1 : 1 === t.nodeType && EA.find.matchesSelector(t, A))) {
                i.push(t);
                break
            }
            return this.pushStack(i.length > 1 ? EA.uniqueSort(i) : i)
        },
        index: function(A) {
            return A ? "string" == typeof A ? gA.call(EA(A), this[0]) : gA.call(this, A.jquery ? A[0] : A) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(A, e) {
            return this.pushStack(EA.uniqueSort(EA.merge(this.get(), EA(A, e))))
        },
        addBack: function(A) {
            return this.add(null == A ? this.prevObject: this.prevObject.filter(A))
        }
    }),
    EA.each({
        parent: function(A) {
            var e = A.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(A) {
            return fA(A, "parentNode")
        },
        parentsUntil: function(A, e, t) {
            return fA(A, "parentNode", t)
        },
        next: function(A) {
            return i(A, "nextSibling")
        },
        prev: function(A) {
            return i(A, "previousSibling")
        },
        nextAll: function(A) {
            return fA(A, "nextSibling")
        },
        prevAll: function(A) {
            return fA(A, "previousSibling")
        },
        nextUntil: function(A, e, t) {
            return fA(A, "nextSibling", t)
        },
        prevUntil: function(A, e, t) {
            return fA(A, "previousSibling", t)
        },
        siblings: function(A) {
            return uA((A.parentNode || {}).firstChild, A)
        },
        children: function(A) {
            return uA(A.firstChild)
        },
        contents: function(A) {
            return A.contentDocument || EA.merge([], A.childNodes)
        }
    },
    function(A, e) {
        EA.fn[A] = function(t, n) {
            var g = EA.map(this, e, t);
            return "Until" !== A.slice( - 5) && (n = t),
            n && "string" == typeof n && (g = EA.filter(n, g)),
            this.length > 1 && (YA[A] || EA.uniqueSort(g), GA.test(A) && g.reverse()),
            this.pushStack(g)
        }
    });
    var HA = /\S+/g;
    EA.Callbacks = function(A) {
        A = "string" == typeof A ? o(A) : EA.extend({},
        A);
        var e, t, n, g, i = [],
        r = [],
        B = -1,
        C = function() {
            for (g = A.once, n = e = !0; r.length; B = -1) for (t = r.shift(); ++B < i.length;) i[B].apply(t[0], t[1]) === !1 && A.stopOnFalse && (B = i.length, t = !1);
            A.memory || (t = !1),
            e = !1,
            g && (i = t ? [] : "")
        },
        a = {
            add: function() {
                return i && (t && !e && (B = i.length - 1, r.push(t)),
                function n(e) {
                    EA.each(e,
                    function(e, t) {
                        EA.isFunction(t) ? A.unique && a.has(t) || i.push(t) : t && t.length && "string" !== EA.type(t) && n(t)
                    })
                } (arguments), t && !e && C()),
                this
            },
            remove: function() {
                return EA.each(arguments,
                function(A, e) {
                    for (var t; (t = EA.inArray(e, i, t)) > -1;) i.splice(t, 1),
                    t <= B && B--
                }),
                this
            },
            has: function(A) {
                return A ? EA.inArray(A, i) > -1 : i.length > 0
            },
            empty: function() {
                return i && (i = []),
                this
            },
            disable: function() {
                return g = r = [],
                i = t = "",
                this
            },
            disabled: function() {
                return ! i
            },
            lock: function() {
                return g = r = [],
                t || e || (i = t = ""),
                this
            },
            locked: function() {
                return !! g
            },
            fireWith: function(A, t) {
                return g || (t = t || [], t = [A, t.slice ? t.slice() : t], r.push(t), e || C()),
                this
            },
            fire: function() {
                return a.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! n
            }
        };
        return a
    },
    EA.extend({
        Deferred: function(e) {
            var t = [["notify", "progress", EA.Callbacks("memory"), EA.Callbacks("memory"), 2], ["resolve", "done", EA.Callbacks("once memory"), EA.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", EA.Callbacks("once memory"), EA.Callbacks("once memory"), 1, "rejected"]],
            n = "pending",
            g = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                "catch": function(A) {
                    return g.then(null, A)
                },
                pipe: function() {
                    var A = arguments;
                    return EA.Deferred(function(e) {
                        EA.each(t,
                        function(t, n) {
                            var g = EA.isFunction(A[n[4]]) && A[n[4]];
                            i[n[1]](function() {
                                var A = g && g.apply(this, arguments);
                                A && EA.isFunction(A.promise) ? A.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, g ? [A] : arguments)
                            })
                        }),
                        A = null
                    }).promise()
                },
                then: function(e, n, g) {
                    function i(e, t, n, g) {
                        return function() {
                            var C = this,
                            a = arguments,
                            s = function() {
                                var A, s;
                                if (! (e < o)) {
                                    if (A = n.apply(C, a), A === t.promise()) throw new TypeError("Thenable self-resolution");
                                    s = A && ("object" == typeof A || "function" == typeof A) && A.then,
                                    EA.isFunction(s) ? g ? s.call(A, i(o, t, r, g), i(o, t, B, g)) : (o++, s.call(A, i(o, t, r, g), i(o, t, B, g), i(o, t, r, t.notifyWith))) : (n !== r && (C = void 0, a = [A]), (g || t.resolveWith)(C, a))
                                }
                            },
                            E = g ? s: function() {
                                try {
                                    s()
                                } catch(A) {
                                    EA.Deferred.exceptionHook && EA.Deferred.exceptionHook(A, E.stackTrace),
                                    e + 1 >= o && (n !== B && (C = void 0, a = [A]), t.rejectWith(C, a))
                                }
                            };
                            e ? E() : (EA.Deferred.getStackHook && (E.stackTrace = EA.Deferred.getStackHook()), A.setTimeout(E))
                        }
                    }
                    var o = 0;
                    return EA.Deferred(function(A) {
                        t[0][3].add(i(0, A, EA.isFunction(g) ? g: r, A.notifyWith)),
                        t[1][3].add(i(0, A, EA.isFunction(e) ? e: r)),
                        t[2][3].add(i(0, A, EA.isFunction(n) ? n: B))
                    }).promise()
                },
                promise: function(A) {
                    return null != A ? EA.extend(A, g) : g
                }
            },
            i = {};
            return EA.each(t,
            function(A, e) {
                var o = e[2],
                r = e[5];
                g[e[1]] = o.add,
                r && o.add(function() {
                    n = r
                },
                t[3 - A][2].disable, t[0][2].lock),
                o.add(e[3].fire),
                i[e[0]] = function() {
                    return i[e[0] + "With"](this === i ? void 0 : this, arguments),
                    this
                },
                i[e[0] + "With"] = o.fireWith
            }),
            g.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(A) {
            var e = arguments.length,
            t = e,
            n = Array(t),
            g = eA.call(arguments),
            i = EA.Deferred(),
            o = function(A) {
                return function(t) {
                    n[A] = this,
                    g[A] = arguments.length > 1 ? eA.call(arguments) : t,
                    --e || i.resolveWith(n, g)
                }
            };
            if (e <= 1 && (C(A, i.done(o(t)).resolve, i.reject), "pending" === i.state() || EA.isFunction(g[t] && g[t].then))) return i.then();
            for (; t--;) C(g[t], o(t), i.reject);
            return i.promise()
        }
    });
    var UA = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    EA.Deferred.exceptionHook = function(e, t) {
        A.console && A.console.warn && e && UA.test(e.name) && A.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    },
    EA.readyException = function(e) {
        A.setTimeout(function() {
            throw e
        })
    };
    var RA = EA.Deferred();
    EA.fn.ready = function(A) {
        return RA.then(A)["catch"](function(A) {
            EA.readyException(A)
        }),
        this
    },
    EA.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(A) {
            A ? EA.readyWait++:EA.ready(!0)
        },
        ready: function(A) { (A === !0 ? --EA.readyWait: EA.isReady) || (EA.isReady = !0, A !== !0 && --EA.readyWait > 0 || RA.resolveWith(_, [EA]))
        }
    }),
    EA.ready.then = RA.then,
    "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? A.setTimeout(EA.ready) : (_.addEventListener("DOMContentLoaded", a), A.addEventListener("load", a));
    var vA = function(A, e, t, n, g, i, o) {
        var r = 0,
        B = A.length,
        C = null == t;
        if ("object" === EA.type(t)) {
            g = !0;
            for (r in t) vA(A, e, r, t[r], !0, i, o)
        } else if (void 0 !== n && (g = !0, EA.isFunction(n) || (o = !0), C && (o ? (e.call(A, n), e = null) : (C = e, e = function(A, e, t) {
            return C.call(EA(A), t)
        })), e)) for (; r < B; r++) e(A[r], t, o ? n: n.call(A[r], r, e(A[r], t)));
        return g ? A: C ? e.call(A) : B ? e(A[0], t) : i
    },
    KA = function(A) {
        return 1 === A.nodeType || 9 === A.nodeType || !+A.nodeType
    };
    s.uid = 1,
    s.prototype = {
        cache: function(A) {
            var e = A[this.expando];
            return e || (e = {},
            KA(A) && (A.nodeType ? A[this.expando] = e: Object.defineProperty(A, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(A, e, t) {
            var n, g = this.cache(A);
            if ("string" == typeof e) g[EA.camelCase(e)] = t;
            else for (n in e) g[EA.camelCase(n)] = e[n];
            return g
        },
        get: function(A, e) {
            return void 0 === e ? this.cache(A) : A[this.expando] && A[this.expando][EA.camelCase(e)]
        },
        access: function(A, e, t) {
            return void 0 === e || e && "string" == typeof e && void 0 === t ? this.get(A, e) : (this.set(A, e, t), void 0 !== t ? t: e)
        },
        remove: function(A, e) {
            var t, n = A[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    EA.isArray(e) ? e = e.map(EA.camelCase) : (e = EA.camelCase(e), e = e in n ? [e] : e.match(HA) || []),
                    t = e.length;
                    for (; t--;) delete n[e[t]]
                } (void 0 === e || EA.isEmptyObject(n)) && (A.nodeType ? A[this.expando] = void 0 : delete A[this.expando])
            }
        },
        hasData: function(A) {
            var e = A[this.expando];
            return void 0 !== e && !EA.isEmptyObject(e)
        }
    };
    var PA = new s,
    JA = new s,
    mA = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    NA = /[A-Z]/g;
    EA.extend({
        hasData: function(A) {
            return JA.hasData(A) || PA.hasData(A)
        },
        data: function(A, e, t) {
            return JA.access(A, e, t)
        },
        removeData: function(A, e) {
            JA.remove(A, e)
        },
        _data: function(A, e, t) {
            return PA.access(A, e, t)
        },
        _removeData: function(A, e) {
            PA.remove(A, e)
        }
    }),
    EA.fn.extend({
        data: function(A, e) {
            var t, n, g, i = this[0],
            o = i && i.attributes;
            if (void 0 === A) {
                if (this.length && (g = JA.get(i), 1 === i.nodeType && !PA.get(i, "hasDataAttrs"))) {
                    for (t = o.length; t--;) o[t] && (n = o[t].name, 0 === n.indexOf("data-") && (n = EA.camelCase(n.slice(5)), E(i, n, g[n])));
                    PA.set(i, "hasDataAttrs", !0)
                }
                return g
            }
            return "object" == typeof A ? this.each(function() {
                JA.set(this, A)
            }) : vA(this,
            function(e) {
                var t;
                if (i && void 0 === e) {
                    if (t = JA.get(i, A), void 0 !== t) return t;
                    if (t = E(i, A), void 0 !== t) return t
                } else this.each(function() {
                    JA.set(this, A, e)
                })
            },
            null, e, arguments.length > 1, null, !0)
        },
        removeData: function(A) {
            return this.each(function() {
                JA.remove(this, A)
            })
        }
    }),
    EA.extend({
        queue: function(A, e, t) {
            var n;
            if (A) return e = (e || "fx") + "queue",
            n = PA.get(A, e),
            t && (!n || EA.isArray(t) ? n = PA.access(A, e, EA.makeArray(t)) : n.push(t)),
            n || []
        },
        dequeue: function(A, e) {
            e = e || "fx";
            var t = EA.queue(A, e),
            n = t.length,
            g = t.shift(),
            i = EA._queueHooks(A, e),
            o = function() {
                EA.dequeue(A, e)
            };
            "inprogress" === g && (g = t.shift(), n--),
            g && ("fx" === e && t.unshift("inprogress"), delete i.stop, g.call(A, o, i)),
            !n && i && i.empty.fire()
        },
        _queueHooks: function(A, e) {
            var t = e + "queueHooks";
            return PA.get(A, t) || PA.access(A, t, {
                empty: EA.Callbacks("once memory").add(function() {
                    PA.remove(A, [e + "queue", t])
                })
            })
        }
    }),
    EA.fn.extend({
        queue: function(A, e) {
            var t = 2;
            return "string" != typeof A && (e = A, A = "fx", t--),
            arguments.length < t ? EA.queue(this[0], A) : void 0 === e ? this: this.each(function() {
                var t = EA.queue(this, A, e);
                EA._queueHooks(this, A),
                "fx" === A && "inprogress" !== t[0] && EA.dequeue(this, A)
            })
        },
        dequeue: function(A) {
            return this.each(function() {
                EA.dequeue(this, A)
            })
        },
        clearQueue: function(A) {
            return this.queue(A || "fx", [])
        },
        promise: function(A, e) {
            var t, n = 1,
            g = EA.Deferred(),
            i = this,
            o = this.length,
            r = function() {--n || g.resolveWith(i, [i])
            };
            for ("string" != typeof A && (e = A, A = void 0), A = A || "fx"; o--;) t = PA.get(i[o], A + "queueHooks"),
            t && t.empty && (n++, t.empty.add(r));
            return r(),
            g.promise(e)
        }
    });
    var kA = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    LA = new RegExp("^(?:([+-])=|)(" + kA + ")([a-z%]*)$", "i"),
    OA = ["Top", "Right", "Bottom", "Left"],
    TA = function(A, e) {
        return A = e || A,
        "none" === A.style.display || "" === A.style.display && EA.contains(A.ownerDocument, A) && "none" === EA.css(A, "display")
    },
    SA = function(A, e, t, n) {
        var g, i, o = {};
        for (i in e) o[i] = A.style[i],
        A.style[i] = e[i];
        g = t.apply(A, n || []);
        for (i in e) A.style[i] = o[i];
        return g
    },
    bA = {};
    EA.fn.extend({
        show: function() {
            return h(this, !0)
        },
        hide: function() {
            return h(this)
        },
        toggle: function(A) {
            return "boolean" == typeof A ? A ? this.show() : this.hide() : this.each(function() {
                TA(this) ? EA(this).show() : EA(this).hide()
            })
        }
    });
    var xA = /^(?:checkbox|radio)$/i,
    yA = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    jA = /^$|\/(?:java|ecma)script/i,
    XA = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    XA.optgroup = XA.option,
    XA.tbody = XA.tfoot = XA.colgroup = XA.caption = XA.thead,
    XA.th = XA.td;
    var VA = /<|&#?\w+;/; !
    function() {
        var A = _.createDocumentFragment(),
        e = A.appendChild(_.createElement("div")),
        t = _.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        aA.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        aA.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    } ();
    var WA = _.documentElement,
    zA = /^key/,
    qA = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ZA = /^([^.]*)(?:\.(.+)|)/;
    EA.event = {
        global: {},
        add: function(A, e, t, n, g) {
            var i, o, r, B, C, a, s, E, I, Q, h, c = PA.get(A);
            if (c) for (t.handler && (i = t, t = i.handler, g = i.selector), g && EA.find.matchesSelector(WA, g), t.guid || (t.guid = EA.guid++), (B = c.events) || (B = c.events = {}), (o = c.handle) || (o = c.handle = function(e) {
                return "undefined" != typeof EA && EA.event.triggered !== e.type ? EA.event.dispatch.apply(A, arguments) : void 0
            }), e = (e || "").match(HA) || [""], C = e.length; C--;) r = ZA.exec(e[C]) || [],
            I = h = r[1],
            Q = (r[2] || "").split(".").sort(),
            I && (s = EA.event.special[I] || {},
            I = (g ? s.delegateType: s.bindType) || I, s = EA.event.special[I] || {},
            a = EA.extend({
                type: I,
                origType: h,
                data: n,
                handler: t,
                guid: t.guid,
                selector: g,
                needsContext: g && EA.expr.match.needsContext.test(g),
                namespace: Q.join(".")
            },
            i), (E = B[I]) || (E = B[I] = [], E.delegateCount = 0, s.setup && s.setup.call(A, n, Q, o) !== !1 || A.addEventListener && A.addEventListener(I, o)), s.add && (s.add.call(A, a), a.handler.guid || (a.handler.guid = t.guid)), g ? E.splice(E.delegateCount++, 0, a) : E.push(a), EA.event.global[I] = !0)
        },
        remove: function(A, e, t, n, g) {
            var i, o, r, B, C, a, s, E, I, Q, h, c = PA.hasData(A) && PA.get(A);
            if (c && (B = c.events)) {
                for (e = (e || "").match(HA) || [""], C = e.length; C--;) if (r = ZA.exec(e[C]) || [], I = h = r[1], Q = (r[2] || "").split(".").sort(), I) {
                    for (s = EA.event.special[I] || {},
                    I = (n ? s.delegateType: s.bindType) || I, E = B[I] || [], r = r[2] && new RegExp("(^|\\.)" + Q.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = i = E.length; i--;) a = E[i],
                    !g && h !== a.origType || t && t.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (E.splice(i, 1), a.selector && E.delegateCount--, s.remove && s.remove.call(A, a));
                    o && !E.length && (s.teardown && s.teardown.call(A, Q, c.handle) !== !1 || EA.removeEvent(A, I, c.handle), delete B[I])
                } else for (I in B) EA.event.remove(A, I + e[C], t, n, !0);
                EA.isEmptyObject(B) && PA.remove(A, "handle events")
            }
        },
        dispatch: function(A) {
            var e, t, n, g, i, o, r = EA.event.fix(A),
            B = new Array(arguments.length),
            C = (PA.get(this, "events") || {})[r.type] || [],
            a = EA.event.special[r.type] || {};
            for (B[0] = r, e = 1; e < arguments.length; e++) B[e] = arguments[e];
            if (r.delegateTarget = this, !a.preDispatch || a.preDispatch.call(this, r) !== !1) {
                for (o = EA.event.handlers.call(this, r, C), e = 0; (g = o[e++]) && !r.isPropagationStopped();) for (r.currentTarget = g.elem, t = 0; (i = g.handlers[t++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(i.namespace) || (r.handleObj = i, r.data = i.data, n = ((EA.event.special[i.origType] || {}).handle || i.handler).apply(g.elem, B), void 0 !== n && (r.result = n) === !1 && (r.preventDefault(), r.stopPropagation()));
                return a.postDispatch && a.postDispatch.call(this, r),
                r.result
            }
        },
        handlers: function(A, e) {
            var t, n, g, i, o = [],
            r = e.delegateCount,
            B = A.target;
            if (r && B.nodeType && ("click" !== A.type || isNaN(A.button) || A.button < 1)) for (; B !== this; B = B.parentNode || this) if (1 === B.nodeType && (B.disabled !== !0 || "click" !== A.type)) {
                for (n = [], t = 0; t < r; t++) i = e[t],
                g = i.selector + " ",
                void 0 === n[g] && (n[g] = i.needsContext ? EA(g, this).index(B) > -1 : EA.find(g, this, null, [B]).length),
                n[g] && n.push(i);
                n.length && o.push({
                    elem: B,
                    handlers: n
                })
            }
            return r < e.length && o.push({
                elem: this,
                handlers: e.slice(r)
            }),
            o
        },
        addProp: function(A, e) {
            Object.defineProperty(EA.Event.prototype, A, {
                enumerable: !0,
                configurable: !0,
                get: EA.isFunction(e) ?
                function() {
                    if (this.originalEvent) return e(this.originalEvent)
                }: function() {
                    if (this.originalEvent) return this.originalEvent[A]
                },
                set: function(e) {
                    Object.defineProperty(this, A, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(A) {
            return A[EA.expando] ? A: new EA.Event(A)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== D() && this.focus) return this.focus(),
                    !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === D() && this.blur) return this.blur(),
                    !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && EA.nodeName(this, "input")) return this.click(),
                    !1
                },
                _default: function(A) {
                    return EA.nodeName(A.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(A) {
                    void 0 !== A.result && A.originalEvent && (A.originalEvent.returnValue = A.result)
                }
            }
        }
    },
    EA.removeEvent = function(A, e, t) {
        A.removeEventListener && A.removeEventListener(e, t)
    },
    EA.Event = function(A, e) {
        return this instanceof EA.Event ? (A && A.type ? (this.originalEvent = A, this.type = A.type, this.isDefaultPrevented = A.defaultPrevented || void 0 === A.defaultPrevented && A.returnValue === !1 ? u: l, this.target = A.target && 3 === A.target.nodeType ? A.target.parentNode: A.target, this.currentTarget = A.currentTarget, this.relatedTarget = A.relatedTarget) : this.type = A, e && EA.extend(this, e), this.timeStamp = A && A.timeStamp || EA.now(), void(this[EA.expando] = !0)) : new EA.Event(A, e)
    },
    EA.Event.prototype = {
        constructor: EA.Event,
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        isSimulated: !1,
        preventDefault: function() {
            var A = this.originalEvent;
            this.isDefaultPrevented = u,
            A && !this.isSimulated && A.preventDefault()
        },
        stopPropagation: function() {
            var A = this.originalEvent;
            this.isPropagationStopped = u,
            A && !this.isSimulated && A.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var A = this.originalEvent;
            this.isImmediatePropagationStopped = u,
            A && !this.isSimulated && A.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    EA.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(A) {
            var e = A.button;
            return null == A.which && zA.test(A.type) ? null != A.charCode ? A.charCode: A.keyCode: !A.which && void 0 !== e && qA.test(A.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : A.which
        }
    },
    EA.event.addProp),
    EA.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(A, e) {
        EA.event.special[A] = {
            delegateType: e,
            bindType: e,
            handle: function(A) {
                var t, n = this,
                g = A.relatedTarget,
                i = A.handleObj;
                return g && (g === n || EA.contains(n, g)) || (A.type = i.origType, t = i.handler.apply(this, arguments), A.type = e),
                t
            }
        }
    }),
    EA.fn.extend({
        on: function(A, e, t, n) {
            return p(this, A, e, t, n)
        },
        one: function(A, e, t, n) {
            return p(this, A, e, t, n, 1)
        },
        off: function(A, e, t) {
            var n, g;
            if (A && A.preventDefault && A.handleObj) return n = A.handleObj,
            EA(A.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace: n.origType, n.selector, n.handler),
            this;
            if ("object" == typeof A) {
                for (g in A) this.off(g, e, A[g]);
                return this
            }
            return e !== !1 && "function" != typeof e || (t = e, e = void 0),
            t === !1 && (t = l),
            this.each(function() {
                EA.event.remove(this, A, t, e)
            })
        }
    });
    var $A = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    _A = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ee = /^true\/(.*)/,
    te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    EA.extend({
        htmlPrefilter: function(A) {
            return A.replace($A, "<$1></$2>")
        },
        clone: function(A, e, t) {
            var n, g, i, o, r = A.cloneNode(!0),
            B = EA.contains(A.ownerDocument, A);
            if (! (aA.noCloneChecked || 1 !== A.nodeType && 11 !== A.nodeType || EA.isXMLDoc(A))) for (o = c(r), i = c(A), n = 0, g = i.length; n < g; n++) Y(i[n], o[n]);
            if (e) if (t) for (i = i || c(A), o = o || c(r), n = 0, g = i.length; n < g; n++) G(i[n], o[n]);
            else G(A, r);
            return o = c(r, "script"),
            o.length > 0 && w(o, !B && c(A, "script")),
            r
        },
        cleanData: function(A) {
            for (var e, t, n, g = EA.event.special,
            i = 0; void 0 !== (t = A[i]); i++) if (KA(t)) {
                if (e = t[PA.expando]) {
                    if (e.events) for (n in e.events) g[n] ? EA.event.remove(t, n) : EA.removeEvent(t, n, e.handle);
                    t[PA.expando] = void 0
                }
                t[JA.expando] && (t[JA.expando] = void 0)
            }
        }
    }),
    EA.fn.extend({
        detach: function(A) {
            return U(this, A, !0)
        },
        remove: function(A) {
            return U(this, A)
        },
        text: function(A) {
            return vA(this,
            function(A) {
                return void 0 === A ? EA.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = A)
                })
            },
            null, A, arguments.length)
        },
        append: function() {
            return H(this, arguments,
            function(A) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, A);
                    e.appendChild(A)
                }
            })
        },
        prepend: function() {
            return H(this, arguments,
            function(A) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, A);
                    e.insertBefore(A, e.firstChild)
                }
            })
        },
        before: function() {
            return H(this, arguments,
            function(A) {
                this.parentNode && this.parentNode.insertBefore(A, this)
            })
        },
        after: function() {
            return H(this, arguments,
            function(A) {
                this.parentNode && this.parentNode.insertBefore(A, this.nextSibling)
            })
        },
        empty: function() {
            for (var A, e = 0; null != (A = this[e]); e++) 1 === A.nodeType && (EA.cleanData(c(A, !1)), A.textContent = "");
            return this
        },
        clone: function(A, e) {
            return A = null != A && A,
            e = null == e ? A: e,
            this.map(function() {
                return EA.clone(this, A, e)
            })
        },
        html: function(A) {
            return vA(this,
            function(A) {
                var e = this[0] || {},
                t = 0,
                n = this.length;
                if (void 0 === A && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof A && !_A.test(A) && !XA[(yA.exec(A) || ["", ""])[1].toLowerCase()]) {
                    A = EA.htmlPrefilter(A);
                    try {
                        for (; t < n; t++) e = this[t] || {},
                        1 === e.nodeType && (EA.cleanData(c(e, !1)), e.innerHTML = A);
                        e = 0
                    } catch(g) {}
                }
                e && this.empty().append(A)
            },
            null, A, arguments.length)
        },
        replaceWith: function() {
            var A = [];
            return H(this, arguments,
            function(e) {
                var t = this.parentNode;
                EA.inArray(this, A) < 0 && (EA.cleanData(c(this)), t && t.replaceChild(e, this))
            },
            A)
        }
    }),
    EA.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(A, e) {
        EA.fn[A] = function(A) {
            for (var t, n = [], g = EA(A), i = g.length - 1, o = 0; o <= i; o++) t = o === i ? this: this.clone(!0),
            EA(g[o])[e](t),
            nA.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var ne = /^margin/,
    ge = new RegExp("^(" + kA + ")(?!px)[a-z%]+$", "i"),
    ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = A),
        t.getComputedStyle(e)
    }; !
    function() {
        function e() {
            if (r) {
                r.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                r.innerHTML = "",
                WA.appendChild(o);
                var e = A.getComputedStyle(r);
                t = "1%" !== e.top,
                i = "2px" === e.marginLeft,
                n = "4px" === e.width,
                r.style.marginRight = "50%",
                g = "4px" === e.marginRight,
                WA.removeChild(o),
                r = null
            }
        }
        var t, n, g, i, o = _.createElement("div"),
        r = _.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", aA.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(r), EA.extend(aA, {
            pixelPosition: function() {
                return e(),
                t
            },
            boxSizingReliable: function() {
                return e(),
                n
            },
            pixelMarginRight: function() {
                return e(),
                g
            },
            reliableMarginLeft: function() {
                return e(),
                i
            }
        }))
    } ();
    var oe = /^(none|table(?!-c[ea]).+)/,
    re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Be = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Ce = ["Webkit", "Moz", "ms"],
    ae = _.createElement("div").style;
    EA.extend({
        cssHooks: {
            opacity: {
                get: function(A, e) {
                    if (e) {
                        var t = R(A, "opacity");
                        return "" === t ? "1": t
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(A, e, t, n) {
            if (A && 3 !== A.nodeType && 8 !== A.nodeType && A.style) {
                var g, i, o, r = EA.camelCase(e),
                B = A.style;
                return e = EA.cssProps[r] || (EA.cssProps[r] = K(r) || r),
                o = EA.cssHooks[e] || EA.cssHooks[r],
                void 0 === t ? o && "get" in o && void 0 !== (g = o.get(A, !1, n)) ? g: B[e] : (i = typeof t, "string" === i && (g = LA.exec(t)) && g[1] && (t = I(A, e, g), i = "number"), void(null != t && t === t && ("number" === i && (t += g && g[3] || (EA.cssNumber[r] ? "": "px")), aA.clearCloneStyle || "" !== t || 0 !== e.indexOf("background") || (B[e] = "inherit"), o && "set" in o && void 0 === (t = o.set(A, t, n)) || (B[e] = t))))
            }
        },
        css: function(A, e, t, n) {
            var g, i, o, r = EA.camelCase(e);
            return e = EA.cssProps[r] || (EA.cssProps[r] = K(r) || r),
            o = EA.cssHooks[e] || EA.cssHooks[r],
            o && "get" in o && (g = o.get(A, !0, t)),
            void 0 === g && (g = R(A, e, n)),
            "normal" === g && e in Be && (g = Be[e]),
            "" === t || t ? (i = parseFloat(g), t === !0 || isFinite(i) ? i || 0 : g) : g
        }
    }),
    EA.each(["height", "width"],
    function(A, e) {
        EA.cssHooks[e] = {
            get: function(A, t, n) {
                if (t) return ! oe.test(EA.css(A, "display")) || A.getClientRects().length && A.getBoundingClientRect().width ? m(A, e, n) : SA(A, re,
                function() {
                    return m(A, e, n)
                })
            },
            set: function(A, t, n) {
                var g, i = n && ie(A),
                o = n && J(A, e, n, "border-box" === EA.css(A, "boxSizing", !1, i), i);
                return o && (g = LA.exec(t)) && "px" !== (g[3] || "px") && (A.style[e] = t, t = EA.css(A, e)),
                P(A, t, o)
            }
        }
    }),
    EA.cssHooks.marginLeft = v(aA.reliableMarginLeft,
    function(A, e) {
        if (e) return (parseFloat(R(A, "marginLeft")) || A.getBoundingClientRect().left - SA(A, {
            marginLeft: 0
        },
        function() {
            return A.getBoundingClientRect().left
        })) + "px"
    }),
    EA.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(A, e) {
        EA.cssHooks[A + e] = {
            expand: function(t) {
                for (var n = 0,
                g = {},
                i = "string" == typeof t ? t.split(" ") : [t]; n < 4; n++) g[A + OA[n] + e] = i[n] || i[n - 2] || i[0];
                return g
            }
        },
        ne.test(A) || (EA.cssHooks[A + e].set = P)
    }),
    EA.fn.extend({
        css: function(A, e) {
            return vA(this,
            function(A, e, t) {
                var n, g, i = {},
                o = 0;
                if (EA.isArray(e)) {
                    for (n = ie(A), g = e.length; o < g; o++) i[e[o]] = EA.css(A, e[o], !1, n);
                    return i
                }
                return void 0 !== t ? EA.style(A, e, t) : EA.css(A, e)
            },
            A, e, arguments.length > 1)
        }
    }),
    EA.Tween = N,
    N.prototype = {
        constructor: N,
        init: function(A, e, t, n, g, i) {
            this.elem = A,
            this.prop = t,
            this.easing = g || EA.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = i || (EA.cssNumber[t] ? "": "px")
        },
        cur: function() {
            var A = N.propHooks[this.prop];
            return A && A.get ? A.get(this) : N.propHooks._default.get(this)
        },
        run: function(A) {
            var e, t = N.propHooks[this.prop];
            return this.options.duration ? this.pos = e = EA.easing[this.easing](A, this.options.duration * A, 0, 1, this.options.duration) : this.pos = e = A,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : N.propHooks._default.set(this),
            this
        }
    },
    N.prototype.init.prototype = N.prototype,
    N.propHooks = {
        _default: {
            get: function(A) {
                var e;
                return 1 !== A.elem.nodeType || null != A.elem[A.prop] && null == A.elem.style[A.prop] ? A.elem[A.prop] : (e = EA.css(A.elem, A.prop, ""), e && "auto" !== e ? e: 0)
            },
            set: function(A) {
                EA.fx.step[A.prop] ? EA.fx.step[A.prop](A) : 1 !== A.elem.nodeType || null == A.elem.style[EA.cssProps[A.prop]] && !EA.cssHooks[A.prop] ? A.elem[A.prop] = A.now: EA.style(A.elem, A.prop, A.now + A.unit)
            }
        }
    },
    N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(A) {
            A.elem.nodeType && A.elem.parentNode && (A.elem[A.prop] = A.now)
        }
    },
    EA.easing = {
        linear: function(A) {
            return A
        },
        swing: function(A) {
            return.5 - Math.cos(A * Math.PI) / 2
        },
        _default: "swing"
    },
    EA.fx = N.prototype.init,
    EA.fx.step = {};
    var se, Ee, Ie = /^(?:toggle|show|hide)$/,
    Qe = /queueHooks$/;
    EA.Animation = EA.extend(x, {
        tweeners: {
            "*": [function(A, e) {
                var t = this.createTween(A, e);
                return I(t.elem, A, LA.exec(e), t),
                t
            }]
        },
        tweener: function(A, e) {
            EA.isFunction(A) ? (e = A, A = ["*"]) : A = A.match(HA);
            for (var t, n = 0,
            g = A.length; n < g; n++) t = A[n],
            x.tweeners[t] = x.tweeners[t] || [],
            x.tweeners[t].unshift(e)
        },
        prefilters: [S],
        prefilter: function(A, e) {
            e ? x.prefilters.unshift(A) : x.prefilters.push(A)
        }
    }),
    EA.speed = function(A, e, t) {
        var n = A && "object" == typeof A ? EA.extend({},
        A) : {
            complete: t || !t && e || EA.isFunction(A) && A,
            duration: A,
            easing: t && e || e && !EA.isFunction(e) && e
        };
        return EA.fx.off || _.hidden ? n.duration = 0 : n.duration = "number" == typeof n.duration ? n.duration: n.duration in EA.fx.speeds ? EA.fx.speeds[n.duration] : EA.fx.speeds._default,
        null != n.queue && n.queue !== !0 || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            EA.isFunction(n.old) && n.old.call(this),
            n.queue && EA.dequeue(this, n.queue)
        },
        n
    },
    EA.fn.extend({
        fadeTo: function(A, e, t, n) {
            return this.filter(TA).css("opacity", 0).show().end().animate({
                opacity: e
            },
            A, t, n)
        },
        animate: function(A, e, t, n) {
            var g = EA.isEmptyObject(A),
            i = EA.speed(e, t, n),
            o = function() {
                var e = x(this, EA.extend({},
                A), i); (g || PA.get(this, "finish")) && e.stop(!0)
            };
            return o.finish = o,
            g || i.queue === !1 ? this.each(o) : this.queue(i.queue, o)
        },
        stop: function(A, e, t) {
            var n = function(A) {
                var e = A.stop;
                delete A.stop,
                e(t)
            };
            return "string" != typeof A && (t = e, e = A, A = void 0),
            e && A !== !1 && this.queue(A || "fx", []),
            this.each(function() {
                var e = !0,
                g = null != A && A + "queueHooks",
                i = EA.timers,
                o = PA.get(this);
                if (g) o[g] && o[g].stop && n(o[g]);
                else for (g in o) o[g] && o[g].stop && Qe.test(g) && n(o[g]);
                for (g = i.length; g--;) i[g].elem !== this || null != A && i[g].queue !== A || (i[g].anim.stop(t), e = !1, i.splice(g, 1)); ! e && t || EA.dequeue(this, A)
            })
        },
        finish: function(A) {
            return A !== !1 && (A = A || "fx"),
            this.each(function() {
                var e, t = PA.get(this),
                n = t[A + "queue"],
                g = t[A + "queueHooks"],
                i = EA.timers,
                o = n ? n.length: 0;
                for (t.finish = !0, EA.queue(this, A, []), g && g.stop && g.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === A && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    EA.each(["toggle", "show", "hide"],
    function(A, e) {
        var t = EA.fn[e];
        EA.fn[e] = function(A, n, g) {
            return null == A || "boolean" == typeof A ? t.apply(this, arguments) : this.animate(O(e, !0), A, n, g)
        }
    }),
    EA.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(A, e) {
        EA.fn[A] = function(A, t, n) {
            return this.animate(e, A, t, n)
        }
    }),
    EA.timers = [],
    EA.fx.tick = function() {
        var A, e = 0,
        t = EA.timers;
        for (se = EA.now(); e < t.length; e++) A = t[e],
        A() || t[e] !== A || t.splice(e--, 1);
        t.length || EA.fx.stop(),
        se = void 0
    },
    EA.fx.timer = function(A) {
        EA.timers.push(A),
        A() ? EA.fx.start() : EA.timers.pop()
    },
    EA.fx.interval = 13,
    EA.fx.start = function() {
        Ee || (Ee = A.requestAnimationFrame ? A.requestAnimationFrame(k) : A.setInterval(EA.fx.tick, EA.fx.interval))
    },
    EA.fx.stop = function() {
        A.cancelAnimationFrame ? A.cancelAnimationFrame(Ee) : A.clearInterval(Ee),
        Ee = null
    },
    EA.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    EA.fn.delay = function(e, t) {
        return e = EA.fx ? EA.fx.speeds[e] || e: e,
        t = t || "fx",
        this.queue(t,
        function(t, n) {
            var g = A.setTimeout(t, e);
            n.stop = function() {
                A.clearTimeout(g)
            }
        })
    },
    function() {
        var A = _.createElement("input"),
        e = _.createElement("select"),
        t = e.appendChild(_.createElement("option"));
        A.type = "checkbox",
        aA.checkOn = "" !== A.value,
        aA.optSelected = t.selected,
        A = _.createElement("input"),
        A.value = "t",
        A.type = "radio",
        aA.radioValue = "t" === A.value
    } ();
    var he, ce = EA.expr.attrHandle;
    EA.fn.extend({
        attr: function(A, e) {
            return vA(this, EA.attr, A, e, arguments.length > 1)
        },
        removeAttr: function(A) {
            return this.each(function() {
                EA.removeAttr(this, A)
            })
        }
    }),
    EA.extend({
        attr: function(A, e, t) {
            var n, g, i = A.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof A.getAttribute ? EA.prop(A, e, t) : (1 === i && EA.isXMLDoc(A) || (g = EA.attrHooks[e.toLowerCase()] || (EA.expr.match.bool.test(e) ? he: void 0)), void 0 !== t ? null === t ? void EA.removeAttr(A, e) : g && "set" in g && void 0 !== (n = g.set(A, t, e)) ? n: (A.setAttribute(e, t + ""), t) : g && "get" in g && null !== (n = g.get(A, e)) ? n: (n = EA.find.attr(A, e), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(A, e) {
                    if (!aA.radioValue && "radio" === e && EA.nodeName(A, "input")) {
                        var t = A.value;
                        return A.setAttribute("type", e),
                        t && (A.value = t),
                        e
                    }
                }
            }
        },
        removeAttr: function(A, e) {
            var t, n = 0,
            g = e && e.match(HA);
            if (g && 1 === A.nodeType) for (; t = g[n++];) A.removeAttribute(t)
        }
    }),
    he = {
        set: function(A, e, t) {
            return e === !1 ? EA.removeAttr(A, t) : A.setAttribute(t, t),
            t
        }
    },
    EA.each(EA.expr.match.bool.source.match(/\w+/g),
    function(A, e) {
        var t = ce[e] || EA.find.attr;
        ce[e] = function(A, e, n) {
            var g, i, o = e.toLowerCase();
            return n || (i = ce[o], ce[o] = g, g = null != t(A, e, n) ? o: null, ce[o] = i),
            g
        }
    });
    var we = /^(?:input|select|textarea|button)$/i,
    fe = /^(?:a|area)$/i;
    EA.fn.extend({
        prop: function(A, e) {
            return vA(this, EA.prop, A, e, arguments.length > 1)
        },
        removeProp: function(A) {
            return this.each(function() {
                delete this[EA.propFix[A] || A]
            })
        }
    }),
    EA.extend({
        prop: function(A, e, t) {
            var n, g, i = A.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && EA.isXMLDoc(A) || (e = EA.propFix[e] || e, g = EA.propHooks[e]),
            void 0 !== t ? g && "set" in g && void 0 !== (n = g.set(A, t, e)) ? n: A[e] = t: g && "get" in g && null !== (n = g.get(A, e)) ? n: A[e]
        },
        propHooks: {
            tabIndex: {
                get: function(A) {
                    var e = EA.find.attr(A, "tabindex");
                    return e ? parseInt(e, 10) : we.test(A.nodeName) || fe.test(A.nodeName) && A.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    aA.optSelected || (EA.propHooks.selected = {
        get: function(A) {
            var e = A.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(A) {
            var e = A.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    EA.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        EA.propFix[this.toLowerCase()] = this
    });
    var ue = /[\t\r\n\f]/g;
    EA.fn.extend({
        addClass: function(A) {
            var e, t, n, g, i, o, r, B = 0;
            if (EA.isFunction(A)) return this.each(function(e) {
                EA(this).addClass(A.call(this, e, y(this)))
            });
            if ("string" == typeof A && A) for (e = A.match(HA) || []; t = this[B++];) if (g = y(t), n = 1 === t.nodeType && (" " + g + " ").replace(ue, " ")) {
                for (o = 0; i = e[o++];) n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                r = EA.trim(n),
                g !== r && t.setAttribute("class", r)
            }
            return this
        },
        removeClass: function(A) {
            var e, t, n, g, i, o, r, B = 0;
            if (EA.isFunction(A)) return this.each(function(e) {
                EA(this).removeClass(A.call(this, e, y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof A && A) for (e = A.match(HA) || []; t = this[B++];) if (g = y(t), n = 1 === t.nodeType && (" " + g + " ").replace(ue, " ")) {
                for (o = 0; i = e[o++];) for (; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
                r = EA.trim(n),
                g !== r && t.setAttribute("class", r)
            }
            return this
        },
        toggleClass: function(A, e) {
            var t = typeof A;
            return "boolean" == typeof e && "string" === t ? e ? this.addClass(A) : this.removeClass(A) : EA.isFunction(A) ? this.each(function(t) {
                EA(this).toggleClass(A.call(this, t, y(this), e), e)
            }) : this.each(function() {
                var e, n, g, i;
                if ("string" === t) for (n = 0, g = EA(this), i = A.match(HA) || []; e = i[n++];) g.hasClass(e) ? g.removeClass(e) : g.addClass(e);
                else void 0 !== A && "boolean" !== t || (e = y(this), e && PA.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || A === !1 ? "": PA.get(this, "__className__") || ""))
            })
        },
        hasClass: function(A) {
            var e, t, n = 0;
            for (e = " " + A + " "; t = this[n++];) if (1 === t.nodeType && (" " + y(t) + " ").replace(ue, " ").indexOf(e) > -1) return ! 0;
            return ! 1
        }
    });
    var le = /\r/g,
    De = /[\x20\t\r\n\f]+/g;
    EA.fn.extend({
        val: function(A) {
            var e, t, n, g = this[0];
            return arguments.length ? (n = EA.isFunction(A), this.each(function(t) {
                var g;
                1 === this.nodeType && (g = n ? A.call(this, t, EA(this).val()) : A, null == g ? g = "": "number" == typeof g ? g += "": EA.isArray(g) && (g = EA.map(g,
                function(A) {
                    return null == A ? "": A + ""
                })), e = EA.valHooks[this.type] || EA.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, g, "value") || (this.value = g))
            })) : g ? (e = EA.valHooks[g.type] || EA.valHooks[g.nodeName.toLowerCase()], e && "get" in e && void 0 !== (t = e.get(g, "value")) ? t: (t = g.value, "string" == typeof t ? t.replace(le, "") : null == t ? "": t)) : void 0
        }
    }),
    EA.extend({
        valHooks: {
            option: {
                get: function(A) {
                    var e = EA.find.attr(A, "value");
                    return null != e ? e: EA.trim(EA.text(A)).replace(De, " ")
                }
            },
            select: {
                get: function(A) {
                    for (var e, t, n = A.options,
                    g = A.selectedIndex,
                    i = "select-one" === A.type,
                    o = i ? null: [], r = i ? g + 1 : n.length, B = g < 0 ? r: i ? g: 0; B < r; B++) if (t = n[B], (t.selected || B === g) && !t.disabled && (!t.parentNode.disabled || !EA.nodeName(t.parentNode, "optgroup"))) {
                        if (e = EA(t).val(), i) return e;
                        o.push(e)
                    }
                    return o
                },
                set: function(A, e) {
                    for (var t, n, g = A.options,
                    i = EA.makeArray(e), o = g.length; o--;) n = g[o],
                    (n.selected = EA.inArray(EA.valHooks.option.get(n), i) > -1) && (t = !0);
                    return t || (A.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    EA.each(["radio", "checkbox"],
    function() {
        EA.valHooks[this] = {
            set: function(A, e) {
                if (EA.isArray(e)) return A.checked = EA.inArray(EA(A).val(), e) > -1
            }
        },
        aA.checkOn || (EA.valHooks[this].get = function(A) {
            return null === A.getAttribute("value") ? "on": A.value
        })
    });
    var pe = /^(?:focusinfocus|focusoutblur)$/;
    EA.extend(EA.event, {
        trigger: function(e, t, n, g) {
            var i, o, r, B, C, a, s, E = [n || _],
            I = rA.call(e, "type") ? e.type: e,
            Q = rA.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = r = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !pe.test(I + EA.event.triggered) && (I.indexOf(".") > -1 && (Q = I.split("."), I = Q.shift(), Q.sort()), C = I.indexOf(":") < 0 && "on" + I, e = e[EA.expando] ? e: new EA.Event(I, "object" == typeof e && e), e.isTrigger = g ? 2 : 3, e.namespace = Q.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + Q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : EA.makeArray(t, [e]), s = EA.event.special[I] || {},
            g || !s.trigger || s.trigger.apply(n, t) !== !1)) {
                if (!g && !s.noBubble && !EA.isWindow(n)) {
                    for (B = s.delegateType || I, pe.test(B + I) || (o = o.parentNode); o; o = o.parentNode) E.push(o),
                    r = o;
                    r === (n.ownerDocument || _) && E.push(r.defaultView || r.parentWindow || A)
                }
                for (i = 0; (o = E[i++]) && !e.isPropagationStopped();) e.type = i > 1 ? B: s.bindType || I,
                a = (PA.get(o, "events") || {})[e.type] && PA.get(o, "handle"),
                a && a.apply(o, t),
                a = C && o[C],
                a && a.apply && KA(o) && (e.result = a.apply(o, t), e.result === !1 && e.preventDefault());
                return e.type = I,
                g || e.isDefaultPrevented() || s._default && s._default.apply(E.pop(), t) !== !1 || !KA(n) || C && EA.isFunction(n[I]) && !EA.isWindow(n) && (r = n[C], r && (n[C] = null), EA.event.triggered = I, n[I](), EA.event.triggered = void 0, r && (n[C] = r)),
                e.result
            }
        },
        simulate: function(A, e, t) {
            var n = EA.extend(new EA.Event, t, {
                type: A,
                isSimulated: !0
            });
            EA.event.trigger(n, null, e)
        }
    }),
    EA.fn.extend({
        trigger: function(A, e) {
            return this.each(function() {
                EA.event.trigger(A, e, this)
            })
        },
        triggerHandler: function(A, e) {
            var t = this[0];
            if (t) return EA.event.trigger(A, e, t, !0)
        }
    }),
    EA.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
    function(A, e) {
        EA.fn[e] = function(A, t) {
            return arguments.length > 0 ? this.on(e, null, A, t) : this.trigger(e)
        }
    }),
    EA.fn.extend({
        hover: function(A, e) {
            return this.mouseenter(A).mouseleave(e || A)
        }
    }),
    aA.focusin = "onfocusin" in A,
    aA.focusin || EA.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(A, e) {
        var t = function(A) {
            EA.event.simulate(e, A.target, EA.event.fix(A))
        };
        EA.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                g = PA.access(n, e);
                g || n.addEventListener(A, t, !0),
                PA.access(n, e, (g || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                g = PA.access(n, e) - 1;
                g ? PA.access(n, e, g) : (n.removeEventListener(A, t, !0), PA.remove(n, e))
            }
        }
    });
    var de = A.location,
    Me = EA.now(),
    Fe = /\?/;
    EA.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new A.DOMParser).parseFromString(e, "text/xml")
        } catch(n) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || EA.error("Invalid XML: " + e),
        t
    };
    var Ge = /\[\]$/,
    Ye = /\r?\n/g,
    He = /^(?:submit|button|image|reset|file)$/i,
    Ue = /^(?:input|select|textarea|keygen)/i;
    EA.param = function(A, e) {
        var t, n = [],
        g = function(A, e) {
            var t = EA.isFunction(e) ? e() : e;
            n[n.length] = encodeURIComponent(A) + "=" + encodeURIComponent(null == t ? "": t)
        };
        if (EA.isArray(A) || A.jquery && !EA.isPlainObject(A)) EA.each(A,
        function() {
            g(this.name, this.value)
        });
        else for (t in A) j(t, A[t], e, g);
        return n.join("&")
    },
    EA.fn.extend({
        serialize: function() {
            return EA.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var A = EA.prop(this, "elements");
                return A ? EA.makeArray(A) : this
            }).filter(function() {
                var A = this.type;
                return this.name && !EA(this).is(":disabled") && Ue.test(this.nodeName) && !He.test(A) && (this.checked || !xA.test(A))
            }).map(function(A, e) {
                var t = EA(this).val();
                return null == t ? null: EA.isArray(t) ? EA.map(t,
                function(A) {
                    return {
                        name: e.name,
                        value: A.replace(Ye, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: t.replace(Ye, "\r\n")
                }
            }).get()
        }
    });
    var Re = /%20/g,
    ve = /#.*$/,
    Ke = /([?&])_=[^&]*/,
    Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    me = /^(?:GET|HEAD)$/,
    Ne = /^\/\//,
    ke = {},
    Le = {},
    Oe = "*/".concat("*"),
    Te = _.createElement("a");
    Te.href = de.href,
    EA.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: de.href,
            type: "GET",
            isLocal: Je.test(de.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": EA.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(A, e) {
            return e ? W(W(A, EA.ajaxSettings), e) : W(EA.ajaxSettings, A)
        },
        ajaxPrefilter: X(ke),
        ajaxTransport: X(Le),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var C, E, I, l, D, p = t;
                a || (a = !0, B && A.clearTimeout(B), g = void 0, o = r || "", d.readyState = e > 0 ? 4 : 0, C = e >= 200 && e < 300 || 304 === e, n && (l = z(Q, d, n)), l = q(Q, l, d, C), C ? (Q.ifModified && (D = d.getResponseHeader("Last-Modified"), D && (EA.lastModified[i] = D), D = d.getResponseHeader("etag"), D && (EA.etag[i] = D)), 204 === e || "HEAD" === Q.type ? p = "nocontent": 304 === e ? p = "notmodified": (p = l.state, E = l.data, I = l.error, C = !I)) : (I = p, !e && p || (p = "error", e < 0 && (e = 0))), d.status = e, d.statusText = (t || p) + "", C ? w.resolveWith(h, [E, p, d]) : w.rejectWith(h, [d, p, I]), d.statusCode(u), u = void 0, s && c.trigger(C ? "ajaxSuccess": "ajaxError", [d, Q, C ? E: I]), f.fireWith(h, [d, p]), s && (c.trigger("ajaxComplete", [d, Q]), --EA.active || EA.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var g, i, o, r, B, C, a, s, E, I, Q = EA.ajaxSetup({},
            t),
            h = Q.context || Q,
            c = Q.context && (h.nodeType || h.jquery) ? EA(h) : EA.event,
            w = EA.Deferred(),
            f = EA.Callbacks("once memory"),
            u = Q.statusCode || {},
            l = {},
            D = {},
            p = "canceled",
            d = {
                readyState: 0,
                getResponseHeader: function(A) {
                    var e;
                    if (a) {
                        if (!r) for (r = {}; e = Pe.exec(o);) r[e[1].toLowerCase()] = e[2];
                        e = r[A.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return a ? o: null
                },
                setRequestHeader: function(A, e) {
                    return null == a && (A = D[A.toLowerCase()] = D[A.toLowerCase()] || A, l[A] = e),
                    this
                },
                overrideMimeType: function(A) {
                    return null == a && (Q.mimeType = A),
                    this
                },
                statusCode: function(A) {
                    var e;
                    if (A) if (a) d.always(A[d.status]);
                    else for (e in A) u[e] = [u[e], A[e]];
                    return this
                },
                abort: function(A) {
                    var e = A || p;
                    return g && g.abort(e),
                    n(0, e),
                    this
                }
            };
            if (w.promise(d), Q.url = ((e || Q.url || de.href) + "").replace(Ne, de.protocol + "//"), Q.type = t.method || t.type || Q.method || Q.type, Q.dataTypes = (Q.dataType || "*").toLowerCase().match(HA) || [""], null == Q.crossDomain) {
                C = _.createElement("a");
                try {
                    C.href = Q.url,
                    C.href = C.href,
                    Q.crossDomain = Te.protocol + "//" + Te.host != C.protocol + "//" + C.host
                } catch(M) {
                    Q.crossDomain = !0
                }
            }
            if (Q.data && Q.processData && "string" != typeof Q.data && (Q.data = EA.param(Q.data, Q.traditional)), V(ke, Q, t, d), a) return d;
            s = EA.event && Q.global,
            s && 0 === EA.active++&&EA.event.trigger("ajaxStart"),
            Q.type = Q.type.toUpperCase(),
            Q.hasContent = !me.test(Q.type),
            i = Q.url.replace(ve, ""),
            Q.hasContent ? Q.data && Q.processData && 0 === (Q.contentType || "").indexOf("application/x-www-form-urlencoded") && (Q.data = Q.data.replace(Re, "+")) : (I = Q.url.slice(i.length), Q.data && (i += (Fe.test(i) ? "&": "?") + Q.data, delete Q.data), Q.cache === !1 && (i = i.replace(Ke, ""), I = (Fe.test(i) ? "&": "?") + "_=" + Me+++I), Q.url = i + I),
            Q.ifModified && (EA.lastModified[i] && d.setRequestHeader("If-Modified-Since", EA.lastModified[i]), EA.etag[i] && d.setRequestHeader("If-None-Match", EA.etag[i])),
            (Q.data && Q.hasContent && Q.contentType !== !1 || t.contentType) && d.setRequestHeader("Content-Type", Q.contentType),
            d.setRequestHeader("Accept", Q.dataTypes[0] && Q.accepts[Q.dataTypes[0]] ? Q.accepts[Q.dataTypes[0]] + ("*" !== Q.dataTypes[0] ? ", " + Oe + "; q=0.01": "") : Q.accepts["*"]);
            for (E in Q.headers) d.setRequestHeader(E, Q.headers[E]);
            if (Q.beforeSend && (Q.beforeSend.call(h, d, Q) === !1 || a)) return d.abort();
            if (p = "abort", f.add(Q.complete), d.done(Q.success), d.fail(Q.error), g = V(Le, Q, t, d)) {
                if (d.readyState = 1, s && c.trigger("ajaxSend", [d, Q]), a) return d;
                Q.async && Q.timeout > 0 && (B = A.setTimeout(function() {
                    d.abort("timeout")
                },
                Q.timeout));
                try {
                    a = !1,
                    g.send(l, n)
                } catch(M) {
                    if (a) throw M;
                    n( - 1, M)
                }
            } else n( - 1, "No Transport");
            return d
        },
        getJSON: function(A, e, t) {
            return EA.get(A, e, t, "json")
        },
        getScript: function(A, e) {
            return EA.get(A, void 0, e, "script")
        }
    }),
    EA.each(["get", "post"],
    function(A, e) {
        EA[e] = function(A, t, n, g) {
            return EA.isFunction(t) && (g = g || n, n = t, t = void 0),
            EA.ajax(EA.extend({
                url: A,
                type: e,
                dataType: g,
                data: t,
                success: n
            },
            EA.isPlainObject(A) && A))
        }
    }),
    EA._evalUrl = function(A) {
        return EA.ajax({
            url: A,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    EA.fn.extend({
        wrapAll: function(A) {
            var e;
            return this[0] && (EA.isFunction(A) && (A = A.call(this[0])), e = EA(A, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var A = this; A.firstElementChild;) A = A.firstElementChild;
                return A
            }).append(this)),
            this
        },
        wrapInner: function(A) {
            return EA.isFunction(A) ? this.each(function(e) {
                EA(this).wrapInner(A.call(this, e))
            }) : this.each(function() {
                var e = EA(this),
                t = e.contents();
                t.length ? t.wrapAll(A) : e.append(A)
            })
        },
        wrap: function(A) {
            var e = EA.isFunction(A);
            return this.each(function(t) {
                EA(this).wrapAll(e ? A.call(this, t) : A)
            })
        },
        unwrap: function(A) {
            return this.parent(A).not("body").each(function() {
                EA(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    EA.expr.pseudos.hidden = function(A) {
        return ! EA.expr.pseudos.visible(A)
    },
    EA.expr.pseudos.visible = function(A) {
        return !! (A.offsetWidth || A.offsetHeight || A.getClientRects().length)
    },
    EA.ajaxSettings.xhr = function() {
        try {
            return new A.XMLHttpRequest
        } catch(e) {}
    };
    var Se = {
        0 : 200,
        1223 : 204
    },
    be = EA.ajaxSettings.xhr();
    aA.cors = !!be && "withCredentials" in be,
    aA.ajax = be = !!be,
    EA.ajaxTransport(function(e) {
        var t, n;
        if (aA.cors || be && !e.crossDomain) return {
            send: function(g, i) {
                var o, r = e.xhr();
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                e.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest");
                for (o in g) r.setRequestHeader(o, g[o]);
                t = function(A) {
                    return function() {
                        t && (t = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === A ? r.abort() : "error" === A ? "number" != typeof r.status ? i(0, "error") : i(r.status, r.statusText) : i(Se[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        }: {
                            text: r.responseText
                        },
                        r.getAllResponseHeaders()))
                    }
                },
                r.onload = t(),
                n = r.onerror = t("error"),
                void 0 !== r.onabort ? r.onabort = n: r.onreadystatechange = function() {
                    4 === r.readyState && A.setTimeout(function() {
                        t && n()
                    })
                },
                t = t("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch(B) {
                    if (t) throw B
                }
            },
            abort: function() {
                t && t()
            }
        }
    }),
    EA.ajaxPrefilter(function(A) {
        A.crossDomain && (A.contents.script = !1)
    }),
    EA.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(A) {
                return EA.globalEval(A),
                A
            }
        }
    }),
    EA.ajaxPrefilter("script",
    function(A) {
        void 0 === A.cache && (A.cache = !1),
        A.crossDomain && (A.type = "GET")
    }),
    EA.ajaxTransport("script",
    function(A) {
        if (A.crossDomain) {
            var e, t;
            return {
                send: function(n, g) {
                    e = EA("<script>").prop({
                        charset: A.scriptCharset,
                        src: A.url
                    }).on("load error", t = function(A) {
                        e.remove(),
                        t = null,
                        A && g("error" === A.type ? 404 : 200, A.type)
                    }),
                    _.head.appendChild(e[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    });
    var xe = [],
    ye = /(=)\?(?=&|$)|\?\?/;
    EA.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var A = xe.pop() || EA.expando + "_" + Me++;
            return this[A] = !0,
            A
        }
    }),
    EA.ajaxPrefilter("json jsonp",
    function(e, t, n) {
        var g, i, o, r = e.jsonp !== !1 && (ye.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ye.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return g = e.jsonpCallback = EA.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        r ? e[r] = e[r].replace(ye, "$1" + g) : e.jsonp !== !1 && (e.url += (Fe.test(e.url) ? "&": "?") + e.jsonp + "=" + g),
        e.converters["script json"] = function() {
            return o || EA.error(g + " was not called"),
            o[0]
        },
        e.dataTypes[0] = "json",
        i = A[g],
        A[g] = function() {
            o = arguments
        },
        n.always(function() {
            void 0 === i ? EA(A).removeProp(g) : A[g] = i,
            e[g] && (e.jsonpCallback = t.jsonpCallback, xe.push(g)),
            o && EA.isFunction(i) && i(o[0]),
            o = i = void 0
        }),
        "script"
    }),
    aA.createHTMLDocument = function() {
        var A = _.implementation.createHTMLDocument("").body;
        return A.innerHTML = "<form></form><form></form>",
        2 === A.childNodes.length
    } (),
    EA.parseHTML = function(A, e, t) {
        if ("string" != typeof A) return [];
        "boolean" == typeof e && (t = e, e = !1);
        var n, g, i;
        return e || (aA.createHTMLDocument ? (e = _.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = _.location.href, e.head.appendChild(n)) : e = _),
        g = DA.exec(A),
        i = !t && [],
        g ? [e.createElement(g[1])] : (g = f([A], e, i), i && i.length && EA(i).remove(), EA.merge([], g.childNodes))
    },
    EA.fn.load = function(A, e, t) {
        var n, g, i, o = this,
        r = A.indexOf(" ");
        return r > -1 && (n = EA.trim(A.slice(r)), A = A.slice(0, r)),
        EA.isFunction(e) ? (t = e, e = void 0) : e && "object" == typeof e && (g = "POST"),
        o.length > 0 && EA.ajax({
            url: A,
            type: g || "GET",
            dataType: "html",
            data: e
        }).done(function(A) {
            i = arguments,
            o.html(n ? EA("<div>").append(EA.parseHTML(A)).find(n) : A)
        }).always(t &&
        function(A, e) {
            o.each(function() {
                t.apply(this, i || [A.responseText, e, A])
            })
        }),
        this
    },
    EA.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(A, e) {
        EA.fn[e] = function(A) {
            return this.on(e, A)
        }
    }),
    EA.expr.pseudos.animated = function(A) {
        return EA.grep(EA.timers,
        function(e) {
            return A === e.elem
        }).length
    },
    EA.offset = {
        setOffset: function(A, e, t) {
            var n, g, i, o, r, B, C, a = EA.css(A, "position"),
            s = EA(A),
            E = {};
            "static" === a && (A.style.position = "relative"),
            r = s.offset(),
            i = EA.css(A, "top"),
            B = EA.css(A, "left"),
            C = ("absolute" === a || "fixed" === a) && (i + B).indexOf("auto") > -1,
            C ? (n = s.position(), o = n.top, g = n.left) : (o = parseFloat(i) || 0, g = parseFloat(B) || 0),
            EA.isFunction(e) && (e = e.call(A, t, EA.extend({},
            r))),
            null != e.top && (E.top = e.top - r.top + o),
            null != e.left && (E.left = e.left - r.left + g),
            "using" in e ? e.using.call(A, E) : s.css(E)
        }
    },
    EA.fn.extend({
        offset: function(A) {
            if (arguments.length) return void 0 === A ? this: this.each(function(e) {
                EA.offset.setOffset(this, A, e)
            });
            var e, t, n, g, i = this[0];
            return i ? i.getClientRects().length ? (n = i.getBoundingClientRect(), n.width || n.height ? (g = i.ownerDocument, t = Z(g), e = g.documentElement, {
                top: n.top + t.pageYOffset - e.clientTop,
                left: n.left + t.pageXOffset - e.clientLeft
            }) : n) : {
                top: 0,
                left: 0
            }: void 0
        },
        position: function() {
            if (this[0]) {
                var A, e, t = this[0],
                n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === EA.css(t, "position") ? e = t.getBoundingClientRect() : (A = this.offsetParent(), e = this.offset(), EA.nodeName(A[0], "html") || (n = A.offset()), n = {
                    top: n.top + EA.css(A[0], "borderTopWidth", !0),
                    left: n.left + EA.css(A[0], "borderLeftWidth", !0)
                }),
                {
                    top: e.top - n.top - EA.css(t, "marginTop", !0),
                    left: e.left - n.left - EA.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var A = this.offsetParent; A && "static" === EA.css(A, "position");) A = A.offsetParent;
                return A || WA
            })
        }
    }),
    EA.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(A, e) {
        var t = "pageYOffset" === e;
        EA.fn[A] = function(n) {
            return vA(this,
            function(A, n, g) {
                var i = Z(A);
                return void 0 === g ? i ? i[e] : A[n] : void(i ? i.scrollTo(t ? i.pageXOffset: g, t ? g: i.pageYOffset) : A[n] = g)
            },
            A, n, arguments.length)
        }
    }),
    EA.each(["top", "left"],
    function(A, e) {
        EA.cssHooks[e] = v(aA.pixelPosition,
        function(A, t) {
            if (t) return t = R(A, e),
            ge.test(t) ? EA(A).position()[e] + "px": t
        })
    }),
    EA.each({
        Height: "height",
        Width: "width"
    },
    function(A, e) {
        EA.each({
            padding: "inner" + A,
            content: e,
            "": "outer" + A
        },
        function(t, n) {
            EA.fn[n] = function(g, i) {
                var o = arguments.length && (t || "boolean" != typeof g),
                r = t || (g === !0 || i === !0 ? "margin": "border");
                return vA(this,
                function(e, t, g) {
                    var i;
                    return EA.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + A] : e.document.documentElement["client" + A] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + A], i["scroll" + A], e.body["offset" + A], i["offset" + A], i["client" + A])) : void 0 === g ? EA.css(e, t, r) : EA.style(e, t, g, r)
                },
                e, o ? g: void 0, o)
            }
        })
    }),
    EA.fn.extend({
        bind: function(A, e, t) {
            return this.on(A, null, e, t)
        },
        unbind: function(A, e) {
            return this.off(A, null, e)
        },
        delegate: function(A, e, t, n) {
            return this.on(e, A, t, n)
        },
        undelegate: function(A, e, t) {
            return 1 === arguments.length ? this.off(A, "**") : this.off(e, A || "**", t)
        }
    }),
    EA.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return EA
    });
    var je = A.jQuery,
    Xe = A.$;
    return EA.noConflict = function(e) {
        return A.$ === EA && (A.$ = Xe),
        e && A.jQuery === EA && (A.jQuery = je),
        EA
    },
    e || (A.jQuery = A.$ = EA),
    EA
}),
!
function(A) {
    var e = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    "function" == typeof define && define.amd ? define(["exports"],
    function(t) {
        e.Orienter = A(e, t)
    }) : "undefined" != typeof exports ? A(e, exports) : e.Orienter = A(e, {})
} (function(A, e) {
    function t(A, e) {
        for (var t in e) A[t] = e[t]
    }
    return e = function() {
        this.initialize.apply(this, arguments)
    },
    t(e.prototype, {
        lon: 0,
        lat: 0,
        direction: 0,
        fix: 0,
        os: "",
        initialize: function() {
            switch (this.lon = 0, this.lat = 0, this.direction = window.orientation || 0, this.direction) {
            case 0:
                this.fix = 0;
                break;
            case 90:
                this.fix = -270;
                break;
            case - 90 : this.fix = -90
            }
            this.os = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? "ios": navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") ? "android": ""
        },
        init: function() {
            this._orient = this.orientHandler.bind(this),
            window.addEventListener("deviceorientation", this._orient, !1),
            this._change = this.changeHandler.bind(this),
            window.addEventListener("orientationchange", this._change, !1)
        },
        destroy: function() {
            window.removeEventListener("deviceorientation", this._orient, !1),
            window.removeEventListener("orientationchange", this._change, !1)
        },
        changeHandler: function() {
            this.direction = window.orientation
        },
        orientHandler: function(A) {
            switch (this.os) {
            case "ios":
                switch (this.direction) {
                case 0:
                    this.lon = A.alpha + A.gamma,
                    A.beta > 0 && (this.lat = A.beta - 90);
                    break;
                case 90:
                    this.lon = A.gamma < 0 ? A.alpha - 90 : A.alpha - 270,
                    this.lat = A.gamma > 0 ? 90 - A.gamma: -90 - A.gamma;
                    break;
                case - 90 : this.lon = A.gamma < 0 ? A.alpha - 90 : A.alpha - 270,
                    this.lat = A.gamma < 0 ? 90 + A.gamma: -90 + A.gamma
                }
                break;
            case "android":
                switch (this.direction) {
                case 0:
                    this.lon = A.alpha + A.gamma + 30,
                    this.lat = A.gamma > 90 ? 90 - A.beta: A.beta - 90;
                    break;
                case 90:
                    this.lon = A.alpha - 230,
                    this.lat = A.gamma > 0 ? 270 - A.gamma: -90 - A.gamma;
                    break;
                case - 90 : this.lon = A.alpha - 180,
                    this.lat = -90 + A.gamma
                }
            }
            this.lon += this.fix,
            this.lon %= 360,
            this.lon < 0 && (this.lon += 360),
            this.lon = Math.round(this.lon),
            this.lat = Math.round(this.lat),
            this.handler && this.handler.apply(this, [{
                a: Math.round(A.alpha),
                b: Math.round(A.beta),
                g: Math.round(A.gamma),
                lon: this.lon,
                lat: this.lat,
                dir: this.direction
            }])
        }
    }),
    e
});