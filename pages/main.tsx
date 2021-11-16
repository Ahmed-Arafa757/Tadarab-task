import * as React from 'react'
import styles from '../styles/main.module.css'
import Navbar from '../components/navbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FixedCard from '../components/fixed-card'
import CourseDetails from '../components/course-details'
import ActivitiesAndReviews from '../components/activities-and-reviews'
import CoursePage from './course-page'
import { GetServerSideProps } from 'next';


export default function Main() {



  return (
    <>
      <Navbar />
      {/* <CoursePage /> */}

      <Box sx={{ flexGrow: 1, mt: 3 }}>    
        <Grid container>
          <Grid className={styles.gridBg} item xs={0} md={1}>
          </Grid>
          <Grid className={styles.gridBg} item xs={4} md={3}>

            <FixedCard />

          </Grid>
          <Grid className={styles.shiftedGrid} xs={8} item md={7}>
            < CourseDetails />

          </Grid>
          <Grid className={styles.gridBg} item xs={0} md={1}>
          </Grid>

          <Grid className={styles.gridBg} item xs={1}>
          </Grid>
          <Grid sx={{ direction: "rtl" }} item xs={10}>
            <ActivitiesAndReviews />
          </Grid>
          <Grid className={styles.gridBg} item xs={1}>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

