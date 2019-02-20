window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.tab-text'),
        info = document.querySelector('.tabs'),
        tabContent = document.querySelectorAll('.content');

    function hideTabContent(index) {
        for (let i = index; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(index) {
        if (tabContent[index].classList.contains('hide')) {
            tabContent[index].classList.remove('hide');
            tabContent[index].classList.add('show');
        }
    }

    function selectTab(index) {
        tab[index].classList.add('selected');
    }

    function unselectTab() {
        let selectedTab = document.querySelector('.selected');
        if (selectedTab) {
            selectedTab.classList.remove('selected');
        }
    }

    // select first tab and show only first content
    selectTab(0);
    hideTabContent(1);

    info.addEventListener('click', function(event) {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('tab-text')) {
            unselectTab();
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    selectTab(i);
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
            target.classList.add('selected');
        }
    });
});