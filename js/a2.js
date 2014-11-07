$(document).ready(function(){
    

//FORM EFFECT 1:  Styles added to form field on focus out if value is present.
                $('#name').focusout(function(){
                if($('#name').val().length !== 0) {
                        $('.name-group').attr({
                                class: 'form-group name-group has-success'
                        }); // end attr
                        $('#name').css( "color", "black", 'important' );
                        $('#name').css( "background-color", "rgb(172, 232, 146)", 'important' );
                } 
        }); 


//FORM EFFECT 1:  Styles added to form field on focus out if value is present.
                $('#contact').focusout(function(){
                if($('#contact').val().length !== 0) {
                        $('.email-group').attr({
                                class: 'form-group email-group has-success'
                        }); // end attr
                        $('#contact').css( "color", "black", 'important' );
                        $('#contact').css( "background-color", "rgb(172, 232, 146)", 'important' );
                } 
        }); 

//FORM EFFECT 1:  Styles added to form field on focus out if value is present.
                $('#details').focusout(function(){
                if($('#details').val().length !== 0) {
                        $('.details-group').attr({
                                class: 'form-group details-group has-success'
                        }); // end attr
                        $('#details').css( "color", "black", 'important' );
                        $('#details').css( "background-color", "rgb(172, 232, 146)", 'important' );
                } 
        }); 



//FORM EFFECT 2:  Styles added if the form submitted without all values filled in.
//FILTERING EFFECT: The button selector is filtered with the submit ID.
                $('button').filter( "#submit" ).click(function(submit){
                if($('#name').val().length == 0) {
                        $('.name-group').attr({
                                class: 'form-group name-group has-error'
                        });  
                        $('#name').css( "color", "white", 'important' );
                        $('#name').css( "background-color", "rgb(255,64,64)", 'important' );
                        submit.preventDefault();
                } else if ($('#contact').val().length == 0) {
                        $('.email-group').attr({
                                class: 'form-group email-group has-error'
                        });  
                        $('#contact').css( "color", "white", 'important' );
                        $('#contact').css( "background-color", "rgb(255,64,64)", 'important' );
                        submit.preventDefault();
                } else if ($('#details').val().length == 0) {
                        $('.details-group').attr({
                                class: 'form-group details-group has-error'
                        });  
                        $('#details').css( "color", "white", 'important' );
                        $('#details').css( "background-color", "rgb(255,64,64)", 'important' );
                        submit.preventDefault();
                } else {
                        $('#myModal').modal();
                        submit.preventDefault();
                }

        });  


// CLICK EFFECT: Image source changed on click.
// IF/ELSE: Image source toggled through if else operator using ternary "?:" syntax.
                $("#motion").click(function(){
                        var src = ($(this).attr('src') === 'spiral.png') ? 'Images/dog.png' : 'spiral.png';
                        $(this).attr('src', src);
        });

//Infinite rotation on document load.  
                        var angle = 0;
                        var interval = setInterval(function(){
                        angle+=3;
                        $("#motion").rotate(angle);
                        },50
        );


// CLICK EFFECT: Infinite rotation turned off by clearing interval.
                $("#motion").click(function() {
                        clearInterval(interval);  
                        $("#motion").rotate(0)
        });



//HOVER EFFECT: Mouse over hover effect on name text.  Animated opacity and font size on text. Background image toggled through a adding and removing a class.
                $("#bracketed2").hover(function(){
                        $( this ).animate({opacity:'0.0'},"fast");
                        $("#charitylink")
                        .addClass('footerimage').css("background-position", "center");   
                        $( this ).animate({ fontSize : '+=1em' })
                        },function(){
                        $("#charitylink").removeClass('footerimage');
                        $( this ).animate({ fontSize : '-=1em' })
                        $( this ).animate({opacity:'1'},"fast");
        });



//OPTIONAL EFFECT 1: Adds background image through a adding and removing a class.
                $("#clickme").hover(function(){
                        $("#headsup")
                        .addClass('headerimage');   
                        $( this ).animate({right:'500px'});
                        },function(){
                        $("#headsup").removeClass('headerimage');
        });



//OPTIONAL EFFECT 2: When one thumbnail is hovered over, the other thumbnails fade out.
                $(".thumbnail").hover(function(){
                        $(this).siblings().animate({opacity:'0'},"slow");
                        },function(){
                         $(this).siblings().animate({opacity:'1'},"slow");
        });

  
}); //end ready


