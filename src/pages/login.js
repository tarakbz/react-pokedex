import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';

const Login = () => {

    const history = useHistory();

    const [form, setForm] = useState({
        username: {value: ''},
        password: {value: ''},
    });

    const [message, setMessage] = useState('You are logged out. (advil / advil)');

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = {[fieldName]: {value: fieldValue}};

        setForm({...form, ...newField});
    }

    const validateForm = () => {
        let newForm = form;

        // Validator username
        if (form.username.value.length < 3) {
            const errorMsg = 'Your user name must be at least 3 characters long.';
            const newField = {value: form.username.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{username: newField}};
        } else {
            const newField = {value: form.username.value, error: '', isValid: true};
            newForm = {...newForm, ...{username: newField}};
        }

        // Validator password
        if (form.password.value.length < 5) {
            const errorMsg = 'Your password must be at least 5 characters long.';
            const newField = {value: form.password.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{password: newField}};
        } else {
            const newField = {value: form.password.value, error: '', isValid: true};
            newForm = {...newForm, ...{password: newField}};
        }

        setForm(newForm);

        return newForm.username.isValid && newForm.password.isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            setMessage('👉 Connection attempt in progress...');
            AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
                if (!isAuthenticated) {
                    setMessage('🔐 Incorrect username or password.');
                    return;
                }
                history.push('/pokemons');
            });
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {message &&
            <div>
                {message}
            </div>
            }
            <input
                type="text"
                name="username"
                value={form.username.value}
                onChange={e => handleInputChange(e)}
            />
            {/* error */}
            {form.username.error &&
            <div>
                {form.username.error}
            </div>
            }

            <input
                type="password"
                name="password"
                value={form.password.value}
                onChange={e => handleInputChange(e)}
            />
            {/* error */}
            {form.password.error &&
            <div>
                {form.password.error}
            </div>}
            {/* Submit button */}
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
