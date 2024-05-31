document.addEventListener("DOMContentLoaded", function() {
    const showFormBtn = document.getElementById("click");
    const formContainer = document.getElementById("formContainer");

    showFormBtn.addEventListener("click", function() {
        formContainer.style.display = "block";
        showFormBtn.style.display = "none";
    });
});

function submitForm() {
    const form = document.getElementById('myForm');
    const dob = new Date(form.dob.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const ageInput = form.age;

    if (age != ageInput.value) {
        alert("Age does not match the date of birth.");
        ageInput.classList.add('shake');
        setTimeout(() => {
            ageInput.classList.remove('shake');
        }, 500);
        return false;
    }

    let isValid = true;
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('shake');
            isValid = false;
            setTimeout(() => {
                input.classList.remove('shake');
            }, 500);
        }
    });

    if (!isValid) {
        form.classList.add('was-validated');
        return false;
    }

    const photo = form.photo.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const photoURL = e.target.result;

        const details = `
            <img src="${photoURL}" alt="Profile Photo">
            <p><strong>First Name:</strong> ${form.firstname.value}</p>
            <p><strong>Last Name:</strong> ${form.lastname.value}</p>
            <p><strong>Gender:</strong> ${form.gender.value}</p>
            <p><strong>Date of Birth:</strong> ${form.dob.value}</p>
            <p><strong>Age:</strong> ${form.age.value}</p>
            <p><strong>Designation:</strong> ${form.designation.value}</p>
            <p><strong>Highest Degree:</strong> ${form.degree.value}</p>
            <p><strong>Year of Passed Out:</strong> ${form.year.value}</p>
            <p><strong>College Name:</strong> ${form.college.value}</p>
            <p><strong>Address:</strong> ${form.address.value}</p>
            <p><strong>Email:</strong> ${form.email.value}</p>
            <p><strong>Phone Number:</strong> ${form.phone.value}</p>
        `;
        document.getElementById('details').innerHTML = details;
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('detailsContainer').style.display = 'block';
    };
    reader.readAsDataURL(photo);

    // Save form data to sessionStorage
    sessionStorage.setItem('firstname', form.firstname.value);
    sessionStorage.setItem('lastname', form.lastname.value);
    sessionStorage.setItem('gender', form.gender.value);
    sessionStorage.setItem('dob', form.dob.value);
    sessionStorage.setItem('age', form.age.value);
    sessionStorage.setItem('designation', form.designation.value);
    sessionStorage.setItem('degree', form.degree.value);
    sessionStorage.setItem('year', form.year.value);
    sessionStorage.setItem('college', form.college.value);
    sessionStorage.setItem('address', form.address.value);
    sessionStorage.setItem('email', form.email.value);
    sessionStorage.setItem('phone', form.phone.value);

    return false;
}

function editForm() {
    const form = document.getElementById('myForm');
    form.firstname.value = sessionStorage.getItem('firstname') || '';
    form.lastname.value = sessionStorage.getItem('lastname') || '';
    form.gender.value = sessionStorage.getItem('gender') || '';
    form.dob.value = sessionStorage.getItem('dob') || '';
    form.age.value = sessionStorage.getItem('age') || '';
    form.designation.value = sessionStorage.getItem('designation') || '';
    form.degree.value = sessionStorage.getItem('degree') || '';
    form.year.value = sessionStorage.getItem('year') || '';
    form.college.value = sessionStorage.getItem('college') || '';
    form.address.value = sessionStorage.getItem('address') || '';
    form.email.value = sessionStorage.getItem('email') || '';
    form.phone.value = sessionStorage.getItem('phone') || '';

    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('detailsContainer').style.display = 'none';
}
