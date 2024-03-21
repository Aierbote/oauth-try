"use client";

async function getData() {
  const clientID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET;


  const res = await fetch(`https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientID}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientID,
      redirect_uri: "http://localhost:3000/callback",
      client_secret: clientSecret,
      code: "code",
    }),

  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const LoginScreen = () => {

  return (
    <>
      <h1>
        Welcome to <em>OAuth Try</em>
      </h1>

      <button onClick={getData} >Login on GitHub</button >
    </>
  )
}