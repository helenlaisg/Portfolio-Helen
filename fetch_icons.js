import https from 'https';

const icons = ['canva'];

icons.forEach(icon => {
  https.get(`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${icon}.svg`, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log(`--- ${icon} ---`);
      console.log(data);
    });
  });
});
