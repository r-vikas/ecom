import React from 'react';
import '../form-input/form-input.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import '../../components/custom-button/custom-button.component'
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })

    }
   


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I have an account</h2>
                <span>so i will sign in</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' value={this.state.email} required handleChange={this.handleChange} />
                    
                    <FormInput name='password' type='password' label='Password' value={this.state.password} required handleChange={this.handleChange} /> 
                   <div className='buttons'>
                    <CustomButton type='submit' > Sign In</CustomButton>
                    <CustomButton  onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;