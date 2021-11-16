import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {

  const texts = [
    "E = mc2. It's the world's most famous equation, but what does it really mean?",
    "Energy equals mass times the speed of light squared.",
    "On the most basic level, the equation says that energy and mass (matter) are interchangeable",
    "they are different forms of the same thing. Under the right conditions, energy can become mass, and vice versa.",
    "We humans don't see them that way—how can a beam of light and a walnut, say, be different forms of the same thing?—but Nature does."
  ];
  
  let articlesAdded = false;
  const body = document.getElementsByTagName('body')[0];
  
  document.addEventListener("click", () => {
    if(!articlesAdded) {
      articlesAdded = true;
      
      for(let i=0; i < texts.lenght; i++) {
        const article = document.createElement('article');
        article.innerText = texts[i];
        article.classList.add('message');
        body.appendChild(article);
      }
    }
  });
});
