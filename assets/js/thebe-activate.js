/* Adds a "make code interactive" button on pages with `runnable: true`.
 * On click, thebe turns every python code block into an editable, executable
 * cell backed by an in-browser Pyodide (JupyterLite) kernel. */
(function () {
  function init() {
    var content = document.querySelector(".page__content");
    if (!content || !content.querySelector("div.language-python pre")) return;

    var bar = document.createElement("div");
    bar.className = "thebe-activate-bar";

    var button = document.createElement("button");
    button.className = "thebe-activate-button";
    button.textContent = "▶ Run code in browser";

    var hint = document.createElement("span");
    hint.className = "thebe-activate-hint";
    hint.textContent =
      "Loads a Python environment in your browser (~30 s, nothing is installed on your machine).";

    var status = document.createElement("div");
    status.className = "thebe-status";

    bar.appendChild(button);
    bar.appendChild(hint);
    bar.appendChild(status);
    content.insertBefore(bar, content.firstChild);

    button.addEventListener("click", function () {
      button.disabled = true;
      button.textContent = "⏳ Starting Python kernel…";
      hint.textContent =
        "First start downloads the environment – please be patient. " +
        "Then press the run button below each code block (top to bottom).";
      thebe
        .bootstrap(thebe.getPageConfig())
        .then(function () {
          button.textContent = "✓ Code blocks are interactive";
        })
        .catch(function (err) {
          console.error("thebe bootstrap failed", err);
          button.disabled = false;
          button.textContent = "⚠ Failed to start – try again";
        });
      // mount the kernel status widget into our bar
      if (window.thebe && thebe.mountStatusWidget) {
        try {
          thebe.mountStatusWidget();
        } catch (e) {
          /* status widget is optional */
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
