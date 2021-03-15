(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['update-song'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script>\n    function updateSong(songID){\n    $.ajax({\n        url: '/songs/' + songID,\n        type: 'PUT',\n        data: $('#update-song').serialize(),\n        success: function(result){\n            window.location.replace(\"./\");\n        }\n    })\n};\n\n</script>\n\n<h1>Update "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"song") : depth0)) != null ? lookupProperty(stack1,"songTitle") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"song") : depth0)) != null ? lookupProperty(stack1,"runTime") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"song") : depth0)) != null ? lookupProperty(stack1,"writingCredit") : stack1), depth0))
    + ":</h1>\n<form id=\"update-song\" action=\"/songs\" method=\"post\">\n    Song Title: <input type=\"text\" name=\"songTitle\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"song") : depth0)) != null ? lookupProperty(stack1,"songTitle") : stack1), depth0))
    + "\"><br>\n    Run Time: <input type=\"number\" name=\"runTime\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"song") : depth0)) != null ? lookupProperty(stack1,"runTime") : stack1), depth0))
    + "\"><br>\n    Writing Credit: <input type=\"text\" name=\"writingCredit\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"song") : depth0)) != null ? lookupProperty(stack1,"writingCredit") : stack1), depth0))
    + "\"><br>\n</form>\n<button id=\"update\"onclick=\"updateSong("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"song") : depth0)) != null ? lookupProperty(stack1,"songID") : stack1), depth0))
    + ")\">Update</button>";
},"useData":true});
})();