import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import Steps from './Steps';
import Energy from './Energy';
import Water from './Water';
import Calories from './Calories';
import Activity from './Activity';
import TrainingPrograms from './TrainingPrograms';
import MonthlyGoalsTarget from './MonthlyGoalsTarget';

//import Parameters from './Parameters';

function DashboardFitness() {
  return (
    <>
      <Helmet>
        <title>Fitness Dashboard</title>
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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item sm={6} md={3} lg={6} xs={12}>
              <Steps />
            </Grid>
            <Grid item sm={6} md={3} lg={6} xs={12}>
              <Energy />
            </Grid>
            <Grid item sm={6} md={3} lg={6} xs={12}>
              <Water />
            </Grid>
            <Grid item sm={6} md={3} lg={6} xs={12}>
              <Calories />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Activity />
        </Grid>
        <Grid item xs={12}>
          <TrainingPrograms />
        </Grid>
        <Grid item md={12} xs={12}>
          <MonthlyGoalsTarget />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardFitness;
