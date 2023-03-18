const images: {[key: string]: any} = {};
function importAll(r: any) {
  r.keys().forEach((filename: string) => {
    const image = r(filename);
    images[filename] = image.default || image;

    return images
  });
}

importAll(require.context('./assets/images', true, /\.(png|jpe?g|svg)$/));

export default images;