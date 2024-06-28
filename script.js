document.getElementById('akanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const gender = document.getElementById('gender').value;

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const akanNames = {
        male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
        female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afia", "Ama"]
    };

    const dayOfWeek = birthdate.getDay();
    const akanName = akanNames[gender][dayOfWeek];

    document.getElementById('result').textContent = `Your Akan name is ${akanName}. You were born on a ${daysOfWeek[dayOfWeek]}.`;
});

document.getElementById('scrollToForm').addEventListener('click', function() {
    document.getElementById('akanForm').scrollIntoView({ behavior: 'smooth' });
});
