import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs'; // or '@srexi/purecounterjs/dist/purecounter_vanilla.js'

export default function Stats1() {
  useEffect(() => {
    new PureCounter(); // initializes all .purecounter elements
  }, []);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
            </div>
          </div>
          {/* ... other stat items ... */}
        </div>
      </div>
    </section>
  );
}