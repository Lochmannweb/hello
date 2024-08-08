// uden 3D

import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="p-8 sm:mt-16 md:mt-10">
    <div className="text-center sm:text-start sm:absolute">
      <h2 className=' text-cgc-logo text-4xl sm:text-8xl md:text-9xl font-serif'>Miniature <br /> 
      <span className="ml-0 sm:ml-28 md:ml-20" >W<span className='uppercase text-3xl sm:text-7xl md:text-8xl'>argaming</span> </span> 
      </h2>
      <h3 className='text-cgc-tekst mt-3 text-xs sm:text-base md:text-xl sm:mt-5 sm:ml-16 md:mt-48 md:-ml-0 xl:-ml-16'>
        Få samlet og malet en hel hær, commander eller <br /> primarch der skal være iøjenfaldende.
      </h3>
    </div>

      <Image 
      src="/image.png" 
      alt="image" 
      width={700}
      height={700}
      className="mt-2 sm:mt-56 md:ml-60 md:mt-36 xl:ml-96 xl:-mt-20 md:absolute" />
      {/* className=" sm:ml-auto sm:-mr-48 sm:-mt-96" /> */}
    </section>
    </>
  );
}



// import ModelViewer from '@/app/components/ModelViewer';
// import Footer from '@/app/components/Footer'

// export default function Home() {
//   return (
//     <>
//       <section className="p-5 md:mt-10">
//         <div>
//         <h2 className='text-cgc-logo text-5xl font-serif'>W<span className='uppercase text-4xl'>argaming</span></h2>
//         <h3 className='text-cgc-tekst'>Lille beskrivelse her</h3>
//         </div>

//         <div className="-mt-20">
//           <ModelViewer url={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/lord_inquisitor_servo_skull.glb`} />
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


