export default function checkFile(name, file, fileName) {
  const baseUrl = process.env.VUE_APP_BASE_URL;
  const data = new FormData();
  data.append(name, file, fileName);

  return fetch(`${baseUrl}/api/v1/file/checkFile`, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json());
}
