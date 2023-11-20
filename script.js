function NextSong1() {
    var first = document.getElementById("first-song");
    var second = document.getElementById("second-song");

    //  clicking the first button
    if(document.getElementById('first-button')) {
        first.style.display = 'none';
        second.style.display = 'block';
    }
}
    
function NextSong2() {
    var second = document.getElementById('second-song');
    var third = document.getElementById('third-song');
    //  clicking the second button
    if(document.getElementById('second-button')) {
        second.style.display = 'none';
        third.style.display = 'block';
    }
}

function NextSong3() {
    var third = document.getElementById('third-song');
    var fourth = document.getElementById('fourth-song');
    //  clicking the third button
    if(document.getElementById('third-button')) {
        third.style.display = 'none';
        fourth.style.display = 'block';
    }
}


function NextSong4() {
    var fourth = document.getElementById('fourth-song');
    var fifth = document.getElementById('fifth-song');
    //  clicking the second button
    if(document.getElementById('fourth-button')) {
        fourth.style.display = 'none';
        fifth.style.display = 'block';
    }
}
    // clicking the first button
    // if(document.getElementById("first-song")) {
    //     // if the first song div is not visible
    //     if (document.getElementById('first-song').style.display == 'none') {
    //         document.getElementById('first-song').style.display = 'block';
    //         document.getElementById('second-song').style.display = 'none';
    //     } else {
    //         document.getElementById('first-song').style.display = 'none';
    //         document.getElementById('second-song').style.display = 'block';
    //     }
    // }
// }