export const loginApi = ({
  username,
  password
}: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "anhben" && password === "1516239022") {
        resolve({
          data: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuaGJlbiIsIm5hbWUiOiJBbmggQmVuIiwicGFzc3dvcmQiOjE1MTYyMzkwMjJ9.Dd2LKF1hA7HScFiyYVtu4DQPm0zzJY2PBYtrner33Bc"
          },
          message: "Login successful"
        })
      } else {
        reject(new Error("Login failed"))
      }
    }, 100)
  })
