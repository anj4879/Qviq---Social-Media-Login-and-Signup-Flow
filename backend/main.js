const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
const QRCode = require('qrcode');

const generateQRCode = async (userInfo) =>  {
  return QRCode.toDataURL(JSON.stringify(userInfo))
    .then(url => {
      return url;
    });
}

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  phoneNo: String,
  password: String,
});

const UserCred = mongoose.model("UserCred", userSchema);
mongoose
  .connect(
    "mongodb+srv://hs7992476139:KOSgem8tijMk0Nws@cluster0.whwoemb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
    app.listen(8080, () => {
      console.log("Server Running on PORT 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserCred.findOne({ email });
    
        if (!user) {
          return res.status(400).send('User not found');
        }

    
        if (password !== user.password) {
          return res.status(400).send('Invalid password');
        }


        const QRCode = await generateQRCode(user)

        console.log(QRCode)

        res.send({
            "QRCode" : QRCode
        });
      } catch (error) {
        res.status(500).send('Error logging in: ' + error.message);
      }
});

app.post("/register", async (req, res) => {
  try {
    const newUser = new UserCred(req.body);
    await newUser.save();
    res.send("Data received and stored");
  } catch (error) {
    res.status(500).send("Error storing data: " + error.message);
  }
});


app.post("/qr-code", async (req, res) => {
    try {
        const QRCode = await generateQRCode(req.body)
        res.send({
            "QRCode" : QRCode
        });
    } catch (error) {
      res.status(500).send("Error storing data: " + error.message);
    }
  });