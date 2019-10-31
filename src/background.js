"use strict";


const request = require('request');

chrome.contextMenus.create({
    onclick: (obj)=>CreateCalenderEventFromSelectedText(obj),
    title: "Calendar Event From Selection",
    contexts:["selection"], 
})

var CreateCalenderEventFromSelectedText = (event_obj,tab) => {
    if(event_obj.selectionText){
        CreateCalenderEvent({
            //title : tab.title,
            text : event_obj.selectionText,
            url : event_obj.pageUrl
        });
    }
}

var APP_SERVER = "https://calendar-events-test.herokuapp.com"
var END_POINT =  "/parse_text"


var CreateCalenderEvent = (event_obj) => {
    var options = {
        uri: APP_SERVER + END_POINT,
        method: 'POST',
        json: {
            title:event_obj.title || "", 
            text:event_obj.text,
            url:event_obj.url,
            timezone : Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      };

      request(options,(err, res, body)=>{
        if (err || res.statusCode != 200) { 
            console.log(err || res.statusMessage); }
        else{
            CreateCalendarEventLink(body)
        }
        
    });
}



var CreateCalendarEventLink = (event)=>{
    console.log(event)
    let base_url =  `https://calendar.google.com/calendar/r/eventedit?${event.title}`
    if(event.start_date && event.end_date){
        base_url += `&dates=${event.start_date}/${event.end_date}`
    }

    if(event.details){
        base_url += `&details=${event.details}`
    }

    if(event.location){
        base_url += `&location=${event.location}`
    }

    if(event.email){
        base_url += `&add=${event.email}`
    }

    chrome.windows.create({url:base_url});
}