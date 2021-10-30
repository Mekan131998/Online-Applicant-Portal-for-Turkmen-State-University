var hunarler={
    mm:['matematika', 'amaly matematika we informatika'],
    fiz:['fizika', 'astronomiýa','radiofizika we elektronika'],
    inf:['maglumat ulgamlary we tehnologiýalary'],
    bio:['biologiýa'],
    him:['himiýa'],
    earth: ['geografiýa', 'kartografiýa', 'meteorologiýa', 'ekologiýa'],
    psih: ['psihologiýa'],
    taryh: ['taryh', 'arheologiýa'],
    filosof:['fiolosofiýa'],
    ylahyýet:['ylahyyet'],
    syyasat:['gündogary öwreniş'],
    dil:['türkmen dili we edebiýaty', 'iňlis dili we edebiýaty',
    'nemes dili we edebiýaty', 'fransuz dili we edebiýaty', 
    'italýan dili we edebiýaty', 'arap dili we edebiýaty', 
    'türk dili we edebiýaty', 'pars dili we edebiýaty', 'hytaý dili we edebiýaty'],
    zurnalist:['žurnalistika'],
    hukuk:['hukuk'],
    bakalawr:['pedagogika bilimi(matematika we informatika)', 'pedagogika bilimi (informatika we bilimde maglumat tehnologiýalary']
}

var main=document.getElementById('validationCustom44');
var sub=document.getElementById('validationCustom45');

main.addEventListener('change', function(){
    var selected_option=hunarler[this.value];

    while(sub.options.length>0){
        sub.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){
        let option=new Option(el, el);
        sub.appendChild(option);
    });
});