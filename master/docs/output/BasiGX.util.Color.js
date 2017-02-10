Ext.data.JsonP.BasiGX_util_Color({"tagname":"class","name":"BasiGX.util.Color","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Color.js","href":"Color.html#BasiGX-util-Color"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"hex8ToRgba","tagname":"method","owner":"BasiGX.util.Color","id":"static-method-hex8ToRgba","meta":{"static":true}},{"name":"hexToRgba","tagname":"method","owner":"BasiGX.util.Color","id":"static-method-hexToRgba","meta":{"static":true}},{"name":"rgbaAsArray","tagname":"method","owner":"BasiGX.util.Color","id":"static-method-rgbaAsArray","meta":{"static":true}},{"name":"rgbaToHex","tagname":"method","owner":"BasiGX.util.Color","id":"static-method-rgbaToHex","meta":{"static":true}},{"name":"rgbaToHex8","tagname":"method","owner":"BasiGX.util.Color","id":"static-method-rgbaToHex8","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.Color","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.Color</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Color.html#BasiGX-util-Color' target='_blank'>Color.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-hex8ToRgba' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Color'>BasiGX.util.Color</span><br/><a href='source/Color.html#BasiGX-util-Color-static-method-hex8ToRgba' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Color-static-method-hex8ToRgba' class='name expandable'>hex8ToRgba</a>( <span class='pre'>hex8</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Method converts a hex8 color string into an rgba color string. ...</div><div class='long'><p>Method converts a hex8 color string into an rgba color string.</p>\n\n<p>Example:\n    var rgba = <a href=\"#!/api/BasiGX.util.Color-static-method-hex8ToRgba\" rel=\"BasiGX.util.Color-static-method-hex8ToRgba\" class=\"docClass\">BasiGX.util.Color.hex8ToRgba</a>(\"#ff000000\");\n    // rgba is now: \"rgba(255,0,0,0)\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hex8</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-hexToRgba' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Color'>BasiGX.util.Color</span><br/><a href='source/Color.html#BasiGX-util-Color-static-method-hexToRgba' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Color-static-method-hexToRgba' class='name expandable'>hexToRgba</a>( <span class='pre'>hex, opacity</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Method converts a hex8 color string into an rgba color string. ...</div><div class='long'><p>Method converts a hex8 color string into an rgba color string.</p>\n\n<p>Example:\n    var rgba = <a href=\"#!/api/BasiGX.util.Color-static-method-hexToRgba\" rel=\"BasiGX.util.Color-static-method-hexToRgba\" class=\"docClass\">BasiGX.util.Color.hexToRgba</a>(\"#ff0000\", 0.5);\n    // rgba is now: \"rgba(255,0,0,0.5)\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hex</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opacity</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-rgbaAsArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Color'>BasiGX.util.Color</span><br/><a href='source/Color.html#BasiGX-util-Color-static-method-rgbaAsArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Color-static-method-rgbaAsArray' class='name expandable'>rgbaAsArray</a>( <span class='pre'>rgba</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rgba</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-rgbaToHex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Color'>BasiGX.util.Color</span><br/><a href='source/Color.html#BasiGX-util-Color-static-method-rgbaToHex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Color-static-method-rgbaToHex' class='name expandable'>rgbaToHex</a>( <span class='pre'>rgba</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Method converts a rgba color string into an hex6 color string. ...</div><div class='long'><p>Method converts a rgba color string into an hex6 color string.\nWarning: You will loose the alpha channel when using this method.</p>\n\n<p>Example:\n    var hex = <a href=\"#!/api/BasiGX.util.Color-static-method-rgbaToHex\" rel=\"BasiGX.util.Color-static-method-rgbaToHex\" class=\"docClass\">BasiGX.util.Color.rgbaToHex</a>(\"rgba(255,0,0,0)\");\n    // hex is now: \"#ff0000\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rgba</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-rgbaToHex8' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Color'>BasiGX.util.Color</span><br/><a href='source/Color.html#BasiGX-util-Color-static-method-rgbaToHex8' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Color-static-method-rgbaToHex8' class='name expandable'>rgbaToHex8</a>( <span class='pre'>rgba</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Method converts a rgba color string into an hex8 color string. ...</div><div class='long'><p>Method converts a rgba color string into an hex8 color string.</p>\n\n<p>Example:\n    var hex = <a href=\"#!/api/BasiGX.util.Color-static-method-rgbaToHex\" rel=\"BasiGX.util.Color-static-method-rgbaToHex\" class=\"docClass\">BasiGX.util.Color.rgbaToHex</a>(\"rgba(255,0,0,0)\");\n    // hex is now: \"#ff000000\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rgba</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});