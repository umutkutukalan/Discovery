export function handleClick() {
  const searchImg = document.querySelector("#searchImg");
  const inputSearch = document.querySelector(".inputSearch");
  searchImg.addEventListener("click", () => {
    if (inputSearch.classList.contains("active")) {
      inputSearch.classList.remove("active");
    } else {
      inputSearch.classList.add("active");
    }
  });
}