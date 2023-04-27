import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../scss/SignIn.scss"

const auth = getAuth();


function SignInPage()
{
    function googleSignIn()
    {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return <div>
        <button onClick={googleSignIn} className="sign-in-button title-font">Sign In</button>
    </div>
}

export default SignInPage