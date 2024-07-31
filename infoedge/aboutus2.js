const profiles = [
    {
        name: "Profile 1",
        image: "profile1.jpg",
        info: "Information about Profile 1"
    },
    {
        name: "Profile 2",
        image: "profile2.jpg",
        info: "Information about Profile 2"
    },
    {
        name: "Profile 3",
        image: "profile3.jpg",
        info: "Information about Profile 3"
    }
];

let currentProfile = 0;

function showProfile(index) {
    currentProfile = index;
    const profileDetails = document.getElementById('profile-details');
    const profileInfo = document.getElementById('profile-info');
    profileInfo.innerHTML = `
        <h2>${profiles[index].name}</h2>
        <p>${profiles[index].info}</p>
    `;
    profileDetails.style.display = 'block';
}

function nextProfile() {
    currentProfile = (currentProfile + 1) % profiles.length;
    showProfile(currentProfile);
}