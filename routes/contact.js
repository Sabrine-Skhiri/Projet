const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// ROUTES

// Add contact -
router.post("/add", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = new Contact({ name, email, phone });
        await newContact.save();
        res.status(200).send({ msg: "Contact added successfully", newContact });
    } catch (error) {
        res.status(400).send({ msg: "Cannot add contact", error });
    }
});

// Get all contacts 
router.get("/all", async (req, res) => {
    try {
        const listContacts = await Contact.find();
        res.status(200).send({ msg: "Contacts retrieved successfully", listContacts });
    } catch (error) {
        res.status(400).send({ msg: "Cannot get contacts", error });
    }
});

// Get one contact by ID
router.get("/:id", async (req, res) => {
    try {
        const contactToGet = await Contact.findById(req.params.id);
        if (!contactToGet) {
            return res.status(404).send({ msg: "Contact not found" });
        }
        res.status(200).send({ msg: "Contact retrieved successfully", contactToGet });
    } catch (error) {
        res.status(400).send({ msg: "Cannot get contact", error });
    }
});

// Delete contact by ID
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).send({ msg: "Contact not found" });
        }
        res.status(200).send({ msg: "Contact deleted successfully" });
    } catch (error) {
        res.status(400).send({ msg: "Cannot delete contact", error });
    }
});

// Edit contact by ID
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await Contact.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        if (!updatedContact) {
            return res.status(404).send({ msg: "Contact not found" });
        }
        res.status(200).send({ msg: "Contact updated successfully", updatedContact });
    } catch (error) {
        res.status(400).send({ msg: "Cannot update contact", error });
    }
});

module.exports = router;
