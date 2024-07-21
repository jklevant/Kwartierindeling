var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kwartierindeling_1 = new ol.format.GeoJSON();
var features_Kwartierindeling_1 = format_Kwartierindeling_1.readFeatures(json_Kwartierindeling_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kwartierindeling_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kwartierindeling_1.addFeatures(features_Kwartierindeling_1);
var lyr_Kwartierindeling_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kwartierindeling_1, 
                style: style_Kwartierindeling_1,
                popuplayertitle: "Kwartierindeling",
                interactive: true,
    title: 'Kwartierindeling<br />\
    <img src="styles/legend/Kwartierindeling_1_0.png" /> Noachkwartier<br />\
    <img src="styles/legend/Kwartierindeling_1_1.png" /> Scheepskwartier<br />\
    <img src="styles/legend/Kwartierindeling_1_2.png" /> Regenboogkwartier<br />\
    <img src="styles/legend/Kwartierindeling_1_3.png" /> Olijftakkwartier<br />\
    <img src="styles/legend/Kwartierindeling_1_4.png" /> Duifkwartier<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kwartierindeling_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kwartierindeling_1];
lyr_Kwartierindeling_1.set('fieldAliases', {'id': 'id', 'Kwartier': 'Kwartier', 'Pastor': 'Pastor', });
lyr_Kwartierindeling_1.set('fieldImages', {'id': 'TextEdit', 'Kwartier': 'TextEdit', 'Pastor': '', });
lyr_Kwartierindeling_1.set('fieldLabels', {'id': 'hidden field', 'Kwartier': 'no label', 'Pastor': 'no label', });
lyr_Kwartierindeling_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});