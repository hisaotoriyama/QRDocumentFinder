var app = new Vue({
    el: "#app",
    data: {
        storeditems:"",
        neworiginaluser:"",
        newcontent:"",
        newstorageloc:"",
        newlatestuser:"",
        selectedid:"",
        selecteddocs:"",
        modifiedid:"",
        modifiedstorageloc:"",
        modifiedlatestuser:""
    },
    
    methods: {
        registerandqr:function(){
            // if (this.newName == "") return;
            const data = {
              "originaluser": this.neworiginaluser,
              "content": this.newcontent,
              "storageloc": this.newstorageloc,
              "latestuser":this.newlatestuser
            };
            const headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            };
            const d = {
            headers: headers,
            method: "POST",
            body: JSON.stringify(data) 
            };
            var self = this;
            fetch('/addstoreditems', d)
            .then((e) => {
                e.json().then((j) => {
                  console.log(j);
                this.qrcreation(j)
                })
              }).then((k)=>{this.readall();
              })
              ;
              ;
            this.neworiginaluser="";
            this.newcontent="";
            this.newstorageloc="";
            this.newlatestuser=""

        },

        qrcreation:function(i){
          console.log(i)
            let idqr = i.id;
            console.log(idqr);
            $('#idqr').html("");
            $('#idqr').qrcode({ width: 90, height: 90, text: idqr})
          },


        modify:function(){
          // alert("Modify")
          console.log("Modify")},

             reviseItem:function(){
      var self = this;
      self.revisedTodos = self.todos.filter((v)=> {
        return(v.revisedTodo!="");
        });
      Promise.all(
          self.revisedTodos.map((v) => {
            this.selectedrevise(v)
          })).then((res) => this.readItem()
      );
    },

    selectedmodify:function(v) {
      const data ={
        "id":this.modifiedid,
        // "originaluser": this.originaluser,
        // "content": this.content,
        "storageloc": this.modifiedstorageloc,
        "latestuser":this.modifiedlatestuser
      };
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(data) 
      };
      return fetch('/addstoreditem/'+v.id, d);
    },

        
    readall: function() {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
            headers: headers,
            method: "GET"
            };
            var self = this;
            fetch('/addstoreditems', d).then((e)=>{
            e.json().then((j) => {
                self.storeditems = j;
            })
            })
        },

    selectdocs: function() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const d = {
           headers: headers,
           method: "GET"
        };
        var self = this
        console.log(this.selectedid);
        fetch('/addstoreditems/:' + this.selectedid, d)
        .then((d) => {
           d.json().then((j) => {
             console.log(j);
             self.selecteddocs = j;
           })
          })
      },
        // computed:{
        // autoreadall:function(){
        //     readall()
        // }
        // },




    //     if (this.newproducer == "") return;
    //     const data = {
    //       "name": this.newproducer
    //     };
    //     const headers = {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     };
    //     const d = {
    //     headers: headers,
    //     method: "POST",
    //     body: JSON.stringify(data) 
    //     };
    //     var self = this;
    //     fetch('/producers', d).then((d)=>{
    //      return new Promise((res, rej) => {
    //        d.json().then((j) => {
    //          self.producers = j;
    //          res(); // resolve
    //        })
    //      })
    //    })
    //    return this.newproducer="";
    //   },

    //   deleteproducer: function() {
    //     var self = this;
    //     self.producertobedeleted = self.producers.filter((v)=> {
    //       return(v.tobedelisted===true);
    //       });
    //       Promise.all(
    //         self.producertobedeleted.map((v) => {
    //           this.selectedDelete(v)
    //         })).then((res) => this.readproducer());
    //       return this.producertobedeleted="";
    //       // readproducerを進めること
    //   },

    //   selectedDelete: function(deleteId) {
    //     const headers = {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     };
    //     const d = {
    //     headers: headers,
    //     method: "DELETE" 
    //     };
    //     fetch('/producers/'+deleteId.id, d);
    //   },
    //   rere:function(){
    //     console.log("rere");
    //   },

    //   reviseproducer: function() {
    //     var self = this;
    //     self.producertoberevised = self.producers.filter((v)=> {
    //       return(v.revisedname!="");
    //       });
    //       Promise.all(
    //         self.producertoberevised.map((v) => {
    //           this.namerevision(v)
    //         })).then((res) => this.readproducer());
    //       return this.producertoberevised ="";
    //       // readproducerを進めること
    //       console.log("revisedName Last")
    //   },

    //   namerevision: function(v) {
    //     const data = {
    //       name:v.revisedname
    //     }
    //     const headers = {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     };
    //     const d = {
    //     headers: headers,
    //     method: "PUT", 
    //     body: JSON.stringify(data) 
    //     };
    //     fetch('/producers/'+ v.id, d);
    }
  })