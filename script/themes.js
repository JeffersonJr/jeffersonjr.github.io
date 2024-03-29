! function (e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
	function n(e) {
		var t = e.length,
			n = rt.type(e);
		return "function" === n || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function i(e, t, n) {
		if (rt.isFunction(t)) return rt.grep(e, function (e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return rt.grep(e, function (e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (pt.test(t)) return rt.filter(t, e, n);
			t = rt.filter(t, e)
		}
		return rt.grep(e, function (e) {
			return rt.inArray(e, t) >= 0 !== n
		})
	}

	function r(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function o(e) {
		var t = xt[e] = {};
		return rt.each(e.match(_t) || [], function (e, n) {
			t[n] = !0
		}), t
	}

	function s() {
		dt.addEventListener ? (dt.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (dt.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
	}

	function a() {
		(dt.addEventListener || "load" === event.type || "complete" === dt.readyState) && (s(), rt.ready())
	}

	function l(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var i = "data-" + t.replace(Ct, "-$1").toLowerCase();
			if (n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : kt.test(n) ? rt.parseJSON(n) : n
				} catch (r) {}
				rt.data(e, t, n)
			} else n = void 0
		}
		return n
	}

	function u(e) {
		var t;
		for (t in e)
			if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function c(e, t, n, i) {
		if (rt.acceptData(e)) {
			var r, o, s = rt.expando,
				a = e.nodeType,
				l = a ? rt.cache : e,
				u = a ? e[s] : e[s] && s;
			if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[s] = U.pop() || rt.guid++ : s), l[u] || (l[u] = a ? {} : {
				toJSON: rt.noop
			}), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = rt.extend(l[u], t) : l[u].data = rt.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[rt.camelCase(t)])) : r = o, r
		}
	}

	function f(e, t, n) {
		if (rt.acceptData(e)) {
			var i, r, o = e.nodeType,
				s = o ? rt.cache : e,
				a = o ? e[rt.expando] : rt.expando;
			if (s[a]) {
				if (t && (i = n ? s[a] : s[a].data)) {
					rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
					for (; r--;) delete i[t[r]];
					if (n ? !u(i) : !rt.isEmptyObject(i)) return
				}(n || (delete s[a].data, u(s[a]))) && (o ? rt.cleanData([e], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
			}
		}
	}

	function p() {
		return !0
	}

	function h() {
		return !1
	}

	function d() {
		try {
			return dt.activeElement
		} catch (e) {}
	}

	function m(e) {
		var t = Mt.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function g(e, t) {
		var n, i, r = 0,
			o = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
		if (!o)
			for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || rt.nodeName(i, t) ? o.push(i) : rt.merge(o, g(i, t));
		return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], o) : o
	}

	function v(e) {
		Et.test(e.type) && (e.defaultChecked = e.checked)
	}

	function y(e, t) {
		return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function _(e) {
		return e.type = (null !== rt.find.attr(e, "type")) + "/" + e.type, e
	}

	function x(e) {
		var t = Vt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function b(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) rt._data(n, "globalEval", !t || rt._data(t[i], "globalEval"))
	}

	function w(e, t) {
		if (1 === t.nodeType && rt.hasData(e)) {
			var n, i, r, o = rt._data(e),
				s = rt._data(t, o),
				a = o.events;
			if (a) {
				delete s.handle, s.events = {};
				for (n in a)
					for (i = 0, r = a[n].length; r > i; i++) rt.event.add(t, n, a[n][i])
			}
			s.data && (s.data = rt.extend({}, s.data))
		}
	}

	function T(e, t) {
		var n, i, r;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[rt.expando]) {
				r = rt._data(t);
				for (i in r.events) rt.removeEvent(t, i, r.handle);
				t.removeAttribute(rt.expando)
			}
			"script" === n && t.text !== e.text ? (_(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function k(t, n) {
		var i, r = rt(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
		return r.detach(), o
	}

	function C(e) {
		var t = dt,
			n = Jt[e];
		return n || (n = k(e, t), "none" !== n && n || (Kt = (Kt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Kt.detach()), Jt[e] = n), n
	}

	function S(e, t) {
		return {
			get: function () {
				var n = e();
				if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function P(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = hn.length; r--;)
			if (t = hn[r] + n, t in e) return t;
		return i
	}

	function N(e, t) {
		for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = rt._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Nt(i) && (o[s] = rt._data(i, "olddisplay", C(i.nodeName)))) : (r = Nt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
		for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
		return e
	}

	function A(e, t, n) {
		var i = un.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function E(e, t, n, i, r) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += rt.css(e, n + Pt[o], !0, r)), i ? ("content" === n && (s -= rt.css(e, "padding" + Pt[o], !0, r)), "margin" !== n && (s -= rt.css(e, "border" + Pt[o] + "Width", !0, r))) : (s += rt.css(e, "padding" + Pt[o], !0, r), "padding" !== n && (s += rt.css(e, "border" + Pt[o] + "Width", !0, r)));
		return s
	}

	function O(e, t, n) {
		var i = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = en(e),
			s = nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, o);
		if (0 >= r || null == r) {
			if (r = tn(e, t, o), (0 > r || null == r) && (r = e.style[t]), rn.test(r)) return r;
			i = s && (nt.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + E(e, t, n || (s ? "border" : "content"), i, o) + "px"
	}

	function D(e, t, n, i, r) {
		return new D.prototype.init(e, t, n, i, r)
	}

	function L() {
		return setTimeout(function () {
			dn = void 0
		}), dn = rt.now()
	}

	function j(e, t) {
		var n, i = {
				height: e
			},
			r = 0;
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Pt[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function R(e, t, n) {
		for (var i, r = (xn[t] || []).concat(xn["*"]), o = 0, s = r.length; s > o; o++)
			if (i = r[o].call(n, t, e)) return i
	}

	function M(e, t, n) {
		var i, r, o, s, a, l, u, c, f = this,
			p = {},
			h = e.style,
			d = e.nodeType && Nt(e),
			m = rt._data(e, "fxshow");
		n.queue || (a = rt._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
			a.unqueued || l()
		}), a.unqueued++, f.always(function () {
			f.always(function () {
				a.unqueued--, rt.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = rt.css(e, "display"), c = "none" === u ? rt._data(e, "olddisplay") || C(e.nodeName) : u, "inline" === c && "none" === rt.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || f.always(function () {
			h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (r = t[i], gn.exec(r)) {
				if (delete t[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
					if ("show" !== r || !m || void 0 === m[i]) continue;
					d = !0
				}
				p[i] = m && m[i] || rt.style(e, i)
			} else u = void 0;
		if (rt.isEmptyObject(p)) "inline" === ("none" === u ? C(e.nodeName) : u) && (h.display = u);
		else {
			m ? "hidden" in m && (d = m.hidden) : m = rt._data(e, "fxshow", {}), o && (m.hidden = !d), d ? rt(e).show() : f.done(function () {
				rt(e).hide()
			}), f.done(function () {
				var t;
				rt._removeData(e, "fxshow");
				for (t in p) rt.style(e, t, p[t])
			});
			for (i in p) s = R(d ? m[i] : 0, i, f), i in m || (m[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function F(e, t) {
		var n, i, r, o, s;
		for (n in e)
			if (i = rt.camelCase(n), r = t[i], o = e[n], rt.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = rt.cssHooks[i], s && "expand" in s) {
				o = s.expand(o), delete e[i];
				for (n in o) n in e || (e[n] = o[n], t[n] = r)
			} else t[i] = r
	}

	function H(e, t, n) {
		var i, r, o = 0,
			s = _n.length,
			a = rt.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (r) return !1;
				for (var t = dn || L(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
				return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
			},
			u = a.promise({
				elem: e,
				props: rt.extend({}, t),
				opts: rt.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: dn || L(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var i = rt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(i), i
				},
				stop: function (t) {
					var n = 0,
						i = t ? u.tweens.length : 0;
					if (r) return this;
					for (r = !0; i > n; n++) u.tweens[n].run(1);
					return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (F(c, u.opts.specialEasing); s > o; o++)
			if (i = _n[o].call(u, e, c, u.opts)) return i;
		return rt.map(c, R, u), rt.isFunction(u.opts.start) && u.opts.start.call(e, u), rt.fx.timer(rt.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function X(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				o = t.toLowerCase().match(_t) || [];
			if (rt.isFunction(n))
				for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function z(e, t, n, i) {
		function r(a) {
			var l;
			return o[a] = !0, rt.each(e[a] || [], function (e, a) {
				var u = a(t, n, i);
				return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
			}), l
		}
		var o = {},
			s = e === Wn;
		return r(t.dataTypes[0]) || !o["*"] && r("*")
	}

	function q(e, t) {
		var n, i, r = rt.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
		return n && rt.extend(!0, e, n), e
	}

	function I(e, t, n) {
		for (var i, r, o, s, a = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (s in a)
				if (a[s] && a[s].test(r)) {
					l.unshift(s);
					break
				}
		if (l[0] in n) o = l[0];
		else {
			for (s in n) {
				if (!l[0] || e.converters[s + " " + l[0]]) {
					o = s;
					break
				}
				i || (i = s)
			}
			o = o || i
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}

	function B(e, t, n, i) {
		var r, o, s, a, l, u = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (s = u[l + " " + o] || u["* " + o], !s)
				for (r in u)
					if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
						s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
						break
					}
			if (s !== !0)
				if (s && e["throws"]) t = s(t);
				else try {
					t = s(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: s ? f : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function W(e, t, n, i) {
		var r;
		if (rt.isArray(t)) rt.each(t, function (t, r) {
			n || Un.test(e) ? i(e, r) : W(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== rt.type(t)) i(e, t);
		else
			for (r in t) W(e + "[" + r + "]", t[r], n, i)
	}

	function $() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function Y() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function V(e) {
		return rt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var U = [],
		G = U.slice,
		Q = U.concat,
		Z = U.push,
		K = U.indexOf,
		J = {},
		et = J.toString,
		tt = J.hasOwnProperty,
		nt = {},
		it = "1.11.1",
		rt = function (e, t) {
			return new rt.fn.init(e, t)
		},
		ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		st = /^-ms-/,
		at = /-([\da-z])/gi,
		lt = function (e, t) {
			return t.toUpperCase()
		};
	rt.fn = rt.prototype = {
		jquery: it,
		constructor: rt,
		selector: "",
		length: 0,
		toArray: function () {
			return G.call(this)
		},
		get: function (e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
		},
		pushStack: function (e) {
			var t = rt.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function (e, t) {
			return rt.each(this, e, t)
		},
		map: function (e) {
			return this.pushStack(rt.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function () {
			return this.pushStack(G.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: Z,
		sort: U.sort,
		splice: U.splice
	}, rt.extend = rt.fn.extend = function () {
		var e, t, n, i, r, o, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
			if (null != (r = arguments[a]))
				for (i in r) e = s[i], n = r[i], s !== n && (u && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ? (t ? (t = !1, o = e && rt.isArray(e) ? e : []) : o = e && rt.isPlainObject(e) ? e : {}, s[i] = rt.extend(u, o, n)) : void 0 !== n && (s[i] = n));
		return s
	}, rt.extend({
		expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isFunction: function (e) {
			return "function" === rt.type(e)
		},
		isArray: Array.isArray || function (e) {
			return "array" === rt.type(e)
		},
		isWindow: function (e) {
			return null != e && e == e.window
		},
		isNumeric: function (e) {
			return !rt.isArray(e) && e - parseFloat(e) >= 0
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function (e) {
			var t;
			if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) return !1;
			try {
				if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (nt.ownLast)
				for (t in e) return tt.call(e, t);
			for (t in e);
			return void 0 === t || tt.call(e, t)
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[et.call(e)] || "object" : typeof e
		},
		globalEval: function (t) {
			t && rt.trim(t) && (e.execScript || function (t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function (e) {
			return e.replace(st, "ms-").replace(at, lt)
		},
		nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function (e, t, i) {
			var r, o = 0,
				s = e.length,
				a = n(e);
			if (i) {
				if (a)
					for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
				else
					for (o in e)
						if (r = t.apply(e[o], i), r === !1) break
			} else if (a)
				for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
			else
				for (o in e)
					if (r = t.call(e[o], o, e[o]), r === !1) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(ot, "")
		},
		makeArray: function (e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
		},
		inArray: function (e, t, n) {
			var i;
			if (t) {
				if (K) return K.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function (e, t) {
			for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
			if (n !== n)
				for (; void 0 !== t[i];) e[r++] = t[i++];
			return e.length = r, e
		},
		grep: function (e, t, n) {
			for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
			return r
		},
		map: function (e, t, i) {
			var r, o = 0,
				s = e.length,
				a = n(e),
				l = [];
			if (a)
				for (; s > o; o++) r = t(e[o], o, i), null != r && l.push(r);
			else
				for (o in e) r = t(e[o], o, i), null != r && l.push(r);
			return Q.apply([], l)
		},
		guid: 1,
		proxy: function (e, t) {
			var n, i, r;
			return "string" == typeof t && (r = e[t], t = e, e = r), rt.isFunction(e) ? (n = G.call(arguments, 2), i = function () {
				return e.apply(t || this, n.concat(G.call(arguments)))
			}, i.guid = e.guid = e.guid || rt.guid++, i) : void 0
		},
		now: function () {
			return +new Date
		},
		support: nt
	}), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		J["[object " + t + "]"] = t.toLowerCase()
	});
	var ut = function (e) {
		function t(e, t, n, i) {
			var r, o, s, a, l, u, f, h, d, m;
			if ((t ? t.ownerDocument || t : z) !== D && O(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (a = t.nodeType) && 9 !== a) return [];
			if (j && !i) {
				if (r = yt.exec(e))
					if (s = r[1]) {
						if (9 === a) {
							if (o = t.getElementById(s), !o || !o.parentNode) return n;
							if (o.id === s) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && H(t, o) && o.id === s) return n.push(o), n
					} else {
						if (r[2]) return J.apply(n, t.getElementsByTagName(e)), n;
						if ((s = r[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n
					}
				if (b.qsa && (!R || !R.test(e))) {
					if (h = f = X, d = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
						for (u = C(e), (f = t.getAttribute("id")) ? h = f.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + p(u[l]);
						d = _t.test(e) && c(t.parentNode) || t, m = u.join(",")
					}
					if (m) try {
						return J.apply(n, d.querySelectorAll(m)), n
					} catch (g) {} finally {
						f || t.removeAttribute("id")
					}
				}
			}
			return P(e.replace(lt, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[X] = !0, e
		}

		function r(e) {
			var t = D.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
		}

		function s(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function a(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function u(e) {
			return i(function (t) {
				return t = +t, i(function (n, i) {
					for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}

		function c(e) {
			return e && typeof e.getElementsByTagName !== V && e
		}

		function f() {}

		function p(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}

		function h(e, t, n) {
			var i = t.dir,
				r = n && "parentNode" === i,
				o = I++;
			return t.first ? function (t, n, o) {
				for (; t = t[i];)
					if (1 === t.nodeType || r) return e(t, n, o)
			} : function (t, n, s) {
				var a, l, u = [q, o];
				if (s) {
					for (; t = t[i];)
						if ((1 === t.nodeType || r) && e(t, n, s)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || r) {
							if (l = t[X] || (t[X] = {}), (a = l[i]) && a[0] === q && a[1] === o) return u[2] = a[2];
							if (l[i] = u, u[2] = e(t, n, s)) return !0
						}
			}
		}

		function d(e) {
			return e.length > 1 ? function (t, n, i) {
				for (var r = e.length; r--;)
					if (!e[r](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function m(e, n, i) {
			for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
			return i
		}

		function g(e, t, n, i, r) {
			for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
			return s
		}

		function v(e, t, n, r, o, s) {
			return r && !r[X] && (r = v(r)), o && !o[X] && (o = v(o, s)), i(function (i, s, a, l) {
				var u, c, f, p = [],
					h = [],
					d = s.length,
					v = i || m(t || "*", a.nodeType ? [a] : a, []),
					y = !e || !i && t ? v : g(v, p, e, a, l),
					_ = n ? o || (i ? e : d || r) ? [] : s : y;
				if (n && n(y, _, a, l), r)
					for (u = g(_, h), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (_[h[c]] = !(y[h[c]] = f));
				if (i) {
					if (o || e) {
						if (o) {
							for (u = [], c = _.length; c--;)(f = _[c]) && u.push(y[c] = f);
							o(null, _ = [], u, l)
						}
						for (c = _.length; c--;)(f = _[c]) && (u = o ? tt.call(i, f) : p[c]) > -1 && (i[u] = !(s[u] = f))
					}
				} else _ = g(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, l) : J.apply(s, _)
			})
		}

		function y(e) {
			for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = h(function (e) {
					return e === t
				}, s, !0), u = h(function (e) {
					return tt.call(t, e) > -1
				}, s, !0), c = [function (e, n, i) {
					return !o && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
				}]; r > a; a++)
				if (n = w.relative[e[a].type]) c = [h(d(c), n)];
				else {
					if (n = w.filter[e[a].type].apply(null, e[a].matches), n[X]) {
						for (i = ++a; r > i && !w.relative[e[i].type]; i++);
						return v(a > 1 && d(c), a > 1 && p(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(lt, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && p(e))
					}
					c.push(n)
				}
			return d(c)
		}

		function _(e, n) {
			var r = n.length > 0,
				o = e.length > 0,
				s = function (i, s, a, l, u) {
					var c, f, p, h = 0,
						d = "0",
						m = i && [],
						v = [],
						y = N,
						_ = i || o && w.find.TAG("*", u),
						x = q += null == y ? 1 : Math.random() || .1,
						b = _.length;
					for (u && (N = s !== D && s); d !== b && null != (c = _[d]); d++) {
						if (o && c) {
							for (f = 0; p = e[f++];)
								if (p(c, s, a)) {
									l.push(c);
									break
								}
							u && (q = x)
						}
						r && ((c = !p && c) && h--, i && m.push(c))
					}
					if (h += d, r && d !== h) {
						for (f = 0; p = n[f++];) p(m, v, s, a);
						if (i) {
							if (h > 0)
								for (; d--;) m[d] || v[d] || (v[d] = Z.call(l));
							v = g(v)
						}
						J.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
					}
					return u && (q = x, N = y), m
				};
			return r ? i(s) : s
		}
		var x, b, w, T, k, C, S, P, N, A, E, O, D, L, j, R, M, F, H, X = "sizzle" + -new Date,
			z = e.document,
			q = 0,
			I = 0,
			B = n(),
			W = n(),
			$ = n(),
			Y = function (e, t) {
				return e === t && (E = !0), 0
			},
			V = "undefined",
			U = 1 << 31,
			G = {}.hasOwnProperty,
			Q = [],
			Z = Q.pop,
			K = Q.push,
			J = Q.push,
			et = Q.slice,
			tt = Q.indexOf || function (e) {
				for (var t = 0, n = this.length; n > t; t++)
					if (this[t] === e) return t;
				return -1
			},
			nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			it = "[\\x20\\t\\r\\n\\f]",
			rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ot = rt.replace("w", "w#"),
			st = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
			at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
			lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
			ut = new RegExp("^" + it + "*," + it + "*"),
			ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
			ft = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
			pt = new RegExp(at),
			ht = new RegExp("^" + ot + "$"),
			dt = {
				ID: new RegExp("^#(" + rt + ")"),
				CLASS: new RegExp("^\\.(" + rt + ")"),
				TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + st),
				PSEUDO: new RegExp("^" + at),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + nt + ")$", "i"),
				needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
			},
			mt = /^(?:input|select|textarea|button)$/i,
			gt = /^h\d$/i,
			vt = /^[^{]+\{\s*\[native \w/,
			yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_t = /[+~]/,
			xt = /'|\\/g,
			bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
			wt = function (e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			};
		try {
			J.apply(Q = et.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
		} catch (Tt) {
			J = {
				apply: Q.length ? function (e, t) {
					K.apply(e, et.call(t))
				} : function (e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		b = t.support = {}, k = t.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, O = t.setDocument = function (e) {
			var t, n = e ? e.ownerDocument || e : z,
				i = n.defaultView;
			return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, L = n.documentElement, j = !k(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
				O()
			}, !1) : i.attachEvent && i.attachEvent("onunload", function () {
				O()
			})), b.attributes = r(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), b.getElementsByTagName = r(function (e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), b.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function (e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
			}), b.getById = r(function (e) {
				return L.appendChild(e).id = X, !n.getElementsByName || !n.getElementsByName(X).length
			}), b.getById ? (w.find.ID = function (e, t) {
				if (typeof t.getElementById !== V && j) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, w.filter.ID = function (e) {
				var t = e.replace(bt, wt);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}) : (delete w.find.ID, w.filter.ID = function (e) {
				var t = e.replace(bt, wt);
				return function (e) {
					var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), w.find.TAG = b.getElementsByTagName ? function (e, t) {
				return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
			} : function (e, t) {
				var n, i = [],
					r = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, w.find.CLASS = b.getElementsByClassName && function (e, t) {
				return typeof t.getElementsByClassName !== V && j ? t.getElementsByClassName(e) : void 0
			}, M = [], R = [], (b.qsa = vt.test(n.querySelectorAll)) && (r(function (e) {
				e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && R.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + it + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || R.push(":checked")
			}), r(function (e) {
				var t = n.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
			})), (b.matchesSelector = vt.test(F = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (e) {
				b.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), M.push("!=", at)
			}), R = R.length && new RegExp(R.join("|")), M = M.length && new RegExp(M.join("|")), t = vt.test(L.compareDocumentPosition), H = t || vt.test(L.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function (e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, Y = t ? function (e, t) {
				if (e === t) return E = !0, 0;
				var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === z && H(z, e) ? -1 : t === n || t.ownerDocument === z && H(z, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & i ? -1 : 1)
			} : function (e, t) {
				if (e === t) return E = !0, 0;
				var i, r = 0,
					o = e.parentNode,
					a = t.parentNode,
					l = [e],
					u = [t];
				if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
				if (o === a) return s(e, t);
				for (i = e; i = i.parentNode;) l.unshift(i);
				for (i = t; i = i.parentNode;) u.unshift(i);
				for (; l[r] === u[r];) r++;
				return r ? s(l[r], u[r]) : l[r] === z ? -1 : u[r] === z ? 1 : 0
			}, n) : D
		}, t.matches = function (e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function (e, n) {
			if ((e.ownerDocument || e) !== D && O(e), n = n.replace(ft, "='$1']"), !(!b.matchesSelector || !j || M && M.test(n) || R && R.test(n))) try {
				var i = F.call(e, n);
				if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (r) {}
			return t(n, D, null, [e]).length > 0
		}, t.contains = function (e, t) {
			return (e.ownerDocument || e) !== D && O(e), H(e, t)
		}, t.attr = function (e, t) {
			(e.ownerDocument || e) !== D && O(e);
			var n = w.attrHandle[t.toLowerCase()],
				i = n && G.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
			return void 0 !== i ? i : b.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function (e) {
			var t, n = [],
				i = 0,
				r = 0;
			if (E = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(Y), E) {
				for (; t = e[r++];) t === e[r] && (i = n.push(r));
				for (; i--;) e.splice(n[i], 1)
			}
			return A = null, e
		}, T = t.getText = function (e) {
			var t, n = "",
				i = 0,
				r = e.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
				} else if (3 === r || 4 === r) return e.nodeValue
			} else
				for (; t = e[i++];) n += T(t);
			return n
		}, w = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: dt,
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
				ATTR: function (e) {
					return e[1] = e[1].replace(bt, wt), e[3] = (e[3] || e[4] || e[5] || "").replace(bt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function (e) {
					var t, n = !e[6] && e[2];
					return dt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(bt, wt).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e) {
					var t = B[e + " "];
					return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && B(e, function (e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
					})
				},
				ATTR: function (e, n, i) {
					return function (r) {
						var o = t.attr(r, e);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				},
				CHILD: function (e, t, n, i, r) {
					var o = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === i && 0 === r ? function (e) {
						return !!e.parentNode
					} : function (t, n, l) {
						var u, c, f, p, h, d, m = o !== s ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = a && t.nodeName.toLowerCase(),
							y = !l && !a;
						if (g) {
							if (o) {
								for (; m;) {
									for (f = t; f = f[m];)
										if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
									d = m = "only" === e && !d && "nextSibling"
								}
								return !0
							}
							if (d = [s ? g.firstChild : g.lastChild], s && y) {
								for (c = g[X] || (g[X] = {}), u = c[e] || [], h = u[0] === q && u[1], p = u[0] === q && u[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (p = h = 0) || d.pop();)
									if (1 === f.nodeType && ++p && f === t) {
										c[e] = [q, h, p];
										break
									}
							} else if (y && (u = (t[X] || (t[X] = {}))[e]) && u[0] === q) p = u[1];
							else
								for (;
									(f = ++h && f && f[m] || (p = h = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[X] || (f[X] = {}))[e] = [q, p]), f !== t)););
							return p -= r, p === i || p % i === 0 && p / i >= 0
						}
					}
				},
				PSEUDO: function (e, n) {
					var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[X] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
						for (var i, r = o(e, n), s = r.length; s--;) i = tt.call(e, r[s]), e[i] = !(t[i] = r[s])
					}) : function (e) {
						return o(e, 0, r)
					}) : o
				}
			},
			pseudos: {
				not: i(function (e) {
					var t = [],
						n = [],
						r = S(e.replace(lt, "$1"));
					return r[X] ? i(function (e, t, n, i) {
						for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
					}) : function (e, i, o) {
						return t[0] = e, r(t, null, o, n), !n.pop()
					}
				}),
				has: i(function (e) {
					return function (n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function (e) {
					return function (t) {
						return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
					}
				}),
				lang: i(function (e) {
					return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(bt, wt).toLowerCase(),
						function (t) {
							var n;
							do
								if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function (e) {
					return e === L
				},
				focus: function (e) {
					return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function (e) {
					return e.disabled === !1
				},
				disabled: function (e) {
					return e.disabled === !0
				},
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function (e) {
					return !w.pseudos.empty(e)
				},
				header: function (e) {
					return gt.test(e.nodeName)
				},
				input: function (e) {
					return mt.test(e.nodeName)
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: u(function () {
					return [0]
				}),
				last: u(function (e, t) {
					return [t - 1]
				}),
				eq: u(function (e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: u(function (e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: u(function (e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: u(function (e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: u(function (e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (x in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[x] = a(x);
		for (x in {
				submit: !0,
				reset: !0
			}) w.pseudos[x] = l(x);
		return f.prototype = w.filters = w.pseudos, w.setFilters = new f, C = t.tokenize = function (e, n) {
			var i, r, o, s, a, l, u, c = W[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (a = e, l = [], u = w.preFilter; a;) {
				(!i || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), o.push({
					value: i,
					type: r[0].replace(lt, " ")
				}), a = a.slice(i.length));
				for (s in w.filter) !(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
					value: i,
					type: s,
					matches: r
				}), a = a.slice(i.length));
				if (!i) break
			}
			return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
		}, S = t.compile = function (e, t) {
			var n, i = [],
				r = [],
				o = $[e + " "];
			if (!o) {
				for (t || (t = C(e)), n = t.length; n--;) o = y(t[n]), o[X] ? i.push(o) : r.push(o);
				o = $(e, _(r, i)), o.selector = e
			}
			return o
		}, P = t.select = function (e, t, n, i) {
			var r, o, s, a, l, u = "function" == typeof e && e,
				f = !i && C(e = u.selector || e);
			if (n = n || [], 1 === f.length) {
				if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === t.nodeType && j && w.relative[o[1].type]) {
					if (t = (w.find.ID(s.matches[0].replace(bt, wt), t) || [])[0], !t) return n;
					u && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (r = dt.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
					if ((l = w.find[a]) && (i = l(s.matches[0].replace(bt, wt), _t.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(r, 1), e = i.length && p(o), !e) return J.apply(n, i), n;
						break
					}
			}
			return (u || S(e, f))(i, t, !j, n, _t.test(e) && c(t.parentNode) || t), n
		}, b.sortStable = X.split("").sort(Y).join("") === X, b.detectDuplicates = !!E, O(), b.sortDetached = r(function (e) {
			return 1 & e.compareDocumentPosition(D.createElement("div"))
		}), r(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function (e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), b.attributes && r(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function (e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), r(function (e) {
			return null == e.getAttribute("disabled")
		}) || o(nt, function (e, t, n) {
			var i;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
	var ct = rt.expr.match.needsContext,
		ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		pt = /^.[^:#\[\.,]*$/;
	rt.filter = function (e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? rt.find.matchesSelector(i, e) ? [i] : [] : rt.find.matches(e, rt.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, rt.fn.extend({
		find: function (e) {
			var t, n = [],
				i = this,
				r = i.length;
			if ("string" != typeof e) return this.pushStack(rt(e).filter(function () {
				for (t = 0; r > t; t++)
					if (rt.contains(i[t], this)) return !0
			}));
			for (t = 0; r > t; t++) rt.find(e, i[t], n);
			return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function (e) {
			return this.pushStack(i(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(i(this, e || [], !0))
		},
		is: function (e) {
			return !!i(this, "string" == typeof e && ct.test(e) ? rt(e) : e || [], !1).length
		}
	});
	var ht, dt = e.document,
		mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		gt = rt.fn.init = function (e, t) {
			var n, i;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : dt, !0)), ft.test(n[1]) && rt.isPlainObject(t))
						for (n in t) rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if (i = dt.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return ht.find(e);
					this.length = 1, this[0] = i
				}
				return this.context = dt, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(rt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
		};
	gt.prototype = rt.fn, ht = rt(dt);
	var vt = /^(?:parents|prev(?:Until|All))/,
		yt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	rt.extend({
		dir: function (e, t, n) {
			for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
			return i
		},
		sibling: function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), rt.fn.extend({
		has: function (e) {
			var t, n = rt(e, this),
				i = n.length;
			return this.filter(function () {
				for (t = 0; i > t; t++)
					if (rt.contains(this, n[t])) return !0
			})
		},
		closest: function (e, t) {
			for (var n, i = 0, r = this.length, o = [], s = ct.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? rt.unique(o) : o)
		},
		index: function (e) {
			return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), rt.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return rt.dir(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return rt.dir(e, "parentNode", n)
		},
		next: function (e) {
			return r(e, "nextSibling")
		},
		prev: function (e) {
			return r(e, "previousSibling")
		},
		nextAll: function (e) {
			return rt.dir(e, "nextSibling")
		},
		prevAll: function (e) {
			return rt.dir(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return rt.dir(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return rt.dir(e, "previousSibling", n)
		},
		siblings: function (e) {
			return rt.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return rt.sibling(e.firstChild)
		},
		contents: function (e) {
			return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
		}
	}, function (e, t) {
		rt.fn[e] = function (n, i) {
			var r = rt.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())), this.pushStack(r)
		}
	});
	var _t = /\S+/g,
		xt = {};
	rt.Callbacks = function (e) {
		e = "string" == typeof e ? xt[e] || o(e) : rt.extend({}, e);
		var t, n, i, r, s, a, l = [],
			u = !e.once && [],
			c = function (o) {
				for (n = e.memory && o, i = !0, s = a || 0, a = 0, r = l.length, t = !0; l && r > s; s++)
					if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : f.disable())
			},
			f = {
				add: function () {
					if (l) {
						var i = l.length;
						! function o(t) {
							rt.each(t, function (t, n) {
								var i = rt.type(n);
								"function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
							})
						}(arguments), t ? r = l.length : n && (a = i, c(n))
					}
					return this
				},
				remove: function () {
					return l && rt.each(arguments, function (e, n) {
						for (var i;
							(i = rt.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, s >= i && s--)
					}), this
				},
				has: function (e) {
					return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function () {
					return l = [], r = 0, this
				},
				disable: function () {
					return l = u = n = void 0, this
				},
				disabled: function () {
					return !l
				},
				lock: function () {
					return u = void 0, n || f.disable(), this
				},
				locked: function () {
					return !u
				},
				fireWith: function (e, n) {
					return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
				},
				fire: function () {
					return f.fireWith(this, arguments), this
				},
				fired: function () {
					return !!i
				}
			};
		return f
	}, rt.extend({
		Deferred: function (e) {
			var t = [
					["resolve", "done", rt.Callbacks("once memory"), "resolved"],
					["reject", "fail", rt.Callbacks("once memory"), "rejected"],
					["notify", "progress", rt.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function () {
						return n
					},
					always: function () {
						return r.done(arguments).fail(arguments), this
					},
					then: function () {
						var e = arguments;
						return rt.Deferred(function (n) {
							rt.each(t, function (t, o) {
								var s = rt.isFunction(e[t]) && e[t];
								r[o[1]](function () {
									var e = s && s.apply(this, arguments);
									e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function (e) {
						return null != e ? rt.extend(e, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, rt.each(t, function (e, o) {
				var s = o[2],
					a = o[3];
				i[o[1]] = s.add, a && s.add(function () {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
					return r[o[0] + "With"](this === r ? i : this, arguments), this
				}, r[o[0] + "With"] = s.fireWith
			}), i.promise(r), e && e.call(r, r), r
		},
		when: function (e) {
			var t, n, i, r = 0,
				o = G.call(arguments),
				s = o.length,
				a = 1 !== s || e && rt.isFunction(e.promise) ? s : 0,
				l = 1 === a ? e : rt.Deferred(),
				u = function (e, n, i) {
					return function (r) {
						n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
					}
				};
			if (s > 1)
				for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
			return a || l.resolveWith(i, o), l.promise()
		}
	});
	var bt;
	rt.fn.ready = function (e) {
		return rt.ready.promise().done(e), this
	}, rt.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (e) {
			e ? rt.readyWait++ : rt.ready(!0)
		},
		ready: function (e) {
			if (e === !0 ? !--rt.readyWait : !rt.isReady) {
				if (!dt.body) return setTimeout(rt.ready);
				rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (bt.resolveWith(dt, [rt]), rt.fn.triggerHandler && (rt(dt).triggerHandler("ready"), rt(dt).off("ready")))
			}
		}
	}), rt.ready.promise = function (t) {
		if (!bt)
			if (bt = rt.Deferred(), "complete" === dt.readyState) setTimeout(rt.ready);
			else if (dt.addEventListener) dt.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
		else {
			dt.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
			var n = !1;
			try {
				n = null == e.frameElement && dt.documentElement
			} catch (i) {}
			n && n.doScroll && ! function r() {
				if (!rt.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(r, 50)
					}
					s(), rt.ready()
				}
			}()
		}
		return bt.promise(t)
	};
	var wt, Tt = "undefined";
	for (wt in rt(nt)) break;
	nt.ownLast = "0" !== wt, nt.inlineBlockNeedsLayout = !1, rt(function () {
			var e, t, n, i;
			n = dt.getElementsByTagName("body")[0], n && n.style && (t = dt.createElement("div"), i = dt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
		}),
		function () {
			var e = dt.createElement("div");
			if (null == nt.deleteExpando) {
				nt.deleteExpando = !0;
				try {
					delete e.test
				} catch (t) {
					nt.deleteExpando = !1
				}
			}
			e = null
		}(), rt.acceptData = function (e) {
			var t = rt.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
	var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ct = /([A-Z])/g;
	rt.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (e) {
			return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando], !!e && !u(e)
		},
		data: function (e, t, n) {
			return c(e, t, n)
		},
		removeData: function (e, t) {
			return f(e, t)
		},
		_data: function (e, t, n) {
			return c(e, t, n, !0)
		},
		_removeData: function (e, t) {
			return f(e, t, !0)
		}
	}), rt.fn.extend({
		data: function (e, t) {
			var n, i, r, o = this[0],
				s = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
					for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
					rt._data(o, "parsedAttrs", !0)
				}
				return r
			}
			return "object" == typeof e ? this.each(function () {
				rt.data(this, e)
			}) : arguments.length > 1 ? this.each(function () {
				rt.data(this, e, t)
			}) : o ? l(o, e, rt.data(o, e)) : void 0
		},
		removeData: function (e) {
			return this.each(function () {
				rt.removeData(this, e)
			})
		}
	}), rt.extend({
		queue: function (e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = rt._data(e, t), n && (!i || rt.isArray(n) ? i = rt._data(e, t, rt.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = rt.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = rt._queueHooks(e, t),
				s = function () {
					rt.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return rt._data(e, n) || rt._data(e, n, {
				empty: rt.Callbacks("once memory").add(function () {
					rt._removeData(e, t + "queue"), rt._removeData(e, n)
				})
			})
		}
	}), rt.fn.extend({
		queue: function (e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function () {
				var n = rt.queue(this, e, t);
				rt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && rt.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				rt.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var n, i = 1,
				r = rt.Deferred(),
				o = this,
				s = this.length,
				a = function () {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = rt._data(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
			return a(), r.promise(t)
		}
	});
	var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Pt = ["Top", "Right", "Bottom", "Left"],
		Nt = function (e, t) {
			return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
		},
		At = rt.access = function (e, t, n, i, r, o, s) {
			var a = 0,
				l = e.length,
				u = null == n;
			if ("object" === rt.type(n)) {
				r = !0;
				for (a in n) rt.access(e, t, a, n[a], !0, o, s)
			} else if (void 0 !== i && (r = !0, rt.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
					return u.call(rt(e), n)
				})), t))
				for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
			return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
		},
		Et = /^(?:checkbox|radio)$/i;
	! function () {
		var e = dt.createElement("input"),
			t = dt.createElement("div"),
			n = dt.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== dt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
				nt.noCloneEvent = !1
			}), t.cloneNode(!0).click()), null == nt.deleteExpando) {
			nt.deleteExpando = !0;
			try {
				delete t.test
			} catch (i) {
				nt.deleteExpando = !1
			}
		}
	}(),
	function () {
		var t, n, i = dt.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var Ot = /^(?:input|select|textarea)$/i,
		Dt = /^key/,
		Lt = /^(?:mouse|pointer|contextmenu)|click/,
		jt = /^(?:focusinfocus|focusoutblur)$/,
		Rt = /^([^.]*)(?:\.(.+)|)$/;
	rt.event = {
		global: {},
		add: function (e, t, n, i, r) {
			var o, s, a, l, u, c, f, p, h, d, m, g = rt._data(e);
			if (g) {
				for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
						return typeof rt === Tt || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
					}, c.elem = e), t = (t || "").match(_t) || [""], a = t.length; a--;) o = Rt.exec(t[a]) || [], h = m = o[1], d = (o[2] || "").split(".").sort(), h && (u = rt.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = rt.event.special[h] || {}, f = rt.extend({
					type: h,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && rt.expr.match.needsContext.test(r),
					namespace: d.join(".")
				}, l), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, d, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, f) : p.push(f), rt.event.global[h] = !0);
				e = null
			}
		},
		remove: function (e, t, n, i, r) {
			var o, s, a, l, u, c, f, p, h, d, m, g = rt.hasData(e) && rt._data(e);
			if (g && (c = g.events)) {
				for (t = (t || "").match(_t) || [""], u = t.length; u--;)
					if (a = Rt.exec(t[u]) || [], h = m = a[1], d = (a[2] || "").split(".").sort(), h) {
						for (f = rt.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, p = c[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) s = p[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(o, 1), s.selector && p.delegateCount--, f.remove && f.remove.call(e, s));
						l && !p.length && (f.teardown && f.teardown.call(e, d, g.handle) !== !1 || rt.removeEvent(e, h, g.handle), delete c[h])
					} else
						for (h in c) rt.event.remove(e, h + t[u], n, i, !0);
				rt.isEmptyObject(c) && (delete g.handle, rt._removeData(e, "events"))
			}
		},
		trigger: function (t, n, i, r) {
			var o, s, a, l, u, c, f, p = [i || dt],
				h = tt.call(t, "type") ? t.type : t,
				d = tt.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = c = i = i || dt, 3 !== i.nodeType && 8 !== i.nodeType && !jt.test(h + rt.event.triggered) && (h.indexOf(".") >= 0 && (d = h.split("."), h = d.shift(), d.sort()), s = h.indexOf(":") < 0 && "on" + h, t = t[rt.expando] ? t : new rt.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = d.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : rt.makeArray(n, [t]), u = rt.event.special[h] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
				if (!r && !u.noBubble && !rt.isWindow(i)) {
					for (l = u.delegateType || h, jt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), c = a;
					c === (i.ownerDocument || dt) && p.push(c.defaultView || c.parentWindow || e)
				}
				for (f = 0;
					(a = p[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l : u.bindType || h, o = (rt._data(a, "events") || {})[t.type] && rt._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && rt.acceptData(a) && (t.result = o.apply(a, n), t.result === !1 && t.preventDefault());
				if (t.type = h, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && rt.acceptData(i) && s && i[h] && !rt.isWindow(i)) {
					c = i[s], c && (i[s] = null), rt.event.triggered = h;
					try {
						i[h]()
					} catch (m) {}
					rt.event.triggered = void 0, c && (i[s] = c)
				}
				return t.result
			}
		},
		dispatch: function (e) {
			e = rt.event.fix(e);
			var t, n, i, r, o, s = [],
				a = G.call(arguments),
				l = (rt._data(this, "events") || {})[e.type] || [],
				u = rt.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (s = rt.event.handlers.call(this, e, l), t = 0;
					(r = s[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = r.elem, o = 0;
						(i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function (e, t) {
			var n, i, r, o, s = [],
				a = t.delegateCount,
				l = e.target;
			if (a && l.nodeType && (!e.button || "click" !== e.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (r = [], o = 0; a > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
						r.length && s.push({
							elem: l,
							handlers: r
						})
					}
			return a < t.length && s.push({
				elem: this,
				handlers: t.slice(a)
			}), s
		},
		fix: function (e) {
			if (e[rt.expando]) return e;
			var t, n, i, r = e.type,
				o = e,
				s = this.fixHooks[r];
			for (s || (this.fixHooks[r] = s = Lt.test(r) ? this.mouseHooks : Dt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new rt.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || dt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (e, t) {
				var n, i, r, o = t.button,
					s = t.fromElement;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || dt, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== d() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === d() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function (e) {
					return rt.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function (e, t, n, i) {
			var r = rt.extend(new rt.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, rt.removeEvent = dt.removeEventListener ? function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function (e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === Tt && (e[i] = null), e.detachEvent(i, n))
	}, rt.Event = function (e, t) {
		return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
	}, rt.Event.prototype = {
		isDefaultPrevented: h,
		isPropagationStopped: h,
		isImmediatePropagationStopped: h,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, rt.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, t) {
		rt.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var n, i = this,
					r = e.relatedTarget,
					o = e.handleObj;
				return (!r || r !== i && !rt.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), nt.submitBubbles || (rt.event.special.submit = {
		setup: function () {
			return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function (e) {
				var t = e.target,
					n = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
				n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function (e) {
					e._submit_bubble = !0
				}), rt._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function (e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function () {
			return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
		}
	}), nt.changeBubbles || (rt.event.special.change = {
		setup: function () {
			return Ot.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function (e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), rt.event.add(this, "click._change", function (e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
			})), !1) : void rt.event.add(this, "beforeactivate._change", function (e) {
				var t = e.target;
				Ot.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function (e) {
					!this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
				}), rt._data(t, "changeBubbles", !0))
			})
		},
		handle: function (e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function () {
			return rt.event.remove(this, "._change"), !Ot.test(this.nodeName)
		}
	}), nt.focusinBubbles || rt.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var n = function (e) {
			rt.event.simulate(t, e.target, rt.event.fix(e), !0)
		};
		rt.event.special[t] = {
			setup: function () {
				var i = this.ownerDocument || this,
					r = rt._data(i, t);
				r || i.addEventListener(e, n, !0), rt._data(i, t, (r || 0) + 1)
			},
			teardown: function () {
				var i = this.ownerDocument || this,
					r = rt._data(i, t) - 1;
				r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0), rt._removeData(i, t))
			}
		}
	}), rt.fn.extend({
		on: function (e, t, n, i, r) {
			var o, s;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (o in e) this.on(o, t, n, e[o], r);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = h;
			else if (!i) return this;
			return 1 === r && (s = i, i = function (e) {
				return rt().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = rt.guid++)), this.each(function () {
				rt.event.add(this, e, i, n, t)
			})
		},
		one: function (e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function (e, t, n) {
			var i, r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, rt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (r in e) this.off(r, t, e[r]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
				rt.event.remove(this, e, n, t)
			})
		},
		trigger: function (e, t) {
			return this.each(function () {
				rt.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			return n ? rt.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ft = / jQuery\d+="(?:null|\d+)"/g,
		Ht = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"),
		Xt = /^\s+/,
		zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		qt = /<([\w:]+)/,
		It = /<tbody/i,
		Bt = /<|&#?\w+;/,
		Wt = /<(?:script|style|link)/i,
		$t = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Yt = /^$|\/(?:java|ecma)script/i,
		Vt = /^true\/(.*)/,
		Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Gt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Qt = m(dt),
		Zt = Qt.appendChild(dt.createElement("div"));
	Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td, rt.extend({
		clone: function (e, t, n) {
			var i, r, o, s, a, l = rt.contains(e.ownerDocument, e);
			if (nt.html5Clone || rt.isXMLDoc(e) || !Ht.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Zt.innerHTML = e.outerHTML, Zt.removeChild(o = Zt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e)))
				for (i = g(o), a = g(e), s = 0; null != (r = a[s]); ++s) i[s] && T(r, i[s]);
			if (t)
				if (n)
					for (a = a || g(e), i = i || g(o), s = 0; null != (r = a[s]); s++) w(r, i[s]);
				else w(e, o);
			return i = g(o, "script"), i.length > 0 && b(i, !l && g(e, "script")), i = a = r = null, o
		},
		buildFragment: function (e, t, n, i) {
			for (var r, o, s, a, l, u, c, f = e.length, p = m(t), h = [], d = 0; f > d; d++)
				if (o = e[d], o || 0 === o)
					if ("object" === rt.type(o)) rt.merge(h, o.nodeType ? [o] : o);
					else if (Bt.test(o)) {
				for (a = a || p.appendChild(t.createElement("div")), l = (qt.exec(o) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, a.innerHTML = c[1] + o.replace(zt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
				if (!nt.leadingWhitespace && Xt.test(o) && h.push(t.createTextNode(Xt.exec(o)[0])), !nt.tbody)
					for (o = "table" !== l || It.test(o) ? "<table>" !== c[1] || It.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
				for (rt.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = p.lastChild
			} else h.push(t.createTextNode(o));
			for (a && p.removeChild(a), nt.appendChecked || rt.grep(g(h, "input"), v), d = 0; o = h[d++];)
				if ((!i || -1 === rt.inArray(o, i)) && (s = rt.contains(o.ownerDocument, o), a = g(p.appendChild(o), "script"), s && b(a), n))
					for (r = 0; o = a[r++];) Yt.test(o.type || "") && n.push(o);
			return a = null, p
		},
		cleanData: function (e, t) {
			for (var n, i, r, o, s = 0, a = rt.expando, l = rt.cache, u = nt.deleteExpando, c = rt.event.special; null != (n = e[s]); s++)
				if ((t || rt.acceptData(n)) && (r = n[a], o = r && l[r])) {
					if (o.events)
						for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
					l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== Tt ? n.removeAttribute(a) : n[a] = null, U.push(r))
				}
		}
	}), rt.fn.extend({
		text: function (e) {
			return At(this, function (e) {
				return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || dt).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function (e, t) {
			for (var n, i = e ? rt.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || rt.cleanData(g(n)), n.parentNode && (t && rt.contains(n.ownerDocument, n) && b(g(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && rt.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && rt.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function (e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
				return rt.clone(this, e, t)
			})
		},
		html: function (e) {
			return At(this, function (e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ft, "") : void 0;
				if (!("string" != typeof e || Wt.test(e) || !nt.htmlSerialize && Ht.test(e) || !nt.leadingWhitespace && Xt.test(e) || Gt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(zt, "<$1></$2>");
					try {
						for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (rt.cleanData(g(t, !1)), t.innerHTML = e);
						t = 0
					} catch (r) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var e = arguments[0];
			return this.domManip(arguments, function (t) {
				e = this.parentNode, rt.cleanData(g(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function (e) {
			return this.remove(e, !0)
		},
		domManip: function (e, t) {
			e = Q.apply([], e);
			var n, i, r, o, s, a, l = 0,
				u = this.length,
				c = this,
				f = u - 1,
				p = e[0],
				h = rt.isFunction(p);
			if (h || u > 1 && "string" == typeof p && !nt.checkClone && $t.test(p)) return this.each(function (n) {
				var i = c.eq(n);
				h && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
			});
			if (u && (a = rt.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
				for (o = rt.map(g(a, "script"), _), r = o.length; u > l; l++) i = a, l !== f && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))), t.call(this[l], i, l);
				if (r)
					for (s = o[o.length - 1].ownerDocument, rt.map(o, x), l = 0; r > l; l++) i = o[l], Yt.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(s, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ut, "")));
				a = n = null
			}
			return this
		}
	}), rt.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		rt.fn[e] = function (e) {
			for (var n, i = 0, r = [], o = rt(e), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), rt(o[i])[t](n), Z.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var Kt, Jt = {};
	! function () {
		var e;
		nt.shrinkWrapBlocks = function () {
			if (null != e) return e;
			e = !1;
			var t, n, i;
			return n = dt.getElementsByTagName("body")[0], n && n.style ? (t = dt.createElement("div"), i = dt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(dt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
		}
	}();
	var en, tn, nn = /^margin/,
		rn = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
		on = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (en = function (e) {
			return e.ownerDocument.defaultView.getComputedStyle(e, null)
		}, tn = function (e, t, n) {
			var i, r, o, s, a = e.style;
			return n = n || en(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || rt.contains(e.ownerDocument, e) || (s = rt.style(e, t)), rn.test(s) && nn.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
		}) : dt.documentElement.currentStyle && (en = function (e) {
			return e.currentStyle
		}, tn = function (e, t, n) {
			var i, r, o, s, a = e.style;
			return n = n || en(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), rn.test(s) && !on.test(t) && (i = a.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
		}),
		function () {
			function t() {
				var t, n, i, r;
				n = dt.getElementsByTagName("body")[0], n && n.style && (t = dt.createElement("div"), i = dt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
					width: "4px"
				}).width, r = t.appendChild(dt.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
			}
			var n, i, r, o, s, a, l;
			n = dt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
				reliableHiddenOffsets: function () {
					return null == a && t(), a
				},
				boxSizingReliable: function () {
					return null == s && t(), s
				},
				pixelPosition: function () {
					return null == o && t(), o
				},
				reliableMarginRight: function () {
					return null == l && t(), l
				}
			}))
		}(), rt.swap = function (e, t, n, i) {
			var r, o, s = {};
			for (o in t) s[o] = e.style[o], e.style[o] = t[o];
			r = n.apply(e, i || []);
			for (o in t) e.style[o] = s[o];
			return r
		};
	var sn = /alpha\([^)]*\)/i,
		an = /opacity\s*=\s*([^)]*)/,
		ln = /^(none|table(?!-c[ea]).+)/,
		un = new RegExp("^(" + St + ")(.*)$", "i"),
		cn = new RegExp("^([+-])=(" + St + ")", "i"),
		fn = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		pn = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		hn = ["Webkit", "O", "Moz", "ms"];
	rt.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = tn(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
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
			"float": nt.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, o, s, a = rt.camelCase(t),
					l = e.style;
				if (t = rt.cssProps[a] || (rt.cssProps[a] = P(l, a)), s = rt.cssHooks[t] || rt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
				if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
					l[t] = n
				} catch (u) {}
			}
		},
		css: function (e, t, n, i) {
			var r, o, s, a = rt.camelCase(t);
			return t = rt.cssProps[a] || (rt.cssProps[a] = P(e.style, a)), s = rt.cssHooks[t] || rt.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = tn(e, t, i)), "normal" === o && t in pn && (o = pn[t]), "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
		}
	}), rt.each(["height", "width"], function (e, t) {
		rt.cssHooks[t] = {
			get: function (e, n, i) {
				return n ? ln.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, fn, function () {
					return O(e, t, i)
				}) : O(e, t, i) : void 0
			},
			set: function (e, n, i) {
				var r = i && en(e);
				return A(e, n, i ? E(e, t, i, nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r), r) : 0)
			}
		}
	}), nt.opacity || (rt.cssHooks.opacity = {
		get: function (e, t) {
			return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function (e, t) {
			var n = e.style,
				i = e.currentStyle,
				r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === rt.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = sn.test(o) ? o.replace(sn, r) : o + " " + r)
		}
	}), rt.cssHooks.marginRight = S(nt.reliableMarginRight, function (e, t) {
		return t ? rt.swap(e, {
			display: "inline-block"
		}, tn, [e, "marginRight"]) : void 0
	}), rt.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		rt.cssHooks[e + t] = {
			expand: function (n) {
				for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Pt[i] + t] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, nn.test(e) || (rt.cssHooks[e + t].set = A)
	}), rt.fn.extend({
		css: function (e, t) {
			return At(this, function (e, t, n) {
				var i, r, o = {},
					s = 0;
				if (rt.isArray(t)) {
					for (i = en(e), r = t.length; r > s; s++) o[t[s]] = rt.css(e, t[s], !1, i);
					return o
				}
				return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function () {
			return N(this, !0)
		},
		hide: function () {
			return N(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				Nt(this) ? rt(this).show() : rt(this).hide()
			})
		}
	}), rt.Tween = D, D.prototype = {
		constructor: D,
		init: function (e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = D.propHooks[this.prop];
			return e && e.get ? e.get(this) : D.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = D.propHooks[this.prop];
			return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
		}
	}, D.prototype.init.prototype = D.prototype, D.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function (e) {
				rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, rt.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, rt.fx = D.prototype.init, rt.fx.step = {};
	var dn, mn, gn = /^(?:toggle|show|hide)$/,
		vn = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
		yn = /queueHooks$/,
		_n = [M],
		xn = {
			"*": [function (e, t) {
				var n = this.createTween(e, t),
					i = n.cur(),
					r = vn.exec(t),
					o = r && r[3] || (rt.cssNumber[e] ? "" : "px"),
					s = (rt.cssNumber[e] || "px" !== o && +i) && vn.exec(rt.css(n.elem, e)),
					a = 1,
					l = 20;
				if (s && s[3] !== o) {
					o = o || s[3], r = r || [], s = +i || 1;
					do a = a || ".5", s /= a, rt.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
				}
				return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
			}]
		};
	rt.Animation = rt.extend(H, {
			tweener: function (e, t) {
				rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, r = e.length; r > i; i++) n = e[i], xn[n] = xn[n] || [], xn[n].unshift(t)
			},
			prefilter: function (e, t) {
				t ? _n.unshift(e) : _n.push(e)
			}
		}), rt.speed = function (e, t, n) {
			var i = e && "object" == typeof e ? rt.extend({}, e) : {
				complete: n || !n && t || rt.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !rt.isFunction(t) && t
			};
			return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
				rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
			}, i
		}, rt.fn.extend({
			fadeTo: function (e, t, n, i) {
				return this.filter(Nt).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function (e, t, n, i) {
				var r = rt.isEmptyObject(e),
					o = rt.speed(t, n, i),
					s = function () {
						var t = H(this, rt.extend({}, e), o);
						(r || rt._data(this, "finish")) && t.stop(!0)
					};
				return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
			},
			stop: function (e, t, n) {
				var i = function (e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
					var t = !0,
						r = null != e && e + "queueHooks",
						o = rt.timers,
						s = rt._data(this);
					if (r) s[r] && s[r].stop && i(s[r]);
					else
						for (r in s) s[r] && s[r].stop && yn.test(r) && i(s[r]);
					for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
					(t || !n) && rt.dequeue(this, e)
				})
			},
			finish: function (e) {
				return e !== !1 && (e = e || "fx"), this.each(function () {
					var t, n = rt._data(this),
						i = n[e + "queue"],
						r = n[e + "queueHooks"],
						o = rt.timers,
						s = i ? i.length : 0;
					for (n.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), rt.each(["toggle", "show", "hide"], function (e, t) {
			var n = rt.fn[t];
			rt.fn[t] = function (e, i, r) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, r)
			}
		}), rt.each({
			slideDown: j("show"),
			slideUp: j("hide"),
			slideToggle: j("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, t) {
			rt.fn[e] = function (e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), rt.timers = [], rt.fx.tick = function () {
			var e, t = rt.timers,
				n = 0;
			for (dn = rt.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || rt.fx.stop(), dn = void 0
		}, rt.fx.timer = function (e) {
			rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
		}, rt.fx.interval = 13, rt.fx.start = function () {
			mn || (mn = setInterval(rt.fx.tick, rt.fx.interval))
		}, rt.fx.stop = function () {
			clearInterval(mn), mn = null
		}, rt.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, rt.fn.delay = function (e, t) {
			return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
				var i = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(i)
				}
			})
		},
		function () {
			var e, t, n, i, r;
			t = dt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = dt.createElement("select"), r = n.appendChild(dt.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = r.selected, nt.enctype = !!dt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, e = dt.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
		}();
	var bn = /\r/g;
	rt.fn.extend({
		val: function (e) {
			var t, n, i, r = this[0]; {
				if (arguments.length) return i = rt.isFunction(e), this.each(function (n) {
					var r;
					1 === this.nodeType && (r = i ? e.call(this, n, rt(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (e) {
						return null == e ? "" : e + ""
					})), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
				});
				if (r) return t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(bn, "") : null == n ? "" : n)
			}
		}
	}), rt.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = rt.find.attr(e, "value");
					return null != t ? t : rt.trim(rt.text(e))
				}
			},
			select: {
				get: function (e) {
					for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
						if (n = i[l], !(!n.selected && l !== r || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
							if (t = rt(n).val(), o) return t;
							s.push(t)
						}
					return s
				},
				set: function (e, t) {
					for (var n, i, r = e.options, o = rt.makeArray(t), s = r.length; s--;)
						if (i = r[s], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
							i.selected = n = !0
						} catch (a) {
							i.scrollHeight
						} else i.selected = !1;
					return n || (e.selectedIndex = -1), r
				}
			}
		}
	}), rt.each(["radio", "checkbox"], function () {
		rt.valHooks[this] = {
			set: function (e, t) {
				return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
			}
		}, nt.checkOn || (rt.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var wn, Tn, kn = rt.expr.attrHandle,
		Cn = /^(?:checked|selected)$/i,
		Sn = nt.getSetAttribute,
		Pn = nt.input;
	rt.fn.extend({
		attr: function (e, t) {
			return At(this, rt.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				rt.removeAttr(this, e)
			})
		}
	}), rt.extend({
		attr: function (e, t, n) {
			var i, r, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Tt ? rt.prop(e, t, n) : (1 === o && rt.isXMLDoc(e) || (t = t.toLowerCase(), i = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? Tn : wn)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = rt.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void rt.removeAttr(e, t))
		},
		removeAttr: function (e, t) {
			var n, i, r = 0,
				o = t && t.match(_t);
			if (o && 1 === e.nodeType)
				for (; n = o[r++];) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? Pn && Sn || !Cn.test(n) ? e[i] = !1 : e[rt.camelCase("default-" + n)] = e[i] = !1 : rt.attr(e, n, ""), e.removeAttribute(Sn ? n : i)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!nt.radioValue && "radio" === t && rt.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), Tn = {
		set: function (e, t, n) {
			return t === !1 ? rt.removeAttr(e, n) : Pn && Sn || !Cn.test(n) ? e.setAttribute(!Sn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = kn[t] || rt.find.attr;
		kn[t] = Pn && Sn || !Cn.test(t) ? function (e, t, i) {
			var r, o;
			return i || (o = kn[t], kn[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, kn[t] = o), r
		} : function (e, t, n) {
			return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), Pn && Sn || (rt.attrHooks.value = {
		set: function (e, t, n) {
			return rt.nodeName(e, "input") ? void(e.defaultValue = t) : wn && wn.set(e, t, n)
		}
	}), Sn || (wn = {
		set: function (e, t, n) {
			var i = e.getAttributeNode(n);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
		}
	}, kn.id = kn.name = kn.coords = function (e, t, n) {
		var i;
		return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
	}, rt.valHooks.button = {
		get: function (e, t) {
			var n = e.getAttributeNode(t);
			return n && n.specified ? n.value : void 0
		},
		set: wn.set
	}, rt.attrHooks.contenteditable = {
		set: function (e, t, n) {
			wn.set(e, "" === t ? !1 : t, n)
		}
	}, rt.each(["width", "height"], function (e, t) {
		rt.attrHooks[t] = {
			set: function (e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), nt.style || (rt.attrHooks.style = {
		get: function (e) {
			return e.style.cssText || void 0
		},
		set: function (e, t) {
			return e.style.cssText = t + ""
		}
	});
	var Nn = /^(?:input|select|textarea|button|object)$/i,
		An = /^(?:a|area)$/i;
	rt.fn.extend({
		prop: function (e, t) {
			return At(this, rt.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return e = rt.propFix[e] || e, this.each(function () {
				try {
					this[e] = void 0, delete this[e]
				} catch (t) {}
			})
		}
	}), rt.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (e, t, n) {
			var i, r, o, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !rt.isXMLDoc(e), o && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = rt.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Nn.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), nt.hrefNormalized || rt.each(["href", "src"], function (e, t) {
		rt.propHooks[t] = {
			get: function (e) {
				return e.getAttribute(t, 4)
			}
		}
	}), nt.optSelected || (rt.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		rt.propFix[this.toLowerCase()] = this
	}), nt.enctype || (rt.propFix.enctype = "encoding");
	var En = /[\t\r\n\f]/g;
	rt.fn.extend({
		addClass: function (e) {
			var t, n, i, r, o, s, a = 0,
				l = this.length,
				u = "string" == typeof e && e;
			if (rt.isFunction(e)) return this.each(function (t) {
				rt(this).addClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(_t) || []; l > a; a++)
					if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(En, " ") : " ")) {
						for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
						s = rt.trim(i), n.className !== s && (n.className = s)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, i, r, o, s, a = 0,
				l = this.length,
				u = 0 === arguments.length || "string" == typeof e && e;
			if (rt.isFunction(e)) return this.each(function (t) {
				rt(this).removeClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(_t) || []; l > a; a++)
					if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(En, " ") : "")) {
						for (o = 0; r = t[o++];)
							for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
						s = e ? rt.trim(i) : "", n.className !== s && (n.className = s)
					}
			return this
		},
		toggleClass: function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ? function (n) {
				rt(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function () {
				if ("string" === n)
					for (var t, i = 0, r = rt(this), o = e.match(_t) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else(n === Tt || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
			})
		},
		hasClass: function (e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(En, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		rt.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), rt.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var On = rt.now(),
		Dn = /\?/,
		Ln = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	rt.parseJSON = function (t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, i = null,
			r = rt.trim(t + "");
		return r && !rt.trim(r.replace(Ln, function (e, t, r, o) {
			return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
		})) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
	}, rt.parseXML = function (t) {
		var n, i;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (r) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t), n
	};
	var jn, Rn, Mn = /#.*$/,
		Fn = /([?&])_=[^&]*/,
		Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		zn = /^(?:GET|HEAD)$/,
		qn = /^\/\//,
		In = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Bn = {},
		Wn = {},
		$n = "*/".concat("*");
	try {
		Rn = location.href
	} catch (Yn) {
		Rn = dt.createElement("a"), Rn.href = "", Rn = Rn.href
	}
	jn = In.exec(Rn.toLowerCase()) || [], rt.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Rn,
			type: "GET",
			isLocal: Xn.test(jn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": $n,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": rt.parseJSON,
				"text xml": rt.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? q(q(e, rt.ajaxSettings), t) : q(rt.ajaxSettings, e)
		},
		ajaxPrefilter: X(Bn),
		ajaxTransport: X(Wn),
		ajax: function (e, t) {
			function n(e, t, n, i) {
				var r, c, v, y, x, w = t;
				2 !== _ && (_ = 2, a && clearTimeout(a), u = void 0, s = i || "", b.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = I(f, b, n)), y = B(f, y, b, r), r ? (f.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (rt.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (rt.etag[o] = x)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, r = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || w) + "", r ? d.resolveWith(p, [c, w, b]) : d.rejectWith(p, [b, w, v]), b.statusCode(g), g = void 0, l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [b, f, r ? c : v]), m.fireWith(p, [b, w]), l && (h.trigger("ajaxComplete", [b, f]), --rt.active || rt.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var i, r, o, s, a, l, u, c, f = rt.ajaxSetup({}, t),
				p = f.context || f,
				h = f.context && (p.nodeType || p.jquery) ? rt(p) : rt.event,
				d = rt.Deferred(),
				m = rt.Callbacks("once memory"),
				g = f.statusCode || {},
				v = {},
				y = {},
				_ = 0,
				x = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (2 === _) {
							if (!c)
								for (c = {}; t = Hn.exec(s);) c[t[1].toLowerCase()] = t[2];
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return 2 === _ ? s : null
					},
					setRequestHeader: function (e, t) {
						var n = e.toLowerCase();
						return _ || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function (e) {
						return _ || (f.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (2 > _)
								for (t in e) g[t] = [g[t], e[t]];
							else b.always(e[b.status]);
						return this
					},
					abort: function (e) {
						var t = e || x;
						return u && u.abort(t), n(0, t), this
					}
				};
			if (d.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, f.url = ((e || f.url || Rn) + "").replace(Mn, "").replace(qn, jn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = rt.trim(f.dataType || "*").toLowerCase().match(_t) || [""], null == f.crossDomain && (i = In.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === jn[1] && i[2] === jn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jn[3] || ("http:" === jn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = rt.param(f.data, f.traditional)), z(Bn, f, t, b), 2 === _) return b;
			l = f.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !zn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Dn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Fn.test(o) ? o.replace(Fn, "$1_=" + On++) : o + (Dn.test(o) ? "&" : "?") + "_=" + On++)), f.ifModified && (rt.lastModified[o] && b.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && b.setRequestHeader("If-None-Match", rt.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $n + "; q=0.01" : "") : f.accepts["*"]);
			for (r in f.headers) b.setRequestHeader(r, f.headers[r]);
			if (f.beforeSend && (f.beforeSend.call(p, b, f) === !1 || 2 === _)) return b.abort();
			x = "abort";
			for (r in {
					success: 1,
					error: 1,
					complete: 1
				}) b[r](f[r]);
			if (u = z(Wn, f, t, b)) {
				b.readyState = 1, l && h.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
					b.abort("timeout")
				}, f.timeout));
				try {
					_ = 1, u.send(v, n)
				} catch (w) {
					if (!(2 > _)) throw w;
					n(-1, w)
				}
			} else n(-1, "No Transport");
			return b
		},
		getJSON: function (e, t, n) {
			return rt.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return rt.get(e, void 0, t, "script")
		}
	}), rt.each(["get", "post"], function (e, t) {
		rt[t] = function (e, n, i, r) {
			return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
				url: e,
				type: t,
				dataType: r,
				data: n,
				success: i
			})
		}
	}), rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		rt.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), rt._evalUrl = function (e) {
		return rt.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, rt.fn.extend({
		wrapAll: function (e) {
			if (rt.isFunction(e)) return this.each(function (t) {
				rt(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function (e) {
			return this.each(rt.isFunction(e) ? function (t) {
				rt(this).wrapInner(e.call(this, t))
			} : function () {
				var t = rt(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = rt.isFunction(e);
			return this.each(function (n) {
				rt(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
			}).end()
		}
	}), rt.expr.filters.hidden = function (e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || rt.css(e, "display"))
	}, rt.expr.filters.visible = function (e) {
		return !rt.expr.filters.hidden(e)
	};
	var Vn = /%20/g,
		Un = /\[\]$/,
		Gn = /\r?\n/g,
		Qn = /^(?:submit|button|image|reset|file)$/i,
		Zn = /^(?:input|select|textarea|keygen)/i;
	rt.param = function (e, t) {
		var n, i = [],
			r = function (e, t) {
				t = rt.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) rt.each(e, function () {
			r(this.name, this.value)
		});
		else
			for (n in e) W(n, e[n], t, r);
		return i.join("&").replace(Vn, "+")
	}, rt.fn.extend({
		serialize: function () {
			return rt.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = rt.prop(this, "elements");
				return e ? rt.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !rt(this).is(":disabled") && Zn.test(this.nodeName) && !Qn.test(e) && (this.checked || !Et.test(e))
			}).map(function (e, t) {
				var n = rt(this).val();
				return null == n ? null : rt.isArray(n) ? rt.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(Gn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Gn, "\r\n")
				}
			}).get()
		}
	}), rt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || Y()
	} : $;
	var Kn = 0,
		Jn = {},
		ei = rt.ajaxSettings.xhr();
	e.ActiveXObject && rt(e).on("unload", function () {
		for (var e in Jn) Jn[e](void 0, !0)
	}), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && rt.ajaxTransport(function (e) {
		if (!e.crossDomain || nt.cors) {
			var t;
			return {
				send: function (n, i) {
					var r, o = e.xhr(),
						s = ++Kn;
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (r in e.xhrFields) o[r] = e.xhrFields[r];
					e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
					o.send(e.hasContent && e.data || null), t = function (n, r) {
						var a, l, u;
						if (t && (r || 4 === o.readyState))
							if (delete Jn[s], t = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
							else {
								u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
								try {
									l = o.statusText
								} catch (c) {
									l = ""
								}
								a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
							}
						u && i(a, l, u, o.getAllResponseHeaders())
					}, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Jn[s] = t : t()
				},
				abort: function () {
					t && t(void 0, !0)
				}
			}
		}
	}), rt.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (e) {
				return rt.globalEval(e), e
			}
		}
	}), rt.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), rt.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t, n = dt.head || rt("head")[0] || dt.documentElement;
			return {
				send: function (i, r) {
					t = dt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function () {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var ti = [],
		ni = /(=)\?(?=&|$)|\?\?/;
	rt.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = ti.pop() || rt.expando + "_" + On++;
			return this[e] = !0, e
		}
	}), rt.ajaxPrefilter("json jsonp", function (t, n, i) {
		var r, o, s, a = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ni, "$1" + r) : t.jsonp !== !1 && (t.url += (Dn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
			return s || rt.error(r + " was not called"), s[0]
		}, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
			s = arguments
		}, i.always(function () {
			e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, ti.push(r)), s && rt.isFunction(o) && o(s[0]), s = o = void 0
		}), "script") : void 0
	}), rt.parseHTML = function (e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || dt;
		var i = ft.exec(e),
			r = !n && [];
		return i ? [t.createElement(i[1])] : (i = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
	};
	var ii = rt.fn.load;
	rt.fn.load = function (e, t, n) {
		if ("string" != typeof e && ii) return ii.apply(this, arguments);
		var i, r, o, s = this,
			a = e.indexOf(" ");
		return a >= 0 && (i = rt.trim(e.slice(a, e.length)), e = e.slice(0, a)), rt.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && rt.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: t
		}).done(function (e) {
			r = arguments, s.html(i ? rt("<div>").append(rt.parseHTML(e)).find(i) : e)
		}).complete(n && function (e, t) {
			s.each(n, r || [e.responseText, t, e])
		}), this
	}, rt.expr.filters.animated = function (e) {
		return rt.grep(rt.timers, function (t) {
			return e === t.elem
		}).length
	};
	var ri = e.document.documentElement;
	rt.offset = {
		setOffset: function (e, t, n) {
			var i, r, o, s, a, l, u, c = rt.css(e, "position"),
				f = rt(e),
				p = {};
			"static" === c && (e.style.position = "relative"), a = f.offset(), o = rt.css(e, "top"), l = rt.css(e, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1, u ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, rt.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				rt.offset.setOffset(this, e, t)
			});
			var t, n, i = {
					top: 0,
					left: 0
				},
				r = this[0],
				o = r && r.ownerDocument;
			if (o) return t = o.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== Tt && (i = r.getBoundingClientRect()), n = V(o), {
				top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : i
		},
		position: function () {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === rt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (n = e.offset()), n.top += rt.css(e[0], "borderTopWidth", !0), n.left += rt.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - rt.css(i, "marginTop", !0),
					left: t.left - n.left - rt.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent || ri; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");) e = e.offsetParent;
				return e || ri
			})
		}
	}), rt.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, t) {
		var n = /Y/.test(t);
		rt.fn[e] = function (i) {
			return At(this, function (e, i, r) {
				var o = V(e);
				return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : e[i] = r)
			}, e, i, arguments.length, null)
		}
	}), rt.each(["top", "left"], function (e, t) {
		rt.cssHooks[t] = S(nt.pixelPosition, function (e, n) {
			return n ? (n = tn(e, t), rn.test(n) ? rt(e).position()[t] + "px" : n) : void 0
		})
	}), rt.each({
		Height: "height",
		Width: "width"
	}, function (e, t) {
		rt.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function (n, i) {
			rt.fn[i] = function (i, r) {
				var o = arguments.length && (n || "boolean" != typeof i),
					s = n || (i === !0 || r === !0 ? "margin" : "border");
				return At(this, function (t, n, i) {
					var r;
					return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? rt.css(t, n, s) : rt.style(t, n, i, s)
				}, t, o ? i : void 0, o, null)
			}
		})
	}), rt.fn.size = function () {
		return this.length
	}, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return rt
	});
	var oi = e.jQuery,
		si = e.$;
	return rt.noConflict = function (t) {
		return e.$ === rt && (e.$ = si), t && e.jQuery === rt && (e.jQuery = oi), rt
	}, typeof t === Tt && (e.jQuery = e.$ = rt), rt
}),
function (e, t) {
	"use strict";
	var n = e.GreenSockGlobals = e.GreenSockGlobals || e;
	if (!n.TweenLite) {
		var i, r, o, s, a, l = function (e) {
				var t, i = e.split("."),
					r = n;
				for (t = 0; i.length > t; t++) r[i[t]] = r = r[i[t]] || {};
				return r
			},
			u = l("com.greensock"),
			c = 1e-10,
			f = function (e) {
				var t, n = [],
					i = e.length;
				for (t = 0; t !== i; n.push(e[t++]));
				return n
			},
			p = function () {},
			h = function () {
				var e = Object.prototype.toString,
					t = e.call([]);
				return function (n) {
					return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
				}
			}(),
			d = {},
			m = function (i, r, o, s) {
				this.sc = d[i] ? d[i].sc : [], d[i] = this, this.gsClass = null, this.func = o;
				var a = [];
				this.check = function (u) {
					for (var c, f, p, h, g = r.length, v = g; --g > -1;)(c = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = c.gsClass, v--) : u && c.sc.push(this);
					if (0 === v && o)
						for (f = ("com.greensock." + i).split("."), p = f.pop(), h = l(f.join("."))[p] = this.gsClass = o.apply(o, a), s && (n[p] = h, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function () {
								return h
							}) : i === t && "undefined" != typeof module && module.exports && (module.exports = h)), g = 0; this.sc.length > g; g++) this.sc[g].check()
				}, this.check(!0)
			},
			g = e._gsDefine = function (e, t, n, i) {
				return new m(e, t, n, i)
			},
			v = u._class = function (e, t, n) {
				return t = t || function () {}, g(e, [], function () {
					return t
				}, n), t
			};
		g.globals = n;
		var y = [0, 0, 1, 1],
			_ = [],
			x = v("easing.Ease", function (e, t, n, i) {
				this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? y.concat(t) : y
			}, !0),
			b = x.map = {},
			w = x.register = function (e, t, n, i) {
				for (var r, o, s, a, l = t.split(","), c = l.length, f = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
					for (o = l[c], r = i ? v("easing." + o, null, !0) : u.easing[o] || {}, s = f.length; --s > -1;) a = f[s], b[o + "." + a] = b[a + o] = r[a] = e.getRatio ? e : e[a] || new e
			};
		for (o = x.prototype, o._calcEnd = !1, o.getRatio = function (e) {
				if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
				var t = this._type,
					n = this._power,
					i = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
				return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : .5 > e ? i / 2 : 1 - i / 2
			}, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = i.length; --r > -1;) o = i[r] + ",Power" + r, w(new x(null, null, 1, r), o, "easeOut", !0), w(new x(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), w(new x(null, null, 3, r), o, "easeInOut");
		b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
		var T = v("events.EventDispatcher", function (e) {
			this._listeners = {}, this._eventTarget = e || this
		});
		o = T.prototype, o.addEventListener = function (e, t, n, i, r) {
			r = r || 0;
			var o, l, u = this._listeners[e],
				c = 0;
			for (null == u && (this._listeners[e] = u = []), l = u.length; --l > -1;) o = u[l], o.c === t && o.s === n ? u.splice(l, 1) : 0 === c && r > o.pr && (c = l + 1);
			u.splice(c, 0, {
				c: t,
				s: n,
				up: i,
				pr: r
			}), this !== s || a || s.wake()
		}, o.removeEventListener = function (e, t) {
			var n, i = this._listeners[e];
			if (i)
				for (n = i.length; --n > -1;)
					if (i[n].c === t) return void i.splice(n, 1)
		}, o.dispatchEvent = function (e) {
			var t, n, i, r = this._listeners[e];
			if (r)
				for (t = r.length, n = this._eventTarget; --t > -1;) i = r[t], i && (i.up ? i.c.call(i.s || n, {
					type: e,
					target: n
				}) : i.c.call(i.s || n))
		};
		var k = e.requestAnimationFrame,
			C = e.cancelAnimationFrame,
			S = Date.now || function () {
				return (new Date).getTime()
			},
			P = S();
		for (i = ["ms", "moz", "webkit", "o"], r = i.length; --r > -1 && !k;) k = e[i[r] + "RequestAnimationFrame"], C = e[i[r] + "CancelAnimationFrame"] || e[i[r] + "CancelRequestAnimationFrame"];
		v("Ticker", function (e, t) {
			var n, i, r, o, l, u = this,
				f = S(),
				h = t !== !1 && k,
				d = 500,
				m = 33,
				g = "tick",
				v = function (e) {
					var t, s, a = S() - P;
					a > d && (f += a - m), P += a, u.time = (P - f) / 1e3, t = u.time - l, (!n || t > 0 || e === !0) && (u.frame++, l += t + (t >= o ? .004 : o - t), s = !0), e !== !0 && (r = i(v)), s && u.dispatchEvent(g)
				};
			T.call(u), u.time = u.frame = 0, u.tick = function () {
				v(!0)
			}, u.lagSmoothing = function (e, t) {
				d = e || 1 / c, m = Math.min(t, d, 0)
			}, u.sleep = function () {
				null != r && (h && C ? C(r) : clearTimeout(r), i = p, r = null, u === s && (a = !1))
			}, u.wake = function () {
				null !== r ? u.sleep() : u.frame > 10 && (P = S() - d + 5), i = 0 === n ? p : h && k ? k : function (e) {
					return setTimeout(e, 0 | 1e3 * (l - u.time) + 1)
				}, u === s && (a = !0), v(2)
			}, u.fps = function (e) {
				return arguments.length ? (n = e, o = 1 / (n || 60), l = this.time + o, void u.wake()) : n
			}, u.useRAF = function (e) {
				return arguments.length ? (u.sleep(), h = e, void u.fps(n)) : h
			}, u.fps(e), setTimeout(function () {
				h && (!r || 5 > u.frame) && u.useRAF(!1)
			}, 1500)
		}), o = u.Ticker.prototype = new u.events.EventDispatcher, o.constructor = u.Ticker;
		var N = v("core.Animation", function (e, t) {
			if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, B) {
				a || s.wake();
				var n = this.vars.useFrames ? I : B;
				n.add(this, n._time), this.vars.paused && this.paused(!0)
			}
		});
		s = N.ticker = new u.Ticker, o = N.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
		var A = function () {
			a && S() - P > 2e3 && s.wake(), setTimeout(A, 2e3)
		};
		A(), o.play = function (e, t) {
			return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
		}, o.pause = function (e, t) {
			return null != e && this.seek(e, t), this.paused(!0)
		}, o.resume = function (e, t) {
			return null != e && this.seek(e, t), this.paused(!1)
		}, o.seek = function (e, t) {
			return this.totalTime(Number(e), t !== !1)
		}, o.restart = function (e, t) {
			return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
		}, o.reverse = function (e, t) {
			return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
		}, o.render = function () {}, o.invalidate = function () {
			return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
		}, o.isActive = function () {
			var e, t = this._timeline,
				n = this._startTime;
			return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
		}, o._enabled = function (e, t) {
			return a || s.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
		}, o._kill = function () {
			return this._enabled(!1, !1)
		}, o.kill = function (e, t) {
			return this._kill(e, t), this
		}, o._uncache = function (e) {
			for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
			return this
		}, o._swapSelfInParams = function (e) {
			for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
			return n
		}, o.eventCallback = function (e, t, n, i) {
			if ("on" === (e || "").substr(0, 2)) {
				var r = this.vars;
				if (1 === arguments.length) return r[e];
				null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = h(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
			}
			return this
		}, o.delay = function (e) {
			return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
		}, o.duration = function (e) {
			return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
		}, o.totalDuration = function (e) {
			return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
		}, o.time = function (e, t) {
			return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
		}, o.totalTime = function (e, t, n) {
			if (a || s.wake(), !arguments.length) return this._totalTime;
			if (this._timeline) {
				if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
					this._dirty && this.totalDuration();
					var i = this._totalDuration,
						r = this._timeline;
					if (e > i && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
						for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
				}
				this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), j.length && W())
			}
			return this
		}, o.progress = o.totalProgress = function (e, t) {
			return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
		}, o.startTime = function (e) {
			return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
		}, o.endTime = function (e) {
			return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
		}, o.timeScale = function (e) {
			if (!arguments.length) return this._timeScale;
			if (e = e || c, this._timeline && this._timeline.smoothChildTiming) {
				var t = this._pauseTime,
					n = t || 0 === t ? t : this._timeline.totalTime();
				this._startTime = n - (n - this._startTime) * this._timeScale / e
			}
			return this._timeScale = e, this._uncache(!1)
		}, o.reversed = function (e) {
			return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
		}, o.paused = function (e) {
			if (!arguments.length) return this._paused;
			if (e != this._paused && this._timeline) {
				a || e || s.wake();
				var t = this._timeline,
					n = t.rawTime(),
					i = n - this._pauseTime;
				!e && t.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? n : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
			}
			return this._gc && !e && this._enabled(!0, !1), this
		};
		var E = v("core.SimpleTimeline", function (e) {
			N.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
		});
		o = E.prototype = new N, o.constructor = E, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (e, t) {
			var n, i;
			if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
				for (i = e._startTime; n && n._startTime > i;) n = n._prev;
			return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._recent = e, this._timeline && this._uncache(!0), this
		}, o._remove = function (e, t) {
			return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
		}, o.render = function (e, t, n) {
			var i, r = this._first;
			for (this._totalTime = this._time = this._rawPrevTime = e; r;) i = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = i
		}, o.rawTime = function () {
			return a || s.wake(), this._totalTime
		};
		var O = v("TweenLite", function (t, n, i) {
				if (N.call(this, n, i), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
				this.target = t = "string" != typeof t ? t : O.selector(t) || t;
				var r, o, s, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
					l = this.vars.overwrite;
				if (this._overwrite = l = null == l ? q[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || t instanceof Array || t.push && h(t)) && "number" != typeof t[0])
					for (this._targets = s = f(t), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(f(o))) : (this._siblings[r] = $(o, this, !1), 1 === l && this._siblings[r].length > 1 && V(o, this, null, 1, this._siblings[r])) : (o = s[r--] = O.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
				else this._propLookup = {}, this._siblings = $(t, this, !1), 1 === l && this._siblings.length > 1 && V(t, this, null, 1, this._siblings);
				(this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
			}, !0),
			D = function (t) {
				return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
			},
			L = function (e, t) {
				var n, i = {};
				for (n in e) z[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!F[n] || F[n] && F[n]._autoCSS) || (i[n] = e[n], delete e[n]);
				e.css = i
			};
		o = O.prototype = new N, o.constructor = O, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, O.version = "1.15.1", O.defaultEase = o._ease = new x(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = s, O.autoSleep = !0, O.lagSmoothing = function (e, t) {
			s.lagSmoothing(e, t)
		}, O.selector = e.$ || e.jQuery || function (t) {
			var n = e.$ || e.jQuery;
			return n ? (O.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
		};
		var j = [],
			R = {},
			M = O._internals = {
				isArray: h,
				isSelector: D,
				lazyTweens: j
			},
			F = O._plugins = {},
			H = M.tweenLookup = {},
			X = 0,
			z = M.reservedProps = {
				ease: 1,
				delay: 1,
				overwrite: 1,
				onComplete: 1,
				onCompleteParams: 1,
				onCompleteScope: 1,
				useFrames: 1,
				runBackwards: 1,
				startAt: 1,
				onUpdate: 1,
				onUpdateParams: 1,
				onUpdateScope: 1,
				onStart: 1,
				onStartParams: 1,
				onStartScope: 1,
				onReverseComplete: 1,
				onReverseCompleteParams: 1,
				onReverseCompleteScope: 1,
				onRepeat: 1,
				onRepeatParams: 1,
				onRepeatScope: 1,
				easeParams: 1,
				yoyo: 1,
				immediateRender: 1,
				repeat: 1,
				repeatDelay: 1,
				data: 1,
				paused: 1,
				reversed: 1,
				autoCSS: 1,
				lazy: 1,
				onOverwrite: 1
			},
			q = {
				none: 0,
				all: 1,
				auto: 2,
				concurrent: 3,
				allOnStart: 4,
				preexisting: 5,
				"true": 1,
				"false": 0
			},
			I = N._rootFramesTimeline = new E,
			B = N._rootTimeline = new E,
			W = M.lazyRender = function () {
				var e, t = j.length;
				for (R = {}; --t > -1;) e = j[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
				j.length = 0
			};
		B._startTime = s.time, I._startTime = s.frame, B._active = I._active = !0, setTimeout(W, 1), N._updateRoot = O.render = function () {
			var e, t, n;
			if (j.length && W(), B.render((s.time - B._startTime) * B._timeScale, !1, !1), I.render((s.frame - I._startTime) * I._timeScale, !1, !1), j.length && W(), !(s.frame % 120)) {
				for (n in H) {
					for (t = H[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
					0 === t.length && delete H[n]
				}
				if (n = B._first, (!n || n._paused) && O.autoSleep && !I._first && 1 === s._listeners.tick.length) {
					for (; n && n._paused;) n = n._next;
					n || s.sleep()
				}
			}
		}, s.addEventListener("tick", N._updateRoot);
		var $ = function (e, t, n) {
				var i, r, o = e._gsTweenID;
				if (H[o || (e._gsTweenID = o = "t" + X++)] || (H[o] = {
						target: e,
						tweens: []
					}), t && (i = H[o].tweens, i[r = i.length] = t, n))
					for (; --r > -1;) i[r] === t && i.splice(r, 1);
				return H[o].tweens
			},
			Y = function (e, t, n, i) {
				var r, o, s = e.vars.onOverwrite;
				return s && (r = s(e, t, n, i)), s = O.onOverwrite, s && (o = s(e, t, n, i)), r !== !1 && o !== !1
			},
			V = function (e, t, n, i, r) {
				var o, s, a, l;
				if (1 === i || i >= 4) {
					for (l = r.length, o = 0; l > o; o++)
						if ((a = r[o]) !== t) a._gc || Y(a, t) && a._enabled(!1, !1) && (s = !0);
						else if (5 === i) break;
					return s
				}
				var u, f = t._startTime + c,
					p = [],
					h = 0,
					d = 0 === t._duration;
				for (o = r.length; --o > -1;)(a = r[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (u = u || U(t, 0, d), 0 === U(a, u, d) && (p[h++] = a)) : f >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > f && ((d || !a._initted) && 2e-10 >= f - a._startTime || (p[h++] = a)));
				for (o = h; --o > -1;)
					if (a = p[o], 2 === i && a._kill(n, e, t) && (s = !0), 2 !== i || !a._firstPT && a._initted) {
						if (2 !== i && !Y(a, t)) continue;
						a._enabled(!1, !1) && (s = !0)
					}
				return s
			},
			U = function (e, t, n) {
				for (var i = e._timeline, r = i._timeScale, o = e._startTime; i._timeline;) {
					if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
					i = i._timeline
				}
				return o /= r, o > t ? o - t : n && o === t || !e._initted && 2 * c > o - t ? c : (o += e.totalDuration() / e._timeScale / r) > t + c ? 0 : o - t - c
			};
		o._init = function () {
			var e, t, n, i, r, o = this.vars,
				s = this._overwrittenProps,
				a = this._duration,
				l = !!o.immediateRender,
				u = o.ease;
			if (o.startAt) {
				this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
				for (i in o.startAt) r[i] = o.startAt[i];
				if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = O.to(this.target, 0, r), l)
					if (this._time > 0) this._startAt = null;
					else if (0 !== a) return
			} else if (o.runBackwards && 0 !== a)
				if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
				else {
					0 !== this._time && (l = !1), n = {};
					for (i in o) z[i] && "autoCSS" !== i || (n[i] = o[i]);
					if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && o.lazy !== !1, n.immediateRender = l, this._startAt = O.to(this.target, 0, n), l) {
						if (0 === this._time) return
					} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
				}
			if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, o.easeParams) : b[u] || O.defaultEase : O.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
				for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
			else t = this._initProps(this.target, this._propLookup, this._siblings, s);
			if (t && O._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
				for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
			this._onUpdate = o.onUpdate, this._initted = !0
		}, o._initProps = function (t, n, i, r) {
			var o, s, a, l, u, c;
			if (null == t) return !1;
			R[t._gsTweenID] && W(), this.vars.css || t.style && t !== e && t.nodeType && F.css && this.vars.autoCSS !== !1 && L(this.vars, t);
			for (o in this.vars) {
				if (c = this.vars[o], z[o]) c && (c instanceof Array || c.push && h(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
				else if (F[o] && (l = new F[o])._onInitTween(t, this.vars[o], this)) {
					for (this._firstPT = u = {
							_next: this._firstPT,
							t: l,
							p: "setRatio",
							s: 0,
							c: 1,
							f: !0,
							n: o,
							pg: !0,
							pr: l._priority
						}, s = l._overwriteProps.length; --s > -1;) n[l._overwriteProps[s]] = this._firstPT;
					(l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
				} else this._firstPT = n[o] = u = {
					_next: this._firstPT,
					t: t,
					p: o,
					f: "function" == typeof t[o],
					n: o,
					pg: !1,
					pr: 0
				}, u.s = u.f ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(t[o]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
				u && u._next && (u._next._prev = u)
			}
			return r && this._kill(r, t) ? this._initProps(t, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && V(t, this, n, this._overwrite, i) ? (this._kill(n, t), this._initProps(t, n, i, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[t._gsTweenID] = !0), a)
		}, o.render = function (e, t, n) {
			var i, r, o, s, a = this._time,
				l = this._duration,
				u = this._rawPrevTime;
			if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > u || u === c && "isPause" !== this.data) && u !== e && (n = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = s = !t || e || u === e ? e : c);
			else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0 && u !== c) && (r = "onReverseComplete", i = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== c || "isPause" !== this.data) && (n = !0), this._rawPrevTime = s = !t || e || u === e ? e : c)), this._initted || (n = !0);
			else if (this._totalTime = this._time = e, this._easeType) {
				var f = e / l,
					p = this._easeType,
					h = this._easePower;
				(1 === p || 3 === p && f >= .5) && (f = 1 - f), 3 === p && (f *= 2), 1 === h ? f *= f : 2 === h ? f *= f * f : 3 === h ? f *= f * f * f : 4 === h && (f *= f * f * f * f), this.ratio = 1 === p ? 1 - f : 2 === p ? f : .5 > e / l ? f / 2 : 1 - f / 2
			} else this.ratio = this._ease.getRatio(e / l);
			if (this._time !== a || n) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, j.push(this), void(this._lazy = [e, t]);
					this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
				this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, n), t || (this._time !== a || i) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), r && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0))
			}
		}, o._kill = function (e, t, n) {
			if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
			t = "string" != typeof t ? t || this._targets || this.target : O.selector(t) || t;
			var i, r, o, s, a, l, u, c, f;
			if ((h(t) || D(t)) && "number" != typeof t[0])
				for (i = t.length; --i > -1;) this._kill(e, t[i]) && (l = !0);
			else {
				if (this._targets) {
					for (i = this._targets.length; --i > -1;)
						if (t === this._targets[i]) {
							a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
							break
						}
				} else {
					if (t !== this.target) return !1;
					a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
				}
				if (a) {
					if (u = e || a, c = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), n && (O.onOverwrite || this.vars.onOverwrite)) {
						for (o in u) a[o] && (f || (f = []), f.push(o));
						if (!Y(this, n, t, f)) return !1
					}
					for (o in u)(s = a[o]) && (s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
					!this._firstPT && this._initted && this._enabled(!1, !1)
				}
			}
			return l
		}, o.invalidate = function () {
			return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], N.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
		}, o._enabled = function (e, t) {
			if (a || s.wake(), e && this._gc) {
				var n, i = this._targets;
				if (i)
					for (n = i.length; --n > -1;) this._siblings[n] = $(i[n], this, !0);
				else this._siblings = $(this.target, this, !0)
			}
			return N.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
		}, O.to = function (e, t, n) {
			return new O(e, t, n)
		}, O.from = function (e, t, n) {
			return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(e, t, n)
		}, O.fromTo = function (e, t, n, i) {
			return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new O(e, t, i)
		}, O.delayedCall = function (e, t, n, i, r) {
			return new O(t, 0, {
				delay: e,
				onComplete: t,
				onCompleteParams: n,
				onCompleteScope: i,
				onReverseComplete: t,
				onReverseCompleteParams: n,
				onReverseCompleteScope: i,
				immediateRender: !1,
				lazy: !1,
				useFrames: r,
				overwrite: 0
			})
		}, O.set = function (e, t) {
			return new O(e, 0, t)
		}, O.getTweensOf = function (e, t) {
			if (null == e) return [];
			e = "string" != typeof e ? e : O.selector(e) || e;
			var n, i, r, o;
			if ((h(e) || D(e)) && "number" != typeof e[0]) {
				for (n = e.length, i = []; --n > -1;) i = i.concat(O.getTweensOf(e[n], t));
				for (n = i.length; --n > -1;)
					for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
			} else
				for (i = $(e).concat(), n = i.length; --n > -1;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
			return i
		}, O.killTweensOf = O.killDelayedCallsTo = function (e, t, n) {
			"object" == typeof t && (n = t, t = !1);
			for (var i = O.getTweensOf(e, t), r = i.length; --r > -1;) i[r]._kill(n, e)
		};
		var G = v("plugins.TweenPlugin", function (e, t) {
			this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = G.prototype
		}, !0);
		if (o = G.prototype, G.version = "1.10.1", G.API = 2, o._firstPT = null, o._addTween = function (e, t, n, i, r, o) {
				var s, a;
				return null != i && (s = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - n : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = a = {
					_next: this._firstPT,
					t: e,
					p: t,
					s: n,
					c: s,
					f: "function" == typeof e[t],
					n: r || t,
					r: o
				}, a._next && (a._next._prev = a), a) : void 0
			}, o.setRatio = function (e) {
				for (var t, n = this._firstPT, i = 1e-6; n;) t = n.c * e + n.s, n.r ? t = Math.round(t) : i > t && t > -i && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
			}, o._kill = function (e) {
				var t, n = this._overwriteProps,
					i = this._firstPT;
				if (null != e[this._propName]) this._overwriteProps = [];
				else
					for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
				for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
				return !1
			}, o._roundProps = function (e, t) {
				for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
			}, O._onPluginEvent = function (e, t) {
				var n, i, r, o, s, a = t._firstPT;
				if ("_onInitAllProps" === e) {
					for (; a;) {
						for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
						(a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
					}
					a = t._firstPT = r
				}
				for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0), a = a._next;
				return n
			}, G.activate = function (e) {
				for (var t = e.length; --t > -1;) e[t].API === G.API && (F[(new e[t])._propName] = e[t]);
				return !0
			}, g.plugin = function (e) {
				if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
				var t, n = e.propName,
					i = e.priority || 0,
					r = e.overwriteProps,
					o = {
						init: "_onInitTween",
						set: "setRatio",
						kill: "_kill",
						round: "_roundProps",
						initAll: "_onInitAllProps"
					},
					s = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
						G.call(this, n, i), this._overwriteProps = r || []
					}, e.global === !0),
					a = s.prototype = new G(n);
				a.constructor = s, s.API = e.API;
				for (t in o) "function" == typeof e[t] && (a[o[t]] = e[t]);
				return s.version = e.version, G.activate([s]), s
			}, i = e._gsQueue) {
			for (r = 0; i.length > r; r++) i[r]();
			for (o in d) d[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
		}
		a = !1
	}
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	"use strict";
	var e = document.documentElement,
		t = window,
		n = function (n, i) {
			var r = "x" === i ? "Width" : "Height",
				o = "scroll" + r,
				s = "client" + r,
				a = document.body;
			return n === t || n === e || n === a ? Math.max(e[o], a[o]) - (t["inner" + r] || Math.max(e[s], a[s])) : n[o] - n["offset" + r]
		},
		i = _gsScope._gsDefine.plugin({
			propName: "scrollTo",
			API: 2,
			version: "1.7.4",
			init: function (e, i, r) {
				return this._wdw = e === t, this._target = e, this._tween = r, "object" != typeof i && (i = {
					y: i
				}), this.vars = i, this._autoKill = i.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, "max" === i.x ? n(e, "x") : i.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, "max" === i.y ? n(e, "y") : i.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
			},
			set: function (e) {
				this._super.setRatio.call(this, e);
				var i = this._wdw || !this.skipX ? this.getX() : this.xPrev,
					r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
					o = r - this.yPrev,
					s = i - this.xPrev;
				this._autoKill && (!this.skipX && (s > 7 || -7 > s) && n(this._target, "x") > i && (this.skipX = !0), !this.skipY && (o > 7 || -7 > o) && n(this._target, "y") > r && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? t.scrollTo(this.skipX ? i : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
			}
		}),
		r = i.prototype;
	i.max = n, r.getX = function () {
		return this._wdw ? null != t.pageXOffset ? t.pageXOffset : null != e.scrollLeft ? e.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
	}, r.getY = function () {
		return this._wdw ? null != t.pageYOffset ? t.pageYOffset : null != e.scrollTop ? e.scrollTop : document.body.scrollTop : this._target.scrollTop
	}, r._kill = function (e) {
		return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
	}
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
			var n, i, r, o, s = function () {
					e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
				},
				a = _gsScope._gsDefine.globals,
				l = {},
				u = s.prototype = new e("css");
			u.constructor = s, s.version = "1.15.1", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", u = "px", s.suffixMap = {
				top: u,
				right: u,
				bottom: u,
				left: u,
				width: u,
				height: u,
				fontSize: u,
				padding: u,
				margin: u,
				perspective: u,
				lineHeight: ""
			};
			var c, f, p, h, d, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
				v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
				y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
				_ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
				x = /(?:\d|\-|\+|=|#|\.)*/g,
				b = /opacity *= *([^)]*)/i,
				w = /opacity:([^;]*)/i,
				T = /alpha\(opacity *=.+?\)/i,
				k = /^(rgb|hsl)/,
				C = /([A-Z])/g,
				S = /-([a-z])/gi,
				P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
				N = function (e, t) {
					return t.toUpperCase()
				},
				A = /(?:Left|Right|Width)/i,
				E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
				O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
				D = /,(?=[^\)]*(?:\(|$))/gi,
				L = Math.PI / 180,
				j = 180 / Math.PI,
				R = {},
				M = document,
				F = function (e) {
					return M.createElementNS ? M.createElementNS("http://www.w3.org/1999/xhtml", e) : M.createElement(e)
				},
				H = F("div"),
				X = F("img"),
				z = s._internals = {
					_specialProps: l
				},
				q = navigator.userAgent,
				I = function () {
					var e = q.indexOf("Android"),
						t = F("a");
					return p = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === e || Number(q.substr(e + 8, 1)) > 3), d = p && 6 > Number(q.substr(q.indexOf("Version/") + 8, 1)), h = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
				}(),
				B = function (e) {
					return b.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
				},
				W = function (e) {
					window.console && console.log(e)
				},
				$ = "",
				Y = "",
				V = function (e, t) {
					t = t || H;
					var n, i, r = t.style;
					if (void 0 !== r[e]) return e;
					for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + e];);
					return i >= 0 ? (Y = 3 === i ? "ms" : n[i], $ = "-" + Y.toLowerCase() + "-", Y + e) : null
				},
				U = M.defaultView ? M.defaultView.getComputedStyle : function () {},
				G = s.getStyle = function (e, t, n, i, r) {
					var o;
					return I || "opacity" !== t ? (!i && e.style[t] ? o = e.style[t] : (n = n || U(e)) ? o = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(C, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : B(e)
				},
				Q = z.convertToPixels = function (e, n, i, r, o) {
					if ("px" === r || !r) return i;
					if ("auto" === r || !i) return 0;
					var a, l, u, c = A.test(n),
						f = e,
						p = H.style,
						h = 0 > i;
					if (h && (i = -i), "%" === r && -1 !== n.indexOf("border")) a = i / 100 * (c ? e.clientWidth : e.clientHeight);
					else {
						if (p.cssText = "border:0 solid red;position:" + G(e, "position") + ";line-height:0;", "%" !== r && f.appendChild) p[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
						else {
							if (f = e.parentNode || M.body, l = f._gsCache, u = t.ticker.frame, l && c && l.time === u) return l.width * i / 100;
							p[c ? "width" : "height"] = i + r
						}
						f.appendChild(H), a = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), f.removeChild(H), c && "%" === r && s.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = u, l.width = 100 * (a / i)), 0 !== a || o || (a = Q(e, n, i, r, !0))
					}
					return h ? -a : a
				},
				Z = z.calculateOffset = function (e, t, n) {
					if ("absolute" !== G(e, "position", n)) return 0;
					var i = "left" === t ? "Left" : "Top",
						r = G(e, "margin" + i, n);
					return e["offset" + i] - (Q(e, t, parseFloat(r), r.replace(x, "")) || 0)
				},
				K = function (e, t) {
					var n, i, r = {};
					if (t = t || U(e, null))
						for (n in t)(-1 === n.indexOf("Transform") || wt === n) && (r[n] = t[n]);
					else if (t = e.currentStyle || e.style)
						for (n in t) "string" == typeof n && void 0 === r[n] && (r[n.replace(S, N)] = t[n]);
					return I || (r.opacity = B(e)), i = Dt(e, t, !1), r.rotation = i.rotation, r.skewX = i.skewX, r.scaleX = i.scaleX, r.scaleY = i.scaleY, r.x = i.x, r.y = i.y, Ct && (r.z = i.z, r.rotationX = i.rotationX, r.rotationY = i.rotationY, r.scaleZ = i.scaleZ), r.filters && delete r.filters, r
				},
				J = function (e, t, n, i, r) {
					var o, s, a, l = {},
						u = e.style;
					for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(_, "") ? o : 0 : Z(e, s), void 0 !== u[s] && (a = new ht(u, s, u[s], a)));
					if (i)
						for (s in i) "className" !== s && (l[s] = i[s]);
					return {
						difs: l,
						firstMPT: a
					}
				},
				et = {
					width: ["Left", "Right"],
					height: ["Top", "Bottom"]
				},
				tt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
				nt = function (e, t, n) {
					var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
						r = et[t],
						o = r.length;
					for (n = n || U(e, null); --o > -1;) i -= parseFloat(G(e, "padding" + r[o], n, !0)) || 0, i -= parseFloat(G(e, "border" + r[o] + "Width", n, !0)) || 0;
					return i
				},
				it = function (e, t) {
					(null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
					var n = e.split(" "),
						i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
						r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
					return null == r ? r = "center" === i ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(i.replace(_, "")), t.oy = parseFloat(r.replace(_, ""))), i + " " + r + (n.length > 2 ? " " + n[2] : "")
				},
				rt = function (e, t) {
					return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
				},
				ot = function (e, t) {
					return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
				},
				st = function (e, t, n, i) {
					var r, o, s, a, l, u = 1e-6;
					return null == e ? a = t : "number" == typeof e ? a = e : (r = 360, o = e.split("_"), l = "=" === e.charAt(1), s = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : j) - (l ? 0 : t), o.length && (i && (i[n] = t + s), -1 !== e.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== e.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== e.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = t + s), u > a && a > -u && (a = 0), a
				},
				at = {
					aqua: [0, 255, 255],
					lime: [0, 255, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, 255],
					navy: [0, 0, 128],
					white: [255, 255, 255],
					fuchsia: [255, 0, 255],
					olive: [128, 128, 0],
					yellow: [255, 255, 0],
					orange: [255, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [255, 0, 0],
					pink: [255, 192, 203],
					cyan: [0, 255, 255],
					transparent: [255, 255, 255, 0]
				},
				lt = function (e, t, n) {
					return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
				},
				ut = s.parseColor = function (e) {
					var t, n, i, r, o, s;
					return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), at[e] ? at[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), i = e.charAt(3), e = "#" + t + t + n + n + i + i), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(g), r = Number(e[0]) % 360 / 360, o = Number(e[1]) / 100, s = Number(e[2]) / 100, n = .5 >= s ? s * (o + 1) : s + o - s * o, t = 2 * s - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = lt(r + 1 / 3, t, n), e[1] = lt(r, t, n), e[2] = lt(r - 1 / 3, t, n), e) : (e = e.match(g) || at.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : at.black
				},
				ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
			for (u in at) ct += "|" + u + "\\b";
			ct = RegExp(ct + ")", "gi");
			var ft = function (e, t, n, i) {
					if (null == e) return function (e) {
						return e
					};
					var r, o = t ? (e.match(ct) || [""])[0] : "",
						s = e.split(o).join("").match(y) || [],
						a = e.substr(0, e.indexOf(s[0])),
						l = ")" === e.charAt(e.length - 1) ? ")" : "",
						u = -1 !== e.indexOf(" ") ? " " : ",",
						c = s.length,
						f = c > 0 ? s[0].replace(g, "") : "";
					return c ? r = t ? function (e) {
						var t, p, h, d;
						if ("number" == typeof e) e += f;
						else if (i && D.test(e)) {
							for (d = e.replace(D, "|").split("|"), h = 0; d.length > h; h++) d[h] = r(d[h]);
							return d.join(",")
						}
						if (t = (e.match(ct) || [o])[0], p = e.split(t).join("").match(y) || [], h = p.length, c > h--)
							for (; c > ++h;) p[h] = n ? p[0 | (h - 1) / 2] : s[h];
						return a + p.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
					} : function (e) {
						var t, o, p;
						if ("number" == typeof e) e += f;
						else if (i && D.test(e)) {
							for (o = e.replace(D, "|").split("|"), p = 0; o.length > p; p++) o[p] = r(o[p]);
							return o.join(",")
						}
						if (t = e.match(y) || [], p = t.length, c > p--)
							for (; c > ++p;) t[p] = n ? t[0 | (p - 1) / 2] : s[p];
						return a + t.join(u) + l
					} : function (e) {
						return e
					}
				},
				pt = function (e) {
					return e = e.split(","),
						function (t, n, i, r, o, s, a) {
							var l, u = (n + "").split(" ");
							for (a = {}, l = 0; 4 > l; l++) a[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
							return r.parse(t, a, o, s)
						}
				},
				ht = (z._setPluginRatio = function (e) {
					this.plugin.setRatio(e);
					for (var t, n, i, r, o = this.data, s = o.proxy, a = o.firstMPT, l = 1e-6; a;) t = s[a.v], a.r ? t = Math.round(t) : l > t && t > -l && (t = 0), a.t[a.p] = t, a = a._next;
					if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === e)
						for (a = o.firstMPT; a;) {
							if (n = a.t, n.type) {
								if (1 === n.type) {
									for (r = n.xs0 + n.s + n.xs1, i = 1; n.l > i; i++) r += n["xn" + i] + n["xs" + (i + 1)];
									n.e = r
								}
							} else n.e = n.s + n.xs0;
							a = a._next
						}
				}, function (e, t, n, i, r) {
					this.t = e, this.p = t, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
				}),
				dt = (z._parseToProxy = function (e, t, n, i, r, o) {
					var s, a, l, u, c, f = i,
						p = {},
						h = {},
						d = n._transform,
						m = R;
					for (n._transform = null, R = t, i = c = n.parse(e, t, i, r), R = m, o && (n._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); i && i !== f;) {
						if (1 >= i.type && (a = i.p, h[a] = i.s + i.c, p[a] = i.s, o || (u = new ht(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
							for (s = i.l; --s > 0;) l = "xn" + s, a = i.p + "_" + l, h[a] = i.data[l], p[a] = i[l], o || (u = new ht(i, l, a, u, i.rxp[l]));
						i = i._next
					}
					return {
						proxy: p,
						end: h,
						firstMPT: u,
						pt: c
					}
				}, z.CSSPropTween = function (e, t, i, r, s, a, l, u, c, f, p) {
					this.t = e, this.p = t, this.s = i, this.c = r, this.n = l || t, e instanceof dt || o.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === f ? i : f, this.e = void 0 === p ? i + r : p, s && (this._next = s, s._prev = this)
				}),
				mt = s.parseComplex = function (e, t, n, i, r, o, s, a, l, u) {
					n = n || o || "", s = new dt(e, t, 0, 0, s, u ? 2 : 1, null, !1, a, n, i), i += "";
					var f, p, h, d, m, y, _, x, b, w, T, C, S = n.split(", ").join(",").split(" "),
						P = i.split(", ").join(",").split(" "),
						N = S.length,
						A = c !== !1;
					for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (S = S.join(" ").replace(D, ", ").split(" "), P = P.join(" ").replace(D, ", ").split(" "), N = S.length), N !== P.length && (S = (o || "").split(" "), N = S.length), s.plugin = l, s.setRatio = u, f = 0; N > f; f++)
						if (d = S[f], m = P[f], x = parseFloat(d), x || 0 === x) s.appendXtra("", x, rt(m, x), m.replace(v, ""), A && -1 !== m.indexOf("px"), !0);
						else if (r && ("#" === d.charAt(0) || at[d] || k.test(d))) C = "," === m.charAt(m.length - 1) ? ")," : ")", d = ut(d), m = ut(m), b = d.length + m.length > 6, b && !I && 0 === m[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(P[f]).join("transparent")) : (I || (b = !1), s.appendXtra(b ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], b ? "," : C, !0), b && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, C, !1)));
					else if (y = d.match(g)) {
						if (_ = m.match(v), !_ || _.length !== y.length) return s;
						for (h = 0, p = 0; y.length > p; p++) T = y[p], w = d.indexOf(T, h), s.appendXtra(d.substr(h, w - h), Number(T), rt(_[p], T), "", A && "px" === d.substr(w + T.length, 2), 0 === p), h = w + T.length;
						s["xs" + s.l] += d.substr(h)
					} else s["xs" + s.l] += s.l ? " " + d : d;
					if (-1 !== i.indexOf("=") && s.data) {
						for (C = s.xs0 + s.data.s, f = 1; s.l > f; f++) C += s["xs" + f] + s.data["xn" + f];
						s.e = C + s["xs" + f]
					}
					return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
				},
				gt = 9;
			for (u = dt.prototype, u.l = u.pr = 0; --gt > 0;) u["xn" + gt] = 0, u["xs" + gt] = "";
			u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (e, t, n, i, r, o) {
				var s = this,
					a = s.l;
				return s["xs" + a] += o && a ? " " + e : e || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = t + n, s.rxp["xn" + a] = r, s["xn" + a] = t, s.plugin || (s.xfirst = new dt(s, "xn" + a, t, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
					s: t + n
				}, s.rxp = {}, s.s = t, s.c = n, s.r = r, s)) : (s["xs" + a] += t + (i || ""), s)
			};
			var vt = function (e, t) {
					t = t || {}, this.p = t.prefix ? V(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
				},
				yt = z._registerComplexSpecialProp = function (e, t, n) {
					"object" != typeof t && (t = {
						parser: n
					});
					var i, r, o = e.split(","),
						s = t.defaultValue;
					for (n = n || [s], i = 0; o.length > i; i++) t.prefix = 0 === i && t.prefix, t.defaultValue = n[i] || s, r = new vt(o[i], t)
				},
				_t = function (e) {
					if (!l[e]) {
						var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
						yt(e, {
							parser: function (e, n, i, r, o, s, u) {
								var c = a.com.greensock.plugins[t];
								return c ? (c._cssRegister(), l[i].parse(e, n, i, r, o, s, u)) : (W("Error: " + t + " js file not loaded."), o)
							}
						})
					}
				};
			u = vt.prototype, u.parseComplex = function (e, t, n, i, r, o) {
				var s, a, l, u, c, f, p = this.keyword;
				if (this.multi && (D.test(n) || D.test(t) ? (a = t.replace(D, "|").split("|"), l = n.replace(D, "|").split("|")) : p && (a = [t], l = [n])), l) {
					for (u = l.length > a.length ? l.length : a.length, s = 0; u > s; s++) t = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, p && (c = t.indexOf(p), f = n.indexOf(p), c !== f && (n = -1 === f ? l : a, n[s] += " " + p));
					t = a.join(", "), n = l.join(", ")
				}
				return mt(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, o)
			}, u.parse = function (e, t, n, i, o, s) {
				return this.parseComplex(e.style, this.format(G(e, this.p, r, !1, this.dflt)), this.format(t), o, s)
			}, s.registerSpecialProp = function (e, t, n) {
				yt(e, {
					parser: function (e, i, r, o, s, a) {
						var l = new dt(e, r, 0, 0, s, 2, r, !1, n);
						return l.plugin = a, l.setRatio = t(e, i, o._tween, r), l
					},
					priority: n
				})
			};
			var xt, bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
				wt = V("transform"),
				Tt = $ + "transform",
				kt = V("transformOrigin"),
				Ct = null !== V("perspective"),
				St = z.Transform = function () {
					this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = s.defaultForce3D !== !1 && Ct ? s.defaultForce3D || "auto" : !1
				},
				Pt = window.SVGElement,
				Nt = function (e, t, n) {
					var i, r = M.createElementNS("http://www.w3.org/2000/svg", e),
						o = /([a-z])([A-Z])/g;
					for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
					return t.appendChild(r), r
				},
				At = document.documentElement,
				Et = function () {
					var e, t, n, i = m || /Android/i.test(q) && !window.chrome;
					return M.createElementNS && !i && (e = Nt("svg", At), t = Nt("rect", e, {
						width: 100,
						height: 50,
						x: 100
					}), n = t.getBoundingClientRect().width, t.style[kt] = "50% 50%", t.style[wt] = "scaleX(0.5)", i = n === t.getBoundingClientRect().width && !(h && Ct), At.removeChild(e)), i
				}(),
				Ot = function (e, t, n) {
					var i = e.getBBox();
					t = it(t).split(" "), n.xOrigin = (-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * i.width : parseFloat(t[0])) + i.x, n.yOrigin = (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * i.height : parseFloat(t[1])) + i.y
				},
				Dt = z.getTransform = function (e, t, n, i) {
					if (e._gsTransform && n && !i) return e._gsTransform;
					var o, a, l, u, c, f, p, h, d, m, g = n ? e._gsTransform || new St : new St,
						v = 0 > g.scaleX,
						y = 2e-5,
						_ = 1e5,
						x = Ct ? parseFloat(G(e, kt, t, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0,
						b = parseFloat(s.defaultTransformPerspective) || 0;
					if (wt ? a = G(e, Tt, t, !0) : e.currentStyle && (a = e.currentStyle.filter.match(E), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), g.x || 0, g.y || 0].join(",") : ""), o = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, g.svg = !!(Pt && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM)), g.svg && (Ot(e, G(e, kt, r, !1, "50% 50%") + "", g), xt = s.useSVGTransformAttr || Et, l = e.getAttribute("transform"), o && l && -1 !== l.indexOf("matrix") && (a = l, o = 0)), !o) {
						for (l = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = l.length; --u > -1;) c = Number(l[u]), l[u] = (f = c - (c |= 0)) ? (0 | f * _ + (0 > f ? -.5 : .5)) / _ + c : c;
						if (16 === l.length) {
							var w, T, k, C, S, P = l[0],
								N = l[1],
								A = l[2],
								O = l[3],
								D = l[4],
								L = l[5],
								R = l[6],
								M = l[7],
								F = l[8],
								H = l[9],
								X = l[10],
								z = l[12],
								q = l[13],
								I = l[14],
								B = l[11],
								W = Math.atan2(R, X);
							g.zOrigin && (I = -g.zOrigin, z = F * I - l[12], q = H * I - l[13], I = X * I + g.zOrigin - l[14]), g.rotationX = W * j, W && (C = Math.cos(-W), S = Math.sin(-W), w = D * C + F * S, T = L * C + H * S, k = R * C + X * S, F = D * -S + F * C, H = L * -S + H * C, X = R * -S + X * C, B = M * -S + B * C, D = w, L = T, R = k), W = Math.atan2(F, X), g.rotationY = W * j, W && (C = Math.cos(-W), S = Math.sin(-W), w = P * C - F * S, T = N * C - H * S, k = A * C - X * S, H = N * S + H * C, X = A * S + X * C, B = O * S + B * C, P = w, N = T, A = k), W = Math.atan2(N, P), g.rotation = W * j, W && (C = Math.cos(-W), S = Math.sin(-W), P = P * C + D * S, T = N * C + L * S, L = N * -S + L * C, R = A * -S + R * C, N = T), g.rotationX && Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 && (g.rotationX = g.rotation = 0, g.rotationY += 180), g.scaleX = (0 | Math.sqrt(P * P + N * N) * _ + .5) / _, g.scaleY = (0 | Math.sqrt(L * L + H * H) * _ + .5) / _, g.scaleZ = (0 | Math.sqrt(R * R + X * X) * _ + .5) / _, g.skewX = 0, g.perspective = B ? 1 / (0 > B ? -B : B) : 0, g.x = z, g.y = q, g.z = I
						} else if (!(Ct && !i && l.length && g.x === l[4] && g.y === l[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === G(e, "display", t))) {
							var $ = l.length >= 6,
								Y = $ ? l[0] : 1,
								V = l[1] || 0,
								U = l[2] || 0,
								Q = $ ? l[3] : 1;
							g.x = l[4] || 0, g.y = l[5] || 0, p = Math.sqrt(Y * Y + V * V), h = Math.sqrt(Q * Q + U * U), d = Y || V ? Math.atan2(V, Y) * j : g.rotation || 0, m = U || Q ? Math.atan2(U, Q) * j + d : g.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (v ? (p *= -1, m += 0 >= d ? 180 : -180, d += 0 >= d ? 180 : -180) : (h *= -1, m += 0 >= m ? 180 : -180)), g.scaleX = p, g.scaleY = h, g.rotation = d, g.skewX = m, Ct && (g.rotationX = g.rotationY = g.z = 0, g.perspective = b, g.scaleZ = 1)
						}
						g.zOrigin = x;
						for (u in g) y > g[u] && g[u] > -y && (g[u] = 0)
					}
					return n && (e._gsTransform = g), g
				},
				Lt = function (e) {
					var t, n, i = this.data,
						r = -i.rotation * L,
						o = r + i.skewX * L,
						s = 1e5,
						a = (0 | Math.cos(r) * i.scaleX * s) / s,
						l = (0 | Math.sin(r) * i.scaleX * s) / s,
						u = (0 | Math.sin(o) * -i.scaleY * s) / s,
						c = (0 | Math.cos(o) * i.scaleY * s) / s,
						f = this.t.style,
						p = this.t.currentStyle;
					if (p) {
						n = l, l = -u, u = -n, t = p.filter, f.filter = "";
						var h, d, g = this.t.offsetWidth,
							v = this.t.offsetHeight,
							y = "absolute" !== p.position,
							_ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
							w = i.x + g * i.xPercent / 100,
							T = i.y + v * i.yPercent / 100;
						if (null != i.ox && (h = (i.oxp ? .01 * g * i.ox : i.ox) - g / 2, d = (i.oyp ? .01 * v * i.oy : i.oy) - v / 2, w += h - (h * a + d * l), T += d - (h * u + d * c)), y ? (h = g / 2, d = v / 2, _ += ", Dx=" + (h - (h * a + d * l) + w) + ", Dy=" + (d - (h * u + d * c) + T) + ")") : _ += ", sizingMethod='auto expand')", f.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(O, _) : _ + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || b.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf("gradient(" && t.indexOf("Alpha")) && f.removeAttribute("filter")), !y) {
							var k, C, S, P = 8 > m ? 1 : -1;
							for (h = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + w), i.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + T), gt = 0; 4 > gt; gt++) C = tt[gt], k = p[C], n = -1 !== k.indexOf("px") ? parseFloat(k) : Q(this.t, C, parseFloat(k), k.replace(x, "")) || 0, S = n !== i[C] ? 2 > gt ? -i.ieOffsetX : -i.ieOffsetY : 2 > gt ? h - i.ieOffsetX : d - i.ieOffsetY, f[C] = (i[C] = Math.round(n - S * (0 === gt || 2 === gt ? 1 : P))) + "px"
						}
					}
				},
				jt = z.set3DTransformRatio = function (e) {
					var t, n, i, r, o, s, a, l, u, c, f, p, d, m, g, v, y, _, x, b, w, T = this.data,
						k = this.t.style,
						C = T.rotation * L,
						S = T.scaleX,
						P = T.scaleY,
						N = T.scaleZ,
						A = T.x,
						E = T.y,
						O = T.z,
						D = T.perspective;
					if (!(1 !== e && 0 !== e && T.force3D || T.force3D === !0 || T.rotationY || T.rotationX || 1 !== N || D || O)) return void Rt.call(this, e);
					if (h && (m = 1e-4, m > S && S > -m && (S = N = 2e-5), m > P && P > -m && (P = N = 2e-5), !D || T.z || T.rotationX || T.rotationY || (D = 0)), C || T.skewX) g = t = Math.cos(C), v = r = Math.sin(C), T.skewX && (C -= T.skewX * L, g = Math.cos(C), v = Math.sin(C), "simple" === T.skewType && (y = Math.tan(T.skewX * L), y = Math.sqrt(1 + y * y), g *= y, v *= y)), n = -v, o = g;
					else {
						if (!(T.rotationY || T.rotationX || 1 !== N || D || T.svg)) return void(k[wt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + A + "px," + E + "px," + O + "px)" + (1 !== S || 1 !== P ? " scale(" + S + "," + P + ")" : ""));
						t = o = 1, n = r = 0
					}
					u = 1, i = s = a = l = c = f = 0, p = D ? -1 / D : 0, d = T.zOrigin, m = 1e-6, b = ",", w = "0", C = T.rotationY * L, C && (g = Math.cos(C), v = Math.sin(C), a = -v, c = p * -v, i = t * v, s = r * v, u = g, p *= g, t *= g, r *= g), C = T.rotationX * L, C && (g = Math.cos(C), v = Math.sin(C), y = n * g + i * v, _ = o * g + s * v, l = u * v, f = p * v, i = n * -v + i * g, s = o * -v + s * g, u *= g, p *= g, n = y, o = _), 1 !== N && (i *= N, s *= N, u *= N, p *= N), 1 !== P && (n *= P, o *= P, l *= P, f *= P), 1 !== S && (t *= S, r *= S, a *= S, c *= S), (d || T.svg) && (d && (A += i * -d, E += s * -d, O += u * -d + d), T.svg && (A += T.xOrigin - (T.xOrigin * t + T.yOrigin * n), E += T.yOrigin - (T.xOrigin * r + T.yOrigin * o)), m > A && A > -m && (A = w), m > E && E > -m && (E = w), m > O && O > -m && (O = 0)), x = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > t && t > -m ? w : t) + b + (m > r && r > -m ? w : r) + b + (m > a && a > -m ? w : a), x += b + (m > c && c > -m ? w : c) + b + (m > n && n > -m ? w : n) + b + (m > o && o > -m ? w : o), T.rotationX || T.rotationY ? (x += b + (m > l && l > -m ? w : l) + b + (m > f && f > -m ? w : f) + b + (m > i && i > -m ? w : i), x += b + (m > s && s > -m ? w : s) + b + (m > u && u > -m ? w : u) + b + (m > p && p > -m ? w : p) + b) : x += ",0,0,0,0,1,0,", x += A + b + E + b + O + b + (D ? 1 + -O / D : 1) + ")", k[wt] = x
				},
				Rt = z.set2DTransformRatio = function (e) {
					var t, n, i, r, o, s, a, l, u, c, f, p = this.data,
						h = this.t,
						d = h.style,
						m = p.x,
						g = p.y;
					return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== e && 0 !== e) || p.svg && xt || !Ct ? (r = p.scaleX, o = p.scaleY, void(p.rotation || p.skewX || p.svg ? (t = p.rotation * L, n = t - p.skewX * L, i = 1e5, s = Math.cos(t) * r, a = Math.sin(t) * r, l = Math.sin(n) * -o, u = Math.cos(n) * o, p.svg && (m += p.xOrigin - (p.xOrigin * s + p.yOrigin * l), g += p.yOrigin - (p.xOrigin * a + p.yOrigin * u), f = 1e-6, f > m && m > -f && (m = 0), f > g && g > -f && (g = 0)), c = (0 | s * i) / i + "," + (0 | a * i) / i + "," + (0 | l * i) / i + "," + (0 | u * i) / i + "," + m + "," + g + ")", p.svg && xt ? h.setAttribute("transform", "matrix(" + c) : d[wt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + c) : d[wt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + o + "," + m + "," + g + ")")) : (this.setRatio = jt, void jt.call(this, e))
				};
			u = St.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = 0, u.scaleX = u.scaleY = u.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
				parser: function (e, t, n, i, o, a, l) {
					if (i._lastParsedTransform === l) return o;
					i._lastParsedTransform = l;
					var u, c, f, p, h, d, m, g = i._transform = Dt(e, r, !0, l.parseTransform),
						v = e.style,
						y = 1e-6,
						_ = bt.length,
						x = l,
						b = {};
					if ("string" == typeof x.transform && wt) f = H.style, f[wt] = x.transform, f.display = "block", f.position = "absolute", M.body.appendChild(H), u = Dt(H, null, !1), M.body.removeChild(H);
					else if ("object" == typeof x) {
						if (u = {
								scaleX: ot(null != x.scaleX ? x.scaleX : x.scale, g.scaleX),
								scaleY: ot(null != x.scaleY ? x.scaleY : x.scale, g.scaleY),
								scaleZ: ot(x.scaleZ, g.scaleZ),
								x: ot(x.x, g.x),
								y: ot(x.y, g.y),
								z: ot(x.z, g.z),
								xPercent: ot(x.xPercent, g.xPercent),
								yPercent: ot(x.yPercent, g.yPercent),
								perspective: ot(x.transformPerspective, g.perspective)
							}, m = x.directionalRotation, null != m)
							if ("object" == typeof m)
								for (f in m) x[f] = m[f];
							else x.rotation = m;
						"string" == typeof x.x && -1 !== x.x.indexOf("%") && (u.x = 0, u.xPercent = ot(x.x, g.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (u.y = 0, u.yPercent = ot(x.y, g.yPercent)), u.rotation = st("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : g.rotation, g.rotation, "rotation", b), Ct && (u.rotationX = st("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", b), u.rotationY = st("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", b)), u.skewX = null == x.skewX ? g.skewX : st(x.skewX, g.skewX), u.skewY = null == x.skewY ? g.skewY : st(x.skewY, g.skewY), (c = u.skewY - g.skewY) && (u.skewX += c, u.rotation += c)
					}
					for (Ct && null != x.force3D && (g.force3D = x.force3D, d = !0), g.skewType = x.skewType || g.skewType || s.defaultSkewType, h = g.force3D || g.z || g.rotationX || g.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, h || null == x.scale || (u.scaleZ = 1); --_ > -1;) n = bt[_], p = u[n] - g[n], (p > y || -y > p || null != x[n] || null != R[n]) && (d = !0, o = new dt(g, n, g[n], p, o), n in b && (o.e = b[n]), o.xs0 = 0, o.plugin = a, i._overwriteProps.push(o.n));
					return p = x.transformOrigin, p && g.svg && (Ot(e, it(p), u), o = new dt(g, "xOrigin", g.xOrigin, u.xOrigin - g.xOrigin, o, -1, "transformOrigin"), o.b = g.xOrigin, o.e = o.xs0 = u.xOrigin, o = new dt(g, "yOrigin", g.yOrigin, u.yOrigin - g.yOrigin, o, -1, "transformOrigin"), o.b = g.yOrigin, o.e = o.xs0 = u.yOrigin, p = "0px 0px"), (p || Ct && h && g.zOrigin) && (wt ? (d = !0, n = kt, p = (p || G(e, n, r, !1, "50% 50%")) + "", o = new dt(v, n, 0, 0, o, -1, "transformOrigin"), o.b = v[n], o.plugin = a, Ct ? (f = g.zOrigin, p = p.split(" "), g.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px", o = new dt(g, "zOrigin", 0, 0, o, -1, o.n), o.b = f, o.xs0 = o.e = g.zOrigin) : o.xs0 = o.e = p) : it(p + "", g)), d && (i._transformType = g.svg && xt || !h && 3 !== this._transformType ? 2 : 3), o
				},
				prefix: !0
			}), yt("boxShadow", {
				defaultValue: "0px 0px 0px 0px #999",
				prefix: !0,
				color: !0,
				multi: !0,
				keyword: "inset"
			}), yt("borderRadius", {
				defaultValue: "0px",
				parser: function (e, t, n, o, s) {
					t = this.format(t);
					var a, l, u, c, f, p, h, d, m, g, v, y, _, x, b, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
						k = e.style;
					for (m = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), a = t.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = V(T[l])), f = c = G(e, T[l], r, !1, "0px"), -1 !== f.indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), p = u = a[l], h = parseFloat(f), y = f.substr((h + "").length), _ = "=" === p.charAt(1), _ ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)), "" === v && (v = i[n] || y), v !== y && (x = Q(e, "borderLeft", h, y), b = Q(e, "borderTop", h, y), "%" === v ? (f = 100 * (x / m) + "%", c = 100 * (b / g) + "%") : "em" === v ? (w = Q(e, "borderLeft", 1, "em"), f = x / w + "em", c = b / w + "em") : (f = x + "px", c = b + "px"), _ && (p = parseFloat(f) + d + v, u = parseFloat(c) + d + v)), s = mt(k, T[l], f + " " + c, p + " " + u, !1, "0px", s);
					return s
				},
				prefix: !0,
				formatter: ft("0px 0px 0px 0px", !1, !0)
			}), yt("backgroundPosition", {
				defaultValue: "0 0",
				parser: function (e, t, n, i, o, s) {
					var a, l, u, c, f, p, h = "background-position",
						d = r || U(e, null),
						g = this.format((d ? m ? d.getPropertyValue(h + "-x") + " " + d.getPropertyValue(h + "-y") : d.getPropertyValue(h) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
						v = this.format(t);
					if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = G(e, "backgroundImage").replace(P, ""), p && "none" !== p)) {
						for (a = g.split(" "), l = v.split(" "), X.setAttribute("src", p), u = 2; --u > -1;) g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (f = 0 === u ? e.offsetWidth - X.width : e.offsetHeight - X.height, a[u] = c ? parseFloat(g) / 100 * f + "px" : 100 * (parseFloat(g) / f) + "%");
						g = a.join(" ")
					}
					return this.parseComplex(e.style, g, v, o, s)
				},
				formatter: it
			}), yt("backgroundSize", {
				defaultValue: "0 0",
				formatter: it
			}), yt("perspective", {
				defaultValue: "0px",
				prefix: !0
			}), yt("perspectiveOrigin", {
				defaultValue: "50% 50%",
				prefix: !0
			}), yt("transformStyle", {
				prefix: !0
			}), yt("backfaceVisibility", {
				prefix: !0
			}), yt("userSelect", {
				prefix: !0
			}), yt("margin", {
				parser: pt("marginTop,marginRight,marginBottom,marginLeft")
			}), yt("padding", {
				parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
			}), yt("clip", {
				defaultValue: "rect(0px,0px,0px,0px)",
				parser: function (e, t, n, i, o, s) {
					var a, l, u;
					return 9 > m ? (l = e.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", t = this.format(t).split(",").join(u)) : (a = this.format(G(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, o, s)
				}
			}), yt("textShadow", {
				defaultValue: "0px 0px 0px #999",
				color: !0,
				multi: !0
			}), yt("autoRound,strictUnits", {
				parser: function (e, t, n, i, r) {
					return r
				}
			}), yt("border", {
				defaultValue: "0px solid #000",
				parser: function (e, t, n, i, o, s) {
					return this.parseComplex(e.style, this.format(G(e, "borderTopWidth", r, !1, "0px") + " " + G(e, "borderTopStyle", r, !1, "solid") + " " + G(e, "borderTopColor", r, !1, "#000")), this.format(t), o, s)
				},
				color: !0,
				formatter: function (e) {
					var t = e.split(" ");
					return t[0] + " " + (t[1] || "solid") + " " + (e.match(ct) || ["#000"])[0]
				}
			}), yt("borderWidth", {
				parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
			}), yt("float,cssFloat,styleFloat", {
				parser: function (e, t, n, i, r) {
					var o = e.style,
						s = "cssFloat" in o ? "cssFloat" : "styleFloat";
					return new dt(o, s, 0, 0, r, -1, n, !1, 0, o[s], t)
				}
			});
			var Mt = function (e) {
				var t, n = this.t,
					i = n.filter || G(this.data, "filter") || "",
					r = 0 | this.s + this.c * e;
				100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), t = !G(this.data, "filter")) : (n.filter = i.replace(T, ""), t = !0)), t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(b, "opacity=" + r))
			};
			yt("opacity,alpha,autoAlpha", {
				defaultValue: "1",
				parser: function (e, t, n, i, o, s) {
					var a = parseFloat(G(e, "opacity", r, !1, "1")),
						l = e.style,
						u = "autoAlpha" === n;
					return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), u && 1 === a && "hidden" === G(e, "visibility", r) && 0 !== t && (a = 0), I ? o = new dt(l, "opacity", a, t - a, o) : (o = new dt(l, "opacity", 100 * a, 100 * (t - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = s, o.setRatio = Mt), u && (o = new dt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(n)), o
				}
			});
			var Ft = function (e, t) {
					t && (e.removeProperty ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)), e.removeProperty(t.replace(C, "-$1").toLowerCase())) : e.removeAttribute(t))
				},
				Ht = function (e) {
					if (this.t._gsClassPT = this, 1 === e || 0 === e) {
						this.t.setAttribute("class", 0 === e ? this.b : this.e);
						for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Ft(n, t.p), t = t._next;
						1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
					} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
				};
			yt("className", {
				parser: function (e, t, i, o, s, a, l) {
					var u, c, f, p, h, d = e.getAttribute("class") || "",
						m = e.style.cssText;
					if (s = o._classNamePT = new dt(e, i, 0, 0, s, 2), s.setRatio = Ht, s.pr = -11, n = !0, s.b = d, c = K(e, r), f = e._gsClassPT) {
						for (p = {}, h = f.data; h;) p[h.p] = 1, h = h._next;
						f.setRatio(1)
					}
					return e._gsClassPT = s, s.e = "=" !== t.charAt(1) ? t : d.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), o._tween._duration && (e.setAttribute("class", s.e), u = J(e, c, K(e), l, p), e.setAttribute("class", d), s.data = u.firstMPT, e.style.cssText = m, s = s.xfirst = o.parse(e, u.difs, s, a)), s
				}
			});
			var Xt = function (e) {
				if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
					var t, n, i, r, o = this.t.style,
						s = l.transform.parse;
					if ("all" === this.e) o.cssText = "", r = !0;
					else
						for (t = this.e.split(" ").join("").split(","), i = t.length; --i > -1;) n = t[i], l[n] && (l[n].parse === s ? r = !0 : n = "transformOrigin" === n ? kt : l[n].p), Ft(o, n);
					r && (Ft(o, wt), this.t._gsTransform && delete this.t._gsTransform)
				}
			};
			for (yt("clearProps", {
					parser: function (e, t, i, r, o) {
						return o = new dt(e, i, 0, 0, o, 2), o.setRatio = Xt, o.e = t, o.pr = -10, o.data = r._tween, n = !0, o
					}
				}), u = "bezier,throwProps,physicsProps,physics2D".split(","), gt = u.length; gt--;) _t(u[gt]);
			u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (e, t, a) {
				if (!e.nodeType) return !1;
				this._target = e, this._tween = a, this._vars = t, c = t.autoRound, n = !1, i = t.suffixMap || s.suffixMap, r = U(e, ""), o = this._overwriteProps;
				var l, u, h, m, g, v, y, _, x, b = e.style;
				if (f && "" === b.zIndex && (l = G(e, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof t && (m = b.cssText, l = K(e, r), b.cssText = m + ";" + t, l = J(e, l, K(e)).difs, !I && w.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, b.cssText = m), this._firstPT = u = this.parse(e, t, null), this._transformType) {
					for (x = 3 === this._transformType, wt ? p && (f = !0, "" === b.zIndex && (y = G(e, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), d && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, h = u; h && h._next;) h = h._next;
					_ = new dt(e, "transform", 0, 0, null, 2), this._linkCSSP(_, null, h), _.setRatio = x && Ct ? jt : wt ? Rt : Lt, _.data = this._transform || Dt(e, r, !0), o.pop()
				}
				if (n) {
					for (; u;) {
						for (v = u._next, h = m; h && h.pr > u.pr;) h = h._next;
						(u._prev = h ? h._prev : g) ? u._prev._next = u: m = u, (u._next = h) ? h._prev = u : g = u, u = v
					}
					this._firstPT = m
				}
				return !0
			}, u.parse = function (e, t, n, o) {
				var s, a, u, f, p, h, d, m, g, v, y = e.style;
				for (s in t) h = t[s], a = l[s], a ? n = a.parse(e, h, s, this, n, o, t) : (p = G(e, s, r) + "", g = "string" == typeof h, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && k.test(h) ? (g || (h = ut(h), h = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")"), n = mt(y, s, p, h, !0, "transparent", n, 0, o)) : !g || -1 === h.indexOf(" ") && -1 === h.indexOf(",") ? (u = parseFloat(p), d = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === s || "height" === s ? (u = nt(e, s, r), d = "px") : "left" === s || "top" === s ? (u = Z(e, s, r), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), v = g && "=" === h.charAt(1), v ? (f = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), f *= parseFloat(h), m = h.replace(x, "")) : (f = parseFloat(h), m = g ? h.replace(x, "") : ""), "" === m && (m = s in i ? i[s] : d), h = f || 0 === f ? (v ? f + u : f) + m : t[s], d !== m && "" !== m && (f || 0 === f) && u && (u = Q(e, s, u, d), "%" === m ? (u /= Q(e, s, 100, "%") / 100, t.strictUnits !== !0 && (p = u + "%")) : "em" === m ? u /= Q(e, s, 1, "em") : "px" !== m && (f = Q(e, s, f, m), m = "px"), v && (f || 0 === f) && (h = f + u + m)), v && (f += u), !u && 0 !== u || !f && 0 !== f ? void 0 !== y[s] && (h || "NaN" != h + "" && null != h) ? (n = new dt(y, s, f || u || 0, 0, n, -1, s, !1, 0, p, h), n.xs0 = "none" !== h || "display" !== s && -1 === s.indexOf("Style") ? h : p) : W("invalid " + s + " tween value: " + t[s]) : (n = new dt(y, s, u, f - u, n, 0, s, c !== !1 && ("px" === m || "zIndex" === s), 0, p, h), n.xs0 = m)) : n = mt(y, s, p, h, !0, null, n, 0, o)), o && n && !n.plugin && (n.plugin = o);
				return n
			}, u.setRatio = function (e) {
				var t, n, i, r = this._firstPT,
					o = 1e-6;
				if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
					if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
						for (; r;) {
							if (t = r.c * e + r.s, r.r ? t = Math.round(t) : o > t && t > -o && (t = 0), r.type)
								if (1 === r.type)
									if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
									else if (3 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
							else if (4 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
							else if (5 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
							else {
								for (n = r.xs0 + t + r.xs1, i = 1; r.l > i; i++) n += r["xn" + i] + r["xs" + (i + 1)];
								r.t[r.p] = n
							} else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
							else r.t[r.p] = t + r.xs0;
							r = r._next
						} else
							for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
					else
						for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(e), r = r._next
			}, u._enableTransforms = function (e) {
				this._transform = this._transform || Dt(this._target, r, !0), this._transformType = this._transform.svg && xt || !e && 3 !== this._transformType ? 2 : 3
			};
			var zt = function () {
				this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
			};
			u._addLazySet = function (e, t, n) {
				var i = this._firstPT = new dt(e, t, 0, 0, this._firstPT, 2);
				i.e = n, i.setRatio = zt, i.data = this
			}, u._linkCSSP = function (e, t, n, i) {
				return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, i = !0), n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
			}, u._kill = function (t) {
				var n, i, r, o = t;
				if (t.autoAlpha || t.alpha) {
					o = {};
					for (i in t) o[i] = t[i];
					o.opacity = 1, o.autoAlpha && (o.visibility = 1)
				}
				return t.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), e.prototype._kill.call(this, o)
			};
			var qt = function (e, t, n) {
				var i, r, o, s;
				if (e.slice)
					for (r = e.length; --r > -1;) qt(e[r], t, n);
				else
					for (i = e.childNodes, r = i.length; --r > -1;) o = i[r], s = o.type, o.style && (t.push(K(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || qt(o, t, n)
			};
			return s.cascadeTo = function (e, n, i) {
				var r, o, s, a = t.to(e, n, i),
					l = [a],
					u = [],
					c = [],
					f = [],
					p = t._internals.reservedProps;
				for (e = a._targets || a.target, qt(e, u, f), a.render(n, !0), qt(e, c), a.render(0, !0), a._enabled(!0), r = f.length; --r > -1;)
					if (o = J(f[r], u[r], c[r]), o.firstMPT) {
						o = o.difs;
						for (s in i) p[s] && (o[s] = i[s]);
						l.push(t.to(f[r], n, o))
					}
				return l
			}, e.activate([s]), s
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (e) {
		"use strict";
		var t = function () {
			return (_gsScope.GreenSockGlobals || _gsScope)[e]
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
	}("CSSPlugin"), $(document).ready(function () {
		var e = !1,
			t = 800,
			n = function () {
				var e = $(window).width(),
					n = $("html").hasClass("nav-overflow");
				t > e && !n ? ($("html").addClass("nav-overflow"), i()) : e >= t && n && ($("html").removeClass("nav-overflow"), i())
			},
			i = function () {
				TweenLite.to("#content, #index-nav, #mobile-nav", 0, {
					x: 0,
					ease: Power2.easeOut
				}), $("html").removeClass("opened"), e = !1
			},
			r = function () {
				TweenLite.to("#content, #index-nav, #mobile-nav", .7, {
					x: 300,
					ease: Power2.easeOut
				}), $("html").addClass("opened"), e = !0
			},
			o = function () {
				TweenLite.to("#content, #index-nav, #mobile-nav", .7, {
					x: 0,
					ease: Power2.easeOut
				}), $("html").removeClass("opened"), e = !1
			};
		$("#mobile-nav #mobile-button").click(function (t) {
			e ? o() : r(), t.stopPropagation()
		}), $("#content").click(function () {
			TweenLite.to("#content, #index-nav, #mobile-nav", .7, {
				x: 0,
				ease: Power2.easeOut
			})
		}), $("#index-nav a").click(function (e) {
			var t = $(this).attr("href"),
				n = $(window).scrollTop(),
				i = $(t).offset().top - 50,
				r = .5 + Math.abs(i - n) / 3e3;
			TweenLite.to(window, r, {
				scrollTo: {
					y: i
				},
				ease: Power2.easeOut
			}), o(), e.preventDefault()
		}), n(), $(window).on("resize", n)
	});