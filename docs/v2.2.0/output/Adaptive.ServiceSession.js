Ext.data.JsonP.Adaptive_ServiceSession({"tagname":"class","name":"Adaptive.ServiceSession","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-ServiceSession"}],"extends":"Adaptive.APIBean","author":[{"tagname":"author","name":"Ferran Vila Conesa","email":null}],"since":"v2.0","members":[{"name":"attributes","tagname":"property","owner":"Adaptive.ServiceSession","id":"property-attributes","meta":{}},{"name":"cookies","tagname":"property","owner":"Adaptive.ServiceSession","id":"property-cookies","meta":{}},{"name":"constructor","tagname":"method","owner":"Adaptive.ServiceSession","id":"method-constructor","meta":{}},{"name":"getAttributes","tagname":"method","owner":"Adaptive.ServiceSession","id":"method-getAttributes","meta":{}},{"name":"getCookies","tagname":"method","owner":"Adaptive.ServiceSession","id":"method-getCookies","meta":{}},{"name":"setAttributes","tagname":"method","owner":"Adaptive.ServiceSession","id":"method-setAttributes","meta":{}},{"name":"setCookies","tagname":"method","owner":"Adaptive.ServiceSession","id":"method-setCookies","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.ServiceSession","id":"static-method-toObject","meta":{"static":true}},{"name":"toObjectArray","tagname":"method","owner":"Adaptive.ServiceSession","id":"static-method-toObjectArray","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.ServiceSession","component":false,"superclasses":["Adaptive.APIBean"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.APIBean' rel='Adaptive.APIBean' class='docClass'>Adaptive.APIBean</a><div class='subclass '><strong>Adaptive.ServiceSession</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-ServiceSession' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Represents a session object for HTTP request and responses</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>v2.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attributes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-property-attributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-property-attributes' class='name expandable'>attributes</a> : <a href=\"#!/api/Adaptive.ServiceSessionAttribute\" rel=\"Adaptive.ServiceSessionAttribute\" class=\"docClass\">Adaptive.ServiceSessionAttribute</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>The attributes of the request or response. ...</div><div class='long'><p>The attributes of the request or response. The 'attributesProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'attributes'.</p>\n</div></div></div><div id='property-cookies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-property-cookies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-property-cookies' class='name expandable'>cookies</a> : <a href=\"#!/api/Adaptive.ServiceSessionCookie\" rel=\"Adaptive.ServiceSessionCookie\" class=\"docClass\">Adaptive.ServiceSessionCookie</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>The cookies of the request or response. ...</div><div class='long'><p>The cookies of the request or response. The 'cookiesProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'cookies'.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.ServiceSession-method-constructor' class='name expandable'>Adaptive.ServiceSession</a>( <span class='pre'>cookies, attributes</span> ) : <a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with fields. ...</div><div class='long'><p>Constructor with fields.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cookies</span> : <a href=\"#!/api/Adaptive.ServiceSessionCookie\" rel=\"Adaptive.ServiceSessionCookie\" class=\"docClass\">Adaptive.ServiceSessionCookie</a>[]<div class='sub-desc'><p>The cookies of the request or response.</p>\n</div></li><li><span class='pre'>attributes</span> : <a href=\"#!/api/Adaptive.ServiceSessionAttribute\" rel=\"Adaptive.ServiceSessionAttribute\" class=\"docClass\">Adaptive.ServiceSessionAttribute</a>[]<div class='sub-desc'><p>Attributes of the request or response.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.APIBean-method-constructor\" rel=\"Adaptive.APIBean-method-constructor\" class=\"docClass\">Adaptive.APIBean.constructor</a></p></div></div></div><div id='method-getAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-method-getAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-method-getAttributes' class='name expandable'>getAttributes</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ServiceSessionAttribute\" rel=\"Adaptive.ServiceSessionAttribute\" class=\"docClass\">Adaptive.ServiceSessionAttribute</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the attributes of the request or response. ...</div><div class='long'><p>Gets the attributes of the request or response.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceSessionAttribute\" rel=\"Adaptive.ServiceSessionAttribute\" class=\"docClass\">Adaptive.ServiceSessionAttribute</a>[]</span><div class='sub-desc'><p>Attributes of the request or response.</p>\n</div></li></ul></div></div></div><div id='method-getCookies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-method-getCookies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-method-getCookies' class='name expandable'>getCookies</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ServiceSessionCookie\" rel=\"Adaptive.ServiceSessionCookie\" class=\"docClass\">Adaptive.ServiceSessionCookie</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the cookies of the request or response. ...</div><div class='long'><p>Returns the cookies of the request or response.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceSessionCookie\" rel=\"Adaptive.ServiceSessionCookie\" class=\"docClass\">Adaptive.ServiceSessionCookie</a>[]</span><div class='sub-desc'><p>The cookies of the request or response.</p>\n</div></li></ul></div></div></div><div id='method-setAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-method-setAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-method-setAttributes' class='name expandable'>setAttributes</a>( <span class='pre'>attributes</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the attributes for the request or response. ...</div><div class='long'><p>Sets the attributes for the request or response.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : <a href=\"#!/api/Adaptive.ServiceSessionAttribute\" rel=\"Adaptive.ServiceSessionAttribute\" class=\"docClass\">Adaptive.ServiceSessionAttribute</a>[]<div class='sub-desc'><p>Attributes of the request or response.</p>\n</div></li></ul></div></div></div><div id='method-setCookies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-method-setCookies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-method-setCookies' class='name expandable'>setCookies</a>( <span class='pre'>cookies</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the cookies of the request or response. ...</div><div class='long'><p>Sets the cookies of the request or response.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cookies</span> : <a href=\"#!/api/Adaptive.ServiceSessionCookie\" rel=\"Adaptive.ServiceSessionCookie\" class=\"docClass\">Adaptive.ServiceSessionCookie</a>[]<div class='sub-desc'><p>The cookies of the request or response.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div><div id='static-method-toObjectArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceSession'>Adaptive.ServiceSession</span><br/><a href='source/Adaptive.html#Adaptive-ServiceSession-static-method-toObjectArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceSession-static-method-toObjectArray' class='name expandable'>toObjectArray</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a>[]<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object array to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object array to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a>[].</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a>[]</span><div class='sub-desc'><p>Wrapped object array instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});