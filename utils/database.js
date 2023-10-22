import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const { connections } = await mongoose.connect("mongodb://localhost:27017", {dbName:"NextJSfired"})
        console.log(`Database is connect on ${connections[0].host}`)
    } catch (error) {
        console.log(`Error`, error)
}
}