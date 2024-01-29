import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { geojsonData } from './finalsetted';

const MapComponent = () => {
    // const [geojsonData, setGeojsonData] = useState(null);

    // useEffect(() => {
    //     // Load GeoJSON data
    //     fetch('finalsetted.geojson')
    //         .then(response => response.json())
    //         .then(data => setGeojsonData(data))
    //         .catch(error => console.error('Error fetching GeoJSON:', error));
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('finalsetted.geojson');
    //             const data = await response.json();
    //             setGeojsonData(data);
    //         } catch (error) {
    //             console.error('Error map  fetching GeoJSON:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const highlightStyle = {
        fillColor: 'red',
        color: 'black',
        weight: 2
    };

    const handleFeatureClick = (e) => {
        // Highlight the clicked feature
        e.target.setStyle(highlightStyle);
    };

    return (
        <MapContainer center={[22.7196, 75.8577]} zoom={11} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {geojsonData && (
                <GeoJSON
                    data={geojsonData}
                    style={() => ({
                        fillColor: '#3b3b3b',
                        color: 'black',
                        weight: 2
                    })}
                    eventHandlers={{
                        click: handleFeatureClick
                    }}
                />
            )}
        </MapContainer>
    );
};

export default MapComponent;
