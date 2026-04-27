//input component
export function searchInput({ placeholder, onSearch }) {
  const container = document.createElement("div");
  container.id = "search-container";

  //input
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  //button
  const button = document.createElement("button");
  button.textContent = "Search";

  function triggerSearch() {
    //clean up user input, remove spaces and conv to uppercase
    const value = input.value.trim().toUpperCase();
    //no empty searches
    if (!value) return;

    //call parent function
    if (onSearch) {
      onSearch(value);
    }
  }

  //trigger on click or enter key
  button.addEventListener("click", triggerSearch);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") triggerSearch();
  });

  container.appendChild(input);
  container.appendChild(button);

  return container;
}
