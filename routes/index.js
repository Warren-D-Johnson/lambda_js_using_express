const express       = require('express');
const router        = express.Router();
const tool          = require('toolify');

//############## Automatic routing for sub levels #################
//#### Make list of all subdirs with an "index.js" file in them

let rootPath = (`${__dirname}/`);
let allPaths = tool.findDirs(rootPath);

// //#### Genertate a router.use statement for each of them ####
allPaths.forEach(file => {
  if (tool.containsFile(file,'index.js')) {
  
    let offset = rootPath.length-1;
    let name = file.substring(offset, file.length); 
    let subroute = require(file);
    router.use(name, subroute);

  }
});

router.get('/', async(req,res)=>{

  console.log('in root of routes folder.');
  res.send('root of routes folder.');
  
});

module.exports = router;