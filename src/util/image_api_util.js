import $ from "jquery";

export const createImage = image => (
  $.ajax({
    method: 'POST',
    url: 'https://localhost:3000/api/images',
    data: {image}
  })
);

export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: 'https://localhost:3000/api/images'
  })
);
