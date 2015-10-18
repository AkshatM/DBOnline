var source = $("#entry-template").html();
var template = Handlebars.compile(source);
var jsonsite = "https://webhose.io/search?token=e0defa61-1d57-4397-8b4a-1c51cd60856e&format=json&q=Westwood%20(Westwood%20OR%20UCLA%20OR%20Los%20Angeles)%20thread.section_title%3A(News)&site_type=news";



$(document).ready(function() {

    $.get(jsonsite, 
          function(data) { // a callback when the GET request is successful
        
        // get source template
        var templateSource = $("#entry-template").html();
        template = Handlebars.compile(templateSource);

        // parse the data into the format we want
        var returndata = {
            title: data["posts"][0]["title"],
            author: data["posts"][0]["author"]
        };
        
        // update the page with the formatted data
        var newsHTML = template(returndata);
        $("#news").html(newsHTML);

        });
    
    /* 
    For some reason, using the Object format {url: jsonsite, success: ...} triggers an XMLHTTPRequest error.
    Must be a bug in jQuery. Weird.
    */
    

});