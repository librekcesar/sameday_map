var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_alto_volumen_1 = new ol.format.GeoJSON();
var features_alto_volumen_1 = format_alto_volumen_1.readFeatures(json_alto_volumen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alto_volumen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alto_volumen_1.addFeatures(features_alto_volumen_1);
var lyr_alto_volumen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alto_volumen_1, 
                style: style_alto_volumen_1,
                interactive: true,
    title: 'alto_volumen<br />\
    <img src="styles/legend/alto_volumen_1_0.png" /> MX1<br />\
    <img src="styles/legend/alto_volumen_1_1.png" /> MX2<br />\
    <img src="styles/legend/alto_volumen_1_2.png" /> MX4<br />\
    <img src="styles/legend/alto_volumen_1_3.png" /> SPMX1<br />\
    <img src="styles/legend/alto_volumen_1_4.png" /> SPMX4<br />\
    <img src="styles/legend/alto_volumen_1_5.png" /> <br />'
        });
var format_stations_2 = new ol.format.GeoJSON();
var features_stations_2 = format_stations_2.readFeatures(json_stations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_2.addFeatures(features_stations_2);
var lyr_stations_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stations_2, 
                style: style_stations_2,
                interactive: false,
                title: '<img src="styles/legend/stations_2.png" /> stations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_alto_volumen_1.setVisible(true);lyr_stations_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_alto_volumen_1,lyr_stations_2];
lyr_alto_volumen_1.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'station_name': 'station_name', 'numero_guias': 'numero_guias', });
lyr_stations_2.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', 'reg_service': 'reg_service', 'numero_guias': 'numero_guias', });
lyr_alto_volumen_1.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', 'numero_guias': 'Range', });
lyr_stations_2.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', 'reg_service': 'TextEdit', 'numero_guias': 'Range', });
lyr_alto_volumen_1.set('fieldLabels', {'locality': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'station_name': 'header label', 'numero_guias': 'header label', });
lyr_stations_2.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', 'reg_service': 'no label', 'numero_guias': 'no label', });
lyr_stations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});