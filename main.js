$('.js-list.list-wrapper').each(function(index){
    $(this).find('.list-card');
    var mainTitle = $(this).find(".list-header-name.mod-list-name.js-list-name-input").val()
    var modifiedMainTitle = mainTitle+' '+$(this).find('.list-card').length;
    var numberOfTickets = $(this).find('.list-card:not(:has(.list-card-title:contains("LIMIT: 8"),.list-card-title:contains("LIMIT: 7"),.list-card-title:contains("Ikonka = skończyłem, karteczka gotowa do testów"),.list-card-title:contains("Ikonka 1 = działa, Ikonka 2 = są błędy i trzeba poprawić")))').length;
    var numberOfBindedTickets = $(this).find('.list-card > .list-card-details > .list-card-members:parent').length;
    var numberOfReadyTickets = $(this).find('.list-card:not(:has(.list-card-title:contains("Ikonka = skończyłem, karteczka gotowa do testów"))) > .list-card-stickers-area > .stickers > .sticker > img[alt="check"]').length;
    var numberOfCheckedTickets = $(this).find('.list-card:not(:has(.list-card-title:contains("Ikonka 1 = działa, Ikonka 2 = są błędy i trzeba poprawić"))) > .list-card-stickers-area > .stickers > .sticker > img[alt]').filter('[alt="thumbsup"],[alt="thumbsdown"]').length;
    var numberOfImportantTickets = $(this).find('.list-card:not(:has(.list-card-title:contains("Ikonka = skończyłem, karteczka gotowa do testów"))) > .list-card-stickers-area > .stickers > .sticker > img[alt="warning"]').length;
    const limitRegex = /.*LIMIT: (\d+)/g;
    var limitValue = $(this).find('.list-card > .list-card-details > .list-card-title').filter(function(){
        return limitRegex.test($(this).text());
    });
    if(limitValue.length>0){
        limitValue = limitRegex.exec($(limitValue).text())[1];
    } else {
        limitValue = Number.MAX_SAFE_INTEGER;
    }
    $(this).find(".list-header-name.mod-list-name.js-list-name-input").after($('<div class="DP_ticket_counter'+index+'">Wszystkie karty: '+numberOfTickets+'</div>').css("color","gray"));
    $(this).find(".list-header-name.mod-list-name.js-list-name-input").after($('<div class="DP_ticket_counter'+index+'">Przydzielone tickety: '+numberOfBindedTickets+'</div>').css("color","gray"));
    $(this).find(".list-header-name.mod-list-name.js-list-name-input").after($('<div class="DP_ticket_counter'+index+'">Ważne tickety": '+numberOfImportantTickets+'</div>').css("color","crimson").css("display",(numberOfImportantTickets===0)?'none':'initial'));
    $(this).find(".list-header-name.mod-list-name.js-list-name-input").after($('<div class="DP_ticket_counter'+index+'">Zrobione Tickety: '+numberOfReadyTickets+'</div>').css("color","DarkGreen"));
    $(this).find(".list-header-name.mod-list-name.js-list-name-input").after($('<div class="DP_ticket_counter'+index+'">Sprawdzone: '+numberOfCheckedTickets+'</div>').css("color","blue").css("font-weight","bold"));
    if(limitValue<numberOfTickets){
        $('.DP_ticket_counter'+index).css('color','red');

    }
});