/**
 * The asynchronous `showMoreHandle` function is used to load data from a specific API endpoint.
 * @param {string} dataType - The key name of the data being retrieved. For example: 'comments', 'posts'.
 * @param {Function} setData - The state setting function to update with new data.
 * @param {number} dataLength - The length of the current data list.
 * @param {string} endpoint - The address of the endpoint to call the API.
 * @param {string} [additionalParams=''] - Optional additional parameters to be appended.
 * If data is successfully retrieved from the API, it is appended to the existing data.
 * If the number of data items retrieved is less than expected (e.g., less than 9), the 'show more' button is hidden.
 */

const showMoreHandle = async (dataType, setData, dataLength, endpoint, setShowMore, additionalParams = '') => {
  const startIndex = dataLength;
  try {
    const res = await fetch(`/api/${endpoint}?startIndex=${startIndex}${additionalParams}`);
    const data = await res.json();
    if (res.ok) {
      setData((prev) => [...prev, ...data[dataType]]);
      if (data[dataType].length < 9) {
        setShowMore(false);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default showMoreHandle;
