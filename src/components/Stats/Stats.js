'use client';
import CountUp from 'react-countup';
function Stats(props) {
  return (
    <section id='stats' className='stats'>
      <div className='row my-6 ' data-aos="zoom-in-down" data-aos-duration="4000">
        <div className='col-md-4 col-sm-6 text-center  border-end border-4 border-light my-5' data-aos="zoom-in-down" data-aos-duration="4000">
          <h2 className='counter xl-text'>
            +<CountUp start={0} end={328} duration={30} />
          </h2>
          <h6>Etudiants statisfaits</h6>
        </div>

        <div className='col-md-4 col-sm-6 text-center border-end border-4 border-light my-5' data-aos="zoom-in-down" data-aos-duration="4000">
          <h2 className='counter xl-text'>
            +<CountUp start={0} end={486} duration={30} />
          </h2>
          <h6>Abonnés Facebook</h6>
        </div>

        <div className='col-md-4 col-sm-6 text-center my-5' data-aos="zoom-in-down" data-aos-duration="4000">
          <h2 className='counter xl-text'>
            +<CountUp start={0} end={159} duration={30} />
          </h2>
          <h6>Bonnes critiques</h6>
        </div>
      </div>
    </section>
  );
}

export default Stats;
