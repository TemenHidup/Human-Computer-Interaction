function validateForm(event) {
  event.preventDefault();

  const getValue = id => document.getElementById(id).value;
  const setError = (id, message) => (document.getElementById(id).textContent = message);

  const fields = [
    { id: 'fullName', value: getValue('fullName'), errorId: 'fullNameError', regex: /^[a-zA-Z\s]+$/, errorMessage: 'Your name is not valid' },
    { id: 'email', value: getValue('email'), errorId: 'emailError', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMessage: 'Your email is not valid' },
    { id: 'password', value: getValue('password'), errorId: 'passwordError', regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, errorMessage: 'Your password must be at least 8 characters with atleast 1 number and 1 letter' },
    { id: 'confirmPassword', value: getValue('confirmPassword'), errorId: 'confirmPasswordError', regex: new RegExp(`^${getValue('password')}$`), errorMessage: 'Your password is not the same as above' },
    { id: 'physicalAddress', value: getValue('physicalAddress'), errorId: 'physicalAddressError', regex: /\S/, errorMessage: 'Please fill in your address' },
    { id: 'gender', value: getValue('gender'), errorId: 'genderError', regex: /\S/, errorMessage: 'Please choose the gender' },
    { id: 'agreement', value: document.getElementById('agreement').checked, errorId: 'agreementError', regex: value => value, errorMessage: 'You must agree to the terms and conditions with receiving daily newsletters by checking a box' },
  ];

  fields.forEach(field => {
    setError(field.errorId, field.regex.test(field.value) ? '' : field.errorMessage);
  });

  const isValid = fields.every(field => field.regex.test(field.value));

  if (isValid) {
    alert('Registration successful!');
  }
}