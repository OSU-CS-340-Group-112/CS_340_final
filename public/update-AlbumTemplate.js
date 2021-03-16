(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['update-album'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"artistID") || (depth0 != null ? lookupProperty(depth0,"artistID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artistID","hash":{},"data":data,"loc":{"start":{"line":25,"column":23},"end":{"line":25,"column":35}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"primaryArtist") || (depth0 != null ? lookupProperty(depth0,"primaryArtist") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryArtist","hash":{},"data":data,"loc":{"start":{"line":25,"column":37},"end":{"line":25,"column":54}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script>\n    function updateAlbum(albumID){\n        $.ajax({\n            url: '/albums/' + albumID,\n            type: 'PUT',\n            data: $('#update-album').serialize(),\n            success: function(result){\n                window.location.replace(\"./\");\n            }\n        })\n    };\n\n    function selectArtist(artistID){\n        $(\"#artist-selector\").val(artistID);\n    }\n\n</script>\n\n<h1>Update "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"originalArtist") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"albumTitle") : stack1), depth0))
    + ":</h1>\n<form id=\"update-album\" action=\"/album\" method=\"post\">\n    original Artist: <input type=\"text\" name=\"originalArtist\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"originalArtist") : stack1), depth0))
    + "\"><br>\n    Album Title: <input type=\"text\" name=\"albumTitle\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"albumTitle") : stack1), depth0))
    + "\"><br>\n    original Artist: <select name=\"originalArtist\" id=\"artist-selector\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"artists") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":26,"column":17}}})) != null ? stack1 : "")
    + "    </select>\n</form>\n<button id=\"update\"onclick=\"selectArtist("
    + alias2(((helper = (helper = lookupProperty(helpers,"artistID") || (depth0 != null ? lookupProperty(depth0,"artistID") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"artistID","hash":{},"data":data,"loc":{"start":{"line":29,"column":41},"end":{"line":29,"column":53}}}) : helper)))
    + ") updateAlbum("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"albumID") : stack1), depth0))
    + ")\">Update</button>";
},"useData":true});
})();