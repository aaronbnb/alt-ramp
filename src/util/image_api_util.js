import $ from "jquery";

export const createImage = image => (
  $.ajax({
    method: 'POST',
    url: 'localhost:3000/api/images',
    data: {image}
  })
);

export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: 'localhost:3000/api/images'
  })
);
