document.addEventListener("DOMContentLoaded", function () {
    // create a button that says 'Sing!'
    let singButton = document.createElement('button');
    let singButtonText = document.createTextNode('Sing!');
    singButton.appendChild(singButtonText);

    // add event listener to button
    singButton.addEventListener('click', function () {
        let friendsArray = ['LUCY', 'ASHLEY', 'STEPHEN', 'EDDIE', 'ASHA'];

        // loop through friends array to create 5 new div elements with class name friend to be added to the page, one for each friend
        for (let i = 0; i < friendsArray.length; ++i) {
            let friend = document.createElement('div');    
            friend.className = 'friend';
            // Put an h3 containing the friend's name in the div
            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(friendsArray[i] + ":");
            h3.appendChild(h3Text);
            friend.appendChild(h3);

            // outer loop to create grammatically correct paragraphs for each song lyric line and put that paragraph in the friend div
            for (let j = 99; j > 0; --j) {
                if (j == 2) {
                    songLyrics = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file');

                    let songParagraph = document.createElement('p');
                    let songLyricsText = document.createTextNode(songLyrics);
                    songParagraph.appendChild(songLyricsText);
                    friend.appendChild(songParagraph);
                }

                else if (j == 1) {
                    songLyrics = (j + ' line of code in the file, ' + j + ' line of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, no more lines of code in the file');

                    let songParagraph = document.createElement('p');
                    let songLyricsText = document.createTextNode(songLyrics);
                    songParagraph.appendChild(songLyricsText);
                    friend.appendChild(songParagraph);

                }
                else {
                    songLyrics = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');

                    let songParagraph = document.createElement('p');
                    let songLyricsText = document.createTextNode(songLyrics);
                    songParagraph.appendChild(songLyricsText);
                    friend.appendChild(songParagraph);

                }
            }

            document.body.appendChild(friend);
        }

    })

    document.body.appendChild(singButton);

})
