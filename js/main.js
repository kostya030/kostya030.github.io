Vue.config.productionTip = false
var app = new Vue({
	el:'#app',
	data:{
		text1:"New onion varieties",
		products:[
			{id:1, title:'Богатырская сила',short_text:'Лук большой', image:'js/img/Богатырская сила.png',desc:'Желтый лук'},
			{id:2, title:'Кармен',short_text:'Лук средний', image:'js/img/Кармен.png',desc:'Красный лук'},
			{id:3, title:'Стурон',short_text:'Мелкий лук', image:'js/img/Стурон.png',desc:'Оранжевый лук'},
			{id:4, title:'Центурион',short_text:'Лук большой', image:'js/img/Центурион.png',desc:'Желтый лук'},
			{id:5, title:'Штутгартер Ризен',short_text:'Лук средний', image:'js/img/Штутгартер Ризен.png',desc:'Оранжевый лук'}
		],
		product:[{}],
		cart: [],
		contactFields: [
            { caption: 'Name', text: '' },
            { caption: 'Company Name', text: '' },
            { caption: 'Position', text: '' },
            { caption: 'City', text: '' },
            { caption: 'Country', text: '' },
            { caption: 'Telephone', text: '' },
            { caption: 'Email', text: '' },
            { caption: 'You are a', text: '' },
            { caption: 'If other, please specify', text: '' },
            { caption: 'You are interested in', text: '' },
        ],
         btnVisible: 0,
        formVisible: 1, 
},
mounted:function(){
        console.log(window.localStorage.getItem('prod'));
   },





methods:{
	addItem:function(id){
	window.localStorage.setItem('prod',id);
	},
	getProduct: function() {
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.product && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) 
                        this.product=this.products[i];
                        }
                    }
                }
	},
	addToCart:function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=1;
            }
        },

         checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1
            },
        getCart:function () {
            var storage = [];
            storage = localStorage.getItem('cart').split(',')
            for (i in this.products) {
                if (storage.indexOf(String(this.products[i].id)) != -1) {
                    this.cart.push(this.products[i])
                }
            }
        },
        removeFromCart: function (id) {
            var storage = [];
            storage = window.localStorage.getItem('cart').split(',')

            storage = storage.filter(storageId => storageId != id)
            window.localStorage.setItem('cart', storage.join())

            this.cart = this.cart.filter(item => item.id != id)
        },
        makeOrder: function () {
            localStorage.clear();
            this.cart.splice(0, this.cart.length)
            this.formVisible = 0
        }

},
mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
        }
})
fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
.then(res => res.json())
.then(data => {
    const Capitals = document.createElement('ul');
    Capitals.classList.add("category-items");
    data.forEach(function(item){
        const viewItem=document.createElement('li');
        viewItem.appendChild(document.createTextNode(item.capital));
        Capitals.appendChild(viewItem);            
    });
    document.getElementsByClassName("list")[0].getElementsByClassName("capitals")[0].appendChild(Capitals);     
    
});