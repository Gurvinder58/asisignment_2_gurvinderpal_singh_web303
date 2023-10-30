$(document).ready(function () {
    // Accordion functionality
    $('.accordion h3').click(function () {
        $(this).next('.accordion-panel').slideToggle().siblings('.accordion-panel:visible').slideUp();
    });

    // Tabbed section functionality
    $('.tabs a').click(function () {
        var tabId = $(this).attr('href');
        $('.tab-panel').hide();
        $(tabId).show();
        return false;
    });
});
