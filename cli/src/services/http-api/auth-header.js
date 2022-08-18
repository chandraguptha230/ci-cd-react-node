  const authHeader = () => {
    const accessToken = localStorage.getItem('idToken');
    if (accessToken) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
      return {};
    }
  }


  const businessQuery = () => {
    const business = localStorage.getItem('business');
    if (business) {
      return `business=${business}`;
    } else {
      return'';
    }
  }


  export default {
    authHeader: authHeader,
    businessQuery: businessQuery
  }   