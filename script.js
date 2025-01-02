const inputField = document.querySelector("input");
const addItemButton = document.querySelector("button");
const itemList = document.querySelector("ul");

addItemButton.addEventListener("click", () => {
    currentInputValue = inputField.value;
    if (currentInputValue.length > 24) {
        currentInputValue = currentInputValue.substring(0, 24) + "...";
    }

    if (currentInputValue == "") {
        inputField.placeholder = "Please enter the item...";
        return;
    } else {
        inputField.placeholder = "";
    }

    inputField.value = "";

    const listItem = document.createElement("li");
    const spanElement = document.createElement("span");
    const itemButton = document.createElement("button");
    listItem.appendChild(spanElement);
    listItem.appendChild(itemButton);
    spanElement.textContent = currentInputValue;
    itemButton.textContent = "Delete";
    itemList.append(listItem);

    itemButton.addEventListener("click", () => {
        itemList.removeChild(listItem);
    });

    inputField.focus();
});