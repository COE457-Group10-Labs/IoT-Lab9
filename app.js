
//use express module
var express = require("express");

//create an app
var app = express();

//set app port to listen to
app.set('port', process.env.PORT || 1234);
 
//set up middleware
app.use( express.static(__dirname + "/public") );


//-------------------------------------------

//body parser for POST method processing
var body_parser = require('body-parser');

//create urlEncoded parser (for application/x-www-form-urlencoded)
var urlEncodedParser = body_parser.urlencoded( {extended : false} );

//include nodemailer module
var nodemailer = require('nodemailer');
const e = require("express");


//-------------------------------------------
//respond to requests

//-----
app.get('/', function(req, res)
{
    console.log("GET request received for '/'.");
    returnContent = "<html> <body> <h3>Connected to Server successfully.</h3>";
    returnContent += " <p>Try accessing <a href='http://localhost:1234/Lab7_Beeline_HTML.html'>http://localhost:1234/Lab7_Beeline_HTML.html</a> to get to the Beeline Homepage.</p>";
    returnContent += " </body></html>";
    res.send(returnContent);
});

//-----
app.get('/Lab7_Beeline_HTML.html', function(req, res)
{
    console.log("GET request received for '/Lab7_Beeline_HTML'.");
});

//-----
// app.get('/process_contactForm', function(req, res)
// {
//     console.log("GET request received for '/process_ContactForm'.");

//     var returnContent = {
//         name: req.query.name,
//         email: req.query.email,
//         message: req.query.message
//     }

//     res.send(JSON.stringify(returnContent));
// });


//-------------------------------------------

//process form sent using POST
app.post('/process_contactForm', urlEncodedParser, function(req, res)
{
    console.log("POST request received for '/process_ContactForm'.\n");

    //retrieve POST request parameters and store them in variables (used later for email)
    var formContent = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    //create mail text (formatted POST request parameters)
    formContent_formatted = "\n Name: " + req.body.name + "\n Email: " + req.body.email + " \n Message: " + req.body.message;

    //create transporter object to access email account
    var transporter = nodemailer.createTransport( {
        service: 'gmail',
        auth: {
            user: 'myemail@gmail.com',   //changed after running for submission
            pass: 'mypassword'           //changed after running for submission
        }
    });

    //set mail options (content of email)
    var mailOptions = {
        from: 'myemail@gmail.com',  //changed after running for submission
        to: 'myemail@gmail.com',    //email receiver is same as sender (content of email will include form-filler's email)
        subject: formContent.name + ' has sent a message through the Beeline Contact Form!',
        text: formContent_formatted
    };

    //send the email
    transporter.sendMail(mailOptions, function(error, info) {   //callback function
        if (error)  //error occurred in sending mail
        {
            console.log(error);
            //res.send("An error occurred while mailing the form.");
            res.send("<html><head> <title>Form Mailing Error</title> </head><body> <h3>Form Mailing Error</h3> <p>An error occurred while mailing the form.</p> <a href='http://localhost:1234/Lab7_Beeline_HTML.html'>Go Back to Beeline Page</a> </body></html>");
        }
        else        //mail successfully sent
        {
            console.log('Email sent successfully!. Response: ' + info.response);
            res.send("<html><head> <title>Form Mailing Success</title> </head><body> <h3>Form Mailing Success!</h3> <p>Form was successfully mailed!</p> <a href='http://localhost:1234/Lab7_Beeline_HTML.html'>Go Back to Beeline Page</a> </body></html>");

        }
    });

});

//-------------------------------------------

//launch the server
app.listen( app.get('port'), function() {
    console.log("\nExpress started on http://localhost:" + app.get('port') + "; press Ctrl-C to ternminate.\n");
} )
