setInterval(() => {
  chrome.storage.sync.get("studyMode", (data) => {
    if (!data.studyMode) return;

    document.querySelectorAll(
      "ytd-rich-section-renderer, ytd-browse[page-subtype='home']"
    ).forEach(el => el.style.display = "none");
  });
}, 1000);