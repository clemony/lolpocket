/*!
 * @widgetbot/html-embed v1.3.0
 * MIT Licensed
 */
!(function (e, t) { typeof exports == 'object' && typeof module == 'object' ? module.exports = t() : typeof define == 'function' && define.amd ? define([], t) : typeof exports == 'object' ? exports.widgetbot = t() : e.widgetbot = t() }(window, () => {
  return (function (e) {
    let t = {}; function n(r) {
      if (t[r])
        return t[r].exports; let i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    } return n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { typeof Symbol != 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t)
        return e; if (4 & t && typeof e == 'object' && e && e.__esModule)
        return e; let r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && typeof e != 'string') {
        for (let i in e)n.d(r, i, ((t) => { return e[t] }).bind(null, i))
      } return r
    }, n.n = function (e) { let t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, 'a', t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = '', n(n.s = 1)
  }([function (e, t, n) {
    'use strict'; Object.defineProperty(t, '__esModule', { value: !0 }); let r = (function () {
      function e() { this.listeners = {} } return e.prototype.socketEvent = function (e) {
        try { var t = JSON.parse(e) }
        catch (e) { return } if (t instanceof Object && !0 === t.widgetbot && t.id === this.id) { let n = t.event; let r = t.data; let i = this.listeners[n]; i && i.forEach((e) => { return e(r) }) }
      }, e.prototype.on = function (e, t) { this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t), console.debug(`[embed-api] on '${e}'`, t) }, e
    }()); t.default = r
  }, function (e, t, n) { e.exports = n(2) }, function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', { value: !0 }); let r = new (n(3).default)(); t.default = r }, function (e, t, n) {
    'use strict'; let r = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { let r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }()); Object.defineProperty(t, '__esModule', { value: !0 }); let i = n(4); let o = n(9).version; let a = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }(this, e)), this.version = o, this.embeds = [], this.register(), document.addEventListener('DOMContentLoaded', this.register.bind(this))
      } return r(e, [{ key: 'register', value() {
        let e = document.getElementsByTagName('widgetbot'); let t = !0; let n = !1; let r = void 0; try { for (var o, a = e[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) { let u = o.value; let s = new i.default(u).root; this.embeds.push(s) } }
        catch (e) { n = !0, r = e }
        finally {
          try { !t && a.return && a.return() }
          finally {
            if (n)
              throw r
          }
        }
      } }]), e
    }()); t.default = a
  }, function (e, t, n) {
    'use strict'; let r = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { let r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }()); let i = this && this.__rest || function (e, t) { let n = {}; for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && !t.includes(r) && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == 'function') { let i = 0; for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)!t.includes(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]) } return n }; Object.defineProperty(t, '__esModule', { value: !0 }); let o = n(5); let a = n(8); let u = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }(this, e)), this.root = t, this.id = a.generateUUID(), this.iframe = document.createElement('iframe'); let n = this.id; let r = this.iframe; if (!this.injected) { r.setAttribute('title', 'WidgetBot Discord chat embed'); let u = new o.Client({ id: n, iframe: r }); a.Shadow(t).appendChild(r); let s = this.parseAttributes(t); let c = (s.server, s.channel, s.url); let l = i(s, ['server', 'channel', 'url']); r.setAttribute('allow', 'clipboard-write; fullscreen'), r.setAttribute('src', c), this.setAPI(t, { on(e, t) { return u.on(e, t) }, emit(e, t) { return u.emit(e, t) }, contentWindow: r.contentWindow, contentDocument: r.contentDocument }), a.applyStyles(t, Object.assign({ display: 'inline-block', overflow: 'hidden', backgroundColor: '#36393E', borderRadius: '7px', verticalAlign: 'top' }, l)), a.applyStyles(r, { border: 'none', width: '100%', height: '100%' }) }
      } return r(e, [{ key: 'parseAttributes', value(e) { let t = e.getAttribute('server') || '299881420891881473'; let n = e.getAttribute('channel'); let r = e.getAttribute('shard') || 'https://e.widgetbot.io'; r.startsWith('http') || (r = `https://${r}`), r.endsWith('/') && (r = r.substring(0, r.length - 1)); for (var i = new URLSearchParams({ api: this.id }), o = ['username', 'avatar', 'token', 'notifications', 'notificationtimeout', 'thread'], a = 0; a < o.length; a++) { let u = o[a]; e.hasAttribute(u) && i.append(u, e.getAttribute(u)) } let s = `${r}/channels/${t}${n ? `/${n}` : ''}?${i}`; let c = e.getAttribute('width'); let l = e.getAttribute('height'); return Object.assign(Object.assign(Object.assign({}, c && { width: +c ? `${c}px` : c }), l && { height: +l ? `${l}px` : l }), { server: t, channel: n, url: s }) } }, { key: 'setAPI', value(e, t) { Object.keys(t).forEach((n) => { return e[n] = t[n] }) } }, { key: 'injected', get() { return 'emit' in this.root && 'on' in this.root } }]), e
    }()); t.default = u
  }, function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', { value: !0 }); let r = n(0); t.API = r.default; let i = n(6); t.Client = i.default; let o = n(7); t.Server = o.default }, function (e, t, n) {
    'use strict'; let r = this && this.__extends || (function () { let e = Object.setPrototypeOf || Array.isArray({ __proto__: [] }) && function (e, t) { e.__proto__ = t } || function (e, t) { for (let n in t)t.hasOwnProperty(n) && (e[n] = t[n]) }; return function (t, n) { function r() { this.constructor = t }e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r()) } }()); Object.defineProperty(t, '__esModule', { value: !0 }); let i = (function (e) {
      function t(t) { let n = e.call(this) || this; return n.server = { emit(e, t) { let r = n.listeners[e]; r && r.forEach((e) => { return e(t) }) } }, Object.assign(n, t), window.addEventListener('message', (e) => { let t = e.data; return n.socketEvent(t) }), n } return r(t, e), t.prototype.emit = function (e, t) {
        if (!window.parent)
          return !1; let n = JSON.stringify({ widgetbot: !0, id: this.id, event: e, data: t }); return !!this.iframe.contentWindow && (this.iframe.contentWindow.postMessage(n, '*'), !0)
      }, t
    }(n(0).default)); t.default = i
  }, function (e, t, n) {
    'use strict'; let r = this && this.__extends || (function () { let e = Object.setPrototypeOf || Array.isArray({ __proto__: [] }) && function (e, t) { e.__proto__ = t } || function (e, t) { for (let n in t)t.hasOwnProperty(n) && (e[n] = t[n]) }; return function (t, n) { function r() { this.constructor = t }e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r()) } }()); Object.defineProperty(t, '__esModule', { value: !0 }); let i = (function (e) {
      function t(t) { let n = e.call(this) || this; return n.targetOrigin = '*', n.client = { emit(e, t) { let r = n.listeners[e]; r && r.forEach((e) => { return e(t) }) } }, Object.assign(n, t), window.addEventListener('message', (e) => { let t = e.data; return n.socketEvent(t) }), n } return r(t, e), t.prototype.emit = function (e, t) {
        if (console.debug(`[embed-api] emit '${e}'`, t), !window.parent)
          return !1; let n = JSON.stringify({ widgetbot: !0, id: this.id, event: e, data: t }); return window.parent.postMessage(n, this.targetOrigin), !0
      }, t
    }(n(0).default)); t.default = i
  }, function (e, t, n) {
    'use strict'; Object.defineProperty(t, '__esModule', { value: !0 }), t.generateUUID = t.applyStyles = t.Shadow = void 0, t.Shadow = function (e) {
      try {
        if (e.attachShadow)
          return e.attachShadow({ mode: 'open' })
      }
      catch (e) {} return e
    }, t.applyStyles = function (e, t) { return Object.keys(t).forEach((n) => { return e.style[n] = t[n] }) }, t.generateUUID = function () { let e = (new Date()).getTime(); return typeof performance != 'undefined' && typeof performance.now == 'function' && (e += performance.now()), 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (t) => { let n = (e + 16 * Math.random()) % 16 | 0; return e = Math.floor(e / 16), (t === 'x' ? n : 3 & n | 8).toString(16) }) }
  }, function (e) { e.exports = { name: '@widgetbot/html-embed', version: '1.3.0', description: 'html-embed React component', main: 'umd/html-embed.min.js', files: ['css', 'es', 'lib', 'umd'], scripts: { build: 'nwb build-react-component --no-demo', clean: 'nwb clean-module && nwb clean-demo', start: 'nwb serve-react-demo --port 3200', release: 'yarn version && yarn build && yarn publish && yarn purge', purge: 'tinyreq -u https://purge.jsdelivr.net/npm/@widgetbot/html-embed' }, dependencies: {}, devDependencies: { '@types/jest': '^23.3.1', '@types/react': '^16.3.14', '@types/react-dom': '^16.0.5', '@types/webpack-env': '^1.13.6', '@widgetbot/embed-api': '^1.1.3', 'all-contributors-cli': '^5.4.0', 'babel-core': '^6.26.3', 'babel-plugin-emotion': '^9.2.8', 'babel-plugin-graphql-tag': '^1.6.0', 'babel-plugin-macros': '^2.4.0', 'babel-plugin-preval': '^3.0.0', 'babel-plugin-ramda': '^2.0.0', 'babel-plugin-syntax-dynamic-import': '^6.18.0', 'babel-preset-env': '^1.7.0', 'babel-preset-react': '^6.24.1', 'babel-preset-react-optimize': '^1.0.1', 'babel-preset-stage-0': '^6.24.1', 'husky': '^0.14.3', 'nwb': '0.23.0', 'prettier': '^1.14.2', 'pretty-quick': '^1.6.0', 'tinyreq-cli': '^1.1.1', 'ts-loader': '^8.0.14', 'typescript': '^3.0.1' }, license: 'MIT', repository: 'github:widgetbot-io/html-embed', keywords: ['react-component'] } }])).default
}))
// # sourceMappingURL=html-embed.min.js.map