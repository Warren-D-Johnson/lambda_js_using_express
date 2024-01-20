
  module.exports = class zConfig {

    constructor() {
      // empty
    }
  
    get(option_name) {
    
      let retval = {};
      
      switch (option_name) {

        case 'DADS_NAME':
            retval = 'Warren'; 
            break;

        default:
            console.log("Unknown option_name in get() " + option_name);
            break;
        
      }
      
      return retval;
      
    }

    // Static variables to access class functions
    ztools() { const ztools = require(`classes/zTools.js`); return(new ztools()); }

  }; // end class
    
  