function uploadFiles(files) {
  for (let i = 0;i < files.length; i++) {
    uploadFile(files[i]);
  }
}

function uploadFile(file) {

  const uploadRoute = `/api/upload`;
  
  fetch(uploadRoute, {
    body: file,
    method: "POST",
    headers: {
      "File-Name": file.name,
      "Content-Type": file.type,
    },
  })
  .then(() => {
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML += `<div>${file.name}</div>`;

    const uploadInput = document.getElementById("uploadInput");
    uploadInput.value = null;
  })
  .catch((err) => {
    console.error(`Failed to upload: ${file.name}`);
    console.error(err);

    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML += `<div>Failed ${file.name}</div`;
  });

}