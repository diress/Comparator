/**
 * Created by bvasilenko on 15.07.2016.
 */

$(document).ready(function(){

    var properties = '';
    var header = '<tr><th>'+object_name+'</th>';
    for(e in items_properties) {
        //$('#comptable').last().append("<tr><td>"+items_properties[e].title+"</td></tr>")
        if (items_properties[e].default) {
            var check = 'checked';
            header = header + '<th>' + items_properties[e].title + '</th>';
        } else {
            var check = '';
        }
        properties = properties + '<input type="checkbox" name="checkbox_' + e + ' value="checkbox" ' +  check + '>' + items_properties[e].title;
    }
    header = header + '</tr>';
    $(this).find("th:first").html(properties);
    $('#comptable').last().append(header)

    for (i = 0; i < items.length; i++) {
        rowdata = "<tr><td>" + items[i].name + "</td>";

        for(e in items_properties) {
            if (items_properties[e].default) {
                rowdata = rowdata + "<td>" + items[i][e] + "</td>";
            }
        }

        rowdata = rowdata + "</tr>"
        $('#comptable').last().append(rowdata)
    }
});