import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form } from 'components';
import { handleAuth } from 'utils';

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate('/');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  };

  const handleSubmit = (event) => {
    handleAuth(event, formData, dispatch, navigate, 'signin');
  };

  return (
    <section className="min-h-screen mt-20">
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        loading={loading}
        errorMessage={errorMessage}
      />
    </section>
  );
};

export default SignIn;
