const { signUpStart, signUpSuccess, signUpFailure, signInSuccess, signInFailure, signInStart } = require('../redux/user/userSlice');

/**
 * Handles both sign-up and sign-in processes based on the provided authentication type.
 * It validates the form data, dispatches the appropriate actions during the process,
 * sends a POST request to the server, and navigates the user upon success or failure.
 *
 * @param {Object} event - The event object from the form submission.
 * @param {Object} formData - The user's input data from the form.
 * @param {Function} dispatch - The Redux dispatch function to send actions.
 * @param {Function} navigate - The navigation function to redirect the user.
 * @param {String} authType - The type of authentication process ('signup' or 'signin').
 */

const handleAuth = async (event, formData, dispatch, navigate, authType) => {
  event.preventDefault();

  // Determine the action type and set the corresponding API endpoint and actions
  const isSignUp = authType === 'signup';
  const apiEndpoint = `/api/auth/${authType}`;
  const startAction = isSignUp ? signUpStart() : signInStart();
  const successAction = isSignUp ? signUpSuccess : signInSuccess;
  const failureAction = isSignUp ? signUpFailure : signInFailure;

  // Check for required form fields
  if (isSignUp && (!formData.username || !formData.email || !formData.password)) {
    return dispatch(failureAction('Please fill out all fields'));
  }
  if (!isSignUp && (!formData.email || !formData.password)) {
    return dispatch(failureAction('Please fill out all fields'));
  }

  try {
    dispatch(startAction);
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (data.success === false) {
      dispatch(failureAction(data.message));
    } else if (res.ok) {
      dispatch(successAction(data));
      navigate(isSignUp ? '/sign-in' : '/');
    }
  } catch (error) {
    dispatch(failureAction(error.message));
  }
};

export default handleAuth;
