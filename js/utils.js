
var items = [
    {name: "Слон", weight: 1000, speed: 10},
    {name: "Гепард", weight: 90, speed: 120},
    {name: "Черепаха", weight: 0.5, speed: 1}
];

var result = [];
var object_name = "Живая тварь";
var items_properties = {};
var sorter = null;

items_properties["weight"] = {title : "Вес", default : true, asc : function(a,b) {return a.weight - b.weight}, desc : function(a,b) {return b.weight - a.weight}};
items_properties["speed"] = {title : "Скорость", default : false, asc : function(a,b) {return a.speed - b.speed}, desc : function(a,b) {return b.speed - a.speed}};

function selectSort(column) {
    if (items_properties[column].sort == "none") {
        items_properties[column].sort = "asc";
        sorter = items_properties[column].asc;
    }  else if(items_properties[column].sort == "asc") {
        items_properties[column].sort = "desc";
        sorter = items_properties[column].desc;
    }  else {
        items_properties[column].sort = "none";
        sorter = null;
    }
}

function sortItems() {
    result = items.slice();
    if (sorter != null) {
        result.sort(sorter);
    }
}
