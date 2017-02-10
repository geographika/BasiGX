Ext.data.JsonP.BasiGX_view_button_CoordinateTransform({"tagname":"class","name":"BasiGX.view.button.CoordinateTransform","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"CoordinateTransform.js","href":"CoordinateTransform.html#BasiGX-view-button-CoordinateTransform"}],"aliases":{"widget":["basigx-button-coordinatetransform"]},"alternateClassNames":[],"extends":"BasiGX.view.button.Base","mixins":[],"requires":["BasiGX.util.Animate","BasiGX.view.form.CoordinateTransform","Ext.app.ViewModel","Ext.window.Window"],"uses":[],"members":[{"name":"handler","tagname":"cfg","owner":"BasiGX.view.button.CoordinateTransform","id":"cfg-handler","meta":{"private":true}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.CoordinateTransform","id":"property-bind","meta":{}},{"name":"config","tagname":"property","owner":"BasiGX.view.button.CoordinateTransform","id":"property-config","meta":{}},{"name":"coordinateSystemsToUse","tagname":"property","owner":"BasiGX.view.button.CoordinateTransform","id":"property-coordinateSystemsToUse","meta":{}},{"name":"transformCenterOnRender","tagname":"property","owner":"BasiGX.view.button.CoordinateTransform","id":"property-transformCenterOnRender","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.CoordinateTransform","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.Base","id":"method-constructor","meta":{}},{"name":"getHandler","tagname":"method","owner":"BasiGX.view.button.CoordinateTransform","id":"method-getHandler","meta":{}},{"name":"setHandler","tagname":"method","owner":"BasiGX.view.button.CoordinateTransform","id":"method-setHandler","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.CoordinateTransform","short_doc":"CoordinateTransform Button\n\nButton used to instanciate the basigx-form-CoordinateTransform in order\nto show and trans...","component":false,"superclasses":["Ext.Button","BasiGX.view.button.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='docClass'>BasiGX.view.button.Base</a><div class='subclass '><strong>BasiGX.view.button.CoordinateTransform</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Animate' rel='BasiGX.util.Animate' class='docClass'>BasiGX.util.Animate</a></div><div class='dependency'><a href='#!/api/BasiGX.view.form.CoordinateTransform' rel='BasiGX.view.form.CoordinateTransform' class='docClass'>BasiGX.view.form.CoordinateTransform</a></div><div class='dependency'>Ext.app.ViewModel</div><div class='dependency'>Ext.window.Window</div><h4>Files</h4><div class='dependency'><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform' target='_blank'>CoordinateTransform.js</a></div></pre><div class='doc-contents'><p>CoordinateTransform Button</p>\n\n<p>Button used to instanciate the basigx-form-CoordinateTransform in order\nto show and transform coordinates</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-cfg-handler' class='name expandable'>handler</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: '{text}'}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-bind\" rel=\"BasiGX.view.button.Base-property-bind\" class=\"docClass\">BasiGX.view.button.Base.bind</a></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-coordinateSystemsToUse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-property-coordinateSystemsToUse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-property-coordinateSystemsToUse' class='name expandable'>coordinateSystemsToUse</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Array of CRS in EPSG notation that should be used ...</div><div class='long'><p>Array of CRS in EPSG notation that should be used</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-transformCenterOnRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-property-transformCenterOnRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-property-transformCenterOnRender' class='name expandable'>transformCenterOnRender</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: 'Koordinaten transformieren und anzeigen', text: 'Koordinaten transformieren', windowTitle: 'Koordinaten transformieren'}}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-viewModel\" rel=\"BasiGX.view.button.Base-property-viewModel\" class=\"docClass\">BasiGX.view.button.Base.viewModel</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='defined-in docClass'>BasiGX.view.button.Base</a><br/><a href='source/Base.html#BasiGX-view-button-Base-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.Base-method-constructor' class='name expandable'>BasiGX.view.button.CoordinateTransform</a>( <span class='pre'></span> ) : <a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-method-getHandler' class='name expandable'>getHandler</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of handler. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.CoordinateTransform-cfg-handler\" rel=\"BasiGX.view.button.CoordinateTransform-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.CoordinateTransform'>BasiGX.view.button.CoordinateTransform</span><br/><a href='source/CoordinateTransform.html#BasiGX-view-button-CoordinateTransform-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.CoordinateTransform-method-setHandler' class='name expandable'>setHandler</a>( <span class='pre'>handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of handler. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.CoordinateTransform-cfg-handler\" rel=\"BasiGX.view.button.CoordinateTransform-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});