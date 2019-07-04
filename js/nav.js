window.onload = function() {
    var doms = document.querySelectorAll('#list>li');
    var dom0 = document.querySelectorAll('#list>li')[0];
    // console.log('doms:', doms);
    for (var i = 0; i < doms.length; i++) {
        // var n = i;
        doms[i].onclick = function() {
            // console.log(n);
            if (this == dom0) {
                document.getElementById('main').style.marginTop = 100;
                window.scrollTo(0, 0);
                console.log(123);
            }
            if (!(this.hasAttribute('class'))) {
                // console.log(456);
                for (var j = 0; j < doms.length; j++) {
                    if (doms[j].hasAttribute('class')) {
                        doms[j].removeAttribute('class')
                        this.setAttribute('class', 'active');
                    }
                }
            }

        }
    }

}