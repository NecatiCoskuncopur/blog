import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'components';
import { handleAuth } from 'utils';

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate('/');
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  };

  const handleSubmit = (event) => {
    handleAuth(event, formData, dispatch, navigate, 'signup');
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

export default SignUp;
