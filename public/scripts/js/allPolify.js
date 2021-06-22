/**
 * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
!(function (a, b) {
    function c(a, b) {
        var c = a.createElement('p'),
            d = a.getElementsByTagName('head')[0] || a.documentElement
        return (
            (c.innerHTML = 'x<style>' + b + '</style>'),
            d.insertBefore(c.lastChild, d.firstChild)
        )
    }
    function d() {
        var a = t.elements
        return 'string' == typeof a ? a.split(' ') : a
    }
    function e(a, b) {
        var c = t.elements
        'string' != typeof c && (c = c.join(' ')),
            'string' != typeof a && (a = a.join(' ')),
            (t.elements = c + ' ' + a),
            j(b)
    }
    function f(a) {
        var b = s[a[q]]
        return b || ((b = {}), r++, (a[q] = r), (s[r] = b)), b
    }
    function g(a, c, d) {
        if ((c || (c = b), l)) return c.createElement(a)
        d || (d = f(c))
        var e
        return (
            (e = d.cache[a]
                ? d.cache[a].cloneNode()
                : p.test(a)
                ? (d.cache[a] = d.createElem(a)).cloneNode()
                : d.createElem(a)),
            !e.canHaveChildren || o.test(a) || e.tagUrn
                ? e
                : d.frag.appendChild(e)
        )
    }
    function h(a, c) {
        if ((a || (a = b), l)) return a.createDocumentFragment()
        c = c || f(a)
        for (
            var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length;
            i > g;
            g++
        )
            e.createElement(h[g])
        return e
    }
    function i(a, b) {
        b.cache ||
            ((b.cache = {}),
            (b.createElem = a.createElement),
            (b.createFrag = a.createDocumentFragment),
            (b.frag = b.createFrag())),
            (a.createElement = function (c) {
                return t.shivMethods ? g(c, a, b) : b.createElem(c)
            }),
            (a.createDocumentFragment = Function(
                'h,f',
                'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
                    d()
                        .join()
                        .replace(/[\w\-:]+/g, function (a) {
                            return (
                                b.createElem(a),
                                b.frag.createElement(a),
                                'c("' + a + '")'
                            )
                        }) +
                    ');return n}'
            )(t, b.frag))
    }
    function j(a) {
        a || (a = b)
        var d = f(a)
        return (
            !t.shivCSS ||
                k ||
                d.hasCSS ||
                (d.hasCSS = !!c(
                    a,
                    'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
                )),
            l || i(a, d),
            a
        )
    }
    var k,
        l,
        m = '3.7.3',
        n = a.html5 || {},
        o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        q = '_html5shiv',
        r = 0,
        s = {}
    !(function () {
        try {
            var a = b.createElement('a')
            ;(a.innerHTML = '<xyz></xyz>'),
                (k = 'hidden' in a),
                (l =
                    1 == a.childNodes.length ||
                    (function () {
                        b.createElement('a')
                        var a = b.createDocumentFragment()
                        return (
                            'undefined' == typeof a.cloneNode ||
                            'undefined' == typeof a.createDocumentFragment ||
                            'undefined' == typeof a.createElement
                        )
                    })())
        } catch (c) {
            ;(k = !0), (l = !0)
        }
    })()
    var t = {
        elements:
            n.elements ||
            'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
        version: m,
        shivCSS: n.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: n.shivMethods !== !1,
        type: 'default',
        shivDocument: j,
        createElement: g,
        createDocumentFragment: h,
        addElements: e,
    }
    ;(a.html5 = t),
        j(b),
        'object' == typeof module && module.exports && (module.exports = t)
})('undefined' != typeof window ? window : this, document)

!(function (a) {
  'use strict'
  a.matchMedia =
    a.matchMedia ||
    (function (a) {
      var b,
        c = a.documentElement,
        d = c.firstElementChild || c.firstChild,
        e = a.createElement('body'),
        f = a.createElement('div')
      return (
        (f.id = 'mq-test-1'),
        (f.style.cssText = 'position:absolute;top:-100em'),
        (e.style.background = 'none'),
        e.appendChild(f),
        function (a) {
          return (
            (f.innerHTML =
              '&shy;<style media="' +
              a +
              '"> #mq-test-1 { width: 42px; }</style>'),
            c.insertBefore(e, d),
            (b = 42 === f.offsetWidth),
            c.removeChild(e),
            { matches: b, media: a }
          )
        }
      )
    })(a.document)
})(this),
  (function (a) {
    'use strict'
    function b() {
      u(!0)
    }
    var c = {}
    ;(a.respond = c), (c.update = function () {})
    var d = [],
      e = (function () {
        var b = !1
        try {
          b = new a.XMLHttpRequest()
        } catch (c) {
          b = new a.ActiveXObject('Microsoft.XMLHTTP')
        }
        return function () {
          return b
        }
      })(),
      f = function (a, b) {
        var c = e()
        c &&
          (c.open('GET', a, !0),
          (c.onreadystatechange = function () {
            4 !== c.readyState ||
              (200 !== c.status && 304 !== c.status) ||
              b(c.responseText)
          }),
          4 !== c.readyState && c.send(null))
      }
    if (
      ((c.ajax = f),
      (c.queue = d),
      (c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
        maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
      }),
      (c.mediaQueriesSupported =
        a.matchMedia &&
        null !== a.matchMedia('only all') &&
        a.matchMedia('only all').matches),
      !c.mediaQueriesSupported)
    ) {
      var g,
        h,
        i,
        j = a.document,
        k = j.documentElement,
        l = [],
        m = [],
        n = [],
        o = {},
        p = 30,
        q = j.getElementsByTagName('head')[0] || k,
        r = j.getElementsByTagName('base')[0],
        s = q.getElementsByTagName('link'),
        t = function () {
          var a,
            b = j.createElement('div'),
            c = j.body,
            d = k.style.fontSize,
            e = c && c.style.fontSize,
            f = !1
          return (
            (b.style.cssText = 'position:absolute;font-size:1em;width:1em'),
            c ||
              ((c = f = j.createElement('body')),
              (c.style.background = 'none')),
            (k.style.fontSize = '100%'),
            (c.style.fontSize = '100%'),
            c.appendChild(b),
            f && k.insertBefore(c, k.firstChild),
            (a = b.offsetWidth),
            f ? k.removeChild(c) : c.removeChild(b),
            (k.style.fontSize = d),
            e && (c.style.fontSize = e),
            (a = i = parseFloat(a))
          )
        },
        u = function (b) {
          var c = 'clientWidth',
            d = k[c],
            e = ('CSS1Compat' === j.compatMode && d) || j.body[c] || d,
            f = {},
            o = s[s.length - 1],
            r = new Date().getTime()
          if (b && g && p > r - g)
            return a.clearTimeout(h), (h = a.setTimeout(u, p)), void 0
          g = r
          for (var v in l)
            if (l.hasOwnProperty(v)) {
              var w = l[v],
                x = w.minw,
                y = w.maxw,
                z = null === x,
                A = null === y,
                B = 'em'
              x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? i || t() : 1)),
                y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? i || t() : 1)),
                (w.hasquery &&
                  ((z && A) || !(z || e >= x) || !(A || y >= e))) ||
                  (f[w.media] || (f[w.media] = []), f[w.media].push(m[w.rules]))
            }
          for (var C in n)
            n.hasOwnProperty(C) &&
              n[C] &&
              n[C].parentNode === q &&
              q.removeChild(n[C])
          n.length = 0
          for (var D in f)
            if (f.hasOwnProperty(D)) {
              var E = j.createElement('style'),
                F = f[D].join('\n')
              ;(E.type = 'text/css'),
                (E.media = D),
                q.insertBefore(E, o.nextSibling),
                E.styleSheet
                  ? (E.styleSheet.cssText = F)
                  : E.appendChild(j.createTextNode(F)),
                n.push(E)
            }
        },
        v = function (a, b, d) {
          var e = a.replace(c.regex.keyframes, '').match(c.regex.media),
            f = (e && e.length) || 0
          b = b.substring(0, b.lastIndexOf('/'))
          var g = function (a) {
              return a.replace(c.regex.urls, '$1' + b + '$2$3')
            },
            h = !f && d
          b.length && (b += '/'), h && (f = 1)
          for (var i = 0; f > i; i++) {
            var j, k, n, o
            h
              ? ((j = d), m.push(g(a)))
              : ((j = e[i].match(c.regex.findStyles) && RegExp.$1),
                m.push(RegExp.$2 && g(RegExp.$2))),
              (n = j.split(',')),
              (o = n.length)
            for (var p = 0; o > p; p++)
              (k = n[p]),
                l.push({
                  media:
                    (k.split('(')[0].match(c.regex.only) && RegExp.$2) || 'all',
                  rules: m.length - 1,
                  hasquery: k.indexOf('(') > -1,
                  minw:
                    k.match(c.regex.minw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ''),
                  maxw:
                    k.match(c.regex.maxw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ''),
                })
          }
          u()
        },
        w = function () {
          if (d.length) {
            var b = d.shift()
            f(b.href, function (c) {
              v(c, b.href, b.media),
                (o[b.href] = !0),
                a.setTimeout(function () {
                  w()
                }, 0)
            })
          }
        },
        x = function () {
          for (var b = 0; b < s.length; b++) {
            var c = s[b],
              e = c.href,
              f = c.media,
              g = c.rel && 'stylesheet' === c.rel.toLowerCase()
            e &&
              g &&
              !o[e] &&
              (c.styleSheet && c.styleSheet.rawCssText
                ? (v(c.styleSheet.rawCssText, e, f), (o[e] = !0))
                : ((!/^([a-zA-Z:]*\/\/)/.test(e) && !r) ||
                    e.replace(RegExp.$1, '').split('/')[0] ===
                      a.location.host) &&
                  ('//' === e.substring(0, 2) && (e = a.location.protocol + e),
                  d.push({ href: e, media: f })))
          }
          w()
        }
      x(),
        (c.update = x),
        (c.getEmValue = t),
        a.addEventListener
          ? a.addEventListener('resize', b, !1)
          : a.attachEvent && a.attachEvent('onresize', b)
    }
  })(this)

/*
selectivizr v1.0.3b - (c) Keith Clark, freely distributable under the terms 
of the MIT license.
selectivizr.com
*/
/* 
  
Notes about this source
-----------------------
 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)
  
  
References:
-----------
 
 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/
 
*/

;(function (win) {
    // Determine IE version and stop execution if browser isn't IE. This
    // handles the script being loaded by non IE browsers because the
    // developer didn't use conditional comments.
    var ieUserAgent = navigator.userAgent.match(/MSIE (\d+)/)
    if (!ieUserAgent) {
        return false
    }

    // =========================== Init Objects ============================

    var doc = document
    var root = doc.documentElement
    var xhr = getXHRObject()
    var ieVersion = ieUserAgent[1]

    // If were not in standards mode, IE is too old / new or we can't create
    // an XMLHttpRequest object then we should get out now.
    if (
        doc.compatMode != 'CSS1Compat' ||
        ieVersion < 6 ||
        ieVersion > 8 ||
        !xhr
    ) {
        return
    }

    // ========================= Common Objects ============================

    // Compatiable selector engines in order of CSS3 support. Note: '*' is
    // a placholder for the object key name. (basically, crude compression)
    var selectorEngines = {
        NW: '*.Dom.select',
        MooTools: '$$',
        DOMAssistant: '*.$',
        Prototype: '$$',
        YAHOO: '*.util.Selector.query',
        Sizzle: '*',
        jQuery: '*',
        dojo: '*.query',
    }

    var selectorMethod
    var enabledWatchers = [] // array of :enabled/:disabled elements to poll
    var domPatches = []
    var ie6PatchID = 0 // used to solve ie6's multiple class bug
    var patchIE6MultipleClasses = true // if true adds class bloat to ie6
    var namespace = 'slvzr'

    // Stylesheet parsing regexp's
    var RE_COMMENT = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g
    var RE_IMPORT = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g
    var RE_ASSET_URL = /(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g
    var RE_PSEUDO_STRUCTURAL = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/
    var RE_PSEUDO_ELEMENTS = /:(:first-(?:line|letter))/g
    var RE_SELECTOR_GROUP = /((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g
    var RE_SELECTOR_PARSE = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g
    var RE_LIBRARY_INCOMPATIBLE_PSEUDOS = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g
    var RE_PATCH_CLASS_NAME_REPLACE = /[^\w-]/g

    // HTML UI element regexp's
    var RE_INPUT_ELEMENTS = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/
    var RE_INPUT_CHECKABLE_TYPES = /^(checkbox|radio)$/

    // Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
    var BROKEN_ATTR_IMPLEMENTATIONS = ieVersion > 6 ? /[\$\^*]=(['"])\1/ : null

    // Whitespace normalization regexp's
    var RE_TIDY_TRAILING_WHITESPACE = /([(\[+~])\s+/g
    var RE_TIDY_LEADING_WHITESPACE = /\s+([)\]+~])/g
    var RE_TIDY_CONSECUTIVE_WHITESPACE = /\s+/g
    var RE_TIDY_TRIM_WHITESPACE = /^\s*((?:[\S\s]*\S)?)\s*$/

    // String constants
    var EMPTY_STRING = ''
    var SPACE_STRING = ' '
    var PLACEHOLDER_STRING = '$1'

    // =========================== Patching ================================

    // --[ patchStyleSheet() ]----------------------------------------------
    // Scans the passed cssText for selectors that require emulation and
    // creates one or more patches for each matched selector.
    function patchStyleSheet(cssText) {
        return cssText
            .replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING)
            .replace(RE_SELECTOR_GROUP, function (m, prefix, selectorText) {
                var selectorGroups = selectorText.split(',')
                for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
                    var selector =
                        normalizeSelectorWhitespace(selectorGroups[c]) +
                        SPACE_STRING
                    var patches = []
                    selectorGroups[c] = selector.replace(
                        RE_SELECTOR_PARSE,
                        function (match, combinator, pseudo, attribute, index) {
                            if (combinator) {
                                if (patches.length > 0) {
                                    domPatches.push({
                                        selector: selector.substring(0, index),
                                        patches: patches,
                                    })
                                    patches = []
                                }
                                return combinator
                            } else {
                                var patch = pseudo
                                    ? patchPseudoClass(pseudo)
                                    : patchAttribute(attribute)
                                if (patch) {
                                    patches.push(patch)
                                    return '.' + patch.className
                                }
                                return match
                            }
                        }
                    )
                }
                return prefix + selectorGroups.join(',')
            })
    }

    // --[ patchAttribute() ]-----------------------------------------------
    // returns a patch for an attribute selector.
    function patchAttribute(attr) {
        return !BROKEN_ATTR_IMPLEMENTATIONS ||
            BROKEN_ATTR_IMPLEMENTATIONS.test(attr)
            ? { className: createClassName(attr), applyClass: true }
            : null
    }

    // --[ patchPseudoClass() ]---------------------------------------------
    // returns a patch for a pseudo-class
    function patchPseudoClass(pseudo) {
        var applyClass = true
        var className = createClassName(pseudo.slice(1))
        var isNegated = pseudo.substring(0, 5) == ':not('
        var activateEventName
        var deactivateEventName

        // if negated, remove :not()
        if (isNegated) {
            pseudo = pseudo.slice(5, -1)
        }

        // bracket contents are irrelevant - remove them
        var bracketIndex = pseudo.indexOf('(')
        if (bracketIndex > -1) {
            pseudo = pseudo.substring(0, bracketIndex)
        }

        // check we're still dealing with a pseudo-class
        if (pseudo.charAt(0) == ':') {
            switch (pseudo.slice(1)) {
                case 'root':
                    applyClass = function (e) {
                        return isNegated ? e != root : e == root
                    }
                    break

                case 'target':
                    // :target is only supported in IE8
                    if (ieVersion == 8) {
                        applyClass = function (e) {
                            var handler = function () {
                                var hash = location.hash
                                var hashID = hash.slice(1)
                                return isNegated
                                    ? hash == EMPTY_STRING || e.id != hashID
                                    : hash != EMPTY_STRING && e.id == hashID
                            }
                            addEvent(win, 'hashchange', function () {
                                toggleElementClass(e, className, handler())
                            })
                            return handler()
                        }
                        break
                    }
                    return false

                case 'checked':
                    applyClass = function (e) {
                        if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
                            addEvent(e, 'propertychange', function () {
                                if (event.propertyName == 'checked') {
                                    toggleElementClass(
                                        e,
                                        className,
                                        e.checked !== isNegated
                                    )
                                }
                            })
                        }
                        return e.checked !== isNegated
                    }
                    break

                case 'disabled':
                    isNegated = !isNegated

                case 'enabled':
                    applyClass = function (e) {
                        if (RE_INPUT_ELEMENTS.test(e.tagName)) {
                            addEvent(e, 'propertychange', function () {
                                if (event.propertyName == '$disabled') {
                                    toggleElementClass(
                                        e,
                                        className,
                                        e.$disabled === isNegated
                                    )
                                }
                            })
                            enabledWatchers.push(e)
                            e.$disabled = e.disabled
                            return e.disabled === isNegated
                        }
                        return pseudo == ':enabled' ? isNegated : !isNegated
                    }
                    break

                case 'focus':
                    activateEventName = 'focus'
                    deactivateEventName = 'blur'

                case 'hover':
                    if (!activateEventName) {
                        activateEventName = 'mouseenter'
                        deactivateEventName = 'mouseleave'
                    }
                    applyClass = function (e) {
                        addEvent(
                            e,
                            isNegated ? deactivateEventName : activateEventName,
                            function () {
                                toggleElementClass(e, className, true)
                            }
                        )
                        addEvent(
                            e,
                            isNegated ? activateEventName : deactivateEventName,
                            function () {
                                toggleElementClass(e, className, false)
                            }
                        )
                        return isNegated
                    }
                    break

                // everything else
                default:
                    // If we don't support this pseudo-class don't create
                    // a patch for it
                    if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
                        return false
                    }
                    break
            }
        }
        return { className: className, applyClass: applyClass }
    }

    // --[ applyPatches() ]-------------------------------------------------
    function applyPatches() {
        var elms, selectorText, patches, domSelectorText

        for (var c = 0; c < domPatches.length; c++) {
            selectorText = domPatches[c].selector
            patches = domPatches[c].patches

            // Although some selector libraries can find :checked :enabled etc.
            // we need to find all elements that could have that state because
            // it can be changed by the user.
            domSelectorText = selectorText.replace(
                RE_LIBRARY_INCOMPATIBLE_PSEUDOS,
                EMPTY_STRING
            )

            // If the dom selector equates to an empty string or ends with
            // whitespace then we need to append a universal selector (*) to it.
            if (
                domSelectorText == EMPTY_STRING ||
                domSelectorText.charAt(domSelectorText.length - 1) ==
                    SPACE_STRING
            ) {
                domSelectorText += '*'
            }

            // Ensure we catch errors from the selector library
            try {
                elms = selectorMethod(domSelectorText)
            } catch (ex) {
                // #DEBUG_START
                log(
                    "Selector '" +
                        selectorText +
                        "' threw exception '" +
                        ex +
                        "'"
                )
                // #DEBUG_END
            }

            if (elms) {
                for (var d = 0, dl = elms.length; d < dl; d++) {
                    var elm = elms[d]
                    var cssClasses = elm.className
                    for (var f = 0, fl = patches.length; f < fl; f++) {
                        var patch = patches[f]
                        if (!hasPatch(elm, patch)) {
                            if (
                                patch.applyClass &&
                                (patch.applyClass === true ||
                                    patch.applyClass(elm) === true)
                            ) {
                                cssClasses = toggleClass(
                                    cssClasses,
                                    patch.className,
                                    true
                                )
                            }
                        }
                    }
                    elm.className = cssClasses
                }
            }
        }
    }

    // --[ hasPatch() ]-----------------------------------------------------
    // checks for the exsistence of a patch on an element
    function hasPatch(elm, patch) {
        return new RegExp('(^|\\s)' + patch.className + '(\\s|$)').test(
            elm.className
        )
    }

    // =========================== Utility =================================

    function createClassName(className) {
        return (
            namespace +
            '-' +
            (ieVersion == 6 && patchIE6MultipleClasses
                ? ie6PatchID++
                : className.replace(RE_PATCH_CLASS_NAME_REPLACE, function (a) {
                      return a.charCodeAt(0)
                  }))
        )
    }

    // --[ log() ]----------------------------------------------------------
    // #DEBUG_START
    function log(message) {
        if (win.console) {
            win.console.log(message)
        }
    }
    // #DEBUG_END

    // --[ trim() ]---------------------------------------------------------
    // removes leading, trailing whitespace from a string
    function trim(text) {
        return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING)
    }

    // --[ normalizeWhitespace() ]------------------------------------------
    // removes leading, trailing and consecutive whitespace from a string
    function normalizeWhitespace(text) {
        return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING)
    }

    // --[ normalizeSelectorWhitespace() ]----------------------------------
    // tidies whitespace around selector brackets and combinators
    function normalizeSelectorWhitespace(selectorText) {
        return normalizeWhitespace(
            selectorText
                .replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING)
                .replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
        )
    }

    // --[ toggleElementClass() ]-------------------------------------------
    // toggles a single className on an element
    function toggleElementClass(elm, className, on) {
        var oldClassName = elm.className
        var newClassName = toggleClass(oldClassName, className, on)
        if (newClassName != oldClassName) {
            elm.className = newClassName
            elm.parentNode.className += EMPTY_STRING
        }
    }

    // --[ toggleClass() ]--------------------------------------------------
    // adds / removes a className from a string of classNames. Used to
    // manage multiple class changes without forcing a DOM redraw
    function toggleClass(classList, className, on) {
        var re = RegExp('(^|\\s)' + className + '(\\s|$)')
        var classExists = re.test(classList)
        if (on) {
            return classExists
                ? classList
                : classList + SPACE_STRING + className
        } else {
            return classExists
                ? trim(classList.replace(re, PLACEHOLDER_STRING))
                : classList
        }
    }

    // --[ addEvent() ]-----------------------------------------------------
    function addEvent(elm, eventName, eventHandler) {
        elm.attachEvent('on' + eventName, eventHandler)
    }

    // --[ getXHRObject() ]-------------------------------------------------
    function getXHRObject() {
        if (win.XMLHttpRequest) {
            return new XMLHttpRequest()
        }
        try {
            return new ActiveXObject('Microsoft.XMLHTTP')
        } catch (e) {
            return null
        }
    }

    // --[ loadStyleSheet() ]-----------------------------------------------
    function loadStyleSheet(url) {
        xhr.open('GET', url, false)
        xhr.send()
        return xhr.status == 200 ? xhr.responseText : EMPTY_STRING
    }

    // --[ resolveUrl() ]---------------------------------------------------
    // Converts a URL fragment to a fully qualified URL using the specified
    // context URL. Returns null if same-origin policy is broken
    function resolveUrl(url, contextUrl, ignoreSameOriginPolicy) {
        function getProtocol(url) {
            return url.substring(0, url.indexOf('//'))
        }

        function getProtocolAndHost(url) {
            return url.substring(0, url.indexOf('/', 8))
        }

        if (!contextUrl) {
            contextUrl = baseUrl
        }

        // protocol-relative path
        if (url.substring(0, 2) == '//') {
            url = getProtocol(contextUrl) + url
        }

        // absolute path
        if (/^https?:\/\//i.test(url)) {
            return !ignoreSameOriginPolicy &&
                getProtocolAndHost(contextUrl) != getProtocolAndHost(url)
                ? null
                : url
        }

        // root-relative path
        if (url.charAt(0) == '/') {
            return getProtocolAndHost(contextUrl) + url
        }

        // relative path
        var contextUrlPath = contextUrl.split(/[?#]/)[0] // ignore query string in the contextUrl
        if (
            url.charAt(0) != '?' &&
            contextUrlPath.charAt(contextUrlPath.length - 1) != '/'
        ) {
            contextUrlPath = contextUrlPath.substring(
                0,
                contextUrlPath.lastIndexOf('/') + 1
            )
        }

        return contextUrlPath + url
    }

    // --[ parseStyleSheet() ]----------------------------------------------
    // Downloads the stylesheet specified by the URL, removes it's comments
    // and recursivly replaces @import rules with their contents, ultimately
    // returning the full cssText.
    function parseStyleSheet(url) {
        if (url) {
            return loadStyleSheet(url)
                .replace(RE_COMMENT, EMPTY_STRING)
                .replace(
                    RE_IMPORT,
                    function (
                        match,
                        quoteChar,
                        importUrl,
                        quoteChar2,
                        importUrl2,
                        media
                    ) {
                        var cssText = parseStyleSheet(
                            resolveUrl(importUrl || importUrl2, url)
                        )
                        return media
                            ? '@media ' + media + ' {' + cssText + '}'
                            : cssText
                    }
                )
                .replace(
                    RE_ASSET_URL,
                    function (match, isBehavior, quoteChar, assetUrl) {
                        quoteChar = quoteChar || EMPTY_STRING
                        return isBehavior
                            ? match
                            : ' url(' +
                                  quoteChar +
                                  resolveUrl(assetUrl, url, true) +
                                  quoteChar +
                                  ') '
                    }
                )
        }
        return EMPTY_STRING
    }

    // --[ getStyleSheets() ]-----------------------------------------------
    function getStyleSheets() {
        var url, stylesheet
        for (var c = 0; c < doc.styleSheets.length; c++) {
            stylesheet = doc.styleSheets[c]
            if (stylesheet.href != EMPTY_STRING) {
                url = resolveUrl(stylesheet.href)
                if (url) {
                    stylesheet.cssText = stylesheet[
                        'rawCssText'
                    ] = patchStyleSheet(parseStyleSheet(url))
                }
            }
        }
    }

    // --[ init() ]---------------------------------------------------------
    function init() {
        applyPatches()

        // :enabled & :disabled polling script (since we can't hook
        // onpropertychange event when an element is disabled)
        if (enabledWatchers.length > 0) {
            setInterval(function () {
                for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
                    var e = enabledWatchers[c]
                    if (e.disabled !== e.$disabled) {
                        if (e.disabled) {
                            e.disabled = false
                            e.$disabled = true
                            e.disabled = true
                        } else {
                            e.$disabled = e.disabled
                        }
                    }
                }
            }, 250)
        }
    }

    // Determine the baseUrl and download the stylesheets
    var baseTags = doc.getElementsByTagName('BASE')
    var baseUrl = baseTags.length > 0 ? baseTags[0].href : doc.location.href
    getStyleSheets()

    // Bind selectivizr to the ContentLoaded event.
    ContentLoaded(win, function () {
        // Determine the "best fit" selector engine
        for (var engine in selectorEngines) {
            var members,
                member,
                context = win
            if (win[engine]) {
                members = selectorEngines[engine]
                    .replace('*', engine)
                    .split('.')
                while (
                    (member = members.shift()) &&
                    (context = context[member])
                ) {}
                if (typeof context == 'function') {
                    selectorMethod = context
                    init()
                    return
                }
            }
        }
    })

    /*!
     * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     *
     */

    // @w window reference
    // @f function reference
    function ContentLoaded(win, fn) {
        var done = false,
            top = true,
            init = function (e) {
                if (
                    e.type == 'readystatechange' &&
                    doc.readyState != 'complete'
                )
                    return
                ;(e.type == 'load' ? win : doc).detachEvent(
                    'on' + e.type,
                    init,
                    false
                )
                if (!done && (done = true)) fn.call(win, e.type || e)
            },
            poll = function () {
                try {
                    root.doScroll('left')
                } catch (e) {
                    setTimeout(poll, 50)
                    return
                }
                init('poll')
            }

        if (doc.readyState == 'complete') fn.call(win, EMPTY_STRING)
        else {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement
                } catch (e) {}
                if (top) poll()
            }
            addEvent(doc, 'readystatechange', init)
            addEvent(win, 'load', init)
        }
    }
})(this)

/*! respimage - v1.4.2 - 2015-08-22
 Licensed MIT */
!(function (a, b, c) {
    'use strict'
    function d(a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, '')
    }
    function e() {
        var b
        ;(R = !1),
            (U = a.devicePixelRatio),
            (S = {}),
            (T = {}),
            (b = (U || 1) * D.xQuant),
            D.uT ||
                ((D.maxX = Math.max(1.3, D.maxX)),
                (b = Math.min(b, D.maxX)),
                (v.DPR = b)),
            (V.width = Math.max(a.innerWidth || 0, B.clientWidth)),
            (V.height = Math.max(a.innerHeight || 0, B.clientHeight)),
            (V.vw = V.width / 100),
            (V.vh = V.height / 100),
            (V.em = v.getEmValue()),
            (V.rem = V.em),
            (o = D.lazyFactor / 2),
            (o = o * b + o),
            (q = 0.4 + 0.1 * b),
            (l = 0.5 + 0.2 * b),
            (m = 0.5 + 0.25 * b),
            (p = b + 1.3),
            (n = V.width > V.height) || (o *= 0.9),
            I && (o *= 0.9),
            (u = [V.width, V.height, b].join('-'))
    }
    function f(a, b, c) {
        var d = b * Math.pow(a - 0.4, 1.9)
        return n || (d /= 1.3), (a += d), a > c
    }
    function g(a) {
        var b,
            c = v.getSet(a),
            d = !1
        'pending' != c &&
            ((d = u),
            c && ((b = v.setRes(c)), (d = v.applySetCandidate(b, a)))),
            (a[v.ns].evaled = d)
    }
    function h(a, b) {
        return a.res - b.res
    }
    function i(a, b, c) {
        var d
        return (
            !c && b && ((c = a[v.ns].sets), (c = c && c[c.length - 1])),
            (d = j(b, c)),
            d &&
                ((b = v.makeUrl(b)),
                (a[v.ns].curSrc = b),
                (a[v.ns].curCan = d),
                d.res || _(d, d.set.sizes)),
            d
        )
    }
    function j(a, b) {
        var c, d, e
        if (a && b)
            for (e = v.parseSet(b), a = v.makeUrl(a), c = 0; c < e.length; c++)
                if (a == v.makeUrl(e[c].url)) {
                    d = e[c]
                    break
                }
        return d
    }
    function k(a, b) {
        var c,
            d,
            e,
            f,
            g = a.getElementsByTagName('source')
        for (c = 0, d = g.length; d > c; c++)
            (e = g[c]),
                (e[v.ns] = !0),
                (f = e.getAttribute('srcset')),
                f &&
                    b.push({
                        srcset: f,
                        media: e.getAttribute('media'),
                        type: e.getAttribute('type'),
                        sizes: e.getAttribute('sizes'),
                    })
    }
    var l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = {},
        w = function () {},
        x = b.createElement('img'),
        y = x.getAttribute,
        z = x.setAttribute,
        A = x.removeAttribute,
        B = b.documentElement,
        C = {},
        D = { xQuant: 1, lazyFactor: 0.4, maxX: 2 },
        E = 'data-pfsrc',
        F = E + 'set',
        G = 'webkitBackfaceVisibility' in B.style,
        H = navigator.userAgent,
        I =
            /rident/.test(H) ||
            (/ecko/.test(H) && H.match(/rv\:(\d+)/) && RegExp.$1 > 35),
        J = 'currentSrc',
        K = /\s+\+?\d+(e\d+)?w/,
        L = /((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,
        M = /^([\+eE\d\.]+)(w|x)$/,
        N = /\s*\d+h\s*/,
        O = a.respimgCFG,
        P =
            ('https:' == location.protocol,
            'position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)'),
        Q = 'font-size:100%!important;',
        R = !0,
        S = {},
        T = {},
        U = a.devicePixelRatio,
        V = { px: 1, in: 96 },
        W = b.createElement('a'),
        X = !1,
        Y = function (a, b, c, d) {
            a.addEventListener
                ? a.addEventListener(b, c, d || !1)
                : a.attachEvent && a.attachEvent('on' + b, c)
        },
        Z = function (a) {
            var b = {}
            return function (c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        $ = (function () {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function () {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a; )
                        c = c.replace(a[b], a[++b])
                    return c
                },
                c = Z(function (a) {
                    return (
                        'return ' +
                        b(
                            (a || '').toLowerCase(),
                            /\band\b/g,
                            '&&',
                            /,/g,
                            '||',
                            /min-([a-z-\s]+):/g,
                            'e.$1>=',
                            /max-([a-z-\s]+):/g,
                            'e.$1<=',
                            /calc([^)]+)/g,
                            '($1)',
                            /(\d+[\.]*[\d]*)([a-z]+)/g,
                            '($1 * e.$2)',
                            /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                            ''
                        )
                    )
                })
            return function (b, d) {
                var e
                if (!(b in S))
                    if (((S[b] = !1), d && (e = b.match(a))))
                        S[b] = e[1] * V[e[2]]
                    else
                        try {
                            S[b] = new Function('e', c(b))(V)
                        } catch (f) {}
                return S[b]
            }
        })(),
        _ = function (a, b) {
            return (
                a.w
                    ? ((a.cWidth = v.calcListLength(b || '100vw')),
                      (a.res = a.w / a.cWidth))
                    : (a.res = a.x),
                a
            )
        },
        ab = function (c) {
            var d,
                e,
                f,
                g = c || {}
            if (
                (g.elements &&
                    1 == g.elements.nodeType &&
                    ('IMG' == g.elements.nodeName.toUpperCase()
                        ? (g.elements = [g.elements])
                        : ((g.context = g.elements), (g.elements = null))),
                g.reparse &&
                    ((g.reevaluate = !0),
                    a.console &&
                        console.warn &&
                        console.warn('reparse was renamed to reevaluate!')),
                (d =
                    g.elements ||
                    v.qsa(
                        g.context || b,
                        g.reevaluate || g.reselect ? v.sel : v.selShort
                    )),
                (f = d.length))
            ) {
                for (v.setupRun(g), X = !0, e = 0; f > e; e++)
                    v.fillImg(d[e], g)
                v.teardownRun(g)
            }
        },
        bb = Z(function (a) {
            var b = [1, 'x'],
                c = d(a || '')
            return (
                c &&
                    ((c = c.replace(N, '')),
                    (b = c.match(M) ? [1 * RegExp.$1, RegExp.$2] : !1)),
                b
            )
        })
    if (
        (J in x || (J = 'src'),
        (C['image/jpeg'] = !0),
        (C['image/gif'] = !0),
        (C['image/png'] = !0),
        (C['image/svg+xml'] = b.implementation.hasFeature(
            'http://wwwindow.w3.org/TR/SVG11/feature#Image',
            '1.1'
        )),
        (v.ns = ('ri' + new Date().getTime()).substr(0, 9)),
        (v.supSrcset = 'srcset' in x),
        (v.supSizes = 'sizes' in x),
        (v.supPicture = !!a.HTMLPictureElement),
        v.supSrcset &&
            v.supPicture &&
            !v.supSizes &&
            !(function (a) {
                ;(x.srcset = 'data:,a'),
                    (a.src = 'data:,a'),
                    (v.supSrcset = x.complete === a.complete),
                    (v.supPicture = v.supSrcset && v.supPicture)
            })(b.createElement('img')),
        (v.selShort = 'picture>img,img[srcset]'),
        (v.sel = v.selShort),
        (v.cfg = D),
        v.supSrcset && (v.sel += ',img[' + F + ']'),
        (v.DPR = U || 1),
        (v.u = V),
        (v.types = C),
        (s = v.supSrcset && !v.supSizes),
        (v.setSize = w),
        (v.makeUrl = Z(function (a) {
            return (W.href = a), W.href
        })),
        (v.qsa = function (a, b) {
            return a.querySelectorAll(b)
        }),
        (v.matchesMedia = function () {
            return (
                (v.matchesMedia =
                    a.matchMedia &&
                    (matchMedia('(min-width: 0.1em)') || {}).matches
                        ? function (a) {
                              return !a || matchMedia(a).matches
                          }
                        : v.mMQ),
                v.matchesMedia.apply(this, arguments)
            )
        }),
        (v.mMQ = function (a) {
            return a ? $(a) : !0
        }),
        (v.calcLength = function (a) {
            var b = $(a, !0) || !1
            return 0 > b && (b = !1), b
        }),
        (v.supportsType = function (a) {
            return a ? C[a] : !0
        }),
        (v.parseSize = Z(function (a) {
            var b = (a || '').match(L)
            return { media: b && b[1], length: b && b[2] }
        })),
        (v.parseSet = function (a) {
            if (!a.cands) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = a.srcset
                for (a.cands = []; h; )
                    (h = h.replace(/^\s+/g, '')),
                        (b = h.search(/\s/g)),
                        (d = null),
                        -1 != b
                            ? ((c = h.slice(0, b)),
                              (e = c.charAt(c.length - 1)),
                              (',' != e && c) ||
                                  ((c = c.replace(/,+$/, '')), (d = '')),
                              (h = h.slice(b + 1)),
                              null == d &&
                                  ((f = h.indexOf(',')),
                                  -1 != f
                                      ? ((d = h.slice(0, f)),
                                        (h = h.slice(f + 1)))
                                      : ((d = h), (h = ''))))
                            : ((c = h), (h = '')),
                        c &&
                            (d = bb(d)) &&
                            ((g = { url: c.replace(/^,+/, ''), set: a }),
                            (g[d[1]] = d[0]),
                            'x' == d[1] && 1 == d[0] && (a.has1x = !0),
                            a.cands.push(g))
            }
            return a.cands
        }),
        (v.getEmValue = function () {
            var a
            if (!r && (a = b.body)) {
                var c = b.createElement('div'),
                    d = B.style.cssText,
                    e = a.style.cssText
                ;(c.style.cssText = P),
                    (B.style.cssText = Q),
                    (a.style.cssText = Q),
                    a.appendChild(c),
                    (r = c.offsetWidth),
                    a.removeChild(c),
                    (r = parseFloat(r, 10)),
                    (B.style.cssText = d),
                    (a.style.cssText = e)
            }
            return r || 16
        }),
        (v.calcListLength = function (a) {
            if (!(a in T) || D.uT) {
                var b,
                    c,
                    e,
                    f,
                    g,
                    h,
                    i = d(a).split(/\s*,\s*/),
                    j = !1
                for (
                    g = 0, h = i.length;
                    h > g &&
                    ((b = i[g]),
                    (c = v.parseSize(b)),
                    (e = c.length),
                    (f = c.media),
                    !e || !v.matchesMedia(f) || (j = v.calcLength(e)) === !1);
                    g++
                );
                T[a] = j ? j : V.width
            }
            return T[a]
        }),
        (v.setRes = function (a) {
            var b
            if (a) {
                b = v.parseSet(a)
                for (var c = 0, d = b.length; d > c; c++) _(b[c], a.sizes)
            }
            return b
        }),
        (v.setRes.res = _),
        (v.applySetCandidate = function (a, b) {
            if (a.length) {
                var c,
                    d,
                    e,
                    g,
                    j,
                    k,
                    n,
                    r,
                    s,
                    t,
                    w,
                    x,
                    y,
                    z = b[v.ns],
                    A = u,
                    B = o,
                    C = q
                if (
                    ((r = z.curSrc || b[J]),
                    (s = z.curCan || i(b, r, a[0].set)),
                    (d = v.DPR),
                    (y = s && s.res),
                    !n &&
                        r &&
                        ((x = I && !b.complete && s && y - 0.2 > d),
                        x ||
                            (s && !(p > y)) ||
                            (s &&
                                d > y &&
                                y > l &&
                                (m > y && ((B *= 0.8), (C += 0.04 * d)),
                                (s.res += B * Math.pow(y - C, 2))),
                            (t = !z.pic || (s && s.set == a[0].set)),
                            s && t && s.res >= d && (n = s))),
                    !n)
                )
                    for (
                        y && (s.res = s.res - (s.res - y) / 2),
                            a.sort(h),
                            k = a.length,
                            n = a[k - 1],
                            e = 0;
                        k > e;
                        e++
                    )
                        if (((c = a[e]), c.res >= d)) {
                            ;(g = e - 1),
                                (n =
                                    a[g] &&
                                    (j = c.res - d) &&
                                    (x || r != v.makeUrl(c.url)) &&
                                    f(a[g].res, j, d)
                                        ? a[g]
                                        : c)
                            break
                        }
                return (
                    y && (s.res = y),
                    n &&
                        ((w = v.makeUrl(n.url)),
                        (z.curSrc = w),
                        (z.curCan = n),
                        w != r && v.setSrc(b, n),
                        v.setSize(b)),
                    A
                )
            }
        }),
        (v.setSrc = function (a, b) {
            var c
            ;(a.src = b.url),
                G &&
                    ((c = a.style.zoom),
                    (a.style.zoom = '0.999'),
                    (a.style.zoom = c))
        }),
        (v.getSet = function (a) {
            var b,
                c,
                d,
                e = !1,
                f = a[v.ns].sets
            for (b = 0; b < f.length && !e; b++)
                if (
                    ((c = f[b]),
                    c.srcset &&
                        v.matchesMedia(c.media) &&
                        (d = v.supportsType(c.type)))
                ) {
                    'pending' == d && (c = d), (e = c)
                    break
                }
            return e
        }),
        (v.parseSets = function (a, b, d) {
            var e,
                f,
                g,
                h,
                i = 'PICTURE' == b.nodeName.toUpperCase(),
                l = a[v.ns]
            ;(l.src === c || d.src) &&
                ((l.src = y.call(a, 'src')),
                l.src ? z.call(a, E, l.src) : A.call(a, E)),
                (l.srcset === c || !v.supSrcset || a.srcset || d.srcset) &&
                    ((e = y.call(a, 'srcset')), (l.srcset = e), (h = !0)),
                (l.sets = []),
                i && ((l.pic = !0), k(b, l.sets)),
                l.srcset
                    ? ((f = { srcset: l.srcset, sizes: y.call(a, 'sizes') }),
                      l.sets.push(f),
                      (g = (s || l.src) && K.test(l.srcset || '')),
                      g ||
                          !l.src ||
                          j(l.src, f) ||
                          f.has1x ||
                          ((f.srcset += ', ' + l.src),
                          f.cands.push({ url: l.src, x: 1, set: f })))
                    : l.src && l.sets.push({ srcset: l.src, sizes: null }),
                (l.curCan = null),
                (l.curSrc = c),
                (l.supported = !(i || (f && !v.supSrcset) || g)),
                h &&
                    v.supSrcset &&
                    !l.supported &&
                    (e ? (z.call(a, F, e), (a.srcset = '')) : A.call(a, F)),
                l.supported &&
                    !l.srcset &&
                    ((!l.src && a.src) || a.src != v.makeUrl(l.src)) &&
                    (null == l.src
                        ? a.removeAttribute('src')
                        : (a.src = l.src)),
                (l.parsed = !0)
        }),
        (v.fillImg = function (a, b) {
            var c,
                d,
                e = b.reselect || b.reevaluate
            if (
                (a[v.ns] || (a[v.ns] = {}), (d = a[v.ns]), e || d.evaled != u)
            ) {
                if (!d.parsed || b.reevaluate) {
                    if (((c = a.parentNode), !c)) return
                    v.parseSets(a, c, b)
                }
                d.supported ? (d.evaled = u) : g(a)
            }
        }),
        (v.setupRun = function (b) {
            ;(!X || R || U != a.devicePixelRatio) &&
                (e(), b.elements || b.context || clearTimeout(t))
        }),
        v.supPicture
            ? ((ab = w), (v.fillImg = w))
            : (b.createElement('picture'),
              (function () {
                  var c,
                      d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                      e = function () {
                          var a = b.readyState || ''
                          ;(h = setTimeout(e, 'loading' == a ? 200 : 999)),
                              b.body &&
                                  ((c = c || d.test(a)),
                                  v.fillImgs(),
                                  c && clearTimeout(h))
                      },
                      f = function () {
                          v.fillImgs()
                      },
                      g = function () {
                          clearTimeout(t), (R = !0), (t = setTimeout(f, 99))
                      },
                      h = setTimeout(e, b.body ? 0 : 20)
                  Y(a, 'resize', g), Y(b, 'readystatechange', e)
              })()),
        (v.respimage = ab),
        (v.fillImgs = ab),
        (v.teardownRun = w),
        (ab._ = v),
        (a.respimage = a.picturefill || ab),
        !a.picturefill)
    )
        for (
            a.respimgCFG = {
                ri: v,
                push: function (a) {
                    var b = a.shift()
                    'function' == typeof v[b]
                        ? v[b].apply(v, a)
                        : ((D[b] = a[0]), X && v.fillImgs({ reselect: !0 }))
                },
            };
            O && O.length;

        )
            a.respimgCFG.push(O.shift())
    a.picturefill ||
        ((a.picturefill = a.respimage),
        a.picturefillCFG || (a.picturefillCFG = a.respimgCFG))
})(window, document)
