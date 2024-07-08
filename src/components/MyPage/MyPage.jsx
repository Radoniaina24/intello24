'use client';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
export default function MyPage() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className='container'>
      <Map />
    </div>
  );
}
