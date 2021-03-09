import { Button, InputLabel, TextField } from '@material-ui/core'
import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

export const LoginScreen = ({ history }) => {

    const dispatch = useDispatch();

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleLoginRouter = (e)=>{
        e.preventDefault();
        console.log(values.email, values.password);
        dispatch(login(values.email, values.password ));
        history.replace('/home');
    };

    return (
        <Container maxWidth="sm" className="container center">
                <Typography variant="h4" >
                    Bitboxer2 App
                </Typography>
                <form>
                    <div className="formItem">
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                value={values.email}
                                onChange={handleChange('email')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <AccountCircle />
                                </InputAdornment>
                                }
                            labelWidth={40}
                            />
                        </FormControl>
                    </div>
                    <div className="formItem">
                        <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseDownPassword}
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                        </FormControl>
                    </div>

                    <Button variant="contained" color="primary" onClick={handleLoginRouter}>Login</Button>
                </form>
        </Container>
    )
}
