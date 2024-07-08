import Link from 'next/link';
export default function NotFound() {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <div className='text-center'>
        <h1 className='display-1 fw-bold'>404</h1>
        <p className='fs-3'>
          {' '}
          <span className='text-danger'>Opps!</span> Page non trouvée.
        </p>
        <p className='lead'>
          La page que vous cherchez n&apos;est pas disponible.
        </p>
        <Link href='/' className='btn btn-primary'>
          Retour
        </Link>
      </div>
    </div>
  );
}
