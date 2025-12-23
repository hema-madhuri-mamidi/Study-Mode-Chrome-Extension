const btn = document.getElementById("toggleBtn");

chrome.storage.sync.get("studyMode", (data) => {
  btn.textContent = data.studyMode ? "Turn OFF Study Mode" : "Turn ON Study Mode";
});

btn.addEventListener("click", () => {
  chrome.storage.sync.get("studyMode", (data) => {
    const newMode = !data.studyMode;

    chrome.storage.sync.set({ studyMode: newMode }, () => {
      btn.textContent = newMode ? "Turn OFF Study Mode" : "Turn ON Study Mode";
    });
  });
});