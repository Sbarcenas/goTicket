import {encode} from 'base-64';
export const S3Photos = {
  bucket: 'fithubapp',
  base: 'https://dozj53nzzeirv.cloudfront.net/',
};

export const getAvatarPhoto = (path = '', bool) => {
  const json = JSON.stringify({
    bucket: S3Photos.bucket,
    key: path,
    edits: {
      resize: {
        width: 400,
        height: 400,
        fit: 'cover',
      },
    },
  });
  const base64 = encode(json);
  const url = `${S3Photos.base}${base64}`;
  if (!path) return '';
  return url;
};

export const getEstablishmentBanner = (url = '') => {
  const path = url.replace(S3Photos.base, '').replace(S3Photos.oldBase, '');
  const key = path[0] === '/' ? path.replace('/', '') : path;
  const json = JSON.stringify({
    bucket: S3Photos.bucket,
    key,
    edits: {
      resize: {
        width: 320,
        height: 150,
        fit: 'cover',
      },
    },
  });
  const base64 = encode(json);
  const newUrl = `${S3Photos.base}${base64}`;
  return newUrl;
};

// benefits/108/image/0b5eab4d-87d7-4468-b96a-e86ac1a1ceb5_IMG-20190307-WA0019.jpg
// benefits/119/image/image-1555546427788.png
// https://static.cityprime.club/0x500/benefits/119/image/image-1555546427788.png
