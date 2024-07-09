'use client';
import CountUp from 'react-countup';
function Stats(props) {
  return (
    <section id='stats' className='stats container'>
      <div className='row my-6'>
        <div className='col-md-4 col-sm-6 text-center'>
          <h2 className='counter xl-text' data-target='328'>
            <CountUp start={0} end={328} duration={10} />
          </h2>
          <p>Etudiant statisfaits</p>
        </div>

        <div className='col-md-4 col-sm-6 text-center'>
          <h2 className='counter xl-text' data-target='285'>
            <CountUp start={0} end={285} duration={10} />
          </h2>
          <p>Problèmes résolus</p>
        </div>

        <div className='col-md-4 col-sm-6 text-center'>
          <h2 className='counter xl-text' data-target='159'>
            <CountUp start={0} end={159} duration={10} />
          </h2>
          <p>Bonnes critiques</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
