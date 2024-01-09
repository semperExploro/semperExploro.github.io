export const GetCurrentPosition = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Location access was denied. Please enable location access for this website.");
          reject(error);
        } else {
          reject(error);
        }
      });
    });
  }