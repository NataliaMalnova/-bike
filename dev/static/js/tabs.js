class Tabs {
    constructor(selector, options) {
        let defaultOptions = {
            mobileWidth: 991,
            startTab: 0,
            classNameTitleTab: 'tabs-title-item',
            classNameContentItemTabs: 'tabs-item',
            classNameTitleTabMobile: 'tabs-title-mobile',
            classNameContentItemMobile: 'tabs-item__content',
            classNameActiveTitle: 'active',
            classNameActiveTab: 'show',
        };

        this.options = Object.assign(defaultOptions, options);

        this.tabs = document.getElementById(selector);

        this.tab = this.tabs.querySelectorAll('.' + this.options.classNameTitleTab);
        this.tabContent = this.tabs.querySelectorAll('.' + this.options.classNameContentItemTabs);
        this.tabMobile = this.tabs.querySelectorAll('.' + this.options.classNameTitleTabMobile);

        this.event();
    }

    event() {

        if (this.tabs) {
            this.show(this.options.startTab);

            window.addEventListener('resize', () => {
                if (document.documentElement.clientWidth > this.options.mobileWidth) {
                    let k = 1;
                    this.tabContent.forEach(elem => {
                        if (elem.classList.contains(this.options.classNameActiveTab)) {
                            k = 0
                        }
                    })

                    if (k) this.show(0);
                }
            });

            this.tabs.addEventListener('click', (event) => {
                let target = event.target;

                if (
                    target.className == this.options.classNameTitleTabMobile ||
                    target.parentElement.className == this.options.classNameTitleTabMobile
                ) {
                    for (let i = 0; i < this.tab.length; i++) {
                        if (target == this.tabMobile[i] || target.parentElement == this.tabMobile[i]) {

                            if (this.tab[i].classList.contains(this.options.classNameActiveTitle)) {
                                this.tabContent[i].classList.remove(this.options.classNameActiveTab);
                                this.tab[i].classList.remove(this.options.classNameActiveTitle);
                                this.tabContent[i].querySelector('.' + this.options.classNameContentItemMobile).style.setProperty('max-height', 0 + 'px');
                            } else {
                                for (let k = 0; k < this.tab.length; k++) {
                                    this.tabContent[k].classList.remove(this.options.classNameActiveTab);
                                    this.tab[k].classList.remove(this.options.classNameActiveTitle);
                                    this.tabContent[k].querySelector('.' + this.options.classNameContentItemMobile).style.setProperty('max-height', 0 + 'px');
                                }

                                this.tabContent[i].classList.add(this.options.classNameActiveTab);
                                this.tab[i].classList.add(this.options.classNameActiveTitle);

                                let height = this.tabContent[i].querySelector('.' + this.options.classNameContentItemMobile).scrollHeight;
                                this.tabContent[i].querySelector('.' + this.options.classNameContentItemMobile).style.setProperty('max-height', height + 'px');
                            }

                            break;
                        }
                    }
                }

                if (target.className == this.options.classNameTitleTab || target.parentElement.className == this.options.classNameTitleTab) {
                    for (let i = 0; i < this.tab.length; i++) {
                        if (target == this.tab[i] || target.parentElement == this.tab[i]) {
                            this.show(i);
                            break;
                        }
                    }
                }
            })
        }
    }

    show(item) {
        if (this.tabContent[item].classList.contains('hide')) {
            this.hide(0);

            this.tab[item].classList.add(this.options.classNameActiveTitle);
            this.tabContent[item].classList.add(this.options.classNameActiveTab);

            let height = this.tabContent[item].querySelector('.' + this.options.classNameContentItemMobile).scrollHeight;
            this.tabContent[item].querySelector('.' + this.options.classNameContentItemMobile).style.setProperty('max-height', height + 'px');
        }
    }

    hide(item) {
        for (var i = item; i < this.tabContent.length; i++) {
            this.tabContent[i].classList.remove(this.options.classNameActiveTab);
            this.tab[i].classList.remove(this.options.classNameActiveTitle);
            this.tabContent[i].querySelector('.' + this.options.classNameContentItemMobile).style.setProperty('max-height', 0 + 'px');
        }
    }
}