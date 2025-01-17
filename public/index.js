/*
 jQuery JavaScript Library v1.6.4
 http://jquery.com/

 Copyright 2011, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2011, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Amazon elects to use jQuery and Sizzle under the MIT license.

 Date: Mon Sep 12 18:54:48 2011 -0400
 Sizzle CSS Selector Engine
  Copyright 2011, The Dojo Foundation
  Released under the MIT, BSD, and GPL Licenses.
  More information: http://sizzlejs.com/
*/
(function (H) {
  var r = window.AmazonUIPageJS || window.P,
    p = r._namespace || r.attributeErrors,
    J = p ? p("AmazonUIjQuery", "AmazonUI") : r;
  J.guardFatal
    ? J.guardFatal(H)(J, window)
    : J.execute(function () {
        H(J, window);
      });
})(function (H, r, p) {
  r.navigator &&
    r.navigator.userAgent &&
    H.declare(
      "jQuery",
      (function () {
        function J(a, b, d) {
          if (d === p && 1 === a.nodeType)
            if (
              ((d = "data-" + b.replace(gb, "-$1").toLowerCase()),
              (d = a.getAttribute(d)),
              "string" === typeof d)
            ) {
              try {
                d =
                  "true" === d
                    ? !0
                    : "false" === d
                    ? !1
                    : "null" === d
                    ? null
                    : c.isNaN(d)
                    ? hb.test(d)
                      ? c.parseJSON(d)
                      : d
                    : parseFloat(d);
              } catch (e) {}
              c.data(a, b, d);
            } else d = p;
          return d;
        }
        function ia(a) {
          for (var b in a) if ("toJSON" !== b) return !1;
          return !0;
        }
        function wa(a, b, d) {
          var e = b + "defer",
            f = b + "queue",
            g = b + "mark",
            h = c.data(a, e, p, !0);
          !h ||
            ("queue" !== d && c.data(a, f, p, !0)) ||
            ("mark" !== d && c.data(a, g, p, !0)) ||
            setTimeout(function () {
              c.data(a, f, p, !0) ||
                c.data(a, g, p, !0) ||
                (c.removeData(a, e, !0), h.resolve());
            }, 0);
        }
        function L() {
          return !1;
        }
        function X() {
          return !0;
        }
        function xa(a, b, d) {
          var e = c.extend({}, d[0]);
          e.type = a;
          e.originalEvent = {};
          e.liveFired = p;
          c.event.handle.call(b, e);
          e.isDefaultPrevented() && d[0].preventDefault();
        }
        function ib(a) {
          var b,
            d,
            e,
            f,
            g = [];
          var h = [];
          var k = c._data(this, "events");
          if (
            a.liveFired !== this &&
            k &&
            k.live &&
            !a.target.disabled &&
            (!a.button || "click" !== a.type)
          ) {
            a.namespace &&
              (f = new RegExp(
                "(^|\\.)" +
                  a.namespace.split(".").join("\\.(?:.*\\.)?") +
                  "(\\.|$)"
              ));
            a.liveFired = this;
            var l = k.live.slice(0);
            for (d = 0; d < l.length; d++)
              (k = l[d]),
                k.origType.replace(ja, "") === a.type
                  ? h.push(k.selector)
                  : l.splice(d--, 1);
            h = c(a.target).closest(h, a.currentTarget);
            var m = 0;
            for (e = h.length; m < e; m++) {
              var n = h[m];
              for (d = 0; d < l.length; d++)
                if (
                  ((k = l[d]),
                  n.selector === k.selector &&
                    (!f || f.test(k.namespace)) &&
                    !n.elem.disabled)
                ) {
                  var p = n.elem;
                  var q = null;
                  if ("mouseenter" === k.preType || "mouseleave" === k.preType)
                    (a.type = k.preType),
                      (q = c(a.relatedTarget).closest(k.selector)[0]) &&
                        c.contains(p, q) &&
                        (q = p);
                  (q && q === p) ||
                    g.push({ elem: p, handleObj: k, level: n.level });
                }
            }
            m = 0;
            for (e = g.length; m < e; m++) {
              h = g[m];
              if (r && h.level > r) break;
              a.currentTarget = h.elem;
              a.data = h.handleObj.data;
              a.handleObj = h.handleObj;
              f = h.handleObj.origHandler.apply(h.elem, arguments);
              if (!1 === f || a.isPropagationStopped()) {
                var r = h.level;
                !1 === f && (b = !1);
                if (a.isImmediatePropagationStopped()) break;
              }
            }
            return b;
          }
        }
        function Y(a, b) {
          return (
            (a && "*" !== a ? a + "." : "") +
            b.replace(jb, "`").replace(kb, "\x26")
          );
        }
        function ya(a) {
          return !a || !a.parentNode || 11 === a.parentNode.nodeType;
        }
        function za(a, b, d) {
          b = b || 0;
          if (c.isFunction(b))
            return c.grep(a, function (a, c) {
              return !!b.call(a, c, a) === d;
            });
          if (b.nodeType)
            return c.grep(a, function (a, c) {
              return (a === b) === d;
            });
          if ("string" === typeof b) {
            var e = c.grep(a, function (a) {
              return 1 === a.nodeType;
            });
            if (lb.test(b)) return c.filter(b, e, !d);
            b = c.filter(b, e);
          }
          return c.grep(a, function (a, e) {
            return 0 <= c.inArray(a, b) === d;
          });
        }
        function mb(a, b) {
          return c.nodeName(a, "table")
            ? a.getElementsByTagName("tbody")[0] ||
                a.appendChild(a.ownerDocument.createElement("tbody"))
            : a;
        }
        function Aa(a, b) {
          if (1 === b.nodeType && c.hasData(a)) {
            var d = c.expando,
              e = c.data(a),
              f = c.data(b, e);
            if ((e = e[d]))
              if (((a = e.events), (f = f[d] = c.extend({}, e)), a)) {
                delete f.handle;
                f.events = {};
                for (var g in a)
                  for (d = 0, e = a[g].length; d < e; d++)
                    c.event.add(
                      b,
                      g + (a[g][d].namespace ? "." : "") + a[g][d].namespace,
                      a[g][d],
                      a[g][d].data
                    );
              }
          }
        }
        function Ba(a, b) {
          if (1 === b.nodeType) {
            b.clearAttributes && b.clearAttributes();
            b.mergeAttributes && b.mergeAttributes(a);
            var d = b.nodeName.toLowerCase();
            if ("object" === d) b.outerHTML = a.outerHTML;
            else if (
              "input" === d &&
              ("checkbox" === a.type || "radio" === a.type)
            )
              a.checked && (b.defaultChecked = b.checked = a.checked),
                b.value !== a.value && (b.value = a.value);
            else if ("option" === d) b.selected = a.defaultSelected;
            else if ("input" === d || "textarea" === d)
              b.defaultValue = a.defaultValue;
            b.removeAttribute(c.expando);
          }
        }
        function Z(a) {
          return "getElementsByTagName" in a
            ? a.getElementsByTagName("*")
            : "querySelectorAll" in a
            ? a.querySelectorAll("*")
            : [];
        }
        function Ca(a) {
          if ("checkbox" === a.type || "radio" === a.type)
            a.defaultChecked = a.checked;
        }
        function Da(a) {
          c.nodeName(a, "input")
            ? Ca(a)
            : "getElementsByTagName" in a &&
              c.grep(a.getElementsByTagName("input"), Ca);
        }
        function nb(a, b) {
          b.src
            ? c.ajax({ url: b.src, async: !1, dataType: "script" })
            : c.globalEval(
                (b.text || b.textContent || b.innerHTML || "").replace(
                  ob,
                  "/*$0*/"
                )
              );
          b.parentNode && b.parentNode.removeChild(b);
        }
        function Ea(a, b, d) {
          var e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = "width" === b ? pb : qb;
          if (0 < e)
            return (
              "border" !== d &&
                c.each(f, function () {
                  d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
                  e =
                    "margin" === d
                      ? e + (parseFloat(c.css(a, d + this)) || 0)
                      : e -
                        (parseFloat(c.css(a, "border" + this + "Width")) || 0);
                }),
              e + "px"
            );
          e = V(a, b, b);
          if (0 > e || null == e) e = a.style[b] || 0;
          e = parseFloat(e) || 0;
          d &&
            c.each(f, function () {
              e += parseFloat(c.css(a, "padding" + this)) || 0;
              "padding" !== d &&
                (e += parseFloat(c.css(a, "border" + this + "Width")) || 0);
              "margin" === d && (e += parseFloat(c.css(a, d + this)) || 0);
            });
          return e + "px";
        }
        function Fa(a) {
          return function (b, d) {
            "string" !== typeof b && ((d = b), (b = "*"));
            if (c.isFunction(d)) {
              b = b.toLowerCase().split(Ga);
              for (var e = 0, f = b.length, g, h; e < f; e++)
                (g = b[e]),
                  (h = /^\+/.test(g)) && (g = g.substr(1) || "*"),
                  (g = a[g] = a[g] || []),
                  g[h ? "unshift" : "push"](d);
            }
          };
        }
        function aa(a, b, c, e, f, g) {
          f = f || b.dataTypes[0];
          g = g || {};
          g[f] = !0;
          f = a[f];
          for (
            var d = 0, k = f ? f.length : 0, l = a === ka, m;
            d < k && (l || !m);
            d++
          )
            (m = f[d](b, c, e)),
              "string" === typeof m &&
                (!l || g[m]
                  ? (m = p)
                  : (b.dataTypes.unshift(m), (m = aa(a, b, c, e, m, g))));
          (!l && m) || g["*"] || (m = aa(a, b, c, e, "*", g));
          return m;
        }
        function Ha(a, b) {
          var d,
            e,
            f = c.ajaxSettings.flatOptions || {};
          for (d in b) b[d] !== p && ((f[d] ? a : e || (e = {}))[d] = b[d]);
          e && c.extend(!0, a, e);
        }
        function la(a, b, d, e) {
          if (c.isArray(b))
            c.each(b, function (b, f) {
              d || rb.test(a)
                ? e(a, f)
                : la(
                    a +
                      "[" +
                      ("object" === typeof f || c.isArray(f) ? b : "") +
                      "]",
                    f,
                    d,
                    e
                  );
            });
          else if (d || null == b || "object" !== typeof b) e(a, b);
          else for (var f in b) la(a + "[" + f + "]", b[f], d, e);
        }
        function Ia() {
          try {
            return new r.XMLHttpRequest();
          } catch (a) {}
        }
        function Ja() {
          setTimeout(sb, 0);
          return (ba = c.now());
        }
        function sb() {
          ba = p;
        }
        function K(a, b) {
          var d = {};
          c.each(Ka.concat.apply([], Ka.slice(0, b)), function () {
            d[this] = a;
          });
          return d;
        }
        function La(a) {
          if (!ma[a]) {
            var b = q.body,
              d = c("\x3c" + a + "\x3e").appendTo(b),
              e = d.css("display");
            d.remove();
            if ("none" === e || "" === e)
              G ||
                ((G = q.createElement("iframe")),
                (G.frameBorder = G.width = G.height = 0)),
                b.appendChild(G),
                (M && G.createElement) ||
                  ((M = (G.contentWindow || G.contentDocument).document),
                  M.write(
                    (c.support.boxModel ? "\x3c!doctype html\x3e" : "") +
                      "\x3chtml\x3e\x3cbody\x3e"
                  ),
                  M.close()),
                (d = M.createElement(a)),
                M.body.appendChild(d),
                (e = c.css(d, "display")),
                b.removeChild(G);
            ma[a] = e;
          }
          return ma[a];
        }
        function na(a) {
          return c.isWindow(a)
            ? a
            : 9 === a.nodeType
            ? a.defaultView || a.parentWindow
            : !1;
        }
        var q = r.document,
          tb = r.navigator,
          ub = r.location;
        q.createDocumentFragment();
        var c = (function () {
            function a() {
              if (!b.isReady) {
                try {
                  q.documentElement.doScroll("left");
                } catch (gc) {
                  setTimeout(a, 1);
                  return;
                }
                b.ready();
              }
            }
            var b = function (a, c) {
                return new b.fn.init(a, c, vb);
              },
              c = r.jQuery,
              e = r.$,
              f = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
              g = /\S/,
              h = /^\s+/,
              k = /\s+$/,
              l = /\d/,
              m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
              n = /^[\],:{}\s]*$/,
              S = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
              y =
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              B = /(?:^|:|,)(?:\s*\[)+/g,
              w = /(webkit)[ \/]([\w.]+)/,
              E = /(opera)(?:.*version)?[ \/]([\w.]+)/,
              z = /(msie) ([\w.]+)/,
              v = /(mozilla)(?:.*? rv:([\w.]+))?/,
              t = /-([a-z]|[0-9])/gi,
              x = /^-ms-/,
              D = function (a, b) {
                return (b + "").toUpperCase();
              },
              u = tb.userAgent,
              P,
              Q,
              wb = Object.prototype.toString,
              ca = Object.prototype.hasOwnProperty,
              oa = Array.prototype.push,
              W = Array.prototype.slice,
              Ma = String.prototype.trim,
              Na = Array.prototype.indexOf,
              A = {};
            b.fn = b.prototype = {
              constructor: b,
              init: function (a, c, d) {
                if (!a) return this;
                if (a.nodeType)
                  return (this.context = this[0] = a), (this.length = 1), this;
                if ("body" === a && !c && q.body)
                  return (
                    (this.context = q),
                    (this[0] = q.body),
                    (this.selector = a),
                    (this.length = 1),
                    this
                  );
                if ("string" === typeof a) {
                  var e =
                    "\x3c" === a.charAt(0) &&
                    "\x3e" === a.charAt(a.length - 1) &&
                    3 <= a.length
                      ? [null, a, null]
                      : f.exec(a);
                  if (!e || (!e[1] && c))
                    return !c || c.jquery
                      ? (c || d).find(a)
                      : this.constructor(c).find(a);
                  if (e[1])
                    return (
                      (d = (c = c instanceof b ? c[0] : c)
                        ? c.ownerDocument || c
                        : q),
                      (a = m.exec(a))
                        ? b.isPlainObject(c)
                          ? ((a = [q.createElement(a[1])]),
                            b.fn.attr.call(a, c, !0))
                          : (a = [d.createElement(a[1])])
                        : ((a = b.buildFragment([e[1]], [d])),
                          (a = (a.cacheable ? b.clone(a.fragment) : a.fragment)
                            .childNodes)),
                      b.merge(this, a)
                    );
                  if ((c = q.getElementById(e[2])) && c.parentNode) {
                    if (c.id !== e[2]) return d.find(a);
                    this.length = 1;
                    this[0] = c;
                  }
                  this.context = q;
                  this.selector = a;
                  return this;
                }
                if (b.isFunction(a)) return d.ready(a);
                a.selector !== p &&
                  ((this.selector = a.selector), (this.context = a.context));
                return b.makeArray(a, this);
              },
              selector: "",
              jquery: "1.6.4",
              length: 0,
              size: function () {
                return this.length;
              },
              toArray: function () {
                return W.call(this, 0);
              },
              get: function (a) {
                return null == a
                  ? this.toArray()
                  : 0 > a
                  ? this[this.length + a]
                  : this[a];
              },
              pushStack: function (a, c, d) {
                var e = this.constructor();
                b.isArray(a) ? oa.apply(e, a) : b.merge(e, a);
                e.prevObject = this;
                e.context = this.context;
                "find" === c
                  ? (e.selector =
                      this.selector + (this.selector ? " " : "") + d)
                  : c && (e.selector = this.selector + "." + c + "(" + d + ")");
                return e;
              },
              each: function (a, c) {
                return b.each(this, a, c);
              },
              ready: function (a) {
                b.bindReady();
                P.done(a);
                return this;
              },
              eq: function (a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1);
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              slice: function () {
                return this.pushStack(
                  W.apply(this, arguments),
                  "slice",
                  W.call(arguments).join(",")
                );
              },
              map: function (a) {
                return this.pushStack(
                  b.map(this, function (b, c) {
                    return a.call(b, c, b);
                  })
                );
              },
              end: function () {
                return this.prevObject || this.constructor(null);
              },
              push: oa,
              sort: [].sort,
              splice: [].splice,
            };
            b.fn.init.prototype = b.fn;
            b.extend = b.fn.extend = function () {
              var a,
                c,
                d,
                e = arguments[0] || {},
                f = 1,
                g = arguments.length,
                t = !1;
              "boolean" === typeof e &&
                ((t = e), (e = arguments[1] || {}), (f = 2));
              "object" === typeof e || b.isFunction(e) || (e = {});
              g === f && ((e = this), --f);
              for (; f < g; f++)
                if (null != (a = arguments[f]))
                  for (c in a) {
                    var h = e[c];
                    var x = a[c];
                    "__proto__" !== c &&
                      e !== x &&
                      (t && x && (b.isPlainObject(x) || (d = b.isArray(x)))
                        ? (d
                            ? ((d = !1), (h = h && b.isArray(h) ? h : []))
                            : (h = h && b.isPlainObject(h) ? h : {}),
                          (e[c] = b.extend(t, h, x)))
                        : x !== p && (e[c] = x));
                  }
              return e;
            };
            b.extend({
              noConflict: function (a) {
                r.$ === b && (r.$ = e);
                a && r.jQuery === b && (r.jQuery = c);
                return b;
              },
              isReady: !1,
              readyWait: 1,
              holdReady: function (a) {
                a ? b.readyWait++ : b.ready(!0);
              },
              ready: function (a) {
                if ((!0 === a && !--b.readyWait) || (!0 !== a && !b.isReady)) {
                  if (!q.body) return setTimeout(b.ready, 1);
                  b.isReady = !0;
                  (!0 !== a && 0 < --b.readyWait) ||
                    (P.resolveWith(q, [b]),
                    b.fn.trigger && b(q).trigger("ready").unbind("ready"));
                }
              },
              bindReady: function () {
                if (!P) {
                  P = b._Deferred();
                  if ("complete" === q.readyState)
                    return setTimeout(b.ready, 1);
                  if (q.addEventListener)
                    q.addEventListener("DOMContentLoaded", Q, !1),
                      r.addEventListener("load", b.ready, !1);
                  else if (q.attachEvent) {
                    q.attachEvent("onreadystatechange", Q);
                    r.attachEvent("onload", b.ready);
                    var c = !1;
                    try {
                      c = null == r.frameElement;
                    } catch (hc) {}
                    q.documentElement.doScroll && c && a();
                  }
                }
              },
              isFunction: function (a) {
                return "function" === b.type(a);
              },
              isArray:
                Array.isArray ||
                function (a) {
                  return "array" === b.type(a);
                },
              isWindow: function (a) {
                return a && "object" === typeof a && "setInterval" in a;
              },
              isNaN: function (a) {
                return null == a || !l.test(a) || isNaN(a);
              },
              type: function (a) {
                return null == a ? String(a) : A[wb.call(a)] || "object";
              },
              isPlainObject: function (a) {
                if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a))
                  return !1;
                try {
                  if (
                    a.constructor &&
                    !ca.call(a, "constructor") &&
                    !ca.call(a.constructor.prototype, "isPrototypeOf")
                  )
                    return !1;
                } catch (ic) {
                  return !1;
                }
                for (var c in a);
                return c === p || ca.call(a, c);
              },
              isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0;
              },
              error: function (a) {
                throw a;
              },
              parseJSON: function (a) {
                if ("string" !== typeof a || !a) return null;
                a = b.trim(a);
                if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                if (n.test(a.replace(S, "@").replace(y, "]").replace(B, "")))
                  return new Function("return " + a)();
                b.error("Invalid JSON: " + a);
              },
              parseXML: function (a) {
                try {
                  if (r.DOMParser) {
                    var c = new DOMParser();
                    var d = c.parseFromString(a, "text/xml");
                  } else
                    (d = new ActiveXObject("Microsoft.XMLDOM")),
                      (d.async = "false"),
                      d.loadXML(a);
                } catch (C) {
                  d = p;
                }
                (d &&
                  d.documentElement &&
                  !d.getElementsByTagName("parsererror").length) ||
                  b.error("Invalid XML: " + a);
                return d;
              },
              noop: function () {},
              globalEval: function (a) {
                a &&
                  g.test(a) &&
                  (
                    r.execScript ||
                    function (a) {
                      r.eval.call(r, a);
                    }
                  )(a);
              },
              camelCase: function (a) {
                return a.replace(x, "ms-").replace(t, D);
              },
              nodeName: function (a, b) {
                return (
                  a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                );
              },
              each: function (a, c, d) {
                var e,
                  f = 0,
                  g = a.length,
                  t = g === p || b.isFunction(a);
                if (d)
                  if (t)
                    for (e in a) {
                      if (!1 === c.apply(a[e], d)) break;
                    }
                  else for (; f < g && !1 !== c.apply(a[f++], d); );
                else if (t)
                  for (e in a) {
                    if (!1 === c.call(a[e], e, a[e])) break;
                  }
                else for (; f < g && !1 !== c.call(a[f], f, a[f++]); );
                return a;
              },
              trim: Ma
                ? function (a) {
                    return null == a ? "" : Ma.call(a);
                  }
                : function (a) {
                    return null == a
                      ? ""
                      : a.toString().replace(h, "").replace(k, "");
                  },
              makeArray: function (a, c) {
                c = c || [];
                if (null != a) {
                  var d = b.type(a);
                  null == a.length ||
                  "string" === d ||
                  "function" === d ||
                  "regexp" === d ||
                  b.isWindow(a)
                    ? oa.call(c, a)
                    : b.merge(c, a);
                }
                return c;
              },
              inArray: function (a, b) {
                if (!b) return -1;
                if (Na) return Na.call(b, a);
                for (var c = 0, d = b.length; c < d; c++)
                  if (b[c] === a) return c;
                return -1;
              },
              merge: function (a, b) {
                var c = a.length,
                  d = 0;
                if ("number" === typeof b.length)
                  for (var e = b.length; d < e; d++) a[c++] = b[d];
                else for (; b[d] !== p; ) a[c++] = b[d++];
                a.length = c;
                return a;
              },
              grep: function (a, b, c) {
                var d = [];
                c = !!c;
                for (var e = 0, f = a.length; e < f; e++) {
                  var g = !!b(a[e], e);
                  c !== g && d.push(a[e]);
                }
                return d;
              },
              map: function (a, c, d) {
                var e,
                  f = [],
                  g = 0,
                  t = a.length;
                if (
                  a instanceof b ||
                  (t !== p &&
                    "number" === typeof t &&
                    ((0 < t && a[0] && a[t - 1]) || 0 === t || b.isArray(a)))
                )
                  for (; g < t; g++) {
                    var h = c(a[g], g, d);
                    null != h && (f[f.length] = h);
                  }
                else
                  for (e in a)
                    (h = c(a[e], e, d)), null != h && (f[f.length] = h);
                return f.concat.apply([], f);
              },
              guid: 1,
              proxy: function (a, c) {
                if ("string" === typeof c) {
                  var d = a[c];
                  c = a;
                  a = d;
                }
                if (!b.isFunction(a)) return p;
                var e = W.call(arguments, 2);
                d = function () {
                  return a.apply(c, e.concat(W.call(arguments)));
                };
                d.guid = a.guid = a.guid || d.guid || b.guid++;
                return d;
              },
              access: function (a, c, d, e, f, g) {
                var t = a.length;
                if ("object" === typeof c) {
                  for (var h in c) b.access(a, h, c[h], e, f, d);
                  return a;
                }
                if (d !== p) {
                  e = !g && e && b.isFunction(d);
                  for (h = 0; h < t; h++)
                    f(a[h], c, e ? d.call(a[h], h, f(a[h], c)) : d, g);
                  return a;
                }
                return t ? f(a[0], c) : p;
              },
              now: function () {
                return new Date().getTime();
              },
              uaMatch: function (a) {
                a = a.toLowerCase();
                a =
                  w.exec(a) ||
                  E.exec(a) ||
                  z.exec(a) ||
                  (0 > a.indexOf("compatible") && v.exec(a)) ||
                  [];
                return { browser: a[1] || "", version: a[2] || "0" };
              },
              sub: function () {
                function a(b, c) {
                  return new a.fn.init(b, c);
                }
                b.extend(!0, a, this);
                a.superclass = this;
                a.fn = a.prototype = this();
                a.fn.constructor = a;
                a.sub = this.sub;
                a.fn.init = function (d, e) {
                  e && e instanceof b && !(e instanceof a) && (e = a(e));
                  return b.fn.init.call(this, d, e, c);
                };
                a.fn.init.prototype = a.fn;
                var c = a(q);
                return a;
              },
              browser: {},
            });
            b.each(
              "Boolean Number String Function Array Date RegExp Object".split(
                " "
              ),
              function (a, b) {
                A["[object " + b + "]"] = b.toLowerCase();
              }
            );
            u = b.uaMatch(u);
            u.browser &&
              ((b.browser[u.browser] = !0), (b.browser.version = u.version));
            b.browser.webkit && (b.browser.safari = !0);
            g.test("Â ") && ((h = /^[\s\xA0]+/), (k = /[\s\xA0]+$/));
            var vb = b(q);
            q.addEventListener
              ? (Q = function () {
                  q.removeEventListener("DOMContentLoaded", Q, !1);
                  b.ready();
                })
              : q.attachEvent &&
                (Q = function () {
                  "complete" === q.readyState &&
                    (q.detachEvent("onreadystatechange", Q), b.ready());
                });
            return b;
          })(),
          pa = "done fail isResolved isRejected promise then always pipe".split(
            " "
          ),
          Oa = [].slice;
        c.extend({
          _Deferred: function () {
            var a = [],
              b,
              d,
              e,
              f = {
                done: function () {
                  if (!e) {
                    var d = arguments,
                      h;
                    if (b) {
                      var k = b;
                      b = 0;
                    }
                    var l = 0;
                    for (h = d.length; l < h; l++) {
                      var m = d[l];
                      var n = c.type(m);
                      "array" === n
                        ? f.done.apply(f, m)
                        : "function" === n && a.push(m);
                    }
                    k && f.resolveWith(k[0], k[1]);
                  }
                  return this;
                },
                resolveWith: function (c, f) {
                  if (!e && !b && !d) {
                    f = f || [];
                    d = 1;
                    try {
                      for (; a[0]; ) a.shift().apply(c, f);
                    } finally {
                      (b = [c, f]), (d = 0);
                    }
                  }
                  return this;
                },
                resolve: function () {
                  f.resolveWith(this, arguments);
                  return this;
                },
                isResolved: function () {
                  return !(!d && !b);
                },
                cancel: function () {
                  e = 1;
                  a = [];
                  return this;
                },
              };
            return f;
          },
          Deferred: function (a) {
            var b = c._Deferred(),
              d = c._Deferred(),
              e;
            c.extend(b, {
              then: function (a, c) {
                b.done(a).fail(c);
                return this;
              },
              always: function () {
                return b.done.apply(b, arguments).fail.apply(this, arguments);
              },
              fail: d.done,
              rejectWith: d.resolveWith,
              reject: d.resolve,
              isRejected: d.isResolved,
              pipe: function (a, d) {
                return c
                  .Deferred(function (e) {
                    c.each(
                      { done: [a, "resolve"], fail: [d, "reject"] },
                      function (a, d) {
                        var f = d[0],
                          g = d[1],
                          h;
                        if (c.isFunction(f))
                          b[a](function () {
                            if (
                              (h = f.apply(this, arguments)) &&
                              c.isFunction(h.promise)
                            )
                              h.promise().then(e.resolve, e.reject);
                            else e[g + "With"](this === b ? e : this, [h]);
                          });
                        else b[a](e[g]);
                      }
                    );
                  })
                  .promise();
              },
              promise: function (a) {
                if (null == a) {
                  if (e) return e;
                  e = a = {};
                }
                for (var c = pa.length; c--; ) a[pa[c]] = b[pa[c]];
                return a;
              },
            });
            b.done(d.cancel).fail(b.cancel);
            delete b.cancel;
            a && a.call(b, b);
            return b;
          },
          when: function (a) {
            function b(a) {
              return function (b) {
                d[a] = 1 < arguments.length ? Oa.call(arguments, 0) : b;
                --g || h.resolveWith(h, Oa.call(d, 0));
              };
            }
            var d = arguments,
              e = 0,
              f = d.length,
              g = f,
              h = 1 >= f && a && c.isFunction(a.promise) ? a : c.Deferred();
            if (1 < f) {
              for (; e < f; e++)
                d[e] && c.isFunction(d[e].promise)
                  ? d[e].promise().then(b(e), h.reject)
                  : --g;
              g || h.resolveWith(h, d);
            } else h !== a && h.resolveWith(h, f ? [a] : []);
            return h.promise();
          },
        });
        c.support = (function () {
          var a = q.createElement("div"),
            b = q.documentElement,
            d;
          a.setAttribute("className", "t");
          a.innerHTML =
            "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
          var e = a.getElementsByTagName("*");
          var f = a.getElementsByTagName("a")[0];
          if (!e || !e.length || !f) return {};
          var g = q.createElement("select");
          var h = g.appendChild(q.createElement("option"));
          e = a.getElementsByTagName("input")[0];
          var k = {
            leadingWhitespace: 3 === a.firstChild.nodeType,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !!a.getElementsByTagName("link").length,
            style: /top/.test(f.getAttribute("style")),
            hrefNormalized: "/a" === f.getAttribute("href"),
            opacity: /^0.55$/.test(f.style.opacity),
            cssFloat: !!f.style.cssFloat,
            checkOn: "on" === e.value,
            optSelected: h.selected,
            getSetAttribute: "t" !== a.className,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
          };
          a.innerHTML = "\x3coption\x3e\x3c/option\x3e";
          k.option = !!a.lastChild;
          e.checked = !0;
          k.noCloneChecked = e.cloneNode(!0).checked;
          g.disabled = !0;
          k.optDisabled = !h.disabled;
          try {
            delete a.test;
          } catch (l) {
            k.deleteExpando = !1;
          }
          !a.addEventListener &&
            a.attachEvent &&
            a.fireEvent &&
            (a.attachEvent("onclick", function () {
              k.noCloneEvent = !1;
            }),
            a.cloneNode(!0).fireEvent("onclick"));
          e = q.createElement("input");
          e.value = "t";
          e.setAttribute("type", "radio");
          k.radioValue = "t" === e.value;
          e.setAttribute("checked", "checked");
          a.appendChild(e);
          f = q.createDocumentFragment();
          f.appendChild(a.firstChild);
          k.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked;
          a.innerHTML = "";
          a.style.width = a.style.paddingLeft = "1px";
          g = q.getElementsByTagName("body")[0];
          f = q.createElement(g ? "div" : "body");
          h = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none",
          };
          g &&
            c.extend(h, {
              position: "absolute",
              left: "-1000px",
              top: "-1000px",
            });
          for (d in h) f.style[d] = h[d];
          f.appendChild(a);
          b = g || b;
          b.insertBefore(f, b.firstChild);
          k.appendChecked = e.checked;
          c.boxModel = k.boxModel = "CSS1Compat" === q.compatMode;
          "zoom" in a.style &&
            ((a.style.display = "inline"),
            (a.style.zoom = 1),
            (k.inlineBlockNeedsLayout = 2 === a.offsetWidth),
            (a.style.display = ""),
            (a.innerHTML = "\x3cdiv style\x3d'width:4px;'\x3e\x3c/div\x3e"),
            (k.shrinkWrapBlocks = 2 !== a.offsetWidth));
          a.innerHTML =
            "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
          g = a.getElementsByTagName("td");
          e = 0 === g[0].offsetHeight;
          g[0].style.display = "";
          g[1].style.display = "none";
          k.reliableHiddenOffsets = e && 0 === g[0].offsetHeight;
          a.innerHTML = "";
          q.defaultView &&
            q.defaultView.getComputedStyle &&
            ((e = q.createElement("div")),
            (e.style.width = "0"),
            (e.style.marginRight = "0"),
            a.appendChild(e),
            (k.reliableMarginRight =
              0 ===
              (parseInt(
                (q.defaultView.getComputedStyle(e, null) || { marginRight: 0 })
                  .marginRight,
                10
              ) || 0)));
          f.innerHTML = "";
          b.removeChild(f);
          if (a.attachEvent)
            for (d in { submit: 1, change: 1, focusin: 1 })
              (b = "on" + d),
                (e = b in a),
                e ||
                  (a.setAttribute(b, "return;"),
                  (e = "function" === typeof a[b])),
                (k[d + "Bubbles"] = e);
          f = f = g = h = g = e = a = e = null;
          return k;
        })();
        var hb = /^(?:\{.*\}|\[.*\])$/,
          gb = /([A-Z])/g;
        c.extend({
          cache: {},
          uuid: 0,
          expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
          noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0,
          },
          hasData: function (a) {
            a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
            return !!a && !ia(a);
          },
          data: function (a, b, d, e) {
            if (c.acceptData(a)) {
              var f = c.expando,
                g = "string" === typeof b,
                h = a.nodeType,
                k = h ? c.cache : a,
                l = h ? a[c.expando] : a[c.expando] && c.expando;
              if (!(!l || (e && l && k[l] && !k[l][f])) || !g || d !== p) {
                l || (h ? (a[c.expando] = l = ++c.uuid) : (l = c.expando));
                k[l] || ((k[l] = {}), h || (k[l].toJSON = c.noop));
                if ("object" === typeof b || "function" === typeof b)
                  e
                    ? (k[l][f] = c.extend(k[l][f], b))
                    : (k[l] = c.extend(k[l], b));
                a = k[l];
                e && (a[f] || (a[f] = {}), (a = a[f]));
                d !== p && (a[c.camelCase(b)] = d);
                if ("events" === b && !a[b]) return a[f] && a[f].events;
                g
                  ? ((d = a[b]), null == d && (d = a[c.camelCase(b)]))
                  : (d = a);
                return d;
              }
            }
          },
          removeData: function (a, b, d) {
            if (c.acceptData(a)) {
              var e,
                f = c.expando,
                g = a.nodeType,
                h = g ? c.cache : a,
                k = g ? a[c.expando] : c.expando;
              if (h[k]) {
                if (
                  (b &&
                    (e = d ? h[k][f] : h[k]) &&
                    (e[b] || (b = c.camelCase(b)), delete e[b], !ia(e))) ||
                  (d && (delete h[k][f], !ia(h[k])))
                )
                  return;
                b = h[k][f];
                c.support.deleteExpando || !h.setInterval
                  ? delete h[k]
                  : (h[k] = null);
                b
                  ? ((h[k] = {}), g || (h[k].toJSON = c.noop), (h[k][f] = b))
                  : g &&
                    (c.support.deleteExpando
                      ? delete a[c.expando]
                      : a.removeAttribute
                      ? a.removeAttribute(c.expando)
                      : (a[c.expando] = null));
              }
            }
          },
          _data: function (a, b, d) {
            return c.data(a, b, d, !0);
          },
          acceptData: function (a) {
            if (a.nodeName) {
              var b = c.noData[a.nodeName.toLowerCase()];
              if (b) return !(!0 === b || a.getAttribute("classid") !== b);
            }
            return !0;
          },
        });
        c.fn.extend({
          data: function (a, b) {
            var d = null;
            if ("undefined" === typeof a) {
              if (
                this.length &&
                ((d = c.data(this[0])), 1 === this[0].nodeType)
              )
                for (
                  var e = this[0].attributes, f, g = 0, h = e.length;
                  g < h;
                  g++
                )
                  (f = e[g].name),
                    0 === f.indexOf("data-") &&
                      ((f = c.camelCase(f.substring(5))), J(this[0], f, d[f]));
              return d;
            }
            if ("object" === typeof a)
              return this.each(function () {
                c.data(this, a);
              });
            var k = a.split(".");
            k[1] = k[1] ? "." + k[1] : "";
            return b === p
              ? ((d = this.triggerHandler("getData" + k[1] + "!", [k[0]])),
                d === p &&
                  this.length &&
                  ((d = c.data(this[0], a)), (d = J(this[0], a, d))),
                d === p && k[1] ? this.data(k[0]) : d)
              : this.each(function () {
                  var d = c(this),
                    e = [k[0], b];
                  d.triggerHandler("setData" + k[1] + "!", e);
                  c.data(this, a, b);
                  d.triggerHandler("changeData" + k[1] + "!", e);
                });
          },
          removeData: function (a) {
            return this.each(function () {
              c.removeData(this, a);
            });
          },
        });
        c.extend({
          _mark: function (a, b) {
            a &&
              ((b = (b || "fx") + "mark"),
              c.data(a, b, (c.data(a, b, p, !0) || 0) + 1, !0));
          },
          _unmark: function (a, b, d) {
            !0 !== a && ((d = b), (b = a), (a = !1));
            if (b) {
              d = d || "fx";
              var e = d + "mark";
              (a = a ? 0 : (c.data(b, e, p, !0) || 1) - 1)
                ? c.data(b, e, a, !0)
                : (c.removeData(b, e, !0), wa(b, d, "mark"));
            }
          },
          queue: function (a, b, d) {
            if (a) {
              b = (b || "fx") + "queue";
              var e = c.data(a, b, p, !0);
              d &&
                (!e || c.isArray(d)
                  ? (e = c.data(a, b, c.makeArray(d), !0))
                  : e.push(d));
              return e || [];
            }
          },
          dequeue: function (a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
              e = d.shift();
            "inprogress" === e && (e = d.shift());
            e &&
              ("fx" === b && d.unshift("inprogress"),
              e.call(a, function () {
                c.dequeue(a, b);
              }));
            d.length || (c.removeData(a, b + "queue", !0), wa(a, b, "queue"));
          },
        });
        c.fn.extend({
          queue: function (a, b) {
            "string" !== typeof a && ((b = a), (a = "fx"));
            return b === p
              ? c.queue(this[0], a)
              : this.each(function () {
                  var d = c.queue(this, a, b);
                  "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a);
                });
          },
          dequeue: function (a) {
            return this.each(function () {
              c.dequeue(this, a);
            });
          },
          delay: function (a, b) {
            a = c.fx ? c.fx.speeds[a] || a : a;
            b = b || "fx";
            return this.queue(b, function () {
              var d = this;
              setTimeout(function () {
                c.dequeue(d, b);
              }, a);
            });
          },
          clearQueue: function (a) {
            return this.queue(a || "fx", []);
          },
          promise: function (a, b) {
            function d() {
              --g || e.resolveWith(f, [f]);
            }
            "string" !== typeof a && (a = p);
            a = a || "fx";
            var e = c.Deferred(),
              f = this;
            b = f.length;
            var g = 1,
              h = a + "defer",
              k = a + "queue";
            a += "mark";
            for (var l; b--; )
              if (
                (l =
                  c.data(f[b], h, p, !0) ||
                  ((c.data(f[b], k, p, !0) || c.data(f[b], a, p, !0)) &&
                    c.data(f[b], h, c._Deferred(), !0)))
              )
                g++, l.done(d);
            d();
            return e.promise();
          },
        });
        var Pa = /[\n\t\r]/g,
          qa = /\s+/,
          xb = /\r/g,
          yb = /^(?:button|input)$/i,
          zb = /^(?:button|input|object|select|textarea)$/i,
          Ab = /^a(?:rea)?$/i,
          Qa =
            /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
        c.fn.extend({
          attr: function (a, b) {
            return c.access(this, a, b, !0, c.attr);
          },
          removeAttr: function (a) {
            return this.each(function () {
              c.removeAttr(this, a);
            });
          },
          prop: function (a, b) {
            return c.access(this, a, b, !0, c.prop);
          },
          removeProp: function (a) {
            a = c.propFix[a] || a;
            return this.each(function () {
              try {
                (this[a] = p), delete this[a];
              } catch (b) {}
            });
          },
          addClass: function (a) {
            var b, d;
            if (c.isFunction(a))
              return this.each(function (b) {
                c(this).addClass(a.call(this, b, this.className));
              });
            if (a && "string" === typeof a) {
              var e = a.split(qa);
              var f = 0;
              for (b = this.length; f < b; f++) {
                var g = this[f];
                if (1 === g.nodeType)
                  if (g.className || 1 !== e.length) {
                    var h = " " + g.className + " ";
                    var k = 0;
                    for (d = e.length; k < d; k++)
                      ~h.indexOf(" " + e[k] + " ") || (h += e[k] + " ");
                    g.className = c.trim(h);
                  } else g.className = a;
              }
            }
            return this;
          },
          removeClass: function (a) {
            var b, d;
            if (c.isFunction(a))
              return this.each(function (b) {
                c(this).removeClass(a.call(this, b, this.className));
              });
            if ((a && "string" === typeof a) || a === p) {
              var e = (a || "").split(qa);
              var f = 0;
              for (b = this.length; f < b; f++) {
                var g = this[f];
                if (1 === g.nodeType && g.className)
                  if (a) {
                    var h = (" " + g.className + " ").replace(Pa, " ");
                    var k = 0;
                    for (d = e.length; k < d; k++)
                      h = h.replace(" " + e[k] + " ", " ");
                    g.className = c.trim(h);
                  } else g.className = "";
              }
            }
            return this;
          },
          toggleClass: function (a, b) {
            var d = typeof a,
              e = "boolean" === typeof b;
            return c.isFunction(a)
              ? this.each(function (d) {
                  c(this).toggleClass(a.call(this, d, this.className, b), b);
                })
              : this.each(function () {
                  if ("string" === d)
                    for (
                      var f, g = 0, h = c(this), k = b, l = a.split(qa);
                      (f = l[g++]);

                    )
                      (k = e ? k : !h.hasClass(f)),
                        h[k ? "addClass" : "removeClass"](f);
                  else if ("undefined" === d || "boolean" === d)
                    this.className &&
                      c._data(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === a
                          ? ""
                          : c._data(this, "__className__") || "");
                });
          },
          hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; b < c; b++)
              if (
                1 === this[b].nodeType &&
                -1 < (" " + this[b].className + " ").replace(Pa, " ").indexOf(a)
              )
                return !0;
            return !1;
          },
          val: function (a) {
            var b,
              d,
              e = this[0];
            if (!arguments.length) {
              if (e) {
                if (
                  (b =
                    c.valHooks[e.nodeName.toLowerCase()] ||
                    c.valHooks[e.type]) &&
                  "get" in b &&
                  (d = b.get(e, "value")) !== p
                )
                  return d;
                d = e.value;
                return "string" === typeof d
                  ? d.replace(xb, "")
                  : null == d
                  ? ""
                  : d;
              }
              return p;
            }
            var f = c.isFunction(a);
            return this.each(function (d) {
              var e = c(this);
              1 === this.nodeType &&
                ((d = f ? a.call(this, d, e.val()) : a),
                null == d
                  ? (d = "")
                  : "number" === typeof d
                  ? (d += "")
                  : c.isArray(d) &&
                    (d = c.map(d, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  c.valHooks[this.nodeName.toLowerCase()] ||
                  c.valHooks[this.type]),
                (b && "set" in b && b.set(this, d, "value") !== p) ||
                  (this.value = d));
            });
          },
        });
        c.extend({
          valHooks: {
            option: {
              get: function (a) {
                var b = a.attributes.value;
                return !b || b.specified ? a.value : a.text;
              },
            },
            select: {
              get: function (a) {
                var b = a.selectedIndex,
                  d = [],
                  e = a.options;
                a = "select-one" === a.type;
                if (0 > b) return null;
                for (var f = a ? b : 0, g = a ? b + 1 : e.length; f < g; f++) {
                  var h = e[f];
                  if (
                    !(
                      !h.selected ||
                      (c.support.optDisabled
                        ? h.disabled
                        : null !== h.getAttribute("disabled")) ||
                      (h.parentNode.disabled &&
                        c.nodeName(h.parentNode, "optgroup"))
                    )
                  ) {
                    h = c(h).val();
                    if (a) return h;
                    d.push(h);
                  }
                }
                return a && !d.length && e.length ? c(e[b]).val() : d;
              },
              set: function (a, b) {
                var d = c.makeArray(b);
                c(a)
                  .find("option")
                  .each(function () {
                    this.selected = 0 <= c.inArray(c(this).val(), d);
                  });
                d.length || (a.selectedIndex = -1);
                return d;
              },
            },
          },
          attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
          },
          attrFix: { tabindex: "tabIndex" },
          attr: function (a, b, d, e) {
            var f = a.nodeType;
            if (!a || 3 === f || 8 === f || 2 === f) return p;
            if (e && b in c.attrFn) return c(a)[b](d);
            if (!("getAttribute" in a)) return c.prop(a, b, d);
            var g, h;
            if ((e = 1 !== f || !c.isXMLDoc(a)))
              (b = c.attrFix[b] || b),
                (h = c.attrHooks[b]) || (Qa.test(b) ? (h = Bb) : I && (h = I));
            if (d !== p) {
              if (null === d) return c.removeAttr(a, b), p;
              if (h && "set" in h && e && (g = h.set(a, d, b)) !== p) return g;
              a.setAttribute(b, "" + d);
              return d;
            }
            if (h && "get" in h && e && null !== (g = h.get(a, b))) return g;
            g = a.getAttribute(b);
            return null === g ? p : g;
          },
          removeAttr: function (a, b) {
            var d;
            1 === a.nodeType &&
              ((b = c.attrFix[b] || b),
              c.attr(a, b, ""),
              a.removeAttribute(b),
              Qa.test(b) && (d = c.propFix[b] || b) in a && (a[d] = !1));
          },
          attrHooks: {
            type: {
              set: function (a, b) {
                if (yb.test(a.nodeName) && a.parentNode)
                  c.error("type property can't be changed");
                else if (
                  !c.support.radioValue &&
                  "radio" === b &&
                  c.nodeName(a, "input")
                ) {
                  var d = a.value;
                  a.setAttribute("type", b);
                  d && (a.value = d);
                  return b;
                }
              },
            },
            value: {
              get: function (a, b) {
                return I && c.nodeName(a, "button")
                  ? I.get(a, b)
                  : b in a
                  ? a.value
                  : null;
              },
              set: function (a, b, d) {
                if (I && c.nodeName(a, "button")) return I.set(a, b, d);
                a.value = b;
              },
            },
          },
          propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable",
          },
          prop: function (a, b, d) {
            var e = a.nodeType;
            if (!a || 3 === e || 8 === e || 2 === e) return p;
            var f;
            if (1 !== e || !c.isXMLDoc(a)) {
              b = c.propFix[b] || b;
              var g = c.propHooks[b];
            }
            return d !== p
              ? g && "set" in g && (f = g.set(a, d, b)) !== p
                ? f
                : (a[b] = d)
              : g && "get" in g && null !== (f = g.get(a, b))
              ? f
              : a[b];
          },
          propHooks: {
            tabIndex: {
              get: function (a) {
                var b = a.getAttributeNode("tabindex");
                return b && b.specified
                  ? parseInt(b.value, 10)
                  : zb.test(a.nodeName) || (Ab.test(a.nodeName) && a.href)
                  ? 0
                  : p;
              },
            },
          },
        });
        c.attrHooks.tabIndex = c.propHooks.tabIndex;
        var Bb = {
          get: function (a, b) {
            var d;
            return !0 === c.prop(a, b) ||
              ((d = a.getAttributeNode(b)) && !1 !== d.nodeValue)
              ? b.toLowerCase()
              : p;
          },
          set: function (a, b, d) {
            !1 === b
              ? c.removeAttr(a, d)
              : ((b = c.propFix[d] || d),
                b in a && (a[b] = !0),
                a.setAttribute(d, d.toLowerCase()));
            return d;
          },
        };
        if (!c.support.getSetAttribute) {
          var I = (c.valHooks.button = {
            get: function (a, b) {
              return (a = a.getAttributeNode(b)) && "" !== a.nodeValue
                ? a.nodeValue
                : p;
            },
            set: function (a, b, c) {
              var d = a.getAttributeNode(c);
              d || ((d = q.createAttribute(c)), a.setAttributeNode(d));
              return (d.nodeValue = b + "");
            },
          });
          c.each(["width", "height"], function (a, b) {
            c.attrHooks[b] = c.extend(c.attrHooks[b], {
              set: function (a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c;
              },
            });
          });
        }
        c.support.hrefNormalized ||
          c.each(["href", "src", "width", "height"], function (a, b) {
            c.attrHooks[b] = c.extend(c.attrHooks[b], {
              get: function (a) {
                a = a.getAttribute(b, 2);
                return null === a ? p : a;
              },
            });
          });
        c.support.style ||
          (c.attrHooks.style = {
            get: function (a) {
              return a.style.cssText.toLowerCase() || p;
            },
            set: function (a, b) {
              return (a.style.cssText = "" + b);
            },
          });
        c.support.optSelected ||
          (c.propHooks.selected = c.extend(c.propHooks.selected, {
            get: function (a) {
              if ((a = a.parentNode))
                a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
              return null;
            },
          }));
        c.support.checkOn ||
          c.each(["radio", "checkbox"], function () {
            c.valHooks[this] = {
              get: function (a) {
                return null === a.getAttribute("value") ? "on" : a.value;
              },
            };
          });
        c.each(["radio", "checkbox"], function () {
          c.valHooks[this] = c.extend(c.valHooks[this], {
            set: function (a, b) {
              if (c.isArray(b))
                return (a.checked = 0 <= c.inArray(c(a).val(), b));
            },
          });
        });
        var ja = /\.(.*)$/,
          ra = /^(?:textarea|input|select)$/i,
          jb = /\./g,
          kb = / /g,
          Cb = /[^\w\s.|`]/g,
          Db = function (a) {
            return a.replace(Cb, "\\$\x26");
          };
        c.event = {
          add: function (a, b, d, e) {
            if (3 !== a.nodeType && 8 !== a.nodeType) {
              if (!1 === d) d = L;
              else if (!d) return;
              var f;
              if (d.handler) {
                var g = d;
                d = g.handler;
              }
              d.guid || (d.guid = c.guid++);
              if ((f = c._data(a))) {
                var h = f.events,
                  k = f.handle;
                h || (f.events = h = {});
                k ||
                  (f.handle = k =
                    function (a) {
                      return "undefined" === typeof c ||
                        (a && c.event.triggered === a.type)
                        ? p
                        : c.event.handle.apply(k.elem, arguments);
                    });
                k.elem = a;
                b = b.split(" ");
                for (var l, m = 0, n; (l = b[m++]); ) {
                  f = g ? c.extend({}, g) : { handler: d, data: e };
                  -1 < l.indexOf(".")
                    ? ((n = l.split(".")),
                      (l = n.shift()),
                      (f.namespace = n.slice(0).sort().join(".")))
                    : ((n = []), (f.namespace = ""));
                  f.type = l;
                  f.guid || (f.guid = d.guid);
                  var q = h[l],
                    r = c.event.special[l] || {};
                  q ||
                    ((q = h[l] = []),
                    (r.setup && !1 !== r.setup.call(a, e, n, k)) ||
                      (a.addEventListener
                        ? a.addEventListener(l, k, !1)
                        : a.attachEvent && a.attachEvent("on" + l, k)));
                  r.add &&
                    (r.add.call(a, f),
                    f.handler.guid || (f.handler.guid = d.guid));
                  q.push(f);
                  c.event.global[l] = !0;
                }
                a = null;
              }
            }
          },
          global: {},
          remove: function (a, b, d, e) {
            if (3 !== a.nodeType && 8 !== a.nodeType) {
              !1 === d && (d = L);
              var f,
                g,
                h = 0,
                k,
                l = c.hasData(a) && c._data(a),
                m = l && l.events;
              if (l && m)
                if (
                  (b && b.type && ((d = b.handler), (b = b.type)),
                  !b || ("string" === typeof b && "." === b.charAt(0)))
                )
                  for (f in ((b = b || ""), m)) c.event.remove(a, f + b);
                else {
                  for (b = b.split(" "); (f = b[h++]); ) {
                    var n = f;
                    var q = 0 > f.indexOf(".");
                    var r = [];
                    if (!q) {
                      r = f.split(".");
                      f = r.shift();
                      var B = new RegExp(
                        "(^|\\.)" +
                          c.map(r.slice(0).sort(), Db).join("\\.(?:.*\\.)?") +
                          "(\\.|$)"
                      );
                    }
                    if ((k = m[f]))
                      if (d) {
                        n = c.event.special[f] || {};
                        for (g = e || 0; g < k.length; g++) {
                          var w = k[g];
                          if (d.guid === w.guid) {
                            if (q || B.test(w.namespace))
                              null == e && k.splice(g--, 1),
                                n.remove && n.remove.call(a, w);
                            if (null != e) break;
                          }
                        }
                        if (0 === k.length || (null != e && 1 === k.length))
                          (n.teardown && !1 !== n.teardown.call(a, r)) ||
                            c.removeEvent(a, f, l.handle),
                            delete m[f];
                      } else
                        for (g = 0; g < k.length; g++)
                          if (((w = k[g]), q || B.test(w.namespace)))
                            c.event.remove(a, n, w.handler, g),
                              k.splice(g--, 1);
                  }
                  if (c.isEmptyObject(m)) {
                    if ((b = l.handle)) b.elem = null;
                    delete l.events;
                    delete l.handle;
                    c.isEmptyObject(l) && c.removeData(a, p, !0);
                  }
                }
            }
          },
          customEvent: { getData: !0, setData: !0, changeData: !0 },
          trigger: function (a, b, d, e) {
            var f = a.type || a,
              g = [];
            if (0 <= f.indexOf("!")) {
              f = f.slice(0, -1);
              var h = !0;
            }
            0 <= f.indexOf(".") &&
              ((g = f.split(".")), (f = g.shift()), g.sort());
            if ((d && !c.event.customEvent[f]) || c.event.global[f]) {
              a =
                "object" === typeof a
                  ? a[c.expando]
                    ? a
                    : new c.Event(f, a)
                  : new c.Event(f);
              a.type = f;
              a.exclusive = h;
              a.namespace = g.join(".");
              a.namespace_re = new RegExp(
                "(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)"
              );
              if (e || !d) a.preventDefault(), a.stopPropagation();
              if (!d)
                c.each(c.cache, function () {
                  var d = this[c.expando];
                  d &&
                    d.events &&
                    d.events[f] &&
                    c.event.trigger(a, b, d.handle.elem);
                });
              else if (3 !== d.nodeType && 8 !== d.nodeType) {
                a.result = p;
                a.target = d;
                b = null != b ? c.makeArray(b) : [];
                b.unshift(a);
                g = d;
                e = 0 > f.indexOf(":") ? "on" + f : "";
                do
                  (h = c._data(g, "handle")),
                    (a.currentTarget = g),
                    h && h.apply(g, b),
                    e &&
                      c.acceptData(g) &&
                      g[e] &&
                      !1 === g[e].apply(g, b) &&
                      ((a.result = !1), a.preventDefault()),
                    (g =
                      g.parentNode ||
                      g.ownerDocument ||
                      (g === a.target.ownerDocument && r));
                while (g && !a.isPropagationStopped());
                if (!a.isDefaultPrevented()) {
                  var k;
                  g = c.event.special[f] || {};
                  if (
                    !(
                      (g._default &&
                        !1 !== g._default.call(d.ownerDocument, a)) ||
                      ("click" === f && c.nodeName(d, "a"))
                    ) &&
                    c.acceptData(d)
                  ) {
                    try {
                      e &&
                        d[f] &&
                        ((k = d[e]) && (d[e] = null),
                        (c.event.triggered = f),
                        d[f]());
                    } catch (l) {}
                    k && (d[e] = k);
                    c.event.triggered = p;
                  }
                }
                return a.result;
              }
            }
          },
          handle: function (a) {
            a = c.event.fix(a || r.event);
            var b = ((c._data(this, "events") || {})[a.type] || []).slice(0),
              d = !a.exclusive && !a.namespace,
              e = Array.prototype.slice.call(arguments, 0);
            e[0] = a;
            a.currentTarget = this;
            for (var f = 0, g = b.length; f < g; f++) {
              var h = b[f];
              if (d || a.namespace_re.test(h.namespace))
                if (
                  ((a.handler = h.handler),
                  (a.data = h.data),
                  (a.handleObj = h),
                  (h = h.handler.apply(this, e)),
                  h !== p &&
                    ((a.result = h),
                    !1 === h && (a.preventDefault(), a.stopPropagation())),
                  a.isImmediatePropagationStopped())
                )
                  break;
            }
            return a.result;
          },
          props:
            "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(
              " "
            ),
          fix: function (a) {
            if (a[c.expando]) return a;
            var b = a;
            a = c.Event(b);
            for (var d = this.props.length, e; d; )
              (e = this.props[--d]), (a[e] = b[e]);
            a.target || (a.target = a.srcElement || q);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            !a.relatedTarget &&
              a.fromElement &&
              (a.relatedTarget =
                a.fromElement === a.target ? a.toElement : a.fromElement);
            null == a.pageX &&
              null != a.clientX &&
              ((d = a.target.ownerDocument || q),
              (b = d.documentElement),
              (d = d.body),
              (a.pageX =
                a.clientX +
                ((b && b.scrollLeft) || (d && d.scrollLeft) || 0) -
                ((b && b.clientLeft) || (d && d.clientLeft) || 0)),
              (a.pageY =
                a.clientY +
                ((b && b.scrollTop) || (d && d.scrollTop) || 0) -
                ((b && b.clientTop) || (d && d.clientTop) || 0)));
            null != a.which ||
              (null == a.charCode && null == a.keyCode) ||
              (a.which = null != a.charCode ? a.charCode : a.keyCode);
            !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
            a.which ||
              a.button === p ||
              (a.which =
                a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a;
          },
          guid: 1e8,
          proxy: c.proxy,
          special: {
            ready: { setup: c.bindReady, teardown: c.noop },
            live: {
              add: function (a) {
                c.event.add(
                  this,
                  Y(a.origType, a.selector),
                  c.extend({}, a, { handler: ib, guid: a.handler.guid })
                );
              },
              remove: function (a) {
                c.event.remove(this, Y(a.origType, a.selector), a);
              },
            },
            beforeunload: {
              setup: function (a, b, d) {
                c.isWindow(this) && (this.onbeforeunload = d);
              },
              teardown: function (a, b) {
                this.onbeforeunload === b && (this.onbeforeunload = null);
              },
            },
          },
        };
        c.removeEvent = q.removeEventListener
          ? function (a, b, c) {
              a.removeEventListener && a.removeEventListener(b, c, !1);
            }
          : function (a, b, c) {
              a.detachEvent && a.detachEvent("on" + b, c);
            };
        c.Event = function (a, b) {
          if (!this.preventDefault) return new c.Event(a, b);
          a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                !1 === a.returnValue ||
                (a.getPreventDefault && a.getPreventDefault())
                  ? X
                  : L))
            : (this.type = a);
          b && c.extend(this, b);
          this.timeStamp = c.now();
          this[c.expando] = !0;
        };
        c.Event.prototype = {
          preventDefault: function () {
            this.isDefaultPrevented = X;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
          },
          stopPropagation: function () {
            this.isPropagationStopped = X;
            var a = this.originalEvent;
            a &&
              (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
          },
          stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = X;
            this.stopPropagation();
          },
          isDefaultPrevented: L,
          isPropagationStopped: L,
          isImmediatePropagationStopped: L,
        };
        var Ra = function (a) {
            var b = a.relatedTarget,
              d = !1,
              e = a.type;
            a.type = a.data;
            b !== this &&
              (b && (d = c.contains(this, b)),
              d || (c.event.handle.apply(this, arguments), (a.type = e)));
          },
          Sa = function (a) {
            a.type = a.data;
            c.event.handle.apply(this, arguments);
          };
        c.each(
          { mouseenter: "mouseover", mouseleave: "mouseout" },
          function (a, b) {
            c.event.special[a] = {
              setup: function (d) {
                c.event.add(this, b, d && d.selector ? Sa : Ra, a);
              },
              teardown: function (a) {
                c.event.remove(this, b, a && a.selector ? Sa : Ra);
              },
            };
          }
        );
        c.support.submitBubbles ||
          (c.event.special.submit = {
            setup: function (a, b) {
              if (c.nodeName(this, "form")) return !1;
              c.event.add(this, "click.specialSubmit", function (a) {
                var b = a.target,
                  d =
                    c.nodeName(b, "input") || c.nodeName(b, "button")
                      ? b.type
                      : "";
                ("submit" !== d && "image" !== d) ||
                  !c(b).closest("form").length ||
                  xa("submit", this, arguments);
              });
              c.event.add(this, "keypress.specialSubmit", function (a) {
                var b = a.target,
                  d =
                    c.nodeName(b, "input") || c.nodeName(b, "button")
                      ? b.type
                      : "";
                ("text" !== d && "password" !== d) ||
                  !c(b).closest("form").length ||
                  13 !== a.keyCode ||
                  xa("submit", this, arguments);
              });
            },
            teardown: function (a) {
              c.event.remove(this, ".specialSubmit");
            },
          });
        if (!c.support.changeBubbles) {
          var Ta = function (a) {
              var b = c.nodeName(a, "input") ? a.type : "",
                d = a.value;
              "radio" === b || "checkbox" === b
                ? (d = a.checked)
                : "select-multiple" === b
                ? (d =
                    -1 < a.selectedIndex
                      ? c
                          .map(a.options, function (a) {
                            return a.selected;
                          })
                          .join("-")
                      : "")
                : c.nodeName(a, "select") && (d = a.selectedIndex);
              return d;
            },
            da = function (a, b) {
              var d = a.target;
              if (ra.test(d.nodeName) && !d.readOnly) {
                var e = c._data(d, "_change_data");
                var f = Ta(d);
                ("focusout" === a.type && "radio" === d.type) ||
                  c._data(d, "_change_data", f);
                e === p ||
                  f === e ||
                  (null == e && !f) ||
                  ((a.type = "change"),
                  (a.liveFired = p),
                  c.event.trigger(a, b, d));
              }
            };
          c.event.special.change = {
            filters: {
              focusout: da,
              beforedeactivate: da,
              click: function (a) {
                var b = a.target,
                  d = c.nodeName(b, "input") ? b.type : "";
                ("radio" === d ||
                  "checkbox" === d ||
                  c.nodeName(b, "select")) &&
                  da.call(this, a);
              },
              keydown: function (a) {
                var b = a.target,
                  d = c.nodeName(b, "input") ? b.type : "";
                ((13 === a.keyCode && !c.nodeName(b, "textarea")) ||
                  (32 === a.keyCode && ("checkbox" === d || "radio" === d)) ||
                  "select-multiple" === d) &&
                  da.call(this, a);
              },
              beforeactivate: function (a) {
                a = a.target;
                c._data(a, "_change_data", Ta(a));
              },
            },
            setup: function (a, b) {
              if ("file" === this.type) return !1;
              for (var d in ea) c.event.add(this, d + ".specialChange", ea[d]);
              return ra.test(this.nodeName);
            },
            teardown: function (a) {
              c.event.remove(this, ".specialChange");
              return ra.test(this.nodeName);
            },
          };
          var ea = c.event.special.change.filters;
          ea.focus = ea.beforeactivate;
        }
        c.support.focusinBubbles ||
          c.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
            function d(a) {
              var d = c.event.fix(a);
              d.type = b;
              d.originalEvent = {};
              c.event.trigger(d, null, d.target);
              d.isDefaultPrevented() && a.preventDefault();
            }
            var e = 0;
            c.event.special[b] = {
              setup: function () {
                0 === e++ && q.addEventListener(a, d, !0);
              },
              teardown: function () {
                0 === --e && q.removeEventListener(a, d, !0);
              },
            };
          });
        c.each(["bind", "one"], function (a, b) {
          c.fn[b] = function (a, e, f) {
            if ("object" === typeof a) {
              for (var d in a) this[b](d, e, a[d], f);
              return this;
            }
            if (2 === arguments.length || !1 === e) (f = e), (e = p);
            if ("one" === b) {
              var h = function (a) {
                c(this).unbind(a, h);
                return f.apply(this, arguments);
              };
              h.guid = f.guid || c.guid++;
            } else h = f;
            if ("unload" === a && "one" !== b) this.one(a, e, f);
            else {
              d = 0;
              for (var k = this.length; d < k; d++)
                c.event.add(this[d], a, h, e);
            }
            return this;
          };
        });
        c.fn.extend({
          unbind: function (a, b) {
            if ("object" !== typeof a || a.preventDefault)
              for (var d = 0, e = this.length; d < e; d++)
                c.event.remove(this[d], a, b);
            else for (d in a) this.unbind(d, a[d]);
            return this;
          },
          delegate: function (a, b, c, e) {
            return this.live(b, c, e, a);
          },
          undelegate: function (a, b, c) {
            return 0 === arguments.length
              ? this.unbind("live")
              : this.die(b, null, c, a);
          },
          trigger: function (a, b) {
            return this.each(function () {
              c.event.trigger(a, b, this);
            });
          },
          triggerHandler: function (a, b) {
            if (this[0]) return c.event.trigger(a, b, this[0], !0);
          },
          toggle: function (a) {
            var b = arguments,
              d = a.guid || c.guid++,
              e = 0,
              f = function (d) {
                var f = (c.data(this, "lastToggle" + a.guid) || 0) % e;
                c.data(this, "lastToggle" + a.guid, f + 1);
                d.preventDefault();
                return b[f].apply(this, arguments) || !1;
              };
            for (f.guid = d; e < b.length; ) b[e++].guid = d;
            return this.click(f);
          },
          hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
          },
        });
        var sa = {
          focus: "focusin",
          blur: "focusout",
          mouseenter: "mouseover",
          mouseleave: "mouseout",
        };
        c.each(["live", "die"], function (a, b) {
          c.fn[b] = function (a, e, f, g) {
            var d = 0,
              k = g || this.selector,
              l = g ? this : c(this.context);
            if ("object" === typeof a && !a.preventDefault) {
              for (m in a) l[b](m, e, a[m], k);
              return this;
            }
            if ("die" === b && !a && g && "." === g.charAt(0))
              return l.unbind(g), this;
            if (!1 === e || c.isFunction(e)) (f = e || L), (e = p);
            for (a = (a || "").split(" "); null != (g = a[d++]); ) {
              var m = ja.exec(g);
              var n = "";
              m && ((n = m[0]), (g = g.replace(ja, "")));
              if ("hover" === g) a.push("mouseenter" + n, "mouseleave" + n);
              else if (
                ((m = g),
                sa[g] ? (a.push(sa[g] + n), (g += n)) : (g = (sa[g] || g) + n),
                "live" === b)
              ) {
                n = 0;
                for (var q = l.length; n < q; n++)
                  c.event.add(l[n], "live." + Y(g, k), {
                    data: e,
                    selector: k,
                    handler: f,
                    origType: g,
                    origHandler: f,
                    preType: m,
                  });
              } else l.unbind("live." + Y(g, k), f);
            }
            return this;
          };
        });
        c.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(
            " "
          ),
          function (a, b) {
            c.fn[b] = function (a, c) {
              null == c && ((c = a), (a = null));
              return 0 < arguments.length
                ? this.bind(b, a, c)
                : this.trigger(b);
            };
            c.attrFn && (c.attrFn[b] = !0);
          }
        );
        (function () {
          function a(a, b, c, d, e, f) {
            e = 0;
            for (var t = d.length; e < t; e++) {
              var g = d[e];
              if (g) {
                var h = !1;
                for (g = g[a]; g; ) {
                  if (g.sizcache === c) {
                    h = d[g.sizset];
                    break;
                  }
                  1 !== g.nodeType || f || ((g.sizcache = c), (g.sizset = e));
                  if (g.nodeName.toLowerCase() === b) {
                    h = g;
                    break;
                  }
                  g = g[a];
                }
                d[e] = h;
              }
            }
          }
          function b(a, b, c, d, e, f) {
            e = 0;
            for (var t = d.length; e < t; e++) {
              var g = d[e];
              if (g) {
                var h = !1;
                for (g = g[a]; g; ) {
                  if (g.sizcache === c) {
                    h = d[g.sizset];
                    break;
                  }
                  if (1 === g.nodeType)
                    if (
                      (f || ((g.sizcache = c), (g.sizset = e)),
                      "string" !== typeof b)
                    ) {
                      if (g === b) {
                        h = !0;
                        break;
                      }
                    } else if (0 < m.filter(b, [g]).length) {
                      h = g;
                      break;
                    }
                  g = g[a];
                }
                d[e] = h;
              }
            }
          }
          var d =
              /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            e = 0,
            f = Object.prototype.toString,
            g = !1,
            h = !0,
            k = /\\/g,
            l = /\W/;
          [0, 0].sort(function () {
            h = !1;
            return 0;
          });
          var m = function (a, b, c, e) {
            c = c || [];
            var g = (b = b || q);
            if (1 !== b.nodeType && 9 !== b.nodeType) return [];
            if (!a || "string" !== typeof a) return c;
            var t,
              h,
              x,
              k = !0,
              l = m.isXML(b),
              u = [],
              D = a;
            do
              if ((d.exec(""), (t = d.exec(D))))
                if (((D = t[3]), u.push(t[1]), t[2])) {
                  var p = t[3];
                  break;
                }
            while (t);
            if (1 < u.length && r.exec(a))
              if (2 === u.length && n.relative[u[0]]) var y = v(u[0] + u[1], b);
              else
                for (y = n.relative[u[0]] ? [b] : m(u.shift(), b); u.length; )
                  (a = u.shift()),
                    n.relative[a] && (a += u.shift()),
                    (y = v(a, y));
            else if (
              (!e &&
                1 < u.length &&
                9 === b.nodeType &&
                !l &&
                n.match.ID.test(u[0]) &&
                !n.match.ID.test(u[u.length - 1]) &&
                ((t = m.find(u.shift(), b, l)),
                (b = t.expr ? m.filter(t.expr, t.set)[0] : t.set[0])),
              b)
            )
              for (
                t = e
                  ? { expr: u.pop(), set: w(e) }
                  : m.find(
                      u.pop(),
                      1 !== u.length ||
                        ("~" !== u[0] && "+" !== u[0]) ||
                        !b.parentNode
                        ? b
                        : b.parentNode,
                      l
                    ),
                  y = t.expr ? m.filter(t.expr, t.set) : t.set,
                  0 < u.length ? (h = w(y)) : (k = !1);
                u.length;

              )
                (t = x = u.pop()),
                  n.relative[x] ? (t = u.pop()) : (x = ""),
                  null == t && (t = b),
                  n.relative[x](h, t, l);
            else h = [];
            h || (h = y);
            h || m.error(x || a);
            if ("[object Array]" === f.call(h))
              if (k)
                if (b && 1 === b.nodeType)
                  for (a = 0; null != h[a]; a++)
                    h[a] &&
                      (!0 === h[a] ||
                        (1 === h[a].nodeType && m.contains(b, h[a]))) &&
                      c.push(y[a]);
                else
                  for (a = 0; null != h[a]; a++)
                    h[a] && 1 === h[a].nodeType && c.push(y[a]);
              else c.push.apply(c, h);
            else w(h, c);
            p && (m(p, g, c, e), m.uniqueSort(c));
            return c;
          };
          m.uniqueSort = function (a) {
            if (E && ((g = h), a.sort(E), g))
              for (var b = 1; b < a.length; b++)
                a[b] === a[b - 1] && a.splice(b--, 1);
            return a;
          };
          m.matches = function (a, b) {
            return m(a, null, null, b);
          };
          m.matchesSelector = function (a, b) {
            return 0 < m(b, null, null, [a]).length;
          };
          m.find = function (a, b, c) {
            if (!a) return [];
            for (var d = 0, e = n.order.length; d < e; d++) {
              var f,
                g = n.order[d];
              if ((f = n.leftMatch[g].exec(a))) {
                var t = f[1];
                f.splice(1, 1);
                if ("\\" !== t.substr(t.length - 1)) {
                  f[1] = (f[1] || "").replace(k, "");
                  var h = n.find[g](f, b, c);
                  if (null != h) {
                    a = a.replace(n.match[g], "");
                    break;
                  }
                }
              }
            }
            h ||
              (h =
                "undefined" !== typeof b.getElementsByTagName
                  ? b.getElementsByTagName("*")
                  : []);
            return { set: h, expr: a };
          };
          m.filter = function (a, b, c, d) {
            for (
              var e, f, g = a, t = [], h = b, x = b && b[0] && m.isXML(b[0]);
              a && b.length;

            ) {
              for (var k in n.filter)
                if (null != (e = n.leftMatch[k].exec(a)) && e[2]) {
                  var u,
                    l = n.filter[k];
                  var D = e[1];
                  f = !1;
                  e.splice(1, 1);
                  if ("\\" !== D.substr(D.length - 1)) {
                    h === t && (t = []);
                    if (n.preFilter[k])
                      if (((e = n.preFilter[k](e, h, c, t, d, x)), !e))
                        f = u = !0;
                      else if (!0 === e) continue;
                    if (e)
                      for (var q = 0; null != (D = h[q]); q++)
                        if (D) {
                          u = l(D, e, q, h);
                          var r = d ^ !!u;
                          c && null != u
                            ? r
                              ? (f = !0)
                              : (h[q] = !1)
                            : r && (t.push(D), (f = !0));
                        }
                    if (u !== p) {
                      c || (h = t);
                      a = a.replace(n.match[k], "");
                      if (!f) return [];
                      break;
                    }
                  }
                }
              if (a === g)
                if (null == f) m.error(a);
                else break;
              g = a;
            }
            return h;
          };
          m.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a;
          };
          var n = (m.selectors = {
              order: ["ID", "NAME", "TAG"],
              match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD:
                  /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO:
                  /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
              },
              leftMatch: {},
              attrMap: { class: "className", for: "htmlFor" },
              attrHandle: {
                href: function (a) {
                  return a.getAttribute("href");
                },
                type: function (a) {
                  return a.getAttribute("type");
                },
              },
              relative: {
                "+": function (a, b) {
                  var c = "string" === typeof b,
                    d = c && !l.test(b);
                  c = c && !d;
                  d && (b = b.toLowerCase());
                  d = 0;
                  for (var e = a.length, f; d < e; d++)
                    if ((f = a[d])) {
                      for (; (f = f.previousSibling) && 1 !== f.nodeType; );
                      a[d] =
                        c || (f && f.nodeName.toLowerCase() === b)
                          ? f || !1
                          : f === b;
                    }
                  c && m.filter(b, a, !0);
                },
                "\x3e": function (a, b) {
                  var c,
                    d = "string" === typeof b,
                    e = 0,
                    f = a.length;
                  if (d && !l.test(b))
                    for (b = b.toLowerCase(); e < f; e++) {
                      if ((c = a[e]))
                        (c = c.parentNode),
                          (a[e] = c.nodeName.toLowerCase() === b ? c : !1);
                    }
                  else {
                    for (; e < f; e++)
                      (c = a[e]) &&
                        (a[e] = d ? c.parentNode : c.parentNode === b);
                    d && m.filter(b, a, !0);
                  }
                },
                "": function (c, d, f) {
                  var g = e++,
                    h = b;
                  if ("string" === typeof d && !l.test(d)) {
                    var t = (d = d.toLowerCase());
                    h = a;
                  }
                  h("parentNode", d, g, c, t, f);
                },
                "~": function (c, d, f) {
                  var g = e++,
                    h = b;
                  if ("string" === typeof d && !l.test(d)) {
                    var t = (d = d.toLowerCase());
                    h = a;
                  }
                  h("previousSibling", d, g, c, t, f);
                },
              },
              find: {
                ID: function (a, b, c) {
                  if ("undefined" !== typeof b.getElementById && !c)
                    return (a = b.getElementById(a[1])) && a.parentNode
                      ? [a]
                      : [];
                },
                NAME: function (a, b) {
                  if ("undefined" !== typeof b.getElementsByName) {
                    var c = [];
                    b = b.getElementsByName(a[1]);
                    for (var d = 0, e = b.length; d < e; d++)
                      b[d].getAttribute("name") === a[1] && c.push(b[d]);
                    return 0 === c.length ? null : c;
                  }
                },
                TAG: function (a, b) {
                  if ("undefined" !== typeof b.getElementsByTagName)
                    return b.getElementsByTagName(a[1]);
                },
              },
              preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                  a = " " + a[1].replace(k, "") + " ";
                  if (f) return a;
                  f = 0;
                  for (var g; null != (g = b[f]); f++)
                    g &&
                      (e ^
                      (g.className &&
                        0 <=
                          (" " + g.className + " ")
                            .replace(/[\t\n\r]/g, " ")
                            .indexOf(a))
                        ? c || d.push(g)
                        : c && (b[f] = !1));
                  return !1;
                },
                ID: function (a) {
                  return a[1].replace(k, "");
                },
                TAG: function (a, b) {
                  return a[1].replace(k, "").toLowerCase();
                },
                CHILD: function (a) {
                  if ("nth" === a[1]) {
                    a[2] || m.error(a[0]);
                    a[2] = a[2].replace(/^\+|\s*/g, "");
                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                      ("even" === a[2] && "2n") ||
                        ("odd" === a[2] && "2n+1") ||
                        (!/\D/.test(a[2]) && "0n+" + a[2]) ||
                        a[2]
                    );
                    a[2] = b[1] + (b[2] || 1) - 0;
                    a[3] = b[3] - 0;
                  } else a[2] && m.error(a[0]);
                  a[0] = e++;
                  return a;
                },
                ATTR: function (a, b, c, d, e, f) {
                  b = a[1] = a[1].replace(k, "");
                  !f && n.attrMap[b] && (a[1] = n.attrMap[b]);
                  a[4] = (a[4] || a[5] || "").replace(k, "");
                  "~\x3d" === a[2] && (a[4] = " " + a[4] + " ");
                  return a;
                },
                PSEUDO: function (a, b, c, e, f) {
                  if ("not" === a[1])
                    if (1 < (d.exec(a[3]) || "").length || /^\w/.test(a[3]))
                      a[3] = m(a[3], null, null, b);
                    else
                      return (
                        (a = m.filter(a[3], b, c, 1 ^ f)),
                        c || e.push.apply(e, a),
                        !1
                      );
                  else if (n.match.POS.test(a[0]) || n.match.CHILD.test(a[0]))
                    return !0;
                  return a;
                },
                POS: function (a) {
                  a.unshift(!0);
                  return a;
                },
              },
              filters: {
                enabled: function (a) {
                  return !1 === a.disabled && "hidden" !== a.type;
                },
                disabled: function (a) {
                  return !0 === a.disabled;
                },
                checked: function (a) {
                  return !0 === a.checked;
                },
                selected: function (a) {
                  a.parentNode && a.parentNode.selectedIndex;
                  return !0 === a.selected;
                },
                parent: function (a) {
                  return !!a.firstChild;
                },
                empty: function (a) {
                  return !a.firstChild;
                },
                has: function (a, b, c) {
                  return !!m(c[3], a).length;
                },
                header: function (a) {
                  return /h\d/i.test(a.nodeName);
                },
                text: function (a) {
                  var b = a.getAttribute("type"),
                    c = a.type;
                  return (
                    "input" === a.nodeName.toLowerCase() &&
                    "text" === c &&
                    (b === c || null === b)
                  );
                },
                radio: function (a) {
                  return (
                    "input" === a.nodeName.toLowerCase() && "radio" === a.type
                  );
                },
                checkbox: function (a) {
                  return (
                    "input" === a.nodeName.toLowerCase() &&
                    "checkbox" === a.type
                  );
                },
                file: function (a) {
                  return (
                    "input" === a.nodeName.toLowerCase() && "file" === a.type
                  );
                },
                password: function (a) {
                  return (
                    "input" === a.nodeName.toLowerCase() &&
                    "password" === a.type
                  );
                },
                submit: function (a) {
                  var b = a.nodeName.toLowerCase();
                  return (
                    ("input" === b || "button" === b) && "submit" === a.type
                  );
                },
                image: function (a) {
                  return (
                    "input" === a.nodeName.toLowerCase() && "image" === a.type
                  );
                },
                reset: function (a) {
                  var b = a.nodeName.toLowerCase();
                  return (
                    ("input" === b || "button" === b) && "reset" === a.type
                  );
                },
                button: function (a) {
                  var b = a.nodeName.toLowerCase();
                  return (
                    ("input" === b && "button" === a.type) || "button" === b
                  );
                },
                input: function (a) {
                  return /input|select|textarea|button/i.test(a.nodeName);
                },
                focus: function (a) {
                  return a === a.ownerDocument.activeElement;
                },
              },
              setFilters: {
                first: function (a, b) {
                  return 0 === b;
                },
                last: function (a, b, c, d) {
                  return b === d.length - 1;
                },
                even: function (a, b) {
                  return 0 === b % 2;
                },
                odd: function (a, b) {
                  return 1 === b % 2;
                },
                lt: function (a, b, c) {
                  return b < c[3] - 0;
                },
                gt: function (a, b, c) {
                  return b > c[3] - 0;
                },
                nth: function (a, b, c) {
                  return c[3] - 0 === b;
                },
                eq: function (a, b, c) {
                  return c[3] - 0 === b;
                },
              },
              filter: {
                PSEUDO: function (a, b, c, d) {
                  var e = b[1],
                    f = n.filters[e];
                  if (f) return f(a, c, b, d);
                  if ("contains" === e)
                    return (
                      0 <=
                      (
                        a.textContent ||
                        a.innerText ||
                        m.getText([a]) ||
                        ""
                      ).indexOf(b[3])
                    );
                  if ("not" === e) {
                    b = b[3];
                    c = 0;
                    for (d = b.length; c < d; c++) if (b[c] === a) return !1;
                    return !0;
                  }
                  m.error(e);
                },
                CHILD: function (a, b) {
                  var c = b[1],
                    d = a;
                  switch (c) {
                    case "only":
                    case "first":
                      for (; (d = d.previousSibling); )
                        if (1 === d.nodeType) return !1;
                      if ("first" === c) return !0;
                      d = a;
                    case "last":
                      for (; (d = d.nextSibling); )
                        if (1 === d.nodeType) return !1;
                      return !0;
                    case "nth":
                      c = b[2];
                      var e = b[3];
                      if (1 === c && 0 === e) return !0;
                      b = b[0];
                      var f = a.parentNode;
                      if (f && (f.sizcache !== b || !a.nodeIndex)) {
                        var g = 0;
                        for (d = f.firstChild; d; d = d.nextSibling)
                          1 === d.nodeType && (d.nodeIndex = ++g);
                        f.sizcache = b;
                      }
                      a = a.nodeIndex - e;
                      return 0 === c ? 0 === a : 0 === a % c && 0 <= a / c;
                  }
                },
                ID: function (a, b) {
                  return 1 === a.nodeType && a.getAttribute("id") === b;
                },
                TAG: function (a, b) {
                  return (
                    ("*" === b && 1 === a.nodeType) ||
                    a.nodeName.toLowerCase() === b
                  );
                },
                CLASS: function (a, b) {
                  return (
                    -1 <
                    (
                      " " +
                      (a.className || a.getAttribute("class")) +
                      " "
                    ).indexOf(b)
                  );
                },
                ATTR: function (a, b) {
                  var c = b[1];
                  a = n.attrHandle[c]
                    ? n.attrHandle[c](a)
                    : null != a[c]
                    ? a[c]
                    : a.getAttribute(c);
                  c = a + "";
                  var d = b[2];
                  b = b[4];
                  return null == a
                    ? "!\x3d" === d
                    : "\x3d" === d
                    ? c === b
                    : "*\x3d" === d
                    ? 0 <= c.indexOf(b)
                    : "~\x3d" === d
                    ? 0 <= (" " + c + " ").indexOf(b)
                    : b
                    ? "!\x3d" === d
                      ? c !== b
                      : "^\x3d" === d
                      ? 0 === c.indexOf(b)
                      : "$\x3d" === d
                      ? c.substr(c.length - b.length) === b
                      : "|\x3d" === d
                      ? c === b || c.substr(0, b.length + 1) === b + "-"
                      : !1
                    : c && !1 !== a;
                },
                POS: function (a, b, c, d) {
                  var e = n.setFilters[b[2]];
                  if (e) return e(a, c, b, d);
                },
              },
            }),
            r = n.match.POS,
            y = function (a, b) {
              return "\\" + (b - 0 + 1);
            },
            B;
          for (B in n.match)
            (n.match[B] = new RegExp(
              n.match[B].source + /(?![^\[]*\])(?![^\(]*\))/.source
            )),
              (n.leftMatch[B] = new RegExp(
                /(^(?:.|\r|\n)*?)/.source +
                  n.match[B].source.replace(/\\(\d+)/g, y)
              ));
          var w = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            return b ? (b.push.apply(b, a), b) : a;
          };
          try {
            Array.prototype.slice.call(q.documentElement.childNodes, 0)[0]
              .nodeType;
          } catch (t) {
            w = function (a, b) {
              var c = 0;
              b = b || [];
              if ("[object Array]" === f.call(a))
                Array.prototype.push.apply(b, a);
              else if ("number" === typeof a.length)
                for (var d = a.length; c < d; c++) b.push(a[c]);
              else for (; a[c]; c++) b.push(a[c]);
              return b;
            };
          }
          if (q.documentElement.compareDocumentPosition)
            var E = function (a, b) {
              return a === b
                ? ((g = !0), 0)
                : a.compareDocumentPosition && b.compareDocumentPosition
                ? a.compareDocumentPosition(b) & 4
                  ? -1
                  : 1
                : a.compareDocumentPosition
                ? -1
                : 1;
            };
          else {
            E = function (a, b) {
              if (a === b) return (g = !0), 0;
              if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
              var c = [],
                d = [];
              var e = a.parentNode;
              var f = b.parentNode;
              var h = e;
              if (e === f) return z(a, b);
              if (!e) return -1;
              if (!f) return 1;
              for (; h; ) c.unshift(h), (h = h.parentNode);
              for (h = f; h; ) d.unshift(h), (h = h.parentNode);
              e = c.length;
              f = d.length;
              for (h = 0; h < e && h < f; h++)
                if (c[h] !== d[h]) return z(c[h], d[h]);
              return h === e ? z(a, d[h], -1) : z(c[h], b, 1);
            };
            var z = function (a, b, c) {
              if (a === b) return c;
              for (a = a.nextSibling; a; ) {
                if (a === b) return -1;
                a = a.nextSibling;
              }
              return 1;
            };
          }
          m.getText = function (a) {
            for (var b = "", c, d = 0; a[d]; d++)
              (c = a[d]),
                3 === c.nodeType || 4 === c.nodeType
                  ? (b += c.nodeValue)
                  : 8 !== c.nodeType && (b += m.getText(c.childNodes));
            return b;
          };
          (function () {
            var a = q.createElement("div"),
              b = "script" + new Date().getTime(),
              c = q.documentElement;
            a.innerHTML = "\x3ca name\x3d'" + b + "'/\x3e";
            c.insertBefore(a, c.firstChild);
            q.getElementById(b) &&
              ((n.find.ID = function (a, b, c) {
                if ("undefined" !== typeof b.getElementById && !c)
                  return (b = b.getElementById(a[1]))
                    ? b.id === a[1] ||
                      ("undefined" !== typeof b.getAttributeNode &&
                        b.getAttributeNode("id").nodeValue === a[1])
                      ? [b]
                      : p
                    : [];
              }),
              (n.filter.ID = function (a, b) {
                var c =
                  "undefined" !== typeof a.getAttributeNode &&
                  a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b;
              }));
            c.removeChild(a);
            c = a = null;
          })();
          (function () {
            var a = q.createElement("div");
            a.appendChild(q.createComment(""));
            0 < a.getElementsByTagName("*").length &&
              (n.find.TAG = function (a, b) {
                b = b.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                  a = [];
                  for (var c = 0; b[c]; c++)
                    1 === b[c].nodeType && a.push(b[c]);
                  b = a;
                }
                return b;
              });
            a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
            a.firstChild &&
              "undefined" !== typeof a.firstChild.getAttribute &&
              "#" !== a.firstChild.getAttribute("href") &&
              (n.attrHandle.href = function (a) {
                return a.getAttribute("href", 2);
              });
            a = null;
          })();
          q.querySelectorAll &&
            (function () {
              var a = m,
                b = q.createElement("div");
              b.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
              if (
                !b.querySelectorAll ||
                0 !== b.querySelectorAll(".TEST").length
              ) {
                m = function (b, c, d, e) {
                  c = c || q;
                  if (!e && !m.isXML(c)) {
                    var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                      if (f[1]) return w(c.getElementsByTagName(b), d);
                      if (f[2] && n.find.CLASS && c.getElementsByClassName)
                        return w(c.getElementsByClassName(f[2]), d);
                    }
                    if (9 === c.nodeType) {
                      if ("body" === b && c.body) return w([c.body], d);
                      if (f && f[3]) {
                        var g = c.getElementById(f[3]);
                        if (g && g.parentNode) {
                          if (g.id === f[3]) return w([g], d);
                        } else return w([], d);
                      }
                      try {
                        return w(c.querySelectorAll(b), d);
                      } catch (A) {}
                    } else if (
                      1 === c.nodeType &&
                      "object" !== c.nodeName.toLowerCase()
                    ) {
                      f = c;
                      var h = (g = c.getAttribute("id")) || "__sizzle__",
                        k = c.parentNode,
                        l = /^\s*[+~]/.test(b);
                      g
                        ? (h = h.replace(/'/g, "\\$\x26"))
                        : c.setAttribute("id", h);
                      l && k && (c = c.parentNode);
                      try {
                        if (!l || k)
                          return w(
                            c.querySelectorAll("[id\x3d'" + h + "'] " + b),
                            d
                          );
                      } catch (A) {
                      } finally {
                        g || f.removeAttribute("id");
                      }
                    }
                  }
                  return a(b, c, d, e);
                };
                for (var c in a) m[c] = a[c];
                b = null;
              }
            })();
          (function () {
            var a = q.documentElement,
              b =
                a.matchesSelector ||
                a.mozMatchesSelector ||
                a.webkitMatchesSelector ||
                a.msMatchesSelector;
            if (b) {
              var c = !b.call(q.createElement("div"), "div"),
                d = !1;
              try {
                b.call(q.documentElement, "[test!\x3d'']:sizzle");
              } catch (P) {
                d = !0;
              }
              m.matchesSelector = function (a, e) {
                e = e.replace(/=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
                if (!m.isXML(a))
                  try {
                    if (d || (!n.match.PSEUDO.test(e) && !/!=/.test(e))) {
                      var f = b.call(a, e);
                      if (f || !c || (a.document && 11 !== a.document.nodeType))
                        return f;
                    }
                  } catch (ca) {}
                return 0 < m(e, null, null, [a]).length;
              };
            }
          })();
          (function () {
            var a = q.createElement("div");
            a.innerHTML =
              "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
            a.getElementsByClassName &&
              0 !== a.getElementsByClassName("e").length &&
              ((a.lastChild.className = "e"),
              1 !== a.getElementsByClassName("e").length &&
                (n.order.splice(1, 0, "CLASS"),
                (n.find.CLASS = function (a, b, c) {
                  if ("undefined" !== typeof b.getElementsByClassName && !c)
                    return b.getElementsByClassName(a[1]);
                }),
                (a = null)));
          })();
          m.contains = q.documentElement.contains
            ? function (a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0);
              }
            : q.documentElement.compareDocumentPosition
            ? function (a, b) {
                return !!(a.compareDocumentPosition(b) & 16);
              }
            : function () {
                return !1;
              };
          m.isXML = function (a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement)
              ? "HTML" !== a.nodeName
              : !1;
          };
          var v = function (a, b) {
            var c,
              d = [],
              e = "";
            for (b = b.nodeType ? [b] : b; (c = n.match.PSEUDO.exec(a)); )
              (e += c[0]), (a = a.replace(n.match.PSEUDO, ""));
            a = n.relative[a] ? a + "*" : a;
            c = 0;
            for (var f = b.length; c < f; c++) m(a, b[c], d);
            return m.filter(e, d);
          };
          c.find = m;
          c.expr = m.selectors;
          c.expr[":"] = c.expr.filters;
          c.unique = m.uniqueSort;
          c.text = m.getText;
          c.isXMLDoc = m.isXML;
          c.contains = m.contains;
        })();
        var Eb = /Until$/,
          Fb = /^(?:parents|prevUntil|prevAll)/,
          Gb = /,/,
          lb = /^.[^:#\[\.,]*$/,
          Hb = Array.prototype.slice,
          Ua = c.expr.match.POS,
          Ib = { children: !0, contents: !0, next: !0, prev: !0 };
        c.fn.extend({
          find: function (a) {
            var b = this,
              d;
            if ("string" !== typeof a)
              return c(a).filter(function () {
                h = 0;
                for (d = b.length; h < d; h++)
                  if (c.contains(b[h], this)) return !0;
              });
            var e = this.pushStack("", "find", a),
              f,
              g;
            var h = 0;
            for (d = this.length; h < d; h++) {
              var k = e.length;
              c.find(a, this[h], e);
              if (0 < h)
                for (f = k; f < e.length; f++)
                  for (g = 0; g < k; g++)
                    if (e[g] === e[f]) {
                      e.splice(f--, 1);
                      break;
                    }
            }
            return e;
          },
          has: function (a) {
            var b = c(a);
            return this.filter(function () {
              for (var a = 0, e = b.length; a < e; a++)
                if (c.contains(this, b[a])) return !0;
            });
          },
          not: function (a) {
            return this.pushStack(za(this, a, !1), "not", a);
          },
          filter: function (a) {
            return this.pushStack(za(this, a, !0), "filter", a);
          },
          is: function (a) {
            return (
              !!a &&
              ("string" === typeof a
                ? 0 < c.filter(a, this).length
                : 0 < this.filter(a).length)
            );
          },
          closest: function (a, b) {
            var d = [],
              e,
              f = this[0];
            if (c.isArray(a)) {
              var g = {},
                h = 1;
              if (f && a.length) {
                var k = 0;
                for (e = a.length; k < e; k++) {
                  var l = a[k];
                  g[l] || (g[l] = Ua.test(l) ? c(l, b || this.context) : l);
                }
                for (; f && f.ownerDocument && f !== b; ) {
                  for (l in g)
                    (a = g[l]),
                      (a.jquery ? -1 < a.index(f) : c(f).is(a)) &&
                        d.push({ selector: l, elem: f, level: h });
                  f = f.parentNode;
                  h++;
                }
              }
              return d;
            }
            l =
              Ua.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0;
            k = 0;
            for (e = this.length; k < e; k++)
              for (f = this[k]; f; )
                if (l ? -1 < l.index(f) : c.find.matchesSelector(f, a)) {
                  d.push(f);
                  break;
                } else if (
                  ((f = f.parentNode),
                  !f || !f.ownerDocument || f === b || 11 === f.nodeType)
                )
                  break;
            d = 1 < d.length ? c.unique(d) : d;
            return this.pushStack(d, "closest", a);
          },
          index: function (a) {
            return a
              ? "string" === typeof a
                ? c.inArray(this[0], c(a))
                : c.inArray(a.jquery ? a[0] : a, this)
              : this[0] && this[0].parentNode
              ? this.prevAll().length
              : -1;
          },
          add: function (a, b) {
            a =
              "string" === typeof a
                ? c(a, b)
                : c.makeArray(a && a.nodeType ? [a] : a);
            b = c.merge(this.get(), a);
            return this.pushStack(ya(a[0]) || ya(b[0]) ? b : c.unique(b));
          },
          andSelf: function () {
            return this.add(this.prevObject);
          },
        });
        c.each(
          {
            parent: function (a) {
              return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
            },
            parents: function (a) {
              return c.dir(a, "parentNode");
            },
            parentsUntil: function (a, b, d) {
              return c.dir(a, "parentNode", d);
            },
            next: function (a) {
              return c.nth(a, 2, "nextSibling");
            },
            prev: function (a) {
              return c.nth(a, 2, "previousSibling");
            },
            nextAll: function (a) {
              return c.dir(a, "nextSibling");
            },
            prevAll: function (a) {
              return c.dir(a, "previousSibling");
            },
            nextUntil: function (a, b, d) {
              return c.dir(a, "nextSibling", d);
            },
            prevUntil: function (a, b, d) {
              return c.dir(a, "previousSibling", d);
            },
            siblings: function (a) {
              return c.sibling(a.parentNode.firstChild, a);
            },
            children: function (a) {
              return c.sibling(a.firstChild);
            },
            contents: function (a) {
              return c.nodeName(a, "iframe")
                ? a.contentDocument || a.contentWindow.document
                : c.makeArray(a.childNodes);
            },
          },
          function (a, b) {
            c.fn[a] = function (d, e) {
              var f = c.map(this, b, d),
                g = Hb.call(arguments);
              Eb.test(a) || (e = d);
              e && "string" === typeof e && (f = c.filter(e, f));
              f = 1 < this.length && !Ib[a] ? c.unique(f) : f;
              (1 < this.length || Gb.test(e)) &&
                Fb.test(a) &&
                (f = f.reverse());
              return this.pushStack(f, a, g.join(","));
            };
          }
        );
        c.extend({
          filter: function (a, b, d) {
            d && (a = ":not(" + a + ")");
            return 1 === b.length
              ? c.find.matchesSelector(b[0], a)
                ? [b[0]]
                : []
              : c.find.matches(a, b);
          },
          dir: function (a, b, d) {
            var e = [];
            for (
              a = a[b];
              a &&
              9 !== a.nodeType &&
              (d === p || 1 !== a.nodeType || !c(a).is(d));

            )
              1 === a.nodeType && e.push(a), (a = a[b]);
            return e;
          },
          nth: function (a, b, c, e) {
            b = b || 1;
            for (e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
            return a;
          },
          sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)
              1 === a.nodeType && a !== b && c.push(a);
            return c;
          },
        });
        var Jb = / jQuery\d+="(?:\d+|null)"/g,
          ta = /^\s+/,
          Va = /<([\w:]+)/,
          Kb = /<tbody/i,
          Lb = /<|&#?\w+;/,
          Wa = /<(?:script|object|embed|option|style)/i,
          Xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Mb = /\/(java|ecma)script/i,
          ob = /^\s*<!(?:\[CDATA\[|\-\-)/,
          F = {
            legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
            thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
            tr: [
              2,
              "\x3ctable\x3e\x3ctbody\x3e",
              "\x3c/tbody\x3e\x3c/table\x3e",
            ],
            td: [
              3,
              "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e",
              "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e",
            ],
            col: [
              2,
              "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e",
              "\x3c/colgroup\x3e\x3c/table\x3e",
            ],
            area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
            _default: [0, "", ""],
          };
        F.tbody = F.tfoot = F.colgroup = F.caption = F.thead;
        F.th = F.td;
        c.support.htmlSerialize ||
          (F._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]);
        c.fn.extend({
          text: function (a) {
            return c.isFunction(a)
              ? this.each(function (b) {
                  var d = c(this);
                  d.text(a.call(this, b, d.text()));
                })
              : "object" !== typeof a && a !== p
              ? this.empty().append(
                  ((this[0] && this[0].ownerDocument) || q).createTextNode(a)
                )
              : c.text(this);
          },
          wrapAll: function (a) {
            if (c.isFunction(a))
              return this.each(function (b) {
                c(this).wrapAll(a.call(this, b));
              });
            if (this[0]) {
              var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && b.insertBefore(this[0]);
              b.map(function () {
                for (
                  var a = this;
                  a.firstChild && 1 === a.firstChild.nodeType;

                )
                  a = a.firstChild;
                return a;
              }).append(this);
            }
            return this;
          },
          wrapInner: function (a) {
            return c.isFunction(a)
              ? this.each(function (b) {
                  c(this).wrapInner(a.call(this, b));
                })
              : this.each(function () {
                  var b = c(this),
                    d = b.contents();
                  d.length ? d.wrapAll(a) : b.append(a);
                });
          },
          wrap: function (a) {
            return this.each(function () {
              c(this).wrapAll(a);
            });
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                c.nodeName(this, "body") ||
                  c(this).replaceWith(this.childNodes);
              })
              .end();
          },
          append: function () {
            return this.domManip(arguments, !0, function (a) {
              1 === this.nodeType && this.appendChild(a);
            });
          },
          prepend: function () {
            return this.domManip(arguments, !0, function (a) {
              1 === this.nodeType && this.insertBefore(a, this.firstChild);
            });
          },
          before: function () {
            if (this[0] && this[0].parentNode)
              return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this);
              });
            if (arguments.length) {
              var a = c(arguments[0]);
              a.push.apply(a, this.toArray());
              return this.pushStack(a, "before", arguments);
            }
          },
          after: function () {
            if (this[0] && this[0].parentNode)
              return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling);
              });
            if (arguments.length) {
              var a = this.pushStack(this, "after", arguments);
              a.push.apply(a, c(arguments[0]).toArray());
              return a;
            }
          },
          remove: function (a, b) {
            for (var d = 0, e; null != (e = this[d]); d++)
              if (!a || c.filter(a, [e]).length)
                b ||
                  1 !== e.nodeType ||
                  (c.cleanData(e.getElementsByTagName("*")), c.cleanData([e])),
                  e.parentNode && e.parentNode.removeChild(e);
            return this;
          },
          empty: function () {
            for (var a = 0, b; null != (b = this[a]); a++)
              for (
                1 === b.nodeType && c.cleanData(b.getElementsByTagName("*"));
                b.firstChild;

              )
                b.removeChild(b.firstChild);
            return this;
          },
          clone: function (a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function () {
              return c.clone(this, a, b);
            });
          },
          html: function (a) {
            if (a === p)
              return this[0] && 1 === this[0].nodeType
                ? this[0].innerHTML.replace(Jb, "")
                : null;
            if (
              "string" !== typeof a ||
              Wa.test(a) ||
              (!c.support.leadingWhitespace && ta.test(a)) ||
              F[(Va.exec(a) || ["", ""])[1].toLowerCase()]
            )
              c.isFunction(a)
                ? this.each(function (b) {
                    var d = c(this);
                    d.html(a.call(this, b, d.html()));
                  })
                : this.empty().append(a);
            else
              try {
                for (var b = 0, d = this.length; b < d; b++)
                  1 === this[b].nodeType &&
                    (c.cleanData(this[b].getElementsByTagName("*")),
                    (this[b].innerHTML = a));
              } catch (e) {
                this.empty().append(a);
              }
            return this;
          },
          replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
              if (c.isFunction(a))
                return this.each(function (b) {
                  var d = c(this),
                    e = d.html();
                  d.replaceWith(a.call(this, b, e));
                });
              "string" !== typeof a && (a = c(a).detach());
              return this.each(function () {
                var b = this.nextSibling,
                  d = this.parentNode;
                c(this).remove();
                b ? c(b).before(a) : c(d).append(a);
              });
            }
            return this.length
              ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
              : this;
          },
          detach: function (a) {
            return this.remove(a, !0);
          },
          domManip: function (a, b, d) {
            var e,
              f = a[0],
              g = [];
            if (
              !c.support.checkClone &&
              3 === arguments.length &&
              "string" === typeof f &&
              Xa.test(f)
            )
              return this.each(function () {
                c(this).domManip(a, b, d, !0);
              });
            if (c.isFunction(f))
              return this.each(function (e) {
                var g = c(this);
                a[0] = f.call(this, e, b ? g.html() : p);
                g.domManip(a, b, d);
              });
            if (this[0]) {
              var h = f && f.parentNode;
              h =
                c.support.parentNode &&
                h &&
                11 === h.nodeType &&
                h.childNodes.length === this.length
                  ? { fragment: h }
                  : c.buildFragment(a, this, g);
              var k = h.fragment;
              if (
                (e =
                  1 === k.childNodes.length ? (k = k.firstChild) : k.firstChild)
              ) {
                b = b && c.nodeName(e, "tr");
                for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                  d.call(
                    b ? mb(this[l], e) : this[l],
                    h.cacheable || (1 < m && l < n) ? c.clone(k, !0, !0) : k
                  );
              }
              g.length && c.each(g, nb);
            }
            return this;
          },
        });
        c.buildFragment = function (a, b, d) {
          var e, f, g;
          b && b[0] && (g = b[0].ownerDocument || b[0]);
          g.createDocumentFragment || (g = q);
          if (
            1 === a.length &&
            "string" === typeof a[0] &&
            512 > a[0].length &&
            g === q &&
            "\x3c" === a[0].charAt(0) &&
            !Wa.test(a[0]) &&
            (c.support.checkClone || !Xa.test(a[0]))
          ) {
            var h = !0;
            (f = c.fragments[a[0]]) && 1 !== f && (e = f);
          }
          e || ((e = g.createDocumentFragment()), c.clean(a, g, e, d));
          h && (c.fragments[a[0]] = f ? e : 1);
          return { fragment: e, cacheable: h };
        };
        c.fragments = {};
        c.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (a, b) {
            c.fn[a] = function (d) {
              var e = [];
              d = c(d);
              var f = 1 === this.length && this[0].parentNode;
              if (
                f &&
                11 === f.nodeType &&
                1 === f.childNodes.length &&
                1 === d.length
              )
                return d[b](this[0]), this;
              f = 0;
              for (var g = d.length; f < g; f++) {
                var h = (0 < f ? this.clone(!0) : this).get();
                c(d[f])[b](h);
                e = e.concat(h);
              }
              return this.pushStack(e, a, d.selector);
            };
          }
        );
        c.extend({
          clone: function (a, b, d) {
            var e = a.cloneNode(!0),
              f;
            if (
              !(
                (c.support.noCloneEvent && c.support.noCloneChecked) ||
                (1 !== a.nodeType && 11 !== a.nodeType) ||
                c.isXMLDoc(a)
              )
            ) {
              Ba(a, e);
              var g = Z(a);
              var h = Z(e);
              for (f = 0; g[f]; ++f) h[f] && Ba(g[f], h[f]);
            }
            if (b && (Aa(a, e), d))
              for (g = Z(a), h = Z(e), f = 0; g[f]; ++f) Aa(g[f], h[f]);
            return e;
          },
          clean: function (a, b, d, e) {
            b = b || q;
            "undefined" === typeof b.createElement &&
              (b = b.ownerDocument || (b[0] && b[0].ownerDocument) || q);
            for (var f = [], g, h = 0, k; null != (k = a[h]); h++)
              if (("number" === typeof k && (k += ""), k)) {
                if ("string" === typeof k)
                  if (Lb.test(k)) {
                    g = (Va.exec(k) || ["", ""])[1].toLowerCase();
                    var l = F[g] || F._default,
                      m = l[0],
                      n = b.createElement("div");
                    for (n.innerHTML = l[1] + k + l[2]; m--; ) n = n.lastChild;
                    if (!c.support.tbody)
                      for (
                        m = Kb.test(k),
                          l =
                            "table" !== g || m
                              ? "\x3ctable\x3e" !== l[1] || m
                                ? []
                                : n.childNodes
                              : n.firstChild && n.firstChild.childNodes,
                          g = l.length - 1;
                        0 <= g;
                        --g
                      )
                        c.nodeName(l[g], "tbody") &&
                          !l[g].childNodes.length &&
                          l[g].parentNode.removeChild(l[g]);
                    !c.support.leadingWhitespace &&
                      ta.test(k) &&
                      n.insertBefore(
                        b.createTextNode(ta.exec(k)[0]),
                        n.firstChild
                      );
                    k = n.childNodes;
                  } else k = b.createTextNode(k);
                var p;
                if (!c.support.appendChecked)
                  if (k[0] && "number" === typeof (p = k.length))
                    for (g = 0; g < p; g++) Da(k[g]);
                  else Da(k);
                k.nodeType ? f.push(k) : (f = c.merge(f, k));
              }
            if (d)
              for (
                a = function (a) {
                  return !a.type || Mb.test(a.type);
                },
                  h = 0;
                f[h];
                h++
              )
                !e ||
                !c.nodeName(f[h], "script") ||
                (f[h].type && "text/javascript" !== f[h].type.toLowerCase())
                  ? (1 === f[h].nodeType &&
                      ((b = c.grep(f[h].getElementsByTagName("script"), a)),
                      f.splice.apply(f, [h + 1, 0].concat(b))),
                    d.appendChild(f[h]))
                  : e.push(
                      f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]
                    );
            return f;
          },
          cleanData: function (a) {
            for (
              var b,
                d,
                e = c.cache,
                f = c.expando,
                g = c.event.special,
                h = c.support.deleteExpando,
                k = 0,
                l;
              null != (l = a[k]);
              k++
            )
              if (!l.nodeName || !c.noData[l.nodeName.toLowerCase()])
                if ((d = l[c.expando])) {
                  if ((b = e[d] && e[d][f]) && b.events) {
                    for (var m in b.events)
                      g[m]
                        ? c.event.remove(l, m)
                        : c.removeEvent(l, m, b.handle);
                    b.handle && (b.handle.elem = null);
                  }
                  h
                    ? delete l[c.expando]
                    : l.removeAttribute && l.removeAttribute(c.expando);
                  delete e[d];
                }
          },
        });
        var ua = /alpha\([^)]*\)/i,
          Nb = /opacity=([^)]*)/,
          Ob = /([A-Z]|^ms)/g,
          Ya = /^-?\d+(?:px)?$/i,
          Pb = /^-?\d/,
          Qb = /^([\-+])=([\-+.\de]+)/,
          Rb = { position: "absolute", visibility: "hidden", display: "block" },
          pb = ["Left", "Right"],
          qb = ["Top", "Bottom"],
          Za,
          $a;
        c.fn.css = function (a, b) {
          return 2 === arguments.length && b === p
            ? this
            : c.access(this, a, b, !0, function (a, b, f) {
                return f !== p ? c.style(a, b, f) : c.css(a, b);
              });
        };
        c.extend({
          cssHooks: {
            opacity: {
              get: function (a, b) {
                return b
                  ? ((a = V(a, "opacity", "opacity")), "" === a ? "1" : a)
                  : a.style.opacity;
              },
            },
          },
          cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: { float: c.support.cssFloat ? "cssFloat" : "styleFloat" },
          style: function (a, b, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
              var f,
                g = c.camelCase(b),
                h = a.style,
                k = c.cssHooks[g];
              b = c.cssProps[g] || g;
              if (d !== p) {
                if (
                  ((e = typeof d),
                  "string" === e &&
                    (f = Qb.exec(d)) &&
                    ((d = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b))),
                    (e = "number")),
                  !(
                    null == d ||
                    ("number" === e && isNaN(d)) ||
                    ("number" !== e || c.cssNumber[g] || (d += "px"),
                    k && "set" in k && (d = k.set(a, d)) === p)
                  ))
                )
                  try {
                    h[b] = d;
                  } catch (l) {}
              } else
                return k && "get" in k && (f = k.get(a, !1, e)) !== p
                  ? f
                  : h[b];
            }
          },
          css: function (a, b, d) {
            var e;
            b = c.camelCase(b);
            var f = c.cssHooks[b];
            b = c.cssProps[b] || b;
            "cssFloat" === b && (b = "float");
            if (f && "get" in f && (e = f.get(a, !0, d)) !== p) return e;
            if (V) return V(a, b);
          },
          swap: function (a, b, c) {
            var d = {},
              f;
            for (f in b) (d[f] = a.style[f]), (a.style[f] = b[f]);
            c.call(a);
            for (f in b) a.style[f] = d[f];
          },
        });
        c.curCSS = c.css;
        c.each(["height", "width"], function (a, b) {
          c.cssHooks[b] = {
            get: function (a, e, f) {
              var d;
              if (e) {
                if (0 !== a.offsetWidth) return Ea(a, b, f);
                c.swap(a, Rb, function () {
                  d = Ea(a, b, f);
                });
                return d;
              }
            },
            set: function (a, b) {
              if (Ya.test(b)) {
                if (((b = parseFloat(b)), 0 <= b)) return b + "px";
              } else return b;
            },
          };
        });
        c.support.opacity ||
          (c.cssHooks.opacity = {
            get: function (a, b) {
              return Nb.test(
                (b && a.currentStyle
                  ? a.currentStyle.filter
                  : a.style.filter) || ""
              )
                ? parseFloat(RegExp.$1) / 100 + ""
                : b
                ? "1"
                : "";
            },
            set: function (a, b) {
              var d = a.style;
              a = a.currentStyle;
              var e = c.isNaN(b) ? "" : "alpha(opacity\x3d" + 100 * b + ")",
                f = (a && a.filter) || d.filter || "";
              d.zoom = 1;
              if (
                1 <= b &&
                "" === c.trim(f.replace(ua, "")) &&
                (d.removeAttribute("filter"), a && !a.filter)
              )
                return;
              d.filter = ua.test(f) ? f.replace(ua, e) : f + " " + e;
            },
          });
        c(function () {
          c.support.reliableMarginRight ||
            (c.cssHooks.marginRight = {
              get: function (a, b) {
                var d;
                c.swap(a, { display: "inline-block" }, function () {
                  d = b
                    ? V(a, "margin-right", "marginRight")
                    : a.style.marginRight;
                });
                return d;
              },
            });
        });
        q.defaultView &&
          q.defaultView.getComputedStyle &&
          (Za = function (a, b) {
            var d;
            b = b.replace(Ob, "-$1").toLowerCase();
            if (!(d = a.ownerDocument.defaultView)) return p;
            if ((d = d.getComputedStyle(a, null))) {
              var e = d.getPropertyValue(b);
              "" !== e ||
                c.contains(a.ownerDocument.documentElement, a) ||
                (e = c.style(a, b));
            }
            return e;
          });
        q.documentElement.currentStyle &&
          ($a = function (a, b) {
            var c = a.currentStyle && a.currentStyle[b],
              e = a.runtimeStyle && a.runtimeStyle[b],
              f = a.style;
            if (!Ya.test(c) && Pb.test(c)) {
              var g = f.left;
              e && (a.runtimeStyle.left = a.currentStyle.left);
              f.left = "fontSize" === b ? "1em" : c || 0;
              c = f.pixelLeft + "px";
              f.left = g;
              e && (a.runtimeStyle.left = e);
            }
            return "" === c ? "auto" : c;
          });
        var V = Za || $a;
        c.expr &&
          c.expr.filters &&
          ((c.expr.filters.hidden = function (a) {
            var b = a.offsetHeight;
            return (
              (0 === a.offsetWidth && 0 === b) ||
              (!c.support.reliableHiddenOffsets &&
                "none" === (a.style.display || c.css(a, "display")))
            );
          }),
          (c.expr.filters.visible = function (a) {
            return !c.expr.filters.hidden(a);
          }));
        var Sb = /%20/g,
          rb = /\[\]$/,
          ab = /\r?\n/g,
          Tb = /#.*$/,
          Ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
          Vb =
            /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
          Wb = /^(?:GET|HEAD)$/,
          Xb = /^\/\//,
          bb = /\?/,
          Yb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          Zb = /^(?:select|textarea)/i,
          Ga = /\s+/,
          $b = /([?&])_=[^&]*/,
          cb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
          db = c.fn.load,
          ka = {},
          eb = {};
        try {
          var O = ub.href;
        } catch (a) {
          (O = q.createElement("a")), (O.href = ""), (O = O.href);
        }
        var N = cb.exec(O.toLowerCase()) || [];
        c.fn.extend({
          load: function (a, b, d) {
            if ("string" !== typeof a && db) return db.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (0 <= e) {
              var f = a.slice(e, a.length);
              a = a.slice(0, e);
            }
            e = "GET";
            b &&
              (c.isFunction(b)
                ? ((d = b), (b = p))
                : "object" === typeof b &&
                  ((b = c.param(b, c.ajaxSettings.traditional)), (e = "POST")));
            var g = this;
            c.ajax({
              url: a,
              type: e,
              dataType: "html",
              data: b,
              complete: function (a, b, e) {
                e = a.responseText;
                a.isResolved() &&
                  (a.done(function (a) {
                    e = a;
                  }),
                  g.html(
                    f ? c("\x3cdiv\x3e").append(e.replace(Yb, "")).find(f) : e
                  ));
                d && g.each(d, [e, b, a]);
              },
            });
            return this;
          },
          serialize: function () {
            return c.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              return this.elements ? c.makeArray(this.elements) : this;
            })
              .filter(function () {
                return (
                  this.name &&
                  !this.disabled &&
                  (this.checked || Zb.test(this.nodeName) || Vb.test(this.type))
                );
              })
              .map(function (a, b) {
                a = c(this).val();
                return null == a
                  ? null
                  : c.isArray(a)
                  ? c.map(a, function (a, c) {
                      return { name: b.name, value: a.replace(ab, "\r\n") };
                    })
                  : { name: b.name, value: a.replace(ab, "\r\n") };
              })
              .get();
          },
        });
        c.each(
          "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
            " "
          ),
          function (a, b) {
            c.fn[b] = function (a) {
              return this.bind(b, a);
            };
          }
        );
        c.each(["get", "post"], function (a, b) {
          c[b] = function (a, e, f, g) {
            c.isFunction(e) && ((g = g || f), (f = e), (e = p));
            return c.ajax({
              type: b,
              url: a,
              data: e,
              success: f,
              dataType: g,
            });
          };
        });
        c.extend({
          getScript: function (a, b) {
            return c.get(a, p, b, "script");
          },
          getJSON: function (a, b, d) {
            return c.get(a, b, d, "json");
          },
          ajaxSetup: function (a, b) {
            b ? Ha(a, c.ajaxSettings) : ((b = a), (a = c.ajaxSettings));
            Ha(a, b);
            return a;
          },
          ajaxSettings: {
            url: O,
            isLocal:
              /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(
                N[1]
              ),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
              xml: "application/xml, text/xml",
              html: "text/html",
              text: "text/plain",
              json: "application/json, text/javascript",
              "*": "*/*",
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: { xml: "responseXML", text: "responseText" },
            converters: {
              "* text": r.String,
              "text html": !0,
              "text json": c.parseJSON,
              "text xml": c.parseXML,
            },
            flatOptions: { context: !0, url: !0 },
          },
          ajaxPrefilter: Fa(ka),
          ajaxTransport: Fa(eb),
          ajax: function (a, b) {
            function d(a, b, d, m) {
              if (2 !== E) {
                E = 2;
                w && clearTimeout(w);
                B = p;
                q = m || "";
                v.readyState = 0 < a ? 4 : 0;
                m = b;
                if (d) {
                  var n = e,
                    r = v,
                    u = n.contents,
                    y = n.dataTypes,
                    P = n.responseFields,
                    A,
                    D;
                  for (C in P) C in d && (r[P[C]] = d[C]);
                  for (; "*" === y[0]; )
                    y.shift(),
                      A === p &&
                        (A = n.mimeType || r.getResponseHeader("content-type"));
                  if (A)
                    for (C in u)
                      if (u[C] && u[C].test(A)) {
                        y.unshift(C);
                        break;
                      }
                  if (y[0] in d) var z = y[0];
                  else {
                    for (C in d) {
                      if (!y[0] || n.converters[C + " " + y[0]]) {
                        z = C;
                        break;
                      }
                      D || (D = C);
                    }
                    z = z || D;
                  }
                  z ? (z !== y[0] && y.unshift(z), (d = d[z])) : (d = void 0);
                } else d = p;
                if ((200 <= a && 300 > a) || 304 === a) {
                  if (e.ifModified) {
                    if ((A = v.getResponseHeader("Last-Modified")))
                      c.lastModified[x] = A;
                    if ((A = v.getResponseHeader("Etag"))) c.etag[x] = A;
                  }
                  if (304 === a) {
                    m = "notmodified";
                    var F = !0;
                  } else
                    try {
                      A = e;
                      A.dataFilter && (d = A.dataFilter(d, A.dataType));
                      var J = A.dataTypes;
                      var C = {};
                      var S,
                        G,
                        Q = J.length,
                        R = J[0];
                      for (S = 1; S < Q; S++) {
                        if (1 === S)
                          for (G in A.converters)
                            "string" === typeof G &&
                              (C[G.toLowerCase()] = A.converters[G]);
                        var H = R;
                        R = J[S];
                        if ("*" === R) R = H;
                        else if ("*" !== H && H !== R) {
                          var L = H + " " + R;
                          var T = C[L] || C["* " + R];
                          if (!T) {
                            var K = p;
                            for (I in C) {
                              var M = I.split(" ");
                              if (M[0] === H || "*" === M[0])
                                if ((K = C[M[1] + " " + R])) {
                                  var I = C[I];
                                  !0 === I ? (T = K) : !0 === K && (T = I);
                                  break;
                                }
                            }
                          }
                          T ||
                            K ||
                            c.error(
                              "No conversion from " + L.replace(" ", " to ")
                            );
                          !0 !== T && (d = T ? T(d) : K(I(d)));
                        }
                      }
                      var O = d;
                      m = "success";
                      F = !0;
                    } catch (ac) {
                      m = "parsererror";
                      var N = ac;
                    }
                } else if (((N = m), !m || a)) (m = "error"), 0 > a && (a = 0);
                v.status = a;
                v.statusText = "" + (b || m);
                F ? h.resolveWith(f, [O, m, v]) : h.rejectWith(f, [v, m, N]);
                v.statusCode(l);
                l = p;
                t &&
                  g.trigger("ajax" + (F ? "Success" : "Error"), [
                    v,
                    e,
                    F ? O : N,
                  ]);
                k.resolveWith(f, [v, m]);
                t &&
                  (g.trigger("ajaxComplete", [v, e]),
                  --c.active || c.event.trigger("ajaxStop"));
              }
            }
            "object" === typeof a && ((b = a), (a = p));
            b = b || {};
            var e = c.ajaxSetup({}, b),
              f = e.context || e,
              g = f !== e && (f.nodeType || f instanceof c) ? c(f) : c.event,
              h = c.Deferred(),
              k = c._Deferred(),
              l = e.statusCode || {},
              m = {},
              n = {},
              q,
              r,
              B,
              w,
              E = 0,
              z,
              v = {
                readyState: 0,
                setRequestHeader: function (a, b) {
                  if (!E) {
                    var c = a.toLowerCase();
                    a = n[c] = n[c] || a;
                    m[a] = b;
                  }
                  return this;
                },
                getAllResponseHeaders: function () {
                  return 2 === E ? q : null;
                },
                getResponseHeader: function (a) {
                  var b;
                  if (2 === E) {
                    if (!r)
                      for (r = {}; (b = Ub.exec(q)); )
                        r[b[1].toLowerCase()] = b[2];
                    b = r[a.toLowerCase()];
                  }
                  return b === p ? null : b;
                },
                overrideMimeType: function (a) {
                  E || (e.mimeType = a);
                  return this;
                },
                abort: function (a) {
                  a = a || "abort";
                  B && B.abort(a);
                  d(0, a);
                  return this;
                },
              };
            h.promise(v);
            v.success = v.done;
            v.error = v.fail;
            v.complete = k.done;
            v.statusCode = function (a) {
              if (a)
                if (2 > E) for (b in a) l[b] = [l[b], a[b]];
                else {
                  var b = a[v.status];
                  v.then(b, b);
                }
              return this;
            };
            e.url = ((a || e.url) + "")
              .replace(Tb, "")
              .replace(Xb, N[1] + "//");
            e.dataTypes = c
              .trim(e.dataType || "*")
              .toLowerCase()
              .split(Ga);
            null == e.crossDomain &&
              ((a = cb.exec(e.url.toLowerCase())),
              (e.crossDomain = !(
                !a ||
                (a[1] == N[1] &&
                  a[2] == N[2] &&
                  (a[3] || ("http:" === a[1] ? 80 : 443)) ==
                    (N[3] || ("http:" === N[1] ? 80 : 443)))
              )));
            e.data &&
              e.processData &&
              "string" !== typeof e.data &&
              (e.data = c.param(e.data, e.traditional));
            aa(ka, e, b, v);
            if (2 === E) return !1;
            var t = e.global;
            e.type = e.type.toUpperCase();
            e.hasContent = !Wb.test(e.type);
            t && 0 === c.active++ && c.event.trigger("ajaxStart");
            if (!e.hasContent) {
              e.data &&
                ((e.url += (bb.test(e.url) ? "\x26" : "?") + e.data),
                delete e.data);
              var x = e.url;
              if (!1 === e.cache) {
                a = c.now();
                var D = e.url.replace($b, "$1_\x3d" + a);
                e.url =
                  D +
                  (D === e.url
                    ? (bb.test(e.url) ? "\x26" : "?") + "_\x3d" + a
                    : "");
              }
            }
            ((e.data && e.hasContent && !1 !== e.contentType) ||
              b.contentType) &&
              v.setRequestHeader("Content-Type", e.contentType);
            e.ifModified &&
              ((x = x || e.url),
              c.lastModified[x] &&
                v.setRequestHeader("If-Modified-Since", c.lastModified[x]),
              c.etag[x] && v.setRequestHeader("If-None-Match", c.etag[x]));
            v.setRequestHeader(
              "Accept",
              e.dataTypes[0] && e.accepts[e.dataTypes[0]]
                ? e.accepts[e.dataTypes[0]] +
                    ("*" !== e.dataTypes[0] ? ", */*; q\x3d0.01" : "")
                : e.accepts["*"]
            );
            for (z in e.headers) v.setRequestHeader(z, e.headers[z]);
            if (e.beforeSend && (!1 === e.beforeSend.call(f, v, e) || 2 === E))
              return v.abort(), !1;
            for (z in { success: 1, error: 1, complete: 1 }) v[z](e[z]);
            if ((B = aa(eb, e, b, v))) {
              v.readyState = 1;
              t && g.trigger("ajaxSend", [v, e]);
              e.async &&
                0 < e.timeout &&
                (w = setTimeout(function () {
                  v.abort("timeout");
                }, e.timeout));
              try {
                (E = 1), B.send(m, d);
              } catch (u) {
                2 > E ? d(-1, u) : c.error(u);
              }
            } else d(-1, "No Transport");
            return v;
          },
          param: function (a, b) {
            var d = [],
              e = function (a, b) {
                b = c.isFunction(b) ? b() : b;
                d[d.length] =
                  encodeURIComponent(a) + "\x3d" + encodeURIComponent(b);
              };
            b === p && (b = c.ajaxSettings.traditional);
            if (c.isArray(a) || (a.jquery && !c.isPlainObject(a)))
              c.each(a, function () {
                e(this.name, this.value);
              });
            else for (var f in a) la(f, a[f], b, e);
            return d.join("\x26").replace(Sb, "+");
          },
        });
        c.extend({ active: 0, lastModified: {}, etag: {} });
        var bc = c.now(),
          fa = /(=)\?(&|$)|\?\?/i;
        c.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            return c.expando + "_" + bc++;
          },
        });
        c.ajaxPrefilter("json jsonp", function (a, b, d) {
          b =
            "application/x-www-form-urlencoded" === a.contentType &&
            "string" === typeof a.data;
          if (
            "jsonp" === a.dataTypes[0] ||
            (!1 !== a.jsonp && (fa.test(a.url) || (b && fa.test(a.data))))
          ) {
            var e,
              f = (a.jsonpCallback = c.isFunction(a.jsonpCallback)
                ? a.jsonpCallback()
                : a.jsonpCallback),
              g = r[f],
              h = a.url,
              k = a.data,
              l = "$1" + f + "$2";
            !1 !== a.jsonp &&
              ((h = h.replace(fa, l)),
              a.url === h &&
                (b && (k = k.replace(fa, l)),
                a.data === k &&
                  (h += (/\?/.test(h) ? "\x26" : "?") + a.jsonp + "\x3d" + f)));
            a.url = h;
            a.data = k;
            r[f] = function (a) {
              e = [a];
            };
            d.always(function () {
              r[f] = g;
              if (e && c.isFunction(g)) r[f](e[0]);
            });
            a.converters["script json"] = function () {
              e || c.error(f + " was not called");
              return e[0];
            };
            a.dataTypes[0] = "json";
            return "script";
          }
        });
        c.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /javascript|ecmascript/ },
          converters: {
            "text script": function (a) {
              c.globalEval(a);
              return a;
            },
          },
        });
        c.ajaxPrefilter("script", function (a) {
          a.cache === p && (a.cache = !1);
          a.crossDomain && ((a.type = "GET"), (a.global = !1));
        });
        c.ajaxTransport("script", function (a) {
          if (a.crossDomain) {
            var b,
              c =
                q.head ||
                q.getElementsByTagName("head")[0] ||
                q.documentElement;
            return {
              send: function (d, f) {
                b = q.createElement("script");
                b.async = "async";
                a.scriptCharset && (b.charset = a.scriptCharset);
                b.src = a.url;
                b.onload = b.onreadystatechange = function (a, d) {
                  if (
                    d ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)
                  )
                    (b.onload = b.onreadystatechange = null),
                      c && b.parentNode && c.removeChild(b),
                      (b = p),
                      d || f(200, "success");
                };
                c.insertBefore(b, c.firstChild);
              },
              abort: function () {
                if (b) b.onload(0, 1);
              },
            };
          }
        });
        var va = r.ActiveXObject
            ? function () {
                for (var a in U) U[a](0, 1);
              }
            : !1,
          cc = 0,
          U;
        c.ajaxSettings.xhr = r.ActiveXObject
          ? function () {
              var a;
              if (!(a = !this.isLocal && Ia()))
                a: {
                  try {
                    a = new r.ActiveXObject("Microsoft.XMLHTTP");
                    break a;
                  } catch (b) {}
                  a = void 0;
                }
              return a;
            }
          : Ia;
        (function (a) {
          c.extend(c.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a,
          });
        })(c.ajaxSettings.xhr());
        c.support.ajax &&
          c.ajaxTransport(function (a) {
            if (!a.crossDomain || c.support.cors) {
              var b;
              return {
                send: function (d, e) {
                  var f = a.xhr(),
                    g;
                  a.username
                    ? f.open(a.type, a.url, a.async, a.username, a.password)
                    : f.open(a.type, a.url, a.async);
                  if (a.xhrFields) for (g in a.xhrFields) f[g] = a.xhrFields[g];
                  a.mimeType &&
                    f.overrideMimeType &&
                    f.overrideMimeType(a.mimeType);
                  a.crossDomain ||
                    d["X-Requested-With"] ||
                    (d["X-Requested-With"] = "XMLHttpRequest");
                  try {
                    for (g in d) f.setRequestHeader(g, d[g]);
                  } catch (k) {}
                  f.send((a.hasContent && a.data) || null);
                  b = function (d, g) {
                    var k;
                    try {
                      if (b && (g || 4 === f.readyState))
                        if (
                          ((b = p),
                          h &&
                            ((f.onreadystatechange = c.noop),
                            va && delete U[h]),
                          g)
                        )
                          4 !== f.readyState && f.abort();
                        else {
                          var l = f.status;
                          var q = f.getAllResponseHeaders();
                          var r = {};
                          (k = f.responseXML) &&
                            k.documentElement &&
                            (r.xml = k);
                          r.text = f.responseText;
                          try {
                            var B = f.statusText;
                          } catch (w) {
                            B = "";
                          }
                          l || !a.isLocal || a.crossDomain
                            ? 1223 === l && (l = 204)
                            : (l = r.text ? 200 : 404);
                        }
                    } catch (w) {
                      g || e(-1, w);
                    }
                    r && e(l, B, r, q);
                  };
                  if (a.async && 4 !== f.readyState) {
                    var h = ++cc;
                    va && (U || ((U = {}), c(r).unload(va)), (U[h] = b));
                    f.onreadystatechange = b;
                  } else b();
                },
                abort: function () {
                  b && b(0, 1);
                },
              };
            }
          });
        var ma = {},
          G,
          M,
          dc = /^(?:toggle|show|hide)$/,
          ec = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
          ha,
          Ka = [
            [
              "height",
              "marginTop",
              "marginBottom",
              "paddingTop",
              "paddingBottom",
            ],
            [
              "width",
              "marginLeft",
              "marginRight",
              "paddingLeft",
              "paddingRight",
            ],
            ["opacity"],
          ],
          ba;
        c.fn.extend({
          show: function (a, b, d) {
            if (a || 0 === a) return this.animate(K("show", 3), a, b, d);
            d = 0;
            for (var e = this.length; d < e; d++)
              (a = this[d]),
                a.style &&
                  ((b = a.style.display),
                  c._data(a, "olddisplay") ||
                    "none" !== b ||
                    (b = a.style.display = ""),
                  "" === b &&
                    "none" === c.css(a, "display") &&
                    c._data(a, "olddisplay", La(a.nodeName)));
            for (d = 0; d < e; d++)
              if (
                ((a = this[d]),
                a.style && ((b = a.style.display), "" === b || "none" === b))
              )
                a.style.display = c._data(a, "olddisplay") || "";
            return this;
          },
          hide: function (a, b, d) {
            if (a || 0 === a) return this.animate(K("hide", 3), a, b, d);
            a = 0;
            for (b = this.length; a < b; a++)
              this[a].style &&
                ((d = c.css(this[a], "display")),
                "none" === d ||
                  c._data(this[a], "olddisplay") ||
                  c._data(this[a], "olddisplay", d));
            for (a = 0; a < b; a++)
              this[a].style && (this[a].style.display = "none");
            return this;
          },
          _toggle: c.fn.toggle,
          toggle: function (a, b, d) {
            var e = "boolean" === typeof a;
            c.isFunction(a) && c.isFunction(b)
              ? this._toggle.apply(this, arguments)
              : null == a || e
              ? this.each(function () {
                  var b = e ? a : c(this).is(":hidden");
                  c(this)[b ? "show" : "hide"]();
                })
              : this.animate(K("toggle", 3), a, b, d);
            return this;
          },
          fadeTo: function (a, b, c, e) {
            return this.filter(":hidden")
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: b }, a, c, e);
          },
          animate: function (a, b, d, e) {
            var f = c.speed(b, d, e);
            if (c.isEmptyObject(a)) return this.each(f.complete, [!1]);
            a = c.extend({}, a);
            return this[!1 === f.queue ? "each" : "queue"](function () {
              !1 === f.queue && c._mark(this);
              var b = c.extend({}, f),
                d = 1 === this.nodeType,
                e = d && c(this).is(":hidden"),
                l;
              b.animatedProperties = {};
              for (l in a) {
                var m = c.camelCase(l);
                l !== m && ((a[m] = a[l]), delete a[l]);
                var n = a[m];
                c.isArray(n)
                  ? ((b.animatedProperties[m] = n[1]), (n = a[m] = n[0]))
                  : (b.animatedProperties[m] =
                      (b.specialEasing && b.specialEasing[m]) ||
                      b.easing ||
                      "swing");
                if (("hide" === n && e) || ("show" === n && !e))
                  return b.complete.call(this);
                !d ||
                  ("height" !== m && "width" !== m) ||
                  ((b.overflow = [
                    this.style.overflow,
                    this.style.overflowX,
                    this.style.overflowY,
                  ]),
                  "inline" === c.css(this, "display") &&
                    "none" === c.css(this, "float") &&
                    (c.support.inlineBlockNeedsLayout
                      ? ((n = La(this.nodeName)),
                        "inline" === n
                          ? (this.style.display = "inline-block")
                          : ((this.style.display = "inline"),
                            (this.style.zoom = 1)))
                      : (this.style.display = "inline-block")));
              }
              null != b.overflow && (this.style.overflow = "hidden");
              for (l in a)
                if (((d = new c.fx(this, b, l)), (n = a[l]), dc.test(n)))
                  d["toggle" === n ? (e ? "show" : "hide") : n]();
                else {
                  m = ec.exec(n);
                  var q = d.cur();
                  if (m) {
                    n = parseFloat(m[2]);
                    var p = m[3] || (c.cssNumber[l] ? "" : "px");
                    "px" !== p &&
                      (c.style(this, l, (n || 1) + p),
                      (q *= (n || 1) / d.cur()),
                      c.style(this, l, q + p));
                    m[1] && (n = ("-\x3d" === m[1] ? -1 : 1) * n + q);
                    d.custom(q, n, p);
                  } else d.custom(q, n, "");
                }
              return !0;
            });
          },
          stop: function (a, b) {
            a && this.queue([]);
            this.each(function () {
              var a = c.timers,
                e = a.length;
              for (b || c._unmark(!0, this); e--; )
                if (a[e].elem === this) {
                  if (b) a[e](!0);
                  a.splice(e, 1);
                }
            });
            b || this.dequeue();
            return this;
          },
        });
        c.each(
          {
            slideDown: K("show", 1),
            slideUp: K("hide", 1),
            slideToggle: K("toggle", 1),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (a, b) {
            c.fn[a] = function (a, c, f) {
              return this.animate(b, a, c, f);
            };
          }
        );
        c.extend({
          speed: function (a, b, d) {
            var e =
              a && "object" === typeof a
                ? c.extend({}, a)
                : {
                    complete: d || (!d && b) || (c.isFunction(a) && a),
                    duration: a,
                    easing: (d && b) || (b && !c.isFunction(b) && b),
                  };
            e.duration = c.fx.off
              ? 0
              : "number" === typeof e.duration
              ? e.duration
              : e.duration in c.fx.speeds
              ? c.fx.speeds[e.duration]
              : c.fx.speeds._default;
            e.old = e.complete;
            e.complete = function (a) {
              c.isFunction(e.old) && e.old.call(this);
              !1 !== e.queue ? c.dequeue(this) : !1 !== a && c._unmark(this);
            };
            return e;
          },
          easing: {
            linear: function (a, b, c, e) {
              return c + e * a;
            },
            swing: function (a, b, c, e) {
              return (-Math.cos(a * Math.PI) / 2 + 0.5) * e + c;
            },
          },
          timers: [],
          fx: function (a, b, c) {
            this.options = b;
            this.elem = a;
            this.prop = c;
            b.orig = b.orig || {};
          },
        });
        c.fx.prototype = {
          update: function () {
            this.options.step &&
              this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this);
          },
          cur: function () {
            if (
              null != this.elem[this.prop] &&
              (!this.elem.style || null == this.elem.style[this.prop])
            )
              return this.elem[this.prop];
            var a,
              b = c.css(this.elem, this.prop);
            return isNaN((a = parseFloat(b))) ? (b && "auto" !== b ? b : 0) : a;
          },
          custom: function (a, b, d) {
            function e(a) {
              return f.step(a);
            }
            var f = this,
              g = c.fx;
            this.startTime = ba || Ja();
            this.start = a;
            this.end = b;
            this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;
            e.elem = this.elem;
            e() &&
              c.timers.push(e) &&
              !ha &&
              (ha = setInterval(g.tick, g.interval));
          },
          show: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = !0;
            this.custom(
              "width" === this.prop || "height" === this.prop ? 1 : 0,
              this.cur()
            );
            c(this.elem).show();
          },
          hide: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0);
          },
          step: function (a) {
            var b = ba || Ja(),
              d = !0,
              e = this.elem,
              f = this.options,
              g;
            if (a || b >= f.duration + this.startTime) {
              this.now = this.end;
              this.pos = this.state = 1;
              this.update();
              f.animatedProperties[this.prop] = !0;
              for (g in f.animatedProperties)
                !0 !== f.animatedProperties[g] && (d = !1);
              if (d) {
                null == f.overflow ||
                  c.support.shrinkWrapBlocks ||
                  c.each(["", "X", "Y"], function (a, b) {
                    e.style["overflow" + b] = f.overflow[a];
                  });
                f.hide && c(e).hide();
                if (f.hide || f.show)
                  for (var h in f.animatedProperties) c.style(e, h, f.orig[h]);
                f.complete.call(e);
              }
              return !1;
            }
            Infinity == f.duration
              ? (this.now = b)
              : ((a = b - this.startTime),
                (this.state = a / f.duration),
                (this.pos = c.easing[f.animatedProperties[this.prop]](
                  this.state,
                  a,
                  0,
                  1,
                  f.duration
                )),
                (this.now = this.start + (this.end - this.start) * this.pos));
            this.update();
            return !0;
          },
        };
        c.extend(c.fx, {
          tick: function () {
            for (var a = c.timers, b = 0; b < a.length; ++b)
              a[b]() || a.splice(b--, 1);
            a.length || c.fx.stop();
          },
          interval: 13,
          stop: function () {
            clearInterval(ha);
            ha = null;
          },
          speeds: { slow: 600, fast: 200, _default: 400 },
          step: {
            opacity: function (a) {
              c.style(a.elem, "opacity", a.now);
            },
            _default: function (a) {
              a.elem.style && null != a.elem.style[a.prop]
                ? (a.elem.style[a.prop] =
                    ("width" === a.prop || "height" === a.prop
                      ? Math.max(0, a.now)
                      : a.now) + a.unit)
                : (a.elem[a.prop] = a.now);
            },
          },
        });
        c.expr &&
          c.expr.filters &&
          (c.expr.filters.animated = function (a) {
            return c.grep(c.timers, function (b) {
              return a === b.elem;
            }).length;
          });
        var fc = /^t(?:able|d|h)$/i,
          fb = /^(?:body|html)$/i;
        c.fn.offset =
          "getBoundingClientRect" in q.documentElement
            ? function (a) {
                var b = this[0];
                if (a)
                  return this.each(function (b) {
                    c.offset.setOffset(this, a, b);
                  });
                if (!b || !b.ownerDocument) return null;
                if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
                try {
                  var d = b.getBoundingClientRect();
                } catch (g) {}
                var e = b.ownerDocument,
                  f = e.documentElement;
                if (!d || !c.contains(f, b))
                  return d ? { top: d.top, left: d.left } : { top: 0, left: 0 };
                b = e.body;
                e = na(e);
                return {
                  top:
                    d.top +
                    (e.pageYOffset ||
                      (c.support.boxModel && f.scrollTop) ||
                      b.scrollTop) -
                    (f.clientTop || b.clientTop || 0),
                  left:
                    d.left +
                    (e.pageXOffset ||
                      (c.support.boxModel && f.scrollLeft) ||
                      b.scrollLeft) -
                    (f.clientLeft || b.clientLeft || 0),
                };
              }
            : function (a) {
                var b = this[0];
                if (a)
                  return this.each(function (b) {
                    c.offset.setOffset(this, a, b);
                  });
                if (!b || !b.ownerDocument) return null;
                if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
                c.offset.initialize();
                var d = b.offsetParent,
                  e = b.ownerDocument,
                  f = e.documentElement,
                  g = e.body;
                var h = (e = e.defaultView)
                  ? e.getComputedStyle(b, null)
                  : b.currentStyle;
                for (
                  var k = b.offsetTop, l = b.offsetLeft;
                  (b = b.parentNode) &&
                  b !== g &&
                  b !== f &&
                  (!c.offset.supportsFixedPosition || "fixed" !== h.position);

                )
                  (h = e ? e.getComputedStyle(b, null) : b.currentStyle),
                    (k -= b.scrollTop),
                    (l -= b.scrollLeft),
                    b === d &&
                      ((k += b.offsetTop),
                      (l += b.offsetLeft),
                      !c.offset.doesNotAddBorder ||
                        (c.offset.doesAddBorderForTableAndCells &&
                          fc.test(b.nodeName)) ||
                        ((k += parseFloat(h.borderTopWidth) || 0),
                        (l += parseFloat(h.borderLeftWidth) || 0)),
                      (d = b.offsetParent)),
                    c.offset.subtractsBorderForOverflowNotVisible &&
                      "visible" !== h.overflow &&
                      ((k += parseFloat(h.borderTopWidth) || 0),
                      (l += parseFloat(h.borderLeftWidth) || 0));
                if ("relative" === h.position || "static" === h.position)
                  (k += g.offsetTop), (l += g.offsetLeft);
                c.offset.supportsFixedPosition &&
                  "fixed" === h.position &&
                  ((k += Math.max(f.scrollTop, g.scrollTop)),
                  (l += Math.max(f.scrollLeft, g.scrollLeft)));
                return { top: k, left: l };
              };
        c.offset = {
          initialize: function () {
            var a = q.body,
              b = q.createElement("div"),
              d = parseFloat(c.css(a, "marginTop")) || 0;
            c.extend(b.style, {
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              border: 0,
              width: "1px",
              height: "1px",
              visibility: "hidden",
            });
            b.innerHTML =
              "\x3cdiv style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\x3ctable style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
            a.insertBefore(b, a.firstChild);
            var e = b.firstChild;
            var f = e.firstChild;
            var g = e.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = 5 !== f.offsetTop;
            this.doesAddBorderForTableAndCells = 5 === g.offsetTop;
            f.style.position = "fixed";
            f.style.top = "20px";
            this.supportsFixedPosition =
              20 === f.offsetTop || 15 === f.offsetTop;
            f.style.position = f.style.top = "";
            e.style.overflow = "hidden";
            e.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = -5 === f.offsetTop;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== d;
            a.removeChild(b);
            c.offset.initialize = c.noop;
          },
          bodyOffset: function (a) {
            var b = a.offsetTop,
              d = a.offsetLeft;
            c.offset.initialize();
            c.offset.doesNotIncludeMarginInBodyOffset &&
              ((b += parseFloat(c.css(a, "marginTop")) || 0),
              (d += parseFloat(c.css(a, "marginLeft")) || 0));
            return { top: b, left: d };
          },
          setOffset: function (a, b, d) {
            var e = c.css(a, "position");
            "static" === e && (a.style.position = "relative");
            var f = c(a),
              g = f.offset(),
              h = c.css(a, "top"),
              k = c.css(a, "left"),
              l = {};
            ("absolute" === e || "fixed" === e) &&
            -1 < c.inArray("auto", [h, k])
              ? ((k = f.position()), (e = k.top), (k = k.left))
              : ((e = parseFloat(h) || 0), (k = parseFloat(k) || 0));
            c.isFunction(b) && (b = b.call(a, d, g));
            null != b.top && (l.top = b.top - g.top + e);
            null != b.left && (l.left = b.left - g.left + k);
            "using" in b ? b.using.call(a, l) : f.css(l);
          },
        };
        c.fn.extend({
          position: function () {
            if (!this[0]) return null;
            var a = this[0],
              b = this.offsetParent(),
              d = this.offset(),
              e = fb.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
            d.top -= parseFloat(c.css(a, "marginTop")) || 0;
            d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
            e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
            e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
            return { top: d.top - e.top, left: d.left - e.left };
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var a = this.offsetParent || q.body;
                a && !fb.test(a.nodeName) && "static" === c.css(a, "position");

              )
                a = a.offsetParent;
              return a;
            });
          },
        });
        c.each(["Left", "Top"], function (a, b) {
          var d = "scroll" + b;
          c.fn[d] = function (b) {
            var e;
            if (b === p) {
              var g = this[0];
              return g
                ? (e = na(g))
                  ? "pageXOffset" in e
                    ? e[a ? "pageYOffset" : "pageXOffset"]
                    : (c.support.boxModel && e.document.documentElement[d]) ||
                      e.document.body[d]
                  : g[d]
                : null;
            }
            return this.each(function () {
              (e = na(this))
                ? e.scrollTo(
                    a ? c(e).scrollLeft() : b,
                    a ? b : c(e).scrollTop()
                  )
                : (this[d] = b);
            });
          };
        });
        c.each(["Height", "Width"], function (a, b) {
          var d = b.toLowerCase();
          c.fn["inner" + b] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(c.css(a, d, "padding")) : null;
          };
          c.fn["outer" + b] = function (a) {
            var b = this[0];
            return b && b.style
              ? parseFloat(c.css(b, d, a ? "margin" : "border"))
              : null;
          };
          c.fn[d] = function (a) {
            var e = this[0];
            if (!e) return null == a ? null : this;
            if (c.isFunction(a))
              return this.each(function (b) {
                var e = c(this);
                e[d](a.call(this, b, e[d]()));
              });
            if (c.isWindow(e)) {
              var g = e.document.documentElement["client" + b];
              e = e.document.body;
              return (c.support.boxModel && g) || (e && e["client" + b]) || g;
            }
            return 9 === e.nodeType
              ? Math.max(
                  e.documentElement["client" + b],
                  e.body["scroll" + b],
                  e.documentElement["scroll" + b],
                  e.body["offset" + b],
                  e.documentElement["offset" + b]
                )
              : a === p
              ? ((g = c.css(e, d)), (e = parseFloat(g)), c.isNaN(e) ? g : e)
              : this.css(d, "string" === typeof a ? a : a + "px");
          };
        });
        c.ajaxPrefilter(function (a) {
          a.crossDomain && (a.contents.script = !1);
        });
        (function () {
          c.find.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a);
          };
          c.error = function (a) {
            throw "object" === typeof a ? a : Error(a);
          };
        })();
        (function () {
          var a = c._Deferred;
          c._Deferred = function () {
            var b = a(),
              c = b.done;
            b.done = function () {
              for (var a = Array(arguments.length), b = 0; b < a.length; b++) {
                var d = b;
                var h = arguments[b];
                h =
                  "function" === typeof h &&
                  "function" === typeof H.guardCurrent
                    ? H.guardCurrent(h)
                    : h;
                a[d] = h;
              }
              return c.apply(this, a);
            };
            return b;
          };
        })();
        (function () {
          var a;
          c.event.special.beforeunload = {
            setup: function (b, d, e) {
              a = this.onbeforeunload;
              c.isWindow(this) &&
                (this.onbeforeunload = function () {
                  var b = !1;
                  try {
                    b = c.isFunction(a);
                  } catch (g) {}
                  b && a.apply(this, arguments);
                  e.apply(this, arguments);
                });
            },
            teardown: function (b, c) {
              this.onbeforeunload = a;
            },
          };
        })();
        return c;
      })()
    );
  H.when("jQuery").execute("rtl-jquery-plugin", function (p) {
    p.withoutRtl = function (p) {
      p.apply(this);
    };
  });
});
(function (a) {
  var c = window.AmazonUIPageJS || window.P,
    d = c._namespace || c.attributeErrors,
    b = d ? d("AmazonUIBaseJS@analytics", "AmazonUI") : c;
  b.guardFatal
    ? b.guardFatal(a)(b, window)
    : b.execute(function () {
        a(b, window);
      });
})(function (a, c, d) {
  "use strict";
  a.register("a-analytics", function () {
    function b(b, g) {
      var a = c && c.ue && c.ue.count;
      if (a && b) {
        var e = "aui:" + b;
        1 < arguments.length && a(e, g);
        return a(e);
      }
    }
    var a = c && c.ue && c.ue.tag;
    return {
      increment: function (a, g) {
        if (a) {
          var c = b(a) || 0;
          b(a, c + (g || 1));
        }
      },
      count: b,
      logError: function (a, b, h) {
        c.ueLogError &&
          c.ueLogError({ message: a }, { logLevel: b, attribution: h });
      },
      tag: function (b) {
        a && b && a("aui:" + b);
      },
    };
  });
  a.when("a-analytics").register("prv:a-cache-analytics", function (a) {
    function b(a) {
      var b = a.name.indexOf("AUIClients/AmazonUI");
      a = a.name[b + 19];
      a = a === d || "\x26" === a || "#" === a;
      return -1 !== b && a;
    }
    function e(b) {
      a.tag(
        ("script" === b.initiatorType
          ? "js"
          : "link" === b.initiatorType
          ? "css"
          : "unknown") +
          ":" +
          (b.transferSize === d || b.decodedBodySize === d
            ? "unknown"
            : 0 === b.transferSize
            ? 0 < b.decodedBodySize
              ? "cache"
              : "unknown"
            : "network")
      );
    }
    c.performance &&
      "function" === typeof c.performance.getEntriesByType &&
      c.performance.getEntriesByType("resource").filter(b).forEach(e);
  });
  ("use strict");
  a.declare("prv:a-declarative-analytics", {
    notify: function () {},
    setOptions: function () {},
  });
  ("use strict");
  a.when("a-analytics", "afterLoad").execute("a-doctype-test", function (b) {
    (document.doctype &&
      document.doctype.name &&
      "html" === document.doctype.name.toLowerCase()) ||
      (a.log(
        "Missing or Invalid HTML doctype. Please refer to http://w?AUI/LogMessages#HDOCTYPE for more details.",
        "WARN"
      ),
      b.increment("a-doctype-issue"));
  });
  ("use strict");
  a.declare("a-event-analytics", {
    handle: function () {},
    notifyDeclarativeAction: function () {},
    notifyJquery: function () {},
  });
  ("use strict");
  a.when("a-analytics", "prv:p-debug", "ready").execute(function (b, c) {
    a.declare("prv:a-logTrigger", function (a) {
      var h = (c[a] && c[a].registered) || 0,
        d = 0,
        e = 0,
        k;
      for (k in c)
        if (c.hasOwnProperty(k)) {
          var f = c[k];
          f.end && f.end <= h && (d++, (e += f.end - f.start));
        }
      b.count("blocking-count:" + a, d);
      b.count("blocking-time:" + a, Math.round(e));
    });
  });
  ("use strict");
  a.register("prv:a-collect-p-debug", function () {
    var b = !1;
    return function () {
      b ||
        ((b = !0),
        a.when("prv:p-debug", "afterLoad").execute(function (b) {
          b = JSON && JSON.stringify ? JSON.stringify(b) : "{}";
          a.log(b, "WARN", "[AUI] p-debug");
        }));
    };
  });
  ("use strict");
  a.register("prv:a-sampler-inclusion", function () {
    return { "AUI API Analytics": 0.01 > Math.random() };
  });
  a.when("prv:a-sampler-inclusion").register("prv:a-sampler", function (a) {
    return function (b) {
      return a.hasOwnProperty(b) && a[b];
    };
  });
  ("use strict");
  a.declare("a-timing-analytics", {
    startWidgetLogging: function () {},
    stopWidgetLogging: function () {},
  });
});
/* ******** */
(function (f) {
  var g = window.AmazonUIPageJS || window.P,
    l = g._namespace || g.attributeErrors,
    e = l ? l("AmazonUIPromise", "AmazonUI") : g;
  e.guardFatal
    ? e.guardFatal(f)(e, window)
    : e.execute(function () {
        f(e, window);
      });
})(function (f, g, l) {
  f.register("3p-promise", function () {
    function e() {}
    function f(a, b) {
      return function () {
        a.apply(b, arguments);
      };
    }
    function d(a) {
      if ("object" !== typeof this)
        throw new TypeError("Promises must be constructed via new");
      if ("function" !== typeof a) throw new TypeError("not a function");
      this._state = 0;
      this._handled = !1;
      this._value = l;
      this._deferreds = [];
      q(a, this);
    }
    function r(a, b) {
      for (; 3 === a._state; ) a = a._value;
      0 === a._state
        ? a._deferreds.push(b)
        : ((a._handled = !0),
          m(function () {
            var c = 1 === a._state ? b.onFulfilled : b.onRejected;
            if (null === c) (1 === a._state ? n : k)(b.promise, a._value);
            else {
              try {
                var h = c(a._value);
              } catch (u) {
                k(b.promise, u);
                return;
              }
              n(b.promise, h);
            }
          }));
    }
    function n(a, b) {
      try {
        if (b === a)
          throw new TypeError("A promise cannot be resolved with itself.");
        if (b && ("object" === typeof b || "function" === typeof b)) {
          var c = b.then;
          if (b instanceof d) {
            a._state = 3;
            a._value = b;
            p(a);
            return;
          }
          if ("function" === typeof c) {
            q(f(c, b), a);
            return;
          }
        }
        a._state = 1;
        a._value = b;
        p(a);
      } catch (h) {
        k(a, h);
      }
    }
    function k(a, b) {
      a._state = 2;
      a._value = b;
      p(a);
    }
    function p(a) {
      2 === a._state &&
        0 === a._deferreds.length &&
        m(function () {
          a._handled || t(a._value);
        });
      for (var b = 0, c = a._deferreds.length; b < c; b++)
        r(a, a._deferreds[b]);
      a._deferreds = null;
    }
    function v(a, b, c) {
      this.onFulfilled = "function" === typeof a ? a : null;
      this.onRejected = "function" === typeof b ? b : null;
      this.promise = c;
    }
    function q(a, b) {
      var c = !1;
      try {
        a(
          function (a) {
            c || ((c = !0), n(b, a));
          },
          function (a) {
            c || ((c = !0), k(b, a));
          }
        );
      } catch (h) {
        c || ((c = !0), k(b, h));
      }
    }
    if ("function" === typeof g.Promise) return g.Promise;
    var w = setTimeout,
      m =
        ("function" === typeof setImmediate && setImmediate) ||
        function (a) {
          w(a, 0);
        },
      t = function (a) {
        "undefined" !== typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", a);
      };
    d.prototype["catch"] = function (a) {
      return this.then(null, a);
    };
    d.prototype.then = function (a, b) {
      var c = new this.constructor(e);
      r(this, new v(a, b, c));
      return c;
    };
    d.all = function (a) {
      var b = Array.prototype.slice.call(a);
      return new d(function (a, d) {
        function c(e, f) {
          try {
            if (f && ("object" === typeof f || "function" === typeof f)) {
              var g = f.then;
              if ("function" === typeof g) {
                g.call(
                  f,
                  function (a) {
                    c(e, a);
                  },
                  d
                );
                return;
              }
            }
            b[e] = f;
            0 === --h && a(b);
          } catch (x) {
            d(x);
          }
        }
        if (0 === b.length) return a([]);
        for (var h = b.length, e = 0; e < b.length; e++) c(e, b[e]);
      });
    };
    d.resolve = function (a) {
      return a && "object" === typeof a && a.constructor === d
        ? a
        : new d(function (b) {
            b(a);
          });
    };
    d.reject = function (a) {
      return new d(function (b, c) {
        c(a);
      });
    };
    d.race = function (a) {
      return new d(function (b, c) {
        for (var d = 0, e = a.length; d < e; d++) a[d].then(b, c);
      });
    };
    d._setImmediateFn = function (a) {
      m = a;
    };
    d._setUnhandledRejectionFn = function (a) {
      t = a;
    };
    return d;
  });
});
/* ******** */
(function (p) {
  var n = window.AmazonUIPageJS || window.P,
    r = n._namespace || n.attributeErrors,
    c = r ? r("AmazonUIBaseJS@base", "AmazonUI") : n;
  c.guardFatal
    ? c.guardFatal(p)(c, window)
    : c.execute(function () {
        p(c, window);
      });
})(function (p, n, r) {
  "use strict";
  p.register("a-polyfill", function () {});
  ("use strict");
  p.when("jQuery").register("a-base", function (c) {
    return {
      version: function () {
        return "3.0";
      },
      $: c,
    };
  });
  ("use strict");
  p.register("prv:a-guard", function () {
    function c(c, f) {
      return c._guard && "function" === typeof f ? c._guard(f) : f;
    }
    return {
      fn: c,
      guardTimeFn: function (c, f) {
        return c._guardTime && "function" === typeof f ? c._guardTime(f) : f;
      },
      obj: function (l, f) {
        if (!l._guard) return f;
        var h = {},
          g;
        for (g in f) f.hasOwnProperty(g) && (h[g] = c(l, f[g]));
        return h;
      },
    };
  });
  ("use strict");
  p.register("priv:a-visibility", function () {
    function c(c) {
      for (
        var f = ["hidden", "webkitHidden", "mozHidden", "msHidden", "oHidden"],
          h = 0;
        h < f.length;
        h += 1
      )
        if (f[h] in c) return f[h];
    }
    return function (l) {
      var f = c(l);
      return f
        ? function () {
            return l[f];
          }
        : function () {
            return !1;
          };
    };
  });
  ("use strict");
  p.register("prv:a-private-util", function () {
    try {
      var c = navigator.userAgent;
    } catch (l) {
      c = "";
    }
    return {
      ua: c,
      safeFeatureTest: function (c) {
        try {
          return c();
        } catch (f) {
          return !1;
        }
      },
    };
  });
  ("use strict");
  p.when("priv:a-visibility", "prv:a-guard", "prv:a-private-util").register(
    "a-util",
    function (c, l, f) {
      function h(b) {
        if (g(b)) return [b];
        if (b.jQuery) return b.get();
        var a = Object.prototype.toString.call(b);
        return "[object String]" === a
          ? Array.prototype.slice.call(document.querySelectorAll(b))
          : "[object Array]" === a
          ? b.filter(b, g)
          : "object" === typeof b &&
            /^\[object (HTMLCollection|NodeList|Object)\]$/.test(a) &&
            "number" === typeof b.length &&
            (0 === b.length || ("object" === typeof b[0] && 0 < b[0].nodeType))
          ? Array.prototype.slice.call(b)
          : [];
      }
      function g(b) {
        return b instanceof Element || b instanceof HTMLDocument;
      }
      var b = f.ua;
      c = { now: Date.now, isPageHidden: c(document) };
      f = [
        function (b) {
          return {
            each: function (a, e, d) {
              if (null !== a)
                if (
                  Array.prototype.forEach &&
                  a.forEach === Array.prototype.forEach
                )
                  a.forEach(e, d);
                else if (a.length === +a.length)
                  for (var k = 0, q = a.length; k < q; k++)
                    k in a && e.call(d, a[k], k, a);
                else for (k in a) a.hasOwnProperty(k) && e.call(d, a[k], k, a);
            },
            map: function (a, e, d) {
              var k = [];
              if (null === a) return k;
              if (Array.prototype.map && a.map === Array.prototype.map)
                return a.map(e, d);
              b.each(a, function (a, b, c) {
                k[k.length] = e.call(d, a, b, c);
              });
              a.length === +a.length && (k.length = a.length);
              return k;
            },
            reduce: function (a, e, d, k) {
              var q = 2 < arguments.length;
              null === a && (a = []);
              if (Array.prototype.reduce && a.reduce === Array.prototype.reduce)
                return q ? a.reduce(e, d) : a.reduce(e);
              b.each(a, function (a, b, c) {
                q ? (d = e.call(k, d, a, b, c)) : ((d = a), (q = !0));
              });
              q ||
                p.error(
                  "Reduce of empty array with no initial value",
                  "A.util",
                  "reduce"
                );
              return d;
            },
            filter: function (a, e, d) {
              var k = [];
              if (null === a) return k;
              if (Array.prototype.filter && a.filter === Array.prototype.filter)
                return a.filter(e, d || a);
              b.each(a, function (q, b, c) {
                e.call(d || a, q, b, c) && k.push(q);
              });
              return k;
            },
            range: function (a, e, d) {
              e === r && ((e = a || 0), (a = 0));
              d = d || 1;
              e = Math.max(Math.ceil((e - a) / d), 0);
              for (var k = Array(e), q = 0; q < e; q++, a += d) k[q] = a;
              return k;
            },
            breaker: {},
          };
        },
        function (b) {
          return {
            throttle: function (a, e, d) {
              var k,
                q,
                c,
                g = l.fn(this, a),
                f = null,
                v = 0;
              d = d || {};
              var x = function () {
                v = !1 === d.leading ? 0 : b.now();
                f = null;
                c = g.apply(k, q);
                k = q = null;
              };
              return function () {
                var C = b.now();
                v || !1 !== d.leading || (v = C);
                var A = e - (C - v);
                k = this;
                q = arguments;
                0 >= A
                  ? (clearTimeout(f),
                    (f = null),
                    (v = C),
                    (c = a.apply(k, q)),
                    (k = q = null))
                  : f || !1 === d.trailing || (f = setTimeout(x, A));
                return c;
              };
            },
            sequence: function () {
              var a = [].slice,
                e = a.call(arguments).reverse(),
                d = this;
              return b.reduce(
                e,
                function (k, e) {
                  return function () {
                    var b = a.call(arguments);
                    b.push(k);
                    e.apply(d, b);
                  };
                },
                function () {}
              );
            },
            debounce: function (a, e, d) {
              var k,
                q,
                c,
                g,
                f,
                v = l.fn(this, a),
                x = function () {
                  var a = b.now() - g;
                  a < e
                    ? (k = setTimeout(x, e - a))
                    : ((k = null), d || ((f = v.apply(c, q)), (c = q = null)));
                };
              return function () {
                c = this;
                q = arguments;
                g = b.now();
                var v = d && !k;
                k || (k = setTimeout(x, e));
                v && ((f = a.apply(c, q)), (c = q = null));
                return f;
              };
            },
            delay: function (a, e) {
              var d = this,
                k = l.fn(this, function () {
                  return l.guardTimeFn(d, a).apply(this, arguments);
                }),
                b = Array.prototype.slice.call(arguments, 2);
              return setTimeout(function () {
                return k.apply(null, b);
              }, e);
            },
            animationFrameDelay: function (a) {
              return this.delay(a, 16);
            },
            interval: function (a, e) {
              var d = this,
                k = l.fn(this, function () {
                  return l.guardTimeFn(d, a).apply(this, arguments);
                });
              return setInterval(k, e);
            },
            once: function (a) {
              var e = !1,
                d = l.fn(this, a),
                k;
              return function () {
                e || ((e = !0), (k = d.apply(this, arguments)));
                return k;
              };
            },
            rest: function (a, e) {
              if (a) {
                var d = Math.max(e === r ? a.length - 1 : e, 0);
                return function () {
                  for (
                    var k = arguments,
                      e = -1,
                      b = Math.max(k.length - d, 0),
                      c = Array(b);
                    ++e < b;

                  )
                    c[e] = k[e + d];
                  switch (d) {
                    case 0:
                      return a.call(this, c);
                    case 1:
                      return a.call(this, k[0], c);
                    case 2:
                      return a.call(this, k[0], k[1], c);
                  }
                  b = Array(d + 1);
                  for (e = -1; ++e < d; ) b[e] = k[e];
                  b[d] = c;
                  return a.apply(this, b);
                };
              }
            },
            parseFunctionName: function (a) {
              return a.name
                ? "anonymous" === a.name
                  ? ""
                  : a.name
                : (a = a.toString().match(/^function\s*([^\s(]+)/))
                ? a[1]
                : "";
            },
          };
        },
        function (b) {
          function a(d) {
            var e;
            "object" !== typeof d && "function" !== typeof d && (d = {});
            for (var k = 1; k < arguments.length; k++) {
              var b = arguments[k];
              if (null != b)
                for (var c in b) {
                  var x = b[c];
                  if (d !== x && x !== r) {
                    var q = d[c];
                    g(x) || (e = f(x))
                      ? (e && !f(q) ? (q = []) : e || g(q) || (q = {}),
                        (e = !1),
                        a(q, x))
                      : (q = x);
                    d[c] = q;
                  }
                }
            }
            return d;
          }
          function e(a, d) {
            a = a || {};
            d = d || {};
            var k = {},
              b;
            for (b in a)
              a.hasOwnProperty(b) &&
                (k[b] =
                  "object" === typeof a[b] && a[b]
                    ? e(a[b], d[b])
                    : a[b] !== d[b]);
            for (b in d)
              d.hasOwnProperty(b) &&
                !k[b] &&
                (k[b] =
                  "object" === typeof d[b] && d[b]
                    ? e(d[b], a[b])
                    : d[b] !== a[b]);
            return k;
          }
          function d(a, b) {
            var e;
            if (a === b) return !0;
            if (f(a)) {
              if (!f(b) || a.length !== b.length) return !1;
              for (e = a.length; e--; ) if (!d(a[e], b[e])) return !1;
              return !0;
            }
            if (g(a)) {
              if (!g(b) || (k(a) && !k(b))) return !1;
              for (e in a) if (!d(a[e], b[e])) return !1;
              return !0;
            }
            return !1;
          }
          function k(a) {
            for (var d in a) if (a.hasOwnProperty(d)) return !1;
            return !0;
          }
          function c(a) {
            if (!("function" === typeof a || ("object" === typeof a && a)))
              return [];
            if (Object.keys) return Object.keys(a);
            var d = [],
              b;
            for (b in a) a.hasOwnProperty(b) && d.push(b);
            return d;
          }
          function f(a) {
            return Array.isArray
              ? Array.isArray(a)
              : "[object Array]" === Object.prototype.toString.call(a);
          }
          function g(a) {
            if (!a || "object" !== typeof a || a.nodeType || a === n) return !1;
            try {
              if (
                a.constructor &&
                !a.hasOwnProperty("constructor") &&
                !a.constructor.prototype.hasOwnProperty("isPrototypeOf")
              )
                return !1;
            } catch (A) {
              return !1;
            }
            for (var d in a);
            return d === r || a.hasOwnProperty(d);
          }
          function h(a, d, b) {
            Object.defineProperty(a, d, { value: b, writable: !1 });
            return b;
          }
          function v(a, d, b) {
            a.hasOwnProperty(d) || (a[d] = b);
            return b;
          }
          return {
            keys: c,
            values: function (a) {
              for (var d = c(a), b = Array(d.length), e = 0; e < d.length; e++)
                b[e] = a[d[e]];
              return b;
            },
            extend: a,
            mixin: function (a, d, b) {
              if (b)
                for (var e = 0, k = b.length; e < k; e++) a[b[e]] = d[b[e]];
              else for (e in d) "function" === typeof d[e] && (a[e] = d[e]);
            },
            diff: e,
            equals: d,
            copy: function (d) {
              return f(d) ? a([], d) : g(d) ? a({}, d) : d;
            },
            indexOfArray: function (a, d, b) {
              if (
                Array.prototype.indexOf &&
                a.indexOf === Array.prototype.indexOf
              )
                return a.indexOf(d, b);
              (a && a instanceof Array) ||
                p.error(
                  "Invalid arr passed to A.indexOfArray: " + a,
                  "A.util",
                  "indexOfArray"
                );
              b = parseInt(b, 10);
              b = isNaN(b) ? 0 : b;
              if (!isFinite(b)) return -1;
              for (var e = a.length; b < e; b++) if (a[b] === d) return b;
              return -1;
            },
            isArray: f,
            isPlainObject: g,
            isFiniteNumber: function (a) {
              return "number" === typeof a && !isNaN(a) && isFinite(a);
            },
            objectIsEmpty: k,
            constProp: "function" === typeof Object.defineProperty ? h : v,
          };
        },
        function (b) {
          var a = {
              "\x26": "\x26amp;",
              "\x3c": "\x26lt;",
              "\x3e": "\x26gt;",
              '"': "\x26quot;",
              "'": "\x26#39;",
              "/": "\x26#x2F;",
            },
            e = /^\s+/,
            d = /\s+$/,
            k = new RegExp("[" + b.keys(a).join("") + "]", "g"),
            c = /([!"#$%&'\(\)*+,./:;<=>?@\[\\\]^`{|}~])/g;
          return {
            trim: function (a) {
              return String.prototype.trim
                ? String.prototype.trim.call(a)
                : a.replace(e, "").replace(d, "");
            },
            contains: function (a, d) {
              return -1 !== ("" + a).indexOf(d);
            },
            escapeHtml: function (d) {
              return ("" + d).replace(k, function (d) {
                return a[d];
              });
            },
            escapeJquerySelector: function (a) {
              return ("" + a).replace(c, "\\$1");
            },
            parseJSON: function (a) {
              return JSON.parse(a);
            },
          };
        },
        function (b) {
          function a(a) {
            return b
              .map(e, function (d) {
                var b = a.getAttribute(d);
                return b && "[" + d + "\x3d" + b + "]";
              })
              .join("");
          }
          var e = [
            "id",
            "cel_widget_id",
            "data-feature-name",
            "data-action",
            "data-aui-build-date",
          ];
          return {
            xpath: function (a) {
              if ("" !== a.id) return '//*[@id\x3d"' + a.id + '"]';
              if (a === document.documentElement) return "/html";
              var d = b.indexOfArray(
                b.filter(a.parentNode.childNodes, function (d) {
                  return d.tagName === a.tagName;
                }),
                a
              );
              if (-1 === d)
                throw Error(
                  "can not evaluate xpath of element `" +
                    a.tagName +
                    (a.id ? "#" + a.id : "") +
                    "`"
                );
              return (
                b.xpath(a.parentNode) + "/" + a.tagName + "[" + (d + 1) + "]"
              );
            },
            cssSelector: function (a) {
              var d = [a.tagName || ""];
              a.className &&
                a.className.trim &&
                d.push("." + a.className.trim().replace(/\s+/g, "."));
              a.id && d.push("#" + a.id);
              return d.join("");
            },
            attributionChain: function (d) {
              var e = [];
              do e.push(a(d)), (d = d.parentElement);
              while (d);
              return b.filter(e, Boolean).reverse().join(" ");
            },
          };
        },
        function (b) {
          return {
            hide: function (a) {
              b.each(h(a), function (a) {
                b.addClass(a, "aok-hidden");
              });
            },
            show: function (a) {
              b.each(h(a), function (a) {
                b.removeClass(a, "aok-hidden");
              });
            },
          };
        },
        function (b) {
          function a() {
            e = {};
            for (
              var a = (document.cookie || "").split(";"), k = a.length - 1;
              0 <= k;
              k--
            ) {
              var c = a[k].split("\x3d"),
                f = b.trim(c[0]);
              if (f) {
                var g = e;
                c = c.slice(1).join("\x3d");
                c = b.trim(c);
                /^"/.test(c) && (c = c.slice(1, -1).replace(/\\(.)/g, "$1"));
                c = n.decodeURIComponent(c);
                g[f] = c;
              }
            }
          }
          var e;
          return {
            cookies: {
              get: function (d) {
                e || a();
                return e[d];
              },
              getAll: function () {
                e || a();
                return b.extend({}, e);
              },
              refresh: function () {
                e = null;
              },
            },
          };
        },
        function (b) {
          return {
            onScreen: function (a, e) {
              if (!a) return !1;
              a.jquery && (a = a[0]);
              if (!a) return !1;
              e = "number" === typeof e && !isNaN(e) && isFinite(e) ? e : 100;
              if (
                1 !== a.nodeType ||
                !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
              )
                return !1;
              var d = b.size(n),
                k = b.scroll(n),
                c = k.top,
                f = n.innerHeight ? n.innerHeight : d.height,
                g = c + f;
              k = k.left;
              d = n.innerWidth ? n.innerWidth : d.width;
              var h = k + d;
              c -= e;
              g += e;
              k -= e;
              h += e;
              var v = b.offset(a),
                m = b.size(a);
              a = v.top;
              e = m.height;
              var t = a + e;
              v = v.left;
              m = m.width;
              var A = v + m;
              return (
                ((a >= c && a < g) ||
                  (t > c && t <= g) ||
                  (e > f && a <= c && t >= g)) &&
                ((v >= k && v < h) ||
                  (A > k && A <= h) ||
                  (m > d && v <= k && A >= h))
              );
            },
          };
        },
        function (b) {
          return {
            isATF: function (a, e) {
              e = "number" === typeof e && !isNaN(e) && isFinite(e) ? e : 100;
              e = b.size(n).height + e;
              a = b.offset(a).top;
              return 0 <= a && a < e;
            },
          };
        },
        function (c) {
          function a(a, d) {
            return a.classList
              ? a.classList.contains(d)
              : 0 <= (" " + a.className + " ").indexOf(" " + d + " ");
          }
          var e = document.createElement("fakeelement"),
            d = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            },
            k = null;
          return {
            setCssImportant: function (a, d, b) {
              a = a.jquery ? a[0] : a;
              "undefined" !== typeof a &&
                ((a = a.style),
                (a.cssText = a.cssText.replace(
                  new RegExp(d + "\\s*:\\s*[.^;]*(\\s*;)?", "gmi"),
                  ""
                )),
                (a.cssText += d + ": " + b + " !important;"));
            },
            hasClass: a,
            addClass: function (d, b) {
              a(d, b) ||
                (d.classList ? d.classList.add(b) : (d.className += " " + b));
            },
            removeClass: function (d, b) {
              a(d, b) &&
                (d.classList
                  ? d.classList.remove(b)
                  : (d.className = (" " + d.className + " ")
                      .replace(new RegExp(" " + b + " ", "g"), " ")
                      .replace(/  /g, " ")
                      .replace(/^ | $/g, "")));
            },
            offset: function (a) {
              a.jquery && (a = a[0]);
              a = a.getBoundingClientRect();
              var d = document.documentElement,
                b = document.body;
              return {
                top:
                  a.top +
                  (n.pageYOffset || d.scrollTop) -
                  ((d && d.clientTop) || (b && b.clientTop) || 0),
                left:
                  a.left +
                  (n.pageXOffset || d.scrollLeft) -
                  ((d && d.clientLeft) || (b && b.clientLeft) || 0),
              };
            },
            size: function (a) {
              var d = document.documentElement,
                b = document.body;
              if (a === n)
                return { width: d.clientWidth, height: d.clientHeight };
              if (9 === a.nodeType)
                return {
                  width: Math.max(
                    d.clientWidth,
                    b.scrollWidth,
                    d.scrollWidth,
                    b.offsetWidth,
                    d.offsetWidth
                  ),
                  height: Math.max(
                    d.clientHeight,
                    b.scrollHeight,
                    d.scrollHeight,
                    b.offsetHeight,
                    d.offsetHeight
                  ),
                };
              var e = n.getComputedStyle(a);
              d = parseFloat(e.borderTopWidth);
              b = parseFloat(e.borderBottomWidth);
              var k = parseFloat(e.borderLeftWidth),
                c = parseFloat(e.borderRightWidth),
                g = parseFloat(e.paddingTop),
                f = parseFloat(e.paddingBottom),
                h = parseFloat(e.paddingLeft);
              e = parseFloat(e.paddingRight);
              return {
                width: a.offsetWidth - k - c - h - e,
                height: a.offsetHeight - b - d - g - f,
              };
            },
            scroll: function (a) {
              var d = document.documentElement,
                b = document.body;
              return a
                ? a === n || 9 === a.nodeType
                  ? {
                      top:
                        "pageYOffset" in n
                          ? n.pageYOffset
                          : d.scrollTop || b.scrollTop,
                      left:
                        "pageXOffset" in n
                          ? n.pageXOffset
                          : d.scrollLeft || b.scrollLeft,
                    }
                  : { top: a.scrollTop, left: a.scrollLeft }
                : null;
            },
            getTransitionEndEvent: function () {
              /UCBrowser/.exec(b) && (k = d.WebkitTransition);
              if (null === k)
                for (var a in d)
                  if (e.style[a] !== r) {
                    k = d[a];
                    break;
                  }
              return k;
            },
            reflowCssChanges: function (a) {
              c.each(a, function (a) {});
            },
          };
        },
        function (b) {
          return {
            widescreen: function () {
              return b.hasClass(document.documentElement, "a-ws");
            },
          };
        },
      ];
      for (var m = 0; m < f.length; m++) {
        var t = f[m](c),
          z;
        for (z in t) c[z] = t[z];
      }
      return c;
    }
  );
  ("use strict");
  p.when("p-detect", "a-util", "prv:a-private-util").register(
    "prv:a-capabilities",
    function (c, l, f) {
      var h = {},
        g = /Trident/.test(f.ua);
      l.each(
        {
          isChrome: function () {
            return /Chrome/.test(f.ua);
          },
          isUCBrowser: function () {
            return /UCBrowser/.test(f.ua);
          },
          isSafari: function () {
            var b = document.documentElement.style;
            return (
              !("MozAppearance" in b) &&
              "webkitAppearance" in b &&
              /^Apple/.test(navigator.vendor)
            );
          },
          isAndroidStockGuess: function () {
            var b = !1;
            c.capabilities.android &&
              !/Chrome|Opera|Firefox|UCBrowser/.test(f.ua) &&
              ((b = /AppleWebKit\/(\d+\.\d+)/.exec(f.ua)),
              (b = b[1] && "535" > b[1]));
            return b;
          },
          isFirefox: function () {
            return /Firefox/.test(f.ua);
          },
          isIE: function () {
            return g;
          },
          isIE10: function () {
            return (
              g && "onmspointerup" in document && !("onpointerup" in document)
            );
          },
          isIE10Plus: function () {
            return (
              g && ("onpointerup" in document || "onmspointerup" in document)
            );
          },
          isIE11Plus: function () {
            return g && "onpointerup" in document;
          },
          isiOS8: function () {
            return c.capabilities.ios && /Version\/8\./.test(f.ua);
          },
          isIETouchCapable: function () {
            return h.isIE10Plus && /Touch;/.test(f.ua);
          },
          isMetroIEGuess: function () {
            var b = !0;
            try {
              b = new ActiveXObject("htmlfile");
            } catch (m) {
              b = !1;
            }
            return h.isIE10Plus && !c.capabilities.mobile && !b;
          },
        },
        function (b, c) {
          h[c] = f.safeFeatureTest(b);
        }
      );
      return h;
    }
  );
  ("use strict");
  p.when(
    "p-detect",
    "prv:a-capabilities",
    "a-util",
    "prv:a-private-util"
  ).register("a-detect", function (c, l, f, h) {
    var g = f.copy(c),
      b = function () {
        var b =
          /(?:Android\s+|Windowshop.*Android\/|Android\/)(\d+(?:\.\d+)*)/.exec(
            h.ua
          );
        return b && b[1];
      },
      m = {};
    f.each(
      {
        isAmazonApp: function () {
          return /(Windowshop|Amazon|AmazonBusiness|Amazon\.com)\//.test(
            f.cookies.get("amzn-app-id")
          );
        },
        isGen5App: function () {
          return /Windowshop.*(?:KFOT|KFTH|KFJWA|KFJWI|KFTT)/.test(h.ua);
        },
        isAndroid: function () {
          return g.capabilities.android;
        },
        androidVersion: function () {
          return b();
        },
        isAndroidKitkatPlus: function () {
          var c = b();
          return c && null !== c.match(/(^4\.[4-9]|^[5-9]|^\d\d)/);
        },
        isOldAndroid: function () {
          return /Android\s[12][^0-9]/.test(h.ua);
        },
        pointerPrefix: function () {
          return "onmspointerup" in document || "onpointerup" in document
            ? "onpointerup" in document
              ? "pointer"
              : "MSPointer"
            : !1;
        },
        actionMode: function () {
          var b = g.capabilities.pointerPrefix;
          return b ? b : g.capabilities.touch ? "touch" : "mouse";
        },
      },
      function (b, c) {
        g.capabilities[c] = h.safeFeatureTest(b);
      }
    );
    f.extend(g.capabilities, l);
    f.each(
      {
        start: {
          mouse: "down",
          touch: "start",
          pointer: "down",
          MSPointer: "Down",
        },
        end: { mouse: "up", touch: "end", pointer: "up", MSPointer: "Up" },
        move: {
          mouse: "move",
          touch: "move",
          pointer: "move",
          MSPointer: "Move",
        },
        enter: { mouse: "enter", touch: "enter", pointer: "enter" },
        leave: { mouse: "leave", touch: "leave", pointer: "leave" },
        cancel: { touch: "cancel", pointer: "cancel", MSPointer: "Cancel" },
        over: { mouse: "over", pointer: "over", MSPointer: "Over" },
        out: { mouse: "out", pointer: "out", MSPointer: "Out" },
      },
      function (b, c) {
        var f = g.capabilities.actionMode,
          a = "string" === typeof b ? b : b[f];
        m[c] = a ? f + a : b.mouse === r ? "" : "mouse" + b.mouse;
      }
    );
    g.action = m;
    c = {};
    "pointer" === g.capabilities.pointerPrefix
      ? ((c.touch = "touch"),
        (c.pen = "pen"),
        (c.mouse = "mouse"),
        (c.unknown = ""))
      : "MSPointer" === g.capabilities.pointerPrefix &&
        ((c.touch = 2), (c.pen = 3), (c.mouse = 4));
    g.pointerType = c;
    return g;
  });
  ("use strict");
  p.when("prv:a-guard").register("a-defer", function (c) {
    function l(b) {
      var c = 0,
        f = setTimeout(function () {
          l(b);
        }, 0);
      if (0 === b.length) clearTimeout(f), (h = !1);
      else {
        var z = Date.now();
        b.shift().call();
        g += Date.now() - z;
        50 < g && ((c = 50), (g = 0));
        setTimeout(function () {
          l(b);
        }, c);
        clearTimeout(f);
      }
    }
    var f = [],
      h = !1,
      g = 0;
    return {
      defer: function (b) {
        var g = this,
          t = c.fn(this, function () {
            return c.guardTimeFn(g, b).apply(this, arguments);
          });
        f.push(t);
        h ||
          ((h = !0),
          setTimeout(function () {
            l(f);
          }, 0));
      },
      pauseDeferred: function () {},
      executeDeferred: function () {},
    };
  });
  ("use strict");
  p.when("a-util").register("a-events", function (c, l) {
    function f(a, d) {
      for (var b = a.length; b--; ) d(a[b], b, a) || a.splice(b, 1);
    }
    function h(a) {
      var d = a.shift();
      if (d === r) return k;
      try {
        !1 === d.fn.apply(n, d.args) &&
          f(a, function (a) {
            return a.id !== d.id;
          });
      } catch (C) {
        (d.logError ? d : p).logError(
          C,
          "Event execution failed for event " + d.topic,
          "FATAL"
        );
      }
    }
    function g(a, b) {
      if (z(a)) {
        var e = B++,
          k = d[a];
        b = b || [];
        var f = c.map(k, function (d) {
          return {
            topic: a,
            id: e,
            fn: d.guard ? d.guard(d.fn) : d.fn,
            args: b,
            logError: d.logError,
          };
        });
        k.occurred && m(a);
        k.isTimeSliced ? q(f) : y(f);
      }
    }
    function b(a, b, e) {
      if ("function" === typeof b)
        return (
          (e = { fn: b, logError: e && e.logError, guard: e && e.guard }),
          (d[a] = d[a] || []).unshift(e),
          { event: a, callback: b }
        );
    }
    function m(a) {
      d[a].length = 0;
    }
    function t(a, b) {
      function e(a) {
        f(d[a], function (a) {
          return a.fn !== b;
        });
      }
      c.each(c.filter(a.split(" "), z), b ? e : m);
    }
    function z(a) {
      return d.hasOwnProperty(a) && 0 < d[a].length;
    }
    function u(a, e) {
      var k = function () {
          p.register(a, function () {
            var a = n.aPageStart;
            return { time: a ? c.now() - a : 0 };
          });
        },
        f = (d[a] = d[a] || []);
      f.occurred ||
        ((f.isTimeSliced = !1 !== e), (f.occurred = !0), b(a, k), g(a));
    }
    function a(a, d) {
      var b = this.on;
      this.on = function () {
        return b.apply(this, arguments);
      };
      this.on._guard = a;
      this.on._logError = d;
      for (var e in b) b.hasOwnProperty(e) && (this.on[e] = b[e]);
      this.constructor = r;
    }
    function e(a, d) {
      n.attachEvent ? n.attachEvent("on" + a, d) : n.addEventListener(a, d, !1);
    }
    var d = {},
      k = {},
      q = (function () {
        function a() {
          d = !0;
          for (var e = c.now(); 50 > c.now() - e; )
            if (h(b) === k) {
              d = !1;
              return;
            }
          c.delay(a, 15);
        }
        var d = !1,
          b = [];
        return function (e) {
          Array.prototype.push.apply(b, e);
          d || a();
        };
      })(),
      y = (function () {
        var a = !1,
          d = [];
        return function (b) {
          Array.prototype.push.apply(d, b);
          if (!a) {
            for (a = !0; h(d) !== k; );
            a = !1;
          }
        };
      })(),
      B = 0,
      w = (function () {
        var a = function (a, e, k) {
          var f = a.split(" "),
            h = [],
            v = e;
          !0 === k &&
            (v = function () {
              e.apply(n, arguments);
              t(a, v);
            });
          var m = this ? { logError: this._logError, guard: this._guard } : {};
          c.each(f, function (a) {
            "unload" === a && (a = "pagehide");
            (d[a] || []).occurred
              ? (b(a, e, m), g(a))
              : h.push(b(a, v, m).event);
          });
          return { event: h.join(" "), callback: v };
        };
        c.each(
          "ready load unload afterLoad scroll resize orientationchange zoom".split(
            " "
          ),
          function (d) {
            a[d] = function (b, e) {
              a.call(this, d, b, e);
            };
          }
        );
        return a;
      })();
    a.prototype = {
      isListening: z,
      on: w,
      one: function (a, d) {
        var b = a.split(" ");
        if (1 < b.length)
          p.error(
            "A.one only accepts a single event name, but was provided with: " +
              b.length +
              ", (" +
              a +
              ")",
            "A.events",
            "one"
          );
        else return w(a, d, !0);
      },
      off: function (a, d) {
        if ("object" === typeof a) {
          var b = a.event;
          a = a.callback;
        } else (b = a), (a = d);
        return t(b, a);
      },
      trigger: function (a) {
        for (var d = arguments.length, b = Array(d), e = 0; e < d; e++)
          b[e] = arguments[e];
        b.shift();
        g(a, b);
      },
      events: {
        defaults: {
          input: "change",
          select: "change",
          a: "click",
          button: "click",
          form: "submit",
        },
      },
    };
    a.prototype.constructor = a;
    p.when("a-bodyBegin").execute(function () {
      u("bodyBegin");
    });
    e("pagehide", function () {
      u("pagehide", !1);
    });
    p.when("p-detect").execute(function (a) {
      var d = c.once(function () {
          u("beforeLoad");
          u("load");
          c.delay(function () {
            u("beforeAfterLoad");
            u("afterLoad");
          }, 1500);
        }),
        b = c.once(function () {
          a.responsiveGridEnabled() && a.toggleResponsiveGrid(!0);
          u("beforeReady");
          u("ready");
          u("afterReady");
          "complete" === document.readyState && d();
        });
      (function (a) {
        "loading" != document.readyState
          ? a()
          : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", a)
          : document.attachEvent("onreadystatechange", function () {
              "loading" != document.readyState && a();
            });
      })(b);
      p.when("a-domready").execute(b);
      e("load", d);
    });
    return a.prototype;
  });
  ("use strict");
  p.when("a-util", "a-events").register("a-prefix", function (c, l) {
    function f(b) {
      return b.toLowerCase().replace(/-(.)/g, function (b, c) {
        return c.toUpperCase();
      });
    }
    var h = { transitionend: null },
      g = document.createElement("div").style,
      b = {},
      m = ["o", "ms", "moz", "webkit"];
    l.on("beforeReady", function () {
      if (n.addEventListener) {
        var b = document.createElement("div"),
          f = function (b) {
            h.transitionend = b.type;
            this.removeEventListener("webkitTransitionEnd", f, !1);
            this.removeEventListener("transitionend", f, !1);
            this.removeEventListener("otransitionend", f, !1);
            this.removeEventListener("oTransitionEnd", f, !1);
          };
        b.setAttribute(
          "style",
          "position:absolute;top:0px;z-index:-1;transition:top 1ms ease;-webkit-transition:top 1ms ease;-moz-transition:top 1ms ease;-o-transition:top 1ms ease;"
        );
        b.addEventListener("transitionend", f, !1);
        b.addEventListener("webkitTransitionEnd", f, !1);
        b.addEventListener("otransitionend", f, !1);
        this.addEventListener("oTransitionEnd", f, !1);
        document.body.appendChild(b);
        c.delay(function () {
          b.style.top = "100px";
          c.delay(function () {
            b.parentNode && b.parentNode.removeChild(b);
            b = f = null;
            c.each(h, function (b) {});
          }, 100);
        }, 0);
      }
    });
    return {
      prefixes: {
        getStyle: function (c) {
          if (!b[c]) {
            var h = f(c);
            if (h in g) b[c] = h;
            else {
              h = h.charAt(0).toUpperCase() + h.slice(1);
              for (var l = m.length; l--; ) {
                var a = m[l] + h;
                a in g && (b[c] = a);
              }
            }
          }
          return b[c];
        },
        getEvent: function (b) {
          return b ? h[b.toLowerCase()] : r;
        },
      },
    };
  });
  ("use strict");
  p.when("a-util", "jQuery", "a-declarative").register(
    "a-draggable",
    function (c, l, f) {
      var h,
        g = {
          _maxZIndex: 0,
          _isInit: !1,
          _draggables: [],
          _init: function () {
            this._isInit || ((this._isInit = !0), (this._maxZIndex = 975));
          },
          create: function (b) {
            this._init();
            b._zimIndex ||
              ((b._zimIndex = 975),
              (this._maxZIndex += 1),
              this._draggables.push(b));
            this.acquireFocus(b);
          },
          acquireFocus: function (b) {
            b.css("zIndex", this._maxZIndex);
            h.css("zIndex", this._maxZIndex - 1);
            for (var a = 0; a < this._draggables.length; a++) {
              var e = this._draggables[a];
              e[0] !== b[0] &&
                e._zimIndex > b._zimIndex &&
                ((e._zimIndex -= e._zimIndex > this._maxZIndex - 1 ? 2 : 1),
                e.css("zIndex", e._zimIndex));
            }
            b._zimIndex = this._maxZIndex;
          },
        },
        b = function (b) {
          var a = b.$event;
          c.contains("touchstart touchend touchmove", b.type) &&
            (a = a.originalEvent.touches[0]);
          return { x: a.clientX, y: a.clientY };
        },
        m = function (c) {
          var a = c.data.$draggable,
            e = a.data("a-draggables"),
            d = b(c);
          e.isMouseDown &&
            (a.css({ left: d.x - e.clickOffset.x, top: d.y - e.clickOffset.y }),
            c.$event.preventDefault());
        },
        t = function (c) {
          var a = c.$event.target || c.$event.srcElement,
            e = c.data.$draggable,
            d = e.data("a-draggables");
          g.acquireFocus(e);
          a = l(a).closest(d.$handle, e);
          d.isMouseDown = 0 < a.length;
          d.isMouseDown &&
            (h && h.removeClass("aok-hidden"),
            (a = b(c)),
            (d.clickOffset = {
              x: a.x - parseFloat(e.css("left")),
              y: a.y - parseFloat(e.css("top")),
            }),
            e.data("a-draggables", d),
            h.data("a-draggables", d),
            c.$event.preventDefault());
        },
        p = function (b) {
          b = b.data.$draggable;
          var a = b.data("a-draggables");
          a.isMouseDown = !1;
          b.data("a-draggables", a);
          h && h.addClass("aok-hidden");
        };
      return {
        draggable: function (b, a) {
          b = b.jquery ? b : l(b);
          a = {
            isMouseDown: !1,
            $draggable: b,
            $handle: a && a.handle ? a.handle : b,
          };
          a.$handle = a.$handle.jquery ? a.$handle : l(a.handle);
          a.$handle.css("cursor", "move");
          h ||
            ((h = l("\x3cdiv\x3e", {
              id: "a-draggables-mousedown-layer",
              class: "aok-hidden",
            }).appendTo("body")),
            f.declarative.create(h, "a-draggables", a));
          g.create(a.$draggable);
          f.declarative.create(a.$draggable, "a-draggables", a);
          f.declarative("a-draggables", ["mousedown", "touchstart"], t);
          f.declarative("a-draggables", ["mouseup", "touchend"], p);
          f.declarative("a-draggables", ["mousemove", "touchmove"], m);
        },
      };
    }
  );
  ("use strict");
  p.when(
    "jQuery",
    "a-util",
    "a-events",
    "a-declarative",
    "a-constants",
    "a-analytics"
  ).register("a-state", function (c, l, f, h, g, b) {
    function m(a, b, d, k) {
      var e = !(a in u);
      if (null === b || c.isArray(b) || c.isPlainObject(b)) {
        var h = l.copy(u[a]);
        h && b && !k && (c.isArray(h) || c.isPlainObject(h))
          ? l.extend(u[a], b)
          : (u[a] = l.copy(b));
        b = l.diff(h, u[a]);
        k = l.copy(u[a]);
        d || f.trigger("a:state:update:" + a, k, b, h);
        e && p.declare(g.constants.PAGESTATE_LOADED_MODULE_PREFIX + a, k);
        return k;
      }
      p.error(
        "Invalid value passed to A.state with a namespace of " +
          a +
          ".  Value: " +
          b,
        "A.state",
        "updateNamespace"
      );
    }
    function t(a, b, d) {
      if (1 === b.length) return (a[b.shift()] = d), a;
      a[b.shift()] = t({}, b, d);
      return a;
    }
    function n() {
      for (
        var a = document.getElementsByTagName("script"), e = 0, d = a.length;
        e < d;
        e++
      )
        if (!c.data(a[e], "a-eval")) {
          var k = c(a[e]),
            f = k.attr("data-a-state");
          if (f) {
            try {
              var g = l.parseJSON(f);
            } catch (w) {
              throw (
                (b.logError(
                  "[AUI] key value interface for accessing state data parsing failed",
                  "ERROR",
                  JSON.stringify({
                    xpath: l.xpath(a[e]),
                    cssSelector: l.cssSelector(a[e]),
                    custody: l.attributionChain(a[e]),
                  })
                ),
                w)
              );
            }
            if (g.key) {
              try {
                var h = l.parseJSON(k.html());
              } catch (w) {
                p.logError(
                  w,
                  "State parsing failed for state " + g.key,
                  "ERROR"
                );
                continue;
              }
              c.data(a[e], "a-eval", !0);
              (k = u[g.key]) && l.extend(h, k);
              m(g.key, h);
            }
          }
        }
    }
    var u = {};
    h.declarative("a-state", function (a) {
      var b = a.$target,
        d = a.data.key,
        c = a.data[a.type];
      c || f.events.defaults[a.targetTag] !== a.type || (c = b.attr("name"));
      c &&
        d &&
        (b.is("select") && (b = b.find(":selected")),
        typeof b.val() !== r &&
          "string" === typeof c &&
          ((a = b.val()),
          b.is("input[type\x3dcheckbox]") && !b.prop("checked") && (a = null),
          (c = t({}, c.split("."), a))),
        m(d, c));
    });
    h = function (a, b, d) {
      return b === r ? l.copy(u[a]) : m(a, b, !!d);
    };
    h.bind = function (a, b) {
      f.on("a:state:update:" + a, b);
    };
    h.replace = function (a, b, d) {
      return m(a, b, !!d, !0);
    };
    f.on("beforeReady", n);
    h.parse = n;
    return { state: h };
  });
  ("use strict");
  p.when(
    "prv:a-guard",
    "jQuery",
    "a-util",
    "a-events",
    "a-declarative",
    "a-state"
  ).register("a-ajax", function (c, l, f, h, g, b) {
    function m(a, b) {
      if (!a) return "";
      var d = "string" === typeof a;
      if ("string" === b) return d ? a : "";
      if ("json" === b) {
        if (d) return a;
        try {
          return JSON && JSON.stringify ? JSON.stringify(a) : "";
        } catch (y) {
          p.logError(y, "AJAX POST failed to convert JSON object to string");
        }
        return "";
      }
      return d ? "" : l.param(a);
    }
    function t(a, b) {
      a &&
        0 !== a.length &&
        ("string" === typeof a && "" === f.trim(a)
          ? b && b(a)
          : (a[0] instanceof Array || (a = [a]),
            f.each(a, function (d) {
              var e = u[d[0]];
              e
                ? e.apply(n, d)
                : ((e = b) ||
                    p.error(
                      "There is no handler for the streaming ajax command: " +
                        a[0],
                      "A.ajax",
                      "chunkHandler"
                    ),
                  e(d));
            })));
    }
    var z = (function () {
        n.XMLHttpRequest ||
          (n.XMLHttpRequest = function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
          });
        var a = (function () {
            function a() {
              0 < b.length ? b.pop().send() : d--;
            }
            var b = [],
              d = 0,
              e = 0,
              c = 0;
            return {
              add: function (a) {
                4 > d
                  ? (a.send(), d++)
                  : (b.push(a),
                    e++,
                    b.length > c && (c = b.length),
                    (a = n.ue) &&
                      a.count &&
                      (a.count("aui:ajax:queued", e),
                      a.count("aui:ajax:maxQueued", c)));
              },
              complete: a,
              abort: function (d) {
                d = f.indexOfArray(b, d);
                -1 !== d && b.splice(d, 1);
                a();
              },
            };
          })(),
          b = function () {},
          e = function (b) {
            var d = b.http,
              e = !1,
              c = !1;
            switch (d.readyState) {
              case 4:
                c = !0;
                break;
              case 3:
                e = !0;
            }
            var k = 200 === d.status || 304 === d.status,
              g = b.responsePosition;
            if (e || (c && k)) {
              var m = d.responseText;
              if (g < m.length) {
                g = m.substring(g, m.length);
                m = g.split("\x26\x26\x26");
                var l = g.lastIndexOf("\x26\x26\x26");
                if (-1 === l && e) return;
                l < g.length - 3 && e && m.pop();
                f.each(m, function (a, d) {
                  if ("" !== f.trim(a))
                    try {
                      var e = f.parseJSON(a);
                    } catch (D) {
                      p.logError(
                        D,
                        "Invalid streaming ajax JSON response: " + a
                      );
                    }
                  else e = a;
                  b.callbacks.chunk(e);
                });
                b.responsePosition += l;
              }
            }
            c &&
              (clearInterval(b.pollTimer),
              clearTimeout(b.timeoutTimer),
              a.complete(),
              k
                ? b.callbacks.success(null, d.statusText, b)
                : b.callbacks.failure(b, d.statusText, d.statusText),
              h.trigger("a:pageUpdate"),
              h.trigger("a:ajax:complete"));
          },
          c = function (b) {
            var d = b.http;
            if (4 === d.readyState) {
              clearInterval(b.pollTimer);
              clearTimeout(b.timeoutTimer);
              a.complete();
              var e = d.responseText;
              try {
                e = f.parseJSON(e);
              } catch (x) {}
              200 !== d.status && 304 !== d.status
                ? b.callbacks.failure(b, d.statusText, d.statusText)
                : b.callbacks.success(e, d.statusText, b);
              h.trigger("a:ajax:complete");
            }
          };
        return (function () {
          function d(b) {
            4 > b.http.readyState &&
              (clearInterval(b.pollTimer),
              b.callbacks.failure(b, "Request Timeout", "Request Timeout"),
              a.complete());
          }
          function k(a, b, d) {
            d = d || {};
            d = f.extend({}, h.all, h[b], d);
            f.each(d, function (b, d) {
              (b || "" === b) && a.setRequestHeader(d, b);
            });
            return a;
          }
          function g(b, d, e, c, f, g, h, m, l, v) {
            var q = b.http;
            q.open(d, e);
            k(q, d, l);
            b.timeout = c;
            b.callbacks.chunk = f || b.callbacks.chunk;
            b.callbacks.success = g || b.callbacks.success;
            b.callbacks.failure = h || b.callbacks.failure;
            b.callbacks.abort = m || b.callbacks.abort;
            v && (q.withCredentials = !0);
            a.add(b);
            return {
              abort: function () {
                b.abort();
              },
            };
          }
          var h = {
              all: { "X-Requested-With": "XMLHttpRequest" },
              get: { Accept: "text/html,*/*" },
              post: {
                Accept: "text/html,*/*",
                "Content-Type": "application/x-www-form-urlencoded",
              },
            },
            m = function () {
              var a = new XMLHttpRequest();
              this.pollTimer = null;
              this.http = a;
              this.responsePosition = 0;
              this.buffer = "";
              this.callbacks = { success: b, failure: b, chunk: b, abort: b };
            };
          m.prototype = {
            send: function () {
              var a = this;
              a.http.send(a.params);
              a.pollTimer = setInterval(function () {
                if (
                  2 <= a.http.readyState &&
                  "unknown" !== typeof a.http.responseText
                ) {
                  var b = a.http.getResponseHeader("Content-Type");
                  b = b ? b.toLowerCase() : "";
                  (-1 !== b.indexOf("application/json-amazonui-streaming") ||
                    -1 !== b.indexOf("application/amazonui-streaming-json")
                    ? e
                    : c)(a);
                }
              }, 25);
              a.timeout = "undefined" === typeof a.timeout ? 2e4 : a.timeout;
              a.timeoutTimer = f.delay(d, a.timeout, a);
            },
            get: function (a, b, d, e, c, k, f, h, m) {
              if (b) {
                var l = a.indexOf("?"),
                  v = a.charAt(a.length - 1);
                -1 < l
                  ? "?" !== v && "\x26" !== v && (a += "\x26")
                  : (a += "?");
                a += b;
              }
              return g(this, "get", a, d, e, c, k, f, h, m);
            },
            abort: function () {
              this.http && this.http.abort();
              clearInterval(this.pollTimer);
              clearTimeout(this.timeoutTimer);
              a.abort(this);
              this.callbacks.abort(this);
            },
            post: function (a, b, d, e, c, k, f, h, m) {
              this.params = b;
              return g(this, "post", a, d, e, c, k, f, h, m);
            },
          };
          return m;
        })();
      })(),
      u = {
        update: function (a, b, e) {
          l(b).html(e);
        },
        append: function (a, b, e) {
          a = l(b);
          a.html(a.html() + e);
        },
        prepend: function (a, b, e) {
          a = l(b);
          a.html(e + a.html());
        },
        state: function (a, e, c) {
          b.state(e, c);
        },
        script: function (a, b) {
          eval(b);
        },
        trigger: function (a, b) {
          var d = Array.prototype.slice.call(arguments, 1);
          h.trigger.apply(void 0, d);
        },
      },
      a = {
        "a-ajax-update": function (a) {
          var b = new z(),
            d = function () {
              var a = n.ue;
              a && a.tag && (a.tag("aui"), a.tag("aui:ajax"));
            },
            e = a.abort,
            c = l(a.indicator),
            g = c.hasClass("aok-hidden");
          c.removeClass("aok-hidden").show();
          var h = function (a, b) {
              c.hide();
              g && c.addClass("aok-hidden");
              d();
              a && a.apply(n, b);
            },
            m =
              "string" === typeof a.method && "post" === a.method.toLowerCase()
                ? "post"
                : "get";
          "get" === m &&
            !1 === a.cache &&
            (a.params += ["" === a.params ? "" : "\x26", "_\x3d", f.now()].join(
              ""
            ));
          return b[m](
            a.url,
            a.params,
            a.timeout,
            function (b) {
              d();
              t(b, a.chunk);
            },
            function () {
              h(a.success, arguments);
            },
            function () {
              h(a.failure, arguments);
            },
            e,
            a.headers,
            a.withCredentials
          );
        },
      };
    g.declarative("a-ajax-update", function (b) {
      var d = b.$target,
        e = b.action,
        c = b.data;
      if (c || h.events.defaults[b.targetTag] === b.type)
        if ("object" !== typeof c || c[b.type]) {
          c = c || {};
          var f = c.url || d.attr("href") || d.attr("action"),
            g = m(c.params, c.paramsFormat),
            l = d.attr("method") || c.method,
            t = c.indicator;
          c = c.timeout;
          f || p.error("No ajax url provided.", "A.ajax", "declarativeHandler");
          "form" === b.targetTag &&
            b.type === h.events.defaults.form &&
            ((d = d.serialize()), (g += d));
          b.$event.preventDefault();
          return a[e]({
            url: f,
            params: g,
            method: l,
            indicator: t,
            operation: e,
            timeout: c,
          });
        }
    });
    var e = function (b, e) {
      e = e || {};
      var d = this,
        f = e.headers || {};
      e.accepts !== r && (f.Accept = e.accepts);
      e.contentType !== r && (f["Content-Type"] = e.contentType);
      var g = m(e.params, e.paramsFormat);
      return a["a-ajax-update"](
        c.obj(this, {
          url: b,
          cache: e.cache,
          params: g,
          method: e.method,
          chunk: e.chunk,
          success:
            e.success &&
            function () {
              return c.guardTimeFn(d, e.success).apply(this, arguments);
            },
          failure:
            (e.failure || e.error) &&
            function () {
              return c
                .guardTimeFn(d, e.failure || e.error)
                .apply(this, arguments);
            },
          abort: e.abort,
          indicator: e.indicator,
          timeout: e.timeout,
          headers: f,
          withCredentials: !!e.withCredentials,
        })
      );
    };
    return {
      ajax: e,
      get: function (a, b) {
        b = b || {};
        b.method = "get";
        return e.call(this, a, b);
      },
      post: function (a, b) {
        b = b || {};
        b.method = "post";
        return e.call(this, a, b);
      },
    };
  });
  ("use strict");
  p.when("a-util", "p-detect", "a-prefix").register(
    "a-animate",
    function (c, l, f) {
      function h(a, b, d) {
        a = a.jquery ? a[0] : a;
        b = f.prefixes.getStyle(b);
        a.style[b] = d;
      }
      function g(a) {
        var b = "",
          d = l.capabilities.transform3d;
        a.top !== r && a.left !== r
          ? ((b = "translate"),
            d && (b += "3d"),
            (b += "(" + a.left + ", " + a.top),
            d && (b += ", 0"),
            (b += ")"))
          : (a.top !== r
              ? (b = "translateY(" + a.top + ")")
              : a.left !== r && (b = "translateX(" + a.left + ")"),
            d && (b += " translateZ(0)"));
        a.scale !== r && (b += " scale(" + a.scale + ")");
        return b;
      }
      function b(a) {
        var b = {},
          d = !1;
        c.each(t, function (e) {
          e in a && ((d = !0), (b[e] = a[e]), delete a[e]);
        });
        return d ? b : null;
      }
      function m(a, b, d) {
        l.capabilities.transform
          ? ("string" === typeof d && (d = parseInt(d, 10)),
            c.isFiniteNumber(d) || (d = 0),
            (a = parseInt(a.css(b), 10)),
            c.isFiniteNumber(a) || (a = 0),
            (d = d - a + "px"))
          : c.isFiniteNumber(d) && (d += "px");
        return d;
      }
      var t = ["top", "left", "scale"],
        n = {
          animate: function (a, b, d, c, f) {
            a._a || (a._a = 0);
            a._a++;
            var e = function () {
              a._a--;
              f && f();
            };
            a.queue("fx", [
              function () {
                a.animate(b, {
                  duration: d,
                  easing: "linear" === c ? c : "swing",
                  complete: e,
                  queue: !1,
                });
              },
            ]);
          },
          fadeIn: function (a, b, d, c) {
            (a.hasClass("aok-hidden") || a.hasClass("a-hidden")) &&
              a.css("display", "none").removeClass("aok-hidden a-hidden");
            this.stopAnimation(a, !0, !0);
            a.fadeIn({
              duration: b,
              easing: "linear" === d ? d : "swing",
              complete: c,
              queue: !1,
            });
          },
          fadeOut: function (a, b, d, c) {
            this.stopAnimation(a, !0, !0);
            var e = a.css("opacity");
            a.fadeOut({
              duration: b,
              easing: "linear" === d ? d : "swing",
              complete: function () {
                a.css("opacity", e);
                c && c();
              },
              queue: !1,
            });
          },
          fadeToggle: function (a, b, d, c) {
            a.fadeToggle({
              duration: b,
              easing: "linear" === d ? d : "swing",
              complete: c,
              queue: !1,
            });
          },
          slideUp: function (a, b, d, c) {
            a.slideUp({
              duration: b,
              easing: "linear" === d ? d : "swing",
              complete: c,
              queue: !1,
            });
          },
          slideDown: function (a, b, d, c) {
            a.slideDown({
              duration: b,
              easing: "linear" === d ? d : "swing",
              complete: c,
              queue: !1,
            });
          },
          slideToggle: function (a, b, d, c) {
            a.slideToggle({
              duration: b,
              easing: "linear" === d ? d : "swing",
              complete: c,
              queue: !1,
            });
          },
          isAnimated: function (a) {
            a = a.jquery ? a[0] : a;
            return a._a && 0 < a._a;
          },
          stopAnimation: function (a, b, d) {
            a.stop(b, d);
          },
        },
        u = {
          animate: function (a, e, d, f, t) {
            if (a && a.length) {
              var k = a[0];
              e = c.copy(e);
              d = d === r ? 250 : d;
              f = f || "linear";
              e.top !== r && (e.top = m(a, "top", e.top));
              e.left !== r && (e.left = m(a, "left", e.left));
              h(a, "transition", 4 > d ? "all 0ms" : "all " + d + "ms " + f);
              4 < d
                ? (k._a === r && (k._a = 0),
                  k._a++,
                  (f = function () {
                    0 < k._a && k._a--;
                    k._a || h(a, "transition", "");
                    a.removeData("aAnimateTimeoutId").removeData(
                      "aAnimateOnComplete"
                    );
                    t && t();
                  }),
                  a
                    .data("aAnimateOnComplete", f)
                    .data("aAnimateTimeoutId", c.delay(f, d)))
                : t && c.delay(t, 0);
              l.capabilities.transform &&
                (d = b(e)) &&
                h(
                  a,
                  "transform",
                  g({ top: d.top, left: d.left, scale: d.scale })
                );
              c.objectIsEmpty(e) || a.css(e);
            }
          },
          fadeIn: function (a, b, d, f) {
            this.stopAnimation(a, !0, !0);
            if (a.data("aTargetOpacity") === r) {
              var e = a.css("opacity") || 1;
              a.data("aTargetOpacity", e);
            } else e = a.data("aTargetOpacity");
            a.css("opacity", "0").removeClass("a-hidden aok-hidden").show();
            c.reflowCssChanges(a);
            this.animate(a, { opacity: e }, b, d, function () {
              a.show();
              f && f();
            });
          },
          fadeOut: function (a, b, d, c) {
            this.stopAnimation(a, !0, !0);
            var e = a.css("opacity");
            a.data("aTargetOpacity") === r && a.data("aTargetOpacity", e);
            this.animate(a, { opacity: 0 }, b, d, function () {
              a.hide().css("opacity", e);
              c && c();
            });
          },
          fadeToggle: function (a, b, d, c) {
            ("none" === a.css("display") || 0.05 > +a.css("opacity")
              ? this.fadeIn
              : this.fadeOut
            ).call(this, a, b, d, c);
          },
          slideUp: function (a, b, d, f) {
            var e = this.animate;
            a.css({ height: a.innerHeight(), overflow: "hidden" });
            c.delay(function () {
              e(a, { height: 0 }, b, d, function () {
                a.hide();
                a.css({ height: "", overflow: "" });
                f && f();
              });
            }, 0);
          },
          slideDown: function (a, b, d, f) {
            var e = a.innerHeight(),
              g = this.animate;
            a.css({ height: 0, overflow: "hidden" });
            a.show();
            c.delay(function () {
              g(a, { height: e }, b, d, function () {
                f && f();
                a.css({ height: "", overflow: "" });
              });
            }, 0);
          },
          slideToggle: function (a, b, d, c) {
            (a.is(":visible") ? this.slideUp : this.slideDown).call(
              this,
              a,
              b,
              d,
              c
            );
          },
          isAnimated: function (a) {
            a = a.jquery ? a[0] : a;
            return a._a && 0 < a._a;
          },
          stopAnimation: function (a, b, d) {
            if (a && a.length) {
              var e = a[0];
              h(a, "transition", "all " + (d ? "1" : "0") + "ms");
              b && (e._a = 0);
              c.reflowCssChanges(a);
              clearTimeout(a.data("aAnimateTimeoutId"));
              a.data("aAnimateOnComplete") && a.data("aAnimateOnComplete")();
            }
          },
        };
      return l.capabilities.transition ? u : n;
    }
  );
  ("use strict");
  p.when("A", "jQuery").register("a-image-lazy-loader", function (c, l) {
    function f() {
      l(".a-lazy-loaded").each(function () {
        b.set(l(this));
      });
    }
    function h() {
      var h = [];
      l(".a-lazy-loaded").each(function () {
        var m = l(this);
        m.data("src") &&
          g(m) &&
          (m.load(function () {
            c.trigger("a:image:lazyLoaded", m);
            f();
          }),
          h.push(m),
          m.removeClass("a-lazy-loaded"),
          b.remove(m));
      });
      c.each(h, function (b) {
        b.attr("src", b.data("src"));
      });
    }
    function g(c) {
      b.get(c) || b.set(c);
      var f = l(n),
        g = f.scrollTop();
      f = n.innerHeight ? n.innerHeight : f.height();
      var h = g + f + 500;
      g -= 500;
      var a = b.get(c);
      c = a.top;
      a = a.height;
      var e = c + a;
      return (
        (c >= g && c < h) || (e > g && e <= h) || (a > f && c <= g && e >= h)
      );
    }
    var b = (function () {
      var b = {},
        c = 0;
      return {
        get: function (c) {
          return b[c.data("cacheKey")];
        },
        set: function (f) {
          f.data("cacheKey") || (f.data("cacheKey", c), c++);
          b[f.data("cacheKey")] = { top: f.offset().top, height: f.height() };
        },
        remove: function (c) {
          c.data("cacheKey") && delete b[c.data("cacheKey")];
        },
      };
    })();
    f();
    h();
    c.on("scroll", function () {
      h();
    });
    c.on(
      "scroll",
      c.debounce(function () {
        f();
        h();
      }, 250)
    );
    c.on("resize", h);
    c.on("a:image:lazyLoad", h);
    c.on.ready(h);
  });
  ("use strict");
  p.register("a-image-url-key-handler", function () {
    return {
      generate: function (c, l) {
        return c;
      },
      parse: function (c) {
        return { url: c };
      },
    };
  });
  ("use strict");
  p.when(
    "jQuery",
    "a-util",
    "a-events",
    "a-defer",
    "p-detect",
    "a-image-url-key-handler"
  ).register("a-image", function (c, l, f, h, g, b) {
    function m(a) {
      a = c(a);
      var b = a.data("a-dynamic-image");
      if (b && "object" === typeof b) {
        var e = a.data("a-dynamic-image-container");
        "undefined" === typeof e &&
          ((e = a.closest(".a-dynamic-image-container")),
          0 === e.length && (e = a.parent()),
          a.data("a-dynamic-image-container", e));
        var h =
            g.capabilities.hires && n.devicePixelRatio ? n.devicePixelRatio : 1,
          m = e.width() * h,
          k = e.height() * h,
          t = Number.MAX_VALUE,
          p = Number.MAX_VALUE,
          u = a.attr("src") || "",
          q,
          r = m / k;
        l.each(b, function (a, b) {
          var d = "string" === typeof a ? JSON.parse(a) : a;
          a = parseInt(d[0], 10);
          d = parseInt(d[1], 10);
          a -= k;
          d -= m;
          a = 1 <= r ? d : a;
          Math.abs(a) < p && 0 <= a && ((p = Math.abs(a)), (q = b));
          Math.abs(a) < t && ((t = Math.abs(a)), (u = b));
        });
        q && (u = q);
        d.schedule(u, a);
        d.fill();
        a.data("a-image-updated", !0);
        f.trigger("a:dynamicImage:updated", { image: a, url: u });
        return u;
      }
    }
    function t() {
      c("img.a-dynamic-image").each(function () {
        c(this).data("a-manual-replacement") || m(this);
      });
    }
    function p() {
      c("img.a-dynamic-image").each(function () {
        var a = c(this);
        a.data("a-manual-replacement") || a.data("a-image-updated") || m(this);
      });
    }
    var u = document.getElementsByTagName("img"),
      a = {},
      e = 0,
      d = (function () {
        var d = [],
          c = {};
        return {
          schedule: function (e, f) {
            e = b.generate(e, f.attr("crossorigin"));
            c[e] || (d.push(e), (c[e] = !0));
            a[e] = a[e] || [];
            for (var g = 0; g < a[e].length; g++) if (f.is(a[e][g])) return;
            a[e].push(f);
          },
          fill: function () {
            for (var a = 0; a < 2 - e; a++)
              if (0 < d.length) {
                var b = d.shift();
                c[b] = !1;
                k.load(b);
              }
          },
        };
      })(),
      k = (function () {
        function g(d) {
          var c = a[d],
            e = b.parse(d).url;
          c &&
            (l.each(c, function (a) {
              a.data("a-image-replaced") !== e &&
                (a.data("a-image-replaced", e),
                h.defer(function () {
                  a.attr("src", e);
                  f.trigger("a:image:load", { $imageElement: a, url: e });
                  var b = a.data("a-image-name");
                  b &&
                    f.trigger("a:image:load:" + b, {
                      $imageElement: a,
                      url: e,
                    });
                }));
            }),
            (a[d] = []));
        }
        var m = {};
        return {
          load: function (a) {
            if (m[a]) g(a);
            else if (!1 !== m[a]) {
              var c = new Image(),
                f = (c.onload = l.once(function () {
                  e--;
                  g(a);
                  m[a] = !0;
                  d.fill();
                }));
              c.onerror = function () {
                e--;
                m[a] = !1;
                d.fill();
              };
              e++;
              h.defer(function () {
                var d = b.parse(a),
                  e = d.crossOrigin;
                e && (c.crossOrigin = e);
                c.src = d.url;
                c.complete && h.defer(f);
              });
            }
          },
          poll: function () {
            l.isPageHidden() ||
              l.each(u, function (a) {
                a = c(a);
                !a.data("a-hires") ||
                  a.data("a-hires-loaded") ||
                  a.data("a-manual-replacement") ||
                  a.is(":hidden") ||
                  !l.onScreen(a) ||
                  (d.schedule(a.data("a-hires"), a),
                  a.data("a-hires-loaded", !0));
              });
          },
        };
      })();
    g.capabilities.hires &&
      f.on.ready(function () {
        l.interval(function () {
          k.poll();
          d.fill();
        }, 2e3);
      });
    f.on("ready", function () {
      t();
      f.on("resize", t);
      f.on("a:pageUpdate", p);
    });
    return {
      loadHiResImage: function (a) {
        var b = [];
        c(a).each(function () {
          var a = c(this),
            e = a.data("a-hires");
          e && (d.schedule(e, a), d.fill(), b.push(e));
          a.data("a-hires-loaded", !0);
        });
        return b;
      },
      loadDynamicImage: function (a) {
        var b = [];
        c(a).each(function () {
          b.push(m(this));
        });
        return b;
      },
      loadImageManually: function (a, b) {
        var d = [];
        c(a, b).each(function () {
          var a = c(this);
          if (!a.data("a-image-already-loaded")) {
            a.data("a-image-already-loaded", !0);
            var b = m(a),
              e = c("\x3cimg\x3e").attr("src", b || a.data("a-image-source"));
            d.push(b);
            b = "" + this.className;
            var f = a.data("a-extra-classes");
            f && (b += " " + f);
            e.attr("class", b);
            e.attr("id", this.id);
            e.attr("style", a.attr("style"));
            e.attr("alt", a.attr("alt"));
            e.attr("usemap", a.attr("usemap"));
            e.attr("title", a.attr("title"));
            e.attr("role", a.attr("role"));
            (b = a.data("a-image-crossorigin")) && e.attr("crossorigin", b);
            l.each(this.attributes, function (a) {
              a &&
                a.name &&
                (0 === a.name.indexOf("data-") ||
                  0 === a.name.indexOf("aria-")) &&
                e.attr(a.name, a.value);
            });
            e.data(a.data());
            a.replaceWith(e);
          }
          return d;
        });
      },
      loadDescendantImagesManually: function (a, b) {
        a = c(a, b)
          .find("div.a-manually-loaded")
          .filter(function () {
            return !c(this).data("a-image-already-loaded");
          });
        return this.loadImageManually(a);
      },
    };
  });
  p.register("a-class", function () {
    function c() {}
    var l = /xyz/.test(function () {
      xyz;
    })
      ? /\b_super\b/
      : /.*/;
    c.extend = function (f) {
      var h = this.prototype,
        g = Object.create
          ? Object.create(h)
          : (function (b) {
              function c() {}
              c.prototype = b;
              return new c();
            })(h),
        b;
      for (b in f)
        g[b] =
          "function" === typeof f[b] &&
          "function" === typeof h[b] &&
          l.test(f[b])
            ? (function (b, c) {
                return function () {
                  var f = this._super;
                  this._super = h[b];
                  var g = c.apply(this, arguments);
                  this._super = f;
                  return g;
                };
              })(b, f[b])
            : f[b];
      f =
        "function" === typeof g.init
          ? g.hasOwnProperty("init")
            ? g.init
            : function () {
                h.init.apply(this, arguments);
              }
          : function () {};
      f.prototype = g;
      g.constructor = f;
      f.extend = c.extend;
      return f;
    };
    return {
      createClass: function (f) {
        return c.extend(f);
      },
    };
  });
  ("use strict");
  p.register("a-constants", function () {
    return {
      constants: {
        keycodes: {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          SPACE: 32,
          LEFT_ARROW: 37,
          UP_ARROW: 38,
          RIGHT_ARROW: 39,
          DOWN_ARROW: 40,
          DELETE: 46,
          HOME: 36,
          END: 35,
        },
        declarativeEvents:
          "blur click dblclick focus focusin focusout mousedown mouseup mouseenter mouseleave mousemove change submit touchstart touchend touchmove touchcancel keydown keyup keypress MSPointerDown pointerdown MSPointerUp pointerup MSPointerMove pointermove MSPointerCancel pointercancel MSPointerOver pointerenter MSPointerOut pointerleave",
        HIDE_CLASS: "aok-hidden",
        BROWSER_EVENTS: {
          SCROLL: "scroll",
          RESIZE: "resize",
          ORIENTATION_CHANGE: "orientationChange",
        },
        PAGESTATE_LOADED_MODULE_PREFIX: "page-state-loaded:",
        NOOP: function () {},
      },
    };
  });
  ("use strict");
  p.when("jQuery", "a-detect", "a-events", "a-util", "a-defer").register(
    "a-browser-events",
    function (c, l, f, h, g) {
      function b() {
        return n.innerHeight
          ? n.innerHeight
          : document.documentElement.clientHeight;
      }
      function m() {
        return n.innerWidth
          ? n.innerWidth
          : document.documentElement.clientWidth;
      }
      function t() {
        return n.innerWidth
          ? Math.round(
              (document.documentElement.clientWidth / n.innerWidth) * 10
            ) / 10
          : 1;
      }
      function p(a) {
        switch (a) {
          case d.ALL:
            a = "orientation height width zoom scrollLeft scrollTop".split(" ");
            break;
          case d.SCROLL:
            a = ["scrollLeft", "scrollTop"];
            break;
          case d.ZOOM:
            a = ["height", "width", "zoom", "scrollLeft", "scrollTop"];
            break;
          default:
            a = ["orientation", "height", "width", "scrollLeft", "scrollTop"];
        }
        for (var c = {}, f, g; (g = a.pop()) !== r; )
          (f = k[g]),
            "orientation" === g
              ? (k[g] =
                  n.orientation === r ? (m() > b() ? 90 : 0) : n.orientation)
              : "height" === g
              ? (k[g] = b())
              : "width" === g
              ? (k[g] = m())
              : "scrollTop" === g
              ? (k[g] = n.scrollY ? n.scrollY : e.scrollTop())
              : "scrollLeft" === g
              ? (k[g] = n.scrollX ? n.scrollX : e.scrollLeft())
              : "zoom" === g && (k[g] = t()),
            k[g] !== f && (c[g] = f);
        return c;
      }
      function u(a) {
        if ((a = w[a]))
          (a.pollCounter = a.maxPollCount),
            a.intervalId ||
              (a.intervalId = setInterval(a.handler, a.pollInterval));
      }
      function a(a) {
        (a = w[a]) &&
          a.intervalId &&
          (clearInterval(a.intervalId), (a.intervalId = 0));
      }
      var e = c(n),
        d = {
          ORIENTATION_CHANGE: "orientationchange",
          SCROLL: "scroll",
          RESIZE: "resize",
          ZOOM: "zoom",
          ALL: "all",
        },
        k = {
          scrollLeft: 0,
          scrollTop: 0,
          height: b(),
          width: m(),
          orientation:
            n.orientation === r ? (m() > b() ? 90 : 0) : n.orientation,
          zoom: t(),
        };
      f.on("beforeReady", function () {
        p(d.ALL);
      });
      var q = {
          speed: 0,
          degree: 0,
          direction: "",
          positionX: 0,
          positionY: 0,
        },
        y = [],
        B;
      e.bind(
        "mousemove",
        h.throttle(function (a) {
          a = { x: a.clientX, y: a.clientY };
          if (B) {
            var b = B,
              d = 0,
              c = 0;
            y.push({
              speed:
                (Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) /
                  50) *
                10,
              degree: Math.atan2(a.y - b.y, a.x - b.x) / (Math.PI / 180),
            });
            4 < y.length && (y = y.slice(-4));
            b = y.length;
            for (var e = 0; e < b; e++) (d += y[e].speed), (c += y[e].degree);
            d = Number((d / b).toFixed(2));
            c = Math.round(c / b);
            q = {
              speed: d,
              degree: c,
              direction:
                0 <= c
                  ? 157.5 < c
                    ? "W"
                    : 112.5 < c
                    ? "SW"
                    : 67.5 < c
                    ? "S"
                    : 22.5 < c
                    ? "SE"
                    : "E"
                  : -157.5 > c
                  ? "W"
                  : -112.5 > c
                  ? "NW"
                  : -67.5 > c
                  ? "N"
                  : -22.5 > c
                  ? "NE"
                  : "E",
              positionX: a.x,
              positionY: a.y,
            };
            B = a;
          } else a && (B = a);
        }, 50)
      );
      e.bind(
        d.SCROLL,
        h.throttle(function () {
          var a = p(d.SCROLL);
          f.trigger(d.SCROLL, k, a);
        }, 100)
      );
      var w = {};
      h.each([d.RESIZE, d.ZOOM], function (a) {
        w[a] = {
          handler: function () {},
          lastViewport: h.copy(k),
          maxPollCount: 5,
          pollCounter: 5,
          pollInterval: 100,
          intervalId: 0,
        };
      });
      w.resize.handler = function () {
        var b = [],
          c = w.resize;
        p("resize");
        var e = h.diff(k, c.lastViewport);
        e.orientation && b.push(d.ORIENTATION_CHANGE);
        e.width || e.height
          ? b.push(d.RESIZE)
          : l.capabilities.isIETouchCapable && e.scrollTop && b.push(d.RESIZE);
        b.length &&
          ((c.lastViewport = h.copy(k)),
          h.each(b, function (a) {
            f.trigger(a, k, e);
          }));
        0 === --c.pollCounter && a(d.RESIZE);
      };
      w.resize.pollInterval = 100;
      w.resize.maxPollCount = 10;
      e.bind(d.RESIZE, function (a) {
        u(d.RESIZE);
      });
      w.zoom.handler = function () {
        p(d.ZOOM);
        var b = w.zoom,
          c = h.diff(k, b.lastViewport);
        c.zoom && ((b.lastViewport = h.copy(k)), f.trigger(d.ZOOM, k, c));
        0 === --b.pollCounter && a(d.ZOOM);
      };
      w.zoom.pollInterval = 200;
      l.capabilities.android &&
        e.bind("touchcancel", function (a) {
          2 === a.originalEvent.changedTouches.length &&
            ((w.zoom.maxPollCount = 15), u(d.ZOOM));
        });
      l.capabilities.ios &&
        e.bind("touchend", function (a) {
          1 === a.originalEvent.touches.length &&
            ((w.zoom.maxPollCount = 1), u(d.ZOOM));
        });
      l.capabilities.ios ||
        l.capabilities.android ||
        e.bind("resize", function (a) {
          w.zoom.maxPollCount = 5;
          u(d.ZOOM);
        });
      return {
        viewport: function (a) {
          a && p(d.ALL);
          return h.copy(k);
        },
        cursor: function () {
          return h.copy(q);
        },
        scrollBarWidth: function (a) {
          if (
            a ||
            (document && document.body && document.body.scrollHeight
              ? document.body.scrollHeight
              : 0) > b()
          ) {
            a = document.createElement("div");
            a.style.visibility = "hidden";
            a.style.width = "100%";
            a.style.overflowX = "scroll";
            document.body.appendChild(a);
            var d = a.offsetHeight;
            document.body.removeChild(a);
            return d;
          }
          return 0;
        },
      };
    }
  );
  ("use strict");
  p.when("a-util").register("a-request-animation-frame", function (c) {
    for (
      var l = 0, f = ["ms", "moz", "webkit", "o"], h = 0;
      h < f.length && !n.requestAnimationFrame;
      ++h
    )
      (n.requestAnimationFrame = n[f[h] + "RequestAnimationFrame"]),
        (n.cancelAnimationFrame =
          n[f[h] + "CancelAnimationFrame"] ||
          n[f[h] + "CancelRequestAnimationFrame"]);
    n.requestAnimationFrame ||
      (n.requestAnimationFrame = function (f, b) {
        var g = c.now(),
          h = Math.max(0, 16 - (g - l));
        b = n.setTimeout(function () {
          f(g + h);
        }, h);
        l = g + h;
        return b;
      });
    n.cancelAnimationFrame ||
      (n.cancelAnimationFrame = function (c) {
        clearTimeout(c);
      });
    return {
      requestAnimationFrame: function (c, b) {
        return n.requestAnimationFrame(c, b);
      },
      cancelAnimationFrame: function (c) {
        n.cancelAnimationFrame(c);
      },
    };
  });
  ("use strict");
  p.when("jQuery").register("a-form-controls-api", function (c) {
    var l = 0,
      f = function (f) {
        return f && f.jquery ? f : f && 1 === f.nodeType ? c(f) : null;
      },
      h = function (c, b, h) {
        var g = f(c);
        if (!g || 1 !== g.length) return !1;
        c = g.find("input").first();
        b !== r &&
          ((b = !!b),
          g.hasClass("a-touch-multi-select") &&
            (g
              .find("i.a-icon")
              .first()
              .toggleClass("a-icon-touch-multi-select-active", b)
              .toggleClass("a-icon-touch-multi-select", !b),
            g.attr("aria-checked", b)),
          c.prop("checked") !== b && c.prop("checked", b).trigger("change"));
        h !== r &&
          ((h = !!h), c.prop("disabled") !== h && c.prop("disabled", h));
      };
    return {
      findFormElementContainer: function (g) {
        if ((g = f(g)) && 1 === g.length) {
          var b = g.closest("form");
          0 === b.length &&
            ((b = g.closest("fieldset")), 0 === b.length && (b = c(document)));
          return b;
        }
      },
      toggleCheckboxState: function (c) {
        c = f(c);
        if (c && 1 === c.length) {
          var b = c.find("input").first();
          h(c, !b[0].checked);
        }
      },
      setCheckboxState: h,
      setRadioState: h,
      normalizeElement: function (c) {
        if ((c = (c = f(c)) ? c : f(this)) && 1 === c.length) {
          var b = c.find("input").first();
          b.attr("type");
          var g = c.hasClass("a-touch-multi-select");
          c.attr("id") ||
            b.attr("id") ||
            (g && (!g || c.parent().attr("id"))) ||
            ((g = "a-form-controls-autoid-" + l),
            c
              .attr("aria-labelledby", g)
              .find(
                ".a-checkbox-label, .a-radio-label, .a-touch-multi-select-item-label"
              )
              .attr("id", g),
            l++);
          h(c, b[0].checked, b[0].disabled);
        }
      },
      normalizeFieldsets: function (f) {
        c(f)
          .closest("fieldset")
          .each(function (b, f) {
            b = c(f);
            f = b.find("legend").first();
            if (f.length) {
              var g = f.attr("id");
              g || ((g = "a-form-controls-autoid-" + l), f.attr("id", g), l++);
              b.attr("aria-describedby", g);
            }
          });
      },
    };
  });
  ("use strict");
  p.when("a-util", "a-constants").execute("prepare-a-weblab", function (c, l) {
    p.when(
      l.constants.PAGESTATE_LOADED_MODULE_PREFIX + "a-wlab-states"
    ).register("a-weblab", function (f) {
      function h(b) {
        n || (r[b] = m[b]);
        return (n && n[b]) || m[b];
      }
      function g(b) {
        return h(b) || "C";
      }
      function b(b) {
        return h(b) || "C";
      }
      var m = f || {},
        n,
        r = {};
      p.when(
        l.constants.PAGESTATE_LOADED_MODULE_PREFIX + "a-ltree-states"
      ).execute(function (b) {
        n = b || {};
        c.each(c.keys(r), function (a) {
          (n[a] || r[a]) &&
            n[a] !== r[a] &&
            p.log(
              "a-weblab returned wrong value for " +
                a +
                ". It returned " +
                r[a] +
                ". it is set as " +
                n[a] +
                " at a-ltree-states."
            );
        });
      });
      return {
        is: function (c, a, e) {
          return (e ? b : g)(c) === a;
        },
        isActive: function (b) {
          return !!h(b);
        },
        noTrigger: g,
        trigger: b,
      };
    });
  });
  ("use strict");
  p.declare("prv:a-post-atf-catchdomready", !0);
  p.when("a-util", "a-defer", "prv:a-post-atf-catchdomready").register(
    "prv:a-post-atf",
    function (c, l, f) {
      function h() {
        m ||
          ((m = !0),
          c.each(b, function (b) {
            l.defer(b);
          }),
          (b = []));
      }
      function g() {
        f && h();
      }
      var b = [],
        m = !1;
      p.when("af", "cf").execute("flush_queued_functions_after_ATF", h);
      p.when("a-domready").execute(
        "flush_queued_functions_after_domready",
        function () {
          c.delay(g, 500);
        }
      );
      return {
        execute: function (c) {
          m ? l.defer(c) : b.push(c);
        },
      };
    }
  );
  ("use strict");
  p.register("prv:a-tnr", function () {
    function c() {
      for (var c = Array(arguments.length), h = 0; h < c.length; ++h)
        c[h] = arguments[h];
      return c;
    }
    function l() {}
    return {
      findTnrAttribute: function () {
        return null;
      },
      ack: l,
      ackDelegated: l,
      ackDeclarative: l,
      wrapJqBindArgs: function () {
        return c.apply(null, arguments).slice(1);
      },
      wrapJqUnbindArgs: c,
      wrapDeclarativeActionHandler: function (c) {
        return c;
      },
    };
  });
  ("use strict");
  p.when("A").register("a-component-mixins", function (c) {
    function l(f) {
      for (var b = 0; b < f.length; b++)
        if (0 > c.indexOfArray(h, f[b])) return !1;
      return !0;
    }
    var f = 0,
      h = c.constants.declarativeEvents.split(" ");
    return {
      show: function () {
        this._$element.removeClass("a-hidden aok-hidden").show();
        return this;
      },
      hide: function () {
        this._$element.addClass("aok-hidden");
        return this;
      },
      toggle: function () {
        return this._$element.hasClass("aok-hidden")
          ? this.show()
          : this.hide();
      },
      size: function () {
        return this._$element.size();
      },
      isEmpty: function () {
        return 0 === this._$element.size();
      },
      on: function (g, b) {
        var h = c.parseFunctionName(b);
        h || p.error.call({}, "Please name all asynchronous event callbacks");
        if ((g = g ? g.split(" ") : r)) {
          this.fnMap = this.fnMap || {};
          l(g) || p.error.call({}, "That event is not supported!");
          var n = this;
          c.each(
            g,
            function (g) {
              this.fnMap[g] = this.fnMap[g] || [];
              var l = (this.fnMap[g][b] = "a-component-event-" + f++);
              c.declarative(l, g, function () {
                try {
                  b.apply(n, n.callbackArgs || []);
                } catch (a) {
                  p.logError.call(
                    {},
                    a,
                    "Error occurred in an asynchronous event callback",
                    "FATAL",
                    (b.caller || "") + g + "handler:" + (h || "anonymous")
                  );
                }
              });
              c.declarative.create(n._$element, l);
            },
            n
          );
        }
      },
      off: function (f, b) {
        f = f ? f.split(" ") : r;
        this.fnMap ||
          p.error.call({}, "There are no callbacks assigned to this component");
        f && b
          ? c.each(
              f,
              function (f) {
                try {
                  c.declarative.remove(this._$element, this.fnMap[f][b]),
                    delete this.fnMap[f][b];
                } catch (t) {
                  p.error.call(
                    {},
                    "The component is not bound to a callback with name " +
                      c.parseFunctionName(b) || "anonymous for event " + f
                  );
                }
              },
              this
            )
          : b || f
          ? !b && f
            ? c.each(
                f,
                function (b) {
                  for (var c in this.fnMap[b])
                    this.fnMap[b].hasOwnProperty(c) && this.off(b, c);
                  delete this.fnMap[b];
                },
                this
              )
            : p.error.call(
                {},
                "Please provide an event associated with the callback"
              )
          : (c.declarative.remove(this._$element), delete this.fnMap);
      },
      trigger: function (f, b) {
        this.callbackArgs = b || [];
        c.$.fn.trigger.call(this._$element, f);
      },
    };
  });
  ("use strict");
  p.when(
    "A",
    "jQuery",
    "a-component-mixins",
    "a-analytics",
    "prv:a-sampler"
  ).register("a-component", function (c, l, f, h, g) {
    var b = c.createClass({
      init: function (b, f) {
        c.contains(b, ".a-") &&
          p.error(
            "{API} Cannot create components using 'a-' selectors. Apply your own CSS class or ID to select this element.",
            "API",
            "component"
          );
        this._$element = l(b, f);
        this._trackApi();
      },
      _trackApi: function () {
        this._componentName &&
          g("AUI API Analytics") &&
          h.increment("api:" + this._componentName);
      },
    });
    return {
      create: function (h) {
        var g = h.mixin;
        g && delete h.mixin;
        h = b.extend(h);
        g && c.mixin(h.prototype, f, g);
        return h;
      },
    };
  });
  ("use strict");
  p.when("A", "jQuery", "a-component").register("a-alert", function (c, l, f) {
    var h = ["error", "success", "warning", "info"],
      g = c
        .map(h, function (b) {
          return "a-alert-" + b;
        })
        .join(" "),
      b = c
        .map(h, function (b) {
          return "a-alert-inline-" + b;
        })
        .join(" "),
      m = document.createElement("h4");
    m.className = "a-alert-heading";
    var n = l(m),
      r = f.create({
        _componentName: "alert",
        init: function (b, a) {
          this._super(b, a);
          this._$element = this._$element.filter(".a-alert, .a-alert-inline");
          this._$heading = this._$element.find(".a-alert-heading");
          this._$content = this._$element.find(".a-alert-content");
        },
        mixin: ["show", "hide", "size", "isEmpty"],
        heading: function (b) {
          if ("undefined" === typeof b) return this._$heading.text();
          this._$heading.length
            ? this._$heading.text(b)
            : (this._$heading = n.clone().text(b).insertBefore(this._$content));
          return this;
        },
        removeHeading: function () {
          this._$heading.remove();
          this._$heading = l();
          return this;
        },
        text: function (b) {
          if ("undefined" === typeof b) return this._$content.text();
          this._$content.text(b);
          return this;
        },
        html: function (b) {
          if ("undefined" === typeof b) return this._$content.html();
          this._$content.html(b);
          return this;
        },
        type: function (f) {
          -1 === c.indexOfArray(h, f) &&
            p.error(
              "{API} Alert type must be one of [error, success, warning, info].",
              "API",
              "alert"
            );
          this._$element.each(function (a, c) {
            a = l(c);
            c = "a-alert-";
            a.hasClass("a-alert-inline")
              ? ((c += "inline-"), a.removeClass(b))
              : a.removeClass(g);
            a.addClass(c + f);
          });
          return this;
        },
      });
    return function (b, a) {
      return new r(b, a);
    };
  });
  ("use strict");
  p.when("jQuery", "a-component", "a-form-controls-api").register(
    "a-checkbox",
    function (c, l, f) {
      var h = f.setCheckboxState,
        g = l.create({
          _componentName: "checkbox",
          init: function (b, c) {
            this._super(b, c);
            this._$element = this._$element.closest(".a-checkbox");
            this._$input = this._$element.find("[type\x3dcheckbox]");
          },
          mixin: ["show", "hide", "size", "isEmpty"],
          check: function (b) {
            b = void 0 === b ? !0 : b;
            this._$element.each(function () {
              h(this, b);
            });
            return this;
          },
          uncheck: function () {
            return this.check(!1);
          },
          toggleChecked: function () {
            this._$element.each(function () {
              f.toggleCheckboxState(this);
            });
            return this;
          },
          isChecked: function () {
            for (var b = 0, c = this._$input.length; b < c; b++)
              if (!this._$input[b].checked) return !1;
            return !0;
          },
          isUnchecked: function () {
            for (var b = 0, c = this._$input.length; b < c; b++)
              if (this._$input[b].checked) return !1;
            return !0;
          },
          enable: function (b) {
            b = void 0 === b ? !0 : b;
            this._$element.each(function () {
              h(this, void 0, !b);
            });
            return this;
          },
          disable: function () {
            return this.enable(!1);
          },
          toggleEnabled: function () {
            for (var b = 0, c = this._$input.length; b < c; b++)
              h(this._$element[b], void 0, !this._$input[b].disabled);
            return this;
          },
          isEnabled: function () {
            for (var b = 0, c = this._$input.length; b < c; b++)
              if (this._$input[b].disabled) return !1;
            return !0;
          },
          isDisabled: function () {
            for (var b = 0, c = this._$input.length; b < c; b++)
              if (!this._$input[b].disabled) return !1;
            return !0;
          },
          toggle: function (b) {
            "undefined" !== typeof b && (b = !!b);
            this._$element.each(function () {
              c(this).toggle(b);
            });
            return this;
          },
        });
      return function (b, c) {
        return new g(b, c);
      };
    }
  );
  ("use strict");
  p.when("A", "a-component").register("a-meter", function (c, l) {
    var f = l.create({
      _componentName: "meter",
      init: function (c, f) {
        this._super(c, f);
        this._$element = this._$element.filter(".a-meter, .a-meter-with-txt");
        this._$bar = this._$element.find(".a-meter-bar");
        this._$progressTxt = this._$element.find(".a-meter-progress-txt");
      },
      mixin: ["show", "hide", "size", "isEmpty"],
      get: function () {
        return { percent: this.percent(), txt: this.text() };
      },
      enable: function () {
        this._$element.removeClass("a-inactive");
        return this;
      },
      disable: function () {
        this._$element.addClass("a-inactive");
        return this;
      },
      isEnabled: function () {
        return !this._$element.hasClass("a-inactive");
      },
      percent: function (f) {
        if ("undefined" === typeof f)
          return (f = this._$bar.get(0).style.width), parseInt(f, 10);
        c.isFiniteNumber(f) ||
          p.error(
            "{API}  Meter percent should be a number between 0 and 100",
            "a-meter",
            "setProgress"
          );
        f = Math.min(100, Math.max(0, f));
        var g = f + "%",
          b;
        p.now("a-weblab").execute(function (c) {
          b = c && c.is("AUI_A11Y_SR_678508", "T1") ? f.toString() : g;
        });
        this._$bar.css({ width: g });
        this._$element.attr({ "aria-label": g, "aria-valuenow": b });
        return this;
      },
      text: function (c) {
        if ("undefined" === typeof c) return this._$progressTxt.text();
        this._$progressTxt.text(c);
        return this;
      },
      set: function (c, f) {
        this.percent(c);
        f && this.text(f);
        return this;
      },
    });
    return function (c, g) {
      return new f(c, g);
    };
  });
  p.when("a-component").register("a-spinner", function (c) {
    var l = c.create({
      _componentName: "spinner",
      init: function (c, h) {
        this._super(c, h);
        this._$element = this._$element.filter(
          ".a-spinner-wrapper, .a-spinner"
        );
      },
      mixin: ["show", "hide", "isEmpty", "size"],
      remove: function () {
        this._$element.remove();
      },
    });
    return function (c, h) {
      return new l(c, h);
    };
  });
  ("use strict");
  p.register("a-ua", function () {
    return {
      compareVersions: function (c, l, f) {
        var h = function (b) {
          p.error(
            "Versions are not comparable. " + b,
            "A - extras",
            "compareVersions"
          );
        };
        f = f || ".";
        ("string" === typeof c &&
          "string" === typeof l &&
          "string" === typeof f &&
          "" !== c &&
          "" !== l) ||
          h("Input values are not valid.");
        c = c.split(f);
        l = l.split(f);
        f = Math.max(c.length, l.length);
        for (var g = 0; g < f; g++) {
          var b = g < c.length ? Number(c[g]) : 0,
            m = g < l.length ? Number(l[g]) : 0;
          (!isNaN(b) && isFinite(b) && !isNaN(m) && isFinite(m)) ||
            h("Piece of one version number evaluates to NaN or +/- Infinity.");
          if (b < m) return -1;
          if (b > m) return 1;
        }
        return 0;
      },
    };
  });
  ("use strict");
  p.when("A", "3p-promise", "load").register("a-pcv", function (c, l) {
    var f;
    return {
      getData: function () {
        f ||
          (f = new l(function (c, f) {
            var b = n.pcv.AmazonUI;
            b
              ? (document.documentElement.setAttribute("data-aui-version", b),
                c(b))
              : f(
                  Error(
                    "Package closure version of AmazonUI is not found on the page"
                  )
                );
          }));
        return f;
      },
    };
  });
});
/* ******** */
(function (g) {
  var c = window.AmazonUIPageJS || window.P,
    n = c._namespace || c.attributeErrors,
    e = n ? n("AmazonUIBaseJS@declarative", "AmazonUI") : c;
  e.guardFatal
    ? e.guardFatal(g)(e, window)
    : e.execute(function () {
        g(e, window);
      });
})(function (g, c, n) {
  "use strict";
  g.when(
    "jQuery",
    "a-util",
    "a-events",
    "a-constants",
    "prv:a-guard",
    "prv:csa-logger"
  ).register("a-declarative", function (e, k, p, c, g, n) {
    function q(a) {
      var d = e(a.currentTarget),
        b = e(a.target);
      if ("submit" === a.type) {
        var l = b.closest("form");
        l.length && (b = l);
      }
      if ((l = d.data("action")))
        (a = {
          $target: b,
          $currentTarget: d,
          targetTag: b.prop("tagName").toLowerCase(),
          type: a.type,
          $event: a,
          $declarativeParent: d,
        }),
          t(l, a);
    }
    function t(a, d) {
      var b = d.$event,
        l = d.$target,
        e = d.$currentTarget,
        c = d.type;
      a = a.split(" ");
      k.each(a, function (a) {
        var h = r[a] || {},
          f = e.data(a),
          m = k.extend({}, d, { action: a, data: f });
        a = "a:declarative:" + a;
        var g = a + ":" + c;
        p.trigger(a, m);
        p.trigger(g, m);
        m = !1;
        f ? (m = !!f.allowLinkDefault) : h && (m = !!h.allowLinkDefault);
        "click" !== b.type || m
          ? (h = !1)
          : ((h = l.closest("a")),
            (h =
              h.length &&
              ("#" === h[0].href ||
                b.currentTarget === h[0] ||
                h.parent(".a-declarative").length)));
        h && b.preventDefault();
      });
    }
    var r = {};
    e(document).delegate(".a-declarative", c.constants.declarativeEvents, q);
    e(document).delegate(
      ".a-gesture",
      "tap swipe swipe-horizontal swipe-vertical pan-horizontal pan-vertical doubleTap",
      q
    );
    c = function () {
      switch (arguments.length) {
        case 2:
          var a = arguments[0];
          var d = arguments[1];
          break;
        case 3:
          a = arguments[0];
          var b = arguments[1];
          d = arguments[2];
          break;
        case 4:
          a = arguments[0];
          b = arguments[1];
          var e = arguments[2];
          d = arguments[3];
      }
      if (a) {
        "string" === typeof a && (a = k.trim(a).split(" "));
        var f = this;
        k.each(a, function (a) {
          var c = "a:declarative:" + a;
          r[a] = e || {};
          b
            ? ((b = "string" === typeof b ? k.trim(b).split(" ") : b),
              k.each(b, function (b) {
                p.on.call(f, c + ":" + b, function () {
                  return g.guardTimeFn(f, d).apply(this, arguments);
                });
                ("click" != b && "swipe" != b) || n.declarative(a, b);
              }))
            : p.on.call(f, c, d);
        });
      }
    };
    c.create = function (a, d, b) {
      var c = a.jquery && a.length ? a : e(a);
      if (c.length && d) {
        var f = c.data("action");
        c.data("action", f ? f + " " + d : d).data(d, b ? b : {});
        c.addClass("a-declarative");
      }
      return a;
    };
    c.remove = function (a, d) {
      var b = a.jquery && a.length ? a : e(a);
      if (!b.length) return a;
      var c = b.data("action");
      if (!c) return a;
      var f = c.split(" ");
      d
        ? ((d = d.split(" ")),
          k.each(d, function (a) {
            var c = k.indexOfArray(f, a);
            0 <= c && (f.splice(c, 1), b.data(a, null));
          }))
        : (k.each(f, function (a) {
            b.data(a, null);
          }),
          (f = []));
      f.length
        ? b.data("action", f.join(" "))
        : b.data("action", null).removeClass("a-declarative");
      return a;
    };
    return { declarative: c };
  });
  g.register("prv:csa-logger", function () {
    if (c.csa)
      var e = csa("PageTiming", {
        producerId: "csa",
        schemaId: "csa.InteractionFailuresDependencies.1",
      });
    return {
      declarative: function (c, g) {
        e && e("mark", "functional:aui-da-" + c + ":" + g);
      },
      element: function (e, g) {
        c.csa &&
          e &&
          e instanceof HTMLElement &&
          csa("Content", { element: e })("mark", "functional:" + g);
      },
    };
  });
});
/* ******** */
(function (f) {
  var e = window.AmazonUIPageJS || window.P,
    n = e._namespace || e.attributeErrors,
    a = n ? n("AmazonUIBaseJS@preload", "AmazonUI") : e;
  a.guardFatal
    ? a.guardFatal(f)(a, window)
    : a.execute(function () {
        f(a, window);
      });
})(function (f, e, n) {
  "use strict";
  f.when(
    "3p-promise",
    "a-analytics",
    "a-util",
    "prv:a-preload-queue",
    "prv:a-preload-strategies"
  ).register("a-preload", function (a, e, h, k, f) {
    function m() {
      return new a(function (a) {
        setTimeout(a, 2500);
      });
    }
    function p(d, b) {
      var p = Date.now();
      b = f.getStrategy(d, b)(d, b);
      var g = a.race([b.promise, m()]).then(
        function () {
          e.increment("preload_fulfilled");
          return { url: d, success: !0, duration: Date.now() - p };
        },
        function (g) {
          e.increment("preload_failed");
          return { url: d, success: !1, reason: g };
        }
      );
      b.teardown && g.then(b.teardown);
      return g;
    }
    function l(d, b) {
      if ("string" === typeof d) {
        if (!d.trim()) return a.resolve();
        e.increment("preload_asks");
        return k(b).then(function (a) {
          return p(d, b).then(a);
        });
      }
      return h.isArray(d)
        ? a.all(
            d.map(function (a) {
              return l(a, b);
            })
          )
        : a.reject("not an URL or URL list");
    }
    return { preload: l };
  });
  f.when("3p-promise").register("prv:a-preload-queue", function (a) {
    function e() {
      if (h) {
        var a = (k.length ? k : m ? q : []).pop();
        a && (h--, a());
      }
    }
    var h = 5,
      k = [],
      q = [],
      m = !1;
    f.when("afterLoad").execute(function () {
      m = !0;
      for (var a = h; 0 < a; a--) e();
    });
    return function (f) {
      function l() {
        l = function () {};
        h++;
        e();
      }
      return new a(function (a) {
        var b = f ? k : q;
        b.splice(Math.round(Math.random() * b.length), 0, a);
        e();
      }).then(function () {
        return function (a) {
          l();
          return a;
        };
      });
    };
  });
  f.when("3p-promise", "a-util").register(
    "prv:a-preload-strategies",
    function (a, f) {
      function h(a) {
        a = ((a = /^(?:[^?#]+)[.]([a-z2]+)(?:[?#].*)?$/.exec(a)) && a[1]) || "";
        return "js" === a
          ? "script"
          : "css" === a
          ? "style"
          : /^gif|jpe?g|png$/.test(a)
          ? "image"
          : /^woff2?$/.test(a)
          ? "font"
          : "fetch";
      }
      function q(g) {
        return function (c) {
          var b = document.createElement("link");
          return {
            promise: new a(function (a, f) {
              try {
                var d = h(c);
                b.rel = g;
                b.as = d;
                if ("font" == d || ("script" == d && k(c, e.location)))
                  b.crossOrigin = "anonymous";
                b.href = c;
                b.onerror = b.onload = a;
                document.head.appendChild(b);
              } catch (u) {
                f("failed to preload link loader");
              }
            }),
            teardown: function () {
              b && b.parentElement && b.parentElement.removeChild(b);
            },
          };
        };
      }
      function m(b) {
        var c = new Image();
        return {
          promise: new a(function (a, g) {
            try {
              (c.style.display = "none"),
                (c.onerror = c.onload = a),
                (c.src = b),
                document.documentElement.appendChild(c);
            } catch (r) {
              g("failed to preload image loader");
            }
          }),
          teardown: function () {
            c && c.parentElement && c.parentElement.removeChild(c);
          },
        };
      }
      function p(b) {
        return {
          promise: new a(function (a, g) {
            try {
              var c = new XMLHttpRequest();
              c.open("GET", b, !0);
              c.onreadystatechange = function () {
                4 == this.readyState && a();
              };
              c.send();
            } catch (r) {
              g("failed to preload ajax loader");
            }
          }),
        };
      }
      function l(b) {
        return {
          promise: new a(function (a, g) {
            try {
              var c = h(b),
                d = {
                  mode:
                    "font" == c || ("script" == c && k(b, e.location))
                      ? "cors"
                      : "no-cors",
                };
              e.fetch(b, d).finally(a);
            } catch (t) {
              g("failed to preload fetch loader");
            }
          }),
        };
      }
      var d = !!e.fetch,
        b = !1;
      (function () {
        try {
          var a = document.createElement("link");
          b = a.relList.supports("preload");
          a.relList.supports("prefetch");
        } catch (c) {}
      })();
      var n = b ? q("preload") : function () {};
      return {
        getStrategy: function (a, c) {
          a = h(a);
          return b && c ? n : "image" === a ? m : d ? l : p;
        },
      };
    }
  );
});
/* ******** */
(function (c) {
  var b = window.AmazonUIPageJS || window.P,
    d = b._namespace || b.attributeErrors,
    a = d ? d("AmazonUIBaseJS@touch", "AmazonUI") : b;
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window);
      });
})(function (c, b, d) {});
/* ******** */
(function (a) {
  var c = window.AmazonUIPageJS || window.P,
    d = c._namespace || c.attributeErrors,
    b = d ? d("AmazonUIBaseJS@A", "AmazonUI") : c;
  b.guardFatal
    ? b.guardFatal(a)(b, window)
    : b.execute(function () {
        a(b, window);
      });
})(function (a, c, d) {
  "use strict";
  a.when("a-bodyBegin").execute("build-A", function () {
    var b = a.execute().decorate,
      c = a
        .when(
          "a-util",
          "a-defer",
          "a-base",
          "a-events",
          "a-declarative",
          "a-state",
          "a-ajax",
          "a-animate",
          "a-image",
          "a-constants",
          "a-detect",
          "a-browser-events",
          "a-preload",
          "a-prefix",
          "a-request-animation-frame",
          "a-class",
          "a-draggable"
        )
        .register("A", function (a) {
          function e(b, e, d, f) {
            this._guard = b;
            this._logError = e;
            this._guardTime = d;
            a.each(
              c,
              function (c) {
                a.extend(this, new c.constructor(b, e));
              },
              this
            );
          }
          var c = [];
          e.prototype = {};
          a.each(arguments, function (d) {
            b && d.constructor !== Object
              ? c.push(d)
              : (delete d.constructor, a.extend(e.prototype, d));
          });
          return b ? e : e.prototype;
        });
    b &&
      c.decorate(function (b, a) {
        return new b(a.guard, a.logError, a.guardTime);
      });
  });
});
/* ******** */
(function (c) {
  var f = window.AmazonUIPageJS || window.P,
    g = f._namespace || f.attributeErrors,
    d = g ? g("AmazonUIButton@buttonJS", "AmazonUI") : f;
  d.guardFatal
    ? d.guardFatal(c)(d, window)
    : d.execute(function () {
        c(d, window);
      });
})(function (c, f, g) {
  c.when("A", "a-component").register("a-button", function (d, l) {
    function e(a) {
      a.preventDefault();
    }
    var h = l.create({
      _componentName: "button",
      init: function (a, b) {
        this._super(a, b);
        this._$element = this._$element.filter(".a-button");
        this._$coreFormElement = this._$element
          .children(".a-button-inner")
          .children("button,input");
        this._$coreLinkElement = this._$element
          .children(".a-button-inner")
          .children("a");
        this._$contentElement = this._$element.find(".a-button-text");
        this._$accessibleElement = this._$element
          .children(".a-button-inner")
          .find('[role\x3d"radio"]');
        0 >= this._$accessibleElement.length &&
          (this._$accessibleElement =
            this._$element.filter("[role\x3d'radio']"));
      },
      mixin: "show hide toggle isEmpty size on off trigger".split(" "),
      enable: function () {
        this._$element.removeClass("a-button-disabled");
        this._$coreFormElement.prop("disabled", !1);
        this._$coreLinkElement.unbind("click", e);
        this._$coreLinkElement.removeAttr("aria-disabled");
        return this;
      },
      disable: function () {
        this._$element
          .addClass("a-button-disabled")
          .removeClass("a-button-focus");
        this._$coreFormElement.prop("disabled", !0);
        this._$coreLinkElement.click(e);
        this._$coreLinkElement.attr("aria-disabled", "true");
        return this;
      },
      isEnabled: function () {
        return !this._$element.hasClass("a-button-disabled");
      },
      setStatus: function (a) {
        var b = this._$element,
          e = [null, "normal", "selected", "disabled", "error", "inactive"],
          k = 0 > d.indexOfArray(e, a),
          m = "radio" === b.attr("role");
        if (k) return c.error(a + " is not a valid status"), !1;
        d.each(e, function (a) {
          b.removeClass("a-button-" + a);
        });
        this._$coreFormElement.prop("disabled", "disabled" === a);
        this._$accessibleElement.attr("aria-checked", function (b, k) {
          return m ? "selected" === a : k;
        });
        null !== a && b.addClass("a-button-" + a);
        return this;
      },
      text: function (a) {
        if (!(1 > this._$contentElement.length)) {
          if ("undefined" === typeof a) return this._$contentElement.text();
          this._$contentElement.text(a);
          return this;
        }
      },
    });
    return function (a, b) {
      return new h(a, b);
    };
  });
  ("use strict");
  c.when("A", "a-component").register("a-toggle-button", function (d, c) {
    function e(a) {
      a.preventDefault();
    }
    function h(a) {
      d.each(
        b,
        function (b) {
          a._$element.removeClass(b);
        },
        a
      );
    }
    function a(a) {
      return 0 === a._$element.length || 0 === a._$coreFormElement.length;
    }
    var b = ["a-button-selected", "a-button-focus"],
      f = c.create({
        _componentName: "toggleButton",
        init: function (a, b) {
          this._super(a, b);
          this._$element = this._$element.filter(".a-button");
          this._$coreFormElement = this._$element
            .find(".a-button-inner")
            .find("button,input");
          this._$coreLinkElement = this._$element.find(".a-button-inner a");
          this._$accessibleElement = this._$element
            .children(".a-button-inner")
            .find('[role\x3d"radio"]');
          0 >= this._$accessibleElement.length &&
            (this._$accessibleElement =
              this._$element.filter("[role\x3d'radio']"));
        },
        name: function () {
          return this._$coreFormElement.attr("name");
        },
        enable: function () {
          this._$element.removeClass("a-button-disabled");
          this._$coreFormElement.prop("disabled", !1);
          this._$coreLinkElement.unbind("click", e);
          return this;
        },
        disable: function () {
          h(this);
          this._$element.addClass("a-button-disabled");
          this._$coreFormElement.prop("disabled", !0);
          this._$coreLinkElement.click(e);
          return this;
        },
        setAvailable: function () {
          this._$element.removeClass("a-button-unavailable");
          return this;
        },
        setUnavailable: function () {
          this._$element.addClass("a-button-unavailable");
          return this;
        },
        isEnabled: function () {
          return !a(this) && !this._$element.hasClass("a-button-disabled");
        },
        setSelected: function () {
          !a(this) &&
            this.isEnabled() &&
            (this._$element.addClass("a-button-selected a-button-focus"),
            this._$accessibleElement.attr("aria-checked", "true"));
          return this;
        },
        setUnselected: function () {
          h(this);
          this._$accessibleElement.attr("aria-checked", "false");
          return this;
        },
        isSelected: function () {
          return !a(this) && this._$element.hasClass("a-button-selected");
        },
        isAvailable: function () {
          return !a(this) && !this._$element.hasClass("a-button-unavailable");
        },
      });
    return function (a, b) {
      return new f(a, b);
    };
  });
  ("use strict");
  c.when("A", "a-component", "a-toggle-button").register(
    "a-toggle-button-group",
    function (d, c, e) {
      var f = c.create({
        _componentName: "toggleButtonGroup",
        init: function (a, b) {
          this._super(a, b);
          this._$toggleGroupElement = this._$element
            .filter(".a-button-group, .a-button-toggle-group")
            .eq(0);
          this._$toggleGroupName = (a =
            this._$toggleGroupElement.data("a-button-group"))
            ? a.name
            : g;
        },
        name: function () {
          return this._$toggleGroupName;
        },
        getToggleButtonByName: function (a) {
          return this.getToggleButtonBySelector(
            ".a-button:has([name\x3d" + a + "])"
          );
        },
        setSelected: function (a) {
          a = this.getToggleButtonBySelector(a);
          a.isEnabled() &&
            (this.getSelected().setUnselected(), a.setSelected());
          return this;
        },
        getSelected: function () {
          return this.getToggleButtonBySelector(".a-button.a-button-selected");
        },
        getToggleButtonBySelector: function (a) {
          return e(this._$toggleGroupElement.find(a));
        },
      });
      return function (a, b) {
        return new f(a, b);
      };
    }
  );
});
/* ******** */
(function (c) {
  var e = window.AmazonUIPageJS || window.P,
    f = e._namespace || e.attributeErrors,
    a = f ? f("AmazonUIMeter@control", "AmazonUI") : e;
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window);
      });
})(function (c, e, f) {
  c.when("A", "ready").register("a-meters", function (a) {
    var b = a.$;
    if (document.getElementsByClassName) {
      var c = function (a) {
        a.removeClass("a-meter-unfilled").addClass("a-meter-filled");
      };
      b(".a-meter-bar")
        .not(".a-manual-animation")
        .each(function () {
          var d = b(this);
          a.onScreen(d, 0) || d.addClass("a-meter-unfilled");
        });
      b("body").addClass("a-meter-animate");
      a.on("resize orientationchange scroll", function (d) {
        b(".a-meter-unfilled").each(function () {
          var d = b(this);
          a.onScreen(d, 0) && c(d);
        });
      });
      a.on("a:popover:afterShow", function (a) {
        "ajax" !== a.popover.currentDataStrategy &&
          ((a = a.popover.$popover.find(".a-meter-unfilled")),
          a.length && c(a));
      });
      a.on("a:popover:ajaxContentLoaded", function (d) {
        var b = d.popover.$popover
          .find(".a-meter-bar")
          .not(".a-manual-animation");
        b.length &&
          (b.addClass("a-meter-unfilled"),
          a.delay(function () {
            c(b);
          }, 17));
      });
    }
  });
});
/* ******** */
(function (d) {
  var g = window.AmazonUIPageJS || window.P,
    f = g._namespace || g.attributeErrors,
    a = f ? f("AmazonUIFont", "AmazonUI") : g;
  a.guardFatal
    ? a.guardFatal(d)(a, window)
    : a.execute(function () {
        d(a, window);
      });
})(function (d, g, f) {
  d.when("jQuery", "A", "3p-promise").register("a-fonts", function (a, d, l) {
    function m(a, d) {
      var b = e && e[a] ? e : d;
      return function () {
        return b[a].apply(b, arguments);
      };
    }
    var h = [],
      b = a("body"),
      f = (function () {
        return new l(function (a, b) {
          var e = g.setInterval(function () {
            d.reduce(
              h,
              function (a, b) {
                return a && "loaded" === b.status;
              },
              !0
            ) && (a(), clearInterval(e));
          }, 50);
        });
      })(),
      k = {
        load: function (d) {
          return new l(function (e, f) {
            var c = { variant: d, status: "unloaded" };
            h.push(c);
            c.$loader = a("\x3cspan\x3e.\x3c/span\x3e", { class: "aok-hidden" })
              .css("font", c.variant)
              .appendTo(b);
            c.status = "loading";
            c.$checker = a("\x3cspan\x3e.\x3c/span\x3e", {
              class: "aok-hidden",
            }).appendTo(b);
            c.intervalId = g.setInterval(function () {
              c.$checker.css(
                "font",
                c.variant + ', Consolas, "Courier New", Courier, monospace'
              );
              var a = c.$checker.width(),
                b = c.$checker.height();
              c.$checker.css(
                "fontFamily",
                'Consolas, "Courier New", Courier, monospace'
              );
              if (c.$checker.width() !== a || c.$checker.height() !== b)
                e(c.variant),
                  (c.status = "loaded"),
                  c.$loader.remove(),
                  c.$checker.remove(),
                  clearInterval(c.intervalId);
            }, 50);
          });
        },
        check: function (a) {
          d.each(h, function (b) {
            if (b.variant === a) return "loaded" === b.status;
          });
          return !1;
        },
        ready: f,
      },
      e = document.fonts;
    e && e.ready && (f = e.ready.then ? e.ready : e.ready.apply(e));
    return { load: m("load", k), check: m("check", k), ready: f };
  });
  ("use strict");
  d.when("A", "a-fonts", "prv:a-capabilities", "load").register(
    "prv:a-custom-font-loader",
    function (a, d, f) {
      return function (g, h) {
        !f.isUCBrowser &&
          a.localStorage &&
          -1 ===
            a.indexOfArray(
              (a.localStorage.getItem("a-font-class") || "").split(" "),
              g
            ) &&
          (d.ready.then(function (b) {
            b = a.localStorage.getItem("a-font-class") || "";
            b += (b.length ? " " : "") + g;
            a.localStorage.setItem("a-font-class", b);
          }),
          a.each(h, function (a) {
            d.load(a);
          }));
      };
    }
  );
  ("use strict");
  d.when("prv:a-custom-font-loader").execute("a-ember-loader", function (a) {
    a(
      "a-ember",
      "1em Amazon Ember;bold 1em Amazon Ember;200 1em Amazon Ember;500 1em Amazon Ember;italic 1em Amazon Ember;italic bold 1em Amazon Ember;italic 200 1em Amazon Ember;italic 500 1em Amazon Ember".split(
        ";"
      )
    );
  });
});
/* ******** */
(function (n) {
  var E = window.AmazonUIPageJS || window.P,
    z = E._namespace || E.attributeErrors,
    e = z ? z("AmazonUICarousel@control", "AmazonUI") : E;
  e.guardFatal
    ? e.guardFatal(n)(e, window)
    : e.execute(function () {
        n(e, window);
      });
})(function (n, E, z) {
  n.declare("a-carousel-constants", {
    ANIMATING: "animating",
    ANIMATION_SPEED: "animation_speed",
    AUTO_ADJUST_HEIGHT: "auto_adjust_height",
    CIRCULAR: "circular",
    CURRENT_PIXEL: "px",
    CURRENTLY_WRAPPING: "currentlyWrapping",
    DELAY_TIME: "delay_time",
    ELEMENT_CSS_CLASS: "elementCssClass",
    FETCHED_ITEMS: "fetchedItems",
    FIRST_VISIBLE_ITEM: "firstVisibleItem",
    HEIGHT_ANIMATION_SPEED: "height_animation_speed",
    HIDE_OFF_SCREEN: "hide_off_screen",
    INIT_EVENTS: "a:pageUpdate beforeReady",
    LOADING: "loading",
    MIN_GUTTER: "minimum_gutter_width",
    NAME: "name",
    NO_TRANSITION: "no_transition",
    PAGE_NUMBER: "pageNumber",
    PAGE_SIZE: "pageSize",
    PEEK_GRADIENT: "peek_gradient",
    PEEK_PERCENTAGE: "peek_percentage",
    PEEK_WIDTH: "peek_width",
    SET_SIZE: "set_size",
    SHOW_PARTIAL_NEXT: "show_partial_next",
    SPRINGINESS: "springiness",
    STATIC_LOADER_CSS_CLASS: "staticLoaderCssClass",
    TOTAL_PAGES: "totalPages",
    TOUCH_EASING: "touch_easing",
    TRANSITION_STRATEGY: "transitionStrategy",
    DISPLAY_STRATEGY: "displayStrategy",
    WRAP_EASING: "wrap_easing",
    TRANSITION_SLIDE_CIRCULAR_FIRST_CARD_IDX:
      "transitionSlideCircularFirstCardIndex",
    NEXT_REQUEST_SIZE: "next_request_size",
    LOADING_THRESHOLD_PIXELS: "loading_threshold_pixels",
  });
  ("use strict");
  n.when("jQuery").register("a-carousel-utils", function (e) {
    function m(f) {
      return "string" === typeof f;
    }
    function g(f) {
      return f && f.nodeType !== z;
    }
    function d(f) {
      return "" === f
        ? "\x3cdiv\x3e\x3c/div\x3e"
        : f
        ? m(f) || g(f)
          ? f
          : d(f.content)
        : null;
    }
    function k(f) {
      f && (m(f) || g(f) ? (f = !0) : (f.content = k(f.content)));
      return f;
    }
    return {
      addElementToDom: function (f, d) {
        if (d) {
          if (m(d)) f.html(d);
          else if (g(d))
            if (e(d).hasClass("a-carousel-card-fragment")) {
              var c = e(d).clone();
              f.empty().append(c.contents());
            } else f.empty().append(d);
          !0 !== d && f.removeClass("a-carousel-card-empty");
        }
      },
      clearElementFromItem: k,
      getElementFromItem: d,
      isElement: g,
      isString: m,
    };
  });
  ("use strict");
  n.register("a-carousel-circular-utils", function () {
    function e(e) {
      var d = 0 < e;
      return function (e, f, h) {
        var c = f.length;
        h = (h || 1) % c;
        e = e.get(0);
        for (var b, a = 0; a < h; a++)
          d
            ? ((b = f.get(a)), e.appendChild(b))
            : ((b = f.get(c - 1 - a)), e.insertBefore(b, e.children[0]));
      };
    }
    function m(e) {
      var d = 0 < e;
      return function (e, f) {
        f = f ? f % e.length : 1;
        d
          ? (e = e.concat(e.splice(0, f)))
          : e.unshift.apply(e, e.splice(e.length - f, f));
        return e;
      };
    }
    return {
      rotateCW: e(1),
      rotateCCW: e(-1),
      rotateArrayCW: m(1),
      rotateArrayCCW: m(-1),
      firstCardIndexAfterRotate: function (e, d, k) {
        e = (d + e) % k;
        0 === e ? (e = k) : 0 > e && (e = k + e);
        return e;
      },
      relativeIndexFromIndex: function (e, d, k) {
        var f = 1;
        if (0 < e && e <= k)
          return e > d ? (f = e - d + 1) : e < d && (f = k - d + e + 1), f;
        n.error(
          "idx should be between 1 and " + k,
          "a-carousel-circular-utils",
          "relativeIndexFromIndex"
        );
      },
    };
  });
  ("use strict");
  n.when("A", "jQuery").register("a-carousel-measure", function (e, m) {
    return function (g) {
      function d(d, h, c) {
        var b, a, p;
        h.jquery || (h = m(h));
        for (
          e.each(c, function (b) {
            if ("top" === b || "left" === b) return (a = h.offset()), !1;
          });
          void 0 !== (b = c.pop());

        ) {
          var f = d[b];
          "left" === b || "top" === b
            ? (d[b] = a[b])
            : -1 < b.indexOf("outer")
            ? (d[b] = h[b](!0))
            : (d[b] = h["outer" + b.charAt(0).toUpperCase() + b.substr(1)]());
          d[b] !== f && (void 0 === p && (p = {}), (p[b] = f));
        }
        return p;
      }
      var k = {
        carousel: { height: 0, width: 0, outerHeight: 0, outerWidth: 0 },
        viewport: { height: 0, width: 0, outerHeight: 0, outerWidth: 0 },
        items: [],
        getFirstCardWidth: function () {
          return void 0 === this.items[0] ||
            !e.isFiniteNumber(this.items[0].width) ||
            0 >= this.items[0].width
            ? 160
            : this.items[0].width;
        },
      };
      g.measure = function (f) {
        var h = this.dom.$carousel,
          c = this.dom.$viewport,
          b = {};
        f && (f = f.split(" "));
        if (!f || -1 < e.indexOfArray(f, "carousel"))
          b.carousel = d(
            k.carousel,
            h,
            "top left height width outerHeight outerWidth".split(" ")
          );
        if (!f || -1 < e.indexOfArray(f, "viewport"))
          b.viewport = d(k.viewport, c, [
            "height",
            "width",
            "outerHeight",
            "outerWidth",
          ]);
        if (!f || -1 < e.indexOfArray(f, "items"))
          (k.items = []),
            (b.items = {}),
            h.children("li").each(function (a, c) {
              k.items[a] = {};
              c = d(
                k.items[a],
                c,
                "top left height width outerHeight outerWidth".split(" ")
              );
              void 0 !== c && (b.items[a] = c);
            });
        return b;
      };
      g.getItemOffset = function (e) {
        var d = k.items;
        e--;
        var c = 0;
        if (d && d.length && e < d.length) {
          for (var b = d[0].outerWidth, a = 0; a < e; a++)
            c += d[a] ? d[a].outerWidth : b;
          0 < e &&
            this.getAttr("first_item_flush_left") &&
            (c += g.getAttr("currentGutter"));
        }
        return c;
      };
      g.getDimensions = function () {
        return e.copy(k);
      };
      g.updateDimensionsCache = function (d) {
        e.extend(k, d);
      };
      g.getViewportWidth = function () {
        try {
          return k.viewport.width;
        } catch (f) {}
      };
    };
  });
  ("use strict");
  n.when("A", "jQuery").register("a-carousel-attributes", function (e, m) {
    return function (g, d) {
      var k = {},
        f = {},
        h = {};
      e.extend(k, d);
      g.onChange = function (c, b) {
        c = c.split(" ");
        for (var a = c.length, d; a--; )
          (d = c[a]),
            f[d] || (f[d] = []),
            m.isFunction(b) && -1 === e.indexOfArray(f[d], b) && f[d].push(b);
        return this;
      };
      g.unbind = function (c, b) {
        f[c] &&
          b &&
          ((b = e.indexOfArray(f[c], b)), -1 < b && f[c].splice(b, 1));
        return this;
      };
      g.once = function (c, b) {
        var a = function () {
          b.apply(null, arguments);
          g.unbind(c, a);
        };
        return g.onChange(c, a);
      };
      g.setAttr = function (c, b, a) {
        var d = k[c];
        k[c] = b;
        if (!(a || h[c] || e.equals(b, d))) {
          h[c] = !0;
          b = e.copy(b);
          d = e.copy(d);
          if (f[c]) {
            a = e.copy(f[c]);
            for (var t = 0, x = a.length; t < x; t++) a[t](b, d, g, c);
          }
          b = { newValue: b, oldValue: d, carousel: g };
          e.trigger("a:carousel:change:" + c, b);
          k.name && e.trigger("a:carousel:" + k.name + ":change:" + c, b);
          h[c] = !1;
        }
        return this;
      };
      g.getAttr = function (c) {
        return e.copy(k[c]);
      };
    };
  });
  ("use strict");
  n.when(
    "A",
    "jQuery",
    "a-carousel-measure",
    "a-carousel-attributes",
    "a-carousel-strategies",
    "a-carousel-constants",
    "a-analytics",
    "prv:a-capabilities"
  ).register("a-carousel-base", function (e, m, g, d, k, f, h, c) {
    function b(a) {
      var b = a.getAttr("set_size") <= a.getAttr("pageSize"),
        c = a.getAttr(f.NO_TRANSITION);
      1 === a.getAttr("totalPages") &&
        1 < a.getAttr("pageNumber") &&
        a.gotoPage(1, { startover: !0, animationDuration: 0 });
      a.dom.$container
        .find(".a-carousel-left, .a-carousel-right")
        .css("visibility", b || c ? "hidden" : "visible");
    }
    function a(a, b) {
      return isNaN(a)
        ? (n.log(
            "`set_size` should be an integer: " + a,
            "WARN",
            "aui:carousel:base"
          ),
          b)
        : parseInt(a, 10);
    }
    function p(a) {
      a.onChange("pageSize", function (b, c) {
        var l = a.getAttr("firstVisibleItem"),
          e = Math.ceil(l / b);
        1 === e && 1 < l ? (e = 2) : 1 > e && (e = 1);
        a.setAttr("pageNumber", e);
        a.setAttr("totalPages", Math.ceil(a.getAttr("set_size") / b));
        l = a.getAttr("ajax");
        b > c &&
          (l && l.prefetch_next_page
            ? a.strategies.ajax.wantNextPage(a)
            : a.strategies.ajax.wantCurrentPage(a));
      });
      a.onChange("set_size", function (b, c) {
        var l = a.getAttr("pageSize"),
          e = a.getAttr("fetchedItems");
        a.setAttr("totalPages", Math.ceil(b / l));
        b < c
          ? (e.splice(b, Number.MAX_VALUE), a.setAttr("fetchedItems", e))
          : a.strategies.ajax.wantCurrentPage &&
            a.strategies.ajax.wantCurrentPage(a);
      });
      a.onChange("firstVisibleItem", function (b) {
        a.dom.$container.find("input.a-carousel-firstvisibleitem").val(b);
      });
      a.onChange("pageNumber", function (b) {
        0 < b &&
          b <= a.getAttr("totalPages") &&
          a.setAttr("currentlyWrapping", !1);
      });
    }
    function t(b, l, c) {
      if (0 !== arguments.length) {
        b.jquery || (b = m(b));
        this.dom = {
          $container: b,
          $viewport: b.hasClass("a-carousel-viewport")
            ? b
            : b.find(".a-carousel-viewport").eq(0),
          $carousel: b.find(".a-carousel").eq(0),
        };
        !b.length ||
          (this.dom.$viewport.length && this.dom.$carousel.length) ||
          h.logError(
            "[AUI] CarouselContainer does not have CarouselContent.",
            "ERROR",
            JSON.stringify({
              xpath: e.xpath(b.get(0)),
              cssSelector: e.cssSelector(b.get(0)),
              custody: e.attributionChain(b.get(0)),
            })
          );
        var p = {
          totalPages: 1e3,
          pageNumber: 1,
          pageSize: 0,
          firstVisibleItem: 1,
          initThreshold: 100,
          maintain_state: !0,
          px: 0,
          auto_adjust_height: !0,
          ajax: {},
        };
        e.extend(p, c);
        p.maintain_state = !!p.maintain_state;
        p.id_list
          ? p.set_size || (p.set_size = p.id_list.length)
          : (p.id_list = []);
        var x = this.dom.$carousel.children("li");
        if (p.set_size) p.set_size = a(p.set_size, x.length);
        else {
          var f = parseInt(x.first().attr("aria-setsize"), 10);
          e.isFiniteNumber(f) && 0 < f
            ? (p.set_size = f)
            : (p.set_size = x.length);
        }
        var w = [];
        this.dom.$carousel.children("li").each(function (a, b) {
          w.push(
            m(b).hasClass("a-carousel-card-empty") ? "" : e.trim(b.innerHTML)
          );
        });
        p.fetchedItems = w;
        g(this);
        d(this, p);
        this.strategies = l;
        return this;
      }
    }
    e.each(k, function (a, b) {
      t.prototype["set" + b.charAt(0).toUpperCase() + b.slice(1) + "Strategy"] =
        function (a) {
          this.strategies[name] = a;
          "function" === typeof a.init && a.init(this);
        };
    });
    k = t.prototype;
    k.gotoNextPage = function (a) {
      this.getAttr("transitionPaused") ||
        (this.strategies.transition.gotoNextPage(this, a),
        a &&
          a.accessibleSafe &&
          this.strategies.accessibility.nextPage(
            this,
            a.animationDuration,
            a.animationSpeed
          ));
    };
    k.gotoPrevPage = function (a) {
      this.getAttr("transitionPaused") ||
        (this.strategies.transition.gotoPrevPage(this, a),
        a &&
          a.accessibleSafe &&
          this.strategies.accessibility.prevPage(
            this,
            a.animationDuration,
            a.animationSpeed
          ));
    };
    k.gotoPage = function (a, b) {
      this.getAttr("transitionPaused") ||
        (this.strategies.transition.gotoPage(this, a, b),
        b &&
          b.accessibleSafe &&
          this.strategies.accessibility.gotoPage(
            this,
            b.animationDuration,
            b.animationSpeed
          ));
    };
    k.gotoIndex = function (a, b) {
      (!this.getAttr("transitionPaused") || (b && b.ignorePause)) &&
        this.strategies.transition.gotoIndex(this, a, b);
    };
    k.gotoPixel = function (a, b) {
      this.getAttr("transitionPaused") ||
        this.strategies.transition.gotoPixel(this, a, b);
    };
    k.resize = function () {
      if (this.dom.$container.is(":visible")) {
        var a = this.measure("carousel viewport");
        this.strategies.display.resize(this, a);
      }
    };
    k.pause = function () {
      this.setAttr("transitionPaused", !0);
    };
    k.resume = function () {
      this.setAttr("transitionPaused", !1);
    };
    k.triggerEvent = function (a, b) {
      b = b || {};
      b.carousel = this;
      e.trigger("a:carousel:" + a, b);
      var c = this.getAttr("name");
      c && e.trigger("a:carousel:" + c + ":" + a, b);
    };
    k.getStaticLoader = function () {
      return this.getAttr(f.STATIC_LOADER_CSS_CLASS)
        ? '\x3cdiv class\x3d"' +
            this.getAttr(f.STATIC_LOADER_CSS_CLASS) +
            '"\x3e\x3c/div\x3e'
        : "";
    };
    k.getEmptyCard = function (a, b) {
      var c = "a-carousel-card a-carousel-card-empty";
      this.getAttr(f.ELEMENT_CSS_CLASS) &&
        (c = c + " " + this.getAttr(f.ELEMENT_CSS_CLASS));
      return [
        '\x3cli class\x3d"',
        c,
        '" role\x3d"listitem" aria-setsize\x3d"',
        b,
        '" aria-posinset\x3d"',
        a,
        '"\x3e',
        this.getStaticLoader(),
        "\x3c/li\x3e",
      ].join("");
    };
    k.initTouchHandling = function () {
      var a = this,
        b = a.dom.$viewport;
      if (
        b.length &&
        ((e.capabilities.touch || e.capabilities.pointerPrefix) &&
          n.when("a-touch").execute(function (c) {
            b.addClass("a-gesture a-gesture-horizontal").bind(
              "pan-horizontal swipe-horizontal",
              function () {
                return !1;
              }
            );
            e.on("a:swipe-horizontal:" + b[0].id, function (b) {
              if (
                !a.getAttr("transitionPaused") &&
                a.strategies.transition.onSwipe
              )
                a.strategies.transition.onSwipe(a, b);
            });
            if (!a.getAttr("disable_panning"))
              e.on("a:pan-horizontal:" + b[0].id, function (b) {
                if (
                  !a.getAttr("transitionPaused") &&
                  a.strategies.transition.onPan
                )
                  a.strategies.transition.onPan(a, b);
              });
          }),
        c.isIE10 || c.isIE11Plus)
      ) {
        var d = function (a) {
          a.stopPropagation();
          a.preventDefault();
          document.body.removeEventListener("click", d, !0);
        };
        b.bind(e.action.start, function (a) {
          b.bind(
            "swipe-horizontal.a-ssiec pan-horizontal.a-ssiec",
            function (a) {
              b.unbind(".a-ssiec");
              b.bind(e.action.end + ".a-ssiec", function (a) {
                b.unbind(".a-ssiec");
                document.body && document.body.addEventListener("click", d, !0);
              });
            }
          );
        });
      }
    };
    k.init = function () {
      var a = this,
        c = a.strategies,
        d = a.dom.$viewport[0];
      d && !d.id && (d.id = "anonCarousel" + a.__id);
      a.dom.$carousel
        .contents()
        .not(function () {
          return this.tagName && "li" === this.tagName.toLowerCase();
        })
        .remove();
      e.each(a.strategies, function (b) {
        b.initAttrs &&
          e.each(b.initAttrs, function (b, c) {
            var d = b;
            "function" === typeof b && (d = b(a.getAttr(c)));
            a.setAttr(c, d);
          });
      });
      if (1 > a.getAttr("set_size")) return c.ajax.init(a), !1;
      a.measure();
      e.each(a.strategies, function (b) {
        b.init(a);
      });
      c = a.getAttr("pageSize");
      d = a.getAttr("set_size");
      a.setAttr("totalPages", Math.ceil(d / c));
      p(a);
      a.setAttr(
        "isInTab",
        0 < a.dom.$container.closest(".a-tab-content").length,
        !0
      );
      a.triggerEvent("init");
      e.each(a.strategies, function (b) {
        b.afterInit && b.afterInit(a);
      });
      a.triggerEvent("afterInit");
      c = a.getAttr("firstVisibleItem");
      1 === c &&
        a.getAttr("maintain_state") &&
        ((c = parseInt(
          a.dom.$container.find("input.a-carousel-firstvisibleitem").val(),
          10
        )),
        (e.isFiniteNumber(c) && 0 < c && c <= d) || (c = 1));
      if (1 < c) {
        d = 700;
        for (var f = Math.ceil(c / a.getAttr("pageSize")), t = 2; t < f; t++)
          d += 700 / t;
        a.gotoIndex(c, { animationDuration: d, easingFunction: "ease" });
      }
      b(this);
      a.onChange("pageSize set_size", function () {
        b(a);
      });
      c = a.dom.$container.find(".a-carousel-button");
      c.length && ((d = c.eq(0).position().top + "px"), c.css("top", d));
      var h = !1,
        g = function (b) {
          b.preventDefault();
          b = { startover: !0, accessibleSafe: "keydown" === b.type ? !0 : !1 };
          5 < a.getAttr("pageNumber")
            ? (b.animationDuration = 1250)
            : (b.animationSpeed = 5 * a.getDimensions().viewport.width);
          a.gotoPage(1, b);
        };
      a.dom.$container
        .delegate(".a-carousel-goto-nextpage", "click dblclick", function (b) {
          h ||
            ((h = !0),
            b.preventDefault(),
            a.gotoNextPage(),
            e.delay(function () {
              h = !1;
            }, 5));
        })
        .delegate(".a-carousel-goto-prevpage", "click dblclick", function (b) {
          h ||
            ((h = !0),
            b.preventDefault(),
            a.gotoPrevPage(),
            e.delay(function () {
              h = !1;
            }, 5));
        })
        .delegate(".a-carousel-goto-nextpage", "keydown", function (b) {
          if (
            b.which === e.constants.keycodes.ENTER ||
            b.which === e.constants.keycodes.SPACE
          )
            b.preventDefault(), a.gotoNextPage({ accessibleSafe: !0 });
        })
        .delegate(".a-carousel-goto-prevpage", "keydown", function (b) {
          if (
            b.which === e.constants.keycodes.ENTER ||
            b.which === e.constants.keycodes.SPACE
          )
            b.preventDefault(), a.gotoPrevPage({ accessibleSafe: !0 });
        })
        .delegate(".a-carousel-restart", "keydown", function (a) {
          (a.which !== e.constants.keycodes.ENTER &&
            a.which !== e.constants.keycodes.SPACE) ||
            g(a);
        })
        .delegate(".a-carousel-restart", "click", function (a) {
          g(a);
        });
      a.dom.$container
        .find(".a-carousel-page-max")
        .html(this.getAttr("totalPages"));
      return !0;
    };
    return t;
  });
  ("use strict");
  n.when("A", "jQuery", "a-carousel-base", "a-carousel-constants").register(
    "a-carousel-mobile",
    function (e, m, g, d) {
      function k(c) {
        var b = c.getAttr("loaderHeight");
        b ||
          ((b = c.getAttr("maxHeight"))
            ? ((b = Math.min(0.9 * b, 90)), (b = Math.max(b, 120)))
            : (b = 90),
          c.setAttr("loaderHeight", b));
        return b;
      }
      function f(c, b, a) {
        g.call(this, c, b, a);
        if (0 !== arguments.length)
          return (
            this.getAttr("circular") === h && this.setAttr("circular", !1),
            this.getAttr("show_partial_next") === h &&
              this.setAttr("show_partial_next", !0),
            this.getAttr("hide_off_screen") === h &&
              this.setAttr("hide_off_screen", !1),
            this.getAttr("springiness") === h &&
              this.setAttr("springiness", 0.8),
            this.getAttr("touch_easing") === h &&
              this.setAttr(
                "touch_easing",
                "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
              ),
            (this.init = function () {
              return g.prototype.init.call(this)
                ? (this.getAttr(d.STATIC_LOADER_CSS_CLASS) ||
                    this.dom.$carousel
                      .children("li")
                      .children(".a-loading-static")
                      .css("height", k(this) + "px"),
                  this.getAttr(d.NO_TRANSITION) || this.initTouchHandling(),
                  !0)
                : !1;
            }),
            this
          );
      }
      var h;
      f.prototype = new g();
      f.prototype.constructor = f;
      f.prototype.getStaticLoader = function () {
        return this.getAttr(d.STATIC_LOADER_CSS_CLASS)
          ? '\x3cdiv class\x3d"' +
              this.getAttr(d.STATIC_LOADER_CSS_CLASS) +
              '"\x3e\x3c/div\x3e'
          : '\x3cdiv class\x3d"a-loading-static" style\x3d"height:' +
              k(this) +
              'px"\x3e\x3cdiv class\x3d"a-loading-static-inner"\x3e\x3c/div\x3e\x3c/div\x3e';
      };
      return f;
    }
  );
  ("use strict");
  n.when("A", "jQuery", "a-carousel-base", "a-carousel-constants").register(
    "a-carousel-desktop",
    function (e, m, g, d) {
      function k(c) {
        var b = c.getAttr("set_size") <= c.getAttr("pageSize"),
          a = c.getAttr(d.NO_TRANSITION);
        c.dom.$container
          .find(".a-carousel-pagination")
          .css("visibility", b || a ? "hidden" : "visible");
      }
      function f(c, b, a) {
        g.call(this, c, b, a);
        if (0 !== arguments.length) {
          var e = this;
          e.getAttr("circular") === h && this.setAttr("circular", !0);
          e.getAttr("hide_off_screen") === h &&
            this.setAttr("hide_off_screen", !0);
          e.onChange("totalPages", function (a) {
            e.dom.$container.find(".a-carousel-page-max").html(a);
            a < e.getAttr("pageNumber") && e.gotoPage(a);
          });
          e.onChange("pageNumber", function (a, b) {
            b = e.dom.$container;
            var c = b.find(".a-carousel-restart-container");
            1 < a ? c.show() : c.hide();
            b.find(".a-carousel-page-current").html(a);
          });
          e.init = function () {
            var a = this;
            return g.prototype.init.call(a)
              ? (k(this),
                a.onChange("pageSize set_size", function () {
                  k(a);
                }),
                2 > a.getAttr("pageNumber") &&
                  a.dom.$container.find(".a-carousel-restart-container").hide(),
                a.getAttr(d.NO_TRANSITION) || a.initTouchHandling(),
                !0)
              : !1;
          };
          return e;
        }
      }
      var h;
      f.prototype = new g();
      return (f.prototype.constructor = f);
    }
  );
  ("use strict");
  n.when("A", "a-carousel-desktop", "a-carousel-mobile").register(
    "a-carousel-classes",
    function (e, m, g) {
      return {
        desktop: m,
        mobile: g,
        default:
          e.capabilities.mobile || e.capabilities.tablet ? "mobile" : "desktop",
      };
    }
  );
  ("use strict");
  n.when("A", "jQuery", "p-detect", "a-carousel-constants").register(
    "a-carousel-stretchygoodness",
    function (e, m, g, d) {
      function k(a, b, c, d) {
        a.getAttr("show_partial_next") && (b -= c / 10);
        var p = a.getAttr("minimum_gutter_width");
        a.getAttr("set_size");
        a = 0;
        for (var f = !0; 0 < b; )
          a++, (b = d && f ? b - c : b - (c + p)), (f = !1);
        0 > b && a--;
        return e.isFiniteNumber(a) && 0 < a ? a : 1;
      }
      function f(a, b, c, d, l, f, h) {
        "stretch" === a.getAttr("single_page_align") && d > f && (d = f);
        b -= c * d;
        a.getAttr("show_partial_next")
          ? ((a = b - l * (d + 1)),
            h && (a += l),
            (h = a / c),
            (b -= c * (0.5 < h ? 0.5 : h)))
          : h && (b += l);
        c = Math.ceil(b / (d + 1));
        if (!e.isFiniteNumber(c) || c < l) c = l;
        return c;
      }
      function h(a) {
        if (a.getAttr("auto_adjust_height"))
          if (a.getAttr("animating"))
            a.once("animating", function () {
              h(a);
            });
          else {
            var b = a.getAttr("maxHeight"),
              c = a.getDimensions();
            (b && e.isFiniteNumber(b)) || (b = 1);
            var d = b,
              f = a.getAttr("pageSize"),
              g = f * (a.getAttr("pageNumber") - 1);
            f = g + f - 1;
            c = c.items;
            var k = c.length,
              m;
            for (a.getAttr("show_partial_next") && f++; g <= f && g < k; g++)
              (m = c[g]) &&
                m.outerHeight > d &&
                (d = c[g].outerHeight || c[g].height);
            d > b &&
              (a.updateDimensionsCache({
                viewport: { height: d, outerHeight: d },
              }),
              a.setAttr("maxHeight", d),
              1 === b
                ? a.dom.$viewport.height(d)
                : e.animate(
                    a.dom.$viewport,
                    { height: d },
                    a.getAttr("height_animation_speed"),
                    "linear"
                  ));
          }
        else a.dom.$viewport.css("height", "");
      }
      function c(a) {
        a.onChange("pageNumber", function () {
          a.getAttr("hide_off_screen") &&
            a.dom.$carousel.children("li").css("visibility", "");
        });
        a.onChange("pageSize", function (b, c) {
          b > c && h(a);
        });
        a.onChange("loading", function (b) {
          b || h(a);
        });
        a.onChange("firstVisibleItem", function () {
          h(a);
        });
        a.onChange("animating", function (b) {
          if (!b && a.getAttr("hide_off_screen")) {
            var c = a.getAttr("firstVisibleItem") - 1,
              d = c + a.getAttr("pageSize") - 1;
            a.getAttr("show_partial_next") && d++;
            a.dom.$carousel.children("li").each(function (a, b) {
              a = a >= c && a <= d;
              m(b).css("visibility", a ? "" : "hidden");
            });
          }
        });
        a.onChange("single_page_align minimum_gutter_width", function () {
          b(a);
        });
        a.onChange("minimum_gutter_width", function () {
          b(a);
        });
      }
      function b(a) {
        var b = a.getDimensions(),
          c = b.viewport.width;
        b = b.getFirstCardWidth();
        var d = a.getAttr("minimum_gutter_width"),
          l = a.getAttr("set_size"),
          h = a.getAttr("first_item_flush_left"),
          g = k(a, c, b, h),
          m = f(a, c, b, g, d, l, h);
        a.setAttr("currentGutter", m);
        a.setAttr("pageSize", g);
        var v = a.dom.$carousel,
          n = v.children("li");
        d = n.length;
        var r = a.getAttr("totalPages"),
          A = a.getAttr("pageNumber"),
          C = a.getAttr("firstVisibleItem"),
          B = (A - 1) * g + 1;
        A > r
          ? ((C = (r - 1) * g + 1),
            a.setAttr("pageNumber", r),
            a.setAttr("firstVisibleItem", C))
          : C !== B &&
            ((r = Math.ceil(C / g)),
            (C = (r - 1) * g + 1),
            a.setAttr("pageNumber", r),
            a.setAttr("firstVisibleItem", C));
        var F = C - 1,
          G = F + g - 1;
        a.getAttr("show_partial_next") && G++;
        var H = a.getAttr("hide_off_screen"),
          I = m + "px",
          J = b + "px",
          z;
        n.each(function (a, b) {
          z = !H || (a >= F && a <= G);
          b.style[e.capabilities.rtl ? "marginRight" : "marginLeft"] =
            h && 0 === a ? 0 : I;
          b.style.visibility = z ? "" : "hidden";
          b.style.width = J;
        });
        var D;
        a.getAttr("first_item_flush_left")
          ? ((m = n.first().outerWidth(!0)),
            1 < n.length && (D = n.eq(1).outerWidth(!0)),
            (r = (d - 1) * D + m))
          : ((m = D = n.first().outerWidth(!0)), (r = d * D));
        g >= l
          ? ((r = c),
            (A = a.getAttr("single_page_align")),
            v.toggleClass("a-text-right", "right" === A),
            v.toggleClass("a-text-center", "center" === A),
            "center" === A && n.first().css("margin-left", 0))
          : v.removeClass("a-text-right a-text-center");
        r = g >= l ? c : r;
        v.css("width", r + "px");
        c = { carousel: { width: r, outerWidth: v.outerWidth() }, items: [] };
        for (l = 0; l < d; l++)
          c.items.push({ width: b, outerWidth: 0 === l ? m : D });
        a.updateDimensionsCache(c);
        a.gotoIndex(C, { animationDuration: 0, ignorePause: !0 });
        a.triggerEvent("repaint");
      }
      return {
        repaint: b,
        init: function (a) {
          var f = a.getAttr("minimum_gutter_width");
          e.isFiniteNumber(f) ||
            ((f = 15), a.setAttr("minimum_gutter_width", f));
          a.setAttr("currentGutter", f);
          f = a.getAttr("height_animation_speed");
          e.isFiniteNumber(f) || a.setAttr("height_animation_speed", 200);
          a.setAttr(
            "first_item_flush_left",
            !!a.getAttr("first_item_flush_left")
          );
          a.setAttr("show_partial_next", !!a.getAttr("show_partial_next"));
          b(a);
          a.getAttr(d.NO_TRANSITION) || h(a);
          f = a.getDimensions();
          a.dom.$container
            .find(".a-carousel-left, .a-carousel-right, .a-carousel-viewport")
            .css(
              "height",
              Math.max(f.viewport.height, f.items[0] ? f.items[0].height : 0) +
                "px"
            );
          f = a.getAttr("firstVisibleItem");
          1 < f &&
            (a.setAttr("firstVisibleItem", f),
            (f = Math.ceil(f / a.getAttr("pageSize"))),
            a.gotoPage(f));
          c(a);
        },
        resize: function (a, c) {
          c.viewport && void 0 !== c.viewport.width && b(a);
        },
      };
    }
  );
  ("use strict");
  n.when("A", "jQuery", "p-detect", "a-carousel-utils").register(
    "a-carousel-display-swap",
    function (e, m, g, d) {
      function k(c) {
        if (c.getAttr("auto_adjust_height")) {
          var b = c.getAttr("maxHeight");
          (b && e.isFiniteNumber(b)) || (b = 1);
          var a = b;
          c.dom.$carousel
            .children("li")
            .not(".a-carousel-card-empty")
            .each(function (b, c) {
              b = m(c).outerHeight();
              a = Math.max(b, a);
            });
          a > b &&
            (c.setAttr("maxHeight", a),
            g.capabilities.transition
              ? 1 === b
                ? c.dom.$viewport.height(a)
                : e.animate(
                    c.dom.$viewport,
                    { height: a },
                    c.getAttr("height_animation_speed"),
                    "linear"
                  )
              : c.dom.$viewport.height(a),
            c.updateDimensionsCache({
              viewport: { height: a, outerHeight: a },
            }));
        } else c.dom.$viewport.css("height", "");
      }
      function f(c) {
        c.onChange("animating", function (b) {
          b || k(c);
        });
        c.onChange("loading", function (b) {
          b || k(c);
        });
        c.onChange("pageSize", function (b, a) {
          c.dom.$carousel.children("li").slice(b).remove();
          if (b > a) {
            a = c.getAttr("set_size");
            var e = c.getDimensions().getFirstCardWidth(),
              f = c.getAttr("currentGutter"),
              h = c.getAttr("fetchedItems"),
              l = c.getAttr("firstVisibleItem") - 1,
              g = c.dom.$carousel.children("li"),
              u = document.createDocumentFragment();
            if (m.isArray(h)) {
              for (var q = g.length; q < b; q++) {
                var v = q + l;
                g = m(
                  [
                    '\x3cli class\x3d"a-carousel-card a-carousel-card-empty" role\x3d"listitem" aria-setsize\x3d"',
                    a,
                    '" aria-posinset\x3d"',
                    v + 1,
                    '" style\x3d"width:',
                    e,
                    "px; margin-left:",
                    f,
                    'px;"\x3e',
                    c.getStaticLoader(),
                  ].join("")
                );
                h[v] && d.addElementToDom(g, d.getElementFromItem(h[v]));
                v >= a && g.removeClass("a-carousel-card-empty");
                u.appendChild(g[0]);
              }
              c.dom.$carousel.append(u);
            }
            k(c);
          }
        });
        c.onChange("set_size", function (b, a) {
          var d = c.getAttr("pageNumber"),
            f = c.getAttr("totalPages"),
            g = c.dom.$carousel.children("li");
          d === f &&
            b > a &&
            (g.length &&
              c.dom.$carousel.children("li").each(function (a, b) {
                e.trim(b.innerHTML) ||
                  ((b.className += " a-carousel-card-empty"),
                  (b.innerHTML = c.getStaticLoader()));
              }),
            0 === a && h(c));
        });
        c.onChange("single_page_align minimum_gutter_width", function () {
          h(c);
        });
        c.onChange("minimum_gutter_width", function () {
          h(c);
        });
      }
      function h(c) {
        var b = c.getDimensions(),
          a = b.viewport.width,
          d = b.getFirstCardWidth(),
          f = c.getAttr("minimum_gutter_width");
        b = c.getAttr("set_size");
        var h = c.getAttr("minimum_gutter_width");
        c.getAttr("set_size");
        h = Math.max(Math.floor(a / (d + h)), 1);
        h = e.isFiniteNumber(h) ? h : 1;
        var l = h;
        "stretch" === c.getAttr("single_page_align") && l > b && (l = b);
        l = Math.ceil((a - d * l) / (l + 1));
        e.isFiniteNumber(l) || (l = f);
        var g = l;
        c.setAttr("currentGutter", g);
        c.setAttr("pageSize", h);
        l = c.dom.$carousel;
        var k = l.children("li");
        f = k.length;
        d += g;
        var m = f * d,
          v = Math.min(h, b);
        c.dom.$carousel.children("li").slice(v).remove();
        k.css("margin-left", g + "px");
        h >= b
          ? ((m = a),
            (a = c.getAttr("single_page_align")),
            l.toggleClass("a-text-right", "right" === a),
            l.toggleClass("a-text-center", "center" === a),
            "center" === a && k.first().css("margin-left", 0))
          : l.removeClass("a-text-right a-text-center");
        for (
          a = { carousel: { width: m, outerWidth: l.outerWidth() }, items: [] };
          f--;

        )
          a.items.push({ outerWidth: d });
        c.updateDimensionsCache(a);
        c.triggerEvent("repaint");
      }
      return {
        repaint: h,
        init: function (c) {
          var b = c.getAttr("minimum_gutter_width");
          b || ((b = 15), c.setAttr("minimum_gutter_width", b));
          c.setAttr("currentGutter", b);
          b = c.getAttr("height_animation_speed");
          e.isFiniteNumber(b) || c.setAttr("height_animation_speed", 200);
          f(c);
          h(c);
          b = c.getDimensions();
          c.dom.$container
            .find(".a-carousel-left, .a-carousel-right, .a-carousel-viewport")
            .css(
              "height",
              Math.max(b.viewport.height, b.items[0] ? b.items[0].height : 0) +
                "px"
            );
          b = c.getAttr("firstVisibleItem");
          1 < b &&
            (c.setAttr("firstVisibleItem", b),
            (b = Math.ceil(b / c.getAttr("pageSize"))),
            c.gotoPage(b));
        },
        resize: function (c, b) {
          b.viewport && void 0 !== b.viewport.width && h(c);
        },
      };
    }
  );
  ("use strict");
  n.when("A", "jQuery").register("a-carousel-display-single", function (e, m) {
    function g(d) {
      if (d.getAttr("auto_adjust_height"))
        if (d.getAttr("animating"))
          d.once("animating", function () {
            g(d);
          });
        else
          d.dom.$viewport.css("height", "auto"),
            e.delay(function () {
              d.dom.$viewport.height(d.dom.$viewport.height());
            }, 0);
      else d.dom.$viewport.css("height", "");
    }
    function d(d, c) {
      var b = d.dom.$carousel.children("li"),
        a = d.getAttr("firstVisibleItem") - 1;
      d = d.getAttr("show_partial_next") ? 2 : 1;
      a = b.slice(a, a + d);
      b.not(a).css("visibility", "hidden");
      c && a.css("visibility", "");
    }
    function k(e) {
      e.getAttr("fixed_height") ||
        (e.dom.$viewport.delegate("img", "load", function () {
          g(e);
        }),
        e.onChange("loading", function (c) {
          c || g(e);
        }),
        e.onChange("pageNumber", function () {
          e.getAttr("hide_off_screen") &&
            e.dom.$carousel.children("li").css("visibility", "");
        }),
        e.onChange("animating", function (c) {
          !c && e.getAttr("hide_off_screen") && d(e);
        }),
        e.onChange("minimum_gutter_width", function () {
          f(e);
        }));
    }
    function f(e) {
      var c = e.getDimensions(),
        b = c.viewport.width,
        a = e.getAttr("show_partial_next"),
        f = e.getAttr("minimum_gutter_width"),
        g = e.getAttr("set_size"),
        h = e.dom.$carousel.children("li");
      b -= 2 * f;
      a && (b -= f + c.viewport.width / 3);
      h.css({ width: b + "px", margin: "0 " + f + "px" });
      c = b + 2 * f;
      a = c * g;
      e.dom.$carousel.width(a);
      for (a = { carousel: { width: a }, items: [] }; g--; )
        a.items[g] = { width: b, outerWidth: c };
      e.updateDimensionsCache(a);
      e.getAttr("hide_off_screen") && d(e, !0);
      e.gotoIndex(e.getAttr("firstVisibleItem"), {
        animationDuration: 0,
        ignorePause: !0,
      });
      e.triggerEvent("repaint");
    }
    return {
      repaint: f,
      init: function (d) {
        var c = d.getAttr("minimum_gutter_width");
        d.setAttr("minimum_gutter_width", e.isFiniteNumber(c) ? c : 14);
        d.setAttr("show_partial_next", !!d.getAttr("show_partial_next"));
        d.setAttr("pageSize", 1);
        d.setAttr("pageSize", 1);
        c = d.getAttr("fixed_height");
        e.isFiniteNumber(c)
          ? d.dom.$viewport.height(c)
          : d.setAttr("fixed_height", !1);
        d.dom.$carousel.children("li").css("visibility", "visible");
        k(d);
        this.repaint(d);
        g(d);
      },
      resize: function (d, c) {
        c.viewport &&
          void 0 !== c.viewport.width &&
          (this.repaint(d), d.getAttr("fixed_height") || g(d));
      },
    };
  });
  ("use strict");
  n.when("A", "jQuery", "a-carousel-constants").register(
    "a-carousel-display-peekcircular",
    function (e, m, g) {
      function d(d) {
        return function (f) {
          return e.isFiniteNumber(f) ? f : d;
        };
      }
      m = {};
      m[g.PAGE_SIZE] = 1;
      m[g.MIN_GUTTER] = d(14);
      m[g.PEEK_PERCENTAGE] = d(10);
      return {
        initAttrs: m,
        init: function (d) {
          var e = this;
          d.onChange(g.PEEK_PERCENTAGE, function (f, c) {
            e.repaint(d);
          });
          d.dom.$carousel.children("li").css("visibility", "visible");
          e.repaint(d);
        },
        repaint: function (d) {
          var f = d.getAttr(g.MIN_GUTTER),
            h = d.getAttr(g.SET_SIZE),
            c = d.getAttr(g.PEEK_PERCENTAGE),
            b = d.getDimensions().viewport.width,
            a = d.dom.$carousel,
            p = a.children("li");
          c = (c / 100) * b;
          var t = b - 2 * c - f,
            k = t + 2 * f;
          b = k * h;
          a.width(b);
          p.css({
            width: t + "px",
            "margin-left": f + "px",
            "margin-right": f + "px",
          });
          d.updateDimensionsCache({
            carousel: { width: b },
            items: e.map(e.range(h), function () {
              return { width: t, outerWidth: k };
            }),
          });
          d.setAttr(g.PEEK_WIDTH, c, !1);
          d.triggerEvent("repaint");
        },
        resize: function (d, e) {
          e.viewport && e.viewport.width !== z && this.repaint(d);
        },
      };
    }
  );
  ("use strict");
  n.when("A").register("a-carousel-display-variablewidth", function (e) {
    return {
      init: e.constants.NOOP,
      resize: e.constants.NOOP,
      repaint: e.constants.NOOP,
    };
  });
  ("use strict");
  n.when(
    "a-carousel-stretchygoodness",
    "a-carousel-display-swap",
    "a-carousel-display-single",
    "a-carousel-display-peekcircular",
    "a-carousel-display-variablewidth"
  ).register("a-carousel-strategies-display", function (e, m, g, d, k) {
    return {
      swap: m,
      single: g,
      peekCircular: d,
      stretchyGoodness: e,
      variableWidth: k,
      default: "stretchyGoodness",
    };
  });
  ("use strict");
  n.when("A", "jQuery", "a-carousel-utils").register(
    "a-carousel-transition-swap",
    function (e, m, g) {
      function d(d, b) {
        var a = d.getAttr("preloadedImages");
        a || (a = []);
        for (var c = [], f = b.length - 1; 0 <= f; f--)
          if (b[f] && !a[f]) {
            var h = g.getElementFromItem(b[f]);
            h &&
              m("img", h).each(function () {
                c.push(this.src);
              });
            a[f] = !0;
          }
        e.preload(c);
        d.setAttr("preloadedImages", a);
      }
      function k(d) {
        return "number" === typeof d
          ? d
            ? 0 > d
              ? -1
              : 1
            : isNaN(d)
            ? NaN
            : 0
          : NaN;
      }
      function f(d, b) {
        d.getAttr("pageNumber");
        d.getAttr("pageSize");
        var a = d.getAttr("firstVisibleItem"),
          c = d.getAttr("delay_time"),
          f = d.dom.$carousel.children("li"),
          h = f.filter(".a-carousel-card-empty");
        h.length && d.setAttr("loading", !0);
        h.each(function (l, p) {
          var w = m(p);
          p = f.index(p) + a - 1;
          var k = b[p];
          k &&
            e.delay(function () {
              g.addElementToDom(w, g.getElementFromItem(k));
              l === h.length - 1 && d.setAttr("loading", !1);
            }, 0 + c);
        });
      }
      function h(d, b, a) {
        a = a || {};
        var c = d.getAttr("pageNumber");
        if (b !== c) {
          var f = d.getAttr("set_size"),
            h = d.getAttr("totalPages"),
            l = d.getAttr("circular"),
            w = d.getAttr("pageSize"),
            m = a.delayTime || d.getAttr("delay_time"),
            q = k(a.direction) || NaN;
          !l && 1 > b
            ? (b = 1)
            : !l && b > h
            ? (b = h)
            : l && 1 > b
            ? (b = h)
            : l && b > h && (b = 1);
          q || (q = c < b ? 1 : -1);
          a.startover && (q = m = 1);
          var v = w * (b - 1),
            n = 1 === q ? 0 : w - 1;
          d.setAttr("pageNumber", b);
          d.setAttr("firstVisibleItem", v + 1);
          d.setAttr("animating", !0);
          var r = e.interval(function () {
            var a = v + n;
            if (r !== d.getAttr("responsiveTimerId")) clearInterval(r);
            else if ((-1 === q && 0 > n) || (1 === q && n >= w))
              d.setAttr("responsiveTimerId", z), d.setAttr("animating", !1);
            else {
              var b = d.dom.$carousel.children("li").eq(n),
                c = d.getAttr("fetchedItems")[a];
              c
                ? g.addElementToDom(b, g.getElementFromItem(c))
                : a < f
                ? b.html(d.getStaticLoader()).addClass("a-carousel-card-empty")
                : b.empty().removeClass("a-carousel-card-empty");
              n += q;
            }
          }, m);
          d.setAttr("responsiveTimerId", r);
        }
      }
      return {
        init: function (c) {
          var b = c.getAttr("delay_time");
          e.isFiniteNumber(b) || c.setAttr("delay_time", 30);
          c.onChange("responsiveTimerId", function (a, b) {
            b !== a && clearInterval(b);
          });
          c.onChange("fetchedItems", function (a, b) {
            f(c, a);
            d(c, a);
          });
          d(c, c.getAttr("fetchedItems"));
        },
        gotoIndex: function (d, b, a) {
          a = a || {};
          var c = d.getAttr("pageSize");
          h(d, Math.ceil(b / c), a);
        },
        gotoNextPage: function (d, b) {
          b = b || {};
          var a = d.getAttr("pageNumber");
          b.direction = -1;
          h(d, ++a, b);
        },
        gotoPrevPage: function (d, b) {
          b = b || {};
          var a = d.getAttr("pageNumber");
          b.direction = 1;
          h(d, --a, b);
        },
        gotoPage: h,
      };
    }
  );
  ("use strict");
  n.when("A", "jQuery", "a-carousel-utils", "a-carousel-constants").register(
    "a-carousel-transition-slide",
    function (e, m, g, d) {
      function k(b) {
        var a = b.dom.$carousel.children("li").length,
          e = a + 1,
          c = b.getAttr(d.SET_SIZE),
          f = c - a;
        if (0 < f) {
          f = e + f - 1;
          for (var l = []; e <= f; e++) l.push(b.getEmptyCard(e, c));
          b.dom.$carousel.append(l.join(""));
          b.setAttr(d.LOADING, !0);
          f = b.getAttr(d.FETCHED_ITEMS);
          l = b.dom.$carousel.children("li");
          var h;
          for (e = a; e < c; e++)
            if ((h = f[e])) {
              var k = g.getElementFromItem(h);
              a = l.eq(e);
              g.addElementToDom(a, k);
              f[e] = g.clearElementFromItem(h);
            }
          b.strategies.display.repaint && b.strategies.display.repaint(b);
          b.setAttr(d.FETCHED_ITEMS, f, !0);
          b.setAttr(d.LOADING, !1);
        }
      }
      function f(b, a, c) {
        if (b.getAttr(d.ANIMATING))
          b.once(d.ANIMATING, function () {
            f(b, a, c);
          });
        else {
          var h = b.getDimensions().items,
            p = [];
          if (!c || a.length >= c.length) {
            b.setAttr(d.LOADING, !0);
            for (
              var l = b.dom.$carousel.children("li"), k, m, q = a.length;
              q--;

            )
              if (
                ((m = a[q]),
                null === m && p.push(q),
                m && !e.equals(m, c[q]) && !0 !== m && !0 !== m.content)
              ) {
                var n = g.getElementFromItem(m);
                k = l.eq(q);
                k.length &&
                  (g.addElementToDom(k, n),
                  (h[q] = {
                    width: k.outerWidth(),
                    outerWidth: k.outerWidth(!0),
                    height: k.outerHeight(),
                    outerHeight: k.outerHeight(!0),
                  }),
                  (a[q] = g.clearElementFromItem(m)));
              }
            p.length &&
              (e.each(p, function (b) {
                l.eq(b).remove();
                a.splice(b, 1);
              }),
              b.setAttr(d.SET_SIZE, b.getAttr(d.SET_SIZE) - p.length),
              b.triggerEvent("repaint"));
          }
          b.setAttr(d.FETCHED_ITEMS, a);
          b.updateDimensionsCache({ items: h });
          b.setAttr(d.LOADING, !1);
        }
      }
      var h = e.capabilities.touch ? 2e3 : 3e3,
        c = e.capabilities.rtl ? -1 : 1;
      return {
        wrapToFirst: function (b) {
          var a = b.getAttr(d.PAGE_SIZE),
            e = b.getDimensions().getFirstCardWidth(),
            c = this;
          b.gotoPixel(a * e * -1, {
            animationDuration: 0,
            callback: function () {
              b.setAttr(d.CURRENTLY_WRAPPING, !1);
              c.gotoPage(b, 1);
            },
          });
        },
        wrapToLast: function (b) {
          b.getAttr(d.PAGE_SIZE);
          var a = b.getAttr(d.TOTAL_PAGES),
            e = this,
            c = b.getDimensions().carousel.width;
          b.gotoPixel(c, {
            animationDuration: 0,
            callback: function () {
              b.setAttr(d.CURRENTLY_WRAPPING, !1);
              e.gotoPage(b, a);
            },
          });
        },
        gotoPage: function (b, a, e) {
          e = e || {};
          (void 0 === e.animationDuration || 0 < e.animationDuration) &&
            !e.silent &&
            b.setAttr(d.ANIMATING, !0);
          var c = b.getAttr(d.TOTAL_PAGES);
          0 < a && a <= c && b.setAttr(d.PAGE_NUMBER, a);
          var f = b.getAttr(d.CIRCULAR);
          !f && 1 > a
            ? ((a = 1),
              (e.animationDuration = Math.pow(
                b.getAttr(d.ANIMATION_SPEED) * b.getAttr(d.SPRINGINESS)
              )))
            : !f &&
              a > c &&
              ((a = c),
              (e.animationDuration = Math.pow(
                b.getAttr(d.ANIMATION_SPEED),
                b.getAttr(d.SPRINGINESS)
              )));
          this.gotoIndex(b, b.getAttr(d.PAGE_SIZE) * (a - 1) + 1, e);
        },
        gotoIndex: function (b, a, c) {
          c = c || {};
          (void 0 === c.animationDuration || 0 < c.animationDuration) &&
            !c.silent &&
            b.setAttr(d.ANIMATING, !0);
          var f = b.getAttr(d.CIRCULAR) && !b.getAttr(d.CURRENTLY_WRAPPING),
            g = c.callback,
            l = this,
            h = !1,
            k = b.getViewportWidth(),
            m = Math.ceil(a / b.getAttr(d.PAGE_SIZE));
          m !== b.getAttr(d.PAGE_NUMBER) &&
            0 < m &&
            m <= b.getAttr(d.TOTAL_PAGES) &&
            b.setAttr(d.PAGE_NUMBER, m);
          b.setAttr(d.FIRST_VISIBLE_ITEM, a);
          if (1 > a) {
            if (f) {
              h = -1 * k;
              var p = function () {
                g && g();
                l.wrapToLast(b);
              };
            }
          } else
            a > b.getAttr(d.SET_SIZE)
              ? f &&
                ((h = b.getAttr(d.CURRENT_PIXEL) + k),
                (p = function () {
                  g && g();
                  l.wrapToFirst(b);
                }))
              : (h = b.getItemOffset(a));
          p
            ? (b.setAttr(d.CURRENTLY_WRAPPING, !0),
              (c.callback = p),
              (c.easingFunction = c.easingFunction || b.getAttr(d.WRAP_EASING)),
              (c.animationSpeed =
                1.3 *
                (e.isFiniteNumber(c.animationSpeed)
                  ? c.animationSpeed
                  : b.getAttr(d.ANIMATION_SPEED))))
            : (c.callback = g);
          !1 !== h && this.gotoPixel(b, h, c);
        },
        gotoPixel: function (b, a, c) {
          var f = b.getAttr(d.CURRENT_PIXEL);
          if (a !== f) {
            c = c || {};
            var g = c.easingFunction || "ease-out",
              l = c.callback;
            b.getViewportWidth();
            if (void 0 !== c.animationDuration) var h = c.animationDuration;
            else
              (h = e.isFiniteNumber(c.animationSpeed)
                ? c.animationSpeed
                : b.getAttr(d.ANIMATION_SPEED)),
                (f = Math.abs(a - f)),
                (h = 0 === h ? 0 : Math.floor((f / h) * 1e3));
            0 < h && !c.silent && b.setAttr(d.ANIMATING, !0);
            if (e.isFiniteNumber(a)) {
              f =
                0 < h
                  ? function () {
                      l && l();
                      b.getAttr(d.CURRENTLY_WRAPPING) ||
                        b.setAttr(
                          d.ANIMATING,
                          e.isAnimated(b.dom.$carousel),
                          c.silent
                        );
                    }
                  : l;
              var k = e.capabilities.rtl ? 1 : -1;
              b.setAttr(d.CURRENT_PIXEL, a);
              e.animate(b.dom.$carousel, { left: a * k }, h, g, f);
            } else
              n.error(
                "Target pixel is not a finite number",
                "a-carousel-transition-slide",
                "gotoPixel"
              );
          }
        },
        gotoNextPage: function (b, a) {
          var c = b.getAttr(d.PAGE_NUMBER);
          this.gotoPage(b, ++c, a);
        },
        gotoPrevPage: function (b, a) {
          var c = b.getAttr(d.PAGE_NUMBER);
          this.gotoPage(b, --c, a);
        },
        onSwipe: function (b, a) {
          if (!b.getAttr(d.CURRENTLY_WRAPPING)) {
            var f = b.getAttr(d.FIRST_VISIBLE_ITEM),
              g = b.getAttr(d.PAGE_SIZE),
              h = b.getAttr(d.PAGE_NUMBER),
              l = 0 > c * a.velocityX,
              k = f;
            l && h < b.getAttr(d.TOTAL_PAGES)
              ? (k = f + g)
              : !l && 1 < h && (k = f - g);
            g = b.getAttr(d.CURRENT_PIXEL);
            h = b.getItemOffset(k);
            a = Math.abs((1e3 * (l ? g - h : g + h)) / a.velocityX);
            a = Math.max(a, 300);
            a = Math.min(a, 1.2 * e.viewport().width);
            a = {
              animationDuration: a,
              easingFunction: b.getAttr(d.TOUCH_EASING),
            };
            k !== f || b.getAttr("circular")
              ? l
                ? b.gotoNextPage(a)
                : b.gotoPrevPage(a)
              : ((a.animationSpeed = 0.95 * e.viewport().width),
                delete a.animationDuration,
                b.gotoIndex(k, a));
          }
        },
        onPan: function (b, a) {
          if (!b.getAttr(d.CURRENTLY_WRAPPING)) {
            b.setAttr(d.ANIMATING, !0);
            var f = b.getItemOffset(b.getAttr(d.FIRST_VISIBLE_ITEM)),
              g = f - c * a.touchDeltaX,
              h = b.getAttr(d.CIRCULAR),
              l = b.getAttr(d.PAGE_NUMBER),
              k = b.getAttr(d.TOTAL_PAGES);
            a.ended
              ? ((f = {
                  easingFunction: b.getAttr(d.TOUCH_EASING),
                  animationSpeed: 0.95 * e.viewport().width,
                  silent: !0,
                }),
                (a = c * a.touchDeltaX),
                (g = Math.abs(a) < 0.4 * b.getViewportWidth()),
                (!h && ((0 > a && k === l) || (0 < a && 1 === l))) || g
                  ? b.gotoPage(l, f)
                  : 0 > a
                  ? b.gotoNextPage(f)
                  : b.gotoPrevPage(f))
              : (!h &&
                  ((h = b.getAttr(d.SPRINGINESS)),
                  (0 > g && 0 < a.touchDeltaX) ||
                    (l === k && 0 > a.touchDeltaX)) &&
                  ((l = Math.pow(Math.abs(a.touchDeltaX), h)),
                  (g = 0 >= g ? -1 * l : f + l)),
                b.gotoPixel(g, {
                  easingFunction: b.getAttr(d.TOUCH_EASING),
                  animationDuration: 0,
                  silent: !0,
                }));
          }
        },
        init: function (b) {
          var a = b.getAttr(d.ANIMATION_SPEED);
          e.isFiniteNumber(a) || b.setAttr(d.ANIMATION_SPEED, h);
          void 0 === b.getAttr(d.WRAP_EASING) &&
            b.setAttr(d.WRAP_EASING, "linear");
          k(b);
          b.onChange(d.FETCHED_ITEMS, function (a, d) {
            f(b, a, d);
          });
          b.onChange(d.SET_SIZE, function (a, d) {
            a > d && k(b);
          });
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-carousel-utils",
    "a-carousel-circular-utils",
    "a-carousel-constants"
  ).register("a-carousel-transition-slidecircular", function (e, m, g, d) {
    function k(a) {
      var b = a.dom.$carousel.children("li").length,
        f = a.getAttr(d.SET_SIZE),
        g = f - b,
        l = c(a, b);
      0 < g &&
        ((b += 1),
        (g = e.map(e.range(b, b + g), function (b) {
          return a.getEmptyCard(b, f);
        })),
        l.after(g.join("")),
        a.measure("items"));
    }
    function f(c, e) {
      var f = c.getAttr(d.SET_SIZE);
      if (2 < c.getAttr(d.SET_SIZE)) {
        var g = a(c, c.getAttr(d.FIRST_VISIBLE_ITEM)),
          r = Math.round(c.getAttr(d.SET_SIZE) / 2);
        f = h(r, g, f);
        0 !== f.quantity &&
          (l(c, f.direction, f.quantity),
          (g = f.direction === u.CLOCKWISE ? g - f.quantity : g + f.quantity),
          e.gotoPixel(c, b(c, g), { animationDuration: 0 }));
      }
    }
    function h(a, b, d) {
      var c = {};
      a === b
        ? (a = b = 0)
        : a > b
        ? ((b = a - b), (a = d - b))
        : ((a = b - a), (b = d - a));
      c.direction = a <= b ? u.CLOCKWISE : u.COUNTER_CLOCKWISE;
      c.quantity = Math.min(a, b);
      return c;
    }
    function c(b, d) {
      return b.dom.$carousel.children("li").eq(a(b, d) - 1);
    }
    function b(a, b) {
      var c = Math.floor(a.getAttr(d.PEEK_WIDTH) || 0);
      return a.getItemOffset(b) - c;
    }
    function a(a, b) {
      b = b || 1;
      var c = a.getAttr(d.TRANSITION_SLIDE_CIRCULAR_FIRST_CARD_IDX);
      a = a.getAttr(d.SET_SIZE);
      return g.relativeIndexFromIndex(b, c, a);
    }
    function p(b, f, g) {
      if (b.getAttr(d.ANIMATING))
        b.once(d.ANIMATING, function () {
          p(b, f, g);
        });
      else {
        var l = b.getDimensions().items,
          h = Math.min(f.length, b.getAttr(d.SET_SIZE));
        if (!g || f.length >= g.length)
          b.setAttr(d.LOADING, !0),
            e.each(e.range(h), function (d) {
              var h = d + 1,
                k = f[d],
                B = c(b, h),
                r = k && !(!0 === k || !0 === k.content);
              k &&
                !e.equals(k, g[d]) &&
                B.length &&
                r &&
                ((h = a(b, h)),
                (l[h] = {
                  width: B.outerWidth(),
                  outerWidth: B.outerWidth(!0),
                  height: B.outerHeight(),
                  outerHeight: B.outerHeight(!0),
                }),
                m.addElementToDom(B, m.getElementFromItem(k)),
                (f[d] = m.clearElementFromItem(k)));
            }),
            b.setAttr(d.LOADING, !1);
        b.setAttr(d.FETCHED_ITEMS, f);
        b.updateDimensionsCache({ items: l });
      }
    }
    function t(a) {
      var b = { reached: !1, left: !1, right: !1 };
      if (!(2 < a.getAttr(d.SET_SIZE))) {
        var c = a.getAttr(d.PAGE_NUMBER);
        a = a.getAttr(d.SET_SIZE);
        1 === c && ((b.reached = !0), (b.left = !0));
        c === a && ((b.reached = !0), (b.right = !0));
      }
      return b;
    }
    function x(a, b, c) {
      var e = t(a),
        f = a.getAttr(d.PAGE_NUMBER);
      e.reached && e[b]
        ? a.gotoPage(f)
        : ("right" === b ? a.gotoNextPage : a.gotoPrevPage).call(a, c);
    }
    function l(a, b, c) {
      var e = a.getAttr(d.TRANSITION_SLIDE_CIRCULAR_FIRST_CARD_IDX) || 1,
        f = a.getAttr(d.SET_SIZE),
        l = a.dom.$carousel.children("li"),
        h = a.dom.$carousel;
      b === u.CLOCKWISE
        ? (g.rotateCW(h, l, c), (e = g.firstCardIndexAfterRotate(c, e, f)))
        : (g.rotateCCW(a.dom.$carousel, a.dom.$carousel.children("li"), c),
          (e = g.firstCardIndexAfterRotate(-1 * c, e, f)));
      a.setAttr(d.TRANSITION_SLIDE_CIRCULAR_FIRST_CARD_IDX, e);
      c = c || 1;
      b = b || u.CLOCKWISE;
      e = a.getDimensions().items;
      e = b === u.CLOCKWISE ? g.rotateArrayCW(e, c) : g.rotateArrayCCW(e, c);
      a.updateDimensionsCache({ items: e });
    }
    function w(c, g, h, k, m) {
      var B = m.callback,
        r = a(c, c.getAttr(d.FIRST_VISIBLE_ITEM)),
        w = c.getAttr(d.CURRENT_PIXEL) - b(c, r);
      e.sequence(
        function (a) {
          l(c, g, k);
          a();
        },
        function (a) {
          h.gotoPixel(c, b(c, g === u.CLOCKWISE ? r - k : r + k) + w, {
            animationDuration: 0,
            callback: a,
          });
        },
        function (a) {
          m.callback = a;
          h.gotoPixel(c, b(c, r), m);
        },
        function (a) {
          f(c, h);
          a();
        },
        function (a) {
          B && B();
          a();
        }
      )();
    }
    var u = { CLOCKWISE: 1, COUNTER_CLOCKWISE: -1 },
      q = e.capabilities.rtl ? -1 : 1,
      v = e.capabilities.touch ? 2e3 : 3e3,
      y = {};
    y[d.HIDE_OFF_SCREEN] = !1;
    y[d.ANIMATION_SPEED] = (function (a) {
      return function (b) {
        return e.isFiniteNumber(b) ? b : a;
      };
    })(v);
    y[d.TRANSITION_SLIDE_CIRCULAR_FIRST_CARD_IDX] = 1;
    return {
      initAttrs: y,
      init: function (a) {
        k(a);
        a.onChange(d.FETCHED_ITEMS, function (b, d) {
          p(a, b, d);
          a.strategies.display.repaint(a);
        });
        a.onChange(d.SET_SIZE, function (b, d) {
          b > d && k(a);
        });
        a.onChange(d.PEEK_WIDTH, function (b, c) {
          b !== c && ((b = a.getAttr(d.FIRST_VISIBLE_ITEM)), a.gotoIndex(b));
        });
      },
      afterInit: function (a) {
        f(a, this);
        a.strategies.display.repaint(a);
        a.gotoPage(a.getAttr(d.PAGE_NUMBER));
      },
      gotoPage: function (a, b, c) {
        c = c || {};
        var e = a.getAttr(d.TOTAL_PAGES);
        0 < b &&
          b <= e &&
          (a.setAttr(d.PAGE_NUMBER, b),
          this.gotoIndex(a, a.getAttr(d.PAGE_SIZE) * (b - 1) + 1, c));
      },
      gotoIndex: function (c, e, f) {
        var g = c.getAttr(d.SET_SIZE),
          l = a(c, c.getAttr(d.FIRST_VISIBLE_ITEM)),
          k = a(c, e);
        l === k
          ? this.gotoPixel(c, b(c, l), f)
          : (2 < c.getAttr(d.SET_SIZE)
              ? ((g = h(l, k, g)),
                f.startover &&
                  (5 < g.quantity
                    ? (f.animationDuration = 1250)
                    : (delete f.animationDuration,
                      (f.animationSpeed =
                        5 * c.getDimensions().viewport.width))),
                w(c, g.direction, this, g.quantity, f))
              : this.gotoPixel(c, b(c, e), f),
            c.setAttr(d.FIRST_VISIBLE_ITEM, e));
      },
      gotoPixel: function (a, b, c) {
        var f = a.getAttr(d.CURRENT_PIXEL);
        if (b !== f) {
          e.isFiniteNumber(b) ||
            n.error(
              "Target pixel is not a finite number",
              "a-carousel-transition-slide-circular",
              "gotoPixel"
            );
          c = c || {};
          var g = c.easingFunction || "ease-out",
            l = c.callback;
          if (c.animationDuration !== z) var h = c.animationDuration;
          else
            (h = e.isFiniteNumber(c.animationSpeed)
              ? c.animationSpeed
              : a.getAttr(d.ANIMATION_SPEED)),
              (f = Math.abs(b - f)),
              (h = 0 === h ? 0 : Math.floor((f / h) * 1e3));
          0 < h &&
            (!c.silent && a.setAttr(d.ANIMATING, !0),
            (l = function () {
              c.callback && c.callback();
              a.setAttr(d.ANIMATING, e.isAnimated(a.dom.$carousel), c.silent);
            }));
          f = e.capabilities.rtl ? u.CLOCKWISE : u.COUNTER_CLOCKWISE;
          a.setAttr(d.CURRENT_PIXEL, b);
          e.animate(a.dom.$carousel, { left: b * f }, h, g, l);
        }
      },
      gotoNextPage: function (a, b) {
        var c = a.getAttr(d.PAGE_NUMBER);
        c = c === a.getAttr(d.TOTAL_PAGES) ? 1 : c + 1;
        this.gotoPage(a, c, b);
      },
      gotoPrevPage: function (a, b) {
        var c = a.getAttr(d.PAGE_NUMBER);
        c = 1 === c ? a.getAttr(d.TOTAL_PAGES) : c - 1;
        this.gotoPage(a, c, b);
      },
      onSwipe: function (c, f) {
        var g = c.getAttr(d.CURRENT_PIXEL),
          l = c.getAttr(d.PAGE_SIZE),
          h = a(c, c.getAttr(d.FIRST_VISIBLE_ITEM)),
          k = 0 > q * f.velocityX;
        l = b(c, k ? h + l : h - l);
        g = Math.abs((1e3 * (k ? g - l : g + l)) / f.velocityX);
        k = 1.2 * e.viewport().width;
        x(c, 0 > q * f.touchDeltaX ? "right" : "left", {
          animationDuration: Math.min(Math.max(g, 300), k),
          easingFunction: c.getAttr(d.TOUCH_EASING),
        });
      },
      onPan: function (c, f) {
        c.setAttr(d.ANIMATING, !0);
        var g = c.getAttr(d.PAGE_NUMBER),
          l = a(c, c.getAttr(d.FIRST_VISIBLE_ITEM));
        l = b(c, l);
        l = t(c).reached ? l - q * f.touchDeltaX * 0.4 : l - q * f.touchDeltaX;
        f.ended
          ? ((l = {
              easingFunction: c.getAttr(d.TOUCH_EASING),
              animationSpeed: 0.95 * e.viewport().width,
              silent: !0,
            }),
            Math.abs(f.touchDeltaX) >= 0.4 * c.getViewportWidth()
              ? x(c, 0 > q * f.touchDeltaX ? "right" : "left", l)
              : c.gotoPage(g, l))
          : c.gotoPixel(l, {
              easingFunction: c.getAttr(d.TOUCH_EASING),
              animationDuration: 0,
              silent: !0,
            });
      },
    };
  });
  ("use strict");
  n.when("A", "a-carousel-utils", "a-carousel-constants").register(
    "a-carousel-transition-freescroll",
    function (e, m, g) {
      function d(a) {
        p[a.__id] || (p[a.__id] = new t(a));
        return p[a.__id];
      }
      function k(b) {
        for (var c = b.countItems(), d = [], f = 0; f < c; f++) d.push(!0);
        b.setAttr(g.FETCHED_ITEMS, d);
        b.getAttr("auto_adjust_height_freescroll") &&
          (e.$(b.getViewport()).css("height", "auto"),
          a(b),
          e.$(b.getViewport()).css("overflow-y", "hidden"));
      }
      function f(a) {
        var b = a.countItems(),
          c = a.getAttr(g.SET_SIZE),
          d = [];
        if (c > b) {
          for (var e = 0; e < c - b; e++) {
            var f = b + e + 1;
            d.push(a.getEmptyCard(f, c));
          }
          a.appendItems(d);
          a.shouldRepaint() && a.repaint();
        }
      }
      function h(b, c, d) {
        if (!d || c.length >= d.length)
          for (var f = b.getItems(), h = c.length, l; h--; )
            (l = c[h]) &&
              !e.equals(l, d[h]) &&
              !0 !== l &&
              !0 !== l.content &&
              b.hasItem(f, h) &&
              (c[h] = b.insertFetchedItem(l, f, h));
        b.setAttr(g.FETCHED_ITEMS, c);
        a(b);
      }
      function c(a) {
        a.attachScrollListener(function () {
          var c = a.hasEmptyCard();
          var d = a.getAttr("auto_adjust_height_freescroll"),
            e = a.getAttr("startIndexForHeightCheck"),
            f = a.countItems();
          c || (d && e < f) ? (c = !0) : (a.detachScrollListener(), (c = !1));
          c && a.throttle("detect", b);
        });
      }
      function b(c) {
        var d =
            "undefined" !== typeof c.getAttr(g.LOADING_THRESHOLD_PIXELS)
              ? c.getAttr(g.LOADING_THRESHOLD_PIXELS)
              : 400,
          e = c.measureWidth(),
          f = c.getFirstEmptyDetails(),
          h = c.getViewport();
        -1 !== f.index && f.left < e + d
          ? c.wantNext(
              f.index,
              "undefined" !== typeof c.getAttr(g.NEXT_REQUEST_SIZE)
                ? c.getAttr(g.NEXT_REQUEST_SIZE)
                : 10
            )
          : c.getAttr("currentScrollPosition") === h.scrollLeft()
          ? a(c)
          : c.throttle("detect", b);
        c.setAttr("currentScrollPosition", h.scrollLeft());
      }
      function a(a) {
        if (a.getAttr("auto_adjust_height_freescroll")) {
          var b = a.getAttr("lastScrollPosition"),
            c = a.getViewport();
          if (b < c.scrollLeft()) {
            b = a.getAttr("startIndexForHeightCheck");
            var d = a.getAttr("maxHeight"),
              f = a.getItems(),
              h = a.measureWidth(),
              l = a.getFirstEmptyDetails().index,
              k = f.length - 1;
            for (-1 !== l && l < f.length && (k = l - 1); b <= k; ) {
              if (f[b].getBoundingClientRect().left <= h)
                d < e.$(f[b]).outerHeight() && (d = e.$(f[b]).outerHeight());
              else break;
              b += 1;
            }
            d != c.outerHeight() &&
              e.animate(
                c,
                { height: d },
                a.getAttr(g.HEIGHT_ANIMATION_SPEED),
                "linear"
              );
            a.setAttr("maxHeight", d);
            a.setAttr("startIndexForHeightCheck", b);
          }
          a.setAttr("lastScrollPosition", c.scrollLeft());
        }
      }
      var p = {},
        t = function (a) {
          this.carousel = a;
        };
      e.extend(t.prototype, {
        setAttr: function (a, b) {
          return this.carousel.setAttr(a, b);
        },
        getAttr: function (a) {
          return this.carousel.getAttr(a);
        },
        onChange: function (a, b) {
          this.carousel.onChange(a, b);
        },
        getItems: function () {
          return this.carousel.dom.$carousel.children("li");
        },
        getViewport: function () {
          return this.carousel.dom.$viewport;
        },
        countItems: function () {
          return this.getItems().length;
        },
        showItems: function () {
          return this.getItems()
            .css("visibility", "")
            .attr("aria-hidden", "false");
        },
        getEmptyCard: function (a, b) {
          return this.carousel.getEmptyCard(a, b);
        },
        getEmptyCards: function () {
          return this.carousel.dom.$carousel.children(".a-carousel-card-empty");
        },
        hasEmptyCard: function () {
          return 0 < this.getEmptyCards().length;
        },
        getFirstEmptyDetails: function () {
          var a = this.getEmptyCards();
          return 0 < a.length
            ? ((a = a.first()), { index: a.index(), left: a.position().left })
            : { index: -1, left: -1 };
        },
        appendItems: function (a) {
          this.carousel.dom.$carousel.append(a.join(""));
        },
        hasItem: function (a, b) {
          return 0 < a.eq(b).length;
        },
        insertFetchedItem: function (a, b, c) {
          m.addElementToDom(b.eq(c), m.getElementFromItem(a));
          return m.clearElementFromItem(a);
        },
        attachScrollListener: function (a) {
          this.carousel.dom.$carousel.bind(
            e.action.move +
              ".a-carousel-freeScroll scroll.a-carousel-freeScroll",
            a
          );
          this.triggerEvent("scrollEventAttached");
        },
        detachScrollListener: function (a) {
          this.carousel.dom.$carousel.unbind(".a-carousel-freeScroll");
          this.triggerEvent("scrollEventDetached");
        },
        triggerEvent: function (a) {
          this.carousel.triggerEvent(a, this.carousel);
        },
        measureWidth: function () {
          return this.carousel.dom.$viewport.outerWidth();
        },
        wantNext: function (a, b) {
          this.carousel.strategies.ajax.want(this.carousel, a, b);
        },
        getDimensions: function () {
          return this.carousel.getDimensions();
        },
        throttle: function (a, b) {
          var c = this;
          clearTimeout(c[a]);
          c[a] = setTimeout(function () {
            b(c);
          }, 100);
        },
        shouldRepaint: function () {
          return this.carousel.strategies.display.repaint;
        },
        repaint: function () {
          this.carousel.strategies.display.repaint(this.carousel);
        },
      });
      var n = {
        ajaxLock: !0,
        startIndexForHeightCheck: 0,
        lastScrollPosition: -1,
        currentScrollPosition: -1,
        maxHeight: 1,
      };
      n[g.NO_TRANSITION] = !0;
      n[g.HIDE_OFF_SCREEN] = !1;
      n[g.AUTO_ADJUST_HEIGHT] = !1;
      n[g.HEIGHT_ANIMATION_SPEED] = 200;
      return {
        gotoIndex: e.constants.NOOP,
        gotoNextpage: e.constants.NOOP,
        gotoPrevPage: e.constants.NOOP,
        gotoPage: e.constants.NOOP,
        initAttrs: n,
        init: function (a) {
          var l = d(a);
          l.showItems();
          k(l);
          f(l);
          c(l);
          l.onChange(g.FETCHED_ITEMS, function (a, c) {
            h(l, a, c);
            b(l);
          });
          e.on.resize(function () {
            b(l);
          });
        },
        afterInit: function (a) {
          var c = d(a);
          e.delay(function () {
            c.setAttr("ajaxLock", !1);
            b(c);
          });
        },
        prepareFetchedItems: k,
        addEmptyCards: f,
        handleItemChanges: h,
        detectEmptyCardsLoadingThreshold: b,
        ATTR: {
          NEXT_REQUEST_SIZE: g.NEXT_REQUEST_SIZE,
          LOADING_THRESHOLD_PIXELS: g.LOADING_THRESHOLD_PIXELS,
          CURRENT_SCROLL_POSITION: "currentScrollPosition",
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "jQuery",
    "a-carousel-transition-slide",
    "a-carousel-transition-swap",
    "a-carousel-transition-freescroll",
    "a-carousel-transition-slidecircular",
    "a-carousel-constants"
  ).register(
    "a-carousel-strategies-transition",
    function (e, m, g, d, k, f, h) {
      m = {};
      m[h.NO_TRANSITION] = !0;
      m[h.HIDE_OFF_SCREEN] = !1;
      m[h.AUTO_ADJUST_HEIGHT] = !1;
      return {
        slideHorizontal: g,
        swap: d,
        freeScroll: k,
        slideCircular: f,
        none: {
          gotoIndex: e.constants.NOOP,
          gotoNextPage: e.constants.NOOP,
          gotoPrevPage: e.constants.NOOP,
          gotoPage: e.constants.NOOP,
          initAttrs: m,
          init: function (c) {
            c.dom.$carousel
              .children("li")
              .css("visibility", "")
              .attr("aria-hidden", "false");
          },
        },
        default: "slideHorizontal",
      };
    }
  );
  ("use strict");
  n.when("A").register("a-carousel-ajax-standard", function (e) {
    function m(f, g, c, b) {
      f.triggerEvent("beforeAjax", { url: g, params: c });
      e.get(g, {
        cache: !1,
        success: function (a) {
          a = d(a, g);
          if (null === a)
            n.error(
              "Invalid JSON returned to carousel from " +
                g +
                " - see http://tiny/c1mr5h0u for details.",
              "a-carousel-ajax-standard",
              "sendRequest"
            );
          else {
            c.needSetSize &&
              ((a && a.length) ||
                n.error(
                  "Carousel requires a set_size and none was returned by the fallback AJAX request at: " +
                    g,
                  "a-carousel-ajax-standard",
                  "sendRequest"
                ),
              f.setAttr("set_size", a[0].setSize ? a[0].setSize : a.length));
            for (
              var b = f.getAttr("fetchedItems"),
                h = f.getAttr("ajax"),
                k = [],
                l,
                m = a.length;
              m--;

            )
              (l = a[m]),
                null === l && k.push(m),
                l &&
                  (l.content || "" === l.content
                    ? (l.content = e.trim(l.content))
                    : (l = e.trim(l))),
                (b[c.offset + m] = l);
            h.remove_nulls &&
              h.id_list &&
              k.length &&
              (e.each(k, function (a) {
                h.id_list.splice(c.offset + a, 1);
              }),
              f.setAttr("ajax", h));
            c.needSetSize && f.init();
            f.setAttr("fetchedItems", b);
            f.setAttr("ajaxLock", !1);
            c.needSetSize &&
              f.getAttr("pageSize") >= b.length &&
              f.strategies.ajax.wantCurrentPage(f);
            f.triggerEvent("ajaxSuccess", { url: g, params: c });
          }
        },
        params: c,
        headers: b,
      });
    }
    function g(d) {
      var e = d.getAttr("requestTimer");
      e && (clearTimeout(e), d.setAttr("requestTimer", null));
    }
    function d(d, g) {
      return e.isArray(d)
        ? d
        : d !== k &&
          null !== d &&
          !e.objectIsEmpty(d) &&
          d.hasOwnProperty("data") &&
          e.isArray(d.data)
        ? d.data
        : null;
    }
    var k;
    return {
      getItems: function (d, g, c, b) {
        var a = d.getAttr("ajax");
        d.setAttr("requestTimer", e.delay(m, a.fetch_delay, d, g, c, b));
      },
      wantNextPage: function (d) {
        g(d);
        if (d.getAttr("ajax").prefetch_next_page) {
          var e = d.getAttr("pageSize"),
            c = 2 * e;
          d.getAttr("show_partial_next") && c++;
          this.want(d, (d.getAttr("pageNumber") - 1) * e, c);
        } else this.wantCurrentPage(d);
      },
      wantPrevPage: function (d) {
        g(d);
        if (d.getAttr("ajax").prefetch_next_page) {
          var e = d.getAttr("pageSize"),
            c = 2 * e;
          d.getAttr("show_partial_next") && c++;
          this.want(d, (d.getAttr("pageNumber") - 2) * e, c);
        } else this.wantCurrentPage(d);
      },
      wantCurrentPage: function (d) {
        g(d);
        var e = d.getAttr("pageSize"),
          c = d.getAttr("show_partial_next") ? e + 1 : e;
        this.want(d, (d.getAttr("pageNumber") - 1) * e, c);
      },
      want: function (d, e, c) {
        if (!d.getAttr("ajaxLock")) {
          g(d);
          var b = d.getAttr("ajax"),
            a = d.getAttr("set_size");
          if (b.url) {
            var f = d.getAttr("fetchedItems"),
              h = b.id_list;
            h || (h = []);
            var k = -1 < e ? e : 0;
            e = e + c - 1;
            var l = b.params || {},
              m = b.headers || {},
              n = [],
              q = [];
            0 === a &&
              (h.length && (a = h),
              (l.needSetSize = "true"),
              d.setAttr("ajaxLock", !0));
            for (-1 === c && a && (e = a); k <= e && k < a; )
              f[k] || ((c = h[k]) && n.push(c), q.push(k), (f[k] = !1)), k++;
            d.setAttr("fetchedItems", f, { silent: !0 });
            l.count = q.length;
            l.offset = q[0] || 0;
            0 < n.length && (l[b.id_param_name] = n.join(","));
            (0 < q.length || l.needSetSize) && this.getItems(d, b.url, l, m);
          }
        }
      },
      init: function (d) {
        var f = d.getAttr("ajax");
        e.isFiniteNumber(f.fetch_delay) || (f.fetch_delay = 500);
        f.id_param_name = f.id_param_name || "ids";
        f.prefetch_next_page =
          f.prefetch_next_page === k ? !0 : !!f.prefetch_next_page;
        d.setAttr("ajax", f);
        d.getAttr("set_size") || this.want(d, 0, -1);
      },
      afterInit: function (d) {
        d.strategies.ajax.wantCurrentPage(d);
        d.onChange("pageNumber", function (e, c) {
          e > c
            ? d.strategies.ajax.wantNextPage(d)
            : d.strategies.ajax.wantPrevPage(d);
        });
        d.onChange("loading", function (e) {
          e || d.strategies.ajax.wantCurrentPage(d);
        });
      },
    };
  });
  ("use strict");
  n.when("a-util").register("a-carousel-ajax-promise", function (e) {
    function m(g, d) {
      var k = g.getAttr("requestTimer");
      k && clearTimeout(k);
      g.setAttr("requestTimer", e.delay(d, 500));
    }
    return {
      getItems: function (g, d, k) {
        m(g, function () {
          var f = g.getAttr("async_provider");
          f &&
            f(d, k).then(function (f) {
              var c = g.getAttr("fetchedItems");
              e.each(f, function (b, a) {
                c[d[a]] = b;
              });
              g.setAttr("fetchedItems", c);
            });
        });
      },
      wantNextPage: function (e) {
        var d = e.getAttr("pageSize"),
          g = (e.getAttr("pageNumber") - 1) * d;
        this.want(e, g, 2 * d);
      },
      wantPrevPage: function (e) {
        var d = e.getAttr("pageSize"),
          g = (e.getAttr("pageNumber") - 2) * d;
        this.want(e, g, 2 * d);
      },
      wantCurrentPage: function (e) {
        var d = e.getAttr("pageSize"),
          g = (e.getAttr("pageNumber") - 1) * d;
        this.want(e, g, d);
      },
      want: function (g, d, k) {
        d = Math.max(0, d);
        k = Math.min(d + k, g.getAttr("set_size"));
        for (var f = g.getAttr("fetchedItems"), h = []; d < k; d++)
          f[d] || (h.push(d), (f[d] = !1));
        if (h.length) {
          var c,
            b = g.getAttr("ajax").id_list;
          b &&
            (c = e.map(h, function (a) {
              return b[a];
            }));
          g.setAttr("fetchedItems", f, { silent: !0 });
          this.getItems(g, h, c);
        }
      },
      init: function (e) {},
      afterInit: function (g) {
        g.strategies.ajax.wantCurrentPage(g);
        g.onChange(
          "async_provider",
          e.once(function () {
            g.strategies.ajax.wantCurrentPage(g);
          })
        );
        g.onChange("pageNumber", function (d, e) {
          d > e
            ? g.strategies.ajax.wantNextPage(g)
            : g.strategies.ajax.wantPrevPage(g);
        });
      },
    };
  });
  ("use strict");
  n.when("A", "a-carousel-ajax-standard", "a-carousel-ajax-promise").register(
    "a-carousel-strategies-ajax",
    function (e, m, g) {
      return {
        standard: m,
        promise: g,
        none: {
          wantNextPage: e.constants.NOOP,
          wantPrevPage: e.constants.NOOP,
          wantCurrentPage: e.constants.NOOP,
          want: e.constants.NOOP,
          init: e.constants.NOOP,
        },
        default: "standard",
      };
    }
  );
  ("use strict");
  n.when("A", "a-carousel-constants").register(
    "a-carousel-accessibility-standard-desktop",
    function (e, m) {
      function g(a) {
        var b = a.dom.$carousel,
          c = b.children("li"),
          d = a.getAttr(m.PAGE_SIZE),
          e = a.getAttr(m.FIRST_VISIBLE_ITEM),
          f = e - 1,
          g = a.getAttr(m.TRANSITION_SLIDE_CIRCULAR_FIRST_CARD_IDX);
        if (a.getAttr(m.NO_TRANSITION)) return c;
        if (c.length <= d)
          return b.children("li:not(:empty), li.a-carousel-card-empty");
        "slideCircular" === a.getAttr(m.TRANSITION_STRATEGY) &&
          ((f = g - e - 1), 0 === c.length % 2 && --f);
        b = f = (f + 2 * c.length) % c.length;
        "peekCircular" === a.getAttr(m.DISPLAY_STRATEGY) && --b;
        d = f + d;
        if (
          "peekCircular" === a.getAttr(m.DISPLAY_STRATEGY) ||
          a.getAttr(m.SHOW_PARTIAL_NEXT)
        )
          d += 1;
        return c.slice(Math.max(b, 0), Math.min(d, c.length));
      }
      function d(a, b, c, d) {
        var h = function () {
          var c = g(a);
          (b ? c.first() : c.last())
            .find(
              "a, button, input, select, textarea, [tabindex]:not([tabindex\x3d'-1'])"
            )
            .not(":disabled")
            .first()
            .focus();
          e.delay(function () {
            f(a);
          }, a.getAttr(m.PAGE_SIZE) * a.getAttr(m.DELAY_TIME) + 50);
        };
        if (0 === c || 0 === d) e.delay(h, 0);
        else {
          var k = function (b) {
            b || (h(), a.unbind(m.ANIMATING, k));
          };
          a.onChange(m.ANIMATING, k);
        }
      }
      function k(a) {
        var c = a.dom.$carousel.children("li"),
          d = a.getAttr(m.TRANSITION_STRATEGY),
          e = a.getAttr(m.SET_SIZE),
          f = e ? { "aria-setsize": e } : {};
        if ("swap" === d) {
          var g = a.getAttr(m.FIRST_VISIBLE_ITEM);
          c.each(function (a) {
            var c = b(this);
            g + a > e
              ? (c.removeAttr("aria-setsize"), c.removeAttr("aria-posinset"))
              : ((f["aria-posinset"] = g + a), c.attr(f));
          });
        } else
          c.each(function (a) {
            f["aria-posinset"] = a + 1;
            b(this).attr(f);
          });
      }
      function f(a) {
        a = a.dom.$container;
        a.find(".a-carousel-accessibility-page-info").html(
          a.find(".a-carousel-page-count").text()
        );
      }
      function h(a, b) {
        if (!a.getAttr(m.NO_TRANSITION)) {
          var c = a.dom.$carousel.children("li"),
            d = a.getAttr(m.TRANSITION_STRATEGY);
          a = a.getAttr(m.DISPLAY_STRATEGY);
          c = c.not(b);
          b.attr("aria-hidden", !1);
          c.attr("aria-hidden", !0);
          if (
            ("slideCircular" === d && "peekCircular" !== a) ||
            "slideHorizontal" === d
          )
            b.css("visibility", "visible"), c.css("visibility", "hidden");
        }
      }
      function c(a, b) {
        if (!a.getAttr(m.CIRCULAR)) {
          var c = a.dom.$container;
          c.find(".a-carousel-goto-prevpage").attr(
            "aria-disabled",
            1 === b ? "true" : "false"
          );
          c.find(".a-carousel-goto-nextpage").attr(
            "aria-disabled",
            b === a.getAttr(m.TOTAL_PAGES) ? "true" : "false"
          );
        }
      }
      var b = e.$;
      return {
        init: function (a) {
          var b = a.getAttr(m.NAME);
          k(a);
          h(a, g(a));
          c(a, 1);
          e.on("a:carousel" + (b ? ":" + b : "") + ":repaint", function () {
            h(a, g(a));
          });
          a.onChange(m.SET_SIZE, function (b, c) {
            k(a);
          });
          a.onChange(m.LOADING, function (b) {
            a.getAttr(m.ANIMATING) ||
              a.dom.$carousel.attr("aria-busy", (!!b).toString());
          });
          a.onChange(m.ANIMATING, function (b) {
            a.getAttr(m.LOADING) ||
              a.dom.$carousel.attr("aria-busy", (!!b).toString());
            !b &&
              a.getAttr(m.SET_SIZE) > a.getAttr(m.PAGE_SIZE) &&
              ((b = a.getAttr(m.TRANSITION_STRATEGY)),
              h(a, g(a)),
              "slide" !== b && k(a));
          });
          a.onChange(m.PAGE_NUMBER, function (b) {
            c(a, b);
            h(a, a.dom.$carousel.children("li"));
          });
        },
        afterInit: function (a) {
          f(a);
        },
        gotoPage: function (a, b, c) {
          a.getAttr(m.NO_TRANSITION) || d(a, !0, b, c);
        },
        nextPage: function (a, b, c) {
          a.getAttr(m.NO_TRANSITION) || d(a, !0, b, c);
        },
        prevPage: function (a, b, c) {
          a.getAttr(m.NO_TRANSITION) || d(a, !1, b, c);
        },
      };
    }
  );
  ("use strict");
  n.when("A", "a-carousel-constants").register(
    "a-carousel-accessibility-standard-mobile",
    function (e, m) {
      function g(e) {
        var f = e.dom.$carousel;
        e = f.children(".a-carousel-card-empty");
        f = f.children("li").not(e);
        var g = f.length,
          c = g ? { "aria-setsize": g } : {};
        e.attr("aria-hidden", "true")
          .removeAttr("aria-setsize")
          .removeAttr("aria-posinset");
        f.each(function (b) {
          c["aria-posinset"] = b + 1;
          c["aria-hidden"] = "false";
          d(this).attr(c);
        });
      }
      var d = e.$;
      e = e.constants.NOOP;
      return {
        init: function (d) {
          g(d);
          d.onChange(m.SET_SIZE, function () {
            g(d);
          });
          d.onChange(m.LOADING, function (e) {
            d.dom.$carousel.attr("aria-busy", (!!e).toString());
            e || g(d);
          });
        },
        gotoPage: e,
        nextPage: e,
        prevPage: e,
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-carousel-accessibility-standard-desktop",
    "a-carousel-accessibility-standard-mobile"
  ).register("a-carousel-strategies-accessibility", function (e, m, g) {
    return {
      standardDesktop: m,
      standardMobile: g,
      none: {
        init: e.constants.NOOP,
        gotoPage: e.constants.NOOP,
        nextPage: e.constants.NOOP,
        prevPage: e.constants.NOOP,
      },
      default:
        e.capabilities.mobile || e.capabilities.tablet
          ? "standardMobile"
          : "standardDesktop",
    };
  });
  ("use strict");
  n.when(
    "a-carousel-strategies-display",
    "a-carousel-strategies-transition",
    "a-carousel-strategies-ajax",
    "a-carousel-strategies-accessibility"
  ).register("a-carousel-strategies", function (e, m, g, d) {
    return { display: e, transition: m, ajax: g, accessibility: d };
  });
  ("use strict");
  n.when(
    "A",
    "jQuery",
    "a-carousel-classes",
    "a-carousel-strategies",
    "a-carousel-constants"
  ).register("a-carousel-framework", function (e, m, g, d, k) {
    function f(a, b, c, d) {
      var f = a.hasClass("a-begin"),
        g = 0 < a.children(".a-end").length;
      if (f ? g : 1)
        return (
          (b = new b(a, c, d)),
          (b.__id = ++z),
          a.data("a-carousel", b),
          a.removeClass("a-carousel-static"),
          t(a, b) ? e.delay(h, 10, b) : q.push(b),
          d.name && (y[d.name] = b),
          b
        );
    }
    function h(a) {
      a.init();
      u.push(a);
      a.__initialized = !0;
      a.dom.$container.addClass("a-carousel-initialized");
      var b = a.getAttr("name");
      b &&
        A[b] &&
        e.each(A[b], function (b) {
          b(a);
        });
    }
    function c(a, b) {
      (b = b[a + "Strategy"]) || (b = d[a]["default"]);
      return d[a][b];
    }
    function b(a) {
      for (var b = a.length, c; b--; )
        (c = a[b]),
          (c.dom.$container.length && r.find(c.dom.$container).length) ||
            ((c = c.getAttr("name")) && delete y[c], a.splice(b, 1));
    }
    function a() {
      b(q);
      b(u);
    }
    function p(a) {
      var b = a.data("a-carousel-options") || {};
      b.displayStrategy = a.data("a-display-strategy");
      b.transitionStrategy = a.data("a-transition-strategy");
      b.ajaxStrategy = a.data("a-ajax-strategy");
      b.accessibilityStrategy = a.data("a-accessibility-strategy");
      b.carouselClass = a.data("a-class");
      a = c("display", b);
      var d = c("transition", b),
        e = c("ajax", b),
        f = c("accessibility", b),
        h = b.carouselClass;
      h || (h = g["default"]);
      h = g[h];
      if (h !== w && a !== w && d !== w && e !== w && f !== w)
        return {
          carouselClass: h,
          strategies: { display: a, transition: d, ajax: e, accessibility: f },
          opts: b,
        };
    }
    function t(a, b) {
      return a.hasClass("a-begin") && 0 === a.children(".a-end").length
        ? !1
        : e.onScreen(a, b.getAttr("initThreshold"));
    }
    function x() {
      m(".a-carousel-static").each(function () {
        var a = m(this),
          b = p(a);
        b && f(a, b.carouselClass, b.strategies, b.opts);
      });
    }
    function l() {
      for (var a = q.length; a--; ) {
        var b = q[a];
        t(b.dom.$container, b) && (q.splice(a, 1), h(b));
      }
    }
    var w,
      u = [],
      q = [],
      v = !1,
      y = {},
      r = m(document),
      A = {},
      z = 0;
    e.on("resize orientationchange", function (b, c) {
      a();
      (c.height || c.width) &&
        e.delay(
          function () {
            e.each(u, function (a) {
              a.resize();
            });
          },
          e.capabilities.mobile || e.capabilities.tablet ? 100 : 0
        );
    });
    e.on("a:popover:afterSlideOut", function () {
      e.each(u, function (a) {
        a.resize();
      });
    });
    e.on("a:carousel:change:name", function (a) {
      a.newValue && (y[a.newValue] = a.carousel);
      a.oldValue && delete y[a.oldValue];
    });
    e.on(k.INIT_EVENTS, function () {
      l();
      x();
    });
    e.on("a:pageUpdate", a);
    e.on("scroll", function () {
      l();
      x();
    });
    e.declarative("a-tabs", "click", function (a) {
      e.delay(function () {
        l();
        e.each(u, function (a) {
          a.getAttr("isInTab") && a.resize();
        });
      }, 50);
    });
    e.on("a:popover:afterShow", function () {
      e.delay(l, 50);
    });
    e.on("a:popover:ajaxContentLoaded", function () {
      e.delay(function () {
        a();
        x();
      }, 50);
    });
    e.on.ready(function () {
      v = !0;
    });
    k = {
      getCarousel: function (a) {
        a.jquery || (a = m(a));
        var b = a.closest(".a-carousel-container").data("a-carousel");
        if (!b) {
          var c = p(a);
          c && (b = f(a, c.carouselClass, c.strategies, c.opts));
        }
        return b;
      },
      getCarouselByName: function (a) {
        return y[a];
      },
      createAll: function () {
        a();
        x();
      },
      initializeAll: function () {
        a();
        l();
      },
      kill: function (a) {
        a.jquery || (a = m(a));
        if (a.length && ((a = a.closest(".a-carousel-container")), a.length)) {
          var b = a.data("a-carousel");
          if (b) {
            var c = e.indexOfArray(u, b);
            -1 < c
              ? (u[c].name && delete y[u[c].name], u.splice(c, 1))
              : ((c = e.indexOfArray(q, b)),
                -1 < c && (q[c].name && delete y[q[c].name], q.splice(c, 1)));
          }
          a.remove();
        }
      },
      registerStrategy: function (a, b, c) {
        d[a] || (d.type = {});
        d[a][b] &&
          n.error(
            "Attempted to register a " +
              a +
              " strategy which already exists: " +
              b,
            "a-carousel-framework",
            "registerStrategy"
          );
        d[a][b] = c;
        v && x();
      },
      registerCarouselClass: function (a, b) {
        g[a] &&
          n.error(
            "Attempted to register a carousel class which already exists: " + a,
            "a-carousel-framework",
            "registerCarouselClass"
          );
        m.isFunction(b) ||
          n.error(
            "Attempted to register carousel class " +
              a +
              " without a constructor function.",
            "a-carousel-framework",
            "registerCarouselClass"
          );
        g[a] = b;
        v && x();
      },
      getAllCarousels: function () {
        return u.concat(q);
      },
      onInit: function (a, b) {
        a &&
          (A[a] || (A[a] = []),
          m.isFunction(b) &&
            (A[a].push(b), (a = y[a]) && a.__initialized && b(a)));
      },
    };
    Object.freeze !== w && Object.freeze(k);
    return k;
  });
});
/* ******** */
(function (d) {
  var k = window.AmazonUIPageJS || window.P,
    l = k._namespace || k.attributeErrors,
    b = l ? l("AmazonUIComponents", "AmazonUI") : k;
  b.guardFatal
    ? b.guardFatal(d)(b, window)
    : b.execute(function () {
        d(b, window);
      });
})(function (d, k, l) {
  d.when("A", "a-form-controls-api").register(
    "a-form-controls-handlers",
    function (b, e) {
      var c = b.$,
        f = function () {
          c(this).removeClass("a-hover-disable");
        },
        d = function (a, g) {
          var h = e.findFormElementContainer(a);
          b.delay(function () {
            h.find(g).each(e.normalizeElement);
          }, 0);
        };
      return {
        handleBoxInputMobileFocus: function () {
          c(this).addClass("a-form-focus");
        },
        handleBoxInputMobileBlur: function () {
          c(this).removeClass("a-form-focus");
        },
        accessibilityKeyPress: function (a) {
          a.keyCode === b.constants.keycodes.SPACE &&
            (a.preventDefault(), a.stopPropagation());
        },
        formReset: d,
        handleCheckboxClick: function () {
          if (!b.capabilities.mobile && !b.capabilities.tablet)
            c(this).addClass("a-hover-disable").one("mouseleave", f);
        },
        normalizeFormControls: function () {
          c("form")
            .unbind("reset.a-form-controls-reset")
            .bind("reset.a-form-controls-reset", function (a) {
              d(a.currentTarget, "li .a-touch-multi-select");
            });
        },
        touchMultiSelectHandler: function (a) {
          e.toggleCheckboxState(a.currentTarget);
        },
      };
    }
  );
  ("use strict");
  d.when("A", "a-form-controls-handlers", "ready").register(
    "a-form-controls",
    function (b, e) {
      var c = b.$;
      c(document)
        .delegate(".a-checkbox-fancy", "click", e.handleCheckboxClick)
        .delegate(
          ".a-checkbox-fancy, .a-radio-fancy",
          "keypress",
          e.accessibilityKeyPress
        );
      b.on("a:pageUpdate beforeReady", e.normalizeFormControls);
    }
  );
  ("use strict");
  d.when("A").register("a-buttons", function (b) {
    function e(a) {
      var b = a.children(".a-button-inner").find("[role\x3d'radio']");
      return 0 < b.length ? b : a.filter("[role\x3d'radio']");
    }
    function c(a) {
      return function () {
        e(f(this)).attr("aria-checked", a);
      };
    }
    var f = b.$,
      d = 0;
    b.declarative("a-button-group", ["click"], function (a) {
      var g = a.$target,
        h = g.closest(".a-button:not(.a-button-disabled)");
      if (h.length) {
        var d = a.$declarativeParent.find(".a-button");
        a = a.data && a.data.name ? a.data.name : !1;
        g =
          g.closest("input[type\x3dsubmit], button").attr("name") ||
          g.find("input[type\x3dsubmit], button").attr("name");
        d.removeClass("a-button-selected a-button-focus").each(c("false"));
        h.addClass("a-button-selected a-button-focus").each(c("true"));
        if (g || a)
          (h = { $button: h, buttonName: g, buttonGroupName: a }),
            a &&
              (b.trigger("a:button-group:" + a + ":toggle", {
                selectedButton: h,
              }),
              g &&
                b.trigger("a:button-group:" + a + ":" + g + ":toggle", {
                  selectedButton: h,
                }));
      }
    });
    b.on("a:pageUpdate beforeReady", function () {
      var a = f(".a-button:not([id])"),
        b = f(".a-button-group,.a-button-toggle-group");
      a.each(function () {
        var a = f(this),
          b = a.find(".a-button-text"),
          e = a.find(".a-button-input").not("[aria-label]"),
          c = "a-autoid-" + d++;
        a.attr("id", c);
        b.length &&
          ((c = (a = b.attr("id")) ? a : c + "-announce"),
          e.length && e.attr("aria-labelledby", c),
          b.attr("id", c));
      });
      b.each(function () {
        var a = f(this).find(".a-button"),
          b = a.length,
          c = 1;
        a.each(function () {
          e(f(this)).attr({ "aria-posinset": c++, "aria-setsize": b });
        });
      });
    });
    f(document)
      .delegate(".a-button-input, .a-button-text", "focusin", function () {
        var a = f(this).closest(".a-button");
        a.hasClass("a-button-disabled") || a.addClass("a-button-focus");
      })
      .delegate(
        ".a-button-input, .a-button-text",
        "focusout " + b.action.cancel,
        function () {
          f(this).closest(".a-button").removeClass("a-button-focus");
        }
      );
  });
});
/* ******** */
(function (f) {
  var d = window.AmazonUIPageJS || window.P,
    g = d._namespace || d.attributeErrors,
    c = g ? g("AmazonUITabs@TabsJS", "AmazonUI") : d;
  c.guardFatal
    ? c.guardFatal(f)(c, window)
    : c.execute(function () {
        f(c, window);
      });
})(function (f, d, g) {
  f.when("A").register("a-tabs", function (c) {
    function d(a) {
      var b = a.$target.closest("li"),
        k = a.data.name,
        d = b.data("a-tab-name"),
        e = b.closest(".a-tab-container"),
        f = e.find(".a-box-tab").not(e.find(".a-box-tab .a-box-tab"));
      d !== g &&
        (h(e.find("li.a-active"), b.closest(".a-tabs"))
          .removeClass("a-active")
          .find("a")
          .attr({ "aria-selected": !1, tabindex: -1 }),
        b
          .addClass("a-active")
          .find("a")
          .attr("aria-selected", !0)
          .removeAttr("tabindex"),
        h.each(f, function (b, a) {
          h(a).toggleClass("a-hidden", h(a).data("a-name") !== d);
        }),
        (b = { $tab: b, tabName: d, tabSetName: k }),
        c.trigger("a:tabs:" + k + ":select", { selectedTab: b }),
        c.trigger("a:tabs:" + k + ":" + d + ":select", { selectedTab: b }),
        a.$event.preventDefault());
    }
    var h = c.$,
      e = c.constants.keycodes;
    c.declarative("a-tabs", ["click"], d);
    c.on("beforeReady a:pageUpdate a:ajax:complete", function () {
      var a = h(document).find(".a-tab-container"),
        b = a.find(".a-tabs"),
        c = b.not('[role\x3d"tablist"]');
      a = a.find(".a-box-tab").not(a.find(".a-box-tab .a-box-tab"));
      var d = b.find(".a-tab-heading.a-active a"),
        e = b.find(".a-tab-heading:not('.a-active') a"),
        g;
      f.now("a-weblab").execute(function (a) {
        g = a && a.is("AUI_A11Y_SR_678508", "T1") ? "-1" : "0";
      });
      c.length &&
        (b.find(".a-tab-heading").attr("role", "presentation"),
        c.attr("role", "tablist"),
        d.add(e).attr("role", "tab"),
        a.attr({ role: "tabpanel", tabindex: g }),
        d.attr("aria-selected", !0),
        e.attr({ "aria-selected": !1, tabindex: -1 }));
    });
    c.declarative("a-tabs", ["keydown"], function (a) {
      var b = a.$target.closest(".a-tab-container").find(".a-tab-heading");
      switch (a.$event.which) {
        case e.SPACE:
          d(a);
          break;
        case e.END:
          a.$event.preventDefault();
          b.last().find("a").focus();
          break;
        case e.HOME:
          a.$event.preventDefault();
          b.first().find("a").focus();
          break;
        case e.LEFT_ARROW:
        case e.RIGHT_ARROW:
          b = a.$target.closest(".a-tab-heading");
          var c = b.closest(".a-tab-container").find(".a-tab-heading");
          a.$event.which === e.RIGHT_ARROW &&
            b.next(".a-tab-heading").add(c.first()).last().find("a").focus();
          a.$event.which === e.LEFT_ARROW &&
            b.prev(".a-tab-heading").add(c.last()).first().find("a").focus();
      }
    });
  });
});
/* ******** */
(function (c) {
  var f = window.AmazonUIPageJS || window.P,
    h = f._namespace || f.attributeErrors,
    a = h ? h("AmazonUIAccordion@jsAssets", "AmazonUI") : f;
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window);
      });
})(function (c, f, h) {
  c.when("A").register("a-accordion-a11y", function (a) {
    var c = a.$,
      b;
    return {
      refreshFocus: function (d, k) {
        k = k || 600;
        b ||
          (b = c("\x3cb /\x3e", {
            class: "a-accordion-a11y",
            tabIndex: -1,
            style: "position: absolute",
          }).appendTo("body"));
        b.css({ display: "block" }).offset(d.offset());
        a.delay(function () {
          b.focus();
        }, 50);
        a.delay(function () {
          d.focus();
          b.css({ display: "none" });
        }, k);
      },
    };
  });
  c.when("A", "a-accordion-a11y", "prv:a-capabilities").register(
    "a-accordion",
    function (a, u, b) {
      function d(b) {
        var d = b.$target.closest(".a-accordion"),
          e = b.$target.closest(".a-box"),
          f = d.find(".a-box").not(e),
          l = e.find(".a-accordion-row"),
          h = d.data("a-accordion-name"),
          p = e.data("a-accordion-row-name"),
          v = d.hasClass("a-accordion-collapse"),
          w = e.find("a.a-accordion-row"),
          g,
          m;
        c.now("a-weblab").execute(function (a) {
          a && a.is("AUI_A11Y_SR_678508", "T1")
            ? ((g = b.$target.closest(".a-accordion-sr")),
              (m = d.find(".a-accordion-sr").not(g)))
            : ((g = b.$target.closest(".a-accordion-row-a11y")),
              (m = d.find(".a-accordion-row-a11y").not(g)));
        });
        if (p) {
          var t = e.find(".a-accordion-inner"),
            q = !0;
          if (e.hasClass("a-accordion-active"))
            if (v)
              t[r]({
                duration: n,
                complete: function () {
                  e.removeClass("a-accordion-active");
                  e.find(".a-icon.a-accordion-radio")
                    .removeClass("a-icon-radio-active")
                    .addClass("a-icon-radio-inactive");
                  c.now("a-weblab").execute(function (a) {
                    a && a.is("AUI_A11Y_SR_678508", "T1")
                      ? g
                          .attr("aria-expanded", "false")
                          .filter("[aria-checked]")
                          .attr("aria-checked", "false")
                      : g
                          .attr("aria-checked", "false")
                          .attr("aria-expanded", "false");
                  });
                },
              });
            else q = !1;
          else
            f.find(".a-accordion-inner")[r]({
              duration: n,
              complete: function () {
                f.removeClass("a-accordion-active");
              },
            }),
              t[k]({
                duration: n,
                complete: function () {
                  e.addClass("a-accordion-active");
                  f.find(".a-icon.a-accordion-radio")
                    .removeClass("a-icon-radio-active")
                    .addClass("a-icon-radio-inactive");
                  e.find(".a-icon.a-accordion-radio")
                    .removeClass("a-icon-radio-inactive")
                    .addClass("a-icon-radio-active");
                },
              }),
              c.now("a-weblab").execute(function (a) {
                a && a.is("AUI_A11Y_SR_678508", "T1")
                  ? (m
                      .attr("aria-expanded", "false")
                      .filter("[aria-checked]")
                      .attr("aria-checked", "false"),
                    g
                      .attr("aria-expanded", "true")
                      .filter("[aria-checked]")
                      .attr("aria-checked", "true"))
                  : (m
                      .attr("aria-checked", "false")
                      .attr("aria-expanded", "false"),
                    g
                      .attr("aria-checked", "true")
                      .attr("aria-expanded", "true"));
              });
          q && x && u.refreshFocus(l);
          q &&
            ((l = { $row: e, rowName: p, accordionName: h }),
            a.trigger("a:accordion:select", { selectedRow: l }),
            a.trigger("a:accordion:" + h + ":select", { selectedRow: l }),
            a.trigger("a:accordion:" + h + ":" + p + ":select", {
              selectedRow: l,
            }));
        }
        w.length && b.$event.preventDefault();
      }
      var k = "slideDown",
        r = "slideUp",
        n = 300;
      if (a.capabilities.mobile || a.capabilities.tablet)
        (k = "show"), (r = "hide"), (n = 0);
      var x = !a.capabilities.touch && b.isFirefox;
      a.declarative("a-accordion", ["click"], d);
      a.declarative("a-accordion", ["keypress"], function (b) {
        var c = a.constants.keycodes,
          e = b.$event.which;
        (e !== c.ENTER && e !== c.SPACE) || d(b);
      });
    }
  );
  ("use strict");
  c.when("A", "jQuery").register("a-accordion-initialization", function (a, c) {
    function b(a) {
      c(a)
        .find(".a-box")
        .each(function (a, b) {
          b = c(b);
          a = b.find("[role\x3dbutton]");
          b = b.find(".a-accordion-inner");
          a.attr("aria-controls") ||
            (b.attr("id") || b.attr("id", "a-accordion-auto-" + f++),
            a.attr("aria-controls", b.attr("id")));
        });
    }
    function d() {
      c(".a-accordion").each(function (a, c) {
        b(c);
      });
    }
    var f = 0;
    a.on("load ready", d);
    return { initializeAccordion: b, initializeAllAccordions: d };
  });
});
/* ******** */
(function (p) {
  var g = window.AmazonUIPageJS || window.P,
    h = g._namespace || g.attributeErrors,
    c = h ? h("AmazonUIExpander@js", "AmazonUI") : g;
  c.guardFatal
    ? c.guardFatal(p)(c, window)
    : c.execute(function () {
        p(c, window);
      });
})(function (p, g, h) {
  p.declare("prv:a-expander-constants", {
    classNames: {
      inline: { expand: "a-icon-expand", collapse: "a-icon-collapse" },
      section: {
        expand: "a-icon-section-expand",
        collapse: "a-icon-section-collapse",
      },
      extender: {
        expand: "a-icon-extender-expand",
        collapse: "a-icon-extender-collapse",
      },
    },
    elementClasses: {
      container: "a-expander-container",
      content: "a-expander-content",
      header: "a-expander-header",
      fadeDiv: "a-expander-content-fade",
    },
  });
  ("use strict");
  p.when(
    "A",
    "jQuery",
    "prv:a-expander-constants",
    "a-partial-expander"
  ).register("a-expander", function (c, g, h, t) {
    function u(a, e, m, q) {
      var n = a.closest("." + k.container),
        l = n.data("a-expander-collapsed-height"),
        f;
      p.now("a-weblab").execute(function (b) {
        b && b.is("AUI_A11Y_SR_678508", "T1")
          ? ((f = "true" === a.attr("data-expanded")),
            (b = q.$event.originalEvent),
            f &&
              b &&
              b.isTrusted &&
              c.delay(function () {
                e.focus();
              }, 100))
          : (f = "true" === a.attr("aria-expanded"));
      });
      var d = function () {
        a.toggleClass(k.content + "-expanded");
        p.now("a-weblab").execute(function (b) {
          b && b.is("AUI_A11Y_SR_678508", "T1")
            ? a.attr("data-expanded", f ? "false" : "true")
            : a.attr("aria-expanded", f ? "false" : "true");
        });
        e.attr("aria-expanded", f ? "false" : "true");
        m();
      };
      l
        ? (n.css("height", f ? l : "auto"), d())
        : a.toggle(0, function () {
            d();
          });
    }
    var k = h.elementClasses,
      l = h.classNames,
      m = {};
    c.each(l, function (a, e) {
      m[e] = {};
      c.each(a, function (a, c) {
        m[e][c] = new RegExp("\\b" + a + "\\b", "g");
      });
    });
    c.declarative("a-expander-toggle", "click", function (a) {
      var e = a.$target.closest("." + k.container),
        h = e.find("." + k.container),
        q = e.data("a-expander-name");
      var n = a.$currentTarget.hasClass(k.header)
        ? a.$currentTarget
        : e.find("." + k.header).not(h.find("." + k.header));
      var g = n.is("a[aria-expanded]") ? n : n.children("a[aria-expanded]"),
        f = e.find("." + k.content).not(h.find("." + k.content));
      u(
        f,
        g,
        function () {
          var d = n.find(".a-icon")[0],
            b = null,
            g = n.children("." + k.fadeDiv),
            r;
          p.now("a-weblab").execute(function (a) {
            r =
              a && a.is("AUI_A11Y_SR_678508", "T1")
                ? "false" === f.attr("data-expanded")
                : "false" === f.attr("aria-expanded");
          });
          r
            ? (d &&
                (d.className = d.className
                  .replace(m.inline.collapse, l.inline.expand)
                  .replace(m.section.collapse, l.section.expand)
                  .replace(m.extender.collapse, l.extender.expand)),
              a.data && a.data.expand_prompt && (b = a.data.expand_prompt),
              g.show(),
              (d = "collapse"))
            : (d &&
                (d.className = d.className
                  .replace(m.inline.expand, l.inline.collapse)
                  .replace(m.section.expand, l.section.collapse)
                  .replace(m.extender.expand, l.extender.collapse)),
              a.data && a.data.collapse_prompt && (b = a.data.collapse_prompt),
              g.hide(),
              (d = "expand"));
          b &&
            "" !== b &&
            n
              .find(".a-expander-prompt")
              .not(h.find(".a-expander-prompt"))
              .html(b);
          b = { expander: { $expander: e, expanderName: q } };
          c.trigger("a:expander:toggle", b);
          c.trigger("a:expander:toggle:" + d, b);
          q &&
            (c.trigger("a:expander:" + q + ":toggle", b),
            c.trigger("a:expander:" + q + ":toggle:" + d, b));
        },
        a
      );
    });
    return { initializeExpanders: t };
  });
});
/* ******** */
(function (d) {
  var c = window.AmazonUIPageJS || window.P,
    b = c._namespace || c.attributeErrors,
    a = b ? b("AmazonUIExpander@js-control", "AmazonUI") : c;
  a.guardFatal
    ? a.guardFatal(d)(a, window)
    : a.execute(function () {
        d(a, window);
      });
})(function (d, c, b) {
  d.when("A", "jQuery", "prv:a-expander-constants").register(
    "a-partial-expander",
    function (a, c, b) {
      function e() {
        c(".a-expander-partial-collapse-container").each(function () {
          var a = c(this),
            b = a.children("." + g.content),
            e = a.data("a-expander-collapsed-height"),
            f = a.children("." + g.header);
          if (b.height() <= e) f.css({ opacity: "0", display: "none" });
          else {
            f.css({ opacity: "1", display: "block" });
            b.css("padding-bottom", f.height());
            var h;
            d.now("a-weblab").execute(function (a) {
              h =
                a && a.is("AUI_A11Y_SR_678508", "T1")
                  ? "true" !== b.attr("data-expanded")
                  : "true" !== b.attr("aria-expanded");
            });
            h && a.css({ height: e });
            a.css({ "max-height": "none" });
          }
        });
      }
      var g = b.elementClasses;
      a.on(
        "load ready resize orientationchange a:popover:afterShow a:popover:ajaxContentLoaded",
        e
      );
      return e;
    }
  );
});
/* ******** */
(function (e) {
  var p = window.AmazonUIPageJS || window.P,
    l = p._namespace || p.attributeErrors,
    d = l ? l("AmazonUISwitch", "AmazonUI") : p;
  d.guardFatal
    ? d.guardFatal(e)(d, window)
    : d.execute(function () {
        e(d, window);
      });
})(function (e, p, l) {
  e.when("a-switch-framework", "jQuery").register("a-switch", function (d, h) {
    var g = d.SWITCH_STATE,
      e = d.SWITCH_CONTAINER_CLASS,
      w = d.SWITCH_CLASS;
    return {
      getSwitch: function (c) {
        function m(c) {
          var n = k.data(g);
          if (c === l) return n.isOn;
          if (!n.isEnabled || f(k)) return !1;
          d.setOnState(k, c);
          return !0;
        }
        function f() {
          return k.data(g).isDragging;
        }
        c.jquery || (c = h(c));
        if (0 === c.length) return null;
        c = c.eq(0);
        c = c.closest("." + e);
        if (0 === c.length) return null;
        var k = c.find("." + w);
        d.ensureInitialized(k);
        return {
          toggle: function () {
            return m(!k.data(g).isOn);
          },
          isOn: m,
          enabled: function (c) {
            var n = k.data(g);
            if (c === l) return n.isEnabled;
            if (n.isEnabled === c) return !1;
            d.setEnabled(k, c);
            return !0;
          },
          isDragging: f,
          label: function (d) {
            var c = k.data(g).label,
              e = c[0].childNodes[0];
            if (d === l) return c.text();
            3 === e.nodeType && (e.textContent = d);
          },
        };
      },
    };
  });
  ("use strict");
  e.when("A", "jQuery").register("a-switch-framework", function (d, h) {
    function g(a) {
      a.preventDefault();
      var b = a.data.$switch.data("a-switch-state"),
        c = b.control;
      if (!d.isAnimated(c)) {
        a = q(a) - b.initialX;
        b.isOn && (a += b.rightBoundary);
        var e = b.leftBoundary,
          v = b.rightBoundary;
        a = a < e ? e : a > v ? v : a;
        a !== b.leftOffset &&
          (d.animate(c, { left: a }, 0),
          (b.leftOffset = a),
          (b.isDragging = !0),
          b.dragCount++);
      }
    }
    function f(a) {
      a.preventDefault();
      if (d.capabilities.touch || 1 === a.which) {
        a = a.data.$switch;
        var b = a.data("a-switch-state");
        m(
          a,
          b.isDragging && 1 < b.dragCount ? b.leftOffset > b.midPoint : !b.isOn
        );
        b.isDragging = !1;
        t(a);
      }
    }
    function l(a, b, c) {
      c = { switchState: a, previousState: c };
      d.trigger("a:switch:" + b, c);
      a.name && d.trigger("a:switch:" + a.name + ":" + b, c);
    }
    function c(a) {
      if (!a.data("a-switch-state")) {
        var b = a.closest(".a-switch-row"),
          c = a.children(".a-switch-control"),
          d = b.find(".a-switch-label"),
          e = d.siblings("input"),
          k = e.attr("name"),
          l = b.hasClass("a-active"),
          g = !b.hasClass("a-disabled"),
          h = r.left,
          f = (a.width() - c.width() + r.right) * z;
        a.data("a-switch-state", {
          input: e,
          container: b,
          control: c,
          label: d,
          isDragging: !1,
          rightBoundary: f,
          leftBoundary: h,
          midPoint: f / 2,
          initialX: null,
          leftOffset: l ? f : h,
          maxLeftOffset: r.maxLeftOffset,
          isOn: l,
          isEnabled: g,
          name: k,
          dragCount: 0,
          clicked: !1,
        });
      }
    }
    function m(a, b) {
      c(a);
      a = a.data("a-switch-state");
      var e = a.isOn,
        k = b !== a.isOn;
      a.isOn = b;
      var f = a.control,
        h = a.maxLeftOffset,
        g = a.isOn ? a.rightBoundary : a.leftBoundary;
      g = h && g > h ? h : g;
      d.animate(f, { left: g }, 300, "ease-out");
      a.leftOffset = g;
      f = a.container;
      a.isOn ? f.addClass("a-active") : f.removeClass("a-active");
      f = a.input;
      a.isOn ? f.attr("checked", "checked") : f.removeAttr("checked");
      k && l(a, "flip", e);
      b ? l(a, "on", e) : l(a, "off", e);
    }
    var p = function (a) {
        a.bind("touchmove.a-switch-component", { $switch: a }, g);
        a.bind("touchend.a-switch-component", { $switch: a }, f);
        a.bind("touchcancel.a-switch-component", { $switch: a }, f);
        a.bind("mouseup.a-switch-component", { $switch: a }, f);
      },
      k = function (a) {
        a.unbind("touchmove.a-switch-component");
        a.unbind("touchend.a-switch-component");
        a.unbind("touchcancel.a-switch-component");
        a.unbind("mouseup.a-switch-component");
      },
      x = function (a) {
        return (a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
          .pageX;
      },
      n = function (a) {
        h("body").bind("mousemove.a-switch-component", { $switch: a }, g);
        h("body").bind("mouseup.a-switch-component", { $switch: a }, f);
      },
      y = function (a) {
        h("body").unbind("mousemove.a-switch-component", g);
        h("body").unbind("mouseup.a-switch-component", f);
      },
      A = function (a) {
        return a.pageX;
      },
      r = { left: d.capabilities.rtl ? 1 : -1, right: -3 },
      z = d.capabilities.rtl ? -1 : 1;
    e.when("prv:skin-vars").execute(function (a) {
      r = a.toggle.bounds;
    });
    var u = null,
      t = null,
      q = null;
    d.capabilities.touch
      ? ((u = p), (t = k), (q = x))
      : ((u = n), (t = y), (q = A));
    d.declarative(
      "a-switch",
      d.capabilities.touch ? "touchstart" : "mousedown",
      function (a) {
        var b = a.$event;
        b.preventDefault();
        if (d.capabilities.touch || 1 === b.which) {
          a = a.$declarativeParent;
          c(a);
          var e = a.data("a-switch-state");
          e.dragCount = 0;
          e.clicked = !0;
          e.isDragging = !1;
          e.isEnabled && ((e.initialX = q(b)), u(a));
        }
      }
    );
    d.declarative("a-switch-input", "change", function (a) {
      a.$event.preventDefault();
      a = a.$target.closest(".a-switch-row").find(".a-switch");
      c(a);
      var b = a.data("a-switch-state");
      m(a, !b.isOn);
    });
    d.declarative("a-switch-label", "click", function (a) {
      a.$event.preventDefault();
      a = a.$target.closest(".a-switch-row").find(".a-switch");
      c(a);
      var b = a.data("a-switch-state");
      b.clicked ? (b.clicked = !1) : b.isEnabled && m(a, !b.isOn);
    });
    e.when("ready").execute("a-switch-normalization", function () {
      h(".a-switch-input").each(function () {
        var a = h(this),
          b = a.next().children(".a-switch");
        m(b, a.prop("checked"));
      });
    });
    return {
      ensureInitialized: c,
      setOnState: m,
      setEnabled: function (a, b) {
        c(a);
        a = a.data("a-switch-state");
        var d = a.container;
        b ? d.removeClass("a-disabled") : d.addClass("a-disabled");
        a.isEnabled = b;
      },
      SWITCH_STATE: "a-switch-state",
      SWITCH_CONTAINER_CLASS: "a-switch-row",
      SWITCH_CLASS: "a-switch",
    };
  });
});
/* ******** */
(function (a) {
  var f = window.AmazonUIPageJS || window.P,
    l = f._namespace || f.attributeErrors,
    b = l ? l("AmazonUIProgressBar@control", "AmazonUI") : f;
  b.guardFatal
    ? b.guardFatal(a)(b, window)
    : b.execute(function () {
        a(b, window);
      });
})(function (a, f, l) {
  a.when("A", "ready").register("a-progress", function (b) {
    function a(a) {
      (a ? e(a) : e(".a-js-progress-bar")).each(function () {
        var a = e(this);
        if (b.onScreen(a, 0)) {
          var g = +a.attr("data-progress-percentage");
          var h = -(g - 100);
          var c = a.width();
          var f = (h / 100) * c;
          var d = a.find(".a-js-progress-tooltip"),
            k = d.width();
          d.find(".a-js-tooltip-arrow");
          g = ((g + h / 2) / 100) * c - k / 2;
          h = k + g;
          (k = h < c) || (g -= h - c);
          c = g;
          e(d).css("left", c + 0);
          c = d.width();
          d = d.find(".a-js-tooltip-arrow");
          d.removeClass("aok-hidden");
          k ? ((c /= 2), e(d).css("left", c + -9)) : e(d).css("left", c + -27);
          12 > f && d.addClass("aok-hidden");
          e(a.find(".a-js-progress-tooltip"))
            .removeClass("a-progress-tooltip-hidden")
            .addClass("a-progress-tooltip-revealed");
        }
      });
    }
    var e = b.$;
    a();
    b.on("resize scroll", function (b) {
      a();
    });
    return { init: a };
  });
});
/* ******** */
(function (n) {
  var u = window.AmazonUIPageJS || window.P,
    x = u._namespace || u.attributeErrors,
    a = x ? x("AmazonUIPopover@base", "AmazonUI") : u;
  a.guardFatal
    ? a.guardFatal(n)(a, window)
    : a.execute(function () {
        n(a, window);
      });
})(function (n, u, x) {
  n.when("A", "a-popover-base-factory").register(
    "a-popover-base-apis",
    function (a, f) {
      return {
        show: function (a) {
          var c = f.get(a.$trigger ? a.$trigger : a);
          if (c) return c.show.apply(c, arguments);
        },
        hide: function (a) {
          var c = f.get(a);
          if (c) return c.unlock(1), c.hide.apply(c, arguments);
        },
        get: function (a) {
          return f.get(a);
        },
        remove: function (a) {
          return f.remove(a);
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-popover-util",
    "a-popover-objectclass",
    "a-popover-data"
  ).register("a-popover-base-factory", function (a, f, g, c) {
    function m(b) {
      return d[b] ? d[b] : null;
    }
    function l(b, e) {
      return new g.PopoverClass(b, e);
    }
    function k(d, h) {
      var a = null;
      if ("number" === typeof d) a = m(d);
      else if ("string" === typeof d) (a = e[d] ? e[d] : null) || (a = m(d));
      else if ("object" === typeof d)
        if (d.$popover) a = d;
        else if (
          ((d = b(d)),
          (a = d.data("a-popover-id")),
          a ||
            ((a = d.find(".a-declarative").eq(0)),
            (a = a.length ? a.data("a-popover-id") : null)),
          (a = m(a)),
          !a)
        ) {
          var k = d.data("action");
          (k = k ? d.data(k) : null) &&
            k.name &&
            ((a = k.name),
            (a = e[a] ? e[a] : null),
            !a || (h && a.type !== h)
              ? (a = null)
              : (h = (h = a.attrs("currentDataStrategy"))
                  ? c.getStrategyByName(h)
                  : c.guessStrategyByAttrs(a.attrs())) && h.reusePopover
              ? a.$trigger[0] !== d[0] &&
                (a.$trigger.data("a-popover-id", null), (a.$trigger = d))
              : (a = null));
        }
      return a;
    }
    function p() {
      r ||
        (r = l(
          { id: -1, $popover: q, $trigger: q, immersive: !0 },
          {
            isActive: function () {
              return !0;
            },
            hideMethod: function () {
              this.hideChildren();
            },
            showMethod: a.constants.NOOP,
          }
        ));
      return r;
    }
    var b = a.$,
      h = 1,
      e = {},
      d = {},
      q = b(
        "\x3cdiv id\x3d'a-popover-root' style\x3d'z-index:-1;position:absolute;' /\x3e"
      ).appendTo("body"),
      r;
    return {
      getRoot: p,
      get: function (b, d) {
        d = d ? d : this ? this.type : null;
        return (b = k(b, d)) && d && b.type !== d ? null : b;
      },
      create: function (c, q) {
        var g = b(c),
          f = q.attributes || {},
          r = q.typeSpecificFunctions || q.variant || {};
        q = q.actionCheck || !1;
        g.data("a-popover-id");
        var t = f.type,
          v = null;
        !t ||
          (g.hasClass("a-declarative") &&
            g.data("action") &&
            -1 !== g.data("action").indexOf(t)) ||
          ((g = a.declarative.create(g, "a-" + t)), (c = g[0]));
        if (q && g.data("action") && -1 === g.data("action").indexOf(t))
          return null;
        t && g && (v = k(g));
        if (v) return v.type !== t ? null : v;
        g = f;
        c = b(c);
        g.type
          ? c && c.length
            ? ((g = a.extend(
                { id: h++, $trigger: c, $triggerWrapper: null },
                g
              )),
              (r = a.copy(r)),
              (r = l(g, r)),
              (d[r.id] = r),
              r.name && (e[r.name] = r),
              c.data("a-popover-id", r.id),
              (c = r.$trigger.closest(".a-popover")),
              (c =
                !r.attrs("immersive") && c.length
                  ? m(c.data("a-popover-id")) || p()
                  : p()),
              (r.parent = c),
              c.children.push(r))
            : (r = null)
          : (r = null);
        return r;
      },
      remove: function (b, h) {
        b = this.get(b);
        var c = !1;
        if (b) {
          c = b.id;
          if (b && -1 < c) {
            var k = a.indexOfArray(b.parent.children, b),
              g = b.$container,
              q = b.$trigger;
            b.parent.children.splice(k, 1);
            b.unlock().hide();
            b.update({ content: "" });
            g && b.$container.remove();
            q.data("a-popover-id", "");
            b.name && delete e[b.name];
            delete d[c];
            c = !0;
          } else c = !1;
          h && a.declarative.remove(b.$trigger[0], "a-" + h);
        }
        return c;
      },
    };
  });
  ("use strict");
  n.when(
    "A",
    "a-popover-util",
    "a-popover-base-factory",
    "prv:a-capabilities"
  ).register("a-popover-base-handlers", function (a, f, g, c) {
    function m(b) {
      for (var h; b.length && !(h = b.data("a-popover-id")); ) b = b.parent();
      return g.get(h);
    }
    var l = a.$;
    l(document).bind("click " + a.action.start, function (b) {
      var h = l(b.target),
        e = b.originalEvent;
      if (
        !(
          (e &&
            e.pointerType &&
            e.pointerType === a.pointerType.touch &&
            "click" === e.type) ||
          h.hasClass("a-modal-scroller") ||
          "a-popover-lgtbox" === h[0].id ||
          "html" === h[0].nodeName.toLowerCase()
        )
      ) {
        var d = function (d) {
          return f.eventOccursWithin(b, d);
        };
        a.each(g.getRoot().children, function (b) {
          if (b.isVisible() || b.isContentLoaded()) {
            var e = f.search(b, d);
            e
              ? e.hideChildren()
              : null !== b.attrs("lightboxOptions") ||
                b.attrs("immersive") ||
                b.unlock(1).hide();
          }
        });
      }
    });
    a.declarative("a-popover-close", ["click", a.action.end], function (b) {
      var h = m(b.$target);
      h && (h.unlock().hide(), f.trigger("dismiss", h));
      b.$event.preventDefault();
    });
    var k = null,
      p = null;
    a.declarative("a-popover-a11y", "focusout", function (b) {
      var h = m(b.$target);
      h &&
        b.$target.length &&
        h.$firstTabbable.length &&
        b.$target[0] === h.$firstTabbable[0] &&
        !(k && 100 > a.now() - k) &&
        ((k = a.now()),
        a.delay(function () {
          l(document.activeElement).hasClass("a-popover-start") &&
            h.$lastTabbable.focus();
        }, 0));
    });
    a.declarative("a-popover-a11y", "focusin", function (b) {
      var h = m(b.$target);
      h &&
        b.$target.length &&
        b.$target.hasClass("a-popover-end") &&
        !(p && 100 > a.now() - p) &&
        ((p = a.now()),
        a.delay(function () {
          h.$firstTabbable.focus();
        }, 0));
    });
    a.declarative("a-popover-a11y", "keydown", function (b) {
      var h = b.$event;
      h.keyCode === a.constants.keycodes.ESCAPE &&
        ((b = m(b.$target)), h.preventDefault(), b && b.hide());
    });
    a.on("resize zoom", function () {
      g.getRoot().updatePosition();
    });
    if (c.isSafari && a.capabilities.ios)
      a.on("a:popover:refresh", function (b) {
        b = b.popover;
        b.$popover &&
          b.$popover
            .undelegate('input[type\x3d"date"]', "blur")
            .delegate('input[type\x3d"date"]', "blur", function () {
              var b = a.$(u);
              b.scrollTop(b.scrollTop() + 1);
            });
      });
  });
  ("use strict");
  n.when("A", "a-popover-base-apis", "a-popover-base-handlers").register(
    "a-popover-base",
    function (a, f, g) {
      return f;
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-popover-util",
    "a-popover-data",
    "a-popover-position",
    "a-popover-lightbox",
    "a-popover-animate",
    "prv:a-capabilities"
  ).register("a-popover-objectclass", function (a, f, g, c, m, l, k) {
    function p(c, k) {
      var g = -1,
        q = [1],
        r = -2;
      this.parent = null;
      this.children = [];
      this.typeSpecificFunctions = {};
      this.attributes = {
        position: "triggerVertical",
        alone: !1,
        immersive: !1,
        restoreFocusOnHide: !0,
      };
      var p = function () {
          this.isActive()
            ? this._willTriggerEvents && f.trigger("visible", this)
            : f.trigger("invisible", this);
          return this;
        },
        t = function (e, c) {
          var k = this.isActive(),
            g = this.getDataStrategy(),
            l = !this.$popover,
            f = c || l;
          c = !1;
          e = e || f;
          if (!f) for (var r = q.length; r-- && !f; ) f = !d[q[r]];
          f &&
            ((f = w.apply(this)),
            (f = h(f)),
            l || (g.unloadContent(this), this.$container.remove(), (c = !0)),
            h("body").append(f),
            (this.$container = f),
            (this.$popover = this.$container.hasClass("a-popover")
              ? this.$container
              : this.$container.find(".a-popover")),
            (this.$startAnchor = this.$popover.hasClass("a-popover-start")
              ? this.$popover
              : this.$popover.find(".a-popover-start")),
            (this.$endAnchor = this.$popover.find(".a-popover-end")),
            this.$popover
              .attr("id", "a-popover-" + this.id)
              .data("a-popover-id", this.id));
          this.attrs("immersive") ||
            ((f = parseInt(this.parent.$popover.css("z-index"), 10)),
            a.isFiniteNumber(f) ||
              (f = this.parent.attrs("immersive") ? 1010 : 0),
            (r = this.$trigger.closest(".a-sheet-web")),
            1 === r.length &&
              ((r = parseInt(r.css("z-index"))),
              a.isFiniteNumber(r) && (f = Math.max(r, f))),
            (f = Math.max(299, 100 + f)),
            this.$popover.css("z-index", f));
          if (g.shouldRefreshContent(this) || e)
            c || g.unloadContent(this), g.loadContent(this, l);
          this.typeSpecificFunctions.updateDimensions !== b &&
            this.typeSpecificFunctions.updateDimensions.apply(this);
          q = [];
          k && z.call(this, [], !1);
          e = this.$popover
            .find(".a-popover-inner")
            .find(
              "a, button, input, select, textarea, [tabindex]:not([tabindex\x3d'-1'])"
            );
          e = e.not(".a-dropdown-link");
          this.$firstTabbable = this.$popover.find(
            '[data-action\x3d"a-popover-close"]'
          );
          this.$firstTabbable = this.$firstTabbable.length
            ? this.$firstTabbable
            : e.first();
          this.$lastTabbable = 0 === e.length ? this.$firstTabbable : e.last();
          return this;
        },
        z = function (d, h) {
          function c() {
            k.updatePosition();
            var b = k.attrs("navigate");
            !h && b && k.attrs("navigate", !1);
            q.call(k, p, d);
            h && f.trigger("show", k);
            m && m.apply(k, d);
            h && f.trigger("afterShow", k);
            k.$popover.attr("aria-hidden", "false");
            "tooltip" !== k.type && e.attr("aria-hidden", "true");
            !h && b && k.attrs("navigate", b);
            r = 2;
          }
          var k = this;
          h = !!h;
          var g = k.typeSpecificFunctions,
            q = g.showMethod !== b ? g.showMethod : A,
            l = g.beforeShowMethod !== b ? g.beforeShowMethod : null,
            m = g.afterShowMethod !== b ? g.afterShowMethod : null;
          r = 1;
          k._willTriggerEvents = h;
          k.attrs("originalFocus", document.activeElement);
          k.$popover
            .css("visibility", "hidden")
            .addClass("a-popover-hidden")
            .show();
          l && l.apply(k, d);
          k.attrs("synchronous")
            ? c()
            : a.delay(function () {
                c();
              }, 0);
        };
      this.show = function () {
        var b = this,
          d = b.attrs("lightboxOptions") || null;
        if (b.isActive() || l.isAnimating(b)) return this;
        b.lock(1);
        d && m.lock(1);
        b.parent.$container &&
          b.parent.$container.is(".a-popover") &&
          b.parent.$container.attr("aria-hidden", "true");
        b.attrs("alone") &&
          a.each(b.parent.children, function (d) {
            d.isActive() &&
              d.id !== b.id &&
              !d.attrs("modeless") &&
              d.unlock().hide();
          });
        f.trigger("beforeShow", b);
        if (
          !b.$container ||
          b.isDirty() ||
          b.getDataStrategy().shouldRefreshContent(b)
        )
          f.trigger("refresh", b), t.call(b);
        if (b.draggable) {
          var e = b.$container;
          a.draggable(e, { handle: e.find(".a-popover-draggable-handle") });
        }
        d && m.show(a.extend({ popover: b }, d));
        z.call(b, arguments, !0);
        a.delay(function () {
          b.unlock(1);
          d && m.unlock(1);
        }, 0);
        return this;
      };
      this.hide = function () {
        var d = this,
          c = d.typeSpecificFunctions,
          k = c.hideMethod !== b ? c.hideMethod : n,
          g = c.beforeHideMethod !== b ? c.beforeHideMethod : null,
          q = c.afterHideMethod !== b ? c.afterHideMethod : null,
          t = d.attrs("lightboxOptions") || null;
        if (!d.isActive() || d.isLocked() || l.isAnimating(d)) return this;
        r = -1;
        d.hideChildren();
        f.trigger("beforeHide", d);
        g && g.apply(d, arguments);
        k.call(d, p, arguments);
        f.trigger("hide", d);
        a.delay(function () {
          function b() {
            var b = null;
            "dropdown" === d.type
              ? (b = d.$trigger)
              : d.$trigger &&
                h(d.$trigger).length &&
                (b = d.$trigger.is("a, input, button")
                  ? d.$trigger
                  : d.$trigger.find("a, input, button"));
            (b && b.length) || (b = h(d.attrs("originalFocus")));
            !b.length ||
              (v && !b.is(":visible")) ||
              a.delay(function () {
                ("secondary-view" === d.type || a.onScreen(b, 0)) && b.focus();
              }, 400);
          }
          q && q.apply(d, arguments);
          d.$popover.attr("aria-hidden", "true");
          "tooltip" !== d.type && e.attr("aria-hidden", "false");
          d.parent.$container &&
            d.parent.$container.is(".a-popover") &&
            d.parent.$container.attr("aria-hidden", "false");
          t &&
            (d.parent.attrs("lightboxOptions")
              ? m.show(a.extend({ popover: d.parent }, t))
              : m.hide(t));
          f.trigger("afterHide", d);
          r = -2;
          d.attrs("restoreFocusOnHide") && b();
        }, 0);
        return this;
      };
      this.update = function (b) {
        var d = "string" === typeof b ? { content: b } : a.copy(b),
          e = this.attrs();
        b = this.getDataStrategy();
        a.each(d, function (b, d) {
          ((b && !e[d]) || (e[d] && e[d] !== b)) && q.push(d);
        });
        this.isDirty() &&
          ((d = a.extend({}, e, d)),
          this.attrs(d),
          this.getDataStrategy(d),
          this.$popover && b.unloadContent(this),
          this.isActive() && (t.call(this, !0), this.focus()));
        return this;
      };
      this.refresh = function (b, d) {
        return t.call(this, b || !0, d || !1);
      };
      this.isActive = function () {
        return 1 <= r;
      };
      this.isVisible = function () {
        return 2 === r;
      };
      this.isContentLoading = function () {
        return 3 === r;
      };
      this.setContentLoading = function () {
        r = 3;
      };
      this.isContentLoaded = function () {
        return 4 === r;
      };
      this.setContentLoaded = function () {
        r = 4;
      };
      this.isDirty = function () {
        return 0 < q.length;
      };
      this.lock = function (b) {
        b || (b = 10);
        g < b && (g = b);
        return this;
      };
      this.unlock = function (b) {
        b || (b = 10);
        g <= b && (g = -1);
        return this;
      };
      this.isLocked = function () {
        return -1 !== g;
      };
      this.typeSpecificFunctions = k;
      this.attrs(c);
      a.extend(this, this.attributes);
    }
    var b,
      h = a.$,
      e = h("#a-page"),
      d = {
        name: !0,
        url: !0,
        content: !0,
        width: !0,
        height: !0,
        "max-width": !0,
        "max-height": !0,
        "min-width": !0,
        "min-height": !0,
      },
      q = a.capabilities.mobile,
      r = q || a.capabilities.tablet,
      t = q && k.isIE10Plus,
      v = h("html").hasClass("a-lt-ie9"),
      A = function (b) {
        this.$popover
          .css({ visibility: "visible" })
          .removeClass("a-popover-hidden");
        this.attrs("focusWhenShown") &&
          "ajax" !== this.attrs("currentDataStrategy") &&
          this.focus();
        b.call(this);
      },
      n = function (b) {
        this.$popover
          .hide()
          .find(".a-lgtbox-vertical-scroll")
          .removeClass("a-lgtbox-vertical-scroll");
        b.call(this);
      },
      w = function () {
        var d = this.typeSpecificFunctions;
        return d.skin !== b ? d.skin(this) : "";
      };
    q = p.prototype;
    q.getDataStrategy = function (b) {
      var d = this.typeSpecificFunctions;
      b || this.attrs("currentDataStrategy") || (b = this.attrs());
      b &&
        (b = b.dataStrategy
          ? g.getStrategyByName(b.dataStrategy)
          : g.guessStrategyByAttrs(b)) &&
        ((d.dataStrategy = b), this.attrs("currentDataStrategy", b.name));
      return d.dataStrategy;
    };
    q.getContent = function () {
      return this.typeSpecificFunctions.getContent !== b
        ? this.typeSpecificFunctions.getContent.apply(this, arguments)
        : null;
    };
    q.updateContent = function (d) {
      this.typeSpecificFunctions.updateContent !== b &&
        this.typeSpecificFunctions.updateContent.apply(this, arguments);
      return this;
    };
    q.setAriaBusy = function (d) {
      this.typeSpecificFunctions.setAriaBusy !== b &&
        this.typeSpecificFunctions.setAriaBusy.apply(this, arguments);
      return this;
    };
    q.ajax = function (b) {
      return this.update({ url: b });
    };
    q.updateChildrenPosition = function () {
      a.each(this.children, function (b) {
        b.isActive() && b.updatePosition();
      });
      return this;
    };
    q.updatePosition = function () {
      var d = this;
      if (-1 === d.id)
        a.each(d.children, function (b) {
          b.isActive() && b.updatePosition();
        });
      else {
        if (this.typeSpecificFunctions.updatePosition !== b)
          return (
            this.typeSpecificFunctions.updatePosition.apply(this, arguments),
            a.each(d.children, function (b) {
              b.isActive() && b.updatePosition();
            }),
            d
          );
        var e = d.$popover;
        k.isMetroIEGuess && k.isIETouchCapable
          ? e.css("opacity", 0.01)
          : e.css("visibility", "hidden");
        var g = function () {
          var b = e
            .find(".a-popover-inner")
            .css({ height: "auto", "overflow-y": "auto" });
          "dropdown" === d.type &&
            d.maxHeight &&
            b.css({ maxHeight: d.maxHeight });
          var g = d.attrs("position"),
            q = {};
          q = d.typeSpecificFunctions.positionStrategy
            ? c.customPosition(d, d.typeSpecificFunctions.positionStrategy)
            : c[g](d);
          f.trigger("beforeUpdatePosition", d);
          g = { top: q.top + "px", left: q.left + "px" };
          k.isMetroIEGuess && k.isIETouchCapable
            ? (g.opacity = 1)
            : (g.visibility = "visible");
          e.css(g);
          d.isContentLoaded() &&
            0 === h(document.activeElement).closest(d.$popover).length &&
            !0 === d.attrs("focusWhenShown") &&
            d.focus();
          if (
            b.length &&
            (!b[0].style.height || "auto" === b[0].style.height)
          ) {
            q = e.outerHeight() || 0;
            var l =
                e
                  .find(".a-popover-header, .a-modal-close-nohead-top")
                  .outerHeight(!0) || 0,
              r = e.find(".a-popover-footer").outerHeight(!0) || 0;
            g = b.outerHeight() || 0;
            q = q - l - r;
            g > q && b.css({ height: q + "px", "overflow-y": "scroll" });
          }
          f.trigger("afterUpdatePosition", d);
          f.trigger("positionUpdated", d);
          a.each(d.children, function (b) {
            b.isActive() && b.updatePosition();
          });
        };
        d.attrs("immersive") && r
          ? (e.css({ top: 0, left: 0 }),
            a.delay(function () {
              g();
            }, 0))
          : g();
      }
      return d;
    };
    q.attrs = function (d, e) {
      var h = this;
      if (e === b && "object" !== typeof d)
        return d
          ? "string" === typeof d
            ? this.attributes[d] !== b
              ? this.attributes[d]
              : null
            : null
          : this.attributes;
      "object" === typeof d
        ? a.each(d, function (b, d) {
            h.attrs(d, b);
          })
        : "string" === typeof d && ((this.attributes[d] = e), (h[d] = e));
      return this;
    };
    q.hideChildren = function () {
      a.each(this.children, function (b) {
        b.unlock(1);
        b.hide();
      });
      return this;
    };
    q.focus = function () {
      var b = this,
        d = h(u),
        e = d.scrollTop(),
        c = b.$popover.offset().top;
      t && e > c && d.scrollTop(c);
      a.delay(function () {
        b.$firstTabbable.focus();
      }, 0);
      return this;
    };
    return { PopoverClass: p };
  });
  ("use strict");
  n.when("jQuery", "ready").register("a-changeover", function (a) {
    a(document).delegate(
      ".a-changeover:not(.a-changeover-manual)",
      "webkitAnimationEnd animationend click touchstart",
      function (a) {
        this.style.display = "none";
      }
    );
  });
  ("use strict");
  n.when("A").register("a-dropdown-base-positions", function (a) {
    return {
      positionStrategy: function (f) {
        var g = f.$popover,
          c = f.$trigger,
          m = f.measure;
        f = g.find(".a-popover-inner");
        f.css({ "min-width": "0px", width: "auto", height: "auto" });
        var l = c.nextAll(".a-button-dropdown");
        l.length || (l = c.closest(".a-button-group"));
        c = m(g, l);
        m = c.windowWidth - (c.triggerLeft + c.popoverWidth);
        l = c.windowWidth - c.triggerLeft - c.triggerWidth;
        var k = c.triggerLeft,
          p = {},
          b = c.triggerTop - c.windowTop,
          h = c.windowBottom - c.triggerBottom,
          e = g.find(".a-popover-inner");
        b > h && h < c.popoverHeight
          ? ((h = b),
            (p.top =
              b < c.popoverHeight
                ? c.triggerBottom - b
                : c.triggerBottom - c.popoverHeight))
          : (p.top = c.triggerTop);
        e.css(
          "height",
          h < c.popoverHeight ? h - c.headerHeight + "px" : "auto"
        );
        c.popoverHeight > h
          ? e.addClass("a-lgtbox-vertical-scroll")
          : e.removeClass("a-lgtbox-vertical-scroll");
        f.hasClass("a-lgtbox-vertical-scroll") &&
        -1 < navigator.appVersion.indexOf("Windows")
          ? ((b =
              Math.max(c.popoverWidth, c.triggerWidth) + a.scrollBarWidth(!0)),
            f.width(b))
          : f.css("min-width", c.triggerWidth + "px");
        c.popoverWidth = g.width();
        p.left =
          50 > m && k > l ? c.triggerRight - c.popoverWidth : c.triggerLeft;
        return p;
      },
    };
  });
  ("use strict");
  n.when("A", "a-dropdown-base-positions").register(
    "a-dropdown-base-view-base",
    function (a, f) {
      return a.extend(f, {
        updateContent: function (a) {
          "string" === typeof a
            ? this.$popover.find(".a-popover-inner").html(a)
            : a && this.$popover.find(".a-popover-inner").html("").append(a);
        },
        beforeShowMethod: function () {
          this.parent.lock(1);
          var a = this;
          n.now("a-weblab").execute(function (c) {
            c && c.is("AUI_A11Y_SR_678508", "T1")
              ? "combobox" === a.$trigger.attr("role") &&
                a.$trigger.attr("aria-expanded", !0)
              : a.$trigger.attr("aria-pressed", !0);
          });
        },
        afterShowMethod: function () {
          var g = this.$popover,
            c = g.find(".a-active");
          a.delay(function () {
            c.length
              ? c.closest("li").focus()
              : (c = g.find("li").first().focus());
          }, 0);
        },
        beforeHideMethod: function () {
          this.parent.unlock(1);
        },
        afterHideMethod: function () {
          var a = this;
          n.now("a-weblab").execute(function (c) {
            c && c.is("AUI_A11Y_SR_678508", "T1")
              ? "combobox" === a.$trigger.attr("role") &&
                a.$trigger.attr("aria-expanded", !1)
              : a.$trigger.attr("aria-pressed", !1);
          });
          this.$popover.css("width", "auto");
        },
      });
    }
  );
  ("use strict");
  n.when("A", "a-dropdown-base-view-base").register(
    "a-dropdown-base-view",
    function (a, f) {
      return f;
    }
  );
  ("use strict");
  n.when("A", "a-popover-base-factory", "a-dropdown-base-view").register(
    "a-dropdown-base-factory",
    function (a, f, g) {
      function c(b, h, e) {
        var d = ['\x3cli tabindex\x3d"0" role\x3d"option"'],
          c = b.data("aCssClass"),
          g = b.data("aId"),
          l = b.data("aHtmlContent"),
          f = b.data("aImageSource"),
          p = JSON.stringify({ stringVal: b.val() });
        p = [
          '\x3ca tabindex\x3d"-1" href\x3d"javascript:void(0)" aria-hidden\x3d"true" data-value\x3d"',
          a.escapeHtml(p),
          '"',
        ];
        var m = ["a-dropdown-link"],
          n = ["a-dropdown-item"];
        h && (m.push("a-active"), d.push(' aria-checked\x3d"true"'));
        k &&
          (a.capabilities.mobile || a.capabilities.tablet) &&
          m.push("a-list-link-after-group");
        k = !1;
        c && n.push(c);
        g && d.push(' id\x3d"' + g + '"');
        d.push('aria-labelledby\x3d"');
        d.push(e);
        d.push('"');
        p.push(' id\x3d"');
        p.push(e);
        p.push('"');
        d.push(' class\x3d"' + n.join(" ") + '"');
        d.push("\x3e");
        l
          ? (h = l)
          : ((h = []),
            f &&
              (m.push("a-option-has-image"),
              h.push(
                '\x3cimg src\x3d"' +
                  f +
                  '" class\x3d"a-rich-option-image" /\x3e'
              )),
            h.push(b.html()),
            (h = h.join("")));
        p.push(' class\x3d"');
        p.push(m.join(" "));
        p.push('"\x3e');
        p.push(h);
        p.push("\x3c/a\x3e");
        d.push(p.join(""));
        d.push("\x3c/li\x3e");
        return d.join("");
      }
      function m(b) {
        b.jquery || (b = l(b));
        var h = b.children("optgroup,option:not(.a-prompt)"),
          e = !1,
          d = b[0],
          a = b.attr("id") ? b.attr("id") : "dropdown" + p++;
        if (-1 < d.selectedIndex) var g = d.options[d.selectedIndex].value;
        var f = [
          '\x3cul tabindex\x3d"-1" class\x3d"a-nostyle a-list-link',
          b.data("a-has-images") ? " a-box-list" : "",
          '" role\x3d"listbox" aria-multiselectable\x3d"false"\x3e',
        ];
        var m = 0;
        h.each(function () {
          var b = l(this);
          b.is("optgroup")
            ? (b.children().each(function (b) {
                f.push(c(l(this), g === this.value, a + "_" + m++));
              }),
              f.push(
                '\x3cli tabindex\x3d"-1" class\x3d"divider"\x3e\x3chr /\x3e\x3c/li\x3e'
              ),
              (e = k = !0))
            : (f.push(c(b, g === this.value, a + "_" + m++)), (e = !1));
        });
        e && f.pop();
        f.push("\x3c/ul\x3e");
        return f.join("");
      }
      var l = a.$,
        k = !1,
        p = 1;
      return a.extend(
        { create: f.create, remove: f.remove, get: f.get },
        {
          type: "dropdown",
          create: function (b, h, e) {
            var d = h.$button,
              c = h.$sourceSelect,
              k = c[0],
              l = d.find(".a-dropdown-label"),
              p = c.data("aTouchHeader");
            if (!p || (!p.length && l.length)) p = l.text();
            l = c.data("a-max-height");
            return f.create(b, {
              attributes: {
                type: "dropdown",
                header: p,
                closeButtonLabel: h.closeButtonLabel
                  ? h.closeButtonLabel
                  : "Close",
                inlineContent: c,
                position: h.position,
                maxHeight: l,
                alone: !0,
                sourceSelect: c,
                sourceButton: d,
                name: c[0].name,
                preventNameReuse: !0,
                lightboxOptions:
                  a.capabilities.mobile || a.capabilities.tablet
                    ? {
                        showDuration: a.capabilities.ios ? null : 0,
                        hideDuration: 0,
                      }
                    : null,
              },
              typeSpecificFunctions: a.extend({}, g, e, {
                skin: function (b) {
                  var d = e.subskin ? e.subskin(k) : m(k);
                  b.attrs("inlineContent", d);
                  return e.skin(b);
                },
              }),
              actionCheck: !1,
            });
          },
        }
      );
    }
  );
  ("use strict");
  ("use strict");
  n.when("A", "a-dropdown-base-factory").register(
    "a-dropdown-keyboard-handlers",
    function (a, f) {
      function g(b) {
        b.removeData("a-user-navigated-text").removeData(
          "a-user-navigated-idx"
        );
      }
      function c(b, e) {
        b.removeAttr("aria-selected");
        "option" === e.attr("role") && e.attr("aria-selected", "true");
        e.focus();
      }
      function m(b) {
        var e = b.parent("ul");
        b = e.find("li");
        var d = e.find(":focus");
        1 > d.length && (d = e.find('[aria-checked\x3d"true"]'));
        e = d;
        return { index: 0 < e.length ? e.index() : 0, $options: b };
      }
      function l(b, e, d) {
        b.preventDefault();
        e.find("a").eq(0).trigger("click");
        g(d);
      }
      function k(b) {
        var e = b.data("a-user-navigated-debouncer");
        e ||
          ((e = a.debounce(function () {
            g(b);
          }, 1e3)),
          b.data("a-user-navigated-debouncer", e));
        e();
      }
      var p = a.$,
        b = a.constants.keycodes;
      return {
        keyDown: function (a) {
          var e = p(this),
            d = e.parent();
          switch (a.which) {
            case b.UP_ARROW:
              a.preventDefault();
              g(d);
              0 < m(e).index && c(e, e.prev());
              break;
            case b.DOWN_ARROW:
              a.preventDefault();
              g(d);
              d = m(e);
              a = d.index;
              0 <= a && a + 1 < d.$options.length && c(e, e.next());
              break;
            case b.ENTER:
              l(a, e, d);
              break;
            case b.ESCAPE:
              a.preventDefault();
              e = f.get(e.closest(".a-popover"));
              e.sourceButton.find(".a-button-text").focus();
              e.hide();
              g(d);
              break;
            case b.SPACE:
              d.data("a-user-navigated-text") || l(a, e, d);
              break;
            case b.TAB:
              g(d);
              break;
            case b.BACKSPACE:
              a.preventDefault();
          }
        },
        keyPress: function (c) {
          var e = p(this),
            d = e.parent(),
            h = f.get(e.closest(".a-popover")),
            g = c.which;
          if (h && h.isActive() && g !== b.TAB && 0 !== g) {
            k(d);
            var m = d.data("a-user-navigated-idx") || 0;
            if (!(0 > m)) {
              h =
                (d.data("a-user-navigated-text") || "") +
                String.fromCharCode(g).toLocaleLowerCase();
              d.data("a-user-navigated-text", h);
              for (var v = d.children(); m < v.length; m++) {
                var n = v.eq(m);
                if (0 === a.trim(n.text().toLocaleLowerCase()).indexOf(h)) {
                  n.focus();
                  d.data("a-user-navigated-idx", m);
                  return;
                }
              }
              d.data("a-user-navigated-idx", -1);
              g === b.SPACE && l(c, e, d);
            }
          }
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-dropdown-select-apis",
    "a-dropdown-base-factory",
    "a-popover-base"
  ).register("a-dropdown-base", function (a, f, g, c) {
    function m(c, e, d) {
      try {
        var h = c.$event || c;
        h.preventDefault ? h.preventDefault() : (h.returnValue = !1);
      } catch (t) {}
      var l = c.$declarativeParent ? c.$declarativeParent : b(c.currentTarget);
      a.delay(function () {
        var h = e.$button ? e.$button : e.getButtonFromEvent(c),
          f = e.$select ? e.$select : e.getSelectFromEvent(c);
        if (!h.hasClass("a-button-disabled")) {
          p(f, e).isSynced() || k(b.extend({ $button: h, $select: f }, e));
          f = a.extend({}, e, { $button: h, $sourceSelect: f });
          var q = g.create(l, f, d);
          if (
            q &&
            (q.show(),
            h
              .data("a-popover-id", q.id)
              .data("popover", q)
              .data("isPressed", !0),
            n.now("a-weblab").execute(function (b) {
              b &&
                b.is("AUI_A11Y_SR_678508", "T1") &&
                h
                  .find("button[role\x3d'combobox']")
                  .attr("aria-controls", q.$popover.attr("id"));
            }),
            !q.hasOnLoad)
          ) {
            q.hasOnLoad = !0;
            var r = [];
            f = q.$popover.find("img");
            f.length &&
              (f.each(function (d, e) {
                if (!e.complete || !e.naturalWidth) {
                  var c = b.Deferred();
                  r.push(c);
                  b(e).bind("load error", function () {
                    c.resolve();
                  });
                }
              }),
              r.length
                ? b.when.apply(b, r).done(function () {
                    q.updatePosition();
                  })
                : q.updatePosition());
          }
        }
      });
    }
    function l(b) {
      var e = b.$button;
      b = b.$select;
      e || (e = b.nextAll(".a-button-dropdown"));
      return b.length ? ((e = g.get(e)) && e.hide(), !0) : !1;
    }
    function k(b) {
      var e = b.$button;
      b = b.$select;
      e || (e = b.nextAll(".a-button-dropdown"));
      return b.length
        ? ((e = g.get(e)) && g.remove(e.id), b.data("a-info", null), !0)
        : !1;
    }
    function p(c, e) {
      c = e.$select
        ? e.$select
        : "string" === typeof c
        ? b("select#" + c)
        : c.jquery
        ? c
        : b(c);
      if (!c.length) return null;
      var d = e.$button ? e.$button : e.getButtonFromSelect(c);
      c.data("a-select")
        ? (e = c.data("a-select"))
        : ((e = a.extend(
            {
              hidePopover: l,
              refreshPopover: k,
              options: a.extend({ $select: c, $button: d }, e),
            },
            f
          )),
          c.data("a-select", e));
      return e;
    }
    var b = a.$;
    return {
      toggleDropdown: function (b, e) {
        var d = (e.$button ? e.$button : e.getButtonFromEvent(b)).data(
          "popover"
        );
        d && d.$popover.is(":visible") ? d.hide() : m(b, e);
      },
      showDropdown: m,
      getSelect: p,
    };
  });
  ("use strict");
  n.when("A", "jQuery").register("a-dropdown-options-apis", function (a, f) {
    return {
      update: function (a) {
        "object" !== typeof a &&
          n.error("input of options.update() function must be a hash");
        this.hidePopover(this.options);
        for (var c = 0, g = this.size(); c < g; c++) {
          var l = this.options.elements[c],
            k = l[0];
          a.value && l.val(a.value);
          void 0 !== a.selected &&
            (!k.selected && a.selected
              ? this.options.$select.val(k.value)
              : k.selected && !a.selected && this.options.$select.val(""));
          a.html_content && l.data("a-html-content", a.html_content);
          a.image_source && l.data("a-image-source", a.image_source);
          a.native_css_class && (k.className = a.native_css_class);
          a.css_class && l.data("a-css-class", a.css_class);
          a.native_id && (k.id = a.native_id);
          a.id && l.data("a-id", a.id);
          a.text &&
            (l.text(a.text), k.selected && this.setSelectValue(k.value));
        }
        this.refreshPopover(this.options);
        return this;
      },
      remove: function () {
        this.hidePopover(this.options);
        for (var a = 0, c = this.size(); a < c; a++) {
          var f = this.options.elements[a];
          f.is(":selected") && this.setSelectValue("");
          f.remove();
        }
        this.refreshPopover(this.options);
        return !0;
      },
      info: function () {
        for (var a = [], c = 0, f = this.size(); c < f; c++) {
          var l = this.options.elements[c];
          a.push({
            value: l[0].value,
            text: l.text(),
            selected: l[0].selected,
            html_content: l.data("a-html-content"),
            image_source: l.data("a-image-source"),
            native_css_class: l[0].className,
            css_class: l.data("a-css-class"),
            native_id: l[0].id,
            id: l.data("a-id"),
          });
        }
        return a;
      },
      size: function () {
        return this.options.elements.length;
      },
    };
  });
  ("use strict");
  n.when("A", "jQuery", "a-dropdown-options-apis").register(
    "a-dropdown-select-apis",
    function (a, f, g) {
      function c(a) {
        var c = this.options.$select,
          b = this.options.$button,
          k = c[0];
        "number" === typeof a && (a = a.toString());
        for (
          var e = 0, d = k.options.length;
          e < d && k.options[e].value !== a;
          e++
        );
        e === d && "" === a && (e = 0);
        e < d &&
          (b.find(".a-dropdown-prompt").html(k.options[e].innerHTML),
          b.css("min-width", e / k.options.length + "%"),
          c.val() !== a && (c.val(a), c.trigger("change", [l, !0])));
        return this;
      }
      function m(a) {
        if (a === l) return this.options.$select.val();
        this.setValue = c;
        return this.setValue(a);
      }
      var l;
      return {
        isSynced: function () {
          var c = this.options.$select,
            g = c.data("a-info"),
            b = this.getOptions().info();
          c.data("a-info", b);
          return g ? a.equals(g, b) : !0;
        },
        update: function (a) {
          "object" !== typeof a &&
            n.error("input of select.update() function must be an object");
          this.hidePopover(this.options);
          var c = {
              none: !0,
              micro: !0,
              mini: !0,
              small: !0,
              base: !0,
              medium: !0,
              large: !0,
              "extra-large": !0,
              "double-large": !0,
              block: !0,
            },
            b = this.options.$select,
            h = b[0],
            e = this.options.$button,
            d = e[0],
            g = b.siblings("label");
          a.name && (h.name = a.name);
          if (a.option_prompt) {
            var k = b.find(".a-prompt");
            k.length
              ? (k.text(a.option_prompt),
                k.prop("selected") &&
                  e.find(".a-dropdown-prompt").text(a.option_prompt))
              : (b.prepend(
                  f("\x3coption class\x3d'a-prompt' /\x3e").text(
                    a.option_prompt
                  )
                ),
                e.find(".a-dropdown-prompt").text(a.option_prompt));
          }
          a.has_images !== l && b.data("a-has-images", !!a.has_images);
          a.button_size !== l &&
            e.length &&
            ("small" === a.button_size
              ? e.addClass("a-button-small")
              : e.removeClass("a-button-small"));
          a.spacing !== l &&
            c.hasOwnProperty(a.spacing) &&
            ((c = /\ba-spacing-[a-z]+\b/g),
            (h.className = h.className.replace(c, "")),
            (d.className = d.className.replace(c, "")),
            b.addClass("a-spacing-" + a.spacing),
            e.addClass("a-spacing-" + a.spacing));
          a.grid_units !== l &&
            ((c = /\ba-button-span\d{1,2}\b/g),
            (h.className = h.className.replace(c, "")),
            (d.className = d.className.replace(c, "")),
            isFinite(a.grid_units) &&
              0 < a.grid_units &&
              13 > a.grid_units &&
              (b.addClass("a-button-span" + a.grid_units),
              e.addClass("a-button-span" + a.grid_units)));
          a.width_name &&
            ("base" === a.width_named
              ? e.addClass("a-button-width-normal")
              : e.removeClass("a-button-width-normal"));
          if (a.status) {
            var m = a.status;
            c = e
              .closest(".a-dropdown-container, .a-splitdropdown-container")
              .find(".a-button");
            k = "error" === m;
            m = "disabled" === m;
            h.disabled = m;
            c.toggleClass("a-button-disabled", m);
            f(h).hasClass("a-native-splitdropdown")
              ? m
                ? c
                    .find("button.a-button-text")
                    .attr("aria-disabled", "true")
                    .parents(".a-button-splitdropdown")
                    .find("button.a-button-text")
                    .removeAttr("role")
                : c
                    .find("button.a-button-text")
                    .removeAttr("aria-disabled")
                    .parents(".a-button-splitdropdown")
                    .find("button.a-button-text")
                    .attr("role", "combobox")
              : m
              ? c.attr("aria-disabled", "true")
              : c.removeAttr("aria-disabled");
            c.toggleClass("a-button-error", k);
          }
          a.native_id &&
            ((h.id = a.native_id), g.length && (g[0].htmlFor = a.native_id));
          a.id && (d.id = a.id);
          a.native_css_class &&
            ((d = b.data("a-native-class")) && b.removeClass(d),
            b
              .addClass(a.native_css_class)
              .data("a-native-class", a.native_css_class));
          a.css_class &&
            ((d = e.data("a-class")) && e.removeClass(d),
            e.addClass(a.css_class).data("a-class", a.css_class));
          a.label_text !== l &&
            ("" === a.label_text
              ? (e.find(".a-dropdown-label").remove(),
                b.siblings("label").remove())
              : ((d = e.find(".a-dropdown-label")),
                d.length
                  ? d.text(a.label_text)
                  : e
                      .find(".a-dropdown-prompt")
                      .before(
                        f("\x3cspan class\x3d'a-dropdown-label' /\x3e").text(
                          a.label_text
                        )
                      ),
                g.length
                  ? g.text(a.label_text)
                  : b.before(
                      f(
                        "\x3clabel for\x3d'" +
                          h.id +
                          "' class\x3d'a-native-dropdown' /\x3e"
                      ).text(a.label_text)
                    )),
            e.css("min-width", "" === a.label_text ? "0.1%" : "0%"));
          this.refreshPopover(this.options);
          return this;
        },
        setValue: c,
        val: m,
        getOptions: function (c) {
          var k = this.options.$select,
            b = [];
          c =
            c === l
              ? k.children("optgroup, option:not(.a-prompt)")
              : f.isArray(c)
              ? c
              : [c];
          for (var h = 0, e = c.length; h < e; h++) {
            var d = c[h],
              q = [];
            a.isFiniteNumber(d)
              ? (q = k.children("optgroup, option:not(.a-prompt)").eq(d))
              : "string" === typeof d
              ? (q = k.children("option#" + d))
              : "object" === typeof d && (q = d.jquery ? d : f(d));
            q.length && b.push(q);
          }
          return a.extend(
            {
              hidePopover: this.hidePopover,
              refreshPopover: this.refreshPopover,
              setSelectValue: m,
              options: a.extend({ elements: b }, this.options),
            },
            g
          );
        },
        getOption: function (a) {
          return this.getOptions(a);
        },
        addOptions: function (a, c) {
          f.isArray(a) || (a = [a]);
          for (var b = a.length; b--; ) this.addOption(a[b], c);
          return this;
        },
        addOption: function (a, c) {
          var b = this.options.$select;
          if (!a.native_id || !b.find("option#" + a.native_id).length) {
            var h = b.children("optgroup, option:not(.a-prompt)"),
              e = document.createElement("option");
            c = c && 0 < c && c <= h.length ? c : 0;
            a.native_id && (e.id = a.native_id);
            0 === h.length || c === h.length
              ? b[0].appendChild(e)
              : h.eq(c).before(e);
            this.getOption(e).update(a);
          }
          return this;
        },
        removeOptions: function (a) {
          this.getOptions(a).remove();
          return this;
        },
        removeOption: function (a) {
          return this.removeOptions(a);
        },
        appendOption: function (a) {
          return this.addOption(
            a,
            this.options.$select.children("optgroup, option:not(.a-prompt)")
              .length
          );
        },
        appendOptions: function (a) {
          if (f.isArray(a))
            for (var c = 0, b = a.length; c < b; c++) this.addOption(a[c]);
          return this;
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-dropdown-options",
    "a-dropdown-apis",
    "a-dropdown-keyboard-handlers",
    "a-analytics"
  ).register("a-dropdown", function (a, f, g, c, m) {
    var l = a.$,
      k = l(document);
    a.on("beforeReady a:pageUpdate a:ajax:complete", function () {
      var a = k.find("select.a-native-dropdown").not("[tabindex\x3d0]"),
        b = a.length;
      b &&
        (a
          .next(".a-button-dropdown")
          .attr("aria-hidden", !0)
          .find(".a-button-text")
          .removeAttr("tabindex"),
        m.count("dropdown:usage", b),
        a.attr("tabindex", 0));
    });
    k.delegate(".a-native-dropdown", "change", function (c, b, h) {
      var e = f.getButtonFromEvent(c),
        d = "",
        q =
          -1 < this.selectedIndex ? this.options[this.selectedIndex].value : "",
        k = e.data("popover");
      c = !1;
      if (e.length) {
        e = e.eq(0);
        for (var m = this.length; m--; ) {
          var p = this.options[m];
          if (p.value === q) {
            d = p.innerHTML;
            break;
          }
        }
        k &&
          k.$popover &&
          (k.$popover
            .find(".a-active")
            .removeClass("a-active")
            .closest("li")
            .attr("aria-checked", !1),
          void 0 === b &&
            ((b = JSON.stringify({ stringVal: q })),
            (b = k.$popover.find(
              'a[data-value\x3d"' + a.escapeJquerySelector(b) + '"]'
            ))));
        b &&
          b.length &&
          ((c = !0),
          b.addClass("a-active").closest("li").attr("aria-checked", !0));
        e.find(".a-dropdown-prompt").html(d);
        e.css("min-width", this.selectedIndex / this.options.length + "%");
        k &&
          (k.hide(),
          (e = g.getSelect(this)) &&
            l(this).data("a-info", e.getOptions().info()));
        h ||
          ((h = this.name),
          (e = this.id),
          (b = {
            auiItemNode: c ? b[0] : null,
            nativeItemNode: this.options[this.selectedIndex],
            selectNode: this,
            id: e,
            name: h,
            value: this.value,
          }),
          h &&
            "" !== h &&
            (a.trigger("a:dropdown:" + h + ":select", b),
            a.trigger("a:dropdown:selected:" + h, b)),
          e && "" !== e && a.trigger("a:dropdown:" + e + ":select", b),
          a.trigger("a:dropdown:select", b));
      }
    });
    k.delegate(
      ".a-button-dropdown:not(.a-button-disabled)",
      "focusin",
      function () {
        l(this).find(".a-button-text").focus();
      }
    );
    k.delegate("select.a-native-dropdown", "focusin", function () {
      var a = l(this)
        .closest(".a-dropdown-container")
        .find(".a-button-dropdown");
      a.hasClass("a-button-disabled") || a.addClass("a-button-focus");
    }).delegate("select.a-native-dropdown", "focusout", function () {
      l(this)
        .closest(".a-dropdown-container")
        .find(".a-button-dropdown")
        .removeClass("a-button-focus");
    });
    return g;
  });
  ("use strict");
  n.when("A", "a-dropdown-base", "a-dropdown-options").register(
    "a-dropdown-apis",
    function (a, f, g) {
      function c(a) {
        return f.getSelect(a, g);
      }
      var m = a.$;
      a.on("beforeReady", function () {
        m(".a-dropdown-container select").each(function () {
          var a = c(this);
          a && a.val(a.val());
        });
      });
      return {
        getSelect: c,
        updateOption: function (a, g) {
          var f = m("option#" + a).closest("select");
          c(f).getOption(a).update(g);
        },
        updateSelect: function (a, g) {
          c(a).update(g);
        },
        setValue: function (a, g) {
          c(a).setValue(g);
        },
      };
    }
  );
  ("use strict");
  n.when("A", "a-popover-accessibility").register(
    "a-dropdown-view",
    function (a, f) {
      return {
        skin: function (a) {
          var c = a.attrs("header") || "";
          a = { id: a.id, header_str: c, needs_declarative: !1 };
          return [
            '\x3cdiv class\x3d"a-popover a-dropdown a-dropdown-common a-declarative" aria-modal\x3d"true" data-action\x3d"a-popover-a11y"\x3e',
            f.getStartAnchorHtml(a),
            '\x3cdiv class\x3d"a-popover-wrapper"\x3e\x3cdiv class\x3d"a-popover-inner"\x3e\x3c/div\x3e\x3c/div\x3e',
            f.getEndAnchorHtml(a),
            "\x3c/div\x3e",
          ].join("");
        },
      };
    }
  );
  ("use strict");
  n.when("A").register("a-dropdown-options", function (a) {
    function f(a) {
      return a.nextAll(".a-button-dropdown");
    }
    var g = a.$;
    return {
      getSelectFromButton: function (a) {
        return a
          .closest(".a-button-dropdown")
          .prevAll("select.a-native-dropdown");
      },
      getButtonFromEvent: function (a) {
        return a.popover
          ? a.popover.$trigger.nextAll(".a-button-dropdown")
          : a.$target
          ? f(a.$target)
          : g(a.target).nextAll(".a-button-dropdown");
      },
      getButtonFromSelect: f,
      getSelectFromEvent: function (a) {
        a = g(a.target);
        a.length || n.error("Cannot locate the \x3cselect\x3e of dropdown");
        return a;
      },
      triggerSelector: ".a-button-dropdown",
    };
  });
  ("use strict");
  n.when("A", "a-popover-accessibility").register(
    "a-dropdown-split-view",
    function (a, f) {
      return {
        skin: function (a) {
          var c = a.attrs("header") || "";
          a = { id: a.id, label_str: c, needs_declarative: !1 };
          return [
            '\x3cdiv class\x3d"a-popover a-splitdropdown a-dropdown-common a-declarative" aria-modal\x3d"true" data-action\x3d"a-popover-a11y"\x3e',
            f.getStartAnchorHtml(a),
            '\x3cdiv class\x3d"a-popover-wrapper"\x3e\n\x3cdiv class\x3d"a-popover-inner"\x3e\x3c/div\x3e\n\x3c/div\x3e',
            f.getEndAnchorHtml(a),
            "\x3c/div\x3e",
          ].join("\n");
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-dropdown-base",
    "a-dropdown-split-utils",
    "a-dropdown-split-view",
    "a-dropdown-split-options",
    "a-dropdown-base-factory",
    "a-dropdown-keyboard-handlers"
  ).register("a-dropdown-split-handlers", function (a, f, g, c, m, l, k) {
    var p = a.$;
    a.declarative("a-splitdropdown-button", "click", function (b) {
      var h = m.getButtonFromEvent(b);
      f.showDropdown(b, a.extend({ $button: h }, m), c);
    });
    a.declarative("a-splitdropdown-main", "click", function (b) {
      var a = b.$target.closest(".a-splitdropdown-container").find("select"),
        c = a.attr("id"),
        d = a.val();
      g.triggerEvent(c, a, d);
      b.$event.preventDefault();
    });
    a.declarative("a-splitdropdown-button", "keydown", function (b) {
      var h = m.getButtonFromEvent(b),
        e = a.constants.keycodes,
        d = b.$event.which;
      (d !== e.DOWN_ARROW && d !== e.ENTER && d !== e.SPACE) ||
        f.showDropdown(b, p.extend({ $button: h }, m), c);
    });
    p(document)
      .delegate(".a-popover.a-splitdropdown a", "click", function (b) {
        var a = p(this),
          c = a.data("value").stringVal;
        a = l.get(a.closest(".a-popover"));
        var d = a.sourceSelect,
          f = d.attr("id");
        a.hide();
        g.triggerEvent(f, d, c);
        b.preventDefault();
      })
      .delegate(".a-splitdropdown li", "keydown", k.keyDown)
      .delegate(".a-splitdropdown li", "keypress", k.keyPress);
  });
  ("use strict");
  n.when("A").register("a-dropdown-split-options", function (a) {
    function f(a) {
      return a.popover
        ? a.popover.$trigger.closest(".a-button-splitdropdown")
        : a.$target
        ? a.$target.closest(".a-button-splitdropdown")
        : g(a.target).nextAll(".a-button-splitdropdown");
    }
    var g = a.$;
    return {
      getButtonFromEvent: f,
      getButtonFromSelect: function (a) {
        return a
          .next(".a-button-group-splitdropdown")
          .find(".a-button-splitdropdown");
      },
      getSelectFromEvent: function (a) {
        a = f(a).closest(".a-splitdropdown-container").find("select");
        a.length ||
          n.error("cannot locate the \x3cselect\x3e of the split dropdown");
        return a;
      },
    };
  });
  ("use strict");
  n.when("A").register("a-dropdown-split-utils", function (a) {
    return {
      triggerEvent: function (f, g, c) {
        g = { $select: g, value: c, id: f };
        a.trigger("a:splitdropdown:" + f + ":select", g);
        a.trigger("a:splitdropdown:select", g);
      },
    };
  });
  ("use strict");
  n.when(
    "A",
    "a-dropdown-base",
    "a-dropdown-split-options",
    "a-dropdown-split-utils",
    "a-dropdown-split-handlers",
    "a-analytics"
  ).register("a-splitdropdown", function (a, f, g, c, m, l) {
    var k = a.$,
      p = k(document);
    a.on("a:pageUpdate beforeReady", function () {
      if (
        (a.capabilities.mobile || a.capabilities.tablet) &&
        !a.capabilities.touchScrolling
      ) {
        p.find("select.a-native-splitdropdown")
          .removeAttr("tabindex")
          .removeAttr("aria-hidden");
        var b = p.find(".a-splitdropdown-container label.a-native-dropdown");
        a.each(b, function (b) {
          k(b).attr(
            "for",
            k(b).nextAll("select.a-native-splitdropdown").attr("id") || ""
          );
        });
      }
    });
    p.delegate(".a-native-splitdropdown", "change", function (b, a, e) {
      b = k(this);
      a = b.val();
      var d = b.attr("id");
      e || c.triggerEvent(d, b, a);
    }).delegate(
      ".a-button-splitdropdown:not(.a-button-disabled)",
      "focusin",
      function () {
        k(this).find(".a-button-text").focus();
      }
    );
    a.on("beforeReady a:pageUpdate a:ajax:complete", function () {
      var b = p.find(".a-button-group-splitdropdown .a-button-disabled");
      b.attr("aria-disabled") &&
        (l.count("splitdropdown:usage", b.length),
        b
          .removeAttr("aria-disabled")
          .find(".a-button-text")
          .attr("aria-disabled", !0)
          .removeAttr("role"));
    });
    return {
      getSelect: function (b) {
        return f.getSelect(b, g);
      },
    };
  });
  ("use strict");
  n.when("A", "a-popover-accessibility-templates").register(
    "a-popover-accessibility",
    function (a, f) {
      var g = f.startAnchorTemplate,
        c = f.startAnchorDeclarativeTemplate,
        m = f.endAnchorTemplate,
        l = f.descriptionTemplate,
        k = f.offscreenDescriptionTemplate,
        p = f.labelTemplate,
        b = f.offscreenStartTemplate,
        h = function (b, a) {
          var d = { "{{DESCRIPTION}}": a, "{{DESCRIPTION_ID}}": b };
          return l.replace(/\{\{[\w_]*\}\}/g, function (b) {
            return d[b];
          });
        },
        e = function (b) {
          var a = b.id,
            d = b.header_str;
          return (b = b.label_str)
            ? 'aria-label\x3d"' + b + '"'
            : d
            ? 'aria-labelledby\x3d"a-popover-header-' + a + '"'
            : "";
        },
        d = function (b, a) {
          var d = { "{{DESCRIPTION}}": a, "{{DESCRIPTION_ID}}": b };
          return k.replace(/\{\{[\w_]*\}\}/g, function (b) {
            return d[b];
          });
        };
      return {
        getAriaLabelledByDescribedby: function (b) {
          var a = b.id,
            d = b.header_str,
            c = b.aria_description,
            e = "";
          b.label_str
            ? (e = 'aria-labelledby\x3d"a-popover-label-' + a + '"')
            : d && (e = 'aria-labelledby\x3d"a-popover-header-' + a + '"');
          c &&
            (e +=
              ' aria-describedby\x3d"a-popover-aria-description-' + a + '"');
          return e;
        },
        getPopoverLabelHtml: function (b) {
          var a = "",
            d = b.id;
          if ((b = b.label_str)) {
            var c = { "{{LABEL}}": b, "{{LABEL_ID}}": "a-popover-label-" + d };
            a = p.replace(/\{\{[\w_]*\}\}/g, function (b) {
              return c[b];
            });
          }
          return a;
        },
        getStartAnchorHtml: function (b) {
          var d = b.id,
            f = b.label_str,
            l = b.aria_description,
            k = "";
          if (!d) return "";
          var q = {
            "{{ROLE}}": 'role\x3d"dialog"',
            "{{ANCHOR_NAME}}": "a-popover-start",
            "{{ARIA_LABEL}}": e(b),
            "{{LABEL_STR}}": f || "",
            "{{ARIA_DESCRIBEDBY}}": "",
          };
          b = b.needs_declarative ? c : g;
          l &&
            ((d = "a-popover-aria-description-" + d),
            (q["{{ARIA_DESCRIBEDBY}}"] = 'aria-describedby\x3d"' + d + '"'),
            (k = h(d, l)));
          a.capabilities.ios && (q["{{ROLE}}"] = "");
          b =
            b.replace(/\{\{[\w_]*\}\}/g, function (b) {
              return q[b];
            }) + k;
          return b.replace(/\s\s>|\s>/g, "\x3e");
        },
        getEndAnchorHtml: function (b) {
          return m;
        },
        getDescription: function (b) {
          var a = "",
            c = b.id;
          (b = b.aria_description) &&
            (a = d("a-popover-aria-description-" + c, b));
          return a;
        },
        getStartAnchorSimplifiedHtml: function () {
          return b;
        },
      };
    }
  );
  ("use strict");
  n.declare("a-popover-accessibility-templates", {
    startAnchorTemplate:
      '\x3cspan tabindex\x3d"0" role\x3d"dialog" class\x3d"{{ANCHOR_NAME}} a-popover-a11y-offscreen" {{ARIA_LABEL}} {{ARIA_DESCRIBEDBY}}\x3e\x3c/span\x3e',
    startAnchorDeclarativeTemplate:
      '\x3cspan tabindex\x3d"0" role\x3d"dialog" data-action\x3d"a-popover-a11y" class\x3d"{{ANCHOR_NAME}} a-popover-a11y-offscreen a-declarative" {{ARIA_LABEL}} {{ARIA_DESCRIBEDBY}}\x3e{{LABEL_STR}}\x3c/span\x3e',
    endAnchorTemplate:
      '\x3cspan tabindex\x3d"0" class\x3d"a-popover-end a-popover-a11y-offscreen"\x3e\x3c/span\x3e',
    descriptionTemplate:
      '\x3cspan id\x3d"{{DESCRIPTION_ID}}" class\x3d"a-popover-a11y-offscreen"\x3e{{DESCRIPTION}}\x3c/span\x3e',
    offscreenDescriptionTemplate:
      '\x3cspan id\x3d"{{DESCRIPTION_ID}}" class\x3d"a-popover-a11y-offscreen" aria-hidden\x3d"true"\x3e{{DESCRIPTION}}\x3c/span\x3e',
    labelTemplate:
      '\x3cspan id\x3d"{{LABEL_ID}}" class\x3d"a-popover-a11y-offscreen" aria-hidden\x3d"true"\x3e{{LABEL}}\x3c/span\x3e',
    offscreenStartTemplate:
      '\x3cspan tabindex\x3d"0" class\x3d"a-popover-start a-popover-a11y-offscreen"\x3e\x3c/span\x3e',
  });
  ("use strict");
  n.when("A", "a-popover-util").register("a-popover-ajax", function (a, f) {
    return {
      update: function (a, c, f) {
        var g = {};
        g.url = c;
        f.timeout && (g.timeout = f.timeout);
        f.ajaxFailMsg && (g.ajaxFailMsg = f.ajaxFailMsg);
        f.cache && (g.cache = f.cache);
        a.update(g);
      },
      showSpinner: function (a) {
        return f.showSpinner(a);
      },
    };
  });
  ("use strict");
  n.when("A").register("a-popover-animate", function (a) {
    function f(c, f) {
      return function () {
        a[c].apply(a, f);
      };
    }
    function g(a, f) {
      return function () {
        a._isAnimating = !1;
        f && f();
      };
    }
    return {
      isAnimating: function (a) {
        return a._isAnimating;
      },
      animate: function (c, m, l, k, p) {
        c._isAnimating = 0 < l;
        a.animationFrameDelay(f("animate", [c.$popover, m, l, k, g(c, p)]));
      },
      fadeOut: function (c, m, l, k) {
        c._isAnimating = 0 < m;
        a.animationFrameDelay(f("fadeOut", [c.$popover, m, l, g(c, k)]));
      },
      fadeIn: function (c, m, l, k) {
        c._isAnimating = 0 < m;
        a.animationFrameDelay(f("fadeIn", [c.$popover, m, l, g(c, k)]));
      },
    };
  });
  n.declare("a-popover-lightbox-markup", {
    id: "a-popover-lgtbox",
    div: '\x3cdiv id\x3d"a-popover-lgtbox" class\x3d"a-declarative" data-action\x3d"a-popover-floating-close" /\x3e',
  });
  ("use strict");
  n.when("A", "ready").register("a-popover-navigate", function (a) {
    function f(b) {
      "string" === typeof b && ((l = !0), (u.location.hash = b));
      return u.location.hash || "";
    }
    var g = a.$;
    g = g(u);
    var c = [],
      m = [],
      l = !1,
      k = {},
      p = !1;
    m.push(f());
    g.bind("hashchange", function (b) {
      b.preventDefault();
      p ? (p = !1) : m.push(f());
      32 <= m.length && m.shift();
      l ? (l = !1) : a.trigger("a:popover:navigate", k[m[m.length - 1]]);
    });
    a.on("a:popover:navigate", function (b) {
      b
        ? b.show({ preventNavigate: !0 })
        : (b = 0 <= c.length - 1 ? c[c.length - 1] : null) &&
          b.unlock().hide({ preventNavigate: !0 });
    });
    a.on("a:popover:showNavigable a:popover:showNavigableLegacy", function (b) {
      c.push(b.popover);
    });
    a.on("a:popover:hideNavigable a:popover:hideNavigableLegacy", function (b) {
      c.pop();
    });
    return {
      forward: function (b) {
        var c = b.name + "_" + a.now();
        k["#" + c] = b;
        f(c);
      },
      back: function () {
        0 < m.length && m.pop();
        p = !0;
        u.history.back();
      },
    };
  });
  ("use strict");
  n.when("A", "prv:a-capabilities").register(
    "a-popover-position",
    function (a, f) {
      function g(c, d) {
        var e = a.viewport();
        if (1 === a.viewport().zoom) var f = { top: 0, left: 0 };
        else
          p ||
            ((p = k(
              '\x3cspan id\x3d"a-popover-offset-tracker"\x3e\x3c/span\x3e'
            )),
            k("body").prepend(p)),
            (f = p.offset());
        var g = d.offset(),
          l = c.offset();
        if (h) {
          var m = u.pageYOffset - document.documentElement.scrollTop;
          g.top -= m;
          l.top -= m;
        }
        g.top -= f.top;
        g.left -= f.left;
        l.top -= f.top;
        l.left -= f.left;
        m = d[0].getBoundingClientRect();
        m = m.right - m.left;
        d = d.outerHeight();
        var n = c.outerWidth(!0),
          w = c.outerHeight(!0);
        c = c.find(".a-popover-header");
        c = c.length ? c.outerHeight(!0) : 0;
        return {
          windowWidth: e.width,
          windowHeight: e.height,
          windowTop: e.scrollTop,
          windowLeft: e.scrollLeft,
          windowRight: e.scrollLeft + e.width,
          windowBottom: e.scrollTop + e.height,
          zoomTop: f.top,
          zoomLeft: f.left,
          triggerWidth: m + 1,
          triggerHeight: d,
          triggerTop: g.top - b,
          triggerLeft: g.left - b,
          triggerRight: g.left + m + b,
          triggerBottom: g.top + d + b,
          triggerVerticalCenter: g.top + d / 2,
          triggerHorizontalCenter: g.left + m / 2,
          popoverWidth: n,
          popoverHeight: w,
          popoverTop: l.top,
          popoverLeft: l.left,
          popoverRight: l.left + n,
          popoverBottom: l.top + w,
          popoverVerticalCenter: l.top + w / 2,
          popoverHorizontalCenter: l.left + n / 2,
          headerHeight: c,
        };
      }
      function c(b) {
        return b.removeClass(
          "a-arrow-top a-arrow-bottom a-arrow-left a-arrow-right"
        );
      }
      function m(b) {
        var a = { deltaTop: 0 };
        a.top = b.triggerVerticalCenter - b.popoverHeight / 2;
        if (a.top < b.windowTop + 20) {
          var c = Math.min(b.windowTop + 20, b.triggerTop - 20);
          a.deltaTop = a.top - c;
          a.top = c;
        } else
          a.top + b.popoverHeight > b.windowBottom - 20 &&
            ((c = Math.min(20, b.windowBottom - b.triggerBottom + 20)),
            (a.deltaTop = a.top + b.popoverHeight - (b.windowBottom - c)),
            (a.top = b.windowBottom - c - b.popoverHeight));
        return a;
      }
      function l(b) {
        var a = { deltaLeft: 0 };
        a.left = b.triggerHorizontalCenter - b.popoverWidth / 2;
        if (20 > a.left) {
          var c = Math.min(20, b.triggerLeft - 20);
          a.deltaLeft = a.left - c;
          a.left = c;
        } else
          a.left + b.popoverWidth > b.windowRight - 20 &&
            ((c = Math.min(20, b.windowRight - b.triggerRight + 20)),
            (a.deltaLeft = a.left + b.popoverWidth - (b.windowRight - c)),
            (a.left = b.windowRight - c - b.popoverWidth));
        return a;
      }
      var k = a.$;
      k(u);
      var p = null,
        b = 1,
        h = a.capabilities.mobile && f.isIE10Plus;
      n.when("prv:skin-vars-desktop").execute(function (a) {
        b = a.popover.POPOVER_SPACING ? a.popover.POPOVER_SPACING : b;
      });
      return {
        windowCenter: function (b) {
          b = g(b.$popover, b.$trigger);
          var a = {};
          a.top = (b.windowHeight - b.popoverHeight) / 2;
          a.left = (b.windowWidth - b.popoverWidth) / 2;
          0 > a.top && (a.top = 0);
          return a;
        },
        windowTop: function (b) {
          b = g(b.$popover, b.$trigger);
          var a = { top: 0 };
          a.left = b.windowWidth / 2 - b.popoverWidth / 2;
          return a;
        },
        windowFullWidth: function (b) {
          return { top: 0, left: 0 };
        },
        triggerRight: function (b, a) {
          var d = b.$popover,
            e = b.$trigger;
          a || (a = g(d, e));
          e = m(a);
          e.left = a.triggerRight;
          b.attrs("popoverArrow") &&
            (c(d).addClass("a-arrow-right"),
            d
              .find(".a-arrow-border")
              .css("top", a.popoverHeight / 2 + e.deltaTop));
          return e;
        },
        triggerLeft: function (b, a) {
          var d = b.$popover,
            e = b.$trigger;
          a || (a = g(d, e));
          e = m(a);
          e.left = a.triggerLeft - a.popoverWidth;
          e.left = 0 < e.left ? e.left : 0;
          b.attrs("popoverArrow") &&
            (c(d).addClass("a-arrow-left"),
            d
              .find(".a-arrow-border")
              .css("top", a.popoverHeight / 2 + e.deltaTop));
          return e;
        },
        triggerTop: function (b, a) {
          var d = b.$popover,
            e = b.$trigger;
          a || (a = g(d, e));
          e = l(a);
          e.top = a.triggerTop - a.popoverHeight;
          b.attrs("popoverArrow") &&
            (c(d).addClass("a-arrow-top"),
            d
              .find(".a-arrow-border")
              .css("left", a.popoverWidth / 2 + e.deltaLeft));
          return e;
        },
        triggerBottom: function (b, a) {
          var d = b.$popover,
            e = b.$trigger;
          a || (a = g(d, e));
          e = l(a);
          e.top = a.triggerBottom;
          b.attrs("popoverArrow") &&
            (c(d).addClass("a-arrow-bottom"),
            d
              .find(".a-arrow-border")
              .css("left", a.popoverWidth / 2 + e.deltaLeft));
          return e;
        },
        triggerHorizontal: function (b, a) {
          var d = b.$popover,
            c = b.$trigger;
          a || (a = g(d, c));
          return a.triggerLeft - a.windowLeft > a.windowRight - a.triggerRight
            ? this.triggerLeft(b, a)
            : this.triggerRight(b, a);
        },
        triggerVertical: function (b, a) {
          var d = b.$popover,
            c = b.$trigger;
          a = a ? a : g(d, c);
          return a.triggerTop - a.windowTop > a.popoverHeight + 20
            ? this.triggerTop(b, a)
            : this.triggerBottom(b, a);
        },
        triggerVerticalAlignLeft: function (b, a) {
          var d = b.$popover,
            e = b.$trigger;
          a || (a = g(d, e));
          e = {};
          var f = 0,
            h = a.windowBottom - a.triggerBottom;
          e.left = a.triggerLeft;
          e.top =
            h > a.popoverHeight
              ? a.triggerBottom + 3
              : a.triggerTop - a.popoverHeight - 3;
          if (20 > e.left) {
            var l = Math.min(20, a.triggerLeft - 20);
            f = e.left - l;
            e.left = l;
          } else
            e.left + a.popoverWidth > a.windowRight - 20 &&
              ((l = Math.min(20, a.windowRight - a.triggerRight + 20)),
              (f = e.left + a.popoverWidth - (a.windowRight - l)),
              (e.left = a.windowRight - l - a.popoverWidth));
          b.attrs("popoverArrow") &&
            (c(d).addClass(
              h > a.popoverHeight ? "a-arrow-bottom" : "a-arrow-top"
            ),
            d.find(".a-arrow-border").css("left", a.triggerWidth / 2 + f));
          return e;
        },
        customPosition: function (b, a) {
          return a.call(this, {
            popover: b,
            $popover: b.$popover,
            $trigger: b.$trigger,
            measure: g,
          });
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-modal-view-base",
    "a-modal-positions",
    "a-popover-accessibility"
  ).register("a-modal-view", function (a, f, g, c) {
    var m = a.$;
    m = m("html").hasClass("a-lt-ie9");
    return a.extend(
      f,
      a.capabilities.touch ||
        a.capabilities.mobile ||
        a.capabilities.tablet ||
        m
        ? g.innerScroll
        : g.modalScroll,
      {
        skin: function (f) {
          var g = f.attrs("id"),
            l = f.attrs("header") || "",
            b = f.attrs("hideHeader") || !1,
            h = f.attrs("footer"),
            e = f.attrs("modeless") || !1,
            d = f.attrs("closeButton"),
            m = f.attrs("closeButtonLabel") || "",
            n = f.attrs("hideHeaderCloseButtonLayout") || "",
            t = f.attrs("popoverLabel") || "",
            v = f.attrs("padding");
          f = f.attrs("ariaDescription");
          f = { id: g, header_str: l, label_str: t, aria_description: f };
          t = c.getDescription(f);
          var u = c.getPopoverLabelHtml(f);
          d =
            '\x3cbutton data-action\x3d"a-popover-close" class\x3d"' +
            (d ? "" : " a-button-close-a11y") +
            " a-button-close a-declarative" +
            (b
              ? d
                ? "top" === n
                  ? " a-modal-close-nohead-top"
                  : " a-button-top-right"
                : " a-button-a11y-top-right"
              : "") +
            '" aria-label\x3d"' +
            m +
            '"\x3e\x3ci class\x3d"a-icon a-icon-close"\x3e\x3c/i\x3e\x3c/button\x3e';
          l =
            !b || u
              ? "\x3cheader" +
                (b ? "" : ' class\x3d"a-popover-header"') +
                "\x3e" +
                (b
                  ? ""
                  : '\x3ch4 class\x3d"a-popover-header-content' +
                    (e ? " a-popover-draggable-handle" : "") +
                    '" id\x3d"a-popover-header-' +
                    g +
                    '"\x3e' +
                    l +
                    "\x3c/h4\x3e") +
                d +
                u +
                "\x3c/header\x3e"
              : d;
          h = h
            ? '\x3cdiv class\x3d"a-popover-footer"\x3e' + h + "\x3c/div\x3e"
            : "";
          v = "none" === v ? " a-padding-none" : "";
          b = a.capabilities.isAndroid ? "" : c.getStartAnchorSimplifiedHtml();
          d = a.capabilities.isAndroid ? "" : c.getEndAnchorHtml(f);
          m = e
            ? ""
            : '\x3cdiv class\x3d"a-modal-scroller a-declarative" data-action\x3d"a-popover-floating-close"\x3e';
          f =
            '\x3cdiv class\x3d"a-popover a-popover-modal a-declarative' +
            (e ? " a-modal-modeless" : " ") +
            '" data-action\x3d"a-popover-a11y" aria-modal\x3d"true" role\x3d"dialog"' +
            c.getAriaLabelledByDescribedby(f) +
            "\x3e";
          return (
            m +
            f +
            b +
            t +
            '\x3cdiv class\x3d"a-popover-wrapper"\x3e' +
            l +
            ('\x3cdiv class\x3d"a-popover-inner' +
              v +
              '" id\x3d"a-popover-content-' +
              g +
              '"\x3e\x3c/div\x3e') +
            h +
            "\x3c/div\x3e" +
            d +
            "\x3c/div\x3e" +
            (e ? "" : "\x3c/div\x3e")
          );
        },
      }
    );
  });
  ("use strict");
  n.when(
    "A",
    "a-popover-lightbox",
    "a-popover-optional-helpers",
    "prv:a-capabilities"
  ).register("a-modal-positions", function (a, f, g, c) {
    function m(b) {
      var a = b.$popover.closest(".a-modal-scroller");
      a.scrollTop(0).css("visibility", "visible");
      a.bind("scroll", function () {
        b.updateChildrenPosition();
      });
    }
    function l() {
      var b = a.viewport();
      2 < b.width / b.height &&
        a.delay(function () {
          document.activeElement.scrollIntoView();
          u.scrollTo(u.pageXOffset, 0);
        }, 0);
    }
    function k(b, a, c) {
      if (0 > b)
        return (
          c({ "padding-right": a + "px", "box-sizing": "content-box" }), !0
        );
      c({ "padding-right": "", "box-sizing": "" });
      return !1;
    }
    function p(b) {
      return function (a) {
        b.css(a);
      };
    }
    var b = a.$,
      h = c.isIE10Plus && a.capabilities.mobile,
      e = 0;
    n.when("prv:skin-vars").execute(function (b) {
      e = b.popover.optionalButtonHeight;
    });
    n.declare("prv:a-model-applyHorizonalScrollStyles", k);
    return {
      innerScroll: {
        positionStrategy: function (d) {
          var m = d.popover,
            n = d.$popover,
            t = d.$trigger,
            v = n.find(".a-popover-inner").css("height", "auto"),
            A = n.closest(".a-modal-scroller"),
            y = {},
            w = a.viewport(!0),
            z = 0.1 * w.height,
            B = 0.05 * w.width;
          w = 0.8 * w.height;
          var x = m.attrs("height");
          m = m.attrs("min-height");
          n.css({ height: x ? x : "", "min-height": m ? m : "" });
          t = d.measure(n, t);
          y.left = (t.windowWidth - t.popoverWidth) / 2;
          k(y.left, B, p(n)) && (y.left = B);
          g.evaluateActualHeight(d, t.popoverHeight, e) > w
            ? ((m =
                n
                  .find(".a-popover-header, .a-modal-close-nohead-top")
                  .outerHeight(!0) || 0),
              (x = n.find(".a-popover-footer").outerHeight(!0) || 0),
              (d = g.getOffsetTopDelta(d, z, e)),
              (w -= d),
              (z += d),
              v.css({ height: w - m - x + "px", "overflow-y": "auto" }),
              n.css({ height: w, "min-height": 0 }),
              (y.top = z))
            : ((y.top = (t.windowHeight - t.popoverHeight) / 2),
              v.css("height", "auto"));
          y.left += t.zoomLeft;
          y.top += t.zoomTop;
          h &&
            (A.css("top", b(u).scrollTop()),
            n.removeClass("a-popover-pan-y").addClass("a-popover-pan-x"),
            (n = b(document).height()),
            (v = b(document).width()),
            b("#" + f.LIGHTBOX_ID).css({
              height: n,
              width: v > t.popoverWidth ? v : t.popoverWidth + B,
            }));
          c.isMetroIEGuess && c.isIETouchCapable && l();
          return y;
        },
        beforeShowMethod: a.constants.NOOP,
        beforeHideMethod: a.constants.NOOP,
      },
      modalScroll: {
        positionStrategy: function (b) {
          var d = b.$popover,
            e = b.$trigger,
            f = d.closest(".a-modal-scroller"),
            g = d.find(".a-popover-inner").css("height", "auto");
          if (d.hasClass("a-popover-modal-fixed-height")) {
            var h = d.find(".a-popover-footer");
            g.css("padding-bottom", h.height() + 15);
          }
          g = {};
          var m = a.viewport(!0),
            n = m.height;
          h = 0.1 * n;
          m = 0.05 * m.width;
          n *= 0.8;
          var u = d.height(),
            x = d.width();
          b = b.measure(d, e);
          g.left = (b.windowWidth - x) / 2;
          g.top = (b.windowHeight - u) / 2;
          k(g.left, m, p(d)) && (g.left = m);
          u > n
            ? f.length
              ? ((g.top = 0),
                d.css({
                  position: "relative",
                  margin:
                    b.zoomTop +
                    h +
                    "px 0 " +
                    h +
                    "px " +
                    (b.zoomLeft + g.left) +
                    "px",
                }),
                (g.left = 0),
                f.css("padding-bottom", "1px"))
              : u > n && (g.top = padding)
            : f.length &&
              (d.css({ position: "absolute", margin: "0px" }),
              f.css("padding-bottom", "0px"));
          g.left += b.zoomLeft;
          g.top += b.zoomTop;
          c.isMetroIEGuess && c.isIETouchCapable && l();
          return g;
        },
        beforeShowMethod: function () {
          m(this);
        },
        beforeHideMethod: function () {
          this.$popover
            .closest(".a-modal-scroller")
            .css("visibility", "hidden")
            .unbind("scroll");
        },
      },
      util: {
        determineMaximumInnerHeight: function (b) {
          var c = b.$popover;
          b = 0.8 * a.viewport().height;
          var d =
            c
              .find(".a-popover-header, .a-modal-close-nohead-top")
              .outerHeight(!0) || 0;
          c = c.find(".a-popover-footer").outerHeight(!0) || 0;
          return b - d - c;
        },
        determineInnerVerticalPadding: function (b) {
          b = b.$popover.find(".a-popover-inner");
          return b.outerHeight() - b.height();
        },
      },
    };
  });
  ("use strict");
  n.when(
    "A",
    "a-popover-base-factory",
    "a-modal-view",
    "a-popover-util",
    "prv:a-capabilities"
  ).register("a-modal-factory", function (a, f, g, c, m) {
    function l(b, h) {
      var e = !1,
        d = !1;
      a.capabilities.mobile ||
        a.capabilities.tablet ||
        ((e = c.getBool(h.modeless)), (d = c.getBool(h.draggable)));
      h = {
        modeless: e,
        draggable: d,
        type: "modal",
        alone: !0,
        immersive: !0,
        position: "windowCenter",
        header: h.header,
        hideHeader: h.hideHeader,
        footer: h.footer,
        padding: h.padding,
        width: h.width,
        height: h.height,
        "max-width": h["max-width"],
        "max-height": h["max-height"],
        "min-width": h["min-width"],
        "min-height": h["min-height"],
        closeButton: c.getBool(h.closeButton, !0),
        timeout: h.timeout,
        lightboxOptions: e
          ? x
          : { lockScroll: !0, showDuration: k || p ? 0 : null },
        data: h.data || {},
        dataStrategy: h.dataStrategy,
        url: h.url,
        manualRefresh: !!h.manualRefresh,
        ajaxFailMsg: h.ajaxFailMsg,
        cache: c.getBool(h.cache, !0),
        inlineContent: h.inlineContent ? h.inlineContent : h.content,
        name: h.name,
        closeButtonLabel: h.closeButtonLabel ? h.closeButtonLabel : "Close",
        hideHeaderCloseButtonLayout: h.hideHeaderCloseButtonLayout,
        popoverLabel: h.popoverLabel,
        ariaDescription: h.ariaDescription,
        ajaxHeaders: h.ajaxHeaders,
        withCredentials: c.getBool(h.withCredentials, !1),
        legacyNavigable: c.getBool(h.legacyNavigable, !0),
      };
      return f.create(b, {
        attributes: h,
        typeSpecificFunctions: g,
        actionCheck: !0,
      });
    }
    var k = -1 < document.documentElement.className.indexOf("a-lt-ie9"),
      p = a.capabilities.mobile && m.isIE10Plus;
    return {
      type: "modal",
      create: l,
      get: function (b) {
        var a = f.get(b, "modal");
        a ||
          "object" !== typeof b ||
          ((b = c.extractDeclarativeParams(b, "modal")) &&
            (a = l(b.$trigger, b.attributes || {})));
        return a;
      },
      remove: function (b) {
        return f.remove(b, "modal");
      },
    };
  });
  ("use strict");
  n.when("A", "a-modal-factory", "a-popover-base", "a-modal-handlers").register(
    "a-modal",
    function (a, f) {
      return f;
    }
  );
  ("use strict");
  n.when("A", "a-popover-util", "a-popover-animate").register(
    "a-popover-view-base",
    function (a, f, g) {
      return {
        setAriaBusy: function (a) {
          this.$popover.find(".a-popover-wrapper").attr("aria-busy", a);
        },
        updateContent: function (a) {
          "string" === typeof a
            ? this.$popover.find(".a-popover-content").html(a)
            : a && this.$popover.find(".a-popover-content").html("").append(a);
        },
        updateDimensions: function () {
          this.$popover.css(f.getCSSHash(this.attrs()));
          this.isActive() && this.updatePosition();
          return this;
        },
        getContent: function () {
          return this.$popover
            ? this.$popover.find(".a-popover-content")
            : null;
        },
        hideMethod: function (a) {
          var c = this;
          g.fadeOut(c, 250, "linear", function () {
            c.$popover.css({ top: "auto", left: "auto" });
            a.call(c);
          });
        },
      };
    }
  );
  n.when("a-util").register("a-popover-optional-helpers", function (a) {
    return {
      getOffsetTopDelta: function (f, g, c) {
        c = parseFloat(c);
        var m = a.isFiniteNumber(c) && 0 < c;
        f =
          f.$popover.find(".a-button-close").length &&
          !f.$popover.find(".a-button-close-a11y").length;
        return m && f && 0 > g - c ? c - g : 0;
      },
      evaluateActualHeight: function (a, g, c) {
        return a.$popover.find(".a-button-close").length &&
          !a.$popover.find(".a-button-close-a11y").length
          ? g + c
          : g;
      },
    };
  });
  ("use strict");
  n.when(
    "A",
    "a-popover-view-base",
    "a-popover-util",
    "a-popover-accessibility"
  ).register("a-popover-view", function (a, f, g, c) {
    var m = !0;
    n.when("prv:skin-vars").execute(function (a) {
      m = a.popover.closeButtonEnabled;
    });
    return a.extend(f, {
      skin: function (f) {
        var g = f.attrs("id"),
          l = f.attrs("header"),
          b = m && f.attrs("closeButton"),
          h = f.attrs("closeButtonLabel") || "",
          e = f.attrs("popoverLabel") || "",
          d = f.attrs("ariaDescription"),
          n = f.attrs("padding");
        f = f.attrs("popoverArrow");
        d = { id: g, header_str: l, label_str: e, aria_description: d };
        a.capabilities.isAndroid && (h = (e || l) + " " + h);
        b =
          '\x3cbutton data-action\x3d"a-popover-close" class\x3d"a-button-close ' +
          (b ? "" : "a-button-close-a11y") +
          ' a-declarative" aria-label\x3d"' +
          h +
          '"\x3e\x3ci class\x3d"a-icon a-icon-close"\x3e\x3c/i\x3e\x3c/button\x3e';
        var r = (h = !!l) ? "a-popover-has-header" : "a-popover-no-header";
        n = "none" === n ? " a-padding-none" : "";
        f = f
          ? '\x3cdiv class\x3d"a-arrow-border"\x3e\x3cdiv class\x3d"a-arrow"\x3e\x3c/div\x3e\x3c/div\x3e'
          : "";
        e = a.capabilities.isAndroid ? "" : c.getStartAnchorSimplifiedHtml();
        var t = a.capabilities.isAndroid ? "" : c.getEndAnchorHtml(d);
        l = l
          ? '\x3ch4 class\x3d"a-popover-header-content" id\x3d"a-popover-header-' +
            g +
            '"\x3e' +
            l +
            "\x3c/h4\x3e"
          : "";
        r =
          '\x3cdiv class\x3d"a-popover ' +
          r +
          ' a-declarative" data-action\x3d"a-popover-container a-popover-a11y" aria-modal\x3d"true" role\x3d"dialog"' +
          c.getAriaLabelledByDescribedby(d) +
          "\x3e";
        var u = c.getDescription(d);
        d = c.getPopoverLabelHtml(d);
        return (
          r +
          e +
          u +
          '\x3cdiv class\x3d"a-popover-wrapper"\x3e' +
          (h
            ? '\x3cheader class\x3d"a-popover-header"\x3e' +
              l +
              b +
              d +
              "\x3c/header\x3e"
            : "") +
          ('\x3cdiv class\x3d"a-popover-inner' + n + '"\x3e') +
          (h ? "" : d ? "\x3cheader\x3e" + b + d + "\x3c/header\x3e" : b) +
          ('\x3cdiv class\x3d"a-popover-content" id\x3d"a-popover-content-' +
            g +
            '"\x3e\x3c/div\x3e') +
          "\x3c/div\x3e" +
          f +
          "\x3c/div\x3e" +
          t +
          "\x3c/div\x3e"
        );
      },
    });
  });
  ("use strict");
  n.when(
    "A",
    "a-popover-base-factory",
    "a-popover-view",
    "a-popover-util"
  ).register("a-popover-factory", function (a, f, g, c) {
    function m(a, k) {
      k = {
        type: "popover",
        alone: !0,
        header: k.header,
        width: k.width,
        height: k.height,
        "max-width": k["max-width"],
        "max-height": k["max-height"],
        "min-width": k["min-width"],
        "min-height": k["min-height"],
        padding: k.padding,
        closeButton: c.getBool(k.closeButton, !0),
        position: k.position || "triggerVertical",
        activate: k.activate || "onmouseover",
        timeout: k.timeout,
        data: k.data || {},
        dataStrategy: k.dataStrategy,
        url: k.url,
        manualRefresh: !!k.manualRefresh,
        ajaxFailMsg: k.ajaxFailMsg,
        cache: c.getBool(k.cache, !0),
        inlineContent: k.inlineContent ? k.inlineContent : k.content,
        name: k.name,
        closeButtonLabel: k.closeButtonLabel ? k.closeButtonLabel : "Close",
        popoverLabel: k.popoverLabel,
        ariaDescription: k.ariaDescription,
        focusWhenShown: c.getBool(k.focusWhenShown, !0),
        popoverArrow: c.getBool(k.popoverArrow, !0),
        restoreFocusOnHide: c.getBool(k.restoreFocusOnHide, !0),
      };
      return f.create(a, {
        attributes: k,
        typeSpecificFunctions: g,
        actionCheck: !0,
      });
    }
    return {
      type: "popover",
      create: m,
      get: function (a) {
        var g = f.get(a, "popover");
        g ||
          "object" !== typeof a ||
          ((a = c.extractDeclarativeParams(a, "popover")) &&
            (g = m(a.$trigger, a.attributes || {})));
        return g;
      },
      remove: function (a) {
        return f.remove(a, "popover");
      },
    };
  });
  ("use strict");
  n.when("A", "a-popover-factory").register(
    "a-popover-handlers",
    function (a, f) {
      function g(b) {
        b &&
          !b.destroyTimer &&
          (b.destroyTimer = a.delay(function () {
            b.hide();
          }, 250));
      }
      function c(b) {
        b &&
          (clearTimeout(b.destroyTimer),
          (b.destroyTimer = null),
          clearTimeout(b.parent.destroyTimer),
          (b.parent.destroyTimer = null));
      }
      var m = a.$,
        l = {},
        k =
          !(a.capabilities.mobile || a.capabilities.tablet) &&
          a.capabilities.ios;
      a.declarative("a-popover", "click", function (b) {
        var a = f.get(b.$declarativeParent);
        a && (a.show(), b.$event.preventDefault());
      });
      a.declarative("a-popover", "keydown", function (b) {
        var c = a.constants.keycodes,
          e = b.$event.which;
        if (e === c.ENTER || e === c.SPACE)
          b.$event.preventDefault(), f.get(b.$declarativeParent).show();
      });
      if (!k) {
        var n;
        a.declarative("a-popover", "mouseenter", function (b) {
          var g = f.get(b.$declarativeParent);
          g &&
            "onmouseover" === g.attrs("activate") &&
            (c(g),
            (n = a.delay(function () {
              (g = f.get(b.$declarativeParent)) &&
                l.popover === g &&
                1 < l.mouseMoveCount &&
                g.show();
            }, 200)));
        });
        a.declarative("a-popover", "mousemove", function (b) {
          var c = f.get(b.$declarativeParent);
          l || (l = {});
          l.popover === c
            ? (l.mouseMoveCount || (l.mouseMoveCount = 0),
              l.lastXY &&
                (l.lastXY.x !== b.$event.clientX ||
                  l.lastXY.y !== b.$event.clientY) &&
                l.mouseMoveCount++)
            : ((l.popover = c),
              (l.mouseMoveCount = 1),
              (l.lastXY = { x: b.$event.clientX, y: b.$event.clientY }));
          2 > a.cursor().speed &&
            c &&
            "onmouseover" === c.attrs("activate") &&
            l.popover === c &&
            1 < l.mouseMoveCount &&
            c.show();
        });
        a.declarative("a-popover", "mouseleave", function (b) {
          (b = f.get(b.$declarativeParent)) &&
            "onmouseover" === b.attrs("activate") &&
            (g(b), n && clearTimeout(n));
          l = {};
        });
        a.declarative("a-popover-container", "mouseenter", function (b) {
          (b = f.get(b.$declarativeParent)) &&
            "onmouseover" === b.attrs("activate") &&
            c(b);
        });
        a.declarative("a-popover-container", "mouseleave", function (b) {
          var c = f.get(b.$declarativeParent),
            e = !0,
            d = m(b.$event.relatedTarget);
          c &&
            "onmouseover" === c.attrs("activate") &&
            c.isActive() &&
            (a.each(c.children, function (b) {
              if (d.closest(b.$popover).length) return (e = !1);
            }),
            e &&
              (g(c),
              c.parent.immersive ||
                0 !== d.closest(c.parent.$popover).length ||
                g(c.parent)));
        });
      }
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-popover-factory",
    "a-popover-base",
    "a-popover-handlers"
  ).register("a-popover", function (a, f) {
    return f;
  });
  ("use strict");
  n.when(
    "A",
    "a-popover-base-factory",
    "a-secondary-view-view",
    "a-popover-util"
  ).register("a-secondary-view-factory", function (a, f, g, c) {
    function m(l, b) {
      b.disableAnimation = b.disableAnimation || a.capabilities.isOldAndroid;
      b = {
        type: "secondary-view",
        immersive: !0,
        disableAnimation: k || b.disableAnimation,
        synchronous: !!(k || (b.synchronous && "false" !== b.synchronous)),
        animationLength: b.disableAnimation ? 0 : 300,
        alternateBackground: b.alternateBackground || !1,
        hideHeader: k || b.hideHeader || !1,
        scrollable: b.scrollable || !0,
        header: b.header,
        backButtonText: b.backButtonText,
        position: "windowFullWidth",
        timeout: b.timeout,
        dataStrategy: b.dataStrategy,
        inlineContent: b.inlineContent ? b.inlineContent : b.content,
        url: b.url,
        manualRefresh: !!b.manualRefresh,
        name: b.name,
        cache: "false" === b.cache || !1 === b.cache ? !1 : !0,
        data: b.data || {},
        popoverLabel: b.popoverLabel,
        padding: b.padding,
        ariaDescription: b.ariaDescription,
        historyApi: "true" === b.historyApi || !0 === b.historyApi,
        withCredentials: c.getBool(b.withCredentials, !1),
        ajaxFailMsg: b.ajaxFailMsg,
      };
      return f.create(l, {
        attributes: b,
        typeSpecificFunctions: g,
        actionCheck: !0,
      });
    }
    var l = a.$,
      k = !1;
    n.when("mash-will-load").execute(function () {
      k = !0;
    });
    return {
      type: "secondary-view",
      create: m,
      get: function (a) {
        var b = f.get(a, "secondary-view");
        if (!b && "object" === typeof a) {
          var g = c.extractDeclarativeParams(a, "secondary-view");
          g && (b = m(g.$trigger, g.attributes || {}));
        }
        b &&
          "object" === typeof a &&
          ((a = l(a)),
          (a = (a = a.hasClass("a-declarative")
            ? a
            : a.find(".a-declarative").eq(0))
            ? a.data("a-secondary-view")
            : null),
          (b.data = a.data));
        return b;
      },
      remove: function (a) {
        return f.remove(a, "secondary-view");
      },
    };
  });
  ("use strict");
  n.when(
    "A",
    "a-secondary-view-factory",
    "a-popover-base",
    "a-secondary-view-handlers"
  ).register("a-secondary-view", function (a, f) {
    return f;
  });
  ("use strict");
  n.when("A", "a-popover-animate").register(
    "a-tooltip-view-base",
    function (a, f) {
      return {
        updateContent: function (a) {
          this.$popover.find(".a-tooltip-inner").html(a);
        },
        getContent: function () {
          return this.$popover ? this.$popover.find(".a-tooltip-inner") : null;
        },
        hideMethod: function (a) {
          var c = this;
          f.fadeOut(c, 250, "linear", function () {
            a.call(c);
          });
        },
      };
    }
  );
  ("use strict");
  n.when("A", "a-tooltip-view-base").register(
    "a-tooltip-view",
    function (a, f) {
      return a.extend(f, {
        skin: function (a) {
          return [
            '\x3cdiv role\x3d"tooltip" class\x3d"a-popover a-tooltip a-declarative" data-action\x3d"a-popover-close"\x3e\x3cdiv class\x3d"a-tooltip-inner"\x3e\x3c/div\x3e',
            a.attrs("popoverArrow")
              ? '\x3cdiv class\x3d"a-arrow-border"\x3e\x3cdiv class\x3d"a-arrow"\x3e\x3c/div\x3e\x3c/div\x3e'
              : "",
            "\x3c/div\x3e",
          ].join("");
        },
      });
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-popover-base-factory",
    "a-tooltip-view",
    "a-popover-util"
  ).register("a-tooltip-factory", function (a, f, g, c) {
    function m(a, k) {
      k = {
        type: "tooltip",
        name: k.name,
        inlineContent: k.inlineContent ? k.inlineContent : k.content,
        position: k.position || "triggerVertical",
        activate: k.activate || "onmouseover",
        popoverArrow: c.getBool(k.popoverArrow, !0),
        restoreFocusOnHide: !1,
      };
      k = f.create(a, {
        attributes: k,
        typeSpecificFunctions: g,
        actionCheck: !0,
      });
      a.add(a.children())
        .filter("a, input")
        .attr("aria-describedby", "a-popover-" + a.data("a-popover-id"));
      return k;
    }
    return {
      type: "tooltip",
      create: m,
      get: function (a) {
        var g = f.get(a, "tooltip");
        g ||
          "object" !== typeof a ||
          ((a = c.extractDeclarativeParams(a, "tooltip")) &&
            (g = m(a.$trigger, a.attributes || {})));
        return g;
      },
      remove: function (a) {
        return f.remove(a, "tooltip");
      },
    };
  });
  ("use strict");
  n.when("A", "a-tooltip-factory").register(
    "a-tooltip-handlers",
    function (a, f) {
      a.declarative("a-tooltip", "click", function (a) {
        var c = f.get(a.$declarativeParent);
        c &&
          "onclick" === c.attrs("activate") &&
          (c.show(), a.$event.preventDefault());
      });
      a.declarative("a-tooltip", "mouseenter", function (a) {
        (a = f.get(a.$declarativeParent)) &&
          "onmouseover" === a.attrs("activate") &&
          (a.show(),
          a.destroyTimer &&
            (clearTimeout(a.destroyTimer), (a.destroyTimer = null)));
      });
      a.declarative("a-tooltip", "mouseleave", function (g) {
        var c = f.get(g.$declarativeParent);
        c &&
          "onmouseover" === c.attrs("activate") &&
          (c.destroyTimer = a.delay(function () {
            c.hide();
          }, 125));
      });
      a.declarative("a-tooltip", "focus focusin", function (a) {
        (a = f.get(a.$declarativeParent)) && a.show();
      });
      a.declarative("a-tooltip", "blur focusout", function (a) {
        (a = f.get(a.$declarativeParent)) && a.hide();
      });
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-tooltip-factory",
    "a-popover-base",
    "a-tooltip-handlers"
  ).register("a-tooltip", function (a, f) {
    return f;
  });
});
/* ******** */
(function (d) {
  var f = window.AmazonUIPageJS || window.P,
    c = f._namespace || f.attributeErrors,
    e = c ? c("AmazonUIPopover@modal", "AmazonUI") : f;
  e.guardFatal
    ? e.guardFatal(d)(e, window)
    : e.execute(function () {
        d(e, window);
      });
})(function (d, f, c) {
  d.when("A", "a-popover-util", "a-popover-animate").register(
    "a-modal-view-base",
    function (e, d, f) {
      var c = e.$,
        g = c("html").hasClass("a-lt-ie9");
      return {
        setAriaBusy: function (b) {
          this.$popover.find(".a-popover-wrapper").attr("aria-busy", b);
        },
        updateContent: function (b) {
          "string" === typeof b
            ? this.$popover.find(".a-popover-inner").html(b)
            : b && this.$popover.find(".a-popover-inner").html("").append(b);
        },
        updateDimensions: function () {
          var b = this.$popover,
            a = d.getCSSHash(this.attrs());
          !this.draggable ||
            (a.width && "auto" !== a.width) ||
            (a.width = b.width() + "px");
          b.css(a);
          a.height
            ? b.addClass("a-popover-modal-fixed-height")
            : b.removeClass("a-popover-modal-fixed-height");
          this.isActive() && this.updatePosition();
          return this;
        },
        getContent: function () {
          return this.$popover ? this.$popover.find(".a-popover-inner") : null;
        },
        showMethod: function (b) {
          var a = this,
            c = a.$popover;
          c.css({ visibility: "visible" }).removeClass("a-popover-hidden");
          g || "ajax" === a.attrs("currentDataStrategy")
            ? b.call(a)
            : (c.css({ opacity: 0, transform: "translateY(8px)" }),
              f.animate(
                a,
                { opacity: 1, transform: "translateY(0)" },
                200,
                "linear",
                function () {
                  b.call(a);
                }
              ));
          e.animationFrameDelay(function () {
            a.focus();
          });
          a.attrs("legacyNavigable") && d.trigger("showNavigableLegacy", a);
        },
        hideMethod: function (b) {
          var a = this,
            c = a.$popover;
          g
            ? (c
                .hide()
                .css("visibility", "hidden")
                .find(".a-lgtbox-vertical-scroll")
                .removeClass("a-lgtbox-vertical-scroll"),
              b.call(a))
            : f.animate(
                a,
                { opacity: 0, transform: "translateY(8px)" },
                100,
                "linear",
                function () {
                  c.hide().css({ visibility: "hidden", opacity: 1 });
                  b.call(a);
                }
              );
          a.attrs("legacyNavigable") && d.trigger("hideNavigableLegacy", a);
        },
      };
    }
  );
});
/* ******** */
(function (n) {
  var r = window.AmazonUIPageJS || window.P,
    w = r._namespace || r.attributeErrors,
    a = w ? w("AmazonUIPopover@ready", "AmazonUI") : r;
  a.guardFatal
    ? a.guardFatal(n)(a, window)
    : a.execute(function () {
        n(a, window);
      });
})(function (n, r, w) {
  n.when("A", "a-popover-util").register(
    "a-popover-ajax-strategy",
    function (a, g) {
      return {
        name: "ajax",
        reusePopover: !1,
        loadContent: function (b, m) {
          b.setContentLoading();
          var d = b.attrs("url"),
            f = b.attrs("ajaxHeaders") || {},
            e = b.attrs("withCredentials") || !1,
            k = b.attrs("timeout") || 1e4,
            h = b.attrs("ajaxFailMsg") || g.defaultContentFailureMessage,
            p = !!b.attrs("cache"),
            q = b.attrs("spinnerTimer"),
            c = b.attrs("ajaxHandler"),
            z = b.attrs("content");
          b.attrs("content", null);
          if (z && !m)
            b.updateContent(z), q && clearTimeout(q), c && c.abort && c.abort();
          else {
            q = a.delay(function () {
              g.shouldPopoverUpdateContent(b, "ajax") &&
                (g.showSpinner(b), b.setAriaBusy(!0));
            }, 100);
            var l = function (c, d, l) {
              g.shouldPopoverUpdateContent(b, "ajax") &&
                (clearTimeout(q),
                b.setContentLoaded(),
                g.trigger(d, b),
                b.setAriaBusy(!1),
                b.update({ content: c }),
                b.isActive() && b.updatePosition(),
                l && g.trigger("ajaxContentLoaded", b));
            };
            c = a.ajax(d, {
              type: "GET",
              timeout: k,
              cache: p,
              headers: f,
              withCredentials: e,
              success: function (c) {
                l(c, "ajaxSuccess", !0);
              },
              error: function () {
                l(h, "ajaxFail", !1);
              },
            });
            b.attrs({ spinnerTimer: q, ajaxHandler: c });
          }
          return this;
        },
        unloadContent: function (b) {
          g.clearContent(b);
          return this;
        },
        shouldRefreshContent: function (b) {
          return !b.attrs("manualRefresh");
        },
        isValidStrategy: function (b) {
          return !!b.url;
        },
      };
    }
  );
  ("use strict");
  n.when("A", "a-popover-util").register(
    "a-popover-inline-strategy",
    function (a, g) {
      return {
        name: "inline",
        reusePopover: !1,
        loadContent: function (b) {
          b.setContentLoading();
          var a = b.attrs("content");
          a && b.attrs("content", null);
          if (!a) {
            a = b.$trigger;
            var d = a.data("action");
            a = a.data(d) || {};
            a = a.inlineContent ? a.inlineContent : null;
          }
          a || (a = b.attrs("inlineContent"));
          b.updateContent(a);
          b.setContentLoaded();
          return this;
        },
        unloadContent: function (b) {
          var a = b.getContent();
          a = a && 0 < a.length ? a.html() : b.attrs("inlineContent");
          var d = b.$trigger,
            f = d.data("action"),
            e = d.data(f) || {};
          e.inlineContent = a;
          d.data(f, e);
          g.clearContent(b);
          return this;
        },
        shouldRefreshContent: function (a) {
          return a.isDirty();
        },
        isValidStrategy: function (a) {
          return !!a.inlineContent;
        },
      };
    }
  );
  ("use strict");
  n.when("A", "a-popover-util", "a-dom-poller", "a-analytics").register(
    "a-popover-preload-strategy",
    function (a, g, b, m) {
      function d(c) {
        return "a-popover-" + c;
      }
      function f(c) {
        c = q("#" + d(c));
        return c.length ? c : p;
      }
      function e(c) {
        if ((c = f(c))) {
          c.detach();
          c = c[0];
          for (var a = document.createDocumentFragment(); c.firstChild; )
            a.appendChild(c.firstChild);
          return a;
        }
        return !1;
      }
      function k(c, a) {
        c.updateContent(a);
        c.setContentLoaded();
        c.setAriaBusy(!1);
        g.trigger("contentReady", c);
      }
      function h(c, a) {
        g.showSpinner(c);
        c.setAriaBusy(!0);
        b.waitFor(
          "#" + d(a),
          function () {
            if (g.shouldPopoverUpdateContent(c, "preload")) {
              var d = e(a);
              k(c, d);
              c.isActive() && c.updatePosition();
            }
          },
          function () {
            m.logError(
              "Failed to find preloaded content for popover.",
              "FATAL",
              "Popover: " + a
            );
            var d = { content: g.defaultContentFailureMessage };
            g.shouldPopoverUpdateContent(c, "preload")
              ? (c.updateContent(g.defaultContentFailureMessage),
                c.setContentLoaded(),
                c.setAriaBusy(!1),
                c.isActive() && c.updatePosition(),
                (d.seenByUser = !0))
              : (d.seenByUser = !1);
            c.attrs("temporaryError", d);
          }
        );
      }
      var p,
        q = a.$;
      return {
        name: "preload",
        reusePopover: !0,
        loadContent: function (c) {
          c.setContentLoading();
          var a = c.attrs("name"),
            l = c.attrs("content");
          c.attrs("content", null);
          var f = c.attrs("temporaryError");
          if (f)
            if (!f.seenByUser) {
              var p = f.content;
              f.seenByUser = !0;
            } else if (f.seenByUser)
              return c.attrs("temporaryError", null), h(c, a), this;
          f = e(a);
          l || p
            ? (c.updateContent(l || p),
              c.setContentLoaded(),
              b.stopPollingSelector("#" + d(a)))
            : a
            ? f
              ? (k(c, f), b.stopPollingSelector("#" + d(a)))
              : b.isPollingSelector("#" + d(a))
              ? g.showSpinner(c)
              : h(c, a)
            : c.setContentLoaded();
          return this;
        },
        unloadContent: function (c) {
          var e = c.attrs("name");
          if (
            e &&
            !b.isPollingSelector("#" + d(e)) &&
            !c.attrs("temporaryError")
          ) {
            var l = c.getContent();
            if (l && l.html()) {
              var h = f(e);
              h
                ? (h = h[0])
                : ((h = document.createElement("div")),
                  (h.id = d(e)),
                  (h.className = "a-popover-preload"),
                  document.body.appendChild(h));
              e = h;
              if (!a.trim(e.innerHTML))
                if (((l = l[0]), "string" === typeof l)) q(e).html(l);
                else {
                  for (h = document.createDocumentFragment(); l.firstChild; )
                    h.appendChild(l.firstChild);
                  e.appendChild(h);
                }
              g.clearContent(c);
            }
          }
          return this;
        },
        shouldRefreshContent: function (a) {
          var c = a.attrs("name"),
            e = f(c);
          return (
            !(!e || "" === e.html()) ||
            a.attrs("temporaryError") ||
            b.isPollingSelector("#" + d(c))
          );
        },
        isValidStrategy: function (a) {
          return !!a.name;
        },
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-dropdown-base",
    "a-dropdown-view",
    "a-dropdown-options",
    "a-dropdown-apis",
    "a-dropdown-base-factory",
    "a-dropdown-keyboard-handlers"
  ).register("a-dropdown-handlers", function (a, g, b, m, d, f, e) {
    var k = a.$;
    d = k(document);
    a.declarative("a-dropdown-button", "click", function (a) {
      m.getSelectFromButton(a.$target).trigger("click");
    });
    d.delegate("select.a-native-dropdown", "keydown", function (d) {
      var e = a.constants.keycodes,
        f = d.which,
        c = k(d.target).nextAll(".a-button-dropdown").eq(0);
      if (
        a.onScreen(c) &&
        (f === e.UP_ARROW ||
          f === e.DOWN_ARROW ||
          f === e.ENTER ||
          f === e.SPACE)
      ) {
        var h = k(d.target);
        h.prop("disabled", !0);
        a.delay(function () {
          h.prop("disabled", !1);
        }, 0);
        d.preventDefault ? d.preventDefault() : (d.returnValue = !1);
        g.showDropdown(d, a.extend({ $button: c }, m), b);
      }
    });
    d.delegate("select.a-native-dropdown", "click", function (d) {
      d.preventDefault ? d.preventDefault() : (d.returnValue = !1);
      var e = k(d.target).nextAll(".a-button-dropdown").eq(0);
      a.onScreen(e) && g.showDropdown(d, a.extend({ $button: e }, m), b);
    });
    d.delegate(".a-popover.a-dropdown a", "click", function (a) {
      a.preventDefault();
      a = k(this);
      var d = f.get(a.closest(".a-popover")),
        b = !d.sourceButton.find(".a-dropdown-prompt").text();
      !a.hasClass("a-active") || b
        ? ((b = a.data("value").stringVal),
          d.sourceSelect.val(b).trigger("change", [a]))
        : d.hide();
    });
    e &&
      (e.keyDown && d.delegate(".a-dropdown li", "keydown", e.keyDown),
      e.keyPress && d.delegate(".a-dropdown li", "keypress", e.keyPress));
  });
  ("use strict");
  n.when(
    "A",
    "a-popover-util",
    "a-popover-inline-strategy",
    "a-popover-preload-strategy",
    "a-popover-ajax-strategy",
    "a-analytics",
    "a-util"
  ).register("a-popover-data", function (a, g, b, m, d, f, e) {
    var k = [d, b, m];
    return {
      guessStrategyByAttrs: function (a) {
        for (var d = 0, b = k.length; d < b; d++) {
          var c = k[d];
          if (c.isValidStrategy(a)) return c;
        }
        d = "NO-ATTRIBUTION-INFO";
        a &&
          a.$trigger &&
          a.$trigger.get(0) &&
          (d = e.attributionChain(a.$trigger.get(0)));
      },
      getStrategyByName: function (a) {
        for (var d = 0, b = k.length; d < b; d++) {
          var c = k[d];
          if (c.name === a) return c;
        }
        return null;
      },
      showSpinner: g.showSpinner,
    };
  });
  n.when("A", "a-analytics", "a-util").register(
    "a-dom-poller",
    function (a, g, b) {
      function m() {
        var a = Array.prototype.slice.call(arguments);
        return b.reduce(
          a,
          function (a, d) {
            return a || q === d;
          },
          !1
        );
      }
      function d(a) {
        a.callbackCalled = !0;
        a = c.indexOf(a);
        0 <= a && c.splice(a, 1);
      }
      function f(c, b) {
        a.defer(function () {
          c.callbackCalled || c.failureCallback(b);
          d(c);
        });
      }
      function e(c) {
        a.defer(function () {
          c.callbackCalled || c.successCallback();
          d(c);
        });
      }
      function k(a) {
        return b.reduce(
          c,
          function (d, c) {
            return d || c.selector === a;
          },
          !1
        );
      }
      function h() {
        if (c.length) {
          q = p.POLLING;
          setTimeout(h, 1e3);
          for (var a = c.length; a--; ) {
            var d = c[a];
            document.querySelector(d.selector)
              ? e(d)
              : r &&
                5e3 < Date.now() - d.startTime &&
                f(d, "Content not found in time.");
          }
        } else q = p.PAUSED;
      }
      var p = {
          NOT_STARTED: "NOT_STARTED",
          POLLING: "POLLING",
          PAUSED: "PAUSED",
        },
        q = p.NOT_STARTED,
        c = [],
        r = !1;
      n.when("ready").execute(function () {
        r = !0;
      });
      return {
        waitFor: function (a, d, b) {
          k(a)
            ? g.logError(
                "Tried to poll for DOM selector (" +
                  a +
                  ") that is already being polled for.",
                "WARN",
                "AUI DomPoller: " + a
              )
            : ((a = {
                selector: a,
                successCallback: d,
                failureCallback: b,
                callbackCalled: !1,
                startTime: Date.now(),
              }),
              c.unshift(a),
              m(p.NOT_STARTED, p.PAUSED) && h());
        },
        stopPollingSelector: function (a) {
          b.filter(c, function (d) {
            return d.selector === a;
          }).forEach(function (a) {
            d(a);
          });
        },
        isPollingSelector: k,
      };
    }
  );
  ("use strict");
  n.when(
    "A",
    "a-popover-lightbox-markup",
    "prv:a-capabilities",
    "a-bodyBegin"
  ).register("a-popover-lightbox", function (a, g, b) {
    function m(a) {
      a.preventDefault();
      a.stopPropagation();
      a.stopImmediatePropagation();
      return !1;
    }
    function d() {
      w.unbind("click", m);
      l = !1;
    }
    function f(c) {
      var b = e(r);
      -1 < x ||
        !t ||
        ((c = c || {}),
        w.bind("click", m),
        (l = !0),
        "number" !== typeof c.hideDuration && (c.hideDuration = 250),
        0 < c.hideDuration
          ? a.fadeOut(t, c.duration, "linear", function () {
              c.lockScroll &&
                (e("html, body").css("overflow", ""),
                e("body").css("margin-right", ""),
                a.delay(function () {
                  0 < u && (b.scrollTop(u), (u = -1));
                  0 < y && (b.scrollLeft(y), (y = -1));
                }, 100));
              v = null;
            })
          : (t.css("display", "none"),
            c.lockScroll &&
              (e("html, body").css("overflow", ""),
              e("body").css("margin-right", ""),
              0 < u && (b.scrollTop(u), (u = -1))),
            (v = null)),
        t.css({ height: "", width: "" }),
        a.delay(d, c.hideDuration + 350),
        e("#a-page").removeAttr("aria-hidden"));
    }
    var e = a.$,
      k = -1 < document.documentElement.className.indexOf("-ie"),
      h = b.isIE10Plus && a.capabilities.mobile,
      p = 0 === (a.capabilities.androidVersion + "").indexOf("4."),
      q = b.isUCBrowser,
      c = g.id,
      n = g.div,
      l = !1,
      w = e("body"),
      t = null,
      x = -1,
      u = -1,
      y = -1,
      v = null;
    e(document).delegate(
      "#" + c,
      "click " + a.action.start + " " + a.action.move,
      function (a) {
        a.preventDefault();
      }
    );
    a.declarative(
      "a-popover-floating-close",
      a.capabilities.touch ? a.action.end : "click",
      function (a) {
        !l &&
          a.$target.data("action") &&
          -1 < a.$target.data("action").indexOf("a-popover-floating-close") &&
          (v && v.isActive()
            ? (v.unlock().hide(), a.$event.preventDefault())
            : f());
      }
    );
    if (b.isiOS8)
      a.on("a:popover:afterUpdatePosition", function (a) {
        a = a.popover;
        var d = e("#" + c),
          b = d.length ? d.offset().top : -1,
          f = e(r);
        if (a.isActive() && a.attrs("lightboxOptions") && b) {
          var g = 0;
          var k = setInterval(function () {
            f.scrollTop(b);
            5 < ++g && clearInterval(k);
          }, 200);
        }
      });
    return {
      show: function (b) {
        e("#a-page").attr("aria-hidden", "true");
        var f = e(r);
        t || (e("body").append(n), (t = e("#" + c)));
        b = b || {};
        w.bind("click", m);
        l = !0;
        b.lockScroll &&
          (-1 === u && ((u = f.scrollTop()), (y = f.scrollLeft())),
          a.setCssImportant(
            e("body"),
            "margin-right",
            a.scrollBarWidth() + "px"
          ),
          h ||
            (k
              ? e("html, body").css("overflow", "hidden")
              : e("body").css("overflow", "hidden")));
        var g = (v = b.popover || null) ? v.$popover.css("z-index") - 2 : -1;
        0 < g && (t.css("z-index", g), p && f.width());
        "number" !== typeof b.showDuration && (b.showDuration = 200);
        q && v.$popover.css("overflow", "auto");
        0 < b.showDuration
          ? a.fadeIn(t, b.showDuration)
          : t.css("display", "block");
        a.delay(d, b.showDuration + 300);
      },
      hide: f,
      lock: function (a) {
        a || (a = 10);
        x < a && (x = a);
      },
      unlock: function (a) {
        a || (a = 10);
        x <= a && (x = -1);
      },
      LIGHTBOX_ID: c,
    };
  });
  ("use strict");
  n.when("A").register("a-popover-util", function (a) {
    function g(a, b) {
      for (var d = a.children.length; d--; ) {
        var f = g(a.children[d], b);
        if (f) return f;
      }
      if (b(a)) return a;
    }
    var b = a.$,
      m = /^-?\d+(?:\.\d+)?$/;
    return {
      trigger: function (d, b) {
        a.trigger("a:popover:" + d, { popover: b });
        b.name && a.trigger("a:popover:" + d + ":" + b.name, { popover: b });
      },
      extractDeclarativeParams: function (d, f) {
        d = b(d);
        d = d.hasClass("a-declarative") ? d : d.find(".a-declarative").eq(0);
        f = "a-" + f;
        var e = d.data("action");
        return e && a.contains(e, f)
          ? { attributes: d.data(f) || null, $trigger: d }
          : null;
      },
      eventOccursWithin: function (a, f) {
        a = b(a.target);
        return (
          0 < a.closest(f.$trigger).length || 0 < a.closest(f.$popover).length
        );
      },
      search: g,
      getCSSHash: function (d) {
        var b = {};
        a.each(
          "height width max-height max-width min-height min-width".split(" "),
          function (e) {
            if (d[e]) {
              var f = d[e];
              if (a.isFiniteNumber(f) || m.test(f)) f += "px";
              b[e] = f;
            }
          }
        );
        b.height && !b["max-height"] && (b["max-height"] = "none");
        b.width && !b["max-width"] && (b["max-width"] = "none");
        return b;
      },
      clearContent: function (a) {
        (a = a.getContent()) && a.empty();
      },
      showSpinner: function (a) {
        a.updateContent(
          '\x3cdiv class\x3d"a-popover-loading-wrapper a-text-center"\x3e\x3cdiv class\x3d"a-box a-color-base-background a-popover-loading"\x3e\x3c/div\x3e\x3c/div\x3e'
        );
        a.updatePosition();
        return a;
      },
      getBool: function (a, b) {
        return void 0 !== a ? !0 === a || "true" === a : !0 === b;
      },
      shouldPopoverUpdateContent: function (a, b) {
        return (
          !a.attrs("content") &&
          a.attrs("currentDataStrategy") === b &&
          (a.isVisible() || a.isActive())
        );
      },
      defaultContentFailureMessage: "Sorry, content is not available.",
    };
  });
  ("use strict");
  n.when("A", "a-popover-base-factory", "a-modal-factory").register(
    "a-modal-handlers",
    function (a, g, b) {
      g = a.$;
      a.declarative("a-modal", "click", function (a) {
        b.get(a.$declarativeParent).show();
        a.$event.preventDefault();
      });
      a.declarative("a-modal", "keydown", function (g) {
        g.$event.which === a.constants.keycodes.SPACE &&
          (g.$event.preventDefault(), b.get(g.$declarativeParent).show());
      });
      g(document).delegate(
        ".a-modal-scroller",
        "click " + a.action.start + " " + a.action.move,
        function (a) {
          a.target === this && a.preventDefault();
        }
      );
    }
  );
});
/* ******** */
(function (c) {
  var b = window.AmazonUIPageJS || window.P,
    d = b._namespace || b.attributeErrors,
    a = d ? d("AmazonUIBottomSheet@base", "AmazonUI") : b;
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window);
      });
})(function (c, b, d) {});
/* ******** */
(function (l) {
  var n = window.AmazonUIPageJS || window.P,
    x = n._namespace || n.attributeErrors,
    c = x ? x("AmazonUIBottomSheet@control-a11y", "AmazonUI") : n;
  c.guardFatal
    ? c.guardFatal(l)(c, window)
    : c.execute(function () {
        l(c, window);
      });
})(function (l, n, x) {
  l.when(
    "A",
    "a-sheet-util",
    "a-sheet-accessibility",
    "prv:a-sheet-dimensions",
    "prv:a-capabilities",
    "prv:a-sheet-constants"
  ).register("prv:a-sheet-web-private", function (c, e, m, B, q, k) {
    var f = c.$,
      r = c.constants.HIDE_CLASS,
      t = f("#a-page");
    f("body");
    var u = f(n),
      w = function (a) {
        if (2 === a._version) {
          var g = d(a),
            c = f('\x3cdiv class\x3d"a-sheet-web"\x3e\x3c/div\x3e').append(g),
            e = b();
          e.append(c).addClass("a-sheet-web-container-v2");
          a._lightbox.$container.addClass("a-sheet-lightbox-v2");
          var h = f(
            '\x3cdiv class\x3d"a-sheet-heading-container"\x3e\x3c/div\x3e'
          ).prependTo(c);
          if (a._heading) {
            var l = f('\x3ch1 class\x3d"a-sheet-heading"\x3e\x3c/h1\x3e');
            l.html(a._heading).appendTo(h);
            a.$heading = l;
          }
          h = v(a).appendTo(h);
          h.append("\x3cspan\x3e\x3c/span\x3e");
          a._closeType === k.closeButtonType.message && a._closeMessage
            ? (h.addClass("a-sheet-close-message"),
              h.find("span").html(a._closeMessage))
            : h.addClass("a-sheet-close-icon");
          a.$contentContainer = g;
          a.$sheetOuterContainer = e;
          a.$container = c;
          a._$close = h;
        } else
          (g = d(a)),
            (c = f('\x3cdiv class\x3d"a-sheet-web"\x3e\x3c/div\x3e').append(g)),
            (e = b().append(c)),
            (h = v(a).prependTo(c)),
            a._closeEnabled
              ? a._closeType === k.closeButtonType.message
                ? h.html(a._closeMessage)
                : h.addClass("a-icon a-icon-close-white")
              : h.addClass("visually-hidden"),
            (a.$contentContainer = g),
            (a.$sheetOuterContainer = e),
            (a.$container = c),
            (a._$close = h);
        "undefined" !== typeof n.orientation &&
          (a._$close.addClass("a-focus-hidden"),
          a.$container.addClass("a-focus-hidden"));
        m.addA11yMarkup(a.$container, a);
        g = "100%";
        a.$sheetOuterContainer && (g = a._height + "px");
        g = "translateY(" + g + ")";
        a.$sheetOuterContainer
          .addClass(r)
          .css({ transform: g, WebkitTransform: g });
      },
      b = function () {
        var a = f('\x3cdiv class\x3d"a-sheet-web-container"\x3e\x3c/div\x3e');
        a.bind(
          "click",
          { message: { closeReason: k.closeReasons.lightbox } },
          e.guardedHandler(a[0], e.handleHidingClick)
        );
        l.when("a-event-analytics").execute(
          "TNR: notifyJquery for click (sheetOuterContainer)",
          function (g) {
            g.notifyJquery(a, "click");
          }
        );
        return a;
      },
      d = function (a) {
        var g = f(
          '\x3cdiv class\x3d"a-sheet-content-container"\x3e\x3c/div\x3e'
        );
        a._preloadDomId
          ? ((a = f("#" + a._preloadDomId)),
            a.show().removeClass(r),
            g.append(a))
          : a._inlineContent && g.append(f(a._inlineContent));
        return g;
      },
      v = function (a) {
        var g = "";
        c.capabilities.ios && a._a11y.label && (g += a._a11y.label + ", ");
        g += a._closeMessage;
        var b = f("\x3cbutton/\x3e", {
          class: "a-sheet-close",
          "aria-label": g,
        }).bind(
          "click",
          { message: { closeReason: k.closeReasons.closebutton } },
          e.handleHidingClick
        );
        l.when("a-event-analytics").execute(
          "TNR: notifyJquery for click",
          function (a) {
            a.notifyJquery(b, "click");
          }
        );
        return b;
      },
      y = function (a) {
        var b = u.scrollTop();
        t.addClass("a-scroll-disabled");
        a._preventBackgroundPinToTop || t.css("top", "-" + b + "px");
        a._initialScrollPosition = b;
      },
      z = function (a) {
        t.removeClass("a-scroll-disabled");
        a._preventBackgroundPinToTop || t.css("top", "");
      },
      p = function (a) {
        a.$sheetOuterContainer.removeClass("a-experimental-ios-scrolling");
      },
      A = function (a) {
        a.$sheetOuterContainer.addClass("a-experimental-ios-scrolling");
      };
    return {
      lockPageScroll: y,
      unlockPageScroll: z,
      turnOffExperimentalScrolling: p,
      turnOnExperimentalScrolling: A,
      hide: function (a, b) {
        b
          ? b.closeReason || (b.closeReason = k.closeReasons.unknown)
          : (b = { closeReason: k.closeReasons.unknown });
        var d = a.$container,
          g = a._duration,
          h = a.$sheetOuterContainer;
        a._animating && c.stopAnimation(d, !0, !0);
        var f = function () {
          a._active = !1;
          a._animating = !1;
          z(a);
          p(a);
          h.addClass(r);
          a._blurSheet && a._blurSheet();
          e.triggerEvent(k.events.afterHide, a, b);
          l.when("mash").execute(function (b) {
            b.dispatchEvent({
              type: "bottomsheet:willDismiss",
              detail: { id: a._name, source: "mash-aui" },
            });
          });
        };
        e.triggerEvent(k.events.beforeHide, a, b);
        0 < g && (a._animating = !0);
        c.animationFrameDelay(function () {
          var b = "translateY(" + (h.height() + "px") + ")";
          c.animate(h, { transform: b, WebkitTransform: b }, g, "ease-in", f);
          a._lightbox.hide(g);
        });
        return !0;
      },
      show: function (a) {
        var b = a.$container,
          d = a.$sheetOuterContainer,
          f = a._duration,
          h = e.getWindowHeight(),
          v = B.getContainerHeight(a._height, a._autoHeight, h);
        a._animating && c.stopAnimation(b, !0, !0);
        b ||
          (w(a),
          (b = a.$container),
          (d = a.$sheetOuterContainer),
          d.appendTo("body"));
        a._active = !0;
        2 === a._version && a._fullScreen
          ? b
              .css({ height: "100%", maxHeight: "100%" })
              .addClass("a-sheet-full-screen")
          : b.css({ height: v, maxHeight: e.getMaxHeight(h) });
        y(a);
        var p = function () {
          a._animating = !1;
          A(a);
          e.triggerEvent(k.events.afterShow, a);
          a._blurSheet = m.focusComponent(a);
        };
        e.triggerEvent(k.events.beforeShow, a);
        l.when("mash").execute(function (b) {
          b.dispatchEvent({
            type: "bottomsheet:willPresent",
            detail: { id: a._name, source: "mash-aui" },
          });
        });
        0 < f && (a._animating = !0);
        c.requestAnimationFrame(function () {
          d.removeClass(r);
          a.updatePosition();
          a.$contentContainer.css({ height: "100%", overflowY: "auto" });
          a._lightbox.show(f);
          c.animate(
            d,
            { transform: "translateY(0)", WebkitTransform: "translateY(0)" },
            f,
            "ease-out",
            p
          );
        });
        return !0;
      },
    };
  });
  l.when(
    "A",
    "a-sheet-base",
    "a-sheet-util",
    "prv:a-sheet-web-private",
    "prv:a-sheet-constants",
    "prv:a-sheet-dimensions",
    "a-sheet-capabilities"
  ).register("a-sheet-web", function (c, e, m, n, q, k, f) {
    var r = function (b) {
        var d = this;
        2 === d._version &&
          d._fullScreen &&
          ((d._fullScreen = !1),
          d._active && d.$container.removeClass("a-sheet-full-screen"));
        var f = !1 !== b.persist,
          e = 1e3 * parseFloat(b.duration);
        b = b.height;
        var k = Math.min(Math.max(b, 0), m.getMaxHeight()),
          p = d.$container;
        if (d._animating || !c.isFiniteNumber(k))
          return (
            l.log(
              "Failed to change bottom sheet height: " +
                (d._animating
                  ? "bottom sheet is animating"
                  : "height is not finite"),
              "WARN",
              "changeHeight"
            ),
            !1
          );
        f && (d._height = b);
        if (!d._active || k === p.height())
          return m.triggerEvent(q.events.changeHeight, d), !0;
        c.isFiniteNumber(e) || (e = d._duration);
        var n = function () {
          d._animating = !1;
          m.triggerEvent(q.events.changeHeight, d);
        };
        0 < e &&
          ((d._animating = !0),
          d._autoHeight && p.css("height", p.height() + "px"));
        d.updatePosition();
        c.animationFrameDelay(function () {
          if (2 === d._version) {
            var a = m.getWindowHeight();
            c.animate(
              p,
              { height: k + "px", maxHeight: m.getMaxHeight(a) },
              e,
              "ease-out",
              n
            );
          } else c.animate(p, { height: k + "px" }, e, "ease-out", n);
        });
        return !0;
      },
      t = function () {
        var b = this,
          d = m.getWindowHeight(),
          e = b.$contentContainer.height(),
          f = b.$sheetOuterContainer;
        d = k.getSheetOuterContainerDimensions(d, e);
        2 === b._version && b._fullScreen
          ? b.$sheetOuterContainer.css({ height: "100%" })
          : f.css({ height: d.height + "px" });
        c.capabilities.ios &&
          (n.turnOffExperimentalScrolling(b),
          c.delay(function () {
            n.turnOnExperimentalScrolling(b);
          }, 500));
      },
      u = function () {
        return this.$contentContainer;
      },
      w = function () {
        if (this._active)
          l.log(
            "Cannot destroy Bottomsheet as Bottomsheet is currently open",
            "WARN",
            "AmazonUIBottomsheet"
          );
        else {
          for (var b in q.events)
            c.off("a:sheet:" + q.events[b] + ":" + this._name);
          this.$sheetOuterContainer.remove();
          c.trigger("a:sheet:private:destroy", { sheet: this });
        }
      };
    f = e.extend({
      init: function (b) {
        this._super(b);
      },
      _componentName: "sheet-web",
      show: function () {
        if (this._animating || this._active) return !1;
        m.triggerEvent("private:beforeShow", this);
        return !0;
      },
      hide: function () {
        if (this._animating || !this._active)
          return (
            l.log(
              "Failed to hide bottom sheet: bottom sheet is " +
                (this._animating ? "animating" : "not active"),
              "WARN",
              "hide"
            ),
            !1
          );
        m.triggerEvent("private:beforeHide", this);
        return !0;
      },
      changeHeight: r,
      updatePosition: t,
      getContentContainer: u,
      destroy: w,
    });
    e = e.extend({
      init: function (b) {
        this._super(b);
      },
      _componentName: "sheet-web-v2",
      changeHeight: r,
      setFullScreen: function () {
        var b = this,
          d = b._duration,
          e = b.$container;
        if (b._animating)
          return (
            l.log(
              "Failed to set bottom sheet to full screen: bottom sheet is animating",
              "WARN",
              "setFullScreen"
            ),
            !1
          );
        b._fullScreen = !0;
        if (!b._active || m.windowHeight === e.height())
          return m.triggerEvent(q.events.changeHeight, b), !0;
        var f = function () {
          b._animating = !1;
          e.addClass("a-sheet-full-screen");
          m.triggerEvent(q.events.changeHeight, b);
        };
        0 < d && (b._animating = !0);
        b.updatePosition();
        c.animationFrameDelay(function () {
          c.animate(e, { height: "100%", maxHeight: "100%" }, d, "ease-out", f);
        });
        return !0;
      },
      updatePosition: t,
      getContentContainer: u,
      destroy: w,
    });
    return { Sheet: f, SheetV2: e };
  });
});
/* ******** */
(function (e) {
  var k = window.AmazonUIPageJS || window.P,
    g = k._namespace || k.attributeErrors,
    c = g ? g("AmazonUITruncate", "AmazonUI") : k;
  c.guardFatal
    ? c.guardFatal(e)(c, window)
    : c.execute(function () {
        e(c, window);
      });
})(function (e, k, g) {
  e.when("A", "a-component", "prv:a-truncate-util").register(
    "a-truncate",
    function (c, e, k) {
      function g(a) {
        var b = a._$fullText,
          c = Math.ceil(parseFloat(a._$element.css("max-height"))),
          e = a.getOverflowMarker(),
          g = a.getSpecialCharacterList(),
          d = a._$offscreenTextHolder;
        a._$element.append(d);
        if (!(parseFloat(d.html(b).css("height")) <= c)) {
          a = 0;
          for (var f = b.length, h, l; f > a; )
            (h = Math.floor((a + f) / 2)),
              (l = b.substring(0, h + 1) + e),
              parseFloat(d.html(l).css("height")) > c ? (f = h) : (a = h + 1);
          b = k.trimSpecialChars(b.substring(0, f), g) + e;
        }
        d.remove();
        return b;
      }
      function h(a) {
        a = f(a).attr("data-a-recalculate", !0);
        m();
        return a.length;
      }
      function d() {
        return h(
          '.a-truncate:not([data-a-manual-update\x3d"true"]):not([data-a-updated])'
        );
      }
      var f = c.$,
        l = e.create({
          _componentName: "truncate",
          init: function (a, b) {
            this._super(a, b);
            this._$full = this._$element.find(".a-truncate-full");
            this._$cut = this._$element.find(".a-truncate-cut");
            this._$fullText = this.getFullText();
            this._$offscreenTextHolder = f(
              '\x3cspan class\x3d"a-truncate-calc a-offscreen"/\x3e'
            );
            c.capabilities.android &&
              c.capabilities.isAmazonApp &&
              ((a = this.getMaxHeight()),
              /[^r]em$/.test(a) &&
                ((a = parseFloat(a)),
                (b = parseFloat(this._$element.css("font-size"))),
                this._$element.css("max-height", a * b + "px")));
          },
          update: function (a) {
            var b = this._$cut.html(),
              d = g(this);
            this._$fullText !== d
              ? this._$cut.height(this.getMaxHeight())
              : this._$cut.height("auto");
            this._$cut.html(d);
            this._$element.attr("data-a-updated", !0);
            this._$full.addClass("a-offscreen");
            this._$cut.removeClass("a-hidden");
            d = { truncateContainer: this._$element, truncateInstance: this };
            (a && a.silent) ||
              ((a = this.getTruncatedText()),
              b !== a &&
                (c.trigger("a:truncate:updated", d),
                (b = this._$element.data("a-truncate-name")) &&
                  c.trigger("a:truncate:" + b + ":updated", d)));
          },
          getFullText: function () {
            return this._$full.html();
          },
          getTruncatedText: function () {
            return this.getIsUpdated() ? this._$cut.html() : g(this);
          },
          getIsUpdated: function () {
            return this._$element.is("[data-a-updated]");
          },
          getOverflowMarker: function () {
            return this._$element.data("a-overflow-marker") || "";
          },
          getSpecialCharacterList: function () {
            return this._$element.data("a-special-character-list") || "";
          },
          getLineHeight: function () {
            return this._$element[0].style.lineHeight;
          },
          getMaxHeight: function () {
            return this._$element[0].style.maxHeight;
          },
          getIfTextFits: function () {
            return this._$fullText === g(this);
          },
        }),
        m = (function (a) {
          function b() {
            (d = a()) && c.delay(b, 0);
          }
          var d = !1;
          return function () {
            d || b();
          };
        })(function () {
          var a = f('.a-truncate[data-a-recalculate\x3d"true"]').first(),
            b = !!a.length;
          b && (new l(a).update(), a.attr("data-a-recalculate", !1));
          return b;
        });
      c.on("ready orientationchange", function () {
        h('.a-truncate:not([data-a-manual-update\x3d"true"])');
      });
      c.on("resize", function (a, b) {
        b.width && h('.a-truncate:not([data-a-manual-update\x3d"true"])');
      });
      c.on("a:pageUpdate", d);
      return {
        get: function (a, b) {
          return new l(a, b);
        },
        manualTruncate: function (a) {
          return h(f(a).find('.a-truncate[data-a-manual-update\x3d"true"]'));
        },
        switchToAutoTruncate: function (a) {
          a = f(a).find('.a-truncate[data-a-manual-update\x3d"true"]');
          a.removeAttr("data-a-manual-update");
          return a.length;
        },
        refreshAutoTruncate: d,
      };
    }
  );
  e.declare("prv:a-truncate-util", {
    trimSpecialChars: function (c, d) {
      d = new RegExp(
        "[" + d.replace(/[.\\+*?[^\]$(){}=!<>|:-]/g, "\\$\x26") + "\\s]+$"
      );
      return c.replace(d, "");
    },
  });
});
/* ******** */
(function (l) {
  var m = window.AmazonUIPageJS || window.P,
    n = m._namespace || m.attributeErrors,
    b = n ? n("AmazonUICardUI", "AmazonUI") : m;
  b.guardFatal
    ? b.guardFatal(l)(b, window)
    : b.execute(function () {
        l(b, window);
      });
})(function (l, m, n) {
  l.when(
    "A",
    "a-component",
    "prv:a-cardui-peek-toggle",
    "prv:a-cardui-peek-expand"
  ).register("a-cardui", function (b, d, g, k) {
    var c = b.$,
      f = d.create({
        _componentName: "cardui",
        init: function (a, c) {
          this._super(a, c);
          this.metadata = {
            interactedOnce: !1,
            describedByIds: this._$element.data("describedByIds"),
            cardExpanded: this.isExpanded(),
            cardName: this.getName(),
          };
        },
        getCardType: function () {
          return c(this._$element).data("a-card-type");
        },
        isExpanded: function () {},
        getName: function () {
          return this._$element.attr("name");
        },
        getId: function () {
          return this._$element.attr("id");
        },
        toggle: function () {},
      });
    return {
      get: function (a, d) {
        var e;
        if (!(e = c(a).data("cardInstance"))) {
          switch (c(a).data("a-card-type")) {
            case "peekToggle":
              e = f.extend(g);
              break;
            case "peekExpand":
              e = f.extend(k);
              break;
            default:
              e = f;
          }
          d = new e(a, d);
          c(a).data("cardInstance", d);
          b.trigger("a:card:initialized", d);
          c(a).attr("id") &&
            b.trigger("a:card:" + c(a).attr("id") + ":initialized", d);
          e = d;
        }
        return e;
      },
    };
  });
  ("use strict");
  l.when("A", "a-component").register("prv:a-cardui-content", function (b, d) {
    var g = d.create({
      _componentName: "carduiContent",
      init: function (b, c) {
        this._super(b, c);
      },
      getHeight: function () {
        return this._$element[0].scrollHeight;
      },
      getMaxHeightDataAttribute: function () {
        return this._$element.data("a-max-height");
      },
    });
    return {
      get: function (b, c) {
        return new g(b, c);
      },
    };
  });
  ("use strict");
  l.when("A", "a-component", "a-cardui").register(
    "a-cardui-deck",
    function (b, d, g) {
      function k(a, h) {
        f(a).data("cardInstance") ||
          (f(a).attr("name", h.deckName + "-card" + h.cardCount++),
          f(a).data("describedByIds", h.describedByIds));
        return g.get(a);
      }
      function c(a, h) {
        h = new p(a, h);
        f(a).data("deckInstance", h);
        return h;
      }
      var f = b.$,
        a = 0,
        p = d.create({
          _componentName: "carduiDeck",
          init: function (e, h) {
            this._super(e, h);
            h = this._$element;
            e = "a-cardui-deck-autoname-" + a++;
            f(h).attr("name", e);
            h = this._$element;
            var c = e + "-teaser-describedby-collapsed",
              b = e + "-teaser-describedby-expanded";
            f(h).find(".a-teaser-describedby-collapsed").attr("id", c);
            f(h).find(".a-teaser-describedby-expanded").attr("id", b);
            this.metadata = {
              cardCount: 0,
              deckName: e,
              describedByIds: { collapsed: c, expanded: b },
            };
            this.initializeAllCards();
          },
          initializeCard: function (a, h) {
            return k(a, this.metadata);
          },
          initializeAllCards: function () {
            var a = this;
            f(this._$element)
              .find(".a-cardui")
              .each(function () {
                return k(this, a.metadata);
              });
          },
          addCards: function (a) {
            var e = this;
            (a && a.url) ||
              l.error("ajax options object or url is not defined.");
            var c,
              d = a.targetSelector,
              k = e._$element;
            d
              ? ((d = f(d)),
                d.closest(k).length
                  ? (c = d)
                  : l.error(
                      "container is outside the deck",
                      "ERROR",
                      "addCards"
                    ))
              : (c = k);
            b.get(a.url, {
              cache: !1,
              success: function (a) {
                c.append(a);
                e.initializeAllCards();
                b.trigger("a:deck:new-cards-added");
                f(e._$element).attr("id") &&
                  b.trigger(
                    "a:deck:" + f(e._$element).attr("id") + ":new-cards-added"
                  );
              },
              failure: function (a, c, h) {
                b.trigger("a:deck:cards-added-fail", {
                  xhr: a,
                  status: c,
                  errorThrown: h,
                });
                f(e._$element).attr("id") &&
                  b.trigger(
                    "a:deck:" + f(e._$element).attr("id") + ":cards-added-fail",
                    { xhr: a, status: c, errorThrown: h }
                  );
              },
            });
          },
        });
      b.on("ready", function () {
        f(".a-cardui-deck").each(function () {
          c(this);
        });
      });
      return {
        get: function (a, h) {
          return f(a).data("deckInstance") || c(a, h);
        },
      };
    }
  );
  ("use strict");
  l.when(
    "A",
    "a-component",
    "prv:a-see-more",
    "prv:a-expander-icon",
    "p-detect",
    "prv:csa-logger"
  ).register("prv:a-cardui-expand-control-footer", function (b, d, g, k, c, f) {
    function a(a, c) {
      a._$seeMore.toggleSeeMore(c.cardExpanded);
      a._$expanderIcon.toggleExpanderIcon(c.cardExpanded);
    }
    var p = d.create({
      _componentName: "carduiExpandControlFooter",
      init: function (a, c) {
        this._super(a, c);
        this._$expanderIcon = k.get(this._$element.find(".a-expander-icon"));
        this._$seeMore = g.get(this._$element.find(".a-see-more"));
        this._$button = this._$element.find(
          ".a-cardui-expand-control-footer-button"
        );
      },
      toggleExpansion: function (e) {
        var h = this;
        c.capabilities.transition && e.interactedOnce
          ? b.fadeOut(h._$element, 200, "linear", function () {
              a(h, e);
              b.fadeIn(h._$element, 200);
            })
          : a(h, e);
      },
      getName: function () {
        return this._$element.attr("name");
      },
      getId: function () {
        return this._$element.attr("id");
      },
      addTrigger: function (a) {
        this._$element.click(function () {
          b.trigger("a:card:" + a + ":toggle", this);
        });
        this._$element.length && f.element(this._$element.get(0), "click");
        this._$element.keypress(function (c) {
          var e = b.constants.keycodes;
          c = c.which;
          (c !== e.ENTER && c !== e.SPACE) ||
            b.trigger("a:card:" + a + ":toggle", this);
        });
        this._$element.length && f.element(this._$element.get(0), "keypress");
      },
    });
    return {
      get: function (a, c) {
        return new p(a, c);
      },
    };
  });
  ("use strict");
  l.when("A", "a-component", "prv:csa-logger").register(
    "prv:a-cardui-expand-control-title",
    function (b, d, g) {
      var k = d.create({
        _componentName: "carduiExpandControlTitle",
        init: function (c, b) {
          this._super(c, b);
          this._$button = this._$element.find('span[role\x3d"button"]');
          this._$header = this._$element.find("h3");
        },
        getName: function () {
          return this._$element.attr("name");
        },
        getId: function () {
          return this._$element.attr("id");
        },
        addTrigger: function (c) {
          this._$element.click(function () {
            b.trigger("a:card:" + c + ":toggle", this);
          });
          this._$element.length && g.element(this._$element.get(0), "click");
          this._$element.keypress(function (d) {
            var a = b.constants.keycodes;
            d = d.which;
            (d !== a.ENTER && d !== a.SPACE) ||
              b.trigger("a:card:" + c + ":toggle", this);
          });
          this._$element.length && g.element(this._$element.get(0), "keypress");
        },
      });
      return {
        get: function (c, b) {
          return new k(c, b);
        },
      };
    }
  );
  ("use strict");
  l.when("A", "a-component").register("prv:a-cardui-teaser", function (b, d) {
    var g = d.create({
      _componentName: "carduiTeaser",
      init: function (b, c) {
        this._super(b, c);
      },
      getHeight: function () {
        return this._$element[0].scrollHeight;
      },
    });
    return {
      get: function (b, c) {
        return new g(b, c);
      },
    };
  });
  ("use strict");
  l.when("A", "a-component").register("prv:a-expander-icon", function (b, d) {
    var g = d.create({
      _componentName: "expanderIcon",
      init: function (b, c) {
        this._super(b, c);
        this._$icon = this._$element.find(".a-css-icon");
      },
      toggleExpanderIcon: function (b) {
        var c = b ? "a-css-icon-expand" : "a-css-icon-collapse";
        b = b ? "a-css-icon-collapse" : "a-css-icon-expand";
        this._$icon.addClass("a-css-icon-draw");
        this._$icon.removeClass(c).addClass(b);
      },
    });
    return {
      get: function (b, c) {
        return new g(b, c);
      },
    };
  });
  ("use strict");
  l.when("A", "a-component", "prv:a-cardui-scroll-viewport").register(
    "a-reactive-container",
    function (b, d, g) {
      var k = d.create({
        _componentName: "reactiveContainer",
        init: function (c, b) {
          this._super(c, b);
          this._$measured = !1;
          this._$element.addClass("a-reactive-container-transition");
        },
        setHeight: function (c) {
          this._$element.css("height", c + "px");
          this._$measured
            ? g.adjustScroll(this, parseFloat(c))
            : (this._$measured = !0);
        },
        resetInitialization: function () {
          this._$measured = !1;
        },
        getHeight: function () {
          return this._$element.css("height");
        },
      });
      return {
        get: function (c, b) {
          return new k(c, b);
        },
      };
    }
  );
  ("use strict");
  l.when("A", "a-component").register("prv:a-see-more", function (b, d) {
    var g = d.create({
      _componentName: "seeMore",
      init: function (b, c) {
        this._super(b, c);
        this._$seeMoreText = this._$element.find(".a-see-more-text");
        this._$seeLessText = this._$element.find(".a-see-less-text");
      },
      toggleSeeMore: function (b) {
        b
          ? (this._$seeMoreText.hide(), this._$seeLessText.show())
          : (this._$seeMoreText.show(), this._$seeLessText.hide());
      },
    });
    return {
      get: function (b, c) {
        return new g(b, c);
      },
    };
  });
  ("use strict");
  l.when("A").register("prv:a-cardui-scroll-viewport", function (b) {
    return { adjustScroll: function () {} };
  });
  ("use strict");
  l.when(
    "A",
    "prv:a-cardui-expand-control-title",
    "prv:a-cardui-expand-control-footer",
    "prv:a-cardui-teaser",
    "prv:a-cardui-content",
    "prv:a-reactive-container"
  ).register("prv:a-cardui-type-utility", function (b, d, g, k, c, f) {
    return {
      getExpandControlTitle: function (a) {
        return d.get(a._$element.find(".a-cardui-expand-control-title"));
      },
      getExpandControlFooter: function (a) {
        return g.get(a._$element.find(".a-cardui-expand-control-footer"));
      },
      getTeaser: function (a) {
        return k.get(a._$element.find(".a-cardui-teaser"));
      },
      getContent: function (a) {
        return c.get(a._$element.find(".a-cardui-content"));
      },
      getReactiveContainer: function (a) {
        a = a._$element.find(".a-reactive-container");
        return 0 < a.length ? f.get(a) : null;
      },
      getEventName: function (a) {
        return "a:card:" + a.getName() + ":toggle";
      },
    };
  });
  ("use strict");
  l.when("A", "prv:a-cardui-type-utility").register(
    "prv:a-cardui-peek-expand",
    function (b, d) {
      function g(a) {
        var c = a._$header;
        a.metadata.interactedOnce &&
          b.delay(function () {
            var a = f(document).scrollTop();
            c._$header.focus();
            f("html,body").scrollTop(a);
          }, 50);
      }
      function k(a) {
        var f = d.getEventName(a);
        b.on(f, function (e) {
          if (!a.metadata.interactedOnce) {
            a.metadata.interactedOnce = !0;
            var d = a._$content;
            a._$teaser._$element.removeClass("a-cardui-uninitialized");
            d._$element.removeClass("a-cardui-uninitialized");
            d._$element.css("max-height", "none");
            c(a);
          }
          d = !a.isExpanded();
          a._$element.attr("data-a-expanded", d);
          a.metadata.cardExpanded = d;
          a._$footer.toggleExpansion(a.metadata);
          c(a);
          g(a);
          e = { carduiInstance: a, triggerElement: e };
          b.trigger("a:card:toggled", e);
          a.getId() && b.trigger("a:card:" + a.getId() + ":toggled", e);
        });
      }
      function c(a) {
        var b = a._$teaser,
          c = a._$content,
          d = a._$reactiveContainer,
          f = a.metadata;
        c.getMaxHeightDataAttribute()
          ? ((b = c.getHeight()),
            b <= c.getMaxHeightDataAttribute()
              ? (a._$element.attr("data-a-card-type", "basic"),
                a._$element.find(".a-cardui-footer").addClass("a-hidden"),
                d.setHeight(b))
              : (a._$element.attr("data-a-card-type", "peekExpand"),
                a._$element.find(".a-cardui-footer").removeClass("a-hidden"),
                (a = c.getMaxHeightDataAttribute()),
                d.setHeight(f.cardExpanded ? c.getHeight() : a)))
          : d.setHeight(
              f.cardExpanded ? b.getHeight() + c.getHeight() : b.getHeight()
            );
      }
      var f = b.$;
      return {
        init: function (a, f) {
          this._super(a, f);
          this._$content = d.getContent(this);
          this._$reactiveContainer = d.getReactiveContainer(this);
          this._$footer = d.getExpandControlFooter(this);
          var e = this;
          b.on("orientationchange", function () {
            e._$reactiveContainer.resetInitialization();
            c(e);
          });
          this._$header = d.getExpandControlTitle(this);
          this._$teaser = d.getTeaser(this);
          this._$header.addTrigger(this.metadata.cardName);
          this._$footer.addTrigger(this.metadata.cardName);
          this._$footer.toggleExpansion(this.metadata);
          g(this);
          k(this);
          this._$content.getHeight() <=
            this._$content.getMaxHeightDataAttribute() &&
            (this._$reactiveContainer.setHeight(this._$content.getHeight()),
            this._$element.attr("data-a-card-type", "basic"),
            this._$element.find(".a-cardui-footer").addClass("a-hidden"));
        },
        isExpanded: function () {
          return "true" === this._$element.attr("data-a-expanded");
        },
        toggle: function (a) {
          b.trigger("a:card:" + this.getName() + ":toggle", a);
        },
      };
    }
  );
  ("use strict");
  l.when("A", "prv:a-cardui-type-utility").register(
    "prv:a-cardui-peek-toggle",
    function (b, d) {
      function g(a) {
        var c = a._$header,
          d = a._$footer,
          h = a._$teaser,
          g = a._$content;
        a = a.metadata;
        a.interactedOnce &&
          b.delay(function () {
            var a = f(document).scrollTop();
            c._$header.focus();
            f("html,body").scrollTop(a);
          }, 50);
        c._$button.attr("aria-expanded", a.cardExpanded);
        c._$header.attr(
          "aria-describedby",
          a.cardExpanded
            ? a.describedByIds.expanded
            : a.describedByIds.collapsed
        );
        d._$button.attr("aria-expanded", a.cardExpanded);
        d._$element.attr(
          "aria-describedby",
          a.cardExpanded
            ? a.describedByIds.expanded
            : a.describedByIds.collapsed
        );
        h._$element.attr("aria-hidden", a.cardExpanded);
        g._$element.attr("aria-hidden", !a.cardExpanded);
      }
      function k(a) {
        var f = d.getEventName(a);
        b.on(f, function (d) {
          if (!a.metadata.interactedOnce) {
            a.metadata.interactedOnce = !0;
            var e = a._$content;
            a._$teaser._$element.removeClass("a-cardui-uninitialized");
            e._$element.removeClass("a-cardui-uninitialized");
            a._$reactiveContainer && c(a);
          }
          e = !a.isExpanded();
          var f = a._$teaser,
            k = a._$content;
          a._$element.attr("data-a-expanded", e);
          (a.metadata.cardExpanded = e)
            ? (f._$element.addClass("a-cardui-absolute-position"),
              k._$element.removeClass("a-cardui-absolute-position"))
            : (k._$element.addClass("a-cardui-absolute-position"),
              f._$element.removeClass("a-cardui-absolute-position"));
          a._$footer.toggleExpansion(a.metadata);
          a._$reactiveContainer && c(a);
          g(a);
          d = { carduiInstance: a, triggerElement: d };
          b.trigger("a:card:toggled", d);
          a.getId() && b.trigger("a:card:" + a.getId() + ":toggled", d);
        });
      }
      function c(a) {
        var b = a._$teaser,
          c = a._$content,
          d = a._$reactiveContainer;
        a.metadata.cardExpanded
          ? d.setHeight(c.getHeight())
          : d.setHeight(b.getHeight());
      }
      var f = b.$;
      return {
        init: function (a, f) {
          this._super(a, f);
          this._$header = d.getExpandControlTitle(this);
          this._$content = d.getContent(this);
          this._$footer = d.getExpandControlFooter(this);
          this._$teaser = d.getTeaser(this);
          this._$reactiveContainer = d.getReactiveContainer(this);
          this._$header.addTrigger(this.metadata.cardName);
          this._$footer.addTrigger(this.metadata.cardName);
          this._$footer.toggleExpansion(this.metadata);
          g(this);
          k(this);
          var e = this;
          if (e._$reactiveContainer)
            b.on("orientationchange", function () {
              e.metadata.interactedOnce &&
                (e._$reactiveContainer.resetInitialization(), c(e));
            });
        },
        isExpanded: function () {
          return "true" === this._$element.attr("data-a-expanded");
        },
        toggle: function (a) {
          b.trigger("a:card:" + this.getName() + ":toggle", a);
        },
      };
    }
  );
});
/* ******** */
(function (c) {
  var b = window.AmazonUIPageJS || window.P,
    d = b._namespace || b.attributeErrors,
    a = d ? d("AmazonUICompatJS", "AmazonUI") : b;
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window);
      });
})(function (c, b, d) {});
/* ******** */
(function (f) {
  var n = window.AmazonUIPageJS || window.P,
    p = n._namespace || n.attributeErrors,
    b = p ? p("AmazonUIWebModalFramework", "AmazonUI") : n;
  b.guardFatal
    ? b.guardFatal(f)(b, window)
    : b.execute(function () {
        f(b, window);
      });
})(function (f, n, p) {
  f.declare("a-modal-framework-constants", {
    FRAMEWORK_WRAPPER_CLASS: "a-modal-framework-wrapper",
    CONTENT_WRAPPER_CLASS: "a-modal-framework-content-wrapper",
    DUMMY_FOCUSABLE_ELEMENT_CLASS: "a-modal-framework-dummy-element",
    SCRIM_CLASS: "a-modal-framework-scrim",
    DISABLE_SCROLL_CLASS: "a-disable-scroll",
    overlayStatusCodes: { INACTIVE: 0, ACTIVE: 1 },
    contentStatusCodes: {
      NO_CONTENT: 0,
      CONTENT_LOAD_FAILED: 1,
      CONTENT_LOADING: 2,
      CONTENT_LOADED: 3,
    },
    errorMessages: {
      INVALID_TYPE: "content.type set to an unsupported content type",
      EMPTY_CONTENT: "content / content.source is empty",
      NO_PRELOAD_ID:
        "content.source should be the preload ID, none passed currently",
      CONTENT_NOT_PRELOADED:
        "no content with the given preload id present on the page",
      NO_ENDPOINT_URL:
        "content.source should be the endpoint url, currently empty",
      MISSING_PARAMS:
        "missing mandatory params needed to create the overlay instance",
    },
    TABBABLE_SELECTOR: "a, button, input, select, textarea, [tabindex]",
    defaultOptions: {
      DISMISS_STRATEGY: "transient",
      SCRIM_TYPE: "translucent",
    },
    defaultZIndex: { PERSISTENT: 299, TRANSIENT: 499 },
    EXPLICIT_PARAMS: ["name", "wrapper", "content"],
  });
  ("use strict");
  f.when("A", "a-modal-framework-constants").register(
    "a-modal-framework-templates",
    function (b, g) {
      b = b.constants.HIDE_CLASS;
      return {
        frameworkWrapper:
          "\x3cdiv class\x3d'" + g.FRAMEWORK_WRAPPER_CLASS + " " + b + "' \x3e",
        startAnchor:
          "\x3cspan tabindex\x3d'0' class\x3d'a-modal-framework-start'\x3e\x3c/span\x3e",
        endAnchor:
          "\x3cspan tabindex\x3d'0' class\x3d'a-modal-framework-end'\x3e\x3c/span\x3e",
        dummyFocusableElement:
          "\x3cspan tabindex\x3d'0' class\x3d'" +
          g.DUMMY_FOCUSABLE_ELEMENT_CLASS +
          "'\x3e\x3c/span\x3e",
        scrim:
          "\x3cdiv class\x3d'" + g.SCRIM_CLASS + " " + b + "'\x3e\x3c/div\x3e",
      };
    }
  );
  ("use strict");
  f.when("A").register("a-modal-framework-utils", function (b) {
    return {
      setOverlayStatus: function (b, d) {
        b._overlayStatus = d;
      },
      setContentStatus: function (b, d) {
        b._contentStatus = d;
      },
      getUniqueId: function () {
        for (var b = [], d = 0; 4 > d; d++)
          b.push("0123456789"[Math.floor(10 * Math.random())]);
        return b.join("");
      },
      hasKeys: function (b, d) {
        return d.every(function (c) {
          return c in b;
        });
      },
    };
  });
  ("use strict");
  f.when(
    "A",
    "a-modal-framework-inline",
    "a-modal-framework-preload",
    "a-modal-framework-ajax",
    "3p-promise",
    "a-modal-framework-constants",
    "a-modal-framework-utils"
  ).register("a-modal-framework-content", function (b, g, d, c, k, h, a) {
    function e(a) {
      switch (a) {
        case "inline":
          a = g;
          break;
        case "preload":
          a = d;
          break;
        case "ajax":
          a = c;
          break;
        default:
          a = p;
      }
      return a;
    }
    function m(a) {
      var b = e(a._content.type || "inline");
      return b ? b.getContent(a) : k.reject(h.errorMessages.INVALID_TYPE);
    }
    return {
      addContent: function (c) {
        var e = m(c);
        a.setContentStatus(c, h.contentStatusCodes.CONTENT_LOADING);
        e.then(function (e) {
          c._contentContainer.html(e);
          a.setContentStatus(c, h.contentStatusCodes.CONTENT_LOADED);
          b.trigger("a:modalFramework:" + c._name + ":contentUpdated", c);
        }).catch(function (e) {
          e.fallbackText && c._contentContainer.html(e.fallbackText);
          a.setContentStatus(c, h.contentStatusCodes.CONTENT_LOAD_FAILED);
          e = e.error || e;
          b.trigger(
            "a:modalFramework:" + c._name + ":contentUpdateFailed",
            c,
            e
          );
          throw Error(e);
        });
      },
      updateContent: function () {},
      removeContent: function () {},
      abortContentRequest: function (c) {
        var d = e(c._content.type || "inline");
        d && d.abortContent(c);
        a.setContentStatus(c, h.contentStatusCodes.NO_CONTENT);
        b.trigger("a:modalFramework:" + c._name + ":contentAborted", c);
      },
    };
  });
  ("use strict");
  f.when("A", "3p-promise", "a-modal-framework-constants").register(
    "a-modal-framework-inline",
    function (b, g, d) {
      return {
        getContent: function (c) {
          var b = c._content.source;
          "undefined" === typeof c._content.source && (b = c._content);
          return new g(function (c, a) {
            "" !== b ? c(b) : a(d.errorMessages.EMPTY_CONTENT);
          });
        },
        abortContent: function () {},
      };
    }
  );
  ("use strict");
  f.when("A", "3p-promise", "a-modal-framework-constants").register(
    "a-modal-framework-preload",
    function (b, g, d) {
      var c = b.$,
        k = b.constants.HIDE_CLASS;
      return {
        getContent: function (b) {
          if (b._content.source) {
            var a = c("#" + b._content.source);
            return new g(function (b, c) {
              0 < a.length
                ? (a.remove(), a.removeClass(k), b(a))
                : c(d.errorMessages.CONTENT_NOT_PRELOADED);
            });
          }
          return g.reject(d.errorMessages.NO_PRELOAD_ID);
        },
        abortContent: function () {},
      };
    }
  );
  ("use strict");
  f.when("A", "3p-promise", "a-modal-framework-constants").register(
    "a-modal-framework-ajax",
    function (b, g, d) {
      return {
        getContent: function (c) {
          if (c._content.source) {
            var k = c._content.source,
              h = c._content.cache || !1,
              a = c._content.timeout || 1e4,
              e = c._content.ajaxHeaders || {},
              m = c._content.withCredentials || !1,
              f = c._content.fallbackText || "";
            return new g(function (d, g) {
              c._ajaxInstance = b.ajax(k, {
                type: "GET",
                cache: h,
                timeout: a,
                headers: e,
                withCredentials: m,
                success: function (a) {
                  d(a);
                },
                error: function (a, b, c) {
                  g({
                    fallbackText: f,
                    error: { xhr: a, status: b, errorThrown: c },
                  });
                },
              });
            });
          }
          return g.reject(d.errorMessages.NO_ENDPOINT_URL);
        },
        abortContent: function (b) {
          b._ajaxInstance && b._ajaxInstance.abort();
        },
      };
    }
  );
  ("use strict");
  f.when(
    "A",
    "a-modal-framework-constants",
    "a-modal-framework-templates"
  ).register("a-modal-framework-accessibility", function (b, g, d) {
    function c(a) {
      var b = a._frameworkWrapper,
        c = a._overlayWrapper.find(g.TABBABLE_SELECTOR).not("tabindex\x3d'-1'");
      0 < c.length
        ? (b.find("." + g.DUMMY_FOCUSABLE_ELEMENT_CLASS).remove(),
          (a._firstFocusableElement = c.first()),
          (a._lastFocusableElement = c.last()))
        : 0 === b.find("." + g.DUMMY_FOCUSABLE_ELEMENT_CLASS).length &&
          ((b = h(d.dummyFocusableElement).appendTo(b)),
          (a._firstFocusableElement = a._lastFocusableElement = b));
    }
    function f(a) {
      var c = h(a.target);
      a = a.data.overlay;
      c.is(a._startAnchor)
        ? (a._lastFocusableElement.focus(),
          b.trigger("a:modalFramework:" + a._name + ":loopToLastItem"))
        : c.is(a._endAnchor) &&
          (a._firstFocusableElement.focus(),
          b.trigger("a:modalFramework:" + a._name + ":loopToFirstItem"));
    }
    var h = b.$;
    return {
      setupFocusTrap: function (a) {
        var b = a._frameworkWrapper;
        "persistent" !== a._dismissStrategy &&
          (a._startAnchor = h(d.startAnchor).prependTo(b));
        c(a);
        "persistent" !== a._dismissStrategy &&
          (a._endAnchor = h(d.endAnchor).appendTo(b));
        a._startAnchor && a._startAnchor.bind("focusin", { overlay: a }, f);
        a._endAnchor && a._endAnchor.bind("focusin", { overlay: a }, f);
      },
      setFocus: function (a) {
        a._firstFocusableElement ? a._firstFocusableElement.focus() : a.focus();
        "transient" === a._dismissStrategy &&
          h("#a-page").attr("aria-hidden", "true");
      },
      resetFocus: function (a) {
        var c = h(document.activeElement),
          d = c.closest(a._frameworkWrapper).length;
        c = c.is("body");
        (d || c) &&
          b.onScreen(a._lastActiveParent, 0) &&
          a._lastActiveParent.is(":visible") &&
          a._lastActiveParent.focus();
        "transient" === a._dismissStrategy &&
          h("#a-page").attr("aria-hidden", "false");
      },
      updateFocusableElements: c,
    };
  });
  ("use strict");
  f.when(
    "A",
    "a-component",
    "a-modal-framework-templates",
    "a-modal-framework-constants",
    "a-modal-framework-utils",
    "a-modal-framework-content",
    "a-modal-framework-accessibility"
  ).register("a-modal-framework", function (b, g, d, c, f, h, a) {
    function e(a) {
      b.delay(function () {
        switch (a._scrimType) {
          case "none":
            break;
          case "transparent":
            var b = "click.background." + a._uid;
            l(document).bind(b, { overlay: a }, function (a) {
              var b = l(a.target);
              a = a.data.overlay;
              var c = 0 === b.closest(a._frameworkWrapper).length;
              b = a._declarativeTrigger
                ? 0 === b.closest(a._declarativeTrigger).length
                : !0;
              c && b && a.dismiss();
            });
            break;
          default:
            a._scrim.bind("click", { overlay: a }, function () {
              a.dismiss();
            });
        }
      });
    }
    function m(a) {
      var b = l(d.frameworkWrapper);
      "persistent" === a._dismissStrategy
        ? a._declarativeTrigger
          ? a._declarativeTrigger.after(b)
          : b.appendTo("body")
        : b.appendTo("body");
      a._frameworkWrapper = b;
      b.data("overlayInstance", a);
      var e = a._overlayWrapper;
      b.html(e);
      b = b.find(l("." + c.CONTENT_WRAPPER_CLASS));
      0 === b.length && (b = e);
      a._contentContainer = b;
    }
    function q(a) {
      var b = a._lastActiveParent.closest("." + c.FRAMEWORK_WRAPPER_CLASS);
      b = b.length
        ? parseInt(b[0].style.zIndex, 10)
        : c.defaultZIndex[a._dismissStrategy.toUpperCase()];
      a._scrim && a._scrim.css("z-index", b + 1);
      a._frameworkWrapper.css("z-index", b + 2);
    }
    var l = b.$,
      k = b.constants.HIDE_CLASS;
    return g.create({
      _componentName: "modalFramework",
      init: function (a, b, d, e) {
        this._uid = f.getUniqueId();
        this._name = a;
        this._overlayWrapper = l(b);
        this._content = d;
        e || (e = {});
        this._dismissStrategy =
          e.dismissStrategy || c.defaultOptions.DISMISS_STRATEGY;
        this._scrimType =
          "persistent" === this._dismissStrategy
            ? "none"
            : e.scrimType || c.defaultOptions.SCRIM_TYPE;
        this._overlayStatus = c.overlayStatusCodes.INACTIVE;
        this._contentStatus = c.contentStatusCodes.NO_CONTENT;
        this._presentedOnce = !1;
      },
      present: function () {
        this._overlayStatus !== c.overlayStatusCodes.ACTIVE &&
          (f.setOverlayStatus(this, c.overlayStatusCodes.ACTIVE),
          (this._lastActiveParent = l(document.activeElement)),
          this._presentedOnce ||
            ("none" !== this._scrimType &&
              "transparent" !== this._scrimType &&
              ((this._scrim = l(d.scrim).appendTo("body")),
              this._scrim.addClass("a-scrim-" + this._scrimType)),
            m(this),
            a.setupFocusTrap(this),
            b.on(
              "a:modalFramework:" + this._name + ":contentUpdated",
              function (b) {
                a.updateFocusableElements(b);
                a.setFocus(b);
              }
            ),
            b.on(
              "a:modalFramework:" + this._name + ":contentUpdateFailed",
              function (b) {
                a.updateFocusableElements(b);
                a.setFocus(b);
              }
            ),
            b.trigger("a:modalFramework:" + this._name + ":created", this),
            (this._presentedOnce = !0)),
          this._contentStatus !== c.contentStatusCodes.CONTENT_LOADED &&
            h.addContent(this),
          q(this),
          this._scrim &&
            (b.$("body").addClass(c.DISABLE_SCROLL_CLASS),
            this._scrim.removeClass(k)),
          this._frameworkWrapper.removeClass(k),
          a.setFocus(this),
          e(this),
          b.trigger("a:modalFramework:" + this._name + ":presented", this));
      },
      dismiss: function () {
        if (this._overlayStatus !== c.overlayStatusCodes.INACTIVE) {
          this._contentStatus !== c.contentStatusCodes.CONTENT_LOADED &&
            (f.setContentStatus(this, c.contentStatusCodes.NO_CONTENT),
            h.abortContentRequest(this));
          f.setOverlayStatus(this, c.overlayStatusCodes.INACTIVE);
          this._scrim &&
            (b.$("body").removeClass(c.DISABLE_SCROLL_CLASS),
            this._scrim.addClass(k));
          this._frameworkWrapper.addClass(k);
          a.resetFocus(this);
          switch (this._scrimType) {
            case "none":
              break;
            case "transparent":
              var e = "click.background." + this._uid;
              l(document).unbind(e);
              break;
            default:
              this._scrim.unbind("click");
          }
          b.trigger("a:modalFramework:" + this._name + ":dismissed", this);
        }
      },
    });
  });
  ("use strict");
  f.when(
    "A",
    "a-modal-framework-constants",
    "a-modal-framework-utils",
    "a-modal-framework",
    "3p-promise"
  ).register("a-modal-framework-handler", function (b, g, d, c, f) {
    b.declarative("a-modal-framework-present", "click", function (h) {
      var a = h.$target;
      a.is(b.$(document.activeElement)) || a.focus();
      new f(function (a, b) {
        var c = h.data;
        d.hasKeys(c, g.EXPLICIT_PARAMS) || b(g.errorMessages.MISSING_PARAMS);
        a(c);
      })
        .then(function (a) {
          var b = h.$currentTarget,
            d = b.data("overlayInstance");
          d ||
            ((d = new c(a.name, a.wrapper, a.content, a.options)),
            b.data("overlayInstance", d));
          d._declarativeTrigger = d._declarativeTrigger || b;
          d.present();
        })
        .catch(function (a) {
          throw Error(a);
        });
    });
    b.declarative(
      "a-modal-framework-dismiss",
      ["click", "keydown"],
      function (c) {
        var a = b.$(c.$currentTarget).closest("." + g.FRAMEWORK_WRAPPER_CLASS);
        if (0 !== a.length && (a = a.data("overlayInstance"))) {
          var d =
            "keydown" === c.type &&
            c.$event.which === b.constants.keycodes.ESCAPE;
          ("click" === c.type || ("persistent" !== a._dismissStrategy && d)) &&
            a.dismiss();
        }
      }
    );
  });
});
/* ******** */
(function (c) {
  var a = window.AmazonUIPageJS || window.P,
    d = a._namespace || a.attributeErrors,
    b = d ? d("AmazonUI", "AmazonUI") : a;
  b.guardFatal
    ? b.guardFatal(c)(b, window)
    : b.execute(function () {
        c(b, window);
      });
})(function (c, a, d) {
  a.pcv = a.pcv || {};
  a.pcv.AmazonUI = "7e7a734fe6a22c1e1fded234dd8112e3d33dece4";
});
/* ******** */
(function (V) {
  var f = window.AmazonUIPageJS || window.P,
    M = f._namespace || f.attributeErrors,
    a = M ? M("CardJsRuntimeBuzzCopyBuild", "") : f;
  a.guardFatal
    ? a.guardFatal(V)(a, window)
    : a.execute(function () {
        V(a, window);
      });
})(function (V, f, M) {
  mix_d("@c/api-lock", ["exports"], function (a) {
    var c = {},
      d = function (a) {
        delete c[a.type];
      };
    a["default"] = {
      isLockedFor: function (a) {
        return !a.every(function (a) {
          return !!c[a];
        });
      },
      unlockForEvent: function (a, b) {
        c[a.type] = a;
        try {
          var e = b();
          if (e instanceof Promise)
            return e.finally
              ? e.finally(function () {
                  return d(a);
                })
              : e.then(
                  function () {
                    return d(a);
                  },
                  function (b) {
                    d(a);
                    throw b;
                  }
                );
          d(a);
        } catch (k) {
          throw (d(a), k);
        }
        return Promise.resolve();
      },
      unlockForEventOnce: function (a) {
        c[a.type] = a;
      },
      resetLocks: function () {
        Object.keys(c).forEach(function (a) {
          return d(c[a]);
        });
      },
    };
    a.initialize = function (a, b, c) {};
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d(
    "@c/aui-untrusted-ajax",
    ["exports", "tslib", "@p/a-ajax", "@c/guard"],
    function (a, c, d, e) {
      function b(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function h(a) {
        a = a && a.http && a.http.getResponseHeader("Content-Type");
        if (!a) return "NO-CONTENT-TYPE-FOUND";
        a = a.split(",").map(function (a) {
          return a.split(";")[0].trim();
        });
        return (
          a.find(function (a) {
            return "application/json" === a || "text/html" === a;
          }) || a[0]
        );
      }
      function k(a, b) {
        return { responseBody: b, contentType: h(a), xhr: a.http };
      }
      function f(a, b) {
        return l["default"].promise(
          new Promise(function (d, e) {
            var q = c.__assign(c.__assign({}, b), {
              abort: function () {
                e("Ajax request aborted");
              },
              error: function (a, b) {
                var c = a.http.status;
                200 === c || 202 === c || 204 === c || 304 === c
                  ? d(k(a, a.http.responseText))
                  : ((a = new t(
                      "Ajax request failed",
                      a.http.status,
                      b,
                      a.http.status
                        ? M
                        : "readyState: " + a.http.readyState + "."
                    )),
                    e(a));
              },
              success: function (a, b, c) {
                d(k(c, a));
              },
            });
            v["default"].ajax(a, q);
          })
        );
      }
      var v = b(d),
        l = b(e),
        m = { contentType: "application/json" },
        t = (function (a) {
          function b(b, c, d, e) {
            e =
              a.call(
                this,
                "[" + c + " " + d + "] " + b + (e ? ". " : "") + (e || "")
              ) || this;
            e.responseMessage = b;
            e.statusCode = c;
            e.statusText = d;
            e.type = "AjaxError";
            return e;
          }
          c.__extends(b, a);
          return b;
        })(Error);
      d = function (a, b, d) {
        b = c.__assign(c.__assign({}, m), b);
        return f(a, {
          timeout: b.timeout,
          accepts: b.accepts,
          contentType: b.contentType,
          headers: b.additionalHeaders || {},
          withCredentials: b.withCredentials || !1,
          params: d || {},
          paramsFormat: "json",
          method: "POST",
        });
      };
      e = function (a, b, d) {
        b = c.__assign(c.__assign({}, m), b);
        return f(a, {
          timeout: b.timeout,
          accepts: b.accepts,
          contentType: b.contentType,
          headers: b.additionalHeaders || {},
          withCredentials: b.withCredentials || !1,
          params: d || {},
          method: "get",
          cache: !1,
        });
      };
      var q = { get: e, post: d };
      a.AjaxError = t;
      a["default"] = q;
      a.get = e;
      a.initialize = function (a, b, c) {};
      a.post = d;
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d(
    "@c/browser-operations",
    "exports @c/guard @c/scoped-dom tslib @c/dom @c/api-lock @p/a-events @p/A @c/logger".split(
      " "
    ),
    function (a, c, d, e, b, h, k, u, v) {
      function l(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function m(a) {
        return (a = a.getAttribute("data-mix-operations")) ? a.trim() : M;
      }
      function t(a, b, c) {
        r["default"].on(G[b], function (d) {
          n["default"].unlockForEvent(
            d || { type: b },
            c.bind(null, {
              event: d,
              type: b,
              operationName: a,
              acknowledge:
                d && d.acknowledge
                  ? function () {
                      return d.acknowledge(document.body);
                    }
                  : function () {},
              stopBubble: function () {
                throw Error("stopBubble not supported for global events");
              },
            })
          );
        });
      }
      function q(a) {
        a.acknowledge = a.acknowledge || function () {};
        C.cards
          .filter(function (b) {
            return b.ScopedDom.isAccessibleEvent(a);
          })
          .forEach(function (b) {
            b.cardHandler(b.operations, b.ScopedDom.proxify(a), a);
          });
      }
      function A(a, c, d) {
        var G = this,
          q = H(d).map(function (z) {
            return K(
              y(z).map(function (b) {
                return a[b] || [];
              })
            )
              .filter(function (a) {
                return a.eventType === d.type;
              })
              .map(function (a) {
                return function () {
                  return e.__awaiter(G, void 0, void 0, function () {
                    var g,
                      p = this;
                    return e.__generator(this, function (D) {
                      switch (D.label) {
                        case 0:
                          return (
                            (g = !1),
                            [
                              4,
                              n["default"].unlockForEvent(d, function () {
                                return e.__awaiter(
                                  p,
                                  void 0,
                                  void 0,
                                  function () {
                                    var p;
                                    return e.__generator(this, function (D) {
                                      switch (D.label) {
                                        case 0:
                                          return (
                                            D.trys.push([0, 2, , 3]),
                                            [
                                              4,
                                              a.callback({
                                                event: c,
                                                type: a.eventType,
                                                target: c.target,
                                                currentTarget: z,
                                                operationName: a.name,
                                                acknowledge: function () {
                                                  return d.acknowledge(
                                                    b.unscope(z)
                                                  );
                                                },
                                                stopBubble: function () {
                                                  g = !0;
                                                },
                                              }),
                                            ]
                                          );
                                        case 1:
                                          return D.sent(), [3, 3];
                                        case 2:
                                          return (
                                            (p = D.sent()),
                                            w["default"].log(p),
                                            [3, 3]
                                          );
                                        case 3:
                                          return [2];
                                      }
                                    });
                                  }
                                );
                              }),
                            ]
                          );
                        case 1:
                          return D.sent(), [2, g];
                      }
                    });
                  });
                };
              });
          });
        return K(q).reduce(function (a, b) {
          return a.then(function (a) {
            return a || b();
          });
        }, Promise.resolve(!1));
      }
      function H(a) {
        var b = a.target,
          c = [];
        if (a.eventPhase === Event.CAPTURING_PHASE) L(b) && m(b) && c.push(b);
        else for (; L(b); ) m(b) && c.push(b), (b = b.parentElement);
        return c;
      }
      function y(a) {
        return (a = m(a))
          ? a.split(/[\s,|]+/).reduce(function (a, b) {
              0 > a.indexOf(b) && a.push(b);
              return a;
            }, [])
          : [];
      }
      function B() {
        return {
          define: function (a, b, c) {
            var d = x["default"].current(c);
            [].concat(b).forEach(function (b) {
              F[b]
                ? t(a, b, d)
                : ((O[a] = O[a] || []),
                  O[a].push({ name: a, eventType: b, callback: d }),
                  0 > C.listeners.indexOf(b) &&
                    (document.addEventListener(b, q, !!J[b]),
                    C.listeners.push(b)));
            });
          },
          attach: function (a, b) {
            var c = b.getAttribute("data-mix-operations");
            c = c ? c.split(" ") : [];
            -1 < c.indexOf(a) || c.push(a);
            b.setAttribute("data-mix-operations", c.join(" "));
          },
        };
      }
      var x = l(c),
        I = l(d),
        n = l(h),
        r = l(k);
      c = l(u);
      var w = l(v),
        C = (f.mixBrowserOperationsState = f.mixBrowserOperationsState || {
          listeners: [],
          cards: [],
        }),
        J = { focus: !0, blur: !0, mouseenter: !0, mouseleave: !0 },
        F = { orientationchange: !0, resize: !0, scroll: !0 },
        G = {
          orientationchange:
            c["default"].constants.BROWSER_EVENTS.ORIENTATION_CHANGE,
          resize: c["default"].constants.BROWSER_EVENTS.RESIZE,
          scroll: c["default"].constants.BROWSER_EVENTS.SCROLL,
        },
        K = function (a) {
          var b;
          switch (a.length) {
            case 0:
              return a;
            case 1:
              return a[0];
            default:
              return (b = []).concat.apply(b, e.__spread(a));
          }
        },
        L = function (a) {
          return (
            !!a &&
            a.nodeType === Node.ELEMENT_NODE &&
            I["default"].isAccessibleElement(a)
          );
        },
        O = {};
      a["default"] = { setup: B };
      a.initialize = function (a, b, c) {
        C.cards.push({
          operations: O,
          cardHandler: A,
          ScopedDom: I["default"],
        });
      };
      a.setup = B;
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d("@c/browser-window", ["exports"], function (a) {
    var c = function () {
        return {
          get devicePixelRatio() {
            return f.devicePixelRatio;
          },
          get innerWidth() {
            return f.innerWidth;
          },
          get innerHeight() {
            return f.innerHeight;
          },
          get outerWidth() {
            return f.outerWidth;
          },
          get outerHeight() {
            return f.outerHeight;
          },
          get pageXOffset() {
            return f.pageXOffset;
          },
          get pageYOffset() {
            return f.pageYOffset;
          },
          get screenX() {
            return f.screenX;
          },
          get screenY() {
            return f.screenY;
          },
          get scrollX() {
            return f.scrollX;
          },
          get scrollY() {
            return f.scrollY;
          },
        };
      },
      d = c();
    a["default"] = d;
    a.getWindow = c;
    a.initialize = function (a, b, c) {};
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@amzn/mix.client-runtime", ["exports", "tslib"], function (a, c) {
    function d(a, b) {
      void 0 === b && (b = function (a) {});
      return setTimeout(function () {
        var c = "Late loading module " + a;
        f.P.log(c, "WARN", "MIX");
        b(c);
      }, 3e3);
    }
    function e(a) {
      var b = l,
        c = new Promise(function (a) {
          b = a;
        }),
        e = d(a);
      c.then(function () {
        return clearTimeout(e);
      });
      return { promise: c, resolve: b };
    }
    function b(a) {
      v[a] || (v[a] = e(a));
      return v[a];
    }
    function h(a, d) {
      return c.__awaiter(this, void 0, void 0, function () {
        function e(a) {
          a in d || (d[a] = q(a));
          return d[a];
        }
        function q(a) {
          return c.__awaiter(this, void 0, void 0, function () {
            var d, q, l, k, m;
            return c.__generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return [4, b(a).promise];
                case 1:
                  return (
                    (d = c.sent()),
                    (q = d.capabilities),
                    (m = l = d.cardModuleFactory),
                    [4, Promise.all((q || []).map(e))]
                  );
                case 2:
                  return (k = m.apply(void 0, [c.sent()])), h.push(k), [2, k];
              }
            });
          });
        }
        var h, l;
        return c.__generator(this, function (b) {
          switch (b.label) {
            case 0:
              return (h = []), [4, Promise.all(a.map(e))];
            case 1:
              return (
                (l = b.sent()),
                [2, { requestedOrder: l, initializationOrder: h }]
              );
          }
        });
      });
    }
    function k(a, b) {
      b = "#" === b[0] ? b.slice(1) : b;
      if ((b = document.getElementById(b)))
        if (b.hasAttribute("data-mix-claimed"))
          a.log(
            "Could not register card: Candidate root claimed",
            "WARN",
            "MIX"
          );
        else return b.setAttribute("data-mix-claimed", "true"), b;
      else
        a.log(
          "Could not register card: Candidate root not found",
          "WARN",
          "MIX"
        );
    }
    function u(a) {
      a = a.getAttribute("data-model");
      if (!a) return M;
      try {
        return JSON.parse(a);
      } catch (A) {
        throw Error("Unable to inflate seed ViewModel: " + A);
      }
    }
    var v = {},
      l = function () {},
      m = function (a, b, c, d) {
        return function (e) {
          var h = b();
          e.filter(function (a) {
            return a.initialize;
          }).forEach(function (b) {
            b.initialized || (b.initialize(a, h, c, d), (b.initialized = !0));
            return b;
          });
        };
      },
      t = function (a, b, d, e, l) {
        void 0 === l && (l = {});
        return c.__awaiter(void 0, void 0, void 0, function () {
          var q, k, m, r, v, f, t, F, G, K, L;
          return c.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  h(null !== (K = b.capabilities) && void 0 !== K ? K : [], e),
                ];
              case 1:
                return (
                  (q = n.sent()),
                  (k = q.initializationOrder),
                  (m = q.requestedOrder),
                  (v = []),
                  0 !== a.indexOf("@") ? [3, 3] : [4, h([a], e)]
                );
              case 2:
                return (
                  (f = n.sent()),
                  (t = c.__read(f.requestedOrder, 1)),
                  (F = t[0]),
                  (G = f.initializationOrder),
                  (r = F),
                  (v = G),
                  [3, 4]
                );
              case 3:
                (r =
                  null !== (L = l[a]) && void 0 !== L
                    ? L
                    : (l[a] = b.cardModuleFactory(m, d))),
                  (n.label = 4);
              case 4:
                return [
                  2,
                  {
                    resolvedMod: r,
                    capabilitiesToInitialize: c.__spread(v, k),
                  },
                ];
            }
          });
        });
      };
    a.registerCapabilityModule = function (a, c) {
      b(a).resolve(c);
    };
    a.registerCardFactory = function (a, b) {
      return c.__awaiter(this, void 0, void 0, function () {
        var e,
          h,
          l,
          q,
          v,
          n,
          r,
          w,
          C,
          A,
          F = this;
        return c.__generator(this, function (G) {
          switch (G.label) {
            case 0:
              e = {};
              if ((h = b.require))
                (q = {}),
                  (l = function (a, b, G) {
                    var r = d(a[0], function () {});
                    h(
                      a,
                      function (d) {
                        return c.__awaiter(F, void 0, void 0, function () {
                          var h, F, k, z, m;
                          return c.__generator(this, function (g) {
                            switch (g.label) {
                              case 0:
                                clearTimeout(r);
                                h = a[0];
                                if (!d.cardModuleFactory) return [3, 5];
                                g.label = 1;
                              case 1:
                                return (
                                  g.trys.push([1, 3, , 4]),
                                  [4, t(h, d, l, e, q)]
                                );
                              case 2:
                                return (
                                  (F = g.sent()),
                                  (k = F.resolvedMod),
                                  (z = F.capabilitiesToInitialize),
                                  A(c.__spread([k], z)),
                                  b(k),
                                  [3, 4]
                                );
                              case 3:
                                return (m = g.sent()), G(m), [3, 4];
                              case 4:
                                return [3, 6];
                              case 5:
                                b(d), (g.label = 6);
                              case 6:
                                return [2];
                            }
                          });
                        });
                      },
                      G
                    );
                  });
              return [4, t(a, b, l, e)];
            case 1:
              return (
                (v = G.sent()),
                (n = v.resolvedMod),
                (r = v.capabilitiesToInitialize),
                (w = n.P),
                (A = m(
                  a,
                  function () {
                    return C;
                  },
                  n,
                  w
                )),
                [
                  2,
                  new Promise(function (b, c) {
                    w.execute(function () {
                      var d = k(w, a);
                      d
                        ? ((C = u(d)),
                          A(r),
                          f.mixCardInitTimeouts &&
                            clearTimeout(f.mixCardInitTimeouts[a]),
                          (d = n.card(C)) && d.then
                            ? d
                                .then(function () {
                                  b();
                                })
                                .catch(function (a) {
                                  w.log(a.message, "FATAL");
                                  c(a);
                                })
                            : b())
                        : (f.mixCardInitTimeouts &&
                            clearTimeout(f.mixCardInitTimeouts[a]),
                          b());
                    });
                  }),
                ]
              );
          }
        });
      });
    };
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/csa", ["exports", "tslib"], function (a, c) {
    a.callEventInstance = function (a, e) {
      for (var b = [], d = 2; d < arguments.length; d++)
        b[d - 2] = arguments[d];
      (d = f.mix_csa_event) && d(a).apply(void 0, c.__spread([e], b));
    };
    a.initialize = function (a, c, b) {};
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/dom", ["exports"], function (a) {
    var c,
      d,
      e = [],
      b = function (a) {
        return document.createElement(a);
      },
      h = {
        createElement: b,
        get cardRoot() {
          return d;
        },
        get container() {
          return c;
        },
        get scopes() {
          return e;
        },
      };
    a.cardRoot = function () {
      return d;
    };
    a.container = function () {
      return c;
    };
    a.createElement = b;
    a["default"] = h;
    a.initialize = function (a, b, h) {
      a = "#" === a[0] ? a.slice(1) : a;
      d = document.getElementById(a);
      if (!d) throw Error("No node found for dom initialization");
      c = d.parentNode;
      e = [d];
    };
    a.scopes = function () {
      return e;
    };
    a.unscope = function (a) {
      return a && a.__unscope__ ? a.__unscope__(h) : a;
    };
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/guard", ["exports", "@c/logger"], function (a, c) {
    var d = c && "object" === typeof c && "default" in c ? c : { default: c },
      e;
    c = function (a, b) {
      return e.guardFatal(a, b);
    };
    var b = function (a, b) {
        return e.guardError(a, b);
      },
      h = function (a) {
        return e.guardCurrent(a);
      },
      f = function (a) {
        return a.catch(function (a) {
          d["default"].log(a.message);
          throw a;
        });
      },
      u = { asFatal: c, asError: b, current: h, promise: f };
    a.asError = b;
    a.asFatal = c;
    a.current = h;
    a["default"] = u;
    a.initialize = function (a, b, c, d) {
      e = d;
    };
    a.promise = f;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/logger", ["exports"], function (a) {
    var c,
      d = function (a, b, d) {
        return a.message ? c.logError(a, null, b, d) : c.log(a, b, d);
      };
    a["default"] = { log: d };
    a.initialize = function (a, b, d, f) {
      c = f;
    };
    a.log = d;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/metrics", ["exports"], function (a) {
    var c,
      d = function (a, b, c) {
        return f.ue.count(a, b, c);
      },
      e = function (a, b, c, d) {
        f.ue.event(a, b, c, d);
      },
      b = function (a, b, c, d) {
        f.uet(a, b, c, d);
      },
      h = function (a, b, c) {
        f.uex(a, b, c);
      },
      k = function () {
        return k;
      },
      u = {
        count: d,
        event: e,
        uet: b,
        uex: h,
        get rid() {
          return c;
        },
      };
    a.count = d;
    a["default"] = u;
    a.event = e;
    a.initialize = function (a, b, d) {
      c = f.ue.rid;
    };
    a.rid = k;
    a.uet = b;
    a.uex = h;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/navigation", ["exports"], function (a) {
    var c = function (a) {
        f.location.assign(a);
      },
      d = function () {
        return {
          get hash() {
            return f.location.hash;
          },
          get host() {
            return f.location.host;
          },
          get hostname() {
            return f.location.hostname;
          },
          get href() {
            return f.location.href;
          },
          get origin() {
            return f.location.origin;
          },
          get pathname() {
            return f.location.pathname;
          },
          get port() {
            return f.location.port;
          },
          get protocol() {
            return f.location.protocol;
          },
          get search() {
            return f.location.search;
          },
        };
      };
    a["default"] = { setLocation: c, getLocation: d };
    a.getLocation = d;
    a.initialize = function (a, b, c) {};
    a.setLocation = c;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d(
    "@c/remote-operations",
    "exports tslib @c/dom @c/aui-untrusted-ajax @c/guard @c/metrics @c/scoped-dom @c/scoped-metrics".split(
      " "
    ),
    function (a, c, d, e, b, h, k, u) {
      function v(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function l(a) {
        var b = function (d) {
          var g = b.trackingApplicable,
            p = b.trackingParams,
            D = b.trackingStandalone,
            z = O + a,
            e = {
              "page-type": "page-type" in G ? G["page-type"] : "undefined",
            };
          N !== M &&
            (D && (z += -1 !== z.indexOf("?") ? "\x26track\x3dtrue" : "/track"),
            (e = c.__assign(c.__assign({}, e), (g ? K(N, p || {}) : N) || {})));
          P && (e = c.__assign(c.__assign({}, e), { stamp: P }));
          g = [];
          for (var F in e)
            e.hasOwnProperty(F) &&
              ((p = e[F]),
              g.push(encodeURIComponent(F) + "\x3d" + encodeURIComponent(p)));
          z += (-1 !== z.indexOf("?") ? "\x26" : "?") + g.join("\x26");
          return n(z, a, d, E);
        };
        b.factoryClone = function (b) {
          var g = l(a);
          b &&
            ((g.trackingParams = b.trackingParams || {}),
            (g.trackingStandalone = b.trackingStandalone),
            (g.trackingApplicable = b.trackingApplicable));
          return g;
        };
        return b;
      }
      function m(a, b) {
        0 < b.length &&
          b.forEach(function (b) {
            a[b] = l(b);
          });
      }
      function t(a) {
        void 0 === a && (a = []);
        m(S, a);
        return S;
      }
      var q = v(d),
        A = v(e),
        H = v(b),
        y = v(h),
        B = v(k),
        x = v(u),
        I = function (a) {
          return a && "AjaxError" === a.type;
        },
        n = function (a, b, c, g) {
          a = A["default"].post(
            a,
            {
              accepts: "text/html, application/json",
              contentType: "application/json",
              additionalHeaders: { "x-amz-acp-params": g },
            },
            c
          );
          a.then(
            function () {
              r(b, "success");
            },
            function (a) {
              if (I(a)) {
                var g = a.statusCode;
                "Request Timeout" === a.statusText
                  ? r(b, "timeout")
                  : r(b, "error", g);
              } else "Ajax request aborted" === a && r(b, "abort");
            }
          );
          return H["default"].promise(
            a.then(function (a) {
              var b = a.contentType;
              a = a.responseBody;
              if ("NO-CONTENT-TYPE-FOUND" !== b || a) {
                if ("application/json" === b) return a || {};
                if ("text/html" === b)
                  try {
                    var g = new DOMParser()
                      .parseFromString(a, "text/html")
                      .querySelector("body").firstElementChild;
                    return B["default"].proxify(g, g);
                  } catch (Q) {
                    throw Error(
                      "Error encountered when parsing html response: " + Q
                    );
                  }
                else
                  throw Error(
                    "Unexpected content-type found when parsing response: " + b
                  );
              }
            })
          );
        },
        r = function (a, b, c) {
          w(y["default"].count, "mix:remoteOperations", b, c);
          w(x["default"].count, "remoteOperations:" + a, b, c);
        },
        w = function (a, b, c, g) {
          "success" === c
            ? a(b + ":attempt", 1)
            : (a(b + ":attempt", 0), a(b + ":error:" + (g || c), 1));
        },
        C = /[-_]$/,
        J = /^[-_]/,
        F = { hitType: "pageTouch", pageAssemblyType: "main" };
      d = f.uept;
      e = f.ue_pty;
      b = f.ue_spty;
      h = {};
      d
        ? (h = { "page-type": d.pageType, "sub-page-type": d.subPageType })
        : e && b && (h = { "page-type": e, "sub-page-type": b });
      var G = c.__assign({}, h),
        K = function (a, b) {
          var d = b.refSuffix,
            g = b.ref_;
          b = c.__rest(b, ["refSuffix", "ref_"]);
          var p = a.ref_ || "";
          g = g || "";
          d = d || "";
          var D = p;
          g
            ? (D = g)
            : d &&
              ((g = p.match(C) || d.match(J)), (D = [p, d].join(g ? "" : "_")));
          p = (p = D) ? { ref_: p } : {};
          return c.__assign(
            c.__assign(c.__assign(c.__assign(c.__assign({}, G), a), b), p),
            F
          );
        },
        L = function () {
          return "Bad data-acp-tracking value.";
        },
        O,
        E,
        N,
        P,
        S = {};
      a["default"] = { setup: t };
      a.initialize = function (a, b, c) {
        if (
          (a = q["default"].cardRoot) &&
          a.hasAttribute("data-acp-path") &&
          a.hasAttribute("data-acp-params")
        ) {
          O = a.getAttribute("data-acp-path") || "";
          b = a.getAttribute("data-acp-params") || "";
          try {
            var g = document.createElement("textarea");
            g.innerHTML = b;
            E =
              0 === g.childNodes.length ? "" : g.childNodes[0].nodeValue || "";
          } catch (p) {
            throw Error(
              "Issue encountered while parsing card attributes when setting up RemoteOperations, error: " +
                p
            );
          }
          a.removeAttribute("data-acp-path");
          a.removeAttribute("data-acp-params");
          a.hasAttribute("data-acp-stamp") &&
            ((P = a.getAttribute("data-acp-stamp") || ""),
            a.removeAttribute("data-acp-stamp"));
        } else
          throw Error(
            "Remote Operation capability requires card root node to exist and have attribute: data-acp-path \x26 data-acp-params"
          );
        a: {
          if (q["default"].cardRoot.hasAttribute("data-acp-tracking"))
            try {
              N = JSON.parse(
                q["default"].cardRoot.getAttribute("data-acp-tracking")
              );
              break a;
            } catch (p) {
              f.P.logError(
                p,
                p instanceof SyntaxError ? "" + L : null,
                "ERROR"
              );
            }
          N = M;
        }
        c._operationNames && m(S, c._operationNames);
      };
      a.isAjaxError = I;
      a.setup = t;
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d("@c/scoped-dom", ["exports", "tslib", "@c/dom"], function (a, c, d) {
    function e(a, b) {
      return a instanceof HTMLElement || a instanceof Node
        ? (b && b.contains(a)) ||
            q["default"].scopes.some(function (b) {
              return b.contains(a);
            }) ||
            !document.body.contains(a)
        : !0;
    }
    function b(a, b) {
      if ("undefined" === typeof Proxy || "undefined" === typeof Reflect)
        return a;
      var c =
        a instanceof HTMLElement || a instanceof Node
          ? l()
          : a instanceof HTMLCollection || a instanceof NodeList
          ? t()
          : a instanceof Event
          ? v()
          : void 0;
      e(a, b)
        ? c && (a[C] || (a[C] = new Proxy(a, c)), (a = a[C]))
        : (a = null);
      return a;
    }
    function h(a) {
      return function () {
        for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
        b = b.map(function (a) {
          return "function" === typeof a
            ? k(a)
            : a !== M && a.__unscope__
            ? d.unscope(a)
            : a;
        });
        return a.apply(d.unscope(this), b);
      };
    }
    function k(a) {
      return (
        a.__proxy ||
        (a.__proxy = function () {
          for (var c = [], d = 0; d < arguments.length; d++)
            c[d] = arguments[d];
          return a.apply(
            b(this),
            c.map(function (a) {
              return b(a);
            })
          );
        })
      );
    }
    function u(a) {
      return function (b) {
        if (b === q["default"]) return a;
        throw Error("Unable to unscope event target, password does not match.");
      };
    }
    function v() {
      return {
        get: function (a, c) {
          var d = Reflect.get(a, c);
          if (c === C) return d;
          var e = Object.getOwnPropertyDescriptor(a, c);
          return e && !1 === e.configurable && !1 === e.writable
            ? d
            : "__unscope__" === c
            ? u(a)
            : "function" === typeof d
            ? m(d, a, c)
            : b(d);
        },
      };
    }
    function l() {
      return {
        get: function (a, c) {
          var d = Reflect.get(a, c);
          if (c === C) return d;
          var e = Object.getOwnPropertyDescriptor(a, c);
          if (e && !1 === e.configurable && !1 === e.writable) return d;
          if ("ownerDocument" === c) return null;
          if ("__unscope__" === c) return u(a);
          "closest" === c && (d = H);
          return "function" === typeof d ? m(d, a, c) : b(d);
        },
        set: function (a, c, d) {
          "string" === typeof c && c.startsWith("on") && "function" === typeof d
            ? Reflect.set(a, c, function (a) {
                d.call(b(this), b(a));
              })
            : Reflect.set(a, c, d);
          return !0;
        },
      };
    }
    function m(a, d, e) {
      var r = (d[J] = d[J] || {}),
        f = r[e];
      if (!f) {
        if ("addEventListener" === e) {
          var q = a;
          a = function (a, b, d) {
            b =
              "handleEvent" in b
                ? c.__assign(c.__assign({}, b), {
                    handleEvent: k(b.handleEvent),
                  })
                : b;
            return q.call(this, a, b, d);
          };
        }
        f = h(a);
        r[e] = f;
      }
      return function () {
        for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
        return b(f.apply(d, a));
      };
    }
    function t() {
      return {
        get: function (a, c) {
          var d = Reflect.get(a, c),
            e = Object.getOwnPropertyDescriptor(a, c);
          return e && !1 === e.configurable && !1 === e.writable
            ? d
            : "number" === typeof c ||
              ("string" === typeof c &&
                Number.isInteger(Number.parseInt(c, 10)))
            ? b(d)
            : "__unscope__" === c
            ? u(a)
            : d;
        },
      };
    }
    var q = d && "object" === typeof d && "default" in d ? d : { default: d };
    f.mixCardIndex = f.mixCardIndex || 0;
    var A =
        Element.prototype.matches ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector,
      H =
        Element.prototype.closest ||
        function (a) {
          var b = this;
          do {
            if (A.call(b, a)) return b;
            b = b.parentNode;
          } while (b);
          return null;
        },
      y = "body frame frameset head html iframe script style".split(" "),
      B = function (a) {
        var c = b(a, a);
        q["default"].scopes.push(a);
        return {
          root: c,
          validate: function (a) {
            return a();
          },
          isAccessibleEvent: function (a) {
            return e(a.target, c);
          },
        };
      },
      x = function (a) {
        return e.apply(void 0, c.__spread([a.target], q["default"].scopes));
      },
      I = function (a) {
        return e.apply(void 0, c.__spread([a], q["default"].scopes));
      },
      n = function (a) {
        return a();
      },
      r = function (a) {
        if (-1 < y.indexOf(a))
          throw Error(
            "The following element is not allowed to be created in cards: '" +
              a +
              "'."
          );
        a = document.createElement(a);
        return b(a);
      },
      w = {
        get cardRoot() {
          return b(q["default"].cardRoot, q["default"].cardRoot);
        },
        scopeElement: B,
        isAccessibleEvent: x,
        isAccessibleElement: I,
        validate: n,
        createElement: r,
        proxify: b,
      },
      C,
      J;
    a.cardRoot = function () {
      return b(q["default"].cardRoot, q["default"].cardRoot);
    };
    a.createElement = r;
    a["default"] = w;
    a.initialize = function (a, b, c) {
      a = f.mixCardIndex++;
      C = "__proxified_" + a;
      J = "__wrappedSafeMethods_" + a;
    };
    a.isAccessibleElement = I;
    a.isAccessibleEvent = x;
    a.scopeElement = B;
    a.validate = n;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d(
    "@c/scoped-metrics",
    ["exports", "tslib", "@c/metrics", "@c/dom"],
    function (a, c, d, e) {
      var b = e && "object" === typeof e && "default" in e ? e : { default: e },
        h = [];
      e = function (a, c) {
        void 0 === c && (c = "");
        var d = b["default"].cardRoot.parentElement;
        d &&
          d.classList.contains("celwidget") &&
          ((c =
            (d.getAttribute("cel_widget_id") ||
              d.getAttribute("data-cel-widget") ||
              d.getAttribute("id")) + c),
          a.setAttribute("cel_widget_id", c),
          a.setAttribute("data-cel-widget", c),
          d.classList.contains("c-f") && a.classList.add("c-f"),
          a.classList.add("celwidget"));
      };
      var f = function (a, b, c) {
          h.forEach(function (e) {
            d.count(e + ":" + a, b, c);
          });
        },
        u = { count: f, instrumentCel: e };
      a.count = f;
      a["default"] = u;
      a.initialize = function (a, d, e) {
        if ((a = b["default"].cardRoot.getAttribute("data-card-metrics-id")))
          (a = c.__read(a.split("_", 1), 1)[0]), h.push(a);
      };
      a.instrumentCel = e;
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d("@c/siege", ["exports"], function (a) {
    var c = function (a, b) {
        return a.factoryClone({
          trackingParams: { sif_profile: b },
          trackingApplicable: !0,
        });
      },
      d = { applySifProfile: c };
    a.applySifProfile = c;
    a["default"] = d;
    a.initialize = function (a, b, c) {};
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/sudo", ["exports"], function (a) {
    a["default"] = {
      get cardRoot() {
        return null;
      },
    };
    a.initialize = function (a, d, e) {};
    a.sudo = {};
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/timing", ["exports", "tslib", "@c/dom"], function (a, c, d) {
    var e = d && "object" === typeof d && "default" in d ? d : { default: d },
      b,
      h;
    a.CARD_METRICS_ID_KEY = "data-card-metrics-id";
    a.CEL_WIDGET_KEY = "cel_widget_id";
    a.INSTANCE_ID_KEY = "id";
    a.callEventInstance = function (a, b) {
      for (var d = [], e = 2; e < arguments.length; e++)
        d[e - 2] = arguments[e];
      (e = f.mix_csa_event) && e(a).apply(void 0, c.__spread([b], d));
    };
    a.initialize = function (a, c, d) {
      b = e["default"].cardRoot
        ? e["default"].cardRoot.getAttribute("id")
        : null;
      h = e["default"].cardRoot
        ? e["default"].cardRoot.getAttribute("data-card-metrics-id")
        : null;
    };
    a.markFunctional = function () {
      var a = f.mix_csa;
      a &&
        h &&
        a('[cel_widget_id\x3d"' + h + '"]', "#" + b)("mark", "functional");
    };
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d(
    "@c/tracking",
    ["exports", "tslib", "@c/dom", "@c/logger", "@c/remote-operations"],
    function (a, c, d, e, b) {
      function f(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      var k = f(d),
        u = f(e),
        v = f(b),
        l = {
          missingAcpTrackingValue: function () {
            return "Missing data-acp-tracking.";
          },
        },
        m = function () {
          if (!k["default"].cardRoot.hasAttribute("data-acp-tracking")) {
            var a = l.missingAcpTrackingValue();
            u["default"].log(Error(a), "FATAL");
            return !1;
          }
          return !0;
        },
        t = function (a, b, c) {
          void 0 === b && (b = {});
          void 0 === c && (c = !1);
          return a.factoryClone({
            trackingParams: b,
            trackingStandalone: c,
            trackingApplicable: !0,
          });
        };
      d = function (a, b, d) {
        void 0 === b && (b = {});
        var e = v["default"].setup([a]);
        return m()
          ? t(e[a], c.__assign(c.__assign({}, b), { refSuffix: d }), !0)
          : e[a];
      };
      e = function (a, b, d) {
        void 0 === b && (b = {});
        return m() ? t(a, c.__assign(c.__assign({}, b), { refSuffix: d })) : a;
      };
      b = { createTracking: d, addTracking: e };
      a.addTracking = e;
      a.createTracking = d;
      a["default"] = b;
      a.initialize = function (a, b, c) {};
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d("@c/weblabs", ["exports"], function (a) {
    var c = function (a, c, b) {
      f.ue.trigger(a, c, b);
    };
    a["default"] = { trigger: c };
    a.initialize = function (a, c, b) {};
    a.trigger = c;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  (function () {
    var a = function (a, b, c) {
      mix_d(a, b, c);
    };
    a.amd = !0;
    var c,
      d,
      e,
      b,
      f,
      k,
      u,
      v,
      l,
      m,
      t,
      q,
      A,
      H,
      y,
      B,
      x,
      I,
      n,
      r,
      w,
      C,
      J,
      F,
      G,
      K,
      L,
      O,
      E,
      N,
      P;
    (function (b) {
      function c(a, b) {
        a !== d &&
          ("function" === typeof Object.create
            ? Object.defineProperty(a, "__esModule", { value: !0 })
            : (a.__esModule = !0));
        return function (c, d) {
          return (a[c] = b ? b(c, d) : d);
        };
      }
      var d =
        "object" === typeof global
          ? global
          : "object" === typeof self
          ? self
          : "object" === typeof this
          ? this
          : {};
      "function" === typeof a && a.amd
        ? a("tslib", ["exports"], function (a) {
            b(c(d, c(a)));
          })
        : "object" === typeof module && "object" === typeof module.exports
        ? b(c(d, c(module.exports)))
        : b(c(d));
    })(function (a) {
      var h =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, b) {
            a.__proto__ = b;
          }) ||
        function (a, b) {
          for (var c in b)
            Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
        };
      c = function (a, b) {
        function c() {
          this.constructor = a;
        }
        if ("function" !== typeof b && null !== b)
          throw new TypeError(
            "Class extends value " + String(b) + " is not a constructor or null"
          );
        h(a, b);
        a.prototype =
          null === b
            ? Object.create(b)
            : ((c.prototype = b.prototype), new c());
      };
      d =
        Object.assign ||
        function (a) {
          for (var b, c = 1, d = arguments.length; c < d; c++) {
            b = arguments[c];
            for (var g in b)
              Object.prototype.hasOwnProperty.call(b, g) && (a[g] = b[g]);
          }
          return a;
        };
      e = function (a, b) {
        var c = {},
          d;
        for (d in a)
          Object.prototype.hasOwnProperty.call(a, d) &&
            0 > b.indexOf(d) &&
            (c[d] = a[d]);
        if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
          var g = 0;
          for (d = Object.getOwnPropertySymbols(a); g < d.length; g++)
            0 > b.indexOf(d[g]) &&
              Object.prototype.propertyIsEnumerable.call(a, d[g]) &&
              (c[d[g]] = a[d[g]]);
        }
        return c;
      };
      b = function (a, b, c, d) {
        var g = arguments.length,
          p =
            3 > g
              ? b
              : null === d
              ? (d = Object.getOwnPropertyDescriptor(b, c))
              : d,
          e;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          p = Reflect.decorate(a, b, c, d);
        else
          for (var D = a.length - 1; 0 <= D; D--)
            if ((e = a[D]))
              p = (3 > g ? e(p) : 3 < g ? e(b, c, p) : e(b, c)) || p;
        return 3 < g && p && Object.defineProperty(b, c, p), p;
      };
      f = function (a, b) {
        return function (c, d) {
          b(c, d, a);
        };
      };
      k = function (a, b, c, d, e, z) {
        function g(a) {
          if (void 0 !== a && "function" !== typeof a)
            throw new TypeError("Function expected");
          return a;
        }
        var p = d.kind,
          D = "getter" === p ? "get" : "setter" === p ? "set" : "value";
        a = !b && a ? (d["static"] ? a : a.prototype) : null;
        b = b || (a ? Object.getOwnPropertyDescriptor(a, d.name) : {});
        for (var f, r = !1, h = c.length - 1; 0 <= h; h--) {
          f = {};
          for (var T in d) f[T] = "access" === T ? {} : d[T];
          for (T in d.access) f.access[T] = d.access[T];
          f.addInitializer = function (a) {
            if (r)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            z.push(g(a || null));
          };
          var Q = (0, c[h])(
            "accessor" === p ? { get: b.get, set: b.set } : b[D],
            f
          );
          if ("accessor" === p) {
            if (void 0 !== Q) {
              if (null === Q || "object" !== typeof Q)
                throw new TypeError("Object expected");
              if ((f = g(Q.get))) b.get = f;
              if ((f = g(Q.set))) b.set = f;
              (f = g(Q.init)) && e.unshift(f);
            }
          } else if ((f = g(Q))) "field" === p ? e.unshift(f) : (b[D] = f);
        }
        a && Object.defineProperty(a, d.name, b);
        r = !0;
      };
      u = function (a, b, c) {
        for (var d = 2 < arguments.length, g = 0; g < b.length; g++)
          c = d ? b[g].call(a, c) : b[g].call(a);
        return d ? c : void 0;
      };
      v = function (a) {
        return "symbol" === typeof a ? a : "".concat(a);
      };
      l = function (a, b, c) {
        "symbol" === typeof b &&
          (b = b.description ? "[".concat(b.description, "]") : "");
        return Object.defineProperty(a, "name", {
          configurable: !0,
          value: c ? "".concat(c, " ", b) : b,
        });
      };
      m = function (a, b) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(a, b);
      };
      t = function (a, b, c, d) {
        function g(a) {
          return a instanceof c
            ? a
            : new c(function (b) {
                b(a);
              });
        }
        return new (c || (c = Promise))(function (c, e) {
          function p(a) {
            try {
              D(d.next(a));
            } catch (W) {
              e(W);
            }
          }
          function f(a) {
            try {
              D(d["throw"](a));
            } catch (W) {
              e(W);
            }
          }
          function D(a) {
            a.done ? c(a.value) : g(a.value).then(p, f);
          }
          D((d = d.apply(a, b || [])).next());
        });
      };
      q = function (a, b) {
        function c(a) {
          return function (b) {
            return d([a, b]);
          };
        }
        function d(c) {
          if (e) throw new TypeError("Generator is already executing.");
          for (; z && ((z = 0), c[0] && (g = 0)), g; )
            try {
              if (
                ((e = 1),
                p &&
                  (f =
                    c[0] & 2
                      ? p["return"]
                      : c[0]
                      ? p["throw"] || ((f = p["return"]) && f.call(p), 0)
                      : p.next) &&
                  !(f = f.call(p, c[1])).done)
              )
                return f;
              if (((p = 0), f)) c = [c[0] & 2, f.value];
              switch (c[0]) {
                case 0:
                case 1:
                  f = c;
                  break;
                case 4:
                  return g.label++, { value: c[1], done: !1 };
                case 5:
                  g.label++;
                  p = c[1];
                  c = [0];
                  continue;
                case 7:
                  c = g.ops.pop();
                  g.trys.pop();
                  continue;
                default:
                  if (
                    !((f = g.trys), (f = 0 < f.length && f[f.length - 1])) &&
                    (6 === c[0] || 2 === c[0])
                  ) {
                    g = 0;
                    continue;
                  }
                  if (3 === c[0] && (!f || (c[1] > f[0] && c[1] < f[3])))
                    g.label = c[1];
                  else if (6 === c[0] && g.label < f[1])
                    (g.label = f[1]), (f = c);
                  else if (f && g.label < f[2]) (g.label = f[2]), g.ops.push(c);
                  else {
                    f[2] && g.ops.pop();
                    g.trys.pop();
                    continue;
                  }
              }
              c = b.call(a, g);
            } catch (ba) {
              (c = [6, ba]), (p = 0);
            } finally {
              e = f = 0;
            }
          if (c[0] & 5) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        }
        var g = {
            label: 0,
            sent: function () {
              if (f[0] & 1) throw f[1];
              return f[1];
            },
            trys: [],
            ops: [],
          },
          e,
          p,
          f,
          z;
        return (
          (z = { next: c(0), throw: c(1), return: c(2) }),
          "function" === typeof Symbol &&
            (z[Symbol.iterator] = function () {
              return this;
            }),
          z
        );
      };
      A = function (a, b) {
        for (var c in a)
          "default" === c ||
            Object.prototype.hasOwnProperty.call(b, c) ||
            E(b, a, c);
      };
      E = Object.create
        ? function (a, b, c, d) {
            d === M && (d = c);
            var g = Object.getOwnPropertyDescriptor(b, c);
            if (
              !g ||
              ("get" in g ? !b.__esModule : g.writable || g.configurable)
            )
              g = {
                enumerable: !0,
                get: function () {
                  return b[c];
                },
              };
            Object.defineProperty(a, d, g);
          }
        : function (a, b, c, d) {
            d === M && (d = c);
            a[d] = b[c];
          };
      H = function (a) {
        var b = "function" === typeof Symbol && Symbol.iterator,
          c = b && a[b],
          d = 0;
        if (c) return c.call(a);
        if (a && "number" === typeof a.length)
          return {
            next: function () {
              a && d >= a.length && (a = void 0);
              return { value: a && a[d++], done: !a };
            },
          };
        throw new TypeError(
          b ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
      y = function (a, b) {
        var c = "function" === typeof Symbol && a[Symbol.iterator];
        if (!c) return a;
        a = c.call(a);
        var d,
          g = [];
        try {
          for (; (void 0 === b || 0 < b--) && !(d = a.next()).done; )
            g.push(d.value);
        } catch (R) {
          var e = { error: R };
        } finally {
          try {
            d && !d.done && (c = a["return"]) && c.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
        return g;
      };
      B = function () {
        for (var a = [], b = 0; b < arguments.length; b++)
          a = a.concat(y(arguments[b]));
        return a;
      };
      x = function () {
        for (var a = 0, b = 0, c = arguments.length; b < c; b++)
          a += arguments[b].length;
        a = Array(a);
        var d = 0;
        for (b = 0; b < c; b++)
          for (var e = arguments[b], f = 0, z = e.length; f < z; f++, d++)
            a[d] = e[f];
        return a;
      };
      I = function (a, b, c) {
        if (c || 2 === arguments.length)
          for (var d = 0, g = b.length, e; d < g; d++)
            (!e && d in b) ||
              (e || (e = Array.prototype.slice.call(b, 0, d)), (e[d] = b[d]));
        return a.concat(e || Array.prototype.slice.call(b));
      };
      n = function (a) {
        return this instanceof n ? ((this.v = a), this) : new n(a);
      };
      r = function (a, b, c) {
        function d(a) {
          z[a] &&
            (r[a] = function (b) {
              return new Promise(function (c, d) {
                1 < h.push([a, b, c, d]) || g(a, b);
              });
            });
        }
        function g(a, b) {
          try {
            var c = z[a](b);
            c.value instanceof n
              ? Promise.resolve(c.value.v).then(e, f)
              : p(h[0][2], c);
          } catch (aa) {
            p(h[0][3], aa);
          }
        }
        function e(a) {
          g("next", a);
        }
        function f(a) {
          g("throw", a);
        }
        function p(a, b) {
          (a(b), h.shift(), h.length) && g(h[0][0], h[0][1]);
        }
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var z = c.apply(a, b || []),
          r,
          h = [];
        return (
          (r = {}),
          d("next"),
          d("throw"),
          d("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
      };
      w = function (a) {
        function b(b, g) {
          c[b] = a[b]
            ? function (c) {
                return (d = !d)
                  ? { value: n(a[b](c)), done: !1 }
                  : g
                  ? g(c)
                  : c;
              }
            : g;
        }
        var c, d;
        return (
          (c = {}),
          b("next"),
          b("throw", function (a) {
            throw a;
          }),
          b("return"),
          (c[Symbol.iterator] = function () {
            return this;
          }),
          c
        );
      };
      C = function (a) {
        function b(b) {
          g[b] =
            a[b] &&
            function (d) {
              return new Promise(function (g, e) {
                d = a[b](d);
                c(g, e, d.done, d.value);
              });
            };
        }
        function c(a, b, c, d) {
          Promise.resolve(d).then(function (b) {
            a({ value: b, done: c });
          }, b);
        }
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var d = a[Symbol.asyncIterator],
          g;
        return d
          ? d.call(a)
          : ((a = "function" === typeof H ? H(a) : a[Symbol.iterator]()),
            (g = {}),
            b("next"),
            b("throw"),
            b("return"),
            (g[Symbol.asyncIterator] = function () {
              return this;
            }),
            g);
      };
      J = function (a, b) {
        Object.defineProperty
          ? Object.defineProperty(a, "raw", { value: b })
          : (a.raw = b);
        return a;
      };
      var z = Object.create
        ? function (a, b) {
            Object.defineProperty(a, "default", { enumerable: !0, value: b });
          }
        : function (a, b) {
            a["default"] = b;
          };
      F = function (a) {
        if (a && a.__esModule) return a;
        var b = {};
        if (null != a)
          for (var c in a)
            "default" !== c &&
              Object.prototype.hasOwnProperty.call(a, c) &&
              E(b, a, c);
        z(b, a);
        return b;
      };
      G = function (a) {
        return a && a.__esModule ? a : { default: a };
      };
      K = function (a, b, c, d) {
        if ("a" === c && !d)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" === typeof b ? a !== b || !d : !b.has(a))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === c ? d : "a" === c ? d.call(a) : d ? d.value : b.get(a);
      };
      L = function (a, b, c, d, e) {
        if ("m" === d) throw new TypeError("Private method is not writable");
        if ("a" === d && !e)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" === typeof b ? a !== b || !e : !b.has(a))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === d ? e.call(a, c) : e ? (e.value = c) : b.set(a, c), c;
      };
      O = function (a, b) {
        if (null === b || ("object" !== typeof b && "function" !== typeof b))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" === typeof a ? b === a : a.has(b);
      };
      N = function (a, b, c) {
        if (null !== b && void 0 !== b) {
          if ("object" !== typeof b && "function" !== typeof b)
            throw new TypeError("Object expected.");
          if (c) {
            if (!Symbol.asyncDispose)
              throw new TypeError("Symbol.asyncDispose is not defined.");
            var d = b[Symbol.asyncDispose];
          }
          if (void 0 === d) {
            if (!Symbol.dispose)
              throw new TypeError("Symbol.dispose is not defined.");
            d = b[Symbol.dispose];
          }
          if ("function" !== typeof d)
            throw new TypeError("Object not disposable.");
          a.stack.push({ value: b, dispose: d, async: c });
        } else c && a.stack.push({ async: !0 });
        return b;
      };
      var Y =
        "function" === typeof SuppressedError
          ? SuppressedError
          : function (a, b, c) {
              c = Error(c);
              return (
                (c.name = "SuppressedError"),
                (c.error = a),
                (c.suppressed = b),
                c
              );
            };
      P = function (a) {
        function b(b) {
          a.error = a.hasError
            ? new Y(b, a.error, "An error was suppressed during disposal.")
            : b;
          a.hasError = !0;
        }
        function c() {
          for (; a.stack.length; ) {
            var d = a.stack.pop();
            try {
              var e = d.dispose && d.dispose.call(d.value);
              if (d.async)
                return Promise.resolve(e).then(c, function (a) {
                  b(a);
                  return c();
                });
            } catch (Z) {
              b(Z);
            }
          }
          if (a.hasError) throw a.error;
        }
        return c();
      };
      a("__extends", c);
      a("__assign", d);
      a("__rest", e);
      a("__decorate", b);
      a("__param", f);
      a("__esDecorate", k);
      a("__runInitializers", u);
      a("__propKey", v);
      a("__setFunctionName", l);
      a("__metadata", m);
      a("__awaiter", t);
      a("__generator", q);
      a("__exportStar", A);
      a("__createBinding", E);
      a("__values", H);
      a("__read", y);
      a("__spread", B);
      a("__spreadArrays", x);
      a("__spreadArray", I);
      a("__await", n);
      a("__asyncGenerator", r);
      a("__asyncDelegator", w);
      a("__asyncValues", C);
      a("__makeTemplateObject", J);
      a("__importStar", F);
      a("__importDefault", G);
      a("__classPrivateFieldGet", K);
      a("__classPrivateFieldSet", L);
      a("__classPrivateFieldIn", O);
      a("__addDisposableResource", N);
      a("__disposeResources", P);
    });
  })();
  mix_d(
    "@c/aui-bottom-sheet",
    "exports tslib @c/logger @c/api-lock @c/dom @c/scoped-dom @p/a-events @p/A @p/a-sheet @c/guard @c/scoped-metrics".split(
      " "
    ),
    function (a, c, d, e, b, h, k, u, v, l, m) {
      function t(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function q() {}
      function A(a, d, e) {
        var f = this;
        void 0 === e && (e = {});
        var r = B["default"].cardRoot.querySelector(d);
        d =
          "@amzn/mix.client-cap.aui-bottom-sheet: Failed to call 'create' on bottom-sheet '" +
          a +
          "'.";
        if (!r)
          throw Error(
            d +
              " A root element is required. Cannot find a matched element by the given selector"
          );
        if (
          "function" === typeof getComputedStyle &&
          "none" !== getComputedStyle(b.unscope(r)).display
        )
          throw Error(
            d +
              " The sheet DOM root should be hidden initially. DOM root should use the AUI '.aok-hidden' class"
          );
        var h = a + "-" + F;
        if (n["default"].get(h))
          throw Error(
            d +
              " The sheet name '" +
              a +
              "' has already been used in this card. Choose a different one."
          );
        r.setAttribute("id", h);
        var l = n["default"].create(
          c.__assign(c.__assign({ closeType: "icon" }, e), {
            historySupportEnabled: !1,
            preloadDomId: r.id,
            name: h,
          })
        );
        x["default"].one("a:sheet:beforeShow:" + h, function () {
          m.instrumentCel(b.unscope(r), "bottom-sheet-" + a);
        });
        var k = B["default"].scopeElement(b.unscope(r)).root,
          w = l._height;
        return C(
          {
            getHeight: function () {
              return w;
            },
            changeHeight: function (a) {
              return new Promise(function (b) {
                var c = function () {
                  w = l._height;
                  b(!0);
                };
                x["default"].one("a:sheet:changeHeight:" + h, c);
                l.changeHeight({ height: a }) ||
                  (x["default"].off("a:sheet:changeHeight:" + h, c), b(!1));
              });
            },
            show: function () {
              return y["default"].isLockedFor(["click"])
                ? (H["default"].log(
                    "Failed to call show because no click event was detected",
                    "FATAL"
                  ),
                  Promise.resolve(!1))
                : new Promise(function (b) {
                    var c = function () {
                      b(!0);
                    };
                    x["default"].one("a:sheet:afterShow:" + h, c);
                    n["default"].showSheet(l)
                      ? m.count("bottomSheet:" + a + ":show", 1)
                      : (x["default"].off("a:sheet:afterShow:" + h, c),
                        m.count("bottomSheet:" + a + ":show", 0),
                        b(!1));
                  });
            },
            hide: function () {
              return y["default"].isLockedFor(["click"])
                ? (H["default"].log(
                    "Failed to call hide because no click event was detected",
                    "FATAL"
                  ),
                  Promise.resolve(!1))
                : new Promise(function (b) {
                    var c = function () {
                      b(!0);
                    };
                    x["default"].one("a:sheet:afterHide:" + h, c);
                    n["default"].hideSheet(l)
                      ? m.count("bottomSheet:" + a + ":hide", 1)
                      : (x["default"].off("a:sheet:afterHide:" + h, c),
                        m.count("bottomSheet:" + a + ":hide", 0),
                        b(!1));
                  });
            },
            render: function (a) {
              return c.__awaiter(f, void 0, void 0, function () {
                var b,
                  d,
                  e = this;
                return c.__generator(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (!l._animating) return [3, 2];
                      b = [
                        "a:sheet:afterShow:" + h,
                        "a:sheet:afterHide:" + h,
                        "a:sheet:changeHeight:" + h,
                      ];
                      return [
                        4,
                        new Promise(function (a) {
                          d = function () {
                            a();
                          };
                          b.forEach(function (a) {
                            x["default"].one(a, d);
                          });
                        }),
                      ];
                    case 1:
                      f.sent(),
                        b.forEach(function (a) {
                          x["default"].off(a, d);
                        }),
                        (f.label = 2);
                    case 2:
                      return [
                        2,
                        new Promise(function (b) {
                          I["default"].requestAnimationFrame(function () {
                            return c.__awaiter(e, void 0, void 0, function () {
                              return c.__generator(this, function (c) {
                                switch (c.label) {
                                  case 0:
                                    return [4, a(k)];
                                  case 1:
                                    return c.sent(), b(), [2];
                                }
                              });
                            });
                          });
                        }),
                      ];
                  }
                });
              });
            },
          },
          {
            beforeShow: "a:sheet:beforeShow:" + h,
            afterShow: "a:sheet:afterShow:" + h,
            beforeHide: "a:sheet:beforeHide:" + h,
            afterHide: "a:sheet:afterHide:" + h,
          },
          q
        );
      }
      var H = t(d),
        y = t(e),
        B = t(h),
        x = t(k),
        I = t(u),
        n = t(v),
        r = t(l),
        w = function (a, b, c) {
          return a.__wrapHandler
            ? a.__wrapHandler
            : (a.__wrapHandler = function (d) {
                d = r["default"].current(a)(c ? c(d, b) : d);
                d instanceof Promise && r["default"].promise(d);
              });
        },
        C = function (a, b, d) {
          return c.__assign(c.__assign({}, a), {
            on: function (a, c) {
              c = w(c, a, d);
              x["default"].on(b[a], c);
            },
            off: function (a, c) {
              c = c.__wrapHandler;
              if (!c) throw Error("Unknown event handler!");
              x["default"].off(b[a], c);
            },
            once: function (a, c) {
              c = w(c, a, d);
              x["default"].one(b[a], c);
            },
          });
        };
      f.mixCardIndex = f.mixCardIndex || 0;
      var J;
      (function (a) {
        a[(a.Success = 1)] = "Success";
        a[(a.Failure = 0)] = "Failure";
      })(J || (J = {}));
      var F;
      d = { create: A };
      a.create = A;
      a["default"] = d;
      a.initialize = function (a, b, c) {
        F = f.mixCardIndex++;
      };
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d(
    "@c/aui-card",
    ["exports", "@p/a-cardui", "@p/a-cardui-deck", "@c/dom"],
    function (a, c, d, e) {
      function b(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function f(a) {
        var b = u["default"].get(e.unscope(a));
        return {
          isExpanded: function () {
            return b.isExpanded();
          },
          toggle: function () {
            return b.toggle();
          },
        };
      }
      function k(a) {
        var b = v["default"].get(e.unscope(a));
        return {
          initializeAllCards: function () {
            return b.initializeAllCards();
          },
        };
      }
      var u = b(c),
        v = b(d);
      a["default"] = { getCard: f, getCardDeck: k };
      a.getCard = f;
      a.getCardDeck = k;
      a.initialize = function (a, b, c) {};
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d(
    "@c/aui-carousel",
    "exports tslib @c/dom @p/a-carousel-framework @p/A @p/a-events @c/guard".split(
      " "
    ),
    function (a, c, d, e, b, h, k) {
      function u(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function v(a, b) {
        return "change:pageNumber" === b
          ? { newPageNumber: a.newValue, oldPageNumber: a.oldValue }
          : {};
      }
      function l(a, b) {
        var e = this,
          f = b.strategies.display.repaint;
        return function (h, r) {
          return c.__awaiter(e, void 0, void 0, function () {
            var e, n, k, w, m;
            return c.__generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return [4, a({ indexes: h, ids: r })];
                case 1:
                  e = c.sent();
                  "string" === typeof e &&
                    (e = new DOMParser().parseFromString(e, "text/html").body
                      .children[0]);
                  if (!e.classList.contains("a-carousel-content-fragment"))
                    throw Error(
                      "CarouselRemoteOperation did not return a ContentFragment"
                    );
                  n = Array.prototype.slice
                    .call(e.querySelectorAll(".a-carousel-card-fragment"))
                    .map(function (a) {
                      return a.hasAttribute("data-a-delete")
                        ? null
                        : d.unscope(a);
                    });
                  k = b.getAttr("ajax");
                  if (
                    k.id_list &&
                    r &&
                    ((w = h.filter(function (a, b) {
                      return null === n[b];
                    })),
                    w.length)
                  ) {
                    for (m = w.length - 1; 0 <= m; m--)
                      k.id_list.splice(w[m], 1);
                    b.setAttr("ajax", k);
                    f &&
                      q["default"].requestAnimationFrame(function () {
                        f(b);
                      });
                  }
                  return [2, n];
              }
            });
          });
        };
      }
      function m(a) {
        var b = a.getAttr("name") || a.__id;
        if (0 === b.indexOf("ciid")) return b;
        b = "ciid-" + x + "-" + I + "-" + b;
        a.setAttr("name", b);
        return b;
      }
      var t = u(e),
        q = u(b),
        A = u(h),
        H = u(k),
        y = function (a, b, c) {
          return a.__wrapHandler
            ? a.__wrapHandler
            : (a.__wrapHandler = function (d) {
                d = H["default"].current(a)(c ? c(d, b) : d);
                d instanceof Promise && H["default"].promise(d);
              });
        },
        B = function (a, b, d) {
          return c.__assign(c.__assign({}, a), {
            on: function (a, c) {
              c = y(c, a, d);
              A["default"].on(b[a], c);
            },
            off: function (a, c) {
              c = c.__wrapHandler;
              if (!c) throw Error("Unknown event handler!");
              A["default"].off(b[a], c);
            },
            once: function (a, c) {
              c = y(c, a, d);
              A["default"].one(b[a], c);
            },
          });
        };
      f.mixCardIndex = f.mixCardIndex || 0;
      var x, I;
      a["default"] = {
        getCarousel: function (a) {
          var b = t["default"].getCarousel(d.unscope(a)),
            c = m(b);
          return B(
            {
              gotoPage: function (a) {
                return b.gotoPage(a);
              },
              gotoPrevPage: function () {
                return b.gotoPrevPage();
              },
              gotoNextPage: function () {
                return b.gotoNextPage();
              },
              get initialized() {
                return new Promise(function (a) {
                  return t["default"].onInit(c, function () {
                    return a();
                  });
                });
              },
              attachRemoteOperation: function (a) {
                if (b.getAttr("async_provider"))
                  throw Error("Carousel already has attached remoteOperation");
                b.setAttr("async_provider", l(a, b));
              },
            },
            {
              "change:pageNumber": "a:carousel:" + c + ":change:pageNumber",
              "change:fetchedItems": "a:carousel:" + c + ":change:fetchedItems",
            },
            v
          );
        },
      };
      a.initialize = function (a, b, c) {
        x = "#" === a[0] ? a.slice(1) : a;
        I = f.mixCardIndex++;
      };
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d("@c/aui-feature-detect", ["exports", "@p/A"], function (a, c) {
    var d = c && "object" === typeof c && "default" in c ? c : { default: c };
    c = function (a) {
      return d["default"].capabilities[a];
    };
    a["default"] = { isSupported: c };
    a.initialize = function (a, b, c) {};
    a.isSupported = c;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d(
    "@c/aui-modal",
    "exports tslib @p/a-modal @p/a-events @c/dom @c/scoped-dom @c/logger @c/scoped-metrics @c/aui-feature-detect @c/guard @c/api-lock".split(
      " "
    ),
    function (a, c, d, e, b, h, k, u, v, l, m) {
      function t(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function q() {
        f.mixActiveModal = "";
      }
      function A(a) {
        if ("" === f.mixActiveModal)
          (f.mixActiveModal = a),
            w["default"].one("a:popover:invisible:" + a, q);
        else if (f.mixActiveModal !== a)
          throw Error(E.modalInUsed(f.mixActiveModal));
      }
      function H() {}
      function y(a) {
        return a ? a.substring(0, a.lastIndexOf("-" + N)) : "";
      }
      function B(a) {
        return {
          beforeShow: "a:popover:beforeShow:" + a,
          afterShow: "a:popover:visible:" + a,
          beforeHide: "a:popover:beforeHide:" + a,
          afterHide: "a:popover:invisible:" + a,
        };
      }
      function x(a) {
        return new Promise(function (b, c) {
          f.P.when("a-popover-animate").execute(function (d) {
            try {
              b(d.isAnimating(a));
            } catch (D) {
              c(D);
            }
          });
        });
      }
      function I(a, d, e) {
        var g = this;
        w["default"].one("a:popover:beforeShow:" + a, function () {
          u.instrumentCel(b.unscope(e), "modal-" + a);
        });
        var h = C["default"].scopeElement(b.unscope(e)).root;
        return O(
          {
            id: a,
            show: function () {
              return c.__awaiter(g, void 0, void 0, function () {
                return c.__generator(this, function (b) {
                  return K["default"].isLockedFor(U)
                    ? (J["default"].log(
                        E.failToCallFor("show", y(a)) +
                          "  " +
                          E.missingUserInteraction(U),
                        "FATAL"
                      ),
                      [2, Promise.resolve(!1)])
                    : [
                        2,
                        new Promise(function (b) {
                          var c = function () {
                            u.count("modal:" + y(a) + ":show", 1);
                            b(!0);
                          };
                          w["default"].one(B(a).afterShow, c);
                          try {
                            A(a), d.show();
                          } catch (R) {
                            J["default"].log(
                              E.failToCallFor("show", y(a)) + " " + R.message,
                              "FATAL"
                            ),
                              R.message !== E.modalInUsed(f.mixActiveModal) &&
                                f.mixActiveModal === a &&
                                (w["default"].off(
                                  "a:popover:invisible:" + a,
                                  q
                                ),
                                q()),
                              w["default"].off(B(a).afterShow, c),
                              u.count("modal:" + y(a) + ":show", 0),
                              b(!1);
                          }
                        }),
                      ];
                });
              });
            },
            hide: function () {
              return c.__awaiter(g, void 0, void 0, function () {
                return c.__generator(this, function (b) {
                  return K["default"].isLockedFor(U)
                    ? (J["default"].log(
                        E.failToCallFor("hide", y(a)) +
                          "  " +
                          E.missingUserInteraction(U),
                        "FATAL"
                      ),
                      [2, Promise.resolve(!1)])
                    : [
                        2,
                        new Promise(function (b) {
                          var c = function () {
                            b(!0);
                          };
                          w["default"].one(B(a).afterHide, c);
                          try {
                            d.hide();
                          } catch (R) {
                            J["default"].log(
                              E.failToCallFor("hide", y(a)) + " " + R.message,
                              "FATAL"
                            ),
                              w["default"].off(B(a).afterHide, c),
                              b(!1);
                          }
                        }),
                      ];
                });
              });
            },
            render: function (b) {
              return c.__awaiter(g, void 0, void 0, function () {
                var e;
                return c.__generator(this, function (c) {
                  e = function () {
                    return new Promise(function (c, e) {
                      try {
                        b(h), d.isActive() && d.updatePosition();
                      } catch (X) {
                        J["default"].log(
                          E.failToCallFor("render", y(a)) + " " + X.message,
                          "FATAL"
                        ),
                          e(X);
                      }
                      c();
                    });
                  };
                  return [
                    2,
                    x(d).then(function (b) {
                      if (!b) return e();
                      var c = d.isActive() ? B(a).afterShow : B(a).afterHide;
                      return new Promise(function (a) {
                        w["default"].one(c, function () {
                          a(e());
                        });
                      });
                    }),
                  ];
                });
              });
            },
          },
          B(a),
          H
        );
      }
      function n(a, d, e) {
        d = C["default"].cardRoot.querySelector(d);
        var f = E.failToCallFor("create", a);
        if (F["default"].isSupported("mobile"))
          throw Error(f + " " + E.unsupportedDevice("mobile"));
        if (!a) throw Error(f + " " + E.invalidName(a));
        if (r["default"].get(a + "-" + N)) throw Error(f + " " + E.usedName(a));
        if (!d) throw Error(f + " " + E.unavailableRoot());
        if (y(d.getAttribute("data-a-modal-id")))
          throw Error(
            f + " " + E.usedRootOf(y(d.getAttribute("data-a-modal-id")))
          );
        if (!d.className.match(S)) throw Error(f + " " + E.leakedRoot());
        var g = document.createElement("span");
        f = a + "-" + N;
        e = c.__assign(
          c.__assign(
            {
              name: f,
              popoverLabel: e.a11yOpenMessage,
              hideHeader: !0,
              closeButton: e.closeButton === M ? !0 : e.closeButton,
              padding: "none",
              legacyNavigable: !1,
            },
            e.width ? { width: e.width + "px" } : {}
          ),
          e.height ? { height: e.height + "px" } : {}
        );
        e = r["default"].create(g, e);
        f = I(f, e, d);
        try {
          var h = e.attrs("name"),
            k = b.unscope(d),
            m = document.createElement("span");
          C["default"].cardRoot.appendChild(m);
          m.id = "a-popover-" + h;
          m.className = "a-popover-preload";
          m.appendChild(k);
          d.setAttribute("data-a-modal-id", h);
          d.className = d.className.replace(S, "");
        } catch (R) {
          throw Error(E.failToCallFor("create", a) + " " + R.message);
        }
        return f;
      }
      var r = t(d),
        w = t(e),
        C = t(h),
        J = t(k),
        F = t(v),
        G = t(l),
        K = t(m),
        L = function (a, b, c) {
          return a.__wrapHandler
            ? a.__wrapHandler
            : (a.__wrapHandler = function (d) {
                d = G["default"].current(a)(c ? c(d, b) : d);
                d instanceof Promise && G["default"].promise(d);
              });
        },
        O = function (a, b, d) {
          return c.__assign(c.__assign({}, a), {
            on: function (a, c) {
              c = L(c, a, d);
              w["default"].on(b[a], c);
            },
            off: function (a, c) {
              c = c.__wrapHandler;
              if (!c) throw Error("Unknown event handler!");
              w["default"].off(b[a], c);
            },
            once: function (a, c) {
              c = L(c, a, d);
              w["default"].one(b[a], c);
            },
          });
        },
        E = {
          failToCallFor: function (a, b) {
            return (
              "@amzn/mix.client-cap.aui-modal: Failed to call '" +
              a +
              "' on modal '" +
              b +
              "'."
            );
          },
          usedName: function (a) {
            return (
              "The modal name '" +
              a +
              "' has already been used in this card. Choose a different one."
            );
          },
          unavailableRoot: function () {
            return "A root element is required. Cannot find a matched element by the given selector.";
          },
          leakedRoot: function () {
            return "The modal DOM root should be hidden initially. DOM root should use the AUI '.aok-hidden' class.";
          },
          usedRootOf: function (a) {
            return (
              "The root has already been bound to another modal, '" +
              a +
              "'. Choose a different one."
            );
          },
          invalidName: function (a) {
            return "The modal name is invalid: " + a + ".";
          },
          modalInUsed: function (a) {
            return "Modal '" + a + "' is in use and should not be interrupted.";
          },
          unsupportedDevice: function (a) {
            return (
              "Modal is only supported in desktop. Your card is in a " +
              a +
              " context."
            );
          },
          missingUserInteraction: function (a) {
            return (
              "This operation can be only performed upon a user interaction of: " +
              a +
              ". Browser Operation is the only recommended way over native event APIs."
            );
          },
        };
      f.mixActiveModal = f.mixActiveModal || "";
      f.mixCardIndex = f.mixCardIndex || 0;
      var N, P;
      (function (a) {
        a[(a.Success = 1)] = "Success";
        a[(a.Failure = 0)] = "Failure";
      })(P || (P = {}));
      var S = /\baok-hidden\b/g,
        U = ["click"];
      d = { create: n };
      a.create = n;
      a["default"] = d;
      a.initialize = function (a, b, c) {
        N = f.mixCardIndex++;
      };
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d(
    "@c/aui-truncate",
    ["exports", "@c/dom", "@p/a-truncate"],
    function (a, c, d) {
      function e(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function b(a) {
        return l["default"].manualTruncate(a);
      }
      function f() {
        return l["default"].refreshAutoTruncate();
      }
      function k(a) {
        return l["default"].switchToAutoTruncate(a);
      }
      function u() {
        var a = v["default"].cardRoot.getElementsByClassName("a-truncate");
        Array.prototype.slice.call(a).forEach(function (a) {
          return l["default"].get(c.unscope(a)).update();
        });
      }
      var v = e(c),
        l = e(d);
      a["default"] = {
        manualTruncate: b,
        refreshAutoTruncate: f,
        switchToAutoTruncate: k,
        updateAll: u,
      };
      a.initialize = function (a, b, c) {};
      a.manualTruncate = b;
      a.refreshAutoTruncate = f;
      a.switchToAutoTruncate = k;
      a.updateAll = u;
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d("@c/aui-utils", ["exports", "@p/A", "@c/dom"], function (a, c, d) {
    function e(a) {
      if (null === a || a === M)
        throw new TypeError("Value is null or undefined");
    }
    function b(a) {
      n["default"].hide(d.unscope(a));
    }
    function f(a) {
      n["default"].show(d.unscope(a));
    }
    function k(a) {
      return n["default"].loadDynamicImage(d.unscope(a));
    }
    function u(a, b) {
      return n["default"].onScreen(d.unscope(a), b);
    }
    function v(a) {
      return n["default"].objectIsEmpty(a);
    }
    function l(a, b) {
      return n["default"].equals(a, b);
    }
    function m(a, b) {
      return n["default"].diff(a, b);
    }
    function t(a, b, c) {
      return n["default"].throttle(a, b, c);
    }
    function q(a, b, c) {
      return n["default"].debounce(a, b, c);
    }
    function A(a) {
      n["default"].defer(a);
    }
    function H(a, b) {
      return n["default"].interval(a, b);
    }
    function y(a) {
      return n["default"].animationFrameDelay(a);
    }
    function B(a, b) {
      return n["default"].delay(a, b);
    }
    function x(a) {
      return n["default"].once(a);
    }
    function I(a) {
      return n["default"].attributionChain(d.unscope(a));
    }
    var n = c && "object" === typeof c && "default" in c ? c : { default: c };
    c = {
      assertNotNullish: e,
      hide: b,
      show: f,
      loadDynamicImage: k,
      onScreen: u,
      objectIsEmpty: v,
      equals: l,
      diff: m,
      throttle: t,
      debounce: q,
      defer: A,
      interval: H,
      animationFrameDelay: y,
      delay: B,
      once: x,
      attributionChain: I,
    };
    a.animationFrameDelay = y;
    a.assertNotNullish = e;
    a.attributionChain = I;
    a.debounce = q;
    a["default"] = c;
    a.defer = A;
    a.delay = B;
    a.diff = m;
    a.equals = l;
    a.hide = b;
    a.initialize = function (a, b, c) {};
    a.interval = H;
    a.loadDynamicImage = k;
    a.objectIsEmpty = v;
    a.onScreen = u;
    a.once = x;
    a.show = f;
    a.throttle = t;
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d("@c/error-handling", ["exports"], function (a) {
    var c,
      d = function (a, b, d, f) {
        c.error(a, b, d, f);
      };
    a["default"] = { error: d };
    a.error = d;
    a.initialize = function (a, b, d, f) {
      c = f;
    };
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
  mix_d(
    "@c/pagemarker",
    ["exports", "@p/A", "@c/dom", "@c/guard"],
    function (a, c, d, e) {
      function b(a) {
        return a && "object" === typeof a && "default" in a
          ? a
          : { default: a };
      }
      function f(a) {
        var b;
        return function () {
          return l["default"].promise(
            (b =
              b ||
              new Promise(function (b) {
                return u["default"].on(a, function () {
                  return b();
                });
              }))
          );
        };
      }
      function k(a) {
        void 0 === a && (a = 0);
        var b,
          c = new Promise(function (a) {
            return (b = a);
          }),
          d = function () {
            u["default"].onScreen(v["default"].container, a) &&
              (u["default"].off("scroll resize ready", d), b());
          };
        u["default"].on("scroll resize ready", d);
        d();
        return c;
      }
      var u = b(c),
        v = b(d),
        l = b(e),
        m = f("ready"),
        t = f("load");
      a["default"] = {
        get pageReady() {
          return m();
        },
        get pageLoad() {
          return t();
        },
        visible: k,
      };
      a.initialize = function (a, b, c) {};
      a.pageLoad = function () {
        return t();
      };
      a.pageReady = function () {
        return m();
      };
      a.visible = k;
      Object.defineProperty(a, "__esModule", { value: !0 });
    }
  );
  mix_d("@m/mash", ["exports", "@p/mash"], function (a, c) {
    var d = c && "object" === typeof c && "default" in c ? c : { default: c },
      e;
    (function (a) {
      a[(a.DONE = 0)] = "DONE";
      a[(a.CANCEL = 1)] = "CANCEL";
      a[(a.SAVE = 3)] = "SAVE";
      a[(a.CLOSE = 24)] = "CLOSE";
    })(e || (e = {}));
    a.addEventListener = function (a, c) {
      d["default"].addEventListener(a, c);
    };
    a.addition = function (a, c) {
      console.log("Executing addition api in MASH client capability ");
      return a + c;
    };
    a.androidUtil = {
      callCallback: function (a, c, e) {
        d["default"].android_util.callCallback(a, c, e);
      },
      removeCallback: function (a) {
        d["default"].android_util.removeCallback(a);
      },
      storeCallback: function (a, c) {
        return d["default"].android_util.storeCallback(a, c);
      },
    };
    a.canLaunchIntentURL = function (a) {
      d["default"].canLaunchIntentURL(a);
    };
    a.cancelFullscreen = function (a) {
      d["default"].cancelFullscreen(a);
    };
    a.cart = {
      didUpdate: function (a) {
        d["default"].cart.didUpdate(a);
      },
    };
    a.dispatchEvent = function (a) {
      d["default"].dispatchEvent(a);
    };
    a.exitEmbeddedBrowser = function (a) {
      d["default"].exitEmbeddedBrowser(a);
    };
    a.goBack = function (a) {
      d["default"].goBack(a);
    };
    a.initialize = function (a, c, d) {};
    a.interactionMetrics = {
      getRealClickTime: function (a) {
        return d["default"].interactionMetrics.getRealClickTime(a);
      },
      send: function (a) {
        return d["default"].interactionMetrics.send(a);
      },
    };
    a.iosUtil = {
      callCallback: function (a, c, e) {
        d["default"].ios_util.callCallback(a, c, e);
      },
      removeCallback: function (a) {
        d["default"].ios_util.removeCallback(a);
      },
      storeCallback: function (a, c) {
        return d["default"].ios_util.storeCallback(a, c);
      },
    };
    a.launchIntentURL = function (a) {
      d["default"].launchIntentURL(a);
    };
    a.navigate = function (a) {
      d["default"].navigate(a);
    };
    a.navstack = {
      begin: function () {
        return d["default"].navstack.begin();
      },
      setBookmark: function (a) {
        d["default"].navstack.setBookmark(a);
      },
      clearHistory: function (a) {
        d["default"].navstack.clearHistory(a);
      },
      pageIsReadyToDisplay: function (a) {
        d["default"].navstack.pageIsReadyToDisplay(a);
      },
    };
    a.openInExternalBrowser = function (a) {
      d["default"].openInExternalBrowser(a);
    };
    a.permissions = {
      requireForFeature: function (a) {
        return d["default"].permissions.requireForFeature(a);
      },
      audit_execute: function () {
        d["default"].permissions.audit.execute();
      },
    };
    a.privateAPI = {
      getPushNotificationInfo: function (a) {
        d["default"].privateAPI.getPushNotificationInfo(a);
      },
    };
    a.removeEventListener = function (a, c) {
      d["default"].removeEventListener(a, c);
    };
    a.requestFullscreen = function (a) {
      d["default"].requestFullscreen(a);
    };
    a.share = function (a) {
      d["default"].share(a);
    };
    a.showAlert = function (a) {
      d["default"].showAlert(a);
    };
    a.showContactPicker = function (a) {
      d["default"].showContactPicker(a);
    };
    a.showEmbeddedBrowser = function (a) {
      d["default"].showEmbeddedBrowser(a);
    };
    a.showImageGallery = function (a) {
      d["default"].showImageGallery(a);
    };
    a.showLoginDialog = function (a) {
      d["default"].showLoginDialog(a);
    };
    Object.defineProperty(a, "__esModule", { value: !0 });
  });
});
