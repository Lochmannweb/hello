import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='p-8 text-White mt-0 sm:flex'>
      <div className='sm:mt-40'>
      <h1 className='text-3xl font-serif'>About</h1> <br />
      <p className='sm:pr-8 text-sm'>Mit navn er Caspar <br />
      Jeg har malet Warhammer i 10 år on and off og elsker at være kreativ i mine projekter. <br />
      Jeg samler hovedsageligt selv på Black Templars og Deathguards fra Warhammer 40k, <br />
      Men jeg kan bruge mine færdigheder og tricks til at skulle male hvad i har brug for. <br /> <br />

      
      Jeg har startet min hjemmeside og Instagram profil i håb om <br /> 
      at kunne male kommision for folk der ikke har tid til det. <br /> <br />
      Jeg elsker at sidde og male miniature, og derfor vil jeg gerne stille mig til rådighed for folk der har brug for hjælp, 
      om det er til hele deres hær, eller om det er deres commander eller primarch der skal laves lidt mere iøjenfaldende.</p>
      </div>

      <div>
        <Image 
        src="/profil.jpg"
        alt='profil'
        width={1000}
        height={1000}
        className='mt-10 mb-10' />
      </div>
    </div>
  )
};

