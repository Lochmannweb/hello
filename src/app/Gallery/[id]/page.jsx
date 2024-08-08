'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import { notFound } from 'next/navigation';

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
    <div className="page home text-white container mx-auto p-4">
      <div className="flex justify-center mb-4 mt-20">
        <img src={selectedImage} alt={params.id} className="max-w-full rounded-lg shadow-lg w-1/2 h-1/2 sm:w-1/3 sm:h-1/3" />
      </div>
      <div className="flex justify-center gap-4">
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

// // async function fetchEditorData(CGC) {
// //   console.log('Fetching data for Image ID:', CGC);

// //   const { data, error } = await supabase
// //     .from('CGC')  // Correct table name
// //     .select()  // Ensure to select the required columns
// //     .eq('id', CGCWargaming)  // Filter by the correct column (id)
// //     .single();  // Assuming 'id' is unique

// //   if (error) {
// //     console.error('Error fetching editor data:', error);
// //     return null;
// //   }

// //   console.log('Fetched editor data:', data);
// //   return data;
// // }


// export default function ImagePage({ params }) {
//   const [relatedImages, setRelatedImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   // const [editorData, setEditorData] = useState({ Description: '', Text: '' });

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
  
//       // // Fetching editor data using the image ID
//       // const editorInfo = await fetchEditorData(params.id.split('.')[0]);
  
//       if (editorInfo) {
//         setEditorData(editorInfo);
//       } else {
//         console.error('No editor data found for id:', params.id);
//       }
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
//       {/* <div className="text-lg mt-5">
//         <details>
//           <p>ghfdjgdbjhk</p>
//           <summary className='flex' >
//             <p className="font-bold mb-2">{editorData?.id || 'No Description available'}</p>
//           </summary>
//         </details>
//         <hr className='text-White mb-5' />

//         <details>
//           <p>ghfdjgdbjhk</p>
//           <summary className='flex' >
//             <p className="font-bold mb-2">{editorData?.Text || 'No Text available'}</p>
//           </summary>
//         </details>
//         <hr className='text-White mb-5' />
//       </div> */}
//     </div>
//   );  
// }








// 'use client';
// import { supabase } from '@/app/lib/supabaseClient';
// import { notFound } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import Footer from '@/app/components/footer';

// export default function ImagePage({ params }) {
//   const [imageData, setImageData] = useState(null);
//   const [currentImage, setCurrentImage] = useState(null);

//   useEffect(() => {
//     async function getImageData() {
//       const data = await fetchImageData(params.id);
//       if (data) {
//         setImageData(data);
//         setCurrentImage(data.images.find(img => img.type === 'main').url); // Set main image initially
//       } else {
//         notFound(); // Handle not found
//       }
//     }
//     getImageData();
//   }, [params.id]);

//   if (!imageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">{imageData.id}</h1>
//         <div className="flex justify-center">
//           <img src={currentImage} alt={imageData.id} className="max-w-full rounded-lg shadow-lg" />
//         </div>

//         <div className="mt-4 flex justify-center space-x-2">
//           {imageData.images.map((img, index) => (
//             <img
//               key={index}
//               src={img.url}
//               alt={`View ${index + 1}`}
//               className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
//               onClick={() => setCurrentImage(img.url)}
//             />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }













  