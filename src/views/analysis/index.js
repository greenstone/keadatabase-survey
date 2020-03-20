import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';
import GridTileAnalyses from '../../components/analysis/GridTileAnalyses';

const AnalysisPage = props => {
  return (
    <div className="AnalysisPage">
      <Helmet title="Analysis" />
      <section className="d-print-none">
        <Banner size="small">
          <h1>Analysis</h1>
          <p>
            Orange tiles: surveyed, kea present. Grey tiles: surveyed, kea not present.
            <br />
            <small>Darker orange denotes higher proportion of kea to hours surveyed.</small>
          </p>
        </Banner>
      </section>
      <section>
        <GridTileAnalyses type="map" />
      </section>
    </div>
  );
};

export default AnalysisPage;
