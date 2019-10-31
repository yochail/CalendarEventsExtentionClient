// "use strict";

// console.log("Extension loading...");
// const jQuery = require("jquery");
// var MailParser = require("mailparser-mit").MailParser;
// const GmailFactory = require("gmail-js");
// const request = require('request');

// const $ = jQuery;

// const gmail = new GmailFactory.Gmail($);
// window.gmail = gmail;



// var CreateCalenderEventFromSelectedText = (event_obj) => {
//     if(event_obj.selectionText){
//         CreateCalenderEventFromSelectedText(event_obj.tab.title,event_obj.selectionText)
//     }
// }

// var CreateCalenderEventFromSelectedText = (mail_obj) =>{
//     if(obj.selectionText){
//         CreateCalenderEventFromSelectedText(mail_object.subject, mail_object.text)
//     }
// }

// var CreateCalenderEventFromSelectedText = (title,text) => {
//     request.post('http://127.0.0.1:5000/parse_text',{body:{title:title,text:text},json:true},(err, res, body)=>{
//         if (err) { return console.log(err); }
//         console.log(body);
//     });
// }


// gmail.observe.on("load", () => {
//     const userEmail = gmail.get.user_email();
//     console.log("Hello, " + userEmail + ". This is your extension talking!");

//     gmail.observe.on("view_email", (domEmail) => {
//         console.log("Looking at email:", domEmail);
//         let message_id  = domEmail.id
//         console.log(message_id)
//         // setup an event listener when the parsing finishes
//         var mailparser = new MailParser();    
//         mailparser.on("end", function(mail_object){
//             CreateCalenderEventFromSelectedText(mail_object)
//         });
        
//         // send the email source to the parser
        
//         gmail.get.email_source_async(message_id,(mime)=>{
//         mailparser.write(mime);
//         mailparser.end();
//         },
//         (err)=>console.log(err),false)
        


//     });

  
// });
