

import Gallery from '@/app/components/Gallery';


export default function Home() {
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('Supabase ANON KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <div className=''>
      <main className="container mx-auto p-4">
        <Gallery />
      </main>

    </div>
  );
}

