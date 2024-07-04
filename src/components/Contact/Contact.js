import contact1 from '@/images/contact2.png';
import decoration from '@/images/decoration-star.svg';
import Image from 'next/image';
function Contact(props) {
  return (
    <section id='contact' className='contact my-2 position-relative'>
      <Image
        src={decoration}
        alt=''
        className='decoration-star position-absolute'
      />
      <div className='container position-relative z-3'>
        <div className='row align-items-center'>
          <div className='col-lg-6 d-none d-md-block'>
            <div className='image-container'>
              <Image src={contact1} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='text-container'>
              <h2>Laissez-nous un message</h2>
              <form>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter name'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter phone'
                  />
                </div>
                <div className='mb-3'>
                  <textarea
                    className='form-control'
                    placeholder='Enter message'
                    rows='8'
                  ></textarea>
                </div>
                <div className='d-grid gap-2'>
                  <input
                    type='submit'
                    value='Envoyer'
                    className='btn btn-primary btn-block'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
