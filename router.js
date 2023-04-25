const express = require('express')
const router = express.Router()

//linktree
const {
    registrasiPelayanan,
    registrasiCool,
    prayerRequest,
    praiseReport
} = require("./controllers/formController")
router.post('/registrasi-cool', registrasiCool)
router.post("/registrasi-pelayanan", registrasiPelayanan)
router.post("/prayer-request", prayerRequest)
router.post("/praise-report", praiseReport)

module.exports = router