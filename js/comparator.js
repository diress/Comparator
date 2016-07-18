/**
 * Created by bvasilenko on 15.07.2016.
 */
function changeProperties() {
    items_properties["speed"].default = true;
    updateTable();
}

function updateTable(doc) {

    $('#comptable').remove();

    $('#table_place').append('<table id="comptable"><caption>Сравнение свойств объектов</caption><tr><th colspan="2"></th></tr></table>');
    var properties = '';
    var header = '<tr><th>'+object_name+'</th>';
    for(e in items_properties) {
        if (items_properties[e].default) {
            var check = 'checked';
            header = header + '<th>' + items_properties[e].title + '</th>';
        } else {
            var check = '';
        }
        properties = properties + '<input type="checkbox" name="checkbox_' + e +
            ' value="checkbox" ' +  check + ' onClick="changeProperties()">' + items_properties[e].title;
    }
    header = header + '</tr>';
    $(doc).find("th:first").html(properties);
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

}

$(document).ready(function(){

    updateTable(this);
});