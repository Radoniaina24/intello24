import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <header class='header position-relative'>
        {/* <Image
        src='images/vertical-decoration-left.svg'
        alt=''
        className='vertical-decoration position-absolute d-none d-md-block'
      /> */}
        <div class='container'>
          <div class='row text-center'>
            <div class='col-12'>
              <h1 class='xl-text'>
                La <span className='text-primary fw-bold'>réussite</span>{' '}
                n&apos;a rien de magique. Elle se prépare.
              </h1>
              <Link href='/about' class='btn btn-primary text-white mt-4'>
                Découvrir le collège
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
