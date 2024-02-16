import { UseDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"

function LogoutBtn() {
     const dispatch = UseDispatch()
     const logoutHandler = () => {
         authService.logout().then(() => {
            dispatch(logout())
         })
         
     }

  return (

    <button className="inline-block px-6 py-6 duration-200 hover:bg-blue-100 rounded-full ">Logout</button>
  )
}

export default LogoutBtn