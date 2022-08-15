const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

const checkValidation = ({ email, password }) => {
  const validEmail = emailRegex.test(email);
  const validPassword = passwordRegex.test(password);

  if (!validEmail || !validPassword) {
    return false;
  }

  return true;
};

export default checkValidation;
