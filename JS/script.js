"use strict";

$(document).ready(function() {
    $("#titreProfession").addClass("animate__animated animate__fadeInLeft");

    $('.nav-item').click(function() {
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-toggler').attr('aria-expanded', false);
    $('.navbar-collapse').removeClass('show');
    })
});
