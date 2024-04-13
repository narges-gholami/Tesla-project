// Selecting elements

const megaMenus = document.querySelectorAll(".mega-menu");
const menuLabels = document.querySelectorAll(".header-item");
const headerTop = document.querySelector(".header__top");
const header = document.querySelector(".header");

// Open menu
const openVehiclesMenu = document.querySelector(".header-item1");
const openEnergyMenu = document.querySelector(".header-item2");
const openChargingMenu = document.querySelector(".header-item3");
const menuVehicles = document.getElementById("mega-menu__vehicles");
const menuEnergy = document.getElementById("mega-menu__energy");
const menuCharging = document.getElementById("mega-menu__charging");

// Close
const magaMenuBack = document.querySelector(".mega-menu__back");
const close = [
  ...document.querySelectorAll(".header-icons > *"),
  document.querySelector(".header-logo"),
];

const getScrollbarWidth = function () {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};
const scrollWidth = getScrollbarWidth();

// Open Mega Menu
const openMenu = function (selectedMenu, openlabel) {
  return function () {
    closeMenu();

    selectedMenu.classList.add("mega_visible");
    magaMenuBack.classList.add("mega-menu__back-visible");

    openlabel.classList.add("hover-effect");

    headerTop.style.color = "#171a20";

    document.body.classList.add("stop-scrolling");

    header.style.paddingRight = `${
      Number.parseFloat(getComputedStyle(header).paddingRight) + scrollWidth
    }px`;
  };
};

openVehiclesMenu.addEventListener(
  "mouseover",
  openMenu(menuVehicles, openVehiclesMenu)
);
openEnergyMenu.addEventListener(
  "mouseover",
  openMenu(menuEnergy, openEnergyMenu)
);
openChargingMenu.addEventListener(
  "mouseover",
  openMenu(menuCharging, openChargingMenu)
);

// Close Mega Menu
const closeMenu = function () {
  megaMenus.forEach((mMenu) => mMenu.classList.remove("mega_visible"));
  magaMenuBack.classList.remove("mega-menu__back-visible");

  menuLabels.forEach((label) => label.classList.remove("hover-effect"));

  headerTop.style.color = "#fff";

  document.body.classList.remove("stop-scrolling");

  header.style.paddingRight = `${
    Number.parseFloat(getComputedStyle(header).paddingRight) - scrollWidth
  }px`;
};

magaMenuBack.addEventListener("mouseover", closeMenu);
close.forEach((el) => el.addEventListener("mouseover", closeMenu));
