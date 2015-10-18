var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
var jsonsite= "https://webhose.io/search?token=e0defa61-1d57-4397-8b4a-1c51cd60856e&format=json&q=Westwood%20(Westwood%20OR%20UCLA%20OR%20Los%20Angeles)%20thread.section_title%3A(News)&site_type=news";

// var getNews ={

//         handlerData:function(resJSON){

//             var templateSource   = $("#entry-template").html(),

//                 template = Handlebars.compile(templateSource),

//                 newsHTML = template(resJSON);

//            $('#news').html(newsHTML);
//             console.log($("#entry-template"))
//         },
//         loadStudentData : function(){

//             $.ajax({
//                 url:jsonsite,
//                 method:'get',
//                 success:this.handlerData

//             })
//         }
// };

// $(document).ready(function(){

//     getNews.loadStudentData();
// });


$("#news").html(template({
    title: 'Dead Poets Society rocks on!',
    author: 'Daily Bruin Online Feed'
}));

