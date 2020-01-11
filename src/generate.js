import firstnames from "../database/firstnames.js"
import lastnames from "../database/lastnames.js"
$(document).ready(function(){
    $("#generate").click(function(){
        var name = "";
        var len = firstnames.firstnames.length;
        var rndIndex = Math.floor(Math.random() * len);
        name += firstnames.firstnames[rndIndex] + " ";

        len = lastnames.lastnames.length;
        rndIndex = Math.floor(Math.random() * len);
        name += lastnames.lastnames[rndIndex];
        $("#generated-name").text(name);
    }) 
})


