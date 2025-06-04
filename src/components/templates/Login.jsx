import React , {useReducer} from 'react'
import { useMutation } from '@tanstack/react-query';

import api from '../../services/axiosConfing';


const initialState = {
  username: '',
  password: '',
  loading: false,
  error: null,
};

function reducer(state , action){
    switch(action.type){
      case 'SetUserName':
        return { ...state, username: action.payload };
      
      case 'SetPassword':
        return { ...state, password: action.payload }
      
      case 'SetLoading':
        return { ...state, loading: action.payload }
      
      case 'SetError' :
        return { ...state, error: action.payload }

      case ' ResetForm':
        return initialState;
    }
}



function Login({onSuccess}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleSubmit = async (e) => {
      e.preventDefault();

      console.log('Submitting login data:', {
        username: state.username,
        password: state.password,
      });

      if(!state.username || !state.password) {
        dispatch({type: 'SetError' , payload: 'لطفا همه فیلد هارو پر کنید'});
        return;
      }
      dispatch({ type: 'SetError', payload: null }); // پاک‌کردن ارور قبلی
      // dispatch({ type: 'SetLoading', payload: true });
      mutation.mutate({ username: state.username, password: state.password });



      // dispatch({ type: 'SetLoading', payload: false });
    }
  

    const mutation = useMutation({
      mutationFn: async (formData) => {
        const response = await api.post('/auth/login', formData);
        console.log('Server response:', response.data);
        return response.data;
      },      
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        onSuccess()
      },
      onError: (error) => {
        dispatch({type: 'SetError' , payload: 'نام کاربری یا رمز ورودی اشتباه است!'})
      }
    });
    
  
  return (
    <>
     <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="نام کاربری"
        value={state.username}
        onChange={(e) => dispatch ({type: 'SetUserName' , payload: e.target.value })}
      />
      <input
        type="password"
        placeholder="رمز عبور"
        value={state.password}
        onChange={(e) => dispatch ({type: 'SetPassword' , payload: e.target.value })}
      />
      <button type="submit">ورود</button>
     </form>
     
    </>
  )
}

export default Login