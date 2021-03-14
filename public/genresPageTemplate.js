(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['genresPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"genreID") || (depth0 != null ? lookupProperty(depth0,"genreID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genreID","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":31}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"genreName") || (depth0 != null ? lookupProperty(depth0,"genreName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genreName","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":33}}}) : helper)))
    + "</td>\n                <td><button onclick=\"deleteGenre("
    + alias4(((helper = (helper = lookupProperty(helpers,"genreID") || (depth0 != null ? lookupProperty(depth0,"genreID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genreID","hash":{},"data":data,"loc":{"start":{"line":22,"column":49},"end":{"line":22,"column":60}}}) : helper)))
    + ")\">Delete</button></td>\n            </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\"deleteGenre.js\"></script>\n\n\n<div class=\"container\">\n    <center>\n    <div id=\"landing-pg\">\n    <h1>Genres</h1>\n    <h3>This page allows access to the Genres in the database.</h3>\n    </center>\n</div>\n    <table>\n        <thead>\n            <th>GenreID</th>\n            <th>Name</th>\n            <th>Album Title</th>\n        </thead>\n        <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"genre") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "")
    + "        </tbody>\n    </table>\n\n    <form id=\"addgenre\" action=\"/genres\" method=\"post\">\n    Genre Name: <input type=\"text\" name=\"genreName\"><br>\n    <input type=\"submit\" value=\"Submit\">\n    </form>\n";
},"useData":true});
})();