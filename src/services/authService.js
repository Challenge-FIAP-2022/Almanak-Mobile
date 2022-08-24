async function signIn(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "123456") {
        resolve({
          token: "fake-token",
          email,
          name: "Danilo Zequim",
        });
      } else {
        reject(new Error("Credenciais inválidas"));
      }
    }, 500);
  });
}

export const authService = { signIn };
