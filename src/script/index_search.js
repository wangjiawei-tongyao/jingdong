;
! function() {
    const search = document.querySelector('.search-inner div input');
    const list = document.querySelector('.search-inner div ul');

    function jd(data) {
        console.log(data.result);
        let arr = data.result;
        let str = '';
        for (let value of arr) {
            str += `
        <li>${value[0]}</li>
    `;
        }
        list.innerHTML = str;
    }
    search.oninput = function() {
        let scriptelement = document.querySelector('#scriptelement');
        if (scriptelement) {
            document.body.removeChild(scriptelement);
        }
        let cS = document.createElement('script');
        cS.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + this.value + '&_ksTS=1600326651998_256&callback=jd';
        cS.id = 'scriptelement';
        document.body.appendChild(cS);
    };
}()