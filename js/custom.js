var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

$("#news").html(template({
    news: 'Dead Poets Society rocks on!',
    source: 'Daily Bruin Online Feed'
}));
