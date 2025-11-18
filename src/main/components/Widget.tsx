import { WochentagPicker } from '@cos/rcl-future/components';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const WidgetDiv = styled('div')(({ theme }) => ({
   marginBottom: theme.spacing(1),
   '.paper': {
      padding: theme.spacing(4),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      borderRadius: 0,
   },
   '.header': {
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(3),
   },
   '.contentWrapper': {
      paddingRight: theme.spacing(2),
   },
   '.headlineTitle': {
      fontWeight: theme.typography.fontWeightBold,
   },
}));

function Widget({ title, children }) {
   const onChangeWochentag = (value: number) => {
      console.log('Selected day:', value);
   };
   return (
      <WidgetDiv>
         <Paper elevation={3} className="paper">
            <div className="header">
               <Typography color="textPrimary" variant="h3" className="headlineTitle">
                  {' '}
                  {title}{' '}
               </Typography>
               {/*{toolbarRenderer && toolbarRenderer()}*/}
               <WochentagPicker
                  testId={'wochentag-test'}
                  label={'Waehle einen Wochentag'}
                  value={0}
                  onChange={onChangeWochentag}
               />
            </div>

            <div className="contentWrapper">{children}</div>
         </Paper>
      </WidgetDiv>
   );
}

Widget.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node,
};

export default Widget;
