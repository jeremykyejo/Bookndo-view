//Time interval for carousel
$(document).ready(function() {

    $('.carousel').carousel({
        interval: 6000
    });

    //on page load focus on the first input field
    $("#addressInput").focus();


    //repeat the slideshow
    $('#myCarousel').carousel('cycle');

    //only allow ticking once on checkbox
    $("input:checkbox").click(function() {
        if ($(this).is(":checked")) {
            var group = "input:checkbox[name='" + $(this).attr("name") + "']";
            $(group).prop("checked", false);
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }
    });

    //prompt alert on send button click
    $("#send").click(function() {
        alert("You are Awesome, Thanks!");
    });

    //hide tooltip on page load
    $('.tooltip-hide').tooltip('hide');



 var showPopover = function () {
        $(this).popover('show');
    }, hidePopover = function () {
        $(this).popover('hide');
    };

$('.popover-dismiss').popover({
  trigger: 'manual',
  animation: false
})

.focus(showPopover)
.blur(hidePopover)
.hover(showPopover, hidePopover);



    //show current selected on dropdown
    $(".dropdown-menu li a").click(function() {
        var selText = $(this).text();
        $(this).parents('.dropdown').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    
    //timepicker
    $('.hours_open, .hours_close').timepicker({
        'timeFormat': 'h:i A',
        'step': 5,
        'scrollDefault': 'now'
    });

    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    //check current date and disable previous
    var checkin = $('#dpd1').datepicker({
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);

        }
        checkin.hide();
        $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        checkout.hide();
    }).data('datepicker');


    //this will open the next hours close after selecting the hours open
    $(".hours_open").on('selectTime', function() {
        $(this).closest('tr').find('.hours_close').timepicker('show');
    });


    //highlight if clicked and left empty
    $('.hours_open').blur(function() {
        if ($(this).val().length == 0) {
            $(this).parents('td').addClass('danger');

        } //else remove the class
        else {
            $(this).parents('td').removeClass('danger');
        }
    });

    $('.hours_close').blur(function() {
        if ($(this).val().length == 0) {
            $(this).parents('td').addClass('danger');
            //adding the required to the hours close class
            $('.hours_close').prop('required', true);

            //$('table').prepend( "<p>Test</p>" );

        } else {
            $(this).parents('td').removeClass('danger');
            //$('.hours_close').hide();
        }
    });


    //show tab
    $(function() {
        $('#myTab a:first').tab('show');
    });



    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');

    $('.nav-tabs a').click(function(e) {
        $(this).tab('show');
        var scrollmem = $('body').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });



    //on submit button clicked, submit the form
    $("#submit1").click(function() {
        $("#form10").submit();

    });



    //this if for booking details
    $(function() {

        var active = true;



        $('#accordion').on('show.bs.collapse', function() {
            if (active) $('#accordion .in').collapse('hide');
        });

        $('#updateBookingDetails').click(function() {
            if (active) $('#accordion .in').collapse('hide');
        });
    });



    $("#mytable #checkall").click(function() {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function() {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function() {
                $(this).prop("checked", false);
            });
        }
    });




});





