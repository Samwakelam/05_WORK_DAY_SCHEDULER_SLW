
$(document).ready(function(){

    // GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    // 1. create a <p> tag with an element for the date.
    // 2. GET and insert the current date in the page.
    // 3. display the DynamicsCompressorNode, Date, month, year 

    // const todayDate = new Date();
    // const dayName = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    // const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const todayDateParagraph = $("#today-date");
    // todayDateParagraph.html(dayName[todayDate.getDay()] + " " + todayDate.getDate() + " " + monthName[todayDate.getMonth()] + " " + todayDate.getFullYear());
    todayDateParagraph.html(moment().format('MMMM Do YYYY'));

    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours
    // 1. create time blocks

    // const currentHour = todayDate.getHours();
    const currentHour = moment().hours();
    console.log("currentHour = ", currentHour);
    
    let contentString = [];
    $(".content").each(function() {
        contentString.push($(this).attr("id"));
    });
    console.log("contentString array = ", contentString);

    for(i = 0; i<contentString.length; i++) {
      let contentNumber = parseInt(contentString[i]);
      let contentIndex = i
      console.log("content array = ", contentNumber);
      console.log("content Index = ", contentIndex);

      if (contentNumber == currentHour) {
          console.log(contentNumber,"current hour");
          console.log("current id value = ", contentString[i]);
           let currentIdValue = contentString[i];
            $('#' + currentIdValue).addClass("current"); 
          
      } else if (contentNumber < currentHour) {
          console.log(contentNumber , "less");
          let pastIdValue = contentString[i];
            $('#' + pastIdValue).addClass("past"); 
         
      } else if(contentNumber > currentHour) {
          console.log(contentNumber, "more");
      };

    };    


    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    
    // WHEN I click into a time block
    // THEN I can enter an event
    
    // WHEN I click the save button for that time block
    // 1. get an event listener for the click of a button
    let saveButton = $("button").click(function() {
        console.log("a button has been clicked");
        // 2.which button was it? 
        console.log($(this).attr("id"));
       let buttonId = $(this).attr("id");
       
        // 3. get and save content from div
        if (buttonId ==="save-8"){
          let contentInputValue8 = $("#8").text();
          console.log("value out of 8am = ", contentInputValue8);
          localStorage.setItem("entry 8", contentInputValue8);
        }

        if (buttonId ==="save-9") {
            let contentInputValue9 = $("#9").text();
            console.log("value out of 9am = ", contentInputValue9);
            localStorage.setItem("entry 9", contentInputValue9);
        }

        if (buttonId ==="save-10") {
            let contentInputValue10 = $("#10").text();
            console.log("value out of 10am = ", contentInputValue10);
            localStorage.setItem("entry 10", contentInputValue10);
        }

        if (buttonId ==="save-11"){
            let contentInputValue11 = $("#11").text();
            console.log("value out of 11am = ", contentInputValue11);
            localStorage.setItem("entry 11", contentInputValue11);
        }

        if (buttonId ==="save-12"){
            let contentInputValue12 = $("#12").text();
            console.log("value out of 12pm = ", contentInputValue12);
            localStorage.setItem("entry 12", contentInputValue12);
        }

        if (buttonId ==="save-13"){
            let contentInputValue13 = $("#13").text();
            console.log("value out of 1pm = ", contentInputValue13);
            localStorage.setItem("entry 13", contentInputValue13);
        }

        if (buttonId ==="save-14"){
            let contentInputValue14 = $("#14").text();
            console.log("value out of 2pm = ", contentInputValue14);
            localStorage.setItem("entry 14", contentInputValue14);
        }

        if (buttonId ==="save-15"){
            let contentInputValue15 = $("#15").text();
            console.log("value out of 3pm = ", contentInputValue15);
            localStorage.setItem("entry 15", contentInputValue15);
        }

        if (buttonId ==="save-16"){
            let contentInputValue16 = $("#16").text();
            console.log("value out of 4pm = ", contentInputValue16);
            localStorage.setItem("entry 16", contentInputValue16);
        }

        if (buttonId ==="save-17"){
            let contentInputValue17 = $("#17").text();
            console.log("value out of 5pm = ", contentInputValue17);
            localStorage.setItem("entry 17", contentInputValue17);
        }

        if (buttonId ==="save-18"){
            let contentInputValue18 = $("#18").text();
            console.log("value out of 6pm = ", contentInputValue18);
            localStorage.setItem("entry 18", contentInputValue18);
        }
  
      });

    // 4. on load of page, get from storage and enter in content div. 

    if (localStorage.getItem("entry 8") !== null ) {
         let showEntry8 = localStorage.getItem("entry 8");
        contentInputValue8 = $("#8").text(showEntry8);
    };
    
    if (localStorage.getItem("entry 9") !== null ) {
        let showEntry9 = localStorage.getItem("entry 9");
       contentInputValue9 = $("#9").text(showEntry9);
    };

   if (localStorage.getItem("entry 10") !== null ) {
      let showEntry10 = localStorage.getItem("entry 10");
      contentInputValue10 = $("#10").text(showEntry10);
    };

    if (localStorage.getItem("entry 11") !== null ) {
        let showEntry11 = localStorage.getItem("entry 11");
        contentInputValue11 = $("#11").text(showEntry11);
    };

    if (localStorage.getItem("entry 12") !== null ) {
        let showEntry12 = localStorage.getItem("entry 12");
        contentInputValue12 = $("#12").text(showEntry12);
      };
        
    if (localStorage.getItem("entry 13") !== null ) {
        let showEntry13 = localStorage.getItem("entry 13");
        contentInputValue13 = $("#13").text(showEntry13);
    };

    if (localStorage.getItem("entry 14") !== null ) {
        let showEntry14 = localStorage.getItem("entry 14");
        contentInputValue14 = $("#14").text(showEntry14);
    };

    if (localStorage.getItem("entry 15") !== null ) {
        let showEntry15 = localStorage.getItem("entry 15");
        contentInputValue15 = $("#15").text(showEntry15);
    };

    if (localStorage.getItem("entry 16") !== null ) {
        let showEntry16 = localStorage.getItem("entry 16");
        contentInputValue16 = $("#16").text(showEntry16);
    };

    if (localStorage.getItem("entry 17") !== null ) {
        let showEntry17 = localStorage.getItem("entry 17");
        contentInputValue17 = $("#17").text(showEntry17);
    };

    if (localStorage.getItem("entry 18") !== null ) {
        let showEntry18 = localStorage.getItem("entry 18");
        contentInputValue18 = $("#18").text(showEntry18);
      };
    
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist






});