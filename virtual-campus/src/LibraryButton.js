import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function LibraryButton(){
  return (

    <Box mx="auto" p={2} style={{textAlign:'center'}}>
      <Button variant="contained" color="primary" style={{width:'200px'}}>
        Click to Enter
      </Button>
    </Box>
  );
}

export default LibraryButton;
