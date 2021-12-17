    'use strict';
    let inp = document.querySelector('#inp');
    let elem = document.querySelector('#elem');
    let rad1 = document.querySelector('#rad1');
    let rad2 = document.querySelector('#rad2');
    let rad3 = document.querySelector('#rad3');
    
    function func(data){
        if(data >= '03.21' && data <= '04.20'){return 'oven';}
        else if(data >= '04.21' && data <= '05.20'){return 'teles';}
        else if(data >= '05.21' && data <= '06.20'){return 'blizneci';}
        else if(data >= '06.21' && data <= '07.22'){return 'rak';}
        else if(data >= '07.23' && data <= '08.22'){return 'lev';}
        else if(data >= '08.23' && data <= '09.22'){return 'deva';}
        else if(data >= '09.23' && data <= '10.22'){return 'vesi';}
        else if(data >= '10.23' && data <= '11.22'){return 'skorpion';}
        else if(data >= '11.23' && data <= '12.21'){return 'strelec';}
        else if(data >= '12.22' && data <= '12.31' || data <= '01.19'){return 'kozerog';}
        else if(data >= '01.20' && data <= '02.19'){return 'vodoley';}
        else if(data >= '02.20' && data <= '03.20'){return 'ribi';}
    };
    let employees = [
        {   name:'oven', today:'Овны в начале месяца будут активны и смогут сполна реализовать свой потенциал.', tomorrow:'С самого начала месяца им будет сопутствовать удача в профессиональном плане.', afterTomorrow:'Овны в этом месяце смогут удачно проявить себя.',},
        {   name:'teles', today:'В начале месяца у Тельцов могут возникнуть недоразумения с окружающими и семейные конфликты. ',tomorrow:'Будьте аккуратны и следите за своими эмоциями.', afterTomorrow:'На работе же, наоборот, сопутствует удача и ожидается финансовое вознаграждение.',},
        {  name:'blizneci', today:'Прекрасный месяц для любых начинаний и капиталовложений.',tomorrow:'освятите последний месяц лета отдыху и восполнению сил.', afterTomorrow:'Возможен курортный роман и новые любовные отношения. ',},
        {   name:'rak', today:'плодотворно поработать в августе.',tomorrow:'Хорошее время для проведения времени с семьей и родственниками.', afterTomorrow:'После завтра вас жидёт приз',},
        {   name:'lev', today:'Для Льва август окажется самым благоприятным',tomorrow:'Все дела будут ладиться', afterTomorrow:'финансовое положение стабилизируется',},
        {   name:'deva', today:'начало месяца будет неудачным',tomorrow:'порадует сюрпризами и денежными', afterTomorrow:' Возможны проблемы со здоровьем.',},
        {   name:'vesi', today:'Можно сменить работу,',tomorrow:'место жительства или страну проживания.', afterTomorrow:'Возможно продвижение по карьерной лестнице ',},
        {   name:'skorpion', today:'У скорпиона конец месяца будет наполнен событиями', tomorrow:'Возможны срочные командировки.', afterTomorrow:'Посвятите последний месяц августа самообразованию.',},
        {   name:'strelec', today:'Стрельцам гороскоп на август предвещает удачу', tomorrow:' Воспользуйтесь случаем и завершите все начатые ранее дела.', afterTomorrow:' Благоприятный период для любых финансовых операций.',},
        {   name:'kozerog', today:'наиболее благоприятный месяц для козерога.', tomorrow:' Все дела будут ладиться', afterTomorrow:'неприятности будут обходить стороной.',},
        {   name:'vodoley', today:'Водолея гороскоп на август приготовил сюрпризы.', tomorrow:'Благоприятный период для всех начинаний. ', afterTomorrow:'забывайте об отдыхе и положительных эмоциях. ',},
        {   name:'ribi', today:'Рыбы целое лето активно работали ', tomorrow:'Посвятите время семейному отдыху', afterTomorrow:' но следите за своим здоровьем. ',},
    ];
    inp.addEventListener('keypress',function(event){
      elem.innerHTML = null;  
        if(event.key == 'Enter'){
            for(let employe of employees){
                if(employe.name == func(inp.value.substr(5)) && rad1.checked){
                    elem.innerHTML = employe.today;
                }
                else if(employe.name == func(inp.value.substr(5)) && rad2.checked){
                    elem.innerHTML = employe.tomorrow;
                }
                else if(employe.name == func(inp.value.substr(5)) && rad3.checked){
                    elem.innerHTML = employe.afterTomorrow;
                }
            }
        }
    })