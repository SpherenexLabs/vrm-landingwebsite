import React from 'react';
import './Awards.css';

// Import award images
import award1 from '../assets/WhatsApp Image 2025-12-04 at 19.18.42_fa124299.jpg';
import award2 from '../assets/WhatsApp Image 2025-12-04 at 19.20.25_78d34e23.jpg';
import award3 from '../assets/WhatsApp Image 2025-12-04 at 18.15.30_d1364f86.jpg';
import award4 from '../assets/WhatsApp Image 2025-12-04 at 18.15.31_8a8c6447.jpg';
import award5 from '../assets/WhatsApp Image 2025-12-04 at 18.15.34_e7c78a1d.jpg';
import award6 from '../assets/WhatsApp Image 2025-12-04 at 18.15.32_4460831c.jpg';
import award7 from '../assets/WhatsApp Image 2025-12-04 at 18.15.33_2b00fddd.jpg';
import award8 from '../assets/WhatsApp Image 2025-12-04 at 18.15.30_115b003e.jpg';


// import award1 from '../assets/WhatsApp Image 2025-12-04 at 18.15.30_115b003e.jpg';
// import award2 from '../assets/WhatsApp Image 2025-12-04 at 18.15.30_d1364f86.jpg';
// import award3 from '../assets/WhatsApp Image 2025-12-04 at 18.15.31_8a8c6447.jpg';
// import award4 from '../assets/WhatsApp Image 2025-12-04 at 18.15.32_9867bdb4.jpg';
// import award5 from '../assets/WhatsApp Image 2025-12-04 at 18.15.32_4460831c.jpg';
// import award6 from '../assets/WhatsApp Image 2025-12-04 at 18.15.33_2b00fddd.jpg';
// import award7 from '../assets/WhatsApp Image 2025-12-04 at 18.15.33_2c2c64e4.jpg';
const Awards = () => {
  const awards = [
    {
      id: 1,
      image: award1,
      title: 'Excellence in Construction'
    },
    {
      id: 2,
      image: award2,
      title: 'Quality Achievement Award'
    },
    {
      id: 3,
      image: award3,
      title: 'Industry Recognition'
    },
    {
      id: 4,
      image: award4,
      title: 'Safety Excellence Award'
    },
    {
      id: 5,
      image: award5,
      title: 'Innovation in Building'
    },
    {
      id: 6,
      image: award6,
      title: 'Customer Satisfaction'
    },
    {
      id: 7,
      image: award7,
      title: 'Outstanding Achievement'
    },
    {
      id: 8,
      image: award8,
      title: 'Team Excellence'
    }
  ];

  return (
    <section id="awards" className="awards">
      <div className="awards-header">
        <h2>Awards & <span className="highlight">Recognition</span></h2>
        <p className="section-subtitle">
          Celebrating excellence and achievements in construction industry
        </p>
      </div>
      
      <div className="awards-grid">
        {awards.map((award) => (
          <div key={award.id} className="award-card">
            <div className="award-image-wrapper">
              <img src={award.image} alt={award.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
