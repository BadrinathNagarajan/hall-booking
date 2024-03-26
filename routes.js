import express from 'express'
import Controller from './controller.js'
const router = express.Router()

router.get('/rooms',Controller.getAllRooms)
router.get('/bookings',Controller.getallbookings)
router.post('/room',Controller.createRoom)
router.post('/booking',Controller.bookingRoom)

export default router