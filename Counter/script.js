$(document).ready(function() {
    $('.flipTimer').flipTimer({ 
    
    // count up or countdown
    direction: 'down', 
    
    // the target <a href="https://www.jqueryscript.net/time-clock/">date</a>
    date: 'April 26, 2024 08:30:30', 
    
    // callback works only with direction = "down"
    callback: function() { alert('times up!'); }
    
    });
    });
