
function myFunction (params) {
    const {query} = params;
    const {keyword = 'no value available for keyword'} = query
    return `Kema says ${keyword}`
  }
  
  module.exports = { myFunction };

