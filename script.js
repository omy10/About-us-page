document.addEventListener("DOMContentLoaded", function () {
  // Set up the page title and header content
  const companyName = "Mifugo Farming Company";
  document.title = companyName + " - About Us";
  document.getElementById("title").textContent = companyName;

  // Dynamically inject the "About Us" section content
  const aboutSection = document.getElementById("about-section");

  const heading = document.createElement("h2");
  heading.textContent = "About Us";
  aboutSection.appendChild(heading);

  const introParagraph = document.createElement("p");
  introParagraph.textContent = 
    "Welcome to " + companyName + ", where we are committed to sustainable farming practices " +
    "that promote environmental health, economic profitability, and social and economic equity. " +
    "We specialize in raising livestock using innovative and eco-friendly techniques.";
  aboutSection.appendChild(introParagraph);

  // Mission Section
  const missionDiv = document.createElement("div");
  missionDiv.id = "mission";

  const missionHeading = document.createElement("h3");
  missionHeading.textContent = "Our Mission";
  missionDiv.appendChild(missionHeading);

  const missionParagraph = document.createElement("p");
  missionParagraph.textContent = 
    "Our mission is to provide high-quality, organic products to our customers while minimizing " +
    "our ecological footprint. We strive to foster a sustainable future for the next generation by " +
    "embracing new livestock farming technologies and preserving natural resources.";
  missionDiv.appendChild(missionParagraph);

  aboutSection.appendChild(missionDiv);

  // Vision Section
  const visionDiv = document.createElement("div");
  visionDiv.id = "vision";

  const visionHeading = document.createElement("h3");
  visionHeading.textContent = "Our Vision";
  visionDiv.appendChild(visionHeading);

  const visionParagraph = document.createElement("p");
  visionParagraph.textContent = 
    "We envision a world where farming is in harmony with the environment. " +
    "Our goal is to be a leading provider of eco-friendly  livestock agricultural solutions, ensuring " +
    "food security for future generations while promoting biodiversity and conservation.";
  visionDiv.appendChild(visionParagraph);

  aboutSection.appendChild(visionDiv);

  // Core Values
  const valuesHeading = document.createElement("h3");
  valuesHeading.textContent = "Our Core Values";
  aboutSection.appendChild(valuesHeading);

  const valuesList = document.createElement("ul");
  const values = [
    "Sustainability",
    "Innovation",
    "Quality",
    "Community",
    "Transparency"
  ];

  values.forEach(value => {
    const li = document.createElement("li");
    li.textContent = value;
    valuesList.appendChild(li);
  });

  aboutSection.appendChild(valuesList);

  // Add image gallery dynamically
  const imageGallery = document.getElementById("image-gallery");

  const images = [
    "../Dom manipulation/images/dairycow image.jpg",
    "../Dom manipulation/images/goatfarm.jpg",
    "../Dom manipulation/images/sheepfarm.jpg",
  ];

  images.forEach(src => {
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "Farm Image");
    imageGallery.appendChild(img);
  });

  // Add co-founders section dynamically
  const coFoundersSection = document.getElementById("co-founders-section");

  const coFoundersHeading = document.createElement("h2");
  coFoundersHeading.textContent = "Meet Our Co-Founders";
  coFoundersSection.appendChild(coFoundersHeading);

  const coFounders = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      imgSrc: "../Dom manipulation/images/man1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Chief Operations Officer",
      imgSrc: "../Dom manipulation/images/elegant omyy.png"
    },
    {
      name: "Emily Brown",
      role: "Chief Marketing Officer",
      imgSrc: "../Dom manipulation/images/woman1.jpg"
    }
  ];

  coFounders.forEach(coFounder => {
    const coFounderDiv = document.createElement("div");
    coFounderDiv.className = "co-founder";

    const img = document.createElement("img");
    img.setAttribute("src", coFounder.imgSrc);
    img.setAttribute("alt", coFounder.name);
    coFounderDiv.appendChild(img);

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = coFounder.name;
    coFounderDiv.appendChild(nameHeading);

    const roleParagraph = document.createElement("p");
    roleParagraph.textContent = coFounder.role;
    coFounderDiv.appendChild(roleParagraph);

    coFoundersSection.appendChild(coFounderDiv);
  });
});
