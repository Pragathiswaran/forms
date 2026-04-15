import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)

        console.log("✅ MongoDB connected with Mongoose")
    } catch (err) {
        console.log("❌ DB connection error",err)
        process.exit(1)
    }
}

export default connectDB