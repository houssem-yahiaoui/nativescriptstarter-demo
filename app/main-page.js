
var frame = require('ui/frame');

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = {};
}
exports.pageLoaded = pageLoaded;

function showSnackbar() {
    
        var text = "Hi Tuts";
        var delay = 3500;
        var snackBar = android.support.design.widget.Snackbar;
        var snack = snackBar.make(frame.topmost().currentPage.android, text, delay);
        snack.show();
    
};
exports.showSnackbar = showSnackbar;
