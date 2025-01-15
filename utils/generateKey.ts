export default () => {
  function getKey() {
    const newKey = new Date().toLocaleString().replace(/,\s/g, '').replace(/\s+/g, '').replace(/\//g, '').replace(/\:/g, '').trim().toString();

    return newKey;
  }
};
