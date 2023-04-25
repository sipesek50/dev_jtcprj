const async_query = require("../models/async.js")
const validator = require('validator')

const registrasiCool = async (req, res) => {
    let name = req.body.name
    let birthdate = req.body.birthdate
    let phone = req.body.phone

    if(validator.isEmpty(name)){
        res.json({
            "status_code": -1,
            "message": "Name is Empty"
        })
        return
    } else if(!validator.isAlpha(name, ['en-US'], {'ignore': ' '})){
        res.json({
            "status_code": -1,
            "message": "Name is not Alpha"
        })
        return
    }

    if(validator.isEmpty(birthdate)){
        res.json({
            "status_code": -1,
            "message": "Birthdate is Empty"
        })
        return
    } else if (!validator.isDate(birthdate, {'delimiter': '-'})){
        res.json({
            "status_code": -1,
            "message": "Birthdate is not date format"
        })
        return
    }

    if(validator.isEmpty(phone)){
        res.json({
            "status_code": -1,
            "message": "Phone is Empty"
        })
        return
    } else if (!validator.isNumeric(phone)){
        res.json({
            "status_code": -1,
            "message": "Phone is not Numeric"
        })
        return
    }
    
    let [rows, fields] = await async_query(
        "INSERT INTO regis_cool (name, birthdate, phone) VALUES (?,?,?)",
        [name, birthdate, phone]
    )

    res.json({
        "rows": rows,
        "fields": fields
    })
}

const registrasiPelayanan = async (req, res) => {
    let name = req.body.name
    let phone = req.body.phone
    let line = req.body.line
    let job = req.body.job

    let [rows, fields] = await async_query(
        "INSERT INTO regis_pelayanan (name, phone, line, job) VALUES (?,?,?,?)",
        [name, phone, line, job]
    )

    res.json({
        rows
    })
}

const prayerRequest = async (req, res) => {
    let message = req.body.message
    let name = req.body.name
    let phone = req.body.phone

    const [rows, fields] = await async_query(
        "INSERT INTO prayer_request (name, phone, message) VALUES (?,?,?)",
        [name, phone, message]
    )

    res.json({
        rows
    })
}

const praiseReport = async (req, res) => {
    let message = req.body.message
    let name = req.body.name
    let phone = req.body.phone

    const [rows, fields] = await async_query(
        "INSERT INTO praise_report (name, phone, message) VALUES (?,?,?)",
        [name, phone, message]
    )

    res.json({
        rows
    })
}

module.exports = {
    registrasiCool,
    registrasiPelayanan,
    praiseReport,
    prayerRequest,
}