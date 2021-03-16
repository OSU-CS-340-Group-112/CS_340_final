(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['intersectPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <tr>\n      <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"albumTitle") || (depth0 != null ? lookupProperty(depth0,"albumTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumTitle","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":24}}}) : helper)))
    + "</td>\n      <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"genreName") || (depth0 != null ? lookupProperty(depth0,"genreName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genreName","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":23}}}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n    <center>\n      <div id=\"landing-pg\">\n      <h1>Genre Intersection Table</h1>\n      <h3>This page allows access to the Genre Intersection table database entity.</h3>\n    </center>\n</div>\n\n<table>\n  <thead>\n    <th>Album</th>\n    <th>Genre</th>\n  </thead>\n\n  <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"albums_with_genres") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "  </tbody>\n</table>\n";
},"useData":true});
})();