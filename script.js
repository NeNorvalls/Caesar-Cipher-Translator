function caesarCipher(str, shift) {
  shift = shift % 26;
  return str.replace(/[a-zA-Z]/g, (c) => {
    const base = c >= "a" ? 97 : 65;
    return String.fromCharCode(
      ((c.charCodeAt(0) - base + shift + 26) % 26) + base
    );
  });
}

function translateText() {
  const plaintext = document.getElementById("plaintext").value;
  const shift = parseInt(document.getElementById("shift").value) || 0;
  document.getElementById("output").textContent = caesarCipher(
    plaintext,
    shift
  );
}
