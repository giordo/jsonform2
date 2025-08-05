 
    var mkcontent = "";

    $("#test-openmodal").click(function() {
        //cont = build();
        OpenDialogForSelectionAdmItem('Prodottogiordo', 'ciao', function() {});
    });

    function OpenDialogForSelectionAdmItem(title, content, callback) {
        var dlg = new BootstrapDialog({
            title: title,
            message: content,
            onshow: function(dialog){
                if($('.modal-dialog').length > 0){
                    w = parseInt($('.modal-dialog:eq(-1)').css('width')) - 50;
                    dialog.$modalDialog.css('width',  w + 'px');
                }
            },
            onshown: function(dialog) {
                if (document.activeElement) {
                    document.activeElement.blur();
                }  
                var tier = $('.bootstrap-dialog').length - 1;
                dialog.$modal.prev(".modal-backdrop")
                        .css("z-index", 1030 + tier * 30);
                dialog.$modal
                        .css("z-index", 1040 + tier * 30);

            },
            onhide: function(dialog){                
                dialog.$modal.html("");
            },
            buttons: [{
                label: 'Save',
                cssClass: 'btn-primary',
                id: 'btnSave',
                action: function (dialog) {
                    if (callback !== "") { callback(); }
                    dialog.close();
                }
            },{
                label: 'Close',
                cssClass: 'btn',
                id: 'btnClose',
                action: function (dialog) {                   
                    dialog.close();
                }
            }
            ]
        }).open();
    }