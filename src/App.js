import React from 'react';

import Header from './components/presentation/Header';
import Footer from './components/presentation/Footer';
import Banner from './components/presentation/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="mb-4">
          <Banner size="large">
            <h1 className="mb-3">Kea Survey Tool</h1>
            <div className="home-buttons">
              <button className="btn btn-lg btn-primary mr-3">Report Survey</button>
              <button className="btn btn-lg btn-light mr-3">Review Past Surveys</button>
              <button className="btn btn-lg btn-light mr-3">Get Status Report</button>
            </div>
          </Banner>
        </section>
        <section className="mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>What is this?</h2>
                <p>
                  This tool designed to inform understanding of kea populations, through better
                  capturing the relationship between time spent and kea sighted.
                </p>
              </div>
              <div className="col-md-6">
                <h2>How can I help?</h2>
                <p>
                  Presently this is restricted to authorised personnel only. For general sightings
                  please use the{' '}
                  <a href="https://keadatabase.nz" target="_blank" rel="noopener noreferrer">
                    Kea Database
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
