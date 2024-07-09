'use client';
import CountUp from 'react-countup';
function Stats(props) {
  return (
    <section id='stats' className='stats container'>
      <div className='row my-6'>
        <div className='col-md-4 col-sm-6 text-center'>
          <h2 className='counter xl-text'>
            <CountUp start={0} end={328} duration={10} />
          </h2>
          <p>Etudiants statisfaits</p>
        </div>

        <div className='col-md-4 col-sm-6 text-center'>
          <h2 className='counter xl-text'>
            <CountUp start={0} end={486} duration={10} />
          </h2>
          <p>Abonnés Facebook</p>
        </div>

        <div className='col-md-4 col-sm-6 text-center'>
          <h2 className='counter xl-text'>
            <CountUp start={0} end={159} duration={10} />
          </h2>
          <p>Bonnes critiques</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
