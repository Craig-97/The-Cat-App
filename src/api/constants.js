export const API_BASE = 'https://api.thecatapi.com/v1';
const API_KEY = '0782e3b8-59b2-46a4-9396-14371afe35be';

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY
};

export const POST_IMAGE_HEADERS = {
  'Content-Type': 'multipart/form-data',
  'x-api-key': API_KEY
};
