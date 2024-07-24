import { signUpAdmin } from "../../controllers/user.js";

export default async (req, res) => {
    // console.log(req.body);
    try {
        const { name, email, password } = req.body;
        await signUpAdmin({ name, email, password });
        res.redirect("/admin/login");
    } catch (error) {
        res.redirect("/admin/signup");
    }
};