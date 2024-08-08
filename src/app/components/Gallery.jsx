'use client'

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import Link from 'next/link';

export default function ImageGallery() {
  const [mainCGC, setMainCGC] = useState([]);

  useEffect(() => {
    const fetchMainImages = async () => {
      const { data, error } = await supabase.storage.from('CGC-Wargaming').list('');

      if (error) {
        console.error('Error fetching images: ', error);
      } else {
        // Filter out images that have `_angle` in their name to show only the main images
        const mainCGC = data.filter((CGC) => !CGC.name.includes('_angle'));
        setMainCGC(mainCGC);
      }
    };

    fetchMainImages();
  }, []);

  return (
    <div className="columns-2 sm:columns-3 gap-7">
      {mainCGC.map((CGC) => (
        <Link href={`/Gallery/${encodeURIComponent(CGC.name)}`} key={CGC.name}>
          <img
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${CGC.name}`}
            alt={CGC.name}
            className="cursor-pointer border-2 border-solid rounded-xl mb-7"
          />
        </Link>
      ))}
    </div>
  );
}







