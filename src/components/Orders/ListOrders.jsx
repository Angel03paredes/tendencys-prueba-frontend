import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import {CircularProgress, Typography} from "@mui/material"
import { styled } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import styles from "./ListOrders.module.css"

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ListOrders = ({orders=[],handleOrderClick,loading}) => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  

  return (
    <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
      Órdenes
    </Typography>
    
    {
      loading && (
       <>
       <CircularProgress />
       </>
      )
    }
    <Demo>
     {
      !loading && (
        <List dense={dense}>
        { !loading &&
          orders?.map((item,index)=>
            <ListItem key={index} onClick={()=>handleOrderClick(item?.items || [])} className={styles.item_list} style={{cursor:"pointer"}}>
            <ListItemAvatar>
              <Avatar>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={ "#" + item?.number}
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
          
          )
        }
      </List>
      )
     }
    </Demo>
  </Grid>
  )
}

export default ListOrders