(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['update-artist'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script>\n    function updateArtist(artistID){\n    $.ajax({\n        url: '/artists/' + artistID,\n        type: 'PUT',\n        data: $('#update-artist').serialize(),\n        success: function(result){\n            window.location.replace(\"./\");\n        }\n    })\n};\n</script>\n\n<h1>Update "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"artist") : depth0)) != null ? lookupProperty(stack1,"primaryArtist") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"artist") : depth0)) != null ? lookupProperty(stack1,"recordLabel") : stack1), depth0))
    + ":</h1>\n<form id=\"update-artist\" action=\"/artists\" method=\"post\">\n    Artist Name: <input type=\"text\" name=\"primaryArtist\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"artist") : depth0)) != null ? lookupProperty(stack1,"primaryArtist") : stack1), depth0))
    + "\"><br>\n    Record Label: <input type=\"text\" name=\"recordLabel\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"artist") : depth0)) != null ? lookupProperty(stack1,"recordLabel") : stack1), depth0))
    + "\"><br>\n</form>\n<button id=\"update\"onclick=\"updateArtist("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"artist") : depth0)) != null ? lookupProperty(stack1,"artistID") : stack1), depth0))
    + ")\">Update</button>\n";
},"useData":true});
})();