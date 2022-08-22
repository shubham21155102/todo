const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
var items = [];
var workItems = [];
app.set('view engine', 'ejs');
//So this line of code tells our app which is generated using Express to use EJS as its view engine.
app.get("/", function(req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    day = today.toLocaleDateString("en-US", options);
    // if (currentDay == 0 || currentDay == 1) {
    //     day = "weekend";
    // } else {
    //     day = "weekday";
    // }
    res.render("index", { listTitle: day, newlistitems: items });
});
app.post("/", function(req, res) {
    var item = req.body.newitems;
    // console.log(items);
    // console.log(req .body);
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});
app.get("/work", function(req, res) {
    res.render("index", { listTitle: "Work List", newlistitems: workItems });
});
// app.post("/work", function(req, res) {
//     var item = req.body.newitems;
//     // console.log(items);
//     items.push(item);
//     res.redirect("/work");
// })
app.post("/about", function(req, res) {
    // var item = req.body.newitems;
    // // console.log(items);
    // console.log(req .body);
    // if (req.body.list === "Work") {
    //     workItems.push(item);
    //     res.redirect("/work");
    // } else {
    //     items.push(item);
    //     res.redirect("/");
    // }
    res.redirect("/about");
});
app.get("/about", function(req, res) {
    res.render("about");
});
app.listen(process.env.PORT || 3000, function() {
    console.log("Sab Thik Hai");
})