import Link from 'next/link';
import { Text } from '@/components/shared/Text';
export default function NotFound() {
  return (

    <main className="grid min-h-full place-items-center bg-white px-6 py-24
     sm:py-32 lg:px-8">
    <div className="text-center">
      <Text className='font-semibold' >404</Text>
      <Text className="mt-4" variant={'h1'}>Page not found</Text>
      <Text className="mt-6" variant={'paragraph'}>Sorry, we couldn’t find the page you’re looking for.</Text>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  </main>
  );
}
