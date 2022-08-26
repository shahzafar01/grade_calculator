var box = new Vue({
    el: '#box',
    data: {
      math : '',
      english : '',
      urdu : '',
      physics : '',
      chemistry : '',
      sum : 0 ,
      percent : 0,
      grade : '-',
      result : '-'
    //   display : 'true'
    },

    computed :{
        percentage : function(){
            if(this.sum != 0){
                this.percent = (this.sum*100)/500;
                return this.percent;
            }
        } 
    },
    methods : {
        
        total:function(){


            this.sum = parseInt(this.math)+ parseInt(this.english) +  parseInt(this.urdu) +  parseInt(this.physics) + parseInt(this.chemistry);
            return this.sum;
        },
        grading : function(){

            if(this.percent >=90){
                return this.grade = 'A+';
            }
            if(this.percent >= 80){
               return this.grade = 'A';
            }
            else if(this.percent>=70){
                return this.grade = 'A';
            }
            else if(this.percent>=60){
               return this.grade = 'B';
            }
            else if(this.percent>=40){
                return this.grade = 'C';
            }
            else {
               return  this.grade = 'D';
            }
            
        },

        results : function(){
            if(this.percent >= 30)
            {
                this.result = 'Pass';
            }
            else{
                this.result = 'Fail';
            }
        }
    }


});
Footer
