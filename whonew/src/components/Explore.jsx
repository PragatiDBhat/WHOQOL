import React from "react";

export default function Explore() {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">HEALTH</h3>
              <h1 className="display-6 text-center mb-4">
                FOUR <b>PILLARS </b>OF <b> HEALTH</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-5">
              <div style={{ width: '18rem' }} className="card">
                <img src="mh.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">Psychological Health</h5>
                  <p className="card-text">
                  Psychological health is crucial for well-being, including resilience, positive relationships, and self-esteem. Balancing work, adopting healthy habits, and seeking support contribute to it, highlighting the vital link between mental and physical well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div style={{ width: '18rem' }} className="card">
                <img src="mh.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">Physical Health</h5>
                  <p className="card-text">
                  Physical health is vital for overall well-being. Exercise, a balanced diet, hydration, quality sleep, regular check-ups, and stress management promote optimal health for an active and fulfilling life.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div style={{ width: '18rem' }} className="card">
                <img src="mh.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">Environmental Health</h5>
                  <p className="card-text">
                  Environmental health explores how surroundings affect well-being, covering air and water quality, food safety, waste management, and more. It prevents health hazards through research, policy development, and community engagement for resilient societies.</p>                
                  </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div style={{ width: '18rem' }} className="card">
                <img src="mh.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">Social Health</h5>
                  <p className="card-text">
                  Social health is about quality connections. It involves effective communication, empathy, and meaningful relationships, contributing to emotional well-being. It's a crucial aspect of overall health, emphasizing the importance of positive interpersonal connections for a fulfilling life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
