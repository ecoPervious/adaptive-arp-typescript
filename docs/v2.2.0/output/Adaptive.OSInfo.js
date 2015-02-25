Ext.data.JsonP.Adaptive_OSInfo({"tagname":"class","name":"Adaptive.OSInfo","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-OSInfo"}],"extends":"Adaptive.APIBean","author":[{"tagname":"author","name":"Francisco Javier Martin Bueno","email":null}],"since":"v2.0","members":[{"name":"name","tagname":"property","owner":"Adaptive.OSInfo","id":"property-name","meta":{}},{"name":"vendor","tagname":"property","owner":"Adaptive.OSInfo","id":"property-vendor","meta":{}},{"name":"version","tagname":"property","owner":"Adaptive.OSInfo","id":"property-version","meta":{}},{"name":"constructor","tagname":"method","owner":"Adaptive.OSInfo","id":"method-constructor","meta":{}},{"name":"getName","tagname":"method","owner":"Adaptive.OSInfo","id":"method-getName","meta":{}},{"name":"getVendor","tagname":"method","owner":"Adaptive.OSInfo","id":"method-getVendor","meta":{}},{"name":"getVersion","tagname":"method","owner":"Adaptive.OSInfo","id":"method-getVersion","meta":{}},{"name":"setName","tagname":"method","owner":"Adaptive.OSInfo","id":"method-setName","meta":{}},{"name":"setVendor","tagname":"method","owner":"Adaptive.OSInfo","id":"method-setVendor","meta":{}},{"name":"setVersion","tagname":"method","owner":"Adaptive.OSInfo","id":"method-setVersion","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.OSInfo","id":"static-method-toObject","meta":{"static":true}},{"name":"toObjectArray","tagname":"method","owner":"Adaptive.OSInfo","id":"static-method-toObjectArray","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.OSInfo","short_doc":"Represents the basic information about the operating system. ...","component":false,"superclasses":["Adaptive.APIBean"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.APIBean' rel='Adaptive.APIBean' class='docClass'>Adaptive.APIBean</a><div class='subclass '><strong>Adaptive.OSInfo</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-OSInfo' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Represents the basic information about the operating system.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>v2.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-name' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-property-name' class='name expandable'>name</a> : <a href=\"#!/api/Adaptive.IOSType\" rel=\"Adaptive.IOSType\" class=\"docClass\">Adaptive.IOSType</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the operating system. ...</div><div class='long'><p>The name of the operating system. The 'nameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'name'.</p>\n</div></div></div><div id='property-vendor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-property-vendor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-property-vendor' class='name expandable'>vendor</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>The vendor of the operating system. ...</div><div class='long'><p>The vendor of the operating system. The 'vendorProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'vendor'.</p>\n</div></div></div><div id='property-version' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-property-version' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-property-version' class='name expandable'>version</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>The version/identifier of the operating system. ...</div><div class='long'><p>The version/identifier of the operating system. The 'versionProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'version'.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.OSInfo-method-constructor' class='name expandable'>Adaptive.OSInfo</a>( <span class='pre'>name, version, vendor</span> ) : <a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor used by implementation to set the OS information. ...</div><div class='long'><p>Constructor used by implementation to set the OS information.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Adaptive.IOSType\" rel=\"Adaptive.IOSType\" class=\"docClass\">Adaptive.IOSType</a><div class='sub-desc'><p>of the OS.</p>\n</div></li><li><span class='pre'>version</span> : string<div class='sub-desc'><p>of the OS.</p>\n</div></li><li><span class='pre'>vendor</span> : string<div class='sub-desc'><p>of the OS.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.APIBean-method-constructor\" rel=\"Adaptive.APIBean-method-constructor\" class=\"docClass\">Adaptive.APIBean.constructor</a></p></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IOSType\" rel=\"Adaptive.IOSType\" class=\"docClass\">Adaptive.IOSType</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the name of the operating system. ...</div><div class='long'><p>Returns the name of the operating system.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IOSType\" rel=\"Adaptive.IOSType\" class=\"docClass\">Adaptive.IOSType</a></span><div class='sub-desc'><p>OS name.</p>\n</div></li></ul></div></div></div><div id='method-getVendor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-method-getVendor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-method-getVendor' class='name expandable'>getVendor</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the vendor of the operating system. ...</div><div class='long'><p>Returns the vendor of the operating system.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>OS vendor.</p>\n</div></li></ul></div></div></div><div id='method-getVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-method-getVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-method-getVersion' class='name expandable'>getVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the version of the operating system. ...</div><div class='long'><p>Returns the version of the operating system.</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>OS version.</p>\n</div></li></ul></div></div></div><div id='method-setName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-method-setName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-method-setName' class='name expandable'>setName</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets The name of the operating system. ...</div><div class='long'><p>Sets The name of the operating system.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Adaptive.IOSType\" rel=\"Adaptive.IOSType\" class=\"docClass\">Adaptive.IOSType</a><div class='sub-desc'><p>The name of the operating system.</p>\n</div></li></ul></div></div></div><div id='method-setVendor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-method-setVendor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-method-setVendor' class='name expandable'>setVendor</a>( <span class='pre'>vendor</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets The vendor of the operating system. ...</div><div class='long'><p>Sets The vendor of the operating system.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>vendor</span> : string<div class='sub-desc'><p>The vendor of the operating system.</p>\n</div></li></ul></div></div></div><div id='method-setVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-method-setVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-method-setVersion' class='name expandable'>setVersion</a>( <span class='pre'>version</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets The version/identifier of the operating system. ...</div><div class='long'><p>Sets The version/identifier of the operating system.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>version</span> : string<div class='sub-desc'><p>The version/identifier of the operating system.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div><div id='static-method-toObjectArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.OSInfo'>Adaptive.OSInfo</span><br/><a href='source/Adaptive.html#Adaptive-OSInfo-static-method-toObjectArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.OSInfo-static-method-toObjectArray' class='name expandable'>toObjectArray</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a>[]<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object array to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object array to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a>[].</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.OSInfo\" rel=\"Adaptive.OSInfo\" class=\"docClass\">Adaptive.OSInfo</a>[]</span><div class='sub-desc'><p>Wrapped object array instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});