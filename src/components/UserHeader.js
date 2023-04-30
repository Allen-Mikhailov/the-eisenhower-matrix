import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../scss/UserHeader.scss"


const auth = getAuth();

function HasUser({user})
{
    return <div className="user-header">
        <div onClick={() => auth.signOut()} className="sign-out-button sub1-font">Sign Out</div>
        <div className="user-display-name sub1-font">{user.displayName}</div>
    </div>
}

function NoUser()
{

    function googleSignIn()
    {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return <div className="user-header">
        <div onClick={googleSignIn} className="sign-in-button sub1-font">Sign In</div>
    </div>
}

function UserHeader({user})
{       
    return user? <HasUser user={user}/>:<NoUser/>
}

export default UserHeader