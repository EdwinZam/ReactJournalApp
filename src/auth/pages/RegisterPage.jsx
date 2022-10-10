import React from 'react'
import { useState } from 'react'
import {Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCretingUserWithEmailPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'


const formData ={
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value)=> value.includes('@'), 'El correo debe tener un @'],
  password:[ (value)=> value.length >= 6, 'El password debe de tener mas de 6 letras' ],
  displayName:[ (value)=> value.length >= 1, 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( ()=> status === 'checking', [status] );

  const { displayName, email, password, onInputChange, formState,
          displayNameValid, emailValid, passwordValid, isFormValid
  } = useForm(formData, formValidations );

  const [formSubmitted, setFormSubmitted] = useState(false);
 // console.log(displayNameValid);

  
const onSubmit= (event) =>{
    event.preventDefault();
    setFormSubmitted(true);

  if(!isFormValid)return;
  dispatch(startCretingUserWithEmailPassword(formState));
  }

  return (
   <AuthLayout title='Crear'>
  
    <form onSubmit={ onSubmit } className='animate_animated animate_fadeIn animate_faster'>
          <Grid container>
            <Grid item xs={12} sx ={{mt: 2}}>
              <TextField label="Name" 
              type="text" 
              placeholder='Your Name'
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmitted }
              helperText={displayNameValid}
              />

            </Grid>

            <Grid item xs={12} sx ={{mt: 2}}>
              <TextField label="Email" 
              type="email" 
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted }
              helperText={emailValid}
              />

            </Grid>

            <Grid item xs={12} sx ={{mt: 2}}>
              <TextField label="Password" 
              type="password" 
              placeholder='Your Password'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted }
              helperText={passwordValid}
              />

            </Grid>
            <Grid container spacing={ 2 } sx ={{ mb: 2, mt:1 }}>
            <Grid 
              item
              xs={12}
              display={!!errorMessage ? '': 'none'}
              >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
              
              <Grid item xs={12} >
                <Button
                  disabled = {isCheckingAuthentication}
                  type="submit" 
                  variant='contained'
                  fullWidth
                >
                  Create
                </Button>
              </Grid>
              
            </Grid>
          
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>do you have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Get Into
            </Link>
          </Grid>
          

          </Grid>
    </form>
   </AuthLayout>
  )
}
