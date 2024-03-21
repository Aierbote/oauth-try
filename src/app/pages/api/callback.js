

export default function Callback(req, res) {
  const code = req.query.code;
  const redirectUri = encodeURIComponent("http://localhost:3000/profile");
  console.log("code", code);

  fetch('POST https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error('Error:', error);
    });

  // res.redirect("http://localhost:3000/profile", 301);
}


