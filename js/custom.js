var XMLMapping = require('xml-mapping');
var source = $("#entry-template").html();
var template = Handlebars.compile(source);
var newsfeed = "http://crossorigin.me/http://dailybruin.com/feed";

$(document).ready(function() {

    $.get(newsfeed,
        function(response) { // a callback when the GET request is successful
        
            var serialized_XML = new XMLSerializer().serializeToString(response);
            var json = XMLMapping.load(serialized_XML);
            
            console.log(json); // for your benefit! You can see what the object looks like in the console.
    
            // get source template
            var templateSource = $("#entry-template").html();
            template = Handlebars.compile(templateSource);


            //parse the data into the format we want
            var data = json["rss"]["channel"]["item"];

            console.log(data);

            var returndata = {

                url: data["link"]["$t"],

                title: data["title"]["$t"],
                
                author: data["dc$creator"]["$cd"],
                
                content: data["description"]["$cd"],

                data: data


            };

            //update the page with the formatted data
            // var newsHTML = template(returndata);
            var newsHTML = template(returndata);
            $("#news").html(newsHTML);

        });

    /* 
    For some reason, using the Object format {url: jsonsite, success: ...} triggers an XMLHTTPRequest error.
    Must be a bug in jQuery. Weird.
    */


});