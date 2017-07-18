const nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'celdjl@gmail.com',
            pass: 'djl544bb',            
        },
    }),
    EmailTemplate=require('email-templates').EmailTemplate,
    path=require('path'),
    Promise=require('bluebird');

let users = [
    {
        name: 'Luis',
        email: 'luis.m4a@gmail.com',

    },

    {
        name: 'Juan',
        email: 'luis.m4a@gmail.com',
        
    },

    {
        name: 'Carlos',
        email: 'luis.m4a@gmail.com',
        
    }, 
]

function sendEmail(obj){
    return transporter.sendMail(obj);
}

function loadTemplate(templateName, contexts)
{
    let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));

    return Promise.all(context.map((context)=> { 
        return new Promise((resolve, reject) => {
            template.render(context, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        } );
    }));
}

loadTemplate('welcome', users).then((results) => {
    console.log(JSON.stringify(results, null, 4));
});

