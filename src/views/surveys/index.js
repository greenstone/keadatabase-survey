import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';
import Surveys from '../../components/surveys/Surveys';
import GridTilesFromSurveyHours from '../../components/grid/GridTilesFromSurveyHours';

const SurveyPage = props => {
  return (
    <div className="SurveyPage">
      <Helmet title="Surveys" />
      <section className="mb-5">
        <Banner size="small">
          <h1>Surveys</h1>
        </Banner>
      </section>
      <section className="mb-5">
        <div className="container">
          <h2>
            Recent Surveys <small>(last 25)</small>
          </h2>
          <Surveys type="item" queryString="?page_size=25" />
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <h2>Recently Surveyed Tiles</h2>
          <GridTilesFromSurveyHours type="card" hideDetails limit={4} />
        </div>
      </section>
    </div>
  );
};

export default SurveyPage;