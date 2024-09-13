let toggled = false; // Flag to check if the function has been run before

function display_menu() {
	var bodyChildren = document.body.children;

	if (!toggled) {
		// Hide all elements except for 'nav'
		for (var i = 0; i < bodyChildren.length; i++) {
			if (bodyChildren[i].tagName.toLowerCase() !== "nav") {
				bodyChildren[i].style.display = "none";
			}
		}
		document.querySelector("nav > ul").style.display = "inherit";
		document.querySelectorAll("nav button").forEach((button) => {
			button.style.opacity = "0";
		});
		var navigationLinks = document.querySelectorAll("nav li");
		for (var i = 0; i < navigationLinks.length; i++) {
			navigationLinks[i].classList.add("visible");
		}
		document.body.style.backgroundColor = "#fde8d9";
	} else {
		// Restore all elements to their original display state
		for (var i = 0; i < bodyChildren.length; i++) {
			if (bodyChildren[i].tagName.toLowerCase() !== "nav") {
				bodyChildren[i].style.display = "";
			}
		}
		document.querySelector("nav > ul").style.display = "";
		document.querySelectorAll("nav button").forEach((button) => {
			button.style.opacity = "1";
		});
		var navigationLinks = document.querySelectorAll("nav li");
		for (var i = 0; i < navigationLinks.length; i++) {
			navigationLinks[i].classList.remove("visible");
		}
		document.body.style.backgroundColor = "";
	}

	toggled = !toggled; // Toggle the flag
}
