import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Form() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <FormControlLabel name='' value="female" control={<Radio />} label="Female" />
                <FormControlLabel name='' value="male" control={<Radio />} label="Male" />
            </div>
            <div>
                <TextField
                    id="outlined-required"
                    label="First Name"
                />
                <TextField
                    id="outlined-required-input"
                    label="Last Name"
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="Email"
                    autoComplete="current-password"
                />

                <TextField
                    id="outlined-required-input"
                    label="Contact"
                />
                <TextField
                    id="outlined-select-currency"
                    label="Department"
                    defaultValue="Mechanical"
                />

                <TextField hide id="" label="" type="" />
                <TextField
                    id="outlined-required"
                    label="Username"
                />
                <TextField
                    id="outlined-required-input"
                    label="Password"
                />
            </div>
            <div>
            </div>
        </Box>
    );
}
export default Form;