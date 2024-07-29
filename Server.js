const express = require('express')
const cors = require('cors')
require('./db/config')
const Admin = require('./db/Admin/AdminSchema')
const Grooming = require('./db/Services/GroomingSchema')
const Wellness = require('./db/Services/WellnessSchema')
const Additional = require('./db/Services/AdditionalShema')
const Products = require('./db/Services/ProductsSchema')
const User = require('./db/User/UserSchema')
const userbooking = require('./db/User/MyBookings')
const groombooking = require('./db/User/GroomBooking')
const wellnessbooking = require('./db/User/WellnessBooking')
const additionalbooking = require('./db/User/AdditonalBooking')

const app = express()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))

app.post('/alogin', (req, resp) => {
    const { email, password } = req.body;
    Admin.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
})

// singup Api 
app.post('/asignup', (req, resp) => {
    const { name, email, password } = req.body;
    Admin.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                Admin.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
})

app.get('/users',(req,res)=>{
    User.find()
    .then((user)=>{
        res.status(200).json(user)
    })
    .catch(() => {
        res.sendStatus(500)
    })
})

app.get('/users/:id',(req,res)=>{
    const id =req.params.id;
    User.findById({_id:id})
    .then((user)=>{
        res.status(200).json(user)
    })
    .catch(() => {
        res.sendStatus(500)
    })
})

app.put('/useredit/:id',(req,res)=>{
    const id =req.params.id;
    const { name, email, password } = req.body;
    User.findByIdAndUpdate(id, { name, email, password }, { new: true })
    .then(updatedUser => {
        res.json(updatedUser);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
})

app.delete('/userdelete/:id',(req,res)=>{
    let id=req.params.id;
       User.deleteOne({ _id: id })
       .then((user)=>{
        res.status(200).json(user)
         })
       .catch(() => {
        res.sendStatus(500)
       })
})

app.post('/groom', async (req, res) => {
    const { name, description, price, duration, includesBath, includesHairTrimming, includesNailTrimming, includesEarCleaning, includesTeethBrushing } = req.body;
    try {
        const newGroomingService = new Grooming({ name, description, price, duration, includesBath, includesHairTrimming, includesNailTrimming, includesEarCleaning, includesTeethBrushing });
        await newGroomingService.save();
        res.status(201).json(newGroomingService);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create' });
    }
});

app.get('/getgroom', (req, res) => {
    Grooming.find()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.get('/getgroom/:id', (req, res) => {
    const id = req.params.id;
    Grooming.findById(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.put('/updategroom/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price, duration, includesBath, includesHairTrimming, includesNailTrimming, includesEarCleaning, includesTeethBrushing } = req.body;
    Grooming.findByIdAndUpdate(id, { name, description, price, duration, includesBath, includesHairTrimming, includesNailTrimming, includesEarCleaning, includesTeethBrushing }, { new: true })
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            console.log("error in updating")
            res.status(500).send('Internal Server Error');
        });
})

app.delete('/deletegrooming/:id', (req, res) => {
    const { id } = req.params;
    Grooming.findByIdAndDelete(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.post('/wellness', (req, res) => {
    const { name, description, price, duration, nutritionCounselling, exerciseRecommendations, preventiveHealthcare, regularCheckUps, vaccinations } = req.body;
    const newService = new Wellness({ name, description, price, duration, nutritionCounselling, exerciseRecommendations, preventiveHealthcare, regularCheckUps, vaccinations });
    newService.save()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(() => {
            res.status(400).json({ error: 'Failed to create' });
        })
});

app.get('/getwellness', (req, res) => {
    Wellness.find()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})
app.get('/getwellness/:id', (req, res) => {
    const id = req.params.id;
    Wellness.findById(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.put('/updatewellness/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price, duration, nutritionCounselling, exerciseRecommendations, preventiveHealthcare, regularCheckUps, vaccinations } = req.body;
    Wellness.findByIdAndUpdate(id, { name, description, price, duration, nutritionCounselling, exerciseRecommendations, preventiveHealthcare, regularCheckUps, vaccinations }, { new: true })
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            console.log("error in updating")
            res.status(500).send('Internal Server Error');
        });
})

app.delete('/deletewellness/:id', (req, res) => {
    const { id } = req.params;
    Wellness.findByIdAndDelete(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})


app.post('/additional', (req, res) => {
    const { name, description, price, boardingAndDaycare, trainingClasses, } = req.body;
    const newService = new Additional({ name, description, price, boardingAndDaycare, trainingClasses, });
    newService.save()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(() => {
            res.status(400).json({ error: 'Failed to create' });
        })
});

app.get('/getadditional', (req, res) => {
    Additional.find()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.get('/getadditional/:id', (req, res) => {
    const id = req.params.id;
    Additional.findById(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.put('/updateadditional/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price, boardingAndDaycare, trainingClasses } = req.body;
    Additional.findByIdAndUpdate(id, { name, description, price, boardingAndDaycare, trainingClasses, }, { new: true })
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            console.log("error in updating")
            res.status(500).send('Internal Server Error');
        });
})


app.delete('/deleteadditional/:id', (req, res) => {
    const { id } = req.params;
    Additional.findByIdAndDelete(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})


app.post('/products', (req, res) => {
    const { name, description, price, category, imageURL } = req.body;
    const newService = new Products({ name, description, price, category, imageURL });
    newService.save()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(() => {
            res.status(400).json({ error: 'Failed to create' });
        })
});

app.get('/getproducts', (req, res) => {
    Products.find()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.get('/getproduct/:id', (req, res) => {
    const id = req.params.id;
    Products.findById(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})

app.put('/updateproduct/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price, category, imageURL } = req.body;
    Products.findByIdAndUpdate(id, { name, description, price, category, imageURL }, { new: true })
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            console.log("error in updating")
            res.status(500).send('Internal Server Error');
        });
})

app.delete('/deleteproducts/:id', (req, res) => {
    const { id } = req.params;
    Products.findByIdAndDelete(id)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log("error in getting")
        });
})
                                                      //  User  //
// Login Api
app.post('/ulogin', (req, resp) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
})

// singup Api 
app.post('/usignup', (req, resp) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                User.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
})

// Products
app.post('/orderproduct', async (req, res) => {
    const { name, email, phno, description, price, category, productName, imageURL, totalamount, OrderdDate, userId, userName, quantity } = req.body;

    try {
        const order = new userbooking({ name, email, phno, description, price, category, productName, imageURL, totalamount, OrderdDate, userId, userName, quantity });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create' });
    }
});


app.get('/getproductbooking', async (req, res) => {
    try {
        const tasks = await userbooking.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

app.get('/getbookings/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const tasks = await userbooking.find({ userId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});


// Grooming
app.post('/bookgroom', async (req, res) => {
    try {
        const booking = new groombooking(req.body);
        await booking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Failed to create booking' });
    }
})


app.get('/getgroombooking', async (req, res) => {
    try {
        const tasks = await groombooking.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

app.get('/getbookgroom/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const tasks = await groombooking.find({ userId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});


// Wellness
app.post('/bookwellness', async (req, res) => {
    try {
        const booking = new wellnessbooking(req.body);
        await booking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Failed to create booking' });
    }
})


app.get('/getwellnessbooking', async (req, res) => {
    try {
        const tasks = await wellnessbooking.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

app.get('/getbookwellness/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const tasks = await wellnessbooking.find({ userId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});


// Additional
app.post('/bookadditional', async (req, res) => {
    try {
        const booking = new additionalbooking(req.body);
        await booking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Failed to create booking' });
    }
})

app.get('/getadditionalbooking', async (req, res) => {
    try {
        const tasks = await additionalbooking.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

app.get('/getbookadditional/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const tasks = await additionalbooking.find({ userId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});


app.listen(8000, (() => {
    console.log("port is 8000")
}))
                                                   