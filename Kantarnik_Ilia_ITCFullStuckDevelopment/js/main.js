const GITHUB_URL = "https://api.github.com/users/KantIlia";

fetch(GITHUB_URL)
  .then(function(response) {
    console.log("fetch go");
    return response.json();
  })
  .then(function (data) {
    console.log("fetch come:", data);

    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");

    profileImage.src = data.avatar_url;
    profileName.textContent = data.name;
  });