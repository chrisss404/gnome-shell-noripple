const Layout = imports.ui.layout;
const Ripples = imports.ui.ripples;

function init(extensionMeta) {
    // do nothing here    
}

function enable() {
    Layout.HotCorner.prototype.rippleAnimationBackup = Layout.HotCorner.prototype.rippleAnimation;
    Layout.HotCorner.prototype.rippleAnimation = function() {};
    Layout.HotCorner.prototype._rippleAnimationBackup = Layout.HotCorner.prototype._rippleAnimation;
    Layout.HotCorner.prototype._rippleAnimation = function() {};
    Ripples.Ripples.prototype._animRippleBackup = Ripples.Ripples.prototype._animRipple;
    Ripples.Ripples.prototype._animRipple = function(ripple, delay, duration, startScale, startOpacity, finalScale) {};
}

function disable() {
    Layout.HotCorner.prototype.rippleAnimation = Layout.HotCorner.prototype.rippleAnimationBackup;
    Layout.HotCorner.prototype._rippleAnimation = Layout.HotCorner.prototype._rippleAnimationBackup;
    Ripples.Ripples.prototype._animRipple = Ripples.Ripples.prototype._animRippleBackup;
}

