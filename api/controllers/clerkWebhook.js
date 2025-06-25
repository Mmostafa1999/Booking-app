import User from "../models/User.js"; 
import {Webhook} from 'svix'

    const clerkWebhook = async (req, res) => {
        //  
        const wh = new Webhook(process.env.SVIX_SECRET);
        // getting header
        const headers = req.headers;
        const svixId = headers['svix-id'];
        const svixTimestamp = headers['svix-timestamp'];
        const svixSignature = headers['svix-signature'];
        // getting body
        const body = req.body;
        try {
            wh.verify(body, svixId, svixTimestamp, svixSignature);
            const user = await User.findOne({ clerkId: body.data.id });
            if (!user) {
                const newUser = new User({
                    clerkId: body.data.id,
                    username: body.data.username,
                    email: body.data.email_addresses[0].email_address,
                });
                await newUser.save();
            }
            res.status(200).json({ message: 'User has been created successfully' });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Invalid request' });
        }
    }

    export default clerkWebhook