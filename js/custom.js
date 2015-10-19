var source = $("#entry-template").html();
var template = Handlebars.compile(source);
var newsfeed = "http://crossorigin.me/http://dailybruin.com/feed";

var cleanCDATA = function (string) {
    // use it to get rid of CDATA enclosed strings.
    // An example of use is with author in returndata variable below
    // commented out because it's too damn unreliable.
    return string.slice(9,-3)
}

$(document).ready(function() {

    $.get(newsfeed, 
          function(response) { // a callback when the GET request is successful
        
        // get source template
        var templateSource = $("#entry-template").html();
        template = Handlebars.compile(templateSource);

        // parse the data into the format we want
        var data = $(response).find("item")[0]
        
        var returndata = {
            
            url: $(data).find("link").text(),
            
            title: $(data).find("title").text(),
            
            //author: $(cleanCDATA(data.getElementsByTagName("description")[0].innerHTML)).attr("alt")
            
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