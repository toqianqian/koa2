import mongoose from './../dbHelper'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: String,
    age: Number
}, { collection: 'Users'})  // 需要加上collection指定表名，不然查出的数据是[]，mongoose的梗

export default mongoose.model('Users', UserSchema)


