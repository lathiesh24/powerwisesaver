function goToNextPage(pageNumber) {
  let nextPageUrl;
  
  switch (pageNumber) {
    case 1:
      nextPageUrl = "../address/address.html";
      break;
    case 2:
      nextPageUrl = "../address/address.html";
      break;
    case 3:
      nextPageUrl = "../address/address.html";
      break;
    case 4:
      nextPageUrl = "../address/address.html";
      break;
    default:
      return;
  }
  window.location.href = nextPageUrl;
}

document.getElementById("option1").addEventListener("click", function() {
  goToNextPage(1);
});

document.getElementById("option2").addEventListener("click", function() {
  goToNextPage(2);
});

document.getElementById("option3").addEventListener("click", function() {
  goToNextPage(3);
});

document.getElementById("option4").addEventListener("click", function() {
  goToNextPage(4);
});