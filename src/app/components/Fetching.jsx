// 'use client';

// import { supabase } from '@/app/lib/supabaseClient';
// import { notFound } from 'next/navigation';
// import { useState, useEffect } from 'react';

// // Function to fetch related images by matching the base name
// async function fetchRelatedImages(baseName) {
//   const { data, error } = await supabase.storage.from('CGC-Wargaming').list('');

//   if (error) {
//     console.error('Error fetching related images: ', error);
//     return [];
//   }

//   // Filter images based on a naming convention (e.g., image1_angle1.jpg)
//   return data.filter((item) => item.name.startsWith(baseName));
// }


// export default function ImagePage({ params }) {
//   const [relatedImages, setRelatedImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);


//   useEffect(() => {
//     const loadImageData = async () => {
//       console.log('Params ID:', params.id);
  
//       // Assuming the image ID matches the URL parameter ID (params.id)
//       const imageData = await fetchRelatedImages(params.id.split('.')[0]);
  
//       if (imageData.length === 0) {
//         notFound();
//         return;
//       }
  
//       const firstImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${imageData[0].name}`;
//       setSelectedImage(firstImageUrl);
//       setRelatedImages(imageData);
//     };
  
//     loadImageData();
//   }, [params.id]);
  

//   if (relatedImages.length === 0) {
//     return null; // Handle loading state or error here
//   }

//   return (
//     <div className="container mx-auto p-4 text-White">
//       <div className="flex justify-center mb-4 mt-20">
//         <img src={selectedImage} alt={params.id} className="max-w-full rounded-lg shadow-lg w-1/2 h-1/2 sm:w-1/3 sm:h-1/3" />
//       </div>
//       <div className="flex justify-center gap-4">
//         {relatedImages.map((image) => (
//           <img
//             key={image.name}
//             src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`}
//             alt={image.name}
//             className="cursor-pointer w-24 h-24 object-cover border-2 border-solid rounded-lg mt-10"
//             onClick={() => setSelectedImage(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`)}
//           />
//         ))}
//       </div>
//       <h1 className="text-3xl font-serif mb-5 mt-10 text-white">{params.id}</h1>
//     </div>
//   );  
// }
