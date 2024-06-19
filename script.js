function showCodeBlock(blockId) {
  const codeBlock = document.getElementById(blockId).cloneNode(true);
  codeBlock.style.display = 'block'; // Ensure it's displayed
  appendCodeBlock(blockId);
}

function appendCodeBlock(blockId) {
  const codeBlockText = document.querySelector(`#${blockId} pre code`).innerText;
  const codeTextarea = document.getElementById('codeTextarea');
  codeTextarea.value += codeBlockText;
}

function copyCode(blockId, tooltipId) {
  const codeBlock = document.querySelector(`#${blockId} pre code`).innerText;
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = codeBlock;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);

  const tooltip = document.getElementById(tooltipId);
  tooltip.style.display = 'block';
  setTimeout(() => {
      tooltip.style.display = 'none';
  }, 500);
}

function copyAllCode() {
  const codeTextarea = document.getElementById('codeTextarea');
  codeTextarea.select();
  document.execCommand('copy');

  const tooltip = document.getElementById('tooltipAll');
  tooltip.style.display = 'block';
  setTimeout(() => {
      tooltip.style.display = 'none';
  }, 2000);
}