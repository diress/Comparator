/**
 * Created by bvasilenko on 15.07.2016.
 */
function changeProperties(checkbox) {
    items_properties[checkbox.name].default = checkbox.checked;
    updateTable();
}

function changeSort(header) {
    selectSort(header.id);
    updateTable();
}

function updateTable(doc) {
    sortItems();

    $('#comptable').remove();

    $('#table_place').append('<table id="comptable"><caption>Сравнение свойств объектов</caption><tr><th colspan="2"></th></tr></table>');
    var properties = '';
    var show_count = 1;
    var header = '<tr><th>'+object_name+'</th>';
    for(e in items_properties) {
        if (items_properties[e].default) {
            var check = 'checked';
            header = header + '<th onClick=changeSort(this) id="' + e + '">' + items_properties[e].title + '</th>';
            show_count++;
        } else {
            var check = '';
        }
        properties = properties + '<input type="checkbox" name="' + e +
            '" value="checkbox" ' +  check + ' onClick="changeProperties(this)">' + items_properties[e].title;
    }
    header = header + '</tr>';
    properties = '<th colspan="' + show_count + '">' + properties + '</th>'
    $('#comptable').find("tr:first").html(properties);
    $('#comptable').last().append(header)

    for (i = 0; i < result.length; i++) {
        rowdata = "<tr><td>" + result[i].name + "</td>";

        for(e in items_properties) {
            if (items_properties[e].default) {
                rowdata = rowdata + "<td>" + result[i][e] + "</td>";
            }
        }

        rowdata = rowdata + "</tr>"
        $('#comptable').last().append(rowdata)
    }

}

$(document).ready(function(){

    updateTable(this);
});