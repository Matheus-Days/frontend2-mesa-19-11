const submitBtn = document.querySelector("button");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
const resultDiv = document.querySelector("div");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const response = await fetch("https://reqres.in/api/login", {
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    }),
    method: "POST"
  });

  const resJSON = await response.json();

  response.status == 200 ?
    resultDiv.innerText = "Login feito com sucesso" :
    resultDiv.innerText = resJSON.error;

  console.log(resJSON);

})
