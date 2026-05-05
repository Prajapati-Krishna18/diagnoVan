const nodemailer = require("nodemailer");

/**
 * Nodemailer Transporter Configuration
 * Uses Gmail SMTP with App Password for sending reset emails.
 * Requires EMAIL_USER and EMAIL_PASS in .env
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send password reset email to admin
 * @param {string} toEmail - Admin's email address
 * @param {string} resetLink - Full reset URL with token
 */
const sendResetEmail = async (toEmail, resetLink) => {
  const mailOptions = {
    from: `"DiagnoVan Support" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "🔐 DiagnoVan – Password Reset Request",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
            🚐 DiagnoVan
          </h1>
          <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Password Reset Request</p>
        </div>

        <!-- Body -->
        <div style="padding: 32px 24px;">
          <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
            Hello Admin,
          </p>
          <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
            We received a request to reset your password. Click the button below to set a new password. This link is valid for <strong>15 minutes</strong>.
          </p>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 28px 0;">
            <a href="${resetLink}" 
               style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 36px; border-radius: 8px; font-size: 15px; font-weight: 600; letter-spacing: 0.3px;">
              Reset Password
            </a>
          </div>

          <!-- Fallback Link -->
          <p style="color: #64748b; font-size: 13px; line-height: 1.6; margin: 20px 0 0; word-break: break-all;">
            If the button doesn't work, copy and paste this link into your browser:<br/>
            <a href="${resetLink}" style="color: #3b82f6;">${resetLink}</a>
          </p>

          <!-- Divider -->
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 28px 0;" />

          <!-- Security Note -->
          <p style="color: #94a3b8; font-size: 12px; line-height: 1.5; margin: 0;">
            ⚠️ If you did not request this password reset, please ignore this email. Your password will remain unchanged.
          </p>
        </div>

        <!-- Footer -->
        <div style="background: #f8fafc; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 11px; margin: 0;">
            © ${new Date().getFullYear()} DiagnoVan. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Password reset email sent to: ${toEmail}`);
  } catch (error) {
    console.error(`❌ Failed to send password reset email to: ${toEmail}`);
    console.error(error);
    throw error; // Rethrow to be caught by controller
  }
};

module.exports = { transporter, sendResetEmail };
