const countListCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${countListCategoriesEl.length}`);

countListCategoriesEl.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
});
