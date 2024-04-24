function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("signupForm").classList.toggle("hidden");
    document.getElementById("toggleText").innerHTML = document.getElementById("toggleText").innerHTML.includes("Sign Up") ? "Already have an account? <span onclick='toggleForm()'>Login</span>" : "Don't have an account? <span onclick='toggleForm()'>Sign Up</span>";
  }
  function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("signupForm").classList.toggle("hidden");
    document.getElementById("toggleText").innerHTML = document.getElementById("toggleText").innerHTML.includes("Sign Up") ? "Already have an account? <span onclick='toggleForm()'>Login</span>" : "Don't have an account? <span onclick='toggleForm()'>Sign Up</span>";
}

function signup(event) {
    event.preventDefault();
    const password = document.getElementById("passwordSignup").value;
    const confirmPassword = document.getElementById("confirmPasswordSignup").value;

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }
}