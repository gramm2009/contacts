import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useCopyToClipboard } from 'react-use'
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
   root: {
     minWidth: 150,
     cursor: "pointer"
   },
   icon:{
      marginRight: 5+'px'
   }
 });

export const CopyToClipboardText = ({ text }) => {
   const [state, copyToClipboard] = useCopyToClipboard();
   const classes = useStyles();
  return (
     <Tooltip title="Copy" placement="top-start" arrow>
    <Box display="flex" alignItems="center" className={classes.root} onClick={()=>copyToClipboard(text)}>
      <FileCopyOutlinedIcon fontSize="small" className={classes.icon}/>
      {text}
    </Box>
    </Tooltip>
  );
};

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
