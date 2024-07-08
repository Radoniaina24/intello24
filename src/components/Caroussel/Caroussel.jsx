import e1 from '@/images/baniere.png';
import Image from 'next/image';
export default function Caroussel() {
  return (
    <div className=''>
      <Image src={e1} className='d-block w-100 img-fluid' alt='...' />
    </div>
  );
}
