
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import LoadingWrapper from '../../components/LoadingWrapper';
import { selectContentRemote } from '../../store/content/ContentSelector';
import { selectUserRemote } from '../../store/user/UserSelector';
import Kundenprofil from './components/Kundenprofil';
import type {RemoteData} from "../../utils/RemoteStateUtils.ts";


const AppUiDiv = styled('div')(({ theme }) => ({
   width: '100%',
   height: '100vh',
   overflowY: 'hidden',
   overflowX: 'hidden',
   '.headerContainer': {
      width: '100%',
   },
   '.main': {
      padding: theme.spacing(1),
      width: '100%',
      height: 'calc(100vh - 100px)', // 50px = HEIGHT OF MainAppBar
   },
}));

function AppUI() {
   const userRemoteState: RemoteData = useSelector(selectUserRemote);
   const contentRemoteState = useSelector(selectContentRemote);

   return (
      <AppUiDiv>
         {/*<MainAppBar/>*/}
         <div className="headerContainer">
            {/*TODO richtiger MainAppBar*/}
            {/*<HeaderBar appName={'Kundenprofil-App'} appKuerzel={'KP'} iconButtons={[]} />*/}
             HEADER BAR HERE
         </div>

         <main className="main">
            <LoadingWrapper
               remoteLoadingState={userRemoteState.loadingState}
               widgetLoadingTitle="Lädt Userdaten..."
               widgetErrorText="Fehler beim Laden des Users!"
            >
               <Box sx={{ flexGrow: 1, height: '100%' }}>
                  <Grid container spacing={2} style={{ height: '100%' }}>
                     <Grid size={6} style={{ height: '100%' }}>
                        <LoadingWrapper
                           remoteLoadingState={contentRemoteState.loadingState}
                           widgetLoadingTitle="Lädt Partnerdaten..."
                           widgetErrorText="Fehler beim Laden der Partnerdaten!"
                        >
                            <Kundenprofil />
                        </LoadingWrapper>
                     </Grid>
                     <Grid size={6}>
                        <LoadingWrapper
                           remoteLoadingState={contentRemoteState.loadingState}
                           widgetLoadingTitle="Lädt Kundenprofil..."
                           widgetErrorText="Fehler beim Laden des Kundenprofils!"
                        >
                           <Kundenprofil />
                        </LoadingWrapper>
                     </Grid>
                  </Grid>
               </Box>
            </LoadingWrapper>
         </main>
      </AppUiDiv>
   );
}

AppUI.propTypes = {
   remoteState: PropTypes.string.isRequired,
   remoteError: PropTypes.any,
   userCanOpenApp: PropTypes.bool,
};

export default AppUI;
