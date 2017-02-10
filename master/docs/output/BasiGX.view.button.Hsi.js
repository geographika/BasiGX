Ext.data.JsonP.BasiGX_view_button_Hsi({"tagname":"class","name":"BasiGX.view.button.Hsi","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Hsi.js","href":"Hsi.html#BasiGX-view-button-Hsi"}],"aliases":{"widget":["basigx-button-hsi"]},"alternateClassNames":[],"extends":"BasiGX.view.button.Base","mixins":[],"requires":["BasiGX.util.Map","Ext.app.ViewModel"],"uses":[],"members":[{"name":"handler","tagname":"cfg","owner":"BasiGX.view.button.Hsi","id":"cfg-handler","meta":{"private":true}},{"name":"mapPanelXType","tagname":"cfg","owner":"BasiGX.view.button.Hsi","id":"cfg-mapPanelXType","meta":{}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.Hsi","id":"property-bind","meta":{}},{"name":"buttonPressed","tagname":"property","owner":"BasiGX.view.button.Hsi","id":"property-buttonPressed","meta":{}},{"name":"config","tagname":"property","owner":"BasiGX.view.button.Hsi","id":"property-config","meta":{}},{"name":"enableToggle","tagname":"property","owner":"BasiGX.view.button.Hsi","id":"property-enableToggle","meta":{}},{"name":"glyph","tagname":"property","owner":"BasiGX.view.button.Hsi","id":"property-glyph","meta":{}},{"name":"html","tagname":"property","owner":"BasiGX.view.button.Hsi","id":"property-html","meta":{"private":true}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.Hsi","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.Hsi","id":"method-constructor","meta":{}},{"name":"getHandler","tagname":"method","owner":"BasiGX.view.button.Hsi","id":"method-getHandler","meta":{}},{"name":"getMapPanelXType","tagname":"method","owner":"BasiGX.view.button.Hsi","id":"method-getMapPanelXType","meta":{}},{"name":"setControlStatus","tagname":"method","owner":"BasiGX.view.button.Hsi","id":"method-setControlStatus","meta":{}},{"name":"setHandler","tagname":"method","owner":"BasiGX.view.button.Hsi","id":"method-setHandler","meta":{}},{"name":"setMapPanelXType","tagname":"method","owner":"BasiGX.view.button.Hsi","id":"method-setMapPanelXType","meta":{}},{"name":"toggleButton","tagname":"method","owner":"BasiGX.view.button.Hsi","id":"method-toggleButton","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.Hsi","component":false,"superclasses":["Ext.Button","BasiGX.view.button.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='docClass'>BasiGX.view.button.Base</a><div class='subclass '><strong>BasiGX.view.button.Hsi</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Map' rel='BasiGX.util.Map' class='docClass'>BasiGX.util.Map</a></div><div class='dependency'>Ext.app.ViewModel</div><h4>Files</h4><div class='dependency'><a href='source/Hsi.html#BasiGX-view-button-Hsi' target='_blank'>Hsi.js</a></div></pre><div class='doc-contents'><p>HSI Button</p>\n\n<p>Button used to query for information.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-cfg-handler' class='name expandable'>handler</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-mapPanelXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-cfg-mapPanelXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-cfg-mapPanelXType' class='name expandable'>mapPanelXType</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Placeholder for the xtype of the map component (e.g. ...</div><div class='long'><p>Placeholder for the xtype of the map component (e.g. 'basigx-component-map').\nWill be used to be able to determine the map component dynamically</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: '{text}'}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-bind\" rel=\"BasiGX.view.button.Base-property-bind\" class=\"docClass\">BasiGX.view.button.Base.bind</a></p></div></div></div><div id='property-buttonPressed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-property-buttonPressed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-property-buttonPressed' class='name expandable'>buttonPressed</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-enableToggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-property-enableToggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-property-enableToggle' class='name expandable'>enableToggle</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-glyph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-property-glyph' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-property-glyph' class='name expandable'>glyph</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The icons the button should use. ...</div><div class='long'><p>The icons the button should use.\nClassic Toolkit uses glyphs, modern toolkit uses html</p>\n<p>Defaults to: <code>'xf05a@FontAwesome'</code></p></div></div></div><div id='property-html' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-property-html' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-property-html' class='name expandable'>html</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'&lt;i class=&quot;fa fa-info-circle fa-2x&quot;&gt;&lt;/i&gt;'</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: 'Informationsabfrage', text: null}}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-viewModel\" rel=\"BasiGX.view.button.Base-property-viewModel\" class=\"docClass\">BasiGX.view.button.Base.viewModel</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.Hsi-method-constructor' class='name expandable'>BasiGX.view.button.Hsi</a>( <span class='pre'></span> ) : <a href=\"#!/api/BasiGX.view.button.Hsi\" rel=\"BasiGX.view.button.Hsi\" class=\"docClass\">BasiGX.view.button.Hsi</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.Hsi\" rel=\"BasiGX.view.button.Hsi\" class=\"docClass\">BasiGX.view.button.Hsi</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-method-constructor\" rel=\"BasiGX.view.button.Base-method-constructor\" class=\"docClass\">BasiGX.view.button.Base.constructor</a></p></div></div></div><div id='method-getHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-method-getHandler' class='name expandable'>getHandler</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of handler. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.Hsi-cfg-handler\" rel=\"BasiGX.view.button.Hsi-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMapPanelXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-cfg-mapPanelXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-method-getMapPanelXType' class='name expandable'>getMapPanelXType</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of mapPanelXType. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.Hsi-cfg-mapPanelXType\" rel=\"BasiGX.view.button.Hsi-cfg-mapPanelXType\" class=\"docClass\">mapPanelXType</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setControlStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-method-setControlStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-method-setControlStatus' class='name expandable'>setControlStatus</a>( <span class='pre'>status</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>status</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-method-setHandler' class='name expandable'>setHandler</a>( <span class='pre'>handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of handler. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.Hsi-cfg-handler\" rel=\"BasiGX.view.button.Hsi-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMapPanelXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-cfg-mapPanelXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-method-setMapPanelXType' class='name expandable'>setMapPanelXType</a>( <span class='pre'>mapPanelXType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of mapPanelXType. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.Hsi-cfg-mapPanelXType\" rel=\"BasiGX.view.button.Hsi-cfg-mapPanelXType\" class=\"docClass\">mapPanelXType</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mapPanelXType</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-toggleButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Hsi'>BasiGX.view.button.Hsi</span><br/><a href='source/Hsi.html#BasiGX-view-button-Hsi-method-toggleButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Hsi-method-toggleButton' class='name expandable'>toggleButton</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});