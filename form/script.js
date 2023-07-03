function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const date = document.getElementById("date").value;
    const color = document.getElementById("color").value;

    // Reset previous error messages
    const errorElements = document.getElementsByClassName("error");
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }

    // Validate name (non-empty)
    if (name === "") {
      document.getElementById("name-error").textContent = "Name is required";
    }

    // Validate email (non-empty and valid format)
    if (email === "") {
      document.getElementById("email-error").textContent = "Email is required";
    } else if (!validateEmail(email)) {
      document.getElementById("email-error").textContent = "Invalid email format";
    }

    // Validate phone number (non-empty and valid format)
    if (phone === "") {
      document.getElementById("phone-error").textContent = "Phone number is required";
    } else if (!validatePhoneNumber(phone)) {
      document.getElementById("phone-error").textContent = "Invalid phone number format";
    }

    // Validate password (minimum length of 6 characters)
    if (password.length < 6) {
      document.getElementById("password-error").textContent = "Password should be at least 6 characters long";
    }

    // Validate age (non-empty and numeric)
    if (age === "") {
      document.getElementById("age-error").textContent = "Age is required";
    } else if (isNaN(age)) {
      document.getElementById("age-error").textContent = "Age should be a number";
    }

    // Validate gender (non-empty)
    if (gender === "") {
      document.getElementById("gender-error").textContent = "Gender is required";
    }

    // Validate date (non-empty)
    if (date === "") {
      document.getElementById("date-error").textContent = "Date is required";
    }

    // Validate color (non-empty)
    if (color === "") {
      document.getElementById("color-error").textContent = "Color is required";
    }

    // If all validations pass, submit the form
    if (name !== "" && email !== "" && validateEmail(email) && phone !== "" && validatePhoneNumber(phone) &&
        password.length >= 6 && age !== "" && !isNaN(age) && gender !== "" && date !== "" && color !== "") {
      document.getElementById("registration-form").submit();
    }
  }

  // Helper function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Helper function to validate phone number format
  function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }