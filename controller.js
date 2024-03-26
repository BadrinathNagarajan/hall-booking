import Helper from './helper.js'

const rooms = [{
    id:1,
    roomId:"R1",
    seatsAvailable:"2",
    amenities:"tv,ac,heater",
    pricePerhr:"100"
},
{
    id:2,
    roomId:"R2",
    seatsAvailable:"4",
    amenities:"tv,ac,heater,hairdryer",
    pricePerhr:"200"
},
{
    id:3,
    roomId:"R3",
    seatsAvailable:"4",
    amenities:"tv,ac,heater,hairdryer",
    pricePerhr:"300"
}];
const bookings = [{
    id:1,
    customer: "Selva",
    bookingDate: "20230612",
    startTime: "12:00pm",
    endTime: "11:59am",
    bookingID: "B1",
    roomId: "R1",
    status: "booked",
    booked_On: "3/7/2023"
},
{
    id:2,
    customer: "SS",
    bookingDate: "20230615",
    startTime: "12:00pm",
    endTime: "11:59am",
    bookingID: "B2",
    roomId: "R2",
    status: "booked",
    booked_On: "3/7/2023"    
},
{
    id:3,
    customer: "Arun",
    bookingDate: "20230616",
    startTime: "12:00pm",
    endTime: "11:59am",
    bookingID: "B3",
    roomId: "R3",
    status: "booked",
    booked_On: "3/7/2023"
},
{
    id:4,
    customer: "Muku",
    bookingDate: "",
    startTime: "12:00pm",
    endTime: "11:59am",
    bookingID: "",
    roomId: "",
    status: "Not-booked",
    booked_On: ""
},
{
    id:5,
    customer: "Badri",
    bookingDate: "20230616",
    startTime: "12:00pm",
    endTime: "11:59am",
    bookingID: "B5",
    roomId: "R5",
    status: "booked",
    booked_On: "3/9/2023"
}
];

const getAllRooms = (req,res)=>{
    // res.status(200).send({
    //     message:"data fetch successful",
    //     rooms
    // })
    let bookedcustomer = bookings.filter((e)=>e.status == "booked")
    console.log(bookedcustomer)
    let bookedcustomers = bookedcustomer.map(e=>{
        const{customer,roomId,bookingDate,startTime,endTime} = e;
        return{customer,roomId,bookingDate,startTime,endTime};
    })
    res.status(200).json(bookedcustomers);
}

const getallbookings = (req,res)=>{
    // res.status(200).send({
    //     message:"booking room successful",
    //     bookings
    // })
    const bookedRooms = bookings.map(e => {
        const {roomId ,status,customer,bookingDate,startTime,endTime} = e;
        console.log(e)
        return {roomId ,status,customer,bookingDate,startTime,endTime} 
    });
    res.status(200).json(bookedRooms);
}

const createRoom = (req,res)=>{
    req.body.id = rooms.length?rooms[rooms.length-1].id+1 : 1
    console.log(req.body)
    rooms.push(req.body)
    res.status(200).send({
        message:"Created room successfully"
    })
}

const bookingRoom = (req,res)=>{
    req.body.id = bookings.length?bookings[bookings.length-1].id+1 : 1
    bookings.push(req.body)
    res.status(200).send({
        message:"Booking a room successfully"
    })
}



export default {
    getAllRooms,
    getallbookings,
    createRoom,
    bookingRoom
}