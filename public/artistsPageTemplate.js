(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['artistsPage'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <center>\n    <div id=\"landing-pg\">\n    <h1>Artists</h1>\n    <h3>This page allows access to the Artists database entity.</h3>\n    <button class=\"btn btn-dark\">Display all Artists</button>\n    </center>\n</div>\n\n<div class=\"form-group\">\n    <center>\n    <label for=\"exampleArtist\"> <h4>Add a new Artist</h4></label>\n    <input type=\"name\" class=\"form-control\" id=\"exampleArtist\" placeholder=\"Enter artist\">\n    <button class=\"btn btn-dark\">Add</button>\n    </center>\n</div>";
},"useData":true});
})();