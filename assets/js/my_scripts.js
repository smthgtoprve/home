
  function loadAssignment(url) {
    var iframe = document.getElementById("iframe-container");
    iframe.src = url;
}

function adjustIframeSize() {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

iframe.onload = adjustIframeSize;
