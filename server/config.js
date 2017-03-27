 const github = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    CALLBACK_URL: 'http://localhost:8080/api/auth/gh'
}

module.exports = github;
