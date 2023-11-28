document.addEventListener("DOMContentLoaded", function () {
  const names = ["Alice", "Bob", "Carol", "David", "Eve"];
  const occupations = [
    "Writer",
    "Teacher",
    "Programmer",
    "Designer",
    "Consultant",
  ];

  const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
  ];

  const freelancersList = document.getElementById("freelancers");
  const averagePriceDisplay = document.getElementById("average-price");

  function renderFreelancers() {
    freelancersList.innerHTML = "";
    freelancers.forEach((freelancer) => {
      const listItem = document.createElement("li");
      listItem.className = "freelancer";
      listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`;
      freelancersList.appendChild(listItem);
    });
  }

  function calculateAveragePrice() {
    const totalPrices = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.startingPrice,
      0
    );
    const averagePrice = totalPrices / freelancers.length || 0;
    return averagePrice.toFixed(2);
  }

  function updateAveragePrice() {
    const averagePrice = calculateAveragePrice();
    averagePriceDisplay.textContent = `Average Starting Price: $${averagePrice}`;
  }

  function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1;

    const newFreelancer = {
      name: randomName,
      occupation: randomOccupation,
      startingPrice: randomStartingPrice,
    };

    freelancers.push(newFreelancer);
    renderFreelancers();
    updateAveragePrice();
  }

  renderFreelancers();
  updateAveragePrice();

  setInterval(generateRandomFreelancer, 4000);
});
