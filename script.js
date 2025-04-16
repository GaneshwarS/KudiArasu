// List of PDFs with their GitHub raw URLs
const pdfs = [
  { name: "1925 Preface", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1925-Preface.pdf" },
  { name: "1925", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1925.pdf" },
  { name: "1926", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1926.pdf" },
  { name: "1927", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1927.pdf" },
  { name: "1928", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1928.pdf" },
  { name: "1929", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1929.pdf" },
  { name: "1930", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1930.pdf" },
  { name: "1931", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1931.pdf" },
  { name: "1932", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1932.pdf" },
  { name: "1933", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1933.pdf" },
  { name: "1934", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1934.pdf" },
  { name: "1935", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1935.pdf" },
  { name: "1936", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1936.pdf" },
  { name: "1937", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1937.pdf" },
  { name: "1938", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/1938.pdf" },
  { name: "Revolt", url: "https://raw.githubusercontent.com/GaneshwarS/KudiArasu/main/pdfs/Revolt.pdf" },
//
];

// Load PDFs on page load
function loadPDFs() {
  const pdfList = document.getElementById('pdfList');
  pdfList.innerHTML = '';
  pdfs.forEach(pdf => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${pdf.url}" target="_blank">${pdf.name}</a>`;
    pdfList.appendChild(li);
  });
}

// Search PDFs by name
function searchPDFs() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const pdfItems = document.getElementById('pdfList').getElementsByTagName('li');
  Array.from(pdfItems).forEach((item, index) => {
    const text = pdfs[index].name.toLowerCase();
    item.style.display = text.includes(searchTerm) ? '' : 'none';
  });
}

window.onload = loadPDFs;