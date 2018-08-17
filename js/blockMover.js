function blockMover(blockNo) {
  "use strict";

  $("#"+blockNo).each(function() {
      $(this).parent().prepend(this);
  });
}