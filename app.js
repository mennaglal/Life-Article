const app = Vue.createApp({
  data() 
  {
    return {
      article: '',
    };
  },
  methods:{
    SetContent(){
    this.article=event.target.value;
    },
    updateTheVariable(value){
         this.article = value
        }
  }
});

app.mount('#article');
