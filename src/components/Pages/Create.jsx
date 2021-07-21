import React, { useState } from 'react'
import { Typography, Container, Button, makeStyles, TextField, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    field: {
        margin: '20px 0px',
        display: 'block'
    }
});

const Create = () => {
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('money');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false);
        setDetailsError(false);

        if(title === '') {
            setTitleError(true);
        }

        if(details === '') {
            setDetailsError(true)
        }

        if(title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({ title, details, category })
            }).then(() => history.push('/'));
        }
    }

    

    return (
        <Container size='sm'>
            <Typography
                variant='h4'
                color='textSecondary'
                gutterBottom
            >
                Create a New Note.
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField className={classes.field}
                    onChange={(e) => setTitle(e.target.value)}
                    id="outlined-basic"
                    label='Note Title'
                    type='text'
                    variant='outlined'
                    color="secondary"
                    fullWidth
                    error={titleError}
                    required
                />

                <TextField className={classes.field}
                    onChange={(e) => setDetails(e.target.value)}
                    id="outlined-basic"
                    label='Details'
                    type='text'
                    variant='outlined'
                    color="secondary"
                    multiline 
                    rows={10}
                    fullWidth
                    error={detailsError}
                    required
                />

                <FormControl component='fieldset' className={classes.field}>
                    <FormLabel component='legend'>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value='money' control={< Radio/>} label='Money'/>
                        <FormControlLabel value='todos' control={< Radio/>} label='Todos'/>
                        <FormControlLabel value='reminders' control={< Radio/>} label='Reminders'/>
                        <FormControlLabel value='work' control={< Radio/>} label='Work'/>
                    </RadioGroup>
                </FormControl>
            
                <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    endIcon={<ArrowForwardIosIcon />}
                >
                    Submit
                </Button>
            </form>


        </Container>
    )
}

export default Create
