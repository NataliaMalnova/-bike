document.addEventListener("DOMContentLoaded", () => {
    const tabs = new Tabs('tabs-basic', {
        mobileWidth: 768,
        startTab: 0,
    });

    const addFeature = () => {
        const wrap = document.querySelectorAll('.add-charact');

        if (wrap.length == 0) return;

        wrap.forEach(elem => {
            const input = elem.querySelector('input');
            const btn = elem.querySelector('button');

            if (!input || !btn) return;

            btn.addEventListener('click', () => {
                if (input.value.split(' ').join('') == '')
                    input.classList.add('error')
                else input.classList.remove('error')
            });

            input.addEventListener('input', () => {
                if (input.value.split(' ').join('') != '')
                    input.classList.remove('error')
            })
        })
    }

    addFeature();
})