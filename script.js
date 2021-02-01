document.addEventListener("DOMContentLoaded", function () {
    const friendsArray = ['LUCY', 'ASHLEY', 'STEPHEN', 'EDDIE', 'ASHA'];

    // create a button that says 'Sing!'
    let singButton = document.createElement('button');
    let singButtonText = document.createTextNode('Sing!');
    singButton.appendChild(singButtonText);
    document.body.appendChild(singButton);

    // add event listener to button
    singButton.addEventListener('click', function () {
        // loop through friends array to create 5 new div elements with class name friend to be added to the page, one for each friend
        for (let i = 0; i < friendsArray.length; ++i) {
            let friend = document.createElement('div');
            friend.className = 'friend';
            // Put an h3 containing the friend's name in the div
            let h3 = document.createElement('h3');
            h3.textContent = (friendsArray[i] + ":");
            friend.appendChild(h3);

            // outer loop to create grammatically correct paragraphs for each song lyric line and put that paragraph in the friend div
            for (let j = 99; j > 0; --j) {
                let songParagraph = document.createElement('p');
                document.body.appendChild(friend);

                if (j == 2) {
                    songParagraph.textContent = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file');
                }

                else if (j == 1) {
                    songParagraph.textContent = (j + ' line of code in the file, ' + j + ' line of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, no more lines of code in the file');
                }

                else {
                    songParagraph.textContent = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');

                }

                friend.appendChild(songParagraph);
            }
            
        }

    })

   
})
