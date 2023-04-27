import "../scss/UserHeader.scss"

function HasUser()
{
    return <div className="user-header">
        
    </div>
}

function UserHeader({user})
{       
    return user? <HasUser user={user}/>:<></>
}

export default UserHeader