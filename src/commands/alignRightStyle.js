(function(wysihtml5) {
  
  var nodeOptions = {
    styleProperty: "textAlign",
    styleValue: "right"
  };

  wysihtml5.commands.alignRightStyle = {
    exec: function(composer, command) {
      return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", nodeOptions);
    },

    state: function(composer, command) {
      return wysihtml5.commands.formatBlock.state(composer, "formatBlock", nodeOptions);
    }
  };
})(wysihtml5);