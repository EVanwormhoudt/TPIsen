let components_data = [
    {idComp:'0', name:'Farine', needRecipe:'1', price:'1.50', type:'food', buyInBulk:'1', percentUsed:'0.10'},
    {idComp:'1', name:'Sucre', needRecipe:'1', price:'2', type:'food', buyInBulk:'1', percentUsed:'0.10'},
    {idComp:'2', name:'Sel', needRecipe:'1', price:'1', type:'food', buyInBulk:'1', percentUsed:'0.01'},
    {idComp:'3', name:'Flocons d\'avoine', needRecipe:'1', price:'1.65', type:'food', buyInBulk:'1', percentUsed:'0.10'},
    {idComp:'4', name:'Pépites de Chocolats', needRecipe:'1', price:'5', type:'food', buyInBulk:'1', percentUsed:'0.15'},
    {idComp:'5', name:'Noix', needRecipe:'1', price:'6', type:'food', buyInBulk:'1', percentUsed:'0.05'},
    {idComp:'6', name:'Bocal', needRecipe:'0', price:'1.50', type:'recipe', buyInBulk:'1', percentUsed:'1'},
    {idComp:'7', name:'Huile végétale', needRecipe:'1', price:'3', type:'food', buyInBulk:'1', percentUsed:'0.03'},
    {idComp:'8', name:'Cire d\'abeille', needRecipe:'1', price:'8', type:'food', buyInBulk:'1', percentUsed:'0.10'},
    {idComp:'9', name:'Alcool à désinfecter', needRecipe:'1', price:'4.70', type:'medicine', buyInBulk:'0', percentUsed:'0.15'},
    {idComp:'10', name:'Flacon', needRecipe:'0', price:'1', type:'recipe', buyInBulk:'1', percentUsed:'1'},
    {idComp:'11', name:'Papier recyclé', needRecipe:'0', price:'4', type:'stuff', buyInBulk:'0', percentUsed:'0.25'},
    {idComp:'12', name:'Colle repositionable', needRecipe:'1', price:'12', type:'stuff', buyInBulk:'0', percentUsed:'0.05'},
    {idComp:'13', name:'Ciseaux', needRecipe:'0', price:'2', type:'tool', buyInBulk:'0', percentUsed:'0'},
    {idComp:'14', name:'Planche de bois', needRecipe:'0', price:'4', type:'stuff', buyInBulk:'0', percentUsed:'0'},
    {idComp:'15', name:'Clous', needRecipe:'1', price:'5', type:'stuff', buyInBulk:'0', percentUsed:'0.0028'},
    {idComp:'16', name:'Marteau', needRecipe:'0', price:'10', type:'tool', buyInBulk:'0', percentUsed:'0'},
    {idComp:'17', name:'Manche de Pull', needRecipe:'0', price:'0', type:'junk', buyInBulk:'1', percentUsed:'1'},
    {idComp:'18', name:'Feuilles aromatiques', needRecipe:'1', price:'6', type:'food', buyInBulk:'1', percentUsed:'0.10'},
    {idComp:'19', name:'Eau de vie', needRecipe:'1', price:'14', type:'alcohol', buyInBulk:'1', percentUsed:'1'},
    {idComp:'20', name:'Eau', needRecipe:'1', price:'0', type:'food', buyInBulk:'1', percentUsed:'1'},
    {idComp:'21', name:'Cristaux de soude', needRecipe:'1', price:'13', type:'medicine', buyInBulk:'1', percentUsed:'0.20'},
    {idComp:'22', name:'Savon de Marseille', needRecipe:'1', price:'9.60', type:'medicine', buyInBulk:'1', percentUsed:'0.05'},
    {idComp:'23', name:'Vanille', needRecipe:'1', price:'4', type:'food', buyInBulk:'1', percentUsed:'0.5'},
    {idComp:'24', name:'Canelle', needRecipe:'1', price:'3', type:'food', buyInBulk:'1', percentUsed:'0.5'},
];

let getComponent=(function(){
    return{
        getName : function (id){ return components_data[id].name},
        getNeedRecipe : function(id){ return components_data[id].needRecipe},
        getPrice : function(id){return components_data[id].price},
        getType : function(id){return components_data[id].type},
        getBuyInBulk : function(id){return components_data[id].buyInBulk},
        getPercentUsed : function(id){return components_data[id].percentUsed}
    }
})();
