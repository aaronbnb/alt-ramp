import $ from "jquery";

export const createImage = image => (
  $.ajax({
    method: 'POST',
    url: '/api/images',
    data: {image}
  })
);

export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/images'
  })
);
