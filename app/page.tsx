'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, SignIn, User } from "./api";

const SignInLogic = () => {
  const router = useRouter();
  const [signedIn] = useState<boolean>(false)
  const [signUp, setSignUp] = useState<boolean>(false)
  const [signupInfo, setSignupInfo] = useState<User>({id: "1"})
  const [signInInfo, setSignInInfo] = useState<SignIn>({ username: "", password: "" })
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")

  const onSubmit = () => {
    setSignupInfo({ ...signupInfo, signIn: signInInfo })
    api.signup(signupInfo)
  }

  return (
    signedIn ? router.push('/home') :
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="w-full max-w-xs">
          {signUp &&
            <>
              <label>
                <input type="text" onChange={(event) => { setSignupInfo({ ...signupInfo, firstName: event.target.value }) }} />
                First Name
              </label>
              <label>
                <input type="text" onChange={(event) => { setSignupInfo({ ...signupInfo, lastName: event.target.value }) }} />
                Last Name
              </label>
              <label>
                <input type="email" onChange={(event) => { setSignupInfo({ ...signupInfo, email: event.target.value }) }} />
                Email
              </label>
            </>
          }
          <label>
            <input type="text" onChange={(event) => { setSignInInfo({ ...signInInfo, username: event.target.value }) }} />
            Username
          </label>     <label>
            <input type="password" onChange={(event) => { setSignInInfo({ ...signInInfo, password: event.target.value }) }} />
            Password
          </label>
          {signUp &&
            <label>
              <input type="text" onChange={(event) => { setPasswordConfirmation(event.target.value) }} />
              Confirm Password
            </label>
          }
          <label>
            <input type="checkbox" onClick={() => setSignUp(!signUp)} />
            New User?
          </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button" disabled={passwordConfirmation !== signInInfo.password} onClick={onSubmit}>
            Sign In
          </button>
        </div>
      </form>

  );
}
export default SignInLogic
