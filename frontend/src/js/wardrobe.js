document.addEventListener('DOMContentLoaded', function () {
    const logoText = document.querySelector('.logo_text');
    const logo = document.querySelector('.logo');
    const navList = document.querySelector('.nav-list');
    const navIconsContainer = document.querySelector('.nav-icons');

    navIconsContainer.style.display = 'none';

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            logoText.style.opacity = '0';
            logo.style.opacity = '1';
            navList.style.display = 'none'; 
            navIconsContainer.style.display = 'flex';
        } else {
            logoText.style.opacity = '1';
            logo.style.opacity = '0';
            navList.style.display = 'flex'; 
            navIconsContainer.style.display = 'none'; 
        }
    });
});

// let wardrobe = [];

// function addItem() {
//     const itemName = document.getElementById("item-name").value;
//     if (itemName.trim() === "") {
//         alert("Please enter an item name.");
//         return;
//     }
//     wardrobe.push(itemName);
//     document.getElementById("item-name").value = "";
//     displayItems();
// }

// function removeItem(index) {
//     wardrobe.splice(index, 1);
//     displayItems();
// }

// function displayItems() {
//     const itemList = document.getElementById("item-list");
//     itemList.innerHTML = "";
//     wardrobe.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <img src="placeholder.png" alt="Item Image">
//             <span>${item}</span>
//             <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
//         `;
//         itemList.appendChild(li);
//     });
//     document.getElementById("total-items").textContent = wardrobe.length;
//}
