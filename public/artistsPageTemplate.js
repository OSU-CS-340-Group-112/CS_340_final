(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['artistsPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"artistID") || (depth0 != null ? lookupProperty(depth0,"artistID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artistID","hash":{},"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":28,"column":32}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"primaryArtist") || (depth0 != null ? lookupProperty(depth0,"primaryArtist") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryArtist","hash":{},"data":data,"loc":{"start":{"line":29,"column":20},"end":{"line":29,"column":37}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"recordLabel") || (depth0 != null ? lookupProperty(depth0,"recordLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recordLabel","hash":{},"data":data,"loc":{"start":{"line":30,"column":20},"end":{"line":30,"column":35}}}) : helper)))
    + "</td>\n                <td><button onclick=\"deleteArtist("
    + alias4(((helper = (helper = lookupProperty(helpers,"artistID") || (depth0 != null ? lookupProperty(depth0,"artistID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artistID","hash":{},"data":data,"loc":{"start":{"line":31,"column":50},"end":{"line":31,"column":62}}}) : helper)))
    + ")\">Delete</button></td>\n            </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\"deleteartist.js\"></script>\n<div class=\"container\">\n    <center>\n    <div id=\"landing-pg\">\n    <h1>Artists</h1>\n    <h3>This page allows access to the Artists database entity.</h3>\n    </center>\n</div>\n\n<!--\n<div class=\"form-group\">\n    <center>\n    <label for=\"exampleArtist\"> <h4>Add a new Artist</h4></label>\n    <input type=\"name\" class=\"form-control\" id=\"exampleArtist\" placeholder=\"Enter artist\">\n    <button class=\"btn btn-dark\">Add</button>\n    </center>\n</div>\n-->\n    <table>\n        <thead>\n            <th>ArtistID</th>\n            <th>Artist Name</th>\n            <th>Record Label</th>\n        </thead>\n        <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"artist") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":33,"column":21}}})) != null ? stack1 : "")
    + "        </tbody>\n    </table>\n\n    <form id=\"addperson\" action=\"/artists\" method=\"post\">\n    Artist Name: <input type=\"text\" name=\"primaryArtist\"><br>\n    Record Label: <input type=\"text\" name=\"recordLabel\"><br>\n    <input type=\"submit\" value=\"Submit\">\n    </form>\n";
},"useData":true});
})();