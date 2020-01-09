$(function(){   

});
//TODO
// Food class represents a food type, used to add new foods
class Food {
    constructor(name,histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan,valine){
        this.name =name;
        this.histidine = histidine;
        this.isoleucine = isoleucine;
        this.leucine = leucine;
        this.lysine = lysine;
        this.methionine = methionine;
        this.phenylalanine = phenylalanine;
        this.threonine = threonine;
        this.tryptophan = tryptophan;
        this.valine = valine;
    }
}
// UI Class Creates the tables
class UI{
    static displayFoods(){
        UI.addFoodToList(found);   
         
    }
    static addFoodToList(found){
        
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>100 gr</td>
        <td>${found.name}</td>        
        <td>${found.histidine}</td>
        <td>${found.isoleucine}</td>
        <td>${found.leucine}</td>
        <td>${found.lysine}</td>
        <td>${found.methionine}</td>
        <td>${found.phenylalanine}</td>
        <td>${found.threonine}</td>
        <td>${found.tryptophan}</td>
        <td>${found.valine}</td>
        `;
        foodItem.appendChild(row);
          
    }
}

function checkNotEmpty(){
    if (foodItem.hasChildNodes()){
        foodItem.removeChild(foodItem.childNodes[0]);   
        console.log('has child')
        return true;
    } else console.log('no child')

}

//Food search
var foodItem = document.querySelector('#food-item');
document.getElementById("searchButton").addEventListener("click", searchFoods);
function searchFoods(){
    $('#suggestions').empty()    
    var searchParam = document.getElementById('foodName').value;
    function isPresent (foodName){
        return foodName.name === searchParam;
    }
    if (StoredFoods.find(isPresent)) {
        checkNotEmpty();                                 
        window.found = StoredFoods.find(isPresent);        
        window.values = Object.values(found);
         UI.addFoodToList(found);  
    } else alert('Item not found');
    return found;      
    
}
//Suggestions panel
const suggestionsPanel = document.querySelector('.suggestions');

foodName.addEventListener('keyup', function() { 
    console.log(foodName.value)    
    $('#suggestions').empty() 
    var input = foodName.value;    
    const suggestions = StoredFoods.filter(function (foodLookup){
        return foodLookup.name.toLowerCase().startsWith(input)
    });
    suggestions.forEach(function(sugessted){
        const div  = document.createElement('div');
        div.innerHTML = sugessted.name;
        div.setAttribute('class', 'suggestion');
        suggestionsPanel.appendChild(div);
    });
    if (input === ''){$('#suggestions').empty()}
  });


function createSuggestions(sugessted){
    const div  = document.createElement('div');
    div.innerHTML = sugessted.name;
    div.setAttribute('class', 'suggestion');
    suggestionsPanel.appendChild(div);
}

document.addEventListener('click', function(e) {
    if (e.target.className === 'suggestion'){
        foodName.value = e.target.innerHTML;
    }
    $('#suggestions').empty()
});

//Find Complement
var complementList = document.querySelector('#complimentary-list');
document.getElementById("searchComplement").addEventListener("click", complement);


function complement(){
    findLowVal(values)
    console.log(aminoLowPos)
    console.log(determineLowest())
    $('#complimentary-list').empty() 
    var complement = [];
    if (determineLowest() === 'histidine' ){ window.complement = StoredFoods.filter(food => food.histidine > 40);  showComplements();}
    else if (determineLowest() === 'isoleucine' ){window.complement = StoredFoods.filter(food => food.isoleucine > 40); showComplements();}
    else if (determineLowest() === 'leucine' ){window.complement = StoredFoods.filter(food => food.leucine > 40); showComplements();}
    else if (determineLowest() === 'lysine' ){window.complement = StoredFoods.filter(food => food.lysine > 40); showComplements();}
    else if (determineLowest() === 'methionine' ){window.complement = StoredFoods.filter(food => food.methionine > 40); showComplements();}
    else if (determineLowest() === 'phenylalanine' ){window.complement = StoredFoods.filter(food => food.phenylalanine > 40); showComplements();}
    else if (determineLowest() === 'threonine' ){window.complement = StoredFoods.filter(food => food.threonine > 40); showComplements();}
    else if (determineLowest() === 'tryptophan' ){window.complement = StoredFoods.filter(food => food.tryptophan > 40); showComplements();}
    else if (determineLowest() === 'valine' ){window.complement = StoredFoods.filter(food => food.valine > 40); showComplements();}
        
}




function findLowVal(values){
    var lowest = 1000;    
    for (var i=1; i<10 ; i++){        
        if (lowest > values[i]){
        lowest = values[i];
        }
    }window.aminoLowPos = values.indexOf(lowest)
    console.log(lowest)
    console.log(aminoLowPos)
    return aminoLowPos;    
    
}


function determineLowest(){    
    if (aminoLowPos === 1){return 'histidine'}
    else if (aminoLowPos === 2){return 'isoleucine'}
    else if (aminoLowPos === 3){return  'leucine'}
    else if (aminoLowPos === 4){return 'lysine'}
    else if (aminoLowPos === 5){return 'methionine'}
    else if (aminoLowPos === 6){return 'phenylalanine'}
    else if (aminoLowPos === 7){return 'threonine'}
    else if (aminoLowPos === 8){return 'tryptophan'}
    else if (aminoLowPos === 9){return 'valine'}

}


//Build table of complements
function showComplements(){
    for (var i = 0; i < complement.length; i++){
        console.log(complement[i])
        const complementRow = document.createElement('tr');
        complementRow.innerHTML=`
        <td>100 gr</td>
        <td>${complement[i].name}</td>        
        <td>${complement[i].histidine}</td>
        <td>${complement[i].isoleucine}</td>
        <td>${complement[i].leucine}</td>
        <td>${complement[i].lysine}</td>
        <td>${complement[i].methionine}</td>
        <td>${complement[i].phenylalanine}</td>
        <td>${complement[i].threonine}</td>
        <td>${complement[i].tryptophan}</td>
        <td>${complement[i].valine}</td>
        `;
        complementList.appendChild(complementRow);
    }

}

//Clear Button 
document.getElementById("clearButton").addEventListener("click", clearAll);
function clearAll(){
    $('#suggestions').empty()
    $('#FoodName').empty()
    location.reload()
}

