export const authHeader = () => {
    const accessToken = localStorage.getItem('idToken');
    if (accessToken) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
      return {};
    }
  }
