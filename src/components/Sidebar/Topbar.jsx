import React from 'react';
import './sidebar.css'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Topbar = () => {
  return (
    <>
    <div className='topbar'>
        <div style={{display:"flex",alignItems:"center",width:"100%",justifyContent:"end",padding:"0px 20px"}}>
            <LoginOutlinedIcon sx={{mr:1 ,cursor:"pointer"}}/>
              Logout
        </div>
 
    </div>
    
    </>
   
  );
};

export default Topbar;
