 
  const generate_uuid = require('uuid');

  module.exports = class zTools {

    constructor() {
      // empty
    }
  
    console(message) {
      if(process.env.DEBUG) {  
        console.log(message);
      }
    }
 
    uuid() { 
      return(generate_uuid.v4()); 
    }

    epoch() { 
      return parseInt(Math.floor(new Date() / 1000), 10); 
    }

    epochmilli() { 
      return (parseInt(Math.floor(new Date() / 1000), 10) * 1000); 
    }

  
  };  // end class
    
  