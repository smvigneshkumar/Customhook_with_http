const useHttp = () => {
  const sendRequest = async (requestDetails, applyData) => {
    const res = await fetch(
      "https://react-http-request-6538b-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
      {
        method: requestDetails.method ? requestDetails.method : "GET",
        headers: requestDetails.headers ? requestDetails.headers : {},
        body: requestDetails.body ? JSON.stringify(requestDetails.body) : null
      }
    );
    const data = await res.json();
    applyData(data);
  };
  return sendRequest;
};
export default useHttp;
