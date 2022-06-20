export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'cc7b58dddcmsh3833e4dcf5d9b56p143541jsn39cddd45d677',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    
    headers: {
      'X-RapidAPI-Key': 'cc7b58dddcmsh3833e4dcf5d9b56p143541jsn39cddd45d677',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };




export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };