const fetchData = async () => {
    const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    const data = await res.json();
    return data;
  };
  
  export default fetchData;