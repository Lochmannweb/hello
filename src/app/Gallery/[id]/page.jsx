'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function ImageAndDataPage({ params }) {
  const [fetchError, setFetchError] = useState(null);
  const [selectedCGC, setSelectedCGC] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImageData = async () => {
      const imageBaseName = params.id.split('.')[0];
      const imageData = await fetchRelatedImages(imageBaseName);

      if (imageData.length === 0) {
        notFound();
        return;
      }

      const firstImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${imageData[0].name}`;
      setSelectedImage(firstImageUrl);
      setRelatedImages(imageData);

      fetchCGC(imageBaseName);  // Fetch the CGC data for the first image
    };

    loadImageData();
  }, [params.id]);

  const fetchCGC = async (imageBaseName) => {
    const { data, error } = await supabase
      .from('CGC')
      .select('*')
      .eq('hiddentitle', imageBaseName) // Adjust this line to match your data structure

    if (error) {
      setFetchError('Could not fetch CGC data');
      console.log(error);
    } else if (data && data.length > 0) {
      setSelectedCGC(data[0]);
    } else {
      setSelectedCGC(null);
    }
  };

  async function fetchRelatedImages(baseName) {
    const { data, error } = await supabase.storage.from('CGC-Wargaming').list('');

    if (error) {
      console.error('Error fetching related images: ', error);
      return [];
    }

    return data.filter((item) => item.name.startsWith(baseName));
  }

  const handleImageClick = (image) => {
    const imageBaseName = image.name.split('.')[0];
    setSelectedImage(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`);
    fetchCGC(imageBaseName);  // Fetch the CGC data for the clicked image
  };

  if (relatedImages.length === 0) {
    return null; // Handle loading state or error here
  }

  return (
    <div className="page home text-white container mx-auto p-4 mb-10">
      <div className="flex justify-center mb-4 mt-20">
        <img src={selectedImage} alt={params.id} className="max-w-full rounded-lg shadow-lg w-1/1 h-1/1 sm:w-1/2 sm:h-1/2" />
      </div>
      <div className="flex justify-center gap-4 overflow-x-auto">
        {relatedImages.map((image) => (
          <img
            key={image.name}
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`}
            alt={image.name}
            className="cursor-pointer w-24 h-24 object-cover border-2 border-solid rounded-lg mt-10"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="text-White">
        {selectedCGC && (
          <>
            <h1 className="text-3xl font-serif mb-5 mt-10">{selectedCGC.title}</h1>
            <p>{selectedCGC.Description}</p>
          </>
        )}
        {fetchError && <p>{fetchError}</p>}
      </div>
    </div>
  );
}














  