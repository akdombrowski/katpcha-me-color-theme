const updateColors = () => {
  document.body.style.backgroundColor = "var(--bs-dark)";
  document.body.style.color = "var(--bs-light)";
};

/**
 * Wait for page to load to click the button
 */
if (document.readyState !== "complete") {
  //   // Loading hasn't finished yet
  // console.log("readyState:", document.readyState);
  document.onreadystatechange = () => {
    // console.log("readyState:", document.readyState);
    updateColors();
  };
  // console.log("readyState:", "not completed");
  // window.addEventListener("load", clickBtn);
  // document.addEventListener("load", clickBtn);
} else {
  // ready state is already in completed state
  // console.log("readyState:", "finished loading");
  updateColors();
}
