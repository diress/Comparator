/**
 * Created by bvasilenko on 15.07.2016.
 */

$(document).ready(function(){


    // $('#comptable tr').each(function() {
    //     $(this).find("td:first").html("123");
    // });
    for(e in items_properties) {
        $('#comptable').last().append("<tr><td>"+items_properties[e].title+"</td></tr>")
    }

});