import $ from "jquery";

class MobileMenu {
	
	constructor () {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	//this in toggleTheMenu refers to toggleTheMenu - But when this method is called in events() - 
	//this refers to events() - to stop this behaviour, we use bind(this)

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}

}

export default MobileMenu;