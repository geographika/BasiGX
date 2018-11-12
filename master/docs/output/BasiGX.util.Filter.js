Ext.data.JsonP.BasiGX_util_Filter({"tagname":"class","name":"BasiGX.util.Filter","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Filter.js","href":"Filter.html#BasiGX-util-Filter"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["BasiGX.util.SLD"],"uses":[],"members":[{"name":"filterContentToWholeSimpleFilter","tagname":"method","owner":"BasiGX.util.Filter","id":"static-method-filterContentToWholeSimpleFilter","meta":{"static":true}},{"name":"filterGeometryToIntersectionFilter","tagname":"method","owner":"BasiGX.util.Filter","id":"static-method-filterGeometryToIntersectionFilter","meta":{"static":true}},{"name":"filterValuesToLogicalFilter","tagname":"method","owner":"BasiGX.util.Filter","id":"static-method-filterValuesToLogicalFilter","meta":{"static":true}},{"name":"filterValuesToSimpleFilter","tagname":"method","owner":"BasiGX.util.Filter","id":"static-method-filterValuesToSimpleFilter","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.Filter","short_doc":"Utility class containing static methods to create a filter encoding objects\ndepending on given layer attribute filter...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.Filter</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.SLD' rel='BasiGX.util.SLD' class='docClass'>BasiGX.util.SLD</a></div><h4>Files</h4><div class='dependency'><a href='source/Filter.html#BasiGX-util-Filter' target='_blank'>Filter.js</a></div></pre><div class='doc-contents'><p>Utility class containing static methods to create a filter encoding objects\ndepending on given layer attribute filter configuration.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-filterContentToWholeSimpleFilter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Filter'>BasiGX.util.Filter</span><br/><a href='source/Filter.html#BasiGX-util-Filter-static-method-filterContentToWholeSimpleFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Filter-static-method-filterContentToWholeSimpleFilter' class='name expandable'>filterContentToWholeSimpleFilter</a>( <span class='pre'>filterContent</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>This method will be used to create a whole filter encoding string\nfor given filter content by adding of &lt;ogc:Filte...</div><div class='long'><p>This method will be used to create a whole filter encoding string\nfor given filter content by adding of <code>&lt;ogc:Filter&gt;</code> tag around of\nfilter itself.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterContent</span> : Object<div class='sub-desc'><p>Jsonix conform filter content value\n    object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object representing a simple OGC filter 1.0.0;\n    ready to be stringified using Jsonix.</p>\n</div></li></ul></div></div></div><div id='static-method-filterGeometryToIntersectionFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Filter'>BasiGX.util.Filter</span><br/><a href='source/Filter.html#BasiGX-util-Filter-static-method-filterGeometryToIntersectionFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Filter-static-method-filterGeometryToIntersectionFilter' class='name expandable'>filterGeometryToIntersectionFilter</a>( <span class='pre'>geom, proj, geomName, geomType, spatialOperator</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>This method will be used to create simple spatial filter (e.g. ...</div><div class='long'><p>This method will be used to create simple spatial filter (e.g. for\nINTERSECT, CONTAIN or OVERLAP operations). Currently only INTERSECT\nfilter will be supported.\nOutput after marshalling via Jsonix could be e.g. as follows:</p>\n\n<p>   &lt;ogc:Filter xmlns:ogc='http://www.opengis.net/ogc'\n               xmlns:gml='http://www.opengis.net/gml'\n               xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'\n               xmlns:xlink='http://www.w3.org/1999/xlink'\n               xmlns:ows='http://www.opengis.net/ows/1.1'\n               xmlns:wps='http://www.opengis.net/wps/1.0.0'>\n      &lt;ogc:Intersects>\n          &lt;ogc:PropertyName>geom&lt;/ogc:PropertyName>\n          &lt;gml:Polygon srsName='EPSG:25832'>\n              &lt;gml:exterior>\n                  &lt;gml:LinearRing>\n                      &lt;gml:posList>\n                           680504.3137212421 5639437.573\n                           680498.5086607657 5639496.512768128\n                           [...]\n                           680504.3137212421 5639437.573\n                       &lt;/gml:posList>\n                   &lt;/gml:LinearRing>\n               &lt;/gml:exterior>\n           &lt;/gml:Polygon>\n       &lt;/ogc:Intersects>\n   &lt;/ogc:Filter></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>geom</span> : Array<div class='sub-desc'><p>Coordinates array</p>\n</div></li><li><span class='pre'>proj</span> : String<div class='sub-desc'><p>Projection string (e.g. EPSG:25832)</p>\n</div></li><li><span class='pre'>geomName</span> : String<div class='sub-desc'><p>Name of geometry column (e.g. geom)</p>\n</div></li><li><span class='pre'>geomType</span> : String<div class='sub-desc'><p>The geometry type</p>\n</div></li><li><span class='pre'>spatialOperator</span> : String<div class='sub-desc'><p>The spatial operator</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The spatial filter</p>\n</div></li></ul></div></div></div><div id='static-method-filterValuesToLogicalFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Filter'>BasiGX.util.Filter</span><br/><a href='source/Filter.html#BasiGX-util-Filter-static-method-filterValuesToLogicalFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Filter-static-method-filterValuesToLogicalFilter' class='name expandable'>filterValuesToLogicalFilter</a>( <span class='pre'>filterValuesArray, logicalOp</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>This method will be used to create more complex nested filter\nincluding logical operators AND and OR. ...</div><div class='long'><p>This method will be used to create more complex nested filter\nincluding logical operators AND and OR.</p>\n\n<p><strong>Note:</strong> Multiple nesting is not supported yet.</p>\n\n<p>Output after marshalling via Jsonix could be e.g. as follows:</p>\n\n<pre><code>&lt;ogc:Filter xmlns:ogc='http://www.opengis.net/ogc'\n            xmlns:gml='http://www.opengis.net/gml'\n            xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'\n            xmlns:xlink='http://www.w3.org/1999/xlink'&gt;\n    &lt;ogc:Or&gt;\n        &lt;ogc:PropertyIsLike wildCard='*'\n             singleChar='%' escape='!'&gt;\n            &lt;ogc:PropertyName&gt;neid&lt;/ogc:PropertyName&gt;\n            &lt;ogc:Literal&gt;02VD2&lt;/ogc:Literal&gt;\n        &lt;/ogc:PropertyIsLike&gt;\n        &lt;ogc:PropertyIsGreaterThanOrEqualTo&gt;\n            &lt;ogc:PropertyName&gt;cellid&lt;/ogc:PropertyName&gt;\n            &lt;ogc:Literal&gt;0&lt;/ogc:Literal&gt;\n        &lt;/ogc:PropertyIsGreaterThanOrEqualTo&gt;\n    &lt;/ogc:Or&gt;\n&lt;/ogc:Filter&gt;\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterValuesArray</span> : Array<div class='sub-desc'><p>An array of filter values coming\n    from our form for defining them.</p>\n</div></li><li><span class='pre'>logicalOp</span> : String<div class='sub-desc'><p>A string defining the logical operation\n    used for the combination. Either <code>'Or'</code> or <code>'And'</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A logically combining object with the passed filters\n    that is ready to be serialized to a string by Jsonix.</p>\n</div></li></ul></div></div></div><div id='static-method-filterValuesToSimpleFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Filter'>BasiGX.util.Filter</span><br/><a href='source/Filter.html#BasiGX-util-Filter-static-method-filterValuesToSimpleFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Filter-static-method-filterValuesToSimpleFilter' class='name expandable'>filterValuesToSimpleFilter</a>( <span class='pre'>filterValues</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>This method will be used to create simple filter without logical\noperators and nesting. ...</div><div class='long'><p>This method will be used to create simple filter without logical\noperators and nesting.</p>\n\n<p>Output after marshalling via Jsonix could be e.g. as follows:</p>\n\n<pre><code>&lt;ogc:Filter xmlns:ogc='http://www.opengis.net/ogc'\n            xmlns:gml='http://www.opengis.net/gml'\n            xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'\n            xmlns:xlink='http://www.w3.org/1999/xlink'&gt;\n    &lt;ogc:PropertyIsLike wildCard='*' singleChar='%' escape='!'&gt;\n        &lt;ogc:PropertyName&gt;neid&lt;/ogc:PropertyName&gt;\n        &lt;ogc:Literal&gt;01VD2&lt;/ogc:Literal&gt;\n    &lt;/ogc:PropertyIsLike&gt;\n&lt;/ogc:Filter&gt;\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterValues</span> : Object<div class='sub-desc'><p>A representation of filter values coming\n    from our form for defining them.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object representing a simple OGC filter 1.0.0;\n    ready to be stringified using Jsonix.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});