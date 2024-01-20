const express = require('express');
const router  = express.Router();

const controller           = require(`controller`);
const ztools               = new (require('classes/zTools.js'));
const zconfig              = new (require('classes/zConfig.js'));

router.get('/hellothere', /* you could use a middleware here to validate incoming parameters */ async(req,res)=> {
  
    ztools.console(req);
    
    const dadsName = zconfig.get('DADS_NAME');
    const result = await controller.hellothere(dadsName);
    const return_code = (result.success) ? 200 : 400;
    res.status(return_code).send(result.message);

});

module.exports = router;