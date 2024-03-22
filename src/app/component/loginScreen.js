"use client";


export const LoginScreen = () => {

  function loginToGitHub() {
    const clientID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const scope = "user:email";

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=${scope}`;
  }

  return (
    <>
      <h1>
        Welcome to <em>OAuth Try</em>
      </h1>

      <button onClick={loginToGitHub} data-cy="test-login-click" >Login on GitHub</button >
    </>
  )
}