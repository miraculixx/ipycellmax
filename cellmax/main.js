/**
 * (c) 2015 miraculixx at github.com
 * 
 * IPython Zenmode for cells. Maximize current cell and hide
 * all other cells for maximum concentration.
 */

/**
 * toggle zen mode
 */
function toggleZenMode() {
    $("#notebook-container").css('height', '100%');
    var cell = $('.cell.selected');
    var maximized = $('.cell.maximized');
    if(maximized.length) {
        console.log('cellmax: maximized');
        cell.css('width', '');
        cell.css('height', '');
        cell.removeClass('maximized');
        $(".cell.unselected").show();
        cell.get(0).scrollIntoView();
    } else {
        console.log('cellmax: minimized');
        $(".cell.unselected").hide();
        cell.css('width', '100%');
        cell.css('height', '100%');
        cell.addClass('maximized');
    }
}

/**
 * install cellmax
 * 
 * use the maximize button or Esc - m
 */
define(function() {
    console.log('cellmax: initialized');
    IPython.toolbar.add_buttons_group([{
        'label' : 'Enter/Exit Zenmode',
        'icon' : 'fa-expand',
        'callback' : function() {
            toggleZenMode();
        },
        'id' : 'start_zenmode'
    }, ]);
    IPython.keyboard_manager.command_shortcuts.add_shortcut('m', {
        help : 'maximize cell',
        help_index : 'm',
        handler : function (event) {
          toggleZenMode();
          return false;
        }}
      );
});