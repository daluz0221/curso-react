import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import {  startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth'
import { useMemo } from 'react'

const formData = {
  email: '',
  password: ''
}


export const LoginPage = () => {


  const { status, errorMessage } = useSelector( state => state.auth )

  const {email, password, onInputChange} = useForm(formData);

  const isAuthenticated = useMemo( ()=> status === 'checking', [status] )

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();


    dispatch( startLoginWithEmailAndPassword({email, password}) );
  }

  const onGoogleSignIn = () => {
    console.log('on google inicio');
    dispatch( startGoogleSignIn() );
  }


  return (
   <AuthLayout title={"Login"}>
       <form onSubmit={ onSubmit } aria-label="submitForm" className='animate__animated animate__fadeIn animate__faster'>

          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com" 
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
                name='password'
                inputProps={{
                  'data-testid': 'password'
                }}
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid container>
            <Grid item xs={ 12 } display={ !!errorMessage ? '': 'none' }>
                <Alert severity='error' >
                    {errorMessage}
                </Alert>
              </Grid>
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 } sm={ 6 } >
                <Button type='submit' variant="contained" fullWidth disabled={ isAuthenticated } >
                  Login
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 } >
                <Button onClick={onGoogleSignIn} variant="contained" fullWidth disabled={ isAuthenticated } aria-label="google-btn" >
                  <Google />
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>

            </Grid>
          <Grid container direction="row" justifyContent={"end"} >
            <Link component={ RouterLink } color={"inherit"} to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

          </Grid>

      </form>
   </AuthLayout>
       
     
  )
}
