const helmets = [
  { img: "helmet01.png", name: "Full Face Helmet Pro" },
  { img: "helmet02.png", name: "Racing Helmet X2" },
  { img: "helmet03.png", name: "Street Helmet Black" },
  { img: "helmet04.png", name: "Carbon Helmet Edition" },
  { img: "helmet05.png", name: "Urban Helmet Gray" },
  { img: "helmet06.png", name: "Sport Helmet Orange" },
  { img: "helmet07.png", name: "Adventure Helmet" },
  { img: "helmet08.png", name: "Classic Helmet" },
  { img: "helmet09.png", name: "Premium Helmet Blue" },
  { img: "helmet010.png", name: "Rider Helmet X" },
  { img: "helmet011.png", name: "Speed Helmet" },
  { img: "helmet012.png", name: "Mirror Visor Helmet" },
  { img: "helmet013.png", name: "Night Vision Helmet" },
  { img: "helmet014.png", name: "Touring Helmet" },
  { img: "helmet015.png", name: "Dual Visor Helmet" },
  { img: "helmet016.png", name: "Sport Touring Helmet" },
  { img: "helmet017.png", name: "Silver Rider Helmet" },
  { img: "helmet018.png", name: "Off Road Helmet" },
  { img: "helmet019.png", name: "Dark Edition Helmet" },
  { img: "helmet020.png", name: "Pro Racing Helmet" },
  { img: "helmet021.png", name: "Graphic Helmet" },
  { img: "helmet022.png", name: "Transparent Visor Helmet" },
  { img: "helmet023.png", name: "Urban Street Helmet" },
  { img: "helmet024.png", name: "Flip Up Helmet" },
  { img: "helmet025.png", name: "Moto Cross Helmet" },
  { img: "helmet026.png", name: "Trail Helmet" },
  { img: "helmet027.png", name: "Adventure Pro Helmet" },
  { img: "helmet028.png", name: "Limited Edition Helmet" },
];

const gloves = [
  { img: "gloves01.png", name: "Winter Riding Gloves" },
  { img: "gloves02.png", name: "Leather Gloves Pro" },
  { img: "gloves03.png", name: "Touring Gloves" },
  { img: "gloves04.png", name: "Racing Gloves Red" },
  { img: "gloves05.png", name: "Black Rider Gloves" },
  { img: "gloves06.png", name: "Carbon Fiber Gloves" },
  { img: "gloves07.png", name: "Street Gloves" },
  { img: "gloves08.png", name: "Sport Gloves Blue" },
];

const bottles = [{ img: "product08.png", name: "Chain Lubricant Spray" }];

const sacs = [
  { img: "sac01.png", name: "Motorcycle Top Case" },
  { img: "sac02.png", name: "Aluminum Side Case" },
  { img: "sac03.png", name: "Backpack Riding Bag" },
];

const others = [
  { img: "product01.png", name: "Motorcycle Frame Slider" },
  { img: "product02.png", name: "Engine Protection Guard" },
  { img: "product03.png", name: "Exhaust Heat Shield" },
  { img: "product04.png", name: "LED Headlight Kit" },
  { img: "product05.png", name: "Brake Disc Lock" },
  { img: "product06.png", name: "Motorcycle Alarm" },
  { img: "product07.png", name: "Phone Holder Mount" },
  { img: "product09.png", name: "Tank Protection Pad" },
  { img: "product10.png", name: "Crash Bar Kit" },
  { img: "product11.png", name: "Auxiliary LED Lights" },
  { img: "product12.png", name: "Handlebar Guards" },
  { img: "product13.png", name: "Motorcycle Stand" },
  { img: "product14.png", name: "Digital Speed Meter" },
  { img: "product15.png", name: "Bluetooth Intercom" },
  { img: "product16.png", name: "Helmet Lock" },
  { img: "product17.png", name: "USB Charger" },
  { img: "product18.png", name: "Rear View Camera" },
  { img: "product19.png", name: "GPS Tracker" },
  { img: "product20.png", name: "Side Mirror Set" },
  { img: "product21.png", name: "LED Indicator Lights" },
  { img: "product22.png", name: "Motorcycle Horn" },
  { img: "product23.png", name: "Bike Cover" },
  { img: "sberdila01.png", name: "Riding Shoes Black" },
  { img: "sberdila02.png", name: "Riding Shoes Sport" },
];

function productTemplate(img, category, name) {
  return `
  <div class="product" data-aos="fade-up">
    <div class="product-img">
      <img src="./img/${img}" alt="${name}" />
      <div class="product-label">
        <span class="new">NEW</span>
      </div>
    </div>
    <div class="product-body">
      <p class="product-category">${category}</p>
      <h3 class="product-name">
        <a href="#">${name}</a>
      </h3>
      <h4 class="product-price">899.00DH</h4>
    </div>
    <div class="add-to-cart">
      <button class="add-to-cart-btn">
        <i class="fa fa-shopping-cart"></i> add to cart
      </button>
    </div>
  </div>
  `;
}
function renderProducts(list, category, containerId) {
  const container = document.getElementById(containerId);
  list.forEach((item) => {
    container.innerHTML += productTemplate(item.img, category, item.name);
  });
}
renderProducts(helmets, "Helmet", "helmets");
renderProducts(gloves, "Gloves", "gloves");
renderProducts(bottles, "Bottle", "bottles");
renderProducts(sacs, "Bag", "sacs");
renderProducts(others, "Accessories", "others");

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(helmets, "Helmet", "helmets");
  renderProducts(gloves, "Gloves", "gloves");
  renderProducts(bottles, "Bottle", "bottles");
  renderProducts(sacs, "Bag", "sacs");
  renderProducts(others, "Accessories", "others");
});
