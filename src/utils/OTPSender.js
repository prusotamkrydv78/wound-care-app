
import nodemailer from 'nodemailer';
export const SendOTP = async (email, OTP) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    try {
        await transporter.sendMail({
            from: `Wound Care`,
            to: email,
            html: `<h2>Your OTP is</h2> <div style="max-width: 500px; margin: auto; font-family: 'Segoe UI', sans-serif; background: #f9f9f9; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
     <div style="padding: 24px; background: #4f46e5; color: white;">
    <h2 style="margin: 0; font-size: 24px;">🔐 One-Time Password (OTP)</h2> 
     </div>
  
    <div style="padding: 32px 24px; text-align: center;">
    <p style="font-size: 16px; margin-bottom: 24px; color: #444;">
      Here's your magical 6-digit OTP ✨ valid for the next 5 minutes:
    </p>

    <div style="font-size: 36px; font-weight: bold; letter-spacing: 6px; background: #e0e7ff; padding: 16px 0; border-radius: 12px; color: #1e3a8a;">
      ${OTP}
        </div>   
     </div>
 </div>
`,
        });

    } catch (error) {
        console.error('Error sending OTP:', error);
        throw new Error('Failed to send OTP');
    }
}