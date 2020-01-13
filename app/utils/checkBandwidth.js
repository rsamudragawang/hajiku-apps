import RNFetchBlob from 'rn-fetch-blob';

export function measureNetworkBandwitdh(callback) {
  const startTime = new Date().getTime();
  const imageUri = 'http://chandra.harvard.edu/graphics/resources/desktops/2006/1e0657_1280.jpg';
  const downloadSizeInBits = 1302600;
  RNFetchBlob.config({
    fileCache: false
  })
    .fetch('GET', imageUri, {})
    .then(() => {
      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000;
      const speed = downloadSizeInBits / (1024 * 1024 * duration);
      callback(true, speed, null);
    })
    .catch(err => {
      callback(false, null, err);
    });
}

export default { measureNetworkBandwitdh };
