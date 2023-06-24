import Link from 'next/link';

export default function Page(){
  return (
    <>
     <h1>Mantenimiento de productos</h1>
     <Link
          href="/dashboard/product/new"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          nuevo producto
        </Link>
    </>
  )
}
