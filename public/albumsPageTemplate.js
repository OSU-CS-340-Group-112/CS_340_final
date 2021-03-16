(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['albumsPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"artID") || (depth0 != null ? lookupProperty(depth0,"artID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artID","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":29}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"albumTitle") || (depth0 != null ? lookupProperty(depth0,"albumTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumTitle","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":34}}}) : helper)))
    + "</td>\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"albumID") || (depth0 != null ? lookupProperty(depth0,"albumID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumID","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":31}}}) : helper)))
    + "</td>\n                <td><button onclick=\"deleteAlbum("
    + alias4(((helper = (helper = lookupProperty(helpers,"albumID") || (depth0 != null ? lookupProperty(depth0,"albumID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumID","hash":{},"data":data,"loc":{"start":{"line":23,"column":49},"end":{"line":23,"column":60}}}) : helper)))
    + ")\">Delete</button></td>\n                <td><a href=\"/albums/"
    + alias4(((helper = (helper = lookupProperty(helpers,"albumID") || (depth0 != null ? lookupProperty(depth0,"albumID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumID","hash":{},"data":data,"loc":{"start":{"line":24,"column":37},"end":{"line":24,"column":48}}}) : helper)))
    + "\">Update</a></td>\n            </tr>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"artistID") || (depth0 != null ? lookupProperty(depth0,"artistID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artistID","hash":{},"data":data,"loc":{"start":{"line":34,"column":23},"end":{"line":34,"column":35}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"primaryArtist") || (depth0 != null ? lookupProperty(depth0,"primaryArtist") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryArtist","hash":{},"data":data,"loc":{"start":{"line":34,"column":37},"end":{"line":34,"column":54}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\"deletealbum.js\"></script>\n\n\n<div class=\"container\">\n    <center>\n    <div id=\"landing-pg\">\n    <h1>Albums</h1>\n    <h3>This page allows access to the Albums in the database.</h3>\n    </center>\n</div>\n    <table>\n        <thead>\n            <th>Artist</th>\n            <th>Album Title</th>\n            <th>albumID</th>\n        </thead>\n        <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"album") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":26,"column":21}}})) != null ? stack1 : "")
    + "        </tbody>\n    </table>\n\n    <form id=\"addalbum\" action=\"/albums\" method=\"post\">\n    Album Title: <input type=\"text\" name=\"albumTitle\"><br>\n    Artist: <select name=\"artID\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"artists") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + "    </select>\n    <input type=\"submit\" value=\"Submit\">\n    </form>\n";
},"useData":true});
})();