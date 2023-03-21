const namaLengkap = document.querySelector(".namalengkap");
const alamatLengkap = document.querySelector(".alamatlengkap");
const nomorTelepon = document.querySelector(".nomortelepon");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const Button = document.querySelector(".btn");

Button.addEventListener("click", function () {
  const namaLengkapValue = namaLengkap.value;
  const alamatLengkapValue = alamatLengkap.value;
  const nomorTeleponValue = nomorTelepon.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(
    namaLengkapValue,
    alamatLengkapValue,
    nomorTeleponValue,
    emailValue,
    passwordValue
  );
});
