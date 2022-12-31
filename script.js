const inputs = document.querySelectorAll("input");

const inputValues = {
  firsName: false,
  lastName: false,
  emailAddress: false,
  password: false,
};

const regExp = {
  firsName:
    /^([A-ZÁÉÍÓÚ]{1}[a-záéíóú]{1,8})(\s?([A-ZÁÉÍÓÚ]{1}[a-záéíóú]{2,8})){0,2}\S$/,
  lastName:
    /^([A-ZÁÉÍÓÚ]{1}[a-záéíóú]{2,8})(\s?([A-ZÁÉÍÓÚ]{1}[a-záéíóú]{2,8})){0,2}\S$/,
  emailAddress: /\w{4,}@(gmail|hotmail|outlook|yahoo|icloud)\.com$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/,
};

validateInput = (input) => {
  let imgError = input.parentNode.querySelector("img");
  let messageError = input.closest(".input__cotainer").querySelector("p");

  if (!regExp[input.id].test(input.value)) {
    input.style.color = "var(--Red)";
    input.placeholder = "";
    input.parentNode.classList.remove("correct__input");
    input.parentNode.classList.add("wrong__input");
    imgError.classList.add("show__error");
    messageError.classList.add("show__message");
    inputValues[input.id] = false;
    return;
  }

  input.style.color = "var(--Green)";
  input.parentNode.classList.replace("wrong__input", "correct__input");
  imgError.classList.remove("show__error");
  messageError.classList.remove("show__message");
  inputValues[input.id] = true;
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => validateInput(e.target));
  input.addEventListener("blur", (e) => validateInput(e.target));
});

/* ----- ALERT ----- */

const black = document.querySelector(".black");
const alert = document.querySelector(".alert");

document.querySelector("button").addEventListener("click", () => {
  if (
    inputValues.firsName &&
    inputValues.lastName &&
    inputValues.emailAddress &&
    inputValues.password
  ) {
    Swal.fire({
      title: "Success!",
      text: "",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      allowOutsideClick: false,
    });
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
});
