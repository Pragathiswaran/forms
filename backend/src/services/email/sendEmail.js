import emailServer from './emailServer.js'

const sendEmail = async (receiver, otp) => {
    try {
        const info = emailServer.sendMail({
            from: process.env.MAIL_USER,
            to: receiver,
            subject:"Amazon User Verification",
            html: `<h2>Dear Pragathiswaran</h2>
            <p>${otp} is the otp to verify your amazon account</p>`
        })

        console.log("Email sent successfully")
        return info
    } catch (error) {
        console.log(error)
        throw null
    }
}

export default sendEmail