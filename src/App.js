
import { Grid } from '@mui/material';
import './App.css';
import Router from './Config/Router';
import Sidebar from './component/Sidebar';




function App() {
  return (
    <div>
 
 <Grid container>
  <Grid item md={3} sm={3} lg={3} xs={3}>
    <Sidebar/>
  </Grid>
  <Grid item md={9} sm={9} lg={9} xs={9}>
  <Router/>
  </Grid>
 </Grid>

    </div>
  );
}

export default App;
