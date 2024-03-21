"use client";


export const LoginScreen = () => {

  function loginToGitHub() {
    const clientID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET;
    const scope = "user:email";
    // NOTE : it's best to use `encodeURIComponent` if I want to use it inside of URL query parameters, for a full URL without query parameters `encodeURI` should suffice
    const redirectUri = encodeURIComponent("http://localhost:3000/api/callback");





    console.log('clientID: ', clientID);
    console.log('clientSecret: ', clientSecret);

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=${scope}&redirect_uri=${redirectUri}`;
  }

  return (
    <>
      <h1>
        Welcome to <em>OAuth Try</em>
      </h1>

      <button onClick={loginToGitHub} >Login on GitHub</button >
    </>
  )
}