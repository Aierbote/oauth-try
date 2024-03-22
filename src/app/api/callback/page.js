import Profile from "@/app/profile/page";


export default async function Callback(request, response) {
  console.log({ request, response });

  const code = request.searchParams.code;
  let access_token = null;

  // DEBUG :
  console.log("code", code);
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    const data = await response.json();
    console.log(data);
    access_token = data.access_token
  } catch (error) {
    console.error('Error:', error);
  }
  finally {
    return <Profile access_token={access_token} />;

  }

}
