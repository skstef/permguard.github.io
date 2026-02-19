// Detect forced dark mode
function detectForcedDarkMode() {
  if (
    !navigator.userAgent.match(/Samsung/i) ||
    !window.matchMedia ||
    window.matchMedia("(prefers-color-scheme:dark)").matches
  )
    return new Promise((resolve) => {
      resolve(false);
    });

  return new Promise((resolve) => {
    const ctx = document.createElement("canvas").getContext("2d");
    const svg = `
          <svg width="1" height="1" xmlns="http://www.w3.org/2000/svg">
              <rect width="1" height="1" fill="white"  />
          </svg>
      `;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.src = url;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
      const [r, g, b] = ctx?.getImageData(0, 0, 1, 1).data!;
      URL.revokeObjectURL(url); // Clean up the object URL to avoid memory leaks
      resolve((r & b & g) < 255);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url); // Clean up on error as well
      resolve(false);
    };
  });
}

if (typeof window !== "undefined") {
  detectForcedDarkMode().then(function (isDarkModeForced) {
    if (isDarkModeForced) {
      document.querySelector("body")!.classList.add("forced-dark");
    }
  });
}
