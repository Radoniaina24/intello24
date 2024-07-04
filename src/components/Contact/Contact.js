'use client';
import contact1 from '@/images/contact2.png';
import decoration from '@/images/decoration-star.svg';
import { contactSchema } from '@/utils/yup/Schema';
import { useFormik } from 'formik';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialValues = {
  name: '',
  email: '',
  message: '',
  phone: '',
};
function Contact(props) {
  function notify() {
    toast.success('Email envoyer', {
      position: 'top-right',
    });
  }
  function onSubmit() {
    notify();
    resetForm();
  }
  const { handleSubmit, handleChange, touched, errors, values, resetForm } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit,
    });

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
              <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='mb-3'>
                  <input
                    type='text'
                    className={`form-control ${
                      touched.name && errors.name ? 'border border-danger' : ''
                    }`}
                    placeholder='nom'
                    name='name'
                    id='name'
                    value={values.name}
                    onChange={handleChange}
                  />
                  {touched.name && errors.name ? (
                    <div className='text-danger ps-2'>{errors.name}</div>
                  ) : (
                    ''
                  )}
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    className={`form-control ${
                      touched.email && errors.email
                        ? 'border border-danger'
                        : ''
                    }`}
                    placeholder='email'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                  />
                  {touched.email && errors.email ? (
                    <div className='text-danger ps-2'>{errors.email}</div>
                  ) : (
                    ''
                  )}
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    className={`form-control ${
                      touched.phone && errors.phone
                        ? 'border border-danger'
                        : ''
                    }`}
                    placeholder='Enter phone'
                    name='phone'
                    id='phone'
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {touched.phone && errors.phone ? (
                    <div className='text-danger ps-2'>{errors.phone}</div>
                  ) : (
                    ''
                  )}
                </div>
                <div className='mb-3'>
                  <textarea
                    className={`form-control ${
                      touched.message && errors.message
                        ? 'border border-danger'
                        : ''
                    }`}
                    placeholder='Enter message'
                    rows='8'
                    name='message'
                    id='message'
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                  {touched.message && errors.message ? (
                    <div className='text-danger ps-2'>{errors.message}</div>
                  ) : (
                    ''
                  )}
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
      <ToastContainer />
    </section>
  );
}

export default Contact;
