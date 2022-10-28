document.addEventListener('DOMContentLoaded', function (event) {

    if (window.DeviceOrientationEvent) {
        document.getElementById('notice').innerHTML = 'Working API detected';
        window.addEventListener('deviceorientation', (eventData) => {
            // gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
            const tiltLR = eventData.gamma;
            // beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
            const tiltFB = eventData.beta;
            // alpha: The direction the compass of the device aims to in degrees.
            const dir = eventData.alpha
            // Call the function to use the data on the page.
            deviceOrientationHandler(tiltLR, tiltFB, dir);
        }, false);
    } else {
        document.getElementById('notice').innerHTML = 'No API detected'
    };

    function deviceOrientationHandler(tiltLR, tiltFB, dir) {
        document.getElementById('tiltLR').innerHTML = Math.ceil(tiltLR);
        document.getElementById('tiltFB').innerHTML = Math.ceil(tiltFB);
        document.getElementById('direction').innerHTML = Math.ceil(dir);
        // Rotate the disc of the compass. - CSS transform
        const compassDisc = document.getElementById('compassDiscImg');
        compassDisc.style.transform = `rotate(${dir}deg)`;
        compassDisc.style.webkitTransform = `rotate(${dir}deg)`;
        compassDisc.style.MozTransform = `rotate(${dir}deg)`;
    }

});
function div1() {
    var cont = document.getElementById('mydiv1');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv2').style.display = 'none';
          document.getElementById('mydiv3').style.display = 'none';
          document.getElementById('mydiv4').style.display = 'none';
          document.getElementById('mydiv5').style.display = 'none';
          document.getElementById('mydiv6').style.display = 'none';
          document.getElementById('mydiv7').style.display = 'none';
          document.getElementById('mydiv8').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv2').style.display = 'block';
        }
      }
}

function div2() {
    var cont = document.getElementById('mydiv2');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv1').style.display = 'none';
          document.getElementById('mydiv3').style.display = 'none';
          document.getElementById('mydiv4').style.display = 'none';
          document.getElementById('mydiv5').style.display = 'none';
          document.getElementById('mydiv6').style.display = 'none';
          document.getElementById('mydiv7').style.display = 'none';
          document.getElementById('mydiv8').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv3').style.display = 'block';
        }
      }
}

function div3() {
    var cont = document.getElementById('mydiv3');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv1').style.display = 'none';
          document.getElementById('mydiv2').style.display = 'none';
          document.getElementById('mydiv4').style.display = 'none';
          document.getElementById('mydiv5').style.display = 'none';
          document.getElementById('mydiv6').style.display = 'none';
          document.getElementById('mydiv7').style.display = 'none';
          document.getElementById('mydiv8').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv4').style.display = 'block';
        }
      }
}

function div4() {
    var cont = document.getElementById('mydiv4');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv1').style.display = 'none';
          document.getElementById('mydiv2').style.display = 'none';
          document.getElementById('mydiv3').style.display = 'none';
          document.getElementById('mydiv5').style.display = 'none';
          document.getElementById('mydiv6').style.display = 'none';
          document.getElementById('mydiv7').style.display = 'none';
          document.getElementById('mydiv8').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv5').style.display = 'block';
        }
      }
}

function div5() {
    var cont = document.getElementById('mydiv5');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv1').style.display = 'none';
          document.getElementById('mydiv2').style.display = 'none';
          document.getElementById('mydiv3').style.display = 'none';
          document.getElementById('mydiv4').style.display = 'none';
          document.getElementById('mydiv6').style.display = 'none';
          document.getElementById('mydiv7').style.display = 'none';
          document.getElementById('mydiv8').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv6').style.display = 'block';
        }
      }
}

function div6() {
    var cont = document.getElementById('mydiv6');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv1').style.display = 'none';
          document.getElementById('mydiv2').style.display = 'none';
          document.getElementById('mydiv3').style.display = 'none';
          document.getElementById('mydiv4').style.display = 'none';
          document.getElementById('mydiv5').style.display = 'none';
          document.getElementById('mydiv7').style.display = 'none';
          document.getElementById('mydiv8').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv7').style.display = 'block';
        }
      }
}

function div7() {
    var cont = document.getElementById('mydiv7');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv1').style.display = 'none';
          document.getElementById('mydiv2').style.display = 'none';
          document.getElementById('mydiv3').style.display = 'none';
          document.getElementById('mydiv4').style.display = 'none';
          document.getElementById('mydiv5').style.display = 'none';
          document.getElementById('mydiv6').style.display = 'none';
          document.getElementById('mydiv8').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv8').style.display = 'block';
        }
      }
}

function div8() {
    var cont = document.getElementById('mydiv8');
    if (cont !== undefined) {
        if (cont.style.display == 'none') {
          cont.style.display = 'block';
          document.getElementById('mydiv1').style.display = 'none';
          document.getElementById('mydiv2').style.display = 'none';
          document.getElementById('mydiv3').style.display = 'none';
          document.getElementById('mydiv4').style.display = 'none';
          document.getElementById('mydiv5').style.display = 'none';
          document.getElementById('mydiv6').style.display = 'none';
          document.getElementById('mydiv7').style.display = 'none';
        } else {
          cont.style.display = 'none';
          document.getElementById('mydiv1').style.display = 'block';
        }
      }
}

function toggleVisibility(id) {
    var el = document.getElementById(id);
    var src = document.getElementById('');
    if (el.style.visibility == "visible") {
        el.style.visibility = "hidden";
    }
    else {
        el.style.visibility = "visible";
    }
}
 