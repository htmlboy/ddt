function descTrigger() {
  let descTriggers = document.querySelectorAll('[data-desc-trigger]');

  function showDesc() {
    console.log("trigger");
    this.classList.add("is-hidden");
    this.parentNode.querySelector(".event__desc-hidden").classList.remove("event__desc-hidden");
  }

  descTriggers.forEach(function(e){
    e.addEventListener('click', showDesc);
  })
}

console.log("up");
descTrigger();
console.log("loaded");
