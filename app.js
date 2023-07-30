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
    }
  }
});

app.mount('#article');
