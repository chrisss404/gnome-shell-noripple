const Layout = imports.ui.layout;

function init(extensionMeta) {
    // do nothing here    
}

function enable() {
    Layout.HotCorner.prototype.rippleAnimationBackup = Layout.HotCorner.prototype.rippleAnimation;
    Layout.HotCorner.prototype.rippleAnimation = function() {};
}

function disable() {
    Layout.HotCorner.prototype.rippleAnimation = Layout.HotCorner.prototype.rippleAnimationBackup;
}
