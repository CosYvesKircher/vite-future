import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Widget from '../../../components/Widget';

function Kundenprofil() {
   return (
      <Widget title={`Informationen`}>
         <Grid container spacing={2}>
            <Divider />
             Hallo Welt
            {/*<WirtschaftlichkeitPanel />*/}

            {/*<Divider />*/}
            {/*<VersichertesRisikoPanel />*/}

            {/*<Divider />*/}
            {/*<ZahlungsmoralPanel />*/}

            {/*<Divider />*/}
            {/*<PartnerPanel />*/}
         </Grid>
      </Widget>
   );
}

export default Kundenprofil;
