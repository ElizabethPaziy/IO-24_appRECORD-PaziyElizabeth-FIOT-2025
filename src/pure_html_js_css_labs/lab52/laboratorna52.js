const images = [
    {
        preview: 'https://img.freepik.com/free-photo/beautiful-shot-white-british-shorthair-kitten_181624-57681.jpg?semt=ais_hybrid&w=740',
        original: 'https://img.freepik.com/free-photo/beautiful-shot-white-british-shorthair-kitten_181624-57681.jpg?semt=ais_hybrid&w=740',
        description: 'Симпатичне кошеня 1',
    },
    {
        preview: 'https://img.freepik.com/premium-photo/five-dirty-fluffy-kittens-with-mesmerizing-blue-eyes-are-snuggled-up-together-soft-furry-mother_214286-638.jpg?semt=ais_hybrid&w=740',
        original: 'https://img.freepik.com/premium-photo/five-dirty-fluffy-kittens-with-mesmerizing-blue-eyes-are-snuggled-up-together-soft-furry-mother_214286-638.jpg?semt=ais_hybrid&w=740',
        description: 'Симпатичне кошеня 2',
    },
    {
        preview: 'https://media.istockphoto.com/id/1458302986/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F-%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D1%85-%D0%BA%D0%BE%D1%82%D1%8F%D1%82-%D1%81%D0%BF%D0%B8%D1%82-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5-%D0%B2-%D1%83%D1%8E%D1%82%D0%BD%D0%BE%D0%BC-%D0%BE%D0%B4%D0%B5%D1%8F%D0%BB%D0%B5-%D0%BA%D0%BE%D1%82%D1%8F%D1%82%D0%B0-%D0%BB%D1%8E%D0%B1%D1%8F%D1%82-%D0%B4%D1%80%D1%83%D0%B3-%D0%B4%D1%80%D1%83%D0%B3%D0%B0-%D0%BE%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5.jpg?s=612x612&w=0&k=20&c=CyCo6T7fGnXZXLdsUlUWLyqkAQGYeynBy-In02H_F_c=',
        original: 'https://media.istockphoto.com/id/1458302986/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F-%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D1%85-%D0%BA%D0%BE%D1%82%D1%8F%D1%82-%D1%81%D0%BF%D0%B8%D1%82-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5-%D0%B2-%D1%83%D1%8E%D1%82%D0%BD%D0%BE%D0%BC-%D0%BE%D0%B4%D0%B5%D1%8F%D0%BB%D0%B5-%D0%BA%D0%BE%D1%82%D1%8F%D1%82%D0%B0-%D0%BB%D1%8E%D0%B1%D1%8F%D1%82-%D0%B4%D1%80%D1%83%D0%B3-%D0%B4%D1%80%D1%83%D0%B3%D0%B0-%D0%BE%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5.jpg?s=612x612&w=0&k=20&c=CyCo6T7fGnXZXLdsUlUWLyqkAQGYeynBy-In02H_F_c=',
        description: 'Симпатичне кошеня 3',
    },
    {
        preview: 'https://koshka.top/uploads/posts/2021-11/1636794204_1-koshka-top-p-koshki-krasivie-kotyata-khoroshego-kachest-1.jpg',
        original: 'https://koshka.top/uploads/posts/2021-11/1636794204_1-koshka-top-p-koshki-krasivie-kotyata-khoroshego-kachest-1.jpg',
        description: 'Симпатичне кошеня 4',
    },
    {
        preview: 'https://cdn.e-pet.com.ua/uploaded/2025/2/13/11/IMG_5078-Nd2yBbAa.jpg',
        original: 'https://cdn.e-pet.com.ua/uploaded/2025/2/13/11/IMG_5078-Nd2yBbAa.jpg',
        description: 'Симпатичне кошеня 5',
    },
    {
        preview: 'https://kotomir.com/wp-content/uploads/nggallery_import/%D0%BD%D0%B0%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%83%D1%8E.jpg',
        original: 'https://kotomir.com/wp-content/uploads/nggallery_import/%D0%BD%D0%B0%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%83%D1%8E.jpg',
        description: 'Симпатичне кошеня 6',
    },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
    .map(
        ({ preview, original, description }) => `
      <li class="gallery-item">
        <a href="${original}">
          <img src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`
    )
    .join('');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const img = event.target;
    if (img.nodeName !== 'IMG') return;

    const largeImageURL = img.dataset.source;

    const instance = basicLightbox.create(`
    <div style="max-width: 800px; text-align: center;">
      <img src="${largeImageURL}" alt="${img.alt}" style="width: 100%; height: auto; border-radius: 8px;" />
      <p style="margin-top: 10px; font-size: 16px; color: #333;">${img.alt}</p>
    </div>
  `);

    instance.show();
});

