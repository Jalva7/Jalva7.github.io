function openSkillsModal() {
    const modal = document.getElementById('skillsModal');
    modal.style.display = 'block';
    modal.classList.remove('closing'); // Remove closing class if it exists
}

function closeSkillsModal() {
    const modal = document.getElementById('skillsModal');
    modal.classList.add('closing'); // Add closing class to trigger animation

    // Hide the modal after animation completes
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('closing');
    }, 400); // 400ms matches the animation duration
}


window.onclick = function(event) {
    const modal = document.getElementById('skillsModal');
    if (event.target == modal) {
        closeSkillsModal();
    }
}
