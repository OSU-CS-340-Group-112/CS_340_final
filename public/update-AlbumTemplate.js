(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['update-album'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script>\n    function updateAlbum(albumID){\n    $.ajax({\n        url: '/albums/' + albumID,\n        type: 'PUT',\n        data: $('#update-album').serialize(),\n        success: function(result){\n            window.location.replace(\"./\");\n        }\n    })\n};\n\n</script>\n\n<h1>Update "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"featuredArtist") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"albumTitle") : stack1), depth0))
    + ":</h1>\n<form id=\"update-album\" action=\"/album\" method=\"post\">\n    Featured Artist: <input type=\"text\" name=\"featuredArtist\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"featuredArtist") : stack1), depth0))
    + "\"><br>\n    Album Title: <input type=\"text\" name=\"albumTitle\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"albumTitle") : stack1), depth0))
    + "\"><br>\n</form>\n<button id=\"update\"onclick=\"updateAlbum("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"album") : depth0)) != null ? lookupProperty(stack1,"albumID") : stack1), depth0))
    + ")\">Update</button>";
},"useData":true});
})();