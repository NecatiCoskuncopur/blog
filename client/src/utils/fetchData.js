/**
 * The `fetchData` asynchronous function is used to retrieve data from a specific API endpoint.
 * @param {string} endpoint - The endpoint from which to fetch data, structured as 'type/action'.
 * @param {Function} setData - The state setter function to update the state with the fetched data.
 * @param {Function} setShowMore - The function to control the visibility of the 'show more' button.
 * @param {string} [additionalParams=''] - Optional string of additional parameters to append to the endpoint.
 *
 * The function constructs the type of data being fetched based on the first segment of the endpoint.
 * If the response is successful, the state is updated with the new data.
 * If the fetched data array has fewer than 9 items, the 'show more' button is hidden.
 */

const fetchData = async (endpoint, setData, setShowMore = false, additionalParams = '') => {
  try {
    const res = await fetch(`/api/${endpoint}${additionalParams}`);
    const data = await res.json();
    const type = endpoint.split('/')[0] + 's';
    const dash = window.location.search.split('=')[1] === 'dash';

    if (res.ok) {
      setData(dash ? data : data[type]);
      if (setShowMore && data[type].length < 9) {
        setShowMore(false);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchData;
