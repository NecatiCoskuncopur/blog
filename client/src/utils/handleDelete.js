/**
 * The `handleDelete` asynchronous function is utilized for sending a DELETE request to a specified API endpoint to remove an item.
 * @param {string} idToDelete - The unique identifier of the item to be deleted.
 * @param {Function} setId - The state updater function used to remove the item from the local state.
 * @param {string} idType - The type of the item being deleted (e.g., 'comment', 'post').
 * @param {string} endpoint - The API endpoint that handles the deletion.
 * @param {Function} setShowModal - The function to hide the modal after deletion.
 * @param {string} [additionalParams=''] - Optional additional parameters for the API request.
 * If the API response is successful, the item is filtered out from the current state array.
 * If the response is not successful, the error message is logged to the console.
 */

const handleDelete = async (idToDelete, setId, idType, endpoint, setShowModal, additionalParams = '') => {
  try {
    const res = await fetch(`/api/${endpoint}/${idToDelete}/${additionalParams}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (res.ok) {
      setId((prev) => prev.filter((item) => item._id !== idToDelete));
      setShowModal(false);
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default handleDelete;
