import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ojasvi Bhargava',
        email: 'ojasvib@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Priya Sharma',
        email: 'priyasharma@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Shivam',
        email: 'shivam@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users