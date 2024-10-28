import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    const createContact = new Contact({
      fullname: fullname,
      email: email,
      message: message,
    });

    await createContact.save();
    res.status(201).json({ message: "Response submitted successfully" });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal server errror" });
  }
};
