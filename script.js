let friends = ['LUCY', 'ASHLEY', 'STEPHEN', 'EDDIE', 'ASHA'];

// loop through friends array and send names to console
for (let f = 0; f < friends.length; ++f) {
    console.log(friends[f] + ':')

    // For every friend in the friend array, you will want to console.log the descending chorus of this song 100 times. 
    // The lyric must include your friend's name, and must be grammatically correct when we get down to 1.  
    for (let i = 99; i > 0; --i) {
        if (i == 2) {
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[f] +
                ' strikes one out, clears it all out, ' + (i - 1) + ' line of code in the file');
        }
        else if (i == 1) {
            console.log(i + ' line of code in the file, ' + i + ' line of code; ' + friends[f] +
                ' strikes one out, clears it all out, no more lines of code in the file');
        }
        else {
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[f] +
                ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file');
        }
    }
}
