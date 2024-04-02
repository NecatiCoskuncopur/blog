/**
 * Asynchronously handles the sign-out process.
 * Dispatches the signoutSuccess action upon successful sign-out,
 * and navigates to the sign-in page if a navigate function is provided.
 * If the sign-out request fails, it logs the error message.
 *
 * @param {Function} dispatch - The dispatch function from the Redux store.
 * @param {Function} signoutSuccess - The action to dispatch on sign-out success.
 * @param {Function|null} navigate - The navigation function to redirect to the sign-in page (optional).
 */

const handleSignout = async (dispatch, signoutSuccess, navigate = null) => {
  try {
    const res = await fetch('/api/auth/signout', {
      method: 'POST',
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(data.message);
    } else {
      dispatch(signoutSuccess());
      if (navigate) {
        navigate('/sign-in');
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default handleSignout;
