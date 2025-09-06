const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const userDataList = [
  
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { 
    pagetitle: "หน้าหลัก", 
    welcomeMessage: "ยินดีต้อนรับสู่เว็บไซต์ของเรา!" });
});

app.get("/form", (req, res) => {
  res.render("form", { 
    pagetitle: "หน้าฟอร์ม" });
});

app.get("/data", (req, res) => {
  res.render("data", { 
    pagetitle: "หน้าแสดงข้อมูล", dataList: userDataList });
});

app.post("/submit", (req, res) => {
  const newEntry = {
    name: req.body.name,
    email: req.body.email,
    date: new Date().toLocaleString()
  };

  userDataList.push(newEntry);

  res.redirect("/data");
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
