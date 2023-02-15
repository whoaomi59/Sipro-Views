import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';

import Block1 from './Block1';
import Block3 from './Block3';
import { Grid } from '@mui/material';

function DataDisplayComposedCards() {
  return (
    <>
      <Helmet>
        <title>Analytics</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item lg={6} xs={12}>
          <Block1 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block3 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DataDisplayComposedCards;
