'use client'
import React, { useMemo } from 'react';
import { GoogleMap as GMap, Marker, useJsApiLoader } from '@react-google-maps/api';

type Props = { lat?: number; lng?: number; zoom?: number; height?: string };

const containerStyle = (height = '400px') => ({ width: '100%', height });

export default function GoogleMap({ lat = 24.774265, lng = 46.738586, zoom = 12, height = '400px' }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  const options = useMemo(() => ({
    mapId: undefined,
    disableDefaultUI: true,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    gestureHandling: 'greedy',
  }), []);

  if (loadError) return <div className="text-center p-4">فشل تحميل الخريطة — تحقق من مفتاح API و Console</div>;
  if (!isLoaded) return <div className="text-center p-4">جارِ تحميل الخريطة…</div>;

  return (
    <GMap mapContainerStyle={containerStyle(height)} center={center} zoom={zoom} options={options}>
      <Marker position={center} />
    </GMap>
  );
}
