const getUsers = async () => {
  const resp = await fetch("https://randomuser.me/api/?results=5");
  const respJson = await resp.json();
  return respJson.results;
};

const randomusers = (usersArr) => {
  // usersBox.classList.add("usersListSection");

  const list = document.getElementById("usersListSection");
  usersArr.forEach((user) => {
    //  CREATING ELEMENTS

    const usersBox = document.createElement("div");
    const name = document.createElement("h1");
    const userImage = document.createElement("img");
    const userEmail = document.createElement("h1");
    const userContact = document.createElement("p");
    const copyButton = document.createElement("button");
    const buttonText = document.createElement("h2");
    //Pushing values from Api --
    //Name
    name.textContent = user.name.first;
    userEmail.textContent = user.email;
    userContact.textContent = user.cell;
    buttonText.textContent = "Copy";
    //  usersbox css
    usersBox.classList.add("userty"); // Add class "user-Image"
    //usersBox.style.flexDirection = "column"; // Apply flex direction
    // Name css

    //css image
    userImage.classList.add("userImage2");
    userImage.src = user.picture.thumbnail;
    copyButton.classList.add("copyButton");
    userContact.classList.add("userContact");
    // APPENDING CSS

    usersBox.append(userImage);
    usersBox.append(name);
    usersBox.append(userEmail);
    usersBox.append(userContact);
    copyButton.append(buttonText);
    usersBox.append(copyButton);

    list.appendChild(usersBox);

    copyButton.addEventListener("click", function () {
      const textToCopy = `${name.textContent}\n${userEmail.textContent}\n${userContact.textContent}`;

      if (true) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            console.log("Text copied to clipboard successfully");
            buttonText.textContent = "COPIED";
          })
          .catch((error) => {
            console.error("Failed to copy text to clipboard:", error);
          });
      }
    });
  });
};

const reload = document.querySelector(".reload");
reload.addEventListener("click", function () {
  location.reload(); // Reload the page
  randomusers(users);
});

const main = async () => {
  const users = await getUsers();
  console.log(users);
  randomusers(users);
};

main();
