import React,{useState} from 'react'
import {Box,Fab} from '@mui/material';


const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png','image/jpeg','application/pdf','application/msword'];

    const handleChange=(e)=>{
        let selected = e.target.files[0];
        console.log('The file which is selected ==>',selected)
        
            if(selected && types.includes(selected.type)){
                setFile(selected)
                setError('')
            }
            else{
                setFile(null);
                setError('please Enter a valid file');
            }
    }


    return (
        <div>
           {/* <Box sx={{ '& > :not(style)': { m: 2 } }}>
            <Fab color="secondary" aria-label="add" >
               <h1>+</h1>
            </Fab>
           </Box>  */}
           <form>
               <input type='file' onChange={handleChange}/>
               <div className='output'>
                    { error && <div className='error'>{ error }</div> }

               </div>
           </form>
        </div>
    )
}

export default UploadForm
