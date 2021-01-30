document.addEventListener("DOMContentLoaded", function () {

    let singButton = document.createElement('button');
    let singButtonText = document.createTextNode('Sing!');
    singButton.appendChild(singButtonText);

    singButton.addEventListener('click', function () {
        let friendsArray = ['LUCY', 'ASHLEY', 'STEPHEN', 'EDDIE', 'ASHA'];

        // loop through friends array and send names to console
        for (let i = 0; i < friendsArray.length; ++i) {
            console.log(friendsArray[i] + ':')

            // For every friend in the friend array, you will want to console.log the descending chorus of this song 100 times. 
            // The lyric must include your friend's name, and must be grammatically correct when we get down to 1.  
            for (let j = 99; j > 0; --j) {
                if (j == 2) {
                    console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file');
                }
                else if (j == 1) {
                    console.log(j + ' line of code in the file, ' + j + ' line of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, no more lines of code in the file');
                }
                else {
                    console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friendsArray[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
                }
            }
            let friend = document.createElement('div');
            friend.className = 'friend';
            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(friendsArray[i]);
            h3.appendChild(h3Text);
            friend.appendChild(h3);
            document.body.appendChild(friend);
        }

    })

    document.body.appendChild(singButton);

})
