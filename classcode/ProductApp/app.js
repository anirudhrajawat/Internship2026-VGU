const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const products = require("./data/products.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// NOTE: index/new/create/show routes were never shown open in the
// screenshots (only referenced by file name in the Explorer / folded
// in the minimap). Reconstructed here in the same style as the visible
// routes below so the app is runnable end-to-end.

app.get("/products", (req, res) => {
    res.render("product", { products });
});

app.get("/products/new", (req, res) => {
    res.render("new");
});

app.post("/products", (req, res) => {
    const { title, price, desc } = req.body;
    const id = (products.length + 1).toString();
    products.push({ id, title, price, desc });
    res.redirect("/products");
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    res.render("show", { product });
});

app.get("/products/:id/edit", (req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    res.render("edit", { product });
});

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { title, price, desc } = req.body;
    const product = products.find((item) => item.id == id);
    product.title = title;
    product.price = price;
    product.desc = desc;
    res.redirect("/products");
});

// --- The block below matches what was actually visible on screen. ---
// Across the screenshots this route was captured in three different
// in-progress states (array splice -> switched to findByIdAndDelete on
// an in-memory array, which won't actually work on a plain JS array -
// kept as-is since that's what was on screen, likely mid-refactor
// toward Mongoose in the original class):

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    // const product = products.find((item)=> item.id==id);
    // const ind = products.indexOf(product);

    // products.splice(ind,1);

    await products.findByIdAndDelete(id)

    res.redirect("/products")
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server run at port", PORT);
})
