    function SwapDivsWithClick() {
        d1 = document.getElementById('swapper-first');
        d2 = document.getElementById('swapper-other');
        if (d2.style.display == "none") {
            d1.style.display = "none";
            d2.style.display = "block";
        }
    }