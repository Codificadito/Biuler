const express = require('express');
const router = express.Router();
const { createDebugMail } = require('../Modules/ContactUs/ContactUsController');
const { createSuscriptor, sendNewsletter } = require('../Modules/Suscription/SuscriptionController');

router.post('/contactUs', createDebugMail);
router.post('/createSuscription', createSuscriptor);
router.post('/sendNewsletter', sendNewsletter);

module.exports = router;