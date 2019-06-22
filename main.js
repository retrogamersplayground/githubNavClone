function hamburgerClick() {
    console.log('hamburger click');

    document.getElementById('hamburger').style.display = 'none';

    document.getElementById('x').style.display = 'inline-block';

    document.getElementById('sideNav').style.display = 'block';

    document.getElementById('signUp').style.display = 'none';

}

function xClick() {
    console.log('x click');

    document.getElementById('hamburger').style.display = 'inline-block';

    document.getElementById('x').style.display = 'none';

    document.getElementById('sideNav').style.display = 'none';

    document.getElementById('signUp').style.display = 'inline-block';

}


let dropdown1 = 0;
    if(dropdown1 === 0) {
        function dropDown1() {
            if(dropdown1 === 0) {
            console.log('whyGithub2 clicked');
            document.querySelector('.ulWhyGithub2').style.display = 'block';
            dropdown1 = 1;
        } else {
            document.querySelector('.ulWhyGithub2').style.display = 'none';
            dropdown1 = 0;
        }
    }
}

let dropdown2 = 0;
    if(dropdown2 === 0) {
        function dropDown2() {
            if(dropdown2 === 0) {
            console.log('xxplore2 clicked');
            document.querySelector('.ulExplore2').style.display = 'block';
            dropdown2 = 1;
        } else {
            document.querySelector('.ulExplore2').style.display = 'none';
            dropdown2 = 0;
        }
    }
}

let dropdown3 = 0;
    if(dropdown3 === 0) {
        function dropDown3() {
            if(dropdown3 === 0) {
            console.log('priing2 clicked');
            document.querySelector('.ulPricing2').style.display = 'block';
            dropdown3 = 1;
        } else {
            document.querySelector('.ulPricing2').style.display = 'none';
            dropdown3 = 0;
        }
    }
}
