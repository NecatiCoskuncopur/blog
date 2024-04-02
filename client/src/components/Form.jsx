import { Link, useLocation } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

import OAuth from './OAuth';
import Logo from './Logo';

const Form = ({ onSubmit, onChange, loading, errorMessage }) => {
  const location = useLocation();
  const isSignUp = location.pathname === '/sign-up';

  return (
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
      <div className="flex-1">
        <Logo />
        <p className="text-sm mt-5">This is a demo project. You can {isSignUp ? 'sign up' : 'sign in'} with your email an password or with Google.</p>
      </div>
      <div className="flex-1">
        <form
          className="flex flex-col gap-4"
          onSubmit={onSubmit}
        >
          {isSignUp && (
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                autoComplete="new-password"
                onChange={onChange}
              />
            </div>
          )}
          <div>
            <Label value="Your email" />
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              autoComplete="new-password"
              onChange={onChange}
            />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
              autoComplete="new-password"
              onChange={onChange}
            />
          </div>
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" /> <span className="pl-3">Loading...</span>
              </>
            ) : isSignUp ? (
              'Sign Up'
            ) : (
              'Sign In'
            )}
          </Button>
          <OAuth />
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>{isSignUp ? 'Have an account?' : "Don't have an account?"}</span>
          <Link
            to={isSignUp ? '/sign-in' : '/sign-up'}
            className="text-blue-500"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </Link>
        </div>
        {errorMessage && (
          <Alert
            className="mt-5"
            color="failure"
          >
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Form;
