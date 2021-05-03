let info = {};


function sendInfo() {
    let form = document.querySelector('.active form');

    for (let i = 0; i < form.length; i++) {

        if (form[i].type !== 'button') {

            switch (form[i].type) {
                case 'text':
                    if (form[i].name === 'H'){
                        let feats = {};
                        let features = document.querySelectorAll("input[name='H']");

                        for (let j = 0; j < features.length; j++) {
                            feats[features[j].dataset.feature] = features[j].value;
                        }
                        info.features = feats;
                        i += features.length - 1;
                    }
                    break;
                case 'radio':
                    if (form[i].checked) {
                        info[form[i].name] = form[i].value;
                    }
                    break;
                case 'checkbox':
                    info[form[i].name] = !!form[i].checked;
                    break;
                case 'select-one':
                    info[form[i].name] = form[i].options[form[i].selectedIndex].text;
                    break;
                default:
                    info[form[i].name] = form[i].value;
            }

        }
    }
    console.log(info)
}