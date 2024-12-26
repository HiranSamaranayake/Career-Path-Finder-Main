function showDetails() {
    const degree = document.getElementById("degree").value;
    const details = document.querySelectorAll(".degree-details");
    
    // Hide all degree details
    details.forEach(detail => {
        detail.style.display = "none";
    });

    // Show the selected degree's details
    if (degree) {
        const selectedDetail = document.getElementById(degree);
        if (selectedDetail) {
            selectedDetail.style.display = "block";
        }
    }
}
