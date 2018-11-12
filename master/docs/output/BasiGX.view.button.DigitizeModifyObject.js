Ext.data.JsonP.BasiGX_view_button_DigitizeModifyObject({"tagname":"class","name":"BasiGX.view.button.DigitizeModifyObject","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"DigitizeModifyObject.js","href":"DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject"}],"aliases":{"widget":["basigx-button-digitize-modify-object"]},"alternateClassNames":[],"extends":"BasiGX.view.button.Base","mixins":[],"requires":["BasiGX.util.Digitize"],"uses":[],"members":[{"name":"collection","tagname":"cfg","owner":"BasiGX.view.button.DigitizeModifyObject","id":"cfg-collection","meta":{}},{"name":"map","tagname":"cfg","owner":"BasiGX.view.button.DigitizeModifyObject","id":"cfg-map","meta":{}},{"name":"modifyInteraction","tagname":"cfg","owner":"BasiGX.view.button.DigitizeModifyObject","id":"cfg-modifyInteraction","meta":{}},{"name":"modifySelectInteraction","tagname":"cfg","owner":"BasiGX.view.button.DigitizeModifyObject","id":"cfg-modifySelectInteraction","meta":{}},{"name":"postitTextMaxLength","tagname":"cfg","owner":"BasiGX.view.button.DigitizeModifyObject","id":"cfg-postitTextMaxLength","meta":{}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.DigitizeModifyObject","id":"property-bind","meta":{}},{"name":"listeners","tagname":"property","owner":"BasiGX.view.button.DigitizeModifyObject","id":"property-listeners","meta":{"private":true}},{"name":"name","tagname":"property","owner":"BasiGX.view.button.DigitizeModifyObject","id":"property-name","meta":{"private":true}},{"name":"toggleGroup","tagname":"property","owner":"BasiGX.view.button.DigitizeModifyObject","id":"property-toggleGroup","meta":{"private":true}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.DigitizeModifyObject","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.Base","id":"method-constructor","meta":{}},{"name":"fireFeatureChanged","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-fireFeatureChanged","meta":{}},{"name":"getCollection","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-getCollection","meta":{}},{"name":"getMap","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-getMap","meta":{}},{"name":"getModifyInteraction","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-getModifyInteraction","meta":{}},{"name":"getModifySelectInteraction","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-getModifySelectInteraction","meta":{}},{"name":"getPostitTextMaxLength","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-getPostitTextMaxLength","meta":{}},{"name":"modifyPostit","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-modifyPostit","meta":{}},{"name":"setCollection","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-setCollection","meta":{}},{"name":"setMap","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-setMap","meta":{}},{"name":"setModifyInteraction","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-setModifyInteraction","meta":{}},{"name":"setModifySelectInteraction","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-setModifySelectInteraction","meta":{}},{"name":"setPostitTextMaxLength","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-setPostitTextMaxLength","meta":{}},{"name":"setPostitTextOnFeature","tagname":"method","owner":"BasiGX.view.button.DigitizeModifyObject","id":"method-setPostitTextOnFeature","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.DigitizeModifyObject","component":false,"superclasses":["Ext.Button","BasiGX.view.button.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='docClass'>BasiGX.view.button.Base</a><div class='subclass '><strong>BasiGX.view.button.DigitizeModifyObject</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Digitize' rel='BasiGX.util.Digitize' class='docClass'>BasiGX.util.Digitize</a></div><h4>Files</h4><div class='dependency'><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject' target='_blank'>DigitizeModifyObject.js</a></div></pre><div class='doc-contents'><p>Digitize Modify Object Button</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-collection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-collection' class='name expandable'>collection</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The ol collection to work on. ...</div><div class='long'><p>The ol collection to work on. required.</p>\n</div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-map' class='name expandable'>map</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The ol map. ...</div><div class='long'><p>The ol map. required.</p>\n</div></div></div><div id='cfg-modifyInteraction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-modifyInteraction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-modifyInteraction' class='name expandable'>modifyInteraction</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-modifySelectInteraction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-modifySelectInteraction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-modifySelectInteraction' class='name expandable'>modifySelectInteraction</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-postitTextMaxLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-postitTextMaxLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-postitTextMaxLength' class='name expandable'>postitTextMaxLength</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The maximum length of text allowed for the postit ...</div><div class='long'><p>The maximum length of text allowed for the postit</p>\n<p>Defaults to: <code>130</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: &#39;{modifyObjectBtnText}&#39;}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-bind\" rel=\"BasiGX.view.button.Base-property-bind\" class=\"docClass\">BasiGX.view.button.Base.bind</a></p></div></div></div><div id='property-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-property-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-property-name' class='name expandable'>name</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;modifyObjectBtn&#39;</code></p></div></div></div><div id='property-toggleGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-property-toggleGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-property-toggleGroup' class='name expandable'>toggleGroup</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;draw&#39;</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: &#39;Modify an objetct&#39;, modifyObjectBtnText: &#39;Modify object&#39;, postItWindowTitle: &#39;Enter the Post-its text&#39;, postItInputTooLongText: &#39;The text you have entered is too long. &#39; + &#39;Do you want to continue anyway?&#39;}}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-viewModel\" rel=\"BasiGX.view.button.Base-property-viewModel\" class=\"docClass\">BasiGX.view.button.Base.viewModel</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='defined-in docClass'>BasiGX.view.button.Base</a><br/><a href='source/Base.html#BasiGX-view-button-Base-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.Base-method-constructor' class='name expandable'>BasiGX.view.button.DigitizeModifyObject</a>( <span class='pre'></span> ) : <a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireFeatureChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-method-fireFeatureChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-fireFeatureChanged' class='name expandable'>fireFeatureChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fire a change event to inform other components ...</div><div class='long'><p>Fire a change event to inform other components</p>\n<h3 class='pa'>Fires</h3><ul><li>featurechanged</li></ul></div></div></div><div id='method-getCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-getCollection' class='name expandable'>getCollection</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of collection. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-collection\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-collection\" class=\"docClass\">collection</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-getMap' class='name expandable'>getMap</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of map. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-map\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModifyInteraction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-modifyInteraction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-getModifyInteraction' class='name expandable'>getModifyInteraction</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of modifyInteraction. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-modifyInteraction\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-modifyInteraction\" class=\"docClass\">modifyInteraction</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModifySelectInteraction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-modifySelectInteraction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-getModifySelectInteraction' class='name expandable'>getModifySelectInteraction</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of modifySelectInteraction. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-modifySelectInteraction\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-modifySelectInteraction\" class=\"docClass\">modifySelectInteraction</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPostitTextMaxLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-postitTextMaxLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-getPostitTextMaxLength' class='name expandable'>getPostitTextMaxLength</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of postitTextMaxLength. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-postitTextMaxLength\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-postitTextMaxLength\" class=\"docClass\">postitTextMaxLength</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-modifyPostit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-method-modifyPostit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-modifyPostit' class='name expandable'>modifyPostit</a>( <span class='pre'>feature, oldText</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Modify a postit text. ...</div><div class='long'><p>Modify a postit text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : ol.Feature<div class='sub-desc'><p>The vector feature.</p>\n</div></li><li><span class='pre'>oldText</span> : String<div class='sub-desc'><p>The old text of the postit.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>featurechanged</li></ul></div></div></div><div id='method-setCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-setCollection' class='name expandable'>setCollection</a>( <span class='pre'>collection</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of collection. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-collection\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-collection\" class=\"docClass\">collection</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>collection</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-setMap' class='name expandable'>setMap</a>( <span class='pre'>map</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of map. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-map\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setModifyInteraction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-modifyInteraction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-setModifyInteraction' class='name expandable'>setModifyInteraction</a>( <span class='pre'>modifyInteraction</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of modifyInteraction. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-modifyInteraction\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-modifyInteraction\" class=\"docClass\">modifyInteraction</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modifyInteraction</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setModifySelectInteraction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-modifySelectInteraction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-setModifySelectInteraction' class='name expandable'>setModifySelectInteraction</a>( <span class='pre'>modifySelectInteraction</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of modifySelectInteraction. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-modifySelectInteraction\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-modifySelectInteraction\" class=\"docClass\">modifySelectInteraction</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modifySelectInteraction</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setPostitTextMaxLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-cfg-postitTextMaxLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-setPostitTextMaxLength' class='name expandable'>setPostitTextMaxLength</a>( <span class='pre'>postitTextMaxLength</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of postitTextMaxLength. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizeModifyObject-cfg-postitTextMaxLength\" rel=\"BasiGX.view.button.DigitizeModifyObject-cfg-postitTextMaxLength\" class=\"docClass\">postitTextMaxLength</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>postitTextMaxLength</span> : Number<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setPostitTextOnFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizeModifyObject'>BasiGX.view.button.DigitizeModifyObject</span><br/><a href='source/DigitizeModifyObject.html#BasiGX-view-button-DigitizeModifyObject-method-setPostitTextOnFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizeModifyObject-method-setPostitTextOnFeature' class='name expandable'>setPostitTextOnFeature</a>( <span class='pre'>text, feat</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets a postit text on a feature. ...</div><div class='long'><p>Sets a postit text on a feature.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text of the postit.</p>\n</div></li><li><span class='pre'>feat</span> : ol.Feature<div class='sub-desc'><p>The vector feature.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>featurechanged</li></ul></div></div></div></div></div></div></div>","meta":{}});