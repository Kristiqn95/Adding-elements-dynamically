import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus euismod, accumsan tortor sit amet, tincidunt metus. Nam eget suscipit nisl. Donec nec dictum nunc. Curabitur sit amet quam eget velit euismod viverra. Morbi sed tortor sed nisl vulputate malesuada. Vivamus suscipit commodo eros et convallis.",
    "Ut vel massa ut urna eleifend consectetur vitae eu nisl. Donec laoreet eros ipsum, a ornare purus auctor iaculis. Fusce et mauris sem. Curabitur ac augue ut velit vehicula tincidunt. Curabitur sollicitudin commodo risus efficitur viverra. Phasellus ipsum dolor, molestie et turpis non, sollicitudin aliquam massa. Suspendisse ac dapibus sapien, tempus cursus eros. Aenean pellentesque sem vitae arcu tristique, non porttitor est volutpat. Donec sollicitudin rhoncus convallis. Quisque quis orci a augue ornare vulputate.",
    "Praesent eget dictum neque. Nam convallis massa in tincidunt volutpat. Curabitur sed magna feugiat, posuere orci non, bibendum lectus. Fusce mi est, congue quis tempor eu, congue in ipsum. Cras viverra dictum finibus.",
    "Quisque condimentum a tortor non mollis. Sed eu erat eu odio facilisis cursus at ut felis. Sed pulvinar congue ex nec accumsan.",
    "Cras finibus massa metus, non malesuada ligula scelerisque eu. Donec a fringilla diam, at suscipit purus. Etiam blandit, arcu sit amet ullamcorper tincidunt, orci turpis mattis dolor, eu sodales velit arcu a quam. Nunc commodo, quam nec interdum fermentum, eros leo mattis elit, sit amet laoreet magna mauris vel diam. Etiam dapibus feugiat felis, id fringilla massa tincidunt a. Pellentesque feugiat, velit in accumsan vulputate, orci est consectetur purus, ac fringilla arcu mi ac ligula."
  ];

  let articlesAdded = false;
  const body = document.getElementsByTagName('body')[0];

  document.addEventListener("click", () => {
    if(!articlesAdded) {
      articlesAdded = true;

      for (let i = 0; i < texts.length; i++) {
        const article = document.createElement('article');
        article.innerText = texts[i];
        article.classList.add('message');
        body.appendChild(article);
      }
    }
  });
});
