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