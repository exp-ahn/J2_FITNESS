import React, { useEffect } from 'react';

const KakaoMap = () => {
    useEffect(() => {
        const initMap = () => {
            // 카카오 맵을 특정 DOM 요소에 표시
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.506502, 127.053617), // 초기 중심 좌표 설정
                level: 3, // 확대 수준 설정
            };
            const map = new window.kakao.maps.Map(container, options);

            // 지도에 마커 추가
            const markerPosition = new window.kakao.maps.LatLng(37.506502, 127.053617);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
        };

        if (window.kakao && window.kakao.maps) {
            initMap();
        } else {
            const script = document.createElement('script');
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_MAP_API_KEY';
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        }
    }, []);

    return <div id="map" style={{ width: '500px', height: '400px' }}></div>;
};

export default KakaoMap;
