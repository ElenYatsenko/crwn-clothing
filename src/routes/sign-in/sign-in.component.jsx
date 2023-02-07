import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/farebase/feribase.utils.js";
import SingUpForm from "../../components/sing-up-form/sing-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
      <SingUpForm />
    </div>
  );
};

export default SignIn;
