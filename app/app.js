const App = function app() {
    const contents = document.getElementsByClassName('contribution-content');
    hideContents(contents);
    const itemList = document.getElementById('item-list');

    itemList.addEventListener('click', (event) => {
        const targetId = event.target.id;
        const targetContentId = findContentIdBy(targetId);
        if (targetContentId === 0) {
            return false;
        }
        showContent(targetContentId);
    });

    function findContentIdBy(targetId) {
        let targetContentId = 0;
        for (let i = 1; i <= 4; i++) {
            const itemId = 'item' + i;
            if (itemId === targetId) {
                targetContentId = i;
            }
        }
        return targetContentId;
    }

    function hideContents(contents) {
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }

    }

    function showContent(targetContentId) {
        for (let i = 0; i < 4; i++) {
            if (i + 1 === targetContentId) {
                contents[i].style.display = '';
            } else {
                contents[i].style.display = 'none';
            }
        }

    }

};

new App();