Ext.data.JsonP.BasiGX_util_Map({"tagname":"class","name":"BasiGX.util.Map","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Map.js","href":"Map.html#BasiGX-util-Map"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"dpi","tagname":"property","owner":"BasiGX.util.Map","id":"static-property-dpi","meta":{"static":true}},{"name":"inchesPerMeter","tagname":"property","owner":"BasiGX.util.Map","id":"static-property-inchesPerMeter","meta":{"static":true}},{"name":"getLegendTreePanel","tagname":"method","owner":"BasiGX.util.Map","id":"static-method-getLegendTreePanel","meta":{"static":true}},{"name":"getMapComponent","tagname":"method","owner":"BasiGX.util.Map","id":"static-method-getMapComponent","meta":{"static":true}},{"name":"getResolution","tagname":"method","owner":"BasiGX.util.Map","id":"static-method-getResolution","meta":{"private":true,"static":true}},{"name":"getResolutionForScale","tagname":"method","owner":"BasiGX.util.Map","id":"static-method-getResolutionForScale","meta":{"static":true}},{"name":"getScale","tagname":"method","owner":"BasiGX.util.Map","id":"static-method-getScale","meta":{"static":true}},{"name":"getScaleForResolution","tagname":"method","owner":"BasiGX.util.Map","id":"static-method-getScaleForResolution","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.Map","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.Map</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Map.html#BasiGX-util-Map' target='_blank'>Map.js</a></div></pre><div class='doc-contents'><p>Map Util</p>\n\n<p>Some methods to work with ol-layers</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-dpi' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-property-dpi' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-property-dpi' class='name expandable'>dpi</a> : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The dpi as defined by OGC (e.g. ...</div><div class='long'><p>The dpi as defined by OGC (e.g. for WMTS tile matrix sets).\nCalculated as 25.4 / 0.28\n  * 25.4 mm in one inch\n  * one pixel is 0.28mm (per spec of OGC)</p>\n<p>Defaults to: <code>90.7142857142857</code></p></div></div></div><div id='static-property-inchesPerMeter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-property-inchesPerMeter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-property-inchesPerMeter' class='name expandable'>inchesPerMeter</a> : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The number of inches in a meter. ...</div><div class='long'><p>The number of inches in a meter.</p>\n<p>Defaults to: <code>39.37</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-getLegendTreePanel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-method-getLegendTreePanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-method-getLegendTreePanel' class='name expandable'>getLegendTreePanel</a>( <span class='pre'>legendCompXType</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Determine legendtree panel component depending on provided xtype. ...</div><div class='long'><p>Determine legendtree panel component depending on provided xtype.\nIf no xtype was specified, <code>basigx-panel-legendtree</code> component will be\nused as fallback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>legendCompXType</span> : String<div class='sub-desc'><p>Provided map component xtype</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>legendComponent</p>\n</div></li></ul></div></div></div><div id='static-method-getMapComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-method-getMapComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-method-getMapComponent' class='name expandable'>getMapComponent</a>( <span class='pre'>mapCompXtype</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Determine map component depending on provided xtype. ...</div><div class='long'><p>Determine map component depending on provided xtype.\nIf no xtype was specified, <code>basigx-component-map</code> component will be\nused as fallback. If this also could not be found, use the most\ncommon GeoExt map component <code>gx_map</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mapCompXtype</span> : String<div class='sub-desc'><p>Provided map component xtype</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>mapComponent</p>\n</div></li></ul></div></div></div><div id='static-method-getResolution' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-method-getResolution' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-method-getResolution' class='name expandable'>getResolution</a>( <span class='pre'>map</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-getResolutionForScale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-method-getResolutionForScale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-method-getResolutionForScale' class='name expandable'>getResolutionForScale</a>( <span class='pre'>scale, units</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Given a scale and a unit, this method will return a resolution. ...</div><div class='long'><p>Given a scale and a unit, this method will return a resolution.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scale</span> : Number<div class='sub-desc'><p>The scale ypu wish to have the resolution for.</p>\n</div></li><li><span class='pre'>units</span> : String<div class='sub-desc'><p>The units to get the resoultuion for, typically\n    the unit of the projection odf the map view. Allowed values are\n    <code>'degrees'</code>, <code>'ft'</code>, <code>'m'</code> or <code>'us-ft'</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The calculated resolution.</p>\n</div></li></ul></div></div></div><div id='static-method-getScale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-method-getScale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-method-getScale' class='name expandable'>getScale</a>( <span class='pre'>map</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>http://gis.stackexchange.com/questions/158435/how-to-get-current-scale-in-openlayers-3 ...</div><div class='long'><p>http://gis.stackexchange.com/questions/158435/how-to-get-current-scale-in-openlayers-3</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-getScaleForResolution' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Map'>BasiGX.util.Map</span><br/><a href='source/Map.html#BasiGX-util-Map-static-method-getScaleForResolution' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Map-static-method-getScaleForResolution' class='name expandable'>getScaleForResolution</a>( <span class='pre'>scale, units</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Given a resolution and a unit, this method will return a scale. ...</div><div class='long'><p>Given a resolution and a unit, this method will return a scale.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scale</span> : Number<div class='sub-desc'><p>The resolution ypu wish to have the scale for.</p>\n</div></li><li><span class='pre'>units</span> : String<div class='sub-desc'><p>The units to get the resoultuion for, typically\n    the unit of the projection odf the map view. Allowed values are\n    <code>'degrees'</code>, <code>'ft'</code>, <code>'m'</code> or <code>'us-ft'</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The calculated scale.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});