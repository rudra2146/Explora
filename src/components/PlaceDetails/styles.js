import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  price: {
       width: '35%',
       float: 'left',
       textAlign: 'left',
  },

  price_right: {
       width: '65%',
      textAlign: 'right',
      fontSize: "17px"
  },
}));