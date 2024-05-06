const SignApi = () => {
  return fetch("http://sandipbgt.com/theastrologer/api/sunsigns/").then(
    (response) => response.json()
  );
};

export default SignApi;
