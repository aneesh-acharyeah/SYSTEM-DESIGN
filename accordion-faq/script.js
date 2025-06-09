const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const open = body.style.maxHeight;

    document.querySelectorAll(".accordion-body").forEach(b => {
      b.style.maxHeight = null;
      b.style.paddingBottom = 0;
    });

    if (!open || open === "0px") {
      body.style.maxHeight = body.scrollHeight + "px";
      body.style.paddingBottom = "1rem";
    }
  });
});
