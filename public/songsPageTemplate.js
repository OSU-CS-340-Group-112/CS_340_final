(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songsPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"songID") || (depth0 != null ? lookupProperty(depth0,"songID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"songID","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":30}}}) : helper)))
    + "</td> \n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"songTitle") || (depth0 != null ? lookupProperty(depth0,"songTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"songTitle","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":33}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"alID") || (depth0 != null ? lookupProperty(depth0,"alID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alID","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":28}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"runTime") || (depth0 != null ? lookupProperty(depth0,"runTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"runTime","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":31}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"writingCredit") || (depth0 != null ? lookupProperty(depth0,"writingCredit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"writingCredit","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":37}}}) : helper)))
    + "</td>\n                <td><button onclick=\"deleteSong("
    + alias4(((helper = (helper = lookupProperty(helpers,"songID") || (depth0 != null ? lookupProperty(depth0,"songID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"songID","hash":{},"data":data,"loc":{"start":{"line":27,"column":48},"end":{"line":27,"column":58}}}) : helper)))
    + ")\">Delete</button></td>\n                <td><a href=\"/songs/"
    + alias4(((helper = (helper = lookupProperty(helpers,"songID") || (depth0 != null ? lookupProperty(depth0,"songID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"songID","hash":{},"data":data,"loc":{"start":{"line":28,"column":36},"end":{"line":28,"column":46}}}) : helper)))
    + "\">Update</a></td>\n            </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\"deletesong.js\"></script>\n\n\n<div class=\"container\">\n    <center>\n    <div id=\"landing-pg\">\n    <h1>Songs</h1>\n    <h3>This page allows access to the Songs in the database.</h3>\n    </center>\n</div>\n    <table>\n        <thead>\n            <th>SongID</th>\n            <th>SongTitle</th>\n            <th>alID</th>\n            <th>Runtime</th>\n            <th>Writing Credit</th>\n        </thead>\n        <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"song") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":30,"column":21}}})) != null ? stack1 : "")
    + "        </tbody>\n    </table>\n\n    <form id=\"addsong\" action=\"/songs\" method=\"post\">\n    Song Title: <input type=\"text\" name=\"songTitle\"><br>\n    Run Time (in seconds): <input type=\"number\" name=\"runTime\"><br>\n    Writing Credit: <input type=\"text\" name=\"writingCredit\"><br>\n    <input type=\"submit\" value=\"Submit\">\n    </form>";
},"useData":true});
})();