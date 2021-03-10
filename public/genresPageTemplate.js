(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['genresPage'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <center>\n    <div id=\"landing-pg\">\n    <h1>Genres</h1>\n    <h3>This page allows access to the Genres database entity.</h3>\n    <button class=\"btn btn-dark\">Display all Genres</button>\n    <button class=\"btn btn-dark\">Delete a Genre</button>\n    </center>\n</div>\n\n<div class=\"form-group\">\n    <center>\n    <label for=\"exampleArtist\"> <h4>Add a new Genre</h4></label>\n    <input type=\"name\" class=\"form-control\" id=\"exampleArtist\" placeholder=\"Enter genre\">\n    <button class=\"btn btn-dark\">Add</button>\n    </center>\n</div>";
},"useData":true});
})();